import{ae as bt,_ as wt,eC as Rt,eD as pt,eE as I,eF as L}from"./index-UN0u_eSp.js";const Mt=128e3;let dt=null,Vt=null;async function Lt(){return dt||(dt=Ut()),dt}async function Ut(){Vt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-wofYyb1x.js"),__vite__mapDeps([0,1,2])).then(i=>i.l):await wt(()=>import("./libtess-yrGIwtPS.js"),__vite__mapDeps([3,1,2])).then(i=>i.l)).default({locateFile:i=>Rt(`esri/core/libs/libtess/${i}`)})}function St(x,i){const r=Math.max(x.length,Mt);return Vt.triangulate(x,i,r)}function mt(x,i){return x.x===i.x&&x.y===i.y}function kt(x){if(!x)return;const i=x.length;if(i<=1)return;let r=0;for(let v=1;v<i;v++)mt(x[v],x[r])||++r===v||(x[r]=x[v]);x.length=r+1}function k(x,i){return x.x=i.y,x.y=-i.x,x}function R(x,i){return x.x=-i.y,x.y=i.x,x}function Tt(x,i){return x.x=i.x,x.y=i.y,x}function vt(x,i){return x.x=-i.x,x.y=-i.y,x}function ft(x){return Math.sqrt(x.x*x.x+x.y*x.y)}function Bt(x,i){return x.x*i.y-x.y*i.x}function gt(x,i){return x.x*i.x+x.y*i.y}function et(x,i,r,v){return x.x=i.x*r+i.y*v,x.y=i.x*v-i.y*r,x}class At{constructor(i,r,v){this._writeVertex=i,this._writeTriangle=r,this._canUseThinTessellation=v,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,r,v=this._canUseThinTessellation){kt(i),v&&r.halfWidth<pt&&!r.offset?this._tessellateThin(i,r):this._tessellate(i,r)}_tessellateThin(i,r){if(i.length<2)return;const v=r.wrapDistance||65535;let N=r.initialDistance||0,$=!1,F=i[0].x,z=i[0].y;const B=i.length;for(let j=1;j<B;++j){$&&($=!1,N=0);let W=i[j].x,X=i[j].y,b=W-F,f=X-z,T=Math.sqrt(b*b+f*f);if(b/=T,f/=T,N+T>v){$=!0;const t=(v-N)/T;T=v-N,W=(1-t)*F+t*W,X=(1-t)*z+t*X,--j}const o=this._writeVertex(F,z,0,0,b,f,f,-b,0,-1,N),y=this._writeVertex(F,z,0,0,b,f,-f,b,0,1,N);N+=T;const G=this._writeVertex(W,X,0,0,b,f,f,-b,0,-1,N),e=this._writeVertex(W,X,0,0,b,f,-f,b,0,1,N);this._writeTriangle(o,y,G),this._writeTriangle(y,G,e),F=W,z=X}}_tessellate(i,r){const v=i[0],N=i[i.length-1],$=mt(v,N),F=$?3:2;if(i.length<F)return;const z=r.pixelCoordRatio,B=r.capType!=null?r.capType:I.BUTT,j=r.joinType!=null?r.joinType:L.MITER,W=r.miterLimit!=null?Math.min(r.miterLimit,4):2,X=r.roundLimit!=null?Math.min(r.roundLimit,1.05):1.05,b=r.halfWidth!=null?r.halfWidth:2,f=!!r.textured;let T,o,y,G=null;const e=this._prevNormal,t=this._nextNormal;let K=-1,Q=-1;const s=this._joinNormal;let _,c;const rt=this._textureNormalLeft,nt=this._textureNormalRight,w=this._textureNormal;let u=-1,h=-1;const _t=r.wrapDistance||65535;let l=r.initialDistance||0;const Et=this._writeVertex,Nt=this._writeTriangle,d=(p,st,H,V,D,S)=>{const A=Et(o,y,_,c,H,V,p,st,D,S,l);return u>=0&&h>=0&&A>=0&&Nt(u,h,A),u=h,h=A,A};$&&(T=i[i.length-2],t.x=N.x-T.x,t.y=N.y-T.y,Q=ft(t),t.x/=Q,t.y/=Q);let Y=!1;for(let p=0;p<i.length;++p){if(Y&&(Y=!1,l=0),T&&(e.x=-t.x,e.y=-t.y,K=Q,l+K>_t&&(Y=!0)),Y){const n=(_t-l)/K;K=_t-l,T={x:(1-n)*T.x+n*i[p].x,y:(1-n)*T.y+n*i[p].y},--p}else T=i[p];o=T.x,y=T.y;const st=p<=0&&!Y,H=p===i.length-1;if(st||(l+=K),G=H?$?i[1]:null:i[p+1],G?(t.x=G.x-o,t.y=G.y-y,Q=ft(t),t.x/=Q,t.y/=Q):(t.x=void 0,t.y=void 0),!$){if(st){R(s,t),_=s.x,c=s.y,B===I.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===I.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==I.ROUND&&B!==I.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(s,e),_=s.x,c=s.y,B!==I.ROUND&&B!==I.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===I.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===I.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let V,D,S=-Bt(e,t);if(Math.abs(S)<.01)gt(e,t)>0?(s.x=e.x,s.y=e.y,S=1,V=Number.MAX_VALUE,D=!0):(R(s,t),S=1,V=1,D=!1);else{s.x=(e.x+t.x)/S,s.y=(e.y+t.y)/S,V=ft(s);const n=(V-1)*b*z;D=V>4||n>K&&n>Q}_=s.x,c=s.y;let A=j;switch(j){case L.BEVEL:V<1.05&&(A=L.MITER);break;case L.ROUND:V<X&&(A=L.MITER);break;case L.MITER:V>W&&(A=L.BEVEL)}switch(A){case L.MITER:if(d(s.x,s.y,-e.x,-e.y,0,-1),d(-s.x,-s.y,-e.x,-e.y,0,1),H)break;if(f){const n=Y?0:l;u=this._writeVertex(o,y,_,c,t.x,t.y,s.x,s.y,0,-1,n),h=this._writeVertex(o,y,_,c,t.x,t.y,-s.x,-s.y,0,1,n)}break;case L.BEVEL:{const n=S<0;let g,m,q,M;if(n){const a=u;u=h,h=a,g=rt,m=nt}else g=nt,m=rt;if(D)q=n?R(this._innerPrev,e):k(this._innerPrev,e),M=n?k(this._innerNext,t):R(this._innerNext,t);else{const a=n?vt(this._inner,s):Tt(this._inner,s);q=a,M=a}const U=n?k(this._bevelStart,e):R(this._bevelStart,e);d(q.x,q.y,-e.x,-e.y,g.x,g.y);const yt=d(U.x,U.y,-e.x,-e.y,m.x,m.y);if(H)break;const O=n?R(this._bevelEnd,t):k(this._bevelEnd,t);if(D){const a=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);u=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,O.x,O.y,m.x,m.y,l),this._writeTriangle(yt,a,h)}else{if(f){const a=this._bevelMiddle;a.x=(U.x+O.x)/2,a.y=(U.y+O.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,y,_,c,t.x,t.y,a.x,a.y,w.x,w.y,l),h=this._writeVertex(o,y,_,c,t.x,t.y,M.x,M.y,g.x,g.y,l)}else{const a=u;u=h,h=a}d(O.x,O.y,t.x,t.y,m.x,m.y)}if(n){const a=u;u=h,h=a}break}case L.ROUND:{const n=S<0;let g,m;if(n){const E=u;u=h,h=E,g=rt,m=nt}else g=nt,m=rt;const q=n?vt(this._inner,s):Tt(this._inner,s);let M,U;D?(M=n?R(this._innerPrev,e):k(this._innerPrev,e),U=n?k(this._innerNext,t):R(this._innerNext,t)):(M=q,U=q);const yt=n?k(this._roundStart,e):R(this._roundStart,e),O=n?R(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,g.x,g.y),ot=d(yt.x,yt.y,-e.x,-e.y,m.x,m.y);if(H)break;const C=this._writeVertex(o,y,_,c,-e.x,-e.y,0,0,0,0,l);D||this._writeTriangle(u,h,C);const P=vt(this._outer,q),J=this._writeVertex(o,y,_,c,t.x,t.y,O.x,O.y,m.x,m.y,l);let Z,tt;const ht=V>2;if(ht){let E;V!==Number.MAX_VALUE?(P.x/=V,P.y/=V,E=gt(e,P),E=(V*(E*E-1)+1)/E):E=-1,Z=n?k(this._startBreak,e):R(this._startBreak,e),Z.x+=e.x*E,Z.y+=e.y*E,tt=n?R(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*E,tt.y+=t.y*E}et(w,P,-e.x,-e.y);const lt=this._writeVertex(o,y,_,c,-e.x,-e.y,P.x,P.y,w.x,w.y,l);et(w,P,t.x,t.y);const ct=f?this._writeVertex(o,y,_,c,t.x,t.y,P.x,P.y,w.x,w.y,l):lt,ut=C,at=f?this._writeVertex(o,y,_,c,t.x,t.y,0,0,0,0,l):C;let it=-1,xt=-1;if(ht&&(et(w,Z,-e.x,-e.y),it=this._writeVertex(o,y,_,c,-e.x,-e.y,Z.x,Z.y,w.x,w.y,l),et(w,tt,t.x,t.y),xt=this._writeVertex(o,y,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,l)),f?ht?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,lt),this._writeTriangle(at,ct,xt),this._writeTriangle(at,xt,J)):(this._writeTriangle(ut,ot,lt),this._writeTriangle(at,ct,J)):ht?(this._writeTriangle(C,ot,it),this._writeTriangle(C,it,xt),this._writeTriangle(C,xt,J)):(this._writeTriangle(C,ot,lt),this._writeTriangle(C,ct,J)),D?(u=this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l),h=J):(u=f?this._writeVertex(o,y,_,c,t.x,t.y,U.x,U.y,g.x,g.y,l):a,this._writeTriangle(u,at,J),h=J),n){const E=u;u=h,h=E}break}}}}}export{St as a,At as c,Lt as i};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/libtess-asm-wofYyb1x.js","assets/index-UN0u_eSp.js","assets/index-XQT8DJa7.css","assets/libtess-yrGIwtPS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
