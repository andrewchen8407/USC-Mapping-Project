import{E as l,P as h,I as g,V as w,J as f,K as d,M as n,z as u,B as V}from"./index-6vge_MSe.js";import{m as b,u as S}from"./LayerView-NTB-RNCv.js";import{t as _}from"./GraphicContainer-uo8RlDhg.js";import{$ as T}from"./GraphicsView2D-A2jdOv_6.js";import"./Container-3B_B4bnk.js";import"./highlightReasons-6Pwzh1ia.js";import"./Texture-hOw0I6XC.js";import"./AGraphicContainer-z_CwFP6N.js";import"./TechniqueInstance-npSnaEoC.js";import"./UpdateTracking2D-WpFGZu8Q.js";import"./TurboLine-37Ik3nzr.js";import"./earcut-N-2zwGVQ.js";import"./CIMSymbolHelper-PPS0B19X.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-unTaIIjB.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-CuVttIOv.js";import"./LabelMetric-1oq9ZXMb.js";import"./Program-ihyzfgbg.js";import"./BindType-RceNqBi4.js";import"./Util-GpuVxVVe.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-sK6E4Ou8.js";import"./WGLContainer-dDnXH4u2.js";import"./ProgramTemplate-OEMdxrIS.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-EIuas1Dh.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-QUhzmpnq.js";import"./TimeOnly-AQX4Y_-0.js";import"./timeSupport-GFcfvEMW.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-p_qeg7I2.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const re=y;export{re as default};
