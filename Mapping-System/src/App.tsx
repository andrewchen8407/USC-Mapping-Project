// App.tsx

// Extensions .tsx/.jsx allow HTML to be included in TS/JS files; no need to tab between files

// React imports
import { forwardRef, useEffect, useState, MutableRefObject } from "react";

// Core modules
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Extent from "@arcgis/core/geometry/Extent.js";
import Color from "@arcgis/core/Color.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

// Layers and Symbols
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";

// Widgets
import Expand from "@arcgis/core/widgets/Expand.js";
import Search from "@arcgis/core/widgets/Search.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Compass from "@arcgis/core/widgets/Compass.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Home from "@arcgis/core/widgets/Home.js";

// Local imports
import { LODS } from "./constants.tsx";
import {
  formatContent,
  getParcelDetail,
  // copyAIN,  // Copies the AIN without hyphens; whether users would want this is uncertain
  baseLayersArray,
  referenceLayersArray,
} from "./Layers.tsx";

type EsriMapProps = {
  url: string;
  // Boolean variable widgetToggle should be true if the Esri map functions as its
  // own website, or false if it is treated as an embedded applet/component.
  widgetToggle: boolean;
  ref: MutableRefObject<HTMLDivElement | null>;  // The ref type must be explicitly declared
};

const EsriWithRef = forwardRef<HTMLDivElement, EsriMapProps>(function EsriMap(widgetToggle, ref) {
  // Creates a reference to the element used as the map container
  const [view, setView] = useState<any>();

  const createMapView = (mapRef: any) => {
    // Perpetual/Persistent foundation map layer underlies all base and reference layers
    const map = new Map({
      basemap: "streets-vector",  // Not to be confused with base layers
    });
    const view = new MapView({
      container: mapRef.current,  // Added via ref
      map: map,
      highlightOptions: {
        // Watermelon-colored highlights appear on parcels when clicked
        color: new Color([255, 48, 111, 1]),
        haloOpacity: 0.9,
        fillOpacity: 0.2,
      },
      center: [-118.2367, 34.1041],
      zoom: 11,
      constraints: {
        lods: LODS,
      },
      spatialReference: {
        wkid: 102100,
      },
    });

    const url = new URL(window.location.href);
    const query = url.searchParams.get("query") || "";

    const theExtent = new Extent({
      xmin: -1.3241839395280045E7,
      ymin: 3867766.4935850976,
      xmax: -1.3096082368346158E7,
      ymax: 4139926.214140869,
      spatialReference: {
        wkid: 102100,
      },
    });

    const searchExtent = {
      geometry: theExtent,
    };

    const searchWidget = new Search({
      view: view,
      includeDefaultSources: false,
      sources: [
        new LocatorSearchSource({
          url: "https://geocode.gis.lacounty.gov/geocode/rest/services/CAMS_Locator/GeocodeServer",
          singleLineFieldName: "SingleLine",
          resultSymbol: new PictureMarkerSymbol({
            url: "/redpin.png",
            width: 30,
            height: 41,
            yoffset: 14,
            xoffset: 2,
          }),
          name: "LA County CAMS",
          placeholder: "Find address",
          popupEnabled: true,
          suggestionsEnabled: true,  // Attribute suggestionsEnables is true by default
        }),
        new LocatorSearchSource({
          url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          singleLineFieldName: "SingleLine",
          name: "Esri World Geocoder",
          placeholder: "Find place",
          popupEnabled: true,
          outFields: ["Addr_type"],
          resultSymbol: new PictureMarkerSymbol({
            url: "/redpin.png",
            width: 30,
            height: 41,
            yoffset: 14,
            xoffset: 2,
          }),
          filter: searchExtent,
        }),
        new LayerSearchSource({
          searchFields: ["AIN"],
          layer: new FeatureLayer({
            url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
          }),
          name: "Assessor Identification Numbers",
          outFields: ["*"],
          placeholder: "Find AIN (ten digits)",
          popupEnabled: true,
          resultSymbol: new PictureMarkerSymbol({
            url: "/redpin.png",
            width: 30,
            height: 41,
            yoffset: 14,
            xoffset: 2,
          }),
          popupTemplate: {
            title: "AIN: {APN}",  // The APN is basically the AIN with hyphens: 1234-567-890.
            outFields: ["*"],
            lastEditInfoEnabled: false,
            fieldInfos: [
              {
                fieldName: "AIN"
              },
              {
                fieldName: "SitusAddress",
                label: "address"
              },
              {
                fieldName: "SitusCity"
              },
            ],
            content: formatContent,
            actions: [
              getParcelDetail,  // Comment out this line if not needed; see line 222 in Layers.tsx
              // copyAIN,
            ],
          },
        }),
      ],
    });

    // Adds effects to the Popup's ActionButtons 
    reactiveUtils.on(
      () => view.popup,
      "trigger-action",
      (event) => {
        if (event.action.id === "get-parcel-detail") {
          const attributes = view.popup.selectedFeature.attributes;
          window.open("https://portal.assessor.lacounty.gov/parceldetail/" + `${attributes.AIN}`, "_blank");
        }
        else if (event.action.id === "copy-ain") {
          const attributes = view.popup.selectedFeature.attributes;
          navigator.clipboard.writeText(`${attributes.AIN}`);
        }
      }
    );

    // Positions the PictureMarkerSymbol on any valid search result that is queried
    searchWidget.allSources.on("after-add", ({ item }) => {
      // https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/how-to-change-the-marker-of-the-search-result/m-p/1088925
      item.resultSymbol = new PictureMarkerSymbol({
        url: "/redpin.png",
        width: 30,
        height: 41,
        yoffset: 14,
        xoffset: 2,
      });
    });

    // Appends the query string and the index of the search source to the URL;
    // refreshing the page returns the user to the original query result
    const updateURLParameters = (query: string, sourceIndex: number) => {
      const url = new URL(window.location.href);
      url.searchParams.set("query", query);
      url.searchParams.set("sourceIndex", sourceIndex.toString());
      window.history.pushState({}, "", url.toString());
    };

    searchWidget.on("search-complete", (event) => {
      const query = event.searchTerm;
      let sourceIndex = event.activeSourceIndex;
      if (sourceIndex === -1) {
        const actualSource = event.results[0].source;
        sourceIndex = searchWidget.sources.findIndex(source => source === actualSource);
      }
      const url = new URL(window.location.href);
      url.searchParams.set("query", query);
      url.searchParams.set("sourceIndex", sourceIndex.toString());
      window.history.pushState({}, "", url.toString());
      updateURLParameters(query, sourceIndex);
    });

    const params = new URLSearchParams(window.location.search);
    const initialSourceIndex = parseInt(params.get("sourceIndex") || "0", 10);
    const initialQuery = params.get("query") || "";
    if (initialQuery) {
      // Sets the active source index before performing the search
      searchWidget.activeSourceIndex = initialSourceIndex;
      searchWidget.search(initialQuery);
    }

    const searchExpand = new Expand({
      expandIcon: "search",  // https://developers.arcgis.com/calcite-design-system/icons/
      collapseIcon: "chevrons-left",
      expandTooltip: "Show Search Bar",
      collapseTooltip: "Hide Search Bar",
      view: view,
      content: searchWidget,
    });

    // After the webpage and all map data finish loading, the query in the URL is issued
    view.when(() => {
      if (query) {
        searchWidget.activeSourceIndex = initialSourceIndex;
        searchWidget.search(query);
      }
    });

    // Create the Base Layer with sublayers
    const baseLayer = new GroupLayer({
      title: "Base layer",
      layers: baseLayersArray,
      visibilityMode: "exclusive"
    });
    map.add(baseLayer);

    // Create the Reference Layer with sublayers
    const referenceLayers = new GroupLayer({
      title: "Reference layers",
      layers: referenceLayersArray,
      visibilityMode: "independent"
    });
    map.add(referenceLayers);

    const layerList = new LayerList({
      view: view,
    });
    const layerListExpand = new Expand({
      expandIcon: "layers",
      collapseIcon: "layers",
      expandTooltip: "Show Layer List",
      collapseTooltip: "Hide Layer List",
      view: view,
      content: layerList,
    });

    const legend = new Legend({
      view: view,
      hideLayersNotInCurrentView: true,
    });
    const legendExpand = new Expand({
      expandIcon: "legend",
      collapseIcon: "legend",
      expandTooltip: "Show Legend",
      collapseTooltip: "Hide Legend",
      view: view,
      content: legend,
    });

    const compass = new Compass({
      view: view,
    });

    const homeWidget = new Home({
      view: view,
    });

    const locateWidget = new Locate({
      view: view,
    });

    const scaleBar = new ScaleBar({
      view: view,
      style: "ruler",
      unit: "imperial",
    });

    // If variable widgetToggle is true, shows the Search widget, but hides
    // the New Tab button; the opposite is true if widgetToggle is false

    view.ui.add(layerListExpand, "top-left");
    if (widgetToggle) {
      view.ui.add(searchExpand, "top-left");
    }
    view.ui.add(compass, "top-left");
    view.ui.add(homeWidget, "top-left");
    view.ui.add(locateWidget, "top-left");
    view.ui.add(legendExpand, "top-right");
    view.ui.add(scaleBar, "bottom-left");

    // Adds a button to the MapView's UI that opens a new window with the current URL
    if (!widgetToggle) {
      const openNewWindowButton = document.createElement("button");
      openNewWindowButton.title = "Open in new tab";  // Tooltip text
      openNewWindowButton.innerHTML = `<calcite-icon icon="launch" scale="s"></calcite-icon>`;
      openNewWindowButton.style.padding = "5px 6px";
      openNewWindowButton.style.border = "1px solid #343a40";
      openNewWindowButton.style.borderRadius = "4px";
      openNewWindowButton.style.backgroundColor = "#f8f9fa";
      openNewWindowButton.style.cursor = "pointer";
      openNewWindowButton.style.transition = "background-color 0.3s ease";
      openNewWindowButton.style.display = "flex";
      openNewWindowButton.style.alignItems = "center";
      openNewWindowButton.style.justifyContent = "center";

      openNewWindowButton.onmouseover = () => {
        openNewWindowButton.style.backgroundColor = "#e2e6ea";
      };
      openNewWindowButton.onmouseout = () => {
        openNewWindowButton.style.backgroundColor = "#f8f9fa";
      };
      openNewWindowButton.onmousedown = () => {
        openNewWindowButton.style.backgroundColor = "#ced4da";
      };
      openNewWindowButton.onmouseup = () => {
        openNewWindowButton.style.backgroundColor = "#e2e6ea";
      };
      openNewWindowButton.onclick = () => {
        window.open(window.location.href, "_blank");
      };

      view.ui.add(openNewWindowButton, "bottom-right");
    }

    // The LayerList widget and Search widget cannot be expanded
    // at the same time; otherwise, they overlap

    searchExpand.watch("expanded", (isExpanded) => {
      if (isExpanded) {
        layerListExpand.collapse();
      }
    });
    layerListExpand.watch("expanded", (isExpanded) => {
      if (isExpanded) {
        searchExpand.collapse();
      }
    });

    return view;
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

  useEffect(() => {
    if (!view) {
      return;
    }
  }, [view]);

  if (!ref) {
    return null;
  }

  return (
    // Height and width of the map container dynamically change with the window size
    <div style={{ height: "100vh", width: "100vw" }} ref={ref}></div>
    // TODO: If needed, add a conditional statement such that the map container
    // is of a fixed size if it functions as an embedded applet/component
  );
});

export default EsriWithRef;
