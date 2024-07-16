import{di as Ot,is as St,cu as ft,it as Et,iu as jt,hq as zt,h2 as Gt,z as h,A as F,B as Nt,bF as Bt,bW as X,iv as It,bX as Lt,dh as C,iw as Vt,ix as pt,dB as Z,iy as Wt,ao as Ht,y as k,dC as z,iz as tt,fe as et,fd as rt,iA as kt,bV as qt,iB as Ut,iC as Yt,iD as Dt,h_ as N,iE as gt,iF as Xt,eH as Jt,iG as Kt,he as nt,iH as Qt,hr as Zt,b0 as te,iI as ee}from"./index-qc-kEiJy.js";import{e as yt}from"./mat3f64-Km-wq5a6.js";import{e as M,o as E}from"./mat4f64-BN7r1OmG.js";import{a as R,R as G}from"./computeTranslationToOriginAndRotation-yZvkx4Z6.js";import{t as ot,o as re}from"./DoubleArray-pK3fKyWu.js";import{v as mt,I as q,x as ne}from"./quat-NEM7mwl2.js";import{e as J}from"./quatf64-upBlkCdX.js";import{g as B,f as oe,u as ht}from"./meshVertexSpaceUtils-9P4gfWrh.js";import{n as v,s as $t,i as ae,r as w}from"./vec3-gDGcAdUl.js";import{i as $,T as A}from"./BufferView-Er3bjlWM.js";function d(t=dt){return[t[0],t[1],t[2],t[3]]}function j(t,e,r=d()){return Ot(r,t),r[3]=e,r}function Ne(t,e=d()){const r=St(b,t);return At(e,ft(mt(e,r))),e}function at(t,e,r=d()){return q(b,t,U(t)),q(it,e,U(e)),ne(b,it,b),At(r,ft(mt(r,b)))}function Be(t,e,r,n=d()){return j(Et,t,_),j(jt,e,st),j(zt,r,lt),at(_,st,_),at(_,lt,n),n}function Ie(t){return t}function ie(t){return t[3]}function U(t){return Gt(t[3])}function At(t,e){return t[3]=e,t}const dt=[0,0,1,0],b=J(),it=J();d();const _=d(),st=d(),lt=d();var Y;let y=Y=class extends Bt{constructor(t){super(t),this.translation=X(),this.rotationAxis=It(dt),this.rotationAngle=0,this.scale=Lt(1,1,1)}get rotation(){return j(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=C(t),this.rotationAngle=ie(t)}get localMatrix(){const t=M();return q(ct,this.rotation,U(this.rotation)),Vt(t,ct,this.translation,this.scale),t}get localMatrixInverse(){return pt(M(),this.localMatrix)}applyLocal(t,e){return Z(e,t,this.localMatrix)}applyLocalInverse(t,e){return Z(e,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Wt(this.localMatrix,t.localMatrix)}clone(){const t={translation:C(this.translation),rotationAxis:C(this.rotationAxis),rotationAngle:this.rotationAngle,scale:C(this.scale)};return new Y(t)}};h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),h([F({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),h([F({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),h([F()],y.prototype,"rotation",null),h([F()],y.prototype,"localMatrix",null),h([F()],y.prototype,"localMatrixInverse",null),y=Y=h([Nt("esri.geometry.support.MeshTransform")],y);const ct=J(),ut=y;function xt(t,e){return t.isGeographic||t.isWebMercator&&(e??!0)}function Ft(t,e){switch(t.type){case"georeferenced":return e.isGeographic;case"local":return e.isGeographic||e.isWebMercator}}function Le(t,e,r,n){if(n!==void 0){Ht(k.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const o=e.type==="local";if(!B(e)||n===o)return r.isGeographic||r.isWebMercator&&n;k.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}return Ft(e,r)}const I=()=>k.getLogger("esri.geometry.support.meshUtils.normalProjection");function se(t,e,r,n,o){return V(n)?(L(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o)),o):(I().error("Cannot convert spatial reference to PCPF"),o)}function le(t,e,r,n,o){return V(n)?(L(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o)),o):(I().error("Cannot convert to spatial reference from PCPF"),o)}function ce(t,e,r){return z(t,e,0,r,R(e),0,t.length/3),r}function ue(t,e,r){return z(t,R(r),0,e,r,0,t.length/3),e}function fe(t,e,r){return N(u,r),v(e,t,u),gt(u)||$t(e,e),e}function pe(t,e,r){if(N(u,r),v(e,t,u,4),gt(u)||$t(e,e,4),t!==e)for(let n=3;n<t.length;n+=4)e[n]=t[n];return e}function ge(t,e,r,n,o){if(!V(n))return I().error("Cannot convert spatial reference to PCPF"),o;L(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function ye(t,e,r,n,o){if(!V(n))return I().error("Cannot convert to spatial reference from PCPF"),o;L(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(e),A.fromTypedArray(r),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function L(t,e,r,n,o,a){if(!e)return;const l=r.count,c=R(o);if(Pt(o))for(let i=0;i<l;i++)n.getVec(i,O),e.getVec(i,g),G(c,O,S,c),tt(u,S),t===m.FROM_PCPF&&et(u,u),rt(g,g,u),a.setVec(i,g);else for(let i=0;i<l;i++){n.getVec(i,O),e.getVec(i,g),G(c,O,S,c),tt(u,S);const s=kt(r.get(i,1));let f=Math.cos(s);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&et(u,u),rt(g,g,u),qt(g,g),a.setVec(i,g)}return a}function V(t){return Pt(t)||me(t)}function Pt(t){return t.isWGS84||Ut(t)||Yt(t)||Dt(t)}function me(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=X(),g=X(),S=M(),u=yt();function K(t,e,r){return xt(e.spatialReference,r==null?void 0:r.geographic)?Q(t,e,!1,r):de(t,e,r)}function vt(t,e=E){const{position:r,normal:n,tangent:o}=t;return{position:w(new Float64Array(r.length),r,e),normal:n!=null?fe(n,new Float32Array(n.length),e):null,tangent:o!=null?pe(o,new Float32Array(o.length),e):null}}function Tt(t,e,r,n){const{position:o,normal:a,tangent:l}=t;if(!B(e))return{position:o,normal:a,tangent:l};const c=ht(e,n);return K(vt(t,r==null?void 0:r.localMatrix),c,{geographic:e.type==="local"})}function he(t,e,r){const n=oe(e,r),o=e.spatialReference,a=B(n);if(!a)return{vertexAttributes:K(t,e,r),vertexSpace:n,transform:null};const{position:l,normal:c,tangent:i}=t,s=Ft(n,o);switch(n.type){case"georeferenced":return s?{vertexAttributes:Q(t,e,a,r),vertexSpace:n,transform:null}:{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut};case"local":return{vertexAttributes:{position:l,normal:c,tangent:i},vertexSpace:n,transform:new ut}}}function D(t,e,r){return xt(e.spatialReference,r==null?void 0:r.geographic)?Mt(t,e,r):bt(t,e,r)}function $e(t,e,r,n,o){if(!B(e))return D(t,n,o);const{spatialReference:a}=n,l=Tt(t,e,r,a);return n.equals(ht(e,a))?bt(l,n,o):D(l,n,o)}function Ae({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:l}){const c=r.origin??nt,i=r.origin!=null?(e==null?void 0:e.localMatrix)??E:E;if(r.type==="georeferenced"){const p=a??ot(t.length);if(Qt(i,E)?re(p,t):w(p,t,i),!Zt(c,nt)){const[H,Ct,_t]=c;for(let T=0;T<p.length;T+=3)p[T]+=H,p[T+1]+=Ct,p[T+2]+=_t}return z(p,n,0,p,o,0,p.length/3),p}let s=n;const f=R(n);s=o.isWebMercator&&l||!te(n,f)?s:f,G(n,c,P,s),ee(P,P,i);const x=a??ot(t.length);return w(x,t,P),z(x,s,0,x,o,0,x.length/3),x}function de(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,l=e.y,c=e.z??0,i=W(r?r.unit:null,e.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=o[s]*i+a,n[s+1]=o[s+1]*i+l,n[s+2]=o[s+2]*i+c;return{position:n,normal:t.normal,tangent:t.tangent}}function Q(t,e,r,n){const o=e.spatialReference,a=wt(e,n,P),l=new Float64Array(t.position.length),c=xe(t.position,a,o,l),i=N(Rt,a),s=Fe(c,l,t.normal,i,o),f=Pe(c,l,t.tangent,i,o);if(r){const{x,y:p,z:H}=e;ae(c,c,[-x,-p,-(H??0)])}return{position:c,normal:s,tangent:f}}function xe(t,e,r,n){w(n,t,e);const o=new Float64Array(t.length);return ue(n,o,r)}function Fe(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);return v(a,r,n),le(a,t,e,o,a),a}function Pe(t,e,r,n,o){if(r==null)return null;const a=new Float32Array(r.length);v(a,r,n,4);for(let l=3;l<a.length;l+=4)a[l]=r[l];return ye(a,t,e,o,a),a}function bt(t,e,r){const n=new Float64Array(t.position.length),o=t.position,a=e.x,l=e.y,c=e.z??0,i=W(r?r.unit:null,e.spatialReference);for(let s=0;s<o.length;s+=3)n[s]=(o[s]-a)/i,n[s+1]=(o[s+1]-l)/i,n[s+2]=(o[s+2]-c)/i;return{position:n,normal:t.normal,tangent:t.tangent}}function Mt(t,e,r){const n=e.spatialReference;wt(e,r,P);const o=pt(Me,P),a=new Float64Array(t.position.length),l=ve(t.position,n,o,a),c=N(Rt,o);return{position:l,normal:Te(t.normal,t.position,a,n,c),tangent:be(t.tangent,t.position,a,n,c)}}function wt(t,e,r){G(t.spatialReference,[t.x,t.y,t.z??0],r,R(t.spatialReference));const n=W(e?e.unit:null,t.spatialReference);return Xt(r,r,[n,n,n]),r}function ve(t,e,r,n){const o=ce(t,e,n),a=new Float64Array(o.length);return w(a,o,r),a}function Te(t,e,r,n,o){if(t==null)return null;const a=se(t,e,r,n,new Float32Array(t.length));return v(a,a,o),a}function be(t,e,r,n,o){if(t==null)return null;const a=ge(t,e,r,n,new Float32Array(t.length));return v(a,a,o,4),a}function W(t,e){if(t==null)return 1;const r=Jt(e);return 1/Kt(r,"meters",t)}const P=M(),Me=M(),Rt=yt(),Ve=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:vt,georeference:K,georeferenceApplyTransform:Tt,georeferenceByTransform:he,georeferenceGlobal:Q,getUnitScale:W,project:Ae,ungeoreference:D,ungeoreferenceByTransform:$e,ungeoreferenceGlobal:Mt},Symbol.toStringTag,{value:"Module"}));export{U as A,$e as C,ue as E,Ae as G,Q as I,vt as O,Tt as P,Mt as Q,he as V,W as _,ce as a,d as b,Le as c,ut as d,le as e,ye as f,Ve as g,ge as h,se as j,Ne as k,Be as w,Ie as y};
