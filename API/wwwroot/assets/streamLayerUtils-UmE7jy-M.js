import{$ as m,j as c}from"./utils-Lkhs__rH.js";import{l as u,c as y,f as s,i as p}from"./index-MnnkPTiO.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-4JAMPqC9.js";const i="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),y(e,s.METADATA),p(e,s.SINGLE_LAYER)}async function L(r,e){return m({layer:r,itemType:i,additionalItemType:f,validateLayer:n,createItemData:l,errorNamePrefix:d},e)}async function N(r,e,a){return c({layer:r,itemType:i,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{L as save,N as saveAs};
