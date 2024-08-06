// Layers.tsx

// Layer imports
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer.js";
import LabelClass from "@arcgis/core/layers/support/LabelClass.js";

// Other imports
import TextSymbol from "@arcgis/core/symbols/TextSymbol.js";
import ActionButton from "@arcgis/core/support/actions/ActionButton.js";

import "./index.css";

export function formatContent() {
  let content = [
    {
      type: "custom",
      outFields: ["*"],
      creator(event: { graphic: { attributes: any; }; }) {
        // Inject CSS styles into the document
        const style = document.createElement("style");
        style.innerHTML = `
          .get-parcel-button {
            background-color: #f8f9fa;
            border: 1px solid #ccc;
            padding: 6px 12px;
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
            border-radius: 4px;
          }
          .get-parcel-button:hover {
            background-color: #e2e6ea;
            border-color: #adadad;
          }
          .get-parcel-button:active {
            background-color: #ced4da;
            border-color: #adadad;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
          }
        `;
        document.head.appendChild(style);
        const attributes = event.graphic.attributes;
        const elem = document.createElement("div");
        elem.innerHTML = "";
        elem.innerHTML += attributes.UseType ? `<b>Use: </b>${attributes.UseType}` : "";
        elem.innerHTML += attributes.UseDescription ? `; ${attributes.UseDescription}<br>` : "<br>";
        elem.innerHTML += attributes.SitusAddress ? `<br><b>Address:</b><br>${attributes.SitusAddress}<br>` : `<br><b>Located in: </b>${attributes.TaxRateCity}`;
        elem.innerHTML += attributes.SitusCity ? `${attributes.SitusCity}` : "";
        elem.innerHTML += attributes.SitusZIP ? ` ${attributes.SitusZIP.substring(0, 5)}<br><br>` : "<br><br>";
        const btn = document.createElement("button");
        btn.innerText = "Get Parcel Detail";
        btn.className = "get-parcel-button";
        btn.addEventListener("click", () => {
          window.open(`https://portal.assessor.lacounty.gov/parceldetail/${attributes.AIN}`, '_blank');
        });

        elem.appendChild(btn);
        return elem;
      }
    }
  ];

  return content;
}


/* Initialization of reference layers */

const zoningUnincorporatedMap = new FeatureLayer({
  title: "Zoning (unincorporated)",
  id: "zoning-unincorporated",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/346",
  visible: false,
});

const zipCodesMap = new FeatureLayer({
  title: "ZIP codes",
  id: "zip-codes",
  url: "https://cache.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Administrative_Boundaries/MapServer/5",
  visible: false,
});

const taxRateAreasMap = new FeatureLayer({
  title: "Tax rate areas",
  id: "tax-rate-areas",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Tax_Rate_Area_AMP/MapServer/0",
  visible: false,
});

const supervisorialUnitsMap = new FeatureLayer({
  title: "Supervisorial units",
  id: "supervisorial-units",
  visible: false,
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/27",
});

const streetLabelsMap = new MapImageLayer({
  visible: false,
  title: "Street labels",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Street_Labels/MapServer",
});

const schoolDistrictsMap = new FeatureLayer({
  title: "School districts",
  id: "school-districts",
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/25",
  visible: false,
});

const recentSalesMap = new FeatureLayer({
  title: "Recent sales",
  id: "recent-sales",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/PAIS/pais_sales_parcels/MapServer",
  visible: true,
  opacity: 0.5
});

const PLSSMap = new MapImageLayer({
  title: "Public Land Survey System (PLSS)",
  id: "public-land-survey-system",
  url: "https://gis.blm.gov/arcgis/rest/services/Cadastral/BLM_Natl_PLSS_CadNSDI/MapServer",
  visible: false,
});

const oilAndGasFieldsMap = new FeatureLayer({
  title: "Oil & gas fields",
  id: "oil-and-gas-fields",
  url: "https://services.arcgis.com/RmCCgQtiZLDCtblq/arcgis/rest/services/CalOilGasFields/FeatureServer/0",
  visible: false,
});

const mobileHomeParksMap = new FeatureLayer({
  title: "Mobile home parks",
  id: "mobile-home-parks",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/MobileHomes_Service_AMP/MapServer/1",
  visible: false,
});

const mapBooksMap = new FeatureLayer({
  title: "Map books",
  id: "map-books",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/AssessorMapBooks_AMP/MapServer/0",
  visible: false,
});

const fieldBooksMap = new FeatureLayer({
  title: "Field books",
  id: "field-books",
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/FieldBooks_AMP/MapServer/0",
  visible: false,
});

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
// Copies the AIN without hyphens; whether users would want this is uncertain
export const copyAIN = new ActionButton({
  title: "Copy AIN",
  id: "copy-ain",
  className: "esri-icon-duplicate",
  type: "button"
});
const assessorParcelsMap = new FeatureLayer({
  visible: true,
  title: "Assessor parcels",
  id: "assessor-parcels",
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
  labelingInfo: [
    new LabelClass({
      labelExpressionInfo: {
        expression: "$feature.APN",
      },
      labelPlacement: "always-horizontal",
      symbol: new TextSymbol({
        color: [112, 61, 189],
        haloColor: [255, 255, 255],
        haloSize: 2,
        font: {
          family: "Arial",
          size: 9,
          weight: "bolder",
        },
      }),
      minScale: 1128.497176344,
      maxScale: 0,
    }),
  ],
  popupTemplate: {
    title: "AIN: {APN}",  // The APN is just the AIN with hyphens, e.g. 1234-567-890.
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
      getParcelDetail,  // Comment this line if not needed; see line 164 in App.tsx
      // copyAIN,
    ],
  },
});

export const referenceLayersArray = [
  PLSSMap,
  taxRateAreasMap,
  mobileHomeParksMap,
  streetLabelsMap,
  zoningUnincorporatedMap,
  oilAndGasFieldsMap,
  fieldBooksMap,
  mapBooksMap,
  clustersMap,
  schoolDistrictsMap,
  zipCodesMap,
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
  title: "Aerial 2014",
  visible: false
});

const aerial2017Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC5--tF2dpXHbsU",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2017",
  visible: false
});

const aerial2020Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC6--pCqXruF2NL",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2020",
  visible: false
});

const aerial2023Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC7--KCrSFBeqgG",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2023",
  visible: false
});

const streetMap = new VectorTileLayer({
  url: "https://tiles.arcgis.com/tiles/RmCCgQtiZLDCtblq/arcgis/rest/services/LA_County_Basemap_Source/VectorTileServer",
  title: "Street",
  visible: true
});

export const baseLayersArray = [
  aerial2014Map,
  aerial2017Map,
  aerial2020Map,
  aerial2023Map,
  streetMap,
];
