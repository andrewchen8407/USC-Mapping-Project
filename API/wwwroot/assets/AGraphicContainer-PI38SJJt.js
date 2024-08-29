import{eW as p,gl as O,gn as v,go as D,gp as R,gq as I,eQ as V,eU as $,eR as w,Z as z,gr as C,eS as N,gs as x,N as E}from"./index-MnnkPTiO.js";import{i as L,r as T}from"./TechniqueInstance-jRXv-rgl.js";import{i as F,N as P}from"./Container-DF7_N88e.js";import{h}from"./FeatureCommandQueue-7G9RA4-e.js";import{r as k}from"./UpdateTracking2D-lum7eQ5f.js";import{r as U}from"./vec3f32-cbLeGFQ-.js";import{b as W}from"./LabelMetric-gLLmSmuu.js";import{h as b}from"./Program-7xspSCCh.js";import{o as q}from"./ProgramTemplate-olrkIgHO.js";let H=0;function c(_,e,t){return new L(k(H++),_,_.meshWriter.name,e,t)}const d={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class j{constructor(){this.instances={fill:c(h.fill,d,{zoomRange:!0}),marker:c(h.marker,d,{zoomRange:!0}),line:c(h.line,d,{zoomRange:!0}),text:c(h.text,d,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:c(h.complexFill,d,{zoomRange:!0}),texturedLine:c(h.texturedLine,d,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const G=Math.PI/180,Y=4;class Q extends F{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=p(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const r=this._program;t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(D.LINES,8*s.length,R.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:p()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,s=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,s,y().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:r,resolution:f,pixelRatio:a,rotation:o,viewpoint:i}=t,l=G*o,{x:n,y:M}=i.targetGeometry,S=I(n,t.spatialReference);this._localOrigin.x=S,this._localOrigin.y=M;const m=a*r[0],g=a*r[1],B=f*m,A=f*g,u=V(this._dvsMat3);$(u,u,s),w(u,u,z(m/2,g/2)),C(u,u,U(r[0]/B,-g/A,1)),N(u,u,-l)}_updateBufferData(e,t){const{x:s,y:r}=this._localOrigin,f=2*Y*t.length,a=new Float32Array(f),o=new Uint32Array(8*t.length);let i=0,l=0;for(const n of t)n&&(a[2*i]=n[0]-s,a[2*i+1]=n[1]-r,a[2*i+2]=n[0]-s,a[2*i+3]=n[3]-r,a[2*i+4]=n[2]-s,a[2*i+5]=n[3]-r,a[2*i+6]=n[2]-s,a[2*i+7]=n[1]-r,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=b.createVertex(e,x.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=b.createIndex(e,x.DYNAMIC_DRAW,o),!this._vao){const n=y();this._vao=new q(e,n.attributes,n.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const y=()=>W("bounds",{geometry:[{location:0,name:"a_position",count:2,type:R.FLOAT}]});class ne extends T{constructor(e){super(e),this._instanceStore=new j,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=E(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new Q(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const s of this.children){if(!s.visible)continue;const r=s.getDisplayList(e.drawPhase,this._instanceStore,P.STRICT_ORDER);r==null||r.render(e)}}}export{ne as i};
