// JSX/TSX allows HTML to be included in JS/TS files. No need to tab between files.

// React imports
import { forwardRef, useEffect, useRef, useState } from "react";

// ArcGIS core imports
import Color from "@arcgis/core/Color.js";
// import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Extent from "@arcgis/core/geometry/Extent.js";
// import Basemap from "@arcgis/core/Basemap.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import Home from "@arcgis/core/widgets/Home.js";

// ArcGIS layer imports
// import BaseTileLayer from "@arcgis/core/layers/BaseTileLayer.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";
// import LOD from "@arcgis/core/layers/support/LOD.js";
import LabelClass from "@arcgis/core/layers/support/LabelClass.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
// import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer.js";

// ArcGIS symbol imports
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import TextSymbol from "@arcgis/core/symbols/TextSymbol.js";

// ArcGIS widget imports
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
// import LayerListItem from "@arcgis/core/widgets/LayerList/ListItem.js";
// import ListItem from "@arcgis/core/widgets/LayerList/ListItem.js"; // duplicate import, should be removed
import Search from "@arcgis/core/widgets/Search.js";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource.js";
// import SearchSource from "@arcgis/core/widgets/Search/SearchSource.js";
import LayerSearchSource from "@arcgis/core/widgets/Search/LayerSearchSource.js";

// ArcGIS popup content imports
import TextContent from "@arcgis/core/popup/content/TextContent.js";

// Local imports
import { LODS } from "./constants";


function formatContent(event: { graphic: { attributes: any; }; }) {
  const attributes = event.graphic.attributes;
  let text = "";
  // Only display the attributes if they exist
  text += attributes.UseType ? `Use: ${attributes.UseType}<br>` : ""
  text += attributes.SitusAddress ? `<br>Address:<br>${attributes.SitusAddress}<br>` : "Located in: ";
  text += attributes.SitusCity  ? `${attributes.SitusCity}<br>` : "";
  let textElement = new TextContent({
    text: text
  });
  return [textElement];
}

const streetMap = new MapImageLayer({
  visible: false,
  title: "Street labels",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Street_Labels/MapServer",
});

const assessorParcelMap = new FeatureLayer({
  visible: true,
  title: "Assessor parcels",
  id: "assessor parcels",
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
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
      content: formatContent
    }            
});

const schoolDistrictMap = new MapImageLayer({
  visible: false,
  title: "School districts",
  id: "school districts",
  url: "https://cache.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Administrative_Boundaries/MapServer/0",
});

const taxRateMap = new MapImageLayer({
  visible: false,
  title: "Tax rates",
  id: "tax rates",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Tax_Rate_Area_AMP/MapServer",
});

const zoningMap = new FeatureLayer({
  visible: false,
  title: "Zoning",
  id: "zoning",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/345",
});

const communitiesMap = new FeatureLayer({
  visible: false,
  title: "Communities",
  id: "communities",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/23",
});

const supervisorMap = new FeatureLayer({
  visible: false,
  title: "Supervisory units",
  id: "supervisory units",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/1",
  labelingInfo: [
    new LabelClass({
      labelExpressionInfo: {
        expression: "'District' + $feature.DISTRICT",
      },
      labelPlacement: "always-horizontal",
      symbol: new TextSymbol({
        color: [0, 0, 0],
        haloColor: [255, 255, 255],
        haloSize: 2,
        font: {
          family: "Arial",
          size: 20,
        },
      }),
    }),
  ],
});

const mobileHomeMap = new FeatureLayer({
  visible: false,
  title: "Mobile homes",
  id: "mobile homes",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/MobileHomes_Service_AMP/MapServer",
});


