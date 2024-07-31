import{d5 as f,d6 as h,d3 as g,d7 as m,d8 as p,d9 as y,da as a,_ as w}from"./index-wtwWwDCP.js";import{n as _}from"./date-be_IQzZd.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(r){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=r}}function c(n){return new b(n)}class q{constructor(r){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=r}}function A(n){return new q(n)}const u=new Set;function F(n,r,e,d=!1){u.clear();for(const i in e){const t=n.get(i);if(!t)continue;const o=P(t,e[i]);if(u.add(t.name),t&&(d||t.editable)){const l=f(t,o);if(l)return c(h(l,t,o));r[t.name]=o}}for(const i of(n==null?void 0:n.requiredFields)??[])if(!u.has(i.name))return c(`missing required field "${i.name}"`);return null}function P(n,r){let e=r;return g(n)&&typeof r=="string"?e=parseFloat(r):m(n)&&r!=null&&typeof r!="string"?e=String(r):p(n)&&typeof r=="string"&&(e=_(r)),y(e)}let s;function G(n,r){if(!n||!a(r))return n;if("rings"in n||"paths"in n){if(s==null)throw new TypeError("geometry engine not loaded");return s.simplify(r,n)}return n}async function j(){return s==null&&(s=await w(()=>import("./geometryEngineJSON-r_2iQC2u.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4]))),s}async function S(n,r){!a(n)||r!=="esriGeometryPolygon"&&r!=="esriGeometryPolyline"||await j()}export{A as d,c as f,S as j,F as p,G as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngineJSON-r_2iQC2u.js","assets/geometryEngineBase-1tIn6j_s.js","assets/index-wtwWwDCP.js","assets/index-XQT8DJa7.css","assets/json-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
