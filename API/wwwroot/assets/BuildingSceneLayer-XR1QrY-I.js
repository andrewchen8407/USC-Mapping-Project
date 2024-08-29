import{c1 as de,z as t,A as s,c6 as I,eW as ce,lh as _,B as p,hv as he,eJ as ee,iM as te,cW as me,cL as re,y as x,fv as ge,U as se,eU as fe,ih as be,s as F,O as ve,aU as Se,b6 as ie,bu as we,fD as $e,fB as Oe,J as xe,bE as oe,b_ as Fe,fG as Ie,V as v,cR as Le,li as je,bF as g,aw as d,lj as Te,aH as Be,dr as Ae,c3 as Ee,c4 as Pe,bt as _e,c5 as qe,dt as Re,ds as Ne,bn as Me,aK as ke,aP as Ue,dw as Ke,lk as Qe,c8 as De,dH as Ve,bw as Ce}from"./index-MdAHgiwM.js";import{m as He,s as Je}from"./capabilities-2iql_XB0.js";import{r as Ze,L as We,P as H}from"./SceneService-wTXny7BV.js";import{s as Ge,l as ze,u as Xe,m as Ye}from"./I3SLayerDefinitions-A0MrT4ev.js";import{$ as et}from"./I3SUtil-md1nqj_b.js";import{n as tt,p as rt}from"./popupUtils-oqfCIaPE.js";import{s as st}from"./associatedFeatureServiceUtils-aZH55_Z2.js";import{I as J,x as it,Z as ot}from"./elevationInfoUtils-49kGvYiI.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceUtils-rhk-dJ0i.js";import"./resourceUtils-CAoLi4_T.js";import"./saveAPIKeyUtils-tqDn4lZj.js";import"./mat4f64-BN7r1OmG.js";import"./computeTranslationToOriginAndRotation-sS88NSAW.js";import"./sphere-Ev-FZv6E.js";import"./ObjectStack-sWZjezQO.js";import"./plane-fep9VitG.js";import"./mat3f64-Km-wq5a6.js";import"./quatf64-upBlkCdX.js";import"./I3SBinaryReader-DZ8ZTxON.js";import"./VertexAttribute-Hx-XL6n4.js";import"./symbolColorUtils-iiuU7HEE.js";import"./orientedBoundingBox-HtZ6wUgt.js";import"./quat-g0cyP21X.js";let y=class extends de(he){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,i){return typeof i.alias=="string"?i.alias:typeof i.name=="string"?i.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(_(String))],y.prototype,"modelName",void 0),t([s(_(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,Z=Ie();let o=class extends He(ee.LoadableMixin(te(ae))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new me(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return i!=null&&typeof a=="number"?new re({portalItem:i,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=Ze(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,x.getLogger(this),r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const r=(await se(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,n,c;const i=(n=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:n[e];return i&&i.type!=="inherited"?i:((c=this.getField(e))==null?void 0:c.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Je,{query:r,data:{supportsZ:i,supportsM:a,isVersioned:n}}=e;return{query:r,data:{supportsZ:i,supportsM:a,isVersioned:n}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const i=be(this.fieldsIndex,await tt(this,rt(this)));return et(this.parsedUrl.path,this.attributeStorageInfo,e,r,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new ve;return a.attributes=i[0],a.layer=this,a.sourceLayer=this,a}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],o.prototype,"parsedUrl",null),t([s({type:Ge,readOnly:!0})],o.prototype,"nodePages",void 0),t([s({type:[ze],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([s({type:[Xe],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([s({type:[Ye],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],o.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([s({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([s(Z.fields)],o.prototype,"fields",void 0),t([s({readOnly:!0})],o.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:re})],o.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([s(Z.outFields)],o.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([s({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([s({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([s({readOnly:!0,type:Se})],o.prototype,"fullExtent",null),t([s({readOnly:!0,type:ie})],o.prototype,"spatialReference",null),t([s({readOnly:!0})],o.prototype,"version",null),t([s({readOnly:!0,type:we})],o.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([s({types:$e,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([s(Oe)],o.prototype,"popupEnabled",void 0),t([s({type:xe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([s()],o.prototype,"types",null),t([s()],o.prototype,"typeIdField",null),t([s({json:{write:!1}}),oe(new Fe({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([s()],o.prototype,"geometryType",null),t([s()],o.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),o=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const q=o;var R;const W={type:v,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,i){if(e&&Array.isArray(e))return new v(e.map(a=>{const n=at(a);if(n){const c=new n;return c.read(a,i),c}return i!=null&&i.messages&&a&&i.messages.push(new Le("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i})),null}))}let m=R=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return je(this,e=>R.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?m:q}t([s({type:["hide","show","hide-children"],json:{write:!0}})],m.prototype,"listMode",void 0),t([s(W)],m.prototype,"sublayers",void 0),m=R=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],m),function(e){function r(i,a){i.forEach(n=>{a(n),n.type==="building-group"&&r(n.sublayers,a)})}e.sublayersProperty=W,e.readSublayers=ne,e.forEachSublayer=r}(m||(m={}));const f=m;let L=class extends g{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const le=L;var N;let S=N=class extends g{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new N({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([s({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=N=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const nt=S;var M;const lt=v.ofType(nt);let j=M=class extends g{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([s({type:lt,json:{write:!0}})],j.prototype,"filterTypes",void 0),j=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],j);const pt=j;var k;const yt=v.ofType(pt);let w=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([s({type:["checkbox"]})],w.prototype,"type",void 0),t([s({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const G=w;let T=class extends g{};t([s({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const E=T;var U;let B=U=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=U=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const K=B;var Q;let $=Q=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Q({edges:d(this.edges)})}};t([oe({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([s(Te)],$.prototype,"edges",void 0),$=Q=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const z=$;var D;let A=D=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=D=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const X=A;var V;const ut={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:K,"wire-frame":z,"x-ray":X}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return K.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=V=class extends g{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new K,this.title=""}clone(){return new V({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([s(ut)],b.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=V=t([p("esri.layers.support.BuildingFilterBlock")],b);const dt=b;var C;const ct=v.ofType(dt);let h=C=class extends g{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Be(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],h.prototype,"description",void 0),t([s({type:ct,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:le,typeMap:{checkbox:G}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?G.fromJSON(e):null,write:!0}})],h.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"name",void 0),h=C=t([p("esri.layers.support.BuildingFilter")],h);const ht=h;let u=class extends g{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],u.prototype,"fieldName",void 0),t([s({type:String})],u.prototype,"modelName",void 0),t([s({type:String})],u.prototype,"label",void 0),t([s({type:Number})],u.prototype,"min",void 0),t([s({type:Number})],u.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends ee.LoadableMixin(te(g)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(x.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await se(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([s({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,ye=v.ofType(ht),ue=d(f.sublayersProperty);var Y;const P=(Y=ue.json)==null?void 0:Y.origins;P&&(P["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends We(Ae(Ee(Pe(_e(qe(Re(Ne(Ce)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Me({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const a=f.readSublayers(e,r,i);return f.forEachSublayer(a,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:r,context:i}){f.forEachSublayer(e,a=>a.read(r.get(a.id),i))}readSublayerOverrides(e,r){var a;const i=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?i.set(n.id,n):(a=r.messages)==null||a.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const a=[];f.forEachSublayer(this.sublayers,n=>{const c=n.write({},i);Object.keys(c).length>1&&a.push(c)}),a.length>0&&(r.sublayers=a)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(d(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){var i;if(typeof r.statisticsHRef=="string"){const a=ke((i=this.parsedUrl)==null?void 0:i.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Ue).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ke(this,e=>{f.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(H.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(H.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await st(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){x.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";J(x.getLogger(this),it(r,"absolute-height",e)),J(x.getLogger(this),ot(r,e))}};t([s({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],l.prototype,"allSublayers",void 0),t([s(ue)],l.prototype,"sublayers",void 0),t([I("service","sublayers")],l.prototype,"readSublayers",null),t([s({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([s(Qe)],l.prototype,"fullExtent",void 0),t([s(De)],l.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([s(_(ie))],l.prototype,"spatialReference",void 0),t([s(Ve)],l.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([s()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const Qt=l;export{Qt as default};
