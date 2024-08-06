import{e as E}from"./mat3f64-Km-wq5a6.js";import{e as y}from"./quatf64-upBlkCdX.js";import{bG as _,bH as S,bI as T,bJ as Y,bK as v,bL as W,bM as X,bN as G,bO as H,bP as J,bQ as K,bR as N,bS as Q,bT as P,bU as R,bV as U,bW as V,bX as x,bY as Z}from"./index-D5SqUFXo.js";function k(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function A(a,o,r){r*=.5;const s=Math.sin(r);return a[0]=s*o[0],a[1]=s*o[1],a[2]=s*o[2],a[3]=Math.cos(r),a}function w(a,o){const r=2*Math.acos(o[3]),s=Math.sin(r/2);return s>_()?(a[0]=o[0]/s,a[1]=o[1]/s,a[2]=o[2]/s):(a[0]=1,a[1]=0,a[2]=0),r}function j(a,o,r){const s=o[0],e=o[1],c=o[2],t=o[3],i=r[0],u=r[1],n=r[2],h=r[3];return a[0]=s*h+t*i+e*n-c*u,a[1]=e*h+t*u+c*i-s*n,a[2]=c*h+t*n+s*u-e*i,a[3]=t*h-s*i-e*u-c*n,a}function B(a,o,r){r*=.5;const s=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(r),u=Math.cos(r);return a[0]=s*u+t*i,a[1]=e*u+c*i,a[2]=c*u-e*i,a[3]=t*u-s*i,a}function C(a,o,r){r*=.5;const s=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(r),u=Math.cos(r);return a[0]=s*u-c*i,a[1]=e*u+t*i,a[2]=c*u+s*i,a[3]=t*u-e*i,a}function D(a,o,r){r*=.5;const s=o[0],e=o[1],c=o[2],t=o[3],i=Math.sin(r),u=Math.cos(r);return a[0]=s*u+e*i,a[1]=e*u-s*i,a[2]=c*u+t*i,a[3]=t*u-c*i,a}function F(a,o){const r=o[0],s=o[1],e=o[2];return a[0]=r,a[1]=s,a[2]=e,a[3]=Math.sqrt(Math.abs(1-r*r-s*s-e*e)),a}function q(a,o,r,s){const e=o[0],c=o[1],t=o[2],i=o[3];let u,n,h,f,l,b=r[0],m=r[1],$=r[2],p=r[3];return n=e*b+c*m+t*$+i*p,n<0&&(n=-n,b=-b,m=-m,$=-$,p=-p),1-n>_()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-s)*u)/h,l=Math.sin(s*u)/h):(f=1-s,l=s),a[0]=f*e+l*b,a[1]=f*c+l*m,a[2]=f*t+l*$,a[3]=f*i+l*p,a}function aa(a){const o=Z,r=o(),s=o(),e=o(),c=Math.sqrt(1-r),t=Math.sqrt(r);return a[0]=c*Math.sin(2*Math.PI*s),a[1]=c*Math.cos(2*Math.PI*s),a[2]=t*Math.sin(2*Math.PI*e),a[3]=t*Math.cos(2*Math.PI*e),a}function oa(a,o){const r=o[0],s=o[1],e=o[2],c=o[3],t=r*r+s*s+e*e+c*c,i=t?1/t:0;return a[0]=-r*i,a[1]=-s*i,a[2]=-e*i,a[3]=c*i,a}function sa(a,o){return a[0]=-o[0],a[1]=-o[1],a[2]=-o[2],a[3]=o[3],a}function L(a,o){const r=o[0]+o[4]+o[8];let s;if(r>0)s=Math.sqrt(r+1),a[3]=.5*s,s=.5/s,a[0]=(o[5]-o[7])*s,a[1]=(o[6]-o[2])*s,a[2]=(o[1]-o[3])*s;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;s=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),a[e]=.5*s,s=.5/s,a[3]=(o[3*c+t]-o[3*t+c])*s,a[c]=(o[3*c+e]+o[3*e+c])*s,a[t]=(o[3*t+e]+o[3*e+t])*s}return a}function ea(a,o,r,s){const e=.5*Math.PI/180;o*=e,r*=e,s*=e;const c=Math.sin(o),t=Math.cos(o),i=Math.sin(r),u=Math.cos(r),n=Math.sin(s),h=Math.cos(s);return a[0]=c*u*h-t*i*n,a[1]=t*i*h+c*u*n,a[2]=t*u*n-c*i*h,a[3]=t*u*h+c*i*n,a}function ra(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}const ca=S,ta=T,ia=Y,ua=j,na=v,ha=W,Ma=X,O=G,fa=O,z=H,la=z,d=J,ba=K,ma=N;function $a(a,o,r){const s=Q(o,r);return s<-.999999?(P(M,pa,o),R(M)<1e-6&&P(M,qa,o),U(M,M),A(a,M,Math.PI),a):s>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(P(M,o,r),a[0]=M[0],a[1]=M[1],a[2]=M[2],a[3]=1+s,d(a,a))}const M=V(),pa=x(1,0,0),qa=x(0,1,0);function Pa(a,o,r,s,e,c){return q(g,o,e,c),q(I,r,s,c),q(a,g,I,2*c*(1-c)),a}const g=y(),I=y();function da(a,o,r,s){const e=ga;return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=s[0],e[4]=s[1],e[7]=s[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],d(a,L(a,e))}const ga=E();Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:F,conjugate:sa,copy:ca,dot:ha,equals:ma,exactEquals:ba,fromEuler:ea,fromMat3:L,getAxisAngle:w,identity:k,invert:oa,len:fa,length:O,lerp:Ma,mul:ua,multiply:j,normalize:d,random:aa,rotateX:B,rotateY:C,rotateZ:D,rotationTo:$a,scale:na,set:ta,setAxes:da,setAxisAngle:A,slerp:q,sqlerp:Pa,sqrLen:la,squaredLength:z,str:ra},Symbol.toStringTag,{value:"Module"}));export{A as I,ba as N,sa as O,ea as T,ta as X,w as v,j as x};
