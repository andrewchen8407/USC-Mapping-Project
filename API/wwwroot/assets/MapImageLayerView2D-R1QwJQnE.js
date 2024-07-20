import{z as r,A as a,f9 as g,B as m,fa as l,m as d,w as u,y as c,E as y}from"./index--gWF5o_U.js";import{a as f}from"./BitmapContainer-GaYh0dr4.js";import{m as w,u as x}from"./LayerView-frmpzBvS.js";import{$ as _}from"./GraphicsView2D-ZVXQUFRg.js";import{h as v}from"./HighlightGraphicContainer-66JYs-a7.js";import{v as H}from"./ExportStrategy-G6_C4a6y.js";import{i as I}from"./RefreshableLayerView-X1fiquPt.js";import{U,r as V}from"./drapedUtils-VaQMuhJm.js";import"./WGLContainer-Q6bv50AA.js";import"./LabelMetric-N02-mKpG.js";import"./Texture-bQ_GwJMm.js";import"./Program-8dzz1fbM.js";import"./BoundingBox-Biwomhwq.js";import"./ProgramTemplate-I7FGaqSP.js";import"./Container-Uufu8Riz.js";import"./highlightReasons-XNvPUPDu.js";import"./config-z2KFXUcx.js";import"./earcut-2zaYMmUW.js";import"./CIMSymbolHelper-RHHljlJk.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-0Ec_q6_d.js";import"./Rect-pT1ASav_.js";import"./AttributeStore-wupE90iX.js";import"./UpdateTracking2D-ZQVxck_D.js";import"./TurboLine-Q8nINVOL.js";import"./BindType-RceNqBi4.js";import"./Util-SAEl3zUU.js";import"./constants-gJZ7CV2L.js";import"./TimeOnly-Git9VSGk.js";import"./timeSupport-m64xaGc8.js";import"./json-v6EOeNTY.js";import"./FeatureCommandQueue-BBD5JbCW.js";import"./normalizeUtilsSync-3enqstuU.js";import"./AGraphicContainer-_9xoDA3d.js";import"./TechniqueInstance-oISWTR7w.js";import"./TileContainer-TT-lVHA1.js";import"./vec3f32-cbLeGFQ-.js";import"./Bitmap-GKFapQhW.js";import"./popupUtils-7T70lsze.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([a()],e.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],e.prototype,"floors",null),r([a({readOnly:!0})],e.prototype,"exportImageVersion",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"suspended",void 0),r([a(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let o=class extends P(I(w(x))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,s){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(t,e,i,s){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],o.prototype,"strategy",void 0),r([a()],o.prototype,"updating",void 0),o=r([m("esri.views.2d.layers.MapImageLayerView2D")],o);const lt=o;export{lt as default};
