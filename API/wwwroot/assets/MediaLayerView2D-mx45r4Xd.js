import{ag as q,gH as K,E as A,P as M,gq as U,D as X,gI as ee,y as F,s as te,bb as se,gx as j,ff as re,gJ as ie,f2 as ne,gv as ae,eY as oe,f0 as le,eZ as he,Z as me,gw as ce,e_ as de,a2 as pe,gK as ue,V as fe,aV as L,r as ye,t as _e,gL as ge,w as ve,aU as we,em as xe,z as P,A as z,B as Re,a1 as Me,gM as $e}from"./index--gWF5o_U.js";import{j as Ee,m as W}from"./perspectiveUtils-gUhl-sHa.js";import"./CIMSymbolHelper-RHHljlJk.js";import"./floatRGBA-kQi3h8bF.js";import{i as Ve,E as be}from"./Container-Uufu8Riz.js";import{n as Te,h as Ce}from"./WGLContainer-Q6bv50AA.js";import{e as Se,m as Q}from"./Texture-bQ_GwJMm.js";import{h as k}from"./Program-8dzz1fbM.js";import"./LabelMetric-N02-mKpG.js";import"./MagnifierPrograms-Xz6g6oRh.js";import"./FeatureCommandQueue-BBD5JbCW.js";import"./OrderIndependentTransparency-XnADLRJT.js";import"./testSVGPremultipliedAlpha--H-u2uEn.js";import"./GraphicsView2D-ZVXQUFRg.js";import"./earcut-2zaYMmUW.js";import{r as qe}from"./vec3f32-cbLeGFQ-.js";import{e as Ae}from"./mat3f64-Km-wq5a6.js";import{f as Pe}from"./utils-83SFI-KS.js";import{o as De}from"./ProgramTemplate-I7FGaqSP.js";import{m as Ge,u as Oe}from"./LayerView-frmpzBvS.js";import"./normalizeUtilsSync-3enqstuU.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-0Ec_q6_d.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-Biwomhwq.js";import"./highlightReasons-XNvPUPDu.js";import"./config-z2KFXUcx.js";import"./CircularArray-1_thnT0U.js";import"./AttributeStore-wupE90iX.js";import"./UpdateTracking2D-ZQVxck_D.js";import"./TurboLine-Q8nINVOL.js";import"./BindType-RceNqBi4.js";import"./Util-SAEl3zUU.js";import"./constants-gJZ7CV2L.js";import"./TimeOnly-Git9VSGk.js";import"./timeSupport-m64xaGc8.js";import"./json-v6EOeNTY.js";import"./basicInterfaces-IwaMq8O_.js";const y=Ae(),He={none:q.None,loop:q.Loop,oscillate:q.Oscillate};function Ie(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?He[s.repeatType]:void 0}:{}}class Ue extends Ve{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=K(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,M),A(()=>[this.elementView.coords],()=>{this.requestRender()},M),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=U(this.texture),this.requestRender()},M),X(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(ee(t.content,"play",()=>this.requestRender()))},M)),e.element.load().catch(t=>{F.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new te("element-load-error","Element cannot be displayed",{element:e,error:t}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=U(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const i=r instanceof HTMLImageElement,n=r instanceof HTMLVideoElement,h=i?r.naturalWidth:n?r.videoWidth:r.width,a=i?r.naturalHeight:n?r.videoHeight:r.height;if(this._updatePerspectiveTransform(h,a),this.texture)n&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else{const m=new Se;if(m.wrapMode=se.CLAMP_TO_EDGE,m.preMultiplyAlpha=!0,m.width=h,m.height=a,"getFrame"in r){const l=o=>{this.texture?this.texture.setData(o):this.texture=new Q(t,m,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=Pe(r,Ie(this.elementView.element.animationOptions),null,l))}else this.texture=new Q(t,m,r);this.texture.generateMipmap(),n&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[i,n,h,a]=r.rings[0],m=this._vertices,{x:l,y:o}=e,p=t!==0;p?m.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o,a[0]-l,a[1]-o,n[0]+t-l,n[1]-o,n[0]+t-l,n[1]-o,i[0]+t-l,i[1]-o,h[0]+t-l,h[1]-o,a[0]+t-l,a[1]-o]):m.set([n[0]-l,n[1]-o,i[0]-l,i[1]-o,h[0]-l,h[1]-o,a[0]-l,a[1]-o]),this.isWrapAround=p}getVAO(e,t,r){if(this.elementView.coords==null)return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=k.createVertex(e,j.DYNAMIC_DRAW,i);const n=k.createVertex(e,j.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new De(e,r,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Ee(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),re(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}}class je extends Te{constructor(){super(...arguments),this._localOrigin=ie(0,0),this._viewStateId=-1,this._dvsMat3=ne()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[Ce.overlay],target:()=>this.children,drawPhase:be.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:i,pixelRatio:n,resolution:h,rotation:a,viewpoint:m,displayMat3:l}=t;if(this._viewStateId===r)return;const o=Math.PI/180*a,p=n*i[0],f=n*i[1],{x:$,y:v}=m.targetGeometry,E=ae($,t.spatialReference);this._localOrigin.x=E,this._localOrigin.y=v;const V=h*p,w=h*f,c=oe(this._dvsMat3);le(c,c,l),he(c,c,me(p/2,f/2)),ce(c,c,qe(p/V,-f/w,1)),de(c,c,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:i,spatialReference:n,worldScreenWidth:h,size:a,viewpoint:m}=r,l=this._localOrigin;let o=0;const p=pe(n);if(p&&n.isWrappable){const f=a[0],$=a[1],v=180/Math.PI*i,E=Math.abs(Math.cos(v)),V=Math.abs(Math.sin(v)),w=Math.round(f*E+$*V),[c,b]=p.valid,u=ue(n),{x:D,y:N}=m.targetGeometry,Y=[D,N],T=[0,0];r.toScreen(T,Y);const x=[0,0];let C;C=w>h?.5*h:.5*w;const G=Math.floor((D+.5*u)/u),Z=c+G*u,J=b+G*u,S=[T[0]+C,0];r.toMap(x,S),x[0]>J&&(o=u),S[0]=T[0]-C,r.toMap(x,S),x[0]<Z&&(o=-u);for(const R of t){const O=R.elementView.bounds;if(O==null)continue;const[H,,I]=O;H<c&&I>c?R.updateDrawCoords(l,u):I>b&&H<b?R.updateDrawCoords(l,-u):R.updateDrawCoords(l,o)}}else for(const f of t)f.updateDrawCoords(l,o)}}let g=class extends Ge(Oe){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new fe}attach(){this.addAttachHandles([L(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),L(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new je,this.container.addChild(this._overlayContainer),this._fetchQueue=new ye({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new _e({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),i=[r.x,r.y];for(const{projectedElement:{normalizedCoords:n,element:h}}of this._elementReferences.values())n!=null&&ge(n.rings,i)&&t.push({type:"media",element:h,layer:this.layer,mapPoint:s,sourcePoint:h.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new Le(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{ve(e)||F.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(d,s,!0);const r=new we({xmin:d[0],ymin:d[1],xmax:d[2],ymax:d[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){xe(this._elementReferences,e.uid,()=>{const t=new W({element:e,spatialReference:this.view.spatialReference}),r=new Ue(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var r;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(r=this._debugGraphicsView)==null||r.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var r;let e=this._elementReferences.get(s.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((r=this._debugGraphicsView)==null?void 0:r.graphics.remove(e.debugGraphic));const n=[],h=[];for(const a of this._tileStrategy.tiles){const m=B(this.view.featuresTilingScheme,a,i);e.tiles.has(a)?m||h.push(a):m&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of h)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new W({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const i of this._tileStrategy.tiles)B(this.view.featuresTilingScheme,i,t)&&this._referenceElement(i,s)}};P([z()],g.prototype,"layer",void 0),P([z({readOnly:!0})],g.prototype,"elements",void 0),g=P([Re("esri.views.2d.layers.MediaLayerView2D")],g);const d=Me(),_={xmin:0,ymin:0,xmax:0,ymax:0};function B(s,e,t){return s.getTileBounds(d,e.key,!0),_.xmin=d[0],_.ymin=d[1],_.xmax=d[2],_.ymax=d[3],$e(_,t)}class Le{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const i of e)r.has(i)?r.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const Vt=g;export{Vt as default};
