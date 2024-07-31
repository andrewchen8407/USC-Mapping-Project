import{z as a,A as n,B as v,bx as R,w as b,y as _,O as P,C as A,aU as D,E as f,i9 as z,U as F,es as I,f9 as C,s as V,ap as M,eU as L,an as $,m as O,eB as E,V as S,v as q,ae as j}from"./index-qTI7pilI.js";import{d as H,f as N,a as G}from"./RasterVFDisplayObject-HDCw-t6R.js";import{m as J,u as W}from"./LayerView-I0I0dAOK.js";import{$ as K}from"./GraphicsView2D-jhGLhl7f.js";import{h as Q}from"./HighlightGraphicContainer-meHh0ldI.js";import{M as X,m as Y,f as Z}from"./dataUtils-q-SklhLP.js";import{a as ee}from"./BitmapContainer-ze-FAUCe.js";import{h as te,E as B}from"./Container-kESSunbZ.js";import{l as ie}from"./Bitmap-EChy4BaL.js";import{v as re}from"./ExportStrategy-TO1CBEb5.js";import{J as se}from"./rasterProjectionHelper-7x87Q5kf.js";import{n as ae}from"./WGLContainer-Id8mH9tp.js";import{p as ne}from"./popupUtils-PFDFnSlH.js";import{i as oe}from"./RefreshableLayerView-ldyzraip.js";import"./Program-hR_Osi32.js";import"./Texture-Sp2k_c_V.js";import"./ProgramTemplate-aRl5XZWm.js";import"./LabelMetric-nW1NrK8G.js";import"./BoundingBox-Hh8i-2aE.js";import"./CIMSymbolHelper-gkBjVljH.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-SyxaxBeo.js";import"./Rect-pT1ASav_.js";import"./AttributeStore-PKHFiim5.js";import"./UpdateTracking2D-p81L0hm1.js";import"./TurboLine-X0LmZKNM.js";import"./earcut-eQSquTZB.js";import"./BindType-RceNqBi4.js";import"./Util-Pu8Xrvhv.js";import"./highlightReasons-tKpJxmzv.js";import"./constants-gJZ7CV2L.js";import"./TimeOnly-Ui1ft8Zd.js";import"./timeSupport-3UJBUqBZ.js";import"./json-v6EOeNTY.js";import"./FeatureCommandQueue-uo-UQXG2.js";import"./normalizeUtilsSync-vBpuOaNw.js";import"./AGraphicContainer-Cr6q5KXI.js";import"./TechniqueInstance-RgUc_7co.js";import"./TileContainer-Q-8ft8id.js";import"./vec3f32-cbLeGFQ-.js";import"./config-z2KFXUcx.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new te,this.updateRequested=!1,this.type="imagery",this._bitmapView=new ee}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{b(t)||_.getLogger(this).error(t)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new re({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(t)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=X(i,t);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var d;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const o=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),l=new ie(o.pixelBlock,(d=o.extent)==null?void 0:d.clone(),s.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};a([n()],h.prototype,"attached",void 0),a([n()],h.prototype,"container",void 0),a([n()],h.prototype,"layer",void 0),a([n()],h.prototype,"strategy",void 0),a([n()],h.prototype,"timeExtent",void 0),a([n()],h.prototype,"view",void 0),a([n()],h.prototype,"updateRequested",void 0),a([n()],h.prototype,"updating",null),a([n()],h.prototype,"type",void 0),h=a([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends ae{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[H],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=A((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,o=new D({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,d]=e.state.size;this._loading=this.fetchPixels(o,l,d,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,o=new N(s);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=r.xmin,o.y=r.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=s.width*t.symbolTileSize,o.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};a([n()],y.prototype,"fetchPixels",void 0),a([n()],y.prototype,"container",void 0),a([n()],y.prototype,"_loading",void 0),a([n()],y.prototype,"updating",null),y=a([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:l,width:d,height:p}=Y(e,t,i,o,s);if(s!=null&&!s.intersects(e))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,d,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Z(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return se(this.layer.fullExtent,e)}catch{try{const i=(await F(this.layer.url,{query:{option:"footprints",outSR:I(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([n()],c.prototype,"attached",void 0),a([n()],c.prototype,"container",void 0),a([n()],c.prototype,"layer",void 0),a([n()],c.prototype,"timeExtent",void 0),a([n()],c.prototype,"type",void 0),a([n()],c.prototype,"view",void 0),a([n()],c.prototype,"updating",null),c=a([v("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const ce=c,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:o}=s,l=ne(s,r);if(!o||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:o,popupTemplate:l});const d=await l.getRequiredFields();M(r);const p=new L;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=d,p.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,x=this.view.type==="2d"?new $(m,m,g):new $(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:k}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},T={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:k,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(p,T).then(U=>U)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([n()],t.prototype,"layer",void 0),a([n()],t.prototype,"suspended",void 0),a([n(C)],t.prototype,"timeExtent",void 0),a([n()],t.prototype,"view",void 0),t=a([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends de(oe(J(W))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new O,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new K({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},E),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},E),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof P))return q();let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var t,i;const e=!this.subview||this.subview.updating||!!((t=this._highlightView)!=null&&t.updating);return j("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),e}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:s}=this.subview;if(s===t)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ce({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new G({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([n()],w.prototype,"pixelData",null),a([n()],w.prototype,"subview",void 0),w=a([v("esri.views.2d.layers.ImageryLayerView2D")],w);const et=w;export{et as default};
