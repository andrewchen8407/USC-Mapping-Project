/* App.tsx */

// React imports
import {
  forwardRef,
  useEffect,
  useState,
} from "react";

// Core modules
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Color from "@arcgis/core/Color.js";
import Extent from "@arcgis/core/geometry/Extent.js";
import Graphic from "@arcgis/core/Graphic.js";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol.js";
import Viewpoint from "@arcgis/core/Viewpoint.js";

// Layers
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";

// Widgets
import Expand from "@arcgis/core/widgets/Expand.js";
import Search from "@arcgis/core/widgets/Search.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Home from "@arcgis/core/widgets/Home.js";

// Widget-specific sources
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource.js";

// Local imports
import { LODs } from "./lodData.tsx";
import {
  baseLayerArrays,
  referenceLayerArrays,
} from "./layerArrays.tsx";

/**
 * Props dictate how the Esri map program shall be run
 */
type EsriMapProps = {
  /**
   * Each index signifies a unique use case; see layerArrays.tsx for indices
   */
  layerSubsetIndex: number;
  /**
   * Boolean variable toggle should be true if the Esri map functions as a
   * full-width component, or false if it is an embedded applet
   */
  toggle: boolean;
};

const EsriWithRef = forwardRef<HTMLDivElement, EsriMapProps>(function EsriMap(
  props: EsriMapProps, ref
) {
  // Creates a reference to the element used as the map container
  const [view, setView] = useState<any>();

  const createMapView = (mapRef: any) => {
    if (!ref) {
      return null;
    }

    const map = new Map({
      // Perpetual map layer underlies all layers, whether base or reference
      basemap: "streets-vector",  // Not to be confused with "base layer"
    });

    const mapView = new MapView({
      container: mapRef.current,
      map: map,
      center: [-118.236, 34.104],  // Centers on Los Angeles County, California
      constraints: {
        lods: LODs,
        rotationEnabled: false,
      },
      spatialReference: {
        wkid: 102100,
      },
      zoom: 11,
      highlightOptions: {
        color: new Color([255, 0, 125, 1]),  // Magenta highlight
        fillOpacity: 0.2,
        haloOpacity: 0.9,
      },
    });
    mapView.popup.dockOptions = {
      position: "bottom-left",
    };

    /**
     * Geographic extent defined by latitudinal and longitudinal minima and
     * maxima restricts the viewable portion of the map, as well as the
     * possible SearchSource search results to addresses therein
     */
    const searchExtent = {
      geometry: new Extent({
        xmin: -1.3241839395280045E7,
        ymin: 3867766.4935850976,
        xmax: -1.3096082368346158E7,
        ymax: 4139926.214140869,
        spatialReference: {
          wkid: 102100,
        },
      }),
    };

    /**
     * Red pin icon appears on a queried address or place
     */
    const resultSymbol = new PictureMarkerSymbol({
      url: "/redpin.png",
      width: 30,
      height: 41,
      xoffset: 2,
      yoffset: 14,
    });

    /**
     * Red highlight appears on a queried parcel
     */
    const fillSymbol = new SimpleFillSymbol({
      color: [255, 106, 137, 0.3],
      style: "solid",
      outline: {  // Autocasts as new SimpleLineSymbol()
        color: [255, 0, 0, 1],
        width: "4px",
      }
    });

    const searchWidget = new Search({
      view: mapView,
      includeDefaultSources: false,
      sources: [
        new LocatorSearchSource({
          url: "https://geocode.gis.lacounty.gov/geocode/rest/services/CAMS_Locator/GeocodeServer",
          name: "LA County CAMS",
          placeholder: "Find address",
          resultSymbol: resultSymbol,
          singleLineFieldName: "SingleLine",
          popupEnabled: false,
        }),
        new LocatorSearchSource({
          url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          name: "Esri World Geocoder",
          placeholder: "Find address or place",
          resultSymbol: resultSymbol,
          singleLineFieldName: "SingleLine",
          filter: searchExtent,
          popupEnabled: false,
          outFields: ["Addr_type"],
        }),
        new LayerSearchSource({
          layer: new FeatureLayer({
            url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
          }),
          name: "Assessor Identification Numbers",
          placeholder: "Find AIN (ten digits)",
          resultSymbol: props.toggle ? fillSymbol : resultSymbol,
          popupEnabled: false,
          outFields: ["*"],
          searchFields: ["AIN", "APN"],
        }),
      ],
    });

    // Adds effects to the Popup's ActionButtons 
    reactiveUtils.on(
      () => mapView.popup,
      "trigger-action",
      (event) => {
        if (event.action.id === "get-parcel-detail") {
          const attributes = mapView.popup.selectedFeature.attributes;
          // TODO: The URL to which this button leads should be the URL of the
          // parcel details website
          window.open(
            "https://portal.assessor.lacounty.gov/parceldetail/" +
            `${attributes.AIN}`,  // Use attributes.APN if you need the hyphens
            "_blank",
          );
        }
      }
    );

    let lastQuery = "";
    let lastSourceIndex = 0;
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const initialQuery = params.get("query") || "";
    const initialSourceIndex = parseInt(params.get("sourceIndex") || "0", 10);

    const updateURLParameters = (query: string, sourceIndex: number) => {
      // If the new query and source index match the original, ensure that the
      // extent and zoom are valid before calling goTo
      if (query === lastQuery && sourceIndex === lastSourceIndex) {
        const extent = searchWidget.view?.extent;
        const zoom = searchWidget.view?.zoom;
        if (extent && zoom) {
          searchWidget.view.goTo({
            target: extent,
            zoom: zoom,
          });
          console.log("1");
        }
      }
      else {
        // Deletes the query string from the URL if an empty query is issued
        if (query.trim() === "") {
          params.delete("query");
          params.delete("sourceIndex");
        }
        // Otherwise, updates the URL with the new query string
        else {
          params.set("query", query);
          params.set("sourceIndex", sourceIndex.toString());
        }
        window.history.pushState({}, "", url.toString());
        lastQuery = query;
        lastSourceIndex = sourceIndex;
      }
    };

    const handleSearchComplete = (event: any) => {
      const query = event.searchTerm;
      // Using the "All" search source option normally sets sourceIndex to -1;
      // in that case, obtains the source index of the search source
      // that's actually used
      const sourceIndex = event.activeSourceIndex !== -1
        ? event.activeSourceIndex
        : searchWidget.sources.findIndex(source => source === event.results[0].source);

      const resultExtent = event.results[0]?.extent;

      // Check if the current query and source index match the ones in the URL
      if (query === initialQuery && sourceIndex === initialSourceIndex) {
        // Zoom to the query result without changing the URL
          console.log("2");
        if (resultExtent) {
          searchWidget.view.goTo(resultExtent);
        }
      } else {
        // Update the URL and zoom to the query result
          console.log("3");
        updateURLParameters(query, sourceIndex);
        if (resultExtent) {
          searchWidget.view.goTo(resultExtent);
        }
      }
    };
    searchWidget.on("search-complete", handleSearchComplete);
    reactiveUtils.watch(
      () => mapView.popup.visible,
      (isVisible) => {
        mapView.graphics.forEach((graphic: Graphic) => {
          graphic.visible = !isVisible;
        });
      }
    );

    const homeWidget = new Home({
      view: mapView,
    });

    // After the webpage and all map data finish loading, if there is a query
    // string appended to the URL and the query corresponds to a valid search
    // result, the map view will zoom in on the queried location
    mapView.when(() => {
      if (initialQuery) {
        searchWidget.activeSourceIndex = initialSourceIndex;
        searchWidget.search(initialQuery).then((response: any) => {
          const firstResult = response.results[0]?.results[0];

          if (firstResult) {
            // Check if geometry is a point; if not, get its centroid
            let targetGeometry = firstResult.feature.geometry;
            if (targetGeometry.type !== "point") {
              targetGeometry = targetGeometry.extent.center;
            }

            let vp = new Viewpoint({
              targetGeometry: targetGeometry,
              scale: LODs[15].scale,
            });
            homeWidget.viewpoint = vp;
          }
        });
      }
    });

    const searchExpand = new Expand({
      // https://developers.arcgis.com/calcite-design-system/icons/
      expandIcon: "search",
      collapseIcon: "x",
      expandTooltip: "Show Search Bar",
      collapseTooltip: "Hide Search Bar",
      view: mapView,
      content: searchWidget,
    });

    // Create the Base Layer with sublayers
    const baseLayer = new GroupLayer({
      layers: baseLayerArrays[props.layerSubsetIndex],
      title: "Base Layers",
      visibilityMode: "exclusive",
    });
    map.add(baseLayer);

    // Create the Reference Layer with sublayers
    const referenceLayers = new GroupLayer({
      layers: referenceLayerArrays[props.layerSubsetIndex],
      title: "Reference Layers",
      visibilityMode: "independent",
    });
    map.add(referenceLayers);

    const layerList = new LayerList({
      view: mapView,
    });
    const layerListExpand = new Expand({
      view: mapView,
      content: layerList,
      expandIcon: "layers",
      expandTooltip: "Show Layer List",
      collapseIcon: "x",
      collapseTooltip: "Hide Layer List",
    });

    const legend = new Legend({
      view: mapView,
      layerInfos: [
        {
          layer: referenceLayers,  // Shows only the reference layers
          title: ""  // Ensures that the title "Reference layers" is hidden
        }
      ],
    });
    const legendExpand = new Expand({
      view: mapView,
      content: legend,
      expandIcon: "legend",
      expandTooltip: "Show Legend",
      collapseIcon: "x",
      collapseTooltip: "Hide Legend",
    });

    const locateWidget = new Locate({
      view: mapView,
    });

    const scaleBar = new ScaleBar({
      view: mapView,
      style: "ruler",
      unit: "imperial",
    });

    // If variable toggle is true, shows the Search widget, but hides
    // the New Tab button; the opposite is true if toggle is false

    mapView.ui.add(layerListExpand, "top-left");
    if (props.toggle) {
      mapView.ui.add(searchExpand, "top-left");
    }
    mapView.ui.add(homeWidget, "top-left");
    mapView.ui.add(locateWidget, "top-left");
    mapView.ui.add(legendExpand, "top-right");
    mapView.ui.add(scaleBar, "bottom-left");

    // Adds a button that opens a new window with the current URL when clicked
    if (
      !  // This NOT operator should be un-commented, except for tests
      props.toggle
    ) {
      const openNewWindowButton = document.createElement("button");
      openNewWindowButton.title = "Open in new tab";  // Tooltip text
      openNewWindowButton.innerHTML = `<calcite-icon icon="launch" scale="s"></calcite-icon>`;
      openNewWindowButton.style.padding = "5px 6px";
      openNewWindowButton.style.border = "1px solid #ccc";
      openNewWindowButton.style.borderRadius = "4px";
      openNewWindowButton.style.backgroundColor = "#f8f9fa";
      openNewWindowButton.style.cursor = "pointer";
      openNewWindowButton.style.display = "flex";
      openNewWindowButton.style.alignItems = "center";
      openNewWindowButton.style.justifyContent = "center";
      openNewWindowButton.style.boxShadow = "none";

      let isMouseDown = false;
      openNewWindowButton.onmouseover = () => {
        if (!isMouseDown) {
          openNewWindowButton.style.backgroundColor = "#e6e6e6";
          openNewWindowButton.style.borderColor = "#adadad";
          openNewWindowButton.style.boxShadow = "none";
        }
      };
      openNewWindowButton.onmouseout = () => {
        if (!isMouseDown) {
          openNewWindowButton.style.backgroundColor = "#f8f9fa";
          openNewWindowButton.style.borderColor = "#ccc";
          openNewWindowButton.style.boxShadow = "none";
        }
      };
      openNewWindowButton.onmousedown = () => {
        isMouseDown = true;
        openNewWindowButton.style.backgroundColor = "#d4d4d4";
        openNewWindowButton.style.borderColor = "#8c8c8c";
        openNewWindowButton.style.boxShadow =
          "inset 0 2px 4px rgba(0, 0, 0, 0.2)";
      };
      openNewWindowButton.onmouseup = () => {
        isMouseDown = false;
        openNewWindowButton.style.backgroundColor = "#f8f9fa";
        openNewWindowButton.style.borderColor = "#ccc";
        openNewWindowButton.style.boxShadow = "none";
      };
      openNewWindowButton.onclick = () => {
        // TODO: The URL to which this button leads will eventually be a unique
        // address that hosts the Esri map application as its own website; for
        // now it will just open a copy of the testing webpage (esrimapdev/)
        window.open(window.location.href, "_blank");
      };
      // Add a global mouseup event to handle the case where the mouse is
      // released outside the button
      document.addEventListener("mouseup", () => {
        if (isMouseDown) {
          isMouseDown = false;
          openNewWindowButton.style.backgroundColor = "#f8f9fa";
          openNewWindowButton.style.borderColor = "#ccc";
          openNewWindowButton.style.boxShadow = "none";
        }
      });

      mapView.ui.add(openNewWindowButton, "bottom-right");
    }

    // The LayerList widget and Search widget cannot be expanded
    // at the same time; otherwise, they overlap
    layerListExpand.watch("expanded", (isExpanded) => {
      if (isExpanded) {
        searchExpand.collapse();
      }
    });
    searchExpand.watch("expanded", (isExpanded) => {
      if (isExpanded) {
        layerListExpand.collapse();
      }
    });

    return mapView;
  };

  // Uses a side effect to create the map after React has rendered the DOM
  useEffect(
    () => {
      setView(createMapView(ref));
      return () => {
        // Cleans up the map view
        if (!!view) {
          view.destroy();
          setView(null);
        }
      };
    },
    // Re-loads the map only if the ID has changed
    []
  );

  return (
    // Map container's height and width dynamically change with the window size
    <div style={{ height: "100vh", width: "100vw" }} ref={ref}></div>
    // TODO: If needed, add a conditional statement such that the map container
    // is of a fixed size if it functions as an embedded applet
  );
});

export default EsriWithRef;
