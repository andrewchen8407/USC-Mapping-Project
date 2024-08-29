import{z as a,A as m,f2 as F,B as S,N as E,s as f,ap as $,w as C,y as R,E as U,aU as q}from"./index-iTjN3Vrg.js";import{a as M}from"./BitmapContainer-Ia1r2zN3.js";import{m as V,u as L}from"./LayerView-mCvwztfc.js";import{v as W}from"./ExportStrategy-NjwdQHed.js";import{i as A}from"./RefreshableLayerView-z1NaAY-6.js";import{a as z}from"./ExportWMSImageParameters-6yzOCRUX.js";import"./WGLContainer-5jYEAQN-.js";import"./LabelMetric-n0v6li6h.js";import"./Texture-NHrtybod.js";import"./Program-FqQjKgtU.js";import"./BoundingBox-gLGklOQC.js";import"./ProgramTemplate-sfcRZQHj.js";import"./Container-bv502jPJ.js";import"./highlightReasons-Skx06an3.js";import"./config-z2KFXUcx.js";import"./earcut-ZsooIBiP.js";import"./Bitmap-sGQSbdGK.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=E(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,s){const{layer:o}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:d}=o;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:n,width:p,height:h,x:c,y}=i;if(!(n&&p&&h))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,c,y);return $(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m(F)],t.prototype,"timeExtent",void 0),t=a([S("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends H(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new M}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new M,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(U(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=E(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:s,y:o}=e,{spatialReference:d}=t;let i,n=0,p=0;if(r.children.some(g=>{const{width:w,height:v,resolution:I,x:l,y:x}=g,P=l+I*w,b=x-I*v;return s>=l&&s<=P&&o<=x&&o>=b&&(i=new q({xmin:l,ymin:b,xmax:P,ymax:x,spatialReference:d}),n=w,p=v,!0)}),!i)return null;const h=i.width/n,c=Math.round((s-i.xmin)/h),y=Math.round((i.ymax-o)/h);return{extent:i,width:n,height:p,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([S("esri.views.2d.layers.WMSLayerView2D")],u);const rt=u;export{rt as default};
