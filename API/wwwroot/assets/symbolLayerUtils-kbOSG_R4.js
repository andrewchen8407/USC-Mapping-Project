import{dZ as d,s as n,U as v,_ as y,d_ as c,bg as p,d$ as b,bW as l}from"./index-MdAHgiwM.js";let s=f();function f(){return new d(50)}function g(){s=f()}async function $(r,i){var o,t;if((o=r.resource)!=null&&o.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return v(r,{responseType:"image"}).then(i=>i.data)}async function T(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await y(()=>import("./objectResourceUtils-DtA7nBjQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=p(b(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{g as clearBoundingBoxCache,$ as computeIconLayerResourceSize,T as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/objectResourceUtils-DtA7nBjQ.js","assets/index-MdAHgiwM.js","assets/index-XQT8DJa7.css","assets/mat3f64-Km-wq5a6.js","assets/mat4f64-BN7r1OmG.js","assets/BufferView-lrjA_APL.js","assets/vec3-NO9mWD8T.js","assets/DefaultMaterial_COLOR_GAMMA-gBKqm6mU.js","assets/quat-g0cyP21X.js","assets/quatf64-upBlkCdX.js","assets/resourceUtils-b1Y5qb6R.js","assets/basicInterfaces-IwaMq8O_.js","assets/Indices-6AmRfaJ8.js","assets/NestedMap-9UouPomH.js","assets/requestImageUtils-xxuIjSA2.js","assets/orientedBoundingBox-HtZ6wUgt.js","assets/computeTranslationToOriginAndRotation-sS88NSAW.js","assets/plane-fep9VitG.js","assets/triangle--sKPVU16.js","assets/Util-H0CTeiJ6.js","assets/ObjectStack-sWZjezQO.js","assets/lineSegment-UtIRAAdT.js","assets/VertexAttribute-Hx-XL6n4.js","assets/Texture-JDJZu0Eo.js","assets/InterleavedLayout-9ouZhCAz.js","assets/types-GBdbcYRa.js","assets/OrderIndependentTransparency-Ugmzu3hZ.js","assets/sphere-Ev-FZv6E.js","assets/BindType-RceNqBi4.js","assets/symbolColorUtils-iiuU7HEE.js","assets/doublePrecisionUtils-HJiLm-yC.js","assets/RenderState-T1HVYW47.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
