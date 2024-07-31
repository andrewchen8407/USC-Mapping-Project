import{E as l,P as h,I as g,V as w,J as f,K as d,M as n,z as u,B as V}from"./index-F17czHX0.js";import{m as b,u as S}from"./LayerView-9PYgF4Kg.js";import{t as _}from"./GraphicContainer-EjJWrqMw.js";import{$ as T}from"./GraphicsView2D-fTXjvv3_.js";import"./Container-YQSBFd8R.js";import"./highlightReasons-4MK72Kxl.js";import"./Texture-WJekAZIh.js";import"./AGraphicContainer-gcpN6wmc.js";import"./TechniqueInstance-5uEXwy8s.js";import"./UpdateTracking2D-d2MXoIAT.js";import"./TurboLine-nfhd-6FE.js";import"./earcut-WTuAQXcy.js";import"./CIMSymbolHelper-KfebQSMk.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-6iJL_hrt.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-t7n2KKZv.js";import"./LabelMetric-ordDkl0d.js";import"./Program--oHtVQdH.js";import"./BindType-RceNqBi4.js";import"./Util-v5lPyOp4.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-d24b_a1_.js";import"./WGLContainer-uEejPT9m.js";import"./ProgramTemplate-6D2JN8iO.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-MjyCiTK5.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-Vyufr17i.js";import"./TimeOnly-1_rjEbi8.js";import"./timeSupport-m8mkEwFg.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-9oZt6cvl.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const re=y;export{re as default};
