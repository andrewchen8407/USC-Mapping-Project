// JSX allows html to be included in js/ts file. No need to tab between files.

// React imports
import { forwardRef, useEffect, useRef, useState } from "react";

// Third-party library imports
// import VectorTileLayer from "react-leaflet-vector-tile-layer";

// ArcGIS core imports
import Color from "@arcgis/core/Color.js";
// import Collection from "@arcgis/core/core/Collection.js";
// import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Extent from "@arcgis/core/geometry/Extent.js";
// import Basemap from "@arcgis/core/Basemap.js";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";

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
// import Expand from "@arcgis/core/widgets/Expand.js";
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
  text += attributes.SitusAddress ? `<br>Address:<br>${attributes.SitusAddress}<br>` : `Located in: `;
  text += attributes.SitusCity  ? `${attributes.SitusCity}<br>` : ``;
  let textElement = new TextContent({
    text: text
  });
  return [textElement];
}

// const wmtsBaseMap = new Basemap({
//   baseLayers: [
//     new WMTSLayer({
//       url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
//       activeLayer: {
//         id: "PICT-LARIAC6--LXMv769zxs",
//         tileMatrixSetId: "GoogleMapsCompatible",
//       },
//     }),
//   ],
// });

const streetMap = new MapImageLayer({
  visible: false,
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Street_Labels/MapServer",
});

const assessorParcelMap = new FeatureLayer({
  visible: false,
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
  title: "Supervisorial units",
  id: "supervisorial units",
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

// export const createMapView = (
//   url: string,
//   coordinates: number[],
//   mapRef: any
// ) => {
//   const wmtsBaseMap = new Basemap({
//     baseLayers: [
//       new WMTSLayer({
//         url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
//         activeLayer: {
//           id: "PICT-LARIAC6--LXMv769zxs",
//           tileMatrixSetId: "GoogleMapsCompatible",
//         }
//       })
//     ]
//   });
//   const view = new MapView({
//     container: mapRef.current,  // added via ref
//     map: new Map({
//       basemap: wmtsBaseMap,
//     }),
//     center: coordinates,
//     // zoom does not work because no LOD
//     zoom: 11,
//     constraints: {
//       lods: LODS,
//     },
//     spatialReference: {
//       wkid: 102100 //got it from bg assesor project
//     }
//   })
// }

type EsriMapProps = {
  url: string;
  coordinates: number[];
};
const EsriWithRef = forwardRef(function EsriMap(props: EsriMapProps, ref) {
  // create a ref to element to be used as the map's container
  // const [view,setView] = useState<MapView>()

  // View should be in state
  const [view, setView] = useState<any>(null);
  // later in useEffect()
  // setView(createMapView(mapRef.current,mapProperties,viewProperties))
  const createMapView = (mapRef: any) => {
    const lods = LODS;

    const map = new Map({
      basemap: "dark-gray"
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
      // Zoom does not work because no LOD
      zoom: 11,                                                                 
      constraints: {
        lods: lods,
      },
      spatialReference: {
        wkid: 102100, // got it from bg assesor project
      },
    });

    const searchWidget = new Search({
      view: view,
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
          placeholder: "address",
          suggestionsEnabled: true,
        }),
        // ESRI Geocoder

        // hardcode search extent to la county for esri world locator
        new LocatorSearchSource({
          url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
          
          singleLineFieldName: "SingleLine",
          name: "Esri World Geocoder",
          placeholder: "place",
          outFields: ["Addr_type"],
          popupEnabled:false,
          withinViewEnabled:true, // did nothing
          resultSymbol: new PictureMarkerSymbol({
            url: "/redpin.png",
            width: 30,
            height: 41,
            yoffset: 14,
            xoffset: 2,
          }),
          filter: {
            geometry: new Extent({
              xmin: -13400407.025469452,
              ymin: 3854157.8250249373,
              xmax: -12937519.219911631,
              ymax: 4153533.5605398538,
              spatialReference: {
                wkid: 102100,
              },
            }),
          },
        }),
        new LayerSearchSource({
          searchFields: ["AIN"],
          layer: new FeatureLayer({
            url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer/0",
         
          }),
          outFields: ["*"],
          placeholder: "AIN",
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
      searchAllEnabled: true,
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
    view.ui.add(searchWidget, {
      position: "top-left",
      index: 2,
    });

    // Create sublayers for the Base Layer
    const subLayers = [
      new MapImageLayer({
        url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Aerial_2014/MapServer",
        id: "aerial 2014",
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
          id: "PICT-LARIAC5--SxmDvXHvYJ",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2018",
        visible: false
      }),
      new WMTSLayer({
        url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
        activeLayer: {
          id: "PICT-LARIAC6--LXMv769zxs",
          tileMatrixSetId: "GoogleMapsCompatible",
        },
        title: "Aerial 2022",
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
    const referenceLayers = [
      zoningMap,
      taxRateMap,
      supervisorMap,
      streetMap,
      schoolDistrictMap,
      mobileHomeMap,
      communitiesMap,
      assessorParcelMap
    ];

    map.add(baseLayer);
    map.addMany(referenceLayers);

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

    view.ui.add(layerList, "top-right");

    return view;
  };
  const [coordinates, setCoordinates] = useState([-118.2417, 34.0541]);
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
    <>
      <div style={{ height: 800 }} ref={ref}></div>
    </>
  );
});

export default function App() {
  // The phrase `export default` makes App() the default export for this package.
  // This means that App() can be imported using any alias.

  // User can enter  address, place, or AIN, which finds location
  // TODO: Find a way to pass in coordinates
  // TODO: State to track the checked state of the checkbox

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
