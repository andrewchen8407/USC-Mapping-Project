import{ae as l}from"./index-Ef0wFma4.js";import{s as p}from"./PooledRBush-0X-Bj4Ii.js";import{g as h}from"./meshVertexSpaceUtils-RP8XRBTz.js";import{P as u}from"./georeference-Rhk7Rl23.js";import"./MeshLocalVertexSpace-R8g9F67f.js";import"./vec3-QGjHJOZc.js";import"./mat3f64-Km-wq5a6.js";import"./mat4f64-BN7r1OmG.js";import"./computeTranslationToOriginAndRotation-gXK0dtfE.js";import"./DoubleArray-qAamWyNb.js";import"./quat-XNxe6GzG.js";import"./quatf64-upBlkCdX.js";import"./BufferView-Uog6hUvK.js";class b{async createIndex(t,r){var m;const e=new Array;if(!((m=t.vertexAttributes)!=null&&m.position))return new p;const a=this._createMeshData(t),n=r!=null?await r.invoke("createIndexThread",a,{transferList:e}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const r=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,r,t.components.map(a=>new Uint32Array(a))):this._createIndexAllThread(e,r)}_createIndexAllThread(t,r){const e=new Array(r.length/9);let a=0;for(let n=0;n<r.length;n+=9)e[a++]=c(r,n,n+3,n+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,r,e){let a=0;for(const s of e)a+=s.length/3;const n=new Array(a);let m=0;for(const s of e)for(let i=0;i<s.length;i+=3)n[m++]=c(r,3*s[i],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const r=(h(t.vertexSpace)?u({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:r}:{position:r,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new p(9,l("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(o,t,r,e){return{minX:Math.min(o[t],o[r],o[e]),maxX:Math.max(o[t],o[r],o[e]),minY:Math.min(o[t+1],o[r+1],o[e+1]),maxY:Math.max(o[t+1],o[r+1],o[e+1]),p0:[o[t],o[t+1],o[t+2]],p1:[o[r],o[r+1],o[r+2]],p2:[o[e],o[e+1],o[e+2]]}}export{b as default};
