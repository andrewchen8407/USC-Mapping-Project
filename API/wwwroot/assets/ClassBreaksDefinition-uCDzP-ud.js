import{b_ as r,z as i,bE as o,A as t,B as l,bF as d}from"./index-Ef0wFma4.js";const s=new r({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),n=new r({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let e=class extends d{constructor(a){super(a),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(a){this.classificationMethod==="standard-deviation"&&this._set("standardDeviationInterval",a)}set definedInterval(a){this.classificationMethod==="defined-interval"&&this._set("definedInterval",a)}};i([o({classBreaksDef:"class-breaks-definition"})],e.prototype,"type",void 0),i([t({json:{write:!0}})],e.prototype,"breakCount",void 0),i([t({json:{write:!0}})],e.prototype,"classificationField",void 0),i([t({type:String,json:{read:s.read,write:s.write}})],e.prototype,"classificationMethod",void 0),i([t({json:{write:!0}})],e.prototype,"normalizationField",void 0),i([t({json:{read:n.read,write:n.write}})],e.prototype,"normalizationType",void 0),i([t({value:null,json:{write:!0}})],e.prototype,"standardDeviationInterval",null),i([t({value:null,json:{write:!0}})],e.prototype,"definedInterval",null),e=i([l("esri.rest.support.ClassBreaksDefinition")],e);const p=e;export{p as d};