type EsriMapProps = {
  url: string;
  coordinates: number[];
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
    const sourceIndex = parseInt(url.searchParams.get("sourceIndex") || "0", 10);

    const map = new Map({
      basemap: "streets-vector"
    });

    const view = new MapView({
      container: mapRef.current, // add via ref
      map: map,
      highlightOptions: {
        color: new Color([255, 255, 0, 1]), // bright yellow
        haloOpacity: 0.9,
        fillOpacity: 0.2
      },
      center: coordinates,
      zoom: 9,             
      constraints: {
        lods: lods,
      },
      spatialReference: {
        wkid: 102100, // got it from bg assesor project
      },
    });

    const homeWidget = new Home({
      view: view
    });
    
    view.ui.add(homeWidget, "top-left");

    const searchWidget = new Search({
      view: view,
      sources: [
        new LayerSearchSource({
          searchFields: ["AIN"],
          layer: new FeatureLayer({
            url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer/0",
          }),
          name: "Assessor Identification Number",
          outFields: ["*"],
          placeholder: "Find AIN (ten digits)",
          popupEnabled:true,
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
            content: formatContent
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

    view.ui.add(searchWidget, {
      position: "top-left",
      index: 2,
    });

    if (query) {
      searchWidget.search(query);
    }

    // Create sublayers for the Base Layer
    const subLayers = [
      new WMTSLayer({
        url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
        activeLayer: {
          id: "PICT-LARIAC4--NQvK5pJZwy",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2014",
        visible: false
      }),
      new WMTSLayer({
        url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
        activeLayer: {
          id: "PICT-LARIAC5--tF2dpXHbsU",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2017",
        visible: false
      }),
      new WMTSLayer({
        url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
        activeLayer: {
          id: "PICT-LARIAC6--pCqXruF2NL",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2020",
        visible: false
      }),
      new WMTSLayer({
        url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
        activeLayer: {
          id: "PICT-LARIAC7--KCrSFBeqgG",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2023",
        visible: false
      }),
      new TileLayer({
        url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_StreetMap/MapServer",
        id: "street",
        title: "Street",
        visible: true
      })
    ];

    // Create the Base Layer with sublayers
    const baseLayer = new GroupLayer({
      title: "Base layer",
      layers: subLayers,
      visibilityMode: "exclusive"
    });

    // Create standalone reference layers
    const referenceLayersArray = [
      zoningMap,
      taxRateMap,
      supervisorMap,
      streetMap,
      schoolDistrictMap,
      mobileHomeMap,
      communitiesMap,
      assessorParcelMap
    ];

    // Create the Base Layer with sublayers
    const referenceLayers = new GroupLayer({
      title: "Reference layers",
      layers: referenceLayersArray,
      visibilityMode: "independent"
    });

    map.add(baseLayer);
    map.add(referenceLayers);

    // Function to handle base layer selection
    const handleBaseLayerSelection = (selectedLayerId: string) => {
      subLayers.forEach(layer => {
        layer.visible = layer.id === selectedLayerId;
      });
    };

    // Create the LayerList with custom actions
    const layerList = new LayerList({
      view: view,
      // selectionMode: "single-persist",
      // operationalItems: subLayers,
      multipleSelectionEnabled: false,
      // listItemCreatedFunction: (event) => {
      //   const item = event.item;
      //   if (subLayers.some(layer => layer.id === item.layer.id)) {
      //     item.actionsSections = [
      //       [{
      //         title: "Select Base Layer",
      //         className: "esri-icon-radio-unchecked",
      //         id: "select-base-layer"
      //       }]
      //     ];
      //   }
      //   else if (referenceLayers.some(layer => layer.id === item.layer.id)) {
      //     item.actionsSections = [
      //       [{
      //         title: "Select Base Layer",
      //         className: "",
      //         id: "select-base-layer"
      //       }]
      //     ];
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
      expandIcon: "layers",  // see https://developers.arcgis.com/calcite-design-system/icons/
      // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
      view: view,
      content: layerList
    });
    
    view.ui.add(layerListExpand, "top-right");
    
    const coordinateConversion = new CoordinateConversion({
      view: view
    });
    view.ui.add(coordinateConversion, "bottom-right");
    
    return view;
  };
  
  const [coordinates, setCoordinates] = useState([-117.9367, 34.0041]);
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
    <div style={{ height: '100vh', width: '100vw' }} ref={ref}></div>
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
          ref={esriRef} coordinates={[-118.2417, 34.0541]}        />
      </div>
    </>
  );
}
