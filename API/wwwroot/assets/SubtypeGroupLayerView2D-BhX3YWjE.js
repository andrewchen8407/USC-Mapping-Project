import{z as a,B as n,E as d,P as u,ae as l}from"./index-k4MWwNZ3.js";import{X as g}from"./FeatureLayerView2D-hoEZ_rYs.js";import"./highlightReasons-0i-vm_8p.js";import"./LayerView-j8BYsVob.js";import"./Container-fiLRYwqM.js";import"./Texture-WjIZ3yRU.js";import"./TechniqueInstance-oOmkJGa2.js";import"./UpdateTracking2D-6GXbl9iV.js";import"./TurboLine-f-953dyn.js";import"./earcut-MvFNGdvl.js";import"./CIMSymbolHelper-pcMC0EUc.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-iAKxDwar.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-eQ2qtLF5.js";import"./LabelMetric-nKPEfurC.js";import"./Program-8etJiSBT.js";import"./BindType-RceNqBi4.js";import"./Util-MJ8HXC8z.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-Tu9hIFDI.js";import"./WGLContainer-KnChnmgf.js";import"./ProgramTemplate-EnJEZ1k2.js";import"./config-z2KFXUcx.js";import"./tileUtils-pcBJnprf.js";import"./SDFHelper-GzoMSPet.js";import"./floatRGBA-JCp_PFmw.js";import"./FeatureCommandQueue-CDFSEeQJ.js";import"./HighlightCounter-RLFWYzsq.js";import"./popupUtils-5dpcHgeQ.js";import"./RefreshableLayerView-X397ZiDW.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const I=i;export{I as default};
