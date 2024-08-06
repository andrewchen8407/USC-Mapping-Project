import{z as s,A as o,B as L,bF as Q,b$ as X,V as j,aR as _,b0 as Y,cR as P,ht as ee,c6 as g,aV as te,eB as re,hu as ie,U as V,aw as se,_ as k,f$ as ae,dr as oe,c3 as ne,c4 as le,bt as pe,c5 as de,dt as ye,ds as ue,c0 as ce,cW as he,g0 as fe,fu as x,ig as R,y as f,aP as me,bD as ge,eU as ve,s as d,ih as we,O as be,fv as Ie,aK as Le,dx as T,ii as Fe,ij as Se,an as _e,ik as $e,il as D,im as $,b as Ee,w as Oe,fH as je,io as Ae,ip as Pe,iq as xe,dH as Re,fx as Te,fy as De,fz as q,c8 as qe,ir as Ue,fD as Ne,fB as Ce,J as Ge,fE as Qe,fG as Ve,bw as ke}from"./index-D5SqUFXo.js";import{$ as He}from"./Mesh-gQwhg9Kr.js";import{i as Je,m as Ke}from"./uploadAssetErrors-1kat8UZK.js";import{L as Me,P as U}from"./SceneService-F3k0Dvdy.js";import{m as We,s as ze}from"./capabilities-zBLOTR2k.js";import{s as Ze}from"./associatedFeatureServiceUtils-_DTwqqYk.js";import{s as H,l as Be,u as Xe,m as Ye}from"./I3SLayerDefinitions-8Jw1396w.js";import{j as et}from"./persistable-gB-95b8G.js";import{I as N,y as tt,Z as rt}from"./elevationInfoUtils-ArsK0gT8.js";import{$ as it}from"./I3SUtil-K975POOw.js";import{n as st,p as at}from"./popupUtils-k0esfIJe.js";import"./georeference-3NiRt8UR.js";import"./mat3f64-Km-wq5a6.js";import"./mat4f64-BN7r1OmG.js";import"./computeTranslationToOriginAndRotation-CCCyuhv3.js";import"./DoubleArray-XPGgVSJf.js";import"./quat-UXje8GOY.js";import"./quatf64-upBlkCdX.js";import"./meshVertexSpaceUtils-N-jlOIEl.js";import"./MeshLocalVertexSpace-ewgpedL1.js";import"./vec3-Y5km07Jz.js";import"./BufferView-tv9BvHnC.js";import"./imageUtils-HV_GYkRV.js";import"./earcut-lDMuCQlH.js";import"./Indices-ik3-FDdP.js";import"./deduplicate-YSpONAua.js";import"./plane-uKpz0_By.js";import"./triangle-vpk1wCYs.js";import"./Util-DkuZNs_s.js";import"./ObjectStack-vt-rRM6t.js";import"./lineSegment-WAIIh-RE.js";import"./basicInterfaces-IwaMq8O_.js";import"./VertexAttribute-Hx-XL6n4.js";import"./External-oy86pT_g.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceUtils-mwA4xBj-.js";import"./resourceUtils-c239OYf1.js";import"./saveAPIKeyUtils--Z7nXnUZ.js";import"./resourceExtension-55WDxmD-.js";import"./sphere-A1K5C2qj.js";import"./I3SBinaryReader-vcLZHx6a.js";import"./symbolColorUtils-rdE0sEzV.js";import"./orientedBoundingBox-pRzZTSHI.js";let m=class extends Q{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([o({type:String,json:{read:!0,write:!0}})],m.prototype,"name",void 0),s([o({type:String,json:{read:!0,write:!0}})],m.prototype,"field",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],m.prototype,"currentRangeExtent",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],m.prototype,"fullRangeExtent",void 0),s([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=s([L("esri.layers.support.RangeInfo")],m);var b;let E=b=class extends X(j.ofType(_)){constructor(e){super(e)}clone(){return new b(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(i=>{if(!t.equals(i.spatialReference)){if(!Y(i.spatialReference,t))return e!=null&&e.messages&&e.messages.push(new P("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new _;ee(i,l,t),i=l}const n=i.toJSON(e);return delete n.spatialReference,n}).filter(i=>i!=null):(e!=null&&e.messages&&e.messages.push(new P("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(i=>i.toJSON(e)))}static fromJSON(e,t){const r=new b;return e.forEach(i=>r.add(_.fromJSON(i,t))),r}};E=b=s([L("esri.layers.support.PolygonCollection")],E);const I=E;var O;let v=O=class extends Q{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new I,this._geometriesSource=null}initialize(){this.addHandles(te(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,re))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=I.fromJSON(e,r):this._geometriesSource={url:ie(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:i}=this._geometriesSource,n=await V(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),p=n.data.map(y=>({...y,spatialReference:l}));this.geometries=I.fromJSON(p,i),this._geometriesSource=null}clone(){const e=new O({geometries:se(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};s([o({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],v.prototype,"spatialRelationship",void 0),s([o({type:I,nonNullable:!0,json:{write:!0}}),et({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],v.prototype,"geometries",void 0),s([g(["web-scene","portal-item"],"geometries")],v.prototype,"readGeometries",null),v=O=s([L("esri.layers.support.SceneFilter")],v);const ot=v;async function nt(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(lt(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function lt(e){const{BlobReader:t,ZipReader:r,BlobWriter:i}=await k(()=>import("./zipjs-wrapper-tS5InKuY.js"),__vite__mapDeps([])),n=[];return(await new r(new t(e)).getEntries()).forEach(p=>{var c;if(p.directory||/^__MACOS/i.test(p.filename))return;const y=new i,u=(c=p.getData)==null?void 0:c.call(p,y).then(h=>new File([h],p.filename));u&&n.push(u)}),Promise.all(n)}const pt=new Set(["3DObject","Point"]),C=Ve();let a=class extends We(ae(Me(oe(ne(le(pe(de(ye(ue(ce(ke))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new j,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var i,n,l;const r=(n=(i=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:i.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new he(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:H.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&fe(this.associatedLayer)}get geometryType(){return dt[this.profile]||"mesh"}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var e;return this._capabilitiesFromAssociatedFeatureLayer((e=this.associatedLayer)==null?void 0:e.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){var A;e=e??ze;const{query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:p,supportsReturnServiceEditsInSourceSpatialReference:y},data:{supportsZ:u,supportsM:c,isVersioned:h,supportsAttachment:F},operations:{supportsEditing:J,supportsAdd:K,supportsUpdate:M,supportsDelete:W,supportsQuery:z,supportsQueryAttachments:Z,supportsAsyncConvert3D:B}}=e,w=e.operations.supportsChangeTracking,S=!!((A=this.associatedLayer)!=null&&A.infoFor3D)&&R();return{query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsReturnServiceEditsInSourceSpatialReference:y,supportsRollbackOnFailure:n,supportsGeometryUpdate:S&&p,supportsUploadWithItemId:l},data:{supportsAttachment:F,supportsZ:u,supportsM:c,isVersioned:h},operations:{supportsQuery:z,supportsQueryAttachments:Z,supportsEditing:J&&w,supportsAdd:S&&K&&w,supportsDelete:S&&W&&w,supportsUpdate:M&&w,supportsAsyncConvert3D:B}}}get editingEnabled(){var e;return this._isOverridden("editingEnabled")?this._get("editingEnabled"):((e=this.associatedLayer)==null?void 0:e.editingEnabled)??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get relationships(){var e;return(e=this.associatedLayer)==null?void 0:e.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&G[r]?G[r]:(f.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(me),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await ge(this,{origin:"service"},t),x(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){f.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new ve;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const i of r.features)i.layer=this,i.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=we(this.fieldsIndex,await st(this,at(this)));return it(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new be;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(f.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Ie(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const n=Le(this.parsedUrl.path,i.href);return V(n,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(U.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(U.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await k(()=>import("./editingSupport-5FmEzamv.js"),__vite__mapDeps([0,1,2]));let i=t;await this.load();const n=this.associatedLayer;if(!n)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,p=!!n.infoFor3D,y=(i==null?void 0:i.globalIdUsed)??!0;if(p&&l==null)throw new d(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(p&&!y)throw new d(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return T(n.url)&&p&&e.deleteFeatures!=null&&l!=null&&(i={...i,globalIdToObjectId:await Fe(n,e.deleteFeatures,l)}),r(this,n.source,e,i)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r=h=>{throw f.getLogger(this).error(".convertMesh()",h.message),h};await this.load(),this.infoFor3D||r(new d("invalid:layer","SceneLayer has no capability for mesh conversion"));const i=await this.extractAndFilterFiles(e),n=i.reduce((h,F)=>Se(this.infoFor3D,F)?h+1:h,0);n===0&&r(new Je),n>1&&r(new Ke);const l=this.spatialReference,p=(t==null?void 0:t.location)??new _e({x:0,y:0,z:0,spatialReference:l}),y=p.spatialReference.isGeographic?"local":"georeferenced",u=He.createWithExternalSource(p,i,{vertexSpace:y}),[c]=await this.uploadAssets([u],t);return c}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await nt(e)).filter(r=>$e(t,r)):e}validateLayer(e){if(e.layerType&&!pt.has(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,i){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const p=i&&i.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},this.fields)for(const r of this.fields){const i=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(p=>p.name===r.name)),n=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(p=>p&&r.name===p.name)),l={supportsLabelingInfo:i,supportsRenderer:i,supportsPopupTemplate:i||n,supportsLayerQuery:n};this._fieldUsageInfo[r.name]=l}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const i=this.getField(r.name);i?(!i.domain&&r.domain&&(i.domain=r.domain.clone()),i.editable=r.editable,i.nullable=r.nullable,i.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=D(this);for(let r=0;r<e.length;r++){const i=e[r],n=this.originIdOf(i),l=this.associatedLayer.originIdOf(i);n<l&&(l===$.SERVICE||l===$.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],l)}}_applyAssociatedLayerExtentOverride(){var i,n,l,p,y,u,c;const e=(n=(i=this.associatedLayer)==null?void 0:i.editingInfo)==null?void 0:n.lastEditDate,t=(l=this.associatedLayer)==null?void 0:l.serverGens,r=(p=this.associatedLayer)==null?void 0:p.getAtOrigin("fullExtent","service");!R()||((y=this.associatedLayer)==null?void 0:y.infoFor3D)==null||!r||!T((u=this.associatedLayer)==null?void 0:u.url)||!e||((c=this.serviceUpdateTimeStamp)==null?void 0:c.lastUpdate)===e.getTime()||!this.serviceUpdateTimeStamp&&(t==null?void 0:t.minServerGen)===(t==null?void 0:t.serverGen)||D(this).setAtOrigin("fullExtent",r.clone(),$.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:i}=await Ze(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await Ee.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:i}),await this.associatedLayer.load()}catch(t){Oe(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await je(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?f.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):f.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&N(f.getLogger(this),tt("Mesh scene layers","relative-to-scene",e)),N(f.getLogger(this),rt("Scene layers",e))}};s([o({types:{key:"type",base:Ae,typeMap:{selection:Pe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),s([o({type:[m],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),s([o({json:{read:!1}})],a.prototype,"associatedLayer",void 0),s([o({type:["show","hide"]})],a.prototype,"listMode",void 0),s([o({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),s([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),s([o({...C.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),s([o()],a.prototype,"types",null),s([o()],a.prototype,"typeIdField",null),s([o()],a.prototype,"templates",null),s([o()],a.prototype,"formTemplate",null),s([o({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),s([o({type:xe,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),s([o(C.outFields)],a.prototype,"outFields",void 0),s([o({type:H,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),s([g("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),s([o({type:[Be],readOnly:!0})],a.prototype,"materialDefinitions",void 0),s([o({type:[Xe],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),s([o({type:[Ye],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),s([o({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),s([o({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),s([o({readOnly:!0})],a.prototype,"statisticsInfo",void 0),s([o({type:j.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),s([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),s([o({type:ot,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([o(Re)],a.prototype,"elevationInfo",null),s([o({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),s([o({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([o({type:String})],a.prototype,"geometryType",null),s([o(Te)],a.prototype,"labelsVisible",void 0),s([o({type:[De],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:q},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:q},write:!0}})],a.prototype,"labelingInfo",void 0),s([o(qe)],a.prototype,"legendEnabled",void 0),s([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var i,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(i=t.layerDefinition)==null?void 0:i.drawingInfo)==null?void 0:n.transparency;return r!==void 0?Ue(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),s([o({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),s([o({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),s([o({types:Ne,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),s([o({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),s([g("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),s([o({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),s([o({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),s([o({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),s([o({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),s([o(Ce)],a.prototype,"popupEnabled",void 0),s([o({type:Ge,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),s([o({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),s([o({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),s([g("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),s([o({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),s([g("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),s([o({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),s([o({type:String,json:{read:!1}})],a.prototype,"profile",void 0),s([g("service","profile",["store.profile"])],a.prototype,"readProfile",null),s([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),s([o(Qe)],a.prototype,"screenSizePerspectiveEnabled",void 0),s([o({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),a=s([L("esri.layers.SceneLayer")],a);const G={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},dt={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},tr=a;export{tr as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/editingSupport-5FmEzamv.js","assets/index-D5SqUFXo.js","assets/index-b56Di407.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
