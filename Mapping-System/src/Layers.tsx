/* layers.tsx */

// Layer imports
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer.js";

// Other imports
import ActionButton from "@arcgis/core/support/actions/ActionButton.js";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer.js";

/**
 * The 'content' property of the 'PopupTemplate' properties of the
 * AIN LayerSearchSource and the Assessor Parcels FeatureLayer is
 * set to 'formatContent'
 */
function formatContent() {
  return [{
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
          border-radius: 4px;
        }
        .get-parcel-button:hover {
          background-color: #e6e6e6;
          border-color: #adadad;
        }
        .get-parcel-button:active {
          background-color: #d4d4d4;
          border-color: #8c8c8c;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `;
      document.head.appendChild(style);

      const attributes = event.graphic.attributes;
      const elem = document.createElement("div");
      elem.innerHTML = `<b>Use:</b><br>`;
      elem.innerHTML += attributes.UseType ? `${attributes.UseType};` : `;`;
      elem.innerHTML += attributes.UseDescription ? ` ${attributes.UseDescription}<br><br>` : `<br><br>`;
      if (attributes.SitusFullAddress.replace(/\s/g, "")) {
        elem.innerHTML += `<b>Address:</b><br>${attributes.SitusFullAddress}<br>`;
      }
      else if (attributes.SitusAddress.replace(/\s/g, "")) {
        elem.innerHTML += `<b>Address:</b><br>${attributes.SitusAddress} `;
        if (attributes.SitusCity.replace(/\s/g, "")) {
          elem.innerHTML += `${attributes.SitusCity} `;
          if (attributes.SitusZIP.replace(/\s/g, "")) {
            elem.innerHTML += `${attributes.SitusZIP.substring(0, 5)}<br>`;
          }
        }
      }
      else {
        elem.innerHTML += `<b>Located in:</b><br>`;
        if (attributes.SitusCity.replace(/\s/g, "")) {
          elem.innerHTML += `${attributes.SitusCity}`;
        }
        else if (attributes.TaxRateCity.replace(/\s/g, "")) {
          elem.innerHTML += `${attributes.TaxRateCity} CA`;
        }
        elem.innerHTML += `<br>`;
      }
      elem.innerHTML += `<br>`;

      const btn = document.createElement("button");
      btn.innerText = "Get Parcel Detail";
      btn.className = "get-parcel-button";
      btn.addEventListener("click", () => {
        window.open(`https://portal.assessor.lacounty.gov/parceldetail/${attributes.AIN}`, "_blank");
      });

      elem.appendChild(btn);
      return elem;
    }
  }];
}


// Initialization of base layers

export const aerial2008Map = new MapImageLayer({
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Aerial/MapServer",
  title: "Aerial 2008",
  visible: false,
  listMode: "hide-children",
});

export const aerial2011Map = new MapImageLayer({
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Aerial_2011/MapServer",
  title: "Aerial 2011",
  visible: false,
  listMode: "hide-children",
});

export const aerial2014Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC4--NQvK5pJZwy",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2014",
  visible: false
});

export const aerial2017Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC5--tF2dpXHbsU",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2017",
  visible: false,
});

export const aerial2020Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC6--pCqXruF2NL",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2020",
  visible: false,
});

export const aerial2023Map = new WMTSLayer({
  url: "https://svc.pictometry.com/Image/BCC27E3E-766E-CE0B-7D11-AA4760AC43ED/wmts",
  activeLayer: {
    id: "PICT-LARIAC7--KCrSFBeqgG",
    tileMatrixSetId: "GoogleMapsCompatible",
  },
  title: "Aerial 2023",
  visible: false,
});

export const streetMap = new VectorTileLayer({
  url: "https://tiles.arcgis.com/tiles/RmCCgQtiZLDCtblq/arcgis/rest/services/LA_County_Basemap_Source/VectorTileServer",
  title: "Street",
  visible: true,  // Property "visible" is true by default
});


// Initialization of reference layers

export const assessorParcelsMap = new TileLayer({
  url: "https://cache.gis.lacounty.gov/cache/rest/services/LACounty_Cache/LACounty_Parcel/MapServer",
  id: "assessor-parcels",
  title: "Assessor Parcels",
  legendEnabled: false,
  visible: true,
  listMode: "hide-children",
  minScale: 18055.954822,
  maxScale: 0,
});
const getParcelDetail = new ActionButton({
  id: "get-parcel-detail",
  title: "Get Parcel Detail",
  className: "esri-icon-description",
  type: "button",
});
// Loads the layer and configures the Assessor Parcels layer's Popup
assessorParcelsMap.load().then(() => {
  let sublayer = assessorParcelsMap.allSublayers.find((sublayer) => sublayer.id === 0);
  sublayer.popupTemplate = new PopupTemplate({
    title: "AIN: {APN}",  // The APN is the AIN with added hyphens, e.g. 1234-567-890
    outFields: [
      "AIN",
      "APN",
      "UseType",
      "UseDescription",
      "SitusFullAddress",
      "SitusAddress",
      "SitusCity",
      "SitusZIP",
      "TaxRateCity",
    ],
    lastEditInfoEnabled: false,
    fieldInfos: [
      {
        fieldName: "AIN"
      },
      {
        fieldName: "SitusFullAddress",
        label: "address",
        stringFieldOption: "text-box"
      },
      {
        fieldName: "SitusCity"
      },
    ],
    content: formatContent,
    actions: [
      getParcelDetail,  // Comment this line if no longer needed
    ],
  });
})

export const citiesMap = new FeatureLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/19",
  id: "cities",
  title: "Cities",
  legendEnabled: false,
  visible: false,
});

export const communitiesMap = new FeatureLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/23",
  id: "communities",
  title: "Communities",
  legendEnabled: false,
  visible: false,
});

