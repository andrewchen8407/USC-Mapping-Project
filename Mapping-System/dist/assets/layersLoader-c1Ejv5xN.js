import{s as w,bC as v,bD as G,e as E,b as $,ak as j,p as O}from"./index-qc-kEiJy.js";import{t as R}from"./fetchService-efoqrSmZ.js";import{l as S,a as J,n as M,u as N,i as Q,c as q,s as P,t as L,r as z,e as D}from"./portalLayers-2VAdTjtL.js";import{populateGroupLayer as A}from"./layersCreator-WrcCttQ0.js";import{t as B}from"./requestPresets-jnEymMGx.js";import"./associatedFeatureServiceUtils-T8TfqrJ8.js";async function ie(e,a){const r=e.instance.portalItem;if(r!=null&&r.id)return await r.load(a),H(e),e.validateItem&&e.validateItem(r),K(e,a)}function H(e){const a=e.instance.portalItem;if(!(a!=null&&a.type)||!e.supportedTypes.includes(a.type))throw new w("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a==null?void 0:a.type,expectedType:e.supportedTypes.join(", ")})}async function K(e,a){const r=e.instance,t=r.portalItem;if(!t)return;const{url:o,title:n}=t,i=v(t,"portal-item");if(r.type==="group")return U(r,i,e);o&&r.type!=="media"&&r.read({url:o},i);const s=new D,l=await F(e,s,a);return l&&r.read(l,i),r.resourceReferences={portalItem:t,paths:i.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:n},i),G(r,i)}async function U(e,a,r){const t=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:o,type:n}=t;if(n==="Group Layer"){if(!E(t,"Map"))throw new w("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return V(e)}return e.read({title:o},a),W(e,r)}async function V(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const t=v(a,"web-map");e.read(r,t),await A(e,r,{context:t}),e.resourceReferences={portalItem:a,paths:t.readResourcePaths??[]}}async function W(e,a){var f;let r;const{portalItem:t}=e;if(!t)return;const o=t.type,n=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=n.FeatureLayer;break;case"Stream Service":r=n.StreamLayer;break;case"Scene Service":r=n.SceneLayer;break;default:throw new w("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const i=new D;let[s,l]=await Promise.all([r(),F(a,i)]),u=()=>s;if(o==="Feature Service"){const k=(f=S(l))==null?void 0:f.customParameters;l=t.url?await J(l,t.url,i):{};const b=M(l),c=N(l),d=Q(l),y=[];if(b.length||c!=null&&c.length){b.length&&y.push("SubtypeGroupLayer"),c!=null&&c.length&&y.push("OrientedImageryLayer"),d!=null&&d.length&&y.push("CatalogLayer");const g=[];for(const p of y){const m=n[p];g.push(m())}const C=await Promise.all(g),I=new Map;y.forEach((p,m)=>{I.set(p,C[m])}),u=p=>p.layerType?I.get(p.layerType)??s:s}const x=await te(t.url,{customParameters:k,loadContext:i});return await h(e,u,l,x)}return o==="Scene Service"&&t.url&&(l=await q(t,l,i)),P(l)>0?await h(e,u,l):await X(e,u)}async function X(e,a){var o,n;const{portalItem:r}=e;if(!(r!=null&&r.url))return;const t=await B(r.url);t&&h(e,a,{layers:(o=t.layers)==null?void 0:o.map(L),tables:(n=t.tables)==null?void 0:n.map(L)})}async function h(e,a,r,t){var i;let o=r.layers||[];const n=r.tables||[];if(((i=e.portalItem)==null?void 0:i.type)==="Feature Collection"?(o.forEach((s,l)=>{var u;s.id=l,((u=s==null?void 0:s.layerDefinition)==null?void 0:u.type)==="Table"&&n.push(s)}),o=o.filter(s=>{var l;return((l=s==null?void 0:s.layerDefinition)==null?void 0:l.type)!=="Table"})):(o.reverse(),n.reverse()),o.forEach(s=>{const l=t==null?void 0:t(s);if(l||!t){const u=T(e,a(s),r,s,l);e.add(u)}}),n.length){const s=await $.FeatureLayer();n.forEach(l=>{const u=t==null?void 0:t(l);if(u||!t){const f=T(e,s,r,l,u);e.tables.add(f)}})}}function T(e,a,r,t,o){const n=e.portalItem,i={portalItem:n.clone(),layerId:t.id};t.url!=null&&(i.url=t.url);const s=new a(i);if("sourceJSON"in s&&(s.sourceJSON=o),s.type!=="subtype-group"&&s.type!=="catalog"&&(s.sublayerTitleMode="service-name"),n.type==="Feature Collection"){const l={origin:"portal-item",portal:n.portal||j.getDefault()};s.read(t,l);const u=r.showLegend;u!=null&&s.read({showLegend:u},l)}return s}async function F(e,a,r){if(e.supportsData===!1)return;const t=e.instance,o=t.portalItem;if(!o)return;let n=null;try{n=await o.fetchData("json",r)}catch{}if(_(t)){let i=null;const s=await Y(o,n,a);if((n!=null&&n.layers||n!=null&&n.tables)&&s>0){if(t.layerId==null){const l=M(n);t.layerId=t.type==="subtype-group"?l==null?void 0:l[0]:z(n)}i=Z(n,t),i&&n.showLegend!=null&&(i.showLegend=n.showLegend)}return s>1&&"sublayerTitleMode"in t&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),i}return n}async function Y(e,a,r){var n,i,s,l,u;if(a!=null&&a.layers&&(a!=null&&a.tables))return P(a);const t=O(e.url);if(!t)return 1;const o=await r.fetchServiceMetadata(t.url.path,{customParameters:(n=S(a))==null?void 0:n.customParameters}).catch(()=>null);return(((i=a==null?void 0:a.layers)==null?void 0:i.length)??((s=o==null?void 0:o.layers)==null?void 0:s.length)??0)+(((l=a==null?void 0:a.tables)==null?void 0:l.length)??((u=o==null?void 0:o.tables)==null?void 0:u.length)??0)}function Z(e,a){var o,n;const{layerId:r}=a,t=((o=e.layers)==null?void 0:o.find(i=>i.id===r))||((n=e.tables)==null?void 0:n.find(i=>i.id===r));return t&&ee(t,a)?t:null}function _(e){return e.type!=="stream"&&"layerId"in e}function ee(e,a){return!(a.type==="feature"&&"layerType"in e&&e.layerType==="SubtypeGroupLayer"||a.type==="subtype-group"&&!("layerType"in e))}async function te(e,a){const{layersJSON:r}=await R(e,a);if(!r)return null;const t=[...r.layers,...r.tables];return o=>t.find(n=>n.id===o.id)}export{ie as load};
