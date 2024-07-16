// JSX/TSX allows HTML to be included in JS/TS files. No need to tab between files.

// React imports
import { forwardRef, useEffect, useRef, useState } from "react";

// Core modules
import Color from "@arcgis/core/Color.js";
import Map from "@arcgis/core/Map.js";
import Extent from "@arcgis/core/geometry/Extent.js";
import MapView from "@arcgis/core/views/MapView.js";
// import ActionButton from "@arcgis/core/support/actions/ActionButton.js";

// Layers
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";

// Symbols
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";

// Widgets
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Search from "@arcgis/core/widgets/Search.js";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Home from "@arcgis/core/widgets/Home.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Expand from "@arcgis/core/widgets/Expand.js";

// Local imports
import { LODS } from "./constants.ts";
import {
  formatContent,
  // getParcelDetail,
  baseLayersArray,
  referenceLayersArray
} from "./Layers.tsx";


type EsriMapProps = {
  url: string;
};
const EsriWithRef = forwardRef(function EsriMap(props: EsriMapProps, ref) {
  // create a ref to element to be used as the map container
  // const [view, setView] = useState<MapView>();

  // View should be in state
  const [view, setView] = useState<any>(null);
  // later in useEffect()
  // setView(createMapView(mapRef.current, mapProperties, viewProperties));
  const createMapView = (mapRef: any) => {
    // Perpetual/Persistent foundation map layer
    const map = new Map({
      basemap: "streets-vector"
    });
    // Levels of detail
    const lods = LODS;
    // Map view
    const view = new MapView({
      container: mapRef.current, // add via ref
      map: map,
      highlightOptions: {
        color: new Color([255, 48, 111, 1]), // watermelon-colored highlight
        haloOpacity: 0.9,
        fillOpacity: 0.2,
      },
      center: [-118.2367, 34.1041],  // [-118.2367, 33.8688] alternatively,
      zoom: 11,             
      constraints: {
        lods: lods,
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
      geometry: theExtent
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
          placeholder: "Find place",
          suggestionsEnabled: true,  // attribute suggestionsEnables is true by default
        }),
        new LocatorSearchSource({
          url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          singleLineFieldName: "SingleLine",
          name: "Esri World Geocoder",
          placeholder: "Find address",
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
            url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer/0",
          }),
          name: "Assessor Identification Numbers",
          outFields: ["*"],
          placeholder: "Find AIN (ten digits)",
          popupEnabled: true,
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
              }
            ],
            content: formatContent,
            // actions: [getParcelDetail]
          }  
        }),
      ],
    });

    /* formatting popup box */
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
      // Set the active source index before performing the search
      searchWidget.activeSourceIndex = initialSourceIndex;
      searchWidget.search(initialQuery);
    }

    const searchExpand = new Expand({
      expandIcon: "search",  // see https://developers.arcgis.com/calcite-design-system/icons/
      collapseIcon: "search",
      expandTooltip: "Show Search Bar",
      collapseTooltip: "Hide Search Bar",
      view: view,
      content: searchWidget,
      expanded: true,
    });

    if (query) {
      searchWidget.search(query);
    }

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
    // Create the LayerList with custom actions
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
      expanded: true,
    });

    const scaleBar = new ScaleBar({
      view: view,
      style: "ruler",
      unit: "imperial",
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
      expanded: true,
    });

    const locateWidget = new Locate({
      view: view,
    });

    const homeWidget = new Home({
      view: view
    });
    
    view.ui.add(legendExpand, "top-right");
    view.ui.add(homeWidget, "bottom-right");
    view.ui.add(locateWidget, "bottom-right");
    view.ui.add(searchExpand, "bottom-right");
    view.ui.add(scaleBar, "bottom-left");
    view.ui.add(layerListExpand, "top-left");
    
    return view;
  };
  
  // const [map, setMap] = useState();
  // const [view, setView] = useState(null);
  
  // use a side effect to create the map after react has rendered the DOM
  useEffect(
    () => {
      setView(createMapView(ref));

      return () => {
        // clean up the map view
        if (!!view) {
          view.destroy();
          setView(null);
        }
      };
    },
    // only re-load the map if the id has changed
    []
  );

  useEffect(() => {
    if (!view) {
      // this is called before setView()
      return;
    }
    // view.map.basemap = basemap;
  }, [view]);

  useEffect(() => {
    if (!view) {
      return;
    }
    // view.on("click", (click) => {
    //   console.log("clear someting",click);
    //   console.log(view.map)
    //   // TODO: get the center
    // });
  }, [view]);

  if (!ref) return null;

  return (
    <div style={{ height: "100vh", width: "100vw" }} ref={ref}></div>
  );
});

export default function App() {
  // The phrase `export default` makes App() the default export for this package.
  // This means that App() can be imported using any alias.

  // User can enter address, place, or AIN to obtian location

  const esriRef = useRef();
  return (
    <>
      <div>
        <EsriWithRef
          url={"https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts"}
          ref={esriRef}        />
      </div>
    </>
  );
}
