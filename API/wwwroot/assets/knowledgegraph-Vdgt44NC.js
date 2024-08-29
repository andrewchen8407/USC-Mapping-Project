import{ak as b,_ as D,S as J,aY as Q,aZ as V,a_ as j,b6 as I,d$ as K,e0 as M,aj as U,eo as P,eq as B,er as C}from"./index-rMEbef2m.js";import{a as T,b as u,r as f,x as L,d as W,G as y,a9 as O,v as Y,N as k,U as _,q as X,E as G,X as E,k as Z,t as z,aa as H,ab as A,ac as $}from"./arcadeUtils-lVydMjzv.js";import{l as nn}from"./portalUtils-5CwIzj_q.js";import{a as en,m as tn,t as an,p as rn,c as on}from"./GraphQueryStreaming-jD9-BhPZ.js";import"./TimeOnly-jYISpS3n.js";import"./ImmutableArray-H2O6RDFT.js";import"./number-U2uJjtZt.js";let p=null;async function sn(n){const e=J.geometryServiceUrl??"";if(!e){Q()||await V();for(const t of n)t.container[t.indexer]=j(t.container[t.indexer],I.WGS84);return}const a=n.map(t=>t.container[t.indexer]),i=new K({geometries:a,outSpatialReference:I.WGS84}),s=await M(e,i);for(let t=0;t<s.length;t++){const r=n[t];r.container[r.indexer]=s[t]}}async function q(n,e){const a=new U({portal:n,id:e});return await a.load(),p===null&&(p=await D(()=>import("./knowledgeGraphService-YuTIp2kH.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await p.fetchKnowledgeGraph(a.url)}function v(n,e,a,i,s){if(n===null)return null;if(y(n)||G(n))return n;if(E(n)||E(n))return n.toJSDate();if(Z(n))return n.toStorageFormat();if(z(n))return n.toStorageString();if(H(n)){const t={};for(const r of n.keys())t[r]=v(n.field(r),e,a,i,s),t[r]instanceof P&&s.push({container:t,indexer:r});return t}if(_(n)){const t=n.map(r=>v(r,e,a,i,s));for(let r=0;r<t.length;r++)t[r]instanceof P&&s.push({container:t,indexer:r});return t}if(A(n)){if(n.spatialReference.isWGS84)return n;if(n.spatialReference.isWebMercator&&e)return B(n);if(!e||!a)return n;throw new u(i,f.WrongSpatialReference,null)}}function ln(n,e){if(!n)return n;if(n.spatialReference.isWGS84&&e.spatialReference.isWebMercator)return C(n);if(n.spatialReference.equals(e.spatialReference))return n;throw new u(e,f.WrongSpatialReference,null)}function R(n,e){if(!n)return null;const a={};for(const i in n)a[i]=w(n[i],e);return a}function w(n,e){return n===null?null:_(n)?n.map(a=>w(a,e)):n instanceof tn?{graphTypeName:n.typeName,id:n.id,graphType:"entity",properties:R(n.properties,e)}:n instanceof an?{graphType:"object",properties:R(n.properties,e)}:n instanceof rn?{graphTypeName:n.typeName,id:n.id,graphType:"relationship",originId:n.originId??null,destinationId:n.destinationId??null,properties:R(n.properties,e)}:n instanceof on?{graphType:"path",path:n.path?n.path.map(a=>w(a,e)):null}:A(n)?ln(n,e):y(n)||G(n)||$(n)?n:null}function wn(n){n.mode==="async"&&(n.functions.knowledgegraphbyportalitem=function(e,a){return n.standardFunctionAsync(e,a,(i,s,t)=>{var d,h;if(T(t,2,2,e,a),t[0]===null)throw new u(e,f.PortalRequired,a);if(t[0]instanceof L){const c=W(t[1]);let m=null;return m=(d=e.services)!=null&&d.portal?e.services.portal:b.getDefault(),q(nn(t[0],m),c)}if(y(t[0])===!1)throw new u(e,f.InvalidParameter,a);const r=W(t[0]);return q(((h=e.services)==null?void 0:h.portal)??b.getDefault(),r)})},n.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),n.functions.querygraph=function(e,a){return n.standardFunctionAsync(e,a,async(i,s,t)=>{var x;T(t,2,4,e,a);const r=t[0];if(!O(r))throw new u(e,f.InvalidParameter,a);const d=t[1];if(!y(d))throw new u(e,f.InvalidParameter,a);p===null&&(p=await D(()=>import("./knowledgeGraphService-YuTIp2kH.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let h=null;const c=Y(t[2],null);if(!(c instanceof k||c===null))throw new u(e,f.InvalidParameter,a);if(c){let o=[];h=v(c,!0,!1,e,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await sn(o)}const m=new en({openCypherQuery:d,bindParameters:h});(((x=r==null?void 0:r.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(m.outputSpatialReference=e.spatialReference);const F=(await p.executeQueryStreaming(r,m)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(_(l))for(const g of l)S.push(w(g,e));else{const g=[];for(const N of l)g.push(w(l[N],e));S.push(g)}}}catch(o){throw o}return k.convertJsonToArcade(S,X(e),!1,!0)})},n.signatures.push({name:"querygraph",min:2,max:4}))}export{wn as registerFunctions};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/knowledgeGraphService-YuTIp2kH.js","assets/index-rMEbef2m.js","assets/index-XQT8DJa7.css","assets/GraphQueryStreaming-jD9-BhPZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
