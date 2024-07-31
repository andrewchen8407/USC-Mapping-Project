import{b$ as j,c0 as N,ib as d,z as i,A as s,an as w,bu as O,B as c,bx as T,i6 as P,V as b,bm as C,E as $,i9 as L,bl as E,ic as H,cN as B,id as K,ie as M,c3 as V,c5 as k,bw as D}from"./index-Ef0wFma4.js";import{c as G}from"./Analysis-rkk7tkRW.js";import{j as f}from"./persistable-ui-xdQcS.js";import{i as J}from"./elevationInfoUtils-Tk9QUeCs.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-JgEYv5Ux.js";function R(e,t){return I(e)===I(t)}function I(e){if(e==null)return null;const t=e.layer!=null?e.layer.id:"";let r=null;return r=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,r==null?null:`o-${t}-${r}`}const S={json:{write:{writer:Q,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:U}}}};function Q(e,t){var r;((r=e==null?void 0:e.layer)==null?void 0:r.objectIdField)!=null&&e.attributes!=null&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function U(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let a=class extends j(N(T)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:O}),f()],a.prototype,"elevationInfo",void 0),i([s(S)],a.prototype,"feature",void 0),a=i([c("esri.analysis.LineOfSightAnalysisObserver")],a);const z=a;let u=class extends j(P){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:O}),f()],u.prototype,"elevationInfo",void 0),i([s(S)],u.prototype,"feature",void 0),u=i([c("esri.analysis.LineOfSightAnalysisTarget")],u);const F=u,g=b.ofType(F);let l=class extends G{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),t=>{(t==null?void 0:t.pending)==null&&this._set("extent",t!=null?t.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(t){this._set("targets",E(t,this.targets,g))}get spatialReference(){var t;return((t=this.observer)==null?void 0:t.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var t;return[(t=this.observer)==null?void 0:t.position]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){var m;const t=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||t==null)return null;const r=p=>J(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,v=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const y=B(p.position,t);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:A,y:q,z:_}=y.geometry;K(v,[A,q,_])}}const h=M(v,t);return r(this.observer)&&this.targets.every(r)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],l.prototype,"type",void 0),i([s({type:z,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),i([s({cast:C,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),i([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),i([s({readOnly:!0})],l.prototype,"spatialReference",null),i([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=i([c("esri.analysis.LineOfSightAnalysis")],l);const x=l,W=b.ofType(F);let n=class extends V(k(D)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(e,t)=>{t!=null&&t.parent===this&&(t.parent=null),e!=null&&(e.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return(e=this.analysis)==null?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return this.analysis!=null?this.analysis.targets:new b}set targets(e){var t;E(e,(t=this.analysis)==null?void 0:t.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new x)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:W,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([c("esri.layers.LineOfSightLayer")],n);const re=n;export{re as default};
