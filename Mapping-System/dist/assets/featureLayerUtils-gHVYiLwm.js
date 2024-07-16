import{a as j,d as G,b as k,p as d,q,l as E,c as b,u as $,f as u,L as z,s as y,i as I}from"./index-qc-kEiJy.js";import{i as g}from"./originUtils-1w5HeAJR.js";import{$ as B,w as x,I as N,v as O,j as C,y as V,P as H,l as F,d as Q,c as T}from"./utils-2sVM4hHF.js";import{t as W}from"./fetchService-efoqrSmZ.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-DvcYQwk7.js";import"./requestPresets-jnEymMGx.js";const h="Feature Service",w="feature-layer-utils",X=`${w}-save`,Z=`${w}-save-as`,p=`${w}-saveall`,f=`${w}-saveall-as`;function v(e){return{isValid:z(e)&&(e.type!=="feature"||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function J(e){const a=[],r=[];for(const{layer:t,layerJSON:o}of e)t.isTable?r.push(o):a.push(o);return{layers:a,tables:r}}function M(e){return J([e])}async function R(e,a){return/\/\d+\/?$/.test(e.url)?M(a[0]):D(a,e)}async function D(e,a){if(e.reverse(),!a)return J(e);const r=await ee(a,e);for(const t of e)U(t.layer,t.layerJSON,r);return te(r,e),r}async function ee(e,a){let r=await e.fetchData("json");if(ae(r))return r;r||(r={}),re(r);const{layer:{url:t,customParameters:o,apiKey:s}}=a[0];return await ne(r,{url:t??"",customParameters:o,apiKey:s},a.map(n=>n.layer.layerId)),r}function ae(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function re(e){e.layers||(e.layers=[]),e.tables||(e.tables=[])}function te(e,a){const r=[],t=[];for(const{layer:o}of a){const{isTable:s,layerId:n}=o;s?t.push(n):r.push(n)}A(e.layers,r),A(e.tables,t)}function A(e,a){if(e.length<2)return;const r=[];for(const{id:t}of e)r.push(t);j(r.sort(L),a.slice().sort(L))&&e.sort((t,o)=>{const s=a.indexOf(t.id),n=a.indexOf(o.id);return s<n?-1:s>n?1:0})}function L(e,a){return e<a?-1:e>a?1:0}async function ne(e,a,r){const{url:t,customParameters:o,apiKey:s}=a,{serviceJSON:n,layersJSON:l}=await W(t,{customParameters:o,apiKey:s}),i=P(e.layers,n.layers,r),c=P(e.tables,n.tables,r);e.layers=i.itemResources,e.tables=c.itemResources;const m=[...i.added,...c.added],_=l?[...l.layers,...l.tables]:[];await se(e,m,t,_)}function P(e,a,r){const t=G(e,a,(s,n)=>s.id===n.id);e=e.filter(s=>!t.removed.some(n=>n.id===s.id));const o=t.added;return o.forEach(({id:s})=>{e.push({id:s})}),{itemResources:e,added:o.filter(({id:s})=>!r.includes(s))}}async function se(e,a,r,t){const o=await oe(a),s=a.map(({id:n,type:l})=>new(o.get(l))({url:r,layerId:n,sourceJSON:t.find(({id:i})=>i===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:l,loaded:i,defaultPopupTemplate:c}=n;if(!i||c==null)return;const m={id:l,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(m.layerType=n.operationalLayerType),U(n,m,e)})}async function oe(e){const a=[];e.forEach(({type:o})=>{const s=le(o),n=k[s];a.push(n())});const r=await Promise.all(a),t=new Map;return e.forEach(({type:o},s)=>{t.set(o,r[s])}),t}function le(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer";break;case"Catalog Layer":a="CatalogLayer"}return a}function U(e,a,r){e.isTable?S(r.tables,a):S(r.layers,a)}function S(e,a){const r=e.findIndex(({id:t})=>t===a.id);r===-1?e.push(a):e[r]=a}function K(e,a){if(!e.length)throw new y(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ie(e,a){const r=e.map(t=>t.portalItem.id);if(new Set(r).size>1)throw new y(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function Y(e,a){const r=e.map(t=>t.layerId);if(new Set(r).size!==r.length)throw new y(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ce(e){K(e,p),await Promise.all(e.map(a=>a.load()));for(const a of e)F(a,p,v),Q({layer:a,itemType:h,errorNamePrefix:p});ie(e,p),Y(e,p)}async function ue(e,a){const{url:r,layerId:t,title:o,fullExtent:s,isTable:n}=e,l=d(r);a.url=(l==null?void 0:l.serverType)==="FeatureServer"?r:`${r}/${t}`,a.title||(a.title=o),a.extent=null,n||s==null||(a.extent=await E(s)),b(a,u.METADATA),b(a,u.MULTI_LAYER),I(a,u.SINGLE_LAYER),n&&I(a,u.TABLE)}function ye(e,a){for(const s of e){const n=s.parsedUrl.path,l=d(n);if(!(l==null?void 0:l.url.path))throw new y(`${a}:invalid-parameters`,T(s,`has unsupported url pattern: ${n}`),{layer:s});const c=l==null?void 0:l.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${a}:invalid-parameters`,T(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&e.length>1)throw new y(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const r=d(e[0].parsedUrl.path),t=r==null?void 0:r.url.path;if(!e.every(s=>{const n=d(s.parsedUrl.path);return(n==null?void 0:n.url.path)===t}))throw new y(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function pe(e){K(e,f),await Promise.all(e.map(a=>a.load()));for(const a of e)F(a,f,v);ye(e,f),Y(e,f)}async function fe(e,a){let r=0,t=0;for(const{isTable:n}of a)n?t++:r++;const o=a[0].parsedUrl.path,s=d(o);if(e.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,e.title||(e.title=s.title),e.extent=null,r>0){const n=a.map(l=>l.fullExtent).filter(q).reduce((l,i)=>l.clone().union(i));n&&(e.extent=await E(n))}b(e,u.METADATA),$(e,u.MULTI_LAYER,a.length>1),$(e,u.SINGLE_LAYER,a.length===1),$(e,u.TABLE,t>0&&r===0),O(e)}async function Ie(e,a){return B({layer:e,itemType:h,validateLayer:v,createItemData:(r,t)=>R(t,[r]),errorNamePrefix:X},a)}async function Te(e,a){await ce(e);const r=e[0].portalItem,t=x(r),o=await Promise.all(e.map(n=>N(n,t,a))),s=await R(r,e.map((n,l)=>({layer:n,layerJSON:o[l]})));return O(r),await r.update({data:s}),await Promise.all(e.slice(1).map(n=>n.portalItem.reload())),g(t),r.clone()}async function Ae(e,a,r){return C({layer:e,itemType:h,validateLayer:v,createItemData:(t,o)=>Promise.resolve(M(t)),errorNamePrefix:Z,newItem:a,setItemProperties:ue},r)}async function Le(e,a,r){await pe(e);const t=V({itemType:h,errorNamePrefix:f,newItem:a}),o=x(t),s=await Promise.all(e.map(l=>N(l,o,r))),n=await D(e.map((l,i)=>({layer:l,layerJSON:s[i]})));await fe(t,e),await H(t,n,r);for(const l of e)l.portalItem=t.clone();return g(o),t}export{Ie as save,Te as saveAll,Le as saveAllAs,Ae as saveAs};
