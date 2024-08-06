import{I as y,b6 as E,O as S,aU as w,an as D,el as M,em as h,y as N}from"./index-D5SqUFXo.js";import{$ as d}from"./Mesh-gQwhg9Kr.js";import{d as F}from"./georeference-3NiRt8UR.js";import{o as I,i as T}from"./External-oy86pT_g.js";import"./imageUtils-HV_GYkRV.js";import"./MeshLocalVertexSpace-ewgpedL1.js";import"./meshVertexSpaceUtils-N-jlOIEl.js";import"./vec3-Y5km07Jz.js";import"./earcut-lDMuCQlH.js";import"./DoubleArray-XPGgVSJf.js";import"./Indices-ik3-FDdP.js";import"./deduplicate-YSpONAua.js";import"./plane-uKpz0_By.js";import"./mat3f64-Km-wq5a6.js";import"./mat4f64-BN7r1OmG.js";import"./quatf64-upBlkCdX.js";import"./triangle-vpk1wCYs.js";import"./Util-DkuZNs_s.js";import"./ObjectStack-vt-rRM6t.js";import"./lineSegment-WAIIh-RE.js";import"./basicInterfaces-IwaMq8O_.js";import"./VertexAttribute-Hx-XL6n4.js";import"./quat-UXje8GOY.js";import"./computeTranslationToOriginAndRotation-CCCyuhv3.js";import"./BufferView-tv9BvHnC.js";const l=()=>N.getLogger("esri.rest.support.meshFeatureSet");function st(t,e,r){const o=r.features;r.features=[],delete r.geometryType;const n=y.fromJSON(r);if(n.geometryType="mesh",!r.assetMaps)return n;const s=b(e,r.assetMaps),i=t.sourceSpatialReference??E.WGS84,p=r.globalIdFieldName,{outFields:a}=t,c=a!=null&&a.length>0?O(a.includes("*")?null:new Set(a)):()=>({});for(const m of o){const u=x(m,p,i,e,s);u!=null&&n.features.push(new S({geometry:u,attributes:c(m)}))}return n}function O(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function x(t,e,r,o,n){const s=t.attributes[e],i=n.get(s);if(i==null)return l().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",t),null;if(!t.geometry)return l().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",t),null;const p=L(t,r,o),a=w.fromJSON(t.geometry);a.spatialReference=r;const c=$(t.attributes,o),m=r.isGeographic?"local":"georeferenced",u=A(i);return u?d.createWithExternalSource(p,u,{extent:a,transform:c,vertexSpace:m}):d.createIncomplete(p,{extent:a,transform:c,vertexSpace:m})}function L({attributes:t},e,{transformFieldRoles:r}){const o=t[r.originX],n=t[r.originY],s=t[r.originZ];return new D({x:o,y:n,z:s,spatialReference:e})}function $(t,{transformFieldRoles:e}){return new F({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}var f;function b(t,e){const r=new Map;for(const o of e){const n=o.parentGlobalId;if(n==null)continue;const s=o.assetName,i=o.assetType,p=o.assetHash,a=o.assetURL,c=o.conversionStatus,m=o.seqNo,u=M(i,t.supportedFormats);if(!u){l().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const g=h(r,n,()=>({files:new Map}));h(g.files,s,()=>({name:s,type:i,mimeType:u,status:P(c),parts:[]})).parts[m]={hash:p,url:a}}return r}function A(t){const e=Array.from(t.files.values()),r=new Array;for(const o of e){if(o.status!==f.COMPLETED)return null;const n=new Array;for(const s of o.parts){if(!s)return null;n.push(new I(s.url,s.hash))}r.push(new T(o.name,o.mimeType,n))}return r}function P(t){switch(t){case"COMPLETED":case"SUBMITTED":return f.COMPLETED;case"INPROGRESS":return f.PENDING;default:return f.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(f||(f={}));export{b as assetMapFromAssetMapsJSON,x as extractMesh,st as meshFeatureSetFromJSON};
