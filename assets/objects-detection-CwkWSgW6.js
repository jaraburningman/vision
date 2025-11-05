import{x as Ro,r as Ae,j as fe,w as Eo}from"./chunk-OIYGIGL5-B6SvBvvm.js";import{o as X,a as j,c as z,b as is,E as re,A as Po,d as ps,m as mt,e as st,f as gt,h as rs,i as $s,t as Cn,B as Ao,j as Do,D as _o,k as Oo,L as Fo,r as Z,l as os,S as zo,M as Lo,T as As,n as Bt,p as Ir,q as Bo,u as fs,R as Vo,v as Wo,w as Uo,x as Ks,y as Mo,z as Ra,C as Ea,F as Pa,G as ms,H as vr,I as Xs,J as Ys,K as Qs,N as Aa,O as Go,P as Ho,Q as Da,U as _a,V as Oa,W as jo,X as Xe,Y as Vt,Z as Ds,_ as Fa,$ as qo,a0 as Ko,a1 as Xo,a2 as Yo,a3 as Mt,a4 as Qo,a5 as za,a6 as Jo,a7 as Zo,a8 as eu,a9 as tu,aa as su,ab as nu,ac as Nr,ad as kr,ae as ru,af as au,ag as iu,ah as ou,ai as uu,aj as lu,ak as cu,al as er,am as $r,an as tr,ao as rt,ap as Js,aq as La,ar as sr,as as du,at as Ba,au as In,av as hu,aw as pu,ax as Va,ay as fu,az as mu,aA as gu,aB as yu,aC as bu,aD as wu,aE as Su,aF as xu,aG as Cu,aH as Iu,aI as Tr,aJ as vu,aK as Wa,aL as Ee,aM as Nu,aN as ku,aO as $u,aP as Tu,aQ as Ru,aR as Eu,aS as Pu,aT as Au,aU as Du,aV as _u,aW as Ou,aX as Fu,aY as zu,aZ as Lu,a_ as Bu,a$ as Vu,b0 as Wu,b1 as Uu,b2 as Mu,b3 as Gu,b4 as Hu,b5 as ju,b6 as qu,b7 as Ku,b8 as Xu,b9 as Yu,ba as Qu,bb as Ju,bc as Zu,bd as el,be as tl,bf as sl,bg as nl,bh as rl,bi as al,bj as il,bk as ol,bl as ul,bm as ll,bn as cl,bo as dl,bp as hl,bq as pl,br as fl,bs as ml,bt as gl,bu as yl,bv as bl,bw as wl,bx as Sl,by as xl,bz as Cl,bA as Il,bB as vl,bC as Nl,bD as kl,bE as $l,bF as Tl,bG as Rl,bH as El,bI as Pl,bJ as Al,bK as Dl,bL as _l,bM as nr,bN as Ol,bO as Fl,bP as zl,bQ as Ll,bR as Bl,bS as Vl,bT as Wl,bU as Ul,bV as Ml,bW as Gl,bX as Hl,bY as jl,bZ as ql,b_ as Kl,b$ as Xl,c0 as Yl,c1 as Ql,c2 as Jl,c3 as Zl,c4 as ec,c5 as tc,c6 as sc,c7 as nc,c8 as rc,c9 as ac,ca as ic,cb as oc,cc as uc,cd as lc,ce as cc,cf as dc,cg as hc,ch as pc,ci as fc,cj as mc,ck as gc,cl as yc,cm as bc,cn as wc,co as Sc,cp as xc,cq as Cc,cr as Ic,cs as vc,ct as Nc,cu as kc,cv as $c,cw as Tc,cx as Rc,cy as Ec,cz as Pc,cA as Ac,cB as Dc,cC as _c,cD as Oc,cE as Fc,cF as zc,cG as Lc,cH as Bc,cI as Vc,cJ as Wc,cK as Uc,cL as Mc,cM as Gc,cN as Hc,cO as us,cP as jc,cQ as qc,cR as Kc,cS as Xc,cT as Yc,cU as Qc,cV as Jc,cW as Zc,cX as ed,cY as td,cZ as sd,c_ as nd,c$ as rd,d0 as gs,d1 as ad,d2 as id,d3 as od,d4 as ud,d5 as Ke,d6 as ke,d7 as _s,d8 as rr,g as ld,d9 as Rr,da as cd}from"./register_all_kernels-Cy_UnWz8.js";import{u as dd}from"./header-context-BPywMii-.js";import{C as hd,u as pd}from"./constants-context-H2NxbeDZ.js";function fd(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in s)){const a=Object.getOwnPropertyDescriptor(n,r);a&&Object.defineProperty(s,r,a.get?a:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(s){j(Array.isArray(s),()=>"The argument passed to tf.addN() must be a list of tensors"),j(s.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${s.length}`);const e=s.map((r,a)=>z(r,`tensors${a}`,"addN")),t=e[0];e.forEach(r=>{if(r.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(r=>{if(!is(r.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const n=e;return re.runKernel(Po,n)}const gd=X({addN_:md});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(s,e,t,n,r,a){const i=z(s,"forgetBias","basicLSTMCell"),o=z(e,"lstmKernel","basicLSTMCell"),u=z(t,"lstmBias","basicLSTMCell"),l=z(n,"data","basicLSTMCell"),d=z(r,"c","basicLSTMCell"),c=z(a,"h","basicLSTMCell"),h=ps([l,c],1),f=mt(h,o),m=st(f,u),y=m.shape[0],g=m.shape[1]/4,b=[y,g],S=gt(m,[0,0],b),x=gt(m,[0,g],b),C=gt(m,[0,g*2],b),v=gt(m,[0,g*3],b),k=st(rs($s(S),Cn(x)),rs(d,$s(st(i,C)))),R=rs(Cn(k),$s(v));return[k,R]}const bd=X({basicLSTMCell_:yd});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(s,e){const t=z(s,"x","bitwiseAnd"),n=z(e,"y","bitwiseAnd");if(!is(t.shape,n.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${n.shape}`);if(t.dtype!=="int32"||n.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${n.dtype}`);const r={a:t,b:n};return re.runKernel(Ao,r)}const Sd=X({bitwiseAnd_:wd});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xd(s,e){const t=z(s,"s0","broadcastArgs","int32"),n=z(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(n.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${n.rank}`);const r={s0:t,s1:n};return re.runKernel(Do,r)}const Cd=X({broadcastArgs_:xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(s){const t={x:z(s,"x","diag")};return re.runKernel(_o,t)}const vd=X({diag_:Id});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(s,e){const t=z(s,"x","ensureShape","string_or_numeric");if(!Oo(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return s}const kd=X({ensureShape_:Nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(s,e,t){if(t<=0)throw new Error("The number of values should be positive.");const n={start:s,stop:e,num:t};return re.runKernel(Fo,{},n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vs=2147483648;function Td(s,e,t="left"){const n=z(s,"sortedSequence","searchSorted"),r=z(e,"values","searchSorted"),a=n.shape[n.shape.length-1],i=r.shape[r.shape.length-1],o=Z(n,[-1,a]),u=Z(r,[-1,i]);if(o.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(o.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(os(u.shape)>=vs)throw new Error(`values tensor size must less than ${vs}`);if(o.shape[1]>=vs)throw new Error(`trailing dim_size must less than ${vs} for int32 output type, was ${o.shape[1]}`);const l={sortedSequence:o,values:u},d={side:t};return re.runKernel(zo,l,d)}const ar=X({searchSorted_:Td});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(s,e){return ar(s,e,"left")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(s,e,t,n,r=!1){const i={x:z(s,"x","maxPoolWithArgmax")},o={filterSize:e,strides:t,pad:n,includeBatchInIndex:r},u=re.runKernel(Lo,i,o);return{result:u[0],indexes:u[1]}}const Pd=X({maxPoolWithArgmax_:Ed});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(s,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(s===void 0)return[];let n=z(s,"x","meshgrid",s instanceof As?s.dtype:"float32");if(e===void 0)return[n];let r=z(e,"y","meshgrid",e instanceof As?e.dtype:"float32");const a=os(n.shape),i=os(r.shape);return t==="xy"?(n=Z(n,[1,-1]),r=Z(r,[-1,1]),[mt(Bt([i,1],n.dtype),n),mt(r,Bt([1,a],r.dtype))]):(n=Z(n,[-1,1]),r=Z(r,[1,-1]),[mt(n,Bt([1,i],n.dtype)),mt(Bt([a,1],r.dtype),r)])}function Dd(s,e,t,n){const r=z(e,"data","multiRNNCell"),a=Ir(t,"c","multiRNNCell"),i=Ir(n,"h","multiRNNCell");let o=r;const u=[];for(let c=0;c<s.length;c++){const h=s[c](o,a[c],i[c]);u.push(h[0]),u.push(h[1]),o=h[1]}const l=[],d=[];for(let c=0;c<u.length;c+=2)l.push(u[c]),d.push(u[c+1]);return[l,d]}const _d=X({multiRNNCell_:Dd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od(s,e,t,n=!1){const r=z(s,"logits","multinomial"),a=r.size,i=r.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();const u={logits:i===1?Z(r,[1,-1]):r},l={numSamples:e,seed:t,normalized:n},d=re.runKernel(Bo,u,l);return i===1?Z(d,[d.size]):d}const Fd=X({multinomial_:Od});function zd(s,e){const t=z(s,"v1","outerProduct"),n=z(e,"v2","outerProduct");j(t.rank===1&&n.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${n.rank}.`);const r=Z(t,[-1,1]),a=Z(n,[1,-1]);return mt(r,a)}const Ld=X({outerProduct_:zd});function Bd(s,e,t=0){return j(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),fs(s,[e],t)}const Vd=X({pad1d_:Bd});function Wd(s,e,t=0){return j(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fs(s,e,t)}const Ud=X({pad2d_:Wd});function Md(s,e,t=0){return j(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fs(s,e,t)}const Gd=X({pad3d_:Md});function Hd(s,e,t=0){return j(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),fs(s,e,t)}const jd=X({pad4d_:Hd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(s,e,t,n){const r=s.map((d,c)=>z(d,`tensors${c}`,"raggedGather","int32")),a=z(e,"paramsDenseValues","raggedGather"),i=z(t,"indices","raggedGather","int32"),o={paramsNestedSplits:r,paramsDenseValues:a,indices:i},u={outputRaggedRank:n},l=re.runKernel(Vo,o,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const Kd=X({raggedGather_:qd});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(s,e,t){const n=z(s,"starts","raggedRange"),r=z(e,"limits","raggedRange",n.dtype),a=z(t,"deltas","raggedRange",n.dtype),i={starts:n,limits:r,deltas:a},o=re.runKernel(Wo,i);return{rtNestedSplits:o[0],rtDenseValues:o[1]}}const Yd=X({raggedRange_:Xd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(s,e,t,n,r){const a=z(s,"shape","raggedTensorToTensor","int32"),i=z(e,"values","raggedTensorToTensor"),o=z(t,"defaultValue","raggedTensorToTensor",i.dtype),u=n.map((c,h)=>z(c,`tensors${h}`,"raggedTensorToTensor","int32")),l={shape:a,values:i,defaultValue:o,rowPartitionTensors:u},d={rowPartitionTypes:r};return re.runKernel(Uo,l,d)}const Jd=X({raggedTensorToTensor_:Qd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(s,e,t){Ks(s);const n=os(s);let r=null;if(t==null||t==="float32")r=new Float32Array(n);else if(t==="int32")r=new Int32Array(n);else if(t==="bool")r=new Uint8Array(n);else throw new Error(`Unknown data type ${t}`);for(let a=0;a<n;a++)r[a]=e();return re.makeTensor(r,s,t)}const eh=X({rand_:Zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function th(s,e,t=1,n="float32",r){if(Ks(s),t==null&&(t=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error(`Unsupported data type ${n}`);const a=new Mo(e,t,n,r),i=Ra(s,n);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const sh=X({randomGamma_:th});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nh(s,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Ea(s,0,1,e,t)}const rh=X({randomStandardNormal_:nh});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ah(s,e,t,n){return Pa(s,e,t,"int32",n)}const ih=X({randomUniformInt_:ah});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oh(s){const e=z(s,"x","reverse");return j(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),ms(e,0)}const uh=X({reverse1d_:oh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(s,e){const t=z(s,"x","reverse");return j(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),ms(t,e)}const ch=X({reverse2d_:lh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(s,e){const t=z(s,"x","reverse");return j(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),ms(t,e)}const hh=X({reverse3d_:dh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ph(s,e){const t=z(s,"x","reverse");return j(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),ms(t,e)}const fh=X({reverse4d_:ph});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function mh(s,e){const t=z(s,"x","setdiff1d"),n=z(e,"y","setdiff1d");j(t.dtype===n.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${n.dtype}).`),j(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),j(n.rank===1,()=>`y should be 1D tensor, but got y (${n.shape}).`);const r=await t.data(),a=await n.data(),i=new Set(a);let o=0;for(let d=0;d<r.length;d++)i.has(r[d])||o++;const u=new vr([o],t.dtype),l=new vr([o],"int32");for(let d=0,c=0;d<r.length;d++)i.has(r[d])||(u.values[c]=r[d],l.values[c]=d,c++);return[u.toTensor(),l.toTensor()]}const gh=mh;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ua(s,e,t){if(Xs(s),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const n=Ys(s,t);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Qs(s,e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yh(s,e,t){if(Xs(s),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const n=Ys(s,t);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Qs(s,e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bh(s,e,t){if(Xs(s),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const n=Ys(s,t);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Qs(s,e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wh(s,e,t){if(Xs(s),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const n=Ys(s,t);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||n,Qs(s,e,n,t)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sh(s,e,t){const n=z(s,"tensor","tensorScatterupdate"),r=z(e,"indices","tensorScatterupdate","int32"),a=z(t,"updates","tensorScatterupdate");if(Aa(a,r,n.shape),n.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${n.dtype} and ${a.dtype}.`);const i={tensor:n,indices:r,updates:a},o={};return re.runKernel(Go,i,o)}const xh=X({tensorScatterUpdate_:Sh});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ch(s,e){return ar(s,e,"right")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ih(s){const e=z(s,"condition","whereAsync","bool"),t=await e.data(),n=Ho(e.shape,t);return s!==e&&e.dispose(),n}const Ma=Ih;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function vh(s,e,t){const n=z(s,"tensor","boolMask"),r=z(e,"mask","boolMask","bool"),a=t??0,i=r.rank,o=n.shape;j(i>0,()=>"mask cannot be scalar"),Da(o.slice(a,a+i),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let y=a;y<a+i;y++)u*=o[y];const l=o.slice(0,a).concat([u],o.slice(a+i)),d=Z(n,l),c=Z(r,[-1]),h=await Ma(c),f=_a(h,[1]),m=Oa(d,f,a);return s!==n&&n.dispose(),e!==r&&r.dispose(),f.dispose(),d.dispose(),c.dispose(),h.dispose(),m}const Nh=vh;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kh(s,e,t,n,r=!0){const a=z(s,"v","movingAverage"),i=z(e,"x","movingAverage"),o=z(t,"decay","movingAverage");jo(a,i),j(is(a.shape,i.shape),()=>"Shape mismatch in v and x");const u=Xe(1),l=Vt(u,o);let d=rs(Vt(i,a),l);if(r){j(n!=null,()=>"When using zeroDebias: true, step is required.");const c=z(n,"step","movingAverage");d=Ds(d,Vt(u,Fa(o,c)))}return st(a,d)}const $h=X({movingAverage_:kh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Th(s,e,t){Ks(t);const n=z(s,"indices","scatterND","int32"),r=z(e,"updates","scatterND");Aa(r,n,t);const a={indices:n,updates:r},i={shape:t};return re.runKernel(qo,a,i)}const Rh=X({scatterND_:Th});function Eh(s,e,t,n){if(s.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${s.dtype}.`);if(s.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${s.shape}.`);const r=s.rank>0?s.shape[0]:1,a=s.rank>1?s.shape[1]:1;if(t.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${a}.`);const i=e.size;if(!(e.rank===0||e.rank===1&&i===r))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);if(e.dtype!==n.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(s,e,t,n=0){Ks(t);const r=z(s,"sparseIndices","sparseToDense","int32"),a=z(e,"sparseValues","sparseToDense","string_or_numeric"),i=z(n,"defaultValue","sparseToDense",a.dtype);Eh(r,a,t,i);const o={sparseIndices:r,sparseValues:a,defaultValue:i},u={outputShape:t};return re.runKernel(Ko,o,u)}const Ah=X({sparseToDense_:Ph});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dh(s,e){const t=z(e,"indices","gatherND","int32"),r={params:z(s,"x","gatherND","string_or_numeric"),indices:t};return re.runKernel(Xo,r)}const _h=X({gatherND_:Dh});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Oh(s,e,t=1){const n=z(s,"predictions","inTopK"),r=z(e,"targets","inTopK");j(n.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${n.rank}`),j(n.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${n.rank} and targets rank ${r.rank}`),Da(n.shape.slice(0,n.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=n.shape[n.shape.length-1];j(t>0&&t<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${t}`);const i=await n.data(),o=await r.data(),[u,l]=[i.length/a,a],d=Yo("bool",u);for(let c=0;c<u;c++){const h=c*l,f=i.subarray(h,h+l),m=[];for(let y=0;y<f.length;y++)m.push({value:f[y],index:y});m.sort((y,g)=>g.value-y.value),d[c]=0;for(let y=0;y<t;y++)if(m[y].index===o[c]){d[c]=1;break}}return s!==n&&n.dispose(),e!==r&&r.dispose(),Mt(d,r.shape,"bool")}const Fh=Oh;/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zh({x:s,filter:e,strides:t,pad:n,dataFormat:r="NHWC",dilations:a=[1,1],dimRoundingMode:i,bias:o,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:d}){if(Qo(re.state.gradientDepth,u)===!1){let v=za(s,e,t,n,r,a,i);return o!=null&&(v=st(v,o)),Jo(v,u,l,d)}const c=z(s,"x","depthwiseConv2d","float32"),h=z(e,"filter","depthwiseConv2d","float32");let f=c,m=!1;c.rank===3&&(m=!0,f=Z(c,[1,c.shape[0],c.shape[1],c.shape[2]])),j(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),j(h.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`),j(f.shape[3]===h.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`),a==null&&(a=[1,1]),j(Zo(t,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${a}'`),eu("fused depthwiseConv2d",n,i);const y=tu(f.shape,h.shape,t,a,n,i,!0);let g;o!=null&&(g=z(o,"bias","fused conv2d"),[g]=su(g,c),nu(y.outShape,g.shape));let b;l!=null&&(b=z(l,"prelu weights","fused depthwiseConv2d"));const S=(v,k)=>{j(ru(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[R,_,I,N]=k,w=au(v,I,u),$=iu(_.shape,w,R,t,n,a,i),L=ou(_,w,R.shape,t,n,a,i);if(N!=null){const V=uu(g,w);return[$,L,V]}return[$,L]},x={x:f,filter:h,bias:g,preluActivationWeights:b},C={strides:t,pad:n,dataFormat:r,dilations:a,dimRoundingMode:i,activation:u,leakyreluAlpha:d};return o==null?Nr((k,R,_)=>{let I=re.runKernel(kr,x,C);return _([R,k,I]),m&&(I=Z(I,[I.shape[1],I.shape[2],I.shape[3]])),{value:I,gradFunc:S}})(f,h):Nr((k,R,_,I)=>{let N=re.runKernel(kr,x,C);return I([R,k,N,_]),m&&(N=Z(N,[N.shape[1],N.shape[2],N.shape[3]])),{value:N,gradFunc:S}})(f,h,g)}const Lh=X({fusedDepthwiseConv2d_:zh});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bh=Object.freeze(Object.defineProperty({__proto__:null,conv2d:lu,depthwiseConv2d:Lh,matMul:cu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vh="model",Wh=".json",Uh=".weights.bin";function Er(s){return new Promise(e=>setTimeout(e)).then(s)}class xt{constructor(e){if(!rt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(xt.URL_SCHEME)&&(e=e.slice(xt.URL_SCHEME.length)),(e==null||e.length===0)&&(e=Vh),this.modelJsonFileName=e+Wh,this.weightDataFileName=e+Uh}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=Js.join(e.weightData),n=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=La(e,r),i=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),o=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=i,await Er(()=>o.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=n,await Er(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:sr(e)}}}}xt.URL_SCHEME="downloads://";class Mh{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{const n=new FileReader;n.onload=r=>{const a=JSON.parse(r.target.result),i=a.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}const u=er(a,l=>this.loadWeights(l));e(u)},n.onerror=r=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){const t=[],n=[];for(const i of e)t.push(...i.weights),n.push(...i.paths);const r=this.checkManifestAndWeightFiles(e),a=n.map(i=>this.loadWeightsFile(i,r[i]));return Promise.all(a).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((n,r)=>{const a=new FileReader;a.onload=i=>{const o=i.target.result;n(o)},a.onerror=i=>r(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){const t=[],n=this.weightsFiles.map(a=>$r(a.name)),r={};for(const a of e)a.paths.forEach(i=>{const o=$r(i);if(t.indexOf(o)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(t.push(o),n.indexOf(o)===-1)throw new Error(`Weight file with basename '${o}' is not provided.`);r[i]=this.weightsFiles[n.indexOf(o)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const Gh=s=>rt().getBool("IS_BROWSER")&&!Array.isArray(s)&&s.startsWith(xt.URL_SCHEME)?Hh(s.slice(xt.URL_SCHEME.length)):null;tr.registerSaveRouter(Gh);function Hh(s="model"){return new xt(s)}function jh(s){return new Mh(s)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pr(s,e,t,n){i(s),t=t??0,n=n??1,o(t,n);let r=0;const a=u=>(u.then(l=>{const d=t+ ++r/s.length*(n-t);return e(d),l}),u);function i(u){j(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function o(u,l){j(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),j(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),j(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(s.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ga(s,e){e==null&&(e={});const t=e.fetchFunc==null?rt().platform.fetch:e.fetchFunc,n=s.map(c=>t(c,e.requestInit,{isBinary:!0})),o=(e.onProgress==null?await Promise.all(n):await Pr(n,e.onProgress,0,.5)).map(c=>c.arrayBuffer());return e.onProgress==null?await Promise.all(o):await Pr(o,e.onProgress,.5,1)}function qh(s,e){var t;const n=e.fetchFunc==null?rt().platform.fetch:e.fetchFunc;let r=0,a;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:async i=>{for(var o;r<s.length;){a||(a=(await n(s[r],e.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:l}=await a.read();if(u){r++,a=void 0,(o=e.onProgress)===null||o===void 0||o.call(e,r/s.length);continue}i.enqueue(l);return}i.close()}})}async function Kh(s,e="",t,n){return Ha(i=>Ga(i,{requestInit:n}))(s,e,t)}function Ha(s){return async(e,t="",n)=>{const r=e.map(()=>!1),a={},i=n!=null?n.map(()=>!1):[],o=[];if(e.forEach((f,m)=>{let y=0;f.weights.forEach(g=>{const b="quantization"in g?g.quantization.dtype:g.dtype,S=du[b]*os(g.shape),x=()=>{r[m]=!0,a[m]==null&&(a[m]=[]),a[m].push({manifestEntry:g,groupOffset:y,sizeBytes:S})};n!=null?n.forEach((C,v)=>{C===g.name&&(x(),i[v]=!0)}):x(),o.push(g.name),y+=S})}),!i.every(f=>f)){const f=n.filter((m,y)=>!i[y]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${o.join(", ")}.`)}const u=r.reduce((f,m,y)=>(m&&f.push(y),f),[]),l=[];u.forEach(f=>{e[f].paths.forEach(m=>{const y=t+(t.endsWith("/")?"":"/")+m;l.push(y)})});const d=await s(l),c={};let h=0;return u.forEach(f=>{const m=e[f].paths.length,y=new Js(d.slice(h,h+m));a[f].forEach(b=>{const S=y.slice(b.groupOffset,b.groupOffset+b.sizeBytes),x=Ba(S,[b.manifestEntry]);for(const C in x)c[C]=x[C]}),h+=m}),c}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xh="application/octet-stream",Yh="application/json";class ir{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(j(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=rt().platform.fetch,j(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&j(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=La(e,n);if(t.body.append("model.json",new Blob([JSON.stringify(r)],{type:Yh}),"model.json"),e.weightData!=null){const i=Js.join(e.weightData);t.body.append("model.weights.bin",new Blob([i],{type:Xh}),"model.weights.bin")}const a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:sr(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return er(e,t=>this.loadWeights(t))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=In(e.weightsManifest),r=()=>qh(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:r})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=Qh(t),a=this.weightPathPrefix||n,i=[],o=[];for(const u of e)for(const l of u.paths)this.weightUrlConverter!=null?o.push(this.weightUrlConverter(l)):i.push(a+l+r);return this.weightUrlConverter&&i.push(...await Promise.all(o)),i}async loadWeights(e){const t=await this.getWeightUrls(e),n=In(e),r=await Ga(t,this.loadOptions);return[n,r]}}ir.URL_SCHEME_REGEX=/^https?:\/\//;function Qh(s){const e=s.lastIndexOf("/"),t=s.lastIndexOf("?"),n=s.substring(0,e),r=t>e?s.substring(t):"";return[n+"/",r]}function vn(s){return s.match(ir.URL_SCHEME_REGEX)!=null}const ja=(s,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(s)?t=s.every(n=>vn(n)):t=vn(s),t)return or(s,e)}return null};tr.registerSaveRouter(ja);tr.registerLoadRouter(ja);function or(s,e){return new ir(s,e)}function Jh(s,e){return or(s,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dn{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class qa{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class Zh{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function ep(s,e,t,n){const r=arguments;return new Zh(Ka(...r))}function Ka(s,e,t,n){return arguments.length===1?s.modelTopology!=null||s.weightSpecs!=null?new dn(s):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new dn({modelTopology:s})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new dn({modelTopology:s,weightSpecs:e,weightData:t,trainingConfig:n}))}function tp(s){return new qa(s)}function sp(s){return new qa(s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xa=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Js,browserFiles:jh,browserHTTPRequest:Jh,concatenateArrayBuffers:hu,copyModel:pu,decodeWeights:Ba,decodeWeightsStream:Va,encodeWeights:fu,fromMemory:ep,fromMemorySync:Ka,getLoadHandlers:mu,getModelArtifactsForJSON:er,getModelArtifactsForJSONSync:gu,getModelArtifactsInfoForJSON:sr,getSaveHandlers:yu,getWeightSpecs:In,http:or,isHTTPScheme:vn,listModels:bu,loadWeights:Kh,moveModel:wu,registerLoadRouter:Su,registerSaveRouter:xu,removeModel:Cu,weightsLoaderFactory:Ha,withSaveHandler:tp,withSaveHandlerSync:sp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ut;function np(s,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(s==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,n=!1,r=!1,a=!1,i=!1,o=!1;if(s.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&s instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&s instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement)a=!0;else if(s.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&s instanceof ImageBitmap)o=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${s.constructor.name}`);if(Iu(Tr,re.backendName)!=null){const m={pixels:s},y={numChannels:e};return re.runKernel(Tr,m,y)}const[l,d]=r?[s.videoWidth,s.videoHeight]:[s.width,s.height];let c;if(i)c=s.getContext("2d").getImageData(0,0,l,d).data;else if(n||t)c=s.data;else if(a||r||o){if(ut==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")ut=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else ut=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});ut.canvas.width=l,ut.canvas.height=d,ut.drawImage(s,0,0,l,d),c=ut.getImageData(0,0,l,d).data}let h;if(e===4)h=new Int32Array(c);else{const m=l*d;h=new Int32Array(m*e);for(let y=0;y<m;y++)for(let g=0;g<e;++g)h[y*e+g]=c[y*4+g]}return Ua(h,[d,l,e],"int32")}const rp=X({fromPixels_:np});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ap={};function Ya(s){return ap[s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p(s,e,t,n,r){const a=e.inputParams[s];if(a&&a.inputIndexStart!==void 0){const o=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?o+1:a.inputIndexEnd,l=o<0?e.inputNames.length+o:o;if(a.type==="tensor")return ce(e.inputNames[l],t,n,r);if(a.type==="tensors"){const h=e.inputs.slice(o,u);return e.inputNames.slice(o,u).filter((m,y)=>{var g;return((g=h[y])===null||g===void 0?void 0:g.op)!=="NoOp"}).map(m=>ce(m,t,n,r))}const d=ce(e.inputNames[l],t,n,r),c=d.dataSync();return a.type==="number"?c[0]:vu(d.shape,c)}const i=e.attrParams[s];return i&&i.value}function ce(s,e,t,n){const[r,a]=Ne(s,t);if(n!=null){const o=n.getHashTableHandleByName(r);if(o!=null)return o}const i=t.currentContextIds.find(o=>!!e[Os(r,o)]);return i!==void 0?e[Os(r,i)][a]:void 0}function Ar(s,e,t){return e[Os(s,t.currentContextId)]}function He(s,e){const[t,n,r]=Ne(s,e);return[Os(t,e&&e.currentContextId),n,r]}function Os(s,e){return e?`${s}-${e}`:s}function Ne(s,e){if(s==="")return["",0,void 0];const t=e!=null&&e.parseNodeNameCache!=null;if(t){const a=e.parseNodeNameCache.get(s);if(a!=null)return a}const n=s.split(":");let r;if(n.length===1)r=[s,0,void 0];else{const a=n[0],i=n.length===3?n[1]:void 0,o=Number(n[n.length-1]);r=[a,o,i]}return t&&e.parseNodeNameCache.set(s,r),r}function Ts(s,e,t){let n=p("pad",s,e,t);if(n==="explicit"){n=p("explicitPaddings",s,e,t);const r=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)r[a][0]=n[a*2],r[a][1]=n[a*2+1];return r}return n}function je(s){return s.kept?s:Wa(s)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ip=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],op=Object.freeze(Object.defineProperty({__proto__:null,json:ip},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const up=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],lp=Object.freeze(Object.defineProperty({__proto__:null,json:up},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cp=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],dp=Object.freeze(Object.defineProperty({__proto__:null,json:cp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hp=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],pp=Object.freeze(Object.defineProperty({__proto__:null,json:hp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fp=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],mp=Object.freeze(Object.defineProperty({__proto__:null,json:fp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gp=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],yp=Object.freeze(Object.defineProperty({__proto__:null,json:gp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bp=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],wp=Object.freeze(Object.defineProperty({__proto__:null,json:bp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sp=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],xp=Object.freeze(Object.defineProperty({__proto__:null,json:Sp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cp=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],Ip=Object.freeze(Object.defineProperty({__proto__:null,json:Cp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vp=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],Np=Object.freeze(Object.defineProperty({__proto__:null,json:vp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kp=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],$p=Object.freeze(Object.defineProperty({__proto__:null,json:kp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tp=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],Rp=Object.freeze(Object.defineProperty({__proto__:null,json:Tp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ep=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],Pp=Object.freeze(Object.defineProperty({__proto__:null,json:Ep},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ap=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],Dp=Object.freeze(Object.defineProperty({__proto__:null,json:Ap},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _p=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],Op=Object.freeze(Object.defineProperty({__proto__:null,json:_p},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fp=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],zp=Object.freeze(Object.defineProperty({__proto__:null,json:Fp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lp=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Bp=Object.freeze(Object.defineProperty({__proto__:null,json:Lp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vp=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],Wp=Object.freeze(Object.defineProperty({__proto__:null,json:Vp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Up=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],Mp=Object.freeze(Object.defineProperty({__proto__:null,json:Up},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dr{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[op,lp,dp,pp,mp,yp,wp,xp,Ip,Np,$p,Rp,Pp,Dp,Op,zp,Bp,Wp,Mp],t=[].concat(...e.map(n=>n.json));this.opMappers=t.reduce((n,r)=>(n[r.tfOpName]=r,n),{})}transformGraph(e,t={}){const n=e.node,r=[],a=[],i=[],o=n.reduce((y,g)=>(y[g.name]=this.mapNode(g),g.op.startsWith("Placeholder")?r.push(y[g.name]):g.op==="Const"?a.push(y[g.name]):(g.input==null||g.input.length===0)&&i.push(y[g.name]),y),{});let u=[];const l=[];let d={},c={};t!=null&&(d=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const h=Object.keys(o);h.forEach(y=>{const g=o[y];g.inputNames.forEach((b,S)=>{const[x,,C]=He(b),v=o[x];if(v.outputs!=null){const k=v.outputs.indexOf(C);if(k!==-1){const R=`${x}:${k}`;g.inputNames[S]=R}}g.inputs.push(v),v.children.push(g)})}),Object.keys(c).length===0?h.forEach(y=>{const g=o[y];g.children.length===0&&l.push(g)}):Object.keys(c).forEach(y=>{const[g]=He(y),b=o[g];b!=null&&(b.signatureKey=c[y],l.push(b))}),Object.keys(d).length>0?Object.keys(d).forEach(y=>{const[g]=He(y),b=o[g];b&&(b.signatureKey=d[y],u.push(b))}):u=r;let f={};e.library!=null&&e.library.function!=null&&(f=e.library.function.reduce((y,g)=>(y[g.signature.name]=this.mapFunction(g),y),{}));const m={nodes:o,inputs:u,outputs:l,weights:a,placeholders:r,signature:t,functions:f};return i.length>0&&(m.initNodes=i),m}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,n)=>(t[e[n].name]=n,t),{})}mapNode(e){const t=Ya(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(r=>r.startsWith("^")?r.slice(1):r),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(n.inputParams=t.inputs.reduce((r,a)=>(r[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},r),{})),t.attrs!=null&&(n.attrParams=t.attrs.reduce((r,a)=>{const i=a.type;let o;switch(a.type){case"string":o=Nn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Nn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":o=An(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=An(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":o=$n(e.attr,a.tfName,a.defaultValue||0),o===void 0&&a.tfDeprecatedName&&(o=$n(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":o=Pn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Pn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":o=kn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=kn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":o=_n(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=_n(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":o=En(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=En(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":o=Dn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Dn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":o=Tn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Tn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":o=Rn(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=Rn(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":o=_r(e.attr,a.tfName,a.defaultValue),o===void 0&&a.tfDeprecatedName&&(o=_r(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return r[a.name]={value:o,type:i},r},{})),n}mapFunction(e){const t=e.nodeDef,n=[],r=[];let a={};t!=null&&(a=t.reduce((c,h)=>(c[h.name]=this.mapNode(h),h.op==="Const"&&r.push(c[h.name]),c),{}));const i=[],o=[];e.signature.inputArg.forEach(c=>{const[h]=He(c.name),f={name:h,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ur(c.type),type:"dtype"}},children:[]};f.signatureKey=c.name,i.push(f),a[h]=f}),Object.keys(a).forEach(c=>{const h=a[c];h.inputNames.forEach((f,m)=>{const[y,,g]=He(f),b=a[y];if(b.outputs!=null){const S=b.outputs.indexOf(g);if(S!==-1){const x=`${y}:${S}`;h.inputNames[m]=x}}h.inputs.push(b),b.children.push(h)})});const l=e.ret;e.signature.outputArg.forEach(c=>{const[h,f]=He(l[c.name]),m=a[h];m!=null&&(m.defaultOutput=f,o.push(m))});const d=this.mapArgsToSignature(e);return{nodes:a,inputs:i,outputs:o,weights:r,placeholders:n,signature:d}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n),t),{}),outputs:e.signature.outputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t),{})}}mapArgToTensorInfo(e,t){let n=e.name;return t!=null&&(n=t[n]),{name:n,dtype:e.type}}}function Gp(s){const e=rt().global;if(typeof e.atob<"u")return e.atob(s);if(typeof Buffer<"u")return new Buffer(s,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Qa(s,e){const t=Array.isArray(s)?String.fromCharCode.apply(null,s):Gp(s);return e?t:t.toLowerCase()}function Nn(s,e,t,n=!1){const r=s[e];return r!=null?Qa(r.s,n):t}function kn(s,e,t){const n=s[e];return n?n.b:t}function $n(s,e,t){const n=s[e]||{},r=n.i!=null?n.i:n.f!=null?n.f:t;return typeof r=="number"?r:parseInt(r,10)}function ur(s){switch(typeof s=="string"&&(s=Ee[s]),s){case Ee.DT_FLOAT:case Ee.DT_HALF:return"float32";case Ee.DT_INT32:case Ee.DT_INT64:case Ee.DT_INT8:case Ee.DT_UINT8:return"int32";case Ee.DT_BOOL:return"bool";case Ee.DT_DOUBLE:return"float32";case Ee.DT_STRING:return"string";case Ee.DT_COMPLEX64:case Ee.DT_COMPLEX128:return"complex64";default:return null}}function _r(s,e,t){const n=s[e];return n&&n.func?n.func.name:t}function Tn(s,e,t){const n=s[e];return n&&n.type?ur(n.type):t}function Rn(s,e,t){const n=s[e];return n&&n.list&&n.list.type?n.list.type.map(r=>ur(r)):t}function Ja(s){if(!s.unknownRank)return s.dim!=null?s.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function En(s,e,t){const n=s[e];return n&&n.shape?Ja(n.shape):t}function Pn(s,e,t){const n=s[e];return n?((n.list.f&&n.list.f.length?n.list.f:n.list.i)||[]).map(r=>typeof r=="number"?r:parseInt(r,10)):t}function An(s,e,t,n=!1){const r=s[e];return r&&r.list&&r.list.s?r.list.s.map(a=>Qa(a,n)):t}function Dn(s,e,t){const n=s[e];return n&&n.list&&n.list.shape?n.list.shape.map(r=>Ja(r)):t}function _n(s,e,t){const n=s[e];return n&&n.list&&n.list.b?n.list.b:t}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hp{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(r=>this.getInput(r)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((r,a)=>(r[a]=this.getAttr(a),r),{}))}getInput(e){return ce(e,this.tensorMap,this.context)}getAttr(e,t){const n=this.node.rawAttrs[e];if(n.tensor!=null)return ce(e,this.tensorMap,this.context);if(n.i!=null||n.f!=null)return $n(this.node.rawAttrs,e,t);if(n.s!=null)return Nn(this.node.rawAttrs,e,t);if(n.b!=null)return kn(this.node.rawAttrs,e,t);if(n.shape!=null)return En(this.node.rawAttrs,e,t);if(n.type!=null)return Tn(this.node.rawAttrs,e,t);if(n.list!=null){if(n.list.i!=null||n.list.f!=null)return Pn(this.node.rawAttrs,e,t);if(n.list.s!=null)return An(this.node.rawAttrs,e,t);if(n.list.shape!=null)return Dn(this.node.rawAttrs,e,t);if(n.list.b!=null)return _n(this.node.rawAttrs,e,t);if(n.list.type!=null)return Rn(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const he=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Nu,abs:ku,acos:$u,acosh:Tu,add:st,addN:gd,all:Ru,any:Eu,argMax:Pu,argMin:Au,asin:Du,asinh:_u,atan:Ou,atan2:Fu,atanh:zu,avgPool:Lu,avgPool3d:Bu,basicLSTMCell:bd,batchNorm:Vu,batchNorm2d:Wu,batchNorm3d:Uu,batchNorm4d:Mu,batchToSpaceND:Gu,bincount:Hu,bitwiseAnd:Sd,booleanMaskAsync:Nh,broadcastArgs:Cd,broadcastTo:ju,buffer:Ra,cast:qu,ceil:Ku,clipByValue:Xu,clone:Wa,complex:Yu,concat:ps,concat1d:Qu,concat2d:Ju,concat3d:Zu,concat4d:el,conv1d:tl,conv2d:sl,conv2dTranspose:nl,conv3d:rl,conv3dTranspose:al,cos:il,cosh:ol,cosineWindow:ul,cumprod:ll,cumsum:cl,denseBincount:dl,depthToSpace:hl,depthwiseConv2d:za,diag:vd,dilation2d:pl,div:Ds,divNoNan:fl,dot:ml,dropout:gl,einsum:yl,elu:bl,enclosingPowerOfTwo:wl,ensureShape:kd,equal:Sl,erf:xl,euclideanNorm:Cl,exp:Il,expandDims:vl,expm1:Nl,eye:kl,fft:$l,fill:Tl,floor:Rl,floorDiv:El,fused:Bh,gather:Oa,gatherND:_h,greater:Pl,greaterEqual:Al,ifft:Dl,imag:_l,image:nr,inTopKAsync:Fh,irfft:Ol,isFinite:Fl,isInf:zl,isNaN:Ll,leakyRelu:Bl,less:Vl,lessEqual:Wl,linalg:Ul,linspace:$d,localResponseNormalization:Ml,log:Gl,log1p:Hl,logSigmoid:jl,logSoftmax:ql,logSumExp:Kl,logicalAnd:Xl,logicalNot:Yl,logicalOr:Ql,logicalXor:Jl,losses:Zl,lowerBound:Rd,matMul:mt,max:ec,maxPool:tc,maxPool3d:sc,maxPoolWithArgmax:Pd,maximum:nc,mean:rc,meshgrid:Ad,min:ac,minimum:ic,mirrorPad:oc,mod:uc,moments:lc,movingAverage:$h,mul:rs,multiRNNCell:_d,multinomial:Fd,neg:cc,norm:dc,notEqual:hc,oneHot:pc,ones:Bt,onesLike:fc,op:X,outerProduct:Ld,pad:fs,pad1d:Vd,pad2d:Ud,pad3d:Gd,pad4d:jd,pool:mc,pow:Fa,prelu:gc,print:yc,prod:bc,raggedGather:Kd,raggedRange:Yd,raggedTensorToTensor:Jd,rand:eh,randomGamma:sh,randomNormal:Ea,randomStandardNormal:rh,randomUniform:Pa,randomUniformInt:ih,range:wc,real:Sc,reciprocal:xc,relu:Cc,relu6:Ic,reshape:Z,reverse:ms,reverse1d:uh,reverse2d:ch,reverse3d:hh,reverse4d:fh,rfft:vc,round:Nc,rsqrt:kc,scalar:Xe,scatterND:Rh,searchSorted:ar,selu:$c,separableConv2d:Tc,setdiff1dAsync:gh,sigmoid:$s,sign:Rc,signal:Ec,sin:Pc,sinh:Ac,slice:gt,slice1d:Dc,slice2d:_c,slice3d:Oc,slice4d:Fc,softmax:zc,softplus:Lc,spaceToBatchND:Bc,sparse:Vc,sparseToDense:Ah,spectral:Wc,split:Uc,sqrt:Mc,square:Gc,squaredDifference:Hc,squeeze:_a,stack:us,step:jc,stridedSlice:qc,string:Kc,sub:Vt,sum:Xc,tan:Yc,tanh:Cn,tensor:Mt,tensor1d:Qc,tensor2d:Jc,tensor3d:Ua,tensor4d:yh,tensor5d:bh,tensor6d:wh,tensorScatterUpdate:xh,tile:Zc,topk:ed,transpose:td,truncatedNormal:sd,unique:nd,unsortedSegmentSum:rd,unstack:gs,upperBound:Ch,variable:ad,where:id,whereAsync:Ma,zeros:od,zerosLike:ud},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jp=(s,e,t,n=he)=>{switch(s.op){case"BiasAdd":case"AddV2":case"Add":return[n.add(p("a",s,e,t),p("b",s,e,t))];case"AddN":return[n.addN(p("tensors",s,e,t))];case"FloorMod":case"Mod":return[n.mod(p("a",s,e,t),p("b",s,e,t))];case"Mul":return[n.mul(p("a",s,e,t),p("b",s,e,t))];case"RealDiv":case"Div":return[n.div(p("a",s,e,t),p("b",s,e,t))];case"DivNoNan":return[n.divNoNan(p("a",s,e,t),p("b",s,e,t))];case"FloorDiv":return[n.floorDiv(p("a",s,e,t),p("b",s,e,t))];case"Sub":return[n.sub(p("a",s,e,t),p("b",s,e,t))];case"Minimum":return[n.minimum(p("a",s,e,t),p("b",s,e,t))];case"Maximum":return[n.maximum(p("a",s,e,t),p("b",s,e,t))];case"Pow":return[n.pow(p("a",s,e,t),p("b",s,e,t))];case"SquaredDifference":return[n.squaredDifference(p("a",s,e,t),p("b",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qp=(s,e,t,n=he)=>{switch(s.op){case"Abs":case"ComplexAbs":return[n.abs(p("x",s,e,t))];case"Acos":return[n.acos(p("x",s,e,t))];case"Acosh":return[n.acosh(p("x",s,e,t))];case"Asin":return[n.asin(p("x",s,e,t))];case"Asinh":return[n.asinh(p("x",s,e,t))];case"Atan":return[n.atan(p("x",s,e,t))];case"Atan2":return[n.atan2(p("x",s,e,t),p("y",s,e,t))];case"Atanh":return[n.atanh(p("x",s,e,t))];case"Ceil":return[n.ceil(p("x",s,e,t))];case"Complex":return[n.complex(p("real",s,e,t),p("imag",s,e,t))];case"Cos":return[n.cos(p("x",s,e,t))];case"Cosh":return[n.cosh(p("x",s,e,t))];case"Elu":return[n.elu(p("x",s,e,t))];case"Erf":return[n.erf(p("x",s,e,t))];case"Exp":return[n.exp(p("x",s,e,t))];case"Expm1":return[n.expm1(p("x",s,e,t))];case"Floor":return[n.floor(p("x",s,e,t))];case"Log":return[n.log(p("x",s,e,t))];case"Log1p":return[n.log1p(p("x",s,e,t))];case"Imag":return[n.imag(p("x",s,e,t))];case"Neg":return[n.neg(p("x",s,e,t))];case"Reciprocal":return[n.reciprocal(p("x",s,e,t))];case"Real":return[n.real(p("x",s,e,t))];case"Relu":return[n.relu(p("x",s,e,t))];case"Round":return[n.round(p("x",s,e,t))];case"Selu":return[n.selu(p("x",s,e,t))];case"Sigmoid":return[n.sigmoid(p("x",s,e,t))];case"Sin":return[n.sin(p("x",s,e,t))];case"Sign":return[n.sign(p("x",s,e,t))];case"Sinh":return[n.sinh(p("x",s,e,t))];case"Softplus":return[n.softplus(p("x",s,e,t))];case"Sqrt":return[n.sqrt(p("x",s,e,t))];case"Square":return[n.square(p("x",s,e,t))];case"Tanh":return[n.tanh(p("x",s,e,t))];case"Tan":return[n.tan(p("x",s,e,t))];case"ClipByValue":return[n.clipByValue(p("x",s,e,t),p("clipValueMin",s,e,t),p("clipValueMax",s,e,t))];case"Relu6":return[n.relu6(p("x",s,e,t))];case"Rsqrt":return[n.rsqrt(ce(s.inputNames[0],e,t))];case"LeakyRelu":return[n.leakyRelu(p("x",s,e,t),p("alpha",s,e,t))];case"Prelu":return[n.prelu(p("x",s,e,t),p("alpha",s,e,t))];case"IsNan":return[n.isNaN(ce(s.inputNames[0],e,t))];case"IsInf":return[n.isInf(ce(s.inputNames[0],e,t))];case"IsFinite":return[n.isFinite(ce(s.inputNames[0],e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(s,e,t=""){if(!(typeof s=="number"||typeof e=="number")){j(s.length===e.length,()=>t+` Shapes ${s} and ${e} must match`);for(let n=0;n<s.length;n++){const r=s[n],a=e[n];j(r<0||a<0||r===a,()=>t+` Shapes ${s} and ${e} must match`)}}}function Or(s){return!(typeof s=="number"||s.some(e=>e<0))}function Qt(s,e,t){let n=On(s,t);const r=!Or(n);if(r&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${n}`);if(r&&e.forEach(a=>{n=On(a.shape,n)}),!Or(n))throw new Error(`Non-fully-defined elementShape: ${n}`);return n}function On(s,e){if(typeof s=="number")return e;if(typeof e=="number")return s;if(s.length!==e.length)throw new Error(`Incompatible ranks during merge: ${s} vs. ${e}`);const t=[];for(let n=0;n<s.length;++n){const r=s[n],a=e[n];if(r>=0&&a>=0&&r!==a)throw new Error(`Incompatible shape during merge: ${s} vs. ${e}`);t[n]=r>=0?r:a}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kp{constructor(e,t,n,r,a,i,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=i,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=Xe(0),Ke(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),De(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,Ke(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((n,r)=>this.write(n,t[r]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let r=0;r<this.size();r++)e.push(r)}if(e.length===0)return Mt([],[0].concat(this.elementShape));const n=this.readMany(e);return De(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),us(n,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Mt([],[0].concat(this.elementShape));const t=[];for(let r=0;r<this.size();r++)t.push(r);const n=this.readMany(t);return De(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),ps(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,gs(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0;const r=e.map(u=>(n+=u,n));if(n!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=n===0?0:t.size/n,i=[];ke(()=>{t=Z(t,[1,n,a]);for(let u=0;u<e.length;++u){const d=[0,u===0?0:r[u-1],0],c=[1,e[u],a];i[u]=Z(gt(t,d,c),this.elementShape)}return i});const o=[];for(let u=0;u<e.length;u++)o[u]=u;this.writeMany(o,i)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ct{get id(){return this.idTensor.id}constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,e?.forEach(a=>{if(n!==a.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${a.dtype}`);De(t,a.shape,"TensorList shape mismatch: "),Ke(a)}),this.idTensor=Xe(0),this.maxNumElements=r,Ke(this.idTensor)}copy(){return new Ct([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(n!==-1&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);De(e,this.elementShape,"TensorList shape mismatch: ");const r=Qt(this.elementShape,this.tensors,e);return ke(()=>{const a=this.tensors.map(i=>Z(i,r));return us(a,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const n=Qt(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,De(r.shape,e,"TensorList shape mismatch: "),Z(r,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(De(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Ke(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new Ct([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);De(this.tensors[e].shape,t,"TensorList shape mismatch: ");const r=Qt(this.elementShape,this.tensors,t);return Z(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);De(this.elementShape,t.shape,"TensorList shape mismatch: "),Ke(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);De(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());const r=Qt(this.elementShape,this.tensors,n);return e.length===0?Mt([],[0].concat(r)):ke(()=>{const a=e.map(i=>Z(this.tensors[i],r));return us(a,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);De(this.elementShape,t,"TensorList shape mismatch: ");const n=Qt(this.elementShape,this.tensors,t);return this.size()===0?Mt([],[0].concat(n)):ke(()=>{const r=this.tensors.map(a=>Z(a,n));return ps(r,0)})}}function Xp(s,e,t){const n=s.dtype;if(s.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${s.shape}`);if(s.dtype!==t)throw new Error(`Invalid data types; op elements ${s.dtype}, but list elements ${t}`);const r=s.shape.slice(1);De(r,e,"TensorList shape mismatch: ");const a=gs(s);return new Ct(a,e,n)}function Yp(s,e,t,n){return new Ct([],s,e,n)}function Qp(s,e,t,n){if(e.length!==s.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${s.shape[0]}`);const r=Math.max(...e);if(n!=null&&n!==-1&&r>=n)throw new Error(`Max index must be < array size (${r}  vs. ${n})`);const a=new Ct([],t,s.dtype,n),i=gs(s,0);return e.forEach((o,u)=>{a.setItem(o,i[u])}),a}function Jp(s,e,t){let n=0;const r=e.map(d=>(n+=d,n));if(n!==s.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${s.shape}`);const a=s.shape.slice(1),i=On(a,t),o=n===0?0:s.size/n,u=ke(()=>{const d=[];s=Z(s,[1,n,o]);for(let c=0;c<e.length;++c){const f=[0,c===0?0:r[c-1],0],m=[1,e[c],o];d[c]=Z(gt(s,f,m),i)}return s.dispose(),d}),l=new Ct([],t,s.dtype,e.length);for(let d=0;d<u.length;d++)l.setItem(d,u[d]);return l}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zp=async(s,e,t)=>{switch(s.op){case"If":case"StatelessIf":{const n=p("thenBranch",s,e,t),r=p("elseBranch",s,e,t),a=p("cond",s,e,t),i=p("args",s,e,t);return(await a.data())[0]?t.functionMap[n].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[r].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const n=p("body",s,e,t),r=p("cond",s,e,t),a=p("args",s,e,t),i=await t.functionMap[r].executeFunctionAsync(a,t.tensorArrayMap,t.tensorListMap),o=a.map(d=>d.id);let u=await i[0].data();i.forEach(d=>{!d.kept&&o.indexOf(d.id)===-1&&d.dispose()});let l=a;for(;u[0];){const d=l;l=await t.functionMap[n].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);const c=l.map(f=>f.id);d.forEach(f=>{!f.kept&&o.indexOf(f.id)===-1&&c.indexOf(f.id)===-1&&f.dispose()});const h=await t.functionMap[r].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);u=await h[0].data(),h.forEach(f=>{!f.kept&&o.indexOf(f.id)===-1&&c.indexOf(f.id)===-1&&f.dispose()})}return l}case"LoopCond":{const n=p("pred",s,e,t);return[je(n)]}case"Switch":{const n=p("pred",s,e,t);let r=p("data",s,e,t);return r.kept||(r=je(r)),(await n.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const n=s.inputNames.find(r=>ce(r,e,t)!==void 0);if(n){const r=ce(n,e,t);return[je(r)]}return}case"Enter":{const n=p("frameName",s,e,t),r=p("tensor",s,e,t);return t.enterFrame(n),[je(r)]}case"Exit":{const n=p("tensor",s,e,t);return t.exitFrame(),[je(n)]}case"NextIteration":{const n=p("tensor",s,e,t);return t.nextIteration(),[je(n)]}case"TensorArrayV3":{const n=p("size",s,e,t),r=p("dtype",s,e,t),a=p("elementShape",s,e,t),i=p("dynamicSize",s,e,t),o=p("clearAfterRead",s,e,t),u=p("identicalElementShapes",s,e,t),l=p("name",s,e,t),d=new Kp(l,r,n,a,u,i,o);return t.addTensorArray(d),[d.idTensor,Xe(1)]}case"TensorArrayWriteV3":{const n=p("tensorArrayId",s,e,t),r=p("index",s,e,t),a=p("tensor",s,e,t),i=t.getTensorArray(n.id);return i.write(r,a),[i.idTensor]}case"TensorArrayReadV3":{const n=p("tensorArrayId",s,e,t),r=p("index",s,e,t);return[t.getTensorArray(n.id).read(r)]}case"TensorArrayGatherV3":{const n=p("tensorArrayId",s,e,t),r=p("indices",s,e,t),a=p("dtype",s,e,t);return[t.getTensorArray(n.id).gather(r,a)]}case"TensorArrayScatterV3":{const n=p("tensorArrayId",s,e,t),r=p("indices",s,e,t),a=p("tensor",s,e,t),i=t.getTensorArray(n.id);return i.scatter(r,a),[i.idTensor]}case"TensorArrayConcatV3":{const n=p("tensorArrayId",s,e,t),r=t.getTensorArray(n.id),a=p("dtype",s,e,t);return[r.concat(a)]}case"TensorArraySplitV3":{const n=p("tensorArrayId",s,e,t),r=p("tensor",s,e,t),a=p("lengths",s,e,t),i=t.getTensorArray(n.id);return i.split(a,r),[i.idTensor]}case"TensorArraySizeV3":{const n=p("tensorArrayId",s,e,t),r=t.getTensorArray(n.id);return[Xe(r.size(),"int32")]}case"TensorArrayCloseV3":{const n=p("tensorArrayId",s,e,t),r=t.getTensorArray(n.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const n=p("tensorListId",s,e,t),r=p("index",s,e,t),a=p("tensor",s,e,t),i=t.getTensorList(n.id);return i.setItem(r,a),[i.idTensor]}case"TensorListGetItem":{const n=p("tensorListId",s,e,t),r=p("index",s,e,t),a=p("elementShape",s,e,t),i=p("elementDType",s,e,t);return[t.getTensorList(n.id).getItem(r,a,i)]}case"TensorListScatterV2":case"TensorListScatter":{const n=p("indices",s,e,t),r=p("tensor",s,e,t),a=p("elementShape",s,e,t),i=p("numElements",s,e,t),o=Qp(r,n,a,i);return t.addTensorList(o),[o.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const n=p("elementShape",s,e,t),r=p("elementDType",s,e,t);let a;s.op==="TensorListReserve"?a="numElements":a="maxNumElements";const i=p(a,s,e,t),o=s.op==="TensorListReserve"?-1:i,u=Yp(n,r,i,o);return t.addTensorList(u),[u.idTensor]}case"TensorListGather":{const n=p("tensorListId",s,e,t),r=p("indices",s,e,t),a=p("elementShape",s,e,t),i=p("elementDType",s,e,t);return[t.getTensorList(n.id).gather(r,i,a)]}case"TensorListStack":{const n=p("tensorListId",s,e,t),r=p("elementShape",s,e,t),a=p("elementDType",s,e,t),i=p("numElements",s,e,t);return[t.getTensorList(n.id).stack(r,a,i)]}case"TensorListFromTensor":{const n=p("tensor",s,e,t),r=p("elementShape",s,e,t),a=p("elementDType",s,e,t),i=Xp(n,r,a);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const n=p("tensorListId",s,e,t),r=t.getTensorList(n.id),a=p("dtype",s,e,t),i=p("elementShape",s,e,t);return[r.concat(a,i)]}case"TensorListPushBack":{const n=p("tensorListId",s,e,t),r=p("tensor",s,e,t),a=t.getTensorList(n.id);return a.pushBack(r),[a.idTensor]}case"TensorListPopBack":{const n=p("tensorListId",s,e,t),r=p("elementShape",s,e,t),a=p("elementDType",s,e,t);return[t.getTensorList(n.id).popBack(r,a)]}case"TensorListSplit":{const n=p("tensor",s,e,t),r=p("elementShape",s,e,t),a=p("lengths",s,e,t),i=Jp(n,a,r);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{const n=p("tensorListId",s,e,t),r=t.getTensorList(n.id);return[Xe(r.size(),"int32")]}case"TensorListResize":{const n=p("tensorListId",s,e,t),r=p("size",s,e,t),i=t.getTensorList(n.id).resize(r);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fr(s,e,t){const[n,r]=p("fusedOps",s,e,t),a=n==="biasadd",i=!a,o=r==="prelu",u=n==="fusedbatchnorm",l=p("numArgs",s,e,t);if(a){if(o&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&a&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const d=p("strides",s,e,t),c=Ts(s,e,t),h=p("dataFormat",s,e,t).toUpperCase(),f=p("dilations",s,e,t);let[m,y]=p("args",s,e,t);i&&(y=m,m=void 0);const g=p("leakyreluAlpha",s,e,t);return{stride:d,pad:c,dataFormat:h,dilations:f,biasArg:m,preluArg:y,activationFunc:r,leakyreluAlpha:g}}const ef=(s,e,t,n=he)=>{switch(s.op){case"Conv1D":{const r=p("stride",s,e,t),a=p("pad",s,e,t),i=p("dataFormat",s,e,t).toUpperCase(),o=p("dilation",s,e,t);return[n.conv1d(p("x",s,e,t),p("filter",s,e,t),r,a,i,o)]}case"Conv2D":{const r=p("strides",s,e,t),a=Ts(s,e,t),i=p("dataFormat",s,e,t).toUpperCase(),o=p("dilations",s,e,t);return[n.conv2d(p("x",s,e,t),p("filter",s,e,t),[r[1],r[2]],a,i,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:r,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:l,activationFunc:d,leakyreluAlpha:c}=Fr(s,e,t);return[n.fused.conv2d({x:p("x",s,e,t),filter:p("filter",s,e,t),strides:[r[1],r[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:d,preluActivationWeights:l,leakyreluAlpha:c})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:a,dataFormat:i,dilations:o,biasArg:u,preluArg:l,activationFunc:d,leakyreluAlpha:c}=Fr(s,e,t);return[n.fused.depthwiseConv2d({x:p("x",s,e,t),filter:p("filter",s,e,t),strides:[r[1],r[2]],pad:a,dataFormat:i,dilations:[o[1],o[2]],bias:u,activation:d,preluActivationWeights:l,leakyreluAlpha:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=p("outputShape",s,e,t),a=p("strides",s,e,t),i=Ts(s,e,t);return[n.conv2dTranspose(p("x",s,e,t),p("filter",s,e,t),r,[a[1],a[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=p("strides",s,e,t),a=Ts(s,e,t),i=p("dilations",s,e,t),o=p("dataFormat",s,e,t).toUpperCase();return[n.depthwiseConv2d(p("input",s,e,t),p("filter",s,e,t),[r[1],r[2]],a,o,[i[1],i[2]])]}case"Conv3D":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("dataFormat",s,e,t).toUpperCase(),o=p("dilations",s,e,t);return[n.conv3d(p("x",s,e,t),p("filter",s,e,t),[r[1],r[2],r[3]],a,i,[o[1],o[2],o[3]])]}case"AvgPool":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("kernelSize",s,e,t);return[n.avgPool(p("x",s,e,t),[i[1],i[2]],[r[1],r[2]],a)]}case"MaxPool":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("kernelSize",s,e,t);return[n.maxPool(p("x",s,e,t),[i[1],i[2]],[r[1],r[2]],a)]}case"MaxPoolWithArgmax":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("kernelSize",s,e,t),o=p("includeBatchInIndex",s,e,t),{result:u,indexes:l}=n.maxPoolWithArgmax(p("x",s,e,t),[i[1],i[2]],[r[1],r[2]],a,o);return[u,l]}case"AvgPool3D":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("kernelSize",s,e,t);return[n.avgPool3d(p("x",s,e,t),[i[1],i[2],i[3]],[r[1],r[2],r[3]],a)]}case"MaxPool3D":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("kernelSize",s,e,t);return[n.maxPool3d(p("x",s,e,t),[i[1],i[2],i[3]],[r[1],r[2],r[3]],a)]}case"Dilation2D":{const r=p("strides",s,e,t),a=p("pad",s,e,t),i=p("dilations",s,e,t),o=r[1],u=r[2],l=i[1],d=i[2];return[n.dilation2d(p("x",s,e,t),p("filter",s,e,t),[o,u],a,[l,d],"NHWC")]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tf=(s,e,t,n=he)=>{switch(s.op){case"Fill":{const r=p("shape",s,e,t),a=p("dtype",s,e,t),i=p("value",s,e,t);return[n.fill(r,i,a)]}case"LinSpace":{const r=p("start",s,e,t),a=p("stop",s,e,t),i=p("num",s,e,t);return[n.linspace(r,a,i)]}case"Multinomial":{const r=p("logits",s,e,t),a=p("numSamples",s,e,t),i=p("seed",s,e,t);return[n.multinomial(r,a,i)]}case"OneHot":{const r=p("indices",s,e,t),a=p("depth",s,e,t),i=p("onValue",s,e,t),o=p("offValue",s,e,t),u=p("dtype",s,e,t);return[n.oneHot(r,a,i,o,u)]}case"Ones":return[n.ones(p("shape",s,e,t),p("dtype",s,e,t))];case"OnesLike":return[n.onesLike(p("x",s,e,t))];case"RandomStandardNormal":return[n.randomStandardNormal(p("shape",s,e,t),p("dtype",s,e,t),p("seed",s,e,t))];case"RandomUniform":return[n.randomUniform(p("shape",s,e,t),p("minval",s,e,t),p("maxval",s,e,t),p("dtype",s,e,t))];case"RandomUniformInt":return[n.randomUniformInt(p("shape",s,e,t),p("minval",s,e,t),p("maxval",s,e,t),p("seed",s,e,t))];case"Range":{const r=p("start",s,e,t),a=p("stop",s,e,t),i=p("step",s,e,t);return[n.range(r,a,i,p("dtype",s,e,t))]}case"TruncatedNormal":{const r=p("shape",s,e,t),a=p("mean",s,e,t),i=p("stdDev",s,e,t),o=p("seed",s,e,t);return[n.truncatedNormal(r,a,i,p("dtype",s,e,t),o)]}case"Zeros":return[n.zeros(p("shape",s,e,t),p("dtype",s,e,t))];case"ZerosLike":return[n.zerosLike(p("x",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(s,e,t){const n=p("boxes",s,e,t),r=p("scores",s,e,t),a=p("maxOutputSize",s,e,t),i=p("iouThreshold",s,e,t),o=p("scoreThreshold",s,e,t),u=p("softNmsSigma",s,e,t);return{boxes:n,scores:r,maxOutputSize:a,iouThreshold:i,scoreThreshold:o,softNmsSigma:u}}const sf=async(s,e,t,n,r=he)=>{switch(s.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:l,softNmsSigma:d}=hn(s,e,t),c=await r.image.nonMaxSuppressionWithScoreAsync(a,i,o,u,l,d);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:l}=hn(s,e,t),d=p("padToMaxOutputSize",s,e,t),c=await r.image.nonMaxSuppressionPaddedAsync(a,i,o,u,l,d);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:i,maxOutputSize:o,iouThreshold:u,scoreThreshold:l}=hn(s,e,t);return[await r.image.nonMaxSuppressionAsync(a,i,o,u,l)]}case"Where":{const a=r.cast(p("condition",s,e,t),"bool"),i=[await r.whereAsync(a)];return a.dispose(),i}case"ListDiff":return r.setdiff1dAsync(p("x",s,e,t),p("y",s,e,t));default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nf=(s,e,t,n=he)=>{switch(s.op){case"LowerBound":{const r=p("sortedSequence",s,e,t),a=p("values",s,e,t);return[n.lowerBound(r,a)]}case"TopKV2":{const r=p("x",s,e,t),a=p("k",s,e,t),i=p("sorted",s,e,t),o=n.topk(r,a,i);return[o.values,o.indices]}case"UpperBound":{const r=p("sortedSequence",s,e,t),a=p("values",s,e,t);return[n.upperBound(r,a)]}case"Unique":{const r=p("x",s,e,t),a=n.unique(r);return[a.values,a.indices]}case"UniqueV2":{const r=p("x",s,e,t),a=p("axis",s,e,t),i=n.unique(r,a);return[i.values,i.indices]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rf=(s,e,t,n=he)=>{switch(s.op){case"Const":return e[s.name];case"PlaceholderWithDefault":const r=p("default",s,e,t);return[ce(s.name,e,t)||r];case"Placeholder":return[ce(s.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const d=p("x",s,e,t);return[je(d)]}case"IdentityN":return p("x",s,e,t).map(d=>je(d));case"Snapshot":const a=p("x",s,e,t);return[je(a)];case"Shape":return[n.tensor1d(p("x",s,e,t).shape,"int32")];case"ShapeN":return p("x",s,e,t).map(d=>n.tensor1d(d.shape));case"Size":return[n.scalar(p("x",s,e,t).size,"int32")];case"Rank":return[n.scalar(p("x",s,e,t).rank,"int32")];case"NoOp":return[n.scalar(1)];case"Print":const i=p("x",s,e,t),o=p("data",s,e,t),u=p("message",s,e,t),l=p("summarize",s,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let d=0;d<o.length;d++)console.log(Array.prototype.slice.call(o[d].dataSync()).slice(0,l));return[i];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class af{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=Xe(0),this.tensorMap=new Map,Ke(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return Xe(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return this.tensorMap.forEach(r=>r.dispose()),this.tensorMap.clear(),ke(()=>{const r=gs(t),a=n.length,i=r.length;j(a===i,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${i} elements.`);for(let o=0;o<a;o++){const u=n[o],l=r[o];Ke(l),this.tensorMap.set(u,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const n=await e.data();return ke(()=>{const r=[];for(let a=0;a<n.length;a++){const i=n[a],o=this.findWithDefault(i,t);r.push(o)}return us(r)})}findWithDefault(e,t){const n=this.tensorMap.get(e);return n??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const of=async(s,e,t,n)=>{switch(s.op){case"HashTable":case"HashTableV2":{const r=n.getHashTableHandleByName(s.name);if(r!=null)return[r];{const a=p("keyDType",s,e,t),i=p("valueDType",s,e,t),o=new af(a,i);return n.addHashTable(s.name,o),[o.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const r=p("tableHandle",s,e,t,n),a=p("keys",s,e,t),i=p("values",s,e,t);return[await n.getHashTableById(r.id).import(a,i)]}case"LookupTableFind":case"LookupTableFindV2":{const r=p("tableHandle",s,e,t,n),a=p("keys",s,e,t),i=p("defaultValue",s,e,t);return[await n.getHashTableById(r.id).find(a,i)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=p("tableHandle",s,e,t,n);return[n.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uf=(s,e,t,n=he)=>{switch(s.op){case"ResizeBilinear":{const r=p("images",s,e,t),a=p("size",s,e,t),i=p("alignCorners",s,e,t),o=p("halfPixelCenters",s,e,t);return[n.image.resizeBilinear(r,[a[0],a[1]],i,o)]}case"ResizeNearestNeighbor":{const r=p("images",s,e,t),a=p("size",s,e,t),i=p("alignCorners",s,e,t),o=p("halfPixelCenters",s,e,t);return[n.image.resizeNearestNeighbor(r,[a[0],a[1]],i,o)]}case"CropAndResize":{const r=p("image",s,e,t),a=p("boxes",s,e,t),i=p("boxInd",s,e,t),o=p("cropSize",s,e,t),u=p("method",s,e,t),l=p("extrapolationValue",s,e,t);return[n.image.cropAndResize(r,a,i,o,u,l)]}case"ImageProjectiveTransformV3":{const r=p("images",s,e,t),a=p("transforms",s,e,t),i=p("outputShape",s,e,t),o=p("fillValue",s,e,t),u=p("interpolation",s,e,t),l=p("fillMode",s,e,t);return[n.image.transform(r,a,u.toLowerCase(),l.toLowerCase(),o,i)]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lf=(s,e,t,n=he)=>{switch(s.op){case"Equal":return[n.equal(p("a",s,e,t),p("b",s,e,t))];case"NotEqual":return[n.notEqual(p("a",s,e,t),p("b",s,e,t))];case"Greater":return[n.greater(p("a",s,e,t),p("b",s,e,t))];case"GreaterEqual":return[n.greaterEqual(p("a",s,e,t),p("b",s,e,t))];case"Less":return[n.less(p("a",s,e,t),p("b",s,e,t))];case"LessEqual":return[n.lessEqual(p("a",s,e,t),p("b",s,e,t))];case"LogicalAnd":return[n.logicalAnd(p("a",s,e,t),p("b",s,e,t))];case"LogicalNot":return[n.logicalNot(p("a",s,e,t))];case"LogicalOr":return[n.logicalOr(p("a",s,e,t),p("b",s,e,t))];case"Select":case"SelectV2":return[n.where(p("condition",s,e,t),p("a",s,e,t),p("b",s,e,t))];case"BitwiseAnd":return[n.bitwiseAnd(p("a",s,e,t),p("b",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cf=(s,e,t,n=he)=>{switch(s.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[n.matMul(p("a",s,e,t),p("b",s,e,t),p("transposeA",s,e,t),p("transposeB",s,e,t))];case"Einsum":return[n.einsum(p("equation",s,e,t),...p("tensors",s,e,t))];case"Transpose":return[n.transpose(p("x",s,e,t),p("perm",s,e,t))];case"_FusedMatMul":const[r,a]=p("fusedOps",s,e,t),i=r==="biasadd",o=a==="prelu",u=p("numArgs",s,e,t),l=p("leakyreluAlpha",s,e,t);if(i){if(o&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[d,c]=p("args",s,e,t);return[n.fused.matMul({a:p("a",s,e,t),b:p("b",s,e,t),transposeA:p("transposeA",s,e,t),transposeB:p("transposeB",s,e,t),bias:d,activation:a,preluActivationWeights:c,leakyreluAlpha:l})];case"MatrixBandPart":return[n.linalg.bandPart(p("a",s,e,t),p("numLower",s,e,t),p("numUpper",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const df=(s,e,t,n=he)=>{switch(s.op){case"EuclideanNorm":return[n.euclideanNorm(p("x",s,e,t),p("axis",s,e,t),p("keepDims",s,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[n.batchNorm(p("x",s,e,t),p("mean",s,e,t),p("variance",s,e,t),p("offset",s,e,t),p("scale",s,e,t),p("epsilon",s,e,t))];case"FusedBatchNormV3":return[n.batchNorm(p("x",s,e,t),p("mean",s,e,t),p("variance",s,e,t),p("offset",s,e,t),p("scale",s,e,t),p("epsilon",s,e,t))];case"LRN":return[n.localResponseNormalization(p("x",s,e,t),p("radius",s,e,t),p("bias",s,e,t),p("alpha",s,e,t),p("beta",s,e,t))];case"Softmax":return[n.softmax(p("x",s,e,t))];case"LogSoftmax":return[n.logSoftmax(p("x",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hf=(s,e,t,n=he)=>{switch(s.op){case"RaggedGather":{const{outputNestedSplits:r,outputDenseValues:a}=n.raggedGather(p("paramsNestedSplits",s,e,t),p("paramsDenseValues",s,e,t),p("indices",s,e,t),p("outputRaggedRank",s,e,t));return r.concat(a)}case"RaggedRange":{const{rtNestedSplits:r,rtDenseValues:a}=n.raggedRange(p("starts",s,e,t),p("limits",s,e,t),p("splits",s,e,t));return[r,a]}case"RaggedTensorToTensor":return[n.raggedTensorToTensor(p("shape",s,e,t),p("values",s,e,t),p("defaultValue",s,e,t),p("rowPartitionTensors",s,e,t),p("rowPartitionTypes",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pf=(s,e,t,n=he)=>{switch(s.op){case"Max":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.max(p("x",s,e,t),o,u)]}case"Mean":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.mean(p("x",s,e,t),o,u)]}case"Min":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.min(p("x",s,e,t),o,u)]}case"Sum":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.sum(p("x",s,e,t),o,u)]}case"All":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.all(p("x",s,e,t),o,u)]}case"Any":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.any(p("x",s,e,t),o,u)]}case"ArgMax":{const o=p("axis",s,e,t);return[n.argMax(p("x",s,e,t),o)]}case"ArgMin":{const o=p("axis",s,e,t);return[n.argMin(p("x",s,e,t),o)]}case"Prod":{const o=p("axis",s,e,t),u=p("keepDims",s,e,t);return[n.prod(p("x",s,e,t),o,u)]}case"Cumprod":{const o=p("axis",s,e,t),u=p("exclusive",s,e,t),l=p("reverse",s,e,t);return[n.cumprod(p("x",s,e,t),o,u,l)]}case"Cumsum":{const o=p("axis",s,e,t),u=p("exclusive",s,e,t),l=p("reverse",s,e,t);return[n.cumsum(p("x",s,e,t),o,u,l)]}case"Bincount":const r=p("x",s,e,t),a=p("weights",s,e,t),i=p("size",s,e,t);return[n.bincount(r,a,i)];case"DenseBincount":{const o=p("x",s,e,t),u=p("weights",s,e,t),l=p("size",s,e,t),d=p("binaryOutput",s,e,t);return[n.denseBincount(o,u,l,d)]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ff=(s,e,t,n=he)=>{switch(s.op){case"ConcatV2":case"Concat":{const r=p("n",s,e,t),a=p("axis",s,e,t);let i=p("tensors",s,e,t);return i=i.slice(0,r),[n.concat(i,a)]}case"Gather":{const r=p("x",s,e,t),a=p("indices",s,e,t);return[n.gather(r,n.cast(a,"int32"),0)]}case"GatherV2":{const r=p("axis",s,e,t),a=p("batchDims",s,e,t),i=p("x",s,e,t),o=p("indices",s,e,t);return[n.gather(i,n.cast(o,"int32"),r,a)]}case"Reverse":{const r=p("dims",s,e,t),a=[];for(let o=0;o<r.length;o++)r[o]&&a.push(o);const i=p("x",s,e,t);return[n.reverse(i,a)]}case"ReverseV2":{const r=p("axis",s,e,t),a=p("x",s,e,t);return[n.reverse(a,r)]}case"Slice":{const r=p("begin",s,e,t),a=p("size",s,e,t);return[n.slice(p("x",s,e,t),r,a)]}case"StridedSlice":{const r=p("begin",s,e,t),a=p("end",s,e,t),i=p("strides",s,e,t),o=p("beginMask",s,e,t),u=p("endMask",s,e,t),l=p("ellipsisMask",s,e,t),d=p("newAxisMask",s,e,t),c=p("shrinkAxisMask",s,e,t),h=p("x",s,e,t);return[n.stridedSlice(h,r,a,i,o,u,l,d,c)]}case"Pack":return ke(()=>{const r=p("axis",s,e,t),a=p("tensors",s,e,t),i=a[0].shape,o=n.squeeze(a[0]).shape,u=a.map(l=>{const d=is(l.shape,i);if(!d&&!is(n.squeeze(l).shape,o))throw new Error("the input tensors shape does not match");return d?l:n.reshape(l,i)});return[n.stack(u,r)]});case"Unpack":{const r=p("axis",s,e,t),a=p("tensor",s,e,t);return n.unstack(a,r)}case"Tile":{const r=p("reps",s,e,t);return[n.tile(p("x",s,e,t),r)]}case"Split":case"SplitV":{const r=p("axis",s,e,t),a=p("numOrSizeSplits",s,e,t),i=p("x",s,e,t);return n.split(i,a,r)}case"ScatterNd":{const r=p("indices",s,e,t),a=p("values",s,e,t),i=p("shape",s,e,t);return[n.scatterND(r,a,i)]}case"GatherNd":{const r=p("x",s,e,t),a=p("indices",s,e,t);return[n.gatherND(r,a)]}case"SparseToDense":{const r=p("sparseIndices",s,e,t),a=p("outputShape",s,e,t),i=p("sparseValues",s,e,t),o=p("defaultValue",s,e,t);return[n.sparseToDense(r,i,a,i.dtype===o.dtype?o:n.cast(o,i.dtype))]}case"TensorScatterUpdate":{const r=p("indices",s,e,t),a=p("values",s,e,t),i=p("tensor",s,e,t);return[n.tensorScatterUpdate(i,r,a)]}default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mf=(s,e,t,n=he)=>{switch(s.op){case"SparseFillEmptyRows":{const{outputIndices:r,outputValues:a,emptyRowIndicator:i,reverseIndexMap:o}=n.sparse.sparseFillEmptyRows(p("indices",s,e,t),p("values",s,e,t),p("denseShape",s,e,t),p("defaultValue",s,e,t));return[r,a,i,o]}case"SparseReshape":{const{outputIndices:r,outputShape:a}=n.sparse.sparseReshape(p("inputIndices",s,e,t),p("inputShape",s,e,t),p("newShape",s,e,t));return[r,a]}case"SparseSegmentMean":return[n.sparse.sparseSegmentMean(p("data",s,e,t),p("indices",s,e,t),p("segmentIds",s,e,t))];case"SparseSegmentSum":return[n.sparse.sparseSegmentSum(p("data",s,e,t),p("indices",s,e,t),p("segmentIds",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gf=(s,e,t,n=he)=>{switch(s.op){case"FFT":return[n.fft(p("x",s,e,t))];case"IFFT":return[n.ifft(p("x",s,e,t))];case"RFFT":return[n.rfft(p("x",s,e,t))];case"IRFFT":return[n.irfft(p("x",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yf=(s,e,t,n=he)=>{switch(s.op){case"StaticRegexReplace":return[n.string.staticRegexReplace(p("input",s,e,t),p("pattern",s,e,t),p("rewrite",s,e,t),p("replaceGlobal",s,e,t))];case"StringNGrams":{const{nGrams:r,nGramsSplits:a}=n.string.stringNGrams(p("data",s,e,t),p("dataSplits",s,e,t),p("separator",s,e,t),p("nGramWidths",s,e,t),p("leftPad",s,e,t),p("rightPad",s,e,t),p("padWidth",s,e,t),p("preserveShortSequences",s,e,t));return[r,a]}case"StringSplit":{const{indices:r,values:a,shape:i}=n.string.stringSplit(p("input",s,e,t),p("delimiter",s,e,t),p("skipEmpty",s,e,t));return[r,a,i]}case"StringToHashBucketFast":return[n.string.stringToHashBucketFast(p("input",s,e,t),p("numBuckets",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bf=(s,e,t,n=he)=>{switch(s.op){case"Cast":return[n.cast(p("x",s,e,t),p("dtype",s,e,t))];case"ExpandDims":{const r=p("axis",s,e,t);return[n.expandDims(p("x",s,e,t),r)]}case"Squeeze":{const r=p("axis",s,e,t);return[n.squeeze(p("x",s,e,t),r)]}case"Reshape":return[n.reshape(p("x",s,e,t),p("shape",s,e,t))];case"EnsureShape":return[n.ensureShape(p("x",s,e,t),p("shape",s,e,t))];case"MirrorPad":return[n.mirrorPad(p("x",s,e,t),p("padding",s,e,t),p("mode",s,e,t))];case"PadV2":case"Pad":return[n.pad(p("x",s,e,t),p("padding",s,e,t),p("constantValue",s,e,t))];case"SpaceToBatchND":{const r=p("blockShape",s,e,t),a=p("paddings",s,e,t);return[n.spaceToBatchND(p("x",s,e,t),r,a)]}case"BatchToSpaceND":{const r=p("blockShape",s,e,t),a=p("crops",s,e,t);return[n.batchToSpaceND(p("x",s,e,t),r,a)]}case"DepthToSpace":{const r=p("blockSize",s,e,t),a=p("dataFormat",s,e,t).toUpperCase();return[n.depthToSpace(p("x",s,e,t),r,a)]}case"BroadcastTo":return[n.broadcastTo(p("x",s,e,t),p("shape",s,e,t))];case"BroadcastArgs":return[n.broadcastArgs(p("s0",s,e,t),p("s1",s,e,t))];default:throw TypeError(`Node type ${s.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zr(s,e,t,n,r=ke){const a=((i,o,u)=>{switch(i.category){case"arithmetic":return r(()=>jp(i,o,u));case"basic_math":return r(()=>qp(i,o,u));case"control":return Zp(i,o,u);case"convolution":return r(()=>ef(i,o,u));case"creation":return r(()=>tf(i,o,u));case"dynamic":return sf(i,o,u);case"evaluation":return r(()=>nf(i,o,u));case"image":return r(()=>uf(i,o,u));case"graph":return r(()=>rf(i,o,u));case"logical":return r(()=>lf(i,o,u));case"matrices":return r(()=>cf(i,o,u));case"normalization":return r(()=>df(i,o,u));case"ragged":return r(()=>hf(i,o,u));case"reduction":return r(()=>pf(i,o,u));case"slice_join":return r(()=>ff(i,o,u));case"sparse":return r(()=>mf(i,o,u));case"spectral":return r(()=>gf(i,o,u));case"string":return r(()=>yf(i,o,u));case"transformation":return r(()=>bf(i,o,u));case"hash_table":return of(i,o,u,n);case"custom":const l=Ya(i.op);if(l&&l.customExecutor)return l.customExecutor(new Hp(i,o,u));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(s,e,t);return _s(a)?a.then(i=>[].concat(i)):[].concat(a)}class Lr{constructor(e={},t={},n={},r={},a){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Br(s,e,t,n){const r=new Set,a=[];let i=null,o=null;const u=new Set,l=new Set(Object.keys(s).map(h=>Ne(h)[0]));n=n||[];const d=new Set(n.map(h=>Ne(h.name)[0])),c=[...e];for(;c.length>0;){const h=c.pop();if((dt(h)||kf(h)||$f(h))&&i==null&&(i=h,o=i.children.map(f=>f.name).filter(f=>r.has(f))),r.add(h.name),t[h.name]==null&&!l.has(h.name)&&!d.has(h.name)){if(h.inputs.length===0){a.push(h.name);continue}h.inputs.forEach(f=>{u.has(f.name)||(u.add(f.name),c.push(f))})}}return{inputs:s,outputs:e,usedNodes:r,missingInputs:a,dynamicNode:i,syncInputs:o}}function wf(s,e){const{usedNodes:t,inputs:n}=e,r=Object.keys(n).map(g=>Ne(g)[0]).map(g=>s.nodes[g]),a=s.initNodes||[],i=g=>t.has(typeof g=="string"?g:g.name);function o(g){return[...new Map(g.map(b=>[b.name,b])).values()]}const u=o([...r,...s.weights,...a]).filter(i),l=o([...u,...Object.values(s.nodes)]).filter(i),d=new Map(l.map(g=>[g.name,g])),c={};for(const g of l){c[g.name]=c[g.name]||0;for(const b of g.children)i(b)||(c[b.name]=Number.POSITIVE_INFINITY),c[b.name]=(c[b.name]||0)+1}const h=Object.entries(c).filter(([,g])=>g===0).map(([g])=>g),f=[...h];for(;h.length>0;){const g=h.pop(),b=d.get(g);for(const S of b.children.filter(i))--c[S.name]===0&&(f.push(S.name),h.push(S.name))}const m=f.map(g=>d.get(g)),y=Sf(m,u);return xf(y,u),y}function Sf(s,e){const t=new Map(s.map(i=>[i.name,i])),n=e.map(i=>i.name),r=new Set(n);for(;n.length>0;){const i=n.pop(),o=t.get(i);for(const u of o.children)!t.has(u.name)||r.has(u.name)||(r.add(u.name),n.push(u.name))}return s.filter(i=>r.has(i.name))}class Ns extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function xf(s,e){const t=new Map(s.map((o,u)=>[o.name,u])),n=new Set(e.map(o=>o.name)),r=o=>n.has(typeof o=="string"?o:o.name),a=new Set(s.map(o=>o.name)),i=o=>a.has(typeof o=="string"?o:o.name);for(const o of s){for(const u of o.children.filter(i)){if(!t.has(u.name))throw new Ns(`Child ${u.name} of node ${o.name} is unreachable.`);if(t.get(o.name)>t.get(u.name))throw new Ns(`Node ${o.name} is scheduled to run after its child ${u.name}.`)}if(!r(o))for(const u of o.inputs){if(!t.has(u.name))throw new Ns(`Input ${u.name} of node ${o.name} is unreachable.`);if(t.get(u.name)>t.get(o.name))throw new Ns(`Node ${o.name} is scheduled to run before its input ${u.name}.`)}}}function Cf(s){const e=new Map(s.map((o,u)=>[o.name,u])),t=Number.MAX_SAFE_INTEGER,n=s.map((o,u)=>dt(o)?t:u),r=o=>{const u=n[e.get(o.name)];return u??-1},a=s.map((o,u)=>o.children.map(r).reduce((l,d)=>Math.max(l,d),n[u])),i=new Map;for(let o=0;o<s.length;++o){const u=a[o];if(u===t)continue;const l=s[o],d=s[u];i.has(d.name)||i.set(d.name,[]),i.get(d.name).push(l)}return i}const If=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),vf=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),Nf=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function dt(s){return If.has(s.op)}function kf(s){return vf.has(s.op)}function $f(s){return Nf.has(s.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fs{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(n=>e[n].map(r=>r.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(n=>{this._functionExecutorMap[n]=new Fs(e.functions[n],this)})}getCompilationKey(e,t){const n=e.map(a=>a.name).sort(),r=t.map(a=>a.name).sort();return n.join(this.SEPARATOR)+"--"+r.join(this.SEPARATOR)}compile(e,t){const n=Br(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:i}=n;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(r.length>0){const l=t.map(c=>c.name),d=Object.keys(e);throw new Error(`Cannot compute the outputs [${l}] from the provided inputs [${d}]. Missing the following inputs: [${r}]`)}const o=wf(this.graph,n),u=Cf(o);return{orderedNodes:o,nodeLiveUntilMap:u}}cloneAndKeepTensor(e){if(e==null)return null;const t=e.clone();return Ke(t),t}cloneTensorList(e){return e?e.map(n=>this.cloneAndKeepTensor(n)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,this.cloneTensorList(n)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const r=n.map(h=>this.graph.nodes[Ne(h)[0]]),a=t.map(h=>Ne(h)[0]),i=new Set(a);let o=a.map(h=>this.graph.nodes[h]);o.length===0&&(o=this._outputs);const u=this.getCompilationKey(r,o);let l=this.compiledMap.get(u);l==null&&(l=this.compile(e,o),this.compiledMap.set(u,l));try{this.keepIntermediateTensors=rt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(h){this.keepIntermediateTensors=!1,console.warn(h.message)}const d={},c={};return ke(()=>{const h=new Lr(this.weightMap,d,c,this.functionExecutorMap,this.parseNodeNameCache),f=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(b=>{const[S,x]=Ne(b,h),C=[];C[x]=e[b],f[S]=C,this.keepIntermediateTensors&&(this.clonedTensorsMap[S]=this.cloneTensorList(C))});const m=this.getFrozenTensorIds(f),{orderedNodes:y,nodeLiveUntilMap:g}=l;for(const b of y){if(f[b.name])continue;const S=zr(b,f,h,this._resourceManager);if(_s(S))throw new Error(`The execution of the op '${b.op}' returned a promise. Please use model.executeAsync() instead.`);f[b.name]=S,this.keepIntermediateTensors&&(this.clonedTensorsMap[b.name]=this.cloneTensorList(S)),this.checkTensorForDisposalWithNodeLiveUntilInfo(b,f,h,m,i,g.get(b.name))}return this.parent==null&&h.dispose(m),t.map(b=>ce(b,f,h))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(n=>e[n]).map(n=>n.map(r=>r.id)));return new Set(t)}checkTensorForDisposal(e,t,n,r,a,i,o){if(!(dt(t)||i.has(e))){for(const u of n[e])u!=null&&(o[u.id]=(o[u.id]||0)+t.children.length);for(const u of t.inputs){if(dt(u))continue;const l=Ar(u.name,n,r);if(l!=null)for(const d of l){if(!d||d.kept||a.has(d.id))continue;const c=o[d.id];c===1?(d.dispose(),delete o[d.id]):c!=null&&o[d.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,n,r,a,i){function o(u){return dt(u)||a.has(u.name)}if(!(dt(e)||i==null))for(const u of i){if(o(u))continue;const l=Ar(u.name,t,n);for(const d of l)!d||d.kept||r.has(d.id)||d.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,n=!1,r={},a={}){this.disposeIntermediateTensors(),n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=rt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(h){this.keepIntermediateTensors=!1,console.warn(h.message)}const i=new Lr(this.weightMap,r,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const o=await this.executeWithControlFlow(e,i,t,n),u=t.map(h=>ce(h,o,i)),l=u.map(h=>h.id),d=Object.keys(e).map(h=>e[h].id),c=new Set([...l,...d,...this.weightIds]);return Object.values(o).forEach(h=>{h.forEach(f=>{f&&!f.isDisposed&&!c.has(f.id)&&f.dispose()})}),this.parent==null&&i.dispose(c),u}async executeFunctionAsync(e,t,n){const r=e.reduce((a,i,o)=>(a[this.inputs[o].name]=i,a),{});return this._executeAsync(r,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,r){const a=Object.keys(e),i=a.map(C=>this.graph.nodes[Ne(C)[0]]),o=n.map(C=>Ne(C)[0]),u=new Set(o);let l=o.map(C=>this.graph.nodes[C]);l.length===0&&(l=this._outputs);const{usedNodes:d,missingInputs:c,dynamicNode:h,syncInputs:f}=Br(e,l,this.weightMap,this._initNodes),m=[...i,...this.graph.weights,...this._initNodes||[]].map(C=>({node:C,contexts:t.currentContext})),y=Object.assign({},this.weightMap);Object.keys(e).forEach(C=>{const[v,k]=Ne(C),R=[];R[k]=e[C],y[v]=R});const g={},b=this.getFrozenTensorIds(y),S={};for(;m.length>0;){const C=this.processStack(i,m,t,y,S,b,u,g,d);await Promise.all(C)}h==null&&!r&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const x=l.filter(C=>!dt(C)&&!ce(C.name,y,t)).map(C=>C.name);if(x.length>0){let C="";throw h!=null&&(C=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${f}]`),new Error(`Cannot compute the outputs [${x}] from the provided inputs [${a}]. Consider providing the following inputs: [${c}]. ${C}`)}return y}processStack(e,t,n,r,a,i,o,u,l){const d=[];for(;t.length>0;){const c=t.pop();n.currentContext=c.contexts;let h="";if(c.node.op==="Enter"&&p("isConstant",c.node,r,n)&&([h]=He(c.node.name,n)),r[c.node.name]==null){const f=zr(c.node,r,n,this._resourceManager);h||([h]=He(c.node.name,n));const m=n.currentContext;_s(f)?d.push(f.then(y=>(r[h]=y,this.keepIntermediateTensors&&(this.clonedTensorsMap[h]=this.cloneTensorList(y)),n.currentContext=m,this.checkTensorForDisposal(h,c.node,r,n,i,o,u),this.processChildNodes(c.node,t,n,r,a,l),y))):(r[h]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[h]=this.cloneTensorList(f)),this.checkTensorForDisposal(h,c.node,r,n,i,o,u),this.processChildNodes(c.node,t,n,r,a,l))}else this.processChildNodes(c.node,t,n,r,a,l)}return d}processChildNodes(e,t,n,r,a,i){e.children.forEach(o=>{const[u]=He(o.name,n);a[u]||!i.has(o.name)||(o.op==="Merge"?o.inputNames.some(l=>!!ce(l,r,n))&&(a[u]=!0,t.push({contexts:n.currentContext,node:o})):o.inputNames.every(l=>!!ce(l,r,n))&&(a[u]=!0,t.push({contexts:n.currentContext,node:o})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const n=e[t],[r]=Ne(t),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){const i=a.attrParams.shape.value,o=i.length===n.shape.length&&n.shape.every((u,l)=>i[l]===-1||i[l]===u);j(o,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${i}], but was [${n.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&j(n.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(e){var t,n;const r={};for(const a in e){const i=(n=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||n===void 0?void 0:n[a];i!=null?r[i.name]=e[a]:r[a]=e[a]}return r}checkInputs(e){const t=Object.keys(e).filter(n=>{const[r]=Ne(n);return this.graph.nodes[r]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var n,r;const a=(r=(n=this._signature)===null||n===void 0?void 0:n.outputs)===null||r===void 0?void 0:r[t];return a!=null?a.name:t},{})}checkOutputs(e){e.forEach(t=>{const[n]=Ne(t);if(!this.graph.nodes[n])throw new Error(`The output '${t}' is not found in the graph`)})}}class Tf{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rf="?tfjs-format=file",Ef="model.json";class Pf{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},n=Xa){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=n,t==null&&(this.loadOptions={}),this.resourceManager=new Tf}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return _s(e)?e.then(t=>t.getWeightStream==null?this.loadSync(t):this.loadStreaming(t)):this.loadSync(e)}loadSync(e){const t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const t=await Va(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;const n=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(r=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=r,this.version=`${n.versions.producer}.${n.versions.minConsumer}`,this.executor=new Fs(Dr.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=Dr.Instance.transformGraph(e.modelInitializer);this.initializer=new Fs(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){const n=this.io.getSaveHandlers(e);if(n.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(n.length>1)throw new Error(`Found more than one (${n.length}) save handlers for URL '${e}'`);e=n[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t=e instanceof As?[e]:e,n={};return t.forEach((r,a)=>n[this.structuredOutputKeys[a]]=r),n}return e}predict(e,t){const n=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(n)}async predictAsync(e,t){const n=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(n)}normalizeInputs(e){var t;if(!(e instanceof As)&&!Array.isArray(e)){const a=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(a!=null)for(const i in a){const o=a[i];o.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[o.resourceId])}return e}e=Array.isArray(e)?e:[e];const n=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+n!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${e.length} input tensors provided.`);let r=0;return this.inputNodes.reduce((a,i)=>{var o,u,l;const d=(l=(u=(o=this.signature)===null||o===void 0?void 0:o.inputs)===null||u===void 0?void 0:u[i])===null||l===void 0?void 0:l.resourceId;return d!=null?a[i]=this.resourceIdToCapturedInput[d]:a[i]=e[r++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,n=Object.keys(t);for(let r=0;r<n.length;r++){const a=n[r],i=t[a];this.resourceIdToCapturedInput[i.resourceId]=e[r]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,n)=>(t[n]=[e[n]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&rr(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Af(s,e={},t=Xa){if(s==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof s=="string"&&(s=Df(s));const n=new Pf(s,e,t);return await n.load(),n}function Df(s){return s.endsWith("/")||(s=s+"/"),`${s}${Ef}${Rf}`}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _f=1e-7,Of=1e-4;class Ff{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Za{refCount(e){return ve("refCount")}incRef(e){return ve("incRef")}timerAvailable(){return!0}time(e){return ve("time")}read(e){return ve("read")}readSync(e){return ve("readSync")}readToGPU(e,t){return ve("readToGPU")}numDataIds(){return ve("numDataIds")}disposeData(e,t){return ve("disposeData")}write(e,t,n){return ve("write")}move(e,t,n,r,a){return ve("move")}createTensorFromGPUData(e,t,n){return ve("createTensorFromGPUData")}memory(){return ve("memory")}floatPrecision(){return ve("floatPrecision")}epsilon(){return this.floatPrecision()===32?_f:Of}dispose(){return ve("dispose")}}function ve(s){throw new Error(`'${s}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jt(s,e,t){const n=s[e];s[e]=s[t],s[t]=n}function zf(s){let e=0;for(let t=0;t<s.length;t++)e+=s[t];return e}function A(s,e){if(!s)throw new Error(typeof e=="string"?e:e())}function ei(s,e,t=""){A(Je(s,e),()=>t+` Shapes ${s} and ${e} must match`)}function D(s){if(s.length===0)return 1;let e=s[0];for(let t=1;t<s.length;t++)e*=s[t];return e}function Vr(s){return s.length===0}function Je(s,e){if(s===e)return!0;if(s==null||e==null||s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0}function Lf(s){return s%1===0}function Rs(s,e){return e<=s.length?s:s+" ".repeat(e-s.length)}function Bf(s,e){let t=1,n=-1;for(let a=0;a<s.length;++a)if(s[a]>=0)t*=s[a];else if(s[a]===-1){if(n!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${n} and dim ${a}`);n=a}else if(s[a]<0)throw Error(`Shapes can not be < 0. Found ${s[a]} at dim ${a}`);if(n===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${s}`);return s}if(t===0)throw Error(`Cannot infer the missing size in [${s}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const r=s.slice();return r[n]=e/t,r}function it(s,e){const t=e.length;return s=s==null?e.map((n,r)=>r):[].concat(s),A(s.every(n=>n>=-t&&n<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${s}`),A(s.every(n=>Lf(n)),()=>`All values in axis param must be integers but got axis ${s}`),s.map(n=>n<0?t+n:n)}function It(s,e){return ue(s,e)}function ue(s,e){let t=null;if(s==null||s==="float32")t=new Float32Array(e);else if(s==="int32")t=new Int32Array(e);else if(s==="bool")t=new Uint8Array(e);else if(s==="string")t=new Array(e);else throw new Error(`Unknown data type ${s}`);return t}function Vf(s,e){for(let t=0;t<s.length;t++){const n=s[t];if(isNaN(n)||!isFinite(n))throw Error(`A tensor of type ${e} being uploaded contains ${n}.`)}}function Wf(s){return s==="bool"||s==="complex64"||s==="float32"||s==="int32"||s==="string"}function Uf(s,e){return!(e==="complex64"||e==="float32"&&s!=="complex64"||e==="int32"&&s!=="float32"&&s!=="complex64"||e==="bool"&&s==="bool")}function Fn(s){if(s==="float32"||s==="int32")return 4;if(s==="complex64")return 8;if(s==="bool")return 1;throw new Error(`Unknown dtype ${s}`)}function Mf(s){if(s==null)return 0;let e=0;return s.forEach(t=>e+=t.length),e}function Zs(s){return typeof s=="string"||s instanceof String}function Gf(s){return typeof s=="boolean"}function Hf(s){return typeof s=="number"}function ys(s){return Array.isArray(s)?ys(s[0]):s instanceof Float32Array?"float32":s instanceof Int32Array||s instanceof Uint8Array||s instanceof Uint8ClampedArray?"int32":Hf(s)?"float32":Zs(s)?"string":Gf(s)?"bool":"float32"}function zn(s){return!!(s&&s.constructor&&s.call&&s.apply)}function me(s){const e=s.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=s[e-1];for(let n=e-3;n>=0;--n)t[n]=t[n+1]*s[n+1];return t}function ti(s,e,t,n=!1){const r=new Array;if(e.length===1){const a=e[0]*(n?2:1);for(let i=0;i<a;i++)r[i]=t[s+i]}else{const a=e[0],i=e.slice(1),o=i.reduce((u,l)=>u*l)*(n?2:1);for(let u=0;u<a;u++)r[u]=ti(s+u*o,i,t,n)}return r}function Wr(s,e,t=!1){if(s.length===0)return e[0];const n=s.reduce((r,a)=>r*a)*(t?2:1);if(n===0)return[];if(n!==e.length)throw new Error(`[${s}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return ti(0,s,e,t)}function pn(s,e){if(Array.isArray(s))return s;if(e==="float32")return s instanceof Float32Array?s:new Float32Array(s);if(e==="int32")return s instanceof Int32Array?s:new Int32Array(s);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(s));throw new Error(`Unknown dtype ${e}`)}function jf(s,e){const t=Qe(s,e);for(let n=0;n<t.length;n++)t[n]=1;return t}function Qe(s,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(s);if(e==="int32")return new Int32Array(s);if(e==="bool")return new Uint8Array(s);throw new Error(`Unknown data type ${e}`)}function bs(s){s.forEach(e=>{A(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${s}].`)})}function Ln(s,e,t){if(e===0)return 0;if(e===1)return s[0];let n=s[s.length-1];for(let r=0;r<s.length-1;++r)n+=t[r]*s[r];return n}function lr(s,e,t){if(e===0)return[];if(e===1)return[s];const n=new Array(e);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(s/t[r]),s-=n[r]*t[r];return n[n.length-1]=s,n}function cr(s){return s&&s.then&&typeof s.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ur="tfjsflags";class qf{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Kf,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){const r=this.urlFlags[e];M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${r}.`),this.set(e,r)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(cr(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Ur in e&&e[Ur].split(",").forEach(n=>{const[r,a]=n.split(":");this.urlFlags[r]=Yf(r,a)})}}function Kf(s){const e={};return s.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...n)=>(Xf(e,n[0],n[1]),n.join("="))),e}function Xf(s,e,t){s[decodeURIComponent(e)]=decodeURIComponent(t||"")}function Yf(s,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function M(){return si}let si=null;function Qf(s){si=s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let fn;function ni(){if(fn==null){let s;if(typeof window<"u")s=window;else if(typeof global<"u")s=global;else if(typeof process<"u")s=process;else if(typeof self<"u")s=self;else throw new Error("Could not find a global object");fn=s}return fn}function Jf(){const s=ni();return s._tfGlobals==null&&(s._tfGlobals=new Map),s._tfGlobals}function dr(s,e){const t=Jf();if(t.has(s))return t.get(s);{const n=e();return t.set(s,n),t.get(s)}}const ri="Abs",Zf="Acos",em="Acosh",hr="Add",tm="AddN",sm="All",nm="Any",rm="ArgMax",am="ArgMin",im="Asin",om="Asinh",um="Atan",lm="Atanh",cm="Atan2",dm="AvgPool",hm="AvgPoolGrad",pm="AvgPool3D",fm="AvgPool3DGrad",mm="BatchMatMul",gm="BatchToSpaceND",ym="Bincount",bm="BroadcastArgs",pr="Cast",wm="Ceil",Sm="ClipByValue",ai="Complex",ii="ComplexAbs",xm="Concat",Cm="Conv2D",Im="Conv2DBackpropFilter",vm="Conv2DBackpropInput",Nm="Conv3D",km="Conv3DBackpropFilterV2",$m="Conv3DBackpropInputV2",Tm="Cos",Rm="Cosh",Em="Cumprod",Pm="Cumsum",Am="CropAndResize",Dm="DenseBincount",_m="DepthToSpace",Om="DepthwiseConv2dNative",Fm="DepthwiseConv2dNativeBackpropFilter",zm="DepthwiseConv2dNativeBackpropInput",Lm="Diag",Bm="Dilation2D",Vm="Dilation2DBackpropInput",Wm="Dilation2DBackpropFilter",Um="Draw",oi="RealDiv",Mm="Einsum",Gm="Elu",Hm="EluGrad",jm="Erf",qm="Equal",Km="Exp",Xm="ExpandDims",Ym="Expm1",Qm="FFT",ui="Fill",Jm="FlipLeftRight",Zm="Floor",li="FloorDiv",eg="FusedBatchNorm",tg="GatherV2",sg="GatherNd",ng="Greater",rg="GreaterEqual",fr="Identity",ag="IFFT",ig="Imag",og="IsFinite",ug="IsInf",lg="IsNan",cg="LeakyRelu",dg="Less",hg="LessEqual",pg="LinSpace",fg="Log",mg="Log1p",gg="LogicalAnd",yg="LogicalNot",bg="LogicalOr",wg="LRN",Sg="LRNGrad",xg="Max",ci="Maximum",Cg="MaxPool",Ig="MaxPoolGrad",vg="MaxPool3D",Ng="MaxPool3DGrad",kg="MaxPoolWithArgmax",$g="Mean",Tg="Min",Rg="Minimum",Eg="MirrorPad",Pg="Mod",Ag="Multinomial",di="Multiply",Dg="Neg",_g="NotEqual",Og="NonMaxSuppressionV3",Fg="NonMaxSuppressionV5",zg="OnesLike",Lg="OneHot",Bg="Pack",Vg="PadV2",hi="Pow",Wg="Prelu",Ug="Prod",Mg="Range",Gg="Real",Hg="Reciprocal",jg="Relu",pi="Reshape",qg="ResizeNearestNeighbor",Kg="ResizeNearestNeighborGrad",Xg="ResizeBilinear",Yg="ResizeBilinearGrad",Qg="Relu6",Jg="Reverse",Zg="Round",ey="Rsqrt",ty="ScatterNd",sy="TensorScatterUpdate",ny="SearchSorted",ry="Select",ay="Selu",iy="Slice",oy="Sin",uy="Sinh",ly="Sign",cy="Sigmoid",dy="Softplus",fi="Sqrt",hy="Sum",py="SpaceToBatchND",fy="SplitV",my="Softmax",gy="SparseSegmentMean",yy="SparseSegmentSum",by="SparseToDense",wy="SquaredDifference",Sy="Square",xy="StridedSlice",Cy="StringNGrams",mi="Sub",Iy="Tan",vy="Tanh",gi="Tile",Ny="TopK",ky="Transform",$y="Transpose",Ty="Unpack",Ry="UnsortedSegmentSum",yi="ZerosLike",Ey="Step",Py="FromPixels",Ay="RotateWithOffset",Dy="_FusedMatMul",_y="FusedConv2D",Oy="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ft(...s){M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(...s)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zs=dr("kernelRegistry",()=>new Map),Fy=dr("gradRegistry",()=>new Map);function Mr(s,e){const t=bi(s,e);return zs.get(t)}function Gr(s){return Fy.get(s)}function Hr(s){const e=zs.entries(),t=[];for(;;){const{done:n,value:r}=e.next();if(n)break;const[a,i]=r,[o]=a.split("_");o===s&&t.push(i)}return t}function zy(s){const{kernelName:e,backendName:t}=s,n=bi(e,t);zs.has(n)&&Ft(`The kernel '${e}' for backend '${t}' is already registered`),zs.set(n,s)}function bi(s,e){return`${e}_${s}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wi(s){return s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array||s instanceof Uint8ClampedArray}var mn,jr;function Ly(){if(jr)return mn;jr=1,mn=e;var s=null;try{s=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function e(N,w,$){this.low=N|0,this.high=w|0,this.unsigned=!!$}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function t(N){return(N&&N.__isLong__)===!0}e.isLong=t;var n={},r={};function a(N,w){var $,L,V;return w?(N>>>=0,(V=0<=N&&N<256)&&(L=r[N],L)?L:($=o(N,(N|0)<0?-1:0,!0),V&&(r[N]=$),$)):(N|=0,(V=-128<=N&&N<128)&&(L=n[N],L)?L:($=o(N,N<0?-1:0,!1),V&&(n[N]=$),$))}e.fromInt=a;function i(N,w){if(isNaN(N))return w?S:b;if(w){if(N<0)return S;if(N>=m)return R}else{if(N<=-y)return _;if(N+1>=y)return k}return N<0?i(-N,w).neg():o(N%f|0,N/f|0,w)}e.fromNumber=i;function o(N,w,$){return new e(N,w,$)}e.fromBits=o;var u=Math.pow;function l(N,w,$){if(N.length===0)throw Error("empty string");if(N==="NaN"||N==="Infinity"||N==="+Infinity"||N==="-Infinity")return b;if(typeof w=="number"?($=w,w=!1):w=!!w,$=$||10,$<2||36<$)throw RangeError("radix");var L;if((L=N.indexOf("-"))>0)throw Error("interior hyphen");if(L===0)return l(N.substring(1),w,$).neg();for(var V=i(u($,8)),W=b,H=0;H<N.length;H+=8){var ge=Math.min(8,N.length-H),ie=parseInt(N.substring(H,H+ge),$);if(ge<8){var te=i(u($,ge));W=W.mul(te).add(i(ie))}else W=W.mul(V),W=W.add(i(ie))}return W.unsigned=w,W}e.fromString=l;function d(N,w){return typeof N=="number"?i(N,w):typeof N=="string"?l(N,w):o(N.low,N.high,typeof w=="boolean"?w:N.unsigned)}e.fromValue=d;var c=65536,h=1<<24,f=c*c,m=f*f,y=m/2,g=a(h),b=a(0);e.ZERO=b;var S=a(0,!0);e.UZERO=S;var x=a(1);e.ONE=x;var C=a(1,!0);e.UONE=C;var v=a(-1);e.NEG_ONE=v;var k=o(-1,2147483647,!1);e.MAX_VALUE=k;var R=o(-1,-1,!0);e.MAX_UNSIGNED_VALUE=R;var _=o(0,-2147483648,!1);e.MIN_VALUE=_;var I=e.prototype;return I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*f+(this.low>>>0):this.high*f+(this.low>>>0)},I.toString=function(w){if(w=w||10,w<2||36<w)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(_)){var $=i(w),L=this.div($),V=L.mul($).sub(this);return L.toString(w)+V.toInt().toString(w)}else return"-"+this.neg().toString(w);for(var W=i(u(w,6),this.unsigned),H=this,ge="";;){var ie=H.div(W),te=H.sub(ie.mul(W)).toInt()>>>0,J=te.toString(w);if(H=ie,H.isZero())return J+ge;for(;J.length<6;)J="0"+J;ge=""+J+ge}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var w=this.high!=0?this.high:this.low,$=31;$>0&&(w&1<<$)==0;$--);return this.high!=0?$+33:$+1},I.isZero=function(){return this.high===0&&this.low===0},I.eqz=I.isZero,I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return(this.low&1)===1},I.isEven=function(){return(this.low&1)===0},I.equals=function(w){return t(w)||(w=d(w)),this.unsigned!==w.unsigned&&this.high>>>31===1&&w.high>>>31===1?!1:this.high===w.high&&this.low===w.low},I.eq=I.equals,I.notEquals=function(w){return!this.eq(w)},I.neq=I.notEquals,I.ne=I.notEquals,I.lessThan=function(w){return this.comp(w)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(w){return this.comp(w)<=0},I.lte=I.lessThanOrEqual,I.le=I.lessThanOrEqual,I.greaterThan=function(w){return this.comp(w)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(w){return this.comp(w)>=0},I.gte=I.greaterThanOrEqual,I.ge=I.greaterThanOrEqual,I.compare=function(w){if(t(w)||(w=d(w)),this.eq(w))return 0;var $=this.isNegative(),L=w.isNegative();return $&&!L?-1:!$&&L?1:this.unsigned?w.high>>>0>this.high>>>0||w.high===this.high&&w.low>>>0>this.low>>>0?-1:1:this.sub(w).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(x)},I.neg=I.negate,I.add=function(w){t(w)||(w=d(w));var $=this.high>>>16,L=this.high&65535,V=this.low>>>16,W=this.low&65535,H=w.high>>>16,ge=w.high&65535,ie=w.low>>>16,te=w.low&65535,J=0,pe=0,ne=0,we=0;return we+=W+te,ne+=we>>>16,we&=65535,ne+=V+ie,pe+=ne>>>16,ne&=65535,pe+=L+ge,J+=pe>>>16,pe&=65535,J+=$+H,J&=65535,o(ne<<16|we,J<<16|pe,this.unsigned)},I.subtract=function(w){return t(w)||(w=d(w)),this.add(w.neg())},I.sub=I.subtract,I.multiply=function(w){if(this.isZero())return b;if(t(w)||(w=d(w)),s){var $=s.mul(this.low,this.high,w.low,w.high);return o($,s.get_high(),this.unsigned)}if(w.isZero())return b;if(this.eq(_))return w.isOdd()?_:b;if(w.eq(_))return this.isOdd()?_:b;if(this.isNegative())return w.isNegative()?this.neg().mul(w.neg()):this.neg().mul(w).neg();if(w.isNegative())return this.mul(w.neg()).neg();if(this.lt(g)&&w.lt(g))return i(this.toNumber()*w.toNumber(),this.unsigned);var L=this.high>>>16,V=this.high&65535,W=this.low>>>16,H=this.low&65535,ge=w.high>>>16,ie=w.high&65535,te=w.low>>>16,J=w.low&65535,pe=0,ne=0,we=0,Dt=0;return Dt+=H*J,we+=Dt>>>16,Dt&=65535,we+=W*J,ne+=we>>>16,we&=65535,we+=H*te,ne+=we>>>16,we&=65535,ne+=V*J,pe+=ne>>>16,ne&=65535,ne+=W*te,pe+=ne>>>16,ne&=65535,ne+=H*ie,pe+=ne>>>16,ne&=65535,pe+=L*J+V*te+W*ie+H*ge,pe&=65535,o(we<<16|Dt,pe<<16|ne,this.unsigned)},I.mul=I.multiply,I.divide=function(w){if(t(w)||(w=d(w)),w.isZero())throw Error("division by zero");if(s){if(!this.unsigned&&this.high===-2147483648&&w.low===-1&&w.high===-1)return this;var $=(this.unsigned?s.div_u:s.div_s)(this.low,this.high,w.low,w.high);return o($,s.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?S:b;var L,V,W;if(this.unsigned){if(w.unsigned||(w=w.toUnsigned()),w.gt(this))return S;if(w.gt(this.shru(1)))return C;W=S}else{if(this.eq(_)){if(w.eq(x)||w.eq(v))return _;if(w.eq(_))return x;var H=this.shr(1);return L=H.div(w).shl(1),L.eq(b)?w.isNegative()?x:v:(V=this.sub(w.mul(L)),W=L.add(V.div(w)),W)}else if(w.eq(_))return this.unsigned?S:b;if(this.isNegative())return w.isNegative()?this.neg().div(w.neg()):this.neg().div(w).neg();if(w.isNegative())return this.div(w.neg()).neg();W=b}for(V=this;V.gte(w);){L=Math.max(1,Math.floor(V.toNumber()/w.toNumber()));for(var ge=Math.ceil(Math.log(L)/Math.LN2),ie=ge<=48?1:u(2,ge-48),te=i(L),J=te.mul(w);J.isNegative()||J.gt(V);)L-=ie,te=i(L,this.unsigned),J=te.mul(w);te.isZero()&&(te=x),W=W.add(te),V=V.sub(J)}return W},I.div=I.divide,I.modulo=function(w){if(t(w)||(w=d(w)),s){var $=(this.unsigned?s.rem_u:s.rem_s)(this.low,this.high,w.low,w.high);return o($,s.get_high(),this.unsigned)}return this.sub(this.div(w).mul(w))},I.mod=I.modulo,I.rem=I.modulo,I.not=function(){return o(~this.low,~this.high,this.unsigned)},I.and=function(w){return t(w)||(w=d(w)),o(this.low&w.low,this.high&w.high,this.unsigned)},I.or=function(w){return t(w)||(w=d(w)),o(this.low|w.low,this.high|w.high,this.unsigned)},I.xor=function(w){return t(w)||(w=d(w)),o(this.low^w.low,this.high^w.high,this.unsigned)},I.shiftLeft=function(w){return t(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?o(this.low<<w,this.high<<w|this.low>>>32-w,this.unsigned):o(0,this.low<<w-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(w){return t(w)&&(w=w.toInt()),(w&=63)===0?this:w<32?o(this.low>>>w|this.high<<32-w,this.high>>w,this.unsigned):o(this.high>>w-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(w){if(t(w)&&(w=w.toInt()),w&=63,w===0)return this;var $=this.high;if(w<32){var L=this.low;return o(L>>>w|$<<32-w,$>>>w,this.unsigned)}else return w===32?o($,0,this.unsigned):o($>>>w-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.shr_u=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?o(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:o(this.low,this.high,!0)},I.toBytes=function(w){return w?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var w=this.high,$=this.low;return[$&255,$>>>8&255,$>>>16&255,$>>>24,w&255,w>>>8&255,w>>>16&255,w>>>24]},I.toBytesBE=function(){var w=this.high,$=this.low;return[w>>>24,w>>>16&255,w>>>8&255,w&255,$>>>24,$>>>16&255,$>>>8&255,$&255]},e.fromBytes=function(w,$,L){return L?e.fromBytesLE(w,$):e.fromBytesBE(w,$)},e.fromBytesLE=function(w,$){return new e(w[0]|w[1]<<8|w[2]<<16|w[3]<<24,w[4]|w[5]<<8|w[6]<<16|w[7]<<24,$)},e.fromBytesBE=function(w,$){return new e(w[4]<<24|w[5]<<16|w[6]<<8|w[7],w[0]<<24|w[1]<<16|w[2]<<8|w[3],$)},mn}var Si=Ly();const xi=Ro(Si),By=fd({__proto__:null,default:xi},[Si]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ht=xi||By;function en(s){return ht.fromString(s,!0,16)}const Ci=en("c3a5c85c97cb3127"),lt=en("b492b66fbe98f273"),ye=en("9ae16a3b2f90404f");function Bn(s){return s.xor(s.shru(47))}function Ii(s,e,t){const n=s.slice(e,e+t);return ht.fromBytes(Array.from(n),!0,!0)}function Q(s,e){return Ii(s,e,8)}function qr(s,e){return Ii(s,e,4)}function oe(s,e){return e===0?s:s.shru(e).or(s.shl(64-e))}function nt(s,e,t=en("9ddfea08eb382d69")){let n=s.xor(e).mul(t);n=n.xor(n.shru(47));let r=e.xor(n).mul(t);return r=r.xor(r.shru(47)),r=r.mul(t),r}function Vy(s,e,t,n,r,a){r=r.add(s),a=oe(a.add(r).add(n),21);const i=r;return r=r.add(e),r=r.add(t),a=a.add(oe(r,44)),[r.add(n),a.add(i)]}function ks(s,e,t,n){return Vy(Q(s,e),Q(s,e+8),Q(s,e+16),Q(s,e+24),t,n)}function Wy(s,e=s.length){if(e>=8){const t=ye.add(e*2),n=Q(s,0).add(ye),r=Q(s,e-8),a=oe(r,37).mul(t).add(n),i=oe(n,25).add(r).mul(t);return nt(a,i,t)}if(e>=4){const t=ye.add(e*2),n=qr(s,0);return nt(n.shl(3).add(e),qr(s,e-4),t)}if(e>0){const t=s[0],n=s[e>>1],r=s[e-1],a=t+(n<<8),i=e+(r<<2);return Bn(ye.mul(a).xor(Ci.mul(i))).mul(ye)}return ye}function Uy(s,e=s.length){const t=ye.add(e*2),n=Q(s,0).mul(lt),r=Q(s,8),a=Q(s,e-8).mul(t),i=Q(s,e-16).mul(ye);return nt(oe(n.add(r),43).add(oe(a,30)).add(i),n.add(oe(r.add(ye),18)).add(a),t)}function My(s,e=s.length){const t=ye.add(e*2),n=Q(s,0).mul(ye),r=Q(s,8),a=Q(s,e-8).mul(t),i=Q(s,e-16).mul(ye),o=oe(n.add(r),43).add(oe(a,30)).add(i),u=nt(o,n.add(oe(r.add(ye),18)).add(a),t),l=Q(s,16).mul(t),d=Q(s,24),c=o.add(Q(s,e-32)).mul(t),h=u.add(Q(s,e-24)).mul(t);return nt(oe(l.add(d),43).add(oe(c,30)).add(h),l.add(oe(d.add(n),18)).add(c),t)}function Gy(s,e=s.length){const t=ht.fromNumber(81,!0);if(e<=32)return e<=16?Wy(s,e):Uy(s,e);if(e<=64)return My(s,e);let n=t,r=t.mul(lt).add(113),a=Bn(r.mul(ye).add(113)).mul(ye),i=[ht.UZERO,ht.UZERO],o=[ht.UZERO,ht.UZERO];n=n.mul(ye).add(Q(s,0));let u=0;const l=(e-1>>6)*64,d=l+(e-1&63)-63;do n=oe(n.add(r).add(i[0]).add(Q(s,u+8)),37).mul(lt),r=oe(r.add(i[1]).add(Q(s,u+48)),42).mul(lt),n=n.xor(o[1]),r=r.add(i[0]).add(Q(s,u+40)),a=oe(a.add(o[0]),33).mul(lt),i=ks(s,u,i[1].mul(lt),n.add(o[0])),o=ks(s,u+32,a.add(o[1]),r.add(Q(s,u+16))),[a,n]=[n,a],u+=64;while(u!==l);const c=lt.add(a.and(255).shl(1));return u=d,o[0]=o[0].add(e-1&63),i[0]=i[0].add(o[0]),o[0]=o[0].add(i[0]),n=oe(n.add(r).add(i[0]).add(Q(s,u+8)),37).mul(c),r=oe(r.add(i[1]).add(Q(s,u+48)),42).mul(c),n=n.xor(o[1].mul(9)),r=r.add(i[0].mul(9).add(Q(s,u+40))),a=oe(a.add(o[0]),33).mul(c),i=ks(s,u,i[1].mul(c),n.add(o[0])),o=ks(s,u+32,a.add(o[1]),r.add(Q(s,u+16))),[a,n]=[n,a],nt(nt(i[0],o[0],c).add(Bn(r).mul(Ci)).add(a),nt(i[1],o[1],c).add(n),c)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hy(s,e){return e==="string"?bt(s):tn([s],e)}function jy(s,e){return s instanceof Float32Array&&e==="float32"||s instanceof Int32Array&&e==="int32"||s instanceof Uint8Array&&e==="bool"}function tn(s,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(s)&&(s=vt(s)),M().getBool("DEBUG")&&Vf(s,e),jy(s,e))return s;if(e==null||e==="float32"||e==="complex64")return new Float32Array(s);if(e==="int32")return new Int32Array(s);if(e==="bool"){const t=new Uint8Array(s.length);for(let n=0;n<t.length;++n)Math.round(s[n])!==0&&(t[n]=1);return t}else throw new Error(`Unknown data type ${e}`)}function Ls(){return M().platform.now()}function bt(s,e="utf-8"){return e=e||"utf-8",M().platform.encode(s,e)}function Gt(s,e="utf-8"){return e=e||"utf-8",M().platform.decode(s,e)}function _e(s){return M().platform.isTypedArray!=null?M().platform.isTypedArray(s):wi(s)}function vt(s,e=[],t=!1){if(e==null&&(e=[]),typeof s=="boolean"||typeof s=="number"||typeof s=="string"||cr(s)||s==null||_e(s)&&t)e.push(s);else if(Array.isArray(s)||_e(s))for(let n=0;n<s.length;++n)vt(s[n],e,t);else{let n=-1;for(const r of Object.keys(s))/^([1-9]+[0-9]*|0)$/.test(r)&&(n=Math.max(n,Number(r)));for(let r=0;r<=n;r++)vt(s[r],e,t)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qy{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new Xy)}profileKernel(e,t,n){let r;const a=()=>{r=n()};let i;const o=Ls();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(a);else{a();for(const l of r)l.dataSync();i=Promise.resolve({kernelMs:Ls()-o})}if(M().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<r.length;l++){const d=r[l];d.data().then(c=>{Ky(c,d.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:i}=e;n.forEach(o=>{Promise.all([o.data(),r,i]).then(u=>{this.logger.logKernelProfile(t,o,u[0],u[1],a,u[2])})})}}function Ky(s,e,t){if(e!=="float32")return!1;for(let n=0;n<s.length;n++){const r=s[n];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${t}'`),!0}return!1}class Xy{logKernelProfile(e,t,n,r,a,i){const o=typeof r=="number"?Rs(`${r}ms`,9):r.error,u=Rs(e,25),l=t.rank,d=t.size,c=Rs(t.shape.toString(),14);let h="";for(const f in a){const m=a[f];if(m!=null){const y=m.shape||t.shape,g=y.length;h+=`${f}: ${g}D ${g>0?y:""} `}}console.log(`%c${u}	%c${o}	%c${l}D ${c}	%c${d}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(s,e,t){const n={},r={};for(let u=0;u<e.length;u++)n[e[u].id]=!0;for(let u=0;u<s.length;u++){const l=s[u],d=l.inputs;for(const c in d){const h=d[c];let f=!1;for(let m=0;m<e.length;m++)if(n[h.id]){l.outputs.forEach(y=>n[y.id]=!0),f=!0,r[l.id]=!0;break}if(f)break}}const a={};a[t.id]=!0;const i={};for(let u=s.length-1;u>=0;u--){const l=s[u],d=l.inputs;for(let c=0;c<l.outputs.length;c++)if(a[l.outputs[c].id]){for(const h in d)a[d[h].id]=!0,i[l.id]=!0;break}}const o=[];for(let u=0;u<s.length;u++){const l=s[u];if(r[l.id]&&i[l.id]){const d={};for(const h in l.inputs){const f=l.inputs[h];n[f.id]&&(d[h]=f)}const c=Object.assign({},l);c.inputs=d,c.outputs=l.outputs,o.push(c)}}return o}function Qy(s,e,t,n){for(let r=e.length-1;r>=0;r--){const a=e[r],i=[];if(a.outputs.forEach(u=>{const l=s[u.id];l!=null?i.push(l):i.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const o=a.gradient(i);for(const u in a.inputs){if(!(u in o))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(o)}.`);const l=t(()=>o[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);const d=a.inputs[u];if(!Je(l.shape,d.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${d.shape}'`);if(s[d.id]==null)s[d.id]=l;else{const c=s[d.id];s[d.id]=n(c,l),c.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kr=20,Zt=3,gn=7;function Jy(s,e,t,n){const r=me(e),a=Zy(s,e,t,r),i=e.length,o=Es(s,e,t,r,a),u=["Tensor"];return n&&(u.push(`  dtype: ${t}`),u.push(`  rank: ${i}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(o.map(l=>"    "+l).join(`
`)),u.join(`
`)}function Zy(s,e,t,n){const r=D(e),a=n[n.length-1],i=new Array(a).fill(0),o=e.length,u=t==="complex64"?ts(s):s;if(o>1)for(let l=0;l<r/a;l++){const d=l*a;for(let c=0;c<a;c++)i[c]=Math.max(i[c],es(u[d+c],0,t).length)}return i}function es(s,e,t){let n;return Array.isArray(s)?n=`${parseFloat(s[0].toFixed(gn))} + ${parseFloat(s[1].toFixed(gn))}j`:Zs(s)?n=`'${s}'`:t==="bool"?n=vi(s):n=parseFloat(s.toFixed(gn)).toString(),Rs(n,e)}function vi(s){return s===0?"false":"true"}function Es(s,e,t,n,r,a=!0){const i=t==="complex64"?2:1,o=e[0],u=e.length;if(u===0){if(t==="complex64"){const y=ts(s);return[es(y[0],0,t)]}return t==="bool"?[vi(s[0])]:[s[0].toString()]}if(u===1){if(o>Kr){const g=Zt*i;let b=Array.from(s.slice(0,g)),S=Array.from(s.slice((o-Zt)*i,o*i));return t==="complex64"&&(b=ts(b),S=ts(S)),["["+b.map((x,C)=>es(x,r[C],t)).join(", ")+", ..., "+S.map((x,C)=>es(x,r[o-Zt+C],t)).join(", ")+"]"]}return["["+(t==="complex64"?ts(s):Array.from(s)).map((g,b)=>es(g,r[b],t)).join(", ")+"]"]}const l=e.slice(1),d=n.slice(1),c=n[0]*i,h=[];if(o>Kr){for(let y=0;y<Zt;y++){const g=y*c,b=g+c;h.push(...Es(s.slice(g,b),l,t,d,r,!1))}h.push("...");for(let y=o-Zt;y<o;y++){const g=y*c,b=g+c;h.push(...Es(s.slice(g,b),l,t,d,r,y===o-1))}}else for(let y=0;y<o;y++){const g=y*c,b=g+c;h.push(...Es(s.slice(g,b),l,t,d,r,y===o-1))}const f=u===2?",":"";h[0]="["+(o>0?h[0]+f:"");for(let y=1;y<h.length-1;y++)h[y]=" "+h[y]+f;let m=`,
`;for(let y=2;y<u;y++)m+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(a?"":m),h}function ts(s){const e=[];for(let t=0;t<s.length;t+=2)e.push([s[t],s[t+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bs{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=D(e),n!=null){const r=n.length;A(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||ue(t,this.size),this.strides=me(e)}set(e,...t){t.length===0&&(t=[0]),A(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const r of e){if(r<0||r>=this.shape[t]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}t++}let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Oe().makeTensor(this.values,this.shape,this.dtype)}}let Oe=null,zt=null;function eb(s){Oe=s}function tb(s){zt=s}class Fe{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=D(e),this.strides=me(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return zt.buffer(this.shape,this.dtype,e)}bufferSync(){return zt.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return Wr(this.shape,e,this.dtype==="complex64")}arraySync(){return Wr(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Oe().read(this.dataId);if(this.dtype==="string"){const t=await e;try{return t.map(n=>Gt(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Oe().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Oe().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>Gt(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Oe().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Oe().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return zt.print(this,e)}clone(){return this.throwIfDisposed(),zt.clone(this)}toString(e=!1){const t=this.dataSync();return Jy(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),zt.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Oe().makeVariable(this,e,t,n)}}Object.defineProperty(Fe,Symbol.hasInstance,{value:s=>!!s&&s.data!=null&&s.dataSync!=null&&s.throwIfDisposed!=null});function Ni(){return dr("Tensor",()=>Fe)}Ni();class Vs extends Fe{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Je(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Oe().disposeTensor(this),this.dataId=e.dataId,Oe().incRef(this,null)}dispose(){Oe().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Vs,Symbol.hasInstance,{value:s=>s instanceof Fe&&s.assign!=null&&s.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Xr;(function(s){s.R0="R0",s.R1="R1",s.R2="R2",s.R3="R3",s.R4="R4",s.R5="R5",s.R6="R6"})(Xr||(Xr={}));var Vn;(function(s){s.float32="float32",s.int32="int32",s.bool="int32",s.complex64="complex64"})(Vn||(Vn={}));var Wn;(function(s){s.float32="float32",s.int32="int32",s.bool="bool",s.complex64="complex64"})(Wn||(Wn={}));var Un;(function(s){s.float32="float32",s.int32="float32",s.bool="float32",s.complex64="complex64"})(Un||(Un={}));var Mn;(function(s){s.float32="complex64",s.int32="complex64",s.bool="complex64",s.complex64="complex64"})(Mn||(Mn={}));const sb={float32:Un,int32:Vn,bool:Wn,complex64:Mn};function at(s,e){if(s==="string"||e==="string"){if(s==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${s} with ${e}`)}return sb[s][e]}function nb(s){return at(s,"int32")}function ki(s){return s!=null&&typeof s=="object"&&"texture"in s&&s.texture instanceof WebGLTexture}function $i(s){return typeof GPUBuffer<"u"&&s!=null&&typeof s=="object"&&"buffer"in s&&s.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(s,e){if(s.dtype===e.dtype)return[s,e];const t=at(s.dtype,e.dtype);return[s.cast(t),e.cast(t)]}function Ti(s){const e=[];return Ri(s,e,new Set),e}function Ri(s,e,t){if(s==null)return;if(s instanceof Fe){e.push(s);return}if(!rb(s))return;const n=s;for(const r in n){const a=n[r];t.has(a)||(t.add(a),Ri(a,e,t))}}function rb(s){return Array.isArray(s)||typeof s=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(s){return s.kernelName!=null}class Yr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Ht{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Yr}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Ft(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new qy(this.backendInstance),!0}setupRegisteredKernels(){Hr(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Hr(e).forEach(n=>{n.disposeFunc!=null&&n.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(n&&!(n instanceof Za)&&typeof n.then=="function"){const r=++this.pendingBackendInitId,a=n.then(i=>r<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Ft(`Initialization of backend ${e} failed`),Ft(i.stack||i.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(n){return Ft(`Initialization of backend ${e} failed`),Ft(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),i=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,t,n){e();try{const r=n();return t(),r}catch(r){throw t(),r}}nextTensorId(){return Ht.nextTensorId++}nextVariableId(){return Ht.nextVariableId++}clone(e){const t=U.runKernel(fr,{x:e}),n={x:e},r=i=>({x:()=>{const o="float32",u={x:i},l={dtype:o};return U.runKernel(pr,u,l)}}),a=[];return this.addTapeNode(this.state.activeScope.name,n,[t],r,a,{}),t}runKernel(e,t,n){if(this.backendName==null&&this.backend,!(Mr(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let a=0;n.forEach(u=>{a+=u.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-a-i;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),a=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName==null&&this.backend;let u;const l=yn(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(yn(e)){const{kernelName:m,inputs:y,attrs:g}=e;this.backendName==null&&this.backend;const b=Mr(m,this.backendName);A(b!=null,()=>`Cannot find registered kernel '${m}' for backend '${this.backendName}'`),o=()=>{const S=this.backend.numDataIds();u=b.kernelFunc({inputs:y,attrs:g,backend:this.backend});const x=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(m,S,x);const C=x.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(r){const v=this.getTensorsForGradient(m,y,C);n=this.saveTensorsForBackwardMode(v)}return C}}else{const{forwardFunc:m}=e,y=g=>{r&&(n=g.map(b=>this.keep(this.clone(b))))};o=()=>{const g=this.backend.numDataIds();u=this.tidy(()=>m(this.backend,y));const b=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,g,b),b}}const{inputs:d,attrs:c}=e,h=yn(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(l,d,()=>o()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(l,d,t,h,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(d).map(m=>d[m]!=null?d[m].shape:null),outputShapes:t.map(m=>m.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(n=>this.keep(this.clone(n)))}getTensorsForGradient(e,t,n){const r=Gr(e);if(r!=null){const a=r.inputsToSave||[],i=r.outputsToSave||[];let o;r.saveAllInputs?(A(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),o=Object.keys(t).map(l=>t[l])):o=a.map(l=>t[l]);const u=n.filter((l,d)=>i[d]);return o.concat(u)}return[]}makeTensor(e,t,n,r){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;n==="string"&&Zs(e[0])&&(a=e.map(u=>bt(u)));const i=r.write(a,t,n),o=new Fe(t,n,i,this.nextTensorId());if(this.trackTensor(o,r),n==="string"){const u=this.state.tensorInfo.get(i),l=Mf(a);this.state.numBytes+=l-u.bytes,u.bytes=l}return o}makeTensorFromDataId(e,t,n,r){n=n||"float32";const a={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(e,t){const{dataId:n,shape:r,dtype:a}=e,i=new Fe(r,a,n,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));const a=new Vs(e,t,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let n=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(n=e.size*Fn(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Vs||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const n=e.size*Fn(e.dtype);this.state.numBytes-=n}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,a,i){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},u=Gr(e);u!=null&&(r=u.gradFunc),r!=null&&(o.gradient=l=>(l=l.map((d,c)=>{if(d==null){const h=n[c],f=Qe(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return d}),r(l.length>1?l:l[0],a,i))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=Ti(e),n=new Set(t.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const i=this.state.activeScope.track[a];!i.kept&&!n.has(i.id)&&i.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(a=>{!a.kept&&a.scopeId===r.id&&this.track(a)})}gradients(e,t,n,r=!1){if(A(t.length>0,()=>"gradients() received an empty list of xs."),n!=null&&n.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));A(a instanceof Fe,()=>"The result y returned by f() must be a tensor.");const i=Yy(this.state.activeTape,t,a);if(!r&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const o={};o[a.id]=n??ab(a.shape),Qy(o,i,l=>this.tidy(l),ib);const u=t.map(l=>o[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const d of l.saved)d.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(e){return A(zn(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{A(t.every(o=>o instanceof Fe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let n;const r={};t.forEach((o,u)=>{r[u]=o});const a=(o,u)=>(n=e(...t,u),A(n.value instanceof Fe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),A(zn(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),i=(o,u)=>{const l=n.gradFunc(o,u),d=Array.isArray(l)?l:[l];A(d.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),A(d.every(h=>h instanceof Fe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const c={};return d.forEach((h,f)=>{c[f]=()=>h}),c};return this.runKernelFunc({forwardFunc:a,backwardsFunc:i,inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=Ls(),n=await this.backend.time(e);return n.wallMs=Ls()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Yr;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ht.nextTensorId=0;Ht.nextVariableId=0;function ab(s){const e=jf(D(s),"float32");return U.makeTensor(e,s,"float32")}function Ei(){const s=ni();if(s._tfengine==null){const e=new qf(s);s._tfengine=new Ht(e)}return Qf(s._tfengine.ENV),eb(()=>s._tfengine),s._tfengine}const U=Ei();function ib(s,e){const t={a:s,b:e};return U.runKernel(hr,t)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ce=M();Ce.registerFlag("DEBUG",()=>!1,s=>{s&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Ce.registerFlag("IS_BROWSER",()=>ob());Ce.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Ce.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Ce.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Ce.registerFlag("PROD",()=>!1);Ce.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Ce.getBool("DEBUG"));Ce.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Ce.registerFlag("IS_TEST",()=>!1);Ce.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Ce.getBool("DEBUG"));Ce.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Ce.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Ce.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ub(s,e){let t=s;if(_e(s))return e==="string"?[]:[s.length];if(ki(s)){const r=s.channels||"RGBA";return[s.height,s.width*r.length]}else if($i(s))return[s.buffer.size/(e==null?4:Fn(e))];if(!Array.isArray(s))return[];const n=[];for(;Array.isArray(t)||_e(t)&&e!=="string";)n.push(t.length),t=t[0];return Array.isArray(s)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Pi(s,n,[]),n}function Pi(s,e,t){if(t=t||[],!Array.isArray(s)&&!_e(s)){A(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}A(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${s.length} elements`),A(s.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${s.length} elements`);const n=e.slice(1);for(let r=0;r<s.length;++r)Pi(s[r],n,t.concat(r))}function Qr(s,e,t,n){if(s!=="string_or_numeric"){if(s==null)throw new Error("Expected dtype cannot be null.");if(s!=="numeric"&&s!==e||s==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${n}' must be ${s} tensor, but got ${e} tensor`)}}function ee(s,e,t,n="numeric"){if(s instanceof Ni())return Qr(n,s.dtype,e,t),s;let r=ys(s);if(r!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(r=n),Qr(n,r,e,t),s==null||!_e(s)&&!Array.isArray(s)&&typeof s!="number"&&typeof s!="boolean"&&typeof s!="string"){const u=s==null?"null":s.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${u}'`)}const a=ub(s,r);!_e(s)&&!Array.isArray(s)&&(s=[s]);const o=r!=="string"?tn(s,r):vt(s,[],!0);return U.makeTensor(o,a,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lb="__op";function be(s){const e=Object.keys(s);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const n=s[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+lb;const r=(...a)=>{U.startScope(t);try{const i=n(...a);return cr(i)&&console.error("Cannot return a Promise inside of tidy."),U.endScope(i),i}catch(i){throw U.endScope(null),i}};return Object.defineProperty(r,"name",{value:t,configurable:!0}),r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(s,e){const t=ee(s,"real","complex"),n=ee(e,"imag","complex");ei(t.shape,n.shape,`real and imag shapes, ${t.shape} and ${n.shape}, must match in call to tf.complex().`);const r={real:t,imag:n};return U.runKernel(ai,r)}const db=be({complex_:cb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(s,e,t,n){if(n==null)n=ys(s);else if(n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if($i(s)||ki(s)){if(n!=="float32"&&n!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${n}.`);return U.backend.createTensorFromGPUData(s,e||t,n)}if(!_e(s)&&!Array.isArray(s)&&typeof s!="number"&&typeof s!="boolean"&&typeof s!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){bs(e);const r=D(e),a=D(t);A(r===a,()=>`Based on the provided shape, [${e}], the tensor should have ${r} values but has ${a}`);for(let i=0;i<t.length;++i){const o=t[i],u=i===t.length-1?o!==D(e.slice(i)):!0;A(t[i]===e[i]||!u,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!_e(s)&&!Array.isArray(s)&&(s=[s]),e=e||t,s=n!=="string"?tn(s,n):vt(s,[],!0),U.makeTensor(s,e,n)}class ws{static join(e){return new ws(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(n=>_e(n)?n.buffer:n),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){const r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=t+r.byteLength;this.shards.push({buffer:r,start:t,end:a}),t=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const n=this.findShardForByte(e);if(n===-1)throw new Error(`Could not find start shard for byte ${e}`);const r=t-e,a=new ArrayBuffer(r),i=new Uint8Array(a);let o=0;for(let u=n;u<this.shards.length;u++){const l=this.shards[u],c=e+o-l.start,h=o,m=Math.min(t,l.end)-l.start,y=new Uint8Array(l.buffer,c,m-c);if(i.set(y,h),o+=y.length,t<l.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(r){return e<r.start?-1:e>=r.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const n=pb(this.shards,t);return n===-1?-1:(this.previousShardIndex=n,this.previousShardIndex)}}function pb(s,e){let t=0,n=s.length;for(;t<=n;){const r=Math.floor((n-t)/2)+t,a=e(s[r]);if(a===0)return r;a<0?n=r:t=r+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bn(){return U}function ae(s,e){return U.tidy(s,e)}function Te(s){Ti(s).forEach(t=>t.dispose())}function fb(s){return U.keep(s)}function mb(s,e,t=1){return U.registerBackend(s,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Jr(s){return mr?Buffer.byteLength(s,"utf8"):new Blob([s]).size}function gb(s){if(mr)return Buffer.from(s).toString("base64");const e=new Uint8Array(s);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function yb(s){if(mr){const n=Buffer.from(s,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}const e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t.set([e.charCodeAt(n)],n);return t.buffer}function Ai(s){if(s.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:s.modelTopology==null?0:Jr(JSON.stringify(s.modelTopology)),weightSpecsBytes:s.weightSpecs==null?0:Jr(JSON.stringify(s.weightSpecs)),weightDataBytes:s.weightData==null?0:new ws(s.weightData).byteLength}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Se{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Se.instance==null&&(Se.instance=new Se),Se.instance}static registerSaveRouter(e){Se.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Se.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Se.getHandlers(e,"save")}static getLoadHandlers(e,t){return Se.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return(t==="load"?Se.getInstance().loadRouters:Se.getInstance().saveRouters).forEach(i=>{const o=i(e,n);o!==null&&r.push(o)}),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gn="tensorflowjs",Hn=1,yt="models_store",tt="model_info_store";function Di(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const s=typeof window>"u"?self:window,e=s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB||s.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function jn(s){const e=s.result;e.createObjectStore(yt,{keyPath:"modelPath"}),e.createObjectStore(tt,{keyPath:"modelPath"})}class Nt{constructor(e){if(this.indexedDB=Di(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((n,r)=>{const a=this.indexedDB.open(Gn,Hn);a.onupgradeneeded=()=>jn(a),a.onsuccess=()=>{const i=a.result;if(t==null){const o=i.transaction(yt,"readonly"),l=o.objectStore(yt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(l.result.modelArtifacts)},l.onerror=d=>(i.close(),r(l.error)),o.oncomplete=()=>i.close()}else{t.weightData=ws.join(t.weightData);const o=Ai(t),u=i.transaction(tt,"readwrite");let l=u.objectStore(tt),d;try{d=l.put({modelPath:this.modelPath,modelArtifactsInfo:o})}catch(h){return r(h)}let c;d.onsuccess=()=>{c=i.transaction(yt,"readwrite");const h=c.objectStore(yt);let f;try{f=h.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:o})}catch(m){return r(m)}f.onsuccess=()=>n({modelArtifactsInfo:o}),f.onerror=m=>{l=u.objectStore(tt);const y=l.delete(this.modelPath);y.onsuccess=()=>(i.close(),r(f.error)),y.onerror=g=>(i.close(),r(f.error))}},d.onerror=h=>(i.close(),r(d.error)),u.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},a.onerror=i=>r(a.error)})}}Nt.URL_SCHEME="indexeddb://";const _i=s=>M().getBool("IS_BROWSER")&&!Array.isArray(s)&&s.startsWith(Nt.URL_SCHEME)?bb(s.slice(Nt.URL_SCHEME.length)):null;Se.registerSaveRouter(_i);Se.registerLoadRouter(_i);function bb(s){return new Nt(s)}function wb(s){return s.startsWith(Nt.URL_SCHEME)?s.slice(Nt.URL_SCHEME.length):s}class Sb{constructor(){this.indexedDB=Di()}async listModels(){return new Promise((e,t)=>{const n=this.indexedDB.open(Gn,Hn);n.onupgradeneeded=()=>jn(n),n.onsuccess=()=>{const r=n.result,a=r.transaction(tt,"readonly"),o=a.objectStore(tt).getAll();o.onsuccess=()=>{const u={};for(const l of o.result)u[l.modelPath]=l.modelArtifactsInfo;e(u)},o.onerror=u=>(r.close(),t(o.error)),a.oncomplete=()=>r.close()},n.onerror=r=>t(n.error)})}async removeModel(e){return e=wb(e),new Promise((t,n)=>{const r=this.indexedDB.open(Gn,Hn);r.onupgradeneeded=()=>jn(r),r.onsuccess=()=>{const a=r.result,i=a.transaction(tt,"readwrite"),o=i.objectStore(tt),u=o.get(e);let l;u.onsuccess=()=>{if(u.result==null)return a.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const d=o.delete(e),c=()=>{l=a.transaction(yt,"readwrite");const f=l.objectStore(yt).delete(e);f.onsuccess=()=>t(u.result.modelArtifactsInfo),f.onerror=m=>n(u.error)};d.onsuccess=c,d.onerror=h=>(c(),a.close(),n(u.error))}},u.onerror=d=>(a.close(),n(u.error)),i.oncomplete=()=>{l==null?a.close():l.oncomplete=()=>a.close()}},r.onerror=a=>n(r.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qe="/",Lt="tensorflowjs_models",Oi="info",xb="model_topology",Cb="weight_specs",Ib="weight_data",vb="model_metadata";function Fi(s){return{info:[Lt,s,Oi].join(qe),topology:[Lt,s,xb].join(qe),weightSpecs:[Lt,s,Cb].join(qe),weightData:[Lt,s,Ib].join(qe),modelMetadata:[Lt,s,vb].join(qe)}}function zi(s){for(const e of Object.values(s))window.localStorage.removeItem(e)}function Nb(s){const e=s.split(qe);if(e.length<3)throw new Error(`Invalid key format: ${s}`);return e.slice(1,e.length-1).join(qe)}function kb(s){return s.startsWith(kt.URL_SCHEME)?s.slice(kt.URL_SCHEME.length):s}class kt{constructor(e){if(!M().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Fi(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=Ai(e),a=ws.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,gb(a));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw zi(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const o=JSON.parse(a);t.format=o.format,t.generatedBy=o.generatedBy,t.convertedBy=o.convertedBy,o.signature!=null&&(t.signature=o.signature),o.userDefinedMetadata!=null&&(t.userDefinedMetadata=o.userDefinedMetadata),o.modelInitializer!=null&&(t.modelInitializer=o.modelInitializer),o.initializerSignature!=null&&(t.initializerSignature=o.initializerSignature),o.trainingConfig!=null&&(t.trainingConfig=o.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=yb(i),t}}kt.URL_SCHEME="localstorage://";const Li=s=>M().getBool("IS_BROWSER")&&!Array.isArray(s)&&s.startsWith(kt.URL_SCHEME)?$b(s.slice(kt.URL_SCHEME.length)):null;Se.registerSaveRouter(Li);Se.registerLoadRouter(Li);function $b(s){return new kt(s)}class Tb{constructor(){A(M().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),A(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},t=Lt+qe,n=qe+Oi;for(let r=0;r<this.LS.length;++r){const a=this.LS.key(r);if(a.startsWith(t)&&a.endsWith(n)){const i=Nb(a);e[i]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=kb(e);const t=Fi(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const n=JSON.parse(this.LS.getItem(t.info));return zi(t),n}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zr="://";class Le{constructor(){this.managers={}}static getInstance(){return Le.instance==null&&(Le.instance=new Le),Le.instance}static registerManager(e,t){A(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Zr)&&(e=e.slice(0,e.indexOf(Zr))),A(e.length>0,()=>"scheme must not be an empty string.");const n=Le.getInstance();A(n.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),n.managers[e]=t}static getManager(e){const t=Le.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Le.getInstance().managers)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rb{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!M().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",n=>{if(n.source===window&&n.data.name===this.messageName){n.stopPropagation();const r=this.functionRefs[n.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return wi(e)}}if(M().get("IS_BROWSER")){M().setPlatform("browser",new Rb);try{Le.registerManager(kt.URL_SCHEME,new Tb)}catch{}try{Le.registerManager(Nt.URL_SCHEME,new Sb)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eb={importFetch:()=>require("node-fetch")};let wn;class Pb{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return M().global.fetch!=null?M().global.fetch(e,t):(wn==null&&(wn=Eb.importFetch()),wn(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}M().get("IS_NODE")&&!M().get("IS_BROWSER")&&M().setPlatform("node",new Pb);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function de(s,e="float32",t){return e=e||"float32",bs(s),new Bs(s,e,t)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(s,e){const t=ee(s,"x","cast");if(!Wf(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const n={x:t},r={dtype:e};return U.runKernel(pr,n,r)}const qn=be({cast_:Ab});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(s){const t={x:ee(s,"x","clone","string_or_numeric")};return U.runKernel(fr,t)}const Bi=be({clone_:Db});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(s,e=!1){console.log(s.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ei();const Ob={buffer:de,cast:qn,clone:Bi,print:_b};tb(Ob);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(s,e){let t=ee(s,"a","add"),n=ee(e,"b","add");[t,n]=Tt(t,n);const r={a:t,b:n};return U.runKernel(hr,r)}const Y=be({add_:Fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(s,e){let t=ee(s,"a","floorDiv"),n=ee(e,"b","floorDiv");[t,n]=Tt(t,n);const r={a:t,b:n};return U.runKernel(li,r)}const Lb=be({floorDiv_:zb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(s,e){let t=ee(s,"a","div"),n=ee(e,"b","div");if([t,n]=Tt(t,n),t.dtype==="int32"&&n.dtype==="int32")return Lb(t,n);const r={a:t,b:n},a={};return U.runKernel(oi,r,a)}const We=be({div_:Bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(s,e){let t=ee(s,"a","mul"),n=ee(e,"b","mul");[t,n]=Tt(t,n);const r={a:t,b:n};return U.runKernel(di,r)}const q=be({mul_:Vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(s){const e=ee(s,"x","abs");if(e.dtype==="complex64"){const t={x:e};return U.runKernel(ii,t)}else{const t={x:e};return U.runKernel(ri,t)}}const Ub=be({abs_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gr(s,e,t,n,r="NHWC",a){const i=s[3],o=[...e,i],u=Kt(r);return Ge(s,o,t,a,n,null,null,u)}function Ss(s,e,t,n,r,a,i="channelsLast"){const[o,u]=Ws(e);let l;if(i==="channelsLast")l=[o,u,s[3],s[3]];else if(i==="channelsFirst")l=[o,u,s[1],s[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ge(s,l,t,n,r,a,!1,i)}function sn(s,e,t,n,r,a,i="NDHWC"){const[o,u,l]=Kn(e);let d,c;if(i==="NDHWC")c="channelsLast",d=[o,u,l,s[4],s[4]];else if(i==="NCDHW")c="channelsFirst",d=[o,u,l,s[1],s[1]];else throw new Error(`Unknown dataFormat ${i}`);return nn(s,d,t,n,r,!1,c,a)}function Ge(s,e,t,n,r,a,i=!1,o="channelsLast"){let[u,l,d,c]=[-1,-1,-1,-1];if(o==="channelsLast")[u,l,d,c]=s;else if(o==="channelsFirst")[u,c,l,d]=s;else throw new Error(`Unknown dataFormat ${o}`);const[h,f,,m]=e,[y,g]=Ws(t),[b,S]=Ws(n),x=Wt(h,b),C=Wt(f,S),{padInfo:v,outHeight:k,outWidth:R}=Hb(r,l,d,y,g,x,C,a,o),_=i?m*c:m;let I;return o==="channelsFirst"?I=[u,_,k,R]:o==="channelsLast"&&(I=[u,k,R,_]),{batchSize:u,dataFormat:o,inHeight:l,inWidth:d,inChannels:c,outHeight:k,outWidth:R,outChannels:_,padInfo:v,strideHeight:y,strideWidth:g,filterHeight:h,filterWidth:f,effectiveFilterHeight:x,effectiveFilterWidth:C,dilationHeight:b,dilationWidth:S,inShape:s,outShape:I,filterShape:e}}function nn(s,e,t,n,r,a=!1,i="channelsLast",o){let[u,l,d,c,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[u,l,d,c,h]=s;else if(i==="channelsFirst")[u,h,l,d,c]=s;else throw new Error(`Unknown dataFormat ${i}`);const[f,m,y,,g]=e,[b,S,x]=Kn(t),[C,v,k]=Kn(n),R=Wt(f,C),_=Wt(m,v),I=Wt(y,k),{padInfo:N,outDepth:w,outHeight:$,outWidth:L}=jb(r,l,d,c,b,S,x,R,_,I,o),V=a?g*h:g;let W;return i==="channelsFirst"?W=[u,V,w,$,L]:i==="channelsLast"&&(W=[u,w,$,L,V]),{batchSize:u,dataFormat:i,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:w,outHeight:$,outWidth:L,outChannels:V,padInfo:N,strideDepth:b,strideHeight:S,strideWidth:x,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:R,effectiveFilterHeight:_,effectiveFilterWidth:I,dilationDepth:C,dilationHeight:v,dilationWidth:k,inShape:s,outShape:W,filterShape:e}}function Mb(s,e,t,n,r){n==null&&(n=Vi(s,e,t));const a=s[0],i=s[1],o=ls((a-e+2*n)/t+1,r),u=ls((i-e+2*n)/t+1,r);return[o,u]}function Gb(s,e,t,n,r,a){r==null&&(r=Vi(s,e[0],n[0]));const i=[0,0,0,t];for(let o=0;o<3;o++)s[o]+2*r>=e[o]&&(i[o]=ls((s[o]-e[o]+2*r)/n[o]+1,a));return i}function Vi(s,e,t,n=1){const r=Wt(e,n);return Math.floor((s[0]*(t-1)-t+r)/2)}function Ws(s){return typeof s=="number"?[s,s,s]:s.length===2?[s[0],s[1],1]:s}function Kn(s){return typeof s=="number"?[s,s,s]:s}function Wt(s,e){return e<=1?s:s+(s-1)*(e-1)}function Hb(s,e,t,n,r,a,i,o,u){let l,d,c;if(typeof s=="number"){l={top:s,bottom:s,left:s,right:s,type:s===0?"VALID":"NUMBER"};const f=Mb([e,t],a,n,s,o);d=f[0],c=f[1]}else if(s==="same"){d=Math.ceil(e/n),c=Math.ceil(t/r);const h=Math.max(0,(d-1)*n+a-e),f=Math.max(0,(c-1)*r+i-t),m=Math.floor(h/2),y=h-m,g=Math.floor(f/2),b=f-g;l={top:m,bottom:y,left:g,right:b,type:"SAME"}}else if(s==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},d=Math.ceil((e-a+1)/n),c=Math.ceil((t-i+1)/r);else if(typeof s=="object"){const h=u==="channelsLast"?s[1][0]:s[2][0],f=u==="channelsLast"?s[1][1]:s[2][1],m=u==="channelsLast"?s[2][0]:s[3][0],y=u==="channelsLast"?s[2][1]:s[3][1];l={top:h,bottom:f,left:m,right:y,type:h===0&&f===0&&m===0&&y===0?"VALID":"EXPLICIT"},d=ls((e-a+h+f)/n+1,o),c=ls((t-i+m+y)/r+1,o)}else throw Error(`Unknown padding parameter: ${s}`);return{padInfo:l,outHeight:d,outWidth:c}}function jb(s,e,t,n,r,a,i,o,u,l,d){let c,h,f,m;if(s==="valid"&&(s=0),typeof s=="number"){c={top:s,bottom:s,left:s,right:s,front:s,back:s,type:s===0?"VALID":"NUMBER"};const g=Gb([e,t,n,1],[o,u,l],1,[r,a,i],s,d);h=g[0],f=g[1],m=g[2]}else if(s==="same"){h=Math.ceil(e/r),f=Math.ceil(t/a),m=Math.ceil(n/i);const y=(h-1)*r+o-e,g=(f-1)*a+u-t,b=(m-1)*i+l-n,S=Math.floor(y/2),x=y-S,C=Math.floor(g/2),v=g-C,k=Math.floor(b/2),R=b-k;c={top:C,bottom:v,left:k,right:R,front:S,back:x,type:"SAME"}}else throw Error(`Unknown padding parameter: ${s}`);return{padInfo:c,outDepth:h,outHeight:f,outWidth:m}}function ls(s,e){if(!e)return Math.trunc(s);switch(e){case"round":return Math.round(s);case"ceil":return Math.ceil(s);case"floor":return Math.floor(s);default:throw new Error(`Unknown roundingMode ${e}`)}}function ea(s){const[e,t,n]=Ws(s);return e===1&&t===1&&n===1}function Wi(s,e){return ea(s)||ea(e)}function Kt(s){if(s==="NHWC")return"channelsLast";if(s==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${s}`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(s,e){const n={x:ee(s,"x","reshape","string_or_numeric")},r={shape:e};return U.runKernel(pi,n,r)}const Ui=be({reshape_:qb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(s,e){let t=ee(s,"broadcastTo","x");const n=t.shape;if(bs(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const l=t.shape.slice();for(;l.length<e.length;)l.unshift(1);t=Ui(t,l)}const r=t.shape,a=Array.from(e);for(let l=e.length-1;l>=0;l--)if(r[l]===e[l])a[l]=1;else if(t.shape[l]!==1)throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${e}].`);if(a.map((l,d)=>l>1?d:-1).filter(l=>l>=0).length===0)return Bi(t);const o={x:t},u={reps:a};return U.runKernel(gi,o,u)}const Xb=be({broadcastTo_:Kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(s,e,t){bs(s),t=t||ys(e);const n={shape:s,value:e,dtype:t};return U.runKernel(ui,{},n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Us(s,e){const t=s.length,n=[];for(let r=0;r<t;r++){const a=t-1-r,i=s[a]||1;(e[e.length-1-r]||1)>1&&i===1&&n.unshift(a)}return n}function Ve(s,e){const t=Math.max(s.length,e.length),n=new Array(t);for(let r=0;r<t;r++){let a=s[s.length-r-1];a==null&&(a=1);let i=e[e.length-r-1];if(i==null&&(i=1),a===1)n[t-r-1]=i;else if(i===1)n[t-r-1]=a;else if(a!==i){const o=`Operands could not be broadcast together with shapes ${s} and ${e}.`;throw Error(o)}else n[t-r-1]=a}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(s){const t={x:ee(s,"x","zerosLike")};return U.runKernel(yi,t)}const Ue=be({zerosLike_:Qb});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mi(s,e){for(let t=0;t<s.length;++t)if(s[s.length-t-1]!==e-1-t)return!1;return!0}function Jb(s,e,t){const n=s.length+e.length,r=[];let a=0,i=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?r.push(s[a++]):r.push(e[i++]);return r}function rn(s,e){const t=[],n=s.length;for(let a=0;a<n;a++)e.indexOf(a)===-1&&t.push(s[a]);const r=e.map(a=>s[a]);return[t,r]}function Zb(s,e){const t=e.map(n=>1);return Jb(s,t,e)}function yr(s,e,t){A(Mi(e,t),()=>`${s} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function xs(s,e){if(Mi(s,e))return null;const t=[];for(let n=0;n<e;++n)s.indexOf(n)===-1&&t.push(n);return s.forEach(n=>t.push(n)),t}function Gi(s){return s.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function Cs(s,e){const t=[];for(let n=e-s;n<e;++n)t.push(n);return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(s,e){let t=ee(s,"base","pow"),n=ee(e,"exp","pow");[t,n]=Tt(t,n);const r={a:t,b:n};return U.runKernel(hi,r)}const ta=be({pow_:ew});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $t(s,e){if((_e(s)&&e!=="string"||Array.isArray(s))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&_e(s)&&!(s instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return hb(s,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(s){const t={x:ee(s,"x","sqrt","float32")};return U.runKernel(fi,t)}const jt=be({sqrt_:tw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(s){const e=ee(s,"x","square"),t={};return U.runKernel("Square",{x:e},t)}const wt=be({square_:sw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(s,e){A(zn(s),()=>"The f passed in variableGrads(f) must be a function"),A(e==null||Array.isArray(e)&&e.every(l=>l instanceof Vs),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const l in U.registeredVariables)e.push(U.registeredVariables[l])}const n=t?e.filter(l=>!l.trainable):null,r=e.length;e=e.filter(l=>l.trainable),A(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const a=!0,{value:i,grads:o}=U.gradients(s,e,null,a);A(o.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),A(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const u={};return e.forEach((l,d)=>{o[d]!=null&&(u[l.name]=o[d])}),n?.forEach(l=>u[l.name]=null),{value:i,grads:u}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(s,e){let t=ee(s,"a","sub"),n=ee(e,"b","sub");[t,n]=Tt(t,n);const r={a:t,b:n};return U.runKernel(mi,r)}const Ut=be({sub_:rw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(s,e){let t=ee(s,"a","maximum"),n=ee(e,"b","maximum");[t,n]=Tt(t,n),t.dtype==="bool"&&(t=qn(t,"int32"),n=qn(n,"int32")),Ve(t.shape,n.shape);const r={a:t,b:n};return U.runKernel(ci,r)}const iw=be({maximum_:aw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xn(s,e="float32"){if(bs(s),e==="complex64"){const n=Xn(s,"float32"),r=Xn(s,"float32");return db(n,r)}const t=Qe(D(s),e);return U.makeTensor(t,s,e)}function br(s,e,t){const n=e.shape.length,r=n>1?e.shape[n-1]:1,a=t.length;let i=1;for(let c=r;c<a;++c)i*=t[c];const o=r<1?1:r,u=D(e.shape)/o,l=[...me(t.slice(0,r)),1],d=D(t);return{sliceRank:r,numUpdates:u,sliceSize:i,strides:l,outputSize:d}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(s,e,t){const n=uw(s,e,t),r=n<0?-(n+1):n;s.splice(r,0,e)}function uw(s,e,t){return cw(s,e,t||lw)}function lw(s,e){return s>e?1:s<e?-1:0}function cw(s,e,t){let n=0,r=s.length,a=0,i=!1;for(;n<r;){a=n+(r-n>>>1);const o=t(e,s[a]);o>0?n=a+1:(r=a,i=!o)}return i?n:-n-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(s,e,t,n,r){return Hi(s,e,t,n,r,0)}function hw(s,e,t,n,r,a){return Hi(s,e,t,n,r,a,!0)}function Hi(s,e,t,n,r,a,i=!1,o=!1,u=!1){const l=[];for(let g=0;g<e.length;g++)e[g]>r&&l.push({score:e[g],boxIndex:g,suppressBeginIndex:0});l.sort(sa);const d=a>0?-.5/a:0,c=[],h=[];for(;c.length<t&&l.length>0;){const g=l.pop(),{score:b,boxIndex:S,suppressBeginIndex:x}=g;if(b<r)break;let C=!1;for(let v=c.length-1;v>=x;--v){const k=pw(s,S,c[v]);if(k>=n){C=!0;break}if(g.score=g.score*fw(n,d,k),g.score<=r)break}g.suppressBeginIndex=c.length,C||(g.score===b?(c.push(S),h.push(g.score)):g.score>r&&ow(l,g,sa))}const f=c.length,m=t-f;o&&m>0&&(c.push(...new Array(m).fill(0)),h.push(...new Array(m).fill(0)));const y={selectedIndices:c};return i&&(y.selectedScores=h),u&&(y.validOutputs=f),y}function pw(s,e,t){const n=s.subarray(e*4,e*4+4),r=s.subarray(t*4,t*4+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),o=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),l=Math.min(r[0],r[2]),d=Math.min(r[1],r[3]),c=Math.max(r[0],r[2]),h=Math.max(r[1],r[3]),f=(o-a)*(u-i),m=(c-l)*(h-d);if(f<=0||m<=0)return 0;const y=Math.max(a,l),g=Math.max(i,d),b=Math.min(o,c),S=Math.min(u,h),x=Math.max(b-y,0)*Math.max(S-g,0);return x/(f+m-x)}function fw(s,e,t){const n=Math.exp(e*t*t);return t<=s?n:0}function sa(s,e){return s.score-e.score||s.score===e.score&&e.boxIndex-s.boxIndex}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mw=new Map,gw=new Map;class yw{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class pt{constructor(){this.classNameMap={}}static getMap(){return pt.instance==null&&(pt.instance=new pt),pt.instance}static register(e){pt.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function bw(s,e,t){A(s.className!=null,()=>"Class being registered does not have the static className property defined."),A(typeof s.className=="string",()=>"className is required to be a string, but got type "+typeof s.className),A(s.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=s.className);const n=t,r=e+">"+n;return pt.register(s),mw.set(r,s),gw.set(s,r),s}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rt extends yw{minimize(e,t=!1,n){const{value:r,grads:a}=this.computeGradients(e,n);if(n!=null){const i=n.map(o=>({name:o.name,tensor:a[o.name]}));this.applyGradients(i)}else this.applyGradients(a);return Te(a),t?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return nw(e,t)}dispose(){this.iterations_!=null&&Te(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:$t(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Rt,Symbol.hasInstance,{value:s=>s.minimize!=null&&s.computeGradients!=null&&s.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ww extends Rt{static get className(){return"Adadelta"}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n==null&&(this.epsilon=U.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,r)=>{const a=U.registeredVariables[n],i=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${n}/accum_grad`,variable:ae(()=>Ue(a).variable(i))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${n}/accum_var`,variable:ae(()=>Ue(a).variable(i))});const o=Array.isArray(e)?e[r].tensor:e[n];if(o==null)return;const u=this.accumulatedGrads[r].variable,l=this.accumulatedUpdates[r].variable;ae(()=>{const d=Y(q(u,this.rho),q(wt(o),1-this.rho)),c=q(We(jt(Y(l,this.epsilon)),jt(Y(u,this.epsilon))),o),h=Y(q(l,this.rho),q(wt(c),1-this.rho));u.assign(d),l.assign(h);const f=Y(q(c,-this.learningRate),a);a.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Te(this.accumulatedGrads.map(e=>e.variable)),Te(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=e.length/2,n=!1;this.accumulatedGrads=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(n)})),this.accumulatedUpdates=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sw extends Rt{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,r)=>{const a=U.registeredVariables[n];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${n}/accumulator`,variable:ae(()=>Yb(a.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[r].tensor:e[n];if(i==null)return;const o=this.accumulatedGrads[r].variable;ae(()=>{const u=Y(o,wt(i));o.assign(u);const l=Y(q(We(i,jt(Y(u,U.backend.epsilon()))),-this.learningRate),a);a.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Te(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(n=>({originalName:n.name,variable:n.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xw extends Rt{static get className(){return"Adam"}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],ae(()=>{this.accBeta1=$t(t).variable(),this.accBeta2=$t(n).variable()}),r==null&&(this.epsilon=U.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(n=>n.name):Object.keys(e);ae(()=>{const n=Ut(1,this.accBeta1),r=Ut(1,this.accBeta2);t.forEach((a,i)=>{const o=U.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:ae(()=>Ue(o).variable(u))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${a}/v`,variable:ae(()=>Ue(o).variable(u))});const l=Array.isArray(e)?e[i].tensor:e[a];if(l==null)return;const d=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,h=Y(q(d,this.beta1),q(l,1-this.beta1)),f=Y(q(c,this.beta2),q(wt(l),1-this.beta2)),m=We(h,n),y=We(f,r);d.assign(h),c.assign(f);const g=Y(q(We(m,Y(jt(y),this.epsilon)),-this.learningRate),o);o.assign(g)}),this.accBeta1.assign(q(this.accBeta1,this.beta1)),this.accBeta2.assign(q(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Te(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Te(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),ae(()=>{this.accBeta1.assign(ta(this.beta1,this.iterations_+1)),this.accBeta2.assign(ta(this.beta2,this.iterations_+1))});const t=e.length/2,n=!1;this.accumulatedFirstMoment=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(n)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cw extends Rt{static get className(){return"Adamax"}constructor(e,t,n,r=null,a=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],ae(()=>{this.iteration=$t(0).variable(),this.accBeta1=$t(t).variable()}),r==null&&(this.epsilon=U.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(n=>n.name):Object.keys(e);ae(()=>{const n=Ut(1,this.accBeta1),r=We(-this.learningRate,Y(q(this.iteration,this.decay),1));t.forEach((a,i)=>{const o=U.registeredVariables[a],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${a}/m`,variable:Ue(o).variable(u)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${a}/v`,variable:Ue(o).variable(u)});const l=Array.isArray(e)?e[i].tensor:e[a];if(l==null)return;const d=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,h=Y(q(d,this.beta1),q(l,1-this.beta1)),f=q(c,this.beta2),m=Ub(l),y=iw(f,m);d.assign(h),c.assign(y);const g=Y(q(We(r,n),We(h,Y(y,this.epsilon))),o);o.assign(g)}),this.iteration.assign(Y(this.iteration,1)),this.accBeta1.assign(q(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Te(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Te(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ji extends Rt{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,r)=>{const a=Array.isArray(e)?e[r].tensor:e[n];if(a==null)return;const i=U.registeredVariables[n];ae(()=>{const o=Y(q(this.c,a),i);i.assign(o)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=fb($t(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Iw extends ji{static get className(){return"Momentum"}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=$t(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,r)=>{const a=U.registeredVariables[n];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${n}/momentum`,variable:ae(()=>Ue(a).variable(!1))});const i=this.accumulations[r].variable,o=Array.isArray(e)?e[r].tensor:e[n];o!=null&&ae(()=>{let u;const l=Y(q(this.m,i),o);this.useNesterov?u=Y(q(this.c,Y(o,q(l,this.m))),a):u=Y(q(this.c,l),a),i.assign(l),a.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Te(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=!1;this.accumulations=e.map(n=>({originalName:n.name,variable:n.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vw extends Rt{static get className(){return"RMSProp"}constructor(e,t=.9,n=0,r=null,a=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,r==null&&(this.epsilon=U.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,r)=>{const a=U.registeredVariables[n],i=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${n}/rms`,variable:ae(()=>Ue(a).variable(i))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${n}/momentum`,variable:ae(()=>Ue(a).variable(i))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${n}/mg`,variable:ae(()=>Ue(a).variable(i))});const o=Array.isArray(e)?e[r].tensor:e[n];if(o==null)return;const u=this.accumulatedMeanSquares[r].variable,l=this.accumulatedMoments[r].variable;ae(()=>{const d=Y(q(u,this.decay),q(wt(o),1-this.decay));if(this.centered){const c=this.accumulatedMeanGrads[r].variable,h=Y(q(c,this.decay),q(o,1-this.decay)),f=We(q(o,this.learningRate),jt(Ut(d,Y(wt(h),this.epsilon)))),m=Y(q(l,this.momentum),f);u.assign(d),c.assign(h),l.assign(m);const y=Ut(a,m);a.assign(y)}else{const c=Y(q(u,this.decay),q(wt(o),1-this.decay)),h=Y(q(l,this.momentum),We(q(o,this.learningRate),jt(Y(c,this.epsilon))));u.assign(c),l.assign(h);const f=Ut(a,h);a.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Te(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Te(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Te(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,n=!1;this.accumulatedMeanSquares=e.slice(0,t).map(r=>({originalName:r.name,variable:r.tensor.variable(n)})),this.accumulatedMoments=e.slice(t,t*2).map(r=>({originalName:r.name,variable:r.tensor.variable(n)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(r=>({originalName:r.name,variable:r.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nw=[ww,Sw,xw,Cw,Iw,vw,ji];function kw(){for(const s of Nw)bw(s)}function $w(s,e){const t=s.shape.length,n=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(n<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${n}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[n-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[n-1]} vs. ${t}`);if(D(s.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${s.shape}.`);const r=e.shape,a=r[r.length-1];let i=1;for(let c=0;c<r.length-1;++c)i*=r[c];const o=s.shape,u=r.slice();u.pop();let l=1;for(let c=a;c<t;++c)l*=o[c],u.push(o[c]);const d=[...me(s.shape).map(c=>c/l),1].slice(0,a);return[u,i,l,d]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yn=-2,Tw=-1;function Rw(s,e,t){const n=s.shape.length;A(n===e.length,()=>`Error in slice${n}D: Length of begin ${e} must match the rank of the array (${n}).`),A(n===t.length,()=>`Error in slice${n}D: Length of size ${t} must match the rank of the array (${n}).`);for(let r=0;r<n;++r)A(e[r]+t[r]<=s.shape[r],()=>`Error in slice${n}D: begin[${r}] + size[${r}] (${e[r]+t[r]}) would overflow input.shape[${r}] (${s.shape[r]})`)}function Ew(s,e,t){const n=[];for(let r=0;r<s.length;r++)n[r]=Math.ceil((e[r]-s[r])/t[r]);return n}function Pw(s,e,t){let n=t.length;for(let r=0;r<t.length;r++)if(t[r]>1){n=r;break}for(let r=n+1;r<t.length;r++)if(e[r]>0||t[r]!==s[r])return!1;return!0}function Aw(s,e){let t=s.length>0?s[s.length-1]:1;for(let n=0;n<s.length-1;n++)t+=s[n]*e[n];return t}function Dw(s,e,t){let n;const r=s.shape.length;typeof e=="number"?n=[e,...new Array(r-1).fill(0)]:e.length<r?n=e.concat(new Array(r-e.length).fill(0)):n=e.slice(),n.forEach(i=>{A(i!==-1,()=>"slice() does not support negative begin indexing.")});let a;return t==null?a=new Array(r).fill(-1):typeof t=="number"?a=[t,...new Array(r-1).fill(-1)]:t.length<r?a=t.concat(new Array(r-t.length).fill(-1)):a=t,a=a.map((i,o)=>i>=0?i:(A(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${o}.`),s.shape[o]-n[o])),[n,a]}function _w(s,e,t,n,r,a,i,o,u){let l;if(n==null?(l=new Array(e.length),l.fill(1)):l=n,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let d=!1;const c={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:r,endMask:a,ellipsisMask:i,newAxisMask:o,shrinkAxisMask:u};for(let x=0;x<c.dims;x++)d&&(1<<x&o)!==0&&c.numAddAxisAfterEllipsis++,1<<x&i&&(d=!0);d||(c.ellipsisMask|=1<<c.dims,c.dims++);const h={dims:s.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Ow(c,h);let f=!0,m=!0,y=!0;const g=[],b=[];for(let x=0;x<s.length;++x){if(h.strides[x]===0)throw Error(`strides[${x}] must be non-zero`);const C=!!(h.shrinkAxisMask&1<<x),v=s[x];if(v===-1){g.push(C?1:-1);continue}const k=[h.beginMask&1<<x,h.endMask&1<<x],R=[h.strides[x]>0?0:-1,h.strides[x]>0?v:v-1];if(C&&h.strides[x]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&h.strides[x]===1;const _=!!(h.beginMask&1<<x&&h.endMask&1<<x);if(h.beginValid&&h.endValid){if(C){const $=h.begin[x]<0?v+h.begin[x]:h.begin[x];if(h.begin[x]=$,h.end[x]=h.begin[x]+1,$<0||$>=v)throw Error(`slice index ${h.begin[x]} of dimension ${x} out of bounds.`)}else h.begin[x]=na(h.begin[x],0,h.strides[x],v,k,R),h.end[x]=na(h.end[x],1,h.strides[x],v,k,R);const w=h.strides[x]===1&&h.begin[x]===0&&h.end[x]===v;f=f&&w,m=m&&(x===0&&h.strides[x]===1||w)}else f=f&&h.strides[x]===1&&_,m=m&&(x===0&&h.strides[x]===1||_);let I,N=!1;if(h.beginValid&&h.endValid?(I=h.end[x]-h.begin[x],N=!0):C?(I=1,N=!0):_&&v>=0&&(h.strides[x]<0?I=-v:I=v,N=!0),N){let w;I===0||I<0!=h.strides[x]<0?w=0:w=Math.trunc(I/h.strides[x])+(I%h.strides[x]!==0?1:0),g.push(w)}else g.push(-1)}for(let x=0;x<h.finalShapeGatherIndices.length;++x){const C=h.finalShapeGatherIndices[x];C>=0?b.push(g[C]):C===Yn&&b.push(1)}return{finalShapeSparse:b.filter((x,C)=>h.finalShapeGatherIndices[C]!==Yn),finalShape:b,isIdentity:f,sliceDim0:m,isSimpleSlice:y,begin:h.begin,end:h.end,strides:h.strides}}function Ow(s,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=s.begin!=null,e.endValid=s.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let n=0;n<s.dims;n++)if(1<<n&s.ellipsisMask){const r=Math.min(e.dims-(s.dims-n)+1+s.numAddAxisAfterEllipsis,e.dims);for(;t<r;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=n}else if(1<<n&s.newAxisMask)e.finalShapeGatherIndices.push(Yn),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);s.begin!=null&&(e.begin[t]=s.begin[n]),s.end!=null&&(e.end[t]=s.end[n]),e.strides[t]=s.strides[n],s.beginMask&1<<n&&(e.beginMask|=1<<t),s.endMask&1<<n&&(e.endMask|=1<<t),s.shrinkAxisMask&1<<n?(e.finalShapeGatherIndices.push(Tw),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(n)),e.inputShapeGatherIndicesSparse[t]=n,t++}}function na(s,e,t,n,r,a){if(r[e])return t>0?a[e]:a[e+1&1];{const i=s<0?n+s:s;return i<a[0]?a[0]:i>a[1]?a[1]:i}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fw(s,e){const t=s[0].length;s.forEach((r,a)=>{A(r.length===t,()=>`Error in concat${t}D: rank of tensors[${a}] must be the same as the rank of the rest (${t})`)}),A(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const n=s[0];s.forEach((r,a)=>{for(let i=0;i<t;i++)A(i===e||r[i]===n[i],()=>`Error in concat${t}D: Shape of tensors[${a}] (${r}) does not match the shape of the rest (${n}) along the non-concatenated axis ${a}.`)})}function cs(s,e){const t=s[0].slice();for(let n=1;n<s.length;n++)t[e]+=s[n][e];return t}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Be;(function(s){s[s.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",s[s.VALUE_ROWIDS=1]="VALUE_ROWIDS",s[s.ROW_LENGTHS=2]="ROW_LENGTHS",s[s.ROW_SPLITS=3]="ROW_SPLITS",s[s.ROW_LIMITS=4]="ROW_LIMITS",s[s.ROW_STARTS=5]="ROW_STARTS"})(Be||(Be={}));function zw(s,e,t){let n=new Array;if(t==null&&e==null)return n;if(e==null)for(;n.length<s+t.length;)n.push(-1);else n=e.slice();if(t==null)return n;if(s+t.length!==n.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${s+t.length}, but shape.rank = ${n.length}`);for(let r=1;r<t.length;++r){const a=t[r],i=n[n.length-t.length+r],o=n[i];if(a>=0)if(o>=0){if(o!==a)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${r+s}] = ${a} but shape[${r+s}] = ${o}`)}else n[i]=a}return n}function Lw(s){const e={FIRST_DIM_SIZE:Be.FIRST_DIM_SIZE,VALUE_ROWIDS:Be.VALUE_ROWIDS,ROW_LENGTHS:Be.ROW_LENGTHS,ROW_SPLITS:Be.ROW_SPLITS,ROW_LIMITS:Be.ROW_LIMITS,ROW_STARTS:Be.ROW_STARTS},t=[];for(const n of s)if(n in e)t.push(e[n]);else break;return t}function Bw(s){return s.length===0?0:s[0]===Be.FIRST_DIM_SIZE?s.length-1:s.length}function Vw(s,e){if(s==null||e==null)return;const t=s.length,n=e.length;if(t>=n)throw new Error(`defaultValue.shape=${s} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${n})`);for(let r=0;r<Math.min(t,n-1);++r){const a=s[r],i=e[r+1];if(a>=0&&i>=0&&a!==1&&a!==i)throw new Error(`defaultValue.shape=${s}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${r-s.length}] = ${a} but ragged tensor input.flatValues.shape[${r-s.length}] = ${i}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(s,e,t){const n=t*(typeof s=="number"?s:s[0]),r=e*(typeof s=="number"?s:s[1]);return[n,r]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qi(s,e,t,n=!0){let r=[];if(n)r=r.concat(e.slice(0)),r.push(s[0]/t),r=r.concat(s.slice(1));else{r=r.concat(s[0]);const a=e.length;for(let i=0;i<a;++i)r=r.concat([s[i+1]/e[i],e[i]]);r=r.concat(s.slice(a+1))}return r}function Ki(s,e,t=!0){const n=[];if(t){n.push(e);for(let r=e+1;r<s;++r)r<=2*e?(n.push(r),n.push(r-(e+1))):n.push(r)}else{const r=[],a=[];for(let i=1;i<s;++i)i>=e*2+1||i%2===1?a.push(i):r.push(i);n.push(...r),n.push(0),n.push(...a)}return n}function Xi(s,e,t,n=!0){const r=[];n?r.push(s[0]/t):r.push(s[0]*t);for(let a=1;a<s.length;++a)a<=e.length?n?r.push(e[a-1]*s[a]):r.push(s[a]/e[a-1]):r.push(s[a]);return r}function Uw(s,e){const t=[0];for(let n=0;n<e;++n)t.push(s[n][0]);return t}function Mw(s,e,t){const n=s.slice(0,1);for(let r=0;r<t;++r)n.push(s[r+1]-e[r][0]-e[r][1]);return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gw=1.7580993408473768,Hw=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jw=.3275911,qw=.254829592,Kw=-.284496736,Xw=1.421413741,Yw=-1.453152027,Qw=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ra(s,e){if(s.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${s.length}, imag: ${e.length}.`);const t=new Float32Array(s.length*2);for(let n=0;n<t.length;n+=2)t[n]=s[n/2],t[n+1]=e[n/2];return t}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sn="->",Jw=/->/g,aa=",",ia="...";function Zw(s,e){s=s.replace(/\s/g,"");const t=(s.length-s.replace(Jw,"").length)/Sn.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Sn}").`);const[n,r]=s.split(Sn);A(n.indexOf(ia)===-1,()=>`The ellipsis notation ("${ia}") is not supported yet.`);const a=n.split(aa),i=a.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const o=[];for(let h=0;h<r.length;++h){const f=r[h];if(!a.some(m=>m.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);o.indexOf(f)===-1&&o.push(f)}for(let h=0;h<n.length;++h){const f=n[h];o.indexOf(f)===-1&&f!==aa&&o.push(f)}const u=new Array(a.length);for(let h=0;h<i;++h){if(new Set(a[h].split("")).size!==a[h].length)throw new Error(`Found duplicate axes in input component ${a[h]}. Support for duplicate axes in input is not implemented yet.`);u[h]=[];for(let f=0;f<a[h].length;++f)u[h].push(o.indexOf(a[h][f]))}const l=o.length,d=r.length,c=[];for(let h=d;h<l;++h)c.push(h);return{allDims:o,summedDims:c,idDims:u}}function eS(s,e){let t=new Array(s);t.fill(-1);for(let r=0;r<e.length;++r)t[e[r]]=r;const n=[];for(let r=0;r<s;++r)t[r]===-1&&n.push(r);return t=t.filter(r=>r!==-1),{permutationIndices:t,expandDims:n}}function tS(s,e,t){const n=new Array(s);for(let r=0;r<t.length;++r){const a=t[r].shape;for(let i=0;i<e[r].length;++i)n[e[r][i]]===void 0?n[e[r][i]]=a[i]:A(n[e[r][i]]===a[i],()=>`Expected dimension ${n[e[r][i]]} at axis ${i} of input shaped ${JSON.stringify(a)}, but got dimension ${a[i]}`)}}function sS(s,e){const t=s,n=[];let r=0;s.length===0&&t.push(-1),r=s.length+1;for(let i=0;i<r;++i)n.push([]);const a=[];for(let i=0;i<t.length;++i){const o=t[i],u=rS(e,o);for(const l of u)a.indexOf(l)===-1&&(n[i].push(l),a.push(l))}return{path:t,steps:n}}function nS(s){return s.every((e,t)=>e===t)}function rS(s,e){const t=[];for(let n=0;n<s.length;++n)(s[n].length===0||s[n].indexOf(e)!==-1||e===-1)&&t.push(n);return t}function aS(s,e,t=0){let n=[];if(typeof e=="number")A(s.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),n=new Array(e).fill(s.shape[t]/e);else{const r=e.reduce((i,o)=>(o===-1&&(i+=1),i),0);A(r<=1,()=>"There should be only one negative value in split array.");const a=e.indexOf(-1);if(a!==-1){const i=e.reduce((o,u)=>u>0?o+u:o);e[a]=s.shape[t]-i}A(s.shape[t]===e.reduce((i,o)=>i+o),()=>"The sum of sizes must match the size of the axis dimension."),n=e}return n}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iS(s){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${s}`}function oS(s,e){return`indices(${s}, 0) is invalid: ${e} < 0`}function uS(s,e,t){return`indices(${s}, 0) is invalid: ${e} >= ${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lS(s,e){return`only one output dimension may be -1, not both ${s} and ${e}`}function cS(s,e){return`size ${s} must be non-negative, not ${e}`}function dS(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function hS(s,e){const t=D(s),n=D(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${n}. inputShape=${s} outputShape= ${e}`}function pS(s,e){const t=D(s),n=D(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${n}. inputShape=${s} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oa(){return"segment ids must be >= 0"}function fS(){return"segment ids are not increasing"}function mS(s,e){return`Segment id ${s} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function gS(s,e,t){return`Bad: indices[${s}] == ${e} out of range [0, ${t})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yS(s,e,t){const n=[],r=s.length;for(let a=0;a<r;a++)a!==e?n.push(s[a]):n.push(t);return n}function bS(s,e,t,n){const r=e.shape.length,a=s.shape.length;if(n!==0&&(n<-r||n>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${n}`);if(n<0&&(n+=r),n>a)throw new Error(`batchDims (${n}) must be less than rank(x) (
    ${a}).`);if(t<n)throw new Error(`batchDims (${n}) must be less than or equal to axis (${t}).`);for(let c=0;c<n;++c)if(s.shape[c]!==e.shape[c])throw new Error(`x.shape[${c}]: ${s.shape[c]} should be equal to indices.shape[${c}]: ${e.shape[c]}.`);const i=s.shape[t],o=[];let u=1,l=1,d=1;for(let c=0;c<n;++c)o.push(s.shape[c]),u*=s.shape[c];for(let c=n;c<t;c++)o.push(s.shape[c]),l*=s.shape[c];for(let c=n;c<r;c++)o.push(e.shape[c]);for(let c=t+1;c<a;c++)o.push(s.shape[c]),d*=s.shape[c];return{batchSize:u,sliceSize:d,outerSize:l,dimSize:i,outputShape:o}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ms(s){try{return s.map(e=>Gt(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function wS(s){return s.map(e=>bt(e))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */kw();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Re=M();Re.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",()=>15);Re.registerFlag("WEBGPU_CPU_FORWARD",()=>!0);Re.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",()=>-1);Re.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",()=>!0);Re.registerFlag("WEBGPU_USE_LOW_POWER_GPU",()=>!1);Re.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e3);Re.registerFlag("WEBGPU_USE_PROFILE_TOOL",()=>!1);Re.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",()=>!0);Re.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",()=>!1);Re.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",()=>-1);Re.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",()=>!1);Re.registerFlag("WEBGPU_PRINT_SHADER",()=>"");Re.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class SS{constructor(e){e&&(this.vendor=e.vendor,this.architecture=e.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return this.vendor==="intel"}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xS{constructor(e){this.device=e,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(e,t,n=!1,r=!0){let a;const i=ua(e,t);return r?(this.freeBuffers.has(i)||this.freeBuffers.set(i,[]),this.freeBuffers.get(i).length>0?(a=this.freeBuffers.get(i).pop(),this.numFreeBuffers--):(a=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e)):(a=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e),this.usedBuffers.has(i)||this.usedBuffers.set(i,[]),this.usedBuffers.get(i).push(a),this.numUsedBuffers++,this.numBytesUsed+=e,a}releaseBuffer(e,t=!0){if(this.freeBuffers.size===0)return;const n=e.size,r=e.usage,a=ua(n,r),i=this.usedBuffers.get(a),o=i.indexOf(e);if(o<0)throw new Error("Cannot find the buffer in buffer manager");i[o]=i[i.length-1],i.pop(),this.numUsedBuffers--,this.numBytesUsed-=n,t?(this.freeBuffers.get(a).push(e),this.numFreeBuffers++):(e.destroy(),this.numBytesAllocated-=n)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((e,t)=>{e.forEach(n=>{n.destroy()})}),this.usedBuffers.forEach((e,t)=>{e.forEach(n=>{n.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function ua(s,e){return`${s}_${e}`}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class CS{constructor(e){this.device=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(e,t,n,r){const a=ca(n),i=e*t*a,o=la(e,t,n,r);if(this.freeTextures.has(o)||this.freeTextures.set(o,[]),this.usedTextures.has(o)||this.usedTextures.set(o,[]),this.numBytesUsed+=i,this.numUsedTextures++,this.freeTextures.get(o).length>0){this.numFreeTextures--;const l=this.freeTextures.get(o).shift();return this.usedTextures.get(o).push(l),l}this.numBytesAllocated+=i;const u=this.device.createTexture({size:[e,t],format:n,usage:r});return this.usedTextures.get(o).push(u),u}releaseTexture(e){if(this.freeTextures.size===0)return;const t=e.width,n=e.height,r=e.format,a=e.usage,i=la(t,n,r,a);this.freeTextures.has(i)||this.freeTextures.set(i,[]),this.freeTextures.get(i).push(e),this.numFreeTextures++,this.numUsedTextures--;const o=this.usedTextures.get(i),u=o.indexOf(e);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");o.splice(u,1);const l=ca(r),d=t*n*l;this.numBytesUsed-=d}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((e,t)=>{e.forEach(n=>{n.destroy()})}),this.usedTextures.forEach((e,t)=>{e.forEach(n=>{n.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function la(s,e,t,n){return`${s}_${e}_${t}_${n}`}function ca(s){if(s==="rgba8unorm")return 16;throw new Error(`${s} is not supported!`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IS(s,e){if(Math.max(...s)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const t=s.length,n="xyzwuv",r=s.map(i=>`${e}.${n[i]}`),a=new Array(t-1);a[t-2]=r[t-1];for(let i=t-3;i>=0;--i)a[i]=`(${a[i+1]} * ${r[i+1]})`;return a}const ot=(s,e,t)=>t==="int32"?`atomicAdd(${s}, bitcast<i32>(${e}));`:`
          {
            var oldValue = 0;
            loop {
              let newValueF32 = bitcast<f32>(oldValue) + (${e});
              let newValue = bitcast<i32>(newValueF32);
              let res = atomicCompareExchangeWeak(${s}, oldValue, newValue);
              if res.exchanged {
                break;
              }
              oldValue = res.old_value;
            }
          }`;/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qt;(function(s){s[s.FROM_PIXELS=0]="FROM_PIXELS",s[s.DRAW=1]="DRAW"})(qt||(qt={}));const vS=(s,e,t,n,r)=>{const a={dtype:n.dtype,shape:n.shape},i=kS(t,a,e),o=s.createShaderModule({code:i,label:e.constructor.name});let u=M().get("WEBGPU_PRINT_SHADER");if(u!==""){u=u.toLowerCase();const l=u.split(",");(u==="all"||l.some(d=>e.shaderKey.toLowerCase().includes(d)))&&(console.group(e.shaderKey),console.debug(i),console.groupEnd())}return r?s.createComputePipelineAsync({compute:{module:o,entryPoint:"_start"},label:e.constructor.name,layout:"auto"}):s.createComputePipeline({compute:{module:o,entryPoint:"_start"},label:e.constructor.name,layout:"auto"})},G=(s,e="f32")=>{switch(s){case 1:return`${e}`;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${s}-component ${e} is not supported.`)}};function se(s){if(s<=1)return"i32";if(s===2)return"vec2<i32>";if(s===3)return"vec3<i32>";if(s===4)return"vec4<i32>";if(s===5)return"vec5";if(s===6)return"vec6";throw Error(`GPU for rank ${s} is not yet supported`)}function Ye(s){if(s===0)return"x";if(s===1)return"y";if(s===2)return"z";if(s===3)return"w";if(s===4)return"u";if(s===5)return"v";throw Error(`Index ${s} is not yet supported`)}function E(...s){let e;switch(s.length){case 0:e=`
        fn main()
      `;break;case 1:e=`
        fn main(${s[0]} : i32)
      `;break;default:throw Error("Unreachable")}return e}function da(s,e){let t;return t=`
     ${NS(e)}
      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,
                @builtin(global_invocation_id) GlobalId : vec3<u32>,
                @builtin(local_invocation_index) LocalIndex: u32,
                @builtin(workgroup_id) WorkgroupId : vec3<u32>,
                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {
        localId = LocalId;
        localIndex = LocalIndex;
        globalId = GlobalId;
        numWorkgroups = NumWorkgroups;
        workgroupId = WorkgroupId;
        ${s?"main(getGlobalIndex());":"main();"};
      }
    `,t}function NS(s){return`
  @compute @workgroup_size(${s.workgroupSize[0]}, ${s.workgroupSize[1]}, ${s.workgroupSize[2]})
`}function kS(s,e,t){const n=[],r=t.workgroupSize[0]*t.workgroupSize[1]*t.workgroupSize[2];if(t.outputComponent=t.outputComponent?t.outputComponent:1,n.push(`

      var<private> localId: vec3<u32>;
      var<private> localIndex: u32;
      var<private> globalId: vec3<u32>;
      var<private> numWorkgroups: vec3<u32>;
      var<private> workgroupId: vec3<u32>;

      // Only used when the y/z dimension of workgroup size is 1.
      fn getGlobalIndex() -> i32 {
        ${Yi(t)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +
                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${r}u +
                localIndex);
        `}
      }
    `),t.pixelsOpType!=null){const m=t.pixelsOpType===qt.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${ft(e.dtype,t.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${ft(s[0].dtype,t.outputComponent)}>;`,y=e.shape.length===3?"vec2<i32>":"i32";n.push(`
        struct Uniform {
          outShapeStrides : ${y},
          size            : i32,
          numChannels     : i32,
          alpha           : f32,
        };

        ${m}
        @group(0) @binding(2) var<uniform> uniforms: Uniform;
      `);const g=pa(t);return[ha,n.join(`
`),Ps(e.shape),t.getUserCode(),da(g,t)].join(`
`)}let a,i,o="struct Uniforms { NAN : f32, INFINITY : f32, ";t.variableNames.forEach((m,y)=>{const g=se(s[y].shape.length);o+=`${m.charAt(0).toLowerCase()+m.slice(1)}Shape : ${g}, `,a=s[y].shape.length-1,i=se(a),o+=`${m.charAt(0).toLowerCase()+m.slice(1)}ShapeStrides: ${i}, `});const u=se(e.shape.length);o+=`outShape : ${u}, `,a=e.shape.length-1,i=se(a),o+=`
         outShapeStrides: ${i}, `,t.size&&(o+="size : i32, "),t.uniforms&&(o+=t.uniforms),o+="};",o=OS(o),n.push(o),t.atomic?n.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;
    `):n.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<${ft(e.dtype,t.outputComponent)}>;
    `),t.variableNames.forEach((m,y)=>{n.push(`
      @group(0) @binding(${1+y}) var<storage, read> ${m}: array<${t.variableComponents?ft(s[y].dtype,t.variableComponents[y]):ft(s[y].dtype,t.outputComponent)}>;
        `)}),o!==""&&n.push(`
      @group(0) @binding(${1+t.variableNames.length}) var<uniform> uniforms: Uniforms;
      `);const l=AS(e.shape,t.dispatchLayout),d=[ha,n.join(`
`)+TS,Ps(e.shape),l,DS(e.shape.length)];t.atomic||d.push(_S(e.shape,e.dtype,t.outputComponent)),t.variableNames.forEach((m,y)=>{d.push(`${Ps(s[y].shape,m)}`)});const c=s.map((m,y)=>PS(m,e.shape,t.variableComponents?t.variableComponents[y]:t.outputComponent,t.dispatchLayout.x.length===e.shape.length)).join(`
`);d.push(c),d.push(t.getUserCode());const h=pa(t);return d.push(da(h,t)),d.join(`
`)}function $S(s,e,t){let n=s.shaderKey;if(s.pixelsOpType!=null)return n;const r=[],a=[];e.forEach(d=>{r.push(d.shape),a.push(d.dtype)}),r.push(t.shape),a.push(t.dtype);const i=e.map(d=>Us(d.shape,t.shape)),o=e.map(d=>Je(d.shape,t.shape)).join("_"),u=i.map(d=>d.join("_")).join(";"),l=Yi(s)?"flatDispatch":"";return n+="_"+(s.workgroupSize?s.workgroupSize.join(","):"")+r.map(d=>d.length).join(",")+a.join(",")+s.variableNames.join(",")+u+o+l,n}const ha=`
  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};
  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};

  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }
  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {
    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;
  }
  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {
    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);
    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);
  }
`,TS=`
  fn isinf(val: f32) -> bool {
    return abs(val) == uniforms.INFINITY;
  }
`;function Ps(s,e=""){const t=s.length,n=e!==""?`get${e.charAt(0).toUpperCase()+e.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",r=e!==""?`${e.charAt(0).toLowerCase()+e.slice(1)}ShapeStrides`:"outShapeStrides";if(t<=1)return`fn ${n}(index : i32) -> i32 { return index; }`;const a=me(s),i=se(t),o=[];for(let l=0;l<t;l++)o.push(`d${l}`);if(a.length===1)return`    fn ${n}(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.${r}; let d1 = index - d0 * uniforms.${r};
      return vec2<i32>(d0, d1);
    }`;let u;return u="var index2 = index;"+a.map((l,d)=>{const c=`let ${o[d]} = index2 / uniforms.${r}.${Ye(d)}`,h=d===a.length-1?`let ${o[d+1]} = index2 - ${o[d]} * uniforms.${r}.${Ye(d)}`:`index2 = index2 - ${o[d]} * uniforms.${r}.${Ye(d)}`;return`${c}; ${h};`}).join(""),`
    fn ${n}(index : i32) -> ${i} {
      ${u}
      return ${i}(${o.join(",")});
    }
  `}function RS(s,e){const t=s.name,n=s.shape.length,r=se(n),a="get"+t.charAt(0).toUpperCase()+t.slice(1),i=["d0","d1","d2","d3","d4","d5"].slice(0,n),o=i.map(d=>`${d} : i32`).join(", ");if(n<1)return`
      fn ${a}() -> ${G(e)} {
        return ${G(e)}(${t}[0]);
      }
    `;const u=`uniforms.${t.charAt(0).toLowerCase()+t.slice(1)}Shape`;let l=`${n}D`;return n===0&&(l="1D"),`
    fn ${a}(${o}) -> ${G(e)} {
      return ${G(e)}(${t}[getIndexFromCoords${l}(${r}(${i.join(",")}),
        ${u})${e===1?"":` / ${e}`}]);
    }
   `}function ES(s,e,t,n){const r=s.name,a=r.charAt(0).toUpperCase()+r.slice(1),i="get"+a+"ByOutput",o=s.shape.length,u=e.length,l=se(u);if(Je(s.shape,e)&&n)return`
    fn ${i}Index(globalIndex : i32) -> ${G(t)} {
      return ${G(t)}(${r}[globalIndex]);
    }

    fn ${i}Coords(coords : ${l}) -> ${G(t)} {
      return ${G(t)}(${r}[${u>1?"getOutputIndexFromCoords(coords)":"coords"}${t===1?"":` / ${t}`}]);
    }
    `;const d=Us(s.shape,e),c=u-o;let h="";if(o===0)return`
    fn ${i}Index(globalIndex : i32) -> ${G(t)}{
      return get${a}();
    }

    fn ${i}Coords(coords : ${l}) -> ${G(t)}{
      return get${a}();
    }
  `;u<2&&d.length>=1?h="coords = 0;":h=d.map(g=>`coords.${Ye(g+c)} = 0;`).join(`
`);let f="";if(u<2&&o>0)f="coords";else if(u>1){const g=se(o),b=s.shape.map((S,x)=>`coords.${Ye(x+c)}`).join(", ");f=`${g}(${b})`}else f="coords";const m=`uniforms.${r.charAt(0).toLowerCase()+r.slice(1)}Shape`,y=`${o}D`;return`
  fn ${i}Index(globalIndex : i32) -> ${G(t)} {
    var coords = getCoordsFromIndex(globalIndex);
    ${h}
    return ${G(t)}(${r}[getIndexFromCoords${y}(${f}, ${m})${t===1?"":` / ${t}`}]);
  }

  fn ${i}Coords(coordsIn : ${l}) -> ${G(t)} {
    var coords = coordsIn;
    ${h}
    return ${G(t)}(${r}[getIndexFromCoords${y}(${f}, ${m})${t===1?"":` / ${t}`}]);
  }
`}function PS(s,e,t,n){let r=RS(s,t);return s.shape.length<=e.length&&(r+=ES(s,e,t,n)),r}function AS(s,e){const{x:t,y:n=[],z:r=[]}=e,a=s.length,i=t.length+n.length+r.length;if(i!==a)return"";if(t.length===a)return`fn getOutputCoords() -> ${se(a)}{
    let globalIndex = getGlobalIndex();
    return getCoordsFromIndex(globalIndex);
  }
  `;let o="";const u=[t,n,r];for(let h=0;h<u.length;h++){const f=u[h];if(f.length!==0)if(f.length===1)o+=`let d${f[0]} = i32(globalId[${h}]);`;else{const m=IS(f,"uniforms.outShape");o+=`var index${h} = i32(globalId[${h}]);`;for(let y=0;y<m.length;y++)o+=`let d${f[y]} = index${h} / ${m[y]};`,y===m.length-1?o+=`let d${f[y+1]} = index${h} - d${f[y]} * ${m[y]};`:o+=`index${h} = index${h} - d${f[y]} * ${m[y]};`}}const l=[];for(let h=0;h<i;h++)l.push(`d${h}`);const d=se(i);let c=`fn getOutputCoords() -> ${d} {
  ${o}
`;return l.length===0?c+=`return ${d}(0); }`:c+=`return ${d}(${l.join(",")}); }`,c}function DS(s){let e="";switch(s){case 0:case 1:e+=`
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;break;case 2:e+=`
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;break;case 3:e+=`
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;break;case 4:e+=`
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;break;case 5:e+=`
        fn getOutputIndexFromCoords(coords : vec5) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u;
        }
        `;break;case 6:e+=`
        fn getOutputIndexFromCoords(coords : vec6) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u * uniforms.outShapeStrides.u +
              coords.v;
        }
        `;break;default:A(!1,()=>`Unsupported ${s}D shape`);break}return e}function Yi(s){return s.dispatch[1]===1&&s.dispatch[2]===1}function ft(s,e=1){if(s==="float32")return G(e,"f32");if(s==="int32"||s==="bool")return G(e,"i32");throw new Error(`type ${s} is not supported.`)}function _S(s,e,t){const n=s.length,r=ft(e,t);let a=`fn setOutputAtIndex(flatIndex : i32, value : ${G(t)}) {
      result[flatIndex] = ${r}(value);
    }

    fn setOutputAtIndexI32(flatIndex : i32, value : ${G(t,"i32")}) {
      result[flatIndex] = ${r}(value);
    }
    `;if(n>=2){const i=["d0","d1","d2","d3","d4","d5"].slice(0,n),o=se(n);a+=`
      fn setOutputAtCoords(${i.map(u=>`${u} : i32`).join(", ")}, value : ${G(t)}) {
        let flatIndex = getOutputIndexFromCoords(${o}(${i.join(", ")}));
        setOutputAtIndex(flatIndex${t===1?"":` / ${t}`}, value);
      }
      fn setOutputAtCoordsI32(${i.map(u=>`${u} : i32`).join(", ")}, value : ${G(t,"i32")}) {
        let flatIndex = getOutputIndexFromCoords(${o}(${i.join(", ")}));
        setOutputAtIndexI32(flatIndex${t===1?"":` / ${t}`}, value);
      }
    `}return a}function OS(s){const e=/(\w+)\s*:\s*vec(5|6)/g;s=s.replace(e,n=>"@align(16) "+n);const t=/vec(5|6)\s*,\s*(\w+)/g;return s=s.replace(t,(n,r,a)=>`vec${r}, @align(16) ${a}`),s}function pa(s){return!(s.dispatchLayout.hasOwnProperty("y")&&s.dispatchLayout.y.length!==0||s.dispatchLayout.hasOwnProperty("z")&&s.dispatchLayout.z.length!==0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const St=s=>{let e=1;for(let t=0;t<s.length;t++)e*=s[t];return e};function P(s,e,t=[1,1,1],n=[1,1,1]){const[r,a,i]=[Math.ceil(St(s.x.map(o=>e[o]))/(t[0]*n[0])),s.y?Math.ceil(St(s.y.map(o=>e[o]))/(t[1]*n[1])):1,s.z?Math.ceil(St(s.z.map(o=>e[o]))/(t[2]*n[2])):1];return[r,a,i]}function FS(s,e,t,n=!1){const r=[8,8,1],a=[4,4,1];return n||(s<=8&&(a[1]=1),e<=16&&t<=16&&(r[0]=4)),{workgroupSize:r,elementsPerThread:a}}function Qi(s,e,t=!1){if(t)return[8,8,1];const n=St(s.x.map(a=>e[a])),r=St(s.y.map(a=>e[a]));return n<=4?[4,16,1]:r<=4?[16,4,1]:[16,16,1]}function Ji(s,e,t=!1){if(t)return[4,4,1];const n=St(s.x.map(a=>e[a])),r=St(s.y.map(a=>e[a]));return n<=4?[1,2,1]:r<=4?[2,1,1]:[2,2,1]}function O(s){return{x:s.map((e,t)=>t)}}function fa(s){if(s==="float32"||s==="int32"||s==="bool"||s==="string")return 4;if(s==="complex64")return 8;throw new Error(`Unknown dtype ${s}`)}function Zi(){return!!(typeof globalThis<"u"&&globalThis.navigator&&globalThis.navigator.gpu)}function eo(s,e){Array.isArray(s)||(s=[s]),s.forEach(t=>{t!=null&&A(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGPU backend.`)})}var ze;(function(s){s[s.MatMulReduceProgram=0]="MatMulReduceProgram",s[s.MatMulSplitKProgram=1]="MatMulSplitKProgram",s[s.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",s[s.MatMulPackedProgram=3]="MatMulPackedProgram",s[s.MatMulMax=4]="MatMulMax"})(ze||(ze={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zS=M().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),LS=(s,e)=>{const t=s.limits.maxComputeWorkgroupsPerDimension,n=e.dispatchLayout,r=e.dispatch;if(r.every(i=>i<=t))return r;A(r[0]>t&&n.y===void 0&&n.z===void 0,()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension.");let a=Math.ceil(Math.sqrt(r[0]));return a>t?(a=Math.ceil(Math.cbrt(r[0])),A(a<=t,()=>"Total dispatch size exceeds WebGPU maximum."),[a,a,a]):[a,a,1]};class an extends Za{nextDataId(){return an.nextDataId++}constructor(e,t){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!Zi())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=e,this.queue=e.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new SS(t),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new xS(this.device),this.textureManager=new CS(this.device),this.tensorMap=new Ff(this,bn()),M().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:e,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(e,t=!1){if(!this.tensorMap.has(e))return!0;const n=this.tensorMap.get(e);return t?n.refCount=0:n.refCount--,n.refCount>0?!1:(n.complexTensorInfos!=null&&(this.disposeData(n.complexTensorInfos.real.dataId),this.disposeData(n.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(e)?(this.tensorDataPendingDisposal.push(e),!0):(this.releaseResource(e),this.tensorMap.delete(e),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(e){const t=this.tensorMap.get(e);if(!(!t||!t.resource)){if(t.external){t.resource=null;return}t.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(t.resource):t.resource instanceof GPUTexture&&this.textureManager.releaseTexture(t.resource),t.resource=null}}refCount(e){return this.tensorMap.has(e)?this.tensorMap.get(e).refCount:0}incRef(e){const t=this.tensorMap.get(e);t.refCount++}decRef(e){if(this.tensorMap.has(e)){const t=this.tensorMap.get(e);t.refCount--}}write(e,t,n){if(n==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.tensorMap.set(r,{dtype:n,shape:t,values:e,refCount:1}),r}move(e,t,n,r,a){if(r==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(e,{dtype:r,shape:n,values:t,refCount:a})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(e=>{this.releaseResource(e),this.tensorMap.delete(e)}),this.uniformPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e)),this.stagingPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let e;try{e=await Promise.all(Object.values(this.pipelineCache))}catch(t){throw new Error(t.message)}Object.keys(this.pipelineCache).map((t,n)=>{this.pipelineCache[t]=e[n]})}async getBufferData(e){if(M().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const t=e.size,n=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,n,0,t),this.submitQueue(),await n.mapAsync(GPUMapMode.READ);const r=n.getMappedRange().slice(0);return n.unmap(),n!=null&&this.bufferManager.releaseBuffer(n),M().getBool("WEBGPU_USE_PROFILE_TOOL")&&(A(this.dummyContext!==void 0,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),r}convertAndCacheOnCPU(e,t){const n=this.tensorMap.get(e);return n.values=t,n.values}readSync(e){const t=this.tensorMap.get(e),{values:n,complexTensorInfos:r}=t;if(n!=null||t.dtype==="string")return n;if(t.dtype==="complex64"){const y=this.readSync(r.real.dataId),g=this.readSync(r.imag.dataId),b=pn(ra(y,g).buffer,"float32");return this.convertAndCacheOnCPU(e,b),b}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const a=["opaque","premultiplied"],i=t.resource,o=i.size;A(o%4===0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");const u=o/4,l=new ArrayBuffer(o),d=256,c=256,h=a.map(y=>new OffscreenCanvas(d,c)),f=new OffscreenCanvas(d,c);this.endComputePassEncoder(),h.map((y,g)=>{const b=y.getContext("webgpu");return b.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:a[g]}),b.getCurrentTexture()}).map((y,g)=>{const b=d*4,S=(_,I,N)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:i,bytesPerRow:b,offset:N},{texture:y},{width:_,height:I}),this.submitQueue();const w=f.getContext("2d",{willReadFrequently:!0});w.clearRect(0,0,_,I),w.drawImage(h[g],0,0);const $=w.getImageData(0,0,_,I).data,L=a[g],V=new Uint8ClampedArray(l,N,_*I*4);for(let W=0;W<V.length;W+=4)if(L==="premultiplied")V[W+3]=$[W+3];else{const H=$[W];V[W]=$[W+2],V[W+1]=$[W+1],V[W+2]=H}},x=Math.floor(u/(d*c));let C=d,v=c,k=0;for(let _=0;_<x;_++)S(C,v,k),k+=d*c*4;const R=u%(d*c);v=Math.floor(R/d),v>0&&(S(C,v,k),k+=v*(d*4)),C=R%d,C>0&&S(C,1,k)});const m=pn(l,t.dtype);return this.convertAndCacheOnCPU(e,m),m}async read(e){if(!this.tensorMap.has(e))throw new Error(`Tensor ${e} was not registered!`);const t=this.tensorMap.get(e),{values:n}=t;if(n!=null)return n;let r;if(t.dtype==="complex64"){const a=await Promise.all([this.read(t.complexTensorInfos.real.dataId),this.read(t.complexTensorInfos.imag.dataId)]),i=a[0],o=a[1];r=ra(i,o)}else{const a=await this.getBufferData(t.resource);r=pn(a,t.dtype)}return this.convertAndCacheOnCPU(e,r),r}copyBuffer(e){const t=e.size,n=e.usage,r=this.bufferManager.acquireBuffer(t,n);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,r,0,t),this.submitQueue(),r}createTensorFromGPUData(e,t,n){let r=e.buffer;if(n==="complex64")throw new Error("Cannot write to a complex64 dtype. ");const a={id:this.nextDataId()};this.tensorMap.set(a,{dtype:n,shape:t,values:null,refCount:1,external:e.zeroCopy});const i=this.tensorMap.get(a),o=fa(i.dtype)*D(i.shape);if(e.buffer.size<o)throw new Error(`GPUBuffer size(${e.buffer.size}) is smaller than tensor size(${o})!`);if((e.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return e.zeroCopy!==!0&&(r=this.copyBuffer(r)),i.resource=r,bn().makeTensorFromDataId(a,t,n,this)}readToGPU(e){const t=this.tensorMap.get(e),{values:n,dtype:r,shape:a,resource:i}=t;if(r==="complex64")throw new Error("Does not support reading buffer for complex64 dtype.");if(i==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const o=i,u=o.size,l=o.usage,d=this.bufferManager.acquireBuffer(u,l);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(i,0,d,0,u),this.submitQueue();const c=this.makeTensorInfo(a,r),h=bn().makeTensorFromTensorInfo(c),f=this.tensorMap.get(c.dataId);return f.resource=d,{tensorRef:h,buffer:d}}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const n=t.map(r=>Gt(r));return de(e.shape,e.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return de(e.shape,e.dtype,t)}async time(e){!this.supportTimestampQuery&&!this.hasTimestampQueryWarned&&(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const t=this.activeTimers,n=[];let r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();const a=vt(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=vt(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=t,r&&(this.programTimersStack=null);const o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},u=await Promise.all(a);return o.kernelMs=zf(u),o.getExtraProfileInfo=()=>u.map((l,d)=>({name:i[d],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,o}makeTensorInfo(e,t,n){return t==="string"&&n!=null&&n.length>0&&Zs(n[0])&&(n=n.map(a=>bt(a))),{dataId:this.write(n,e,t),shape:e,dtype:t}}tensorToBinding(e){if(!e)return null;const n=this.tensorMap.get(e.dataId).resource;return n instanceof GPUBuffer?{buffer:n}:n instanceof GPUTexture?n.createView():n}uploadToGPU(e){const t=this.tensorMap.get(e);if(t.resource!=null)return;const n=fa(t.dtype)*D(t.shape);let r;const a=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(t.values){if(r=this.bufferManager.acquireBuffer(n,a,!0),r.mapState==="unmapped"){const i=this.bufferManager.acquireBuffer(n,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),o=i.getMappedRange();t.dtype==="int32"||t.dtype==="bool"?new Int32Array(o).set(t.values):new Float32Array(o).set(t.values),i.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(i,0,r,0,n),this.stagingPendingDisposal.push(i)}else{const i=r.getMappedRange();t.dtype==="int32"||t.dtype==="bool"?new Int32Array(i).set(t.values):new Float32Array(i).set(t.values),r.unmap()}t.values=null}else r=this.bufferManager.acquireBuffer(n,a);t.resource=r}makeUniforms(e){let t=0,n=0;const r=[];let a=1;e.forEach(u=>{u.data.length===0&&(u.data=[1]);let l;switch(u.data.length){case 1:l=4;break;case 2:l=8;break;case 3:l=16;break;case 4:l=16;break;case 5:l=16;break;case 6:l=16;break;default:A(!1,()=>`Unsupported ${u.data.length}D shape`)}(n===5||n===6)&&(l=16),l>a&&(a=l),t=Math.ceil(t/l)*l,n=u.data.length,r.push(t),t+=u.data.length*4}),t=Math.ceil(t/a)*a;const i=new ArrayBuffer(t);e.forEach((u,l)=>{const d=r[l];u.type==="int32"?new Int32Array(i,d,u.data.length).set(u.data):u.type==="uint32"?new Uint32Array(i,d,u.data.length).set(u.data):new Float32Array(i,d,u.data.length).set(u.data)});const o=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(o,0,i,0,t),this.uniformPendingDisposal.push(o),{offset:0,size:t,buffer:o}}runWebGPUProgram(e,t,n,r,a){if(a||(a=this.makeTensorInfo(e.outputShape,n)),D(a.shape)===0)return this.tensorMap.get(a.dataId).values=It(a.dtype,0),a;this.uploadToGPU(a.dataId),e.dispatch=LS(this.device,e);const i=t.map((u,l)=>{if(u.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(u.dataId),{dtype:this.tensorMap.get(u.dataId).dtype,shape:u.shape,name:e.variableNames[l]}});e.shaderKey=$S(e,i,a);const o=M().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return e.shaderKey in this.pipelineCache||(this.pipelineCache[e.shaderKey]=vS(this.device,e,i,a,o)),e.pipeline=this.pipelineCache[e.shaderKey],o||this.recordAndSubmit(e,a,t,r),a}recordAndSubmit(e,t,n,r){if(e.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let a=[],i=[];const o="int32";if(e.pixelsOpType==null){a.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),i=n.concat(t).map(f=>f.shape);const h="int32";i.map(f=>{a.push({type:h,data:f});const m=me(f);a.push({type:h,data:m})})}else{const h=me(t.shape);a.push({type:o,data:h})}if(e.size){const h=D(e.outputShape);a.push({type:o,data:[e.outputComponent?h/e.outputComponent:h]})}r&&(a=[...a,...r]);const u=[this.tensorToBinding(t),...n.map(h=>this.tensorToBinding(h)),this.makeUniforms(a)];n.forEach(h=>{this.commandQueueOwnedIds.add(h.dataId)}),this.commandQueueOwnedIds.add(t.dataId);const l=this.device.createBindGroup({layout:e.pipeline.getBindGroupLayout(0),entries:u.map((h,f)=>({binding:f,resource:h}))}),d=this.activeTimers!=null;this.ensureCommandEncoderReady();const c={};d&&this.supportTimestampQuery?(this.endComputePassEncoder(),this.querySet==null&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),c.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(c)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(c)),this.computePassEncoder.setPipeline(e.pipeline),this.computePassEncoder.setBindGroup(0,l),this.computePassEncoder.dispatchWorkgroups(e.dispatch[0],e.dispatch[1],e.dispatch[2]),this.dispatchCountInPass++,(d||M().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||e.pixelsOpType===qt.DRAW)&&(this.endComputePassEncoder(),d?this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;this.queryResolveBuffer==null&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const e=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.querySetCount*8),this.submitQueue(),await e.mapAsync(GPUMapMode.READ);const t=new BigUint64Array(e.getMappedRange()),n=Number(t[1]-t[0])/1e6;return e.unmap(),this.bufferManager.releaseBuffer(e),n}shouldExecuteOnCPU(e,t=zS){return M().getBool("WEBGPU_CPU_FORWARD")&&e.every(n=>this.tensorMap.get(n.dataId).resource==null&&D(n.shape)<t)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(this.querySet!=null&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}an.nextDataId=0;/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Zi()&&mb("webgpu",async()=>{const s={powerPreference:M().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},e=await navigator.gpu.requestAdapter(s),t={},n=[];e.features.has("timestamp-query")&&n.push("timestamp-query"),e.features.has("bgra8unorm-storage")&&n.push(["bgra8unorm-storage"]),t.requiredFeatures=n;const r=e.limits;t.requiredLimits={maxComputeWorkgroupStorageSize:r.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.maxStorageBufferBindingSize,maxBufferSize:r.maxBufferSize,maxComputeWorkgroupSizeX:r.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:r.maxComputeInvocationsPerWorkgroup};const a=await e.requestDevice(t),i="info"in e?e.info:"requestAdapterInfo"in e?await e.requestAdapterInfo():void 0;return new an(a,i)},3);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var B;(function(s){s[s.ADD=0]="ADD",s[s.ATAN2=1]="ATAN2",s[s.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",s[s.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",s[s.DIV=4]="DIV",s[s.ELU_DER=5]="ELU_DER",s[s.EQUAL=6]="EQUAL",s[s.FLOOR_DIV=7]="FLOOR_DIV",s[s.GREATER=8]="GREATER",s[s.GREATER_EQUAL=9]="GREATER_EQUAL",s[s.LESS=10]="LESS",s[s.LESS_EQUAL=11]="LESS_EQUAL",s[s.LOGICAL_AND=12]="LOGICAL_AND",s[s.LOGICAL_OR=13]="LOGICAL_OR",s[s.MAX=14]="MAX",s[s.MIN=15]="MIN",s[s.MOD=16]="MOD",s[s.MUL=17]="MUL",s[s.NOT_EQUAL=18]="NOT_EQUAL",s[s.POW=19]="POW",s[s.PRELU=20]="PRELU",s[s.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",s[s.SUB=22]="SUB"})(B||(B={}));const BS="let resultTemp = a + b;",VS="let resultTemp = atan2(a, b);",WS="let resultTemp = areal * breal - aimag * bimag;",US="let resultTemp = areal * bimag + aimag * breal;",MS="let resultTemp = a / b;",GS="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",HS=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a == b);
`,jS=`
  let remainder =
      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));
  let quotient = (a - remainder) / b;
  let resultTemp =
      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));
`,qS=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a > b);
`,KS=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a >= b);
`,XS=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a < b);
`,YS=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a <= b);
`,QS="return f32(a >= 1.0 && b >= 1.0);",JS=`return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`,ZS="return f32(a >= 1.0 || b >= 1.0);",e0=`return min(vec4<f32>(a >= vec4<f32>(1.0)) +
  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));`,t0="let resultTemp = max(a, b);",s0="let resultTemp = min(a, b);",n0=`
  let isNaN = b == 0.;
  var resultTemp = a % b;
  resultTemp = select((resultTemp + b) % b, resultTemp,
      (a < 0. && b < 0.) || (a >= 0. && b > 0.));
`,r0=`
  let isNaN = !vec4<bool>(b);
  var resultTemp = vec4<f32>(a % b);
  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {
    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];
  }
  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {
    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];
  }
  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {
    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];
  }
  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {
    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];
  }
`,a0="let resultTemp = a * b;",i0=`
  var resultTemp = f32(a != b);
  let valueForNaN = 1.0;
`,o0=`
  var resultTemp = vec4<f32>(a != b);
  let valueForNaN = 1.0;
`,u0=`
  let isNaN = a < 0.0 && floor(b) < b;
  if (b == 0.0) {
    return 1.0;
  }
  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),
      round(abs(b) % 2.0) != 1.0);
`,l0=`
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);
`,c0="if (a < 0.0) { return b * a; }  return a;",d0=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,h0="let resultTemp = (a - b) * (a - b);",p0="let resultTemp = a - b;";function wr(s,e){let t;do{switch(s){case B.ATAN2:t=VS;break;case B.MAX:t=t0;break;case B.MIN:t=s0;break;case B.MOD:t=e?r0:n0;break;case B.NOT_EQUAL:t=e?o0:i0;break;case B.POW:t=e?l0:u0;break;default:continue}let n,r,a;return e?(n="isnanVec4",r="vec4<f32>",a="vec4<bool>"):(n="isnan",r="f32",a="bool"),`
      let aIsNaN = ${n}(a);
      let aPostLegalization = select(a, ${r}(42), aIsNaN);
      let bIsNaN = ${n}(b);
      let bPostLegalization = select(b, ${r}(42), bIsNaN);
      let isNaN = false;
      let valueForNaN = uniforms.NAN;
      {
        let a = aPostLegalization;
        let b = bPostLegalization;
        ${t}
        return select(
            resultTemp, ${r}(valueForNaN),
            ${a}(isNaN) | aIsNaN | bIsNaN);
      }
    `}while(!1);switch(s){case B.ADD:t=BS;break;case B.COMPLEX_MULTIPLY_IMAG:t=US;break;case B.COMPLEX_MULTIPLY_REAL:t=WS;break;case B.DIV:t=MS;break;case B.ELU_DER:t=GS;break;case B.EQUAL:t=HS;break;case B.FLOOR_DIV:t=jS;break;case B.GREATER:t=qS;break;case B.GREATER_EQUAL:t=KS;break;case B.LESS:t=XS;break;case B.LESS_EQUAL:t=YS;break;case B.LOGICAL_AND:return e?JS:QS;case B.LOGICAL_OR:return e?e0:ZS;case B.MUL:t=a0;break;case B.PRELU:return e?d0:c0;case B.SQUARED_DIFFERENCE:t=h0;break;case B.SUB:t=p0;break}return`
    ${t}
    return resultTemp;
  `}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var T;(function(s){s[s.ABS=0]="ABS",s[s.ACOS=1]="ACOS",s[s.ACOSH=2]="ACOSH",s[s.ASIN=3]="ASIN",s[s.ASINH=4]="ASINH",s[s.ATAN=5]="ATAN",s[s.ATANH=6]="ATANH",s[s.CEIL=7]="CEIL",s[s.COS=8]="COS",s[s.COSH=9]="COSH",s[s.ELU=10]="ELU",s[s.ERF=11]="ERF",s[s.EXP=12]="EXP",s[s.EXPM1=13]="EXPM1",s[s.FLOOR=14]="FLOOR",s[s.IS_FINITE=15]="IS_FINITE",s[s.IS_INF=16]="IS_INF",s[s.IS_NAN=17]="IS_NAN",s[s.LINEAR=18]="LINEAR",s[s.LOG=19]="LOG",s[s.LOG1P=20]="LOG1P",s[s.LOGICAL_NOT=21]="LOGICAL_NOT",s[s.NEG=22]="NEG",s[s.RELU=23]="RELU",s[s.RELU6=24]="RELU6",s[s.LEAKYRELU=25]="LEAKYRELU",s[s.RECIPROCAL=26]="RECIPROCAL",s[s.ROUND=27]="ROUND",s[s.RSQRT=28]="RSQRT",s[s.SELU=29]="SELU",s[s.SIGMOID=30]="SIGMOID",s[s.SIGN=31]="SIGN",s[s.SIN=32]="SIN",s[s.SINH=33]="SINH",s[s.SOFTPLUS=34]="SOFTPLUS",s[s.SQRT=35]="SQRT",s[s.SQUARE=36]="SQUARE",s[s.STEP=37]="STEP",s[s.TAN=38]="TAN",s[s.TANH=39]="TANH",s[s.TO_INT=40]="TO_INT"})(T||(T={}));const f0="return abs(a);",m0=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return acos(a);
`,g0=`
  if (a < 1.) {
    return uniforms.NAN;
  }
  return acosh(a);
`,y0=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return asin(a);
`,b0="return asinh(a);",w0=`
  if (isnan(a)) {
    return uniforms.NAN;
  }
  return atan(a);
`,S0=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  if (a == 1.) {
    return uniforms.INFINITY;
  }
  if (a == -1.) {
    return -uniforms.INFINITY;
  }
  return atanh(a);
`,x0="return ceil(a);",C0="return cos(a);",I0=`
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`,v0="return exp(a) - 1.0;",N0="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",k0=`
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`,$0=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  let p = ${jw};
  let a1 = ${qw};
  let a2 = ${Kw};
  let a3 = ${Xw};
  let a4 = ${Yw};
  let a5 = ${Qw};

  let sign = sign(a);
  let absA = abs(a);
  let t = 1.0 / (1.0 + p * absA);
  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));
`,T0="return exp(a);",R0="return floor(a);",E0="return f32(!isnan(a) && !isinf(a));",P0="return f32(isinf(a));",A0="return f32(isnan(a));",D0="return a;",_0=`if (a < 0.0) { return uniforms.NAN; }
  return log(a);`,O0=`
  if (isnan(a)) { return a; }
  return log(1.0 + a);
`,F0="return f32(!(a >= 1.0));",z0="return -a;",L0="if (a < 0.0) { return uniforms.alpha * a; } return a;",B0=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,V0="return 1.0 / a;",W0="return select(a, 0.0, a < 0.0);",U0="return clamp(a, 0.0, 6.0);",M0="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",G0=`
  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));
`,H0="return round(a);",j0="return inverseSqrt(a);",q0=`
  if (a >= 0.0) {
    return ${Hw} * a;
  } else {
    return ${Gw} * (exp(a) - 1.0);
  }
`,K0="return 1.0 / (1.0 + exp(-1.0 * a));",X0="return sign(a);",Y0="return sin(a);",Q0=`
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`,J0=`
  let epsilon = 1.1920928955078125e-7;
  let threshold = log(epsilon) + 2.0;

  let too_large = a > -threshold;
  let too_small = a < threshold;
  let exp_a = exp(a);

  if (too_large) {
    return a;
  } else if (too_small) {
    return exp_a;
  } else {
    return log(exp_a + 1.0);
  }
`,Z0="return sqrt(a);",e1="return a * a;",t1=`
  if (isnan(a)) {
    return a;
  }

  return select(uniforms.stepAlpha, 1.0, a > 0.0);
`,s1="return tan(a);",n1=`
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`,r1="return f32(i32((a)));";function ct(s,e){switch(s){case T.ABS:return f0;case T.ACOS:return m0;case T.ACOSH:return g0;case T.ASIN:return y0;case T.ASINH:return b0;case T.ATAN:return w0;case T.ATANH:return S0;case T.COS:return C0;case T.COSH:return I0;case T.CEIL:return x0;case T.ELU:return e?k0:N0;case T.ERF:return $0;case T.EXP:return T0;case T.EXPM1:return v0;case T.FLOOR:return R0;case T.IS_FINITE:return E0;case T.IS_INF:return P0;case T.IS_NAN:return A0;case T.LINEAR:return D0;case T.LOG:return _0;case T.LOG1P:return O0;case T.LOGICAL_NOT:return F0;case T.NEG:return z0;case T.LEAKYRELU:return e?B0:L0;case T.RECIPROCAL:return V0;case T.RELU:return e?G0:W0;case T.RELU6:return e?M0:U0;case T.ROUND:return H0;case T.RSQRT:return j0;case T.SELU:return q0;case T.SIGMOID:return K0;case T.SIGN:return X0;case T.SIN:return Y0;case T.SINH:return Q0;case T.SOFTPLUS:return J0;case T.SQRT:return Z0;case T.SQUARE:return e1;case T.STEP:return t1;case T.TAN:return s1;case T.TANH:return n1;case T.TO_INT:return r1;default:throw new Error(`BinaryType ${s} is not implemented!`)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ze(s,e=!1,t=!1,n=3){if(s===null)return"";let r="";if(s==="linear")r=ct(T.LINEAR);else if(s==="relu")r=ct(T.RELU,t);else if(s==="elu")r=ct(T.ELU,t);else if(s==="relu6")r=ct(T.RELU6,t);else if(s==="prelu")r=wr(B.PRELU,t);else if(s==="sigmoid")r=ct(T.SIGMOID,t);else if(s==="leakyrelu")r=ct(T.LEAKYRELU,t);else throw new Error(`Activation ${s} has not been implemented for the WebGPU backend.`);const i=G(t?4:1);let o="";return e?o=`
      fn activation(a : ${i}, coords : vec${n}<i32>) -> ${i} {
        let b = getPreluActivationWeightsByOutputCoords(coords);
        ${r}
      }`:o=`
      fn activation(a : ${i}, coords : vec${n}<i32>) -> ${i} {
        ${r}
      }`,o}function Et(s,e){return`
      ${s?"value = value + getBiasByOutputCoords(coords);":""}
      ${e?"value = activation(value, coords);":""}
      `}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(s,e,t=!1,n=!1,r=!1,a=1){A(s&&a===1||!s,()=>`transposeA ${s} is not compatible with component size ${a}`);const i=`
      ${s?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}

    `,o=e?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`
  fn mm_readA(batch: i32, row: i32, col: i32) -> ${G(a)} {
    var value = ${G(a)}(0.0);
    ${t&&r?i:`
    ${s?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}
    {
      ${i}
    }
    `}
    return value;
  }

  fn mm_readB(batch: i32, row: i32, col: i32) -> ${G(a)} {
    var value = ${G(a)}(0.0);
    ${o}
    return value;
  }
  `}function Sr(s,e,t,n,r=!1,a=!1,i=!1,o=1){return`
  ${to(t,n,r,a,i,o)}
  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${G(o)}) {
    ${r&&a?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}
    {
      var value = valueIn;
      let coords = vec3<i32>(batch, row, col);
      ${Et(s,e)}
      setOutputAtCoords(coords[0], coords[1], coords[2], value);
    }
  }
  `}const a1=(s,e)=>s?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol * ${e});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRow + innerRow,
          kStart + inputCol * ${e});
        `,i1=(s,e,t,n)=>{if(s)return`
      for (var k = 0; k < ${n}; k++) {
        let BCached0 = mm_Bsub[k][tileCol];
        let ACached0 = mm_Asub[k][localRow];
        for (var i = 0; i < ${t}; i++) {
          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);
        }
      }`;{let r="",a="";for(let i=0;i<e;i++)r+=`let BCached${i} = mm_Bsub[k * ${e} + ${i}][tileCol];`,a+=`acc[i] = fma(BCached${i}, vec4<f32>(ACached[${i}]), acc[i]);`;return`
      for (var k = 0; k < ${n/e}; k++) {
        ${r}
        for (var i = 0; i < ${t}; i++) {
          let ACached = mm_Asub[tileRow + i][k];
          ${a}
        }
      }`}};function on(s,e,t=!1,n=32,r=!1,a=32,i=!1){const o=e[1]*s[1],u=e[0]*s[0],l=t?o:n,d=t?n:o,c=l/e[0],h=n/e[1],f=s[1],m=s[0];return A((t&&c===4&&s[1]===4||!t&&(c===3||c===4))&&l%e[0]===0&&n%e[1]===0&&s[0]===4,()=>`If transposeA ${t} is true, innerElementSize ${c} and workPerThread[1] ${s[1]} must be 4.
          Otherwise, innerElementSize ${c} must be 3 or 4.
      tileAWidth ${l} must be divisible by workgroupSize[0]${e[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${s[0]} must be 4.`),`
  var<workgroup> mm_Asub : array<array<vec${c}<f32>, ${l/c}>, ${d}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${u/s[0]}>, ${n}>;

  ${E()} {
    let localRow = i32(localId.y);
    let tileRow = localRow * ${f};
    let tileCol = i32(localId.x);

    let globalRow = i32(globalId.y) * ${f};
    let globalCol = i32(globalId.x) * ${m};
    let batch = ${r?"0":"i32(globalId.z)"};
    let batchA = ${r||!i?"batch":"batch % uniforms.aShape[0]"};
    let batchB = ${r||!i?"batch":"batch % uniforms.bShape[0]"};
    let globalRowStart = i32(workgroupId.y) * ${o};

    let numTiles = ${r?`${Math.ceil(a/n)}`:`(uniforms.dimInner - 1) / ${n} + 1`};
    var kStart = ${r?`i32(globalId.z) * ${a}`:"0"};

    var acc: array<vec4<f32>, ${f}>;

    // Loop over shared dimension.
    let tileRowB = localRow * ${h};
    for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${f}; innerRow++) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            ${a1(t,c)}
        }

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < ${h}; innerRow++) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);
        }
        kStart = kStart + ${n};
        workgroupBarrier();

        // Compute acc values for a single thread.
        ${i1(t,c,f,n)}
        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < ${f}; innerRow++) {
        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
    }
  }`}const ma=s=>s?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol);
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRowStart + inputRow,
          kStart + inputCol);
        `,o1=s=>s?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function un(s,e,t=!1,n=32,r=!1,a=32,i=!1,o=!1){const u=s[1]*e[1],l=s[0]*e[0],d=t?u:n,c=t?n:u;A(c%e[1]===0&&d%e[0]===0&&n%e[1]===0,()=>`tileAHight ${c} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${e[0]}, tileInner ${n} must be divisible by workgroupSize[1]${e[1]}`);const h=c/e[1],f=d/e[0],m=n/e[1],y=s[1],g=s[0],b=i?`
      let localRow = i32(localId.y);
      let localCol = i32(localId.x);
      let globalRowStart = i32(workgroupId.y) * ${u};
      let globalColStart = i32(workgroupId.x) * ${l};

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${e[1]}) {
          for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${e[0]}) {
            ${ma(t)}
          }
        }
        // Load one tile of B into local memory.
        for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${e[1]}) {
              for (var inputCol = localCol; inputCol < ${l}; inputCol = inputCol + ${e[0]}) {
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
              kStart + inputRow,
              globalColStart + inputCol);
          }
        }
        kStart = kStart + ${n};
        workgroupBarrier();

        // Compute acc values for a single thread.
        var BCached : array<f32, ${g}>;
        for (var k = 0; k < ${n}; k++) {
          for (var inner = 0; inner < ${g}; inner++) {
            BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
          }
          for (var innerRow = 0; innerRow < ${y}; innerRow++) {
            let ACached = ${t?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
            for (var innerCol = 0; innerCol < ${g}; innerCol++) {
              acc[innerRow][innerCol] =
                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
            }
          }
        }
        workgroupBarrier();
      }
      for (var innerRow = 0; innerRow < ${y}; innerRow++) {
        let gRow = globalRowStart + localRow + innerRow * ${e[1]};
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          let gCol = globalColStart + localCol + innerCol * ${e[0]};
          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
        }
      }
      `:`
  let tileRow = i32(localId.y) * ${y};
  let tileCol = i32(localId.x) * ${g};

  let globalRow = i32(globalId.y) * ${y};
  let globalCol = i32(globalId.x) * ${g};
  let globalRowStart = i32(workgroupId.y) * ${u};

  let tileRowA = i32(localId.y) * ${h};
  let tileColA = i32(localId.x) * ${f};
  let tileRowB = i32(localId.y) * ${m};
  // Loop over shared dimension.
  for (var t = 0; t < numTiles; t++) {
    // Load one tile of A into local memory.
    for (var innerRow = 0; innerRow < ${h}; innerRow++) {
      for (var innerCol = 0; innerCol < ${f}; innerCol++) {
        let inputRow = tileRowA + innerRow;
        let inputCol = tileColA + innerCol;
        ${ma(t)}
      }
    }

    // Load one tile of B into local memory.
    for (var innerRow = 0; innerRow < ${m}; innerRow++) {
      for (var innerCol = 0; innerCol < ${g}; innerCol++) {
        let inputRow = tileRowB + innerRow;
        let inputCol = tileCol + innerCol;
        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
          kStart + inputRow,
          globalCol + innerCol);
      }
    }
    kStart = kStart + ${n};
    workgroupBarrier();

    // Compute acc values for a single thread.
    var BCached : array<f32, ${g}>;
    for (var k = 0; k < ${n}; k++) {
      for (var inner = 0; inner < ${g}; inner++) {
        BCached[inner] = mm_Bsub[k][tileCol + inner];
      }

      for (var innerRow = 0; innerRow < ${y}; innerRow++) {
        ${o1(t)}
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          acc[innerRow][innerCol] =
              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
        }
      }
    }

    workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < ${y}; innerRow++) {
    for (var innerCol = 0; innerCol < ${g}; innerCol++) {
      mm_write(batch, globalRow + innerRow, globalCol + innerCol,
          acc[innerRow][innerCol]);
    }
  }
  `;return`
    var<workgroup> mm_Asub : array<array<f32, ${d}>, ${c}>;
    var<workgroup> mm_Bsub : array<array<f32, ${l}>, ${n}>;

    ${E()} {
      let batch = ${r?"0":"i32(globalId.z)"};
      let batchA = ${r||!o?"batch":"batch % uniforms.aShape[0]"};
      let batchB = ${r||!o?"batch":"batch % uniforms.bShape[0]"};
      let numTiles = ${r?`${Math.ceil(a/n)}`:`(uniforms.dimInner - 1) / ${n} + 1`};
      var kStart = ${r?`i32(globalId.z) * ${a}`:"0"};

      var acc : array<array<f32, ${g}>, ${y}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${y}; innerRow++) {
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          acc[innerRow][innerCol] = 0.0;
        }
      }
      ${b}
    }
  `}const u1=s=>s?`
      mm_readA(batchA, colA, globalRow),
      mm_readA(batchA, colA + 1, globalRow),
      mm_readA(batchA, colA + 2, globalRow),
      mm_readA(batchA, colA + 3, globalRow)
  `:`
      mm_readA(batchA, globalRow, colA),
      mm_readA(batchA, globalRow, colA + 1),
      mm_readA(batchA, globalRow, colA + 2),
      mm_readA(batchA, globalRow, colA + 3)
  `;function l1(s,e=!1){A(s[1]===1&&s[2]===1,()=>`A linear work group size is required. But got ${s}.`);const t=s[0]*4;return`
    var<workgroup> mm_Asub : array<vec4<f32>, ${s[0]}>;

    ${E()} {
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / ${t} + 1;
      let batch = i32(globalId.z);
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        let colA = t * ${t} + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(${u1(e)});
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${t/4}; k++) {
          let rowB = t * ${t} + k * 4;
          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),
                              mm_readB(batchB, rowB + 1, globalCol),
                              mm_readB(batchB, rowB + 2, globalCol),
                              mm_readB(batchB, rowB + 3, globalCol));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      mm_write(batch, globalRow, globalCol, acc);
    }
  `}class c1{constructor(e,t,n=!1,r=!1,a=null,i=null,o=null,u=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0]};const l=n?e[1]:e[2];if(this.isVec4=(l%4===0&&!n||t[1]%4===0&&n)&&t[2]%4===0&&!r,this.outputComponent=this.isVec4?4:1,this.isVectorA=t[1]===1&&!n,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const h=FS(t[1],l,t[2],n);this.workgroupSize=h.workgroupSize,this.elementsPerThread=h.elementsPerThread}this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const d=a!=null,c=o!=null;d&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=u,this.transposeA=n,this.transposeB=r,this.addBias=d,this.activation=i,this.hasPreluActivationWeights=c,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(t[1],t[2],l),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${n}_${r}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(e,t,n){const r=this.workgroupSize[1]*this.elementsPerThread[1],a=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=this.workgroupSize[0]*4:this.tileInner=a;const i=e%r===0,o=t%a===0,u=n%this.tileInner===0;return[i,o,u]}getUserCode(){return`
      ${Ze(this.activation,this.hasPreluActivationWeights,this.isVec4)}
      ${Sr(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}
      ${this.isVec4?on(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?l1(this.workgroupSize,this.transposeA):un(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d1(s){return`
    var<workgroup> sumValues : array<f32, ${s}>;
    ${E()} {
      let coords = getOutputCoords();
      let batch = coords[0];
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + ${s}) {
        let dataA = mm_readA(batchA, row, k);
        let dataB = mm_readB(batchB, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = ${s/2}u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `}class h1{constructor(e,t=!1,n=!1,r=null,a=null,i=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize);const o=r!=null,u=i!=null;o&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),this.transposeA=t,this.transposeB=n,this.addBias=o,this.activation=a,this.hasPreluActivationWeights=u,this.shaderKey=`matMulReduce_${this.activation}_${t}_${n}`}getUserCode(){return`
      ${Ze(this.activation,this.hasPreluActivationWeights)}
      ${Sr(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${d1(this.workgroupSize[0])}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p1(s){const e=s[1],t=s[0],n=e>t?e:t;return`
  var<workgroup> mm_Asub : array<array<f32, ${n}>, ${e}>;
  var<workgroup> mm_Bsub : array<array<f32, ${t}>, ${n}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Read data from global memory to registers firstly, then store them into
  // shared memory, so it is instruction-Level parallelism for arithmetic
  // operations and others handle IO operations between barrier api, makes ALU
  // and load/store units work simultaneously, could improves the performance.
  ${E()} {
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);
    let batch = i32(globalId.z);
    let batchA = batch % uniforms.aShape[0];
    let batchB = batch % uniforms.bShape[0];

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${n} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = 0;
    var regA = mm_readA(batchA, globalRow, globalColA);
    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
    globalColA = globalColA + ${n};
    globalRowB = globalRowB + ${n};

    for (var t = 0; t < numTiles; t = t + 1) {
      mm_Asub[tileRow][tileCol] = regA;
      mm_Bsub[2 * tileRow][tileCol] = regB0;
      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;

      workgroupBarrier();

      regA = mm_readA(batchA, globalRow, globalColA);
      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
      globalColA = globalColA + ${n};
      globalRowB = globalRowB + ${n};

      for (var k = 0; k < ${n}; k = k + 1) {
        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];
      }
      workgroupBarrier();
    }

    mm_write(batch, globalRow, globalCol, acc);
  }
  `}class f1{constructor(e,t,n,r=!1,a=!1,i=null,o=null,u=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=n,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(n[2]/this.workgroupSize[0]),Math.ceil(n[1]/this.workgroupSize[1]),n[0]];const l=i!=null;l&&this.variableNames.push("bias");const d=u!=null;d&&this.variableNames.push("preluActivationWeights"),this.transposeA=r,this.transposeB=a,this.addBias=l,this.activation=o,this.hasPreluActivationWeights=d,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${r}_${a}`}getUserCode(){return`
      ${Ze(this.activation,this.hasPreluActivationWeights)}
      ${Sr(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${p1(this.workgroupSize)}
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class m1{constructor(e,t,n=!1,r=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,A(e[0]===1,()=>"MatMulSplitKProgram only supports batch = 1."),this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const a=(n&&this.outputShape[1]%4===0||!n&&t%4===0)&&this.outputShape[2]%4===0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=a?4:1,a||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=P(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],t],this.workgroupSize,this.elementsPerThread),this.transposeA=n,this.transposeB=r,this.shaderKey=`matMulSplitK_${n}_${r}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const e=this.outputComponent;return`
      ${to(!1,this.transposeB,!1,!1,!1,e)}
      fn mm_write(batch: i32, row : i32, col : i32, value : ${G(e)}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
          let coords = vec3<i32>(batch, row, col);
          let flatIndex = getOutputIndexFromCoords(coords);
          // The problem is that we should initialize output to zero before using.
          // Otherwise, the original value will be added to the result.
          for (var i = 0; i < ${e}; i = i + 1) {
            ${ot("&result[flatIndex + i]",`${e>1?"value[i]":"value"}`,"float32")}
          }
        }
      }
      ${e===4?on(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):un(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}
    `}}class g1{constructor(e,t=null,n=null,r=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=t!=null,this.hasPreluActivationWeights=r!=null,this.activation=n,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${n}`}getUserCode(){return`
    ${Ze(this.activation,this.hasPreluActivationWeights)}
    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        var value = getXByOutputIndex(index);
        ${Et(this.addBias,this.activation)}
        setOutputAtIndex(index, value);
      }
    }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class y1{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xe(s){const{backend:e,attrs:t}=s,{shape:n,value:r}=t;let{dtype:a}=t;if(a=a||ys(r),a==="string"){const i=ue(a,D(n));return i.fill(r),e.makeTensorInfo(n,a,i)}else{const i=new y1(n),o=[{type:"float32",data:[r]}];return e.runWebGPUProgram(i,[],a,o)}}const b1={kernelName:ui,backendName:"webgpu",kernelFunc:xe};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F(s){const{inputs:e,attrs:t}=s,{x:n}=e,{shape:r}=t,a=D(n.shape),i=Bf(r,a),o=D(i);return A(a===o,()=>`The new shape (${i}) has ${o} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`),s.backend.incRef(n.dataId),{dataId:n.dataId,shape:i,dtype:n.dtype}}const w1={kernelName:pi,backendName:"webgpu",kernelFunc:F};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ln({a:s,b:e,transposeA:t,transposeB:n,backend:r,bias:a=null,preluActivationWeights:i=null,leakyreluAlpha:o=0,activation:u=null}){const l=s.shape.length,d=e.shape.length,c=t?s.shape[l-2]:s.shape[l-1],h=n?e.shape[d-1]:e.shape[d-2],f=t?s.shape[l-1]:s.shape[l-2],m=n?e.shape[d-2]:e.shape[d-1],y=s.shape.slice(0,-2),g=e.shape.slice(0,-2),b=D(y),S=D(g),C=Ve(s.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,m]);A(c===h,()=>`Error in matMul: inner shapes (${c}) and (${h}) of Tensors with shapes ${s.shape} and ${e.shape} and transposeA=${t} and transposeB=${n} must match.`);const v=t?[b,c,f]:[b,f,c],k=n?[S,m,h]:[S,h,m],R=F({inputs:{x:s},backend:r,attrs:{shape:v}}),_=F({inputs:{x:e},backend:r,attrs:{shape:k}}),I=[R,_],N=Math.max(b,S),w=[R,_],$=[{type:"int32",data:[f]},{type:"int32",data:[m]},{type:"int32",data:[c]}];let L,V;const W=[N,f,m];let H=M().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(H<0){const ie=M().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),te=ie>0?ie:r.thresholdToIncreaseWorkgroups,J=N*Math.ceil(f/32)*Math.ceil(m/32);J<=te||f<=8&&J<=te*2?N*f*m<=128?H=ze.MatMulReduceProgram:N===1&&h>=2e3?H=ze.MatMulSplitKProgram:H=ze.MatMulSmallOutputSizeProgram:H=ze.MatMulPackedProgram}switch(H){case ze.MatMulReduceProgram:L=new h1(W,t,n,a,u,i);break;case ze.MatMulSplitKProgram:{if(V=xe({backend:r,attrs:{shape:W,value:0,dtype:s.dtype}}),L=new m1(W,h,t,n),a||u){V=r.runWebGPUProgram(L,w,s.dtype,$,V);const te=new g1(V.shape,a,u,i);let J=null;const pe=[V];a&&pe.push(a),i&&pe.push(i),u==="leakyrelu"&&(J=[{type:"float32",data:[o]}],te.uniforms+=" alpha : f32,");const ne=r.runWebGPUProgram(te,pe,V.dtype,J);I.push(V);const we=F({inputs:{x:ne},backend:r,attrs:{shape:C}});I.push(ne);for(const Dt of I)r.disposeData(Dt.dataId);return we}break}case ze.MatMulSmallOutputSizeProgram:L=new f1(v,k,W,t,n,a,u,i);break;case ze.MatMulPackedProgram:const ie=r.adapterInfo.isIntel();L=new c1(v,W,t,n,a,u,i,ie);break;default:throw new Error(`Unsupported MatMulProgramType ${H}.`)}a&&w.push(a),i&&w.push(i),u==="leakyrelu"&&($.push({type:"float32",data:[o]}),L.uniforms+=" alpha : f32,"),V=r.runWebGPUProgram(L,w,s.dtype,$,V);const ge=F({inputs:{x:V},backend:r,attrs:{shape:C}});I.push(V);for(const ie of I)r.disposeData(ie.dataId);return ge}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S1(s){const{inputs:e,backend:t,attrs:n}=s,{a:r,b:a,bias:i,preluActivationWeights:o}=e,{transposeA:u,transposeB:l,activation:d,leakyreluAlpha:c}=n;return ln({a:r,b:a,transposeA:u,transposeB:l,backend:t,bias:i,preluActivationWeights:o,leakyreluAlpha:c,activation:d})}const x1={kernelName:Dy,backendName:"webgpu",kernelFunc:S1};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ga{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=Ve(t,n),this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${e}`,this.op=e}getUserCode(){return`
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${wr(this.op,!1)}
      }

      ${E("index")} {
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gs{constructor(e,t,n){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=Ve(t,n),this.dispatchLayout=O(this.outputShape),this.op=e,this.useSharedMemoryWithA=t.length<=1&&n.length>1&&t[0]<128,this.useSharedMemoryWithB=n.length<=1&&t.length>1&&n[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?n[0]:t[0],this.shaderKey=`binary_${e}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const r=t.length>0&&t[t.length-1]%4===0,a=n.length>0&&n[n.length-1]%4===0;r&&a?(this.outputComponent=4,this.variableComponents=[4,4]):r&&(Vr(n)||n[n.length-1]===1)||a&&(Vr(t)||t[t.length-1]===1)?(this.outputComponent=4,this.variableComponents=r?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${e}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let e;const t=this.outputComponent===4?"vec4<f32>":"f32",n=`
    fn binaryOperation(a : ${t}, b : ${t}) -> ${t} {
      ${wr(this.op,this.outputComponent===4)}
    };
    `;if(this.type==="shared"){const r=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",a=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);
          let b = sharedBuf[${r}];`:`let a = sharedBuf[${r}];
          let b = getBByOutputIndex(index);`;e=`
        ${n}
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${E("index")} {
          // Fill in the shared memory buffer.
          let localIndex = i32(localId.x);
          if(localIndex < ${this.lastDimensionSize}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);
          }
          workgroupBarrier();

          if(index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            ${a}
            setOutputAtIndex(index, binaryOperation(a, b));
          }
        }
        `}else e=`
       ${n}
       ${E("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index * ${this.outputComponent});
           let a = ${t}(getAByOutputCoords(coords));
           let b = ${t}(getBByOutputCoords(coords));
           setOutputAtIndex(index, binaryOperation(a, b));
         }
       }
       `;return e}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(s){const{inputs:e}=s,{x:t}=e;return s.backend.incRef(t.dataId),{dataId:t.dataId,shape:t.shape,dtype:t.dtype}}const C1={kernelName:fr,backendName:"webgpu",kernelFunc:$e};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pt(s){const{inputs:e,backend:t}=s,{real:n,imag:r}=e,a=t.makeTensorInfo(n.shape,"complex64"),i=t.tensorMap.get(a.dataId),o=$e({inputs:{x:n},backend:t}),u=$e({inputs:{x:r},backend:t});return i.complexTensorInfos={real:o,imag:u},a}const I1={kernelName:ai,backendName:"webgpu",kernelFunc:Pt};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xt{constructor(e,t,n=""){this.variableNames=["A"],this.size=!0;const r=128;this.workgroupSize=[r,1,1],this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=t,n!==""&&(this.uniforms=n),this.shaderKey=`unary_${t}`}getUserCode(){return`
      fn unaryOperation(a : f32) -> f32 {
        ${ct(this.op,!1)}
      }
      ${E("index")} {
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K({opType:s,cpuKernelImpl:e,dtype:t}){return({inputs:n,backend:r})=>{const{x:a}=n,i=r,o=t||a.dtype;if(i.shouldExecuteOnCPU([a])&&e!=null){const l=i.tensorMap.get(a.dataId),d=e(l.values,o);return i.makeTensorInfo(a.shape,o,d)}const u=new Xt(a.shape,s);return i.runWebGPUProgram(u,[a],o)}}function le({opType:s,cpuKernelImpl:e,supportsComplex:t=!1,dtype:n}){return({inputs:r,backend:a})=>{const{a:i,b:o}=r,u=a;if(t&&i.dtype==="complex64"){const c=u.tensorMap.get(i.dataId),h=u.tensorMap.get(o.dataId);let f,m;if(s!==B.MUL)[f,m]=[[c.complexTensorInfos.real,h.complexTensorInfos.real],[c.complexTensorInfos.imag,h.complexTensorInfos.imag]].map(g=>{const[b,S]=g,x={dataId:b.dataId,dtype:b.dtype,shape:i.shape},C={dataId:S.dataId,dtype:S.dtype,shape:o.shape},v=new Gs(s,i.shape,o.shape);return u.runWebGPUProgram(v,[x,C],at(b.dtype,S.dtype))});else{const g=new ga(B.COMPLEX_MULTIPLY_REAL,i.shape,o.shape),b=new ga(B.COMPLEX_MULTIPLY_IMAG,i.shape,o.shape),S=[{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:i.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:i.shape},{dataId:h.complexTensorInfos.real.dataId,dtype:h.complexTensorInfos.real.dtype,shape:o.shape},{dataId:h.complexTensorInfos.imag.dataId,dtype:h.complexTensorInfos.imag.dtype,shape:o.shape}];f=u.runWebGPUProgram(g,S,"float32"),m=u.runWebGPUProgram(b,S,"float32")}const y=Pt({inputs:{real:f,imag:m},backend:u});return u.disposeData(f.dataId),u.disposeData(m.dataId),y}const l=n||at(i.dtype,o.dtype);if((i.dtype==="string"||o.dtype==="string"||u.shouldExecuteOnCPU([i,o]))&&e!=null){const c=u.tensorMap.get(i.dataId).values,h=u.tensorMap.get(o.dataId).values,f=i.dtype==="string"?Ms(c):c,m=i.dtype==="string"?Ms(h):h,[y,g]=e(i.shape,o.shape,f,m,l);return u.makeTensorInfo(g,l,y)}const d=new Gs(s,i.shape,o.shape);return u.runWebGPUProgram(d,[i,o],l)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v1(s){const e=new Float32Array(s.length);for(let t=0;t<s.length;++t)e[t]=Math.abs(s[t]);return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ie(s){return(e,t,n,r,a)=>{const i=Ve(e,t),o=i.length,u=me(i),l=D(i),d=It(a,l),c=e.length,h=t.length,f=me(e),m=me(t),y=Us(e,i),g=Us(t,i);if(y.length+g.length===0)for(let b=0;b<d.length;++b)d[b]=s(n[b%n.length],r[b%r.length]);else for(let b=0;b<d.length;++b){const S=lr(b,o,u),x=S.slice(-c);y.forEach(R=>x[R]=0);const C=Ln(x,c,f),v=S.slice(-h);g.forEach(R=>v[R]=0);const k=Ln(v,h,m);d[b]=s(n[C],r[k])}return[d,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N1(s,e,t,n){if(n==="int32"){const r=Int32Array.from(s);return[e,"int32",r]}if(n==="bool"){const r=tn([0],t),[a,i]=Ie((o,u)=>o!==u?1:0)(e,[],s,r,"bool");return[i,"bool",a]}throw new Error(`Error in Cast: failed to cast ${t} to ${n}`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k1=Ie(((s,e)=>s+e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $1(s,e,t,n,r){const a=D(n),i=Qe(r,t);for(let o=0;o<s.length;o++){const u=s[o];if(u<0)throw new Error("Input x must be non-negative!");u>=r||(a>0?i[u]+=e[o]:i[u]+=1)}return i}function T1(s,e,t,n=!1){const r=s.shape[0],a=s.shape[1],i=de([r,t],e.dtype);for(let o=0;o<r;o++)for(let u=0;u<a;u++){const l=s.get(o,u);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(n?i.set(1,o,l):e.size>0?i.set(i.get(o,l)+e.get(o,u),o,l):i.set(i.get(o,l)+1,o,l))}return i}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R1=Ie(((s,e)=>s&e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function et(s){return(e,t,n)=>{const r=ue(t,e.length);for(let a=0;a<e.length;++a)r[a]=s(e[a],n);return r}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1=et(s=>Math.ceil(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P1(s,e,t,n){const r=ue(t,D(e));if(n&&t!=="string"){let a=0;s.forEach(i=>{const o=D(i.shape);r.set(i.vals,a),a+=o})}else{let a=0;s.forEach(i=>{const o=t==="string"?Ms(i.vals):i.vals;let u=0;for(let l=0;l<i.shape[0];++l){const d=l*e[1]+a;for(let c=0;c<i.shape[1];++c)r[d+c]=o[u++]}a+=i.shape[1]})}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A1=Ie((s,e)=>s===e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D1=et(s=>Math.exp(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _1=et(s=>Math.expm1(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O1=et(s=>Math.floor(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F1=Ie((s,e)=>Math.floor(s/e));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z1(s,e,t,n,r,a,i,o,u){const l=de([n,a],t);for(let d=0;d<n;d++){const c=[];let h=0;for(let f=0;f<r;f++){const m=s[d*r+f];h+=m*i[f],c.push(m)}if(h<0||h>=u/a)throw new Error(`Invalid indices: ${c} does not index into ${o}`);for(let f=0;f<a;f++)l.values[d*a+f]=e.get(...e.indexToLoc(h*a+f))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L1(s,e,t){const n=de(t,s.dtype);for(let r=0;r<n.size;++r){const i=n.indexToLoc(r).slice(),o=i[0],u=i[2],l=e.locToIndex([o,u]);i[2]=e.values[l];const d=s.locToIndex(i);0<=d&&d<s.values.length&&(n.values[r]=s.values[d])}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B1=Ie((s,e)=>s>e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V1=Ie((s,e)=>s>=e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W1=Ie((s,e)=>s<e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U1=Ie((s,e)=>s<=e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M1(s,e,t){const n=(e-s)/(t-1),r=Qe(t,"float32");r[0]=s;for(let a=1;a<r.length;a++)r[a]=r[a-1]+n;return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G1=et(s=>Math.log(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H1(s,e,t,n){const r=It(n,D(t));for(let a=0;a<r.length;++a){const i=a*e;let o=s[i];for(let u=0;u<e;++u){const l=s[i+u];(Number.isNaN(l)||l>o)&&(o=l)}r[a]=o}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j1=Ie(((s,e)=>Math.max(s,e)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q1=Ie(((s,e)=>Math.min(s,e)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const so=Ie(((s,e)=>s*e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K1(s,e,t){const n=Hy(-1,t);return so([],e,n,s,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X1=Ie(((s,e)=>s!==e?1:0));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y1(s,e,t,n,r){const a=e.length,i=D(e),o=me(e),u=me(r),l=It(t,D(r));for(let d=0;d<i;++d){const c=lr(d,a,o),h=new Array(c.length);for(let m=0;m<h.length;m++)h[m]=c[n[m]];const f=Ln(h,a,u);l[f]=s[d]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q1(s,e,t,n){const[r,a]=rn(s,n),i=at(e,"int32"),o=Qe(D(r),i),u=D(a);for(let l=0;l<o.length;++l){const d=l*u;let c=1;for(let h=0;h<u;++h)c*=t[d+h];o[l]=c}return{outVals:o,outShape:r,outDtype:i}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J1(s,e,t){s.forEach((n,r)=>{if(n<0||n>=t){const a=lr(r,e.length,me(e)).join(",");throw new Error(`indices[${a}] = ${n} is not in [0, ${t})`)}})}function Z1(s,e){for(let t=0;t<s.length;++t){const n=s[t],r=t===s.length-1?e:s[t+1].length;if(n.length===0)throw new Error("Ragged splits may not be empty");if(n[0]<0)throw new Error("Ragged splits must be non-negative");if(n[n.length-1]>r)throw new Error("Ragged splits must not point past values");for(let a=1;a<n.length;++a)if(n[a-1]>n[a])throw new Error("Ragged splits must be sorted in ascending order")}}function ex(s,e,t,n){const r=[];let a=0;const i=e.length-1+t.length,o=new Array(i).fill(null).map(()=>[0]);Z1(t,n);let u=1;for(let l=0;l<e.length-1;++l){u*=e[l];const d=e[l+1];for(let c=1;c<u+1;++c)o[l].push(c*d)}for(let l=0;l<s.length;++l){let d=s[l],c=s[l]+1;for(let h=0;h<t.length;++h){const f=t[h],m=h+e.length-1;if(m>=0){const y=o[m],g=y[y.length-1]-f[d];for(let b=d;b<c;++b)o[m].push(f[b+1]+g)}d=f[d],c=f[c]}c!==d&&(r.push([d,c]),a+=c-d)}return{outSplits:o,valueSlices:r,numValues:a}}function tx(s){const e=[];for(let t=0;t<s.length;++t){const n=s[t].length,r=ue("int32",n);e.push(r),s[t].forEach((a,i)=>r[i]=a)}return e}function ya(s,e){const t=s.slice(0,e);for(;t.length<e;)t.push(1);for(let n=e;n<s.length;n++)t[e-1]*=s[n];return t}function sx(s,e,t,n,r,a){const i=ya(e,2)[1],o=ya(a,2)[1];let u=0;for(const l of t)for(let d=l[0];d<l[1];++d){for(let c=0;c<n;++c)r[u*o+c]=s[d*i+c];++u}}function nx(s,e,t,n,r){const a=e.slice();a[0]=r;const i=ue(t,D(a)),o=s.length,u=o===0?0:o/e[0];return sx(s,e,n,u,i,a),[i,a]}function rx(s,e,t,n,r,a,i,o){if(s.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const u=e[0][0]-1;if(J1(a,i,u),n.length===0)throw new Error("params.rank must be nonzero");const l=n[0],{outSplits:d,valueSlices:c,numValues:h}=ex(a,i,s,l),f=tx(d),m=nx(t,n,r,c,h);return[f,m[0],m[1]]}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ba=2147483647;function ax(s,e,t,n,r,a,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(r.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const o=e.length===0,u=r.length===0,l=i.length===0,d=[];o||d.push(e[0]),u||d.push(r[0]),l||d.push(i[0]);for(let g=1;g<d.length;++g)if(d[g]!==d[g-1])throw new Error("starts, limits, and deltas must have the same shape");const c=d.length===0?1:d[0],h=ue("int32",c+1);h[0]=0;for(let g=0;g<c;++g){const b=o?s[0]:s[g],S=u?n[0]:n[g],x=l?a[0]:a[g];if(x===0)throw new Error("Requires delta != 0");let C;if(x>0&&S<b||x<0&&S>b)C=0;else if(C=Math.ceil(Math.abs((S-b)/x)),C>ba)throw new Error(`Requires ((limit - start) / delta) <= ${ba}`);h[g+1]=h[g]+C}const f=h[c],m=ue(t,f);let y=0;for(let g=0;g<c;++g){const b=h[g+1]-h[g];let S=o?s[0]:s[g];const x=l?a[0]:a[g];for(let C=0;C<b;++C)m[y++]=S,S+=x}return[h,m]}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Pe=Be;class Hs{constructor(e,t,n,r,a,i,o,u,l,d){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=a,this.defaultValue=i,this.defaultValueShape=o,this.rowPartitionValues=u,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=Lw(d),this.raggedRank=Bw(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Pe.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Pe.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Pe.VALUE_ROWIDS:return Hs.getMaxWidthValueRowID(t);case Pe.ROW_SPLITS:return Hs.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Pe[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){const a=e[r+1]-e[r];a>n&&(n=a)}return n}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let n=0,r=e[0],a=0;for(let i=1;i<t;++i){const o=e[i];o!==r&&(r=o,a=Math.max(i-n,a),n=i)}return Math.max(t-n,a)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Sa(e,n)}calculateOutputSize(e){const t=this.valuesShape,n=this.defaultValueShape;Vw(n,t);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=zw(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let o=1;o<=this.raggedRank;++o)i[o]<0&&(i[o]=this.getMaxWidth(o));return i}calculateFirstParentOutputIndex(e,t,n){const r=Math.min(e,n),a=[];let i=0;for(let o=0;o<r;++o,i+=t)a.push(i);for(let o=r;o<e;++o)a.push(-1);return A(a.length===e,()=>"Final length of result must be equal to firstDimension."),a}calculateOutputIndexRowSplit(e,t,n,r){const a=e.length,i=[];for(let o=0;o<a-1;++o){const u=e[o+1]-e[o];let l=Math.min(r,u),d=t[o];d===-1&&(l=0);for(let c=0;c<l;++c)i.push(d),d+=n;for(let c=0;c<u-l;++c)i.push(-1)}if(a>0&&i.length!==e[a-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,n,r){const a=e.length,i=[];if(a===0)return[];let o=0,u=e[0];if(u>=t.length)throw new Error(`Got currentValueRowId=${u}, which is not less than ${t.length}`);let l=t[u];i.push(l);for(let d=1;d<a;++d){const c=e[d];if(c===u)l>=0&&(++o,o<r?l+=n:l=-1);else{if(o=0,u=c,c>=t.length)throw new Error(`Got nextValueRowId=${c} which is not less than ${t.length}`);l=t[c]}i.push(l)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,n,r){const a=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case Pe.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(a,t,n,r);case Pe.ROW_SPLITS:if(a.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${a.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(a,t,n,r);default:throw new Error(`Unsupported partition type: ${Pe[i]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case Pe.FIRST_DIM_SIZE:return e[0];case Pe.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Pe.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Pe[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),n=this.calculateOutputSize(t),r=new Array(this.raggedRank+1);r[r.length-1]=1;for(let u=r.length-2;u>=0;--u)r[u]=r[u+1]*n[u+1];const a=Sa(n,!1),i=ue(this.valuesDType,D(a));if(r[0]*n[0]>0){let u=this.calculateFirstParentOutputIndex(t,r[0],n[0]);for(let l=1;l<=this.raggedRank;++l)u=this.calculateOutputIndex(l-1,u,r[l],n[l]);this.setOutput(this.raggedRank,u,i,a)}return[a,i]}setOutput(e,t,n,r){if(n.length===0)return;const a=this.values,i=n;let o=r.slice();o=o.slice(e+1);const u=D(o),l=t.length;let d=this.defaultValue;if(d.length!==u&&d.length!==1){const m=this.defaultValueShape;ae(()=>{const y=Ui(d,m);d=Xb(y,o).dataSync()})}let c=0,h=0,f=0;for(let m=0;m<=l;++m){let y=m<l?t[m]:-1;if(y===f){++f;continue}if(h<f){const g=a.subarray(c*u),b=i.subarray(h*u),S=(f-h)*u;wa(b,g,S)}if(m>=l){const g=n.length;y=Math.floor(g/u)}if(y>f)if(this.defaultValue.length===1)i.subarray(f*u,y*u).fill(this.defaultValue[0]),f=y;else for(;y>f;){const g=i.slice(f*u);wa(g,d,u),++f}y<0?(c=m+1,h=f):(c=m,h=f,f=h+1)}}}function wa(s,e,t){for(let n=0;n<t;n++)s[n]=e[n]}function Sa(s,e){const t=[];for(let n of s){if(n<0){if(!e)throw new Error(`Dimension ${n} must be >= 0`);if(n<-1)throw new Error(`Dimension ${n} must be >= -1`);n=-1}t.push(n)}return t}function ix(s,e,t,n,r,a,i,o,u,l){return new Hs(s,e,t,n,r,a,i,o,u,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ox(s,e,t,n){const r=s===e,a=s<e&&t<0,i=e<s&&t>1;if(r||a||i)return Qe(0,n);const o=Math.abs(Math.ceil((e-s)/t)),u=Qe(o,n);e<s&&t===1&&(t=-1),u[0]=s;for(let l=1;l<u.length;l++)u[l]=u[l-1]+t;return u}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ux=et(s=>1/Math.sqrt(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lx(s,e,t,n,r,a,i,o,u,l){const d=[n/r,r],c=s.values,h=e.values;if(n===0)return de(t,e.dtype);const f=u instanceof Bs?u:de(d,e.dtype);typeof u=="string"||typeof u=="number"?f.values.fill(u):typeof u=="boolean"&&f.values.fill(+u);for(let m=0;m<a;m++){const y=[];let g=0;for(let b=0;b<i;b++){const S=c[m*i+b];y.push(S),g+=S*o[b]}if(g<0||g>=n/r)throw new Error(`Invalid indices: ${y} does not index into ${t}`);for(let b=0;b<r;b++)l?f.values[g*r+b]+=h[m*r+b]:f.values[g*r+b]=e.rank===0?h[0]:h[m*r+b]}return f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cx=et(s=>1/(1+Math.exp(-s)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dx(s,e,t,n,r){const a=Pw(n,e,t),i=D(t),o=me(n);if(a){const c=Aw(e,o);return r==="string"?s.slice(c,c+i):s.subarray(c,c+i)}const u=r==="string"?Ms(s):s,l=de(n,r,u),d=de(t,r);for(let c=0;c<d.size;++c){const h=d.indexToLoc(c),f=h.map((m,y)=>m+e[y]);d.set(l.get(...f),...h)}return r==="string"?wS(d.values):d.values}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hx(s,e,t,n,r,a,i){const o=e[0],u=a[0],l=new Array(u),d=new Array(o),c=e[1];if(u===0){if(o!==0)throw new Error(iS(o));const g=ue(t,0),b=ue(r,0);return[g,[0,c],b,l,d]}let h=!0,f=0;const m=new Array(u).fill(0);for(let g=0;g<o;++g){const b=s[g*c];if(b<0)throw new Error(oS(g,b));if(b>=u)throw new Error(uS(g,b,u));++m[b],h=h&&b>=f,f=b}let y=!0;for(let g=0;g<u;++g){const b=m[g]===0;l[g]=b,y=y&&!b,m[g]=Math.max(m[g],1),g>0&&(m[g]+=m[g-1])}if(y&&h){const g=s,b=n;for(let S=0;S<o;++S)d[S]=S;return[g,[o,c],b,l,d]}else{const g=m[u-1],b=ue(t,g*c),S=ue(r,g),x=new Array(u).fill(0);for(let C=0;C<o;++C){const v=s[C*c],k=x[v],R=(v===0?0:m[v-1])+k;x[v]++;for(let _=0;_<c;++_)b[R*c+_]=s[C*c+_];S[R]=n[C],d[C]=R}for(let C=0;C<u;++C)if(x[C]===0){const k=C===0?0:m[C-1];b[k*c+0]=C;for(let R=1;R<c;++R)b[k*c+R]=0;S[k]=i}return[b,[g,c],S,l,d]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function px(s,e,t,n,r){const a=D(n),i=e[0],o=r.length,u=[];let l=1,d=-1;for(let g=0;g<o;++g){const b=r[g];if(b===-1){if(d!==-1)throw new Error(lS(d,g));d=g,u.push(1)}else{if(b<0)throw new Error(cS(g,b));l*=b,u.push(b)}}if(d!==-1){if(l<=0)throw new Error(dS());const g=Math.trunc(a/l);if(l*g!==a)throw new Error(hS(n,u));u[d]=g}if(D(u)!==a)throw new Error(pS(n,u));const h=n.length,f=[];if(h>0){f[h-1]=1;for(let g=h-2;g>=0;--g)f[g]=f[g+1]*n[g+1]}const m=[];if(o>0){m[o-1]=1;for(let g=o-2;g>=0;--g)m[g]=m[g+1]*u[g+1]}const y=ue(t,i*o);for(let g=0;g<i;++g){let b=0;for(let S=0;S<h;++S)b+=s[g*h+S]*f[S];for(let S=0;S<o;++S)y[g*o+S]=Math.trunc(b/m[S]),b%=m[S]}return[y,[i,o],u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fx(s,e,t,n,r,a=!1,i=0){const o=n.length,u=[e[0],s.length/e[0]],l=u[1],c=o>0?r[o-1]+1:0;if(c<0)throw new Error(oa());const h=e.slice();h[0]=c;const f=h.reduce((x,C)=>x*C,1),m=ue(t,f);if(o===0)return c>0&&m.fill(i),[m,h];if(c<=0)throw new Error(oa());let y=0,g=1,b=0,S=r[y];for(;;){let x=0;if(g<o){if(x=r[g],S===x){++g;continue}if(S>=x)throw new Error(fS())}if(S<0||S>=c)throw new Error(mS(S,c));S>b&&m.fill(i,b*l,S*l);for(let C=y;C<g;++C){const v=n[C];if(v<0||v>=u[0])throw new Error(gS(C,n[C],u[0]));for(let k=0;k<l;k++)m[S*l+k]+=s[v*l+k]}if(a)for(let C=0;C<l;C++)m[S*l+C]/=g-y;if(y=g,++g,b=S+1,S=x,g>o)break}return b<c&&m.fill(i,b*l,c*l),[m,h]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mx=et(s=>Math.sqrt(s));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gx=Ie(((s,e)=>{const t=s-e;return t*t}));/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yx=et((s,e)=>{const{pattern:t,replaceGlobal:n,rewrite:r}=e;return s.replace(new RegExp(t,n?"g":""),r)});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bx(s,e,t,n){const r=de(s,e.dtype);for(let a=0;a<r.size;a++){const i=r.indexToLoc(a),o=new Array(i.length);for(let u=0;u<o.length;u++)o[u]=i[u]*t[u]+n[u];r.set(e.get(...o),...i)}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wx{constructor(e,t,n,r,a,i){this.separator=bt(e),this.nGramWidths=t,this.leftPad=bt(n),this.rightPad=bt(r),this.padWidth=a,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,a,i){for(let o=0;o<a;++o){const u=this.getPadWidth(i),l=Math.max(0,u-o),d=Math.max(0,u-(a-(o+1))),c=i-(l+d),h=t+(l>0?0:o-u);let f=0;f+=l*this.leftPad.length;for(let S=0;S<c;++S)f+=e[h+S].length;f+=d*this.rightPad.length;const m=l+d+c-1;f+=m*this.separator.length,n[r+o]=new Uint8Array(f);const y=n[r+o];let g=0;const b=S=>S.forEach(x=>y[g++]=x);for(let S=0;S<l;++S)b(this.leftPad),b(this.separator);for(let S=0;S<c-1;++S)b(e[h+S]),b(this.separator);if(c>0){b(e[h+c-1]);for(let S=0;S<d;++S)b(this.separator),b(this.rightPad)}else{for(let S=0;S<d-1;++S)b(this.rightPad),b(this.separator);b(this.rightPad)}}}compute(e,t){const n=e.length,r=t.length;if(r>0){let u=t[0];if(u!==0)throw new Error(`First split value must be 0, got ${u}`);for(let l=1;l<r;++l){let d=t[l]>=u;if(d=d&&t[l]<=n,!d)throw new Error(`Invalid split value ${t[l]}, must be in [${u}, ${n}]`);u=t[l]}if(u!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${u}`)}const a=r-1,i=ue("int32",r);if(n===0||r===0){const u=new Array(n);for(let l=0;l<=a;++l)i[l]=0;return[u,i]}i[0]=0;for(let u=1;u<=a;++u){const l=t[u]-t[u-1];let d=0;this.nGramWidths.forEach(c=>{d+=this.getNumNGrams(l,c)}),this.preserveShort&&l>0&&d===0&&(d=1),i[u]=i[u-1]+d}const o=new Array(i[a]);for(let u=0;u<a;++u){const l=t[u];let d=i[u];if(this.nGramWidths.forEach(c=>{const h=t[u+1]-t[u],f=this.getNumNGrams(h,c);this.createNGrams(e,l,o,d,f,c),d+=f}),this.preserveShort&&d===i[u]){const c=t[u+1]-t[u];if(c===0)continue;const h=c+2*this.padWidth;this.createNGrams(e,l,o,d,1,h)}}return[o,i]}}function Sx(s,e,t,n,r,a,i,o){return new wx(t,n,r,a,i,o).compute(s,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xx(s,e,t,n){if(!s.length)return;if(e.length===0){for(let a=0;a<s.length;++a)n.push(s.subarray(a,a+1));return}if(e.length===1){const a=e[0];let i=s.indexOf(a);for(;i!==-1;){const o=s.subarray(0,i);(!t||o.length!==0)&&n.push(o),s=s.subarray(i+1),i=s.indexOf(a)}(!t||s.length!==0)&&n.push(s);return}let r=0;for(let a=0;a<s.length+1;a++)if(a===s.length||e.indexOf(s[a])!==-1){const i=s.subarray(r,a);(!t||i.length!==0)&&n.push(i),r=a+1}}function Cx(s,e,t){const n=s.length,r=[];let a=0,i=0;const o=new Array(n);for(let h=0;h<n;++h){const f=r.length;xx(s[h],e,t,r);const m=r.length-f;o[h]=m,a+=m,i=Math.max(i,m)}const u=ue("int32",a*2),l=new Array(a),d=[n,i];let c=0;for(let h=0;h<n;++h)for(let f=0;f<o[h];++f)u[c*2]=h,u[c*2+1]=f,l[c]=r[c],++c;return[u,l,d]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ix(s,e){const t=ue("int32",s.length);for(let n=0;n<s.length;++n)t[n]=Gy(s[n]).modulo(e).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vx=Ie(((s,e)=>s-e));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nx(s,e){const t=new Array(s.rank);for(let r=0;r<t.length;r++)t[r]=s.shape[r]*e[r];const n=de(t,s.dtype);for(let r=0;r<n.values.length;++r){const a=n.indexToLoc(r),i=new Array(s.rank);for(let u=0;u<i.length;u++)i[u]=a[u]%s.shape[u];const o=s.locToIndex(i);n.values[r]=s.values[o]}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ss=(s,e)=>{const t=e.value-s.value;return t===0?s.index-e.index:t};function no(s,e,t=0,n=s.length-1){for(;n>t;){if(n-t>600){const o=n-t+1,u=e-t+1,l=Math.log(o),d=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*d*(o-d)/o)*Math.sign(u-o/2),h=Math.max(t,Math.floor(e-u*d/o+c)),f=Math.min(n,Math.floor(e+(o-u)*d/o+c));no(s,e,h,f)}const r=s[e];let a=t,i=n;for(Jt(s,t,e),ss(s[n],r)>0&&Jt(s,t,n);a<i;){for(Jt(s,a,i),a++,i--;ss(s[a],r)<0;)a=a+1;for(;ss(s[i],r)>0;)i=i-1}ss(s[t],r)===0?Jt(s,t,i):(i=i+1,Jt(s,i,n)),i<=e&&(t=i+1),e<=i&&(n=i-1)}}function kx(s,e,t,n,r){const a=e[e.length-1],[i,o]=[s.length/a,a],u=It(t,i*n),l=It("int32",i*n);for(let c=0;c<i;c++){const h=c*o,f=s.subarray(h,h+o);let m=new Array(f.length);f.forEach((S,x)=>m[x]={value:S,index:x}),n<m.length&&(no(m,n),m=m.slice(0,n)),r&&m.sort(ss);const y=c*n,g=u.subarray(y,y+n),b=l.subarray(y,y+n);for(let S=0;S<n;S++)g[S]=m[S].value,b[S]=m[S].index}const d=e.slice();return d[d.length-1]=n,[de(d,t,u),de(d,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(s,e,t,n){const r=it(e,t)[0],a=[1,t[0],1];for(let m=0;m<r;m++)a[0]*=t[m];a[1]=t[r];for(let m=r+1;m<t.length;m++)a[2]*=t[m];const i=new Map,o=new Int32Array(t[r]),u=new Bs(a,n,s),l=[],d=a[0]===1&&a[2]===1;for(let m=0;m<t[r];m++){let y;if(d)y=s[m].toString();else{const b=[];for(let S=0;S<a[0];S++)for(let x=0;x<a[2];x++)b.push(u.get(S,m,x));y=b.join(",")}const g=i.get(y);if(g!=null)o[m]=g;else{const b=i.size;i.set(y,b),o[m]=b,l.push(m)}}const c=a.slice();c[1]=i.size;const h=new Bs(c,n);l.forEach((m,y)=>{for(let g=0;g<a[0];g++)for(let b=0;b<a[2];b++)h.set(u.get(g,m,b),g,y,b)});const f=t.slice();return f[r]=c[1],{outputValues:h.values,outputShape:f,indices:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tx=Object.freeze(Object.defineProperty({__proto__:null,addImpl:k1,bincountImpl:$1,bincountReduceImpl:T1,bitwiseAndImpl:R1,castImpl:N1,ceilImpl:E1,concatImpl:P1,equalImpl:A1,expImpl:D1,expm1Impl:_1,floorDivImpl:F1,floorImpl:O1,gatherNdImpl:z1,gatherV2Impl:L1,greaterEqualImpl:V1,greaterImpl:B1,lessEqualImpl:U1,lessImpl:W1,linSpaceImpl:M1,logImpl:G1,maxImpl:H1,maximumImpl:j1,minimumImpl:q1,multiplyImpl:so,negImpl:K1,notEqualImpl:X1,prodImpl:Q1,raggedGatherImpl:rx,raggedRangeImpl:ax,raggedTensorToTensorImpl:ix,rangeImpl:ox,rsqrtImpl:ux,scatterImpl:lx,sigmoidImpl:cx,simpleAbsImpl:v1,sliceImpl:dx,sparseFillEmptyRowsImpl:hx,sparseReshapeImpl:px,sparseSegmentReductionImpl:fx,sqrtImpl:mx,squaredDifferenceImpl:gx,staticRegexReplaceImpl:yx,stridedSliceImpl:bx,stringNGramsImpl:Sx,stringSplitImpl:Cx,stringToHashBucketFastImpl:Ix,subImpl:vx,tileImpl:Nx,topKImpl:kx,transposeImpl:Y1,uniqueImpl:$x},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:Rx,castImpl:Ex,ceilImpl:Px,concatImpl:Ax,equalImpl:Dx,expImpl:_x,expm1Impl:Ox,floorImpl:Fx,floorDivImpl:zx,gatherNdImpl:Lx,gatherV2Impl:Bx,greaterEqualImpl:Vx,greaterImpl:Wx,lessEqualImpl:Ux,lessImpl:Mx,logImpl:Gx,maxImpl:Hx,maximumImpl:jx,minimumImpl:qx,multiplyImpl:Kx,negImpl:Xx,notEqualImpl:Yx,prodImpl:Qx,rangeImpl:Jx,rsqrtImpl:Zx,scatterImpl:e2,simpleAbsImpl:t2,sliceImpl:s2,stridedSliceImpl:n2,stringNGramsImpl:r2,subImpl:a2,tileImpl:i2,topKImpl:o2,transposeImpl:u2}=Tx;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l2=K({opType:T.ABS,cpuKernelImpl:t2}),c2={kernelName:ri,backendName:"webgpu",kernelFunc:l2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const d2=K({opType:T.ACOS}),h2={kernelName:Zf,backendName:"webgpu",kernelFunc:d2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p2=K({opType:T.ACOSH}),f2={kernelName:em,backendName:"webgpu",kernelFunc:p2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m2=le({opType:B.ADD,cpuKernelImpl:Rx,supportsComplex:!0}),g2={kernelName:hr,backendName:"webgpu",kernelFunc:m2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class y2{constructor(e){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e[0],this.variableNames=e.map((t,n)=>`T${n}`),this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const e=[];this.variableNames.forEach(r=>{e.push(`let v${r} = get${r}ByOutputCoords(coords);`)});const t=this.variableNames.map(r=>`v${r}`).join(" + ");return`
      ${E("index")} {
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${e.join(`
        `)}
            setOutputAtIndex(flatIndex, ${t});
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b2(s){const{inputs:e,backend:t}=s,n=e;if(n.length===1)return $e({inputs:{x:n[0]},backend:t});const r=n.map(o=>o.dtype).reduce((o,u)=>at(o,u)),a=n.map(o=>o.shape),i=new y2(a);return t.runWebGPUProgram(i,n,r)}const w2={kernelName:tm,backendName:"webgpu",kernelFunc:b2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S2{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[16,16,1];const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.dispatchLayout={x:[0],y:[1]},this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){A(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);const e=this.workgroupSize[0];return`
      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;
      ${E()} {
        var x = i32(workgroupId.x) * ${e} + i32(localId.x);
        var y = i32(workgroupId.y) * ${e} + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] = f32(A[y * width + x]);
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * ${e} + i32(localId.x);
        y = i32(workgroupId.x) * ${e} + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class x2{constructor(e,t){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=t,this.shaderKey=`transpose_${t}`}getUserCode(){const e=se(this.outputShape.length),t=ro(this.newDim);return`
      ${E("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(
              ${e}(${t}), uniforms.aShape)]);
          }
        }
      }
    `}}function ro(s){const e=s.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=new Array(e);for(let n=0;n<s.length;n++)t[s[n]]=`coords.${Ye(n)}`;return t.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Me(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{perm:a}=n,i=t,o=r.shape.length,u=new Array(o);for(let d=0;d<u.length;d++)u[d]=r.shape[a[d]];if(t.shouldExecuteOnCPU([r])){const c=i.tensorMap.get(r.dataId).values,h=u2(c,r.shape,r.dtype,a,u);return t.makeTensorInfo(u,r.dtype,h)}if(r.shape.length===2&&Je(a,[1,0])){const d=new S2(r.shape,a);return i.runWebGPUProgram(d,[r],r.dtype)}const l=new x2(r.shape,a);return i.runWebGPUProgram(l,[r],r.dtype)}const C2={kernelName:$y,backendName:"webgpu",kernelFunc:Me};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class I2{constructor(e,t,n){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[e.batchSize,e.inSize];const[r]=rn(this.inputShape,[1]);this.outputShape=r.length===0?[1]:r,e.inSize>=32768&&n>=512?this.workgroupSize=[512,1,1]:e.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=t,this.shaderKey=`reduce_${t}`}getUserCode(){let e="",t="0.0";const n=this.workgroupSize[0];this.reduceType==="min"||this.reduceType==="max"?(e=`
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${this.reduceType==="min"?"<":">"} bestValue)
           {  bestValue = candidate; }`,t="f32(x[offset])"):this.reduceType==="sum"||this.reduceType==="mean"?e=" bestValue = bestValue + candidate; ":this.reduceType==="prod"?(e=" bestValue = bestValue * candidate; ",t="1.0"):this.reduceType==="all"?(e=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",t="1.0"):this.reduceType==="any"&&(e=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",t="0.0");const r=this.reduceType==="mean"?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${`
         var<workgroup> xBestValues : array<f32, ${n}>;
       `}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${this.outputShape.length===1?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${E("index")} {
         let outputIndex = index / ${n};
         let offset = getOffset(outputIndex);
         var bestValue = ${t};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), ${n}u);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + ${n}) {
           let candidate = f32(x[offset + k]);
           ${e}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), ${n}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${e}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${r}
        }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v2={mean:"float32",all:"bool",any:"bool"};function At(s,e,t,n,r){const a=s.shape.length,i=[],o=it(e,s.shape);let u=o;const l=xs(u,a);let d=s;l!=null&&(d=Me({inputs:{x:s},attrs:{perm:l},backend:r}),u=Cs(u.length,a),i.push(d)),yr(n,u,a);const[c,h]=rn(d.shape,u);let f=c;t&&(f=Zb(c,o));let m;if((n==="max"||n==="prod")&&r.shouldExecuteOnCPU([d])){const y=r.tensorMap.get(d.dataId).values;switch(n){case"max":const g=Hx(y,D(h),f,s.dtype);m=r.makeTensorInfo(f,s.dtype,g);break;case"prod":const{outVals:b,outShape:S,outDtype:x}=Qx(d.shape,d.dtype,y,u);m=r.makeTensorInfo(S,x,b);break;default:throw new Error(`${n} CPU implementation is not yet supported.`)}}else{const y=D(h),b=D(d.shape)/y,S={windowSize:y,inSize:y,batchSize:b,outSize:1},x=v2[n]||nb(s.dtype),C=[{type:"int32",data:[y]}],v=new I2(S,n,r.device.limits.maxComputeWorkgroupSizeX),k=r.runWebGPUProgram(v,[d],x,C);i.push(k),m=F({inputs:{x:k},attrs:{shape:f},backend:r})}return i.forEach(y=>r.disposeData(y.dataId)),m}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{keepDims:a,axis:i}=n;return At(r,i,a,"all",t)}const k2={kernelName:sm,backendName:"webgpu",kernelFunc:N2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{keepDims:a,axis:i}=n;return At(r,i,a,"any",t)}const T2={kernelName:nm,backendName:"webgpu",kernelFunc:$2};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ao{constructor(e,t,n){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const r=[t];this.op=n==="min"?"<":">";const[a,i]=rn(e,r);this.outputShape=a.length===0?[1]:a,this.dispatchLayout=O(this.outputShape),D(i)<32?(this.type="plain",this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=P(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=e,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const e=this.workgroupSize[0],t=()=>this.inputShape.length===1?"uniforms.xShape":`uniforms.xShape.${Ye(this.inputShape.length-1)}`,n=()=>{let r="";if(this.outputShape.length===1)this.inputShape.length!==1&&(r+="outputCoords,");else for(let a=0;a<this.outputShape.length;a++)r+=`outputCoords.${Ye(a)},`;return r};return this.type==="shared"?`
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${`
      var<workgroup> xBestIndices : array<i32, ${e}>;
      var<workgroup> xBestValues : array<f32, ${e}>;
    `}

      ${E("index")} {
        let outputIndex = index / ${e};
        let reduceLength = ${t()};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;
        let outputCoords = getCoordsFromIndex(outputIndex);
        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;
            k = k + ${e}) {
          let candidate = getX(${n()} k);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(reduceLength), ${e}u);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `:`
      ${E("index")} {
        if (index < uniforms.size) {
          let outputCoords = getCoordsFromIndex(index);
          var bestIndex = 0;
          var bestValue = getX(${n()} 0);
          let reduceLength = ${t()};
          for (var i = 1; i < reduceLength; i++) {
            let candidate = getX(${n()} i);
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              bestIndex = i;
            }
          }
          setOutputAtIndexI32(index, bestIndex);
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a}=n;let i=it(a,r.shape);const o=xs(i,r.shape.length);let u=r;const l=[];o!=null&&(u=Me({inputs:{x:r},backend:t,attrs:{perm:o}}),l.push(u),i=Cs(i.length,u.shape.length)),yr("argMax",[i[0]],u.shape.length);const d=new ao(u.shape,i[0],"max"),c=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],h=t.runWebGPUProgram(d,[u],"int32",c);return l.forEach(f=>t.disposeData(f.dataId)),h}const E2={kernelName:rm,backendName:"webgpu",kernelFunc:R2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a}=n;let i=it(a,r.shape);const o=xs(i,r.shape.length);let u=r;const l=[];o!=null&&(u=Me({inputs:{x:r},backend:t,attrs:{perm:o}}),l.push(u),i=Cs(i.length,u.shape.length)),yr("argMin",[i[0]],u.shape.length);const d=new ao(u.shape,i[0],"min"),c=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],h=t.runWebGPUProgram(d,[u],"int32",c);return l.forEach(f=>t.disposeData(f.dataId)),h}const A2={kernelName:am,backendName:"webgpu",kernelFunc:P2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D2=K({opType:T.ASIN}),_2={kernelName:im,backendName:"webgpu",kernelFunc:D2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O2=K({opType:T.ASINH}),F2={kernelName:om,backendName:"webgpu",kernelFunc:O2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z2=K({opType:T.ATAN}),L2={kernelName:um,backendName:"webgpu",kernelFunc:z2};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B2=le({opType:B.ATAN2}),V2={kernelName:cm,backendName:"webgpu",kernelFunc:B2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W2=K({opType:T.ATANH}),U2={kernelName:lm,backendName:"webgpu",kernelFunc:W2};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class M2{constructor(e){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.strides;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ds{constructor(e,t,n=!1,r=!1,a=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=r,this.includeBatchIndex=a,this.shaderKey=`pool2D_${t}_${n}_${r}_${a}`}getUserCode(){let e;this.poolType==="avg"?e="resultValue = resultValue + value; count = count + 1.0;":this.computePositions?e=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};
      }`:e="resultValue = max(value, resultValue);";let t="resultValue";return this.poolType==="avg"&&(t="resultValue / max(count, 1.0)"),`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, d);
              ${e}
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}
        }
      }
    `}}class xr{constructor(e,t,n=!1,r=!1,a=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=r,this.includeBatchIndex=a,this.shaderKey=`pool3D_${t}_${n}_${r}_${a}`}getUserCode(){let e;this.poolType==="avg"?e="resultValue += value; count += 1.0;":this.computePositions?e=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};
      }`:e="resultValue = max(value, resultValue);";let t="resultValue";return this.poolType==="avg"&&(t="resultValue / max(count, 1.0)"),`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords.x;
          let ch = coords.u;

          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
          let xDCorner = xCorner.x;
          let xRCorner = xCorner.y;
          let xCCorner = xCorner.z;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {
            let xD = xDCorner + wD;
            if (xD < 0 || xD >= uniforms.convDims.x) {
              continue;
            }

            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {
              let xR = xRCorner + wR;
              if (xR < 0 || xR >= uniforms.convDims.y) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {
                let xC = xCCorner + wC;
                if (xC < 0 || xC >= uniforms.convDims.z) {
                  continue;
                }

                let value = getX(batch, xD, xR, xC, ch);
                ${e}
              }
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function io(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{reductionIndices:a,keepDims:i}=n;return At(r,a,i,"max",t)}const G2={kernelName:xg,backendName:"webgpu",kernelFunc:io};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oo(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{keepDims:a,axis:i}=n;return At(r,i,a,"mean",t)}const H2={kernelName:$g,backendName:"webgpu",kernelFunc:oo};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uo(s,e,t,n){if(e.filterWidth===1&&e.filterHeight===1&&Je(e.inShape,e.outShape))return $e({inputs:{x:s},backend:n});if(e.filterWidth===e.inWidth&&e.filterHeight===e.inHeight&&e.batchSize===1&&e.padInfo.type==="VALID"){const i=s.shape.length,o=F({inputs:{x:s},backend:n,attrs:{shape:[s.shape[i-3]*s.shape[i-2],s.shape[i-1]]}});let u;t==="avg"?u=oo({inputs:{x:o},backend:n,attrs:{axis:0,keepDims:!1}}):(A(t==="max",()=>`Invalid pool type ${t}`),u=io({inputs:{x:o},backend:n,attrs:{reductionIndices:0,keepDims:!1}}));const l=F({inputs:{x:u},backend:n,attrs:{shape:e.outShape}});return n.disposeData(o.dataId),n.disposeData(u.dataId),l}let r;const a=[{type:"int32",data:[e.strideHeight,e.strideWidth]}];return e.filterHeight===1&&e.filterWidth===1?r=new M2(e):(t==="avg"?r=new ds(e,"avg"):(A(t==="max",()=>`Invalid pool type ${t}`),r=new ds(e,"max")),a.push({type:"int32",data:[e.padInfo.top,e.padInfo.left]},{type:"int32",data:[e.dilationHeight,e.dilationWidth]},{type:"int32",data:[e.inHeight,e.inWidth]},{type:"int32",data:[e.effectiveFilterHeight,e.effectiveFilterWidth]})),n.runWebGPUProgram(r,[s],s.dtype,a)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{filterSize:a,strides:i,pad:o,dimRoundingMode:u}=n,d=Ss(r.shape,a,i,1,o,u);return uo(r,d,"avg",t)}const q2={kernelName:dm,backendName:"webgpu",kernelFunc:j2};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K2(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{filterSize:a,strides:i,pad:o,dataFormat:u,dimRoundingMode:l}=n,d=[1,1,1],c=sn(r.shape,a,i,d,o,l,u),h=new xr(c,"avg"),f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.inDepth,c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]}];return t.runWebGPUProgram(h,[r],r.dtype,f)}const X2={kernelName:pm,backendName:"webgpu",kernelFunc:K2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y2{constructor(e){this.variableNames=["dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);

            dotProd = dotProd + dyValue * uniforms.avgMultiplier;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Q2{constructor(e){this.variableNames=["dy"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              dotProd += dyValue * uniforms.avgMultiplier;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J2(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,input:a}=e,i=a,{filterSize:o,strides:u,pad:l,dimRoundingMode:d}=n,c=sn(i.shape,o,u,1,l,d),h=new Q2(c),f=1/(c.filterDepth*c.filterHeight*c.filterWidth),m=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.effectiveFilterDepth-1-c.padInfo.front,c.effectiveFilterHeight-1-c.padInfo.top,c.effectiveFilterWidth-1-c.padInfo.left]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]},{type:"int32",data:[c.outDepth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"float32",data:[f]}];return t.runWebGPUProgram(h,[r],i.dtype,m)}const Z2={kernelName:fm,backendName:"webgpu",kernelFunc:J2};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eC(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,input:a}=e,i=a;eo([r,a],"avgPoolGrad");const{filterSize:o,strides:u,pad:l}=n,d=Ss(i.shape,o,u,1,l),c=new Y2(d),h=1/(d.filterHeight*d.filterWidth),f=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"float32",data:[h]}];return t.runWebGPUProgram(c,[r],i.dtype,f)}const tC={kernelName:hm,backendName:"webgpu",kernelFunc:eC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sC(s){const{inputs:e,backend:t,attrs:n}=s,{a:r,b:a}=e,{transposeA:i,transposeB:o}=n;return ln({a:r,b:a,transposeA:i,transposeB:o,backend:t})}const nC={kernelName:mm,backendName:"webgpu",kernelFunc:sC};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rC{constructor(e,t){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.rank=t.length,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=e,this.uniforms=`start : ${se(e.length)}, `,this.shaderKey="slice"}getUserCode(){const e=se(this.rank),t=aC(this.rank);let n;return this.start.length===1?n=this.outputShape.map((a,i)=>"sourceLoc = uniforms.start + coords;"):n=this.outputShape.map((a,i)=>`sourceLoc.${Qn[i]} = uniforms.start.${Ye(i)} + coords.${Qn[i]};`),`
      ${E("index")} {
        if (index < uniforms.size) {
          var sourceLoc : ${e};
          let coords = getCoordsFromIndex(index);
          ${n.join(`
`)}
          setOutputAtIndex(index, getSource(${t}));
        }
      }
    `}}const Qn=["x","y","z","w","u","v"];function aC(s){if(s===1)return"sourceLoc";if(s<=6)return Qn.slice(0,s).map(e=>`sourceLoc.${e}`).join(",");throw Error(`Slicing for rank ${s} is not yet supported`)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yt(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{begin:a,size:i}=n,[o,u]=Dw(r,a,i);if(Rw(r,o,u),t.shouldExecuteOnCPU([r])||r.dtype==="string"){const c=t.tensorMap.get(r.dataId),h=s2(c.values,o,u,r.shape,r.dtype);return t.makeTensorInfo(u,r.dtype,h)}if(D(u)===0)return t.makeTensorInfo(u,r.dtype,[]);const l=new rC(o,u),d=[{type:"int32",data:o}];return t.runWebGPUProgram(l,[r],r.dtype,d)}const iC={kernelName:iy,backendName:"webgpu",kernelFunc:Yt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oC=s=>{const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{blockShape:a,crops:i}=n;A(r.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");const o=a.reduce((S,x)=>S*x),u=qi(r.shape,a,o),l=Ki(u.length,a.length),d=Xi(r.shape,a,o),c=Uw(i,a.length),h=Mw(d,i,a.length),f=[],m=F({inputs:{x:r},backend:t,attrs:{shape:u}}),y=Me({inputs:{x:m},backend:t,attrs:{perm:l}}),g=F({inputs:{x:y},backend:t,attrs:{shape:d}}),b=Yt({inputs:{x:g},backend:t,attrs:{begin:c,size:h}});return f.push(m),f.push(y),f.push(g),f.forEach(S=>t.disposeData(S.dataId)),b},uC={kernelName:gm,backendName:"webgpu",kernelFunc:oC};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lC=`
  fn bincount_write(index: i32, value: f32) {
    ${ot("&result[index]","value","float32")}
  }
`,cC=`
  fn bincount_write(index: i32, value: f32) {
    atomicStore(&result[index], bitcast<i32>(value));
  }
`;class lo{constructor(e,t,n=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=e,this.rank=e.length,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=n,n&&(this.atomic=!1),this.hasWeights=t,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`
    ${this.binaryOutput?cC:lC}
  ${E("index")} {
    ${this.rank===1?`if (index < uniforms.xShape) {
      let indexVal = i32(getX(index));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};
        bincount_write(indexVal, value);
      }
    }`:`let coord = getCoordsFromIndex(index);
    if (coordsInBounds2D(coord, uniforms.xShape)) {
      let indexVal = i32(getX(coord[0], coord[1]));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};
        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);
      }
    }`}
  }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dC(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,weights:a}=e,{size:i}=n,o=D(r.shape),l=D(a.shape)>0,d=[i],c=a.dtype,h=xe({backend:t,attrs:{shape:d,value:0,dtype:c}}),f=new lo([o],l),m=[{type:"int32",data:[i]}],y=l?[r,a]:[r];return t.runWebGPUProgram(f,y,c,m,h)}const hC={kernelName:ym,backendName:"webgpu",kernelFunc:dC};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pC{constructor(e){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`
  ${E("index")} {
    if (index < uniforms.size) {
      var s0 = 1.0;
      var s1 = 1.0;
      let indexS0 = index - uniforms.size + uniforms.s0Size;
      let indexS1 = index - uniforms.size + uniforms.s1Size;
      if (indexS0 >= 0) {
        s0 = getS0(indexS0);
      }
      if (indexS1 >= 0) {
        s1 = getS1(indexS1);
      }

      if (s0 == 1.0) {
        setOutputAtIndex(index, s1);
      } else if (s1 == 1.0) {
        setOutputAtIndex(index, s0);
      } else if (s0 != s1) {
        setOutputAtIndex(index, uniforms.NAN);
      } else {
        setOutputAtIndex(index, s0);
      }
    }
  }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fC(s){const{inputs:e,backend:t}=s,{s0:n,s1:r}=e;if(t.shouldExecuteOnCPU([n,r])){const d=t.tensorMap.get(n.dataId),c=t.tensorMap.get(r.dataId),h=d.values,f=c.values,m=Ve(Array.from(h),Array.from(f));return t.makeTensorInfo([m.length],"int32",Int32Array.from(m))}const a=D(n.shape),i=D(r.shape),o=Math.max(a,i),u=new pC(o),l=[{type:"int32",data:[a]},{type:"int32",data:[i]}];return t.runWebGPUProgram(u,[n,r],"int32",l)}const mC={kernelName:bm,backendName:"webgpu",kernelFunc:fC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const co=le({opType:B.NOT_EQUAL,dtype:"bool",cpuKernelImpl:Yx}),gC={kernelName:_g,backendName:"webgpu",kernelFunc:co};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Is(s){const{inputs:e,backend:t}=s,{input:n}=e,r=t.tensorMap.get(n.dataId);return $e({inputs:{x:r.complexTensorInfos.real},backend:t})}const yC={kernelName:Gg,backendName:"webgpu",kernelFunc:Is};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bC(s,e){const t=new Xt(s.shape,T.TO_INT),n=e.runWebGPUProgram(t,[s],"int32");return{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jn(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{dtype:a}=n;if(a==="complex64"){if(r.dtype==="complex64")return $e({inputs:{x:r},backend:t});const i=Xn(r.shape),o=Jn({inputs:{x:r},backend:t,attrs:{dtype:"float32"}}),u=Pt({inputs:{real:o,imag:i},backend:t});return i.dispose(),t.disposeData(o.dataId),u}if(r.dtype==="complex64"){const i=Is({inputs:{input:r},backend:t}),o=Jn({inputs:{x:i},backend:t,attrs:{dtype:a}});return t.disposeData(i.dataId),o}if(!Uf(r.dtype,a)){const i=$e({inputs:{x:r},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:a}}if(t.shouldExecuteOnCPU([r])){const i=t.tensorMap.get(r.dataId).values,[o,u,l]=Ex(i,r.shape,r.dtype,a);return t.makeTensorInfo(o,u,l)}if(a==="int32")return bC(r,t);if(a==="bool"){const i=t.makeTensorInfo([],"bool",It("bool",1)),u=co({inputs:{a:r,b:i},backend:t});return t.disposeData(i.dataId),u}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${a}`)}const wC={kernelName:pr,backendName:"webgpu",kernelFunc:Jn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SC=K({opType:T.CEIL,cpuKernelImpl:Px}),xC={kernelName:wm,backendName:"webgpu",kernelFunc:SC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class CC{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`
      ${E("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue = clamp(
              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));
          clampedValue = select(clampedValue, value, isnanVec4(value));
          setOutputAtIndex(index, clampedValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class IC{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`
      ${E("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vC(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{clipValueMin:a,clipValueMax:i}=n;let o;const u=[{type:"float32",data:[a]},{type:"float32",data:[i]}];return D(r.shape)%4===0?o=new CC(r.shape):o=new IC(r.shape),t.runWebGPUProgram(o,[r],r.dtype,u)}const NC={kernelName:Sm,backendName:"webgpu",kernelFunc:vC};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kC{constructor(e){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        let re = abs(getRealByOutputIndex(index));
        let im = abs(getImagByOutputIndex(index));
        let mx = max(re, im);

        // The length function in wgsl may be not underflow-safe on some GPUs.
        // So the safe solution is to ensure underflow-safety in all cases.
        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xa(s,e){return{dataId:e.dataId,dtype:e.dtype,shape:s.shape}}function $C(s){const{inputs:e,backend:t}=s,{x:n}=e,r=t.tensorMap.get(n.dataId),a=new kC(n.shape),i=[xa(n,r.complexTensorInfos.real),xa(n,r.complexTensorInfos.imag)];return t.runWebGPUProgram(a,i,i[0].dtype)}const TC={kernelName:ii,backendName:"webgpu",kernelFunc:$C};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class RC{constructor(e){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=cs(e,1),this.variableNames=e.map((t,n)=>`T${n}`),this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=e.length-1;for(let t=0;t<this.offsetLength;t++)this.uniforms+=`offset${t} : i32,`;this.shaderKey="concat"}getUserCode(){const e=[];if(this.offsetLength>0){e.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let a=1;a<this.offsetLength;a++)e.push(`else if (yC < uniforms.offset${[a]}){ setOutputAtCoords(coords.x, coords.y, getT${a}(yR, yC - uniforms.offset${a-1})); }`);const n=this.offsetLength,r=this.offsetLength-1;e.push(`else { setOutputAtCoords(coords.x, coords.y, getT${n}(yR, yC - uniforms.offset${r})); }`)}else e.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`
      ${E("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${e.join(`
        `)}
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cn(s){const{inputs:e,backend:t}=s,{input:n}=e,r=t.tensorMap.get(n.dataId);return $e({inputs:{x:r.complexTensorInfos.imag},backend:t})}const EC={kernelName:ig,backendName:"webgpu",kernelFunc:cn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ns(s,e,t){const n=s[0].dtype;if(n==="complex64"){const m=s.map(x=>Is({inputs:{input:x},backend:t})),y=s.map(x=>cn({inputs:{input:x},backend:t})),g=ns(m,e,t),b=ns(y,e,t),S=Pt({inputs:{real:g,imag:b},backend:t});return m.forEach(x=>t.disposeData(x.dataId)),y.forEach(x=>t.disposeData(x.dataId)),t.disposeData(g.dataId),t.disposeData(b.dataId),S}let r=t.shouldExecuteOnCPU(s);if(n==="string"&&(r=!0),r){const m=s.map(v=>{const R=[-1,D(v.shape.slice(e))];return F({inputs:{x:v},backend:t,attrs:{shape:R}})}),y=m.map(v=>({vals:t.readSync(v.dataId),shape:v.shape})),g=cs(m.map(v=>v.shape),1),b=m[0].shape[0]===1,S=Ax(y,g,n,b),x=cs(s.map(v=>v.shape),e),C=t.makeTensorInfo(x,n,S);return m.forEach(v=>t.disposeData(v.dataId)),C}const a=t.device.limits.maxStorageBuffersPerShaderStage-1;if(s.length>a){const m=[];for(let g=0;g<s.length;g+=a){const b=s.slice(g,g+a);m.push(ns(b,e,t))}const y=ns(m,e,t);for(const g of m)t.disposeData(g.dataId);return y}const{tensors2D:i,outShape:o}=PC(s,e,t),u=i.map(m=>m.shape),l=new RC(u),d=[],c=new Array(u.length-1);if(c.length>0){c[0]=u[0][1],d.push({type:"int32",data:[c[0]]});for(let m=1;m<c.length;m++)c[m]=c[m-1]+u[m][1],d.push({type:"int32",data:[c[m]]})}const h=t.runWebGPUProgram(l,i,i[0].dtype,d);i.forEach(m=>t.disposeData(m.dataId));const f=F({inputs:{x:h},backend:t,attrs:{shape:o}});return t.disposeData(h.dataId),f}function PC(s,e,t){const n=cs(s.map(a=>a.shape),e);return{tensors2D:s.map(a=>F({inputs:{x:a},backend:t,attrs:{shape:[D(a.shape.slice(0,e)),D(a.shape.slice(e))]}})),outShape:n}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ho(s){const{inputs:e,backend:t,attrs:n}=s,{axis:r}=n,a=it(r,e[0].shape)[0],i=e.map(l=>l.shape);Fw(i,a);const o=cs(e.map(l=>l.shape),a);if(D(o)===0)return t.makeTensorInfo(o,e[0].dtype,[]);const u=e.filter(l=>D(l.shape)>0);return u.length===1?$e({inputs:{x:u[0]},backend:t}):ns(u,a,t)}const AC={kernelName:xm,backendName:"webgpu",kernelFunc:ho};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DC(s,e,t,n,r=!1,a=null,i=!1,o=4,u=4,l=4){const d=I=>{switch(I){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${I} is not supported.`)}},c=I=>{switch(I){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${I} is not supported.`)}},h=s?`
      let coord = vec4<i32>(batch, xRow, xCol, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, xRow, xCol);
      `,f=s?`
      let coords = vec4<i32>(
        batch,
        row / outWidth,
        row % outWidth,
        col);
      `:`
      let coords = vec4<i32>(
        batch,
        row,
        col / outWidth,
        col % outWidth);
      `,m=s?"uniforms.xShape[1]":"uniforms.xShape[2]",y=s?"uniforms.xShape[2]":"uniforms.xShape[3]",g=s?"row":"col",b=s?"col":"row",S=`
      let inChannels = uniforms.wShape[2];
      let outWidth = ${s?"uniforms.outShape[2]":"uniforms.outShape[3]"};
      let outRow = ${g} / outWidth;
      let outCol = ${g} % outWidth;

      let WRow = ${b} / (uniforms.filterDims[1] * inChannels);
      let WCol = ${b} / inChannels % uniforms.filterDims[1];
      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];
      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];
      let xCh = ${b} % inChannels;
      var resData = ${G(o)}(0.0);
      // The bounds checking is always needed since we use it to pad zero for
      // the 'same' padding type.
      if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
        ${h}
        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);
        ${d(o)}
      }
      return resData;`,x=s?e&&n?`
      ${S}`:`
      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${S}
      }
      return ${G(o)}(0.0);`:n&&t?`
      ${S}`:`
      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {
        ${S}
      }
      return ${G(o)}(0.0);`,C=`${c(u)}`,v=G(l),k=G(s?o:u),R=G(s?u:o);return`
      ${Ze(a,i,l===4,4)}
      fn mm_readA(batch: i32, row : i32, col : i32) -> ${k} {
        ${s?x:C}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> ${R} {
        ${s?C:x}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${v}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)
        {
        var value = valueIn;
        let outWidth = ${s?"uniforms.outShape[2]":"uniforms.outShape[3]"};
        ${f}
        ${Et(r,a)}
        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }`}class _C{constructor(e,t,n,r,a=!1,i=null,o=!1,u=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.outShape,this.isChannelsLast=e.dataFormat==="channelsLast",this.isVec4=((e.inChannels%4===0||e.inChannels%3===0)&&this.isChannelsLast||e.outWidth%4===0&&!this.isChannelsLast)&&e.outChannels%4===0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=Qi(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Ji(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&e.inChannels%4!==0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),a&&(this.variableNames.push("bias"),this.variableComponents.push(4)),o&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],a&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=u,this.addBias=a,this.activation=i,this.hasPreluActivationWeights=o,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=t%this.tileAOuter===0,this.fitBOuter=n%this.tileBOuter===0,this.fitInner=r%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const e=this.isVec4?on(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):un(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),t=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`
    ${DC(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,t[0],t[1],t[2])}
    ${e}
  `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class OC{constructor(e,t=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=e.outShape,this.isChannelsLast=e.dataFormat==="channelsLast",this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=t,this.activation=n,this.hasPreluActivationWeights=r,t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`
       ${Ze(this.activation,this.hasPreluActivationWeights,!1,4)}
       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{
         let coords = vec4<i32>(batch, row, col, chan);
         if (coordsInBounds4D(coords, uniforms.xShape)) {
           return  getX(batch, row, col, chan);
         } else {
          return 0.0;
         }
       }
       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
         let coords = vec4<i32>(row, col, xChannel, outChannel);
         if(coordsInBounds4D(coords, uniforms.wShape)) {
           return getW(row, col, xChannel, outChannel);
          } else {
            return 0.0;
          }
       }
       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {
         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}
         if (coordsInBounds4D(coords, uniforms.outShape)) {
           var value = valueIn;
           ${Et(this.addBias,this.activation)}
           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);
         }
       }
       ${E("index")} {
         let coords = getOutputCoords();
         let batch = coords[0];
         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}
         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}
         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}
         var acc : f32 = 0.0;
         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];
             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];
             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {
               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}
               let f = readFilt(row, col, xChannel, outChannel);
               acc = acc + v * f;
             }
           }
         }
         writeResult(batch, outRow, outCol, outChannel, acc);
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class FC{constructor(e,t){this.variableNames=["x"],this.uniforms=`pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,
       inChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?"coords[1]":"coords[2]",r=this.isChannelsLast?"coords[2]":"coords[1]",a=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`
    ${E("index")} {
      let coords = getCoordsFromIndex(index);
      if(index < uniforms.size) {
        let batch = coords[0];
        let row = ${n};
        let col = ${r};
        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];
        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);
        var value = 0.0;
        if(xRow < uniforms.xShape[${e}] && xRow >= 0) {
          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -
              uniforms.pads[1];
          let xCol = offsetX + uniforms.dilations[1] * ((col %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
          let ch = col % uniforms.inChannels;
          if(xCol < uniforms.xShape[${t}] && xCol >= 0) {
            value = ${a};
          }
        }
        setOutputAtIndex(index, value);
      }
    }
   `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function js(s,e){const t=s.length;return t>=3?e?[...s.slice(0,-3),s[t-3]*s[t-2],s[t-1]]:[...s.slice(0,-3),s[t-3],s[t-2]*s[t-1]]:!e&&t===1&&s[0]>1?[s[0],1]:null}function zC({x:s,filter:e,convInfo:t,backend:n,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:i=0,activation:o=null}){const u=t.dataFormat==="channelsLast",l=!u,d=!1,c=u&&t.filterHeight===t.inHeight&&t.filterWidth===t.inWidth&&t.padInfo.type==="VALID",h=[];let f,m;if(c){const b=t.inHeight*t.inWidth*t.inChannels;f=F({inputs:{x:s},backend:n,attrs:{shape:[1,t.batchSize,b]}}),m=F({inputs:{x:e},backend:n,attrs:{shape:[1,b,t.outChannels]}})}else f=F({inputs:{x:s},backend:n,attrs:{shape:u?[t.batchSize,t.inHeight*t.inWidth,t.inChannels]:[t.batchSize,t.inChannels,t.inHeight*t.inWidth]}}),m=F({inputs:{x:e},backend:n,attrs:{shape:[1,t.inChannels,t.outChannels]}});if(h.push(f),h.push(m),a!=null){const b=js(a.shape,u);b!=null&&(a=F({inputs:{x:a},backend:n,attrs:{shape:b}}),h.push(a))}if(r!=null){const b=js(r.shape,u);b!=null&&(r=F({inputs:{x:r},backend:n,attrs:{shape:b}}),h.push(r))}const y=ln({a:u?f:m,b:u?m:f,transposeA:l,transposeB:d,backend:n,bias:r,activation:o,preluActivationWeights:a,leakyreluAlpha:i}),g=F({inputs:{x:y},backend:n,attrs:{shape:t.outShape}});h.push(y);for(const b of h)n.disposeData(b.dataId);return g}function LC({x:s,filter:e,convInfo:t,backend:n,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:i=0,activation:o=null}){const{filterWidth:u,filterHeight:l,inChannels:d,strideWidth:c,strideHeight:h,padInfo:f,outWidth:m,outHeight:y,dilationWidth:g,dilationHeight:b,dataFormat:S}=t,x=S==="channelsLast",C=u*l*d,v=y*m,k=x?[t.batchSize,v,C]:[t.batchSize,C,v],R=new FC(k,x),_=[{type:"int32",data:[f.top,f.left]},{type:"int32",data:[h,c]},{type:"int32",data:[b,g]},{type:"int32",data:[m]},{type:"int32",data:[d*u]},{type:"int32",data:[d]}],I=n.runWebGPUProgram(R,[s],s.dtype,_),N=[];N.push(I);const w=F({inputs:{x:e},backend:n,attrs:{shape:[1,C,-1]}});if(N.push(w),a!=null){const H=js(a.shape,x);H!=null&&(a=F({inputs:{x:a},backend:n,attrs:{shape:H}}),N.push(a))}if(r!=null){const H=js(r.shape,x);H!=null&&(r=F({inputs:{x:r},backend:n,attrs:{shape:H}}),N.push(r))}const V=ln({a:x?I:w,b:x?w:I,transposeA:!x,transposeB:!1,backend:n,bias:r,activation:o,preluActivationWeights:a,leakyreluAlpha:i}),W=F({inputs:{x:V},backend:n,attrs:{shape:t.outShape}});N.push(V);for(const H of N)n.disposeData(H.dataId);return W}function po({x:s,filter:e,convInfo:t,backend:n,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:i=0,activation:o=null}){const u=r!=null,l=a!=null,d=t.dataFormat==="channelsLast",c=d&&t.filterHeight===t.inHeight&&t.filterWidth===t.inWidth&&t.padInfo.type==="VALID",h=M().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!h&&(c||t.filterHeight===1&&t.filterWidth===1&&t.dilationHeight===1&&t.dilationWidth===1&&t.strideHeight===1&&t.strideWidth===1&&(t.padInfo.type==="SAME"||t.padInfo.type==="VALID")))return zC({x:s,filter:e,convInfo:t,backend:n,bias:r,activation:o,preluActivationWeights:a,leakyreluAlpha:i});const f=M().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),m=f>-1?f:n.thresholdToIncreaseWorkgroups,y=t.batchSize*Math.ceil(t.outHeight*t.outWidth/32)*Math.ceil(t.outChannels/32);if(M().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||y<=m)return LC({x:s,filter:e,convInfo:t,backend:n,bias:r,preluActivationWeights:a,leakyreluAlpha:i,activation:o});let g;const b=[t.padInfo.top,t.padInfo.left],S=[{type:"int32",data:[t.filterHeight,t.filterWidth]},{type:"int32",data:[...b]},{type:"int32",data:[t.strideHeight,t.strideWidth]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]}];if(h)g=new OC(t,u,o,l);else{const k=d?t.outHeight*t.outWidth:t.outChannels,R=d?t.outChannels:t.outHeight*t.outWidth,_=t.filterHeight*t.filterWidth*t.inChannels;S.push({type:"int32",data:[k]},{type:"int32",data:[R]},{type:"int32",data:[_]});const I=n.adapterInfo.isIntel();g=new _C(t,k,R,_,u,o,l,I)}const x=[],C=[s,e];u&&(!d&&r.shape.length===1&&(r=F({inputs:{x:r},backend:n,attrs:{shape:[r.shape[0],1,1]}}),x.push(r)),C.push(r)),l&&(!d&&a.shape.length===1&&(a=F({inputs:{x:a},backend:n,attrs:{shape:[a.shape[0],1,1]}}),x.push(a)),C.push(a)),o==="leakyrelu"&&(S.push({type:"float32",data:[i]}),g.uniforms+=" alpha : f32,");const v=n.runWebGPUProgram(g,C,s.dtype,S);for(const k of x)n.disposeData(k.dataId);return v}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BC(s){const{inputs:e,attrs:t,backend:n}=s,{x:r,filter:a}=e,{strides:i,pad:o,dataFormat:u,dilations:l,dimRoundingMode:d}=t,c=Kt(u),h=Ge(r.shape,a.shape,i,l,o,d,!1,c);return po({x:r,filter:a,convInfo:h,backend:n})}const VC={kernelName:Cm,backendName:"webgpu",kernelFunc:BC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WC{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=e.inShape,this.isChannelsLast=e.dataFormat==="channelsLast",this.isVec4=this.isChannelsLast&&e.outChannels%4===0&&e.inChannels%4===0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?3:1,r=`
    ${E()} {
      let batch = i32(globalId.z) / uniforms.outShape[1];
      let r = i32(globalId.z) % uniforms.outShape[1];
      let c = i32(globalId.y) * ${this.workPerThread};
      let d1 = i32(globalId.x) * 4;

      let dyCorner = vec2<i32>(r, c) - uniforms.pads;

      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
      // ? = to be determined. : = across all values in that axis.
      var dotProd: array<vec4<f32>, ${this.workPerThread}>;
      for (var i = 0; i < ${this.workPerThread}; i++) {
        dotProd[i] = vec4<f32>(0.0);
      }
      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);
        let wRPerm = uniforms.filterDims.x - 1 - wR;
        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||
            fract(dyR) > 0.0) {
          continue;
        }
        let idyR = i32(dyR);

        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);
          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);
          let wCPerm = uniforms.filterDims.y - 1 - wC;
          var bDyCVal = true;
          var bDyCVal2 = true;
          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
              fract(dyC) > 0.0) {
            bDyCVal = false;
          }
          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||
              fract(dyC2) > 0.0) {
            bDyCVal2 = false;
          }

          let idyC = i32(dyC);
          let idyC2 = i32(dyC2);
          if (bDyCVal && bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
              xValue = getDy(batch, idyR, idyC2, d2);
              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),
                                                  dot(xValue, wValue1),
                                                  dot(xValue, wValue2),
                                                  dot(xValue, wValue3));
            }
          } else if (bDyCVal) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
            }
          } else if (bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC2, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[1] = dotProd[1] + tmpval;
            }
          }
        }
      }

      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
        let coords = vec4<i32>(batch, r, c + i, d1);
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
        }
      }
    }
    `;return this.isVec4?`
    ${r}
    `:`
    ${E("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${n}];

        let dyCorner = vec2<i32>(coords[${e}], coords[${t}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = i32(dyC);

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};
              let wValue = getW(wRPerm, wCPerm, d1, d2);
              dotProd = dotProd + xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class UC{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e.dataFormat==="channelsLast",this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`
    ${E("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let d2 = coords[3];

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b = b + 1) {
          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];
            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              if (${this.isChannelsLast}) {
                let dyValue = getDy(b, yR, yC, d2);
                let xValue = getX(b, xR, xC, d1);
                dotProd = dotProd + xValue * dyValue;
              } else {
                let dyValue = getDy(b, d2, yR, yC);
                let xValue = getX(b, d1, xR, xC);
                dotProd = dotProd + xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class MC{constructor(e){this.variableNames=["x","dy"],this.uniforms=`pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,
       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`
    ${E("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wF = coords.x;
        let wR = coords.y;
        let wC = coords.z;
        let d1 = coords.w;
        let d2 = coords.u;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yF = 0; yF < uniforms.outDepth; yF++) {
            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];
            if (xF < 0 || xF >= uniforms.inDepth) {
              continue;
            }

            for (var yR = 0; yR < uniforms.outHeight; yR++) {
              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];
              if (xR < 0 || xR >= uniforms.inHeight) {
                continue;
              }

              for (var yC = 0; yC < uniforms.outWidth; yC++) {
                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];
                if (xC < 0 || xC >= uniforms.inWidth) {
                  continue;
                }

                let dyValue = getDy(b, yF, yR, yC, d2);
                let xValue = getX(b, xF, xR, xC, d1);
                dotProd += xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class GC{constructor(e){this.variableNames=["dy","W"],this.uniforms=`filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`
    ${E("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let d1 = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyFCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);
          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {
            continue;
          }
          let idyF = i32(dyF);

          let wFPerm = uniforms.filterDims[0] - 1 - wF;

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            let wRPerm = uniforms.filterDims[1] - 1 - wR;

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let wCPerm = uniforms.filterDims[2] - 1 - wC;

              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {
                let xValue = getDy(batch, idyF, idyR, idyC, d2);
                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HC(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,dy:a}=e,{strides:i,pad:o,dataFormat:u,dimRoundingMode:l,filterShape:d}=n,c=Kt(u),h=Ge(r.shape,d,i,1,o,l,!1,c),f=new UC(h),m=[{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.batchSize]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.inHeight]},{type:"int32",data:[h.inWidth]}];return t.runWebGPUProgram(f,[r,a],r.dtype,m)}const jC={kernelName:Im,backendName:"webgpu",kernelFunc:HC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qC(s=4){const e=a=>{switch(a){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];
            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];
            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];
            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];
            return vec4<f32>(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${a} is not supported.`)}},n=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${`
      let outRow = row / uniforms.outShape[2];
      let outCol = row % uniforms.outShape[2];

      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
        return ${G(s)}(0.0);
      }
      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
        return ${G(s)}(0.0);
      }
      let coord = vec4<i32>(
          batch,
          i32(xR),
          i32(xC),
          col % uniforms.outBackprop[3]);
      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${s}];`}
      }
      return ${G(s)}(0.0);`;return`
  fn mm_readA(batch: i32, row : i32, col : i32) -> ${G(s)} {
    ${n}
  }

  fn mm_readB(batch: i32, row : i32, col : i32) -> ${G(s)} {
    let coordX = uniforms.filterDims.x - 1 -
        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let coordY = uniforms.filterDims.y - 1 -
        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
        coordX >= 0 && coordY >= 0) {
      let rowInner = row % uniforms.outBackprop[3];
      let coord = vec4<i32>(coordX, coordY, col, rowInner);
      ${e(s)}
    }
    return ${G(s)}(0.0);
  }

  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${G(s)}) {
    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${s}] = value;
    }
  }`}class KC{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.inShape,A(e.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),this.isVec4=e.inChannels%4===0&&e.outChannels%4===0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=Qi(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Ji(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const e=this.isVec4?on(this.elementsPerThread,this.workgroupSize):un(this.elementsPerThread,this.workgroupSize);return`
    ${qC(this.isVec4?4:1)}
    ${e}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XC(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,filter:a}=e,{inputShape:i,strides:o,pad:u,dataFormat:l,dimRoundingMode:d}=n,c=Kt(l),h=Ge(i,a.shape,o,1,u,d,!1,c),f=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.filterHeight-1-h.padInfo.top,h.filterWidth-1-h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.batchSize,h.outHeight,h.outWidth,h.outChannels]}];let m;if(M().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||h.dataFormat!=="channelsLast")m=new WC(h);else{m=new KC(h);const y=h.inHeight*h.inWidth,g=h.inChannels,b=h.filterHeight*h.filterWidth*h.outChannels;f.push({type:"uint32",data:[y]},{type:"uint32",data:[g]},{type:"uint32",data:[b]})}return t.runWebGPUProgram(m,[r,a],"float32",f)}const YC={kernelName:vm,backendName:"webgpu",kernelFunc:XC};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class QC{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords.x;
        let d2 = coords.u;

        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
        let xFCorner = xFRCCorner.x;
        let xRCorner = xFRCCorner.y;
        let xCCorner = xFRCCorner.z;

        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;
        let inputDepthVec4Remainder = uniforms.xShape.u % 4;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let xF = xFCorner + wF * uniforms.dilations[0];
          if (xF < 0 || xF >= uniforms.xShape.y) {
            continue;
          }

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let xR = xRCorner + wR * uniforms.dilations[1];
            if (xR < 0 || xR >= uniforms.xShape.z) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let xC = xCCorner + wC * uniforms.dilations[2];
              if (xC < 0 || xC >= uniforms.xShape.w) {
                continue;
              }

              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {
                let xValues = vec4<f32>(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                let wValues = vec4<f32>(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (inputDepthVec4Remainder == 1) {
                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *
                  getW(wF, wR, wC, inputDepthNearestVec4, d2);
              } else if (inputDepthVec4Remainder == 2) {
                let xValues = vec2<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)
                );
                let wValues = vec2<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (inputDepthVec4Remainder == 3) {
                let xValues = vec3<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)
                );
                let wValues = vec3<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }`}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JC(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a}=e,{strides:i,pad:o,dilations:u}=n,l=nn(r.shape,a.shape,i,u,o),d=[l.padInfo.front,l.padInfo.top,l.padInfo.left],c=[{type:"int32",data:[l.filterDepth,l.filterHeight,l.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationDepth,l.dilationHeight,l.dilationWidth]}],h=new QC(l),f=at(r.dtype,a.dtype);return t.runWebGPUProgram(h,[r,a],f,c)}const ZC={kernelName:Nm,backendName:"webgpu",kernelFunc:JC};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,dy:a}=e,{strides:i,pad:o,filterShape:u}=n,l=nn(r.shape,u,i,1,o),d=new MC(l),c=[{type:"int32",data:[l.padInfo.front,l.padInfo.top,l.padInfo.left]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.batchSize]},{type:"int32",data:[l.outDepth]},{type:"int32",data:[l.outHeight]},{type:"int32",data:[l.outWidth]},{type:"int32",data:[l.inDepth]},{type:"int32",data:[l.inHeight]},{type:"int32",data:[l.inWidth]}];return t.runWebGPUProgram(d,[r,a],a.dtype,c)}const tI={kernelName:km,backendName:"webgpu",kernelFunc:eI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sI(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,filter:a}=e,{strides:i,pad:o,inputShape:u}=n,l=nn(u,a.shape,i,1,o),d=new GC(l),c=[{type:"int32",data:[l.filterDepth,l.filterHeight,l.filterWidth]},{type:"int32",data:[l.filterDepth-1-l.padInfo.front,l.filterHeight-1-l.padInfo.top,l.filterWidth-1-l.padInfo.left]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.outDepth]},{type:"int32",data:[l.outHeight]},{type:"int32",data:[l.outWidth]},{type:"int32",data:[l.outChannels]}];return t.runWebGPUProgram(d,[r,a],r.dtype,c)}const nI={kernelName:$m,backendName:"webgpu",kernelFunc:sI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rI=K({opType:T.COS}),aI={kernelName:Tm,backendName:"webgpu",kernelFunc:rI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iI=K({opType:T.COSH}),oI={kernelName:Rm,backendName:"webgpu",kernelFunc:iI};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uI{constructor(e,t,n,r){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[a]=t;this.outputShape=[a,n[0],n[1],e],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId=r==="bilinear"?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[e,t]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[n,r,a]=this.cropHeightBiggerThan1?[`(${e} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${e} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${e}`],[i,o,u]=this.cropWidthBiggerThan1?[`(${t} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${t} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${t}`];return`
    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${n});
        let width_ratio = f32(${i});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${r};
        let width_scale = ${o};
        let in_y = ${a};
        if( in_y < 0.0 || in_y > ${e} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${u};
        if( in_x < 0.0 || in_x > ${t} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lI=s=>{const{inputs:e,backend:t,attrs:n}=s,{image:r,boxes:a,boxInd:i}=e,{cropSize:o,method:u,extrapolationValue:l}=n,d=new uI(r.shape[3],a.shape,o,u),c=[{type:"float32",data:[l]}];return t.runWebGPUProgram(d,[r,a,i],"float32",c)},cI={kernelName:Am,backendName:"webgpu",kernelFunc:lI};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var hs;(function(s){s.Prod="*",s.Sum="+"})(hs||(hs={}));class Ca{constructor(e,t,n,r){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=n,this.reverse=r,this.op=e,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const e=this.outputShape.length,t=this.op===hs.Prod?"1.0":"0.0",n=this.exclusive?t:`getX(${Ia(e,"coords",this.op)})`,r=this.outputShape[this.outputShape.length-1];let a="",i="";return this.exclusive?(a=this.reverse?`end != ${r-1}`:"end != 0",i=this.reverse?"end + 1":"end - 1"):(a=this.reverse?`end + pow2 < ${r}`:"end >= pow2",i=this.reverse?"end + pow2":"end - pow2"),`
      ${E("index")} {
       if (index < uniforms.size) {
         var coords = getCoordsFromIndex(index);

         let end = ${va(e,"coords",this.op)};
         var val = ${n};
         let pow2 = i32(pow(2.0, uniforms.index));
         if (${a}) {
           let idx = ${i};
           ${va(e,"coords",this.op)} = idx;
           val ${this.op}= getX(${Ia(e,"coords",this.op)});
         }
         setOutputAtIndex(index, val);
       }
      }
    `}}function Ia(s,e,t){if(s===1)return`${e}`;if(s===2)return`${e}.x, ${e}.y`;if(s===3)return`${e}.x, ${e}.y, ${e}.z`;if(s===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw Error(`Cumulative ${t} for rank ${s} is not yet supported`)}function va(s,e,t){if(s===1)return`${e}`;if(s===2)return`${e}.y`;if(s===3)return`${e}.z`;if(s===4)return`${e}.w`;throw Error(`Cumulative ${t} for rank ${s} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fo(s,e,t,n,r,a){const i=e.shape.length,o=xs([n],i);let u=e;o!=null&&(u=Me({inputs:{x:e},backend:t,attrs:{perm:o}}));const l=Cs(1,i)[0];if(l!==i-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${n}`);const d=u.shape[l];let c=$e({inputs:{x:u},backend:t});for(let h=0;h<=Math.ceil(Math.log2(d))-1;h++){const f=new Ca(s,u.shape,!1,a),m=c,y=[{type:"float32",data:[h]}];c=t.runWebGPUProgram(f,[c],c.dtype,y),t.disposeData(m.dataId)}if(r){const h=new Ca(s,u.shape,r,a),f=c,m=[{type:"float32",data:[0]}];c=t.runWebGPUProgram(h,[c],c.dtype,m),t.disposeData(f.dataId)}if(o!=null){const h=Gi(o),f=Me({inputs:{x:c},backend:t,attrs:{perm:h}});return t.disposeData(c.dataId),t.disposeData(u.dataId),f}return c}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a,exclusive:i,reverse:o}=n;return fo(hs.Prod,r,t,a,i,o)}const hI={kernelName:Em,backendName:"webgpu",kernelFunc:dI};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a,exclusive:i,reverse:o}=n;return fo(hs.Sum,r,t,a,i,o)}const fI={kernelName:Pm,backendName:"webgpu",kernelFunc:pI};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,weights:a}=e,{size:i,binaryOutput:o}=n,u=r.shape.length===1,d=D(a.shape)>0,c=a.dtype,h=u?[r.shape[0]]:[r.shape[0],r.shape[1]],f=u?[i]:[r.shape[0],i],m=xe({backend:t,attrs:{shape:f,value:0,dtype:c}}),y=new lo(h,d,o),g=[{type:"int32",data:[i]}],b=d?[r,a]:[r];return t.runWebGPUProgram(y,b,c,g,m)}const gI={kernelName:Dm,backendName:"webgpu",kernelFunc:mI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yI{constructor(e,t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${t}`,this.dataFormat=t}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{blockSize:a,dataFormat:i}=n,o=r.shape[0],u=i==="NHWC"?r.shape[1]:r.shape[2],l=i==="NHWC"?r.shape[2]:r.shape[3],d=i==="NHWC"?r.shape[3]:r.shape[1],c=u*a,h=l*a,f=d/(a*a),m=i==="NHWC"?[o,c,h,f]:[o,f,c,h],y=[{type:"int32",data:[a]}],g=new yI(m,i);return t.runWebGPUProgram(g,[r],r.dtype,y)}const wI={kernelName:_m,backendName:"webgpu",kernelFunc:bI};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class SI{constructor(e,t,n,r=!1,a=null,i=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=e,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),r&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.addBias=r,this.activation=a,this.hasPreluActivation=i,this.filterHeight=t,this.filterWidth=n,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const e=this.filterWidth*this.filterHeight,t=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],n=this.workgroupSize[1]+this.filterHeight-1,r=this.workgroupSize[0]+this.filterWidth-1;return`
      ${Ze(this.activation,this.hasPreluActivation,!1,4)}

      var<workgroup> mm_Asub : array<array<f32, ${r}>, ${n}>;
      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;
      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {
        var value = 0.0;
        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])
        {
          value = getX(batch, channel, row, col);
        }
        return value;
      }

      ${E()} {
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;
        let channelMul = uniforms.wShape[3];
        let d1 = coords[1] / channelMul;
        let q = coords[1] % channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;

        let localRow = i32(localId.y);
        let localCol = i32(localId.x);

        // Load one tile of X into local memory.
        for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${this.workgroupSize[1]}) {
          for (var inputCol = localCol; inputCol < ${r}; inputCol = inputCol + ${this.workgroupSize[0]}) {
            let rowOffset = inputRow - localRow;
            let colOffset = inputCol - localCol;
            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);
          }
        }

        // Load one tile of W into local memory.
        var wIndex = i32(localIndex);
        ${e<t?`if (wIndex < ${e})`:`for(; wIndex < ${e}; wIndex = wIndex + ${t})`}

        {
          let wRow = wIndex / ${this.filterWidth};
          let wCol = wIndex % ${this.filterWidth};
          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);
        }

        workgroupBarrier();

        var value = 0.0;
        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {
          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {
            let xVal = mm_Asub[localRow + wR][localCol + wC];
            let wVal = mm_Bsub[wR][wC];
            value = fma(xVal, wVal, value);
          }
        }
        ${Et(this.addBias,this.activation)}
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mo{constructor(e,t=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=e.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const a=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=O(a),this.dispatch=P(this.dispatchLayout,a,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),A(e.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=r,this.shaderKey=`depthwiseVec4_${n}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const e=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,t=this.convInfo.strideHeight,n=this.convInfo.strideWidth;return`
      ${Ze(this.activation,this.hasPreluActivation,!0,4)}
      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {
        var value = vec4<f32>(0.0);
        if (col >=0 && col < uniforms.inDims[1]) {
          value = getX(batch, row, col, channel);
        }
        return value;
      }

      ${E("index")} {
        let width0 = uniforms.outShape[3] / ${this.outputComponent};
        let d1 = (index % width0) * ${this.outputComponent};
        var index1 = index / width0;
        let width1 = uniforms.virtualWidth / ${this.workPerThread};
        let c = (index1 % width1) * ${this.workPerThread};
        index1 = index1 / width1;
        let r = index1 % uniforms.outShape[1];
        let batch = index1 / uniforms.outShape[1];

        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${t}, ${n}) - uniforms.pads;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;
        var xVals : array<vec4<f32>, ${e}>;
        var dotProd : array<vec4<f32>, ${this.workPerThread}>;
        for (var i = 0; i < ${this.workPerThread}; i++) {
          dotProd[i] = vec4<f32>(0.0);
        }

        // Use constant instead of uniform can give better performance.
        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {
          let xR = xRCorner + wR;
          if (xR >=0 && xR < uniforms.inDims[0]) {
            for (var i = 0; i < ${e}; i++) {
              xVals[i] = readX(batch, xR, xCCorner + i, d1);
            }
            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {
              let wValue = getW(wR, wC, d1, 0);
              for (var i = 0; i < ${this.workPerThread}; i++) {
                dotProd[i] = fma(xVals[i * ${n} + wC], wValue, dotProd[i]);
              }
            }
          }
        }

        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d1);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            var value = dotProd[i];
            ${Et(this.addBias,this.activation)}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class go{constructor(e,t=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms=`pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,
      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,`,this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e.dataFormat==="channelsLast",t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=r,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`
      ${Ze(this.activation,this.hasPreluActivation,!1,4)}

      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;
          let d2 = coords[${this.isChannelsLast?3:1}];
          let channelMul = uniforms.wShape[3];
          let d1 = d2 / channelMul;
          let q = d2 % channelMul;

          let inputRowStart = xRCCorner.x;
          let inputColStart = xRCCorner.y;
          let inputRowEnd = inputRowStart + uniforms.filterHeight *
              uniforms.dilations[0];
          let inputColEnd = inputColStart + uniforms.filterWidth *
              uniforms.dilations[1];

          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get
          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all
          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.
          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.
          var value = 0.0;

          // Extract if checking out of for loop for performance.
          if (inputRowStart >= 0 && inputColStart >= 0 &&
            inputRowEnd < uniforms.inDims[0] &&
                inputColEnd < uniforms.inDims[1]) {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  let xVal = ${e};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            } else {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                if (xR < 0 || xR >= uniforms.inDims[0]) {
                  continue;
                }

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  if (xC < 0 || xC >= uniforms.inDims[1]) {
                    continue;
                  }

                  let xVal = ${e};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            }
            ${Et(this.addBias,this.activation)}
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a}=e,{strides:i,pad:o,dataFormat:u,dilations:l,dimRoundingMode:d}=n,c=Kt(u);let h=l;h==null&&(h=[1,1]);const f=Ge(r.shape,a.shape,i,h,o,d,!0,c),m=[{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.inHeight,f.inWidth]}],y=f.dataFormat==="channelsLast";let g;return!y&&f.inHeight>16&&f.inWidth>16&&f.strideHeight===1&&f.strideWidth===1&&f.dilationWidth===1&&f.dilationHeight===1&&f.inChannels===f.outChannels?g=new SI(f.outShape,f.filterHeight,f.filterWidth):y&&f.outHeight>4&&f.outWidth>4&&f.strideWidth<=2&&f.inChannels===f.outChannels&&f.dilationHeight===1&&f.dilationWidth===1&&f.inChannels%4===0?(g=new mo(f),m.push({type:"int32",data:[g.virtualWidth]})):(g=new go(f),m.push({type:"int32",data:[f.filterHeight]},{type:"int32",data:[f.filterWidth]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]})),t.runWebGPUProgram(g,[r,a],r.dtype,m)}const CI={kernelName:Om,backendName:"webgpu",kernelFunc:xI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class II{constructor(e){this.variableNames=["x","dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,
      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let dm = coords[3];
        let d2 = d1 * uniforms.channelMul + dm;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yR = 0; yR < uniforms.outHeight; yR++) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];

            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC++) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              let dyValue = getDy(b, yR, yC, d2);
              let xValue = getX(b, xR, xC, d1);
              dotProd += xValue * dyValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class vI{constructor(e){this.variableNames=["dy","W"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[3];
        let dyCorner = coords.yz - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }

          let idyR = i32(dyR);
          let wRPerm = uniforms.filterDims[0] - 1 - wR;

          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }

            let idyC = i32(dyC);
            let wCPerm = uniforms.filterDims[1] - 1 - wC;

            for (var dm = 0; dm < uniforms.channelMul; dm++) {
              let d2 = d1 * uniforms.channelMul + dm;
              let xValue = getDy(batch, idyR, idyC, d2);
              let wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,dy:a}=e,{strides:i,dilations:o,pad:u,dimRoundingMode:l,filterShape:d}=n,c=Ge(r.shape,d,i,o,u,l,!0),h=new II(c),f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outChannels/c.inChannels]}];return t.runWebGPUProgram(h,[r,a],"float32",f)}const kI={kernelName:Fm,backendName:"webgpu",kernelFunc:NI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $I(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,filter:a}=e,{strides:i,dilations:o,pad:u,dimRoundingMode:l,inputShape:d}=n,c=Ge(d,a.shape,i,o,u,l,!0),h=new vI(c),f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.filterHeight-1-c.padInfo.top,c.filterWidth-1-c.padInfo.left]},{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.outChannels/c.inChannels]}];return t.runWebGPUProgram(h,[r,a],r.dtype,f)}const TI={kernelName:zm,backendName:"webgpu",kernelFunc:$I};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class RI{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,e],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EI(s){const{inputs:e,backend:t}=s,{x:n}=e,r=[...n.shape,...n.shape],a=D(n.shape),i=F({inputs:{x:n},backend:t,attrs:{shape:[a]}}),o=new RI(a),u=t.runWebGPUProgram(o,[i],i.dtype),l=F({inputs:{x:u},backend:t,attrs:{shape:r}});return t.disposeData(i.dataId),t.disposeData(u.dataId),l}const PI={kernelName:Lm,backendName:"webgpu",kernelFunc:EI};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class AI{constructor(e){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`
       ${E("index")} {
         if (index < uniforms.size) {
           let neg_infinity = -3.4e38;
           let coords = getOutputCoords();
           let batch = coords.x;
           let d1 = coords.w;
           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;
           let hBeg = outTopLeftCorner.x;
           let wBeg = outTopLeftCorner.y;

           var curVal = neg_infinity;
           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {
             let hIn = hBeg + h * uniforms.dilations[0];

             if (hIn >= 0 && hIn < uniforms.xShape[1]) {
               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {
                 let wIn = wBeg + w * uniforms.dilations[1];

                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {
                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);
                   if (val > curVal) {
                     curVal = val;
                   }
                 }
               }
             }
           }

           setOutputAtIndex(index, curVal);
         }
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a}=e,{strides:i,pad:o,dilations:u}=n,l=gr(r.shape,a.shape,i,o,"NHWC",u),d=[l.padInfo.top,l.padInfo.left],c=[{type:"int32",data:[l.filterHeight,l.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]}],h=new AI(l);return t.runWebGPUProgram(h,[r,a],r.dtype,c)}const _I={kernelName:Bm,backendName:"webgpu",kernelFunc:DI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class OI{constructor(e,t){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.inShape,this.dispatchLayout=O(e.outShape),this.dispatch=P(this.dispatchLayout,e.outShape,this.workgroupSize),t!=="float32"&&t!=="int32")throw new Error(`Dilation2DBackpropInput only supports float32 and int32
          types, does not support ${t} type.`);this.type=t,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`
       ${E("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var xRMax = 0;
           var xCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     xRMax = xR;
                     xCMax = xC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.xShape[3] *
               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));
           let value = getDy(b, r, c, d);
           ${ot("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}class FI{constructor(e,t,n){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.filterShape,this.dispatchLayout=O(e.outShape),this.dispatch=P(this.dispatchLayout,e.outShape,this.workgroupSize),n!=="float32"&&n!=="int32")throw new Error(`Dilation2DBackpropFilter only supports float32 and int32
          types, does not support ${n} type.`);this.type=n,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`
       ${E("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var wRMax = 0;
           var wCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     wRMax = wR;
                     wCMax = wC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);
           let value = getDy(b, r, c, d);
           ${ot("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a,dy:i}=e,{strides:o,pad:u,dilations:l}=n,d=gr(r.shape,a.shape,o,u,"NHWC",l),c=a.dtype,h=new FI(d,a.shape,c),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[D(d.outShape)]}],m=xe({backend:t,attrs:{shape:a.shape,value:0,dtype:c}});return t.runWebGPUProgram(h,[r,a,i],c,f,m)}const LI={kernelName:Wm,backendName:"webgpu",kernelFunc:zI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BI(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a,dy:i}=e,{strides:o,pad:u,dilations:l}=n,d=gr(r.shape,a.shape,o,u,"NHWC",l),c=r.dtype,h=new OI(d,c),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[D(d.outShape)]}],m=xe({backend:t,attrs:{shape:d.inShape,value:0,dtype:c}});return t.runWebGPUProgram(h,[r,a,i],c,f,m)}const VI={kernelName:Vm,backendName:"webgpu",kernelFunc:BI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WI{constructor(e,t,n){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=qt.DRAW,this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=t,this.textureFormat=n,this.shaderKey=`draw_${t}_${n}`}getUserCode(){let e;const t=this.type==="float32"?"value":"value / 255.0";return e=`
      if (uniforms.numChannels == 1) {
        rgba[0] = ${t};
        rgba[1] = ${t};
        rgba[2] = ${t};
      } else {
        rgba[d] = ${t};
      }`,`
       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;
       ${E("index")} {
         if (index < uniforms.size) {
           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);
           for (var d = 0; d < uniforms.numChannels; d = d + 1) {
             let value = f32(inBuf[index * uniforms.numChannels + d]);
             ${e}
           }
           rgba.x = rgba.x * rgba.w;
           rgba.y = rgba.y * rgba.w;
           rgba.z = rgba.z * rgba.w;
           let coords = getCoordsFromIndex(index);
           textureStore(outImage, vec2<i32>(coords.yx), rgba);
         }
       }
      `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UI(s){const{inputs:e,backend:t,attrs:n}=s,{image:r}=e,{canvas:a,options:i}=n,[o,u]=r.shape.slice(0,2),{imageOptions:l}=i||{},d=l?.alpha||1,c=t.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",h=[o,u],f=new WI(h,r.dtype,c);a.width=u,a.height=o;const m="webgpu";let y=a.getContext(m),g;y||(g=new OffscreenCanvas(u,o),y=g.getContext(m));const b=r.shape.length===3?r.shape[2]:1;y.configure({device:t.device,format:c,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const S="int32",x=t.makeTensorInfo(h,S),C=t.tensorMap.get(x.dataId);C.resource=y.getCurrentTexture(),C.external=!0;const v=[{type:"uint32",data:[b]},{type:"float32",data:[d]}];if(t.runWebGPUProgram(f,[r],S,v,x),g){const k=a.getContext("2d");if(!k)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");k.drawImage(g,0,0)}return t.disposeData(x.dataId),r}const MI={kernelName:Um,backendName:"webgpu",kernelFunc:UI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yo=le({opType:B.MUL,cpuKernelImpl:Kx,supportsComplex:!0}),GI={kernelName:di,backendName:"webgpu",kernelFunc:yo};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bo(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a,keepDims:i}=n;return At(r,a,i,"sum",t)}const HI={kernelName:hy,backendName:"webgpu",kernelFunc:bo};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jI(s){const{inputs:e,backend:t,attrs:n}=s,{equation:r}=n,a=e,{allDims:i,summedDims:o,idDims:u}=Zw(r,a.length);tS(i.length,u,a);const{path:l,steps:d}=sS(o,u),c=d.length;let h=null,f=i.length;const m=[];for(let y=0;y<c;++y){for(const g of d[y]){const{permutationIndices:b,expandDims:S}=eS(f,u[g]);let x;nS(b)?x=a[g]:(x=Me({inputs:{x:a[g]},backend:t,attrs:{perm:b}}),m.push(x));const C=x.shape.slice();for(let v=0;v<S.length;++v)C.splice(S[v],0,1);Je(x.shape,C)||(x=F({inputs:{x},backend:t,attrs:{shape:C}}),m.push(x)),h===null?h=x:(h=yo({inputs:{a:x,b:h},backend:t}),m.push(h))}y<c-1&&(l[y]>=0&&(h=bo({inputs:{x:h},backend:t,attrs:{axis:l[y]-(i.length-f),keepDims:!1}}),m.push(h)),f--)}for(const y of m)y!==h&&t.disposeData(y.dataId);return h}const qI={kernelName:Mm,backendName:"webgpu",kernelFunc:jI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KI=K({opType:T.ELU}),XI={kernelName:Gm,backendName:"webgpu",kernelFunc:KI};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YI=s=>{const{inputs:e,backend:t}=s,{dy:n,y:r}=e,a=new Gs(B.ELU_DER,n.shape,r.shape);return t.runWebGPUProgram(a,[n,r],n.dtype)},QI={kernelName:Hm,backendName:"webgpu",kernelFunc:YI};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const JI=le({opType:B.EQUAL,dtype:"bool",cpuKernelImpl:Dx}),ZI={kernelName:qm,backendName:"webgpu",kernelFunc:JI};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ev=K({opType:T.ERF}),tv={kernelName:jm,backendName:"webgpu",kernelFunc:ev};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sv=K({opType:T.EXP,cpuKernelImpl:_x,dtype:"float32"}),nv={kernelName:Km,backendName:"webgpu",kernelFunc:sv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zn(s){const{inputs:e,attrs:t,backend:n}=s,{dim:r}=t,{input:a}=e,i=a.shape.length,o=a.shape.slice();let u=r;return r<0&&(A(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),u=i+r+1),o.splice(u,0,1),F({inputs:{x:a},backend:n,attrs:{shape:o}})}const rv={kernelName:Xm,backendName:"webgpu",kernelFunc:Zn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const av=K({opType:T.EXPM1,cpuKernelImpl:Ox}),iv={kernelName:Ym,backendName:"webgpu",kernelFunc:av};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Na{constructor(e,t){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=e,this.shaderKey=`fft_${e}`}getUserCode(){return`
    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {
      ${this.component==="real"?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}
    }

    fn mulMatDFT(batch: i32, index: i32) -> f32 {
      let indexRatio = f32(index) / f32(uniforms.realShape[1]);
      let exponentMultiplierTimesIndexRatio =
          uniforms.exponentMultiplier * indexRatio;

      var result = 0.0;

      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {
        // x = (-2|2 * PI / N) * index * i;
        let x = exponentMultiplierTimesIndexRatio * f32(i);
        let expR = cos(x);
        let expI = sin(x);
        let real = getReal(batch, i);
        let imag = getImag(batch, i);

        result = result +
            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;
      }

      return result;
    }

    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wo(s,e,t){const n=t.tensorMap.get(s.dataId),r=D(s.shape),a=s.shape[s.shape.length-1],i=r/a,o=[],u=F({inputs:{x:s},backend:t,attrs:{shape:[i,a]}});o.push(u);const l=u.shape,d=new Na("real",l),c=new Na("imag",l),h=[{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:l},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:l}],f=e?2*Math.PI:-2*Math.PI,m=e?l[1]:1,y=[{type:"float32",data:[f]},{type:"float32",data:[m]}],g=t.runWebGPUProgram(d,h,"float32",y);o.push(g);const b=t.runWebGPUProgram(c,h,"float32",y);o.push(b);const S=Pt({inputs:{real:g,imag:b},backend:t});o.push(S);const x=F({inputs:{x:S},backend:t,attrs:{shape:s.shape}});return o.forEach(C=>t.disposeData(C.dataId)),x}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ov(s){const{inputs:e,backend:t}=s,{input:n}=e;return wo(n,!1,t)}const uv={kernelName:Qm,backendName:"webgpu",kernelFunc:ov};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lv{constructor(e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cv={kernelName:Jm,backendName:"webgpu",kernelFunc:({inputs:s,backend:e})=>{const{image:t}=s,n=e,r=new lv(t.shape);return n.runWebGPUProgram(r,[t],t.dtype)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dv=K({opType:T.FLOOR,cpuKernelImpl:Fx}),hv={kernelName:Zm,backendName:"webgpu",kernelFunc:dv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pv=le({opType:B.FLOOR_DIV,cpuKernelImpl:zx,dtype:"int32"}),fv={kernelName:li,backendName:"webgpu",kernelFunc:pv};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mv{constructor(e,t,n=!1){this.pixelsOpType=qt.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[t,1,1]),this.importVideo=n,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const e=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`
      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};
      ${E("index")} {
        let flatIndex = index * uniforms.numChannels;
        if (flatIndex < uniforms.size) {
          let coords = getCoordsFromIndex(flatIndex);
          let values = ${e};
          for (var i = 0; i < uniforms.numChannels; i = i + 1) {
            result[flatIndex + i] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gv={kernelName:Py,backendName:"webgpu",kernelFunc:yv};let _t,xn=M().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function yv(s){const{inputs:e,backend:t,attrs:n}=s;let{pixels:r}=e;const{numChannels:a}=n;if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const i=typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement,o=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,u=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas,l=typeof ImageBitmap<"u"&&r instanceof ImageBitmap,[d,c]=i?[r.videoWidth,r.videoHeight]:[r.width,r.height],h=[c,d,a],f=M().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&i,m=i||o;if(l||u||m){let S;if(f)S=t.device.importExternalTexture({source:r});else{if(m){const L=M().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(_t==null||L!==xn)&&(xn=L,_t=document.createElement("canvas").getContext("2d",{willReadFrequently:xn})),_t.canvas.width=d,_t.canvas.height=c,_t.drawImage(r,0,0,d,c),r=_t.canvas}const N=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,$=t.textureManager.acquireTexture(h[1],h[0],"rgba8unorm",N);t.queue.copyExternalImageToTexture({source:r},{texture:$},[h[1],h[0]]),S=$}const x=D(h),C=me(h),v=new mv(h,a,f),k=[{type:"uint32",data:[x]},{type:"uint32",data:[a]},{type:"uint32",data:[...C]}],R=t.makeTensorInfo([c,d],"int32"),_=t.tensorMap.get(R.dataId);_.resource=S;const I=t.runWebGPUProgram(v,[R],"int32",k);return t.disposeData(R.dataId),I}const y=r.data;let g=y;if(a!=null&&a!==4){g=new Uint8Array(r.width*r.height*a);const S=y.length;let x=0;for(let C=0;C<S;C++)C%4<a&&(g[x++]=y[C])}const b=t.makeTensorInfo(h,"int32",new Int32Array(g));return t.uploadToGPU(b.dataId),b}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bv{constructor(e,t,n,r,a){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],Ve(e,t),Ve(e,n),this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),r!=null&&(Ve(e,r),this.variableNames.push("offset")),a!=null&&(Ve(e,a),this.variableNames.push("scale")),this.offsetShape=r,this.scaleShape=a,this.shaderKey="batchNorm"}getUserCode(){let e="0.0";this.offsetShape!=null&&(e="getOffsetByOutputIndex(index)");let t="1.0";return this.scaleShape!=null&&(t="getScaleByOutputIndex(index)"),`
      ${E("index")} {
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${e};
          let scaleValue = ${t};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wv={kernelName:eg,backendName:"webgpu",kernelFunc:({inputs:s,attrs:e,backend:t})=>{const{x:n,scale:r,offset:a,mean:i,variance:o}=s,{varianceEpsilon:u}=e,l=t,d=[n,i,o];let c=null;a!=null&&(c=a.shape,d.push(a));let h=null;r!=null&&(h=r.shape,d.push(r));const f=new bv(n.shape,i.shape,o.shape,c,h),m=[{type:"float32",data:[u]}];return l.runWebGPUProgram(f,d,n.dtype,m)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sv(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a,bias:i,preluActivationWeights:o}=e,{strides:u,pad:l,dataFormat:d,dilations:c,dimRoundingMode:h,activation:f,leakyreluAlpha:m}=n,y=Kt(d),g=Ge(r.shape,a.shape,u,c,l,h,!1,y);return po({x:r,filter:a,convInfo:g,backend:t,bias:i,preluActivationWeights:o,leakyreluAlpha:m,activation:f})}const xv={kernelName:_y,backendName:"webgpu",kernelFunc:Sv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cv(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,filter:a,bias:i,preluActivationWeights:o}=e,{strides:u,pad:l,dilations:d,dimRoundingMode:c,activation:h,leakyreluAlpha:f}=n;let m=d;m==null&&(m=[1,1]),A(Wi(u,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${m}'`);const y=Ge(r.shape,a.shape,u,m,l,c,!0),g=[r,a],b=i!=null,S=o!=null;b&&g.push(i),S&&g.push(o);const x=[{type:"int32",data:[y.padInfo.top,y.padInfo.left]},{type:"int32",data:[y.inHeight,y.inWidth]}];let C;return y.outHeight>4&&y.outWidth>4&&y.strideWidth<=2&&y.inChannels===y.outChannels&&y.dilationHeight===1&&y.dilationWidth===1&&y.inChannels%4===0?(C=new mo(y,b,h,S),x.push({type:"int32",data:[C.virtualWidth]})):(C=new go(y,b,h,S),x.push({type:"int32",data:[y.filterHeight]},{type:"int32",data:[y.filterWidth]},{type:"int32",data:[y.strideHeight,y.strideWidth]},{type:"int32",data:[y.dilationHeight,y.dilationWidth]})),h==="leakyrelu"&&(x.push({type:"float32",data:[f]}),C.uniforms+=" alpha : f32,"),t.runWebGPUProgram(C,g,"float32",x)}const Iv={kernelName:Oy,backendName:"webgpu",kernelFunc:Cv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vv{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${e}`,this.sliceDim=e,this.uniforms=`sliceDim : i32, strides : ${se(e)},`}getUserCode(){let e;return this.sliceDim>1?e="uniforms.strides[j]":e="uniforms.strides",`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${e};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nv(s){const{inputs:e,backend:t}=s,{params:n,indices:r}=e,a=r.shape,i=a[a.length-1],o=D(n.shape),[u,l,d,c]=$w(n,r),h=F({inputs:{x:r},backend:t,attrs:{shape:[l,i]}}),f=F({inputs:{x:n},backend:t,attrs:{shape:[D(n.shape)/d,d]}});if(t.shouldExecuteOnCPU([n,r])||n.dtype==="string"){const S=t.readSync(r.dataId),x=t.bufferSync(n),C=Lx(S,x,n.dtype,l,i,d,c,n.shape,o);return t.makeTensorInfo(u,n.dtype,C.values)}const m=new vv(i,[l,d]),y=[{type:"int32",data:[i]},{type:"int32",data:c}],g=t.runWebGPUProgram(m,[f,h],f.dtype,y),b=F({inputs:{x:g},backend:t,attrs:{shape:u}});return t.disposeData(h.dataId),t.disposeData(f.dataId),t.disposeData(g.dataId),b}const kv={kernelName:sg,backendName:"webgpu",kernelFunc:Nv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $v{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.slice(),this.aShape=e,this.outputShape=t,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const e=Tv(this.aShape);return`
      ${E("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let indexZ = i32(getIndices(resRC.x, resRC.z));
          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);
          setOutputAtIndex(index, inBounds * getA(${e}));
        }
      }
    `}}function Tv(s){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],t=[];for(let n=0;n<s.length;n++)n===2?t.push("indexZ"):t.push(`${e[n]}`);return t.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function So(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,indices:a}=e,{axis:i,batchDims:o}=n,u=it(i,r.shape)[0],l=bS(r,a,u,o),d=D(a.shape),c=[],h=F({inputs:{x:r},backend:t,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=F({inputs:{x:a},backend:t,attrs:{shape:[l.batchSize,d/l.batchSize]}});c.push(h),c.push(f);const m=[l.batchSize,l.outerSize,d/l.batchSize,l.sliceSize];if(t.shouldExecuteOnCPU([r,a])){const x=t.tensorMap.get(f.dataId).values,C=de(f.shape,f.dtype,x),k=t.tensorMap.get(h.dataId).values,R=de(h.shape,h.dtype,k),_=Bx(R,C,m);return c.forEach(I=>t.disposeData(I.dataId)),t.makeTensorInfo(l.outputShape,_.dtype,_.values)}const y=new $v(h.shape,m),g=t.runWebGPUProgram(y,[h,f],h.dtype);c.push(g);const b=F({inputs:{x:g},backend:t,attrs:{shape:l.outputShape}});return c.forEach(S=>t.disposeData(S.dataId)),b}const Rv={kernelName:tg,backendName:"webgpu",kernelFunc:So};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ev=le({opType:B.GREATER,cpuKernelImpl:Wx,dtype:"bool"}),Pv={kernelName:ng,backendName:"webgpu",kernelFunc:Ev};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Av=le({opType:B.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:Vx}),Dv={kernelName:rg,backendName:"webgpu",kernelFunc:Av};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _v(s){const{inputs:e,backend:t}=s,{input:n}=e;return wo(n,!0,t)}const Ov={kernelName:ag,backendName:"webgpu",kernelFunc:_v};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fv=K({opType:T.IS_FINITE,dtype:"bool"}),zv={kernelName:og,backendName:"webgpu",kernelFunc:Fv};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lv=K({opType:T.IS_INF,dtype:"bool"}),Bv={kernelName:ug,backendName:"webgpu",kernelFunc:Lv};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vv=K({opType:T.IS_NAN,dtype:"bool"}),Wv={kernelName:lg,backendName:"webgpu",kernelFunc:Vv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uv(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{alpha:a}=n,i=[{type:"float32",data:[a]}],o=new Xt(r.shape,T.LEAKYRELU,"alpha : f32,");return t.runWebGPUProgram(o,[r],"float32",i)}const Mv={kernelName:cg,backendName:"webgpu",kernelFunc:Uv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gv=le({opType:B.LESS,dtype:"bool",cpuKernelImpl:Mx}),Hv={kernelName:dg,backendName:"webgpu",kernelFunc:Gv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jv=le({opType:B.LESS_EQUAL,dtype:"bool",cpuKernelImpl:Ux}),qv={kernelName:hg,backendName:"webgpu",kernelFunc:jv};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kv{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xv(s){const{backend:e,attrs:t}=s,{start:n,stop:r,num:a}=t,i=(r-n)/(a-1),o=new Kv(a),u=[{type:"float32",data:[n]},{type:"float32",data:[i]}];return e.runWebGPUProgram(o,[],"float32",u)}const Yv={kernelName:pg,backendName:"webgpu",kernelFunc:Xv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qv=K({opType:T.LOG,cpuKernelImpl:Gx}),Jv={kernelName:fg,backendName:"webgpu",kernelFunc:Qv};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zv=K({opType:T.LOG1P}),eN={kernelName:mg,backendName:"webgpu",kernelFunc:Zv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tN=le({opType:B.LOGICAL_AND,dtype:"bool"}),sN={kernelName:gg,backendName:"webgpu",kernelFunc:tN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nN=K({opType:T.LOGICAL_NOT}),rN={kernelName:yg,backendName:"webgpu",kernelFunc:nN};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aN=le({opType:B.LOGICAL_OR}),iN={kernelName:bg,backendName:"webgpu",kernelFunc:aN};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xo=`
  var powValue = 0.0;
  let basis = uniforms.bias + uniforms.alpha * sum;
  if (uniforms.beta == 0.5) {
    powValue = inverseSqrt(basis);
  } else if (uniforms.beta == 1.0) {
    powValue = 1.0 / basis;
  } else {
    powValue = exp(log(basis) * (-uniforms.beta));
  }
`;class oN{constructor(e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];
        let d = coords[3];

        let x = getX(b, r, c, d);
        var sum = 0.0;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let idx = d + i;
          if (idx >= 0 && idx < uniforms.xShape[3]) {
            let z = getX(b, r, c, idx);
            sum = sum + z * z;
          }
        }
        ${xo}

        setOutputAtIndex(index, x * powValue);
      }
    }
  `}}class uN{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,A(t<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${t}`),this.outputShape=e,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=P(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`
    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;
    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};
    const maxAllowRadius = ${this.maxAllowRadius};

    ${E()} {
      let localDepth = i32(localId.x);
      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;
      let xDepth = workgroupDepth + localDepth - maxAllowRadius;
      let b = i32(globalId.z) / uniforms.xShape[1];
      let r = i32(globalId.z) - b * uniforms.xShape[1];
      let c = i32(globalId.y);
      let d = workgroupDepth + localDepth;

      var x = 0.0;
      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {
        x = getX(b, r, c, xDepth);
      }
      lrnSub[localDepth] = x;
      workgroupBarrier();

      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {
        var sum = 0.0;
        let index = localDepth + maxAllowRadius;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let z = lrnSub[index + i];
          sum = sum + z * z;
        }
        ${xo}

        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);
      }
    } `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lN(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{depthRadius:a,bias:i,alpha:o,beta:u}=n;let l;a>16?l=new oN(r.shape):l=new uN(r.shape,a);const d=[{type:"int32",data:[a]},{type:"float32",data:[i]},{type:"float32",data:[o]},{type:"float32",data:[u]}];return t.runWebGPUProgram(l,[r],r.dtype,d)}const cN={kernelName:wg,backendName:"webgpu",kernelFunc:lN};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dN{constructor(e){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];

        let MIN_DEPTH_BEGIN = 0;
        let MAX_DEPTH_END = uniforms.outShape[3];
        var result = 0.0;
        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {
          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);
          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);

          var norm = 0.0;
          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            } else {
              break;
            }
          }

          norm = uniforms.alpha * norm + uniforms.bias;

          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              var dyi = -2.0 * uniforms.alpha * uniforms.beta
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * uniforms.beta);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            } else {
              break;
            }
          }
        }

        setOutputAtIndex(index, result);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hN(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,y:a,dy:i}=e,{depthRadius:o,bias:u,alpha:l,beta:d}=n,c=new dN(r.shape),h=[{type:"int32",data:[o]},{type:"float32",data:[u]},{type:"float32",data:[l]},{type:"float32",data:[d]}];return t.runWebGPUProgram(c,[r,a,i],r.dtype,h)}const pN={kernelName:Sg,backendName:"webgpu",kernelFunc:hN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fN=le({opType:B.MAX,cpuKernelImpl:jx}),mN={kernelName:ci,backendName:"webgpu",kernelFunc:fN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gN(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{filterSize:a,strides:i,pad:o,dimRoundingMode:u}=n,d=Ss(r.shape,a,i,1,o,u);return uo(r,d,"max",t)}const yN={kernelName:Cg,backendName:"webgpu",kernelFunc:gN};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bN(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{filterSize:a,strides:i,pad:o,dataFormat:u,dimRoundingMode:l}=n,d=[1,1,1],c=sn(r.shape,a,i,d,o,l,u),h=new xr(c,"max"),f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.inDepth,c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]}];return t.runWebGPUProgram(h,[r],r.dtype,f)}const wN={kernelName:vg,backendName:"webgpu",kernelFunc:bN};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class SN{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);
            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            let curPosValue = wR * uniforms.filterDims[1] + wC;
            let mask = select(0.0, 1.0, maxPosValue == curPosValue);
            dotProd += dyValue * mask;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class xN{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`
      ${E("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;

        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;
              let mask = select(0.0, 1.0, maxPosValue == curPosValue);
              dotProd += dyValue * mask;
            }
          }
        }

        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,input:a}=e,i=a,{filterSize:o,strides:u,pad:l,dimRoundingMode:d}=n,c=[1,1,1],h=sn(i.shape,o,u,c,l,d),f=new xr(h,"max",!0);let m=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];const y=t.runWebGPUProgram(f,[i],"int32",m),g=new xN(h);m=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterDepth-1-h.padInfo.front,h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]}];const b=t.runWebGPUProgram(g,[r,y],i.dtype,m);return t.disposeData(y.dataId),b}const IN={kernelName:Ng,backendName:"webgpu",kernelFunc:CN};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vN(s){const{inputs:e,backend:t,attrs:n}=s,{dy:r,input:a,output:i}=e,o=a;eo([a,i],"maxPoolGrad");const{filterSize:u,strides:l,pad:d,dimRoundingMode:c}=n,h=Ss(o.shape,u,l,1,d,c),f=new ds(h,"max",!0);let m=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]}];const y=t.runWebGPUProgram(f,[o],"int32",m),g=new SN(h);m=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]}];const b=t.runWebGPUProgram(g,[r,y],o.dtype,m);return t.disposeData(y.dataId),b}const NN={kernelName:Ig,backendName:"webgpu",kernelFunc:vN};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kN(s){const{inputs:e,backend:t,attrs:n}=s,{filterSize:r,strides:a,pad:i,includeBatchInIndex:o}=n,{x:u}=e;A(u.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${u.shape.length}.`);const l=[1,1];A(Wi(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);const d=Ss(u.shape,r,a,l,i),c=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterHeight,d.effectiveFilterWidth]}];let h=new ds(d,"max",!1);const f=t.runWebGPUProgram(h,[u],u.dtype,c);h=new ds(d,"max",!0,!0,o);const m=t.runWebGPUProgram(h,[u],"int32",c);return[f,m]}const $N={kernelName:kg,backendName:"webgpu",kernelFunc:kN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TN(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a,keepDims:i}=n;return At(r,a,i,"min",t)}const RN={kernelName:Tg,backendName:"webgpu",kernelFunc:TN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EN=le({opType:B.MIN,cpuKernelImpl:qx}),PN={kernelName:Rg,backendName:"webgpu",kernelFunc:EN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class AN{constructor(e,t,n){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map((r,a)=>r[0]+e[a]+r[1]),this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,t.map((r,a)=>{this.uniforms+=` pad${a} : vec2<i32>,`}),this.offset=n==="reflect"?0:1,this.shaderKey=`mirrorPad_${n}`}getUserCode(){const e=this.xShape.length,t=this.xShape.map((l,d)=>`uniforms.pad${d}[0]`).join(","),n=this.xShape.map((l,d)=>`uniforms.pad${d}[0] + uniforms.xShape${e>1?`[${d}]`:""}`).join(","),r=e===1?"start":"start[i]",a=e===1?"end":"end[i]",i=e===1?"outC":"outC[i]",o=se(e),u=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`
      ${E("index")} {
        if (index < uniforms.size) {
          let start = ${o}(${t});
          let end = ${o}(${n});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${e}; i = i + 1) {
            if (${i} < ${r}) {
              ${i} = ${r} * 2 - ${i} - ${this.offset};
            } else if(${i} >= ${a}) {
              ${i} = (${a} - 1) * 2 - ${i} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${u}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DN={kernelName:Eg,backendName:"webgpu",kernelFunc:({inputs:s,attrs:e,backend:t})=>{const{x:n}=s,{paddings:r,mode:a}=e,i=t,o=r.map(d=>({type:"int32",data:[d[0],d[1]]})),u=new AN(n.shape,r,a);return i.runWebGPUProgram(u,[n],n.dtype,o)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _N=le({opType:B.MOD}),ON={kernelName:Pg,backendName:"webgpu",kernelFunc:_N};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class FN{constructor(e,t){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`
    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {
      let HASHSCALE1 = 443.8975;
      let p = resultUV * seed;
      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);
      p3 = p3 + dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${E("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords[0];

        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),
            f32(coords[0]) / f32(uniforms.outShape[0]));
        let r = random(uniforms.seed, resUV);
        var cdf = 0.0;
        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {
          cdf = cdf + getProbs(batch, i);

          if (r < cdf) {
            setOutputAtIndexI32(index, i);
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zN{constructor(e){this.variableNames=["logits"],this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`
    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;
    var<workgroup> rowMaxShared : f32;
    var<workgroup> rowSumShared : f32;
    const blockSize = ${this.workgroupSize[0]};
    ${E("index")} {
      let row = index / blockSize;
      let tid = i32(localId.x);
      let cols = uniforms.outShape[1];

      var threadMax = -3.402823e+38f;
      for (var col = tid; col < cols; col += blockSize) {
        let value = getLogits(row, col);
        threadMax = max(threadMax, value);
      }
      if (tid < cols) {
        buf[tid] = threadMax;
      }
      workgroupBarrier();

      var reduceSize = min(cols, blockSize);
      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
        reduceSize = currSize + (reduceSize & 1);
        if (tid < currSize) {
          buf[tid] = max(buf[tid], buf[tid + reduceSize]);
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowMaxShared = buf[0];
      }
      workgroupBarrier();

      var threadSum = 0.0;
      for (var col = tid; col < cols; col += blockSize) {
        let subExp = exp(getLogits(row, col) - rowMaxShared);
        threadSum += subExp;
      }
      buf[tid] = threadSum;
      workgroupBarrier();

      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {
        if (tid < currSize) {
          buf[tid] = buf[tid] + buf[tid + currSize];
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowSumShared = buf[0];
      }
      workgroupBarrier();

      for (var col = tid; col < cols; col += blockSize) {
        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;
        setOutputAtCoords(row, col, value);
      }
  }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Co(s){const{inputs:e,backend:t,attrs:n}=s,{logits:r}=e,{dim:a}=n,i=F({inputs:{x:r},backend:t,attrs:{shape:[D(r.shape)/r.shape[a],r.shape[a]]}}),o=new zN(i.shape),u=t.runWebGPUProgram(o,[i],r.dtype),l=F({inputs:{x:u},backend:t,attrs:{shape:r.shape}});return t.disposeData(i.dataId),t.disposeData(u.dataId),l}const LN={kernelName:my,backendName:"webgpu",kernelFunc:Co};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BN(s){const{inputs:e,backend:t,attrs:n}=s,{logits:r}=e,{numSamples:a,seed:i,normalized:o}=n,u=o?r:Co({inputs:{logits:r},backend:t,attrs:{dim:r.shape.length-1}}),l=u.shape[0],d=u.shape[1],c=new FN(l,a),h=[{type:"float32",data:[i]},{type:"int32",data:[d]}],f=t.runWebGPUProgram(c,[u],"int32",h);return o||t.disposeData(u.dataId),f}const VN={kernelName:Ag,backendName:"webgpu",kernelFunc:BN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WN(s){const{inputs:e,backend:t}=s,{x:n}=e;if(t.shouldExecuteOnCPU([n])){const a=t.tensorMap.get(n.dataId),[i,o]=Xx(a.values,n.shape,n.dtype);return t.makeTensorInfo(o,n.dtype,i)}const r=new Xt(n.shape,T.NEG);return t.runWebGPUProgram(r,[n],n.dtype)}const UN={kernelName:Dg,backendName:"webgpu",kernelFunc:WN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(s){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:n}=s,{boxes:r,scores:a}=e,{maxOutputSize:i,iouThreshold:o,scoreThreshold:u}=n,l=t.readSync(r.dataId),d=t.readSync(a.dataId),{selectedIndices:c}=dw(l,d,i,o,u);return t.makeTensorInfo([c.length],"int32",new Int32Array(c))}const GN={kernelName:Og,backendName:"webgpu",kernelFunc:MN};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HN(s){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:n}=s,{boxes:r,scores:a}=e,{maxOutputSize:i,iouThreshold:o,scoreThreshold:u,softNmsSigma:l}=n,d=t.readSync(r.dataId),c=t.readSync(a.dataId),h=i,f=o,m=u,y=l,{selectedIndices:g,selectedScores:b}=hw(d,c,h,f,m,y);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([b.length],"float32",new Float32Array(b))]}const jN={kernelName:Fg,backendName:"webgpu",kernelFunc:HN};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qN{constructor(e,t){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`
      ${E("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,
                                      f32(i32(round(getX(coords.x))) == coords.y)));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KN(s){const{inputs:e,backend:t,attrs:n}=s,{indices:r}=e,{dtype:a,depth:i,onValue:o,offValue:u}=n,l=D(r.shape),d=new qN(l,i),c=F({inputs:{x:r},backend:t,attrs:{shape:[l]}}),h=[{type:"float32",data:[o]},{type:"float32",data:[u]}],f=t.runWebGPUProgram(d,[c],a,h);t.disposeData(c.dataId);const m=[...r.shape,i],y=F({inputs:{x:f},backend:t,attrs:{shape:m}});return t.disposeData(f.dataId),y}const XN={kernelName:Lg,backendName:"webgpu",kernelFunc:KN};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(s){const{inputs:e,backend:t}=s,{x:n}=e;if(n.dtype==="complex64"){const r=Is({inputs:{input:n},backend:t}),a=qs({inputs:{x:r},backend:t}),i=cn({inputs:{input:n},backend:t}),o=qs({inputs:{x:i},backend:t}),u=Pt({inputs:{real:a,imag:o},backend:t});return t.disposeData(r.dataId),t.disposeData(a.dataId),t.disposeData(i.dataId),t.disposeData(o.dataId),u}else return xe({attrs:{shape:n.shape,dtype:n.dtype,value:n.dtype==="string"?"":0},backend:t})}const YN={kernelName:yi,backendName:"webgpu",kernelFunc:qs};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Io(s){const{inputs:e,backend:t}=s,{x:n}=e;if(n.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(n.dtype==="complex64"){const r=Is({inputs:{input:n},backend:t}),a=Io({inputs:{x:r},backend:t}),i=cn({inputs:{input:n},backend:t}),o=qs({inputs:{x:i},backend:t}),u=Pt({inputs:{real:a,imag:o},backend:t});return t.disposeData(r.dataId),t.disposeData(a.dataId),t.disposeData(i.dataId),t.disposeData(o.dataId),u}else return xe({attrs:{shape:n.shape,dtype:n.dtype,value:1},backend:t})}const QN={kernelName:zg,backendName:"webgpu",kernelFunc:Io};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JN(s){const{inputs:e,backend:t,attrs:n}=s,{axis:r}=n;if(e.length===1)return Zn({inputs:{input:e[0]},backend:t,attrs:{dim:r}});const a=e[0].shape,i=e[0].dtype;e.forEach(d=>{ei(a,d.shape,"All tensors passed to stack must have matching shapes"),A(i===d.dtype,()=>"All tensors passed to stack must have matching dtypes")});const o=[],u=e.map(d=>{const c=Zn({inputs:{input:d},backend:t,attrs:{dim:r}});return o.push(c),c}),l=ho({inputs:u,backend:t,attrs:{axis:r}});return o.forEach(d=>t.disposeData(d.dataId)),l}const ZN={kernelName:Bg,backendName:"webgpu",kernelFunc:JN};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vo(s,e=!1){const t=s.length,n=se(t),r=s.map((c,h)=>`uniforms.pad${h}[0]`).join(","),a=s.map((c,h)=>`uniforms.pad${h}[0] + uniforms.xShape${t>1?`[${h}]`:""}`).join(","),i=t>1?`${n}(${r})`:`${r}`,o=t>1?`${n}(${a})`:`${a}`,u=t>1?"any(paddedCoords < start)":"paddedCoords < start",l=t>1?"any(paddedCoords >= end)":"paddedCoords >= end",d=t>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t):"coords";return`
        let start = ${i};
        let end = ${o};
        if (${u} || ${l}) {
          setOutputAtIndex(index, ${e?0:"uniforms.constantValue"});
        } else {
          let coords = paddedCoords - start;
          setOutputAtIndex(index, getX(${d}));
        }
  `}class ek{constructor(e,t){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map((n,r)=>n[0]+e[r]+n[1]),this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),t.map((n,r)=>{this.uniforms+=` pad${r} : vec2<i32>,`}),this.xShape=e,this.shaderKey="pad"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let paddedCoords = getCoordsFromIndex(index);
          ${vo(this.xShape)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tk=s=>{const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{paddings:a,constantValue:i}=n;if(a.every(l=>Je(l,[0,0])))return $e({inputs:{x:r},backend:t});if(D(r.shape)===0){const l=a.map((d,c)=>d[0]+r.shape[c]+d[1]);return xe({backend:t,attrs:{shape:l,value:i,dtype:r.dtype}})}const o=[{type:"float32",data:[i]}];a.map(l=>o.push({type:"int32",data:[l[0],l[1]]}));const u=new ek(r.shape,a);return t.runWebGPUProgram(u,[r],r.dtype,o)},sk={kernelName:Vg,backendName:"webgpu",kernelFunc:tk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nk=le({opType:B.POW}),rk={kernelName:hi,backendName:"webgpu",kernelFunc:nk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ak(s){const{inputs:e,backend:t}=s,{x:n,alpha:r}=e,a=new Gs(B.PRELU,n.shape,r.shape);return t.runWebGPUProgram(a,[n,r],"float32")}const ik={kernelName:Wg,backendName:"webgpu",kernelFunc:ak};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ok(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{axis:a,keepDims:i}=n;return At(r,a,i,"prod",t)}const uk={kernelName:Ug,backendName:"webgpu",kernelFunc:ok};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lk=s=>{const{backend:e,attrs:t}=s,{start:n,stop:r,step:a,dtype:i}=t,o=Jx(n,r,a,i);return e.makeTensorInfo([o.length],i,o)},ck={kernelName:Mg,backendName:"webgpu",kernelFunc:lk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dk=le({opType:B.DIV}),hk={kernelName:oi,backendName:"webgpu",kernelFunc:dk};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pk=K({opType:T.RECIPROCAL}),fk={kernelName:Hg,backendName:"webgpu",kernelFunc:pk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mk=K({opType:T.RELU}),gk={kernelName:jg,backendName:"webgpu",kernelFunc:mk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yk=K({opType:T.RELU6}),bk={kernelName:Qg,backendName:"webgpu",kernelFunc:yk};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wk{constructor(e,t,n){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sk(s){const{inputs:e,backend:t,attrs:n}=s,{images:r}=e,{alignCorners:a,size:i,halfPixelCenters:o}=n,[u,l]=i,d=a&&u>1?1:0,c=a&&l>1?1:0,f=[{type:"float32",data:[d,c]},{type:"float32",data:[o?.5:0]}],m=new wk(r.shape,u,l);return t.runWebGPUProgram(m,[r],"float32",f)}const xk={kernelName:Xg,backendName:"webgpu",kernelFunc:Sk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ck{constructor(e,t){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,
       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeBilinearBackprop_${t}`}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let dxR = f32(dyR) * uniforms.heightScale;
              let topDxRIndex = i32(floor(dxR));
              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));
              let dxRLerp = dxR - f32(topDxRIndex);
              let inverseDxRLerp = 1.0 - dxRLerp;

              let dxC = f32(dyC) * uniforms.widthScale;
              let leftDxCIndex = i32(floor(dxC));
              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));
              let dxCLerp = dxC - f32(leftDxCIndex);
              let inverseDxCLerp = 1.0 - dxCLerp;

              if (r == topDxRIndex && c == leftDxCIndex) {
                // topLeft
                accumulator +=
                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
              }

              if (r == topDxRIndex && c == rightDxCIndex) {
                // topRight
                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
              }

              if (r == bottomDxRIndex && c == leftDxCIndex) {
                // bottomLeft
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
              }

              if (r == bottomDxRIndex && c == rightDxCIndex) {
                // bottomRight
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ik(s){const{inputs:e,backend:t,attrs:n}=s,{images:r,dy:a}=e,{alignCorners:i}=n,[,o,u]=r.shape,[,l,d]=a.shape,c=[i&&l>1?o-1:o,i&&d>1?u-1:u],h=[i&&l>1?l-1:l,i&&d>1?d-1:d],f=c[0]/h[0],m=c[1]/h[1],y=1/f,g=1/m,b=Math.ceil(y)*2+2,S=Math.ceil(g)*2+2,x=new Ck(r.shape,i),C=[{type:"int32",data:c},{type:"int32",data:h},{type:"float32",data:[f]},{type:"float32",data:[m]},{type:"float32",data:[y]},{type:"float32",data:[g]},{type:"int32",data:[b]},{type:"int32",data:[S]}];return t.runWebGPUProgram(x,[a],a.dtype,C)}const vk={kernelName:Yg,backendName:"webgpu",kernelFunc:Ik};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nk{constructor(e,t,n,r){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=r,this.shaderKey=`resizeNearest_${r}`}getUserCode(){let e;return this.halfPixelCenters?e="max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":e="vec2<f32>(rc) * effectiveInputOverOutputRatioRC",`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${e};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kk(s){const{inputs:e,backend:t,attrs:n}=s,{images:r}=e,{alignCorners:a,halfPixelCenters:i,size:o}=n,[u,l]=o,d=a&&u>1?1:0,c=a&&l>1?1:0,f=[{type:"float32",data:[d,c]},{type:"float32",data:[a?.5:0]}],m=new Nk(r.shape,u,l,i);return t.runWebGPUProgram(m,[r],r.dtype,f)}const $k={kernelName:qg,backendName:"webgpu",kernelFunc:kk};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tk{constructor(e,t){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,
       winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeNearestNeigborBackprop_${t}`}getUserCode(){return`
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *
                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));

              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *
                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));

              let sourceNearestRow =
                  i32(min(f32(uniforms.outShape[1] - 1),
                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));

              let sourceNearestCol =
                  i32(min(f32(uniforms.outShape[2] - 1),
                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));

              if (r == sourceNearestRow && c == sourceNearestCol) {
                accumulator += getDy(b, dyR, dyC, d);
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rk(s){const{inputs:e,backend:t,attrs:n}=s,{images:r,dy:a}=e,{alignCorners:i}=n,[,o,u]=r.shape,[,l,d]=a.shape,c=[i&&l>1?o-1:o,i&&d>1?u-1:u],h=[i&&l>1?l-1:l,i&&d>1?d-1:d],f=c[0]/h[0],m=c[1]/h[1],y=1/f,g=1/m,b=Math.ceil(y)*2+2,S=Math.ceil(g)*2+2,x=new Tk(r.shape,i),C=[{type:"int32",data:c},{type:"int32",data:h},{type:"float32",data:[y]},{type:"float32",data:[g]},{type:"int32",data:[b]},{type:"int32",data:[S]}];return t.runWebGPUProgram(x,[a],a.dtype,C)}const Ek={kernelName:Kg,backendName:"webgpu",kernelFunc:Rk};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pk{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`
      
      // Using uniform variables as judging conditions, so the function has
      // coherent execution within all threads.
      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {
        var reverseCoords = coords;
        if (uniforms.axis[0] == 1) {
          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;
        }
        if (uniforms.axis[1] == 1) {
          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;
        }
        if (uniforms.axis[2] == 1) {
          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;
        }
        if (uniforms.axis[3] == 1) {
          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;
        }

        return reverseCoords;
      }
    
      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let reverseCoords = getReverseCoords(coords);
          setOutputAtIndex(index, getX(reverseCoords[0],
              reverseCoords[1], reverseCoords[2], reverseCoords[3]));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ak(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{dims:a}=n,i=r.shape.length;if(i===0)return $e({inputs:{x:r},backend:t});const o=r.shape,u=[1,1,1,1];o.forEach((g,b)=>{const S=b+4-i;u[S]=g});const l=it(a,r.shape),d=[0,0,0,0];l.forEach(g=>{const b=g+4-i;d[b]=1});const c=[{type:"int32",data:d}],h=F({inputs:{x:r},backend:t,attrs:{shape:u}}),f=new Pk(u),m=t.runWebGPUProgram(f,[h],h.dtype,c);t.disposeData(h.dataId);const y=F({inputs:{x:m},backend:t,attrs:{shape:o}});return t.disposeData(m.dataId),y}const Dk={kernelName:Jg,backendName:"webgpu",kernelFunc:Ak};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _k{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`centerX : f32, centerY : f32, sinRadians : f32,
          cosRadians : f32,`,this.shaderKey="rotate",this.outputShape=e,typeof t=="number"?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`
        ${E("index")} {
          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ok={kernelName:Ay,backendName:"webgpu",kernelFunc:({inputs:s,attrs:e,backend:t})=>{const{image:n}=s,{radians:r,fillValue:a,center:i}=e,o=t,u=new _k(n.shape,a),[l,d]=Ww(i,n.shape[1],n.shape[2]),c=[{type:"float32",data:[l]},{type:"float32",data:[d]},{type:"float32",data:[Math.sin(r)]},{type:"float32",data:[Math.cos(r)]}];return typeof a=="number"?c.push({type:"float32",data:[Number.parseFloat(a.toFixed(2))]}):c.push({type:"float32",data:a}),o.runWebGPUProgram(u,[n],n.dtype,c)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fk=K({opType:T.ROUND}),zk={kernelName:Zg,backendName:"webgpu",kernelFunc:Fk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lk=K({opType:T.RSQRT,cpuKernelImpl:Zx}),Bk={kernelName:ey,backendName:"webgpu",kernelFunc:Lk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class as{constructor(e,t,n,r,a,i,o,u=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=i,this.type=o,this.sumDupeIndices=u,this.dispatchLayout=O(e),this.dispatch=P(this.dispatchLayout,e,this.workgroupSize),this.sliceDimGreaterThanOne=t>1,this.shaderKey=`scatter_${n}_${r}_${this.sliceDimGreaterThanOne}_${o}_${u}_${a.length}`;const l=se(a.length);this.uniforms=`sliceDim : i32, strides: ${l}, updatesSize: i32,`,this.updatesRank=r,this.indicesRank=n}getUserCode(){let e="";this.indicesRank===1?e="coords[0]":this.indicesRank===2&&(e="coords[0], j");const t=`getIndices(${e})`,n=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let r="",a="";this.dispatchLayout.x.length===1?(r="flattenedIndex",a=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `):this.dispatchLayout.x.length===2&&(r="vec2<i32>(flattenedIndex, coords[1])",a=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        // N.B. |updates| could be a scalar tensor, conceptually representing a
        // 2D tensor with all values equal to that. By design, its size must be
        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|
        // gives the other.
        let sliceSize = uniforms.outShape[1];
        let d0 = index / sliceSize;
        let d1 = index - d0 * sliceSize;
        return vec2<i32>(d0, d1);
      }
      `);const o=`getUpdates(${Array.from({length:this.updatesRank},(l,d)=>`coords[${d}]`).join(", ")})`;return`
    ${a}
      ${E("index")} {
        if (index < uniforms.updatesSize) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${t}));
            flattenedIndex = flattenedIndex + indexInside * ${n};
          }
          let updateValue =
              ${ft(this.type)}(${o});
          let flatIndex = getOutputIndexFromCoords(${r});

          ${this.sumDupeIndices?ot("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}
        }
      }`}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vk(s){const{inputs:e,backend:t,attrs:n}=s,{indices:r,updates:a}=e,{shape:i}=n,{sliceRank:o,numUpdates:u,sliceSize:l,strides:d,outputSize:c}=br(a,r,i),h=[c/l,l];if(c===0)return t.makeTensorInfo(i,r.dtype);const f=F({inputs:{x:r},backend:t,attrs:{shape:[u,o]}}),m=F({inputs:{x:a},backend:t,attrs:{shape:[u,l]}}),y=m.dtype,g=xe({backend:t,attrs:{shape:h,value:0,dtype:y}}),b=D(m.shape),S=[{type:"int32",data:[o]},{type:"int32",data:d},{type:"int32",data:[b]}],x=new as(m.shape,o,f.shape.length,m.shape.length,d,h,y),C=t.runWebGPUProgram(x,[m,f],y,S,g),v=F({inputs:{x:C},backend:t,attrs:{shape:i}});return t.disposeData(f.dataId),t.disposeData(m.dataId),t.disposeData(C.dataId),v}const Wk={kernelName:ty,backendName:"webgpu",kernelFunc:Vk};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Uk{constructor(e,t){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=t,this.shaderKey=`search_sorted_${t}`}getUserCode(){return`
      fn findBound(batch: i32, value: f32) -> i32 {
        var left = i32(0);
        var right = uniforms.numInputs;
        while (left < right) {
          var mid = (left + right) / 2;
          if (getSortedSequence(batch, mid) ${this.side==="left"?"<":"<="} value) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        return right;
      }

      ${E("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let value = getValuesByOutputIndex(index);
          setOutputAtIndexI32(index, findBound(coords[0], value));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mk(s){const{inputs:e,backend:t,attrs:n}=s,{sortedSequence:r,values:a}=e,{side:i}=n,o=new Uk([a.shape[0],a.shape[1]],i),u=[{type:"int32",data:[r.shape[1]]}];return t.runWebGPUProgram(o,[r,a],"int32",u)}const Gk={kernelName:ny,backendName:"webgpu",kernelFunc:Mk};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Hk{constructor(e,t,n){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=e,this.rank=n,this.shaderKey="select"}getUserCode(){let e,t;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(this.rank===1)t="resRC",e="resRC";else{const r=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],i=[];for(let o=0;o<this.outputShape.length;o++)i.push(`${r[o]}`),o<this.cRank&&a.push(`${r[o]}`);e=a.join(),t=i.join()}return`
      ${E("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${e});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${t}));
          } else {
            setOutputAtIndex(index, getB(${t}));
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jk(s){const{inputs:e,backend:t}=s,{condition:n,t:r,e:a}=e,i=new Hk(n.shape.length,r.shape,r.shape.length);return t.runWebGPUProgram(i,[n,r,a],at(r.dtype,a.dtype))}const qk={kernelName:ry,backendName:"webgpu",kernelFunc:jk};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kk=K({opType:T.SELU}),Xk={kernelName:ay,backendName:"webgpu",kernelFunc:Kk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yk=K({opType:T.SIGMOID}),Qk={kernelName:cy,backendName:"webgpu",kernelFunc:Yk};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jk=K({opType:T.SIGN}),Zk={kernelName:ly,backendName:"webgpu",kernelFunc:Jk};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e3=K({opType:T.SIN}),t3={kernelName:oy,backendName:"webgpu",kernelFunc:e3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const s3=K({opType:T.SINH}),n3={kernelName:uy,backendName:"webgpu",kernelFunc:s3};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r3=K({opType:T.SOFTPLUS}),a3={kernelName:dy,backendName:"webgpu",kernelFunc:r3};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class i3{constructor(e,t,n,r,a,i){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const o=new Array(r.length);for(let u=0;u<o.length;u++)o[u]=r[a[u]];this.outputShape=o,this.newDim=a,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,this.paddedXShape=t,this.uniforms+=`reshapedPaddedXShape : ${se(r.length)}, paddedXShapeStrides : ${se(i)}, `,n.map((u,l)=>{this.uniforms+=` pad${l} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${a}`}getUserCode(){const e=se(this.outputShape.length),t=ro(this.newDim);return`
      ${Ps(this.paddedXShape,"PaddedX")}
      ${E("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${e}(${t}), uniforms.reshapedPaddedXShape);
          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);
          ${vo(this.xShape,!0)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o3=s=>{const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{blockShape:a,paddings:i}=n;A(r.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");const o=a.reduce((S,x)=>S*x),u=[[0,0]];u.push(...i);for(let S=1+a.length;S<r.shape.length;++S)u.push([0,0]);const l=u.map((S,x)=>S[0]+r.shape[x]+S[1]),d=qi(l,a,o,!1),c=Ki(d.length,a.length,!1),h=Xi(l,a,o,!1),f=me(l),m=new i3(r.shape,l,u,d,c,f.length),y=[{type:"int32",data:d},{type:"int32",data:f}];u.map(S=>y.push({type:"int32",data:[S[0],S[1]]}));const g=t.runWebGPUProgram(m,[r],r.dtype,y),b=F({inputs:{x:g},backend:t,attrs:{shape:h}});return t.disposeData(g.dataId),b},u3={kernelName:py,backendName:"webgpu",kernelFunc:o3};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class l3{constructor(e,t,n){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.type=n,this.dispatchLayout=O([t]),this.dispatch=P(this.dispatchLayout,[t],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.sparseSize) {
        let indexInSegmentIds = index / uniforms.segmentSize;
        let indexInSegment = index % uniforms.segmentSize;
        let indexInInput = indices[indexInSegmentIds];
        let segmentId = segmentIds[indexInSegmentIds];

        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];
        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;
        ${ot("&result[outIndex]","value",this.type)}
      }
    }
  `}}class c3{constructor(e,t){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[e],this.dispatchLayout=O(t),this.dispatch=P(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.segmentIdsShape) {
        let segmentId = segmentIds[index];
        ${ot("&result[segmentId]","1","int32")}
      }
    }
  `}}class d3{constructor(e,t){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.type=t,this.dispatchLayout=O(e),this.dispatch=P(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.size) {
        let segmentId = index / uniforms.segmentSize;
        let count = sameSegmentIdCount[segmentId];
        if (count != 0) {
          ${this.type==="float32"?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function No(s,e,t,n=!1,r){const i=D(s.shape)/s.shape[0],o=s.dtype,u=D(e.shape),l=r.readSync(t.dataId),c=u>0?l[u-1]+1:0;let h;const f=s.shape.slice();f[0]=c;const m=u*i,y=xe({backend:r,attrs:{shape:f,value:0,dtype:o}});h=new l3(f,m,o);let g=[{type:"int32",data:[i]},{type:"int32",data:[m]}];const b=r.runWebGPUProgram(h,[s,e,t],o,g,y);if(n)return b;const S=xe({backend:r,attrs:{shape:[c],value:0,dtype:"int32"}});h=new c3(c,t.shape);const x=r.runWebGPUProgram(h,[t],"int32",null,S),C=xe({backend:r,attrs:{shape:f,value:0,dtype:o}});h=new d3(f,o),g=[{type:"int32",data:[i]}];const v=r.runWebGPUProgram(h,[b,x],o,g,C);return r.disposeData(b.dataId),r.disposeData(x.dataId),v}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h3(s){const{inputs:e,backend:t}=s,{data:n,indices:r,segmentIds:a}=e;return No(n,r,a,!1,t)}const p3={kernelName:gy,backendName:"webgpu",kernelFunc:h3};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f3(s){const{inputs:e,backend:t}=s,{data:n,indices:r,segmentIds:a}=e;return No(n,r,a,!0,t)}const m3={kernelName:yy,backendName:"webgpu",kernelFunc:f3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class g3{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const e=y3(this.rank,"uniforms.");return`
      ${E("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${e}));
        }
      }
    `}}function y3(s,e=""){if(s>=5)throw Error(`Tile for rank ${s} is not yet supported`);if(s===1)return`(resRC % ${e}aShape)`;const t=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let r=0;r<s;r++)n.push(`(${t[r]} % ${e}aShape[${r}])`);return n.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cr(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{reps:a}=n;if(t.shouldExecuteOnCPU([r])||r.dtype==="string"||r.shape.length>=5){const u=t.readSync(r.dataId),l=r.dtype==="string"?u.map(h=>Gt(h)):u,d=de(r.shape,r.dtype,l),c=i2(d,a);return t.makeTensorInfo(c.shape,c.dtype,c.values)}const i=new g3(r.shape,a);return t.runWebGPUProgram(i,[r],r.dtype)}const b3={kernelName:gi,backendName:"webgpu",kernelFunc:Cr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w3(s){const{inputs:e,backend:t,attrs:n}=s,{sparseIndices:r,sparseValues:a,defaultValue:i}=e,{outputShape:o}=n,{sliceRank:u,numUpdates:l,sliceSize:d,strides:c,outputSize:h}=br(a,r,o),f=!1;if(a.dtype==="string"){const _=t.bufferSync(r),I=t.bufferSync(a),N=Gt(t.readSync(i.dataId)[0]),w=e2(_,I,o,h,d,l,u,c,N,f);return t.makeTensorInfo(o,w.dtype,w.values)}const m=[h/d,d],y=F({inputs:{x:r},backend:t,attrs:{shape:[l,u]}}),g=a.shape.length?F({inputs:{x:a},backend:t,attrs:{shape:[l,d]}}):$e({inputs:{x:a},backend:t}),b=g.dtype,S=t.makeTensorInfo([],b,Qe(1,b)),x=F({inputs:{x:i},backend:t,attrs:{shape:Array(m.length).fill(1)}}),C=Cr({inputs:{x},backend:t,attrs:{reps:m}}),v=D([l,d]),k=[{type:"int32",data:[u]},{type:"int32",data:c},{type:"int32",data:[v]}];switch(l){case 0:break;case 1:{const _=new as([l,d],u,y.shape.length,g.shape.length,c,m,b,f);t.runWebGPUProgram(_,[g,y],b,k,C)}break;default:{const _=new as([l,d],u,y.shape.length,S.shape.length,c,m,b,f);t.runWebGPUProgram(_,[S,y],b,k,C)}{const _=new as([l,d],u,y.shape.length,g.shape.length,c,m,b);t.runWebGPUProgram(_,[g,y],b,k,C)}}const R=F({inputs:{x:C},backend:t,attrs:{shape:o}});return t.disposeData(y.dataId),t.disposeData(g.dataId),t.disposeData(x.dataId),t.disposeData(S.dataId),t.disposeData(C.dataId),R}const S3={kernelName:by,backendName:"webgpu",kernelFunc:w3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x3(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{numOrSizeSplits:a,axis:i}=n,o=it(i,r.shape)[0],u=aS(r,a,o),l=r.shape.length,d=new Array(l).fill(0),c=r.shape.slice();return u.map(h=>{const f=[...c];f[o]=h;const m=Yt({inputs:{x:r},backend:t,attrs:{begin:d,size:f}});return d[o]+=h,m})}const C3={kernelName:fy,backendName:"webgpu",kernelFunc:x3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I3=K({opType:T.SQRT}),v3={kernelName:fi,backendName:"webgpu",kernelFunc:I3};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N3={kernelName:Sy,backendName:"webgpu",kernelFunc:({inputs:s,backend:e})=>{const{x:t}=s,n=e,r=new Xt(t.shape,T.SQUARE);return n.runWebGPUProgram(r,[t],t.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k3=le({opType:B.SQUARED_DIFFERENCE}),$3={kernelName:wy,backendName:"webgpu",kernelFunc:k3};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T3({inputs:s,attrs:e,backend:t}){const{x:n}=s,r=new Xt(n.shape,T.STEP,"stepAlpha : f32,"),a=[{type:"float32",data:[e.alpha]}];return t.runWebGPUProgram(r,[n],n.dtype,a)}const R3={kernelName:Ey,backendName:"webgpu",kernelFunc:T3};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class E3{constructor(e){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const t=se(this.outputShape.length);this.uniforms=`begin : ${t},  strides : ${t}, `,this.shaderKey="stridedSlice"}getUserCode(){const e=this.outputShape.length;let t="";if(e===1)t="coords * uniforms.strides + uniforms.begin";else{let r=0;t=this.outputShape.map((a,i)=>(r++,this.outputShape.length===1?`coords * uniforms.strides[${i}] + uniforms.begin[${i}]`:`coords[${r-1}] * uniforms.strides[${i}] + uniforms.begin[${i}]`)).join(",")}return`
       ${E("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${t}));
         }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P3(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{begin:a,end:i,strides:o,beginMask:u,endMask:l,ellipsisMask:d,newAxisMask:c,shrinkAxisMask:h}=n,{finalShapeSparse:f,finalShape:m,isIdentity:y,sliceDim0:g,isSimpleSlice:b,begin:S,end:x,strides:C}=_w(r.shape,a,i,o,u,l,d,c,h);let v;if(y)v=F({inputs:{x:r},backend:t,attrs:{shape:m}});else if(g||b){A(r.shape.length>=1,()=>`Input must have rank at least 1, got: ${r.shape.length}`);const k=Ew(S,x,C),R=Yt({inputs:{x:r},backend:t,attrs:{begin:S,size:k}});v=F({inputs:{x:R},backend:t,attrs:{shape:m}}),t.disposeData(R.dataId)}else if(t.shouldExecuteOnCPU([r])){const R=t.readSync(r.dataId),_=de(r.shape,r.dtype,R),I=n2(f,_,C,S);v=t.makeTensorInfo(m,r.dtype,I.values)}else{const R=new E3(f),_=[{type:"int32",data:S},{type:"int32",data:C}],I=t.runWebGPUProgram(R,[r],r.dtype,_);v=F({inputs:{x:I},backend:t,attrs:{shape:m}}),t.disposeData(I.dataId)}return v}const A3={kernelName:xy,backendName:"webgpu",kernelFunc:P3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D3(s){const{inputs:e,backend:t,attrs:n}=s,{separator:r,nGramWidths:a,leftPad:i,rightPad:o,padWidth:u,preserveShortSequences:l}=n,{data:d,dataSplits:c}=e,h=t.readSync(d.dataId),f=t.readSync(c.dataId),[m,y]=r2(h,f,r,a,i,o,u,l);return[t.makeTensorInfo([m.length],"string",m),t.makeTensorInfo(c.shape,"int32",y)]}const _3={kernelName:Cy,backendName:"webgpu",kernelFunc:D3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O3=le({opType:B.SUB,cpuKernelImpl:a2,supportsComplex:!0}),F3={kernelName:mi,backendName:"webgpu",kernelFunc:O3};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z3=K({opType:T.TAN}),L3={kernelName:Iy,backendName:"webgpu",kernelFunc:z3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B3=K({opType:T.TANH}),V3={kernelName:vy,backendName:"webgpu",kernelFunc:B3};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W3(s){const{inputs:e,backend:t,attrs:n}=s,{tensor:r,indices:a,updates:i}=e,{sliceRank:o,numUpdates:u,sliceSize:l,strides:d,outputSize:c}=br(i,a,r.shape),h=[c/l,l];if(c===0)return t.makeTensorInfo(r.shape,a.dtype);const f=[],m=F({inputs:{x:a},backend:t,attrs:{shape:[u,o]}});f.push(m);const y=F({inputs:{x:i},backend:t,attrs:{shape:[u,l]}});f.push(y);const g=F({inputs:{x:r},backend:t,attrs:{shape:h}});f.push(g);const b=Cr({inputs:{x:g},backend:t,attrs:{reps:Array(h.length).fill(1)}}),S=new as([u,l],o,m.shape.length,y.shape.length,d,h,r.dtype,!1),x=D([u,l]),C=[{type:"int32",data:[o]},{type:"int32",data:d},{type:"int32",data:[x]}],v=t.runWebGPUProgram(S,[y,m],g.dtype,C,b);f.push(v);const k=F({inputs:{x:v},backend:t,attrs:{shape:r.shape}});return f.forEach(R=>t.disposeData(R.dataId)),k}const U3={kernelName:sy,backendName:"webgpu",kernelFunc:W3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class M3{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`inputSize : i32, firstPass : i32, negativeInf : f32,
        dir : i32, inc : i32,`,this.shaderKey="swap"}getUserCode(){return`
        ${E("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}class G3{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`
        ${E("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ot(s,e){e!==null&&s.disposeData(e.dataId)}function ka(s){let e=1;for(;e<s;)e*=2;return e}function H3(s){const{inputs:e,backend:t,attrs:n}=s,{x:r}=e,{k:a,sorted:i}=n,o=r.shape,u=o[o.length-1];if(t.shouldExecuteOnCPU([r])){const v=t.readSync(r.dataId),[k,R]=o2(v,o,r.dtype,a,i);return[t.makeTensorInfo(k.shape,k.dtype,k.values),t.makeTensorInfo(R.shape,R.dtype,R.values)]}if(a===0)return o[o.length-1]=0,[t.makeTensorInfo(o,r.dtype,[]),t.makeTensorInfo(o,"int32",[])];if(u===1)return[r,xe({attrs:{shape:o,dtype:"int32",value:0},backend:t})];const d=D(o)/u,c=F({inputs:{x:r},attrs:{shape:[d,u]},backend:t}),h=ka(a),f=ka(u);let m=null;const y=()=>m===null?[c,c]:[c,m],g=(v,k,R)=>{const _=y(),I=new M3(R),w=[{type:"int32",data:[u]},{type:"int32",data:[m===null?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[v]},{type:"int32",data:[k]}],$=m;m=t.runWebGPUProgram(I,_,"int32",w),Ot(t,$)};for(let v=1;v<h;v*=2){const k=v*2;for(let R=v;R>=1;R/=2)g(k,R,[d,f])}for(let v=f;v>h;v/=2){const k=y(),R=new G3([d,v/2]),I=[{type:"int32",data:[u]},{type:"int32",data:[m===null?1:0]},{type:"int32",data:[h]}],N=m;m=t.runWebGPUProgram(R,k,"int32",I),Ot(t,N);const w=h/2,$=w*2;for(let L=w;L>=1;L/=2)g($,L,m.shape)}let b=m;m=Yt({inputs:{x:m},backend:t,attrs:{begin:0,size:[d,a]}}),Ot(t,b);let S=So({inputs:{x:c,indices:m},backend:t,attrs:{axis:1,batchDims:1}});Ot(t,c);const x=o.slice(0,-1);x.push(a),b=m,m=F({inputs:{x:m},attrs:{shape:x},backend:t}),Ot(t,b);const C=S;return S=F({inputs:{x:S},attrs:{shape:x},backend:t}),Ot(t,C),[S,m]}const j3={kernelName:Ny,backendName:"webgpu",kernelFunc:H3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class q3{constructor(e){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=O(this.outputShape),this.dispatch=P(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${E("index")} {
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K3(s){const{inputs:e,backend:t,attrs:n}=s,{image:r,transforms:a}=e,{interpolation:i,fillMode:o,fillValue:u,outputShape:l}=n,[d,c,h,f]=r.shape,[m,y]=l??[c,h],g=[d,m,y,f],b=new q3(g),S=i==="nearest"?1:2;let x;switch(o){case"constant":x=1;break;case"reflect":x=2;break;case"wrap":x=3;break;case"nearest":x=4;break;default:x=1;break}const C=[{type:"int32",data:[S]},{type:"int32",data:[x]},{type:"float32",data:[u]}];return t.runWebGPUProgram(b,[r,a],"float32",C)}const X3={kernelName:ky,backendName:"webgpu",kernelFunc:K3};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(s){const{inputs:e,backend:t,attrs:n}=s,{value:r}=e;let{axis:a}=n;a<0&&(a+=r.shape.length);const i=r,o=i.shape.length,u=r.shape[a],l=new Array(o-1);let d=0;for(let y=0;y<o;y++)y!==a&&(l[d++]=i.shape[y]);const c=[],h=new Array(o).fill(0),f=i.shape.slice();f[a]=1;const m=new Array(u);for(let y=0;y<m.length;y++){h[a]=y;const g=Yt({inputs:{x:i},backend:t,attrs:{begin:h,size:f}}),b=F({inputs:{x:g},backend:t,attrs:{shape:l}});m[y]=b,c.push(g)}return c.forEach(y=>t.disposeData(y.dataId)),m}const Q3={kernelName:Ty,backendName:"webgpu",kernelFunc:Y3};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J3{constructor(e,t,n){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.dispatchLayout=O(e),this.dispatch=P(this.dispatchLayout,e,this.workgroupSize),n!=="float32"&&n!=="int32")throw new Error(`UnsortedSegmentSum only supports float32 and int32
              types, does not support ${n} type.`);this.type=n,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`
    ${E("index")} {
      if (index < uniforms.xSize) {
        let coords = getXCoordsFromIndex(index);
        let b = coords[0];
        let inCol = coords[1];

        let segmentId = i32(getSegmentIds(inCol));
        if (segmentId >= 0) {
          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;
          let value = getX(b, inCol);

          ${ot("&result[flatIndex]","value",this.type)}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z3(s){const{inputs:e,backend:t,attrs:n}=s,{x:r,segmentIds:a}=e,{numSegments:i}=n,o=r.shape.length,u=[];let l=0;const d=xs([l],o);let c=r;d!=null&&(c=Me({inputs:{x:r},backend:t,attrs:{perm:d}}),u.push(c),l=Cs(1,o)[0]);const h=yS(c.shape,l,i),f=D([c.shape[l]]),m=F({inputs:{x:c},backend:t,attrs:{shape:[-1,f]}});u.push(m);const y=r.dtype,g=[m.shape[0],i],b=xe({backend:t,attrs:{shape:g,value:0,dtype:y}}),S=new J3(m.shape,g,y),x=[{type:"int32",data:[i]},{type:"int32",data:[D(m.shape)]}],C=t.runWebGPUProgram(S,[m,a],y,x,b),v=F({inputs:{x:C},backend:t,attrs:{shape:h}});u.push(C);let k=v;if(d!=null){u.push(v);const R=Gi(d);k=Me({inputs:{x:k},backend:t,attrs:{perm:R}})}return u.forEach(R=>t.disposeData(R.dataId)),k}const e$={kernelName:Ry,backendName:"webgpu",kernelFunc:Z3};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t$=[x1,c2,h2,f2,g2,w2,k2,T2,E2,A2,_2,F2,L2,V2,U2,q2,X2,Z2,tC,nC,uC,hC,mC,wC,xC,NC,I1,TC,AC,VC,jC,YC,ZC,tI,nI,aI,oI,cI,hI,fI,gI,wI,kI,TI,CI,PI,_I,LI,VI,MI,qI,XI,QI,ZI,tv,nv,rv,iv,uv,b1,cv,gv,hv,fv,wv,xv,Iv,kv,Rv,Pv,Dv,C1,Ov,EC,zv,Bv,Wv,Mv,Hv,qv,Yv,eN,Jv,sN,rN,iN,cN,pN,G2,mN,yN,NN,wN,IN,$N,H2,RN,PN,DN,ON,VN,GI,UN,GN,jN,gC,XN,QN,ZN,sk,rk,ik,uk,ck,yC,hk,fk,gk,bk,w1,xk,vk,$k,Ek,Dk,Ok,zk,Bk,Wk,Gk,qk,Xk,Qk,Zk,t3,n3,iC,R3,A3,_3,LN,a3,u3,p3,m3,S3,C3,v3,N3,$3,F3,HI,L3,V3,U3,b3,j3,X3,C2,Q3,e$,YN];for(const s of t$)zy(s);class s${open=e=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(t=>{e.srcObject=t}):alert("Can't open Webcam!")};close=e=>{e.srcObject?(e.srcObject.getTracks().forEach(t=>{t.stop()}),e.srcObject=null):alert("Please open Webcam first!")}}const n$=({imageRef:s,cameraRef:e,videoRef:t})=>{const[n,r]=Ae.useState(null),a=Ae.useRef(null),i=Ae.useRef(null),o=new s$,u=()=>{const c=s.current.src;s.current.src="#",URL.revokeObjectURL(c),r(null),a.current.value="",s.current.style.display="none"},l=()=>{const c=t.current.src;t.current.src="",URL.revokeObjectURL(c),r(null),i.current.value="",t.current.style.display="none"},d=()=>{n===null||n==="image"?(n==="image"&&u(),o.open(e.current),e.current.style.display="block",r("camera")):n==="camera"?(o.close(e.current),e.current.style.display="none",r(null)):alert(`Can't handle more than 1 stream
Currently streaming : ${n}`)};return Ae.useEffect(()=>(console.log(ld()),setTimeout(()=>{d()},500),()=>{ke(()=>{}),r(null)}),[]),fe.jsxs("div",{className:"btn-container",children:[fe.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:c=>{const h=URL.createObjectURL(c.target.files[0]);s.current.src=h,s.current.style.display="block",r("image")},ref:a}),fe.jsxs("button",{onClick:()=>{n===null?a.current.click():n==="image"?u():alert(`Can't handle more than 1 stream
Currently streaming : ${n}`)},children:[n==="image"?"Close":"Open"," Image"]}),fe.jsx("input",{type:"file",accept:"video/*",style:{display:"none"},onChange:c=>{n==="image"&&u();const h=URL.createObjectURL(c.target.files[0]);t.current.src=h,t.current.addEventListener("ended",()=>l()),t.current.style.display="block",r("video")},ref:i}),fe.jsxs("button",{onClick:()=>{n===null||n==="image"?i.current.click():n==="video"?l():alert(`Can't handle more than 1 stream
Currently streaming : ${n}`)},children:[n==="video"?"Close":"Open"," Video"]}),fe.jsxs("button",{onClick:d,children:[n==="camera"?"Close":"Open"," Webcam"]})]})},ko=["person","bicycle","car","motorcycle","airplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","couch","potted plant","bed","dining table","toilet","tv","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"],r$=(s,e,t,n,r)=>{const a=s.getContext("2d");a.clearRect(0,0,a.canvas.width,a.canvas.height);const i=new $a,o=`${Math.max(Math.round(Math.max(a.canvas.width,a.canvas.height)/40),14)}px Arial`;a.font=o,a.textBaseline="top";for(let u=0;u<t.length;++u){const l=ko[n[u]],d=i.get(n[u]),c=(t[u]*100).toFixed(1);let[h,f,m,y]=e.slice(u*4,(u+1)*4);f*=r[0],y*=r[0],h*=r[1],m*=r[1];const g=y-f,b=m-h;a.fillStyle=$a.hexToRgba(d,.2),a.fillRect(f,h,g,b),a.strokeStyle=d,a.lineWidth=Math.max(Math.min(a.canvas.width,a.canvas.height)/200,2.5),a.strokeRect(f,h,g,b),a.fillStyle=d;const S=a.measureText(l+" - "+c+"%").width,x=parseInt(o,10),C=h-(x+a.lineWidth);a.fillRect(f-1,C<0?0:C,S+a.lineWidth,x+a.lineWidth),a.fillStyle="#ffffff",a.fillText(l+" - "+c+"%",f-1,C<0?0:C)}};class $a{constructor(){this.palette=["#FF3838","#FF9D97","#FF701F","#FFB21D","#CFD231","#48F90A","#92CC17","#3DDB86","#1A9334","#00D4BB","#2C99A8","#00C2FF","#344593","#6473FF","#0018EC","#8438FF","#520085","#CB38FF","#FF95C8","#FF37C7"],this.n=this.palette.length}get=e=>this.palette[Math.floor(e)%this.n];static hexToRgba=(e,t)=>{const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?`rgba(${[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)].join(", ")}, ${t})`:null}}const a$=ko.length,i$=(s,e,t)=>{let n,r;return[ke(()=>{const i=rp(s),[o,u]=i.shape.slice(0,2),l=Math.max(u,o),d=i.pad([[0,l-o],[0,l-u],[0,0]]);return n=l/u,r=l/o,nr.resizeBilinear(d,[e,t]).div(255).expandDims(0)}),n,r]},$o=async(s,e,t,n=()=>{})=>{const[r,a]=e.inputShape.slice(1,3);Rr().startScope();const[i,o,u]=i$(s,r,a),l=e.net.execute(i),d=l.transpose([0,2,1]),c=ke(()=>{const S=d.slice([0,0,2],[-1,-1,1]),x=d.slice([0,0,3],[-1,-1,1]),C=Vt(d.slice([0,0,0],[-1,-1,1]),Ds(S,2)),v=Vt(d.slice([0,0,1],[-1,-1,1]),Ds(x,2));return ps([v,C,st(v,x),st(C,S)],2).squeeze()}),[h,f]=ke(()=>{const S=d.slice([0,0,4],[-1,-1,a$]).squeeze(0);return[S.max(1),S.argMax(1)]}),m=await nr.nonMaxSuppressionAsync(c,h,500,.45,.2),y=c.gather(m,0).dataSync(),g=h.gather(m,0).dataSync(),b=f.gather(m,0).dataSync();r$(t,y,g,b,[o,u]),rr([l,d,c,h,f,m]),n(),Rr().endScope()},Ta=(s,e,t)=>{const n=async()=>{if(s.videoWidth===0&&s.srcObject===null){const r=t.getContext("2d");r.clearRect(0,0,r.canvas.width,r.canvas.height);return}$o(s,e,t,()=>{requestAnimationFrame(n)})};n()},To="Ultralytics YOLOv12 is a versatile model that excels in object detection, segmentation, image classification and pose estimation.";function p$({}){return[{title:`Vision | ${hd.TITLES.OBJECTS_DETECTION} | ${To}`},{name:"description",content:"Live Detections with YOLOv12"}]}const o$=s=>fe.jsxs("div",{className:"wrapper",...s,children:[fe.jsx("div",{className:"spinner"}),fe.jsx("p",{children:s.children})]}),u$=()=>{const{setTitle:s,setDescription:e}=dd(),{TITLES:t}=pd();Ae.useEffect(()=>{s(t.OBJECTS_DETECTION),e(To)},[s,e,t.OBJECTS_DETECTION]);const[n,r]=Ae.useState({loading:!0,progress:0}),[a,i]=Ae.useState({net:null,inputShape:[1,0,0,3]}),o="yolo12n",u=Ae.useRef(null),l=Ae.useRef(null),d=Ae.useRef(null),c=Ae.useRef(null);return Ae.useEffect(()=>{cd().then(async()=>{r({loading:!0,progress:0});const h=await Af(`../${o}_web_model/model.json`,{onProgress:y=>{r({loading:!0,progress:y})}}),f=Bt(h.inputs[0].shape),m=h.execute(f);r({loading:!1,progress:1}),i({net:h,inputShape:h.inputs[0].shape}),rr([m,f])})},[o]),fe.jsxs("div",{className:"yolo",children:[n.loading&&fe.jsxs(o$,{children:["Loading model... ",(n.progress*100).toFixed(2),"%"]}),fe.jsxs("div",{className:"content",children:[fe.jsx("img",{src:"#",ref:u,onLoad:()=>$o(u.current,a,c.current)}),fe.jsx("video",{autoPlay:!0,muted:!0,ref:l,onPlay:()=>Ta(l.current,a,c.current)}),fe.jsx("video",{autoPlay:!0,muted:!0,ref:d,onPlay:()=>Ta(d.current,a,c.current)}),fe.jsx("canvas",{width:a.inputShape[1],height:a.inputShape[2],ref:c})]}),fe.jsx(n$,{imageRef:u,cameraRef:l,videoRef:d})]})},f$=Eo(u$);export{f$ as default,p$ as meta};
