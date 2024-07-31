import{e as St}from"./deduplicate-RZqyAnZ9.js";import{H as b}from"./InterleavedLayout-iuWpdZDp.js";import{e as g}from"./VertexAttribute-Hx-XL6n4.js";import{gu as P,jm as ht,h2 as ot,jn as Ot,h7 as Et,fc as H,di as rt,bS as z,h4 as At,jo as Tt,bT as gt,dj as st,bV as Nt,bW as w,Y as wt,dm as vt,i2 as yt}from"./index-6vge_MSe.js";function J(t,e=0){const n=t.stride;return Array.from(t.fields.keys()).map(s=>{const r=t.fields.get(s),i=r.constructor.ElementCount,l=$t(r.constructor.ElementType),c=r.offset,p=!(!r.optional||!r.optional.glNormalized);return new ht(s,i,l,c,n,p,e)})}function $t(t){const e=Mt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const Mt={u8:P.UNSIGNED_BYTE,u16:P.UNSIGNED_SHORT,u32:P.UNSIGNED_INT,i8:P.BYTE,i16:P.SHORT,i32:P.INT,f32:P.FLOAT},Pt=b().vec3f(g.POSITION).u16(g.COMPONENTINDEX),Rt=b().vec2u8(g.SIDENESS);J(Rt);const K=b().vec3f(g.POSITION0).vec3f(g.POSITION1).vec2i16(g.NORMALCOMPRESSED).u16(g.COMPONENTINDEX).u8(g.VARIANTOFFSET,{glNormalized:!0}).u8(g.VARIANTSTROKE).u8(g.VARIANTEXTENSION,{glNormalized:!0}),j=b().vec3f(g.POSITION0).vec3f(g.POSITION1).vec2i16(g.NORMALCOMPRESSED).vec2i16(g.NORMAL2COMPRESSED).u16(g.COMPONENTINDEX).u8(g.VARIANTOFFSET,{glNormalized:!0}).u8(g.VARIANTSTROKE).u8(g.VARIANTEXTENSION,{glNormalized:!0});g.POSITION0,g.POSITION1,g.COMPONENTINDEX,g.VARIANTOFFSET,g.VARIANTSTROKE,g.VARIANTEXTENSION,g.NORMALCOMPRESSED,g.NORMAL2COMPRESSED,g.SIDENESS;const R=-1;var it;function Dt(t,e,n,s=Ft){const r=t.vertices.position,i=t.vertices.componentIndex,l=ot(s.anglePlanar),c=ot(s.angleSignificantEdge),p=Math.cos(c),f=Math.cos(l),u=G.edge,d=u.position0,S=u.position1,I=u.faceNormal0,v=u.faceNormal1,h=xt(t),y=bt(t),o=y.length/4,a=e.allocate(o);let N=0;const m=o,O=n.allocate(m);let T=0,$=0,E=0;const Z=Ot(0,o),F=new Float32Array(o);F.forEach((D,A,x)=>{r.getVec(y[4*A],d),r.getVec(y[4*A+1],S),x[A]=Et(d,S)}),Z.sort((D,A)=>F[A]-F[D]);const tt=new Array,et=new Array;for(let D=0;D<o;D++){const A=Z[D],x=F[A],W=y[4*A],It=y[4*A+1],V=y[4*A+2],_=y[4*A+3],nt=_===R;if(r.getVec(W,d),r.getVec(It,S),nt)H(I,h[3*V],h[3*V+1],h[3*V+2]),rt(v,I),u.componentIndex=i.get(W),u.cosAngle=z(I,v);else{if(H(I,h[3*V],h[3*V+1],h[3*V+2]),H(v,h[3*_],h[3*_+1],h[3*_+2]),u.componentIndex=i.get(W),u.cosAngle=z(I,v),Ct(u,f))continue;u.cosAngle<-.9999&&rt(v,I)}$+=x,E++,nt||Vt(u,p)?(e.write(a,N++,u),tt.push(x)):Lt(u,l)&&(n.write(O,T++,u),et.push(x))}const pt=new Float32Array(tt.reverse()),dt=new Float32Array(et.reverse());return{regular:{instancesData:e.trim(a,N),lodInfo:{lengths:pt}},silhouette:{instancesData:n.trim(O,T),lodInfo:{lengths:dt}},averageEdgeLength:$/E}}function Vt(t,e){return t.cosAngle<e}function Ct(t,e){return t.cosAngle>e}function Lt(t,e){const n=At(t.cosAngle),s=G.fwd,r=G.ortho;return Tt(s,t.position1,t.position0),n*(z(gt(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function bt(t){const e=t.faces.length/3,n=t.faces,s=t.neighbors;let r=0;for(let c=0;c<e;c++){const p=s[3*c],f=s[3*c+1],u=s[3*c+2],d=n[3*c],S=n[3*c+1],I=n[3*c+2];r+=p===R||d<S?1:0,r+=f===R||S<I?1:0,r+=u===R||I<d?1:0}const i=new Int32Array(4*r);let l=0;for(let c=0;c<e;c++){const p=s[3*c],f=s[3*c+1],u=s[3*c+2],d=n[3*c],S=n[3*c+1],I=n[3*c+2];(p===R||d<S)&&(i[l++]=d,i[l++]=S,i[l++]=c,i[l++]=p),(f===R||S<I)&&(i[l++]=S,i[l++]=I,i[l++]=c,i[l++]=f),(u===R||I<d)&&(i[l++]=I,i[l++]=d,i[l++]=c,i[l++]=u)}return i}function xt(t){const e=t.faces.length/3,n=t.vertices.position,s=t.faces,r=X.v0,i=X.v1,l=X.v2,c=new Float32Array(3*e);for(let p=0;p<e;p++){const f=s[3*p],u=s[3*p+1],d=s[3*p+2];n.getVec(f,r),n.getVec(u,i),n.getVec(d,l),st(i,i,r),st(l,l,r),gt(r,i,l),Nt(r,r),c[3*p]=r[0],c[3*p+1]=r[1],c[3*p+2]=r[2]}return c}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(it||(it={}));const G={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},X={v0:w(),v1:w(),v2:w()},Ft={anglePlanar:4,angleSignificantEdge:35};function ct(t,e,n){const s=e/3,r=new Uint32Array(n+1),i=new Uint32Array(n+1),l=(o,a)=>{o<a?r[o+1]++:i[a+1]++};for(let o=0;o<s;o++){const a=t[3*o],N=t[3*o+1],m=t[3*o+2];l(a,N),l(N,m),l(m,a)}let c=0,p=0;for(let o=0;o<n;o++){const a=r[o+1],N=i[o+1];r[o+1]=c,i[o+1]=p,c+=a,p+=N}const f=new Uint32Array(6*s),u=r[n],d=(o,a,N)=>{if(o<a){const m=r[o+1]++;f[2*m]=a,f[2*m+1]=N}else{const m=i[a+1]++;f[2*u+2*m]=o,f[2*u+2*m+1]=N}};for(let o=0;o<s;o++){const a=t[3*o],N=t[3*o+1],m=t[3*o+2];d(a,N,o),d(N,m,o),d(m,a,o)}const S=(o,a)=>{const N=2*o,m=a-o;for(let O=1;O<m;O++){const T=f[N+2*O],$=f[N+2*O+1];let E=O-1;for(;E>=0&&f[N+2*E]>T;E--)f[N+2*E+2]=f[N+2*E],f[N+2*E+3]=f[N+2*E+1];f[N+2*E+2]=T,f[N+2*E+3]=$}};for(let o=0;o<n;o++)S(r[o],r[o+1]),S(u+i[o],u+i[o+1]);const I=new Int32Array(3*s),v=(o,a)=>o===t[3*a]?0:o===t[3*a+1]?1:o===t[3*a+2]?2:-1,h=(o,a)=>{const N=v(o,a);I[3*a+N]=-1},y=(o,a,N,m)=>{const O=v(o,a);I[3*a+O]=m;const T=v(N,m);I[3*m+T]=a};for(let o=0;o<n;o++){let a=r[o];const N=r[o+1];let m=i[o];const O=i[o+1];for(;a<N&&m<O;){const T=f[2*a],$=f[2*u+2*m];T===$?(y(o,f[2*a+1],$,f[2*u+2*m+1]),a++,m++):T<$?(h(o,f[2*a+1]),a++):(h($,f[2*u+2*m+1]),m++)}for(;a<N;)h(o,f[2*a+1]),a++;for(;m<O;)h(f[2*u+2*m],f[2*u+2*m+1]),m++}return I}function k(t,e,n,s,r,i=2){const l=1/(Math.abs(n)+Math.abs(s)+Math.abs(r)),c=n*l,p=s*l,f=r<=0?(c>=0?1:-1)*(1-Math.abs(p)):c,u=r<=0?(p>=0?1:-1)*(1-Math.abs(c)):p,d=e*i;t[d]=at(f),t[d+1]=at(u)}function at(t){return wt(Math.round(32767*t),-32767,32767)}class mt{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Bt:_t}write(e,n,s){const r=this._edgeHashFunction(s);B.seed=r;const i=B.getIntRange(0,255),l=B.getIntRange(0,this.settings.variants-1),c=.7,p=B.getFloat(),f=255*(.5*Ut(-(1-Math.min(p/c,1))+Math.max(0,p-c)/(1-c),1.2)+.5);e.position0.setVec(n,s.position0),e.position1.setVec(n,s.position1),e.componentIndex.set(n,s.componentIndex),e.variantOffset.set(n,i),e.variantStroke.set(n,l),e.variantExtension.set(n,f)}trim(e,n){return e.slice(0,n)}}const Q=new Float32Array(6),U=new Uint32Array(Q.buffer),M=new Uint32Array(1);function _t(t){const e=Q;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],M[0]=5381;for(let n=0;n<U.length;n++)M[0]=31*M[0]+U[n];return M[0]}function Bt(t){const e=Q;e[0]=C(t.position0[0]),e[1]=C(t.position0[1]),e[2]=C(t.position0[2]),e[3]=C(t.position1[0]),e[4]=C(t.position1[1]),e[5]=C(t.position1[2]),M[0]=5381;for(let n=0;n<U.length;n++)M[0]=31*M[0]+U[n];return M[0]}const ft=1e4;function C(t){return Math.round(t*ft)/ft}function Ut(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}class Y{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,n,s){this._commonWriter.write(e,n,s),vt(L,s.faceNormal0,s.faceNormal1),Nt(L,L);const{typedBuffer:r,typedBufferStride:i}=e.normalCompressed;k(r,n,L[0],L[1],L[2],i)}trim(e,n){return this._commonWriter.trim(e,n)}}Y.Layout=K,Y.glLayout=J(K,1);class q{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return j.createBuffer(e)}write(e,n,s){this._commonWriter.write(e,n,s);{const{typedBuffer:r,typedBufferStride:i}=e.normalCompressed;k(r,n,s.faceNormal0[0],s.faceNormal0[1],s.faceNormal0[2],i)}{const{typedBuffer:r,typedBufferStride:i}=e.normal2Compressed;k(r,n,s.faceNormal1[0],s.faceNormal1[1],s.faceNormal1[2],i)}}trim(e,n){return this._commonWriter.trim(e,n)}}q.Layout=j,q.glLayout=J(j,1);const L=w(),B=new yt;function Gt(t){const e=Wt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return lt.updateSettings(t.writerSettings),ut.updateSettings(t.writerSettings),Dt(e,lt,ut)}function Wt(t,e,n,s){if(e){const l=ct(n,s,t.count);return new Ht(n,s,l,t)}const r=St(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:s}),i=ct(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:i,vertices:Pt.createView(r.buffer)}}class Ht{constructor(e,n,s,r){this.faces=e,this.facesLength=n,this.neighbors=s,this.vertices=r}}const lt=new Y,ut=new q,kt=b().vec3f(g.POSITION0).vec3f(g.POSITION1),Yt=b().vec3f(g.POSITION0).vec3f(g.POSITION1).u16(g.COMPONENTINDEX);export{Pt as I,Dt as a,kt as d,Gt as f,Yt as m,Wt as u};
