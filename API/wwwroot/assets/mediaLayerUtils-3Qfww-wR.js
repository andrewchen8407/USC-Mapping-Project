import{$ as c,j as l}from"./utils-7Ld3QBIA.js";import{o as y,l as f,c as d,f as v}from"./index-wtwWwDCP.js";import{p as s}from"./resourceUtils-sYumIgns.js";import"./originUtils-1w5HeAJR.js";import"./multiOriginJSONSupportUtils-R5XHSAtL.js";import"./saveAPIKeyUtils-84ubFgla.js";import"./resourceUtils-XFJfkEzj.js";const o="Media Layer",x="media-layer-save",N="media-layer-save-as",n=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||(r.title=a),r.extent=t?await f(t):null,d(r,v.METADATA)}async function J(e,r){return c({layer:e,itemType:o,validateLayer:i,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:n,saveResources:(a,t)=>s(e.resourceReferences,t)},r)}async function M(e,r,a){return l({layer:e,itemType:o,validateLayer:i,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:n,newItem:r,setItemProperties:A,saveResources:(t,u)=>s(e.resourceReferences,u)},a)}export{J as save,M as saveAs};
