import{bs as o,bt as p,m as i,z as s,A as r,bu as h,bv as n,B as c,bw as d}from"./index-HTbDWax9.js";let t=class extends o(p(d)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,a){return super.on(e,a)}graphicChanged(e){this.emit("graphic-update",e)}};s([r({type:h})],t.prototype,"elevationInfo",void 0),s([r(n(i,"graphics"))],t.prototype,"graphics",void 0),s([r({type:["show","hide"]})],t.prototype,"listMode",void 0),s([r()],t.prototype,"screenSizePerspectiveEnabled",void 0),s([r({readOnly:!0})],t.prototype,"type",void 0),s([r({constructOnly:!0})],t.prototype,"internal",void 0),t=s([c("esri.layers.GraphicsLayer")],t);const y=t;export{y as h};
