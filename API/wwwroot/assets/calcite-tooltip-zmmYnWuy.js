import{g as E,H as w,j as a,h as r,k as y}from"./index-yumUYLd_.js";import{t as H,q as b,g as C}from"./dom-HQMx_av9.js";import{c as d,d as k,a as L,r as R,F as h,b as O}from"./FloatingArrow-Go9M-UlP.js";import{g as S}from"./guid-9HVGSr_f.js";import{o as f}from"./openCloseComponent-DIBfGq6D.js";import"./debounce-QhH3kU96.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const x={container:"container"},A=300,D=500,u="aria-describedby";function m(s){const{referenceElement:e}=s;return(typeof e=="string"?b(s,{id:e}):e)||null}class P{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find(n=>t.has(n));return t.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t!=null&&t.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=m(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this;if((i==null?void 0:i.open)&&t.includes(i)){this.clearHoverTimeout();return}const o=this.queryTooltip(t);this.hoveredTooltip=o,!this.isClosableClickedTooltip(o)&&(this.clickedTooltip=null,o?this.openHoveredTooltip(o):i&&this.closeHoveredTooltip())},this.clickHandler=e=>{const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,t!=null&&t.closeOnClick&&(this.toggleTooltip(t,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout(()=>{this.hoverOpenTimeout!==null&&(this.clearHoverCloseTimeout(),this.activeTooltip!==this.hoveredTooltip&&(this.closeActiveTooltip(),e===this.hoveredTooltip&&this.toggleTooltip(e,!0)))},this.activeTooltip?0:A)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout(()=>{this.hoverCloseTimeout!==null&&this.closeActiveTooltip()},D)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0}),e.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0}),e.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:!0}),window.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.addEventListener("click",this.clickHandler,{capture:!0}),window.addEventListener("focusin",this.focusInHandler,{capture:!0}),window.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.removeEventListener("click",this.clickHandler,{capture:!0}),window.removeEventListener("focusin",this.focusInHandler,{capture:!0}),window.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeActiveTooltip(){const{activeTooltip:e}=this;e!=null&&e.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){this.closeActiveTooltip(),t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}queryFocusedTooltip(e,t){const i=this.queryTooltip(e.composedPath());!i||this.isClosableClickedTooltip(i)||this.toggleFocusedTooltip(i,t)}isClosableClickedTooltip(e){return(e==null?void 0:e.closeOnClick)&&e===this.clickedTooltip}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=(t.get(e)??0)+1;i===1&&this.addShadowListeners(e),t.set(e,i)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e)-1;i===0&&this.removeShadowListeners(e),t.set(e,i)}getReferenceElShadowRootNode(e){return e instanceof Element?C(e):null}}const I=":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}",_=I,p=new P,v=E(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=a(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=a(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=a(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=a(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${S()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=m(this.el),d(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:n}=this;e&&i&&!n&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(u,t),p.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(u),p.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=k,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){f(this),this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded),this.open&&f(this),d(this,this.effectiveReferenceElement,this.el)}async componentWillLoad(){this.open&&f(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),d(this,this.effectiveReferenceElement,this.el),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),L(this,this.effectiveReferenceElement,this.el)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:n,overlayPositioning:o,offsetDistance:l,offsetSkidding:c,arrowEl:T}=this;return R(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,offsetDistance:l,offsetSkidding:c,arrowEl:T,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i,floatingLayout:n}=this,o=e&&i,l=!o;return r(y,{key:"e34d0071ff64ee773ee5bbe5a677c739b8326818","aria-hidden":H(l),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},r("div",{key:"7da5007a141c44aab0b84228d284fd7f61802ec3",class:{[h.animation]:!0,[h.animationActive]:o},ref:this.setTransitionEl},r(O,{key:"0d8fae7c85b885579b2783ca9abd653c90261d93",floatingLayout:n,ref:c=>this.arrowEl=c}),r("div",{key:"6f521a876289e6601d1984bb6d1d980fe56b5e2f",class:x.container},r("slot",{key:"3d87fbde922e9b5ef763e53584073a552094adc2"}))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return _}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]},void 0,{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}]);function g(){if(typeof customElements>"u")return;["calcite-tooltip"].forEach(e=>{switch(e){case"calcite-tooltip":customElements.get(e)||customElements.define(e,v);break}})}g();const N=v,$=g;export{N as CalciteTooltip,$ as defineCustomElement};
