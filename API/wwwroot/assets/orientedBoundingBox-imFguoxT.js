import{dl as et,dm as lt,bW as d,gH as Kt,bX as Pt,he as Lt,fc as D,gk as y,hf as mt,hg as At,hh as Ut,hi as qt,gw as ta,fd as aa,hj as sa,hk as Ft,dC as xt,hl as Xt,h5 as ia,dG as Wt,dF as ea,hm as na,hn as ha,dE as oa,h3 as Ct,hd as gt,ho as ra,hp as ca,hq as Et}from"./index-dJP7MR2j.js";import{t as ua,e as da}from"./mat3f64-Km-wq5a6.js";import{e as fa}from"./mat4f64-BN7r1OmG.js";import{X as la,O as U,x as ma}from"./quat-lIGiTn5n.js";import{o as Bt,e as St}from"./quatf64-upBlkCdX.js";import{a as _t,R as _a}from"./computeTranslationToOriginAndRotation-PRkdSoza.js";import{c as Qt,o as ga,F as It}from"./plane-tOSGW9vB.js";class Nt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Za extends Nt{constructor(t,a,s,n=!1,h=s){super(t,s,h),this.indices=a,this.exclusive=n}}const nt=1e-6,ht=d(),bt=d();function ba(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const h=new wa(i);pt(ht,h.minProj,h.maxProj),dt(ht,ht,.5),N(bt,h.maxProj,h.minProj);const o=wt(bt),c=new pa;c.quality=o,n<14&&(i=new Nt(new Float64Array(h.buffer,112,42),3));const e=d(),r=d(),b=d(),m=d(),z=d(),A=d(),M=d();switch(Ma(h,i,M,e,r,b,m,z,A,c)){case 1:return void Yt(ht,bt,t);case 2:return void Ia(i,m,t)}$a(i,M,e,r,b,m,z,A,c),Ot(i,c.b0,c.b1,c.b2,at,st);const v=d();N(v,st,at),c.quality=wt(v),c.quality<o?Zt(c.b0,c.b1,c.b2,at,st,v,t):Yt(ht,bt,t)}function Ma(i,t,a,s,n,h,o,c,e,r){return Pa(i,s,n),yt(s,n)<nt?1:(N(o,s,n),g(o,o),ja(t,s,o,h)<nt?2:(N(c,n,h),g(c,c),N(e,h,s),g(e,e),V(a,c,o),g(a,a),Z(t,a,o,c,e,r),0))}const ot=d(),rt=d(),I=d(),q=d(),w=d(),R=d(),X=d(),W=d();function $a(i,t,a,s,n,h,o,c,e){xa(i,t,a,ot,rt),ot[0]!==void 0&&(N(I,ot,a),g(I,I),N(q,ot,s),g(q,q),N(w,ot,n),g(w,w),V(R,q,h),g(R,R),V(X,w,o),g(X,X),V(W,I,c),g(W,W),Z(i,R,h,q,I,e),Z(i,X,o,w,q,e),Z(i,W,c,I,w,e)),rt[0]!==void 0&&(N(I,rt,a),g(I,I),N(q,rt,s),g(q,q),N(w,rt,n),g(w,w),V(R,q,h),g(R,R),V(X,w,o),g(X,X),V(W,I,c),g(W,W),Z(i,R,h,q,I,e),Z(i,X,o,w,q,e),Z(i,W,c,I,w,e))}function Pa(i,t,a){let s=yt(i.maxVert[0],i.minVert[0]),n=0;for(let h=1;h<7;++h){const o=yt(i.maxVert[h],i.minVert[h]);o>s&&(s=o,n=h)}S(t,i.minVert[n]),S(a,i.maxVert[n])}const p=[0,0,0];function ja(i,t,a,s){const{data:n,size:h}=i;let o=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=h){p[0]=n[e]-t[0],p[1]=n[e+1]-t[1],p[2]=n[e+2]-t[2];const r=a[0]*p[0]+a[1]*p[1]+a[2]*p[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=p[0]*p[0]+p[1]*p[1]+p[2]*p[2]-r*r/b;m>o&&(o=m,c=e)}return S(s,n,c),o}const _=Kt();function xa(i,t,a,s,n){za(i,t,_,n,s);const h=kt(a,t);_[1]-nt<=h&&(s[0]=void 0),_[0]+nt>=h&&(n[0]=void 0)}const Tt=d(),vt=d(),Ht=d(),k=d(),J=d(),Mt=d();function Z(i,t,a,s,n,h){if(Dt(t)<nt)return;V(Tt,a,t),V(vt,s,t),V(Ht,n,t),tt(i,t,_),J[1]=_[0],k[1]=_[1],Mt[1]=k[1]-J[1];const o=[a,s,n],c=[Tt,vt,Ht];for(let e=0;e<3;++e){tt(i,o[e],_),J[0]=_[0],k[0]=_[1],tt(i,c[e],_),J[2]=_[0],k[2]=_[1],Mt[0]=k[0]-J[0],Mt[2]=k[2]-J[2];const r=wt(Mt);r<h.quality&&(S(h.b0,o[e]),S(h.b1,t),S(h.b2,c[e]),h.quality=r)}}const Sa=d();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let h=0;h<s.length;h+=n){const o=s[h]*t[0]+s[h+1]*t[1]+s[h+2]*t[2];a[0]=Math.min(a[0],o),a[1]=Math.max(a[1],o)}}function za(i,t,a,s,n){const{data:h,size:o}=i;S(s,h),S(n,s),a[0]=kt(Sa,t),a[1]=a[0];for(let c=o;c<h.length;c+=o){const e=h[c]*t[0]+h[c+1]*t[1]+h[c+2]*t[2];e<a[0]&&(a[0]=e,S(s,h,c)),e>a[1]&&(a[1]=e,S(n,h,c))}}function Yt(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Bt}const H=d(),K=d(),ct=d(),at=d(),st=d(),Gt=d();function Ia(i,t,a){S(H,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?H[0]=0:Math.abs(t[1])>Math.abs(t[2])?H[1]=0:H[2]=0,Dt(H)<nt&&(H[0]=H[1]=H[2]=1),V(K,t,H),g(K,K),V(ct,t,K),g(ct,ct),Ot(i,t,K,ct,at,st),N(Gt,st,at),Zt(t,K,ct,at,st,Gt,a)}function Ot(i,t,a,s,n,h){tt(i,t,_),n[0]=_[0],h[0]=_[1],tt(i,a,_),n[1]=_[0],h[1]=_[1],tt(i,s,_),n[2]=_[0],h[2]=_[1]}const B=d(),ut=d(),$t=d(),Q=ua(1,0,0,0,1,0,0,0,1),qa=St();function Zt(i,t,a,s,n,h,o){Q[0]=i[0],Q[1]=i[1],Q[2]=i[2],Q[3]=t[0],Q[4]=t[1],Q[5]=t[2],Q[6]=a[0],Q[7]=a[1],Q[8]=a[2],o.quaternion=ya(qa,Q),pt(B,s,n),dt(B,B,.5),dt(ut,i,B[0]),dt($t,t,B[1]),pt(ut,ut,$t),dt($t,a,B[2]),o.center=lt(ut,ut,$t),o.halfSize=et(B,h,.5)}const P=7;let wa=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let e=0;e<P;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(P),h=new Array(P),{data:o,size:c}=t;for(let e=0;e<o.length;e+=c){let r=o[e];r<this.minProj[0]&&(this.minProj[0]=r,n[0]=e),r>this.maxProj[0]&&(this.maxProj[0]=r,h[0]=e),r=o[e+1],r<this.minProj[1]&&(this.minProj[1]=r,n[1]=e),r>this.maxProj[1]&&(this.maxProj[1]=r,h[1]=e),r=o[e+2],r<this.minProj[2]&&(this.minProj[2]=r,n[2]=e),r>this.maxProj[2]&&(this.maxProj[2]=r,h[2]=e),r=o[e]+o[e+1]+o[e+2],r<this.minProj[3]&&(this.minProj[3]=r,n[3]=e),r>this.maxProj[3]&&(this.maxProj[3]=r,h[3]=e),r=o[e]+o[e+1]-o[e+2],r<this.minProj[4]&&(this.minProj[4]=r,n[4]=e),r>this.maxProj[4]&&(this.maxProj[4]=r,h[4]=e),r=o[e]-o[e+1]+o[e+2],r<this.minProj[5]&&(this.minProj[5]=r,n[5]=e),r>this.maxProj[5]&&(this.maxProj[5]=r,h[5]=e),r=o[e]-o[e+1]-o[e+2],r<this.minProj[6]&&(this.minProj[6]=r,n[6]=e),r>this.maxProj[6]&&(this.maxProj[6]=r,h[6]=e)}for(let e=0;e<P;++e){let r=n[e];S(this.minVert[e],o,r),r=h[e],S(this.maxVert[e],o,r)}}},pa=class{constructor(){this.b0=Pt(1,0,0),this.b1=Pt(0,1,0),this.b2=Pt(0,0,1),this.quality=0}};function wt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function pt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function N(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function dt(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function S(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],h=t[2],o=a[0],c=a[1],e=a[2];i[0]=n*e-h*c,i[1]=h*o-s*e,i[2]=s*c-n*o}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Dt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function yt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function kt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ya(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,h=(s+2)%3;let o=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*h+h]+1);i[s]=.5*o,o=.5/o,i[3]=(t[3*n+h]-t[3*h+n])*o,i[n]=(t[3*n+s]+t[3*s+n])*o,i[h]=(t[3*h+s]+t[3*s+h])*o}return i}class ft{constructor(t=Lt,a=Ha,s=Bt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return D(Qt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return D(Qt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return la(ga.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const h=t[n];h[0]=(1&n?-1:1)*s[3],h[1]=(2&n?-1:1)*s[4],h[2]=(4&n?-1:1)*s[5],y(h,h,a),h[0]+=s[0],h[1]+=s[1],h[2]+=s[2]}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(G);return U(l,a),y(u,u,l),mt(u,u),Y[0]=Math.min(u[0],this._data[3]),Y[1]=Math.min(u[1],this._data[4]),Y[2]=Math.min(u[2],this._data[5]),At(Y,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],h=n+a;return!(Ut(u)>h*h)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],y(u,u,l),mt(u,u),Y[0]=Math.min(u[0],s[3]),Y[1]=Math.min(u[1],s[4]),Y[2]=Math.min(u[2],s[5]),At(Y,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(It(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,h=l;h[0]=-n[6],h[1]=-n[7],h[2]=-n[8],h[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const o=y(u,u,l),c=y(Y,a,l);let e=-1/0,r=1/0;const b=this.getHalfSize(it);for(let m=0;m<3;m++){const z=o[m],A=c[m],M=b[m]+s;if(Math.abs(A)>1e-6){const v=(M-z)/A,$=(-M-z)/A;e=Math.max(e,Math.min(v,$)),r=Math.min(r,Math.max(v,$))}else if(z>M||z<-M)return!1}return e<=r}projectedArea(t,a,s,n){const h=this.getQuaternion(G);U(l,h),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],y(u,u,l);const o=this.getHalfSize(it),c=u[0]<-o[0]?-1:u[0]>o[0]?1:0,e=u[1]<-o[1]?-1:u[1]>o[1]?1:0,r=u[2]<-o[2]?-1:u[2]>o[2]?1:0,b=Math.abs(c)+Math.abs(e)+Math.abs(r);if(b===0)return 1/0;const m=b===1?4:6,z=6*(c+3*e+9*r+13);qt(L,h),ta(L,L,o);const A=this.getCenter(E);for(let $=0;$<m;$++){const zt=Aa[z+$];D(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),aa(u,u,L),lt(O,A,u),O[3]=1,sa(O,O,a);const Vt=1/Math.max(1e-6,O[3]);F[2*$]=O[0]*Vt,F[2*$+1]=O[1]*Vt}const M=2*m-2;let v=F[0]*(F[3]-F[M+1])+F[M]*(F[1]-F[M-1]);for(let $=2;$<M;$+=2)v+=F[$]*(F[$+3]-F[$-1]);return Math.abs(v)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(G);return U(l,a),y(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(It(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(It(t))}toAaBoundingBox(t){const a=this.getQuaternion(G),s=qt(L,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),h=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),o=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-h,t[2]=this._data[2]-o,t[3]=this._data[0]+n,t[4]=this._data[1]+h,t[5]=this._data[2]+o}transform(t,a,s,n=0,h=_t(s),o=_t(a),c=Xt(a,o)){if(s===h)a.isGeographic?Qa(this,t,a,n,o):Ea(this,t,a,n,o,c);else if(a.isWGS84&&(s.isWebMercator||Ft(s)))Fa(a,this,s,t,n);else if(a.isWebMercator&&Ft(s))Ca(a,this,s,t,n);else{const e=this.getCenter(E);e[2]+=n,xt(e,a,0,e,s,0,1),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(G),t.halfSize=this.getHalfSize(it))}}}const l=St(),G=St(),Na=St(),u=d(),Y=d(),O=ia();function Va(i,t=new ft){return ba(i,t),t}const F=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function Ja(i,t,a,s,n){const h=i.getQuaternion(G);n.quaternion=h,U(l,h);const o=i.getCenter(E),c=i.getHalfSize(it);if(s===ha.Global){y(f,o,l),mt(C,f),oa(x,C,c),Wt(x,C,x);const e=Ct(x);lt(x,C,c);const r=Ct(x);if(e<a)n.center=o,D(f,a,a,a),n.halfSize=lt(f,c,f);else{const b=r>0?1+t/r:1,m=e>0?1+a/e:1,z=(m+b)/2,A=(m-b)/2;et(x,C,A),n.halfSize=gt(x,x,c,z),et(x,C,z),gt(x,x,c,A),ra(f,f),ca(f,x,f);const M=i.getQuaternion(Na);n.center=y(f,f,M)}}else{n.center=gt(f,o,Et,(a+t)/2);const e=y(f,Et,l);mt(e,e),n.halfSize=gt(C,c,e,(a-t)/2)}return n}function Fa(i,t,a,s,n){t.getCenter(E),E[2]+=n;const h=_t(a);xt(E,i,0,E,h,0,1),Jt(h,t,E,a,s)}function Ca(i,t,a,s,n){t.getCenter(E),E[2]+=n,Jt(i,t,E,a,s)}function Jt(i,t,a,s,n){const h=t.getQuaternion(G),o=qt(L,h),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let r=0;r<3;++r)T[r]=c[r]*(e&1<<r?-1:1);for(let r=0;r<3;++r){let b=a[r];for(let m=0;m<3;++m)b+=T[m]*o[3*m+r];jt[3*e+r]=b}}xt(jt,i,0,jt,s,0,8),Va(Ta,n)}function Ea(i,t,a,s,n=_t(a),h=Xt(a,n)){i.getCorners(Rt),i.getCenter(T),T[2]+=s,_a(a,T,j,n),t.setCenter(j[12],j[13],j[14]);const o=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/o,l[1]=(j[8]-j[2])/o,l[2]=(j[1]-j[4])/o,l[3]=.25*o;const c=i.getQuaternion(G);t.quaternion=ma(l,l,c),U(l,l),D(C,0,0,0);const e=t.getCenter(va);for(const r of Rt)r[2]+=s,h(r,0,r,0),Wt(f,r,e),y(f,f,l),mt(f,f),ea(C,C,f);t.halfSize=C}function Qa(i,t,a,s,n=_t(a)){const h=na(a),o=1+Math.max(0,s)/(h.radius+i.centerZ);i.getCenter(T),T[2]+=s,xt(T,a,0,T,n,0,1),t.center=T;const c=i.getQuaternion(G);t.quaternion=c,U(l,c),D(f,0,0,1),y(f,f,l);const e=i.getHalfSize(it);D(f,e[0]*Math.abs(f[0]),e[1]*Math.abs(f[1]),e[2]*Math.abs(f[2])),et(f,f,h.inverseFlattening),lt(f,e,f),t.halfSize=et(f,f,o)}const jt=new Array(24),Ta=new Nt(jt,3),T=d(),E=d(),va=d(),it=d(),L=da(),j=fa(),Rt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),C=d(),x=d(),Ha=Pt(-1,-1,-1);export{Ja as L,ft as O,Za as t};
