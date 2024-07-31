import{bo as U,bX as C,dh as g,hc as A,bW as f,hb as N,dj as O,h3 as $,bT as q}from"./index-qTI7pilI.js";import{s as w}from"./Util-Pu8Xrvhv.js";import{s as z}from"./ObjectStack-Knqrd2bl.js";import{v as W}from"./lineSegment-tzFscNZl.js";import"./plane-tSSfYVdj.js";var T;(function(i){i[i.Layer=0]="Layer",i[i.Object=1]="Object",i[i.Mesh=2]="Mesh",i[i.Line=3]="Line",i[i.Point=4]="Point",i[i.Material=5]="Material",i[i.Texture=6]="Texture",i[i.COUNT=7]="COUNT"})(T||(T={}));class L{constructor(o,m,u){this.primitiveIndices=o,this._numIndexPerPrimitive=m,this.position=u,this._children=void 0,w(o.length>=1),w(u.size===3||u.size===4);const{data:s,size:l,indices:p}=u;w(p.length%this._numIndexPerPrimitive==0),w(p.length>=o.length*this._numIndexPerPrimitive);const I=o.length;let e=l*p[this._numIndexPerPrimitive*o[0]];b.clear(),b.push(e);const n=C(s[e],s[e+1],s[e+2]),t=g(n);for(let a=0;a<I;++a){const d=this._numIndexPerPrimitive*o[a];for(let c=0;c<this._numIndexPerPrimitive;++c){e=l*p[d+c],b.push(e);let h=s[e];n[0]=Math.min(h,n[0]),t[0]=Math.max(h,t[0]),h=s[e+1],n[1]=Math.min(h,n[1]),t[1]=Math.max(h,t[1]),h=s[e+2],n[2]=Math.min(h,n[2]),t[2]=Math.max(h,t[2])}}this.bbMin=n,this.bbMax=t;const r=A(f(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(t[0]-n[0],t[1]-n[1]),t[2]-n[2]);let P=this.radius*this.radius;for(let a=0;a<b.length;++a){e=b.at(a);const d=s[e]-r[0],c=s[e+1]-r[1],h=s[e+2]-r[2],x=d*d+c*c+h*h;if(x<=P)continue;const v=Math.sqrt(x),_=.5*(v-this.radius);this.radius=this.radius+_,P=this.radius*this.radius;const M=_/v;r[0]+=d*M,r[1]+=c*M,r[2]+=h*M}this.center=r,b.clear()}getChildren(){if(this._children||N(this.bbMin,this.bbMax)<=1)return this._children;const o=A(f(),this.bbMin,this.bbMax,.5),m=this.primitiveIndices.length,u=new Uint8Array(m),s=new Array(8);for(let t=0;t<8;++t)s[t]=0;const{data:l,size:p,indices:I}=this.position;for(let t=0;t<m;++t){let r=0;const P=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=p*I[P],d=l[a],c=l[a+1],h=l[a+2];for(let x=1;x<this._numIndexPerPrimitive;++x){a=p*I[P+x];const v=l[a],_=l[a+1],M=l[a+2];v<d&&(d=v),_<c&&(c=_),M<h&&(h=M)}d<o[0]&&(r|=1),c<o[1]&&(r|=2),h<o[2]&&(r|=4),u[t]=r,++s[r]}let e=0;for(let t=0;t<8;++t)s[t]>0&&++e;if(e<2)return;const n=new Array(8);for(let t=0;t<8;++t)n[t]=s[t]>0?new Uint32Array(s[t]):void 0;for(let t=0;t<8;++t)s[t]=0;for(let t=0;t<m;++t){const r=u[t];n[r][s[r]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)n[t]!==void 0&&this._children.push(new L(n[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){b.prune()}}const b=new U({deallocator:null});function X(i){return i?{p0:g(i.p0),p1:g(i.p1),p2:g(i.p2)}:{p0:f(),p1:f(),p2:f()}}function G(i,o,m){return O(y,o,i),O(j,m,i),.5*$(q(y,y,j))}new z(W);new z(()=>X());const y=f(),j=f();export{G as d,T as e,L as o};
