import{V as n,z as r,A as a,B as s}from"./index-idTqwGoN.js";import{m as o,u as l}from"./LayerView-CtQ-rE8C.js";import"./Container-Mw7NX4vE.js";import"./highlightReasons-NreboNCz.js";import"./Texture-sQpDqcWN.js";let i=class extends o(l){constructor(){super(...arguments),this.layerViews=new n}get dynamicGroupLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.footprintLayer)})}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([a()],i.prototype,"dynamicGroupLayerView",null),r([a()],i.prototype,"footprintLayerView",null),r([a()],i.prototype,"layerViews",void 0),i=r([s("esri.views.2d.layers.CatalogLayerView2D")],i);const u=i;export{u as default};
