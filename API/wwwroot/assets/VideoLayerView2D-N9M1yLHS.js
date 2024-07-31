import{c0 as g,bF as d,z as t,A as r,B as f,X as b,O as m,N as c,E as p,P as y}from"./index-Ef0wFma4.js";import{h as T}from"./GraphicsLayer-5COJAYS8.js";import{m as _,u as v}from"./LayerView-GCpseVqN.js";import{t as O}from"./GraphicContainer-rdl06JEP.js";import{$ as C}from"./GraphicsView2D-7IgPJVs_.js";import"./Container-aOn3LtEu.js";import"./highlightReasons-GUPn_wbI.js";import"./Texture-Q5_h-iED.js";import"./AGraphicContainer---Of7Ruc.js";import"./TechniqueInstance--tb5yYjS.js";import"./UpdateTracking2D-rwfbUIAy.js";import"./TurboLine-HQhK1M-H.js";import"./earcut-jQL0drIo.js";import"./CIMSymbolHelper-nZj-VP2E.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils--aJpcE7Q.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-gZl4O0jS.js";import"./LabelMetric-vL36fq_2.js";import"./Program-PwEWJG8e.js";import"./BindType-RceNqBi4.js";import"./Util-gVXnIZc8.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-U5fzJpPX.js";import"./WGLContainer-VebC0qCS.js";import"./ProgramTemplate-LMmjILYB.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-fmbj34fq.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-8CGErpGb.js";import"./TimeOnly-R_J8ZZs9.js";import"./timeSupport-AXX88cY1.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-bD4GMnNR.js";let a=class extends g(d){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([r({type:Boolean})],a.prototype,"frameCenter",void 0),t([r({type:Boolean})],a.prototype,"frameOutline",void 0),t([r({type:Boolean})],a.prototype,"lineOfSight",void 0),t([r({type:Boolean})],a.prototype,"sensorLocation",void 0),t([r({type:Boolean})],a.prototype,"sensorTrail",void 0),a=t([f("esri.layers.support.TelemetryDisplay")],a);const u=a,h=new b([255,127,0]);let n=class extends _(v){constructor(){super(...arguments),this._graphicsLayer=new T,this._frameOutlineGraphic=new m({symbol:{type:"simple-fill",outline:{type:"simple-line",color:h}}}),this._sensorTrailGraphic=new m({symbol:{type:"simple-line",color:h}}),this._lineOfSightGraphic=new m({symbol:{type:"simple-line",color:h}}),this._sensorLocationGraphic=new m({symbol:{type:"simple-marker",color:h}}),this._frameCenterGraphic=new m({symbol:{type:"simple-marker",color:h}}),this.layer=null,this.symbolColor=h,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=c(this._graphicsLayer)}initialize(){var e,i,s,l,o;this.addHandles(p(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},y)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline)??!0,lineOfSight:((s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight)??!0,sensorLocation:((l=this.layer.telemetryDisplay)==null?void 0:l.sensorLocation)??!0,sensorTrail:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail)??!0})}attach(){this.graphicsView=new C({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new O(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([p(()=>{var e,i,s,l,o;return[(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline,(s=this.layer.telemetryDisplay)==null?void 0:s.sensorLocation,(l=this.layer.telemetryDisplay)==null?void 0:l.sensorTrail,(o=this.layer.telemetryDisplay)==null?void 0:o.lineOfSight]},()=>this._updateVisibleTelemetryElements(),y),p(()=>{var e,i,s,l,o;return[this.layer.telemetry,(e=this.visibleTelemetryElements)==null?void 0:e.frameCenter,(i=this.visibleTelemetryElements)==null?void 0:i.frameOutline,(s=this.visibleTelemetryElements)==null?void 0:s.sensorLocation,(l=this.visibleTelemetryElements)==null?void 0:l.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),y)])}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"layer",void 0),t([r()],n.prototype,"symbolColor",void 0),t([r({type:u})],n.prototype,"visibleTelemetryElements",void 0),n=t([f("esri.views.2d.layers.VideoLayerView2D")],n);const se=n;export{se as default};
