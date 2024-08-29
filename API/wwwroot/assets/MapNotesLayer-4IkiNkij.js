import{cJ as C,z as l,A as s,B as M,ce as G,cb as B,cd as v,cK as F,bs as z,bt as k,c3 as A,c4 as W,c5 as K,b6 as h,V as w,cL as U,aw as N,cz as I,cM as J,cN as S,cO as $,cP as R,O as H,s as q,cQ as Q,G as V,b0 as Y,aY as Z,aZ as X,a_ as ee,aD as te,cR as T,c6 as f,cS as re,aU as oe,cT as D,bw as le}from"./index-iTjN3Vrg.js";import{h as ie}from"./GraphicsLayer-2YHfUuKM.js";import{n as ae}from"./objectIdUtils-GktMsX8e.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return L.find(o=>{var i,n,y;return r===o.geometryTypeJSON&&((y=(n=(i=t.drawingInfo)==null?void 0:i.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function _(){return new oe({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new C({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new C({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends ie{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:R(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=I();return this.graphics.forEach(o=>{const i=o.geometry!=null?S(o.geometry,t).geometry:null;i!=null&&J(e,i.type==="point"?i:i.extent,e)}),$(e,D)?null:e}get sublayers(){return this.graphics}};l([s({readOnly:!0})],u.prototype,"fullExtent",null),l([s({readOnly:!0})],u.prototype,"fullBounds",null),l([s({readOnly:!0})],u.prototype,"sublayers",null),l([s()],u.prototype,"layer",void 0),l([s()],u.prototype,"layerId",void 0),l([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=l([M("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const L=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new G().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new v().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new v().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends z(k(A(W(K(le))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(L.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(i=>{const n=new U;return n.read(i,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=I();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const i=S(o.layerDefinition.extent,t).geometry;i!=null&&J(e,i,e)}),$(e,D)?S(_(),t).geometry:R(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let i=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,c=y.id??i++,d=E(n);if(d!=null){const m=new u({id:d.id,title:y.name,layerId:c,layer:this,graphics:p.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>H.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(m)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:i,maxScale:n}=this;if(t==null)return;const y=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new q("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let c=this.spatialReference.toJSON();e:for(const m of t)for(const g of m.graphics)if(g.geometry!=null){c=g.geometry.spatialReference.toJSON();break e}for(const m of L){const g=t.find(O=>m.id===O.id);this._writeMapNoteSublayer(p,g,m,i,n,c,o)}Q("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const i of o.graphics)if(i.geometry!=null){const n=i.geometry;t?V(n.spatialReference,t)||(Y(n.spatialReference,t)||Z()||await X(),i.geometry=ee(n,t)):t=n.spatialReference,e.push(i)}const r=await te(e.map(o=>o.geometry));e.forEach((o,i)=>o.geometry=r[i])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,i,n,y){const p=[];if(e!=null){for(const c of e.graphics)this._writeMapNote(p,c,r.geometryType,y);this._normalizeObjectIds(p,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var c,d;if(e==null)return;const{geometry:i,symbol:n,popupTemplate:y}=e;if(i==null)return;if(i.type!==r)return void((c=o==null?void 0:o.messages)==null?void 0:c.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:i.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=ae(r,t)+1;const i=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||i.has(y[r]))&&(y[r]=o++),i.add(y[r])}}};l([s({readOnly:!0})],a.prototype,"capabilities",void 0),l([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),l([s({readOnly:!0})],a.prototype,"featureCollections",void 0),l([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),l([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),l([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),l([s({readOnly:!0})],a.prototype,"fullExtent",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),l([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),l([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),l([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),l([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),l([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),l([s({readOnly:!0})],a.prototype,"multipointLayer",null),l([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),l([s({readOnly:!0})],a.prototype,"pointLayer",null),l([s({readOnly:!0})],a.prototype,"polygonLayer",null),l([s({readOnly:!0})],a.prototype,"polylineLayer",null),l([s({type:h})],a.prototype,"spatialReference",void 0),l([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),l([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),l([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),l([re("web-map","sublayers")],a.prototype,"writeSublayers",null),l([s({readOnly:!0})],a.prototype,"textLayer",null),l([s()],a.prototype,"title",void 0),l([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=l([M("esri.layers.MapNotesLayer")],a);const ue=a;export{ue as default};
