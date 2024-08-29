import{ge as D,q as S,b6 as v,ds as C,gf as x}from"./index-iTjN3Vrg.js";import{O as k}from"./quat-7lNLrTk6.js";import{e as F}from"./quatf64-upBlkCdX.js";import{t as A,n as w}from"./vec3f32-cbLeGFQ-.js";import{a as R,b as U,d as B}from"./PointCloudUniqueValueRenderer-1lfFQPx_.js";import{w as J,l as N,c as V,I as q}from"./I3SBinaryReader-GLFuTcAD.js";import{O as T}from"./orientedBoundingBox-_mWvUBrQ.js";import"./mat3f64-Km-wq5a6.js";import"./VertexAttribute-Hx-XL6n4.js";import"./mat4f64-BN7r1OmG.js";import"./computeTranslationToOriginAndRotation-reT9pXQP.js";import"./plane-bnPCPNj9.js";function _(c,t,s,n){const{rendererJSON:i,isRGBRenderer:p}=c;let r=null,a=null;if(t&&p)r=t;else if(t&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){a=R.fromJSON(i);const e=a.colorUniqueValueInfos;r=new Uint8Array(3*n);const f=g(a.fieldTransformType);for(let o=0;o<n;o++){const u=(f?f(t[o]):t[o])+"";for(let l=0;l<e.length;l++)if(e[l].values.includes(u)){r[3*o]=e[l].color.r,r[3*o+1]=e[l].color.g,r[3*o+2]=e[l].color.b;break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){a=U.fromJSON(i);const e=a.stops;r=new Uint8Array(3*n);const f=g(a.fieldTransformType);for(let o=0;o<n;o++){const u=f?f(t[o]):t[o],l=e.length-1;if(u<e[0].value)r[3*o]=e[0].color.r,r[3*o+1]=e[0].color.g,r[3*o+2]=e[0].color.b;else if(u>=e[l].value)r[3*o]=e[l].color.r,r[3*o+1]=e[l].color.g,r[3*o+2]=e[l].color.b;else for(let b=1;b<e.length;b++)if(u<e[b].value){const m=(u-e[b-1].value)/(e[b].value-e[b-1].value);r[3*o]=e[b].color.r*m+e[b-1].color.r*(1-m),r[3*o+1]=e[b].color.g*m+e[b-1].color.g*(1-m),r[3*o+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){a=B.fromJSON(i);const e=a.colorClassBreakInfos;r=new Uint8Array(3*n);const f=g(a.fieldTransformType);for(let o=0;o<n;o++){const u=f?f(t[o]):t[o];for(let l=0;l<e.length;l++)if(u>=e[l].minValue&&u<=e[l].maxValue){r[3*o]=e[l].color.r,r[3*o+1]=e[l].color.g,r[3*o+2]=e[l].color.b;break}}}else r=new Uint8Array(3*n).fill(255);if(s&&(a!=null&&a.colorModulation)){const e=a.colorModulation.minValue,f=a.colorModulation.maxValue,o=.3;for(let u=0;u<n;u++){const l=s[u],b=l>=f?1:l<=e?o:o+(1-o)*(l-e)/(f-e);r[3*u]=b*r[3*u],r[3*u+1]=b*r[3*u+1],r[3*u+2]=b*r[3*u+2]}}return r}function E(c,t){if(c.encoding==null||c.encoding===""){const s=J(t,c);if(s.vertexAttributes.position==null)return;const n=N(t,s.vertexAttributes.position),i=s.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],r=[i.scaleX,i.scaleY,i.scaleZ],a=n.length/3,e=new Float64Array(3*a);for(let f=0;f<a;f++)e[3*f]=n[3*f]*r[0]+p[0],e[3*f+1]=n[3*f+1]*r[1]+p[1],e[3*f+2]=n[3*f+2]*r[2]+p[2];return e}if(c.encoding==="lepcc-xyz")return V(t).result}function h(c,t,s){return c!=null&&c.attributeInfo.useElevation?t?z(t,s):null:c!=null&&c.attributeInfo.storageInfo?q(c.attributeInfo.storageInfo,c.buffer,s):null}function z(c,t){const s=new Float64Array(t);for(let n=0;n<t;n++)s[n]=c[3*n+2];return s}function P(c,t,s,n,i){const p=c.length/3;let r=0;for(let a=0;a<p;a++){let e=!0;for(let f=0;f<n.length&&e;f++){const{filterJSON:o}=n[f],u=i[f].values[a];switch(o.type){case"pointCloudValueFilter":{const l=o.mode==="exclude";o.values.includes(u)===l&&(e=!1);break}case"pointCloudBitfieldFilter":{const l=M(o.requiredSetBits),b=M(o.requiredClearBits);(u&l)===l&&!(u&b)||(e=!1);break}case"pointCloudReturnFilter":{const l=15&u,b=u>>>4&15,m=b>1,$=l===1,I=l===b;let y=!1;for(const d of o.includedReturns)if(d==="last"&&I||d==="firstOfMany"&&$&&m||d==="lastOfMany"&&I&&m||d==="single"&&!m){y=!0;break}y||(e=!1);break}}}e&&(s[r]=a,c[3*r]=c[3*a],c[3*r+1]=c[3*a+1],c[3*r+2]=c[3*a+2],t[3*r]=t[3*a],t[3*r+1]=t[3*a+1],t[3*r+2]=t[3*a+2],r++)}return r}function g(c){switch(c){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function M(c){let t=0;for(const s of c||[])t|=1<<s;return t}class X{transform(t){const s=this._transform(t),n=[s.points.buffer,s.rgb.buffer];s.pointIdFilterMap!=null&&n.push(s.pointIdFilterMap.buffer);for(const i of s.attributes)"buffer"in i.values&&D(i.values.buffer)&&i.values.buffer!==s.rgb.buffer&&n.push(i.values.buffer);return Promise.resolve({result:s,transferList:n})}_transform(t){const s=E(t.schema,t.geometryBuffer);let n=s.length/3,i=null;const p=new Array,r=h(t.primaryAttributeData,s,n);t.primaryAttributeData!=null&&r&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:r});const a=h(t.modulationAttributeData,s,n);t.modulationAttributeData!=null&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=_(t.rendererInfo,r,a,n);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const o=t.filterAttributesData.filter(S).map(u=>{const l=h(u,s,n),b={attributeInfo:u.attributeInfo,values:l};return p.push(b),b});i=new Uint32Array(n),n=P(s,e,i,t.filterInfo,o)}for(const o of t.userAttributesData){const u=h(o,s,n);p.push({attributeInfo:o.attributeInfo,values:u})}3*n<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(s,n,t.elevationOffset);const f=this._transformCoordinates(s,n,T.fromData(t.obbData),v.fromJSON(t.inSR),v.fromJSON(t.outSR));return{obbData:t.obbData,points:f,rgb:e,attributes:p,pointIdFilterMap:i}}_transformCoordinates(t,s,n,i,p){if(!C(t,i,0,t,p,0,s))throw new Error("Can't reproject");const r=A(n.center),a=w(),e=w(),f=A(n.halfSize);k(O,n.quaternion);const o=new Float32Array(3*s);for(let u=0;u<s;u++){let l=3*u;a[0]=t[l]-r[0],a[1]=t[l+1]-r[1],a[2]=t[l+2]-r[2],x(e,a,O),f[0]=Math.max(f[0],Math.abs(e[0])),f[1]=Math.max(f[1],Math.abs(e[1])),f[2]=Math.max(f[2],Math.abs(e[2])),o[l++]=a[0],o[l++]=a[1],o[l]=a[2]}return n.halfSize=f,o}_applyElevationOffsetInPlace(t,s,n){if(n!==0)for(let i=0;i<s;i++)t[3*i+2]+=n}}const O=F();function rt(){return new X}export{rt as default};
