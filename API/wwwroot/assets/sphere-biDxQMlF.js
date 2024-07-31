import{bS as j,h3 as a,h4 as w,dh as _,bW as h,di as W,dj as g,dm as b,dl as d,h5 as E,bR as v,bH as x,h6 as z,y as X,bG as Y,h7 as C,bT as q,h8 as D,dB as F,dk as I,h9 as p,bV as J,ha as L,fc as O,hb as K,hc as Q,hd as U}from"./index-5-AWHvTS.js";import{s as tt}from"./ObjectStack-hwHVGLIm.js";import{c as f,f as nt}from"./plane-koFQsxVu.js";function et(t,e){const n=j(t,e)/(a(t)*a(e));return-w(n)}function V(t){return t?T(_(t.origin),_(t.direction)):T(h(),h())}function T(t,e){return{origin:t,direction:e}}function Tt(t,e){const n=it.get();return n.origin=t,n.direction=e,n}function ot(t,e,n=V()){return W(n.origin,t),g(n.direction,e,t),n}function rt(t,e,n){const o=j(t.direction,g(n,e,t.origin));return b(n,t.origin,d(n,t.direction,o)),n}const it=new tt(()=>V()),st=A();function A(){return E()}const ct=v,ut=v;function Z(t,e){return x(e,t)}function at(t,e){return z(t[0],t[1],t[2],e)}function ft(t){return t}function gt(t){t[0]=t[1]=t[2]=t[3]=0}function ht(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function $(t){return t[3]}function dt(t){return t}function lt(t,e,n,o){return z(t,e,n,o)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function mt(t,e,n){return X.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&Z(t,n),n}function M(t,e,n){if(e==null||!k(t,e,m))return!1;let{t0:o,t1:r}=m;if((o<0||r<o&&r>0)&&(o=r),o<0)return!1;if(n){const{origin:i,direction:s}=e;n[0]=i[0]+s[0]*o,n[1]=i[1]+s[1]*o,n[2]=i[2]+s[2]*o}return!0}function bt(t,e,n){const o=ot(e,n);if(!k(t,o,m))return[];const{origin:r,direction:i}=o,{t0:s,t1:c}=m,u=l=>{const y=h();return U(y,r,i,l),P(t,y,y)};return Math.abs(s-c)<Y()?[u(s)]:[u(s),u(c)]}const m={t0:0,t1:0};function k(t,e,n){const{origin:o,direction:r}=e,i=$t;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(s===0)return!1;const c=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),u=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const l=Math.sqrt(u);return n.t0=(-c-l)/(2*s),n.t1=(-c+l)/(2*s),!0}const $t=h();function Mt(t,e){return M(t,e,null)}function yt(t,e,n){if(M(t,e,n))return n;const o=B(t,e,f.get());return b(n,e.origin,d(f.get(),e.direction,C(e.origin,o)/a(e.direction))),n}function B(t,e,n){const o=f.get(),r=nt.get();q(o,e.origin,e.direction);const i=$(t);q(n,o,e.origin),d(n,n,1/a(n)*i);const s=G(t,e.origin),c=et(e.origin,n);return D(r,c+s,o),F(n,n,r),n}function St(t,e,n){return M(t,e,n)?n:(rt(e,t,n),P(t,n,n))}function P(t,e,n){const o=g(f.get(),e,t),r=d(f.get(),o,t[3]/a(o));return b(n,r,t)}function xt(t,e){const n=g(f.get(),e,t),o=I(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function G(t,e){const n=g(f.get(),e,t),o=a(n),r=$(t),i=r+Math.abs(r-o);return w(r/i)}const S=h();function H(t,e,n,o){const r=g(S,e,t);switch(n){case p.X:{const i=L(r,S)[2];return O(o,-Math.sin(i),Math.cos(i),0)}case p.Y:{const i=L(r,S),s=i[1],c=i[2],u=Math.sin(s);return O(o,-u*Math.cos(c),-u*Math.sin(c),Math.cos(s))}case p.Z:return J(o,r);default:return}}function N(t,e){const n=g(R,e,t);return a(n)-t[3]}function Rt(t,e,n,o){const r=N(t,e),i=H(t,e,p.Z,R),s=d(R,i,n-r);return b(o,e,s)}function At(t,e){const n=K(t,e),o=$(t);return n<=o*o}function Pt(t,e,n=E()){const o=C(t,e),r=t[3],i=e[3];return o+i<r?(x(n,t),n):o+r<i?(x(n,e),n):(Q(n,t,e,(o+i-r)/(2*o)),n[3]=(o+r+i)/2,n)}const R=h(),_t=A();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:st,altitudeAt:N,angleToSilhouette:G,axisAt:H,clear:gt,closestPoint:St,closestPointOnSilhouette:B,containsPoint:At,copy:Z,create:A,distanceToSilhouette:xt,elevate:pt,equals:ut,exactEquals:ct,fromCenterAndRadius:at,fromRadius:ht,fromValues:lt,getCenter:dt,getRadius:$,intersectLine:bt,intersectRay:M,intersectRayClosestSilhouette:yt,intersectsRay:Mt,projectPoint:P,setAltitudeAt:Rt,setExtent:mt,tmpSphere:_t,union:Pt,wrap:ft},Symbol.toStringTag,{value:"Module"}));export{Mt as I,Z as O,$ as V,dt as Z,V as d,Tt as p,At as s,A as w};
