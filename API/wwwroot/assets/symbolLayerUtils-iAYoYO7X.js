import{dZ as d,s as n,U as v,_ as y,d_ as c,bg as p,d$ as b,bW as l}from"./index-qKE4VY30.js";let s=f();function f(){return new d(50)}function g(){s=f()}async function $(r,i){var o,t;if((o=r.resource)!=null&&o.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function T(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await y(()=>import("./objectResourceUtils-o-ChULTo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(b(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,$ as computeIconLayerResourceSize,T as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/objectResourceUtils-o-ChULTo.js","assets/index-qKE4VY30.js","assets/index-SVb3vyBa.css","assets/mat3f64-Km-wq5a6.js","assets/mat4f64-BN7r1OmG.js","assets/BufferView-Txo5gzze.js","assets/vec3-Espe5qSf.js","assets/DefaultMaterial_COLOR_GAMMA-O6KOgd7S.js","assets/quat-1MFGfz1F.js","assets/quatf64-upBlkCdX.js","assets/resourceUtils-hwcCyTmu.js","assets/basicInterfaces-IwaMq8O_.js","assets/Indices-c_nQ9am9.js","assets/NestedMap-9UouPomH.js","assets/requestImageUtils-YNFQOhLG.js","assets/orientedBoundingBox-YNEB6EYV.js","assets/computeTranslationToOriginAndRotation-lmgj8J6m.js","assets/plane-RSZpIHjl.js","assets/triangle-8JNfD3Vx.js","assets/Util-NUVhZN2S.js","assets/ObjectStack-ETfQv6up.js","assets/lineSegment-L740QJZV.js","assets/VertexAttribute-Hx-XL6n4.js","assets/Texture-Z9q62r8Q.js","assets/InterleavedLayout-uo2cwUZ4.js","assets/types-GBdbcYRa.js","assets/OrderIndependentTransparency-eKHMk2FQ.js","assets/sphere-fbthA66g.js","assets/BindType-RceNqBi4.js","assets/symbolColorUtils-GtpHKDCZ.js","assets/doublePrecisionUtils-HJiLm-yC.js","assets/RenderState-T1HVYW47.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
