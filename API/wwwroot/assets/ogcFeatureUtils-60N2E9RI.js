import{s as j,cU as q,bf as H,U as $,cV as ee,cW as L,cX as ne,b6 as x,cY as te,cZ as ie,c_ as ae,c$ as E,d0 as se,bA as K,y as re,d1 as oe}from"./index-5-AWHvTS.js";import{E as le,I as ce,N as ue}from"./geojson-QT_LOKGi.js";import{o as de}from"./clientSideDefaults-i4I-F3sj.js";import{p as fe}from"./sourceUtils-UHhBYzRb.js";const G=()=>re.getLogger("esri.layers.ogc.ogcFeatureUtils"),J="startindex",me=new Set([J,"offset"]),U="http://www.opengis.net/def/crs/",xe=`${U}OGC/1.3/CRS84`;var l;async function $e(e,n,t={},i=5){const{links:a}=e,o=g(a,"items",l.geojson)||g(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:p}=t,f=q(o.href,e.landingPage.url),y={limit:i,...c,token:d},T=H(f,y),W={accept:l.geojson},{data:S}=await $(T,{signal:p,headers:W}),N=Fe(T,i,S.links)??J;le(S);const m=ce(S,{geometryType:n.geometryType}),F=n.fields||m.fields||[],Z=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let r=n.timeInfo;const v=F.find(({name:s})=>s===b);if(v)v.editable=!1,v.nullable=!1;else{if(!m.objectIdFieldType)throw new j("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");F.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const s=F.find(({name:u})=>u===m.objectIdFieldName);s&&(s.type="esriFieldTypeInteger")}F===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const s of F){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"&&(s.editable=s.editable==null||!!s.editable,s.nullable=s.nullable==null||!!s.nullable),!s.name)throw new j("ogc-feature-layer:invalid-field-name","field name is missing",{field:s});if(!ee.jsonValues.includes(s.type))throw new j("ogc-feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s})}if(r){const s=new L(F);if(r.startTimeField){const u=s.get(r.startTimeField);u?(r.startTimeField=u.name,u.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const u=s.get(r.endTimeField);u?(r.endTimeField=u.name,u.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const u=s.get(r.trackIdField);u?r.trackIdField=u.name:(r.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.timeReference||(r.timeReference={timeZoneIANA:ne}),r.startTimeField||r.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:w?de(w):null,extent:he(e),geometryType:w,fields:F,hasZ:!!Z,objectIdField:b,paginationParameter:N,timeInfo:r}}async function Se(e,n={}){const{links:t,url:i}=e,a=g(t,"data",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new j("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,p=q(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function Ne(e,n={}){const{links:t,url:i}=e,a=g(t,"conformance",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new j("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,p=q(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function ve(e,n={}){const{apiKey:t,customParameters:i,signal:a}=n,{data:o}=await $(e,{signal:a,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function Pe(e,n={}){const{links:t,url:i}=e,a=g(t,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,p=q(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function Oe(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:a}=t;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function qe(e,n,t){const i=await ge(e,n,t);return te(i)}async function ge(e,n,t){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:p},spatialReference:f,supportedCrs:y}=e,T=g(i,"items",l.geojson)||g(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(T==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:S,start:N,timeExtent:m,where:F}=n;if(n.objectIds)throw new j("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const Z=x.fromJSON(f),w=n.outSpatialReference??Z,b=w.isWGS84?null:_(w,y),r=be(W,y),v=ye(m),s=we(F),u=S??(N==null?d:10),z=N===0?void 0:N,{fields:M,geometryType:C,hasZ:D,objectIdField:P,paginationParameter:V}=o,B=q(T.href,a),{data:A}=await $(B,{...t,query:{...p,...r,crs:b,datetime:v,query:s,limit:u,[V]:z,token:c},headers:{accept:l.geojson}}),O=ue(A,{geometryType:C,hasZ:D,objectIdField:P}),Q=O.length===u&&!!g(A.links??[],"next",l.geojson),X=new L(M);for(const h of O){const k={};fe(X,k,h.attributes),k[P]=h.attributes[P],h.attributes=k}if(!b&&w.isWebMercator){for(const h of O)if(h.geometry!=null&&C!=null){const k=ie(h.geometry,C,D,!1);k.spatialReference=x.WGS84,h.geometry=ae(E(k,w))}}for(const h of O)h.objectId=h.attributes[P];const Y=b||!b&&w.isWebMercator?w.toJSON():se,I=new oe;return I.exceededTransferLimit=Q,I.features=O,I.fields=M,I.geometryType=C,I.hasZ=D,I.objectIdFieldName=P,I.spatialReference=Y,I}function pe(e){return e!=null&&e.type==="extent"}function _(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const a=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return a?`${U}${a}`:null}function R(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:a}=e;return`${n},${t},${i},${a}`}function ye(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function we(e){return e!=null&&e&&e!=="1=1"?e:null}function be(e,n){if(!pe(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:R(e)};const i=_(t,n);return i!=null?{bbox:R(e),"bbox-crs":i}:t.isWebMercator?{bbox:R(E(e,x.WGS84))}:null}function he(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[a,o]=t,d=i?void 0:t[2];return{xmin:a,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:x.WGS84.toJSON()}}function g(e,n,t){return e.find(({rel:i,type:a})=>i===n&&a===t)??e.find(({rel:i,type:a})=>i===n&&!a)}function Fe(e,n,t){var f;if(!t)return;const i=g(t,"next",l.geojson),a=(f=K(i==null?void 0:i.href))==null?void 0:f.query;if(!a)return;const o=K(e).query,d=Object.keys(o??{}),c=Object.entries(a).filter(([y])=>!d.includes(y)).find(([y,T])=>me.has(y.toLowerCase())&&Number.parseInt(T,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{ge as $,Oe as C,Se as N,Ne as O,ve as P,qe as R,U as k,Pe as q,$e as v,xe as x};
