import{N as o,O as g,V as m,q as n,v as a,z as p,A as l,B as c}from"./index-MdAHgiwM.js";import{t as d}from"./highlightReasons-JQk34SCf.js";import{m as u,u as w}from"./LayerView-1toPpOEs.js";import{t as y}from"./GraphicContainer-rI9fsj_N.js";import{$ as V}from"./GraphicsView2D-KcJteyY4.js";import{t as f}from"./HighlightCounter-PQA4Bx35.js";import"./Container-CddVTLfH.js";import"./Texture-JDJZu0Eo.js";import"./AGraphicContainer-iUxr9k4E.js";import"./TechniqueInstance-PmOnOd6V.js";import"./UpdateTracking2D-nazSfOgh.js";import"./TurboLine-14USKP68.js";import"./earcut-yRmaX5jU.js";import"./CIMSymbolHelper-EMjr3A0E.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-t61-RSx-.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-LFQb_zWU.js";import"./LabelMetric-b0F_4xJx.js";import"./Program-UxBh05K2.js";import"./BindType-RceNqBi4.js";import"./Util-H0CTeiJ6.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-YGx2lF5W.js";import"./WGLContainer-5CJ8eBR-.js";import"./ProgramTemplate-L7cFMOzs.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-p9aql-fe.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-fyo6MHkQ.js";import"./TimeOnly-8yfxCgIw.js";import"./timeSupport-QOVpqlE0.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-WNugtGhx.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ii=s;export{ii as default};
