import{g as w,H as S,j as p,h as t,k as E}from"./index-qTI7pilI.js";import{s as b,p as X,n as Y,t as y,a as Z}from"./dom-FOdLGKsR.js";import{c as A,u as F,d as H,I as B}from"./interactive-9UmBT3v-.js";import{s as z,a as L,c as P}from"./loadable-XuoT8tI-.js";import{c as I,a as M,s as O,d as T,b as D,u as $}from"./t9n-wKRCIbFG.js";import{c as N}from"./observers-xpWmJ673.js";import{a as R,d as _,S as ee,H as te}from"./action-menu-rED3jME7.js";import{d as W}from"./action-OHxDZ-_Z.js";import{d as j}from"./icon-pRNGijij.js";import{d as K}from"./loader-PWWo24Gx.js";import{d as U}from"./scrim-iuRrGayx.js";import"./guid-9HVGSr_f.js";import"./FloatingArrow-i1H4XEq6.js";import"./debounce-QhH3kU96.js";import"./focusTrapComponent-juqkFNRQ.js";import"./openCloseComponent-laDaQhXr.js";import"./component-zIvoawdS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},v={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},s={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},oe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",ne=oe,ae=w(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=p(this,"calcitePanelClose",6),this.calcitePanelToggle=p(this,"calcitePanelToggle",6),this.calcitePanelScroll=p(this,"calcitePanelScroll",6),this.resizeObserver=N("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=b(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=b(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=b(e)},this.handleActionBarSlotChange=e=>{const o=X(e).filter(n=>n==null?void 0:n.matches("calcite-action-bar"));o.forEach(n=>n.layout="horizontal"),this.hasActionBar=!!o.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=b(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=b(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=b(e)},this.handleFabSlotChange=e=>{this.hasFab=b(e)},this.setPanelScrollEl=e=>{var o,n;this.panelScrollEl=e,(o=this.resizeObserver)==null||o.disconnect(),e&&((n=this.resizeObserver)==null||n.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){A(this),I(this),M(this)}async componentWillLoad(){z(this),await O(this)}componentDidLoad(){L(this)}componentDidRender(){F(this)}disconnectedCallback(){var e;H(this),T(this),D(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this),Y(this.containerEl)}async scrollContentTo(e){var o;(o=this.panelScrollEl)==null||o.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:o,description:n,hasHeaderContent:c}=this,l=e?t(te,{class:a.heading,level:o},e):null,i=n?t("span",{class:a.description},n):null;return!c&&(l||i)?t("div",{class:a.headerContent,key:"header-content"},l,i):null}renderActionBar(){return t("div",{class:a.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:a.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[a.headerActionsStart]:!0,[a.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:o,closable:n,collapsed:c,collapseDirection:l,collapsible:i,hasMenuItems:r}=this,{collapse:d,expand:f,close:m}=o,g=[v.expand,v.collapse];l==="up"&&g.reverse();const u=i?t("calcite-action",{"aria-expanded":y(!c),"aria-label":d,"data-test":"collapse",icon:c?g[0]:g[1],onClick:this.collapse,text:d,title:c?f:d}):null,C=n?t("calcite-action",{"aria-label":m,"data-test":"close",icon:v.close,onClick:this.close,text:m,title:m}):null,Q=t("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),V=e||u||C||r;return t("div",{class:{[a.headerActionsEnd]:!0,[a.headerActions]:!0},hidden:!V,key:"header-actions-end"},Q,this.renderMenu(),u,C)}renderMenu(){const{hasMenuItems:e,messages:o,menuOpen:n}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:o.options,open:n,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:v.menu,slot:ee.trigger,text:o.options}),t("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:o,hasEndActions:n,closable:c,collapsible:l,hasMenuItems:i,hasActionBar:r}=this,d=this.renderHeaderContent(),f=e||!!d||o||n||l||c||i;return this.showHeaderContent=f,t("header",{class:a.header,hidden:!(f||r)},t("div",{class:{[a.headerContainer]:!0,[a.headerContainerBorderEnd]:r},hidden:!f},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:o}=this,n=e||o;return t("footer",{class:a.footer,hidden:!n},t("slot",{key:"footer-slot",name:s.footer,onSlotchange:this.handleFooterSlotChange}),t("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return t("div",{class:a.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderFab(){return t("div",{class:a.fabContainer,hidden:!this.hasFab},t("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:o,panelKeyDownHandler:n,closed:c,closable:l}=this,i=t("article",{key:"c03a39a1d58126b861ce2a4f7610a20d8bee288d","aria-busy":y(o),class:a.container,hidden:c,tabIndex:l?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return t(E,{key:"0378ba8d08d9c802b21f3c8edd9926f759a6381c",onKeyDown:n},t(B,{key:"ada3c75b32686e450190e407d6c4855e7e1310eb",disabled:e},o?t("calcite-scrim",{loading:o}):null,i))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ne}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,ae);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||j();break;case"calcite-loader":customElements.get(e)||K();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||U();break}})}G();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const se={backButton:"back-button"},x={backLeft:"chevron-left",backRight:"chevron-right"},h={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},ie=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",ce=ie,q=w(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=p(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=p(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=p(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=p(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){A(this),I(this),M(this)}async componentWillLoad(){await O(this),z(this)}componentDidRender(){F(this)}disconnectedCallback(){H(this),T(this),D(this)}componentDidLoad(){L(this)}effectiveLocaleChange(){$(this,this.effectiveLocale)}async setFocus(){await P(this);const{backButtonEl:e,containerEl:o}=this;if(e)return e.setFocus();if(o)return o.setFocus()}async scrollContentTo(e){var o;await((o=this.containerEl)==null?void 0:o.scrollContentTo(e))}renderBackButton(){const{el:e}=this,o=Z(e)==="rtl",{showBackButton:n,backButtonClick:c,messages:l}=this,i=l.back,r=o?x.backRight:x.backLeft;return n?t("calcite-action",{"aria-label":i,class:se.backButton,icon:r,key:"flow-back-button",onClick:c,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:o,collapsible:n,closable:c,closed:l,description:i,disabled:r,heading:d,headingLevel:f,loading:m,menuOpen:g,messages:u,overlayPositioning:C}=this;return t(E,{key:"ab926d381ff2493f3fd49a5c8724260211d69ca9"},t(B,{key:"6799b56c2116de5e08739ddc2ec1557bd291f3f8",disabled:r},t("calcite-panel",{key:"2e438b8abf573eabaaa2e966dcca5c4843a53cba",closable:c,closed:l,collapseDirection:o,collapsed:e,collapsible:n,description:i,disabled:r,heading:d,headingLevel:f,loading:m,menuOpen:g,messageOverrides:u,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:C,ref:this.setContainerRef},this.renderBackButton(),t("slot",{key:"39b650abdf64df16f535d45f64dc1b367acfcc9e",name:h.actionBar,slot:s.actionBar}),t("slot",{key:"5b36c56874ad762f842c81f9ffbdcdbd3168cf75",name:h.headerActionsStart,slot:s.headerActionsStart}),t("slot",{key:"2dbf552425d238a4479a12bbec79571d11124577",name:h.headerActionsEnd,slot:s.headerActionsEnd}),t("slot",{key:"2dd0a30236844c91c2cf10a9fbacbe9935ea234c",name:h.headerContent,slot:s.headerContent}),t("slot",{key:"1b025f746e2e7d58fb057aab36b24e46872e607e",name:h.headerMenuActions,slot:s.headerMenuActions}),t("slot",{key:"5dd5986e93dcc11e0b0fade6822814b160053c70",name:h.fab,slot:s.fab}),t("slot",{key:"e7cf2702cd2e423d07a8a8ac57c142bc4738b3ef",name:h.footerActions,slot:s.footerActions}),t("slot",{key:"e2561d89aaebe4fbb82b1f546551d05ebb23b0bf",name:h.footer,slot:s.footer}),t("slot",{key:"fb6bf40456038f84486b2858765bb9d147800e84"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ce}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function J(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,q);break;case"calcite-action":customElements.get(e)||W();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||j();break;case"calcite-loader":customElements.get(e)||K();break;case"calcite-panel":customElements.get(e)||G();break;case"calcite-popover":customElements.get(e)||R();break;case"calcite-scrim":customElements.get(e)||U();break}})}J();const Fe=q,He=J;export{Fe as CalciteFlowItem,He as defineCustomElement};
