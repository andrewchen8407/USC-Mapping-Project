import{h as o,g as M,H as I,j as u,aM as z,k as _,hV as U}from"./index-UN0u_eSp.js";import{t as g,n as $,q as K,w as q,f as X}from"./dom-FOdLGKsR.js";import{g as A}from"./guid-9HVGSr_f.js";import{u as Y,c as j,a as W,s as G,d as J,b as Q,i as B}from"./t9n-m8PxNydI.js";import{s as D,a as H,c as L}from"./loadable-nUxeGu6N.js";import{d as O}from"./action-A8lhQG1H.js";import{d as R}from"./icon-s5epgnyA.js";import{d as T}from"./loader-Ppe3_1Dt.js";import{f as Z,c as p,d as N,a as V,r as ee,b as te,F as v}from"./FloatingArrow-LnRQK6Pe.js";import{d as m,a as b,c as ne,u as ie}from"./focusTrapComponent-juqkFNRQ.js";import{o as E}from"./openCloseComponent-D1w4yVZm.js";import{c as se}from"./observers-D-vG3nj_.js";import{g as oe}from"./component-zIvoawdS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */function x(a,e){return(a+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const ae=(a,e)=>{const t=a.level?`h${a.level}`:"div";return delete a.level,o(t,{...a},e)};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */class le{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,n=e.find(i=>t.has(i));return t.get(n)},this.togglePopovers=e=>{const t=e.composedPath(),n=this.queryPopover(t);n&&!n.triggerDisabled&&(n.open=!n.open),Array.from(this.registeredElements.values()).filter(i=>i!==n&&i.autoClose&&i.open&&!t.includes(i)).forEach(i=>i.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():B(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{q(e)||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const l={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},re="auto",y="aria-controls",w="aria-expanded",ce=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-color-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",de=ce,k=new le,he=M(class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=u(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=u(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=u(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=u(this,"calcitePopoverOpen",6),this.mutationObserver=se("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${A()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?Z(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),p(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:n,effectiveReferenceElement:i}=this;e&&n&&!i&&console.warn(`${t.tagName}: reference-element id "${n}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(w,g(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(y,t),k.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(y),e.removeAttribute(w)),k.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=N,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=re,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?m(this):b(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){E(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){Y(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),j(this),W(this),this.setUpReferenceElement(this.hasLoaded),ne(this),this.open&&E(this),p(this,this.effectiveReferenceElement,this.el)}async componentWillLoad(){await G(this),D(this)}componentDidLoad(){H(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),p(this,this.effectiveReferenceElement,this.el),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),J(this),Q(this),V(this,this.effectiveReferenceElement,this.el),m(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:n,placement:i,overlayPositioning:s,flipDisabled:r,filteredFlipPlacements:c,offsetDistance:d,offsetSkidding:h,arrowEl:f}=this;return ee(this,{floatingEl:t,referenceEl:n,overlayPositioning:s,placement:i,flipDisabled:r,flipPlacements:c,offsetDistance:d,offsetSkidding:h,arrowEl:f,type:"popover"},e)}async setFocus(){await L(this),z(this.el),$(this.el)}async updateFocusTrapElements(){ie(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?K(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),b(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),m(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?o("div",{class:l.closeButtonContainer,key:l.closeButtonContainer},o("calcite-action",{appearance:"transparent",class:l.closeButton,onClick:this.hide,scale:this.scale,text:e.close,ref:n=>this.closeButtonEl=n},o("calcite-icon",{icon:"x",scale:oe(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,n=e?o(ae,{class:l.heading,level:t},e):null;return n?o("div",{class:l.header,key:l.header},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:n,open:i,pointerDisabled:s,floatingLayout:r}=this,c=e&&i,d=!c,h=s?null:o(te,{floatingLayout:r,key:"floating-arrow",ref:this.storeArrowEl});return o(_,{key:"c6ca86d9bde93db52f3abc95344e8bff9e245517","aria-hidden":g(d),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},o("div",{key:"1e1054bfa6ac2e762b8ba49b0148330c6e3e4bd8",class:{[v.animation]:!0,[v.animationActive]:c},ref:this.setTransitionEl},h,o("div",{key:"e9d6f6a86b2f433625df8436bc7bbea1dcdd5c60",class:{[l.hasHeader]:!!t,[l.container]:!0}},this.renderHeader(),o("div",{key:"64845f98d4666edc418aa119c3fd7c592d41ee48",class:l.content},o("slot",{key:"24a55594fb96fb227012406096f74b7646b58b9e"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return de}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function S(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,he);break;case"calcite-action":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||R();break;case"calcite-loader":customElements.get(e)||T();break}})}S();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const C={menu:"menu",defaultTrigger:"default-trigger"},P={tooltip:"tooltip",trigger:"trigger"},fe={menu:"ellipsis"},ue="data-active",pe=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}",me=pe,ge=["ArrowUp","ArrowDown","End","Home"],ve=M(class extends I{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=u(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${A()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:i}=this,s=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==s&&(this.disconnectMenuButtonEl(),this.menuButtonEl=s,this.setTooltipReferenceElement(),s&&(s.active=n,s.setAttribute("aria-controls",t),s.setAttribute("aria-expanded",g(n)),s.setAttribute("aria-haspopup","true"),s.id||(s.id=e),s.label||(s.label=i),s.text||(s.text=i),s.addEventListener("click",this.menuButtonClick),s.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:i}=this;e&&(e.referenceElement=!t&&!i?n:null)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:i}=this,s=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=s),e.toggleAttribute(ue,t===i)},this.updateActions=e=>{e==null||e.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).reduce((n,i)=>i!=null&&i.matches("calcite-action")?(n.push(i),n):i!=null&&i.matches("calcite-action-group")?n.concat(Array.from(i.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:i,open:s}=this;if(n.length){if(B(t)){if(e.preventDefault(),!s){this.toggleOpen();return}const r=n[i];r?r.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,ge))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=x(Math.max(i-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=x(i+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){D(this)}componentDidLoad(){H(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await L(this),X(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:i}=this;return o("slot",{name:P.trigger,onSlotchange:this.setMenuButtonEl},o("calcite-action",{appearance:e,class:C.defaultTrigger,icon:fe.menu,scale:n,text:t,textEnabled:i,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:i,menuButtonEl:s,label:r,placement:c,overlayPositioning:d,flipPlacements:h}=this,f=e[t],F=(f==null?void 0:f.id)||null;return o("calcite-popover",{autoClose:!0,flipPlacements:h,focusTrapDisabled:!0,label:r,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:d,placement:c,pointerDisabled:!0,referenceElement:s},o("div",{"aria-activedescendant":F,"aria-labelledby":s==null?void 0:s.id,class:C.menu,id:i,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},o("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return o(U,{key:"172df111e58778a1006253a0eb444e767ad2d12b"},this.renderMenuButton(),this.renderMenuItems(),o("slot",{key:"1df982aa86cbdd0c2c7d847e9b6f0a4d35b5ba15",name:P.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find(n=>n===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return me}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function be(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,ve);break;case"calcite-action":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||R();break;case"calcite-loader":customElements.get(e)||T();break;case"calcite-popover":customElements.get(e)||S();break}})}be();export{ve as A,ae as H,P as S,S as a,be as d};
