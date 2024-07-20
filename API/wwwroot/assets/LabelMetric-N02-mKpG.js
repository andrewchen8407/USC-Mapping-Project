import{jA as M,gu as c,s as m,b9 as f,y as N,jm as A}from"./index--gWF5o_U.js";import{s as U,e as b,m as x}from"./Texture-bQ_GwJMm.js";import"./Program-8dzz1fbM.js";import{i as B}from"./BoundingBox-Biwomhwq.js";let d=class E{constructor(t,s,r,i,n,o,a){this.instanceId=t,this.textureKey=s,this.indexStart=r,this.indexCount=i,this.vertexStart=n,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new E(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,s,r,i,n,o,a,u){t.push(s),t.push(r),t.push(i),t.push(n),t.push(o),t.push(a),t.push(u)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const s=t.readInt32(),r=t.readInt32(),i=t.readInt32(),n=t.readInt32(),o=t.readInt32(),a=t.readInt32(),u=t.readInt32();return new E(s,r,i,n,o,a,u)}};d.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function T(e,t){if(t!==null){e.push(t.length);for(const s of t)s.serialize(e);return e}e.push(0)}function I(e,t,s){const r=e.readInt32(),i=new Array(r);for(let n=0;n<i.length;n++)i[n]=t.deserialize(e,s);return i}class y{constructor(t,s){this.id=t,this.sortKey=s,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),T(t,this.records),t}static deserialize(t){const s=t.readInt32(),r=t.readF32(),i=new y(s,r);return i.records=I(t,d)??[],i}}y.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+d.byteSizeHint;function O(e){const t=e.map(({name:s,count:r,type:i})=>`${s}.${r}.${i}`).join(",");return M(t)}function l(e,t,s,r,i,n,o){if(e.primitiveName===t){for(const a in e)if(a===s){let u=r==null?void 0:r.readWithDefault(i,n,e[a]&&o);return e.type==="text"&&(u=u.toString()),void(e[a]=u)}}if("type"in e&&e.type!=null)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(const a of e.symbolLayers)l(a,t,s,r,i,n,o);break;case"CIMHatchFill":e.lineSymbol&&l(e.lineSymbol,t,s,r,i,n,o);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const a of e.markerGraphics)l(a,t,s,r,i,n,o),l(a.symbol,t,s,r,i,n,o)}}function G(e){const t=e.width;return e.effects!=null?256:Math.max(1.25*t,8)}const Y=new Float32Array(1);new Uint32Array(Y.buffer);function D(e,t){return 65535&e|t<<16}function H(e,t,s,r){const i=s.packPrecisionFactor??1;switch(s.type){case c.BYTE:if(s.count===1)e.setInt8(r+s.offset,t*i);else for(let n=0;n<s.count;n++){const o=n*Int8Array.BYTES_PER_ELEMENT;e.setInt8(r+s.offset+o,t[n]*i)}break;case c.UNSIGNED_BYTE:if(s.count===1)e.setUint8(r+s.offset,t*i);else for(let n=0;n<s.count;n++){const o=n*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(r+s.offset+o,t[n]*i)}break;case c.SHORT:if(s.count===1)e.setInt16(r+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Int16Array.BYTES_PER_ELEMENT;e.setInt16(r+s.offset+o,t[n]*i,!0)}break;case c.UNSIGNED_SHORT:if(s.count===1)e.setUint16(r+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(r+s.offset+o,t[n]*i,!0)}break;case c.INT:if(s.count===1)e.setInt32(r+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Int32Array.BYTES_PER_ELEMENT;e.setInt32(r+s.offset+o,t[n]*i,!0)}break;case c.UNSIGNED_INT:if(s.count===1)e.setUint32(r+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(r+s.offset+o,t[n]*i,!0)}break;case c.FLOAT:if(s.count===1)e.setFloat32(r+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(r+s.offset+o,t[n]*i,!0)}}}function $(e,t,s){switch(t.type){case c.BYTE:{if(t.count===1)return e.getInt8(s+t.offset);const r=[];for(let i=0;i<t.count;i++){const n=i*Int8Array.BYTES_PER_ELEMENT;r.push(e.getInt8(s+t.offset+n))}return r}case c.UNSIGNED_BYTE:{if(t.count===1)return e.getUint8(s+t.offset);const r=[];for(let i=0;i<t.count;i++){const n=i*Uint8Array.BYTES_PER_ELEMENT;r.push(e.getUint8(s+t.offset+n))}return r}case c.SHORT:{if(t.count===1)return e.getInt16(s+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const n=i*Int16Array.BYTES_PER_ELEMENT;r.push(e.getInt16(s+t.offset+n,!0))}return r}case c.UNSIGNED_SHORT:{if(t.count===1)return e.getUint16(s+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const n=i*Uint16Array.BYTES_PER_ELEMENT;r.push(e.getUint16(s+t.offset+n,!0))}return r}case c.INT:{if(t.count===1)return e.getInt32(s+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const n=i*Int32Array.BYTES_PER_ELEMENT;r.push(e.getInt32(s+t.offset+n,!0))}return r}case c.UNSIGNED_INT:{if(t.count===1)return e.getUint32(s+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const n=i*Uint32Array.BYTES_PER_ELEMENT;r.push(e.getUint32(s+t.offset+n,!0))}return r}case c.FLOAT:{if(t.count===1)return e.getFloat32(s+t.offset,!0);const r=[];for(let i=0;i<t.count;i++){const n=i*Float32Array.BYTES_PER_ELEMENT;r.push(e.getFloat32(s+t.offset+n,!0))}return r}}}const S=()=>N.getLogger("esri.views.2d.engine.webgl.Utils");function X(e){switch(e){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void S().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function K(e){switch(e){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void S().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function L(e){var s;const t={};for(const r in e){const i=e[r];let n=0;t[r]=i.map(o=>{const a=new A(o.name,o.count,o.type,n,0,o.normalized||!1);return n+=o.count*U(o.type),a}),(s=t[r])==null||s.forEach(o=>o.stride=n)}return t}const R=e=>{const t=new Map;for(const s in e)for(const r of e[s])t.set(r.name,r.location);return t},P=e=>{const t={};for(const s in e){const r=e[s];t[s]=r!=null&&r.length?r[0].stride:0}return t},p=new Map,j=(e,t)=>{if(!p.has(e)){const s=L(t),r={strides:P(s),bufferLayouts:s,attributes:R(t)};p.set(e,r)}return p.get(e)},q=e=>e.includes("data:image/svg+xml");function V(e){const t=[];for(let s=0;s<e.length;s++)t.push(e.charCodeAt(s));return t}function W(e,t,s){const r=new b(t.width,t.height);return r.dataType=t.dataType,t.depth&&(r.depth=t.depth),t.flipped&&(r.flipped=t.flipped),t.hasMipmap&&(r.hasMipmap=t.hasMipmap),r.internalFormat=t.internalFormat,t.isImmutable&&(r.isImmutable=t.isImmutable),t.isOpaque&&(r.isOpaque=t.isOpaque),t.maxAnisotropy&&(r.maxAnisotropy=t.maxAnisotropy),r.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(r.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(r.samplingMode=t.samplingMode),t.target&&(r.target=t.target),r.uniform=t.uniform,t.unpackAlignment&&(r.unpackAlignment=t.unpackAlignment),t.wrapMode&&(r.wrapMode=t.wrapMode),new x(e,r,s)}function J(e){return"url"in e&&"urlHash"in e?{...e,url:""}:e}class _{constructor(t,s,r,i,n,o,a,u,h=[]){this.entityTexel=t,this.anchorX=s,this.anchorY=r,this.directionX=i,this.directionY=n,this.maxScale=o,this.minScale=a,this.referenceBounds=u,this.bounds=h}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),T(t,this.bounds)}static deserialize(t){const s=t.readInt32(),r=t.readF32(),i=t.readF32(),n=t.readF32(),o=t.readF32(),a=t.readF32(),u=t.readF32(),h=t.readF32(),w=t.readF32(),F=t.readF32(),g=I(t,B)??[];return new _(s,r,i,n,o,a,u,{size:h,offsetX:w,offsetY:F},g)}}export{J as M,W as T,O as a,j as b,X as c,K as d,I as e,H as f,G as g,V as j,$ as n,l as o,_ as r,y as s,d as t,D as w,q as y};
