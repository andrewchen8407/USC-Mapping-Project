import{dQ as d,s as n,U as v,_ as y,dR as c,bg as p,dS as b,bW as l}from"./index-lINQMvRL.js";let s=f();function f(){return new d(50)}function g(){s=f()}async function T(r,i){var o,t;if((o=r.resource)!=null&&o.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function $(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await y(()=>import("./objectResourceUtils-DrIXAaAO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(b(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,T as computeIconLayerResourceSize,$ as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/objectResourceUtils-DrIXAaAO.js","assets/index-lINQMvRL.js","assets/index-XQT8DJa7.css","assets/mat3f64-Km-wq5a6.js","assets/mat4f64-BN7r1OmG.js","assets/BufferView-mxA-BiB1.js","assets/vec3-_HIDSV1Z.js","assets/DefaultMaterial_COLOR_GAMMA-b9zr_Lnk.js","assets/quat-hgZ1xrRJ.js","assets/quatf64-upBlkCdX.js","assets/resourceUtils-2aDBMoEV.js","assets/basicInterfaces-IwaMq8O_.js","assets/Indices-JhtOD8q4.js","assets/NestedMap-9UouPomH.js","assets/requestImageUtils-bGj09La9.js","assets/orientedBoundingBox-JZPeZFZv.js","assets/computeTranslationToOriginAndRotation-fq5tUhJM.js","assets/plane-DKCSONgz.js","assets/triangle-tPADhcF0.js","assets/Util-3YbxZuXg.js","assets/ObjectStack-oYk4gUoQ.js","assets/lineSegment-yKwdV5Su.js","assets/VertexAttribute-Hx-XL6n4.js","assets/Texture-yfU5qbMe.js","assets/InterleavedLayout-Y69ReSC1.js","assets/types-GBdbcYRa.js","assets/OrderIndependentTransparency-TsAuHQ2y.js","assets/sphere-3_n6AaKV.js","assets/BindType-RceNqBi4.js","assets/symbolColorUtils-Fr1Z806k.js","assets/doublePrecisionUtils-HJiLm-yC.js","assets/RenderState-T1HVYW47.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
