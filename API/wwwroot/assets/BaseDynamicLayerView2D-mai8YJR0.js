import{w as o,y as p,z as a,A as r,B as m}from"./index-5-AWHvTS.js";import{a as h}from"./BitmapContainer-ikaiITwY.js";import{m as n,u as d}from"./LayerView-BCV1iabf.js";import{v as c}from"./ExportStrategy-5qC4dfCa.js";import{i as u}from"./RefreshableLayerView-DVbuyMNn.js";import"./WGLContainer-Ewma1AIQ.js";import"./LabelMetric-Qql7XEJd.js";import"./Texture-tMUuhWt6.js";import"./Program-dRXszF6X.js";import"./BoundingBox-yxE-2WED.js";import"./ProgramTemplate-RVW0FO1e.js";import"./Container-XQYbxyG4.js";import"./highlightReasons-Wmpft3YI.js";import"./config-z2KFXUcx.js";import"./earcut-ZXEj6tLH.js";import"./Bitmap-5xS9CAsv.js";let t=class extends u(n(d)){update(i){this._strategy.update(i).catch(e=>{o(e)||p.getLogger(this).error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(i,e,s){return this.layer.fetchImageBitmap(i,e,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const L=t;export{L as default};
