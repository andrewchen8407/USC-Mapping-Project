import{z as i,B as t,aV as h,w as l,y as d}from"./index-idTqwGoN.js";const o=a=>{let e=class extends a{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(s=>{l(s)||d.getLogger(this).error(s)})}),"RefreshableLayerView")}};return e=i([t("esri.layers.mixins.RefreshableLayerView")],e),e};export{o as i};
