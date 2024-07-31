import{cf as $,cg as N,ch as P,ci as v,cj as x,ck as b,cl as S,cm as A,cn as w,co as R,s as O,cp as F,aH as K,aK as H,cq as J,aL as k,cr as q}from"./index-6vge_MSe.js";import{i as z}from"./multiOriginJSONSupportUtils-R5XHSAtL.js";import{p as y}from"./resourceExtension-svYw2V4-.js";function M(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=C(e,t,n);for(const c of o){const i=$(t,c,n);for(const r in s)i[r]=s[r]}}}function C(e,o,t){if((e==null?void 0:e.type)==="resource")return L(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=q;return{read:n,write:s}}}}function L(e,o,t){const n=N(o,t);return{type:String,read:(s,c,i)=>{const r=P(s,c,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,c,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(c[i]=v(s,r)):void(c[i]=s.write({},r));const a=Z(s),p=v(a,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),d=n.type!==String&&(!z(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>b(r.origin)),l={object:this,propertyName:t,value:s,targetUrl:p,dest:c,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!S(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?V(l):Y(l):r!=null&&r.portalItem&&(p==null||A(p)!=null||w(p)||d)?g(l):c[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:c,targetPropertyName:i}=e;if(!s.portalItem)return;const r=R(o),a=I(n,o,s);if(t!=null&&t.contentAddressed&&a.type!=="json")return void((h=s.messages)==null?void 0:h.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`,{content:a})));const p=t!=null&&t.contentAddressed&&a.type==="json"?F(a.jsonString):(r==null?void 0:r.filename)??K(),d=H((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),l=`${d}.${y(a)}`;if(t!=null&&t.contentAddressed&&s.resources&&a.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===l)??s.resources.toAdd.find(({resource:f})=>f.path===l);if(m)return void(c[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(l);w(o)&&s.resources&&s.resources.pendingOperations.push(J(o).then(m=>{u.path=`${d}.${y({type:"blob",blob:m})}`,c[i]=u.itemRelativeUrl}).catch(()=>{}));const j=(t==null?void 0:t.compress)??!1;s.resources&&U({...e,resource:u,content:a,compress:j,updates:s.resources.toAdd}),c[i]=u.itemRelativeUrl}function V(e){const{context:o,targetUrl:t,params:n,value:s,dest:c,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),a=I(s,t,o),p=y(a),d=k(r.path),l=(n==null?void 0:n.compress)??!1;p===d?(o.resources&&U({...e,resource:r,content:a,compress:l,updates:o.resources.toUpdate}),c[i]=t):g(e)}function Y({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function U({object:e,propertyName:o,updates:t,resource:n,content:s,compress:c}){const i=r=>{B(e,o,r)};t.push({resource:n,content:s,compress:c,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function Z(e){return e==null?null:typeof e=="string"?e:e.url}function B(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{M as j};
