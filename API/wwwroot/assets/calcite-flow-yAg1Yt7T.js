import{g as u,H as p,h as m}from"./index-yumUYLd_.js";import{c as g}from"./observers-OSz_KFa3.js";import{c as w,s as b,a as v}from"./loadable-Q7eNK_7x.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},y=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",k=y,f=u(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=g("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,e)=>{const n=t>1;return!(t&&e>1)&&!n?null:e<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:n}=this,i=Array.from(e.querySelectorAll(`calcite-flow-item${t?`,${t}`:""}`)).filter(o=>o.closest("calcite-flow")===e),r=n.length,a=i.length,s=i[a-1],l=i[a-2];if(a&&s&&i.forEach(o=>{o.showBackButton=o===s&&a>1,o.hidden=o!==s}),l&&(l.menuOpen=!1),this.items=i,r!==a){const o=this.getFlowDirection(r,a);this.itemCount=a,this.flowDirection=o}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const n=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await n.call(e)}catch{return}return e.remove(),e}async setFocus(){await w(this);const{items:t}=this,e=t[t.length-1];return e==null?void 0:e.setFocus()}connectedCallback(){var t;(t=this.itemMutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){b(this)}componentDidLoad(){v(this)}disconnectedCallback(){var t;(t=this.itemMutationObserver)==null||t.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[c.frame]:!0,[c.frameAdvancing]:t==="advancing",[c.frameRetreating]:t==="retreating"};return m("div",{key:"9d405841d7a1ee2d7a5da28c02ef8d5bf08dd9f5",class:e},m("slot",{key:"a02231a5002f8b19542e03529aad12771787b26f"}))}get el(){return this}static get style(){return k}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){if(typeof customElements>"u")return;["calcite-flow"].forEach(t=>{switch(t){case"calcite-flow":customElements.get(t)||customElements.define(t,f);break}})}d();const B=f,E=d;export{B as CalciteFlow,E as defineCustomElement};
