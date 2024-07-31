import{z as s,A as n,fi as _,B as m,E as u,s as c,fj as y,v as f,I as h}from"./index-Ef0wFma4.js";import{n as g,X as v}from"./FeatureLayerView2D-iRcFvMJo.js";import"./highlightReasons-GUPn_wbI.js";import"./LayerView-GCpseVqN.js";import"./Container-aOn3LtEu.js";import"./Texture-Q5_h-iED.js";import"./TechniqueInstance--tb5yYjS.js";import"./UpdateTracking2D-rwfbUIAy.js";import"./TurboLine-HQhK1M-H.js";import"./earcut-jQL0drIo.js";import"./CIMSymbolHelper-nZj-VP2E.js";import"./BidiEngine-8z8MVveq.js";import"./fontUtils--aJpcE7Q.js";import"./Rect-pT1ASav_.js";import"./BoundingBox-gZl4O0jS.js";import"./LabelMetric-vL36fq_2.js";import"./Program-PwEWJG8e.js";import"./BindType-RceNqBi4.js";import"./Util-gVXnIZc8.js";import"./constants-gJZ7CV2L.js";import"./TileContainer-U5fzJpPX.js";import"./WGLContainer-VebC0qCS.js";import"./ProgramTemplate-LMmjILYB.js";import"./config-z2KFXUcx.js";import"./tileUtils-pcBJnprf.js";import"./SDFHelper-HRg8AvRL.js";import"./floatRGBA-PkIcTmkU.js";import"./FeatureCommandQueue-fmbj34fq.js";import"./HighlightCounter-SG246UxB.js";import"./popupUtils-s8kh5eeu.js";import"./RefreshableLayerView-1GCrC740.js";const S=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([n()],t.prototype,"_isUserPaused",void 0),s([n({readOnly:!0})],t.prototype,"connectionStatus",null),s([n({type:_})],t.prototype,"filter",void 0),t=s([m("esri.layers.mixins.StreamLayerView")],t),t};let i=class extends S(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([u(()=>this.layer.customParameters,e=>this._worker.streamMessenger.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._worker.streamMessenger.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),u(()=>this.layer.purgeOptions,()=>this._update()),u(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new c("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return y(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&this._worker.streamMessenger.enableEvent(e,!0);const a=super.on(e,t),o=this;return f(()=>{a.remove(),r&&(o._worker.closed||o.hasEventListener(e)||o._worker.streamMessenger.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,o;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(o=this.layer.timeInfo)!=null&&o.trackIdField))throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return g(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(p=>{const d=h.fromJSON(p);return d.features.forEach(l=>{l.layer=this.layer,l.sourceLayer=this.layer}),d}),new h({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause()}_doConnect(){this._worker.streamMessenger.connect(),this.resume()}_doClear(){this._worker.streamMessenger.clear(),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([n()],i.prototype,"pipelineConnectionStatus",void 0),s([n()],i.prototype,"pipelineErrorString",void 0),s([n({readOnly:!0})],i.prototype,"connectionError",null),s([n({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=s([m("esri.views.2d.layers.StreamLayerView2D")],i);const Y=i;export{Y as default};
