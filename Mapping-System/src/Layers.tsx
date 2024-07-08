// Layer imports
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer.js";
import LabelClass from "@arcgis/core/layers/support/LabelClass.js";

// Popup content imports
import TextContent from "@arcgis/core/popup/content/TextContent.js";

// Symbol imports
import TextSymbol from "@arcgis/core/symbols/TextSymbol.js";

// Support imports
import ActionButton from "@arcgis/core/support/actions/ActionButton.js";


export function formatContent(event: { graphic: { attributes: any; }; }) {
  const attributes = event.graphic.attributes;
  let text = "";
  // Only display the attributes if they exist
  text += attributes.UseType ? `Use: ${attributes.UseType}` : "";
  text += attributes.UseDescription ? `; ${attributes.UseDescription}<br>` : "<br>";
  text += attributes.SitusAddress ? `<br>Address:<br>${attributes.SitusAddress}<br>` : `<br>Located in: ${attributes.TaxRateCity}`;
  text += attributes.SitusCity ? `${attributes.SitusCity}` : "";
  text += attributes.SitusZIP ? ` ${attributes.SitusZIP.substring(0, 5)}<br>` : "<br>";
  text += `<br><a
    role="button"
    button id="navigate-button"
    class="btn btn-default"
    href="https://portal.assessor.lacounty.gov/parceldetail/${attributes.AIN}"
    style="
      display: inline-block;
      padding: 5px 10px;
      text-align: center;
      text-decoration: none;
      color: #000;
      background-color: #f8f9fa;
      border: 1px solid #343a40;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    "
    >Get Parcel Detail</a>`;
  let textElement = new TextContent({
    text: text
  });
  return [textElement];
}


/* Initialization of reference layers */

const zoningMap = new FeatureLayer({
  title: "Zoning",
  id: "zoning",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/345",
  visible: false,
});

const watershedsMap = new FeatureLayer({
  title: "Watersheds",
  id: "watersheds",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/390",
  visible: false,
})

const taxRatesMap = new MapImageLayer({
  title: "Tax rates",
  id: "tax-rates",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Tax_Rate_Area_AMP/MapServer",
  visible: false,
});

const supervisorialUnitsMap = new FeatureLayer({
  title: "Supervisorial units",
  id: "supervisorial-units",
  visible: false,
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

const streetLabelsMap = new MapImageLayer({
  visible: false,
  title: "Street labels",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Street_Labels/MapServer",
});

const schoolDistrictsMap = new FeatureLayer({
  title: "School districts",
  id: "school-districts",
  url: "https://cache.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Administrative_Boundaries/MapServer/0",
  visible: false,
});

const recentSalesMap = new FeatureLayer({
  title: "Recent sales",
  id: "recent-sales",
  url: "https://assessor.gis.lacounty.gov/assessor/rest/services/PAIS/pais_sales_parcels/MapServer/0",
  visible: true,
  opacity: 0.5
});

const planningAreasMap = new FeatureLayer({
  title: "Planning areas",
  id: "planning-areas",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/Advertising_County_Owned_Properties/MapServer",
  visible: false,
});

const oilAndGasFieldsMap = new FeatureLayer({
  title: "Oil & gas fields",
  id: "oil-and-gas-fields",
  url: "https://services.arcgis.com/RmCCgQtiZLDCtblq/arcgis/rest/services/CalOilGasFields/FeatureServer/0",
  visible: false,
})

const mobileHomesMap = new FeatureLayer({
  title: "Mobile homes",
  id: "mobile-homes",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/MobileHomes_Service_AMP/MapServer",
  visible: false,
});

const mapBooksMap = new FeatureLayer({
  title: "Map books",
  id: "map-books",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/AssessorMapBooks_AMP/MapServer/0",
  visible: false,
})

const communitiesMap = new FeatureLayer({
  title: "Communities",
  id: "communities",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/23",
  visible: false,
});

const clustersMap = new FeatureLayer({
  title: "Clusters (SFR)",
  id: "clusters-sfr",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Clusters_SFR_AMP/MapServer/5",
  visible: false,
});

const citiesMap = new FeatureLayer({
  title: "Cities",
  id: "cities",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/19",
  visible: false,
});

export const getParcelDetail = new ActionButton({
  title: "Get Parcel Detail",
  id: "get-parcel-detail",
  className: "esri-icon-description",
  type: "button"
});
const assessorParcelsMap = new FeatureLayer({
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
      content: formatContent,
      actions: [getParcelDetail]
    }            
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

export const referenceLayersArray = [
  planningAreasMap,
  taxRatesMap,
  mobileHomesMap,
  streetLabelsMap,
  zoningMap,
  watershedsMap,
  oilAndGasFieldsMap,
  mapBooksMap,
  clustersMap,
  schoolDistrictsMap,
  communitiesMap,
  citiesMap,
  recentSalesMap,
  assessorParcelsMap,
  supervisorialUnitsMap,
];


/* Initialization of base layers */

const aerial2014Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC4--NQvK5pJZwy",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial (2014)",
  visible: false
});

const aerial2017Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC5--tF2dpXHbsU",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial (2017)",
  visible: false
});

const aerial2020Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC6--pCqXruF2NL",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial (2020)",
  visible: false
});

const aerial2023Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC7--KCrSFBeqgG",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial (2023)",
  visible: false
});

const streetMap = new TileLayer({
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_StreetMap/MapServer",
  title: "Street",
  visible: true
})

export const baseLayersArray = [
  aerial2014Map,
  aerial2017Map,
  aerial2020Map,
  aerial2023Map,
  streetMap,
];
