import{g as u,H as m,h as t}from"./index-5-AWHvTS.js";import{c as p,d as h}from"./conditionalSlot-zo8JKhWw.js";import{c as g,s as f,a as b}from"./loadable-WZuTTQmY.js";import{u as x,c as C,a as v,d as y,b as M,s as E}from"./t9n-nuPn9cK2.js";import{a as L,d as S,S as s}from"./action-menu-5NVimZpH.js";import{s as O}from"./dom-FOdLGKsR.js";import{d as k}from"./action-Fu5UuQuu.js";import{d as A}from"./icon-WTnOGN3S.js";import{d as z}from"./loader--Q-cTNvM.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const a={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},w={menu:"ellipsis"},H={container:"container"},$=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}',P=$,F=u(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=O(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){x(this,this.effectiveLocale)}async setFocus(){await g(this),this.el.focus()}connectedCallback(){C(this),v(this),p(this)}disconnectedCallback(){y(this),M(this),h(this)}async componentWillLoad(){f(this),await E(this)}componentDidLoad(){b(this)}renderMenu(){const{expanded:e,menuOpen:i,scale:o,layout:l,messages:n,overlayPositioning:r,hasMenuActions:d}=this;return t("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!d,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:i,overlayPositioning:r,placement:l==="horizontal"?"bottom-start":"leading-start",scale:o},t("calcite-action",{icon:w.menu,scale:o,slot:s.trigger,text:n.more,textEnabled:e}),t("slot",{name:a.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),t("slot",{name:a.menuTooltip,slot:s.tooltip}))}render(){return t("div",{key:"689447fecc5bda66fb3b0017288c192033131615","aria-label":this.label,class:H.container,role:"group"},t("slot",{key:"d168163c365d6ec486aa5fa975fad904ba3a525e"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return P}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,F);break;case"calcite-action":customElements.get(e)||k();break;case"calcite-action-menu":customElements.get(e)||S();break;case"calcite-icon":customElements.get(e)||A();break;case"calcite-loader":customElements.get(e)||z();break;case"calcite-popover":customElements.get(e)||L();break}})}G();export{F as A,a as S,G as d};
