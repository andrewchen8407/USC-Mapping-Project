import{U as F,ed as R,X as w,hX as B,hY as C,bb as h,h1 as P,bX as z,cu as L}from"./index-lINQMvRL.js";import{e as S}from"./mat3f64-Km-wq5a6.js";import{l as D,m as N,a as U,h as X,c as G}from"./Mesh-T3ToSQAO.js";import{c as O,x as I,L as V,O as A,i as j,E as q,T as K,u as Q}from"./BufferView-mxA-BiB1.js";import{e as Y,f as k,a as H,o as E}from"./vec3-_HIDSV1Z.js";import{n as J,l as W,o as Z,f as ee,r as te,a as re,b as v,c as ne,d as oe,e as M,g as se,h as le,i as ae}from"./DefaultMaterial_COLOR_GAMMA-b9zr_Lnk.js";import{e as ie}from"./types-GBdbcYRa.js";import{V as ue}from"./georeference-NnKu2hWO.js";import{r as ce}from"./resourceUtils-2aDBMoEV.js";import"./imageUtils-cLLjJFeG.js";import"./MeshLocalVertexSpace-FfMor4ut.js";import"./meshVertexSpaceUtils-RLBLT78p.js";import"./earcut-FtwED5nH.js";import"./DoubleArray-3UQ8NKmO.js";import"./Indices-JhtOD8q4.js";import"./deduplicate-TXi2BAdQ.js";import"./plane-DKCSONgz.js";import"./mat4f64-BN7r1OmG.js";import"./quatf64-upBlkCdX.js";import"./triangle-tPADhcF0.js";import"./Util-3YbxZuXg.js";import"./ObjectStack-oYk4gUoQ.js";import"./lineSegment-yKwdV5Su.js";import"./basicInterfaces-IwaMq8O_.js";import"./VertexAttribute-Hx-XL6n4.js";import"./External-m9i4rAMS.js";import"./quat-hgZ1xrRJ.js";import"./computeTranslationToOriginAndRotation-fq5tUhJM.js";function fe(e,t,r){const u=e.typedBuffer,o=e.typedBufferStride,l=t.typedBuffer,c=t.typedBufferStride,a=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*c;for(let i=0;i<a;++i){for(let n=0;n<9;++n)u[s+n]=l[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function me(e,t,r){const u=e.typedBuffer,o=e.typedBufferStride,l=t.typedBuffer,c=t.typedBufferStride,a=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*c;for(let i=0;i<a;++i){for(let n=0;n<16;++n)u[s+n]=l[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*ie(e.ElementType)))}async function We(e,t,r){const u=new J(pe(r)),o=(await W(u,t,r,!0)).model,l=o.lods.shift(),c=new Map,a=new Map;o.textures.forEach(($,b)=>c.set(b,ge($))),o.materials.forEach(($,b)=>a.set(b,$e($,c)));const s=xe(l);for(const $ of s.parts)ye(s,$,a);const{position:m,normal:i,tangent:n,color:f,texCoord0:p}=s.vertexAttributes,x={position:m.typedBuffer,normal:i!=null?i.typedBuffer:null,tangent:n!=null?n.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:f!=null?f.typedBuffer:null},g=ue(x,e,r);return{transform:g.transform,vertexSpace:g.vertexSpace,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pe(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,u,o)=>{const l=(t==null?void 0:t(r))??r;return(await F(l,{responseType:u==="image"?"image":u==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${R(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function de(e){return e!=null?e.toString():"-"}function xe(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,o=new Map,l=[];for(const c of e.parts){const{attributes:{position:a,normal:s,color:m,tangent:i,texCoord0:n}}=c,f=`
      ${T(a,u)}/
      ${T(s,u)}/
      ${T(m,u)}/
      ${T(i,u)}/
      ${T(n,u)}/
      ${de(c.transform)}
    `;let p=!1;const x=R(o,f,()=>(p=!0,{start:t,length:a.count}));p&&(t+=a.count),s&&(r.normal=!0),m&&(r.color=!0),i&&(r.tangent=!0),n&&(r.texCoord0=!0),l.push({gltf:c,writeVertices:p,region:x})}return{vertexAttributes:{position:y(K,t),normal:r.normal?y(j,t):null,tangent:r.tangent?y(O,t):null,color:r.color?y(I,t):null,texCoord0:r.texCoord0?y(Q,t):null},parts:l,components:[]}}function ge(e){return new N({data:(ce(e.data),e.data),wrap:he(e.parameters.wrap)})}function $e(e,t){const r=new w(ve(e.color,e.opacity)),u=e.emissiveFactor?new w(we(e.emissiveFactor)):null,o=l=>l?new G({scale:l.scale?[l.scale[0],l.scale[1]]:[1,1],rotation:L(l.rotation??0),offset:l.offset?[l.offset[0],l.offset[1]]:[0,0]}):null;return new U({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:u,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function ye(e,t,r){t.writeVertices&&Te(e,t);const{indices:u,attributes:o,primitiveType:l,material:c}=t.gltf;let a=Z(u||o.position.count,l);const s=t.region.start;if(s){const m=new Uint32Array(a);for(let i=0;i<a.length;i++)m[i]+=s;a=m}e.components.push(new X({name:t.gltf.name,faces:a,material:r.get(c),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function Te(e,t){const{position:r,normal:u,tangent:o,color:l,texCoord0:c}=e.vertexAttributes,a=t.region.start,{attributes:s,transform:m}=t.gltf,i=s.position.count;if(Y(r.slice(a,i),s.position,m),s.normal!=null&&u!=null){const n=B(S(),m),f=u.slice(a,i);k(f,s.normal,n),C(n)&&H(f,f)}else u!=null&&ee(u,0,0,1,{dstIndex:a,count:i});if(s.tangent!=null&&o!=null){const n=B(S(),m),f=o.slice(a,i);te(f,s.tangent,n),C(n)&&re(f,f)}else o!=null&&v(o,0,0,1,1,{dstIndex:a,count:i});if(s.texCoord0!=null&&c!=null?ne(c.slice(a,i),s.texCoord0):c!=null&&oe(c,0,0,{dstIndex:a,count:i}),s.color!=null&&l!=null){const n=s.color,f=l.slice(a,i);if(n.elementCount===4)n instanceof O?M(f,n,255):n instanceof I?se(f,n):n instanceof V&&M(f,n,1/256);else{v(f,255,255,255,255);const p=A.fromTypedArray(f.typedBuffer,f.typedBufferStride);n instanceof j?E(p,n,255):n instanceof A?le(p,n):n instanceof q&&E(p,n,1/256)}}else l!=null&&v(l.slice(a,i),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function he(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function d(e){return e**(1/ae)*255}function ve(e,t){return P(d(e[0]),d(e[1]),d(e[2]),t)}function we(e){return z(d(e[0]),d(e[1]),d(e[2]))}export{We as loadGLTFMesh};
