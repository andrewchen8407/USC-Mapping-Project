import{di as Ot,ip as St,cu as ft,iq as Et,ir as jt,hl as zt,gZ as Nt,z as h,A as F,B as Gt,bF as Bt,bW as D,is as Lt,bX as Vt,dh as C,it as It,iu as pt,dr as Q,iv as Wt,ao as kt,y as q,ds as z,iw as tt,f7 as rt,f6 as et,ix as qt,bV as Ut,iy as Ht,iz as Xt,iA as Yt,hX as G,iB as gt,iC as Dt,ey as Zt,iD as Jt,h9 as nt,iE as Kt,hm as Qt,b0 as tr,iF as rr}from"./index-idTqwGoN.js";import{e as yt}from"./mat3f64-Km-wq5a6.js";import{e as M,o as E}from"./mat4f64-BN7r1OmG.js";import{a as R,R as N}from"./computeTranslationToOriginAndRotation-d4L7kpZk.js";import{t as ot,o as er}from"./DoubleArray-G2bTBKAr.js";import{v as mt,I as U,x as nr}from"./quat-c9oLRYJR.js";import{e as Z}from"./quatf64-upBlkCdX.js";import{g as B,f as or,u as ht}from"./meshVertexSpaceUtils-Q-QUHRHM.js";import{n as v,s as $t,i as ar,r as w}from"./vec3-IgmJOVlt.js";import{i as $,T as A}from"./BufferView-nU0wfUHr.js";function d(t=dt){return[t[0],t[1],t[2],t[3]]}function j(t,r,e=d()){return Ot(e,t),e[3]=r,e}function Gr(t,r=d()){const e=St(b,t);return At(r,ft(mt(r,e))),r}function at(t,r,e=d()){return U(b,t,H(t)),U(it,r,H(r)),nr(b,it,b),At(e,ft(mt(e,b)))}function Br(t,r,e,n=d()){return j(Et,t,_),j(jt,r,st),j(zt,e,lt),at(_,st,_),at(_,lt,n),n}function Lr(t){return t}function ir(t){return t[3]}function H(t){return Nt(t[3])}function At(t,r){return t[3]=r,t}const dt=[0,0,1,0],b=Z(),it=Z();d();const _=d(),st=d(),lt=d();var X;let y=X=class extends Bt{constructor(t){super(t),this.translation=D(),this.rotationAxis=Lt(dt),this.rotationAngle=0,this.scale=Vt(1,1,1)}get rotation(){return j(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=C(t),this.rotationAngle=ir(t)}get localMatrix(){const t=M();return U(ct,this.rotation,H(this.rotation)),It(t,ct,this.translation,this.scale),t}get localMatrixInverse(){return pt(M(),this.localMatrix)}applyLocal(t,r){return Q(r,t,this.localMatrix)}applyLocalInverse(t,r){return Q(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Wt(this.localMatrix,t.localMatrix)}clone(){const t={translation:C(this.translation),rotationAxis:C(this.rotationAxis),rotationAngle:this.rotationAngle,scale:C(this.scale)};return new X(t)}};h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),h([F({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),h([F()],y.prototype,"rotation",null),h([F()],y.prototype,"localMatrix",null),h([F()],y.prototype,"localMatrixInverse",null),y=X=h([Gt("esri.geometry.support.MeshTransform")],y);const ct=Z(),ut=y;function xt(t,r){return t.isGeographic||t.isWebMercator&&(r??!0)}function Ft(t,r){switch(t.type){case"georeferenced":return r.isGeographic;case"local":return r.isGeographic||r.isWebMercator}}function Vr(t,r,e,n){if(n!==void 0){kt(q.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const o=r.type==="local";if(!B(r)||n===o)return e.isGeographic||e.isWebMercator&&n;q.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${r.type}" is not supported. This parameter will be ignored.`)}return Ft(r,e)}const L=()=>q.getLogger("esri.geometry.support.meshUtils.normalProjection");function sr(t,r,e,n,o){return I(n)?(V(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L().error("Cannot convert spatial reference to PCPF"),o)}function lr(t,r,e,n,o){return I(n)?(V(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L().error("Cannot convert to spatial reference from PCPF"),o)}function cr(t,r,e){return z(t,r,0,e,R(r),0,t.length/3),e}function ur(t,r,e){return z(t,R(e),0,r,e,0,t.length/3),r}function fr(t,r,e){return G(u,e),v(r,t,u),gt(u)||$t(r,r),r}function pr(t,r,e){if(G(u,e),v(r,t,u,4),gt(u)||$t(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function gr(t,r,e,n,o){if(!I(n))return L().error("Cannot convert spatial reference to PCPF"),o;V(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function yr(t,r,e,n,o){if(!I(n))return L().error("Cannot convert to spatial reference from PCPF"),o;V(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,r,e,n,o,a){if(!r)return;const l=e.count,c=R(o);if(Pt(o))for(let i=0;i<l;i++)n.getVec(i,O),r.getVec(i,g),N(c,O,S,c),tt(u,S),t===m.FROM_PCPF&&rt(u,u),et(g,g,u),a.setVec(i,g);else for(let i=0;i<l;i++){n.getVec(i,O),r.getVec(i,g),N(c,O,S,c),tt(u,S);const s=qt(e.get(i,1));let f=Math.cos(s);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&rt(u,u),et(g,g,u),Ut(g,g),a.setVec(i,g)}return a}function I(t){return Pt(t)||mr(t)}function Pt(t){return t.isWGS84||Ht(t)||Xt(t)||Yt(t)}function mr(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=D(),g=D(),S=M(),u=yt();function J(t,r,e){return xt(r.spatialReference,e==null?void 0:e.geographic)?K(t,r,!1,e):dr(t,r,e)}function vt(t,r=E){const{position:e,normal:n,tangent:o}=t;return{position:w(new Float64Array(e.length),e,r),normal:n!=null?fr(n,new Float32Array(n.length),r):null,tangent:o!=null?pr(o,new Float32Array(o.length),r):null}}function Tt(t,r,e,n){const{position:o,normal:a,tangent:l}=t;if(!B(r))return{position:o,normal:a,tangent:l};const c=ht(r,n);return J(vt(t,e==null?void 0:e.localMatrix),c,{geographic:r.type==="local"})}function hr(t,r,e){const n=or(r,e),o=r.spatialReference,a=B(n);if(!a)return{vertexAttributes:J(t,r,e),vertexSpace:n,transform:null};const{position:l,normal:c,tangent:i}=t,s=Ft(n,o);switch(n.type){case"georeferenced":return s?{vertexAttributes:K(t,r,a,e),vertexSpace:n,transform:null}:{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut};case"local":return{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut}}}function Y(t,r,e){return xt(r.spatialReference,e==null?void 0:e.geographic)?Mt(t,r,e):bt(t,r,e)}function $r(t,r,e,n,o){if(!B(r))return Y(t,n,o);const{spatialReference:a}=n,l=Tt(t,r,e,a);return n.equals(ht(r,a))?bt(l,n,o):Y(l,n,o)}function Ar({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:l}){const c=e.origin??nt,i=e.origin!=null?(r==null?void 0:r.localMatrix)??E:E;if(e.type==="georeferenced"){const p=a??ot(t.length);if(Kt(i,E)?er(p,t):w(p,t,i),!Qt(c,nt)){const[k,Ct,_t]=c;for(let T=0;T<p.length;T+=3)p[T]+=k,p[T+1]+=Ct,p[T+2]+=_t}return z(p,n,0,p,o,0,p.length/3),p}let s=n;const f=R(n);s=o.isWebMercator&&l||!tr(n,f)?s:f,N(n,c,P,s),rr(P,P,i);const x=a??ot(t.length);return w(x,t,P),z(x,s,0,x,o,0,x.length/3),x}function dr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,l=r.y,c=r.z??0,i=W(e?e.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=o[s]*i+a,n[s+1]=o[s+1]*i+l,n[s+2]=o[s+2]*i+c;return{position:n,normal:t.normal,tangent:t.tangent}}function K(t,r,e,n){const o=r.spatialReference,a=wt(r,n,P),l=new Float64Array(t.position.length),c=xr(t.position,a,o,l),i=G(Rt,a),s=Fr(c,l,t.normal,i,o),f=Pr(c,l,t.tangent,i,o);if(e){const{x,y:p,z:k}=r;ar(c,c,[-x,-p,-(k??0)])}return{position:c,normal:s,tangent:f}}function xr(t,r,e,n){w(n,t,r);const o=new Float64Array(t.length);return ur(n,o,e)}function Fr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return v(a,e,n),lr(a,t,r,o,a),a}function Pr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);v(a,e,n,4);for(let l=3;l<a.length;l+=4)a[l]=e[l];return yr(a,t,r,o,a),a}function bt(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,l=r.y,c=r.z??0,i=W(e?e.unit:null,r.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=(o[s]-a)/i,n[s+1]=(o[s+1]-l)/i,n[s+2]=(o[s+2]-c)/i;return{position:n,normal:t.normal,tangent:t.tangent}}function Mt(t,r,e){const n=r.spatialReference;wt(r,e,P);const o=pt(Mr,P),a=new Float64Array(t.position.length),l=vr(t.position,n,o,a),c=G(Rt,o);return{position:l,normal:Tr(t.normal,t.position,a,n,c),tangent:br(t.tangent,t.position,a,n,c)}}function wt(t,r,e){N(t.spatialReference,[t.x,t.y,t.z??0],e,R(t.spatialReference));const n=W(r?r.unit:null,t.spatialReference);return Dt(e,e,[n,n,n]),e}function vr(t,r,e,n){const o=cr(t,r,n),a=new Float64Array(o.length);return w(a,o,e),a}function Tr(t,r,e,n,o){if(t==null)return null;const a=sr(t,r,e,n,new Float32Array(t.length));return v(a,a,o),a}function br(t,r,e,n,o){if(t==null)return null;const a=gr(t,r,e,n,new Float32Array(t.length));return v(a,a,o,4),a}function W(t,r){if(t==null)return 1;const e=Zt(r);return 1/Jt(e,"meters",t)}const P=M(),Mr=M(),Rt=yt(),Ir=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:vt,georeference:J,georeferenceApplyTransform:Tt,georeferenceByTransform:hr,georeferenceGlobal:K,getUnitScale:W,project:Ar,ungeoreference:Y,ungeoreferenceByTransform:$r,ungeoreferenceGlobal:Mt},Symbol.toStringTag,{value:"Module"}));export{H as A,$r as C,ur as E,Ar as G,K as I,vt as O,Tt as P,Mt as Q,hr as V,W as _,cr as a,d as b,Vr as c,ut as d,lr as e,yr as f,Ir as g,gr as h,sr as j,Gr as k,Br as w,Lr as y};
