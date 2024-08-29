import{e2 as S,cH as w,e3 as T,e4 as H,e5 as q,e6 as U,s as V,e7 as E,e8 as W,X as D,e9 as F,ea as I,eb as L}from"./index-AMbXrNWD.js";import{c as X}from"./fontUtils-ilEEFGMi.js";const O="picture-fill",G="picture-marker",J="simple-fill",K="simple-line",N="simple-marker",Q="text",Y="Aa",_=S.size,C=S.maxSize,$=S.maxOutlineSize,Z=S.lineWidth,A=225,ee=document.createElement("canvas");function R(a,e){const l=ee.getContext("2d"),n=[];e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),l.font=n.join(" ");const{width:h,actualBoundingBoxLeft:c,actualBoundingBoxRight:d,actualBoundingBoxAscent:s,actualBoundingBoxDescent:u}=l.measureText(a);return{width:Math.ceil(Math.max(h,c+d)),height:Math.ceil(s+u),x:Math.floor(c),y:Math.floor((s-u)/2)}}function x(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function ae(a,e){const l=e.fill,n=a.color;if((l==null?void 0:l.type)==="pattern"&&n&&a.type!==O){const h=await I(l.src,n.toCss(!0));l.src=h,e.fill=l}}async function ne(a,e,l,n){var d,s,u;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await X(a.font)}catch{}const{width:h,height:c}=x(n);if(!/[\uE600-\uE6FF]/.test(e.shape.text)){const{width:p,height:f,x:i,y:o}=R(e.shape.text,{weight:(d=e.font)==null?void 0:d.weight,size:(s=e.font)==null?void 0:s.size,family:(u=e.font)==null?void 0:u.family});l[0]=h??p,l[1]=c??f,e.shape.x=i,e.shape.y=o;const b=(n==null?void 0:n.rotation)!=null?n.rotation:"angle"in a?a.angle:null;if(b){const M=b*(Math.PI/180),r=Math.abs(Math.sin(M)),m=Math.abs(Math.cos(M));l[1]=l[0]*r+l[1]*m}}}function le(a,e,l,n,h){var c;if(a.haloColor!=null&&a.haloSize!=null){h.masking??(h.masking=l.map(()=>[]));const d=w(a.haloSize);n[0]+=d,n[1]+=d,l.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*d,join:"round",cap:"round"}}]),h.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*L,height:n[1]+2*L},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*L,n[1]+=2*L,l.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(c=h.masking)==null||c.unshift([]))}function P(a,e){return a>e?"dark":"light"}function ie(a,e){var M;const l=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=l!=null?w(l):null,h=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,c=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,d=T(a);let s=H(a);oe(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(s={width:.75,...s,color:"#bdc3c7"});const u={shape:null,fill:d,stroke:s,offset:[0,0]};s!=null&&s.width&&(s.width=Math.min(s.width,$));const p=(s==null?void 0:s.width)||0;let f=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),i=0,o=0,b=!1;switch(a.type){case N:{const r=a.style,{width:m,height:t}=x(e),v=m===t&&m!=null?m:n??Math.min(w(a.size),h||C);switch(i=v,o=v,r){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*v},f||(i+=p,o+=p);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[i,.5*o]},{command:"M",values:[.5*i,0]},{command:"L",values:[.5*i,o]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*o]},{command:"L",values:[.5*i,0]},{command:"L",values:[i,.5*o]},{command:"L",values:[.5*i,o]},{command:"Z",values:[]}]},f||(i+=p,o+=p);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(i+=p,o+=p),c&&(b=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*i,0]},{command:"L",values:[i,o]},{command:"L",values:[0,o]},{command:"Z",values:[]}]},f||(i+=p,o+=p),c&&(b=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,o]},{command:"M",values:[i,0]},{command:"L",values:[0,o]}]},c&&(b=!0);break;case"path":u.shape={type:"path",path:a.path||""},f||(i+=p,o+=p),c&&(b=!0),f=!0}break}case K:{const{width:r,height:m}=x(e),t=U(s).reduce((B,k)=>B+k,0),v=t&&Math.ceil(Z/t),y=m??n??p,g=r??(t*v||Z);s&&(s.width=y),i=g,o=y,f=!0,u.shape={type:"path",path:[{command:"M",values:[y/2,o/2]},{command:"L",values:[i-y/2,o/2]}]};break}case O:case J:{const r=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((M=e==null?void 0:e.symbolConfig)!=null&&M.isSquareFill),{width:m,height:t}=x(e);i=!r&&m!==t||m==null?n??_:m,o=!r&&m!==t||t==null?i:t,f||(i+=p,o+=p),f=!0,u.shape=r?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[i,0]},{command:"L",values:[i,o]},{command:"L",values:[0,o]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:q.fill[0];break}case G:{const r=Math.min(w(a.width),h||C),m=Math.min(w(a.height),h||C),{width:t,height:v}=x(e),y=t===v&&t!=null?t:n??Math.max(r,m),g=r/m;i=g<=1?Math.ceil(y*g):y,o=g<=1?y:Math.ceil(y/g),u.shape={type:"image",x:-Math.round(i/2),y:-Math.round(o/2),width:i,height:o,src:a.url||""},c&&(b=!0);break}case Q:{const r=a,m=(e==null?void 0:e.overrideText)||r.text||Y,t=r.font,{width:v,height:y}=x(e),g=y??n??Math.min(w(t.size),h||C),{width:B,height:k}=R(m,{weight:t.weight,size:g,family:t.family}),z=/[\uE600-\uE6FF]/.test(m);i=v??(z?g:B),o=z?g:k;let j=.5*(z?g:k);z&&(j+=5),u.shape={type:"text",text:m,x:r.xoffset||0,y:r.yoffset||j,align:"middle",alignBaseline:r.verticalAlignment,decoration:t&&t.decoration,rotated:r.rotated,kerning:r.kerning},u.font=t&&{size:g,style:t.style,decoration:t.decoration,weight:t.weight,family:t.family};break}}return{shapeDescriptor:u,size:[i,o],renderOptions:{node:e==null?void 0:e.node,scale:f,opacity:e==null?void 0:e.opacity,rotation:c,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function he(a,e){var d;const{shapeDescriptor:l,size:n,renderOptions:h}=ie(a,e);if(!l.shape)throw new V("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ae(a,l),await ne(a,l,n,e);const c=[[l]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((d=e==null?void 0:e.symbolConfig)!=null&&d.applyColorModulation)){const s=.6*n[0];c.unshift([{...l,offset:[-s,0],fill:E(l.fill,-.3)}]),c.push([{...l,offset:[s,0],fill:E(l.fill,.3)}]),n[0]+=2*s,h.scale=!1}return a.type==="text"&&le(a,l,c,n,h),W(c,n,h)}function oe(a,e=A){const l=T(a),n=H(a),h=!l||"type"in l?null:new D(l),c=n!=null&&n.color?new D(n==null?void 0:n.color):null,d=h?P(F(h),e):null,s=c?P(F(c),e):null;return s?d?d===s?d:e>=A?"light":"dark":s:d}export{oe as getContrastingBackgroundTheme,ie as getRenderSymbolParameters,he as previewSymbol2D};
