import{z as l,A as a,bm as o,B as d,V,E as y,eB as h,bl as p}from"./index-6vge_MSe.js";import{u as w,m as v}from"./LayerView-NTB-RNCv.js";import"./Container-3B_B4bnk.js";import"./highlightReasons-6Pwzh1ia.js";import"./Texture-hOw0I6XC.js";let t=class extends w{constructor(i){super(i),this.type="group",this.layerViews=new V}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",p(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const s=this._findLayerViewForLayer(e);return!!(s!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(s=>y(()=>s.visible,r=>this._applyVisibility(()=>{r!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(r?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,r;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((r=this.layer)==null?void 0:r.visibilityMode)==="exclusive"&&e())}};l([a({cast:o})],t.prototype,"layerViews",null),l([a({readOnly:!0})],t.prototype,"updatingProgress",null),l([a()],t.prototype,"view",void 0),t=l([d("esri.views.layers.GroupLayerView")],t);const u=t;let n=class extends v(u){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=l([d("esri.views.2d.layers.GroupLayerView2D")],n);const L=n;export{L as default};
