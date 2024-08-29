import{g as b,H as m,h,k as x,aN as g}from"./index-RYq4DRUB.js";import{a as v,t as y}from"./dom-HQMx_av9.js";import{c as I}from"./observers-5MKrbiE3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const z={icon:"icon",flipRtl:"flip-rtl"},p={},f={},u={s:16,m:24,l:32};async function C({icon:n,scale:t}){const s=u[t],e=D(n),a=e.charAt(e.length-1)==="F",i=`${a?e.substring(0,e.length-1):e}${s}${a?"F":""}`;if(p[i])return p[i];f[i]||(f[i]=fetch(g(`./assets/icon/${i}.json`)).then(c=>c.json()).catch(()=>(console.error(`"${i}" is not a valid calcite-ui-icon name`),"")));const o=await f[i];return p[i]=o,o}function D(n){const t=!isNaN(Number(n.charAt(0))),s=n.split("-");if(s.length>0){const a=/[a-z]/i;n=s.map((l,i)=>l.replace(a,function(c,d){return i===0&&d===0?c:c.toUpperCase()})).join("")}return t?`i${n}`:n}const k=":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",w=k,P=b(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:s,pathData:e,scale:a,textLabel:l}=this,i=v(t),o=u[a],c=!!l,d=[].concat(e||"");return h(x,{key:"5eb4d26c41c6df7a4fe28e6647a452d4a91106a2","aria-hidden":y(!c),"aria-label":c?l:null,role:c?"img":null},h("svg",{key:"cd87fba0ba564d4a16ca5f18176d99b1f974b8fa","aria-hidden":"true",class:{[z.flipRtl]:i==="rtl"&&s,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${o} ${o}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map(r=>typeof r=="string"?h("path",{d:r}):h("path",{d:r.d,opacity:"opacity"in r?r.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:s,visible:e}=this;if(!t||!e)return;const a=await C({icon:t,scale:s});t===this.icon&&(this.pathData=a)}waitUntilVisible(t){if(this.intersectionObserver=I("intersection",s=>{s.forEach(e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return w}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function N(){if(typeof customElements>"u")return;["calcite-icon"].forEach(t=>{switch(t){case"calcite-icon":customElements.get(t)||customElements.define(t,P);break}})}N();export{P as I,N as d};
