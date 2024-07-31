import{s as y,ap as p,cW as T,cX as E,e1 as P,y as g,cR as _,w as R,G as q,c_ as I,cZ as b}from"./index-HTbDWax9.js";import{m as $}from"./FeatureStore-Ol6Th8ib.js";import{x as j,j as N}from"./timeSupport-lXukN0iV.js";import{$ as O}from"./QueryEngine-U4FYUeWH.js";import{E as Q,N as M}from"./geojson-WfdByiEn.js";import{p as k}from"./sourceUtils-UoOUQWng.js";import{o as L,e as Z,K as f}from"./wfsUtils-YRzwYASB.js";import"./BoundsStore-7jeOi4YG.js";import"./PooledRBush-ytCqnOkj.js";import"./json-v6EOeNTY.js";import"./WhereClause-Y69bhAOy.js";import"./TimeOnly-9WU72Wm4.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-YcmClFG8.js";import"./utils-lI-G7G-W.js";import"./ClassBreaksDefinition-WdiqQ2Kt.js";import"./RenderState-T1HVYW47.js";import"./date-be_IQzZd.js";const x="esri.layers.WFSLayer";class ne{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t={}){const{getFeatureUrl:a,getFeatureOutputFormat:s,fields:n,geometryType:u,featureType:o,maxRecordCount:i,maxTotalRecordCount:c,maxPageCount:C,objectIdField:d,customParameters:F}=e,{spatialReference:l,getFeatureSpatialReference:m}=L(a,o,e.spatialReference);try{await j(m,l)}catch{throw new y("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:l})}p(t),this._customParameters=F,this._featureType=o,this._fieldsIndex=T.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some(S=>S.type==="esriFieldTypeDate")?{timeZoneIANA:E}:null}),this._geometryType=u,this._getFeatureUrl=a,this._getFeatureOutputFormat=s,this._getFeatureSpatialReference=m,this._maxRecordCount=i,this._maxTotalRecordCount=c,this._maxPageCount=C,this._objectIdField=d,this._spatialReference=l;let h=await this._snapshotFeatures(t);if(h.errors.length>0&&(this._supportsPagination=!1,h=await this._snapshotFeatures(t),h.errors.length>0))throw h.errors[0];return this._queryEngine=new O({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:l,timeInfo:null,featureStore:new $({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(h.features),{warnings:w(h),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new y("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e.customParameters,this._maxRecordCount=e.maxRecordCount,this._maxTotalRecordCount=e.maxTotalRecordCount,this._maxPageCount=e.maxPageCount,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=P(a=>this._snapshotFeatures({signal:a})),this._snapshotTask.promise.then(a=>{var s;this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(a.features);for(const n of w(a))g.getLogger(x).warn(new _("wfs-layer:refresh-warning",n.message,n.details));(s=a.errors)!=null&&s.length&&g.getLogger(x).warn(new _("wfs-layer:refresh-error","Refresh completed with errors",{errors:a.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e){const t=e==null?void 0:e.signal,a=this._maxTotalRecordCount,s=this._maxPageCount,n=this._supportsPagination?await Z(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:t}):void 0;let u=[];const o=[];if(n==null)try{u=await this._singleQuery(t)}catch(i){R(i)||o.push(i)}else{const i=Math.min(n,a),c=U(this,Math.max(1,Math.min(Math.ceil(i/this._maxRecordCount),s)),t);await Promise.allSettled(Array.from({length:10}).map(()=>G(c,u,o)))}return p(t),{features:u,totalRecordCount:n,maxTotalRecordCount:a,maxPageCount:s,errors:o}}async _singleQuery(e){const t=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:e});return this._processGeoJSON(t,{signal:e})}async _pageQuery(e,t){const a=e*this._maxRecordCount,s=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:a,count:this._maxRecordCount,signal:t});return this._processGeoJSON(s,{startIndex:a,signal:t})}_processGeoJSON(e,t){Q(e,this._getFeatureSpatialReference.wkid);const{startIndex:a,signal:s}=t;p(s);const n=M(e,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!q(this._spatialReference,this._getFeatureSpatialReference))for(const o of n)o.geometry!=null&&(o.geometry=I(N(b(o.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=a??1;for(const o of n){const i={};k(this._fieldsIndex,i,o.attributes,!0),o.attributes=i,i[this._objectIdField]==null&&(o.objectId=i[this._objectIdField]=u++)}return n}}function*U(r,e,t){for(let a=0;a<e;a++)yield r._pageQuery(a,t)}async function G(r,e,t){let a=r.next();for(;!a.done;){try{const s=await a.value;e.push(...s)}catch(s){R(s)||t.push(s)}a=r.next()}}function w(r){const e=[];return r.totalRecordCount!=null&&(r.features.length<r.totalRecordCount&&e.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${r.features.length} of ${r.totalRecordCount} in ${r.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount}}),r.totalRecordCount>r.maxTotalRecordCount&&e.push({name:"wfs-layer:large-dataset",message:`The number of ${r.totalRecordCount} features exceeds the maximum allowed of ${r.maxTotalRecordCount}.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount,maxTotalRecordCount:r.maxTotalRecordCount}})),e}export{ne as default};
