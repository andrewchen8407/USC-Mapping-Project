import{z as a,B as n,E as d,P as u,ae as l}from"./index-rMEbef2m.js";import{X as g}from"./FeatureLayerView2D-ENSOkSxz.js";import"./highlightReasons-oHCcCNSH.js";import"./LayerView-XKU7bmeZ.js";import"./Container-kwur5kyV.js";import"./Texture-xaUANZby.js";import"./TechniqueInstance-eXO_CGFP.js";import"./UpdateTracking2D-HujZK-NZ.js";import"./TurboLine-rTDzIMto.js";import"./earcut-Ya8WWQ21.js";import"./CIMSymbolHelper-5yUd5vPs.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-s8j2tkLj.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-y1GN_iES.js";import"./LabelMetric-_fQbp-mc.js";import"./Program-jHG2gGkm.js";import"./BindType-RceNqBi4.js";import"./Util-0Er6eQ5_.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-lixF2hKB.js";import"./WGLContainer-nL8VcvfD.js";import"./ProgramTemplate-Qvf0vzV0.js";import"./config-z2KFXUcx.js";import"./tileUtils-pcBJnprf.js";import"./SDFHelper-mZwI6u8y.js";import"./floatRGBA-8rA_kGDk.js";import"./FeatureCommandQueue--ebUyhha.js";import"./HighlightCounter-hpp1zs2w.js";import"./popupUtils-hNsXiLSz.js";import"./RefreshableLayerView--NDcA3X9.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const I=i;export{I as default};
