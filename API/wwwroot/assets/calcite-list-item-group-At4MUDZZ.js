import{g as o,H as d,j as l,h as t,k as r}from"./index-MnnkPTiO.js";import{c as h,u as f,d as u,I as p}from"./interactive-BvL-PMu_.js";import{M as m}from"./resources4-udsg7e2w.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const i={container:"container",heading:"heading"},g=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",b=g,n=o(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=l(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){h(this)}componentDidRender(){f(this)}disconnectedCallback(){u(this)}render(){const{disabled:e,heading:c}=this;return t(r,{key:"aced6e7f4e0f88658a55973c6451bd3ade9a1095"},t(p,{key:"6a7e77734cc737dfc7779c38f958e23ad19da06a",disabled:e},t("tr",{key:"702a28ae4b478501503ab647fc46c33f25c1e8f7",class:i.container},t("td",{key:"24f50d9130578bbac482ad2dce2777c962f19cc2",class:i.heading,colSpan:m},c)),t("slot",{key:"67ff643701086e093115a93eca5cdb3e1c6559d5",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return b}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function a(){if(typeof customElements>"u")return;["calcite-list-item-group"].forEach(e=>{switch(e){case"calcite-list-item-group":customElements.get(e)||customElements.define(e,n);break}})}a();const k=n,v=a;export{k as CalciteListItemGroup,v as defineCustomElement};
