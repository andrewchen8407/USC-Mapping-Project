import{bZ as V,gC as p,bW as h,h0 as $,hm as F,dj as A,bV as T,bS as X}from"./index-idTqwGoN.js";import{e as C}from"./mat3f64-Km-wq5a6.js";import{e as x}from"./mat4f64-BN7r1OmG.js";import{e as L}from"./quatf64-upBlkCdX.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&V(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r(p)}static createVec3f64(){return new r(h)}static createVec4f64(){return new r($)}static createMat3f64(){return new r(C)}static createMat4f64(){return new r(x)}static createQuatf64(){return new r(L)}get test(){return{length:this._items.length}}}r.createVec2f64();const z=r.createVec3f64();r.createVec4f64();r.createMat3f64();const G=r.createMat4f64(),S=r.createQuatf64();function y(t=d){return[t[0],t[1],t[2],t[3]]}function W(t){return t}function O(t,e,i,s=y()){const f=i[0]-e[0],I=i[1]-e[1],a=i[2]-e[2],c=t[0]-e[0],b=t[1]-e[1],w=t[2]-e[2],_=I*w-a*b,E=a*c-f*w,P=f*b-I*c,l=_*_+E*E+P*P,g=Math.abs(l-1)>1e-5&&l>1e-12?1/Math.sqrt(l):1;return s[0]=_*g,s[1]=E*g,s[2]=P*g,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function Q(t,e,i,s=0,f=Math.floor(i*(1/3)),I=Math.floor(i*(2/3))){if(i<3)return!1;e(o,s);let a=f,c=!1;for(;a<i-1&&!c;)e(n,a),a++,c=!F(o,n);if(!c)return!1;for(a=Math.max(a,I),c=!1;a<i&&!c;)e(N,a),a++,A(m,o,n),T(m,m),A(u,n,N),T(u,u),c=!F(o,N)&&!F(n,N)&&Math.abs(X(m,u))<Z;return c?(O(o,n,N,t),!0):(s!==0||f!==1||I!==2)&&Q(t,e,i,0,1,2)}const Z=.99619469809,o=h(),n=h(),N=h(),m=h(),u=h(),d=[0,0,1,0];var M;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(M||(M={}));M.INFINITE_MIN|M.INFINITE_MAX;M.INFINITE_MAX;export{y as E,W as F,Q as X,z as c,G as f,S as o};
