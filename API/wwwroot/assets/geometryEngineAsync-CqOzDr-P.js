import{an as l,et as w,eu as h}from"./index-yumUYLd_.js";function r(e){var t;return Array.isArray(e)?(t=e[0])==null?void 0:t.spatialReference:e==null?void 0:e.spatialReference}function p(e){return e&&(Array.isArray(e)?e.map(p):e.toJSON?e.toJSON():e)}function c(e){return Array.isArray(e)?e.map(t=>w(t)):w(e)}function S(e,t){let a;return Array.isArray(e)?a=e:(a=[],a.push(e),t!=null&&a.push(t)),a}let f;async function d(){return f||(f=h("geometryEngineWorker",{strategy:"distributed"})),f}async function n(e,t){return(await d()).invoke("executeGEOperation",{operation:e,parameters:p(t)})}async function m(e,t){const a=await d();return Promise.all(a.broadcast("executeGEOperation",{operation:e,parameters:p(t)}))}function R(e){return n("extendedSpatialReferenceInfo",[e])}async function A(e,t){return c(await n("clip",[r(e),e,t]))}async function O(e,t){return c(await n("cut",[r(e),e,t]))}function D(e,t){return n("contains",[r(e),e,t])}function J(e,t){return n("crosses",[r(e),e,t])}function N(e,t,a){return n("distance",[r(e),e,t,a])}function L(e,t){return n("equals",[r(e),e,t])}function T(e,t){return n("intersects",[r(e),e,t])}function V(e,t){return n("touches",[r(e),e,t])}function v(e,t){return n("within",[r(e),e,t])}function E(e,t){return n("disjoint",[r(e),e,t])}function b(e,t){return n("overlaps",[r(e),e,t])}function z(e,t,a){return n("relate",[r(e),e,t,a])}function H(e){return n("isSimple",[r(e),e])}async function I(e){return c(await n("simplify",[r(e),e]))}async function P(e,t=!1){return c(await n("convexHull",[r(e),e,t]))}async function j(e,t){return c(await n("difference",[r(e),e,t]))}async function k(e,t){return c(await n("symmetricDifference",[r(e),e,t]))}async function q(e,t){return c(await n("intersect",[r(e),e,t]))}async function B(e,t=null){const a=S(e,t);return c(await n("union",[r(a),a]))}async function C(e,t,a,i,s,u){return c(await n("offset",[r(e),e,t,a,i,s,u]))}async function G(e,t,a,i=!1){const s=[r(e),e,t,a,i];return c(await n("buffer",s))}async function $(e,t,a,i,s,u){const g=[r(e),e,t,a,i,s,u];return c(await n("geodesicBuffer",g))}async function W(e,t,a=!0){const i=await n("nearestCoordinate",[r(e),e,t,a]);return{...i,coordinate:l.fromJSON(i.coordinate)}}async function F(e,t){const a=await n("nearestVertex",[r(e),e,t]);return{...a,coordinate:l.fromJSON(a.coordinate)}}async function K(e,t,a,i){return(await n("nearestVertices",[r(e),e,t,a,i])).map(s=>({...s,coordinate:l.fromJSON(s.coordinate)}))}function y(e){var t;return"xmin"in e?e.center:"x"in e?e:(t=e.extent)==null?void 0:t.center}async function M(e,t,a){if(e==null)throw new o;const i=e.spatialReference;if((a=a??y(e))==null)throw new o;const s=e.constructor.fromJSON(await n("rotate",[i,e,t,a]));return s.spatialReference=i,s}async function Q(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await n("flipHorizontal",[a,e,t]));return i.spatialReference=a,i}async function U(e,t){if(e==null)throw new o;const a=e.spatialReference;if((t=t??y(e))==null)throw new o;const i=e.constructor.fromJSON(await n("flipVertical",[a,e,t]));return i.spatialReference=a,i}async function X(e,t,a,i){return c(await n("generalize",[r(e),e,t,a,i]))}async function Y(e,t,a){return c(await n("densify",[r(e),e,t,a]))}async function Z(e,t,a,i=0){return c(await n("geodesicDensify",[r(e),e,t,a,i]))}function _(e,t){return n("planarArea",[r(e),e,t])}function ee(e,t){return n("planarLength",[r(e),e,t])}function te(e,t,a){return n("geodesicArea",[r(e),e,t,a])}function ae(e,t,a){return n("geodesicLength",[r(e),e,t,a])}async function ne(e,t){return c(await n("intersectLinesToPoints",[r(e),e,t]))}async function re(e,t){await m("changeDefaultSpatialReferenceTolerance",[e,t])}async function ie(e){await m("clearDefaultSpatialReferenceTolerance",[e])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{G as buffer,re as changeDefaultSpatialReferenceTolerance,ie as clearDefaultSpatialReferenceTolerance,A as clip,D as contains,P as convexHull,J as crosses,O as cut,Y as densify,j as difference,E as disjoint,N as distance,L as equals,R as extendedSpatialReferenceInfo,Q as flipHorizontal,U as flipVertical,X as generalize,te as geodesicArea,$ as geodesicBuffer,Z as geodesicDensify,ae as geodesicLength,q as intersect,ne as intersectLinesToPoints,T as intersects,H as isSimple,W as nearestCoordinate,F as nearestVertex,K as nearestVertices,C as offset,b as overlaps,_ as planarArea,ee as planarLength,z as relate,M as rotate,I as simplify,k as symmetricDifference,V as touches,B as union,v as within};
