import{d2 as _,dJ as j,s as I,dU as P,w as R,y as V,bA as A,U as L,cW as w,cX as T,dT as G,G as Q,a4 as M,gc as U,gd as Z,b6 as J,d4 as Y,ct as W,d0 as B,bz as z}from"./index-MnnkPTiO.js";import{e as H,n as K}from"./date-be_IQzZd.js";import{t as X}from"./json-v6EOeNTY.js";import{m as ee}from"./FeatureStore-w7CcbH0o.js";import{x as te}from"./timeSupport-HNgs7TEa.js";import{$ as ie}from"./QueryEngine-k3SaPIhi.js";import{a as ne}from"./number-ump7HnwX.js";import{i as se,o as re}from"./clientSideDefaults-5mM7Rkas.js";import"./BoundsStore-OZ1VGHyV.js";import"./PooledRBush-QOsRZLK8.js";import"./WhereClause-gHv1bLDx.js";import"./TimeOnly-g-sNMluw.js";import"./QueryEngineCapabilities-PzVpW5yD.js";import"./utils-y7mDQfJU.js";import"./utils-ffUnu3R5.js";import"./ClassBreaksDefinition-jA_w1Rvl.js";import"./RenderState-T1HVYW47.js";const E=/^\s*"([\S\s]*)"\s*$/,S=/""/g,O=`
`,oe=[","," ",";","|","	"];function*$(s,t,e){let i=0;for(;i<=s.length;){const n=s.indexOf(t,i),r=s.substring(i,n>-1?n:void 0);i+=r.length+t.length,e&&!r.trim()||(yield r)}}function q(s){const t=s.includes(`\r
`)?`\r
`:O;return $(s,t,!0)}function C(s,t){return $(s,t,!1)}function ae(s,t,e){s=s.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...oe])).filter(o=>o!=null);for(const o of n){const a=N(s,o).length,d=N(t,o).length??a;a>1&&i.push({weight:Math.min(a,d),delimiter:o})}const r=i.sort(({weight:o},{weight:a})=>a-o).map(({delimiter:o})=>o);for(const o of r){const a=le(k(s,o).names,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(a.longitudeFieldName&&a.latitudeFieldName)return{delimiter:o,locationInfo:a}}return{delimiter:r[0],locationInfo:null}}function*v(s,t,e,i=()=>Object.create(null)){const n=q(s);n.next();let r="",o="",a=0,d=i(),u=0;e:for(const h of n){const m=C(h,e);for(const y of m)if(r+=o+y,o="",a+=D(y),a%2==0){if(a>0){const g=E.exec(r);if(!g){d=i(),u=0,r="",a=0;continue e}d[t[u]]=g[1].replaceAll(S,'"'),u++}else d[t[u]]=r,u++;r="",a=0}else o=e;a===0?(yield d,d=i(),u=0):o=O}}function k(s,t){const e=N(s,t).filter(n=>n!=null),i=e.map(n=>_(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function N(s,t){if(!(s!=null&&s.length))return[];const e=[];let i="",n="",r=0;const o=C(s,t);for(const a of o)if(i+=n+a,n="",r+=D(a),r%2==0){if(r>0){const d=E.exec(i);d&&e.push(d[1].replaceAll(S,'"'))}else e.push(i);i="",r=0}else n=t;return e}function D(s){let t=0,e=0;for(e=s.indexOf('"',e);e>=0;)t++,e=s.indexOf('"',e+1);return t}function le(s,t,e){var o,a;t=(o=_(t))==null?void 0:o.toLowerCase(),e=(a=_(e))==null?void 0:a.toLowerCase();const i=s.map(d=>d.toLowerCase()),n=t?s[i.indexOf(t)]:null,r=e?s[i.indexOf(e)]:null;return{longitudeFieldName:n||s[i.indexOf(fe.find(d=>i.includes(d)))],latitudeFieldName:r||s[i.indexOf(ue.find(d=>i.includes(d)))]}}function ce(s,t,e,i,n){const r=[],o=v(s,e,t),a=[];for(const d of o){if(a.length===10)break;a.push(d)}for(let d=0;d<e.length;d++){const u=e[d],h=i[d];if(u===n.longitudeFieldName||u===n.latitudeFieldName)r.push({name:u,type:"esriFieldTypeDouble",alias:h});else{let m;switch(de(a.map(y=>y[u]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}r.push({name:u,type:m,alias:h,length:j(m)})}}return r}function de(s){if(!s.length)return"string";const t=/[^+\-.,0-9]/;return s.map(e=>{if(e!==""){if(!t.test(e)){let i=x(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")&&(i=Number(e),!Number.isNaN(i)||e.includes(",")&&(e=e.replace(",","."),i=Number(e),!Number.isNaN(i))))return"double"}return H(e)?"date":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const x=function(){const s=ne(),t=new RegExp("^"+s.regexp+"$"),e=new RegExp("["+s.group+"\\s\\xa0]","g"),i=s.factor;return n=>{const r=t.exec(n);if(s.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],s.factor*=-1}return o=o.replace(e,"").replace(s.decimal,"."),+o*s.factor}}(),ue=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],fe=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],me=re("esriGeometryPoint"),pe=["csv"],he=[0,0];class ye{constructor(t,e){this.x=t,this.y=e}}class je{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var d;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((d=t==null?void 0:t.parsingOptions)==null?void 0:d.spatialReference)]),n=ge(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const r=await this._createFeatures(i);this._queryEngine.featureStore.addMany(r);const{fullExtent:o,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=o,a){const{start:u,end:h}=a;n.layerDefinition.timeInfo.timeExtent=[u,h]}return n}async applyEdits(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var n;this._loadOptions.customParameters=t,(n=this._snapshotTask)==null||n.abort(),this._snapshotTask=P(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),R(r)||V.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:r}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");const n=A(e);return(await L(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:r}=t.layerDefinition,o=new ee({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new ie({fieldsIndex:w.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:o})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:o}=this._queryEngine;let a=[];const d=[],u=r.fields.filter(l=>l.name!==n).map(l=>l.name);let h=0;const m={};for(const l of r.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=G(l);p!==void 0&&(m[l.name]=p)}const y=v(t,u,this._delimiter,se(m,n));for(const l of y){const p=this._parseCoordinateValue(l[e]),F=this._parseCoordinateValue(l[i]);if(F!=null&&p!=null&&!isNaN(p)&&!isNaN(F)){l[e]=p,l[i]=F;for(const c in l)if(c!==e&&c!==i){if(r.isDateField(c))l[c]=K(l[c]);else if(r.isNumericField(c)){const f=x(l[c]);isNaN(f)?l[c]=null:l[c]=f}}l[n]=h,h++,a.push(new ye(F,p)),d.push(l)}}if(!Q({wkid:4326},o))if(M(o))for(const l of a)[l.x,l.y]=U(l.x,l.y,he);else a=Z(X,a,J.WGS84,o,null,null);const g=[];for(let l=0;l<a.length;l++){const{x:p,y:F}=a[l],c=d[l];c[n]=l+1,g.push(new Y(new W([],[p,F]),c,null,c[n]))}return g}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=x(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await te(B,t)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}}}function ge(s,t){var l,p,F;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:z(t.url,pe)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:me,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},r=q(s),o=(l=r.next().value)==null?void 0:l.trim(),a=(p=r.next().value)==null?void 0:p.trim();if(!o)throw new I("csv-layer:empty-csv","CSV is empty",{csv:s});const{delimiter:d,locationInfo:u}=ae(o,a,e);if(!d)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:a,parsingOptions:e});if(!u)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:a,parsingOptions:e});i.locationInfo=u,i.delimiter=d;const{names:h,aliases:m}=k(o,d),y=ce(s,i.delimiter,h,m,i.locationInfo);if((F=e.fields)!=null&&F.length){const c=new w(e.fields);for(const f of y){const b=c.get(f.name);b&&Object.assign(f,b)}}if(!y.some(c=>c.type==="esriFieldTypeOID"&&(n.objectIdField=c.name,!0))){const c={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=c.name,y.unshift(c)}n.fields=y;const g=new w(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=g.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=g.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const c=n.timeInfo;if(c.startTimeField){const f=g.get(c.startTimeField);f?(c.startTimeField=f.name,f.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const f=g.get(c.endTimeField);f?(c.endTimeField=f.name,f.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const f=g.get(c.trackIdField);c.trackIdField=f?f.name:null}c.startTimeField||c.endTimeField||(n.timeInfo=null)}return i}export{je as default};
