import{j4 as se,j5 as j,jB as oe,ct as x,jC as v,jD as le,jE as ae,jF as ue,gh as ce,jG as fe,G as A,az as me,jH as B,a4 as O,gi as L,q as pe,dQ as he,da as G,b_ as ye,jI as ge,aD as Re,et as Ie,T as _,a8 as E,a9 as Se,b0 as Ne,jJ as de,aF as $e,d0 as Z,_ as H,jK as _e,jL as xe,cs as z,jM as Te,jN as be,s as w,e2 as Ge}from"./index-Ef0wFma4.js";import{t as K}from"./json-v6EOeNTY.js";const C=new x,Ee=new x,F=new x,N={esriGeometryPoint:v,esriGeometryPolyline:le,esriGeometryPolygon:ae,esriGeometryMultipoint:ue};function rt(e,t,n,r=e.hasZ,i=e.hasM){if(t==null)return null;const s=e.hasZ&&r,o=e.hasM&&i;if(n){const l=j(F,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return v(l,s,o)}return v(t,s,o)}function b(e,t,n,r,i,s,o=t,l=n){var f,m,h;const a=t&&o,u=n&&l,c=r!=null?"coords"in r?r:r.geometry:null;if(c==null)return null;if(i){let p=se(Ee,c,t,n,e,i,o,l);return s&&(p=j(F,p,a,u,e,s)),((f=N[e])==null?void 0:f.call(N,p,a,u))??null}if(s){const p=j(F,c,t,n,e,s,o,l);return((m=N[e])==null?void 0:m.call(N,p,a,u))??null}return oe(C,c,t,n,o,l),((h=N[e])==null?void 0:h.call(N,C,a,u))??null}function it(e){return e&&W in e?JSON.parse(JSON.stringify(e,we)):e}const W="_geVersion",we=(e,t)=>e!==W?t:void 0;function V(e,t){return e?t?4:3:t?3:2}function st(e,t,n,r){if(!(t!=null&&t.lengths.length))return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,s=[],o=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:l,coords:a}=t,u=V(n,r);let c=0;for(const f of l){const m=Me(o,a,c,f,n,r);m&&s.push(m),c+=f*u}if(s.sort((f,m)=>{let h=f[2]-m[2];return h===0&&n&&(h=f[4]-m[4]),h}),s.length){let f=6*s[0][2];i[0]=s[0][0]/f,i[1]=s[0][1]/f,n&&(f=6*s[0][4],i[2]=f!==0?s[0][3]/f:0),(i[0]<o[0]||i[0]>o[1]||i[1]<o[2]||i[1]>o[3]||n&&(i[2]<o[4]||i[2]>o[5]))&&(i.length=0)}if(!i.length){const f=t.lengths[0]?Pe(a,0,l[0],n,r):null;if(!f)return null;i[0]=f[0],i[1]=f[1],n&&f.length>2&&(i[2]=f[2])}return e}function Me(e,t,n,r,i,s){const o=V(i,s);let l=n,a=n+o,u=0,c=0,f=0,m=0,h=0;for(let d=0,T=r-1;d<T;d++,l+=o,a+=o){const y=t[l],g=t[l+1],I=t[l+2],R=t[a],S=t[a+1],Y=t[a+2];let $=y*S-R*g;m+=$,u+=(y+R)*$,c+=(g+S)*$,i&&($=y*Y-R*I,f+=(I+Y)*$,h+=$),y<e[0]&&(e[0]=y),y>e[1]&&(e[1]=y),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),i&&(I<e[4]&&(e[4]=I),I>e[5]&&(e[5]=I))}if(m>0&&(m*=-1),h>0&&(h*=-1),!m)return null;const p=[u,c,.5*m];return i&&(p[3]=f,p[4]=.5*h),p}function Pe(e,t,n,r,i){const s=V(r,i);let o=t,l=t+s,a=0,u=0,c=0,f=0;for(let m=0,h=n-1;m<h;m++,o+=s,l+=s){const p=e[o],d=e[o+1],T=e[o+2],y=e[l],g=e[l+1],I=e[l+2],R=r?ve(p,d,T,y,g,I):je(p,d,y,g);if(R)if(a+=R,r){const S=Ae(p,d,T,y,g,I);u+=R*S[0],c+=R*S[1],f+=R*S[2]}else{const S=Fe(p,d,y,g);u+=R*S[0],c+=R*S[1]}}return a>0?r?[u/a,c/a,f/a]:[u/a,c/a]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function je(e,t,n,r){const i=n-e,s=r-t;return Math.sqrt(i*i+s*s)}function ve(e,t,n,r,i,s){const o=r-e,l=i-t,a=s-n;return Math.sqrt(o*o+l*l+a*a)}function Fe(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function Ae(e,t,n,r,i,s){return[e+.5*(r-e),t+.5*(i-t),n+.5*(s-n)]}const M=[0,0];function k(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,M),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,M),[n.xmax,n.ymax]=e(t.xmax,t.ymax,M),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:D(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:D(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:Q(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function D(e,t){const n=[];for(const r of e)n.push(Q(r,t));return n}function Q(e,t){const n=[];for(const r of e){const i=t(r[0],r[1],[0,0]);n.push(i),r.length>2&&i.push(r[2]),r.length>3&&i.push(r[3])}return n}async function q(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(r=>r.geometry!=null?r.geometry.spatialReference:null).filter(pe):[e];await he(n.map(r=>({source:r,dest:t})))}const X=k.bind(null,ce),ee=k.bind(null,fe);function te(e,t,n,r){if(!e||(n||(n=t,t=e.spatialReference),!G(t)||!G(n)||A(t,n)))return e;if(B(t,n)){const i=O(n)?X(e):ee(e);return i.spatialReference=n,i}return L(K,[e],t,n,null,r)[0]}class Oe{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,r,i){if(!(t!=null&&t.length)||!n||!r||A(n,r))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:r,geographicTransformation:i,resolve:me()};return this._jobs.push(s),this._timer??(this._timer=setTimeout(this._process,10)),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:r,outSpatialReference:i,resolve:s,geographicTransformation:o}=t;B(r,i)?O(i)?s(n.map(X)):s(n.map(ee)):s(L(K,n,r,i,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const Ve=new Oe;function ot(e,t,n,r){return Ve.push(e,t,n,r)}const qe=new ye({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),J=Object.freeze({});async function lt(e,t,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:o}=e;if(r)for(let l=0;l<r.length;l++)r[l]=r[l].trim();if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(o)for(let l=0;l<o.length;l++)o[l].onStatisticField&&(o[l].onStatisticField=o[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),Ue(e,t,n)}async function Ue(e,t,n){var s;if(!e)return null;let{where:r}=e;if(e.where=r=r==null?void 0:r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let i=await Ze(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:o}=e.geometry;i=ge(i),i.spatialReference=o}if(i){await q(i.spatialReference,n),i=Ye(i,n);const o=(await Re(Ie(i)))[0];if(o==null)throw J;const l="quantizationParameters"in e&&((s=e.quantizationParameters)==null?void 0:s.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,a=l&&ne(i,n)?{densificationStep:8*l}:void 0,u=o.toJSON(),c=te(u,u.spatialReference,n,a);if(!c)throw J;c.spatialReference=n,e.geometry=c}return e}function ne(e,t){if(!e)return!1;const n=e.spatialReference;return(_(e)||E(e)||Se(e))&&!A(n,t)&&!Ne(n,t)}function Ye(e,t){const n=e.spatialReference;return ne(e,t)&&_(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Ze(e){const{distance:t,units:n}=e,r=e.geometry;if(t==null||"vertexAttributes"in r)return r;const i=r.spatialReference,s=n?qe.fromJSON(n):de(i),o=i&&($e(i)||O(i))?r:await q(i,Z).then(()=>te(r,Z));return(await ze())(o.spatialReference,o,t,s)}async function ze(){return(await H(()=>import("./geometryEngineJSON-o_3n-sJA.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))).geodesicBuffer}function Ce(e){return e==="mesh"?_e:xe(e)}function re(e,t){return e?t?4:3:t?3:2}function De(e,t,n,r){return ie(e,t,n,r.coords[0],r.coords[1])}function Je(e,t,n,r,i,s){const o=re(i,s),{coords:l,lengths:a}=r;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=o)if(!ie(e,t,n,l[c],l[c+1]))return!1;return!0}function ie(e,t,n,r,i){if(!e)return!1;const s=re(t,n),{coords:o,lengths:l}=e;let a=!1,u=0;for(const c of l)a=Be(a,o,s,u,c,r,i),u+=c*s;return a}function Be(e,t,n,r,i,s,o){let l=e,a=r;for(let u=r,c=r+i*n;u<c;u+=n){a=u+n,a===c&&(a=r);const f=t[u],m=t[u+1],h=t[a],p=t[a+1];(m<o&&p>=o||p<o&&m>=o)&&f+(o-m)/(p-m)*(h-f)<s&&(l=!l)}return l}const P="unsupported-query",Le={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},U={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function He(e){return e!=null&&U.spatialRelationship[e]===!0}function Ke(e){return e!=null&&U.queryGeometry[Ge(e)]===!0}function We(e){return e!=null&&U.layerGeometry[e]===!0}function ke(){return H(()=>import("./geometryEngineJSON-o_3n-sJA.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))}function at(e,t,n,r,i){if(E(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=z(new x,t,!1,!1);return Promise.resolve(o=>De(s,!1,!1,o))}if(E(t)&&n==="esriGeometryMultipoint"){const s=z(new x,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(o=>Je(s,!1,!1,o,r,i))}if(_(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>Te(t,b(n,r,i,s)));if(_(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>be(t,b(n,r,i,s)));if(_(t)&&e==="esriSpatialRelIntersects"){const s=Ce(n);return Promise.resolve(o=>s(t,b(n,r,i,o)))}return ke().then(s=>{const o=s[Le[e]].bind(null,t.spatialReference,t);return l=>o(b(n,r,i,l))})}async function ut(e,t,n){var s;const{spatialRel:r,geometry:i}=e;if(i){if(!He(r))throw new w(P,"Unsupported query spatial relationship",{query:e});if(G(i.spatialReference)&&G(n)){if(!Ke(i))throw new w(P,"Unsupported query geometry type",{query:e});if(!We(t))throw new w(P,"Unsupported layer geometry type",{query:e});if(e.outSR)return q((s=e.geometry)==null?void 0:s.spatialReference,e.outSR)}}}function ct(e){if(_(e))return!0;if(E(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function ft(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&i)await t.forEach(l=>{const a=n.getAttribute(l,r),u=n.getAttribute(l,i);a==null||isNaN(a)||(s=Math.min(s,a)),u==null||isNaN(u)||(o=Math.max(o,u))});else{const l=r||i;await t.forEach(a=>{const u=n.getAttribute(a,l);u==null||isNaN(u)||(s=Math.min(s,u),o=Math.max(o,u))})}return{start:s,end:o}}function mt(e,t,n){var a;if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:s,end:o}=t;if(s===null&&o===null)return null;if(s===void 0&&o===void 0)return et();const l=((a=n.getAttributeAsTimestamp)==null?void 0:a.bind(n))??n.getAttribute.bind(n);return r&&i?Qe(l,r,i,s,o):Xe(l,r||i,s,o)}function Qe(e,t,n,r,i){return r!=null&&i!=null?s=>{const o=e(s,t),l=e(s,n);return(o==null||o<=i)&&(l==null||l>=r)}:r!=null?s=>{const o=e(s,n);return o==null||o>=r}:i!=null?s=>{const o=e(s,t);return o==null||o<=i}:void 0}function Xe(e,t,n,r){return n!=null&&r!=null&&n===r?i=>e(i,t)===n:n!=null&&r!=null?i=>{const s=e(i,t);return s!=null&&s>=n&&s<=r}:n!=null?i=>{const s=e(i,t);return s!=null&&s>=n}:r!=null?i=>{const s=e(i,t);return s!=null&&s<=r}:void 0}function et(){return()=>!1}export{ct as I,ut as P,lt as S,b as a,Ue as b,ft as c,ot as d,J as g,it as h,te as j,st as n,mt as t,at as v,q as x,rt as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/geometryEngineJSON-o_3n-sJA.js","assets/geometryEngineBase-Ft7OYFiB.js","assets/index-Ef0wFma4.js","assets/index-XQT8DJa7.css","assets/json-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
