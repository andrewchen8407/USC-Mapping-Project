import{z as t,A as i,B as u,bF as $,et as P,ex as q,aU as O,aR as A,V as x,bl as V,W as _,s as I,E as h,i9 as p,aV as N,iL as U,c1 as H,iM as j,cw as C,bx as L,iN as M,y as E,N as T}from"./index-F17czHX0.js";import{h as k}from"./Container-YQSBFd8R.js";let y=class extends ${get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([i({readOnly:!0})],y.prototype,"version",null),y=t([u("esri.views.layers.support.ClipArea")],y);const b=y;var f;let d=f=class extends b{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([i({type:[Number,String],json:{write:!0}})],d.prototype,"left",void 0),t([i({type:[Number,String],json:{write:!0}})],d.prototype,"right",void 0),t([i({type:[Number,String],json:{write:!0}})],d.prototype,"top",void 0),t([i({type:[Number,String],json:{write:!0}})],d.prototype,"bottom",void 0),d=f=t([u("esri.views.layers.support.ClipRect")],d);const z=d;var w;const D={base:q,key:"type",typeMap:{extent:O,polygon:A}};let v=w=class extends b{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e;return new w({geometry:((e=this.geometry)==null?void 0:e.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([i({types:D,json:{read:P,write:!0}})],v.prototype,"geometry",void 0),v=w=t([u("esri.views.layers.support.Geometry")],v);const F=v;let g=class extends b{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([i({type:[[[Number]]],json:{write:!0}})],g.prototype,"path",void 0),g=t([u("esri.views.layers.support.Path")],g);const B=g,m=x.ofType({key:"type",base:null,typeMap:{rect:z,path:B,geometry:F}}),J=e=>{let r=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var l,c,R;const s=((l=this.view)==null?void 0:l.spatialReferenceLocked)??!0;((c=this.view)==null?void 0:c.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new I("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new k),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([h(()=>this.suspended,a=>{this.container&&(this.container.visible=!a)},p),h(()=>this.updateSuspended,a=>{this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},p),h(()=>{var a;return((a=this.layer)==null?void 0:a.opacity)??1},a=>{this.container&&(this.container.opacity=a)},p),h(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},p),h(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},p),h(()=>this.highlightOptions,a=>this.container.highlightOptions=a,p),N(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),h(()=>{var a;return{scale:(a=this.view)==null?void 0:a.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:a})=>{const S=a!=null&&this.isVisibleAtScale(a);S!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",S)},p)],"constructor"),(R=this.view)!=null&&R.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var n;const s=(n=this.view)==null?void 0:n.spatialReference;return s==null||this.supportsSpatialReference(s)}get updateSuspended(){return this.suspended}get updating(){var s;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((s=this._updatingHandles)!=null&&s.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(s){const n=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!n)return!0;const{minScale:l,maxScale:c}=n;return U(s,l,c)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(s){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",s),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(s))):this.updateRequested=!1}hitTest(s,n){return Promise.resolve(null)}supportsSpatialReference(s){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const s=super.getSuspendInfo(),n=!this.spatialReferenceSupported,l=this.visibleAtCurrentScale;return n&&(s.spatialReferenceNotSupported=n),l&&(s.outsideScaleRange=l),s}addAttachHandles(s){this.addHandles(s,"attach")}};return t([i()],r.prototype,"attached",void 0),t([i({type:m,set(s){const n=V(s,this._get("clips"),m);this._set("clips",n)}})],r.prototype,"clips",void 0),t([i()],r.prototype,"container",void 0),t([i()],r.prototype,"moving",void 0),t([i({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([i({readOnly:!0})],r.prototype,"updateParameters",void 0),t([i()],r.prototype,"updateRequested",void 0),t([i()],r.prototype,"updateSuspended",null),t([i()],r.prototype,"updating",null),t([i()],r.prototype,"view",void 0),t([i({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),t([i({type:_})],r.prototype,"highlightOptions",void 0),r=t([u("esri.views.2d.layers.LayerView2D")],r),r};let o=class extends H(j(C.EventedMixin(L))){constructor(e){super(e),this._updatingHandles=new M,this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{var r;if(e.name!=="layerview:create-error"){const s=this.layer&&this.layer.id||"no id",n=((r=this.layer)==null?void 0:r.title)||"no title";E.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${s}')`,e)}})}destroy(){this._updatingHandles=T(this._updatingHandles)}get fullOpacity(){var e,r;return(((e=this.layer)==null?void 0:e.opacity)??1)*(((r=this.parent)==null?void 0:r.fullOpacity)??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this._updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,r,s;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((s=this.view)==null?void 0:s.ready)||!1}getSuspendInfo(){var s,n;const e=(s=this.parent)!=null&&s.suspended?this.parent.suspendInfo:{};return(n=this.view)!=null&&n.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};t([i()],o.prototype,"fullOpacity",null),t([i()],o.prototype,"layer",void 0),t([i()],o.prototype,"parent",void 0),t([i({readOnly:!0})],o.prototype,"suspended",null),t([i({readOnly:!0})],o.prototype,"suspendInfo",null),t([i({readOnly:!0})],o.prototype,"legendEnabled",null),t([i({type:Boolean,readOnly:!0})],o.prototype,"updating",null),t([i({readOnly:!0})],o.prototype,"updatingProgress",null),t([i()],o.prototype,"visible",null),t([i()],o.prototype,"view",void 0),o=t([u("esri.views.layers.LayerView")],o);const K=o;export{F as a,J as m,K as u};
