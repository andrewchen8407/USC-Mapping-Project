import{V as i,bl as l,z as s,A as a,bm as n,B as h}from"./index-MdAHgiwM.js";import{m as o,u as d}from"./LayerView-1toPpOEs.js";import"./Container-CddVTLfH.js";import"./highlightReasons-JQk34SCf.js";import"./Texture-JDJZu0Eo.js";let t=class extends o(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",l(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};s([a({cast:n})],t.prototype,"layerViews",null),s([a({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const w=t;export{w as default};
