import"./index-yumUYLd_.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const l="calcite-list",o="calcite-list-item-group",n="calcite-list-item";function m(s){return Array.from(s.assignedElements({flatten:!0}).filter(e=>e.matches(l)))}function f(s){const e=s.assignedElements({flatten:!0}),i=e.filter(t=>t==null?void 0:t.matches(o)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,r)=>[...t,...r],[]),c=e.filter(t=>t==null?void 0:t.matches(n));return[...e.filter(t=>t==null?void 0:t.matches(l)).map(t=>Array.from(t.querySelectorAll(n))).reduce((t,r)=>[...t,...r],[]),...i,...c]}function h(s){s.forEach(e=>{e.setPosition=s.indexOf(e)+1,e.setSize=s.length})}function d(s,e=!1){const i=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(i,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{f as a,m as b,d as g,h as u};
