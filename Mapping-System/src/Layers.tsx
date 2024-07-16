// Layer imports
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
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
const assessorParcelsMap = new FeatureLayer({
  visible: true,
  title: "Assessor parcels",
  id: "assessor-parcels",
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
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
    // actions: [getParcelDetail]
    },
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

const aerial2014Map = new MapImageLayer({
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Aerial_2014/MapServer",
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
    id: "PICT-LARIAC6--hT7yCcKe4I",
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
