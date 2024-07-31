import{E as l,P as h,I as g,V as w,J as f,K as d,M as n,z as u,B as V}from"./index-Ef0wFma4.js";import{m as b,u as S}from"./LayerView-GCpseVqN.js";import{t as _}from"./GraphicContainer-rdl06JEP.js";import{$ as T}from"./GraphicsView2D-7IgPJVs_.js";import"./Container-aOn3LtEu.js";import"./highlightReasons-GUPn_wbI.js";import"./Texture-Q5_h-iED.js";import"./AGraphicContainer---Of7Ruc.js";import"./TechniqueInstance--tb5yYjS.js";import"./UpdateTracking2D-rwfbUIAy.js";import"./TurboLine-HQhK1M-H.js";import"./earcut-jQL0drIo.js";import"./CIMSymbolHelper-nZj-VP2E.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils--aJpcE7Q.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-gZl4O0jS.js";import"./LabelMetric-vL36fq_2.js";import"./Program-PwEWJG8e.js";import"./BindType-RceNqBi4.js";import"./Util-gVXnIZc8.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-U5fzJpPX.js";import"./WGLContainer-VebC0qCS.js";import"./ProgramTemplate-LMmjILYB.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-fmbj34fq.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-8CGErpGb.js";import"./TimeOnly-R_J8ZZs9.js";import"./timeSupport-AXX88cY1.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-bD4GMnNR.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const re=y;export{re as default};
