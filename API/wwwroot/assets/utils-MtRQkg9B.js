import{cA as G,a2 as z,an as A,cB as D,cC as L,cD as v,cE as O,cF as V,cG as Z,b6 as j,cH as B,cI as P}from"./index-wtwWwDCP.js";import{c as T,B as R}from"./utils-qxDVMtYg.js";let m=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function W(t,e,o,r){const s=G(o)?z(o):null,c=s?Math.round((s.valid[1]-s.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new A(i.geometry);return D(e,a,a,a.hasZ,a.hasM),i.geometry=s?Y(a,c??0,r[0]):a,i})}function k(t,e=18,o,r,s){const c=new Float64Array(r*s);e=Math.round(B(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const M=P(o);for(const{geometry:h,attributes:N}of t){const{x:I,y:u}=h,$=Math.max(0,I-e),g=Math.max(0,u-e),F=Math.min(s,u+e),b=Math.min(r,I+e),x=+M(N);for(let f=g;f<F;f++)for(let d=$;d<b;d++){const y=f*r+d,w=L(d-I,f-u,e)*x,l=c[y]+=w;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function _(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:s,ms:c}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(s)*v.seconds+Number(c||0)}async function q(t,e,o=!0){if(!e)return[];const{field:r,field2:s,field3:c,fieldDelimiter:i,fieldInfos:a,timeZone:M}=t,h=r&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===r.toLowerCase())),N=!!h&&O(h),I=!!h&&V(h),u=t.valueExpression,$=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,b=[],x=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await Z();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=x?m.getViewInfo({viewingMode:x.viewingMode,scale:x.scale,spatialReference:new j(x.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const p=l.attributes;let n;if(u){const E=w?{...l,layer:w}:l,C=m.createExecContext(E,d,M);n=m.executeFunction(f,C)}else p&&(n=p[r],s?(n=`${T(n)}${i}${T(p[s])}`,c&&(n=`${n}${i}${T(p[c])}`)):typeof n=="string"&&o&&(I?n=n?new Date(n).getTime():null:N&&(n=n?_(n):null)));if($&&typeof n=="number"&&isFinite(n)){const E=p&&parseFloat(p[g]);n=R(n,$,E,F)}b.push(n)}),b}export{q as b,W as j,_ as w,k as x};
