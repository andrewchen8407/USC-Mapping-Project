import{s as $,aw as L,cG as j,ak as I,O as P,I as J,cL as M}from"./index-sPZOTBHJ.js";import{n as T,a as F,m as w}from"./TimeOnly-5WnYl2Kr.js";import{t as z}from"./ImmutableArray-H2O6RDFT.js";let b=null;function E(e,o,r,n={}){const t=o.elementType,s="value",l=t.type==="array"?[{name:s,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:s,type:t.type,properties:t.properties}]:[{name:s,type:t.type}];return new z(e.map(c=>{const a={};return g(a,l,{[s]:c},r,n),a[s]}))}function N(e,o,r={}){const n=e instanceof J?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return o.constructFeatureSet(n,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function Q(e,o,r={}){const{spatialReference:n,interceptor:t,lruCache:s}=r;return typeof e=="string"?o.createFeatureSetCollectionFromService(e,n,s,t):o.createFeatureSetCollectionFromMap(e,n,s,t)}function W(e,o,r,n={}){const t={};return g(t,o.properties,e,r,n),new b.Dictionary(t)}function g(e,o,r,n,t={}){const s={};for(const l of Object.keys(r))s[l.toLowerCase()]=r[l];for(const l of o){const c=l.name.toLowerCase();if(t.variablesPreProcessed)e[c]=s[c];else switch(l.type){case"array":{const a=s[c];e[c]=a==null?null:E(a,l,n,t);break}case"feature":{const a=s[c];e[c]=a==null?null:b.Feature.createFromGraphic(a,t==null?void 0:t.timeZone);break}case"featureSet":{const a=s[c];e[c]=a==null?null:n?N(a,n,t):null;break}case"featureSetCollection":{const a=s[c];e[c]=a==null?null:n?Q(a,n,t):null;break}case"dictionary":{const a=s[c];e[c]=a==null?null:W(a,l,n,t);break}case"date":{const a=s[c];e[c]=a?a instanceof w?a:t!=null&&t.timeZone?w.dateJSAndZoneToArcadeDate(a,t==null?void 0:t.timeZone):w.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=s[c];e[c]=a?a instanceof F?a:F.fromReader(a):null;break}case"time":{const a=s[c];e[c]=a?a instanceof T?a:T.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[c]=s[c]}}}function Z(e,o){for(const r of e)o.push(r),r.type==="dictionary"&&Z(r.properties,o);return o}function R(e,o,r,n,t){const{spatialReference:s,interceptor:l,lruCache:c,console:a,abortSignal:f,timeZone:u,services:S={portal:I.getDefault()}}=r,y={vars:{},spatialReference:s,interceptor:l,timeZone:u,lrucache:c,useAsync:t,services:S,console:a,abortSignal:f};return o&&g(y.vars,e.variables,o,n,r),y}function v(e,o){switch(o.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),n="geometry"in r?r.geometry():null,t="readAttributes"in r?r.readAttributes():r.attributes;return new P({geometry:n,attributes:t})}case"dictionary":{const r=e,n=r.attributes,t={};for(const s of Object.keys(n))t[s]=v(r.field(s),o);return t}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,o))}return e}const O={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},D={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",O],["popup-element",O],["feature-reduction-popup",D],["feature-reduction-popup-element",D],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function H(e){const o=U.get(e);if(!o){const r=Array.from(U.keys()).map(n=>`'${n}'`).join(", ");throw new $("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return L(o)}async function K(e,o,r={}){b||(b=await j());const{arcade:n,arcadeUtils:t}=b,{loadScriptDependencies:s,referencesMember:l,scriptIsAsync:c}=n,a=Z(o.variables,[]),f=a.filter(i=>i.type==="featureSet"||i.type==="featureSetCollection").map(i=>i.name.toLowerCase()),u=n.parseScript(e,f);if(!u)throw new $("arcade:invalid-script","Unable to create SyntaxTree");const S=t.extractFieldNames(u),y=n.scriptTouchesGeometry(u),h=a.map(i=>i.name.toLowerCase()).filter(i=>l(u,i)),p=c(u,f);await s(u,p,f);const C={vars:{},spatialReference:null,useAsync:p};for(const i of h)C.vars[i]="any";const{lruCache:A}=r,k=n.compileScript(u,C),x=n.featureSetUtils(),{services:G}=r;return{execute:(i,m={})=>{if(p)throw new $("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=k(R(o,i,{lruCache:A,...m},x,p));return m.rawOutput?d:v(d,t)},executeAsync:async(i,m={})=>{const d=await k(R(o,i,{lruCache:A,services:G,...m},x,p));return m.rawOutput?d:v(d,t)},isAsync:p,variablesUsed:h,fieldsUsed:S,geometryUsed:y,syntaxTree:u}}export{K as createArcadeExecutor,H as createArcadeProfile};
