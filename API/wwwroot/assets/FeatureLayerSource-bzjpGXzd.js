import{G,aG as k,a4 as V,eG as H,eH as C,eI as z,y as $,s as A,O as B,et as W,b_ as D,z as _,A as T,eJ as X,C as Y,ae as P,eK as Z,eL as x,U as m,q as M,eM as K,eN as ee,eO as te,eP as ae,eQ as se,aU as re,eR as ne,dx as ie,aK as L,_ as oe,eS as ue,cQ as le,aP as de,aC as ce,b6 as pe,eT as he,eU as ye,eV as me,B as fe,aQ as ge}from"./index-qTI7pilI.js";import{g as we,a as be}from"./meshVertexSpaceUtils-Vvq9mNro.js";import{v as Re}from"./External-MwixzmCm.js";import{isFeatureIdentifierArrayWithGlobalId as qe,isFeatureIdentifierArrayWithObjectId as Se}from"./editingSupport-TU_I-n-W.js";import{o as Ie}from"./clientSideDefaults-10WXiB66.js";import"./MeshLocalVertexSpace-mu6f8_hM.js";import"./vec3-4pz5z_xO.js";import"./QueryEngineCapabilities-PzVpW5yD.js";async function Q(t,e,a){const{geometry:s}=e,r={...e.attributes};if(a!=null&&(s==null?void 0:s.type)==="mesh"){const{transformFieldRoles:n}=a,{origin:o,spatialReference:i,transform:u,vertexSpace:l}=s,c=l.type==="local",p=t.spatialReference,f=p.isGeographic,S=G(p,i),b=S||k(p)&&(k(i)||V(i));if(!(c&&f&&b||!c&&!f&&S))return null;const d=H(o,i,p);if(d==null)return null;if(r[n.originX]=d.x,r[n.originY]=d.y,r[n.originZ]=d.z??0,u!=null){const{translation:I,scale:h,rotation:y}=u,R=c?1:C(i)/C(p);r[n.translationX]=I[0]*R,r[n.translationY]=I[2]*R,r[n.translationZ]=-I[1]*R,r[n.scaleX]=h[0],r[n.scaleY]=h[2],r[n.scaleZ]=h[1],r[n.rotationX]=y[0],r[n.rotationY]=y[2],r[n.rotationZ]=-y[1],r[n.rotationDeg]=y[3]}return{attributes:r}}return s==null?{attributes:r}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:r}}async function Oe(t,e){const a=await Promise.all((e.addAttachments??[]).map(n=>j(t,n))),s=await Promise.all((e.updateAttachments??[]).map(n=>j(t,n))),r=e.deleteAttachments??[];return a.length||s.length||r.length?{adds:a,updates:s,deletes:[...r]}:null}async function j(t,e){var c;const{feature:a,attachment:s}=e,{globalId:r,name:n,contentType:o,data:i,uploadId:u}=s,l={globalId:r};if(a&&("attributes"in a?l.parentGlobalId=(c=a.attributes)==null?void 0:c[t.globalIdField]:a.globalId&&(l.parentGlobalId=a.globalId)),u)l.uploadId=u;else if(i){const p=await z(i);p&&(l.contentType=p.mediaType,l.data=p.data),i instanceof File&&(l.name=i.name)}return n&&(l.name=n),o&&(l.contentType=o),l}function Ae(t,e,a){if(!e||e.length===0)return[];if(a&&qe(e))return e.map(r=>r.globalId);if(Se(e))return e.map(r=>r.objectId);const s=a?t.globalIdField:t.objectIdField;return s?e.map(r=>r.getAttribute(s)):[]}function Fe(t){var r,n,o;const e=t==null?void 0:t.assetMaps;if(e){for(const i of e.addResults)i.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${i.globalId}.`);for(const i of e.updateResults)i.success||$.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${i.globalId}.`)}const a=t==null?void 0:t.attachments,s={addFeatureResults:((r=t==null?void 0:t.addResults)==null?void 0:r.map(q))??[],updateFeatureResults:((n=t==null?void 0:t.updateResults)==null?void 0:n.map(q))??[],deleteFeatureResults:((o=t==null?void 0:t.deleteResults)==null?void 0:o.map(q))??[],addAttachmentResults:a!=null&&a.addResults?a.addResults.map(q):[],updateAttachmentResults:a!=null&&a.updateResults?a.updateResults.map(q):[],deleteAttachmentResults:a!=null&&a.deleteResults?a.deleteResults.map(q):[]};return t!=null&&t.editMoment&&(s.editMoment=t.editMoment),s}function q(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new A("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function v(t,e){return new B({attributes:t.attributes,geometry:W({...t.geometry,spatialReference:e})})}function Ee(t,e){var a,s,r;return{adds:((a=t==null?void 0:t.adds)==null?void 0:a.map(n=>v(n,e)))||[],updates:((s=t==null?void 0:t.updates)==null?void 0:s.map(n=>({original:v(n[0],e),current:v(n[1],e)})))||[],deletes:((r=t==null?void 0:t.deletes)==null?void 0:r.map(n=>v(n,e)))||[],spatialReference:e}}function _e(t){const e=t.details.raw,a=+e.code,s=+e.extendedCode;return a===500&&(s===-2147217144||s===-2147467261)}const xe=new D({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),ve=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),$e=new D({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let F=class extends X{constructor(){super(...arguments),this.type="feature-layer",this.refresh=Y(async()=>{var a,s;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,a=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var l;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:s,gdbVersion:r,spatialReference:n,fieldsIndex:o}=this.layer,i=P("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&s==null,u=((l=t==null?void 0:t.operations)==null?void 0:l.supportsQueryAttachments)??!1;return new Z({url:e.path,pbfSupported:i,fieldsIndex:o,infoFor3D:s,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",n=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(e,n.query);try{const i=await m(r,{body:o});return q(i.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}async updateAttachment(t,e,a){await this.load();const{layer:s}=this;await x(s,"editing");const r=t.attributes[s.objectIdField],n=s.parsedUrl.path+"/"+r+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:e}}),i=this._getFormDataForAttachment(a,o.query);try{const u=await m(n,{body:i});return q(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var g,O,E,N,J,U;await this.load();const{layer:a}=this;await x(a,"editing");const s=a.infoFor3D,r=s!=null,n=r||((e==null?void 0:e.globalIdUsed)??!1),o=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,i=((g=t.addFeatures)==null?void 0:g.map(w=>Q(this.layer,w,s)))??[],u=(await Promise.all(i)).filter(M),l=((O=t.updateFeatures)==null?void 0:O.map(w=>Q(this.layer,w,s)))??[],c=(await Promise.all(l)).filter(M),p=Ae(this.layer,t.deleteFeatures,n);K(u,c,a.spatialReference);const f=await Oe(this.layer,t),S=a.capabilities.editing.supportsAsyncApplyEdits&&r,b=(e==null?void 0:e.gdbVersion)||a.gdbVersion,d={gdbVersion:b,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:S};await ee(this.layer.url,b,!0);const I=te(this.layer.url,b||null);if(await ae(a.url,b,a.historicMoment))throw new A("feature-layer-source:historic-version","Editing a historic version is not allowed");e!=null&&e.returnServiceEditsOption?(d.edits=JSON.stringify([{id:a.layerId,adds:u,updates:c,deletes:p,attachments:f,assetMaps:o}]),d.returnServiceEditsOption=xe.toJSON(e==null?void 0:e.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(d.adds=u.length?JSON.stringify(u):null,d.updates=c.length?JSON.stringify(c):null,d.deletes=p.length?n?JSON.stringify(p):p.join(","):null,d.attachments=f&&JSON.stringify(f),d.assetMaps=o!=null?JSON.stringify(o):void 0);const h=this._getLayerRequestOptions({method:"post",query:d});I&&(h.authMode="immediate",h.query.returnEditMoment=!0,h.query.sessionId=se);const y=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path;let R;try{R=S?await this._asyncApplyEdits(y+"/applyEdits",h):await m(y+"/applyEdits",h)}catch(w){if(!_e(w))throw w;h.authMode="immediate",R=S?await this._asyncApplyEdits(y+"/applyEdits",h):await m(y+"/applyEdits",h)}if(!((E=a.capabilities.operations)!=null&&E.supportsEditing)&&((J=(N=a.effectiveCapabilities)==null?void 0:N.operations)!=null&&J.supportsEditing)){const w=(U=ge)==null?void 0:U.findCredential(a.url);await(w==null?void 0:w.refreshToken())}return this._createEditsResult(R)}async deleteAttachments(t,e){await this.load();const{layer:a}=this;await x(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await m(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(q)}catch(n){throw this._createAttachmentErrorResult(s,n)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:n}=await m(`${r}/${s}`,a),{id:o,extent:i,fullExtent:u,timeExtent:l}=n,c=i||u;return{id:o,fullExtent:c&&re.fromJSON(c),timeExtent:l&&ne.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){var s;await this.load();const a=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(s=t.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var o;const n=r.attributes;(o=t.outStatistics)==null||o.forEach(({outStatisticFieldName:i})=>{if(i){const u=i.toLowerCase();u&&u in n&&i!==u&&(n[i]=n[u],delete n[u])}})}),a}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!ie(this.layer.url))return"unavailable";const t=L(this.layer.url,"status"),e=await m(t,{query:{f:"json"}});return $e.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await oe(()=>import("./uploadAssets-VikAEluu.js"),__vite__mapDeps([0,1,2,3,4]));return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const a=(await m(t,e)).data.statusUrl;for(;;){const s=(await m(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return m(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await ue(Te)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const s={};P("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(s._ts=Date.now());const{data:r}=await m(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const a=t.type;if(!ve.has(a))throw new A("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=Ie(t.geometryType).renderer;le("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await m(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){de(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length))return null;const a=await this._filterRedundantAssetMaps(e);if(!(e!=null&&e.length))return null;const s=new Array,r=new Map;for(const n of a){const{geometry:o}=n,{vertexSpace:i}=o;if(we(i))s.push(o);else{const u=be(o);r.set(u,o),n.geometry=u,s.push(u)}}await this.uploadAssets(s);for(const[n,o]of r)o.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const n=r.geometry,{metadata:o}=n,i=o.getExternalSourcesOnService(s),u=r.getAttribute(a);if(i.length===0){$.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=i.find(Re)??i[0];for(const c of l)c.parts.length===1?e.push({globalId:ce(),parentGlobalId:u,assetName:c.assetName,assetHash:c.parts[0].partHash,flags:[]}):$.getLogger(this).error(`Skipping asset ${c.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const o of e)s.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===a&&(r={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else r=e;const n=Fe(r);if(s.length>0){n.editedFeatureResults=[];for(const o of s){const{editedFeatures:i}=o,u=i!=null&&i.spatialReference?new pe(i.spatialReference):null;n.editedFeatureResults.push({layerId:o.id,editedFeatures:Ee(i,u)})}}return n}_createAttachmentErrorResult(t,e){var r;const a=((r=e.details.messages)==null?void 0:r[0])||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new A("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:a,infoFor3D:s,parsedUrl:r}=e;if(s==null||a==null)return t;const n=he(s);if(n==null)return t;const o=L(r.path,`../${n.id}`),i=new Array,u=new Array;for(const d of t)d.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(d):i.push(d);const l=u.map(d=>d.getAttribute(a)).filter(M);if(l.length===0)return t;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:p}}=s,f=new ye;f.where=`${c} IN (${l.map(d=>`'${d}'`)})`,f.outFields=[p,c],f.returnGeometry=!1;const S=await me(o,f),{features:b}=S;return b.length===0?t:[...i,...u.filter(d=>{const I=d.getAttribute(a);if(!I)return!0;const{metadata:h}=d.geometry,y=b.filter(g=>g.getAttribute(c)===I);if(y.length===0)return!0;const R=y.map(g=>g.getAttribute(p));return h.getExternalSourcesOnService(r).flatMap(({source:g})=>g.flatMap(O=>O.parts.map(E=>E.partHash))).some(g=>R.every(O=>g!==O))})]}};_([T()],F.prototype,"type",void 0),_([T({constructOnly:!0})],F.prototype,"layer",void 0),_([T({readOnly:!0})],F.prototype,"queryTask",null),F=_([fe("esri.layers.graphics.sources.FeatureLayerSource")],F);const Te=1e3,Qe=F;export{Qe as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/uploadAssets-VikAEluu.js","assets/index-qTI7pilI.js","assets/index-XQT8DJa7.css","assets/External-MwixzmCm.js","assets/uploadAssetErrors-yryOW0Dk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
