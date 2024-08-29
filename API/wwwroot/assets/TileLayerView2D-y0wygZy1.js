import{m as w,n as y,r as I,t as V,v,G as H,w as o,x as m,y as T,z as n,A as g,B as q}from"./index-idTqwGoN.js";import"./CIMSymbolHelper-hCm8QsnL.js";import"./floatRGBA-7fQstD54.js";import"./Container-Mw7NX4vE.js";import"./WGLContainer-4BODnzbU.js";import"./Texture-sQpDqcWN.js";import"./Program-O2O53bmW.js";import"./LabelMetric-dSeEa0a4.js";import"./MagnifierPrograms-p4gpsG_V.js";import"./FeatureCommandQueue-ua3Iq7BF.js";import"./OrderIndependentTransparency-fykdCqz8.js";import"./testSVGPremultipliedAlpha-tQL7Mmww.js";import{$ as U}from"./GraphicsView2D-2Q68gEmc.js";import"./earcut-fLQ4otXf.js";import"./vec3f32-cbLeGFQ-.js";import{r as S,o as f,n as d}from"./imageUtils-ZCnDMmla.js";import{m as b,u as C}from"./LayerView-CtQ-rE8C.js";import{h as Q}from"./HighlightGraphicContainer-Bk7Dfrwg.js";import{i as $}from"./RefreshableLayerView-oPPog2xy.js";import{S as L,U as P,r as k}from"./drapedUtils-Qksavj5G.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-wQFrZ8Vy.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-Dh1Q8mJa.js";import"./highlightReasons-NreboNCz.js";import"./ProgramTemplate-zZDixU9r.js";import"./config-z2KFXUcx.js";import"./CircularArray-1_thnT0U.js";import"./AttributeStore-Z-PXifMT.js";import"./UpdateTracking2D-SR6MK_Z8.js";import"./TurboLine-V1pSvo_R.js";import"./BindType-RceNqBi4.js";import"./Util-57UOv7Q3.js";import"./constants-gJZ7CV2L.js";import"./TimeOnly-qvHAEASd.js";import"./timeSupport-586u-Dtv.js";import"./json-v6EOeNTY.js";import"./basicInterfaces-IwaMq8O_.js";import"./normalizeUtilsSync-xVzqVJID.js";import"./Bitmap-__57JDD8.js";import"./TileContainer-Rew6ShSY.js";import"./AGraphicContainer-AgXOJCg7.js";import"./TechniqueInstance-Ztw5GQrb.js";import"./popupUtils-V0IjHiVP.js";const F=[0,0];let a=class extends $(S(b(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),(t=this._highlightView)==null||t.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,t==null?void 0:t.effectiveMinLOD,t==null?void 0:t.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,h)=>this.fetchTile(i,h)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),L(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(h,s)=>k(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{i.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var e,t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(e=this._popupHighlightHelper)==null||e.destroy(),(t=this._highlightView)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):v()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return H((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:h,resamplingLevel:s=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(r){if(!o(r)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(s<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new m(c),_=await this.fetchTile(u,{...t,resamplingLevel:s+1});return d(this._tileInfoView,_,u,e)}}throw r}const l=new m(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),l.level!==e.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(r){if(o(r))throw r;p=await this._fetchImage(e,h)}return this.resampling?d(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||T.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const Ue=a;export{Ue as default};
