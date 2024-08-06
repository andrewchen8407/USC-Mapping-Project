import{b8 as b,b9 as A,ba as _,bb as T,bc as s,bd as E,be as d}from"./index-qKE4VY30.js";import{e as h,m as O}from"./Texture-Z9q62r8Q.js";function w(e,t,a="nearest",i=!1){var c;const n=!(i&&t.pixelType==="u8"),o=n?A.FLOAT:A.UNSIGNED_BYTE,u=t.pixels==null||t.pixels.length===0?null:n?t.getAsRGBAFloat():t.getAsRGBA(),f=(c=e.capabilities.textureFloat)==null?void 0:c.textureFloatLinear,r=new h;return r.width=t.width,r.height=t.height,r.internalFormat=n?b.RGBA32F:d.RGBA,r.samplingMode=!f||a!=="bilinear"&&a!=="cubic"?_.NEAREST:_.LINEAR,r.dataType=o,r.wrapMode=T.CLAMP_TO_EDGE,new O(e,r,u)}function F(e,t){const{spacing:a,offsets:i,coefficients:n,size:[o,u]}=t,f=a[0]>1,r=new h;r.width=f?4*o:o,r.height=u,r.internalFormat=b.RGBA32F,r.dataType=A.FLOAT,r.samplingMode=_.NEAREST,r.wrapMode=T.CLAMP_TO_EDGE;const c=new Float32Array(f?o*u*16:2*i.length);if(f&&n!=null)for(let m=0,l=0;m<n.length;m++)c[l++]=n[m],m%3==2&&(c[l++]=1);else for(let m=0;m<u;m++)for(let l=0;l<o;l++){const g=4*(m*o+l),p=2*(l*u+m);c[g]=i[p],c[g+1]=i[p+1],c[g+3]=i[p]===-1?0:1}return new O(e,r,c)}function M(e,t){const a=new h;return a.internalFormat=d.RGBA,a.width=t.length/4,a.height=1,a.samplingMode=_.NEAREST,a.wrapMode=T.CLAMP_TO_EDGE,new O(e,a,t)}function x(e,t,a,i=1,n=!0){return{u_flipY:n,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:E,u_transformGridSize:e?e.size:E,u_targetImageSize:t,u_srcImageSize:a}}function G(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function V(e,t){return{u_scale:e,u_offset:t}}function k(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function N(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function v(e,t){const a=e.gl,i=t.glName,n=new Map;if(i==null)return n;const o=a.getProgramParameter(i,a.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=a.getActiveUniform(i,f),u&&n.set(u.name,{location:a.getUniformLocation(i,u.name),info:u});return n}function B(e,t,a){Object.keys(a).forEach(i=>{const n=t.get(i)||t.get(i+"[0]");n&&C(e,i,a[i],n)})}function I(e,t,a,i){a.length===i.length&&(i.some(n=>n==null)||a.some(n=>n==null)||a.forEach((n,o)=>{t.setUniform1i(n,o),e.bindTexture(i[o],o)}))}function C(e,t,a,i){if(i===null||a==null)return!1;const{info:n}=i;switch(n.type){case s.FLOAT:n.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case s.FLOAT_VEC2:e.setUniform2fv(t,a);break;case s.FLOAT_VEC3:e.setUniform3fv(t,a);break;case s.FLOAT_VEC4:e.setUniform4fv(t,a);break;case s.FLOAT_MAT3:e.setUniformMatrix3fv(t,a);break;case s.FLOAT_MAT4:e.setUniformMatrix4fv(t,a);break;case s.INT:n.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case s.BOOL:e.setUniform1i(t,a?1:0);break;case s.INT_VEC2:case s.BOOL_VEC2:e.setUniform2iv(t,a);break;case s.INT_VEC3:case s.BOOL_VEC3:e.setUniform3iv(t,a);break;case s.INT_VEC4:case s.BOOL_VEC4:e.setUniform4iv(t,a);break;default:return!1}return!0}export{N as A,I as O,v as T,G as _,F as c,w as f,V as g,B as h,x as l,M as m,k as p};