export const fieldBooksMap = new MapImageLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/FieldBooks_AMP/MapServer",
  id: "field-books",
  title: "Field Books",
  legendEnabled: false,
  visible: false,
  listMode: "hide-children",
});

export const mapBooksMap = new MapImageLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/AssessorMapBooks_AMP/MapServer",
  id: "map-books",
  title: "Map Books",
  legendEnabled: false,
  visible: false,
  listMode: "hide-children",
});

export const mobileHomeParksMap = new FeatureLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/MobileHomes_Service_AMP/MapServer/1",
  id: "mobile-home-parks",
  title: "Mobile Home Parks",
  legendEnabled: false,
  visible: false,
});

export const oilAndGasFieldsMap = new FeatureLayer({
  url: "https://services.arcgis.com/RmCCgQtiZLDCtblq/arcgis/rest/services/CalOilGasFields/FeatureServer/0",
  id: "oil-and-gas-fields",
  title: "Oil & Gas Fields",
  legendEnabled: false,
  visible: false,
});

export const oilAndGasWellsMap = new FeatureLayer({
  url: "https://gis.conservation.ca.gov/server/rest/services/WellSTAR/Wells/MapServer/0",
  id: "oil-and-gas-wells",
  title: "Oil & Gas Wells",
  visible: false,
});
// Loads the layer and accesses its renderer
oilAndGasWellsMap.load().then(() => {
  const renderer = oilAndGasWellsMap.renderer as UniqueValueRenderer;
  // Removes duplicates from uniqueValueInfos based on the "label" property
  renderer.uniqueValueInfos = renderer.uniqueValueInfos.filter(
    (info, index, self) =>
      index === self.findIndex((t) => t.label === info.label)
  );
  // Applies the updated renderer to the layer
  oilAndGasWellsMap.renderer = renderer;
});

export const plssMap = new MapImageLayer({
  url: "https://gis.blm.gov/arcgis/rest/services/Cadastral/BLM_Natl_PLSS_CadNSDI/MapServer",
  id: "public-land-survey-system",
  title: "Pub. Land Survey (PLSS)",
  visible: false,
  listMode: "hide-children",
});

export const recentSalesMap = new FeatureLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/PAIS/pais_sales_parcels/MapServer/0",
  id: "recent-sales",
  title: "Recent Sales",
  visible: true,
  listMode: "hide-children",
  opacity: 0.6,
});

export const schoolDistrictsMap = new FeatureLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/25",
  id: "school-districts",
  title: "School Districts",
  legendEnabled: false,
  visible: false,
});

export const sfrClustersMap = new FeatureLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Clusters_SFR_AMP/MapServer/5",
  id: "sfr-clusters",
  title: "SFR Clusters",
  legendEnabled: false,
  visible: false,
});

export const streetLabelsMap = new MapImageLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Street_Labels/MapServer",
  id: "street-labels",
  title: "Street Labels",
  legendEnabled: false,
  visible: false,
  listMode: "hide-children",
});

export const supervisorialDistrictsMap = new FeatureLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/1",
  id: "supervisorial-districts",
  title: "Supervisorial Districts",
  legendEnabled: false,
  visible: false,
});

export const taxRateAreasMap = new MapImageLayer({
  url: "https://assessor.gis.lacounty.gov/oota/rest/services/MAPPING/Tax_Rate_Area_AMP/MapServer",
  id: "tax-rate-areas",
  title: "Tax Rate Areas",
  legendEnabled: false,
  visible: false,
  listMode: "hide-children",
});

export const zipCodesMap = new FeatureLayer({
  url: "https://cache.gis.lacounty.gov/arcgis/rest/services/LACounty_Dynamic/Administrative_Boundaries/MapServer/5",
  id: "zip-codes",
  title: "ZIP Codes",
  legendEnabled: false,
  visible: false,
});

export const zoningUnincorporatedMap = new FeatureLayer({
  url: "https://arcgis.gis.lacounty.gov/arcgis/rest/services/DRP/GISNET_Public/MapServer/345",
  id: "gis-zoning",
  title: "Zoning (unincorporated)",
  visible: false,
});


// If both the Assessor Parcels layer and the Recent Sales layer are inactive,
// and the Parcels layer gets activated, the Sales layer is automatically
// enabled; if both layers are active, and the Parcels layer gets deactivated,
// the Sales layer is automatically disabled
reactiveUtils.watch(
  () => assessorParcelsMap.visible,
  (assessorParcelsMapVisible) => {
    assessorParcelsMapVisible
      ? (recentSalesMap.visible = true)
      : (recentSalesMap.visible = false);
  }
);

// If any Aerial base layer gets activated, the Street Labels reference layer
// is automatically enabled; if the Street base layer gets activated, the
// Street Labels reference layer is automatically disabled
reactiveUtils.watch(
  () => [
    aerial2008Map.visible,
    aerial2011Map.visible,
    aerial2014Map.visible,
    aerial2017Map.visible,
    aerial2020Map.visible,
    aerial2023Map.visible,
    // Add more Aerial base layers if they're needed
    streetMap.visible
  ],
  ([
    aerial2008MapVisible,
    aerial2011MapVisible,
    aerial2014MapVisible,
    aerial2017MapVisible,
    aerial2020MapVisible,
    aerial2023MapVisible,
    // Remember to create a new callback parameter for each Aerial base layer
    streetMapVisible
  ]) => {
    if (
      aerial2008MapVisible ||
      aerial2011MapVisible ||
      aerial2014MapVisible ||
      aerial2017MapVisible ||
      aerial2020MapVisible ||
      aerial2023MapVisible
    ) {
      streetLabelsMap.visible = true;
    }
    else if (streetMapVisible) {
      streetLabelsMap.visible = false;
    }
  }
);
