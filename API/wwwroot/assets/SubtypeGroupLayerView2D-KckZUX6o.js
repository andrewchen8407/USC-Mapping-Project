import{z as a,B as n,E as d,P as u,ae as l}from"./index-6vge_MSe.js";import{X as g}from"./FeatureLayerView2D-3NYoBqYV.js";import"./highlightReasons-6Pwzh1ia.js";import"./LayerView-NTB-RNCv.js";import"./Container-3B_B4bnk.js";import"./Texture-hOw0I6XC.js";import"./TechniqueInstance-npSnaEoC.js";import"./UpdateTracking2D-WpFGZu8Q.js";import"./TurboLine-37Ik3nzr.js";import"./earcut-N-2zwGVQ.js";import"./CIMSymbolHelper-PPS0B19X.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-unTaIIjB.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-CuVttIOv.js";import"./LabelMetric-1oq9ZXMb.js";import"./Program-ihyzfgbg.js";import"./BindType-RceNqBi4.js";import"./Util-GpuVxVVe.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-sK6E4Ou8.js";import"./WGLContainer-dDnXH4u2.js";import"./ProgramTemplate-OEMdxrIS.js";import"./config-z2KFXUcx.js";import"./tileUtils-pcBJnprf.js";import"./SDFHelper-w6nvuegb.js";import"./floatRGBA-1Hwfqwqm.js";import"./FeatureCommandQueue-EIuas1Dh.js";import"./HighlightCounter-wJxAPCI0.js";import"./popupUtils-e9Zovwe-.js";import"./RefreshableLayerView-r2qABW_m.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const I=i;export{I as default};
