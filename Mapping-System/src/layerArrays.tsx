/* layerArrays.tsx */

import * as Layers from "./layers.tsx";

// Layer master lists and exported subsets: Index 0 of each export is the
// master list, while subsequent indices are subsets of the master

// Order of master list layers is reversed from what's shown in the LayerList;
// this is because the layer listed first is loaded first, and therefore
// appears underneath all subsequently loaded layers

/*
Each index corresponds to a distinct purpose; choose the desired value for
layerSubsetIndex defined in App.tsx and used in main.tsx
0: Master
1: AMP (internal)
2: Public (external)
*/

const baseLayersMaster = [
  Layers.aerial2008Map,
  Layers.aerial2011Map,
  Layers.aerial2014Map,
  Layers.aerial2017Map,
  Layers.aerial2020Map,
  Layers.aerial2023Map,
  Layers.streetMap,
];

export const baseLayerArrays = [
  baseLayersMaster,
  baseLayersMaster
  // .filter(layer =>  // Example of removing unwanted layers
  //   layer !== Layers.aerial2008Map &&
  //   layer !== Layers.aerial2011Map)
  ,
  baseLayersMaster
    .filter(layer =>
      layer !== Layers.aerial2008Map &&
      layer !== Layers.aerial2011Map)
  ,
];

const referenceLayersMaster = [
  Layers.taxRateAreasMap,
  Layers.mobileHomeParksMap,
  Layers.streetLabelsMap,
  Layers.zoningUnincorporatedMap,
  Layers.plssMap,
  Layers.oilAndGasFieldsMap,
  Layers.oilAndGasWellsMap,
  Layers.fieldBooksMap,
  Layers.mapBooksMap,
  Layers.sfrClustersMap,
  Layers.schoolDistrictsMap,
  Layers.zipCodesMap,
  Layers.communitiesMap,
  Layers.citiesMap,
  Layers.supervisorialDistrictsMap,
  Layers.recentSalesMap,
  Layers.assessorParcelsMap,
];

export const referenceLayerArrays = [
  referenceLayersMaster,
  referenceLayersMaster
  ,
  referenceLayersMaster
    .filter(layer =>
      // layer !== Layers.oilAndGasWellsMap &&
      layer !== Layers.oilAndGasWellsMap
    )
  ,
];