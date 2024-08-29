import{V as l,bn as _,P as m,q as n,v as c,E as d,z as p,A as u,B as w}from"./index-AMbXrNWD.js";import{m as y,c as f,O as k,f as M,j as V,g as v,a as I}from"./Stop-H7Igsw5A.js";import{t as G}from"./highlightReasons-juRalt2e.js";import{m as F,u as H}from"./LayerView-dzlQjndi.js";import{t as C}from"./GraphicContainer-qdF9JD0S.js";import{$}from"./GraphicsView2D-gWR8BFOU.js";import"./Container-SSUxjoGl.js";import"./Texture-52adMjgS.js";import"./AGraphicContainer-s8d6Z5ri.js";import"./TechniqueInstance-Ol__uzfJ.js";import"./UpdateTracking2D-kSg3dFTu.js";import"./TurboLine-y37Uf0xR.js";import"./earcut-Yu9b2GK9.js";import"./CIMSymbolHelper-JNL224Af.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils-ilEEFGMi.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-flIyT6tP.js";import"./LabelMetric-iCJdkE_z.js";import"./Program-y-yn0_Sd.js";import"./BindType-RceNqBi4.js";import"./Util-53VDlaDK.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-j2YkgoGo.js";import"./WGLContainer-oPsF3hJc.js";import"./ProgramTemplate-Q9KGa6nL.js";import"./config-z2KFXUcx.js";import"./FeatureCommandQueue-OWHvpGBb.js";import"./vec3f32-cbLeGFQ-.js";import"./AttributeStore-tLRkBXLn.js";import"./TimeOnly-zvVxWyfJ.js";import"./timeSupport-rsscK_Md.js";import"./json-v6EOeNTY.js";import"./normalizeUtilsSync-l6dwiBTs.js";const b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof I}function U(t){return l.isCollection(t)&&t.length&&g(t.at(0))}function A(t){return Array.isArray(t)&&t.length>0&&g(t[0])}let h=class extends F(H){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new _({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),m)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter(({popupTemplate:i})=>!!i)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:A(t)?t.map(r=>this._getNetworkFeatureUid(r)):U(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(n);return i.length?(this._addHighlight(i),c(()=>this._removeHighlight(i))):c()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(n).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new C(t.featuresTilingScheme);this._graphicsView=new $({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return b.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(n));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=G("highlight");this._graphicsView.setHighlight(t.map(i=>({objectId:i,highlightFlags:e})))}};p([u()],h.prototype,"_graphics",void 0),p([u()],h.prototype,"_routeItems",null),h=p([w("esri.views.2d.layers.RouteLayerView2D")],h);const dt=h;export{dt as default};
