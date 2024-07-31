import{ae as _,cw as q,az as C,bb as U,jw as F,y as V,hO as B,jx as I,a$ as K,jy as y,j6 as A,b_ as X,jz as j,f2 as Y}from"./index-UN0u_eSp.js";import{l as k,c as E}from"./highlightReasons-cWogfyVL.js";import{e as z,m as Z}from"./Texture-NBkwfsnV.js";const b=_("mapview-transitions-duration")===0?0:1/_("mapview-transitions-duration");let J=class extends q{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){var s;if(this._stage===t)return;const i=this._stage;this._stage=t,t?(s=this._stage)!=null&&s.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i==null||i.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=C(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=C(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var t,i;(t=this._fadeInResolver)==null||t.call(this),this._fadeInResolver=null,(i=this._fadeOutResolver)==null||i.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,i){if(this.fadeTransitionEnabled&&b!==0){const s=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===s)this.computedVisible=this.visible;else{const a=t*b;this.computedOpacity=n>s?Math.max(s,n-a):Math.min(s,n+a),this.computedVisible=this.computedOpacity>0;const l=s===this.computedOpacity;this.inFadeTransition=!l,l||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const Q=1,pt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],gt=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],R=256,p={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},L=()=>V.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function tt(e,t){t.fillColor[0]=e.color.r/255,t.fillColor[1]=e.color.g/255,t.fillColor[2]=e.color.b/255,t.fillColor[3]=e.color.a,e.haloColor?(t.outlineColor[0]=e.haloColor.r/255,t.outlineColor[1]=e.haloColor.g/255,t.outlineColor[2]=e.haloColor.b/255,t.outlineColor[3]=e.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=e.fillOpacity,t.outlineColor[3]*=e.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=p.outlineWidth,t.outerHaloWidth=p.outerHaloWidth,t.innerHaloWidth=p.innerHaloWidth,t.outlinePosition=p.outlinePosition}const et=[0,0,0,0];class D{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:p.outlinePosition,outlineWidth:p.outlineWidth,innerHaloWidth:p.innerHaloWidth,outerHaloWidth:p.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*R),this._minMaxDistance=[0,0]}setHighlightOptions(t){const i=this._convertedHighlightOptions;tt(t,i);const s=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,n=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,l=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,h=Math.sqrt(Math.PI/2)*Q,r=Math.abs(s)>h?Math.round(10*(Math.abs(s)-h))/10:0,u=Math.abs(l)>h?Math.round(10*(Math.abs(l)-h))/10:0;let c;r&&!u?L().error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&u?L().error("The inner rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&u&&L().error("The highlight is "+Math.max(r,u)+"px away from the edge of the feature; consider reducing some width values.");const o=[void 0,void 0,void 0,void 0];function g(d,O,f){o[0]=(1-f)*d[0]+f*O[0],o[1]=(1-f)*d[1]+f*O[1],o[2]=(1-f)*d[2]+f*O[2],o[3]=(1-f)*d[3]+f*O[3]}const{_texelData:m}=this;for(let d=0;d<R;++d)c=s+d/(R-1)*(l-s),c<s?(o[0]=0,o[1]=0,o[2]=0,o[3]=0):c<n?g(et,i.outlineColor,(c-s)/(n-s)):c<a?[o[0],o[1],o[2],o[3]]=i.outlineColor:c<l?g(i.outlineColor,i.fillColor,(c-a)/(l-a)):[o[0],o[1],o[2],o[3]]=i.fillColor,m[4*d]=255*o[0],m[4*d+1]=255*o[1],m[4*d+2]=255*o[2],m[4*d+3]=255*o[3];this._minMaxDistance[0]=s,this._minMaxDistance[1]=l,this._shadeTexChanged=!0}applyHighlightOptions(t,i){if(!this._shadeTex){const s=new z;s.wrapMode=U.CLAMP_TO_EDGE,s.width=R,s.height=1,this._shadeTex=new Z(t,s)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,R,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,F),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<k.length)-1,activeGradient:this}]}}class it{constructor(){this.type="multi";const t={};for(const i in E)t[i]=new D;this.gradients=t}setHighlightOptions(t){for(const i in E){const s=E[i](t);this.gradients[i].setHighlightOptions(s)}}applyHighlightOptions(t,i,s){this.gradients[s].applyHighlightOptions(t,i)}destroy(){for(const t in E)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1;const i=[];for(const s in this.gradients){const n=this.gradients[s];i.push({activeReasons:t,activeGradient:n}),t<<=1}return i}}var M,w,S,H,P,T,v,G,x;(function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"})(M||(M={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(w||(w={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(S||(S={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(H||(H={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(P||(P={})),function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SIMPLE=1]="SIMPLE",e[e.DOT_DENSITY=2]="DOT_DENSITY",e[e.OUTLINE_FILL=3]="OUTLINE_FILL",e[e.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",e[e.HEATMAP=5]="HEATMAP",e[e.PIE_CHART=6]="PIE_CHART"}(T||(T={})),function(e){e[e.All=0]="All",e[e.Highlight=1]="Highlight",e[e.InsideEffect=2]="InsideEffect",e[e.OutsideEffect=3]="OutsideEffect"}(v||(v={})),function(e){e[e.BATCHING=0]="BATCHING",e[e.STRICT_ORDER=1]="STRICT_ORDER",e[e.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(G||(G={})),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT"}(x||(x={}));const N={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:e=>e.stencilRef,compare:B.EQUAL,mask:255,op:{fail:I.KEEP,zFail:I.KEEP,zPass:I.REPLACE}}}},st={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},nt={...N,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function ot({pixelRatio:e,state:t,displayLevel:i,requiredLevel:s},n){const a=1/2**(i-n.key.level),l=1/2**(s-n.key.level);return{displayMat3:Array.from(t.displayMat3),displayViewMat3:Array.from(t.displayViewMat3),displayViewScreenMat3:Array.from(n.transforms.displayViewScreenMat3),viewMat3:Array.from(t.viewMat3),tileMat3:Array.from(n.transforms.tileMat3),displayZoomFactor:a,requiredZoomFactor:l,tileOffset:[n.x,n.y],currentScale:t.scale,currentZoom:i,metersPerSRUnit:K(t.spatialReference),rotation:t.rotation,pixelRatio:e}}function W(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="highlight"}function $(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="hittest"}function rt(e){if(!$(e))return null;const{position:t}=e.passOptions,i=e.pixelRatio,s=_("esri-mobile");return{position:t,distance:_(s?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance")*i,smallSymbolDistance:_(s?"hittest-2d-mobile-tolerance":"hittest-2d-small-symbol-tolerance")*i,smallSymbolSizeThreshold:_("hittest-2d-small-symbol-tolerance-threshold")}}function ht(e){if(!W(e))return null;const{activeReasons:t,highlightAll:i}=e.passOptions;return{activeReasons:t,highlightAll:i?1:0}}function _t(e,t,i){const s={};for(const n in i)i[n]instanceof Function?s[n]=i[n](e,t):s[n]=i[n];return s}function Rt(e,t){const{attributeView:i,context:s}=e;return{storage:i.getUniforms(s),view:ot(e,t),hittestRequest:rt(e),highlight:ht(e)}}function mt(e){return{inside:e.selection===v.InsideEffect,outside:e.selection===v.OutsideEffect}}function lt(e){return $(e)?st:W(e)&&e.passOptions.stepType==="clear"?nt:N}function Ot(e){const{row:t,col:i}=e.key,s=i*A,n=t*A;return{tileOffsetFromLocalOrigin:[s%y,n%y],maxIntsToLocalOrigin:[Math.floor(s/y),Math.floor(n/y)]}}new X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function yt(e){const{bandCount:t,attributeTable:i,colormap:s,pixelType:n}=e.raster.rasterInfo;return t===1&&(i!=null||s!=null||n==="u8"||n==="s8")}function at(e,t){return(e==null?void 0:e.type)==="single"&&t.multiHighlightEnabled&&(e.destroy(),e=null),(e==null?void 0:e.type)!=="multi"||t.multiHighlightEnabled||(e.destroy(),e=null),e||(e=t.multiHighlightEnabled?new it:new D),e.setHighlightOptions(t),e}function Et(e,t,i){const{painter:s,highlightGradient:n}=e,{highlight:a}=s.effects;if(!n)return;const l=e.passOptions,h=n.getReasonsWithGradients();for(let r=0;r<h.length;r++){const u={...e,passOptions:{type:"highlight",activeGradient:h[r].activeGradient,activeReasons:h[r].activeReasons,stepType:"burn",highlightAll:t}};if(a.bind(u),i(u),r<h.length-1){let o=0;for(let g=r+1;g<h.length;g++)o|=h[g].activeReasons;i({...e,passOptions:{type:"highlight",activeGradient:h[r].activeGradient,activeReasons:o,stepType:"clear",highlightAll:t}})}const c={...e,passOptions:{type:"highlight",activeGradient:h[r].activeGradient,activeReasons:h[r].activeReasons,stepType:"draw",highlightAll:t}};s.setPipelineState(lt(e)),s.updatePipelineState(e.context),a.draw(c),a.unbind()}e.passOptions=l}class vt extends J{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(i=>i.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new j),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient=at(this._highlightGradient,t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,i){super.updateTransitionProperties(t,i),this._effectView&&(this._effectView.transitionStep(t,i),this._effectView.transitioning&&this.requestRender())}doRender(t){var n;const i=this.createRenderParams(t),{painter:s}=i;s.beforeRenderLayer(i,(n=this._clips)!=null&&n.length?255:0,this.computedOpacity),this.renderChildren(i),s.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,i=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const s=t.parent;return s&&s!==this&&s.removeChild(t),i>=this.children.length?this.children.push(t):this.children.splice(i,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const i=this.children.splice(t,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,i}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const i of this.children)i.beforeRender(t)}afterRender(t){super.afterRender(t);for(const i of this.children)i.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:Y()}}onAttach(){super.onAttach();const t=this.stage;for(const i of this.children)i.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const i of this.children)i.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{P as A,w as E,S as L,lt as M,G as N,v as R,x as S,Et as a,gt as b,Rt as c,ot as d,_t as e,W as f,vt as h,J as i,$ as m,Q as o,yt as r,pt as t,Ot as w,mt as y};
