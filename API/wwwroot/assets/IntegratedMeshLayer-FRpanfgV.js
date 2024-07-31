import{z as i,A as a,aR as _,cS as O,B as u,bF as b,b0 as x,cR as L,ht as R,aw as N,b$ as A,V as M,bA as j,U as P,dr as $,c3 as J,c4 as V,bt as U,c5 as D,dt as E,ds as K,aV as z,eB as H,hu as B,aP as C,s as c,y as S,c6 as F,dH as G,bw as k}from"./index-UN0u_eSp.js";import{j as h}from"./persistable-LkruZWl9.js";import{L as q,P as w}from"./SceneService-MQR4iEBl.js";import{s as Z,l as Q,u as W,m as X}from"./I3SLayerDefinitions-9YilHUJr.js";import{I as T,x as Y,Z as ee}from"./elevationInfoUtils-yFTJcIDL.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-NnlNw-Jf.js";import"./originUtils-1w5HeAJR.js";import"./resourceUtils-tbDPfYd8.js";import"./resourceUtils-jzYMZR0w.js";import"./saveAPIKeyUtils-h3eDnEZb.js";var f;let n=f=class extends b{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,s){var l;if((l=s.layer)!=null&&l.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,s.layer.spatialReference))return void((s==null?void 0:s.messages)&&s.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const y=new _;R(e,y,s.layer.spatialReference),t[o]=y.toJSON(s)}else t[o]=e.toJSON(s);delete t[o].spatialReference}clone(){return new f({geometry:N(this.geometry),type:this.type})}};i([a({type:_}),h()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([a({type:["clip","mask","replace"],nonNullable:!0}),h()],n.prototype,"type",void 0),n=f=i([u("esri.layers.support.SceneModification")],n);const m=n;var p;let d=p=class extends A(M.ofType(m)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const o=new p;for(const s of e)o.add(m.fromJSON(s,t));return o}static async fromUrl(e,t,o){const s={url:j(e),origin:"service"},l=await P(e,{responseType:"json",signal:o==null?void 0:o.signal}),y=t.toJSON(),g=[];for(const v of l.data)g.push(m.fromJSON({...v,geometry:{...v.geometry,spatialReference:y}},s));return new p({url:e,items:g})}};i([a({type:String})],d.prototype,"url",void 0),d=p=i([u("esri.layers.support.SceneModifications")],d);const I=d;let r=class extends q($(J(V(U(D(E(K(k)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(z(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,H))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:B(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){C(o)}if(await this._fetchService(t),this._modificationsSource!=null){const o=await I.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(w.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";T(S.getLogger(this),Y(t,"absolute-height",e)),T(S.getLogger(this),ee(t,e))}};i([a({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),i([a({type:["show","hide"]})],r.prototype,"listMode",void 0),i([a({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),i([a({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([a({type:Z,readOnly:!0})],r.prototype,"nodePages",void 0),i([a({type:[Q],readOnly:!0})],r.prototype,"materialDefinitions",void 0),i([a({type:[W],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),i([a({type:[X],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),i([a({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),i([a({type:I}),h({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],r.prototype,"modifications",void 0),i([F(["web-scene","portal-item"],"modifications")],r.prototype,"readModifications",null),i([a(G)],r.prototype,"elevationInfo",null),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=i([u("esri.layers.IntegratedMeshLayer")],r);const ce=r;export{ce as default};
