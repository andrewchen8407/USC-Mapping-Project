import{O as u,V as f,q as w,v as c,E as a,P as o,aV as y,z as _,B as V}from"./index--gWF5o_U.js";import{t as v}from"./highlightReasons-XNvPUPDu.js";import{m as C,u as H}from"./LayerView-frmpzBvS.js";import{t as g}from"./GraphicContainer-xyID0DIu.js";import{$ as d}from"./GraphicsView2D-ZVXQUFRg.js";import"./Container-Uufu8Riz.js";import"./Texture-bQ_GwJMm.js";import"./AGraphicContainer-_9xoDA3d.js";import"./TechniqueInstance-oISWTR7w.js";import"./UpdateTracking2D-ZQVxck_D.js";import"./TurboLine-Q8nINVOL.js";import"./earcut-2zaYMmUW.js";import"./CIMSymbolHelper-RHHljlJk.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-0Ec_q6_d.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-Biwomhwq.js";import"./LabelMetric-N02-mKpG.js";import"./Program-8dzz1fbM.js";import"./BindType-RceNqBi4.js";import"./Util-SAEl3zUU.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-TT-lVHA1.js";import"./WGLContainer-Q6bv50AA.js";import"./ProgramTemplate-I7FGaqSP.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-BBD5JbCW.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-wupE90iX.js";import"./TimeOnly-Git9VSGk.js";import"./timeSupport-m64xaGc8.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-3enqstuU.js";const m="sublayers",l="layerView";let n=class extends C(H){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const si=n;export{si as default};
