import{bS as j,g_ as a,g$ as w,dh as P,bW as d,di as X,dj as g,dm as $,dl as h,h0 as E,bR as v,bH as x,h1 as z,y as Y,bG as B,h2 as C,bT as q,h3 as D,dr as F,dk as I,h4 as p,bV as J,h5 as L,f5 as O,h6 as K,h7 as Q,h8 as U}from"./index-lINQMvRL.js";import{s as tt}from"./ObjectStack-oYk4gUoQ.js";import{c as f,f as nt}from"./plane-DKCSONgz.js";function et(t,e){const n=j(t,e)/(a(t)*a(e));return-w(n)}function V(t){return t?T(P(t.origin),P(t.direction)):T(d(),d())}function T(t,e){return{origin:t,direction:e}}function Tt(t,e){const n=it.get();return n.origin=t,n.direction=e,n}function ot(t,e,n=V()){return X(n.origin,t),g(n.direction,e,t),n}function rt(t,e,n){const o=j(t.direction,g(n,e,t.origin));return $(n,t.origin,h(n,t.direction,o)),n}const it=new tt(()=>V()),st=_();function _(){return E()}const ct=v,ut=v;function Z(t,e){return x(e,t)}function at(t,e){return z(t[0],t[1],t[2],e)}function ft(t){return t}function gt(t){t[0]=t[1]=t[2]=t[3]=0}function dt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function b(t){return t[3]}function ht(t){return t}function lt(t,e,n,o){return z(t,e,n,o)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function mt(t,e,n){return Y.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&Z(t,n),n}function M(t,e,n){if(e==null||!k(t,e,m))return!1;let{t0:o,t1:r}=m;if((o<0||r<o&&r>0)&&(o=r),o<0)return!1;if(n){const{origin:i,direction:s}=e;n[0]=i[0]+s[0]*o,n[1]=i[1]+s[1]*o,n[2]=i[2]+s[2]*o}return!0}function $t(t,e,n){const o=ot(e,n);if(!k(t,o,m))return[];const{origin:r,direction:i}=o,{t0:s,t1:c}=m,u=l=>{const y=d();return U(y,r,i,l),A(t,y,y)};return Math.abs(s-c)<B()?[u(s)]:[u(s),u(c)]}const m={t0:0,t1:0};function k(t,e,n){const{origin:o,direction:r}=e,i=bt;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(s===0)return!1;const c=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),u=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const l=Math.sqrt(u);return n.t0=(-c-l)/(2*s),n.t1=(-c+l)/(2*s),!0}const bt=d();function Mt(t,e){return M(t,e,null)}function yt(t,e,n){if(M(t,e,n))return n;const o=G(t,e,f.get());return $(n,e.origin,h(f.get(),e.direction,C(e.origin,o)/a(e.direction))),n}function G(t,e,n){const o=f.get(),r=nt.get();q(o,e.origin,e.direction);const i=b(t);q(n,o,e.origin),h(n,n,1/a(n)*i);const s=H(t,e.origin),c=et(e.origin,n);return D(r,c+s,o),F(n,n,r),n}function St(t,e,n){return M(t,e,n)?n:(rt(e,t,n),A(t,n,n))}function A(t,e,n){const o=g(f.get(),e,t),r=h(f.get(),o,t[3]/a(o));return $(n,r,t)}function xt(t,e){const n=g(f.get(),e,t),o=I(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function H(t,e){const n=g(f.get(),e,t),o=a(n),r=b(t),i=r+Math.abs(r-o);return w(r/i)}const S=d();function N(t,e,n,o){const r=g(S,e,t);switch(n){case p.X:{const i=L(r,S)[2];return O(o,-Math.sin(i),Math.cos(i),0)}case p.Y:{const i=L(r,S),s=i[1],c=i[2],u=Math.sin(s);return O(o,-u*Math.cos(c),-u*Math.sin(c),Math.cos(s))}case p.Z:return J(o,r);default:return}}function W(t,e){const n=g(R,e,t);return a(n)-t[3]}function Rt(t,e,n,o){const r=W(t,e),i=N(t,e,p.Z,R),s=h(R,i,n-r);return $(o,e,s)}function _t(t,e){const n=K(t,e),o=b(t);return n<=o*o}function At(t,e,n=E()){const o=C(t,e),r=t[3],i=e[3];return o+i<r?(x(n,t),n):o+r<i?(x(n,e),n):(Q(n,t,e,(o+i-r)/(2*o)),n[3]=(o+r+i)/2,n)}const R=d(),Pt=_();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:st,altitudeAt:W,angleToSilhouette:H,axisAt:N,clear:gt,closestPoint:St,closestPointOnSilhouette:G,containsPoint:_t,copy:Z,create:_,distanceToSilhouette:xt,elevate:pt,equals:ut,exactEquals:ct,fromCenterAndRadius:at,fromRadius:dt,fromValues:lt,getCenter:ht,getRadius:b,intersectLine:$t,intersectRay:M,intersectRayClosestSilhouette:yt,intersectsRay:Mt,projectPoint:A,setAltitudeAt:Rt,setExtent:mt,tmpSphere:Pt,union:At,wrap:ft},Symbol.toStringTag,{value:"Module"}));export{Mt as I,Z as O,b as V,ht as Z,V as d,Tt as p,_t as s,_ as w};
