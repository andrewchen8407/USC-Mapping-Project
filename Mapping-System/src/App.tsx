// JSX/TSX allows HTML to be included in JS/TS files. No need to tab between files.

// React imports
import { forwardRef, useEffect, useRef, useState } from "react";

// Core modules
import Color from "@arcgis/core/Color.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";

// Layers
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";

// Symbols
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";

// Widgets
import Expand from "@arcgis/core/widgets/Expand.js";
import Home from "@arcgis/core/widgets/Home.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Search from "@arcgis/core/widgets/Search.js";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Locate from "@arcgis/core/widgets/Locate.js";

// Local imports
import { LODS } from "./constants.ts";
import {
  formatContent,
  getParcelDetail,
  baseLayersArray,
  referenceLayersArray
} from "./Layers.tsx";


type EsriMapProps = {
  url: string;
};
const EsriWithRef = forwardRef(function EsriMap(props: EsriMapProps, ref) {
  // create a ref to element to be used as the map container
  // const [view,setView] = useState<MapView>()

  // View should be in state
  const [view, setView] = useState<any>(null);
  // later in useEffect()
  // setView(createMapView(mapRef.current,mapProperties,viewProperties))
  const createMapView = (mapRef: any) => {
    const lods = LODS;

    const url = new URL(window.location.href);
    const query = url.searchParams.get("query") || "";
    // const sourceIndex = parseInt(url.searchParams.get("sourceIndex") || "0", 10);

    // Perpetual/Persistent foundation map layer
    const map = new Map({
      basemap: "streets-vector"
    });

    const view = new MapView({
      container: mapRef.current, // add via ref
      map: map,
      highlightOptions: {
        color: new Color([255, 48, 111, 1]), // watermelon-colored highlight
        haloOpacity: 0.9,
        fillOpacity: 0.2
      },
      center: coordinates,
      zoom: 11,             
      constraints: {
        lods: lods,
      },
      spatialReference: {
        wkid: 102100, // got it from bg assesor project
      },
    });

    // view.when(() => {
    //   view.popup.actions.push(new ActionButton({
    //     title: 'Go to website',
    //     id: 'go-to-website',
    //     className: 'esri-icon-link'
    //   }));

    //   view.popup.on('trigger-action', (event) => {
    //     if (event.action.id === 'go-to-website') {
    //       window.open('https://www.example.com', '_blank');
    //     }
    //   });

    // });


    const homeWidget = new Home({
      view: view
    });

    const locateWidget = new Locate({
      view: view,
    });

    const searchWidget = new Search({
      view: view,
      sources: [
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
            title: "{AIN}",
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
            actions: [getParcelDetail]
          }  
        }),
      ],
    });

    /* formatting popup box */
    searchWidget.allSources.on("after-add", ({ item }) => {
      //https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/how-to-change-the-marker-of-the-search-result/m-p/1088925
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
        sourceIndex = searchWidget.sources.findIndex(source => source === actualSource) + 1;
      }

      const url = new URL(window.location.href);
      url.searchParams.set("query", query);
      url.searchParams.set("sourceIndex", sourceIndex.toString());
      window.history.pushState({}, "", url.toString());

      updateURLParameters(query, sourceIndex);
    });

    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("query") || "";
    const initialSourceIndex = parseInt(params.get("sourceIndex") || "0", 10);

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

    // Function to handle base layer selection
    const handleBaseLayerSelection = (selectedLayerId: string) => {
      baseLayersArray.forEach(layer => {
        layer.visible = layer.id === selectedLayerId;
      });
    };

    // Create the LayerList with custom actions
    const layerList = new LayerList({
      view: view,
      // listItemCreatedFunction: function(event) {
      //   const item = event.item;
      //   if (item.layer.title === "Street") {
      //     // Customize the item to remove the sublayer dropdown
      //     setTimeout(() => {
      //       const openContainer = document.querySelector(`#${item.uid} .esri-layer-list__item-icon-open`);
      //       if (openContainer) {
      //         openContainer.remove();
      //       }
      //     }, 100);
      //   }
      // }
    });

    // Handle actions on LayerList
    layerList.on("trigger-action", (event) => {
      const id = event.action.id;
      const layer = event.item.layer;

      if (id === "select-base-layer") {
        handleBaseLayerSelection(layer.id);
      } else if (id === "toggle-reference-layer") {
        layer.visible = !layer.visible;
      }
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
      unit: "imperial"
    });

    const legend = new Legend({
      view: view
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
    
    view.ui.add(legendExpand, "top-right");
    view.ui.add(homeWidget, "bottom-right");
    view.ui.add(locateWidget, "bottom-right");
    view.ui.add(searchExpand, "bottom-right");
    view.ui.add(scaleBar, "bottom-left");
    view.ui.add(layerListExpand, "top-left");
    
    return view;
  };
  
  const [coordinates, setCoordinates] = useState([-118.2367, 34.1041]);
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
  // TODO: Find a way to pass in coordinates

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
