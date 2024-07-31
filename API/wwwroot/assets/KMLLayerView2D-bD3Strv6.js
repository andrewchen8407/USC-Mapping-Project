import{f4 as z,a_ as k,an as T,bb as U,be as G,b9 as N,f5 as $,U as O,m as D,V as F,E as W,f6 as H,N as S,aU as A,aZ as K,b6 as E,f7 as J,f8 as L,dV as Y,dv as Q,z as v,A as C,B as X}from"./index-Ef0wFma4.js";import{b as P,g as Z,d as tt}from"./kmlUtils-HB41ZTmJ.js";import{g as et,f as it,b as at}from"./Bitmap-wxkKRAjp.js";import{a as st}from"./BitmapContainer-hHnT_4jc.js";import{m as rt,u as ot}from"./LayerView-GCpseVqN.js";import{t as M}from"./GraphicContainer-rdl06JEP.js";import{$ as R}from"./GraphicsView2D-7IgPJVs_.js";import{C as nt,e as lt}from"./rasterProjectionHelper-0rjypabA.js";import{a as ht}from"./WGLContainer-VebC0qCS.js";import{w as pt,o as mt}from"./RenderingContext-OysTJUT-.js";import{x as ct}from"./Program-PwEWJG8e.js";import{c as dt}from"./rasterUtils-5SZPV-8n.js";import{e as q,m as ut}from"./Texture-Q5_h-iED.js";import"./Container-aOn3LtEu.js";import"./highlightReasons-GUPn_wbI.js";import"./AGraphicContainer---Of7Ruc.js";import"./TechniqueInstance--tb5yYjS.js";import"./UpdateTracking2D-rwfbUIAy.js";import"./TurboLine-HQhK1M-H.js";import"./earcut-jQL0drIo.js";import"./CIMSymbolHelper-nZj-VP2E.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils--aJpcE7Q.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-gZl4O0jS.js";import"./LabelMetric-vL36fq_2.js";import"./BindType-RceNqBi4.js";import"./Util-gVXnIZc8.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-U5fzJpPX.js";import"./FeatureCommandQueue-fmbj34fq.js";import"./ProgramTemplate-LMmjILYB.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-8CGErpGb.js";import"./TimeOnly-R_J8ZZs9.js";import"./timeSupport-AXX88cY1.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-bD4GMnNR.js";import"./config-z2KFXUcx.js";import"./webglDeps-sX14ptpF.js";import"./NestedMap-9UouPomH.js";import"./OrderIndependentTransparency-699b6OuX.js";import"./basicInterfaces-IwaMq8O_.js";import"./testSVGPremultipliedAlpha-DMQUZ6ds.js";import"./floatRGBA-PkIcTmkU.js";import"./doublePrecisionUtils-HJiLm-yC.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),a=z(i);a.getExtension("OES_texture_float"),this._rctx=new pt(a,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=mt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ht(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const i=k(t.extent,s),a=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=nt(a,s,t.extent);let n=(o+h)/2;const l=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/l+i.height/u)/2;const I=new T({x:n,y:n,spatialReference:i.spatialReference}),g=lt({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,g),y=new q(l,u);y.wrapMode=U.CLAMP_TO_EDGE;const m=new ct(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:f=0,height:x=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",f,x),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,G.RGBA,N.UNSIGNED_BYTE,_.data);const B=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:B,extent:i,imageData:_}}const b=m.detachColorTexture($.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,s){const r=et(t.bitmapData)?it(t.bitmapData):t.bitmapData,i=new q;i.wrapMode=U.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new ut(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const i=(await O(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=a.getContext("2d");o.drawImage(i,0,0);const h=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:h,extent:s};const n=this.reprojectBitmapData({bitmapData:h,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends rt(ot){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new st,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new F}async hitTest(e,t){var r,i,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(i=this._polylinesView)==null?void 0:i.hitTest(e),(a=this._polygonsView)==null?void 0:a.hitTest(e)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),W(()=>this.layer.visibleSublayers,e=>{for(const[t,s]of this._kmlVisualData.allSublayers)s.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=H(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,A.fromJSON(e.extent),this.view.spatialReference).then(r=>{const i=new at(r.bitmapData);i.x=r.extent.xmin,i.y=r.extent.ymax,i.resolution=r.extent.width/r.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:i}=e;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await K(),r!=null&&r!==1){const c=new A(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,E.WGS84);const o=k(a,E.WebMercator),h=a.xmin,n=a.xmax,l=a.ymin,u=a.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":J,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in y)c[V]=c[V].replace(_,y[_])}},f=L(s);m(f);let x={};i!=null&&(x=L(i),m(x));const b=Y(e.href);return b.query={...b.query,...f,...x},`${b.path}?${Q(f)}`}return e.href}async _fetchService(e){const t=new j;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const a=i.points?await P(i.points):[],o=i.polylines?await P(i.polylines):[],h=i.polygons?await P(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:i.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:i.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:i.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:i.id}))),i.networkLink){const l=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(e,t){return Z(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>tt(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([X("esri.views.2d.layers.KMLLayerView2D")],d);const ne=d;export{ne as default};
