import{s}from"./index-dJP7MR2j.js";const o="upload-assets",r=()=>new Error;class p extends s{constructor(){super(`${o}:unsupported`,"Layer does not support asset uploads.",r())}}class a extends s{constructor(){super(`${o}:no-glb-support`,"Layer does not support glb.",r())}}class d extends s{constructor(){super(`${o}:no-supported-source`,"No supported external source found",r())}}class l extends s{constructor(){super(`${o}:not-base-64`,"Expected gltf data in base64 format after conversion.",r())}}class c extends s{constructor(){super(`${o}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",r())}}class i extends s{constructor(n,t){super(`${o}:bad-response`,`Bad response. Uploaded ${n} items and received ${t} results.`,r())}}class m extends s{constructor(n,t){super(`${o}-layer:upload-failed`,`Failed to upload mesh file ${n}. Error code: ${(t==null?void 0:t.code)??"-1"}. Error message: ${(t==null?void 0:t.messages)??"unknown"}`,r())}}class $ extends s{constructor(n){super(`${o}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${n}, but it does not list it in its supported formats.`,r())}}class f extends s{constructor(){super(`${o}:convert3D-failed`,"convert3D failed.")}}class x extends s{constructor(){super("invalid-input:no-model","No supported model found")}}class b extends s{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}export{i as a,$ as c,m as d,x as i,f as l,b as m,d as n,c as p,p as r,a as t,l as u};
