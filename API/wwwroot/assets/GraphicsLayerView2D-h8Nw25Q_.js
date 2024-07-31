import{N as o,O as g,V as m,q as n,v as a,z as p,A as l,B as c}from"./index-qTI7pilI.js";import{t as d}from"./highlightReasons-tKpJxmzv.js";import{m as u,u as w}from"./LayerView-I0I0dAOK.js";import{t as y}from"./GraphicContainer-a_iu7LXW.js";import{$ as V}from"./GraphicsView2D-jhGLhl7f.js";import{t as f}from"./HighlightCounter-STQ247Da.js";import"./Container-kESSunbZ.js";import"./Texture-Sp2k_c_V.js";import"./AGraphicContainer-Cr6q5KXI.js";import"./TechniqueInstance-RgUc_7co.js";import"./UpdateTracking2D-p81L0hm1.js";import"./TurboLine-X0LmZKNM.js";import"./earcut-eQSquTZB.js";import"./CIMSymbolHelper-gkBjVljH.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-SyxaxBeo.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-Hh8i-2aE.js";import"./LabelMetric-nW1NrK8G.js";import"./Program-hR_Osi32.js";import"./BindType-RceNqBi4.js";import"./Util-Pu8Xrvhv.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-Q-8ft8id.js";import"./WGLContainer-Id8mH9tp.js";import"./ProgramTemplate-aRl5XZWm.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-uo-UQXG2.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-PKHFiim5.js";import"./TimeOnly-Ui1ft8Zd.js";import"./timeSupport-3UJBUqBZ.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-vBpuOaNw.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ii=s;export{ii as default};
