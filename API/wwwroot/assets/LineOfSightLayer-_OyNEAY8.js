import{b$ as j,c0 as N,i8 as d,z as i,A as s,an as w,bu as O,B as c,bx as T,i3 as P,V as b,bm as C,E as $,i6 as L,bl as E,i9 as H,cN as B,ia as K,ib as M,c3 as V,c5 as k,bw as D}from"./index-lINQMvRL.js";import{c as G}from"./Analysis-mdcqLgMu.js";import{j as f}from"./persistable-PNi6gR8K.js";import{i as J}from"./elevationInfoUtils-j03qA3Bj.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./resourceExtension-zgM_kRbl.js";function R(t,e){return I(t)===I(e)}function I(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${e}-${r}`}const S={json:{write:{writer:Q,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:U}}}};function Q(t,e){var r;((r=t==null?void 0:t.layer)==null?void 0:r.objectIdField)!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function U(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let a=class extends j(N(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return d(this.position,e.position)&&d(this.elevationInfo,e.elevationInfo)&&R(this.feature,e.feature)}};i([s({type:w,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),i([s({type:O}),f()],a.prototype,"elevationInfo",void 0),i([s(S)],a.prototype,"feature",void 0),a=i([c("esri.analysis.LineOfSightAnalysisObserver")],a);const z=a;let u=class extends j(P){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return d(this.position,t.position)&&d(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};i([s({type:w}),f()],u.prototype,"position",void 0),i([s({type:O}),f()],u.prototype,"elevationInfo",void 0),i([s(S)],u.prototype,"feature",void 0),u=i([c("esri.analysis.LineOfSightAnalysisTarget")],u);const F=u,g=b.ofType(F);let l=class extends G{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles($(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},L))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",E(e,this.targets,g))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var m;const e=this.spatialReference;if(((m=this.observer)==null?void 0:m.position)==null||e==null)return null;const r=p=>J(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,v=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const y=B(p.position,e);if(y.pending!=null)return{pending:y.pending,extent:null};if(y.geometry!=null){const{x:A,y:q,z:_}=y.geometry;K(v,[A,q,_])}}const h=M(v,e);return r(this.observer)&&this.targets.every(r)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};i([s({type:["line-of-sight"]})],l.prototype,"type",void 0),i([s({type:z,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),i([s({cast:C,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),i([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),i([s({readOnly:!0})],l.prototype,"spatialReference",null),i([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=i([c("esri.analysis.LineOfSightAnalysis")],l);const x=l,W=b.ofType(F);let n=class extends V(k(D)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles($(()=>this.analysis,(t,e)=>{e!=null&&e.parent===this&&(e.parent=null),t!=null&&(t.parent=this)},L))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var t;return(t=this.analysis)==null?void 0:t.observer}set observer(t){const{analysis:e}=this;e&&(e.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new b}set targets(t){var e;E(t,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new x)}};i([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),i([s({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),i([s({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),i([s({type:W,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),i([s({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),i([s({readOnly:!0})],n.prototype,"fullExtent",null),i([s({readOnly:!0})],n.prototype,"spatialReference",null),i([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),n=i([c("esri.layers.LineOfSightLayer")],n);const rt=n;export{rt as default};
