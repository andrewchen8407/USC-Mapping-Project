import{bs as _,bt as S,dn as b,dp as T,dq as w,c3 as O,c4 as $,dr as U,c5 as R,c2 as W,ds as A,dt as P,aP as j,b6 as g,bA as B,U as u,du as f,dv as L,dw as I,s as d,p as M,dx as N,dy as C,cU as k,z as i,A as l,c6 as D,cS as J,dz as q,c9 as G,B as V,bw as x,dA as z}from"./index-F17czHX0.js";var y;const v=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let s=y=class extends _(S(b(T(w(O($(U(R(W(A(P(x)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(j).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){var t;return(e=e||((t=r.tileInfo)==null?void 0:t.spatialReference))&&g.fromJSON(e)}writeSublayers(e,r,t,a){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:o})=>o&&o.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...a};p.forEach(o=>{const h=o.write({},c);n.push(h)}),n.some(o=>Object.keys(o).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>B(r).path):null}fetchTile(e,r,t,a={}){const{signal:p}=a,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(n,c).then(o=>o.data)}async fetchImageBitmapTile(e,r,t,a={}){const{signal:p}=a;if(this.fetchTile!==y.prototype.fetchTile){const h=await this.fetchTile(e,r,t,a);return f(h,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:o}=await u(n,c);return f(o,e,r,t,p)}getTileUrl(e,r,t){var c,o;const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=L({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!a&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(o=this.parsedUrl)==null?void 0:o.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return I(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new d("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new d("tile-layer:undefined-url","layer's url is not defined");const a=M(this.parsedUrl.path);if(a!=null&&a.serverType==="ImageServer")throw new d("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!N(t))return this._fetchServerVersion(t,e).then(a=>{this.read({currentVersion:a})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!C(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(a=>{if(a.data&&a.data.currentVersion)return a.data.currentVersion;throw new d("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,a=v.length;t<a;t++)if(r=v[t],r.toLowerCase().includes(e))return k("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[m]}};i([l({readOnly:!0})],s.prototype,"attributionDataUrl",null),i([l({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),i([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([l({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([l({type:Boolean})],s.prototype,"resampling",void 0),i([l()],s.prototype,"sourceJSON",void 0),i([l({type:g})],s.prototype,"spatialReference",void 0),i([D("spatialReference",["spatialReference","tileInfo"])],s.prototype,"readSpatialReference",null),i([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),i([l({readOnly:!0})],s.prototype,"sublayers",void 0),i([J("sublayers",{layers:{type:[z]}})],s.prototype,"writeSublayers",null),i([l({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([l()],s.prototype,"tileServers",null),i([q("tileServers")],s.prototype,"castTileServers",null),i([l({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),i([l(G)],s.prototype,"url",void 0),s=y=i([V("esri.layers.TileLayer")],s);const m=Symbol("default-fetch-tile");s.prototype.fetchTile[m]=!0;const K=s;export{K as default};
