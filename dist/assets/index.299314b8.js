import{r as Xn,a as $n,b as Yn,e as Kn}from"./qr-code-styling.d99a870d.js";import{b6 as Jn}from"./index.b215c301.js";import"./mobile.16e250bc.js";import"./index.c4fef178.js";function Qn(re,le){for(var qe=0;qe<le.length;qe++){const fe=le[qe];if(typeof fe!="string"&&!Array.isArray(fe)){for(const Fe in fe)if(Fe!=="default"&&!(Fe in re)){const Ye=Object.getOwnPropertyDescriptor(fe,Fe);Ye&&Object.defineProperty(re,Fe,Ye.get?Ye:{enumerable:!0,get:()=>fe[Fe]})}}}return Object.freeze(Object.defineProperty(re,Symbol.toStringTag,{value:"Module"}))}var Zt={},Ie={},gn={},Qt={exports:{}},vn;function ei(){return vn||(vn=1,function(re){typeof navigator<"u"&&function(le,qe){re.exports?re.exports=qe(le):(le.lottie=qe(le),le.bodymovin=le.lottie)}(window||{},function(le){var qe="http://www.w3.org/2000/svg",fe="",Fe=-999999,Ye=!1,Me=!0,Ge="",oe,_e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Se=Math.pow,It=Math.sqrt,je=Math.floor,ot=Math.min,lt={};(function(){var e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],t,n=e.length;for(t=0;t<n;t+=1)lt[e[t]]=Math[e[t]]})();function wt(){return{}}lt.random=Math.random,lt.abs=function(e){var t=typeof e;if(t==="object"&&e.length){var n=ge(e.length),i,s=e.length;for(i=0;i<s;i+=1)n[i]=Math.abs(e[i]);return n}return Math.abs(e)};var be=150,ce=Math.PI/180,Ue=.5519;function Ke(e,t,n,i){this.type=e,this.currentTime=t,this.totalTime=n,this.direction=i<0?-1:1}function tt(e,t){this.type=e,this.direction=t<0?-1:1}function ht(e,t,n,i){this.type=e,this.currentLoop=n,this.totalLoops=t,this.direction=i<0?-1:1}function pt(e,t,n){this.type=e,this.firstFrame=t,this.totalFrames=n}function Ft(e,t){this.type=e,this.target=t}function Ot(e,t){this.type="renderFrameError",this.nativeError=e,this.currentTime=t}function nt(e){this.type="configError",this.nativeError=e}var ye=function(){var e=0;return function(){return e+=1,Ge+"__lottie_element_"+e}}();function it(e,t,n){var i,s,r,u,x,v,A,k;switch(u=Math.floor(e*6),x=e*6-u,v=n*(1-t),A=n*(1-x*t),k=n*(1-(1-x)*t),u%6){case 0:i=n,s=k,r=v;break;case 1:i=A,s=n,r=v;break;case 2:i=v,s=n,r=k;break;case 3:i=v,s=A,r=n;break;case 4:i=k,s=v,r=n;break;case 5:i=n,s=v,r=A;break}return[i,s,r]}function dt(e,t,n){var i=Math.max(e,t,n),s=Math.min(e,t,n),r=i-s,u,x=i===0?0:r/i,v=i/255;switch(i){case s:u=0;break;case e:u=t-n+r*(t<n?6:0),u/=6*r;break;case t:u=n-e+r*2,u/=6*r;break;case n:u=e-t+r*4,u/=6*r;break}return[u,x,v]}function rt(e,t){var n=dt(e[0]*255,e[1]*255,e[2]*255);return n[1]+=t,n[1]>1?n[1]=1:n[1]<=0&&(n[1]=0),it(n[0],n[1],n[2])}function ct(e,t){var n=dt(e[0]*255,e[1]*255,e[2]*255);return n[2]+=t,n[2]>1?n[2]=1:n[2]<0&&(n[2]=0),it(n[0],n[1],n[2])}function at(e,t){var n=dt(e[0]*255,e[1]*255,e[2]*255);return n[0]+=t/360,n[0]>1?n[0]-=1:n[0]<0&&(n[0]+=1),it(n[0],n[1],n[2])}(function(){var e=[],t,n;for(t=0;t<256;t+=1)n=t.toString(16),e[t]=n.length===1?"0"+n:n;return function(i,s,r){return i<0&&(i=0),s<0&&(s=0),r<0&&(r=0),"#"+e[i]+e[s]+e[r]}})();function kt(){}kt.prototype={triggerEvent:function(e,t){if(this._cbs[e])for(var n=this._cbs[e],i=0;i<n.length;i+=1)n[i](t)},addEventListener:function(e,t){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(t),function(){this.removeEventListener(e,t)}.bind(this)},removeEventListener:function(e,t){if(!t)this._cbs[e]=null;else if(this._cbs[e]){for(var n=0,i=this._cbs[e].length;n<i;)this._cbs[e][n]===t&&(this._cbs[e].splice(n,1),n-=1,i-=1),n+=1;this._cbs[e].length||(this._cbs[e]=null)}}};var ve=function(){function e(n,i){var s=0,r=[],u;switch(n){case"int16":case"uint8c":u=1;break;default:u=1.1;break}for(s=0;s<i;s+=1)r.push(u);return r}function t(n,i){return n==="float32"?new Float32Array(i):n==="int16"?new Int16Array(i):n==="uint8c"?new Uint8ClampedArray(i):e(n,i)}return typeof Uint8ClampedArray=="function"&&typeof Float32Array=="function"?t:e}();function ge(e){return Array.apply(null,{length:e})}function K(e){return document.createElementNS(qe,e)}function Ve(e){return document.createElement(e)}function M(){}M.prototype={addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var e,t=this.dynamicProperties.length;for(e=0;e<t;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var z=function(){var e={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"};return function(t){return e[t]||""}}(),Z={1:"butt",2:"round",3:"square"},j={1:"miter",2:"round",3:"bevel"};/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */var X=function(){var e=Math.cos,t=Math.sin,n=Math.tan,i=Math.round;function s(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function r(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,-S,0,0,S,g,0,0,0,0,1,0,0,0,0,1)}function u(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(1,0,0,0,0,g,-S,0,0,S,g,0,0,0,0,1)}function x(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,0,S,0,0,1,0,0,-S,0,g,0,0,0,0,1)}function v(p){if(p===0)return this;var g=e(p),S=t(p);return this._t(g,-S,0,0,S,g,0,0,0,0,1,0,0,0,0,1)}function A(p,g){return this._t(1,g,p,1,0,0)}function k(p,g){return this.shear(n(p),n(g))}function _(p,g){var S=e(g),R=t(g);return this._t(S,R,0,0,-R,S,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(p),1,0,0,0,0,1,0,0,0,0,1)._t(S,-R,0,0,R,S,0,0,0,0,1,0,0,0,0,1)}function w(p,g,S){return!S&&S!==0&&(S=1),p===1&&g===1&&S===1?this:this._t(p,0,0,0,0,g,0,0,0,0,S,0,0,0,0,1)}function C(p,g,S,R,I,Y,se,ie,Ce,Ee,Ne,De,He,Pe,ke,ze){return this.props[0]=p,this.props[1]=g,this.props[2]=S,this.props[3]=R,this.props[4]=I,this.props[5]=Y,this.props[6]=se,this.props[7]=ie,this.props[8]=Ce,this.props[9]=Ee,this.props[10]=Ne,this.props[11]=De,this.props[12]=He,this.props[13]=Pe,this.props[14]=ke,this.props[15]=ze,this}function E(p,g,S){return S=S||0,p!==0||g!==0||S!==0?this._t(1,0,0,0,0,1,0,0,0,0,1,0,p,g,S,1):this}function L(p,g,S,R,I,Y,se,ie,Ce,Ee,Ne,De,He,Pe,ke,ze){var U=this.props;if(p===1&&g===0&&S===0&&R===0&&I===0&&Y===1&&se===0&&ie===0&&Ce===0&&Ee===0&&Ne===1&&De===0)return U[12]=U[12]*p+U[15]*He,U[13]=U[13]*Y+U[15]*Pe,U[14]=U[14]*Ne+U[15]*ke,U[15]*=ze,this._identityCalculated=!1,this;var we=U[0],ut=U[1],_t=U[2],mt=U[3],st=U[4],gt=U[5],vt=U[6],Ze=U[7],bt=U[8],xt=U[9],Qe=U[10],Ct=U[11],et=U[12],Pt=U[13],Ut=U[14],Xt=U[15];return U[0]=we*p+ut*I+_t*Ce+mt*He,U[1]=we*g+ut*Y+_t*Ee+mt*Pe,U[2]=we*S+ut*se+_t*Ne+mt*ke,U[3]=we*R+ut*ie+_t*De+mt*ze,U[4]=st*p+gt*I+vt*Ce+Ze*He,U[5]=st*g+gt*Y+vt*Ee+Ze*Pe,U[6]=st*S+gt*se+vt*Ne+Ze*ke,U[7]=st*R+gt*ie+vt*De+Ze*ze,U[8]=bt*p+xt*I+Qe*Ce+Ct*He,U[9]=bt*g+xt*Y+Qe*Ee+Ct*Pe,U[10]=bt*S+xt*se+Qe*Ne+Ct*ke,U[11]=bt*R+xt*ie+Qe*De+Ct*ze,U[12]=et*p+Pt*I+Ut*Ce+Xt*He,U[13]=et*g+Pt*Y+Ut*Ee+Xt*Pe,U[14]=et*S+Pt*se+Ut*Ne+Xt*ke,U[15]=et*R+Pt*ie+Ut*De+Xt*ze,this._identityCalculated=!1,this}function b(){return this._identityCalculated||(this._identity=!(this.props[0]!==1||this.props[1]!==0||this.props[2]!==0||this.props[3]!==0||this.props[4]!==0||this.props[5]!==1||this.props[6]!==0||this.props[7]!==0||this.props[8]!==0||this.props[9]!==0||this.props[10]!==1||this.props[11]!==0||this.props[12]!==0||this.props[13]!==0||this.props[14]!==0||this.props[15]!==1),this._identityCalculated=!0),this._identity}function d(p){for(var g=0;g<16;){if(p.props[g]!==this.props[g])return!1;g+=1}return!0}function l(p){var g;for(g=0;g<16;g+=1)p.props[g]=this.props[g];return p}function o(p){var g;for(g=0;g<16;g+=1)this.props[g]=p[g]}function a(p,g,S){return{x:p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12],y:p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13],z:p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]}}function h(p,g,S){return p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12]}function f(p,g,S){return p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13]}function c(p,g,S){return p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]}function y(){var p=this.props[0]*this.props[5]-this.props[1]*this.props[4],g=this.props[5]/p,S=-this.props[1]/p,R=-this.props[4]/p,I=this.props[0]/p,Y=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/p,se=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/p,ie=new X;return ie.props[0]=g,ie.props[1]=S,ie.props[4]=R,ie.props[5]=I,ie.props[12]=Y,ie.props[13]=se,ie}function F(p){var g=this.getInverseMatrix();return g.applyToPointArray(p[0],p[1],p[2]||0)}function B(p){var g,S=p.length,R=[];for(g=0;g<S;g+=1)R[g]=F(p[g]);return R}function W(p,g,S){var R=ve("float32",6);if(this.isIdentity())R[0]=p[0],R[1]=p[1],R[2]=g[0],R[3]=g[1],R[4]=S[0],R[5]=S[1];else{var I=this.props[0],Y=this.props[1],se=this.props[4],ie=this.props[5],Ce=this.props[12],Ee=this.props[13];R[0]=p[0]*I+p[1]*se+Ce,R[1]=p[0]*Y+p[1]*ie+Ee,R[2]=g[0]*I+g[1]*se+Ce,R[3]=g[0]*Y+g[1]*ie+Ee,R[4]=S[0]*I+S[1]*se+Ce,R[5]=S[0]*Y+S[1]*ie+Ee}return R}function O(p,g,S){var R;return this.isIdentity()?R=[p,g,S]:R=[p*this.props[0]+g*this.props[4]+S*this.props[8]+this.props[12],p*this.props[1]+g*this.props[5]+S*this.props[9]+this.props[13],p*this.props[2]+g*this.props[6]+S*this.props[10]+this.props[14]],R}function T(p,g){if(this.isIdentity())return p+","+g;var S=this.props;return Math.round((p*S[0]+g*S[4]+S[12])*100)/100+","+Math.round((p*S[1]+g*S[5]+S[13])*100)/100}function N(){for(var p=0,g=this.props,S="matrix3d(",R=1e4;p<16;)S+=i(g[p]*R)/R,S+=p===15?")":",",p+=1;return S}function P(p){var g=1e4;return p<1e-6&&p>0||p>-1e-6&&p<0?i(p*g)/g:p}function m(){var p=this.props,g=P(p[0]),S=P(p[1]),R=P(p[4]),I=P(p[5]),Y=P(p[12]),se=P(p[13]);return"matrix("+g+","+S+","+R+","+I+","+Y+","+se+")"}return function(){this.reset=s,this.rotate=r,this.rotateX=u,this.rotateY=x,this.rotateZ=v,this.skew=k,this.skewFromAxis=_,this.shear=A,this.scale=w,this.setTransform=C,this.translate=E,this.transform=L,this.applyToPoint=a,this.applyToX=h,this.applyToY=f,this.applyToZ=c,this.applyToPointArray=O,this.applyToTriplePoints=W,this.applyToPointStringified=T,this.toCSS=N,this.to2dCSS=m,this.clone=l,this.cloneFromProps=o,this.equals=d,this.inversePoints=B,this.inversePoint=F,this.getInverseMatrix=y,this._t=this.transform,this.isIdentity=b,this._identity=!0,this._identityCalculated=!1,this.props=ve("float32",16),this.reset()}}();(function(e,t){var n=this,i=256,s=6,r=52,u="random",x=t.pow(i,s),v=t.pow(2,r),A=v*2,k=i-1,_;function w(o,a,h){var f=[];a=a===!0?{entropy:!0}:a||{};var c=b(L(a.entropy?[o,l(e)]:o===null?d():o,3),f),y=new C(f),F=function(){for(var B=y.g(s),W=x,O=0;B<v;)B=(B+O)*i,W*=i,O=y.g(1);for(;B>=A;)B/=2,W/=2,O>>>=1;return(B+O)/W};return F.int32=function(){return y.g(4)|0},F.quick=function(){return y.g(4)/4294967296},F.double=F,b(l(y.S),e),(a.pass||h||function(B,W,O,T){return T&&(T.S&&E(T,y),B.state=function(){return E(y,{})}),O?(t[u]=B,W):B})(F,c,"global"in a?a.global:this==t,a.state)}t["seed"+u]=w;function C(o){var a,h=o.length,f=this,c=0,y=f.i=f.j=0,F=f.S=[];for(h||(o=[h++]);c<i;)F[c]=c++;for(c=0;c<i;c++)F[c]=F[y=k&y+o[c%h]+(a=F[c])],F[y]=a;f.g=function(B){for(var W,O=0,T=f.i,N=f.j,P=f.S;B--;)W=P[T=k&T+1],O=O*i+P[k&(P[T]=P[N=k&N+W])+(P[N]=W)];return f.i=T,f.j=N,O}}function E(o,a){return a.i=o.i,a.j=o.j,a.S=o.S.slice(),a}function L(o,a){var h=[],f=typeof o,c;if(a&&f=="object")for(c in o)try{h.push(L(o[c],a-1))}catch{}return h.length?h:f=="string"?o:o+"\0"}function b(o,a){for(var h=o+"",f,c=0;c<h.length;)a[k&c]=k&(f^=a[k&c]*19)+h.charCodeAt(c++);return l(a)}function d(){try{var o=new Uint8Array(i);return(n.crypto||n.msCrypto).getRandomValues(o),l(o)}catch{var a=n.navigator,h=a&&a.plugins;return[+new Date,n,h,n.screen,l(e)]}}function l(o){return String.fromCharCode.apply(0,o)}b(t.random(),e)})([],lt);var H=function(){var e={};e.getBezierEasing=n;var t={};function n(l,o,a,h,f){var c=f||("bez_"+l+"_"+o+"_"+a+"_"+h).replace(/\./g,"p");if(t[c])return t[c];var y=new d([l,o,a,h]);return t[c]=y,y}var i=4,s=.001,r=1e-7,u=10,x=11,v=1/(x-1),A=typeof Float32Array=="function";function k(l,o){return 1-3*o+3*l}function _(l,o){return 3*o-6*l}function w(l){return 3*l}function C(l,o,a){return((k(o,a)*l+_(o,a))*l+w(o))*l}function E(l,o,a){return 3*k(o,a)*l*l+2*_(o,a)*l+w(o)}function L(l,o,a,h,f){var c,y,F=0;do y=o+(a-o)/2,c=C(y,h,f)-l,c>0?a=y:o=y;while(Math.abs(c)>r&&++F<u);return y}function b(l,o,a,h){for(var f=0;f<i;++f){var c=E(o,a,h);if(c===0)return o;var y=C(o,a,h)-l;o-=y/c}return o}function d(l){this._p=l,this._mSampleValues=A?new Float32Array(x):new Array(x),this._precomputed=!1,this.get=this.get.bind(this)}return d.prototype={get:function(l){var o=this._p[0],a=this._p[1],h=this._p[2],f=this._p[3];return this._precomputed||this._precompute(),o===a&&h===f?l:l===0?0:l===1?1:C(this._getTForX(l),a,f)},_precompute:function(){var l=this._p[0],o=this._p[1],a=this._p[2],h=this._p[3];this._precomputed=!0,(l!==o||a!==h)&&this._calcSampleValues()},_calcSampleValues:function(){for(var l=this._p[0],o=this._p[2],a=0;a<x;++a)this._mSampleValues[a]=C(a*v,l,o)},_getTForX:function(l){for(var o=this._p[0],a=this._p[2],h=this._mSampleValues,f=0,c=1,y=x-1;c!==y&&h[c]<=l;++c)f+=v;--c;var F=(l-h[c])/(h[c+1]-h[c]),B=f+F*v,W=E(B,o,a);return W>=s?b(l,B,o,a):W===0?B:L(l,f,f+v,o,a)}},e}();(function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!le.requestAnimationFrame;++n)le.requestAnimationFrame=le[t[n]+"RequestAnimationFrame"],le.cancelAnimationFrame=le[t[n]+"CancelAnimationFrame"]||le[t[n]+"CancelRequestAnimationFrame"];le.requestAnimationFrame||(le.requestAnimationFrame=function(i){var s=new Date().getTime(),r=Math.max(0,16-(s-e)),u=setTimeout(function(){i(s+r)},r);return e=s+r,u}),le.cancelAnimationFrame||(le.cancelAnimationFrame=function(i){clearTimeout(i)})})();function q(e,t){var n,i=e.length,s;for(n=0;n<i;n+=1){s=e[n].prototype;for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t.prototype[r]=s[r])}}function te(e){function t(){}return t.prototype=e,t}function ue(){var e=Math;function t(w,C,E,L,b,d){var l=w*L+C*b+E*d-b*L-d*w-E*C;return l>-.001&&l<.001}function n(w,C,E,L,b,d,l,o,a){if(E===0&&d===0&&a===0)return t(w,C,L,b,l,o);var h=e.sqrt(e.pow(L-w,2)+e.pow(b-C,2)+e.pow(d-E,2)),f=e.sqrt(e.pow(l-w,2)+e.pow(o-C,2)+e.pow(a-E,2)),c=e.sqrt(e.pow(l-L,2)+e.pow(o-b,2)+e.pow(a-d,2)),y;return h>f?h>c?y=h-f-c:y=c-f-h:c>f?y=c-f-h:y=f-h-c,y>-1e-4&&y<1e-4}var i=function(){return function(w,C,E,L){var b=be,d,l,o,a,h,f=0,c,y=[],F=[],B=an.newElement();for(o=E.length,d=0;d<b;d+=1){for(h=d/(b-1),c=0,l=0;l<o;l+=1)a=Se(1-h,3)*w[l]+3*Se(1-h,2)*h*E[l]+3*(1-h)*Se(h,2)*L[l]+Se(h,3)*C[l],y[l]=a,F[l]!==null&&(c+=Se(y[l]-F[l],2)),F[l]=y[l];c&&(c=It(c),f+=c),B.percents[d]=h,B.lengths[d]=f}return B.addedLength=f,B}}();function s(w){var C=rn.newElement(),E=w.c,L=w.v,b=w.o,d=w.i,l,o=w._length,a=C.lengths,h=0;for(l=0;l<o-1;l+=1)a[l]=i(L[l],L[l+1],b[l],d[l+1]),h+=a[l].addedLength;return E&&o&&(a[l]=i(L[l],L[0],b[l],d[0]),h+=a[l].addedLength),C.totalLength=h,C}function r(w){this.segmentLength=0,this.points=new Array(w)}function u(w,C){this.partialLength=w,this.point=C}var x=function(){var w={};return function(C,E,L,b){var d=(C[0]+"_"+C[1]+"_"+E[0]+"_"+E[1]+"_"+L[0]+"_"+L[1]+"_"+b[0]+"_"+b[1]).replace(/\./g,"p");if(!w[d]){var l=be,o,a,h,f,c,y=0,F,B,W=null;C.length===2&&(C[0]!==E[0]||C[1]!==E[1])&&t(C[0],C[1],E[0],E[1],C[0]+L[0],C[1]+L[1])&&t(C[0],C[1],E[0],E[1],E[0]+b[0],E[1]+b[1])&&(l=2);var O=new r(l);for(h=L.length,o=0;o<l;o+=1){for(B=ge(h),c=o/(l-1),F=0,a=0;a<h;a+=1)f=Se(1-c,3)*C[a]+3*Se(1-c,2)*c*(C[a]+L[a])+3*(1-c)*Se(c,2)*(E[a]+b[a])+Se(c,3)*E[a],B[a]=f,W!==null&&(F+=Se(B[a]-W[a],2));F=It(F),y+=F,O.points[o]=new u(F,B),W=B}O.segmentLength=y,w[d]=O}return w[d]}}();function v(w,C){var E=C.percents,L=C.lengths,b=E.length,d=je((b-1)*w),l=w*C.addedLength,o=0;if(d===b-1||d===0||l===L[d])return E[d];for(var a=L[d]>l?-1:1,h=!0;h;)if(L[d]<=l&&L[d+1]>l?(o=(l-L[d])/(L[d+1]-L[d]),h=!1):d+=a,d<0||d>=b-1){if(d===b-1)return E[d];h=!1}return E[d]+(E[d+1]-E[d])*o}function A(w,C,E,L,b,d){var l=v(b,d),o=1-l,a=e.round((o*o*o*w[0]+(l*o*o+o*l*o+o*o*l)*E[0]+(l*l*o+o*l*l+l*o*l)*L[0]+l*l*l*C[0])*1e3)/1e3,h=e.round((o*o*o*w[1]+(l*o*o+o*l*o+o*o*l)*E[1]+(l*l*o+o*l*l+l*o*l)*L[1]+l*l*l*C[1])*1e3)/1e3;return[a,h]}var k=ve("float32",8);function _(w,C,E,L,b,d,l){b<0?b=0:b>1&&(b=1);var o=v(b,l);d=d>1?1:d;var a=v(d,l),h,f=w.length,c=1-o,y=1-a,F=c*c*c,B=o*c*c*3,W=o*o*c*3,O=o*o*o,T=c*c*y,N=o*c*y+c*o*y+c*c*a,P=o*o*y+c*o*a+o*c*a,m=o*o*a,p=c*y*y,g=o*y*y+c*a*y+c*y*a,S=o*a*y+c*a*a+o*y*a,R=o*a*a,I=y*y*y,Y=a*y*y+y*a*y+y*y*a,se=a*a*y+y*a*a+a*y*a,ie=a*a*a;for(h=0;h<f;h+=1)k[h*4]=e.round((F*w[h]+B*E[h]+W*L[h]+O*C[h])*1e3)/1e3,k[h*4+1]=e.round((T*w[h]+N*E[h]+P*L[h]+m*C[h])*1e3)/1e3,k[h*4+2]=e.round((p*w[h]+g*E[h]+S*L[h]+R*C[h])*1e3)/1e3,k[h*4+3]=e.round((I*w[h]+Y*E[h]+se*L[h]+ie*C[h])*1e3)/1e3;return k}return{getSegmentsLength:s,getNewSegment:_,getPointInSegment:A,buildBezierData:x,pointOnLine2D:t,pointOnLine3D:n}}var ee=ue(),he=function(){var e=1,t=[],n,i,s={onmessage:function(){},postMessage:function(w){n({data:w})}},r={postMessage:function(w){s.onmessage({data:w})}};function u(w){if(le.Worker&&le.Blob&&Ye){var C=new Blob(["var _workerSelf = self; self.onmessage = ",w.toString()],{type:"text/javascript"}),E=URL.createObjectURL(C);return new Worker(E)}return n=w,s}function x(){i||(i=u(function(C){function E(){function b(T,N){var P,m,p=T.length,g,S,R,I;for(m=0;m<p;m+=1)if(P=T[m],"ks"in P&&!P.completed){if(P.completed=!0,P.tt&&(T[m-1].td=P.tt),P.hasMask){var Y=P.masksProperties;for(S=Y.length,g=0;g<S;g+=1)if(Y[g].pt.k.i)o(Y[g].pt.k);else for(I=Y[g].pt.k.length,R=0;R<I;R+=1)Y[g].pt.k[R].s&&o(Y[g].pt.k[R].s[0]),Y[g].pt.k[R].e&&o(Y[g].pt.k[R].e[0])}P.ty===0?(P.layers=d(P.refId,N),b(P.layers,N)):P.ty===4?l(P.shapes):P.ty===5&&W(P)}}function d(T,N){for(var P=0,m=N.length;P<m;){if(N[P].id===T)return N[P].layers.__used?JSON.parse(JSON.stringify(N[P].layers)):(N[P].layers.__used=!0,N[P].layers);P+=1}return null}function l(T){var N,P=T.length,m,p;for(N=P-1;N>=0;N-=1)if(T[N].ty==="sh")if(T[N].ks.k.i)o(T[N].ks.k);else for(p=T[N].ks.k.length,m=0;m<p;m+=1)T[N].ks.k[m].s&&o(T[N].ks.k[m].s[0]),T[N].ks.k[m].e&&o(T[N].ks.k[m].e[0]);else T[N].ty==="gr"&&l(T[N].it)}function o(T){var N,P=T.i.length;for(N=0;N<P;N+=1)T.i[N][0]+=T.v[N][0],T.i[N][1]+=T.v[N][1],T.o[N][0]+=T.v[N][0],T.o[N][1]+=T.v[N][1]}function a(T,N){var P=N?N.split("."):[100,100,100];return T[0]>P[0]?!0:P[0]>T[0]?!1:T[1]>P[1]?!0:P[1]>T[1]?!1:T[2]>P[2]?!0:P[2]>T[2]?!1:null}var h=function(){var T=[4,4,14];function N(m){var p=m.t.d;m.t.d={k:[{s:p,t:0}]}}function P(m){var p,g=m.length;for(p=0;p<g;p+=1)m[p].ty===5&&N(m[p])}return function(m){if(a(T,m.v)&&(P(m.layers),m.assets)){var p,g=m.assets.length;for(p=0;p<g;p+=1)m.assets[p].layers&&P(m.assets[p].layers)}}}(),f=function(){var T=[4,7,99];return function(N){if(N.chars&&!a(T,N.v)){var P,m=N.chars.length,p,g,S,R;for(P=0;P<m;P+=1)if(N.chars[P].data&&N.chars[P].data.shapes)for(R=N.chars[P].data.shapes[0].it,g=R.length,p=0;p<g;p+=1)S=R[p].ks.k,S.__converted||(o(R[p].ks.k),S.__converted=!0)}}}(),c=function(){var T=[5,7,15];function N(m){var p=m.t.p;typeof p.a=="number"&&(p.a={a:0,k:p.a}),typeof p.p=="number"&&(p.p={a:0,k:p.p}),typeof p.r=="number"&&(p.r={a:0,k:p.r})}function P(m){var p,g=m.length;for(p=0;p<g;p+=1)m[p].ty===5&&N(m[p])}return function(m){if(a(T,m.v)&&(P(m.layers),m.assets)){var p,g=m.assets.length;for(p=0;p<g;p+=1)m.assets[p].layers&&P(m.assets[p].layers)}}}(),y=function(){var T=[4,1,9];function N(m){var p,g=m.length,S,R;for(p=0;p<g;p+=1)if(m[p].ty==="gr")N(m[p].it);else if(m[p].ty==="fl"||m[p].ty==="st")if(m[p].c.k&&m[p].c.k[0].i)for(R=m[p].c.k.length,S=0;S<R;S+=1)m[p].c.k[S].s&&(m[p].c.k[S].s[0]/=255,m[p].c.k[S].s[1]/=255,m[p].c.k[S].s[2]/=255,m[p].c.k[S].s[3]/=255),m[p].c.k[S].e&&(m[p].c.k[S].e[0]/=255,m[p].c.k[S].e[1]/=255,m[p].c.k[S].e[2]/=255,m[p].c.k[S].e[3]/=255);else m[p].c.k[0]/=255,m[p].c.k[1]/=255,m[p].c.k[2]/=255,m[p].c.k[3]/=255}function P(m){var p,g=m.length;for(p=0;p<g;p+=1)m[p].ty===4&&N(m[p].shapes)}return function(m){if(a(T,m.v)&&(P(m.layers),m.assets)){var p,g=m.assets.length;for(p=0;p<g;p+=1)m.assets[p].layers&&P(m.assets[p].layers)}}}(),F=function(){var T=[4,4,18];function N(m){var p,g=m.length,S,R;for(p=g-1;p>=0;p-=1)if(m[p].ty==="sh")if(m[p].ks.k.i)m[p].ks.k.c=m[p].closed;else for(R=m[p].ks.k.length,S=0;S<R;S+=1)m[p].ks.k[S].s&&(m[p].ks.k[S].s[0].c=m[p].closed),m[p].ks.k[S].e&&(m[p].ks.k[S].e[0].c=m[p].closed);else m[p].ty==="gr"&&N(m[p].it)}function P(m){var p,g,S=m.length,R,I,Y,se;for(g=0;g<S;g+=1){if(p=m[g],p.hasMask){var ie=p.masksProperties;for(I=ie.length,R=0;R<I;R+=1)if(ie[R].pt.k.i)ie[R].pt.k.c=ie[R].cl;else for(se=ie[R].pt.k.length,Y=0;Y<se;Y+=1)ie[R].pt.k[Y].s&&(ie[R].pt.k[Y].s[0].c=ie[R].cl),ie[R].pt.k[Y].e&&(ie[R].pt.k[Y].e[0].c=ie[R].cl)}p.ty===4&&N(p.shapes)}}return function(m){if(a(T,m.v)&&(P(m.layers),m.assets)){var p,g=m.assets.length;for(p=0;p<g;p+=1)m.assets[p].layers&&P(m.assets[p].layers)}}}();function B(T){T.__complete||(y(T),h(T),f(T),c(T),F(T),b(T.layers,T.assets),T.__complete=!0)}function W(T){T.t.a.length===0&&!("m"in T.t.p)&&(T.singleShape=!0)}var O={};return O.completeData=B,O.checkColors=y,O.checkChars=f,O.checkPathProperties=c,O.checkShapes=F,O.completeLayers=b,O}if(r.dataManager||(r.dataManager=E()),r.assetLoader||(r.assetLoader=function(){function b(l){var o=l.getResponseHeader("content-type");return o&&l.responseType==="json"&&o.indexOf("json")!==-1||l.response&&typeof l.response=="object"?l.response:l.response&&typeof l.response=="string"?JSON.parse(l.response):l.responseText?JSON.parse(l.responseText):null}function d(l,o,a,h){var f,c=new XMLHttpRequest;try{c.responseType="json"}catch{}c.onreadystatechange=function(){if(c.readyState===4)if(c.status===200)f=b(c),a(f);else try{f=b(c),a(f)}catch(y){h&&h(y)}};try{c.open("GET",l,!0)}catch{c.open("GET",o+"/"+l,!0)}c.send()}return{load:d}}()),C.data.type==="loadAnimation")r.assetLoader.load(C.data.path,C.data.fullPath,function(b){r.dataManager.completeData(b),r.postMessage({id:C.data.id,payload:b,status:"success"})},function(){r.postMessage({id:C.data.id,status:"error"})});else if(C.data.type==="complete"){var L=C.data.animation;r.dataManager.completeData(L),r.postMessage({id:C.data.id,payload:L,status:"success"})}else C.data.type==="loadData"&&r.assetLoader.load(C.data.path,C.data.fullPath,function(b){r.postMessage({id:C.data.id,payload:b,status:"success"})},function(){r.postMessage({id:C.data.id,status:"error"})})}),i.onmessage=function(w){var C=w.data,E=C.id,L=t[E];t[E]=null,C.status==="success"?L.onComplete(C.payload):L.onError&&L.onError()})}function v(w,C){e+=1;var E="processId_"+e;return t[E]={onComplete:w,onError:C},E}function A(w,C,E){x();var L=v(C,E);i.postMessage({type:"loadAnimation",path:w,fullPath:le.location.origin+le.location.pathname,id:L})}function k(w,C,E){x();var L=v(C,E);i.postMessage({type:"loadData",path:w,fullPath:le.location.origin+le.location.pathname,id:L})}function _(w,C,E){x();var L=v(C,E);i.postMessage({type:"complete",animation:w,id:L})}return{loadAnimation:A,loadData:k,completeAnimation:_}}();function ae(e){for(var t=e.fStyle?e.fStyle.split(" "):[],n="normal",i="normal",s=t.length,r,u=0;u<s;u+=1)switch(r=t[u].toLowerCase(),r){case"italic":i="italic";break;case"bold":n="700";break;case"black":n="900";break;case"medium":n="500";break;case"regular":case"normal":n="400";break;case"light":case"thin":n="200";break}return{style:i,weight:e.fWeight||n}}var me=function(){var e=5e3,t={w:0,size:0,shapes:[]},n=[];n=n.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var i=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],s=[65039,8205];function r(a){var h=a.split(","),f,c=h.length,y=[];for(f=0;f<c;f+=1)h[f]!=="sans-serif"&&h[f]!=="monospace"&&y.push(h[f]);return y.join(",")}function u(a,h){var f=Ve("span");f.setAttribute("aria-hidden",!0),f.style.fontFamily=h;var c=Ve("span");c.innerText="giItT1WQy@!-/#",f.style.position="absolute",f.style.left="-10000px",f.style.top="-10000px",f.style.fontSize="300px",f.style.fontVariant="normal",f.style.fontStyle="normal",f.style.fontWeight="normal",f.style.letterSpacing="0",f.appendChild(c),document.body.appendChild(f);var y=c.offsetWidth;return c.style.fontFamily=r(a)+", "+h,{node:c,w:y,parent:f}}function x(){var a,h=this.fonts.length,f,c,y=h;for(a=0;a<h;a+=1)this.fonts[a].loaded?y-=1:this.fonts[a].fOrigin==="n"||this.fonts[a].origin===0?this.fonts[a].loaded=!0:(f=this.fonts[a].monoCase.node,c=this.fonts[a].monoCase.w,f.offsetWidth!==c?(y-=1,this.fonts[a].loaded=!0):(f=this.fonts[a].sansCase.node,c=this.fonts[a].sansCase.w,f.offsetWidth!==c&&(y-=1,this.fonts[a].loaded=!0)),this.fonts[a].loaded&&(this.fonts[a].sansCase.parent.parentNode.removeChild(this.fonts[a].sansCase.parent),this.fonts[a].monoCase.parent.parentNode.removeChild(this.fonts[a].monoCase.parent)));y!==0&&Date.now()-this.initTime<e?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)}function v(a,h){var f=K("text");f.style.fontSize="100px";var c=ae(h);f.setAttribute("font-family",h.fFamily),f.setAttribute("font-style",c.style),f.setAttribute("font-weight",c.weight),f.textContent="1",h.fClass?(f.style.fontFamily="inherit",f.setAttribute("class",h.fClass)):f.style.fontFamily=h.fFamily,a.appendChild(f);var y=Ve("canvas").getContext("2d");return y.font=h.fWeight+" "+h.fStyle+" 100px "+h.fFamily,f}function A(a,h){if(!a){this.isLoaded=!0;return}if(this.chars){this.isLoaded=!0,this.fonts=a.list;return}var f=a.list,c,y=f.length,F=y;for(c=0;c<y;c+=1){var B=!0,W,O;if(f[c].loaded=!1,f[c].monoCase=u(f[c].fFamily,"monospace"),f[c].sansCase=u(f[c].fFamily,"sans-serif"),!f[c].fPath)f[c].loaded=!0,F-=1;else if(f[c].fOrigin==="p"||f[c].origin===3){if(W=document.querySelectorAll('style[f-forigin="p"][f-family="'+f[c].fFamily+'"], style[f-origin="3"][f-family="'+f[c].fFamily+'"]'),W.length>0&&(B=!1),B){var T=Ve("style");T.setAttribute("f-forigin",f[c].fOrigin),T.setAttribute("f-origin",f[c].origin),T.setAttribute("f-family",f[c].fFamily),T.type="text/css",T.innerText="@font-face {font-family: "+f[c].fFamily+"; font-style: normal; src: url('"+f[c].fPath+"');}",h.appendChild(T)}}else if(f[c].fOrigin==="g"||f[c].origin===1){for(W=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),O=0;O<W.length;O+=1)W[O].href.indexOf(f[c].fPath)!==-1&&(B=!1);if(B){var N=Ve("link");N.setAttribute("f-forigin",f[c].fOrigin),N.setAttribute("f-origin",f[c].origin),N.type="text/css",N.rel="stylesheet",N.href=f[c].fPath,document.body.appendChild(N)}}else if(f[c].fOrigin==="t"||f[c].origin===2){for(W=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),O=0;O<W.length;O+=1)f[c].fPath===W[O].src&&(B=!1);if(B){var P=Ve("link");P.setAttribute("f-forigin",f[c].fOrigin),P.setAttribute("f-origin",f[c].origin),P.setAttribute("rel","stylesheet"),P.setAttribute("href",f[c].fPath),h.appendChild(P)}}f[c].helper=v(h,f[c]),f[c].cache={},this.fonts.push(f[c])}F===0?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}function k(a){if(!!a){this.chars||(this.chars=[]);var h,f=a.length,c,y=this.chars.length,F;for(h=0;h<f;h+=1){for(c=0,F=!1;c<y;)this.chars[c].style===a[h].style&&this.chars[c].fFamily===a[h].fFamily&&this.chars[c].ch===a[h].ch&&(F=!0),c+=1;F||(this.chars.push(a[h]),y+=1)}}}function _(a,h,f){for(var c=0,y=this.chars.length;c<y;){if(this.chars[c].ch===a&&this.chars[c].style===h&&this.chars[c].fFamily===f)return this.chars[c];c+=1}return(typeof a=="string"&&a.charCodeAt(0)!==13||!a)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",a,h,f)),t}function w(a,h,f){var c=this.getFontByName(h),y=a.charCodeAt(0);if(!c.cache[y+1]){var F=c.helper;if(a===" "){F.textContent="|"+a+"|";var B=F.getComputedTextLength();F.textContent="||";var W=F.getComputedTextLength();c.cache[y+1]=(B-W)/100}else F.textContent=a,c.cache[y+1]=F.getComputedTextLength()/100}return c.cache[y+1]*f}function C(a){for(var h=0,f=this.fonts.length;h<f;){if(this.fonts[h].fName===a)return this.fonts[h];h+=1}return this.fonts[0]}function E(a,h){var f=a.toString(16)+h.toString(16);return i.indexOf(f)!==-1}function L(a,h){return h?a===s[0]&&h===s[1]:a===s[1]}function b(a){return n.indexOf(a)!==-1}function d(){this.isLoaded=!0}var l=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};l.isModifier=E,l.isZeroWidthJoiner=L,l.isCombinedCharacter=b;var o={addChars:k,addFonts:A,getCharData:_,getFontByName:C,measureText:w,checkLoadedFonts:x,setIsLoaded:d};return l.prototype=o,l}(),D=function(){var e=Fe,t=Math.abs;function n(b,d){var l=this.offsetTime,o;this.propType==="multidimensional"&&(o=ve("float32",this.pv.length));for(var a=d.lastIndex,h=a,f=this.keyframes.length-1,c=!0,y,F,B;c;){if(y=this.keyframes[h],F=this.keyframes[h+1],h===f-1&&b>=F.t-l){y.h&&(y=F),a=0;break}if(F.t-l>b){a=h;break}h<f-1?h+=1:(a=0,c=!1)}B=this.keyframesMetadata[h]||{};var W,O,T,N,P,m,p=F.t-l,g=y.t-l,S;if(y.to){B.bezierData||(B.bezierData=ee.buildBezierData(y.s,F.s||y.e,y.to,y.ti));var R=B.bezierData;if(b>=p||b<g){var I=b>=p?R.points.length-1:0;for(O=R.points[I].point.length,W=0;W<O;W+=1)o[W]=R.points[I].point[W]}else{B.__fnct?m=B.__fnct:(m=H.getBezierEasing(y.o.x,y.o.y,y.i.x,y.i.y,y.n).get,B.__fnct=m),T=m((b-g)/(p-g));var Y=R.segmentLength*T,se,ie=d.lastFrame<b&&d._lastKeyframeIndex===h?d._lastAddedLength:0;for(P=d.lastFrame<b&&d._lastKeyframeIndex===h?d._lastPoint:0,c=!0,N=R.points.length;c;){if(ie+=R.points[P].partialLength,Y===0||T===0||P===R.points.length-1){for(O=R.points[P].point.length,W=0;W<O;W+=1)o[W]=R.points[P].point[W];break}else if(Y>=ie&&Y<ie+R.points[P+1].partialLength){for(se=(Y-ie)/R.points[P+1].partialLength,O=R.points[P].point.length,W=0;W<O;W+=1)o[W]=R.points[P].point[W]+(R.points[P+1].point[W]-R.points[P].point[W])*se;break}P<N-1?P+=1:c=!1}d._lastPoint=P,d._lastAddedLength=ie-R.points[P].partialLength,d._lastKeyframeIndex=h}}else{var Ce,Ee,Ne,De,He;if(f=y.s.length,S=F.s||y.e,this.sh&&y.h!==1)if(b>=p)o[0]=S[0],o[1]=S[1],o[2]=S[2];else if(b<=g)o[0]=y.s[0],o[1]=y.s[1],o[2]=y.s[2];else{var Pe=r(y.s),ke=r(S),ze=(b-g)/(p-g);s(o,i(Pe,ke,ze))}else for(h=0;h<f;h+=1)y.h!==1&&(b>=p?T=1:b<g?T=0:(y.o.x.constructor===Array?(B.__fnct||(B.__fnct=[]),B.__fnct[h]?m=B.__fnct[h]:(Ce=y.o.x[h]===void 0?y.o.x[0]:y.o.x[h],Ee=y.o.y[h]===void 0?y.o.y[0]:y.o.y[h],Ne=y.i.x[h]===void 0?y.i.x[0]:y.i.x[h],De=y.i.y[h]===void 0?y.i.y[0]:y.i.y[h],m=H.getBezierEasing(Ce,Ee,Ne,De).get,B.__fnct[h]=m)):B.__fnct?m=B.__fnct:(Ce=y.o.x,Ee=y.o.y,Ne=y.i.x,De=y.i.y,m=H.getBezierEasing(Ce,Ee,Ne,De).get,y.keyframeMetadata=m),T=m((b-g)/(p-g)))),S=F.s||y.e,He=y.h===1?y.s[h]:y.s[h]+(S[h]-y.s[h])*T,this.propType==="multidimensional"?o[h]=He:o=He}return d.lastIndex=a,o}function i(b,d,l){var o=[],a=b[0],h=b[1],f=b[2],c=b[3],y=d[0],F=d[1],B=d[2],W=d[3],O,T,N,P,m;return T=a*y+h*F+f*B+c*W,T<0&&(T=-T,y=-y,F=-F,B=-B,W=-W),1-T>1e-6?(O=Math.acos(T),N=Math.sin(O),P=Math.sin((1-l)*O)/N,m=Math.sin(l*O)/N):(P=1-l,m=l),o[0]=P*a+m*y,o[1]=P*h+m*F,o[2]=P*f+m*B,o[3]=P*c+m*W,o}function s(b,d){var l=d[0],o=d[1],a=d[2],h=d[3],f=Math.atan2(2*o*h-2*l*a,1-2*o*o-2*a*a),c=Math.asin(2*l*o+2*a*h),y=Math.atan2(2*l*h-2*o*a,1-2*l*l-2*a*a);b[0]=f/ce,b[1]=c/ce,b[2]=y/ce}function r(b){var d=b[0]*ce,l=b[1]*ce,o=b[2]*ce,a=Math.cos(d/2),h=Math.cos(l/2),f=Math.cos(o/2),c=Math.sin(d/2),y=Math.sin(l/2),F=Math.sin(o/2),B=a*h*f-c*y*F,W=c*y*f+a*h*F,O=c*h*f+a*y*F,T=a*y*f-c*h*F;return[W,O,T,B]}function u(){var b=this.comp.renderedFrame-this.offsetTime,d=this.keyframes[0].t-this.offsetTime,l=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(b===this._caching.lastFrame||this._caching.lastFrame!==e&&(this._caching.lastFrame>=l&&b>=l||this._caching.lastFrame<d&&b<d))){this._caching.lastFrame>=b&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var o=this.interpolateValue(b,this._caching);this.pv=o}return this._caching.lastFrame=b,this.pv}function x(b){var d;if(this.propType==="unidimensional")d=b*this.mult,t(this.v-d)>1e-5&&(this.v=d,this._mdf=!0);else for(var l=0,o=this.v.length;l<o;)d=b[l]*this.mult,t(this.v[l]-d)>1e-5&&(this.v[l]=d,this._mdf=!0),l+=1}function v(){if(!(this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)){if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=this._isFirstFrame;var b,d=this.effectsSequence.length,l=this.kf?this.pv:this.data.k;for(b=0;b<d;b+=1)l=this.effectsSequence[b](l);this.setVValue(l),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function A(b){this.effectsSequence.push(b),this.container.addDynamicProperty(this)}function k(b,d,l,o){this.propType="unidimensional",this.mult=l||1,this.data=d,this.v=l?d.k*l:d.k,this.pv=d.k,this._mdf=!1,this.elem=b,this.container=o,this.comp=b.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=v,this.setVValue=x,this.addEffect=A}function _(b,d,l,o){this.propType="multidimensional",this.mult=l||1,this.data=d,this._mdf=!1,this.elem=b,this.container=o,this.comp=b.comp,this.k=!1,this.kf=!1,this.frameId=-1;var a,h=d.k.length;for(this.v=ve("float32",h),this.pv=ve("float32",h),this.vel=ve("float32",h),a=0;a<h;a+=1)this.v[a]=d.k[a]*this.mult,this.pv[a]=d.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=v,this.setVValue=x,this.addEffect=A}function w(b,d,l,o){this.propType="unidimensional",this.keyframes=d.k,this.keyframesMetadata=[],this.offsetTime=b.data.st,this.frameId=-1,this._caching={lastFrame:e,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=d,this.mult=l||1,this.elem=b,this.container=o,this.comp=b.comp,this.v=e,this.pv=e,this._isFirstFrame=!0,this.getValue=v,this.setVValue=x,this.interpolateValue=n,this.effectsSequence=[u.bind(this)],this.addEffect=A}function C(b,d,l,o){this.propType="multidimensional";var a,h=d.k.length,f,c,y,F;for(a=0;a<h-1;a+=1)d.k[a].to&&d.k[a].s&&d.k[a+1]&&d.k[a+1].s&&(f=d.k[a].s,c=d.k[a+1].s,y=d.k[a].to,F=d.k[a].ti,(f.length===2&&!(f[0]===c[0]&&f[1]===c[1])&&ee.pointOnLine2D(f[0],f[1],c[0],c[1],f[0]+y[0],f[1]+y[1])&&ee.pointOnLine2D(f[0],f[1],c[0],c[1],c[0]+F[0],c[1]+F[1])||f.length===3&&!(f[0]===c[0]&&f[1]===c[1]&&f[2]===c[2])&&ee.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],f[0]+y[0],f[1]+y[1],f[2]+y[2])&&ee.pointOnLine3D(f[0],f[1],f[2],c[0],c[1],c[2],c[0]+F[0],c[1]+F[1],c[2]+F[2]))&&(d.k[a].to=null,d.k[a].ti=null),f[0]===c[0]&&f[1]===c[1]&&y[0]===0&&y[1]===0&&F[0]===0&&F[1]===0&&(f.length===2||f[2]===c[2]&&y[2]===0&&F[2]===0)&&(d.k[a].to=null,d.k[a].ti=null));this.effectsSequence=[u.bind(this)],this.data=d,this.keyframes=d.k,this.keyframesMetadata=[],this.offsetTime=b.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=l||1,this.elem=b,this.container=o,this.comp=b.comp,this.getValue=v,this.setVValue=x,this.interpolateValue=n,this.frameId=-1;var B=d.k[0].s.length;for(this.v=ve("float32",B),this.pv=ve("float32",B),a=0;a<B;a+=1)this.v[a]=e,this.pv[a]=e;this._caching={lastFrame:e,lastIndex:0,value:ve("float32",B)},this.addEffect=A}function E(b,d,l,o,a){var h;if(!d.k.length)h=new k(b,d,o,a);else if(typeof d.k[0]=="number")h=new _(b,d,o,a);else switch(l){case 0:h=new w(b,d,o,a);break;case 1:h=new C(b,d,o,a);break}return h.effectsSequence.length&&a.addDynamicProperty(h),h}var L={getProp:E};return L}(),V=function(){var e=[0,0];function t(v){var A=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||A,this.a&&v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&v.skewFromAxis(-this.sk.v,this.sa.v),this.r?v.rotate(-this.r.v):v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?v.translate(this.px.v,this.py.v,-this.pz.v):v.translate(this.px.v,this.py.v,0):v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function n(v){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||v){var A;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var k,_;if(A=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(k=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/A,0),_=this.p.getValueAtTime(this.p.keyframes[0].t/A,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(k=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/A,0),_=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/A,0)):(k=this.p.pv,_=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/A,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){k=[],_=[];var w=this.px,C=this.py;w._caching.lastFrame+w.offsetTime<=w.keyframes[0].t?(k[0]=w.getValueAtTime((w.keyframes[0].t+.01)/A,0),k[1]=C.getValueAtTime((C.keyframes[0].t+.01)/A,0),_[0]=w.getValueAtTime(w.keyframes[0].t/A,0),_[1]=C.getValueAtTime(C.keyframes[0].t/A,0)):w._caching.lastFrame+w.offsetTime>=w.keyframes[w.keyframes.length-1].t?(k[0]=w.getValueAtTime(w.keyframes[w.keyframes.length-1].t/A,0),k[1]=C.getValueAtTime(C.keyframes[C.keyframes.length-1].t/A,0),_[0]=w.getValueAtTime((w.keyframes[w.keyframes.length-1].t-.01)/A,0),_[1]=C.getValueAtTime((C.keyframes[C.keyframes.length-1].t-.01)/A,0)):(k=[w.pv,C.pv],_[0]=w.getValueAtTime((w._caching.lastFrame+w.offsetTime-.01)/A,w.offsetTime),_[1]=C.getValueAtTime((C._caching.lastFrame+C.offsetTime-.01)/A,C.offsetTime))}else _=e,k=_;this.v.rotate(-Math.atan2(k[1]-_[1],k[0]-_[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function i(){if(!this.a.k)this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1;else return;if(!this.s.effectsSequence.length)this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2;else return;if(this.sk)if(!this.sk.effectsSequence.length&&!this.sa.effectsSequence.length)this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3;else return;this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):!this.rz.effectsSequence.length&&!this.ry.effectsSequence.length&&!this.rx.effectsSequence.length&&!this.or.effectsSequence.length&&(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}function s(){}function r(v){this._addDynamicProperty(v),this.elem.addDynamicProperty(v),this._isDirty=!0}function u(v,A,k){if(this.elem=v,this.frameId=-1,this.propType="transform",this.data=A,this.v=new X,this.pre=new X,this.appliedTransformations=0,this.initDynamicPropertyContainer(k||v),A.p&&A.p.s?(this.px=D.getProp(v,A.p.x,0,0,this),this.py=D.getProp(v,A.p.y,0,0,this),A.p.z&&(this.pz=D.getProp(v,A.p.z,0,0,this))):this.p=D.getProp(v,A.p||{k:[0,0,0]},1,0,this),A.rx){if(this.rx=D.getProp(v,A.rx,0,ce,this),this.ry=D.getProp(v,A.ry,0,ce,this),this.rz=D.getProp(v,A.rz,0,ce,this),A.or.k[0].ti){var _,w=A.or.k.length;for(_=0;_<w;_+=1)A.or.k[_].to=null,A.or.k[_].ti=null}this.or=D.getProp(v,A.or,1,ce,this),this.or.sh=!0}else this.r=D.getProp(v,A.r||{k:0},0,ce,this);A.sk&&(this.sk=D.getProp(v,A.sk,0,ce,this),this.sa=D.getProp(v,A.sa,0,ce,this)),this.a=D.getProp(v,A.a||{k:[0,0,0]},1,0,this),this.s=D.getProp(v,A.s||{k:[100,100,100]},1,.01,this),A.o?this.o=D.getProp(v,A.o,0,.01,v):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}u.prototype={applyToMatrix:t,getValue:n,precalculateMatrix:i,autoOrient:s},q([M],u),u.prototype.addDynamicProperty=r,u.prototype._addDynamicProperty=M.prototype.addDynamicProperty;function x(v,A,k){return new u(v,A,k)}return{getTransformProperty:x}}();function G(){this.c=!1,this._length=0,this._maxLength=8,this.v=ge(this._maxLength),this.o=ge(this._maxLength),this.i=ge(this._maxLength)}G.prototype.setPathData=function(e,t){this.c=e,this.setLength(t);for(var n=0;n<t;)this.v[n]=At.newElement(),this.o[n]=At.newElement(),this.i[n]=At.newElement(),n+=1},G.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},G.prototype.doubleArrayLength=function(){this.v=this.v.concat(ge(this._maxLength)),this.i=this.i.concat(ge(this._maxLength)),this.o=this.o.concat(ge(this._maxLength)),this._maxLength*=2},G.prototype.setXYAt=function(e,t,n,i,s){var r;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),n){case"v":r=this.v;break;case"i":r=this.i;break;case"o":r=this.o;break;default:r=[];break}(!r[i]||r[i]&&!s)&&(r[i]=At.newElement()),r[i][0]=e,r[i][1]=t},G.prototype.setTripleAt=function(e,t,n,i,s,r,u,x){this.setXYAt(e,t,"v",u,x),this.setXYAt(n,i,"o",u,x),this.setXYAt(s,r,"i",u,x)},G.prototype.reverse=function(){var e=new G;e.setPathData(this.c,this._length);var t=this.v,n=this.o,i=this.i,s=0;this.c&&(e.setTripleAt(t[0][0],t[0][1],i[0][0],i[0][1],n[0][0],n[0][1],0,!1),s=1);var r=this._length-1,u=this._length,x;for(x=s;x<u;x+=1)e.setTripleAt(t[r][0],t[r][1],i[r][0],i[r][1],n[r][0],n[r][1],x,!1),r-=1;return e};var $=function(){var e=-999999;function t(d,l,o){var a=o.lastIndex,h,f,c,y,F,B,W,O,T,N=this.keyframes;if(d<N[0].t-this.offsetTime)h=N[0].s[0],c=!0,a=0;else if(d>=N[N.length-1].t-this.offsetTime)h=N[N.length-1].s?N[N.length-1].s[0]:N[N.length-2].e[0],c=!0;else{for(var P=a,m=N.length-1,p=!0,g,S,R;p&&(g=N[P],S=N[P+1],!(S.t-this.offsetTime>d));)P<m-1?P+=1:p=!1;if(R=this.keyframesMetadata[P]||{},c=g.h===1,a=P,!c){if(d>=S.t-this.offsetTime)O=1;else if(d<g.t-this.offsetTime)O=0;else{var I;R.__fnct?I=R.__fnct:(I=H.getBezierEasing(g.o.x,g.o.y,g.i.x,g.i.y).get,R.__fnct=I),O=I((d-(g.t-this.offsetTime))/(S.t-this.offsetTime-(g.t-this.offsetTime)))}f=S.s?S.s[0]:g.e[0]}h=g.s[0]}for(B=l._length,W=h.i[0].length,o.lastIndex=a,y=0;y<B;y+=1)for(F=0;F<W;F+=1)T=c?h.i[y][F]:h.i[y][F]+(f.i[y][F]-h.i[y][F])*O,l.i[y][F]=T,T=c?h.o[y][F]:h.o[y][F]+(f.o[y][F]-h.o[y][F])*O,l.o[y][F]=T,T=c?h.v[y][F]:h.v[y][F]+(f.v[y][F]-h.v[y][F])*O,l.v[y][F]=T}function n(){var d=this.comp.renderedFrame-this.offsetTime,l=this.keyframes[0].t-this.offsetTime,o=this.keyframes[this.keyframes.length-1].t-this.offsetTime,a=this._caching.lastFrame;return a!==e&&(a<l&&d<l||a>o&&d>o)||(this._caching.lastIndex=a<d?this._caching.lastIndex:0,this.interpolateShape(d,this.pv,this._caching)),this._caching.lastFrame=d,this.pv}function i(){this.paths=this.localShapeCollection}function s(d,l){if(d._length!==l._length||d.c!==l.c)return!1;var o,a=d._length;for(o=0;o<a;o+=1)if(d.v[o][0]!==l.v[o][0]||d.v[o][1]!==l.v[o][1]||d.o[o][0]!==l.o[o][0]||d.o[o][1]!==l.o[o][1]||d.i[o][0]!==l.i[o][0]||d.i[o][1]!==l.i[o][1])return!1;return!0}function r(d){s(this.v,d)||(this.v=Oe.clone(d),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function u(){if(this.elem.globalData.frameId!==this.frameId){if(!this.effectsSequence.length){this._mdf=!1;return}if(this.lock){this.setVValue(this.pv);return}this.lock=!0,this._mdf=!1;var d;this.kf?d=this.pv:this.data.ks?d=this.data.ks.k:d=this.data.pt.k;var l,o=this.effectsSequence.length;for(l=0;l<o;l+=1)d=this.effectsSequence[l](d);this.setVValue(d),this.lock=!1,this.frameId=this.elem.globalData.frameId}}function x(d,l,o){this.propType="shape",this.comp=d.comp,this.container=d,this.elem=d,this.data=l,this.k=!1,this.kf=!1,this._mdf=!1;var a=o===3?l.pt.k:l.ks.k;this.v=Oe.clone(a),this.pv=Oe.clone(this.v),this.localShapeCollection=Rt.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function v(d){this.effectsSequence.push(d),this.container.addDynamicProperty(this)}x.prototype.interpolateShape=t,x.prototype.getValue=u,x.prototype.setVValue=r,x.prototype.addEffect=v;function A(d,l,o){this.propType="shape",this.comp=d.comp,this.elem=d,this.container=d,this.offsetTime=d.data.st,this.keyframes=o===3?l.pt.k:l.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var a=this.keyframes[0].s[0].i.length;this.v=Oe.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,a),this.pv=Oe.clone(this.v),this.localShapeCollection=Rt.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=i,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[n.bind(this)]}A.prototype.getValue=u,A.prototype.interpolateShape=t,A.prototype.setVValue=r,A.prototype.addEffect=v;var k=function(){var d=Ue;function l(o,a){this.v=Oe.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=Rt.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=a.d,this.elem=o,this.comp=o.comp,this.frameId=-1,this.initDynamicPropertyContainer(o),this.p=D.getProp(o,a.p,1,0,this),this.s=D.getProp(o,a.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return l.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var o=this.p.v[0],a=this.p.v[1],h=this.s.v[0]/2,f=this.s.v[1]/2,c=this.d!==3,y=this.v;y.v[0][0]=o,y.v[0][1]=a-f,y.v[1][0]=c?o+h:o-h,y.v[1][1]=a,y.v[2][0]=o,y.v[2][1]=a+f,y.v[3][0]=c?o-h:o+h,y.v[3][1]=a,y.i[0][0]=c?o-h*d:o+h*d,y.i[0][1]=a-f,y.i[1][0]=c?o+h:o-h,y.i[1][1]=a-f*d,y.i[2][0]=c?o+h*d:o-h*d,y.i[2][1]=a+f,y.i[3][0]=c?o-h:o+h,y.i[3][1]=a+f*d,y.o[0][0]=c?o+h*d:o-h*d,y.o[0][1]=a-f,y.o[1][0]=c?o+h:o-h,y.o[1][1]=a+f*d,y.o[2][0]=c?o-h*d:o+h*d,y.o[2][1]=a+f,y.o[3][0]=c?o-h:o+h,y.o[3][1]=a-f*d}},q([M],l),l}(),_=function(){function d(l,o){this.v=Oe.newElement(),this.v.setPathData(!0,0),this.elem=l,this.comp=l.comp,this.data=o,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),o.sy===1?(this.ir=D.getProp(l,o.ir,0,0,this),this.is=D.getProp(l,o.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=D.getProp(l,o.pt,0,0,this),this.p=D.getProp(l,o.p,1,0,this),this.r=D.getProp(l,o.r,0,ce,this),this.or=D.getProp(l,o.or,0,0,this),this.os=D.getProp(l,o.os,0,.01,this),this.localShapeCollection=Rt.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return d.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var l=Math.floor(this.pt.v)*2,o=Math.PI*2/l,a=!0,h=this.or.v,f=this.ir.v,c=this.os.v,y=this.is.v,F=2*Math.PI*h/(l*2),B=2*Math.PI*f/(l*2),W,O,T,N,P=-Math.PI/2;P+=this.r.v;var m=this.data.d===3?-1:1;for(this.v._length=0,W=0;W<l;W+=1){O=a?h:f,T=a?c:y,N=a?F:B;var p=O*Math.cos(P),g=O*Math.sin(P),S=p===0&&g===0?0:g/Math.sqrt(p*p+g*g),R=p===0&&g===0?0:-p/Math.sqrt(p*p+g*g);p+=+this.p.v[0],g+=+this.p.v[1],this.v.setTripleAt(p,g,p-S*N*T*m,g-R*N*T*m,p+S*N*T*m,g+R*N*T*m,W,!0),a=!a,P+=o*m}},convertPolygonToPath:function(){var l=Math.floor(this.pt.v),o=Math.PI*2/l,a=this.or.v,h=this.os.v,f=2*Math.PI*a/(l*4),c,y=-Math.PI*.5,F=this.data.d===3?-1:1;for(y+=this.r.v,this.v._length=0,c=0;c<l;c+=1){var B=a*Math.cos(y),W=a*Math.sin(y),O=B===0&&W===0?0:W/Math.sqrt(B*B+W*W),T=B===0&&W===0?0:-B/Math.sqrt(B*B+W*W);B+=+this.p.v[0],W+=+this.p.v[1],this.v.setTripleAt(B,W,B-O*f*h*F,W-T*f*h*F,B+O*f*h*F,W+T*f*h*F,c,!0),y+=o*F}this.paths.length=0,this.paths[0]=this.v}},q([M],d),d}(),w=function(){function d(l,o){this.v=Oe.newElement(),this.v.c=!0,this.localShapeCollection=Rt.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=l,this.comp=l.comp,this.frameId=-1,this.d=o.d,this.initDynamicPropertyContainer(l),this.p=D.getProp(l,o.p,1,0,this),this.s=D.getProp(l,o.s,1,0,this),this.r=D.getProp(l,o.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return d.prototype={convertRectToPath:function(){var l=this.p.v[0],o=this.p.v[1],a=this.s.v[0]/2,h=this.s.v[1]/2,f=ot(a,h,this.r.v),c=f*(1-Ue);this.v._length=0,this.d===2||this.d===1?(this.v.setTripleAt(l+a,o-h+f,l+a,o-h+f,l+a,o-h+c,0,!0),this.v.setTripleAt(l+a,o+h-f,l+a,o+h-c,l+a,o+h-f,1,!0),f!==0?(this.v.setTripleAt(l+a-f,o+h,l+a-f,o+h,l+a-c,o+h,2,!0),this.v.setTripleAt(l-a+f,o+h,l-a+c,o+h,l-a+f,o+h,3,!0),this.v.setTripleAt(l-a,o+h-f,l-a,o+h-f,l-a,o+h-c,4,!0),this.v.setTripleAt(l-a,o-h+f,l-a,o-h+c,l-a,o-h+f,5,!0),this.v.setTripleAt(l-a+f,o-h,l-a+f,o-h,l-a+c,o-h,6,!0),this.v.setTripleAt(l+a-f,o-h,l+a-c,o-h,l+a-f,o-h,7,!0)):(this.v.setTripleAt(l-a,o+h,l-a+c,o+h,l-a,o+h,2),this.v.setTripleAt(l-a,o-h,l-a,o-h+c,l-a,o-h,3))):(this.v.setTripleAt(l+a,o-h+f,l+a,o-h+c,l+a,o-h+f,0,!0),f!==0?(this.v.setTripleAt(l+a-f,o-h,l+a-f,o-h,l+a-c,o-h,1,!0),this.v.setTripleAt(l-a+f,o-h,l-a+c,o-h,l-a+f,o-h,2,!0),this.v.setTripleAt(l-a,o-h+f,l-a,o-h+f,l-a,o-h+c,3,!0),this.v.setTripleAt(l-a,o+h-f,l-a,o+h-c,l-a,o+h-f,4,!0),this.v.setTripleAt(l-a+f,o+h,l-a+f,o+h,l-a+c,o+h,5,!0),this.v.setTripleAt(l+a-f,o+h,l+a-c,o+h,l+a-f,o+h,6,!0),this.v.setTripleAt(l+a,o+h-f,l+a,o+h-f,l+a,o+h-c,7,!0)):(this.v.setTripleAt(l-a,o-h,l-a+c,o-h,l-a,o-h,1,!0),this.v.setTripleAt(l-a,o+h,l-a,o+h-c,l-a,o+h,2,!0),this.v.setTripleAt(l+a,o+h,l+a-c,o+h,l+a,o+h,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},q([M],d),d}();function C(d,l,o){var a;if(o===3||o===4){var h=o===3?l.pt:l.ks,f=h.k;f.length?a=new A(d,l,o):a=new x(d,l,o)}else o===5?a=new w(d,l):o===6?a=new k(d,l):o===7&&(a=new _(d,l));return a.k&&d.addDynamicProperty(a),a}function E(){return x}function L(){return A}var b={};return b.getShapeProp=C,b.getConstructorFunction=E,b.getKeyframedConstructorFunction=L,b}(),ne=function(){var e={},t={};e.registerModifier=n,e.getModifier=i;function n(s,r){t[s]||(t[s]=r)}function i(s,r,u){return new t[s](r,u)}return e}();function Q(){}Q.prototype.initModifierProperties=function(){},Q.prototype.addShapeToModifier=function(){},Q.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var t={shape:e.sh,data:e,localShapeCollection:Rt.newShapeCollection()};this.shapes.push(t),this.addShapeToModifier(t),this._isAnimated&&e.setAsAnimated()}},Q.prototype.init=function(e,t){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t),this.frameId=Fe,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},Q.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},q([M],Q);function pe(){}q([Q],pe),pe.prototype.initModifierProperties=function(e,t){this.s=D.getProp(e,t.s,0,.01,this),this.e=D.getProp(e,t.e,0,.01,this),this.o=D.getProp(e,t.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=t.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},pe.prototype.addShapeToModifier=function(e){e.pathsData=[]},pe.prototype.calculateShapeEdges=function(e,t,n,i,s){var r=[];t<=1?r.push({s:e,e:t}):e>=1?r.push({s:e-1,e:t-1}):(r.push({s:e,e:1}),r.push({s:0,e:t-1}));var u=[],x,v=r.length,A;for(x=0;x<v;x+=1)if(A=r[x],!(A.e*s<i||A.s*s>i+n)){var k,_;A.s*s<=i?k=0:k=(A.s*s-i)/n,A.e*s>=i+n?_=1:_=(A.e*s-i)/n,u.push([k,_])}return u.length||u.push([0,0]),u},pe.prototype.releasePathsData=function(e){var t,n=e.length;for(t=0;t<n;t+=1)rn.release(e[t]);return e.length=0,e},pe.prototype.processShapes=function(e){var t,n;if(this._mdf||e){var i=this.o.v%360/360;if(i<0&&(i+=1),this.s.v>1?t=1+i:this.s.v<0?t=0+i:t=this.s.v+i,this.e.v>1?n=1+i:this.e.v<0?n=0+i:n=this.e.v+i,t>n){var s=t;t=n,n=s}t=Math.round(t*1e4)*1e-4,n=Math.round(n*1e4)*1e-4,this.sValue=t,this.eValue=n}else t=this.sValue,n=this.eValue;var r,u,x=this.shapes.length,v,A,k,_,w,C=0;if(n===t)for(u=0;u<x;u+=1)this.shapes[u].localShapeCollection.releaseShapes(),this.shapes[u].shape._mdf=!0,this.shapes[u].shape.paths=this.shapes[u].localShapeCollection,this._mdf&&(this.shapes[u].pathsData.length=0);else if(n===1&&t===0||n===0&&t===1){if(this._mdf)for(u=0;u<x;u+=1)this.shapes[u].pathsData.length=0,this.shapes[u].shape._mdf=!0}else{var E=[],L,b;for(u=0;u<x;u+=1)if(L=this.shapes[u],!L.shape._mdf&&!this._mdf&&!e&&this.m!==2)L.shape.paths=L.localShapeCollection;else{if(r=L.shape.paths,A=r._length,w=0,!L.shape._mdf&&L.pathsData.length)w=L.totalShapeLength;else{for(k=this.releasePathsData(L.pathsData),v=0;v<A;v+=1)_=ee.getSegmentsLength(r.shapes[v]),k.push(_),w+=_.totalLength;L.totalShapeLength=w,L.pathsData=k}C+=w,L.shape._mdf=!0}var d=t,l=n,o=0,a;for(u=x-1;u>=0;u-=1)if(L=this.shapes[u],L.shape._mdf){for(b=L.localShapeCollection,b.releaseShapes(),this.m===2&&x>1?(a=this.calculateShapeEdges(t,n,L.totalShapeLength,o,C),o+=L.totalShapeLength):a=[[d,l]],A=a.length,v=0;v<A;v+=1){d=a[v][0],l=a[v][1],E.length=0,l<=1?E.push({s:L.totalShapeLength*d,e:L.totalShapeLength*l}):d>=1?E.push({s:L.totalShapeLength*(d-1),e:L.totalShapeLength*(l-1)}):(E.push({s:L.totalShapeLength*d,e:L.totalShapeLength}),E.push({s:0,e:L.totalShapeLength*(l-1)}));var h=this.addShapes(L,E[0]);if(E[0].s!==E[0].e){if(E.length>1){var f=L.shape.paths.shapes[L.shape.paths._length-1];if(f.c){var c=h.pop();this.addPaths(h,b),h=this.addShapes(L,E[1],c)}else this.addPaths(h,b),h=this.addShapes(L,E[1])}this.addPaths(h,b)}}L.shape.paths=b}}},pe.prototype.addPaths=function(e,t){var n,i=e.length;for(n=0;n<i;n+=1)t.addShape(e[n])},pe.prototype.addSegment=function(e,t,n,i,s,r,u){s.setXYAt(t[0],t[1],"o",r),s.setXYAt(n[0],n[1],"i",r+1),u&&s.setXYAt(e[0],e[1],"v",r),s.setXYAt(i[0],i[1],"v",r+1)},pe.prototype.addSegmentFromArray=function(e,t,n,i){t.setXYAt(e[1],e[5],"o",n),t.setXYAt(e[2],e[6],"i",n+1),i&&t.setXYAt(e[0],e[4],"v",n),t.setXYAt(e[3],e[7],"v",n+1)},pe.prototype.addShapes=function(e,t,n){var i=e.pathsData,s=e.shape.paths.shapes,r,u=e.shape.paths._length,x,v,A=0,k,_,w,C,E=[],L,b=!0;for(n?(_=n._length,L=n._length):(n=Oe.newElement(),_=0,L=0),E.push(n),r=0;r<u;r+=1){for(w=i[r].lengths,n.c=s[r].c,v=s[r].c?w.length:w.length+1,x=1;x<v;x+=1)if(k=w[x-1],A+k.addedLength<t.s)A+=k.addedLength,n.c=!1;else if(A>t.e){n.c=!1;break}else t.s<=A&&t.e>=A+k.addedLength?(this.addSegment(s[r].v[x-1],s[r].o[x-1],s[r].i[x],s[r].v[x],n,_,b),b=!1):(C=ee.getNewSegment(s[r].v[x-1],s[r].v[x],s[r].o[x-1],s[r].i[x],(t.s-A)/k.addedLength,(t.e-A)/k.addedLength,w[x-1]),this.addSegmentFromArray(C,n,_,b),b=!1,n.c=!1),A+=k.addedLength,_+=1;if(s[r].c&&w.length){if(k=w[x-1],A<=t.e){var d=w[x-1].addedLength;t.s<=A&&t.e>=A+d?(this.addSegment(s[r].v[x-1],s[r].o[x-1],s[r].i[0],s[r].v[0],n,_,b),b=!1):(C=ee.getNewSegment(s[r].v[x-1],s[r].v[0],s[r].o[x-1],s[r].i[0],(t.s-A)/d,(t.e-A)/d,w[x-1]),this.addSegmentFromArray(C,n,_,b),b=!1,n.c=!1)}else n.c=!1;A+=k.addedLength,_+=1}if(n._length&&(n.setXYAt(n.v[L][0],n.v[L][1],"i",L),n.setXYAt(n.v[n._length-1][0],n.v[n._length-1][1],"o",n._length-1)),A>t.e)break;r<u-1&&(n=Oe.newElement(),b=!0,E.push(n),_=0)}return E},ne.registerModifier("tm",pe);function Te(){}q([Q],Te),Te.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.rd=D.getProp(e,t.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},Te.prototype.processPath=function(e,t){var n=Oe.newElement();n.c=e.c;var i,s=e._length,r,u,x,v,A,k,_=0,w,C,E,L,b,d;for(i=0;i<s;i+=1)r=e.v[i],x=e.o[i],u=e.i[i],r[0]===x[0]&&r[1]===x[1]&&r[0]===u[0]&&r[1]===u[1]?(i===0||i===s-1)&&!e.c?(n.setTripleAt(r[0],r[1],x[0],x[1],u[0],u[1],_),_+=1):(i===0?v=e.v[s-1]:v=e.v[i-1],A=Math.sqrt(Math.pow(r[0]-v[0],2)+Math.pow(r[1]-v[1],2)),k=A?Math.min(A/2,t)/A:0,b=r[0]+(v[0]-r[0])*k,w=b,d=r[1]-(r[1]-v[1])*k,C=d,E=w-(w-r[0])*Ue,L=C-(C-r[1])*Ue,n.setTripleAt(w,C,E,L,b,d,_),_+=1,i===s-1?v=e.v[0]:v=e.v[i+1],A=Math.sqrt(Math.pow(r[0]-v[0],2)+Math.pow(r[1]-v[1],2)),k=A?Math.min(A/2,t)/A:0,E=r[0]+(v[0]-r[0])*k,w=E,L=r[1]+(v[1]-r[1])*k,C=L,b=w-(w-r[0])*Ue,d=C-(C-r[1])*Ue,n.setTripleAt(w,C,E,L,b,d,_),_+=1):(n.setTripleAt(e.v[i][0],e.v[i][1],e.o[i][0],e.o[i][1],e.i[i][0],e.i[i][1],_),_+=1);return n},Te.prototype.processShapes=function(e){var t,n,i=this.shapes.length,s,r,u=this.rd.v;if(u!==0){var x,v;for(n=0;n<i;n+=1){if(x=this.shapes[n],v=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!e))for(v.releaseShapes(),x.shape._mdf=!0,t=x.shape.paths.shapes,r=x.shape.paths._length,s=0;s<r;s+=1)v.addShape(this.processPath(t[s],u));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},ne.registerModifier("rd",Te);function Xe(){}q([Q],Xe),Xe.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amount=D.getProp(e,t.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},Xe.prototype.processPath=function(e,t){var n=t/100,i=[0,0],s=e._length,r=0;for(r=0;r<s;r+=1)i[0]+=e.v[r][0],i[1]+=e.v[r][1];i[0]/=s,i[1]/=s;var u=Oe.newElement();u.c=e.c;var x,v,A,k,_,w;for(r=0;r<s;r+=1)x=e.v[r][0]+(i[0]-e.v[r][0])*n,v=e.v[r][1]+(i[1]-e.v[r][1])*n,A=e.o[r][0]+(i[0]-e.o[r][0])*-n,k=e.o[r][1]+(i[1]-e.o[r][1])*-n,_=e.i[r][0]+(i[0]-e.i[r][0])*-n,w=e.i[r][1]+(i[1]-e.i[r][1])*-n,u.setTripleAt(x,v,A,k,_,w,r);return u},Xe.prototype.processShapes=function(e){var t,n,i=this.shapes.length,s,r,u=this.amount.v;if(u!==0){var x,v;for(n=0;n<i;n+=1){if(x=this.shapes[n],v=x.localShapeCollection,!(!x.shape._mdf&&!this._mdf&&!e))for(v.releaseShapes(),x.shape._mdf=!0,t=x.shape.paths.shapes,r=x.shape.paths._length,s=0;s<r;s+=1)v.addShape(this.processPath(t[s],u));x.shape.paths=x.localShapeCollection}}this.dynamicProperties.length||(this._mdf=!1)},ne.registerModifier("pb",Xe);function $e(){}q([Q],$e),$e.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.c=D.getProp(e,t.c,0,null,this),this.o=D.getProp(e,t.o,0,null,this),this.tr=V.getTransformProperty(e,t.tr,this),this.so=D.getProp(e,t.tr.so,0,.01,this),this.eo=D.getProp(e,t.tr.eo,0,.01,this),this.data=t,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new X,this.rMatrix=new X,this.sMatrix=new X,this.tMatrix=new X,this.matrix=new X},$e.prototype.applyTransforms=function(e,t,n,i,s,r){var u=r?-1:1,x=i.s.v[0]+(1-i.s.v[0])*(1-s),v=i.s.v[1]+(1-i.s.v[1])*(1-s);e.translate(i.p.v[0]*u*s,i.p.v[1]*u*s,i.p.v[2]),t.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),t.rotate(-i.r.v*u*s),t.translate(i.a.v[0],i.a.v[1],i.a.v[2]),n.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),n.scale(r?1/x:x,r?1/v:v),n.translate(i.a.v[0],i.a.v[1],i.a.v[2])},$e.prototype.init=function(e,t,n,i){for(this.elem=e,this.arr=t,this.pos=n,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t[n]);n>0;)n-=1,this._elements.unshift(t[n]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},$e.prototype.resetElements=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t]._processed=!1,e[t].ty==="gr"&&this.resetElements(e[t].it)},$e.prototype.cloneElements=function(e){var t=JSON.parse(JSON.stringify(e));return this.resetElements(t),t},$e.prototype.changeGroupRender=function(e,t){var n,i=e.length;for(n=0;n<i;n+=1)e[n]._render=t,e[n].ty==="gr"&&this.changeGroupRender(e[n].it,t)},$e.prototype.processShapes=function(e){var t,n,i,s,r,u=!1;if(this._mdf||e){var x=Math.ceil(this.c.v);if(this._groups.length<x){for(;this._groups.length<x;){var v={it:this.cloneElements(this._elements),ty:"gr"};v.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,v),this._groups.splice(0,0,v),this._currentCopies+=1}this.elem.reloadShapes(),u=!0}r=0;var A;for(i=0;i<=this._groups.length-1;i+=1){if(A=r<x,this._groups[i]._render=A,this.changeGroupRender(this._groups[i].it,A),!A){var k=this.elemsData[i].it,_=k[k.length-1];_.transform.op.v!==0?(_.transform.op._mdf=!0,_.transform.op.v=0):_.transform.op._mdf=!1}r+=1}this._currentCopies=x;var w=this.o.v,C=w%1,E=w>0?Math.floor(w):Math.ceil(w),L=this.pMatrix.props,b=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var l=0;if(w>0){for(;l<E;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),l+=1;C&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,C,!1),l+=C)}else if(w<0){for(;l>E;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),l-=1;C&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-C,!0),l-=C)}i=this.data.m===1?0:this._currentCopies-1,s=this.data.m===1?1:-1,r=this._currentCopies;for(var o,a;r;){if(t=this.elemsData[i].it,n=t[t.length-1].transform.mProps.v.props,a=n.length,t[t.length-1].transform.mProps._mdf=!0,t[t.length-1].transform.op._mdf=!0,t[t.length-1].transform.op.v=this._currentCopies===1?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),l!==0){for((i!==0&&s===1||i!==this._currentCopies-1&&s===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),o=0;o<a;o+=1)n[o]=this.matrix.props[o];this.matrix.reset()}else for(this.matrix.reset(),o=0;o<a;o+=1)n[o]=this.matrix.props[o];l+=1,r-=1,i+=s}}else for(r=this._currentCopies,i=0,s=1;r;)t=this.elemsData[i].it,n=t[t.length-1].transform.mProps.v.props,t[t.length-1].transform.mProps._mdf=!1,t[t.length-1].transform.op._mdf=!1,r-=1,i+=s;return u},$e.prototype.addShape=function(){},ne.registerModifier("rp",$e);function $t(){this._length=0,this._maxLength=4,this.shapes=ge(this._maxLength)}$t.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(ge(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},$t.prototype.releaseShapes=function(){var e;for(e=0;e<this._length;e+=1)Oe.release(this.shapes[e]);this._length=0};function jt(e,t,n,i){this.elem=e,this.frameId=-1,this.dataProps=ge(t.length),this.renderer=n,this.k=!1,this.dashStr="",this.dashArray=ve("float32",t.length?t.length-1:0),this.dashoffset=ve("float32",1),this.initDynamicPropertyContainer(i);var s,r=t.length||0,u;for(s=0;s<r;s+=1)u=D.getProp(e,t[s].v,0,0,this),this.k=u.k||this.k,this.dataProps[s]={n:t[s].n,p:u};this.k||this.getValue(!0),this._isAnimated=this.k}jt.prototype.getValue=function(e){if(!(this.elem.globalData.frameId===this.frameId&&!e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var t=0,n=this.dataProps.length;for(this.renderer==="svg"&&(this.dashStr=""),t=0;t<n;t+=1)this.dataProps[t].n!=="o"?this.renderer==="svg"?this.dashStr+=" "+this.dataProps[t].p.v:this.dashArray[t]=this.dataProps[t].p.v:this.dashoffset[0]=this.dataProps[t].p.v}},q([M],jt);function Bt(e,t,n){this.data=t,this.c=ve("uint8c",t.p*4);var i=t.k.k[0].s?t.k.k[0].s.length-t.p*4:t.k.k.length-t.p*4;this.o=ve("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(n),this.prop=D.getProp(e,t.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}Bt.prototype.comparePoints=function(e,t){for(var n=0,i=this.o.length/2,s;n<i;){if(s=Math.abs(e[n*4]-e[t*4+n*2]),s>.01)return!1;n+=1}return!0},Bt.prototype.checkCollapsable=function(){if(this.o.length/2!==this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,t=this.data.k.k.length;e<t;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},Bt.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var t,n=this.data.p*4,i,s;for(t=0;t<n;t+=1)i=t%4===0?100:255,s=Math.round(this.prop.v[t]*i),this.c[t]!==s&&(this.c[t]=s,this._cmdf=!e);if(this.o.length)for(n=this.prop.v.length,t=this.data.p*4;t<n;t+=1)i=t%2===0?100:1,s=t%2===0?Math.round(this.prop.v[t]*100):this.prop.v[t],this.o[t-this.data.p*4]!==s&&(this.o[t-this.data.p*4]=s,this._omdf=!e);this._mdf=!e}},q([M],Bt);var en=function(e,t,n,i){if(t===0)return"";var s=e.o,r=e.i,u=e.v,x,v=" M"+i.applyToPointStringified(u[0][0],u[0][1]);for(x=1;x<t;x+=1)v+=" C"+i.applyToPointStringified(s[x-1][0],s[x-1][1])+" "+i.applyToPointStringified(r[x][0],r[x][1])+" "+i.applyToPointStringified(u[x][0],u[x][1]);return n&&t&&(v+=" C"+i.applyToPointStringified(s[x-1][0],s[x-1][1])+" "+i.applyToPointStringified(r[0][0],r[0][1])+" "+i.applyToPointStringified(u[0][0],u[0][1]),v+="z"),v},kn=function(){function e(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(t){this.audios.push(t)},pause:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].pause()},resume:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].resume()},setRate:function(t){var n,i=this.audios.length;for(n=0;n<i;n+=1)this.audios[n].setRate(t)},createAudio:function(t){return this.audioFactory?this.audioFactory(t):Howl?new Howl({src:[t]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(t){this.audioFactory=t},setVolume:function(t){this._volume=t,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var t,n=this.audios.length;for(t=0;t<n;t+=1)this.audios[t].volume(this._volume*(this._isMuted?0:1))}},function(){return new e}}(),Ln=function(){var e=function(){var d=Ve("canvas");d.width=1,d.height=1;var l=d.getContext("2d");return l.fillStyle="rgba(0,0,0,0)",l.fillRect(0,0,1,1),d}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function n(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(d,l,o){var a="";if(d.e)a=d.p;else if(l){var h=d.p;h.indexOf("images/")!==-1&&(h=h.split("/")[1]),a=l+h}else a=o,a+=d.u?d.u:"",a+=d.p;return a}function s(d){var l=0,o=setInterval(function(){var a=d.getBBox();(a.width||l>500)&&(this._imageLoaded(),clearInterval(o)),l+=1}.bind(this),50)}function r(d){var l=i(d,this.assetsPath,this.path),o=K("image");_e?this.testImageLoaded(o):o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",function(){a.img=e,this._imageLoaded()}.bind(this),!1),o.setAttributeNS("http://www.w3.org/1999/xlink","href",l),this._elementHelper.append?this._elementHelper.append(o):this._elementHelper.appendChild(o);var a={img:o,assetData:d};return a}function u(d){var l=i(d,this.assetsPath,this.path),o=Ve("img");o.crossOrigin="anonymous",o.addEventListener("load",this._imageLoaded,!1),o.addEventListener("error",function(){a.img=e,this._imageLoaded()}.bind(this),!1),o.src=l;var a={img:o,assetData:d};return a}function x(d){var l={assetData:d},o=i(d,this.assetsPath,this.path);return he.loadData(o,function(a){l.img=a,this._footageLoaded()}.bind(this),function(){l.img={},this._footageLoaded()}.bind(this)),l}function v(d,l){this.imagesLoadedCb=l;var o,a=d.length;for(o=0;o<a;o+=1)d[o].layers||(!d[o].t||d[o].t==="seq"?(this.totalImages+=1,this.images.push(this._createImageData(d[o]))):d[o].t===3&&(this.totalFootages+=1,this.images.push(this.createFootageData(d[o]))))}function A(d){this.path=d||""}function k(d){this.assetsPath=d||""}function _(d){for(var l=0,o=this.images.length;l<o;){if(this.images[l].assetData===d)return this.images[l].img;l+=1}return null}function w(){this.imagesLoadedCb=null,this.images.length=0}function C(){return this.totalImages===this.loadedAssets}function E(){return this.totalFootages===this.loadedFootagesCount}function L(d,l){d==="svg"?(this._elementHelper=l,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}function b(){this._imageLoaded=t.bind(this),this._footageLoaded=n.bind(this),this.testImageLoaded=s.bind(this),this.createFootageData=x.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return b.prototype={loadAssets:v,setAssetsPath:k,setPath:A,loadedImages:C,loadedFootages:E,destroy:w,getAsset:_,createImgData:u,createImageData:r,imageLoaded:t,footageLoaded:n,setCacheType:L},b}(),tn=function(){var e={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),e}(),qt=function(){var e={};e.createFilter=t,e.createAlphaToLuminanceFilter=n;function t(i,s){var r=K("filter");return r.setAttribute("id",i),s!==!0&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r}function n(){var i=K("feColorMatrix");return i.setAttribute("type","matrix"),i.setAttribute("color-interpolation-filters","sRGB"),i.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),i}return e}();function Lt(e,t,n){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=t,this._elem=n,this._animatorsData=ge(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(n)}Lt.prototype.searchProperties=function(){var e,t=this._textData.a.length,n,i=D.getProp;for(e=0;e<t;e+=1)n=this._textData.a[e],this._animatorsData[e]=new An(this._elem,n,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},Lt.prototype.getMeasures=function(e,t){if(this.lettersChangedFlag=t,!(!this._mdf&&!this._isFirstFrame&&!t&&(!this._hasMaskedPath||!this._pathData.m._mdf))){this._isFirstFrame=!1;var n=this._moreOptions.alignment.v,i=this._animatorsData,s=this._textData,r=this.mHelper,u=this._renderType,x=this.renderedLetters.length,v,A,k,_,w=e.l,C,E,L,b,d,l,o,a,h,f,c,y,F,B,W;if(this._hasMaskedPath){if(W=this._pathData.m,!this._pathData.n||this._pathData._mdf){var O=W.v;this._pathData.r.v&&(O=O.reverse()),C={tLength:0,segments:[]},_=O._length-1;var T;for(y=0,k=0;k<_;k+=1)T=ee.buildBezierData(O.v[k],O.v[k+1],[O.o[k][0]-O.v[k][0],O.o[k][1]-O.v[k][1]],[O.i[k+1][0]-O.v[k+1][0],O.i[k+1][1]-O.v[k+1][1]]),C.tLength+=T.segmentLength,C.segments.push(T),y+=T.segmentLength;k=_,W.v.c&&(T=ee.buildBezierData(O.v[k],O.v[0],[O.o[k][0]-O.v[k][0],O.o[k][1]-O.v[k][1]],[O.i[0][0]-O.v[0][0],O.i[0][1]-O.v[0][1]]),C.tLength+=T.segmentLength,C.segments.push(T),y+=T.segmentLength),this._pathData.pi=C}if(C=this._pathData.pi,E=this._pathData.f.v,o=0,l=1,b=0,d=!0,f=C.segments,E<0&&W.v.c)for(C.tLength<Math.abs(E)&&(E=-Math.abs(E)%C.tLength),o=f.length-1,h=f[o].points,l=h.length-1;E<0;)E+=h[l].partialLength,l-=1,l<0&&(o-=1,h=f[o].points,l=h.length-1);h=f[o].points,a=h[l-1],L=h[l],c=L.partialLength}_=w.length,v=0,A=0;var N=e.finalSize*1.2*.714,P=!0,m,p,g,S,R;S=i.length;var I,Y=-1,se,ie,Ce,Ee=E,Ne=o,De=l,He=-1,Pe,ke,ze,U,we,ut,_t,mt,st="",gt=this.defaultPropsArray,vt;if(e.j===2||e.j===1){var Ze=0,bt=0,xt=e.j===2?-.5:-1,Qe=0,Ct=!0;for(k=0;k<_;k+=1)if(w[k].n){for(Ze&&(Ze+=bt);Qe<k;)w[Qe].animatorJustifyOffset=Ze,Qe+=1;Ze=0,Ct=!0}else{for(g=0;g<S;g+=1)m=i[g].a,m.t.propType&&(Ct&&e.j===2&&(bt+=m.t.v*xt),p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),I.length?Ze+=m.t.v*I[0]*xt:Ze+=m.t.v*I*xt);Ct=!1}for(Ze&&(Ze+=bt);Qe<k;)w[Qe].animatorJustifyOffset=Ze,Qe+=1}for(k=0;k<_;k+=1){if(r.reset(),Pe=1,w[k].n)v=0,A+=e.yOffset,A+=P?1:0,E=Ee,P=!1,this._hasMaskedPath&&(o=Ne,l=De,h=f[o].points,a=h[l-1],L=h[l],c=L.partialLength,b=0),st="",mt="",ut="",vt="",gt=this.defaultPropsArray;else{if(this._hasMaskedPath){if(He!==w[k].line){switch(e.j){case 1:E+=y-e.lineWidths[w[k].line];break;case 2:E+=(y-e.lineWidths[w[k].line])/2;break}He=w[k].line}Y!==w[k].ind&&(w[Y]&&(E+=w[Y].extra),E+=w[k].an/2,Y=w[k].ind),E+=n[0]*w[k].an*.005;var et=0;for(g=0;g<S;g+=1)m=i[g].a,m.p.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),I.length?et+=m.p.v[0]*I[0]:et+=m.p.v[0]*I),m.a.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),I.length?et+=m.a.v[0]*I[0]:et+=m.a.v[0]*I);for(d=!0,this._pathData.a.v&&(E=w[0].an*.5+(y-this._pathData.f.v-w[0].an*.5-w[w.length-1].an*.5)*Y/(_-1),E+=this._pathData.f.v);d;)b+c>=E+et||!h?(F=(E+et-b)/L.partialLength,ie=a.point[0]+(L.point[0]-a.point[0])*F,Ce=a.point[1]+(L.point[1]-a.point[1])*F,r.translate(-n[0]*w[k].an*.005,-(n[1]*N)*.01),d=!1):h&&(b+=L.partialLength,l+=1,l>=h.length&&(l=0,o+=1,f[o]?h=f[o].points:W.v.c?(l=0,o=0,h=f[o].points):(b-=L.partialLength,h=null)),h&&(a=L,L=h[l],c=L.partialLength));se=w[k].an/2-w[k].add,r.translate(-se,0,0)}else se=w[k].an/2-w[k].add,r.translate(-se,0,0),r.translate(-n[0]*w[k].an*.005,-n[1]*N*.01,0);for(g=0;g<S;g+=1)m=i[g].a,m.t.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),(v!==0||e.j!==0)&&(this._hasMaskedPath?I.length?E+=m.t.v*I[0]:E+=m.t.v*I:I.length?v+=m.t.v*I[0]:v+=m.t.v*I));for(e.strokeWidthAnim&&(ze=e.sw||0),e.strokeColorAnim&&(e.sc?ke=[e.sc[0],e.sc[1],e.sc[2]]:ke=[0,0,0]),e.fillColorAnim&&e.fc&&(U=[e.fc[0],e.fc[1],e.fc[2]]),g=0;g<S;g+=1)m=i[g].a,m.a.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),I.length?r.translate(-m.a.v[0]*I[0],-m.a.v[1]*I[1],m.a.v[2]*I[2]):r.translate(-m.a.v[0]*I,-m.a.v[1]*I,m.a.v[2]*I));for(g=0;g<S;g+=1)m=i[g].a,m.s.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),I.length?r.scale(1+(m.s.v[0]-1)*I[0],1+(m.s.v[1]-1)*I[1],1):r.scale(1+(m.s.v[0]-1)*I,1+(m.s.v[1]-1)*I,1));for(g=0;g<S;g+=1){if(m=i[g].a,p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),m.sk.propType&&(I.length?r.skewFromAxis(-m.sk.v*I[0],m.sa.v*I[1]):r.skewFromAxis(-m.sk.v*I,m.sa.v*I)),m.r.propType&&(I.length?r.rotateZ(-m.r.v*I[2]):r.rotateZ(-m.r.v*I)),m.ry.propType&&(I.length?r.rotateY(m.ry.v*I[1]):r.rotateY(m.ry.v*I)),m.rx.propType&&(I.length?r.rotateX(m.rx.v*I[0]):r.rotateX(m.rx.v*I)),m.o.propType&&(I.length?Pe+=(m.o.v*I[0]-Pe)*I[0]:Pe+=(m.o.v*I-Pe)*I),e.strokeWidthAnim&&m.sw.propType&&(I.length?ze+=m.sw.v*I[0]:ze+=m.sw.v*I),e.strokeColorAnim&&m.sc.propType)for(we=0;we<3;we+=1)I.length?ke[we]+=(m.sc.v[we]-ke[we])*I[0]:ke[we]+=(m.sc.v[we]-ke[we])*I;if(e.fillColorAnim&&e.fc){if(m.fc.propType)for(we=0;we<3;we+=1)I.length?U[we]+=(m.fc.v[we]-U[we])*I[0]:U[we]+=(m.fc.v[we]-U[we])*I;m.fh.propType&&(I.length?U=at(U,m.fh.v*I[0]):U=at(U,m.fh.v*I)),m.fs.propType&&(I.length?U=rt(U,m.fs.v*I[0]):U=rt(U,m.fs.v*I)),m.fb.propType&&(I.length?U=ct(U,m.fb.v*I[0]):U=ct(U,m.fb.v*I))}}for(g=0;g<S;g+=1)m=i[g].a,m.p.propType&&(p=i[g].s,I=p.getMult(w[k].anIndexes[g],s.a[g].s.totalChars),this._hasMaskedPath?I.length?r.translate(0,m.p.v[1]*I[0],-m.p.v[2]*I[1]):r.translate(0,m.p.v[1]*I,-m.p.v[2]*I):I.length?r.translate(m.p.v[0]*I[0],m.p.v[1]*I[1],-m.p.v[2]*I[2]):r.translate(m.p.v[0]*I,m.p.v[1]*I,-m.p.v[2]*I));if(e.strokeWidthAnim&&(ut=ze<0?0:ze),e.strokeColorAnim&&(_t="rgb("+Math.round(ke[0]*255)+","+Math.round(ke[1]*255)+","+Math.round(ke[2]*255)+")"),e.fillColorAnim&&e.fc&&(mt="rgb("+Math.round(U[0]*255)+","+Math.round(U[1]*255)+","+Math.round(U[2]*255)+")"),this._hasMaskedPath){if(r.translate(0,-e.ls),r.translate(0,n[1]*N*.01+A,0),this._pathData.p.v){B=(L.point[1]-a.point[1])/(L.point[0]-a.point[0]);var Pt=Math.atan(B)*180/Math.PI;L.point[0]<a.point[0]&&(Pt+=180),r.rotate(-Pt*Math.PI/180)}r.translate(ie,Ce,0),E-=n[0]*w[k].an*.005,w[k+1]&&Y!==w[k+1].ind&&(E+=w[k].an/2,E+=e.tr*.001*e.finalSize)}else{switch(r.translate(v,A,0),e.ps&&r.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:r.translate(w[k].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[w[k].line]),0,0);break;case 2:r.translate(w[k].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[w[k].line])/2,0,0);break}r.translate(0,-e.ls),r.translate(se,0,0),r.translate(n[0]*w[k].an*.005,n[1]*N*.01,0),v+=w[k].l+e.tr*.001*e.finalSize}u==="html"?st=r.toCSS():u==="svg"?st=r.to2dCSS():gt=[r.props[0],r.props[1],r.props[2],r.props[3],r.props[4],r.props[5],r.props[6],r.props[7],r.props[8],r.props[9],r.props[10],r.props[11],r.props[12],r.props[13],r.props[14],r.props[15]],vt=Pe}x<=k?(R=new Yt(vt,ut,_t,mt,st,gt),this.renderedLetters.push(R),x+=1,this.lettersChangedFlag=!0):(R=this.renderedLetters[k],this.lettersChangedFlag=R.update(vt,ut,_t,mt,st,gt)||this.lettersChangedFlag)}}},Lt.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},Lt.prototype.mHelper=new X,Lt.prototype.defaultPropsArray=[],q([M],Lt);function An(e,t,n){var i={propType:!1},s=D.getProp,r=t.a;this.a={r:r.r?s(e,r.r,0,ce,n):i,rx:r.rx?s(e,r.rx,0,ce,n):i,ry:r.ry?s(e,r.ry,0,ce,n):i,sk:r.sk?s(e,r.sk,0,ce,n):i,sa:r.sa?s(e,r.sa,0,ce,n):i,s:r.s?s(e,r.s,1,.01,n):i,a:r.a?s(e,r.a,1,0,n):i,o:r.o?s(e,r.o,0,.01,n):i,p:r.p?s(e,r.p,1,0,n):i,sw:r.sw?s(e,r.sw,0,0,n):i,sc:r.sc?s(e,r.sc,1,0,n):i,fc:r.fc?s(e,r.fc,1,0,n):i,fh:r.fh?s(e,r.fh,0,0,n):i,fs:r.fs?s(e,r.fs,0,.01,n):i,fb:r.fb?s(e,r.fb,0,.01,n):i,t:r.t?s(e,r.t,0,0,n):i},this.s=En.getTextSelectorProp(e,t.s,n),this.s.t=t.s.t}function Yt(e,t,n,i,s,r){this.o=e,this.sw=t,this.sc=n,this.fc=i,this.m=s,this.p=r,this._mdf={o:!0,sw:!!t,sc:!!n,fc:!!i,m:!0,p:!0}}Yt.prototype.update=function(e,t,n,i,s,r){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var u=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,u=!0),this.sw!==t&&(this.sw=t,this._mdf.sw=!0,u=!0),this.sc!==n&&(this.sc=n,this._mdf.sc=!0,u=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,u=!0),this.m!==s&&(this.m=s,this._mdf.m=!0,u=!0),r.length&&(this.p[0]!==r[0]||this.p[1]!==r[1]||this.p[4]!==r[4]||this.p[5]!==r[5]||this.p[12]!==r[12]||this.p[13]!==r[13])&&(this.p=r,this._mdf.p=!0,u=!0),u};function Re(e,t){this._frameId=Fe,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=t,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}Re.prototype.defaultBoxWidth=[0,0],Re.prototype.copyData=function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Re.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},Re.prototype.searchProperty=function(){return this.searchKeyframes()},Re.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},Re.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},Re.prototype.getValue=function(e){if(!((this.elem.globalData.frameId===this.frameId||!this.effectsSequence.length)&&!e)){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var t=this.currentData,n=this.keysIndex;if(this.lock){this.setCurrentData(this.currentData);return}this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,r=e||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)n!==this.keysIndex?r=this.effectsSequence[i](r,r.t):r=this.effectsSequence[i](this.currentData,r.t);t!==r&&this.setCurrentData(r),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}},Re.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,t=this.elem.comp.renderedFrame,n=0,i=e.length;n<=i-1&&!(n===i-1||e[n+1].t>t);)n+=1;return this.keysIndex!==n&&(this.keysIndex=n),this.data.d.k[this.keysIndex].s},Re.prototype.buildFinalText=function(e){for(var t=[],n=0,i=e.length,s,r,u=!1;n<i;)s=e.charCodeAt(n),me.isCombinedCharacter(s)?t[t.length-1]+=e.charAt(n):s>=55296&&s<=56319?(r=e.charCodeAt(n+1),r>=56320&&r<=57343?(u||me.isModifier(s,r)?(t[t.length-1]+=e.substr(n,2),u=!1):t.push(e.substr(n,2)),n+=1):t.push(e.charAt(n))):s>56319?(r=e.charCodeAt(n+1),me.isZeroWidthJoiner(s,r)?(u=!0,t[t.length-1]+=e.substr(n,2),n+=1):t.push(e.charAt(n))):me.isZeroWidthJoiner(s)?(t[t.length-1]+=e.charAt(n),u=!0):t.push(e.charAt(n)),n+=1;return t},Re.prototype.completeTextData=function(e){e.__complete=!0;var t=this.elem.globalData.fontManager,n=this.data,i=[],s,r,u,x=0,v,A=n.m.g,k=0,_=0,w=0,C=[],E=0,L=0,b,d,l=t.getFontByName(e.f),o,a=0,h=ae(l);e.fWeight=h.weight,e.fStyle=h.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),r=e.finalText.length,e.finalLineHeight=e.lh;var f=e.tr/1e3*e.finalSize,c;if(e.sz)for(var y=!0,F=e.sz[0],B=e.sz[1],W,O;y;){O=this.buildFinalText(e.t),W=0,E=0,r=O.length,f=e.tr/1e3*e.finalSize;var T=-1;for(s=0;s<r;s+=1)c=O[s].charCodeAt(0),u=!1,O[s]===" "?T=s:(c===13||c===3)&&(E=0,u=!0,W+=e.finalLineHeight||e.finalSize*1.2),t.chars?(o=t.getCharData(O[s],l.fStyle,l.fFamily),a=u?0:o.w*e.finalSize/100):a=t.measureText(O[s],e.f,e.finalSize),E+a>F&&O[s]!==" "?(T===-1?r+=1:s=T,W+=e.finalLineHeight||e.finalSize*1.2,O.splice(s,T===s?1:0,"\r"),T=-1,E=0):(E+=a,E+=f);W+=l.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&B<W?(e.finalSize-=1,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=O,r=e.finalText.length,y=!1)}E=-f,a=0;var N=0,P;for(s=0;s<r;s+=1)if(u=!1,P=e.finalText[s],c=P.charCodeAt(0),c===13||c===3?(N=0,C.push(E),L=E>L?E:L,E=-2*f,v="",u=!0,w+=1):v=P,t.chars?(o=t.getCharData(P,l.fStyle,t.getFontByName(e.f).fFamily),a=u?0:o.w*e.finalSize/100):a=t.measureText(v,e.f,e.finalSize),P===" "?N+=a+f:(E+=a+f+N,N=0),i.push({l:a,an:a,add:k,n:u,anIndexes:[],val:v,line:w,animatorJustifyOffset:0}),A==2){if(k+=a,v===""||v===" "||s===r-1){for((v===""||v===" ")&&(k-=a);_<=s;)i[_].an=k,i[_].ind=x,i[_].extra=a,_+=1;x+=1,k=0}}else if(A==3){if(k+=a,v===""||s===r-1){for(v===""&&(k-=a);_<=s;)i[_].an=k,i[_].ind=x,i[_].extra=a,_+=1;k=0,x+=1}}else i[x].ind=x,i[x].extra=0,x+=1;if(e.l=i,L=E>L?E:L,C.push(E),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=L,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=C;var m=n.a,p,g;d=m.length;var S,R,I=[];for(b=0;b<d;b+=1){for(p=m[b],p.a.sc&&(e.strokeColorAnim=!0),p.a.sw&&(e.strokeWidthAnim=!0),(p.a.fc||p.a.fh||p.a.fs||p.a.fb)&&(e.fillColorAnim=!0),R=0,S=p.s.b,s=0;s<r;s+=1)g=i[s],g.anIndexes[b]=R,(S==1&&g.val!==""||S==2&&g.val!==""&&g.val!==" "||S==3&&(g.n||g.val==" "||s==r-1)||S==4&&(g.n||s==r-1))&&(p.s.rn===1&&I.push(R),R+=1);n.a[b].s.totalChars=R;var Y=-1,se;if(p.s.rn===1)for(s=0;s<r;s+=1)g=i[s],Y!=g.anIndexes[b]&&(Y=g.anIndexes[b],se=I.splice(Math.floor(Math.random()*I.length),1)[0]),g.anIndexes[b]=se}e.yOffset=e.finalLineHeight||e.finalSize*1.2,e.ls=e.ls||0,e.ascent=l.ascent*e.finalSize/100},Re.prototype.updateDocumentData=function(e,t){t=t===void 0?this.keysIndex:t;var n=this.copyData({},this.data.d.k[t].s);n=this.copyData(n,e),this.data.d.k[t].s=n,this.recalculate(t),this.elem.addDynamicProperty(this)},Re.prototype.recalculate=function(e){var t=this.data.d.k[e].s;t.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(t)},Re.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},Re.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var En=function(){var e=Math.max,t=Math.min,n=Math.floor;function i(r,u){this._currentTextLength=-1,this.k=!1,this.data=u,this.elem=r,this.comp=r.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(r),this.s=D.getProp(r,u.s||{k:0},0,0,this),"e"in u?this.e=D.getProp(r,u.e,0,0,this):this.e={v:100},this.o=D.getProp(r,u.o||{k:0},0,0,this),this.xe=D.getProp(r,u.xe||{k:0},0,0,this),this.ne=D.getProp(r,u.ne||{k:0},0,0,this),this.sm=D.getProp(r,u.sm||{k:100},0,0,this),this.a=D.getProp(r,u.a,0,.01,this),this.dynamicProperties.length||this.getValue()}i.prototype={getMult:function(r){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var u=0,x=0,v=1,A=1;this.ne.v>0?u=this.ne.v/100:x=-this.ne.v/100,this.xe.v>0?v=1-this.xe.v/100:A=1+this.xe.v/100;var k=H.getBezierEasing(u,x,v,A).get,_=0,w=this.finalS,C=this.finalE,E=this.data.sh;if(E===2)C===w?_=r>=C?1:0:_=e(0,t(.5/(C-w)+(r-w)/(C-w),1)),_=k(_);else if(E===3)C===w?_=r>=C?0:1:_=1-e(0,t(.5/(C-w)+(r-w)/(C-w),1)),_=k(_);else if(E===4)C===w?_=0:(_=e(0,t(.5/(C-w)+(r-w)/(C-w),1)),_<.5?_*=2:_=1-2*(_-.5)),_=k(_);else if(E===5){if(C===w)_=0;else{var L=C-w;r=t(e(0,r+.5-w),C-w);var b=-L/2+r,d=L/2;_=Math.sqrt(1-b*b/(d*d))}_=k(_)}else E===6?(C===w?_=0:(r=t(e(0,r+.5-w),C-w),_=(1+Math.cos(Math.PI+Math.PI*2*r/(C-w)))/2),_=k(_)):(r>=n(w)&&(r-w<0?_=e(0,t(t(C,1)-(w-r),1)):_=e(0,t(C-r,1))),_=k(_));if(this.sm.v!==100){var l=this.sm.v*.01;l===0&&(l=1e-8);var o=.5-l*.5;_<o?_=0:(_=(_-o)/l,_>1&&(_=1))}return _*this.a.v},getValue:function(r){this.iterateDynamicProperties(),this._mdf=r||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,r&&this.data.r===2&&(this.e.v=this._currentTextLength);var u=this.data.r===2?1:100/this.data.totalChars,x=this.o.v/u,v=this.s.v/u+x,A=this.e.v/u+x;if(v>A){var k=v;v=A,A=k}this.finalS=v,this.finalE=A}},q([M],i);function s(r,u,x){return new i(r,u)}return{getTextSelectorProp:s}}(),Gt=function(){return function(e,t,n){var i=0,s=e,r=ge(s),u={newElement:x,release:v};function x(){var A;return i?(i-=1,A=r[i]):A=t(),A}function v(A){i===s&&(r=nn.double(r),s*=2),n&&n(A),r[i]=A,i+=1}return u}}(),nn=function(){function e(t){return t.concat(ge(t.length))}return{double:e}}(),At=function(){function e(){return ve("float32",2)}return Gt(8,e)}(),Oe=function(){function e(){return new G}function t(s){var r=s._length,u;for(u=0;u<r;u+=1)At.release(s.v[u]),At.release(s.i[u]),At.release(s.o[u]),s.v[u]=null,s.i[u]=null,s.o[u]=null;s._length=0,s.c=!1}function n(s){var r=i.newElement(),u,x=s._length===void 0?s.v.length:s._length;for(r.setLength(x),r.c=s.c,u=0;u<x;u+=1)r.setTripleAt(s.v[u][0],s.v[u][1],s.o[u][0],s.o[u][1],s.i[u][0],s.i[u][1],u);return r}var i=Gt(4,e,t);return i.clone=n,i}(),Rt=function(){var e={newShapeCollection:s,release:r},t=0,n=4,i=ge(n);function s(){var u;return t?(t-=1,u=i[t]):u=new $t,u}function r(u){var x,v=u._length;for(x=0;x<v;x+=1)Oe.release(u.shapes[x]);u._length=0,t===n&&(i=nn.double(i),n*=2),i[t]=u,t+=1}return e}(),rn=function(){function e(){return{lengths:[],totalLength:0}}function t(n){var i,s=n.lengths.length;for(i=0;i<s;i+=1)an.release(n.lengths[i]);n.lengths.length=0}return Gt(8,e,t)}(),an=function(){function e(){return{addedLength:0,percents:ve("float32",be),lengths:ve("float32",be)}}return Gt(8,e)}(),Sn=function(){function e(t){for(var n=t.split(`\r
`),i={},s,r=0,u=0;u<n.length;u+=1)s=n[u].split(":"),s.length===2&&(i[s[0]]=s[1].trim(),r+=1);if(r===0)throw new Error;return i}return function(t){for(var n=[],i=0;i<t.length;i+=1){var s=t[i],r={time:s.tm,duration:s.dr};try{r.payload=JSON.parse(t[i].cm)}catch{try{r.payload=e(t[i].cm)}catch{r.payload={name:t[i]}}}n.push(r)}return n}}();function Be(){}Be.prototype.checkLayers=function(e){var t,n=this.layers.length,i;for(this.completeLayers=!0,t=n-1;t>=0;t-=1)this.elements[t]||(i=this.layers[t],i.ip-i.st<=e-this.layers[t].st&&i.op-i.st>e-this.layers[t].st&&this.buildItem(t)),this.completeLayers=this.elements[t]?this.completeLayers:!1;this.checkPendingElements()},Be.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e);default:return this.createNull(e)}},Be.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},Be.prototype.createAudio=function(e){return new We(e,this.globalData,this)},Be.prototype.createFootage=function(e){return new FootageElement(e,this.globalData,this)},Be.prototype.buildAllItems=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.buildItem(e);this.checkPendingElements()},Be.prototype.includeLayers=function(e){this.completeLayers=!1;var t,n=e.length,i,s=this.layers.length;for(t=0;t<n;t+=1)for(i=0;i<s;){if(this.layers[i].id===e[t].id){this.layers[i]=e[t];break}i+=1}},Be.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},Be.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},Be.prototype.buildElementParenting=function(e,t,n){for(var i=this.elements,s=this.layers,r=0,u=s.length;r<u;)s[r].ind==t&&(!i[r]||i[r]===!0?(this.buildItem(r),this.addPendingElement(e)):(n.push(i[r]),i[r].setAsParent(),s[r].parent!==void 0?this.buildElementParenting(e,s[r].parent,n):e.setHierarchy(n))),r+=1},Be.prototype.addPendingElement=function(e){this.pendingElements.push(e)},Be.prototype.searchExtraCompositions=function(e){var t,n=e.length;for(t=0;t<n;t+=1)if(e[t].xt){var i=this.createComp(e[t]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},Be.prototype.setupGlobalData=function(e,t){this.globalData.fontManager=new me,this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,t),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}};function Le(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=K("svg");var n="";if(t&&t.title){var i=K("title"),s=ye();i.setAttribute("id",s),i.textContent=t.title,this.svgElement.appendChild(i),n+=s}if(t&&t.description){var r=K("desc"),u=ye();r.setAttribute("id",u),r.textContent=t.description,this.svgElement.appendChild(r),n+=" "+u}n&&this.svgElement.setAttribute("aria-labelledby",n);var x=K("defs");this.svgElement.appendChild(x);var v=K("g");this.svgElement.appendChild(v),this.layerElement=v,this.renderConfig={preserveAspectRatio:t&&t.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:t&&t.contentVisibility||"visible",progressiveLoad:t&&t.progressiveLoad||!1,hideOnTransparent:!(t&&t.hideOnTransparent===!1),viewBoxOnly:t&&t.viewBoxOnly||!1,viewBoxSize:t&&t.viewBoxSize||!1,className:t&&t.className||"",id:t&&t.id||"",focusable:t&&t.focusable,filterSize:{width:t&&t.filterSize&&t.filterSize.width||"100%",height:t&&t.filterSize&&t.filterSize.height||"100%",x:t&&t.filterSize&&t.filterSize.x||"0%",y:t&&t.filterSize&&t.filterSize.y||"0%"}},this.globalData={_mdf:!1,frameNum:-1,defs:x,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}q([Be],Le),Le.prototype.createNull=function(e){return new yt(e,this.globalData,this)},Le.prototype.createShape=function(e){return new xe(e,this.globalData,this)},Le.prototype.createText=function(e){return new Tt(e,this.globalData,this)},Le.prototype.createImage=function(e){return new Ht(e,this.globalData,this)},Le.prototype.createComp=function(e){return new cn(e,this.globalData,this)},Le.prototype.createSolid=function(e){return new Jt(e,this.globalData,this)},Le.prototype.configAnimation=function(e){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+e.w+" "+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",e.w),this.svgElement.setAttribute("height",e.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),this.renderConfig.focusable!==void 0&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var t=this.globalData.defs;this.setupGlobalData(e,t),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var n=K("clipPath"),i=K("rect");i.setAttribute("width",e.w),i.setAttribute("height",e.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=ye();n.setAttribute("id",s),n.appendChild(i),this.layerElement.setAttribute("clip-path","url("+fe+"#"+s+")"),t.appendChild(n),this.layers=e.layers,this.elements=ge(e.layers.length)},Le.prototype.destroy=function(){this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var e,t=this.layers?this.layers.length:0;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},Le.prototype.updateContainerSize=function(){},Le.prototype.buildItem=function(e){var t=this.elements;if(!(t[e]||this.layers[e].ty===99)){t[e]=!0;var n=this.createItem(this.layers[e]);t[e]=n,oe&&(this.layers[e].ty===0&&this.globalData.projectInterface.registerComposition(n),n.initExpressions()),this.appendElementInPos(n,e),this.layers[e].tt&&(!this.elements[e-1]||this.elements[e-1]===!0?(this.buildItem(e-1),this.addPendingElement(n)):n.setMatte(t[e-1].layerId))}},Le.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var t=0,n=this.elements.length;t<n;){if(this.elements[t]===e){e.setMatte(this.elements[t-1].layerId);break}t+=1}}},Le.prototype.renderFrame=function(e){if(!(this.renderedFrame===e||this.destroyed)){e===null?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var t,n=this.layers.length;for(this.completeLayers||this.checkLayers(e),t=n-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].prepareFrame(e-this.layers[t].st);if(this.globalData._mdf)for(t=0;t<n;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()}},Le.prototype.appendElementInPos=function(e,t){var n=e.getBaseElement();if(!!n){for(var i=0,s;i<t;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(n,s):this.layerElement.appendChild(n)}},Le.prototype.hide=function(){this.layerElement.style.display="none"},Le.prototype.show=function(){this.layerElement.style.display="block"};function Et(e,t,n){this.data=e,this.element=t,this.globalData=n,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i=this.globalData.defs,s,r=this.masksProperties?this.masksProperties.length:0;this.viewData=ge(r),this.solidPath="";var u,x=this.masksProperties,v=0,A=[],k,_,w=ye(),C,E,L,b,d="clipPath",l="clip-path";for(s=0;s<r;s+=1)if((x[s].mode!=="a"&&x[s].mode!=="n"||x[s].inv||x[s].o.k!==100||x[s].o.x)&&(d="mask",l="mask"),(x[s].mode==="s"||x[s].mode==="i")&&v===0?(C=K("rect"),C.setAttribute("fill","#ffffff"),C.setAttribute("width",this.element.comp.data.w||0),C.setAttribute("height",this.element.comp.data.h||0),A.push(C)):C=null,u=K("path"),x[s].mode==="n")this.viewData[s]={op:D.getProp(this.element,x[s].o,0,.01,this.element),prop:$.getShapeProp(this.element,x[s],3),elem:u,lastPath:""},i.appendChild(u);else{v+=1,u.setAttribute("fill",x[s].mode==="s"?"#000000":"#ffffff"),u.setAttribute("clip-rule","nonzero");var o;if(x[s].x.k!==0?(d="mask",l="mask",b=D.getProp(this.element,x[s].x,0,null,this.element),o=ye(),E=K("filter"),E.setAttribute("id",o),L=K("feMorphology"),L.setAttribute("operator","erode"),L.setAttribute("in","SourceGraphic"),L.setAttribute("radius","0"),E.appendChild(L),i.appendChild(E),u.setAttribute("stroke",x[s].mode==="s"?"#000000":"#ffffff")):(L=null,b=null),this.storedData[s]={elem:u,x:b,expan:L,lastPath:"",lastOperator:"",filterId:o,lastRadius:0},x[s].mode==="i"){_=A.length;var a=K("g");for(k=0;k<_;k+=1)a.appendChild(A[k]);var h=K("mask");h.setAttribute("mask-type","alpha"),h.setAttribute("id",w+"_"+v),h.appendChild(u),i.appendChild(h),a.setAttribute("mask","url("+fe+"#"+w+"_"+v+")"),A.length=0,A.push(a)}else A.push(u);x[s].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[s]={elem:u,lastPath:"",op:D.getProp(this.element,x[s].o,0,.01,this.element),prop:$.getShapeProp(this.element,x[s],3),invRect:C},this.viewData[s].prop.k||this.drawPath(x[s],this.viewData[s].prop.v,this.viewData[s])}for(this.maskElement=K(d),r=A.length,s=0;s<r;s+=1)this.maskElement.appendChild(A[s]);v>0&&(this.maskElement.setAttribute("id",w),this.element.maskedElement.setAttribute(l,"url("+fe+"#"+w+")"),i.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}Et.prototype.getMaskProperty=function(e){return this.viewData[e].prop},Et.prototype.renderFrame=function(e){var t=this.element.finalTransform.mat,n,i=this.masksProperties.length;for(n=0;n<i;n+=1)if((this.viewData[n].prop._mdf||e)&&this.drawPath(this.masksProperties[n],this.viewData[n].prop.v,this.viewData[n]),(this.viewData[n].op._mdf||e)&&this.viewData[n].elem.setAttribute("fill-opacity",this.viewData[n].op.v),this.masksProperties[n].mode!=="n"&&(this.viewData[n].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[n].invRect.setAttribute("transform",t.getInverseMatrix().to2dCSS()),this.storedData[n].x&&(this.storedData[n].x._mdf||e))){var s=this.storedData[n].expan;this.storedData[n].x.v<0?(this.storedData[n].lastOperator!=="erode"&&(this.storedData[n].lastOperator="erode",this.storedData[n].elem.setAttribute("filter","url("+fe+"#"+this.storedData[n].filterId+")")),s.setAttribute("radius",-this.storedData[n].x.v)):(this.storedData[n].lastOperator!=="dilate"&&(this.storedData[n].lastOperator="dilate",this.storedData[n].elem.setAttribute("filter",null)),this.storedData[n].elem.setAttribute("stroke-width",this.storedData[n].x.v*2))}},Et.prototype.getMaskelement=function(){return this.maskElement},Et.prototype.createLayerSolidPath=function(){var e="M0,0 ";return e+=" h"+this.globalData.compSize.w,e+=" v"+this.globalData.compSize.h,e+=" h-"+this.globalData.compSize.w,e+=" v-"+this.globalData.compSize.h+" ",e},Et.prototype.drawPath=function(e,t,n){var i=" M"+t.v[0][0]+","+t.v[0][1],s,r;for(r=t._length,s=1;s<r;s+=1)i+=" C"+t.o[s-1][0]+","+t.o[s-1][1]+" "+t.i[s][0]+","+t.i[s][1]+" "+t.v[s][0]+","+t.v[s][1];if(t.c&&r>1&&(i+=" C"+t.o[s-1][0]+","+t.o[s-1][1]+" "+t.i[0][0]+","+t.i[0][1]+" "+t.v[0][0]+","+t.v[0][1]),n.lastPath!==i){var u="";n.elem&&(t.c&&(u=e.inv?this.solidPath+i:i),n.elem.setAttribute("d",u)),n.lastPath=i}},Et.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};function Nt(){}Nt.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){this.data.parent!==void 0&&this.comp.buildElementParenting(this,this.data.parent,[])}};function St(){}St.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,t){var n,i=this.dynamicProperties.length;for(n=0;n<i;n+=1)(t||this._isParent&&this.dynamicProperties[n].propType==="transform")&&(this.dynamicProperties[n].getValue(),this.dynamicProperties[n]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){this.dynamicProperties.indexOf(e)===-1&&this.dynamicProperties.push(e)}};function zt(){}zt.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?V.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new X},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,t=this.finalTransform.mat,n=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;n<i;){if(this.hierarchy[n].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}n+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,t.cloneFromProps(e),n=0;n<i;n+=1)e=this.hierarchy[n].finalTransform.mProp.v.props,t.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}},globalToLocal:function(e){var t=[];t.push(this.finalTransform);for(var n=!0,i=this.comp;n;)i.finalTransform?(i.data.hasMask&&t.splice(0,0,i.finalTransform),i=i.comp):n=!1;var s,r=t.length,u;for(s=0;s<r;s+=1)u=t[s].mat.applyToPointArray(0,0,0),e=[e[0]-u[0],e[1]-u[1],0];return e},mHelper:new X};function Kt(){}Kt.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){this.renderableComponents.indexOf(e)===-1&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){this.renderableComponents.indexOf(e)!==-1&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?this.isInRange!==!0&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):this.isInRange!==!1&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,t=this.renderableComponents.length;for(e=0;e<t;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return this.data.ty===5?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};function Wt(){}(function(){var e={initElement:function(t,n,i){this.initFrame(),this.initBaseData(t,n,i),this.initTransform(t,n,i),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){if(!this.hidden&&(!this.isInRange||this.isTransparent)){var t=this.baseElement||this.layerElement;t.style.display="none",this.hidden=!0}},show:function(){if(this.isInRange&&!this.isTransparent){if(!this.data.hd){var t=this.baseElement||this.layerElement;t.style.display="block"}this.hidden=!1,this._isFirstFrame=!0}},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}};q([Kt,te(e)],Wt)})();function Mn(e,t){this.elem=e,this.pos=t}function sn(e,t){this.data=e,this.type=e.ty,this.d="",this.lvl=t,this._mdf=!1,this.closed=e.hd===!0,this.pElem=K("path"),this.msElem=null}sn.prototype.reset=function(){this.d="",this._mdf=!1};function on(e,t,n){this.caches=[],this.styles=[],this.transformers=e,this.lStr="",this.sh=n,this.lvl=t,this._isAnimated=!!n.k;for(var i=0,s=e.length;i<s;){if(e[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}on.prototype.setAsAnimated=function(){this._isAnimated=!0};function Tn(e,t,n){this.transform={mProps:e,op:t,container:n},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function ln(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=D.getProp(e,t.o,0,.01,this),this.w=D.getProp(e,t.w,0,null,this),this.d=new jt(e,t.d||{},"svg",this),this.c=D.getProp(e,t.c,1,255,this),this.style=n,this._isAnimated=!!this._isAnimated}q([M],ln);function hn(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=D.getProp(e,t.o,0,.01,this),this.c=D.getProp(e,t.c,1,255,this),this.style=n}q([M],hn);function Vt(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,t,n)}Vt.prototype.initGradientData=function(e,t,n){this.o=D.getProp(e,t.o,0,.01,this),this.s=D.getProp(e,t.s,1,null,this),this.e=D.getProp(e,t.e,1,null,this),this.h=D.getProp(e,t.h||{k:0},0,.01,this),this.a=D.getProp(e,t.a||{k:0},0,ce,this),this.g=new Bt(e,t.g,this),this.style=n,this.stops=[],this.setGradientData(n.pElem,t),this.setGradientOpacity(t,n),this._isAnimated=!!this._isAnimated},Vt.prototype.setGradientData=function(e,t){var n=ye(),i=K(t.t===1?"linearGradient":"radialGradient");i.setAttribute("id",n),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s=[],r,u,x;for(x=t.g.p*4,u=0;u<x;u+=4)r=K("stop"),i.appendChild(r),s.push(r);e.setAttribute(t.ty==="gf"?"fill":"stroke","url("+fe+"#"+n+")"),this.gf=i,this.cst=s},Vt.prototype.setGradientOpacity=function(e,t){if(this.g._hasOpacity&&!this.g._collapsable){var n,i,s,r=K("mask"),u=K("path");r.appendChild(u);var x=ye(),v=ye();r.setAttribute("id",v);var A=K(e.t===1?"linearGradient":"radialGradient");A.setAttribute("id",x),A.setAttribute("spreadMethod","pad"),A.setAttribute("gradientUnits","userSpaceOnUse"),s=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var k=this.stops;for(i=e.g.p*4;i<s;i+=2)n=K("stop"),n.setAttribute("stop-color","rgb(255,255,255)"),A.appendChild(n),k.push(n);u.setAttribute(e.ty==="gf"?"fill":"stroke","url("+fe+"#"+x+")"),e.ty==="gs"&&(u.setAttribute("stroke-linecap",Z[e.lc||2]),u.setAttribute("stroke-linejoin",j[e.lj||2]),e.lj===1&&u.setAttribute("stroke-miterlimit",e.ml)),this.of=A,this.ms=r,this.ost=k,this.maskId=v,t.msElem=u}},q([M],Vt);function pn(e,t,n){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=D.getProp(e,t.w,0,null,this),this.d=new jt(e,t.d||{},"svg",this),this.initGradientData(e,t,n),this._isAnimated=!!this._isAnimated}q([Vt,M],pn);function Pn(){this.it=[],this.prevViewData=[],this.gr=K("g")}var In=function(){var e=new X,t=new X,n={createRenderFunction:i};function i(k){switch(k.ty){case"fl":return u;case"gf":return v;case"gs":return x;case"st":return A;case"sh":case"el":case"rc":case"sr":return r;case"tr":return s;default:return null}}function s(k,_,w){(w||_.transform.op._mdf)&&_.transform.container.setAttribute("opacity",_.transform.op.v),(w||_.transform.mProps._mdf)&&_.transform.container.setAttribute("transform",_.transform.mProps.v.to2dCSS())}function r(k,_,w){var C,E,L,b,d,l,o=_.styles.length,a=_.lvl,h,f,c,y,F;for(l=0;l<o;l+=1){if(b=_.sh._mdf||w,_.styles[l].lvl<a){for(f=t.reset(),y=a-_.styles[l].lvl,F=_.transformers.length-1;!b&&y>0;)b=_.transformers[F].mProps._mdf||b,y-=1,F-=1;if(b)for(y=a-_.styles[l].lvl,F=_.transformers.length-1;y>0;)c=_.transformers[F].mProps.v.props,f.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),y-=1,F-=1}else f=e;if(h=_.sh.paths,E=h._length,b){for(L="",C=0;C<E;C+=1)d=h.shapes[C],d&&d._length&&(L+=en(d,d._length,d.c,f));_.caches[l]=L}else L=_.caches[l];_.styles[l].d+=k.hd===!0?"":L,_.styles[l]._mdf=b||_.styles[l]._mdf}}function u(k,_,w){var C=_.style;(_.c._mdf||w)&&C.pElem.setAttribute("fill","rgb("+je(_.c.v[0])+","+je(_.c.v[1])+","+je(_.c.v[2])+")"),(_.o._mdf||w)&&C.pElem.setAttribute("fill-opacity",_.o.v)}function x(k,_,w){v(k,_,w),A(k,_,w)}function v(k,_,w){var C=_.gf,E=_.g._hasOpacity,L=_.s.v,b=_.e.v;if(_.o._mdf||w){var d=k.ty==="gf"?"fill-opacity":"stroke-opacity";_.style.pElem.setAttribute(d,_.o.v)}if(_.s._mdf||w){var l=k.t===1?"x1":"cx",o=l==="x1"?"y1":"cy";C.setAttribute(l,L[0]),C.setAttribute(o,L[1]),E&&!_.g._collapsable&&(_.of.setAttribute(l,L[0]),_.of.setAttribute(o,L[1]))}var a,h,f,c;if(_.g._cmdf||w){a=_.cst;var y=_.g.c;for(f=a.length,h=0;h<f;h+=1)c=a[h],c.setAttribute("offset",y[h*4]+"%"),c.setAttribute("stop-color","rgb("+y[h*4+1]+","+y[h*4+2]+","+y[h*4+3]+")")}if(E&&(_.g._omdf||w)){var F=_.g.o;for(_.g._collapsable?a=_.cst:a=_.ost,f=a.length,h=0;h<f;h+=1)c=a[h],_.g._collapsable||c.setAttribute("offset",F[h*2]+"%"),c.setAttribute("stop-opacity",F[h*2+1])}if(k.t===1)(_.e._mdf||w)&&(C.setAttribute("x2",b[0]),C.setAttribute("y2",b[1]),E&&!_.g._collapsable&&(_.of.setAttribute("x2",b[0]),_.of.setAttribute("y2",b[1])));else{var B;if((_.s._mdf||_.e._mdf||w)&&(B=Math.sqrt(Math.pow(L[0]-b[0],2)+Math.pow(L[1]-b[1],2)),C.setAttribute("r",B),E&&!_.g._collapsable&&_.of.setAttribute("r",B)),_.e._mdf||_.h._mdf||_.a._mdf||w){B||(B=Math.sqrt(Math.pow(L[0]-b[0],2)+Math.pow(L[1]-b[1],2)));var W=Math.atan2(b[1]-L[1],b[0]-L[0]),O=_.h.v;O>=1?O=.99:O<=-1&&(O=-.99);var T=B*O,N=Math.cos(W+_.a.v)*T+L[0],P=Math.sin(W+_.a.v)*T+L[1];C.setAttribute("fx",N),C.setAttribute("fy",P),E&&!_.g._collapsable&&(_.of.setAttribute("fx",N),_.of.setAttribute("fy",P))}}}function A(k,_,w){var C=_.style,E=_.d;E&&(E._mdf||w)&&E.dashStr&&(C.pElem.setAttribute("stroke-dasharray",E.dashStr),C.pElem.setAttribute("stroke-dashoffset",E.dashoffset[0])),_.c&&(_.c._mdf||w)&&C.pElem.setAttribute("stroke","rgb("+je(_.c.v[0])+","+je(_.c.v[1])+","+je(_.c.v[2])+")"),(_.o._mdf||w)&&C.pElem.setAttribute("stroke-opacity",_.o.v),(_.w._mdf||w)&&(C.pElem.setAttribute("stroke-width",_.w.v),C.msElem&&C.msElem.setAttribute("stroke-width",_.w.v))}return n}();function Mt(){}Mt.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,t=this.data.masksProperties.length;e<t;){if(this.data.masksProperties[e].mode!=="n"&&this.data.masksProperties[e].cl!==!1)return!0;e+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var e=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(e),this.data.ty===0||this.data.xt?this.compInterface=CompExpressionInterface(this):this.data.ty===4?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):this.data.ty===5&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var e=z(this.data.bm),t=this.baseElement||this.layerElement;t.style["mix-blend-mode"]=e},initBaseData:function(e,t,n){this.globalData=t,this.comp=n,this.data=e,this.layerId=ye(),this.data.sr||(this.data.sr=1),this.effectsManager=new Rn(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}};function yt(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initFrame(),this.initTransform(e,t,n),this.initHierarchy()}yt.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},yt.prototype.renderFrame=function(){},yt.prototype.getBaseElement=function(){return null},yt.prototype.destroy=function(){},yt.prototype.sourceRectAtTime=function(){},yt.prototype.hide=function(){},q([Mt,zt,Nt,St],yt);function Dt(){}Dt.prototype={initRendererElement:function(){this.layerElement=K("g")},createContainerElements:function(){this.matteElement=K("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null,t,n,i;if(this.data.td){if(this.data.td==3||this.data.td==1){var s=K("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",this.data.td==3?"luminance":"alpha"),s.appendChild(this.layerElement),e=s,this.globalData.defs.appendChild(s),!tn.maskType&&this.data.td==1&&(s.setAttribute("mask-type","luminance"),t=ye(),n=qt.createFilter(t),this.globalData.defs.appendChild(n),n.appendChild(qt.createAlphaToLuminanceFilter()),i=K("g"),i.appendChild(this.layerElement),e=i,s.appendChild(i),i.setAttribute("filter","url("+fe+"#"+t+")"))}else if(this.data.td==2){var r=K("mask");r.setAttribute("id",this.layerId),r.setAttribute("mask-type","alpha");var u=K("g");r.appendChild(u),t=ye(),n=qt.createFilter(t);var x=K("feComponentTransfer");x.setAttribute("in","SourceGraphic"),n.appendChild(x);var v=K("feFuncA");v.setAttribute("type","table"),v.setAttribute("tableValues","1.0 0.0"),x.appendChild(v),this.globalData.defs.appendChild(n);var A=K("rect");A.setAttribute("width",this.comp.data.w),A.setAttribute("height",this.comp.data.h),A.setAttribute("x","0"),A.setAttribute("y","0"),A.setAttribute("fill","#ffffff"),A.setAttribute("opacity","0"),u.setAttribute("filter","url("+fe+"#"+t+")"),u.appendChild(A),u.appendChild(this.layerElement),e=u,tn.maskType||(r.setAttribute("mask-type","luminance"),n.appendChild(qt.createAlphaToLuminanceFilter()),i=K("g"),u.appendChild(A),i.appendChild(this.layerElement),e=i,u.appendChild(i)),this.globalData.defs.appendChild(r)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.ty===0&&!this.data.hd){var k=K("clipPath"),_=K("path");_.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var w=ye();if(k.setAttribute("id",w),k.appendChild(_),this.globalData.defs.appendChild(k),this.checkMasks()){var C=K("g");C.setAttribute("clip-path","url("+fe+"#"+w+")"),C.appendChild(this.layerElement),this.transformedElement=C,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+fe+"#"+w+")")}this.data.bm!==0&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new Et(this.data,this,this.globalData),this.renderableEffectsManager=new Fn},setMatte:function(e){!this.matteElement||this.matteElement.setAttribute("mask","url("+fe+"#"+e+")")}};function dn(){}dn.prototype={addShapeToModifiers:function(e){var t,n=this.shapeModifiers.length;for(t=0;t<n;t+=1)this.shapeModifiers[t].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var t=0,n=this.shapeModifiers.length;t<n;)if(this.shapeModifiers[t].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(!!this.shapeModifiers.length){var e,t=this.shapes.length;for(e=0;e<t;e+=1)this.shapes[e].sh.reset();t=this.shapeModifiers.length;var n;for(e=t-1;e>=0&&(n=this.shapeModifiers[e].processShapes(this._isFirstFrame),!n);e-=1);}},searchProcessedElement:function(e){for(var t=this.processedElements,n=0,i=t.length;n<i;){if(t[n].elem===e)return t[n].pos;n+=1}return 0},addProcessedElement:function(e,t){for(var n=this.processedElements,i=n.length;i;)if(i-=1,n[i].elem===e){n[i].pos=t;return}n.push(new Mn(e,t))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};function Je(){}Je.prototype.initElement=function(e,t,n){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,t,n),this.textProperty=new Re(this,e.t,this.dynamicProperties),this.textAnimator=new Lt(e.t,this.renderType,this),this.initTransform(e,t,n),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},Je.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},Je.prototype.createPathShape=function(e,t){var n,i=t.length,s,r="";for(n=0;n<i;n+=1)s=t[n].ks.k,r+=en(s,s.i.length,!0,e);return r},Je.prototype.updateDocumentData=function(e,t){this.textProperty.updateDocumentData(e,t)},Je.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},Je.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},Je.prototype.applyTextPropertiesToMatrix=function(e,t,n,i,s){switch(e.ps&&t.translate(e.ps[0],e.ps[1]+e.ascent,0),t.translate(0,-e.ls,0),e.j){case 1:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n]),0,0);break;case 2:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[n])/2,0,0);break}t.translate(i,s,0)},Je.prototype.buildColor=function(e){return"rgb("+Math.round(e[0]*255)+","+Math.round(e[1]*255)+","+Math.round(e[2]*255)+")"},Je.prototype.emptyProp=new Yt,Je.prototype.destroy=function(){};function ft(){}q([Mt,zt,Nt,St,Wt],ft),ft.prototype.initElement=function(e,t,n){this.initFrame(),this.initBaseData(e,t,n),this.initTransform(e,t,n),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),(this.data.xt||!t.progressiveLoad)&&this.buildAllItems(),this.hide()},ft.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),!(!this.isInRange&&!this.data.xt)){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var t=this.tm.v;t===this.data.op&&(t=this.data.op-1),this.renderedFrame=t}var n,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),n=i-1;n>=0;n-=1)(this.completeLayers||this.elements[n])&&(this.elements[n].prepareFrame(this.renderedFrame-this.layers[n].st),this.elements[n]._mdf&&(this._mdf=!0))}},ft.prototype.renderInnerContent=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},ft.prototype.setElements=function(e){this.elements=e},ft.prototype.getElements=function(){return this.elements},ft.prototype.destroyElements=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy()},ft.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()};function Ht(e,t,n){this.assetData=t.getAssetData(e.refId),this.initElement(e,t,n),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}q([Mt,zt,Dt,Nt,St,Wt],Ht),Ht.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=K("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.innerElem)},Ht.prototype.sourceRectAtTime=function(){return this.sourceRect};function Jt(e,t,n){this.initElement(e,t,n)}q([Ht],Jt),Jt.prototype.createContent=function(){var e=K("rect");e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.layerElement.appendChild(e)};function We(e,t,n){this.initFrame(),this.initRenderable(),this.assetData=t.getAssetData(e.refId),this.initBaseData(e,t,n),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this.tm=e.tm?D.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}We.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var t=this.tm.v;this._currentTime=t}},q([Kt,Mt,St],We),We.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},We.prototype.show=function(){},We.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},We.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},We.prototype.resume=function(){this._canPlay=!0},We.prototype.setRate=function(e){this.audio.rate(e)},We.prototype.volume=function(e){this.audio.volume(e)},We.prototype.getBaseElement=function(){return null},We.prototype.destroy=function(){},We.prototype.sourceRectAtTime=function(){},We.prototype.initExpressions=function(){};function cn(e,t,n){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?ge(this.layers.length):[],this.initElement(e,t,n),this.tm=e.tm?D.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}q([Le,ft,Dt],cn);function Tt(e,t,n){this.textSpans=[],this.renderType="svg",this.initElement(e,t,n)}q([Mt,zt,Dt,Nt,St,Wt,Je],Tt),Tt.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=K("text"))},Tt.prototype.buildTextContents=function(e){for(var t=0,n=e.length,i=[],s="";t<n;)e[t]===String.fromCharCode(13)||e[t]===String.fromCharCode(3)?(i.push(s),s=""):s+=e[t],t+=1;return i.push(s),i},Tt.prototype.buildNewText=function(){var e,t,n=this.textProperty.currentData;this.renderedLetters=ge(n?n.l.length:0),n.fc?this.layerElement.setAttribute("fill",this.buildColor(n.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),n.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(n.sc)),this.layerElement.setAttribute("stroke-width",n.sw)),this.layerElement.setAttribute("font-size",n.finalSize);var i=this.globalData.fontManager.getFontByName(n.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=n.fWeight,r=n.fStyle;this.layerElement.setAttribute("font-style",r),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",n.t);var u=n.l||[],x=!!this.globalData.fontManager.chars;t=u.length;var v,A=this.mHelper,k,_="",w=this.data.singleShape,C=0,E=0,L=!0,b=n.tr*.001*n.finalSize;if(w&&!x&&!n.sz){var d=this.textContainer,l="start";switch(n.j){case 1:l="end";break;case 2:l="middle";break;default:l="start";break}d.setAttribute("text-anchor",l),d.setAttribute("letter-spacing",b);var o=this.buildTextContents(n.finalText);for(t=o.length,E=n.ps?n.ps[1]+n.ascent:0,e=0;e<t;e+=1)v=this.textSpans[e]||K("tspan"),v.textContent=o[e],v.setAttribute("x",0),v.setAttribute("y",E),v.style.display="inherit",d.appendChild(v),this.textSpans[e]=v,E+=n.finalLineHeight;this.layerElement.appendChild(d)}else{var a=this.textSpans.length,h,f;for(e=0;e<t;e+=1)(!x||!w||e===0)&&(v=a>e?this.textSpans[e]:K(x?"path":"text"),a<=e&&(v.setAttribute("stroke-linecap","butt"),v.setAttribute("stroke-linejoin","round"),v.setAttribute("stroke-miterlimit","4"),this.textSpans[e]=v,this.layerElement.appendChild(v)),v.style.display="inherit"),A.reset(),A.scale(n.finalSize/100,n.finalSize/100),w&&(u[e].n&&(C=-b,E+=n.yOffset,E+=L?1:0,L=!1),this.applyTextPropertiesToMatrix(n,A,u[e].line,C,E),C+=u[e].l||0,C+=b),x?(f=this.globalData.fontManager.getCharData(n.finalText[e],i.fStyle,this.globalData.fontManager.getFontByName(n.f).fFamily),h=f&&f.data||{},k=h.shapes?h.shapes[0].it:[],w?_+=this.createPathShape(A,k):v.setAttribute("d",this.createPathShape(A,k))):(w&&v.setAttribute("transform","translate("+A.props[12]+","+A.props[13]+")"),v.textContent=u[e].val,v.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));w&&v&&v.setAttribute("d",_)}for(;e<this.textSpans.length;)this.textSpans[e].style.display="none",e+=1;this._sizeChanged=!0},Tt.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},Tt.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var e,t,n=this.textAnimator.renderedLetters,i=this.textProperty.currentData.l;t=i.length;var s,r;for(e=0;e<t;e+=1)i[e].n||(s=n[e],r=this.textSpans[e],s._mdf.m&&r.setAttribute("transform",s.m),s._mdf.o&&r.setAttribute("opacity",s.o),s._mdf.sw&&r.setAttribute("stroke-width",s.sw),s._mdf.sc&&r.setAttribute("stroke",s.sc),s._mdf.fc&&r.setAttribute("fill",s.fc))}};function xe(e,t,n){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,t,n),this.prevViewData=[]}q([Mt,zt,Dt,dn,Nt,St,Wt],xe),xe.prototype.initSecondaryElement=function(){},xe.prototype.identityMatrix=new X,xe.prototype.buildExpressionInterface=function(){},xe.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},xe.prototype.filterUniqueShapes=function(){var e,t=this.shapes.length,n,i,s=this.stylesList.length,r,u=[],x=!1;for(i=0;i<s;i+=1){for(r=this.stylesList[i],x=!1,u.length=0,e=0;e<t;e+=1)n=this.shapes[e],n.styles.indexOf(r)!==-1&&(u.push(n),x=n._isAnimated||x);u.length>1&&x&&this.setShapesAsAnimated(u)}},xe.prototype.setShapesAsAnimated=function(e){var t,n=e.length;for(t=0;t<n;t+=1)e[t].setAsAnimated()},xe.prototype.createStyleElement=function(e,t){var n,i=new sn(e,t),s=i.pElem;if(e.ty==="st")n=new ln(this,e,i);else if(e.ty==="fl")n=new hn(this,e,i);else if(e.ty==="gf"||e.ty==="gs"){var r=e.ty==="gf"?Vt:pn;n=new r(this,e,i),this.globalData.defs.appendChild(n.gf),n.maskId&&(this.globalData.defs.appendChild(n.ms),this.globalData.defs.appendChild(n.of),s.setAttribute("mask","url("+fe+"#"+n.maskId+")"))}return(e.ty==="st"||e.ty==="gs")&&(s.setAttribute("stroke-linecap",Z[e.lc||2]),s.setAttribute("stroke-linejoin",j[e.lj||2]),s.setAttribute("fill-opacity","0"),e.lj===1&&s.setAttribute("stroke-miterlimit",e.ml)),e.r===2&&s.setAttribute("fill-rule","evenodd"),e.ln&&s.setAttribute("id",e.ln),e.cl&&s.setAttribute("class",e.cl),e.bm&&(s.style["mix-blend-mode"]=z(e.bm)),this.stylesList.push(i),this.addToAnimatedContents(e,n),n},xe.prototype.createGroupElement=function(e){var t=new Pn;return e.ln&&t.gr.setAttribute("id",e.ln),e.cl&&t.gr.setAttribute("class",e.cl),e.bm&&(t.gr.style["mix-blend-mode"]=z(e.bm)),t},xe.prototype.createTransformElement=function(e,t){var n=V.getTransformProperty(this,e,this),i=new Tn(n,n.o,t);return this.addToAnimatedContents(e,i),i},xe.prototype.createShapeElement=function(e,t,n){var i=4;e.ty==="rc"?i=5:e.ty==="el"?i=6:e.ty==="sr"&&(i=7);var s=$.getShapeProp(this,e,i,this),r=new on(t,n,s);return this.shapes.push(r),this.addShapeToModifiers(r),this.addToAnimatedContents(e,r),r},xe.prototype.addToAnimatedContents=function(e,t){for(var n=0,i=this.animatedContents.length;n<i;){if(this.animatedContents[n].element===t)return;n+=1}this.animatedContents.push({fn:In.createRenderFunction(e),element:t,data:e})},xe.prototype.setElementStyles=function(e){var t=e.styles,n,i=this.stylesList.length;for(n=0;n<i;n+=1)this.stylesList[n].closed||t.push(this.stylesList[n])},xe.prototype.reloadShapes=function(){this._isFirstFrame=!0;var e,t=this.itemsData.length;for(e=0;e<t;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),t=this.dynamicProperties.length,e=0;e<t;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},xe.prototype.searchShapes=function(e,t,n,i,s,r,u){var x=[].concat(r),v,A=e.length-1,k,_,w=[],C=[],E,L,b;for(v=A;v>=0;v-=1){if(b=this.searchProcessedElement(e[v]),b?t[v]=n[b-1]:e[v]._render=u,e[v].ty==="fl"||e[v].ty==="st"||e[v].ty==="gf"||e[v].ty==="gs")b?t[v].style.closed=!1:t[v]=this.createStyleElement(e[v],s),e[v]._render&&t[v].style.pElem.parentNode!==i&&i.appendChild(t[v].style.pElem),w.push(t[v].style);else if(e[v].ty==="gr"){if(!b)t[v]=this.createGroupElement(e[v]);else for(_=t[v].it.length,k=0;k<_;k+=1)t[v].prevViewData[k]=t[v].it[k];this.searchShapes(e[v].it,t[v].it,t[v].prevViewData,t[v].gr,s+1,x,u),e[v]._render&&t[v].gr.parentNode!==i&&i.appendChild(t[v].gr)}else e[v].ty==="tr"?(b||(t[v]=this.createTransformElement(e[v],i)),E=t[v].transform,x.push(E)):e[v].ty==="sh"||e[v].ty==="rc"||e[v].ty==="el"||e[v].ty==="sr"?(b||(t[v]=this.createShapeElement(e[v],x,s)),this.setElementStyles(t[v])):e[v].ty==="tm"||e[v].ty==="rd"||e[v].ty==="ms"||e[v].ty==="pb"?(b?(L=t[v],L.closed=!1):(L=ne.getModifier(e[v].ty),L.init(this,e[v]),t[v]=L,this.shapeModifiers.push(L)),C.push(L)):e[v].ty==="rp"&&(b?(L=t[v],L.closed=!0):(L=ne.getModifier(e[v].ty),t[v]=L,L.init(this,e,v,t),this.shapeModifiers.push(L),u=!1),C.push(L));this.addProcessedElement(e[v],v+1)}for(A=w.length,v=0;v<A;v+=1)w[v].closed=!0;for(A=C.length,v=0;v<A;v+=1)C[v].closed=!0},xe.prototype.renderInnerContent=function(){this.renderModifiers();var e,t=this.stylesList.length;for(e=0;e<t;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<t;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute("d",this.stylesList[e].d),this.stylesList[e].d="M0 0"+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute("d",this.stylesList[e].d||"M0 0"))},xe.prototype.renderShape=function(){var e,t=this.animatedContents.length,n;for(e=0;e<t;e+=1)n=this.animatedContents[e],(this._isFirstFrame||n.element._isAnimated)&&n.data!==!0&&n.fn(n.data,n.element,this._isFirstFrame)},xe.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null};function Fn(){}var Ae=function(){var e={},t=[],n=0,i=0,s=0,r=!0,u=!1;function x(m){for(var p=0,g=m.target;p<i;)t[p].animation===g&&(t.splice(p,1),p-=1,i-=1,g.isPaused||_()),p+=1}function v(m,p){if(!m)return null;for(var g=0;g<i;){if(t[g].elem===m&&t[g].elem!==null)return t[g].animation;g+=1}var S=new J;return w(S,m),S.setData(m,p),S}function A(){var m,p=t.length,g=[];for(m=0;m<p;m+=1)g.push(t[m].animation);return g}function k(){s+=1,B()}function _(){s-=1}function w(m,p){m.addEventListener("destroy",x),m.addEventListener("_active",k),m.addEventListener("_idle",_),t.push({elem:p,animation:m}),i+=1}function C(m){var p=new J;return w(p,null),p.setParams(m),p}function E(m,p){var g;for(g=0;g<i;g+=1)t[g].animation.setSpeed(m,p)}function L(m,p){var g;for(g=0;g<i;g+=1)t[g].animation.setDirection(m,p)}function b(m){var p;for(p=0;p<i;p+=1)t[p].animation.play(m)}function d(m){var p=m-n,g;for(g=0;g<i;g+=1)t[g].animation.advanceTime(p);n=m,s&&!u?le.requestAnimationFrame(d):r=!0}function l(m){n=m,le.requestAnimationFrame(d)}function o(m){var p;for(p=0;p<i;p+=1)t[p].animation.pause(m)}function a(m,p,g){var S;for(S=0;S<i;S+=1)t[S].animation.goToAndStop(m,p,g)}function h(m){var p;for(p=0;p<i;p+=1)t[p].animation.stop(m)}function f(m){var p;for(p=0;p<i;p+=1)t[p].animation.togglePause(m)}function c(m){var p;for(p=i-1;p>=0;p-=1)t[p].animation.destroy(m)}function y(m,p,g){var S=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),R,I=S.length;for(R=0;R<I;R+=1)g&&S[R].setAttribute("data-bm-type",g),v(S[R],m);if(p&&I===0){g||(g="svg");var Y=document.getElementsByTagName("body")[0];Y.innerText="";var se=Ve("div");se.style.width="100%",se.style.height="100%",se.setAttribute("data-bm-type",g),Y.appendChild(se),v(se,m)}}function F(){var m;for(m=0;m<i;m+=1)t[m].animation.resize()}function B(){!u&&s&&r&&(le.requestAnimationFrame(l),r=!1)}function W(){u=!0}function O(){u=!1,B()}function T(m,p){var g;for(g=0;g<i;g+=1)t[g].animation.setVolume(m,p)}function N(m){var p;for(p=0;p<i;p+=1)t[p].animation.mute(m)}function P(m){var p;for(p=0;p<i;p+=1)t[p].animation.unmute(m)}return e.registerAnimation=v,e.loadAnimation=C,e.setSpeed=E,e.setDirection=L,e.play=b,e.pause=o,e.stop=h,e.togglePause=f,e.searchAnimations=y,e.resize=F,e.goToAndStop=a,e.destroy=c,e.freeze=W,e.unfreeze=O,e.setVolume=T,e.mute=N,e.unmute=P,e.getRegisteredAnimations=A,e}(),J=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=ye(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=Me,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=wt(),this.imagePreloader=new Ln,this.audioController=kn(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this)};q([kt],J),J.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var t="svg";switch(e.animType?t=e.animType:e.renderer&&(t=e.renderer),t){case"canvas":this.renderer=new CanvasRenderer(this,e.rendererSettings);break;case"svg":this.renderer=new Le(this,e.rendererSettings);break;default:this.renderer=new HybridRenderer(this,e.rendererSettings);break}this.imagePreloader.setCacheType(t,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=t,e.loop===""||e.loop===null||e.loop===void 0||e.loop===!0?this.loop=!0:e.loop===!1?this.loop=!1:this.loop=parseInt(e.loop,10),this.autoplay="autoplay"in e?e.autoplay:!0,this.name=e.name?e.name:"",this.autoloadSegments=Object.prototype.hasOwnProperty.call(e,"autoloadSegments")?e.autoloadSegments:!0,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(e.path.lastIndexOf("\\")!==-1?this.path=e.path.substr(0,e.path.lastIndexOf("\\")+1):this.path=e.path.substr(0,e.path.lastIndexOf("/")+1),this.fileName=e.path.substr(e.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),he.loadAnimation(e.path,this.configAnimation,this.onSetupError))},J.prototype.onSetupError=function(){this.trigger("data_failed")},J.prototype.setupAnimation=function(e){he.completeAnimation(e,this.configAnimation)},J.prototype.setData=function(e,t){t&&typeof t!="object"&&(t=JSON.parse(t));var n={wrapper:e,animationData:t},i=e.attributes;n.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",n.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";s==="false"?n.loop=!1:s==="true"?n.loop=!0:s!==""&&(n.loop=parseInt(s,10));var r=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:i.getNamedItem("bm-autoplay")?i.getNamedItem("bm-autoplay").value:!0;n.autoplay=r!=="false",n.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"";var u=i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"";u==="false"&&(n.prerender=!1),this.setParams(n)},J.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var t=this.animationData.layers,n,i=t.length,s=e.layers,r,u=s.length;for(r=0;r<u;r+=1)for(n=0;n<i;){if(t[n].id===s[r].id){t[n]=s[r];break}n+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(i=e.assets.length,n=0;n<i;n+=1)this.animationData.assets.push(e.assets[n]);this.animationData.__complete=!1,he.completeAnimation(this.animationData,this.onSegmentComplete)},J.prototype.onSegmentComplete=function(e){this.animationData=e,oe&&oe.initExpressions(this),this.loadNextSegment()},J.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||e.length===0||!this.autoloadSegments){this.trigger("data_ready"),this.timeCompleted=this.totalFrames;return}var t=e.shift();this.timeCompleted=t.time*this.frameRate;var n=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,he.loadData(n,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},J.prototype.loadSegments=function(){var e=this.animationData.segments;e||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},J.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},J.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},J.prototype.configAnimation=function(e){if(!!this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||(e.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=Sn(e.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(t){this.triggerConfigError(t)}},J.prototype.waitForFontsLoaded=function(){!this.renderer||(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},J.prototype.checkLoaded=function(){!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||this.renderer.rendererType!=="canvas")&&this.imagePreloader.loadedFootages()&&(this.isLoaded=!0,oe&&oe.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},J.prototype.resize=function(){this.renderer.updateContainerSize()},J.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},J.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},J.prototype.renderFrame=function(){if(!(this.isLoaded===!1||!this.renderer))try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},J.prototype.play=function(e){e&&this.name!==e||this.isPaused===!0&&(this.isPaused=!1,this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},J.prototype.pause=function(e){e&&this.name!==e||this.isPaused===!1&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"),this.audioController.pause())},J.prototype.togglePause=function(e){e&&this.name!==e||(this.isPaused===!0?this.play():this.pause())},J.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},J.prototype.getMarkerData=function(e){for(var t,n=0;n<this.markers.length;n+=1)if(t=this.markers[n],t.payload&&t.payload.name===e)return t;return null},J.prototype.goToAndStop=function(e,t,n){if(!(n&&this.name!==n)){var i=Number(e);if(isNaN(i)){var s=this.getMarkerData(e);s&&this.goToAndStop(s.time,!0)}else t?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},J.prototype.goToAndPlay=function(e,t,n){if(!(n&&this.name!==n)){var i=Number(e);if(isNaN(i)){var s=this.getMarkerData(e);s&&(s.duration?this.playSegments([s.time,s.time+s.duration],!0):this.goToAndStop(s.time,!0))}else this.goToAndStop(i,t,n);this.play()}},J.prototype.advanceTime=function(e){if(!(this.isPaused===!0||this.isLoaded===!1)){var t=this.currentRawFrame+e*this.frameModifier,n=!1;t>=this.totalFrames-1&&this.frameModifier>0?!this.loop||this.playCount===this.loop?this.checkSegments(t>this.totalFrames?t%this.totalFrames:0)||(n=!0,t=this.totalFrames-1):t>=this.totalFrames?(this.playCount+=1,this.checkSegments(t%this.totalFrames)||(this.setCurrentRawFrameValue(t%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(t):t<0?this.checkSegments(t%this.totalFrames)||(this.loop&&!(this.playCount--<=0&&this.loop!==!0)?(this.setCurrentRawFrameValue(this.totalFrames+t%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0):(n=!0,t=0)):this.setCurrentRawFrameValue(t),n&&(this.setCurrentRawFrameValue(t),this.pause(),this.trigger("complete"))}},J.prototype.adjustSegment=function(e,t){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-t)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+t)),this.trigger("segmentStart")},J.prototype.setSegment=function(e,t){var n=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?n=e:this.currentRawFrame+this.firstFrame>t&&(n=t-e)),this.firstFrame=e,this.totalFrames=t-e,this.timeCompleted=this.totalFrames,n!==-1&&this.goToAndStop(n,!0)},J.prototype.playSegments=function(e,t){if(t&&(this.segments.length=0),typeof e[0]=="object"){var n,i=e.length;for(n=0;n<i;n+=1)this.segments.push(e[n])}else this.segments.push(e);this.segments.length&&t&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},J.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},J.prototype.checkSegments=function(e){return this.segments.length?(this.adjustSegment(this.segments.shift(),e),!0):!1},J.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},J.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},J.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},J.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},J.prototype.setVolume=function(e,t){t&&this.name!==t||this.audioController.setVolume(e)},J.prototype.getVolume=function(){return this.audioController.getVolume()},J.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},J.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},J.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},J.prototype.getPath=function(){return this.path},J.prototype.getAssetsPath=function(e){var t="";if(e.e)t=e.p;else if(this.assetsPath){var n=e.p;n.indexOf("images/")!==-1&&(n=n.split("/")[1]),t=this.assetsPath+n}else t=this.path,t+=e.u?e.u:"",t+=e.p;return t},J.prototype.getAssetData=function(e){for(var t=0,n=this.assets.length;t<n;){if(e===this.assets[t].id)return this.assets[t];t+=1}return null},J.prototype.hide=function(){this.renderer.hide()},J.prototype.show=function(){this.renderer.show()},J.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},J.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case"enterFrame":case"drawnFrame":this.triggerEvent(e,new Ke(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(e,new ht(e,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(e,new tt(e,this.frameMult));break;case"segmentStart":this.triggerEvent(e,new pt(e,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(e,new Ft(e,this));break;default:this.triggerEvent(e)}e==="enterFrame"&&this.onEnterFrame&&this.onEnterFrame.call(this,new Ke(e,this.currentFrame,this.totalFrames,this.frameMult)),e==="loopComplete"&&this.onLoopComplete&&this.onLoopComplete.call(this,new ht(e,this.loop,this.playCount,this.frameMult)),e==="complete"&&this.onComplete&&this.onComplete.call(this,new tt(e,this.frameMult)),e==="segmentStart"&&this.onSegmentStart&&this.onSegmentStart.call(this,new pt(e,this.firstFrame,this.totalFrames)),e==="destroy"&&this.onDestroy&&this.onDestroy.call(this,new Ft(e,this))},J.prototype.triggerRenderFrameError=function(e){var t=new Ot(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)},J.prototype.triggerConfigError=function(e){var t=new nt(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)};function Rn(){this.effectElements=[]}var de={};function Nn(e){fe=e}function fn(){Ae.searchAnimations()}function zn(e){Me=e}function Vn(e){Ge=e}function On(e){return Ae.loadAnimation(e)}function Bn(e){if(typeof e=="string")switch(e){case"high":be=200;break;default:case"medium":be=50;break;case"low":be=10;break}else!isNaN(e)&&e>1&&(be=e)}function Wn(){return typeof navigator<"u"}function Dn(e,t){e==="expressions"&&(oe=t)}function Hn(e){switch(e){case"propertyFactory":return D;case"shapePropertyFactory":return $;case"matrix":return X;default:return null}}de.play=Ae.play,de.pause=Ae.pause,de.setLocationHref=Nn,de.togglePause=Ae.togglePause,de.setSpeed=Ae.setSpeed,de.setDirection=Ae.setDirection,de.stop=Ae.stop,de.searchAnimations=fn,de.registerAnimation=Ae.registerAnimation,de.loadAnimation=On,de.setSubframeRendering=zn,de.resize=Ae.resize,de.goToAndStop=Ae.goToAndStop,de.destroy=Ae.destroy,de.setQuality=Bn,de.inBrowser=Wn,de.installPlugin=Dn,de.freeze=Ae.freeze,de.unfreeze=Ae.unfreeze,de.setVolume=Ae.setVolume,de.mute=Ae.mute,de.unmute=Ae.unmute,de.getRegisteredAnimations=Ae.getRegisteredAnimations,de.useWebWorker=function(e){Ye=e},de.setIDPrefix=Vn,de.__getFactory=Hn,de.version="5.8.1";function Zn(){document.readyState==="complete"&&(clearInterval(Un),fn())}function jn(e){for(var t=un.split("&"),n=0;n<t.length;n+=1){var i=t[n].split("=");if(decodeURIComponent(i[0])==e)return decodeURIComponent(i[1])}return null}var un;{var mn=document.getElementsByTagName("script"),qn=mn.length-1,Gn=mn[qn]||{src:""};un=Gn.src.replace(/^[^\?]+\??/,""),jn("renderer")}var Un=setInterval(Zn,100);return de})}(Qt)),Qt.exports}var wn;function ti(){if(wn)return gn;wn=1;var re=bn(),le=Xn(),qe=ei();function fe(D){return D&&typeof D=="object"&&"default"in D?D:{default:D}}var Fe=fe(le),Ye=fe(qe);function Me(D,V){V===void 0&&(V={});var G=V.insertAt;if(D&&typeof document<"u"){var $=document.head||document.getElementsByTagName("head")[0],ne=document.createElement("style");ne.type="text/css",G==="top"&&$.firstChild?$.insertBefore(ne,$.firstChild):$.appendChild(ne),ne.styleSheet?ne.styleSheet.cssText=D:ne.appendChild(document.createTextNode(D))}}var Ge=`.pera-wallet-modal-header {
  position: absolute;
  top: -44px;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pera-wallet-modal-header--mobile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;
}
.pera-wallet-modal-header--mobile .pera-wallet-modal-header__close-button {
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: unset;
  box-shadow: unset;
}

.pera-wallet-modal-header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.13px;
  color: #ffffff;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal-header__close-button {
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  background: rgba(44, 53, 89, 0.1);
  border-radius: 8px;
}

.pera-wallet-modal-header__close-button__close-icon {
  width: 20px;
  height: 20px;
}`;Me(Ge);function oe(){return document.documentElement.clientWidth<=767}function _e(){document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")}const Se=document.createElement("template"),It=re.isMobile()?"pera-wallet-modal-header pera-wallet-modal-header--mobile":"pera-wallet-modal-header pera-wallet-modal-header--desktop";Se.innerHTML=`
  <div class="${It}">
      ${oe()&&re.isMobile()?"":`<div class="pera-wallet-modal-header__brand">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='4.8' fill='%23FFEE55'/%3e%3cpath d='M13.0408 5.92462C13.413 7.46693 13.2872 8.8236 12.7597 8.95482C12.2322 9.08605 11.5028 7.94214 11.1306 6.39983C10.7583 4.85752 10.8842 3.50085 11.4117 3.36963C11.9391 3.2384 12.6685 4.38231 13.0408 5.92462Z' fill='black'/%3e%3cpath d='M19.1876 7.25063C18.3632 6.37689 16.7231 6.61371 15.5243 7.77959C14.3254 8.94547 14.0219 10.5989 14.8463 11.4727C15.6707 12.3464 17.3108 12.1096 18.5097 10.9437C19.7085 9.77781 20.012 8.12438 19.1876 7.25063Z' fill='black'/%3e%3cpath d='M12.6308 20.6297C13.1583 20.4985 13.2656 19.0651 12.8705 17.4281C12.4754 15.7911 11.7275 14.5705 11.2 14.7017C10.6725 14.8329 10.5652 16.2663 10.9603 17.9033C11.3554 19.5403 12.1033 20.7609 12.6308 20.6297Z' fill='black'/%3e%3cpath d='M7.25371 8.05056C8.77551 8.49933 9.8875 9.28664 9.73741 9.80906C9.58731 10.3315 8.23197 10.3912 6.71016 9.94242C5.18836 9.49364 4.07637 8.70633 4.22646 8.18391C4.37656 7.66149 5.7319 7.60178 7.25371 8.05056Z' fill='black'/%3e%3cpath d='M17.1309 13.9497C18.7461 14.4261 19.9338 15.2357 19.7837 15.7581C19.6336 16.2806 18.2025 16.3179 16.5873 15.8416C14.9721 15.3653 13.7844 14.5556 13.9345 14.0332C14.0846 13.5108 15.5157 13.4734 17.1309 13.9497Z' fill='black'/%3e%3cpath d='M8.96609 12.8536C8.5887 12.4624 7.35088 13.0318 6.20133 14.1253C5.05177 15.2188 4.42581 16.4225 4.80319 16.8137C5.18058 17.2048 6.4184 16.6355 7.56796 15.542C8.71751 14.4484 9.34347 13.2448 8.96609 12.8536Z' fill='black'/%3e%3c/svg%3e" />

              Pera Connect
            </div>
            `} 

      <button
        id="pera-wallet-modal-header-close-button"
        class="pera-wallet-button pera-wallet-modal-header__close-button">
        <img
          class="pera-wallet-modal-header__close-button__close-icon"
          src="${oe()&&re.isMobile()?"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='%232C3559' stroke-width='2'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6' stroke='white' stroke-width='2'/%3e%3c/svg%3e"}"
        />
      </button>
    </div>
`;class je extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=Ge,this.shadowRoot.append(Se.content.cloneNode(!0),V),this.onClose()}}onClose(){var V;const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-modal-header-close-button"),$=this.getAttribute("modal-id");G&&$===re.PERA_WALLET_REDIRECT_MODAL_ID&&G.addEventListener("click",()=>{re.removeModalWrapperFromDOM(re.PERA_WALLET_REDIRECT_MODAL_ID)})}}var ot="data:image/svg+xml,%3csvg fill='none' height='80' width='80' xmlns='http://www.w3.org/2000/svg'%3e%3cpath clip-rule='evenodd' d='M39.9 80V68.99h-9.8V80h-.2V68.99h-3.5a6.503 6.503 0 0 1-6.247-4.7 6.514 6.514 0 0 1-4.445-4.444 6.503 6.503 0 0 1-4.695-6.246v-3.5H0v-.2h11.013v-9.8H0v-.2h11.013v-9.8H0v-.2h11.013v-3.5a6.503 6.503 0 0 1 4.694-6.246 6.513 6.513 0 0 1 4.447-4.447 6.503 6.503 0 0 1 6.246-4.696h3.5V0h.2v11.011h9.8V0h.2v11.011h9.8V0h.2v11.011h3.5a6.503 6.503 0 0 1 6.247 4.697 6.514 6.514 0 0 1 4.443 4.444 6.503 6.503 0 0 1 4.701 6.248v3.5H80v.2H68.991v9.8H80v.2H68.991v9.8H80v.2H68.991v3.5a6.503 6.503 0 0 1-4.701 6.248 6.514 6.514 0 0 1-4.443 4.442 6.503 6.503 0 0 1-6.247 4.7h-3.5V80h-.2V68.99h-9.8V80zm28.89-40.1a28.728 28.728 0 0 0-1.746-9.8h-2.5v9.8h4.247zm-4.246.2h4.247a28.729 28.729 0 0 1-1.747 9.8h-2.5zm-.2-.2v-9.8H60.1v9.8zm-4.244.2h4.244v9.8H60.1zm-.2-.2a19.807 19.807 0 0 0-2.633-9.8H50.1v9.8zm-9.8.2h9.8a19.807 19.807 0 0 1-2.633 9.8H50.1zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-9.8v9.8zm-9.8.2h9.8v9.8h-9.8zm-.2-.2v-9.8h-7.167a19.807 19.807 0 0 0-2.633 9.8zm-9.8.2h9.8v9.8h-7.167a19.807 19.807 0 0 1-2.633-9.8zm-.2-.2v-9.8h-4.245v9.8zm-4.245.2H19.9v9.8h-4.245zm-.2-.2v-9.8H12.96a28.726 28.726 0 0 0-1.748 9.8h4.242zm-4.242.2h4.242v9.8H12.96a28.726 28.726 0 0 1-1.748-9.8zm0 13.5v-3.5h1.608a28.876 28.876 0 0 0 2.634 5.327v2.617c0 .543.066 1.07.192 1.575a6.303 6.303 0 0 1-4.434-6.019zm4.242 1.449a28.674 28.674 0 0 1-2.42-4.949h2.42zm.2.32V50.1H19.9v9.8h-.702a28.915 28.915 0 0 1-3.543-4.53zM20.1 59.9v-9.8h2.518a20.2 20.2 0 0 0 7.282 7.282V59.9zm0-10h2.403a19.966 19.966 0 0 1-2.403-7.053zm9.8 7.25a20 20 0 0 1-7.05-7.05h7.05zm.2.117V50.1h9.8v9.8a19.807 19.807 0 0 1-9.8-2.633zm10 2.633v-9.8h9.8v7.167a19.807 19.807 0 0 1-9.8 2.633zm10-2.75V50.1h7.05a20 20 0 0 1-7.05 7.05zm0 .232a20.2 20.2 0 0 0 7.282-7.282H59.9v9.8h-9.8zm7.397-7.482H59.9v-7.053a19.966 19.966 0 0 1-2.403 7.053zm2.603 10v-9.8h4.244v5.28a28.91 28.91 0 0 1-3.538 4.52zm4.444-4.841V50.1h2.426a28.67 28.67 0 0 1-2.426 4.959zm0 .378a28.881 28.881 0 0 0 2.64-5.337h1.607v3.5a6.303 6.303 0 0 1-4.44 6.021 6.514 6.514 0 0 0 .193-1.577zm2.713-5.537h1.534v-6.477a28.817 28.817 0 0 1-1.534 6.477zm-56.044 0h1.535a28.807 28.807 0 0 1-1.535-6.477zm57.578-20v-3.5a6.303 6.303 0 0 0-4.44-6.02c.126.504.193 1.031.193 1.575v2.608a28.877 28.877 0 0 1 2.639 5.337zm-1.534.2h1.534v6.477a28.815 28.815 0 0 0-1.534-6.477zm-.288-.2a28.673 28.673 0 0 0-2.425-4.958V29.9zm-2.625 0v-5.279a28.911 28.911 0 0 0-3.538-4.521H60.1v9.8zm-4.444 0v-9.8h-9.8v2.518a20.2 20.2 0 0 1 7.282 7.282zm-2.403.2H59.9v7.053a19.966 19.966 0 0 0-2.403-7.053zm-.347-.2a20 20 0 0 0-7.05-7.05v7.05zm-7.25 0v-7.167a19.807 19.807 0 0 0-9.8-2.633v9.8zm-10 0v-9.8a19.807 19.807 0 0 0-9.8 2.633V29.9zm-10 0v-7.05a20 20 0 0 0-7.05 7.05zm-7.282 0a20.2 20.2 0 0 1 7.282-7.282V20.1h-9.8v9.8zm-2.518.2h2.403a19.966 19.966 0 0 0-2.403 7.053zm-.2-.2v-9.8h-.701a28.915 28.915 0 0 0-3.544 4.53v5.27zm-4.445 0v-4.948a28.665 28.665 0 0 0-2.42 4.948zm-2.634 0a28.874 28.874 0 0 1 2.634-5.327v-2.618c0-.543.066-1.07.191-1.574a6.303 6.303 0 0 0-4.433 6.019v3.5zm-1.608.2h1.535a28.81 28.81 0 0 0-1.535 6.477zM36.58 68.79H30.1v-1.536c2.06.749 4.23 1.27 6.479 1.535zm3.321-.001a28.726 28.726 0 0 1-9.8-1.748v-2.497h9.8zm-10-1.822v-2.423h-4.953a28.678 28.678 0 0 0 4.953 2.423zm10-2.623h-9.8V60.1h9.8zm-10 0V60.1h-9.8v.702a28.915 28.915 0 0 0 4.526 3.542H29.9zm7.254-4.444H30.1v-2.403a19.966 19.966 0 0 0 7.053 2.403zm0-39.8a19.966 19.966 0 0 0-7.054 2.403V20.1h7.053zm2.746-.2h-9.8v-4.245h9.8zm-10 0v-4.245h-5.27a28.907 28.907 0 0 0-4.53 3.544v.701zm10-4.445h-9.8V12.96a28.729 28.729 0 0 1 9.8-1.749zm-10 0v-2.421a28.668 28.668 0 0 0-4.95 2.42h4.95zm6.679-4.244a28.81 28.81 0 0 0-6.479 1.536V11.21h6.479zm-6.679 1.61v-1.61h-3.5a6.303 6.303 0 0 0-6.02 4.436 6.514 6.514 0 0 1 1.575-.192h2.617A28.877 28.877 0 0 1 29.9 12.82zm0 55.968V67.18a28.878 28.878 0 0 1-5.331-2.636h-2.614c-.543 0-1.07-.067-1.575-.192a6.303 6.303 0 0 0 6.02 4.437zm20.2 0h3.5a6.303 6.303 0 0 0 6.02-4.438 6.513 6.513 0 0 1-1.576.193h-2.608a28.879 28.879 0 0 1-5.336 2.638zm-.2-1.534v1.534h-6.475a28.808 28.808 0 0 0 6.475-1.534zm.2-.287a28.671 28.671 0 0 0 4.957-2.424H50.1v2.424zm-.2-2.424v2.499a28.728 28.728 0 0 1-9.8 1.746v-4.245zm.2-.2h5.278a28.914 28.914 0 0 0 4.522-3.538V60.1h-9.8zm-.2-4.244v4.244h-9.8V60.1zm0-2.603V59.9h-7.053a19.966 19.966 0 0 0 7.053-2.403zm0-37.397v2.403a19.966 19.966 0 0 0-7.053-2.403H49.9zm.2-.2h9.8v-.705a28.911 28.911 0 0 0-4.526-3.54H50.1V19.9zm-.2-4.245V19.9h-9.8v-4.245h9.8zm.2-.2h4.954a28.676 28.676 0 0 0-4.954-2.423zm-.2-2.497v2.497h-9.8V11.21a28.75 28.75 0 0 1 9.8 1.747zm.2-.14a28.877 28.877 0 0 1 5.332 2.637h2.612c.543 0 1.071.066 1.576.192a6.303 6.303 0 0 0-6.02-4.436h-3.5zm-.2-1.607v1.534a28.812 28.812 0 0 0-6.475-1.534H49.9zm-34.245 44.53v2.303c0 .567.075 1.117.215 1.64a6.309 6.309 0 0 0 1.643.216h1.41a29.118 29.118 0 0 1-3.268-4.16zm3.458 4.359h-1.6a6.513 6.513 0 0 1-1.578-.193 6.315 6.315 0 0 0 4.157 4.157 6.517 6.517 0 0 1-.192-1.575v-1.602a29.35 29.35 0 0 1-.787-.787zm.787.509a29.029 29.029 0 0 1-.508-.509h.508zm.2.469v1.411c0 .567.075 1.117.215 1.64.523.14 1.073.215 1.64.215h2.3a29.118 29.118 0 0 1-4.155-3.266zm35.649 3.266h2.295c.567 0 1.117-.075 1.64-.216a6.286 6.286 0 0 0 .216-1.639v-1.407a29.116 29.116 0 0 1-4.151 3.262zm4.35-3.454v1.598a6.53 6.53 0 0 1-.192 1.574 6.314 6.314 0 0 0 4.155-4.154 6.509 6.509 0 0 1-1.572.191h-1.6a29.08 29.08 0 0 1-.791.791zm.982-.991h1.41c.565 0 1.114-.075 1.636-.215a6.31 6.31 0 0 0 .216-1.641V55.75a29.113 29.113 0 0 1-3.262 4.15zm3.262-35.65v-2.295c0-.568-.075-1.117-.216-1.64a6.307 6.307 0 0 0-1.637-.215h-1.41a29.112 29.112 0 0 1 3.263 4.15zM60.89 19.9h1.6c.542 0 1.069.066 1.573.192a6.314 6.314 0 0 0-4.156-4.157 6.51 6.51 0 0 1 .192 1.576v1.598c.269.259.532.522.79.791zm-.991-.981V17.51a6.31 6.31 0 0 0-.216-1.64 6.308 6.308 0 0 0-1.64-.216h-2.299a29.108 29.108 0 0 1 4.155 3.264zm-35.641-3.264h-2.304a6.31 6.31 0 0 0-1.639.215 6.306 6.306 0 0 0-.216 1.641v1.412a29.115 29.115 0 0 1 4.159-3.268zM19.9 19.113v-1.602c0-.543.067-1.072.193-1.577a6.315 6.315 0 0 0-4.159 4.16 6.518 6.518 0 0 1 1.58-.194h1.6c.257-.267.519-.53.786-.787zm-.508.787h.508v-.508c-.171.167-.34.337-.508.508zm-.47.2h-1.409a6.31 6.31 0 0 0-1.643.216 6.308 6.308 0 0 0-.215 1.639v2.305a29.107 29.107 0 0 1 3.268-4.16zm41.178-.712c.173.168.344.34.512.512H60.1zm.513 40.712c-.169.173-.34.344-.513.513V60.1z' fill='%2394a3b8' fill-rule='evenodd'/%3e%3crect fill='black' height='80' rx='16' width='80'/%3e%3cpath d='M43.47 19.752c1.24 5.14.821 9.663-.937 10.1-1.758.438-4.19-3.375-5.43-8.517-1.241-5.14-.822-9.663.936-10.1 1.759-.438 4.19 3.376 5.43 8.517zm20.49 4.42c-2.749-2.913-8.216-2.123-12.212 1.763s-5.008 9.398-2.26 12.31 8.215 2.123 12.211-1.763 5.008-9.398 2.26-12.31zM42.102 68.769c1.758-.438 2.116-5.216.8-10.673-1.318-5.456-3.81-9.525-5.57-9.088-1.757.438-2.115 5.216-.798 10.672 1.317 5.457 3.81 9.526 5.568 9.089zM24.18 26.838c5.073 1.496 8.78 4.12 8.28 5.862-.5 1.741-5.019 1.94-10.091.444-5.073-1.496-8.78-4.12-8.28-5.861.501-1.742 5.019-1.941 10.092-.445zm32.924 19.664c5.384 1.588 9.343 4.286 8.843 6.028-.5 1.741-5.27 1.866-10.654.278-5.385-1.588-9.343-4.286-8.843-6.028.5-1.741 5.27-1.866 10.654-.278zm-27.216-3.654c-1.258-1.304-5.384.594-9.215 4.24-3.832 3.644-5.919 7.656-4.66 8.96 1.257 1.304 5.383-.594 9.215-4.239s5.918-7.657 4.66-8.96z' fill='%23fe5'/%3e%3c/svg%3e",lt=`.pera-wallet-download-qr-code-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 26px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

@media (max-width: 767px) {
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 51px;
  }
}`;Me(lt);const wt=document.createElement("template");wt.innerHTML=`
  <div id="pera-wallet-download-qr-code-wrapper" class="pera-wallet-download-qr-code-wrapper"></div>  
`;class be extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=lt,this.shadowRoot.append(wt.content.cloneNode(!0),V)}}connectedCallback(){var V;const G=new Fe.default({width:205,height:205,type:"svg",data:re.PERA_DOWNLOAD_URL,image:ot,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:10},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),$=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-download-qr-code-wrapper");$&&G.append($)}}var ce="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 19L15.5 12L8.5 5' stroke='%233C3C49' stroke-width='2'/%3e%3c/svg%3e",Ue=`.pera-wallet-connect-modal-desktop-mode {
  display: grid;
  grid-template-columns: 205px auto;
  gap: 70px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item--web-wallet {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 434px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-accordion-item .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable .pera-wallet-connect-modal-desktop-mode__download-pera-description {
  margin-top: 50px;
}
.pera-wallet-connect-modal-desktop-mode--default .pera-wallet-connect-modal-desktop-mode__download-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__default-view {
  display: none;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view {
  display: block;
}
.pera-wallet-connect-modal-desktop-mode--download .pera-wallet-connect-modal-desktop-mode__download-view .pera-wallet-connect-modal-download-pera-view__footer a {
  display: flex;
  cursor: pointer;
}
.pera-wallet-connect-modal-desktop-mode--select-account {
  width: 100%;
  height: 100%;
}
.pera-wallet-connect-modal-desktop-mode--select-account.pera-wallet-connect-modal-desktop-mode--default {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: unset;
}
.pera-wallet-connect-modal-desktop-mode--select-account .pera-wallet-accordion {
  overflow: hidden;
}
.pera-wallet-connect-modal-desktop-mode--select-account #pera-wallet-iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  border-radius: 16px;
}

.pera-wallet-connect-modal-desktop-mode__accordion__description,
.pera-wallet-connect-modal-desktop-mode__connect-button-wrapper {
  padding: 0 40px 20px 64px;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 88px);
  padding: 48px 52px 40px;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06);
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__description {
  margin: 0 auto 32px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #6a6a81;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 0;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1;
  border: none;
  outline: none;
  cursor: pointer;
}

.pera-wallet-connect-modal-desktop-mode__web-wallet-iframe {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.pera-wallet-connect-modal-desktop-mode__connect-button {
  display: block;
  width: 100%;
  height: 48px;
  border: unset;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 13px;
}

.pera-wallet-connect-qr-code-wrapper {
  width: fit-content;
  margin: 24px auto 0;
  padding: 10px;
  box-shadow: 0px 20px 60px rgba(26, 35, 91, 0.15), 0px 4px 12px rgba(26, 35, 91, 0.05), 0px 1px 4px rgba(26, 35, 91, 0.06);
  border-radius: 24px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-description {
  color: #838aa6;
  text-align: center;
  margin: 32px 0 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
}

.pera-wallet-connect-modal-desktop-mode__download-pera-button {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding: 0;
  color: #6b46fe;
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view__back-button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  padding: 12px 24px;
  color: #3c3c49;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border: unset;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.1px;
  cursor: pointer;
}

.pera-wallet-connect-modal-download-pera-view {
  padding: 32px 37px 28px;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 24px;
}

.pera-wallet-connect-modal-download-pera-view__title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.13px;
}

.pera-wallet-connect-modal-download-pera-view__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 53px;
}

.pera-wallet-connect-modal-download-pera-view__footer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: -0.04px;
  cursor: pointer;
}

#pera-wallet-iframe {
  width: 285px;
  height: 376px;
  margin: 0 auto;
  border: none;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-desktop-mode {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pera-wallet-connect-qr-code-wrapper {
    margin-top: 16px;
  }
  .pera-wallet-connect-modal-download-pera-view {
    padding: 24px;
  }
  .pera-wallet-download-qr-code-wrapper {
    margin-top: 32px;
  }
  .pera-wallet-connect-modal-download-pera-view__footer {
    margin-top: 40px;
  }
}`;Me(Ue);var Ke=`.pera-wallet-accordion-item {
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.02), 0px 4px 12px rgba(0, 0, 0, 0.03);
}
.pera-wallet-accordion-item:not(:last-of-type) {
  margin-bottom: 20px;
}
.pera-wallet-accordion-item:not(:last-of-type) .pera-wallet-accordion-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pera-wallet-accordion-item .pera-wallet-accordion-item__content {
  height: 0;
  overflow: hidden;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.04px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-toggle {
  padding: 26px 24px 12px;
  border-radius: 24px 24px 0 0;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-item__content {
  height: 364px;
  border-radius: 0 0 24px 24px;
  transition: height ease-in 0.2s;
}
.pera-wallet-accordion-item--active .pera-wallet-accordion-icon {
  transform: rotate(90deg);
}

.pera-wallet-accordion-toggle {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  color: #2c3559;
  background-color: #ffffff;
  border: none;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 600;
  transition: all ease-in 0.2s;
}
.pera-wallet-accordion-toggle__text, .pera-wallet-accordion-toggle__content-with-label__text {
  color: #6a6a81;
}

.pera-wallet-accordion-icon {
  transition: all ease-in 0.2s;
}

.pera-wallet-accordion-toggle__bold-color {
  color: #3c3c49;
  font-weight: 600;
}

.pera-wallet-accordion-toggle__content-with-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pera-wallet-accordion-toggle__label {
  padding: 4px 9px;
  color: #00b19e;
  background: rgba(0, 177, 158, 0.08);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01px;
}

.pera-wallet-accordion-toggle__button {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 767px) {
  .pera-wallet-accordion-toggle {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.1px;
  }
}`;Me(Ke);const tt=document.createElement("template"),ht=document.createElement("style"),pt=document.createElement("style");ht.textContent=Ue,pt.textContent=Ke;const Ft=`
  <div id="pera-wallet-connect-modal-desktop-mode" class="pera-wallet-connect-modal-desktop-mode pera-wallet-connect-modal-desktop-mode--default">
      <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

      <div class="pera-wallet-connect-modal-desktop-mode__default-view">
        <div class="pera-wallet-accordion-item pera-wallet-accordion-item--active pera-wallet-accordion-item--web-wallet">
          <a class="pera-wallet-accordion-toggle">
            <button class="pera-wallet-accordion-toggle__button"></button>

            <img src="${ce}" class="pera-wallet-accordion-icon" />

            <div class="pera-wallet-accordion-toggle__content-with-label">
              <div class="pera-wallet-accordion-toggle__content-with-label__text">
                Connect With

                <span class="pera-wallet-accordion-toggle__bold-color">
                  Pera Web
                </span>
              </div>

              <span id="pera-web-new-label" class="pera-wallet-accordion-toggle__label">NEW</span>
            </div>
          </a>

          <div class="pera-wallet-accordion-item__content">
          ${re.detectBrowser()==="Chrome"?'<div class="pera-wallet-connect-modal-desktop-mode__web-wallet-iframe"></div>':`<div class="pera-wallet-connect-modal-desktop-mode__web-wallet">
          <div>
            <div
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__logo-wrapper">
              <img src="data:image/svg+xml,%3csvg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='3.5' y='7.5' width='36' height='26' rx='5.5' stroke='%236B46FE' stroke-width='3'/%3e%3cpath d='M22.4973 14.5237C22.8556 16.041 22.7344 17.3757 22.2267 17.5048C21.719 17.6339 21.0169 16.5085 20.6586 14.9912C20.3003 13.4739 20.4214 12.1392 20.9292 12.0101C21.4369 11.881 22.1389 13.0064 22.4973 14.5237Z' fill='%236B46FE'/%3e%3cpath d='M28.4139 15.8282C27.6204 14.9686 26.0417 15.2016 24.8877 16.3486C23.7338 17.4956 23.4417 19.1222 24.2352 19.9818C25.0287 20.8414 26.6074 20.6084 27.7613 19.4614C28.9153 18.3144 29.2074 16.6878 28.4139 15.8282Z' fill='%236B46FE'/%3e%3cpath d='M22.1027 28.9905C22.6104 28.8614 22.7137 27.4512 22.3334 25.8407C21.9531 24.2303 21.2332 23.0294 20.7254 23.1585C20.2177 23.2876 20.1144 24.6978 20.4947 26.3083C20.875 27.9187 21.5949 29.1196 22.1027 28.9905Z' fill='%236B46FE'/%3e%3cpath d='M16.9269 16.6152C18.3917 17.0567 19.4621 17.8312 19.3176 18.3452C19.1731 18.8591 17.8686 18.9179 16.4037 18.4764C14.9389 18.0349 13.8686 17.2603 14.0131 16.7464C14.1575 16.2324 15.4621 16.1737 16.9269 16.6152Z' fill='%236B46FE'/%3e%3cpath d='M26.4342 22.4188C27.9889 22.8874 29.1322 23.6839 28.9877 24.1979C28.8432 24.7118 27.4657 24.7486 25.911 24.28C24.3563 23.8114 23.213 23.0148 23.3575 22.5009C23.502 21.9869 24.8795 21.9502 26.4342 22.4188Z' fill='%236B46FE'/%3e%3cpath d='M18.5752 21.3404C18.2119 20.9555 17.0205 21.5157 15.914 22.5915C14.8075 23.6673 14.2049 24.8514 14.5682 25.2363C14.9314 25.6211 16.1229 25.061 17.2294 23.9852C18.3359 22.9094 18.9384 21.7253 18.5752 21.3404Z' fill='%236B46FE'/%3e%3cpath d='M16 39C21 39.0001 23.5 39.0001 28 39' stroke='%236B46FE' stroke-width='3' stroke-linecap='round'/%3e%3c/svg%3e" />
            </div>

            <p
              class="pera-wallet-connect-modal-desktop-mode__web-wallet__description">
              Connect with Pera Web to continue
            </p>
          </div>

          <button
            id="pera-wallet-connect-web-wallet-launch-button"
            class="pera-wallet-connect-modal-desktop-mode__web-wallet__launch-button">
            Launch Pera Web

            <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0892 9.41009C13.4147 9.73553 13.4147 10.2632 13.0892 10.5886L8.08924 15.5886C7.7638 15.914 7.23616 15.914 6.91072 15.5886C6.58529 15.2632 6.58529 14.7355 6.91072 14.4101L11.3215 9.99935L6.91073 5.5886C6.58529 5.26317 6.58529 4.73553 6.91073 4.41009C7.23616 4.08466 7.7638 4.08466 8.08924 4.41009L13.0892 9.41009Z' fill='white'/%3e%3c/svg%3e" />
          </button>
        </div>`}
          </div>
        </div>

        <div class="pera-wallet-accordion-item">
          <a class="pera-wallet-accordion-toggle">
          <button class="pera-wallet-accordion-toggle__button"></button>

            <img src="${ce}" class="pera-wallet-accordion-icon" />

            <div class="pera-wallet-accordion-toggle__text">
              Connect with

              <span class="pera-wallet-accordion-toggle__bold-color">
                Pera Mobile
              </span>
            </div>
          </a>

          <div class="pera-wallet-accordion-item__content">
            <div id="pera-wallet-connect-modal-connect-qr-code" class="pera-wallet-connect-qr-code-wrapper"></div>

            <div>
              <p
                class="pera-wallet-connect-modal-desktop-mode__download-pera-description">
                  Don\u2019t have Pera Wallet app?
              </p>

              <button
                id="pera-wallet-connect-modal-desktop-mode-download-pera-button"
                class="pera-wallet-connect-modal-desktop-mode__download-pera-button">
                <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='2' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='2' y='9.33203' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3crect x='9.33325' y='2' width='4.66667' height='4.66667' rx='1.2' stroke='%236B46FE' stroke-width='1.5'/%3e%3cpath d='M8.70581 9.5293H10.9411' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 12.668L14.6667 12.668' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M13.1765 14L14.6667 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M11.686 14L13.1762 14' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M12.4314 9.5293H14.6667' stroke='%236B46FE' stroke-width='1.66667' stroke-linejoin='round'/%3e%3cpath d='M8.70581 10.2754H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.7656H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 12.5117H11.6862' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 13.2539H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M8.70581 14H10.196' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3cpath d='M10.196 11.0195H12.4313' stroke='%236B46FE' stroke-width='1.25' stroke-linejoin='round'/%3e%3c/svg%3e" alt="QR Icon" />

                Download Pera Wallet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="pera-wallet-connect-modal-desktop-mode__download-view">
        <button
          id="pera-wallet-connect-modal-download-pera-view-back-button"
          class="pera-wallet-connect-modal-download-pera-view__back-button">
          <img
            src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.7071 6.29387C11.0976 6.68439 11.0976 7.31756 10.7071 7.70808L7.41421 11.001L19 11.001C19.5523 11.001 20 11.4487 20 12.001C20 12.5533 19.5523 13.001 19 13.001L7.41421 13.001L10.7071 16.2939C11.0976 16.6844 11.0976 17.3176 10.7071 17.7081C10.3166 18.0986 9.68342 18.0986 9.29289 17.7081L4.29289 12.7081C4.10536 12.5205 4 12.2662 4 12.001C4 11.7358 4.10536 11.4814 4.29289 11.2939L9.29289 6.29387C9.68342 5.90335 10.3166 5.90335 10.7071 6.29387Z' fill='%233C3C49'/%3e%3c/svg%3e"
            alt="Back Arrow"
          />

          Back
        </button>

        <div class="pera-wallet-connect-modal-download-pera-view">
          <h1 class="pera-wallet-connect-modal-download-pera-view__title">
            Download Pera Wallet
          </h1>

          <pera-wallet-download-qr-code></pera-wallet-download-qr-code>

          <div class="pera-wallet-connect-modal-download-pera-view__footer">
            <a
              href="https://apps.apple.com/us/app/algorand-wallet/id1459898525"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M25.6308 20.3011C25.6416 19.4664 25.8633 18.6481 26.2753 17.9221C26.6873 17.1962 27.2763 16.5863 27.9873 16.1491C27.5356 15.5039 26.9397 14.973 26.2469 14.5984C25.554 14.2239 24.7834 14.016 23.9963 13.9914C22.317 13.8151 20.6891 14.9962 19.8333 14.9962C18.9611 14.9962 17.6436 14.0089 16.2249 14.0381C15.3072 14.0677 14.4128 14.3346 13.6289 14.8126C12.8451 15.2906 12.1984 15.9636 11.7519 16.7659C9.81789 20.1144 11.2605 25.0354 13.1132 27.742C14.0401 29.0674 15.1233 30.5478 16.5408 30.4953C17.9278 30.4378 18.4458 29.6108 20.1202 29.6108C21.779 29.6108 22.265 30.4953 23.7112 30.4619C25.1995 30.4378 26.1372 29.1307 27.0316 27.7928C27.6976 26.8484 28.2101 25.8047 28.55 24.7003C27.6853 24.3345 26.9474 23.7224 26.4283 22.9401C25.9092 22.1578 25.6318 21.2399 25.6308 20.3011ZM22.8993 12.2113C23.7108 11.2371 24.1106 9.98492 24.0138 8.7207C22.7739 8.85092 21.6287 9.44347 20.8062 10.3803C20.404 10.838 20.096 11.3704 19.8998 11.9472C19.7035 12.5239 19.6229 13.1337 19.6625 13.7417C20.2826 13.7481 20.8961 13.6137 21.4568 13.3486C22.0175 13.0835 22.5107 12.6946 22.8993 12.2113Z' fill='white'/%3e%3c/svg%3e" alt="App Store icon" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.algorand.android"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='40' height='40' rx='12' fill='black'/%3e%3cpath d='M12.41 9.7719C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922V10.8671V29.1294V29.0091C11.9683 29.5202 12.1099 29.9149 12.3497 30.169L12.4109 30.2277V30.228C12.6051 30.4035 12.854 30.4966 13.1393 30.4963C13.418 30.4963 13.7316 30.4073 14.0626 30.2194L26.0264 23.4107L30.1359 21.0717C30.6578 20.7748 30.9508 20.3917 30.9998 20.0014V19.9998C30.9508 19.6087 30.6578 19.2259 30.1359 18.9289L26.0261 16.5902L14.0627 9.78154C13.731 9.59325 13.4171 9.50391 13.1376 9.50391C12.8527 9.50391 12.6041 9.59677 12.41 9.7719H12.41Z' fill='%2300C1FF'/%3e%3cpath d='M12.411 30.2285L12.3497 30.1698C12.1099 29.9157 11.9683 29.5209 11.9683 29.0098V29.1301V10.8724V10.993C11.9683 10.4396 12.1334 10.0226 12.41 9.77268L22.622 20.0009L12.411 30.2285Z' fill='url(%23paint0_linear_173_14441)'/%3e%3cpath d='M26.0256 23.4102L22.6211 19.9996L26.0253 16.5896L30.1351 18.9283C30.657 19.2253 30.95 19.6081 30.9989 19.9993V20.0008C30.95 20.3911 30.657 20.7742 30.1351 21.0712L26.0256 23.4101' fill='url(%23paint1_linear_173_14441)'/%3e%3cpath d='M13.1374 30.4961C12.8522 30.4964 12.6033 30.4032 12.4092 30.2277V30.2275L22.6202 19.9999L26.0246 23.4104L14.0608 30.2191C13.7298 30.4071 13.4162 30.4961 13.1374 30.4961Z' fill='url(%23paint2_linear_173_14441)'/%3e%3cpath d='M22.6212 20.002L12.4092 9.7737C12.6033 9.59858 12.8519 9.50571 13.1368 9.50571C13.4163 9.50571 13.7302 9.59501 14.0618 9.78335L26.0253 16.592L22.6212 20.002' fill='url(%23paint3_linear_173_14441)'/%3e%3cpath d='M13.1394 30.6172C12.8542 30.6172 12.6049 30.524 12.4108 30.3486L12.4105 30.3489C12.4097 30.3481 12.4088 30.3473 12.4079 30.3466L12.3548 30.2947C12.3531 30.2931 12.3516 30.2912 12.3496 30.2893L12.4108 30.2279C12.6049 30.4034 12.8538 30.4966 13.1392 30.4962C13.4179 30.4962 13.7315 30.4073 14.0625 30.2193L26.0263 23.4106L26.1029 23.4874L26.0253 23.5316L14.0625 30.3398C13.7608 30.5111 13.4739 30.6004 13.2147 30.6153C13.1896 30.6165 13.1645 30.6171 13.1394 30.6172' fill='url(%23paint4_linear_173_14441)'/%3e%3cpath d='M12.3497 30.2891C12.1099 30.0349 11.9683 29.6406 11.9683 29.1292V29.0089C11.9683 29.52 12.1099 29.9146 12.3497 30.1688L12.4109 30.2275L12.3497 30.2891Z' fill='url(%23paint5_linear_173_14441)'/%3e%3cpath d='M26.1025 23.4882L26.0259 23.4114L30.1349 21.0727C30.6568 20.7758 30.9498 20.3927 30.9987 20.0025C30.9987 20.1457 30.9668 20.2889 30.9035 20.4282C30.7756 20.7091 30.5194 20.9744 30.135 21.1934L26.1025 23.4883' fill='url(%23paint6_linear_173_14441)'/%3e%3cpath d='M30.9991 20C30.9501 19.6089 30.6571 19.2261 30.1353 18.9291L26.0259 16.5907L26.1025 16.5139H26.1029L30.1353 18.8088C30.7106 19.1365 30.9987 19.5682 30.9991 20Z' fill='url(%23paint7_linear_173_14441)'/%3e%3cpath d='M11.9683 10.9922V10.8661C11.9683 10.8206 11.9695 10.7761 11.9718 10.7329V10.7309C11.9718 10.7303 11.9718 10.7297 11.972 10.729V10.7242C11.9969 10.284 12.1334 9.94066 12.3497 9.71139L12.4099 9.77198C12.1334 10.0219 11.9683 10.4388 11.9683 10.9922Z' fill='url(%23paint8_linear_173_14441)'/%3e%3cpath d='M26.026 16.5898L14.0625 9.78115C13.7308 9.59285 13.417 9.50355 13.1375 9.50355C12.8525 9.50355 12.6039 9.59642 12.4099 9.77154L12.3496 9.71091C12.3684 9.69096 12.388 9.67172 12.4082 9.65322C12.4089 9.65255 12.4099 9.65188 12.4105 9.65125C12.6031 9.47747 12.849 9.3846 13.1314 9.38293H13.1375C13.417 9.38293 13.7308 9.47227 14.0625 9.66064L26.1029 16.5128L26.1026 16.513L26.026 16.5898Z' fill='url(%23paint9_linear_173_14441)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_173_14441' x1='18.4943' y1='10.6794' x2='9.69389' y2='19.494' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2300A0FF'/%3e%3cstop offset='0.00657' stop-color='%2300A1FF'/%3e%3cstop offset='0.2601' stop-color='%2300BEFF'/%3e%3cstop offset='0.5122' stop-color='%2300D2FF'/%3e%3cstop offset='0.7604' stop-color='%2300DFFF'/%3e%3cstop offset='1' stop-color='%2300E3FF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_173_14441' x1='31.6348' y1='19.9407' x2='11.691' y2='19.9407' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE000'/%3e%3cstop offset='0.4087' stop-color='%23FFBD00'/%3e%3cstop offset='0.7754' stop-color='orange'/%3e%3cstop offset='1' stop-color='%23FF9C00'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_173_14441' x1='24.2172' y1='23.2425' x2='9.30414' y2='38.0705' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF3A44'/%3e%3cstop offset='1' stop-color='%23C31162'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_173_14441' x1='9.77725' y1='8.25731' x2='16.4237' y2='14.876' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2332A071'/%3e%3cstop offset='0.0685' stop-color='%232DA771'/%3e%3cstop offset='0.4762' stop-color='%2315CF74'/%3e%3cstop offset='0.8009' stop-color='%2306E775'/%3e%3cstop offset='1' stop-color='%2300F076'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_173_14441' x1='24.2114' y1='25.6084' x2='12.2683' y2='37.5709' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23CC2E36'/%3e%3cstop offset='1' stop-color='%239C0E4E'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_173_14441' x1='13.3285' y1='10.6804' x2='5.57625' y2='18.4453' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23008DE0'/%3e%3cstop offset='0.00657' stop-color='%23008DE0'/%3e%3cstop offset='0.2601' stop-color='%2300A7E0'/%3e%3cstop offset='0.5122' stop-color='%2300B8E0'/%3e%3cstop offset='0.7604' stop-color='%2300C4E0'/%3e%3cstop offset='1' stop-color='%2300C7E0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_173_14441' x1='31.6346' y1='20.0018' x2='11.6929' y2='20.0018' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E0C500'/%3e%3cstop offset='0.4087' stop-color='%23E0A600'/%3e%3cstop offset='0.7754' stop-color='%23E09100'/%3e%3cstop offset='1' stop-color='%23E08900'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_173_14441' x1='31.6349' y1='20.0008' x2='11.6933' y2='20.0008' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FFE840'/%3e%3cstop offset='0.4087' stop-color='%23FFCE40'/%3e%3cstop offset='0.7754' stop-color='%23FFBC40'/%3e%3cstop offset='1' stop-color='%23FFB540'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_173_14441' x1='13.3201' y1='10.6927' x2='5.8533' y2='17.8475' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2340B8FF'/%3e%3cstop offset='0.00657' stop-color='%2340B9FF'/%3e%3cstop offset='0.2601' stop-color='%2340CEFF'/%3e%3cstop offset='0.5122' stop-color='%2340DDFF'/%3e%3cstop offset='0.7604' stop-color='%2340E7FF'/%3e%3cstop offset='1' stop-color='%2340EAFF'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_173_14441' x1='9.76302' y1='10.4182' x2='15.0961' y2='15.76' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%2365B895'/%3e%3cstop offset='0.0685' stop-color='%2362BD95'/%3e%3cstop offset='0.4762' stop-color='%2350DB97'/%3e%3cstop offset='0.8009' stop-color='%2344ED98'/%3e%3cstop offset='1' stop-color='%2340F498'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Play Store icon" />
            </a>

            <a
              class="pera-wallet-connect-modal-download-pera-view__footer__button"
              href="https://perawallet.s3-eu-west-3.amazonaws.com/android-releases/app-pera-prod-release-bitrise-signed.apk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 14V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V14' stroke='%232C3559' stroke-width='1.5'/%3e%3cpath d='M11.9998 16V3M11.9998 16L7.47803 11.4783M11.9998 16L16.5215 11.4783' stroke='%232C3559' stroke-width='1.5'/%3e%3c/svg%3e" alt="Download icon" />

              Download APK File
            </a>
          </div>
        </div>
      </div>
    </div>
  `;tt.innerHTML=Ft;class Ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.append(tt.content.cloneNode(!0),ht,pt),this.shadowRoot.addEventListener("click",V=>{this.handleAccordion(V)}))}connectedCallback(){var V;const G=this.getAttribute("should-display-new-badge"),$=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-web-new-label");if(G==="false"&&$?.setAttribute("style","display:none"),this.handleChangeView(),re.detectBrowser()==="Chrome"&&this.shadowRoot){const ne=this.shadowRoot.querySelector(".pera-wallet-connect-modal-desktop-mode__web-wallet-iframe");ne&&this.getAttribute("is-web-wallet-avaliable")==="true"&&window.onWebWalletConnect(ne)}}handleChangeView(){var V,G,$;const ne=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-desktop-mode-download-pera-button"),Q=(G=this.shadowRoot)===null||G===void 0?void 0:G.getElementById("pera-wallet-connect-modal-download-pera-view-back-button"),pe=($=this.shadowRoot)===null||$===void 0?void 0:$.getElementById("pera-wallet-connect-web-wallet-launch-button");ne&&ne.addEventListener("click",()=>{this.onClickDownload()}),Q&&Q.addEventListener("click",()=>{this.onClickBack()}),pe&&pe.addEventListener("click",()=>{this.webWalletConnect()}),this.renderQRCode(),this.checkWebWalletAvaliability()}webWalletConnect(){this.getAttribute("is-web-wallet-avaliable")==="true"&&window.onWebWalletConnect()}handleAccordion(V){var G,$;if(V.target instanceof Element){if(!V.target.classList.contains("pera-wallet-accordion-toggle__button"))return;if(this.shadowRoot&&((G=V.target.parentElement)===null||G===void 0?void 0:G.parentElement)){const ne=($=V.target.parentElement)===null||$===void 0?void 0:$.parentElement;if(!ne||ne.classList.contains("pera-wallet-accordion-item--active"))return;const Q=this.shadowRoot.querySelectorAll(".pera-wallet-accordion-item.pera-wallet-accordion-item--active");for(let pe=0;pe<Q.length;pe++)Q[pe].classList.remove("pera-wallet-accordion-item--active");ne.classList.toggle("pera-wallet-accordion-item--active")}}}renderQRCode(){var V;const G=this.getAttribute("uri"),$=this.getAttribute("is-web-wallet-avaliable")==="false"?250:205;if(G){const ne=new Fe.default({width:$,height:$,type:"svg",data:G,image:ot,dotsOptions:{color:"#000",type:"extra-rounded"},imageOptions:{crossOrigin:"anonymous",margin:10},cornersSquareOptions:{type:"extra-rounded"},cornersDotOptions:{type:"dot"}}),Q=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-connect-qr-code");Q&&ne.append(Q)}}onClickDownload(){if(this.shadowRoot){const V=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");V&&(V.classList.remove("pera-wallet-connect-modal-desktop-mode--default"),V.classList.add("pera-wallet-connect-modal-desktop-mode--download"))}}onClickBack(){if(this.shadowRoot){const V=this.shadowRoot.getElementById("pera-wallet-connect-modal-desktop-mode");V&&(V.classList.add("pera-wallet-connect-modal-desktop-mode--default"),V.classList.remove("pera-wallet-connect-modal-desktop-mode--download"))}}checkWebWalletAvaliability(){var V;if(this.getAttribute("is-web-wallet-avaliable")==="false"){const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.querySelector(".pera-wallet-connect-modal-desktop-mode__default-view");G?.classList.add("pera-wallet-connect-modal-desktop-mode__default-view--web-wallet-not-avaliable")}}}var nt=`.pera-wallet-connect-modal-touch-screen-mode {
  display: grid;
  grid-template-columns: 1fr;
  gap: 46px;
  padding: 4px;
}

.pera-wallet-connect-modal-touch-screen-mode--pending-message-view {
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button,
.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  display: block;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}

.pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button {
  margin-bottom: 32px;
  background-color: #6b46fe;
  color: #ffffff;
}

.pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button {
  margin-bottom: 20px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box {
  position: relative;
  margin-bottom: 32px;
  border-top: 1px solid #e6e8ee;
}

.pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text {
  position: absolute;
  top: -25px;
  right: calc(50% - 56px);
  width: 116px;
  color: #69708d;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04px;
  text-align: center;
}`;Me(nt);const ye=document.createElement("template");class it extends HTMLElement{constructor(){var V;if(super(),this.attachShadow({mode:"open"}),ye.innerHTML=`
  <div class="pera-wallet-connect-modal-touch-screen-mode">
    <pera-wallet-connect-modal-information-section></pera-wallet-connect-modal-information-section>

    <div>
      <a
        id="pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"
        class="pera-wallet-connect-modal-touch-screen-mode__launch-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Launch Pera Wallet
      </a>

      <div
        class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box">
        <p
          class="pera-wallet-connect-modal-touch-screen-mode__new-to-pera-box__text"
          >
          New to Pera?
        </p>
      </div>

      <a
        href="https://perawallet.app/download/"
        class="pera-wallet-connect-modal-touch-screen-mode__install-pera-wallet-button"
        rel="noopener noreferrer"
        target="_blank">
        Install Pera Wallet
      </a>
    </div>
  </div>
`,this.shadowRoot){const G=document.createElement("style");G.textContent=nt,this.shadowRoot.append(ye.content.cloneNode(!0),G);const $=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-touch-screen-mode-launch-pera-wallet-button"),ne=this.getAttribute("uri");$&&ne&&($.setAttribute("href",re.generatePeraWalletConnectDeepLink(ne)),$.addEventListener("click",()=>{this.onClickLaunch()}))}}onClickLaunch(){if(ye.innerHTML=`
    <div class="pera-wallet-connect-modal-touch-screen-mode pera-wallet-connect-modal-touch-screen-mode--pending-message-view">
      <pera-wallet-connect-modal-pending-message-section should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-connect-modal-pending-message-section>
    </div>
  `,this.shadowRoot){const V=document.createElement("style");V.textContent=nt,this.shadowRoot.innerHTML="",this.shadowRoot.append(ye.content.cloneNode(!0),V)}}}var dt=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}`;Me(dt);const rt=document.createElement("template"),ct=re.isMobile()?`${re.PERA_WALLET_MODAL_CLASSNAME} ${re.PERA_WALLET_MODAL_CLASSNAME}--mobile`:`${re.PERA_WALLET_MODAL_CLASSNAME} ${re.PERA_WALLET_MODAL_CLASSNAME}--desktop`;class at extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=dt,oe()&&re.isMobile()?(rt.innerHTML=`
        <div class="${ct}">
          <div class="pera-wallet-modal__body" part="body">
            <pera-wallet-modal-header modal-id="${re.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
      
            <pera-wallet-modal-touch-screen-mode uri="${this.getAttribute("uri")}" should-use-sound="${this.getAttribute("should-use-sound")}"></pera-wallet-modal-touch-screen-mode>
          </div>
        </div>
      `,this.shadowRoot.append(rt.content.cloneNode(!0),V)):(rt.innerHTML=`
          <div class="${ct}">
            <div class="pera-wallet-modal__body">
              <pera-wallet-modal-header modal-id="${re.PERA_WALLET_CONNECT_MODAL_ID}"></pera-wallet-modal-header/>
        
              <pera-wallet-modal-desktop-mode id="pera-wallet-modal-desktop-mode" uri="${this.getAttribute("uri")}" is-web-wallet-avaliable="${this.getAttribute("is-web-wallet-avaliable")}" should-display-new-badge="${this.getAttribute("should-display-new-badge")}"></pera-wallet-modal-desktop-mode>
            </div>
          </div>
        `,this.shadowRoot.append(rt.content.cloneNode(!0),V))}}}var kt=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-redirect-modal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  grid-template-rows: auto 48px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-redirect-modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pera-wallet-redirect-modal__content__title {
  margin: 20px 0 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.26px;
}

.pera-wallet-redirect-modal__content__description,
.pera-wallet-redirect-modal__content__install-pera-text {
  color: #3c3c49;
  max-width: 271px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__content__description {
  margin-bottom: 24px;
}

.pera-wallet-redirect-modal__content__install-pera-text__link {
  color: #6b46fe;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.09px;
  text-align: center;
}

.pera-wallet-redirect-modal__launch-pera-wallet-button {
  display: block;
  padding: 14px;
  color: #ffffff;
  background-color: #6b46fe;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
}`;Me(kt);const ve=document.createElement("template");ve.innerHTML=`
  <div class="pera-wallet-modal pera-wallet-modal--mobile">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${re.PERA_WALLET_REDIRECT_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-redirect-modal">
        <div class="pera-wallet-redirect-modal__content">
          <img src="data:image/svg+xml,%3csvg width='120' height='38' viewBox='0 0 120 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_38844_290434)'%3e%3cpath d='M103.739 28.6746H109.565' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3cpath d='M112.25 37H100.75C97.5731 37 95 34.2336 95 30.8182V9.18182C95 5.76636 97.5731 3 100.75 3H112.25C115.427 3 118 5.76636 118 9.18182V30.8182C118 34.2336 115.427 37 112.25 37Z' fill='%236B46FE' fill-opacity='0.1' stroke='%236B46FE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3e%3crect y='1' width='36' height='36' rx='7.76829' fill='%236B46FE' fill-opacity='0.1'/%3e%3cpath d='M19.6057 9.47351C20.1851 11.8819 19.9967 14.0022 19.1848 14.2093C18.373 14.4164 17.2452 12.6319 16.6658 10.2235C16.0864 7.81514 16.2748 5.69486 17.0867 5.48775C17.8985 5.28063 19.0263 7.06512 19.6057 9.47351Z' fill='%236B46FE'/%3e%3cpath d='M29.0775 11.5213C27.8045 10.1593 25.2795 10.5358 23.4378 12.3621C21.5961 14.1885 21.1352 16.7732 22.4083 18.1352C23.6814 19.4972 26.2064 19.1207 28.048 17.2943C29.8897 15.4679 30.3506 12.8832 29.0775 11.5213Z' fill='%236B46FE'/%3e%3cpath d='M19.0324 32.4518C19.8443 32.2446 20.0039 30.0045 19.3889 27.4483C18.774 24.8921 17.6173 22.9877 16.8055 23.1948C15.9937 23.402 15.834 25.6421 16.449 28.1983C17.064 30.7545 18.2206 32.6589 19.0324 32.4518Z' fill='%236B46FE'/%3e%3cpath d='M10.7016 12.818C13.0471 13.5132 14.7627 14.739 14.5336 15.5559C14.3045 16.3728 12.2175 16.4714 9.87199 15.7762C7.52653 15.0809 5.81087 13.8551 6.03996 13.0383C6.26906 12.2214 8.35615 12.1228 10.7016 12.818Z' fill='%236B46FE'/%3e%3cpath d='M25.9365 21.9967C28.4259 22.7346 30.2583 23.995 30.0292 24.8119C29.8001 25.6287 27.5963 25.6927 25.1069 24.9548C22.6174 24.2169 20.7851 22.9565 21.0141 22.1397C21.2432 21.3228 23.447 21.2588 25.9365 21.9967Z' fill='%236B46FE'/%3e%3cpath d='M13.3578 20.316C12.775 19.7063 10.8709 20.6007 9.10487 22.3139C7.33879 24.0271 6.37952 25.9102 6.96226 26.5199C7.54501 27.1297 9.4491 26.2352 11.2152 24.522C12.9813 22.8089 13.9405 20.9258 13.3578 20.316Z' fill='%236B46FE'/%3e%3cpath d='M70.2098 10L75.3049 15.0945L52 15.0945' stroke='%23D0CAE7' stroke-width='3'/%3e%3cpath d='M60.7902 29.5945L55.6951 24.5L79 24.5' stroke='%23D0CAE7' stroke-width='3'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_38844_290434'%3e%3crect width='120' height='38' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />

          <h1 class="pera-wallet-redirect-modal__content__title">
            Can't Launch Pera
          </h1>

          <p class="pera-wallet-redirect-modal__content__description">
            We couldn't redirect you to Pera Wallet automatically. Please try again.
          </p>

          <p class="pera-wallet-redirect-modal__content__install-pera-text">
            Don't have Pera Wallet installed yet?
            <br />
            
            <a
              id="pera-wallet-redirect-modal-download-pera-link"
              class="pera-wallet-redirect-modal__content__install-pera-text__link"
              href="https://perawallet.app/download/"
              rel="noopener noreferrer"
              target="_blank">
              Tap here to install.
            </a>
          </p>
        </div>

        <a
          id="pera-wallet-redirect-modal-launch-pera-link"
          class="pera-wallet-redirect-modal__launch-pera-wallet-button"
          rel="noopener noreferrer"
          target="_blank">
          Launch Pera Wallet
        </a>
      </div>
    </div>
  </div>
`;class ge extends HTMLElement{constructor(){var V,G;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const $=document.createElement("style");$.textContent=kt,this.shadowRoot.append(ve.content.cloneNode(!0),$);const ne=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-redirect-modal-download-pera-link");ne?.addEventListener("click",()=>{this.onClose()});const Q=(G=this.shadowRoot)===null||G===void 0?void 0:G.getElementById("pera-wallet-redirect-modal-launch-pera-link");Q?.addEventListener("click",()=>{this.onClose(),window.open(re.generatePeraWalletAppDeepLink(),"_blank")})}}connectedCallback(){const V=window.open(re.generatePeraWalletAppDeepLink(),"_blank");V&&!V.closed&&this.onClose()}onClose(){re.removeModalWrapperFromDOM(re.PERA_WALLET_REDIRECT_MODAL_ID)}}var K="data:image/svg+xml,%3csvg width='32' height='35' viewBox='0 0 32 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.2837 5.09271C19.0234 8.12325 18.7827 10.7913 17.7463 11.0519C16.7098 11.3126 15.27 9.06712 14.5304 6.03657C13.7908 3.00603 14.0315 0.337996 15.0679 0.0773547C16.1044 -0.183287 17.5441 2.06216 18.2837 5.09271Z' fill='%233C3C49'/%3e%3cpath d='M30.376 7.66915C28.7507 5.95537 25.5271 6.42918 23.1759 8.72745C20.8247 11.0257 20.2361 14.2781 21.8614 15.9919C23.4866 17.7057 26.7102 17.2319 29.0614 14.9336C31.4127 12.6354 32.0012 9.38294 30.376 7.66915Z' fill='%233C3C49'/%3e%3cpath d='M17.5511 34.0071C18.5876 33.7465 18.7914 30.9276 18.0064 27.711C17.2214 24.4945 15.7448 22.0982 14.7084 22.3589C13.6719 22.6195 13.4681 25.4383 14.2531 28.6549C15.0381 31.8715 16.5147 34.2677 17.5511 34.0071Z' fill='%233C3C49'/%3e%3cpath d='M6.91617 9.3015C9.9105 10.1763 12.1008 11.7187 11.8083 12.7466C11.5158 13.7745 8.85126 13.8986 5.85693 13.0239C2.8626 12.1491 0.672334 10.6067 0.964835 9.57881C1.25734 8.5509 3.92184 8.42674 6.91617 9.3015Z' fill='%233C3C49'/%3e%3cpath d='M26.3656 20.8508C29.5437 21.7793 31.883 23.3652 31.5905 24.3932C31.298 25.4211 28.4845 25.5017 25.3063 24.5732C22.1282 23.6448 19.7889 22.0588 20.0814 21.0309C20.3739 20.003 23.1874 19.9224 26.3656 20.8508Z' fill='%233C3C49'/%3e%3cpath d='M10.3069 18.7365C9.56299 17.9692 7.13209 19.0948 4.87736 21.2506C2.62264 23.4064 1.39791 25.776 2.14185 26.5432C2.8858 27.3105 5.3167 26.1849 7.57143 24.0291C9.82615 21.8733 11.0509 19.5037 10.3069 18.7365Z' fill='%233C3C49'/%3e%3c/svg%3e",Ve=`.pera-wallet-connect-modal-information-section {
  padding: 12px;
  padding-right: 0;
}
.pera-wallet-connect-modal-information-section--mobile {
  padding: 0;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 16px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__connect-pera-title {
  margin-bottom: 8px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.2px;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__title {
  margin-bottom: 24px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.09px;
  font-weight: 400;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  background-color: #f2f3f8;
}
.pera-wallet-connect-modal-information-section--mobile .pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
}
.pera-wallet-connect-modal-information-section * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pera-wallet-connect-modal-information-section__pera-icon {
  margin-bottom: 32px;
}

.pera-wallet-connect-modal-information-section__title {
  margin-bottom: 148px;
  color: #3c3c49;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
}

.pera-wallet-connect-modal-information-section__secondary-title {
  margin-bottom: 20px;
  color: #9d9dae;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.06px;
  text-transform: uppercase;
}

.pera-wallet-connect-modal-information-section__features-item {
  display: grid;
  align-items: center;
  grid-template-columns: 36px auto;
  gap: 16px;
}
.pera-wallet-connect-modal-information-section__features-item:not(:last-of-type) {
  margin-bottom: 24px;
}

.pera-wallet-connect-modal-information-section__features-item__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
}

.pera-wallet-connect-modal-information-section__features-item__description {
  color: #6a6a81;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.01px;
}

@media (max-width: 767px) {
  .pera-wallet-connect-modal-information-section--desktop {
    padding: 0;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__pera-icon {
    margin-bottom: 12px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.26px;
  }
  .pera-wallet-connect-modal-information-section--desktop .pera-wallet-connect-modal-information-section__features-item {
    display: none;
  }
  .pera-wallet-connect-modal-information-section__secondary-title {
    display: none;
  }
}`;Me(Ve);const M=document.createElement("template"),z=re.isMobile()?"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--mobile":"pera-wallet-connect-modal-information-section pera-wallet-connect-modal-information-section--desktop";M.innerHTML=`
  <section class="${z}">
    <img
      id="pera-wallet-connect-modal-information-section-pera-icon"
      src="${K}"
      class="pera-wallet-connect-modal-information-section__pera-icon"
      alt="Pera Wallet Logo"
    />

    <h1 id="pera-wallet-connect-modal-information-section-connect-pera-mobile" class="pera-wallet-connect-modal-information-section__connect-pera-title">
        Connect to Pera Wallet
    </h1>

    <h1 class="pera-wallet-connect-modal-information-section__title">
      Simply the best Algorand wallet.
    </h1>

    <h2 id="pera-wallet-connect-modal-information-section-secondary-title" class="pera-wallet-connect-modal-information-section__secondary-title">
      Features
    </h2>

    <ul>
      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 10.1378C2.5 10.8378 3.025 11.6461 3.66667 11.9294L9.325 14.4461C9.75833 14.6378 10.25 14.6378 10.675 14.4461L16.3333 11.9294C16.975 11.6461 17.5 10.8378 17.5 10.1378M2.5 14.3044C2.5 15.0794 2.95833 15.7794 3.66667 16.0961L9.325 18.6128C9.75833 18.8044 10.25 18.8044 10.675 18.6128L16.3333 16.0961C17.0417 15.7794 17.5 15.0794 17.5 14.3044M10.8417 3.4043L15.7583 5.58763C17.175 6.21263 17.175 7.24596 15.7583 7.87096L10.8417 10.0543C10.2833 10.3043 9.36668 10.3043 8.80835 10.0543L3.89168 7.87096C2.47502 7.24596 2.47502 6.21263 3.89168 5.58763L8.80835 3.4043C9.36668 3.1543 10.2833 3.1543 10.8417 3.4043Z' stroke='%239D9DAE' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e" alt="Layer Icon" />
        </div>
        
        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Connect to any Algorand dApp securely
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.58033 12.3109C9.28744 12.018 8.81257 12.018 8.51967 12.3109C8.22678 12.6038 8.22678 13.0787 8.51967 13.3716L9.58033 12.3109ZM10.66 14.4512L10.1297 14.9816C10.4226 15.2745 10.8974 15.2745 11.1903 14.9816L10.66 14.4512ZM15.4903 10.6816C15.7832 10.3887 15.7832 9.91381 15.4903 9.62092C15.1974 9.32803 14.7226 9.32803 14.4297 9.62092L15.4903 10.6816ZM19.84 8.09125C19.84 8.50546 20.1758 8.84125 20.59 8.84125C21.0042 8.84125 21.34 8.50546 21.34 8.09125H19.84ZM18.5 5.07125L18.2368 5.77355L18.2373 5.77375L18.5 5.07125ZM13.51 3.20125L13.7732 2.49894L13.7724 2.49866L13.51 3.20125ZM10.49 3.20125L10.2276 2.49865L10.2256 2.49941L10.49 3.20125ZM5.5 5.08125L5.76268 5.78375L5.76442 5.78309L5.5 5.08125ZM5.14 18.9612L4.69102 19.562L4.69135 19.5623L5.14 18.9612ZM9.44 22.1713L9.89069 21.5718L9.88866 21.5702L9.44 22.1713ZM14.58 22.1713L14.1313 21.5702L14.1293 21.5718L14.58 22.1713ZM18.88 18.9612L19.3287 19.5623L19.329 19.562L18.88 18.9612ZM21.36 8.09125C21.36 7.67704 21.0242 7.34125 20.61 7.34125C20.1958 7.34125 19.86 7.67704 19.86 8.09125H21.36ZM8.51967 13.3716L10.1297 14.9816L11.1903 13.9209L9.58033 12.3109L8.51967 13.3716ZM11.1903 14.9816L15.4903 10.6816L14.4297 9.62092L10.1297 13.9209L11.1903 14.9816ZM21.34 8.09125C21.34 7.29392 21.0398 6.50041 20.5931 5.85456C20.1463 5.20881 19.5097 4.64807 18.7627 4.36875L18.2373 5.77375C18.6403 5.92443 19.0487 6.25869 19.3595 6.70794C19.6702 7.15709 19.84 7.65858 19.84 8.09125H21.34ZM18.7632 4.36895L13.7732 2.49895L13.2468 3.90355L18.2368 5.77355L18.7632 4.36895ZM13.7724 2.49866C13.2479 2.30277 12.6051 2.21875 12 2.21875C11.3949 2.21875 10.7521 2.30277 10.2276 2.49866L10.7524 3.90384C11.0579 3.78973 11.5101 3.71875 12 3.71875C12.4899 3.71875 12.9421 3.78973 13.2476 3.90384L13.7724 2.49866ZM10.2256 2.49941L5.23558 4.37941L5.76442 5.78309L10.7544 3.90309L10.2256 2.49941ZM5.23733 4.37875C4.49043 4.65803 3.85398 5.2186 3.40741 5.86265C2.96095 6.50656 2.66 7.2978 2.66 8.09125H4.16C4.16 7.6647 4.32906 7.16594 4.64009 6.71735C4.95103 6.2689 5.35957 5.93447 5.76268 5.78375L5.23733 4.37875ZM2.66 8.09125V15.5212H4.16V8.09125H2.66ZM2.66 15.5212C2.66 16.2602 2.8989 17.059 3.24874 17.7545C3.59871 18.4503 4.09802 19.1188 4.69102 19.562L5.58899 18.3605C5.23198 18.0937 4.86629 17.6322 4.58877 17.0805C4.31111 16.5285 4.16 15.9623 4.16 15.5212H2.66ZM4.69135 19.5623L8.99135 22.7723L9.88866 21.5702L5.58866 18.3602L4.69135 19.5623ZM8.98932 22.7707C9.84721 23.4157 10.9462 23.7163 12.01 23.7163C13.0738 23.7163 14.1728 23.4157 15.0307 22.7707L14.1293 21.5718C13.5772 21.9868 12.8112 22.2163 12.01 22.2163C11.2088 22.2163 10.4428 21.9868 9.89068 21.5718L8.98932 22.7707ZM15.0287 22.7723L19.3287 19.5623L18.4313 18.3602L14.1313 21.5702L15.0287 22.7723ZM19.329 19.562C19.922 19.1188 20.4213 18.4503 20.7713 17.7545C21.1211 17.059 21.36 16.2602 21.36 15.5212H19.86C19.86 15.9623 19.7089 16.5285 19.4312 17.0805C19.1537 17.6322 18.788 18.0937 18.431 18.3605L19.329 19.562ZM21.36 15.5212V8.09125H19.86V15.5212H21.36Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Tick Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          Your private keys are safely stored locally
        </p>
      </li>

      <li class="pera-wallet-connect-modal-information-section__features-item">
        <div
          class="pera-wallet-connect-modal-information-section__features-item__icon-wrapper">
          <img src="data:image/svg+xml,%3csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.05 9.67014L17.3198 9.49894L18.05 9.67014ZM17.2333 13.1535L16.5031 12.9823L16.5029 12.9835L17.2333 13.1535ZM12.55 17.1285L12.6218 16.3818L12.6098 16.3809L12.55 17.1285ZM11.2 16.9035L11.376 16.1744L11.3737 16.1739L11.2 16.9035ZM9.8 16.5701L9.97372 15.8405L9.97324 15.8404L9.8 16.5701ZM6.06667 10.5451L6.79687 10.7163L6.79696 10.7159L6.06667 10.5451ZM6.88334 7.05347L6.15327 6.88169L6.15304 6.88267L6.88334 7.05347ZM7.5 5.22014L8.17303 5.55114L8.17523 5.54659L7.5 5.22014ZM12.9167 3.32014L12.744 4.05L12.7461 4.05049L12.9167 3.32014ZM14.3083 3.64514L14.4791 2.91485L14.4789 2.91479L14.3083 3.64514ZM10.5917 18.0285L10.359 17.3155L10.3572 17.3161L10.5917 18.0285ZM9.27501 18.4618L9.50516 19.1756L9.50947 19.1742L9.27501 18.4618ZM3.15001 15.3285L2.43654 15.5597L2.43672 15.5603L3.15001 15.3285ZM2.08334 12.0368L1.36953 12.267L1.36987 12.268L2.08334 12.0368ZM5.20834 5.91182L5.43849 6.62565L5.44281 6.62423L5.20834 5.91182ZM6.52501 5.47848L6.29831 4.76352L6.29055 4.76608L6.52501 5.47848ZM10.7177 7.35149C10.3162 7.24967 9.90818 7.49261 9.80635 7.89411C9.70453 8.29561 9.94746 8.70364 10.349 8.80546L10.7177 7.35149ZM14.3906 9.83046C14.7921 9.93229 15.2002 9.68935 15.302 9.28785C15.4038 8.88635 15.1609 8.47832 14.7594 8.37649L14.3906 9.83046ZM9.90211 10.5768C9.50076 10.4743 9.09238 10.7167 8.98996 11.118C8.88755 11.5194 9.12988 11.9278 9.53124 12.0302L9.90211 10.5768ZM11.9479 12.6469C12.3493 12.7493 12.7576 12.5069 12.8601 12.1056C12.9625 11.7042 12.7201 11.2958 12.3188 11.1934L11.9479 12.6469ZM17.3198 9.49894L16.5031 12.9823L17.9635 13.3247L18.7802 9.84133L17.3198 9.49894ZM16.5029 12.9835C16.168 14.4224 15.6979 15.2955 15.1165 15.793C14.5605 16.2688 13.7912 16.4944 12.6218 16.3819L12.4782 17.875C13.9088 18.0126 15.1312 17.7548 16.0918 16.9327C17.0271 16.1323 17.5986 14.8928 17.9638 13.3234L16.5029 12.9835ZM12.6098 16.3809C12.2388 16.3512 11.8281 16.2835 11.376 16.1744L11.024 17.6325C11.5386 17.7567 12.0279 17.8391 12.4902 17.8761L12.6098 16.3809ZM11.3737 16.1739L9.97372 15.8405L9.62629 17.2997L11.0263 17.6331L11.3737 16.1739ZM9.97324 15.8404C8.30732 15.4449 7.40652 14.876 6.96107 14.1588C6.51616 13.4425 6.40566 12.385 6.79687 10.7163L5.33647 10.3739C4.91101 12.1887 4.92968 13.7311 5.68685 14.9502C6.44349 16.1685 7.81769 16.8704 9.62676 17.2999L9.97324 15.8404ZM6.79696 10.7159L7.61363 7.22428L6.15304 6.88267L5.33638 10.3743L6.79696 10.7159ZM7.6134 7.22525C7.77277 6.54795 7.95691 5.99053 8.17301 5.55113L6.82699 4.88915C6.54309 5.46641 6.32724 6.14234 6.15327 6.88169L7.6134 7.22525ZM8.17523 5.54659C8.59604 4.67619 9.11898 4.20234 9.77488 3.97598C10.4657 3.73759 11.4133 3.73525 12.744 4.05L13.0893 2.59028C11.6367 2.2467 10.3635 2.18603 9.28554 2.55805C8.17269 2.94211 7.37896 3.74743 6.82478 4.89369L8.17523 5.54659ZM12.7461 4.05049L14.1378 4.37549L14.4789 2.91479L13.0872 2.58979L12.7461 4.05049ZM14.1375 4.37543C15.8111 4.76687 16.7126 5.33603 17.1575 6.05304C17.6023 6.77006 17.7112 7.82942 17.3198 9.49894L18.7802 9.84133C19.2054 8.02753 19.1893 6.48272 18.4321 5.26224C17.6749 4.04175 16.2972 3.34008 14.4791 2.91485L14.1375 4.37543ZM12.1294 16.5075C11.6911 16.8045 11.1123 17.0697 10.359 17.3155L10.8243 18.7415C11.6544 18.4706 12.3756 18.1525 12.9706 17.7494L12.1294 16.5075ZM10.3572 17.3161L9.04055 17.7494L9.50947 19.1742L10.8261 18.7409L10.3572 17.3161ZM9.04486 17.748C7.46037 18.2589 6.43607 18.2362 5.71663 17.8681C4.99693 17.4999 4.37829 16.6816 3.8633 15.0967L2.43672 15.5603C2.99673 17.2837 3.78642 18.5654 5.03339 19.2035C6.28062 19.8416 7.78131 19.7314 9.50516 19.1756L9.04486 17.748ZM3.86348 15.0973L2.79682 11.8056L1.36987 12.268L2.43654 15.5597L3.86348 15.0973ZM2.79716 11.8067C2.28607 10.2215 2.3068 9.19457 2.67362 8.4739C3.03983 7.75443 3.85506 7.13616 5.43849 6.62563L4.9782 5.198C3.25329 5.75414 1.97269 6.54421 1.33682 7.79348C0.701551 9.04157 0.813948 10.5438 1.36953 12.267L2.79716 11.8067ZM5.44281 6.62423L6.75947 6.19089L6.29055 4.76608L4.97388 5.19941L5.44281 6.62423ZM6.75169 6.19341C7.08205 6.08866 7.37424 6.00724 7.63942 5.95707L7.36058 4.48321C7.00909 4.54971 6.6513 4.65164 6.29833 4.76356L6.75169 6.19341ZM10.349 8.80546L14.3906 9.83046L14.7594 8.37649L10.7177 7.35149L10.349 8.80546ZM9.53124 12.0302L11.9479 12.6469L12.3188 11.1934L9.90211 10.5768L9.53124 12.0302Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Note Icon" />
        </div>

        <p
          class="pera-wallet-connect-modal-information-section__features-item__description">
          View NFTs, buy and swap crypto and more
        </p>
      </li>
    </ul>
  </section>
`;class Z extends HTMLElement{constructor(){var V,G,$;if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const ne=document.createElement("style");ne.textContent=Ve,this.shadowRoot.append(M.content.cloneNode(!0),ne),oe()&&re.isMobile()?(V=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-title"))===null||V===void 0||V.setAttribute("style","display: none;"):((G=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-pera-icon"))===null||G===void 0||G.setAttribute("src","data:image/svg+xml,%3csvg width='84' height='38' viewBox='0 0 84 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.806 8.62773C20.4416 11.2609 20.2268 13.5772 19.3262 13.8012C18.4256 14.0253 17.1803 12.0723 16.5448 9.43906C15.9092 6.80585 16.1241 4.48959 17.0246 4.26555C17.9252 4.04151 19.1705 5.99452 19.806 8.62773Z' fill='%233C3C49'/%3e%3cpath d='M30.3007 10.8917C28.8932 9.3999 26.0929 9.80424 24.0461 11.7948C21.9994 13.7853 21.4812 16.6082 22.8887 18.1C24.2962 19.5917 27.0964 19.1874 29.1432 17.1969C31.1899 15.2064 31.7082 12.3834 30.3007 10.8917Z' fill='%233C3C49'/%3e%3cpath d='M19.1061 33.734C20.0067 33.5099 20.1899 31.0627 19.5153 28.2678C18.8408 25.473 17.5639 23.3889 16.6633 23.613C15.7627 23.837 15.5795 26.2843 16.2541 29.0791C16.9286 31.874 18.2056 33.958 19.1061 33.734Z' fill='%233C3C49'/%3e%3cpath d='M9.92571 12.2574C12.5239 13.0236 14.4224 14.3678 14.1662 15.2597C13.9099 16.1517 11.5959 16.2536 8.99771 15.4874C6.3995 14.7212 4.50098 13.377 4.75724 12.4851C5.0135 11.5931 7.3275 11.4912 9.92571 12.2574Z' fill='%233C3C49'/%3e%3cpath d='M26.7892 22.3292C29.5469 23.1424 31.5747 24.5247 31.3184 25.4167C31.0621 26.3086 28.6189 26.3724 25.8612 25.5592C23.1035 24.7459 21.0757 23.3636 21.3319 22.4717C21.5882 21.5797 24.0315 21.5159 26.7892 22.3292Z' fill='%233C3C49'/%3e%3cpath d='M12.8493 20.4577C12.205 19.7898 10.0916 20.7619 8.12896 22.6289C6.16631 24.4959 5.09759 26.5509 5.7419 27.2188C6.38622 27.8867 8.49958 26.9146 10.4622 25.0476C12.4249 23.1806 13.4936 21.1256 12.8493 20.4577Z' fill='%233C3C49'/%3e%3cpath d='M41.691 12.5347V11.9635H39.3366V27.1957H41.691V23.0915C41.691 22.6472 41.691 22.2876 41.6482 21.801H41.691C42.5471 23.1973 44.0026 23.9377 45.7148 23.9377C48.6043 23.9377 51.1299 21.7587 51.1299 17.7179C51.1299 13.7617 48.6043 11.625 45.7148 11.625C44.0668 11.625 42.6113 12.3443 41.691 13.7617H41.6482C41.691 13.2963 41.691 12.9578 41.691 12.5347ZM45.1155 21.9279C42.9324 21.9068 41.6696 20.0662 41.6696 17.6967C41.6696 15.4542 42.9324 13.656 45.1155 13.6348C47.2559 13.6137 48.6685 15.2638 48.6685 17.7179C48.6685 20.2354 47.2559 21.9491 45.1155 21.9279Z' fill='%233C3C49'/%3e%3cpath d='M63.4932 16.7236C63.4932 13.8041 61.1388 11.625 57.9283 11.625C54.5037 11.625 52.1279 13.931 52.1279 17.7814C52.1279 21.4836 54.4609 23.9377 57.9283 23.9377C60.7749 23.9377 62.8939 22.2876 63.3862 20.0239H60.8177C60.4111 21.1663 59.2981 21.9279 57.9283 21.9279C56.1732 21.9279 54.889 20.6797 54.6107 18.6064H63.4932V16.7236ZM57.9283 13.6348C59.662 13.6348 60.8606 14.8195 61.1174 16.5332H54.6321C54.9318 14.883 56.1518 13.6348 57.9283 13.6348Z' fill='%233C3C49'/%3e%3cpath d='M65.224 23.5992H67.5784V17.0409C67.5784 14.7984 68.8198 13.6348 70.7462 13.6348H72.009V11.625H71.003C69.2693 11.625 68.1991 12.7674 67.5784 13.7617H67.5356V11.9635H65.224V23.5992Z' fill='%233C3C49'/%3e%3cpath d='M83.0154 21.5683C82.6944 21.5683 82.5445 21.3779 82.5445 20.9971V15.8773C82.5445 13.4233 81.3459 11.625 77.8144 11.625C74.3898 11.625 72.8273 13.3175 72.6561 15.7292H75.0105C75.1603 14.4176 76.2091 13.6348 77.8144 13.6348C79.1842 13.6348 80.1259 14.2272 80.1259 15.158C80.1259 15.9196 79.5909 16.3851 77.8358 16.3851H76.894C74.0901 16.3851 72.2066 17.5063 72.2066 20.0662C72.2066 22.753 74.1972 23.98 76.5301 23.98C78.2638 23.98 79.7407 23.2184 80.3186 21.5894C80.3828 22.7742 81.1747 23.5992 82.673 23.5992H84V21.5683H83.0154ZM80.1902 18.1833C80.1902 20.8067 78.7561 21.9491 76.9154 21.9491C75.3101 21.9491 74.668 21.0182 74.668 20.0662C74.668 19.1565 75.2245 18.416 76.9368 18.416H77.2793C78.9273 18.416 79.9547 17.8448 80.1688 16.8505H80.1902V18.1833Z' fill='%233C3C49'/%3e%3c/svg%3e"),($=this.shadowRoot.getElementById("pera-wallet-connect-modal-information-section-connect-pera-mobile"))===null||$===void 0||$.setAttribute("style","display: none;"))}}}var j=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-connect-modal-pending-message-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 48px;
  gap: 56px;
  height: 100%;
  padding: 4px;
  padding-bottom: 70px;
}

.pera-wallet-connect-modal-pending-message {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.pera-wallet-connect-modal-pending-message--try-again-view {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__title {
  margin: 16px 0 12px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.26px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__description {
  color: #6a6a81;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__button {
  display: block;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  color: #ffffff;
  background-color: #6b46fe;
  border: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image {
  width: 24px;
  height: 24px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.1px;
  color: #3c3c49;
}
.pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description {
  /* stylelint-disable value-no-vendor-prefix */
  /* stylelint-disable  property-no-vendor-prefix */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable value-no-vendor-prefix */
  /* stylelint-enable property-no-vendor-prefix */
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01px;
  color: #9d9dae;
}

.pera-wallet-connect-modal-pending-message__animation-wrapper {
  width: 56px;
  height: 56px;
  background-color: #6b46fe;
  border-radius: 50%;
}

.pera-wallet-connect-modal-pending-message__text {
  max-width: 271px;
  margin-top: 24px;
  color: #3c3c49;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.26px;
}

.pera-wallet-connect-modal-pending-message__cancel-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  color: #6a6a81;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.09px;
  font-weight: 500;
  border: none;
}`;Me(j);const X=document.createElement("template");X.innerHTML=`
  <div class="pera-wallet-connect-modal-pending-message-section">
    <div class="pera-wallet-connect-modal-pending-message">
      <div id="pera-wallet-connect-modal-pending-message-animation-wrapper" class="pera-wallet-connect-modal-pending-message__animation-wrapper"></div>

      <div class="pera-wallet-connect-modal-pending-message__text">
        Please wait while we connect you to Pera Wallet
      </div>
    </div>

    <button
      id="pera-wallet-connect-modal-pending-message-cancel-button"
      class="pera-wallet-button pera-wallet-connect-modal-pending-message__cancel-button">
        Cancel
    </button>
  </div>

  <div id="pera-wallet-connect-modal-pending-message-audio-wrapper"></div>
`;const H=`
  <div class="pera-wallet-connect-modal-pending-message--try-again-view">
    <div>
      <img src="${K}" alt="Pera Wallet Logo" />

      <h1 class="pera-wallet-connect-modal-pending-message--try-again-view__title">
        Couldn\u2019t establish connection
      </h1>

      <p class="pera-wallet-connect-modal-pending-message--try-again-view__description">
        Having issues? Before trying again, make sure to read the support article below and apply the possible solutions.
      </p>
    </div>

    <div>
      <a
        href="https://support.perawallet.app/en/article/resolving-walletconnect-issues-1tolptm/"
        target="_blank"
        rel="noopener noreferrer"
        class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor">
        <img
          class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__image"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7ZM11.9998 12.11C11.5898 12.11 11.2498 11.77 11.2498 11.36V11.15C11.2498 10.0038 12.0798 9.4336 12.4082 9.20798L12.4198 9.20001C12.7898 8.95001 12.9098 8.78002 12.9098 8.52002C12.9098 8.02002 12.4998 7.60999 11.9998 7.60999C11.4998 7.60999 11.0898 8.02002 11.0898 8.52002C11.0898 8.93002 10.7498 9.27002 10.3398 9.27002C9.92984 9.27002 9.58984 8.93002 9.58984 8.52002C9.58984 7.19002 10.6698 6.10999 11.9998 6.10999C13.3298 6.10999 14.4098 7.19002 14.4098 8.52002C14.4098 9.66002 13.5698 10.23 13.2598 10.44C12.8698 10.7 12.7498 10.87 12.7498 11.15V11.36C12.7498 11.78 12.4098 12.11 11.9998 12.11ZM11.25 13.85C11.25 14.26 11.58 14.6 12 14.6C12.42 14.6 12.75 14.26 12.75 13.85C12.75 13.44 12.41 13.1 12 13.1C11.59 13.1 11.25 13.44 11.25 13.85Z' fill='%236B46FE'/%3e%3c/svg%3e"
          alt="Help Icon"
        />

        <div>
          <div
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title-wrapper">
            <h1
              class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__title">
                Resolving WalletConnect issues
            </h1>

            <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.3287 10.0983C10.9574 10.0983 10.6564 9.79734 10.6564 9.42604L10.6564 6.29525L5.14866 11.803C4.88611 12.0655 4.46044 12.0655 4.19789 11.803C3.93534 11.5404 3.93534 11.1147 4.19789 10.8522L9.70561 5.34447L6.57482 5.34447C6.20352 5.34447 5.90252 5.04347 5.90252 4.67218C5.90252 4.30088 6.20352 3.99988 6.57482 3.99988L11.3287 3.99988C11.507 3.99988 11.678 4.07071 11.8041 4.19679C11.9301 4.32287 12.001 4.49387 12.001 4.67218L12.001 9.42604C12.001 9.79734 11.7 10.0983 11.3287 10.0983Z' fill='%239D9DAE'/%3e%3c/svg%3e" alt="Send Icon"/>
          </div>

          <p
            class="pera-wallet-connect-modal-pending-message--try-again-view__resolving-anchor__description">
            Unfortunately there are several known issues related to WalletConnect that our team is working on. Some of these issues are related to the WalletConnect JavaScript implementation on the dApp ...
          </p>
        </div>
      </a>

      <button id="pera-wallet-connect-modal-pending-message-try-again-button" class="pera-wallet-connect-button pera-wallet-connect-modal-pending-message--try-again-view__button">
        Close & Try Again
      </button>
    </div>
  </div>
  `;class q extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=j,this.shadowRoot.append(X.content.cloneNode(!0),V)}}connectedCallback(){var V;const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-pending-message-cancel-button");G?.addEventListener("click",()=>{this.onClose()}),this.addAudioForConnection(),this.renderLottieAnimation(),setTimeout(()=>{var $;if(X.innerHTML=H,this.shadowRoot){const ne=document.createElement("style");ne.textContent=j,this.shadowRoot.innerHTML="",this.shadowRoot.append(X.content.cloneNode(!0),ne);const Q=($=this.shadowRoot)===null||$===void 0?void 0:$.getElementById("pera-wallet-connect-modal-pending-message-try-again-button");Q?.addEventListener("click",()=>{this.onClose()})}},3e4)}onClose(){re.removeModalWrapperFromDOM(re.PERA_WALLET_CONNECT_MODAL_ID)}addAudioForConnection(){var V;if(this.getAttribute("should-use-sound")==="true"&&re.isIOS()){const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-pending-message-audio-wrapper"),$=document.createElement("audio");$.src="https://s3.amazonaws.com/wc.perawallet.app/audio.mp3",$.autoplay=!0,$.loop=!0,G?.appendChild($)}}renderLottieAnimation(){var V;const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-connect-modal-pending-message-animation-wrapper");G&&Ye.default.loadAnimation({container:G,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/pera-loader-animation.json"})}}var te=`.pera-wallet-sign-txn-toast {
  --pera-wallet-sign-txn-toast-width: 422px;
  --pera-wallet-sign-txn-toast-height: 134px;
  --pera-wallet-sign-txn-toast-font-family: "Inter", sans-serif;
  position: fixed;
  bottom: 28px;
  right: 35px;
  z-index: 11;
  overflow: hidden;
  width: var(--pera-wallet-sign-txn-toast-width);
  height: var(--pera-wallet-sign-txn-toast-height);
  background: #edeffb;
  border-radius: 8px;
  animation: 0.2s PeraWalletSignTxnToastSlideIn ease-out;
}
.pera-wallet-sign-txn-toast * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-sign-txn-toast-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-sign-txn-toast ul,
.pera-wallet-sign-txn-toast ol,
.pera-wallet-sign-txn-toast li {
  list-style-type: none;
}

.pera-wallet-sign-txn-toast__header__close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.pera-wallet-sign-txn-toast__content__lottie-animation {
  position: absolute;
  top: -75px;
  left: -100px;
  width: 368px;
  height: 368px;
}

.pera-wallet-sign-txn-toast__content__description {
  position: absolute;
  top: 40px;
  right: 48px;
  max-width: 197px;
  color: #3c3c49;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.1px;
}

@media (max-width: 767px) {
  .pera-wallet-sign-txn-toast {
    display: none;
  }
}
@keyframes PeraWalletSignTxnToastSlideIn {
  0% {
    bottom: 12px;
    opacity: 0;
  }
  100% {
    bottom: 26px;
    opacity: 1;
  }
}`;Me(te);const ue=document.createElement("template");ue.innerHTML=`
  <div class="pera-wallet-sign-txn-toast">
    <div class="pera-wallet-sign-txn-toast__header">
      <button
        id="pera-wallet-sign-txn-toast-close-button"
        class="pera-wallet-sign-txn-toast__header__close-button">
        <img src="data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.4107 4.41074L9.41074 9.41074L10.5893 10.5893L15.5893 5.58926L14.4107 4.41074ZM9.41074 9.41074L4.41074 14.4107L5.58926 15.5893L10.5893 10.5893L9.41074 9.41074ZM15.5893 14.4107L10.5893 9.41074L9.41074 10.5893L14.4107 15.5893L15.5893 14.4107ZM10.5893 9.41074L5.58926 4.41074L4.41074 5.58926L9.41074 10.5893L10.5893 9.41074Z' fill='%239099BD'/%3e%3c/svg%3e" />
      </button>
    </div>
    <div class="pera-wallet-sign-txn-toast__content">
      <div id="pera-wallet-sign-txn-toast-lottie-animation" style="width:368;height:368" class="pera-wallet-sign-txn-toast__content__lottie-animation"></div>
      <p class="pera-wallet-sign-txn-toast__content__description">
        Please launch <b>Pera Wallet</b> on your iOS or Android device to sign this transaction.
      </p>
    </div>
  </div>
`;class ee extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=te,this.shadowRoot.append(ue.content.cloneNode(!0),V);const G=this.shadowRoot.getElementById("pera-wallet-sign-txn-toast-close-button");G?.addEventListener("click",()=>{re.removeModalWrapperFromDOM(re.PERA_WALLET_SIGN_TXN_TOAST_ID)}),this.renderLottieAnimation()}}renderLottieAnimation(){var V;const G=(V=this.shadowRoot)===null||V===void 0?void 0:V.getElementById("pera-wallet-sign-txn-toast-lottie-animation");G&&Ye.default.loadAnimation({container:G,renderer:"svg",loop:!0,autoplay:!0,path:"https://s3.amazonaws.com/wc.perawallet.app/static/sign-toast-animation.json"})}}var he=`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
.pera-wallet-modal {
  --pera-wallet-modal-font-family: "Inter", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}
.pera-wallet-modal--select-account .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body {
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: calc(100 * var(--vh));
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.03);
  border-radius: 20px 20px 0px 0px;
  animation: 0.3s PeraWalletConnectMobileSlideIn ease-out;
  overflow-y: auto;
  transform: unset;
}
.pera-wallet-modal--mobile .pera-wallet-modal__body::before {
  background-image: unset;
}
.pera-wallet-modal * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--pera-wallet-modal-font-family);
  font-smooth: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pera-wallet-modal ul,
.pera-wallet-modal ol,
.pera-wallet-modal li {
  list-style-type: none;
}

.pera-wallet-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 48px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: var(--pera-wallet-modal-font-family);
  font-size: 14px;
}

.pera-wallet-modal__logo img {
  display: block;
  width: 32px;
}

.pera-wallet-modal__body {
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  max-width: calc(100vw - 80px);
  padding: 28px;
  background-color: #f3f3f7;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  animation: 0.3s PeraWalletConnectSlideIn ease-out;
  transform: translate(-50%, -50%);
}
.pera-wallet-modal__body::before {
  --background-line: #1e0972 0 1.2px, transparent 0 calc(100% - 1.2px), #1e0972;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: "";
  background-image: linear-gradient(var(--background-line)), linear-gradient(90deg, var(--background-line));
  background-size: 116px 116px;
  mix-blend-mode: overlay;
  border-radius: 24px;
  opacity: 0.8;
  pointer-events: none;
}

@media (max-width: 767px) {
  .pera-wallet-modal--desktop .pera-wallet-modal__body {
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px;
  }
}
@keyframes PeraWalletConnectSlideIn {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 24px));
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes PeraWalletConnectMobileSlideIn {
  0% {
    top: 30%;
    opacity: 0;
  }
  100% {
    top: 40px;
    opacity: 1;
  }
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body {
  width: 480px;
  height: 578px;
  background-color: #ffffff;
  background-image: unset;
  padding: 0;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body .pera-wallet-sign-txn-modal__body__content {
  width: 100%;
  height: 100%;
}
.pera-wallet-sign-txn-modal.pera-wallet-modal .pera-wallet-modal__body #pera-wallet-iframe {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  margin: 0 auto;
  border: none;
}`;Me(he);const ae=document.createElement("template");ae.innerHTML=`
  <div class="${re.PERA_WALLET_MODAL_CLASSNAME} pera-wallet-sign-txn-modal">
    <div class="pera-wallet-modal__body">
      <pera-wallet-modal-header modal-id="${re.PERA_WALLET_SIGN_TXN_MODAL_ID}"></pera-wallet-modal-header/>

      <div class="pera-wallet-sign-txn-modal__body__content" />
    </div>
  </div>
`;class me extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this.shadowRoot){const V=document.createElement("style");V.textContent=he,this.shadowRoot.append(ae.content.cloneNode(!0),V)}}}return window.addEventListener("DOMContentLoaded",()=>{_e()}),window.addEventListener("resize",()=>{_e()}),window.customElements.define("pera-wallet-connect-modal",at),window.customElements.define("pera-wallet-modal-desktop-mode",Ot),window.customElements.define("pera-wallet-modal-header",je),window.customElements.define("pera-wallet-modal-touch-screen-mode",it),window.customElements.define("pera-wallet-redirect-modal",ge),window.customElements.define("pera-wallet-connect-modal-information-section",Z),window.customElements.define("pera-wallet-connect-modal-pending-message-section",q),window.customElements.define("pera-wallet-sign-txn-toast",ee),window.customElements.define("pera-wallet-sign-txn-modal",me),window.customElements.define("pera-wallet-download-qr-code",be),gn}var yn;function bn(){if(yn)return Ie;yn=1;var re=$n,le=Yn,qe=Kn.exports;function fe(M){return M&&typeof M=="object"&&"default"in M?M:{default:M}}var Fe=fe(re),Ye=fe(le),Me=fe(qe);function Ge(M,z,Z,j){return new(Z||(Z=Promise))(function(X,H){function q(ee){try{ue(j.next(ee))}catch(he){H(he)}}function te(ee){try{ue(j.throw(ee))}catch(he){H(he)}}function ue(ee){var he;ee.done?X(ee.value):(he=ee.value,he instanceof Z?he:new Z(function(ae){ae(he)})).then(q,te)}ue((j=j.apply(M,z||[])).next())})}class oe extends Error{constructor(z,Z,...j){super(...j),Error.captureStackTrace&&Error.captureStackTrace(this,oe),this.name="PeraWalletConnectError",this.data=z,this.message=Z}}const _e=new class{constructor(M){this.listener=void 0,this.channel=M.channel}setupListener({onReceiveMessage:M}){this.close(),this.listener=z=>{if(typeof z.data=="object")try{z.data.channel===this.channel&&M(z)}catch(Z){console.error(Z)}},window.addEventListener("message",this.listener)}sendMessage({message:M,targetWindow:z,origin:Z,timeout:j=1e3}){setTimeout(()=>{const X={channel:this.channel,message:M};z.postMessage(X,{targetOrigin:Z||"*"})},j)}close(){this.listener&&(window.removeEventListener("message",this.listener),this.listener=void 0)}}({channel:"pera-web-wallet"});function Se(){const M=document.querySelector('meta[name="name"]'),z=document.querySelector('meta[name="description"]');let{title:Z}=document,j="";return M instanceof HTMLMetaElement&&(Z=M.content),z instanceof HTMLMetaElement&&(j=z.content),{title:Z,description:j,url:window.location.origin,favicon:It()[0]}}function It(){const M=document.getElementsByTagName("link"),z=[];for(let Z=0;Z<M.length;Z++){const j=M[Z],X=j.getAttribute("rel");if(X&&X.toLowerCase().indexOf("icon")>-1){const H=j.getAttribute("href");if(H&&H.toLowerCase().indexOf("https:")===-1&&H.toLowerCase().indexOf("http:")===-1&&H.indexOf("//")!==0){let q=`${window.location.protocol}//${window.location.host}`;if(H.indexOf("/")===0)q+=H;else{const te=window.location.pathname.split("/");te.pop(),q+=`${te.join("/")}/${H}`}z.push(q)}else if(H?.indexOf("//")===0){const q=window.location.protocol+H;z.push(q)}else H&&z.push(H)}}return z}function je(M){return new Promise((z,Z)=>{try{const j=window.open(M,"_blank");let X=0;const H=setInterval(()=>{if(X+=1,X===50)return clearInterval(H),void Z(new oe({type:"MESSAGE_NOT_RECEIVED"},"Couldn't open Pera Wallet, please try again."));j&&(j.closed===!0&&(clearInterval(H),Z(new oe({type:"OPERATION_CANCELLED"},"Operation cancelled by user"))),_e.sendMessage({message:{type:"TAB_OPEN"},origin:M,targetWindow:j}))},700);_e.setupListener({onReceiveMessage:q=>{q.data.message.type==="TAB_OPEN_RECEIVED"&&(clearInterval(H),z(j))}})}catch(j){Z(j)}})}function ot(M){const z=document.createElement("div");return z.setAttribute("id",M),document.body.appendChild(z),z}function lt(){const M=ot("pera-wallet-sign-txn-modal-wrapper");M.innerHTML="<pera-wallet-sign-txn-modal></pera-wallet-sign-txn-modal>";const z=M.querySelector("pera-wallet-sign-txn-modal");return z?(Z=z,j="pera-wallet-sign-txn-modal__body__content",new Promise(X=>{var H;const q=(H=Z.shadowRoot)===null||H===void 0?void 0:H.querySelector(`.${j}`);if(q)return X(q);const te=new MutationObserver(()=>{q&&(X(q),te.disconnect())});te.observe(Z,{childList:!0,subtree:!0})})):Promise.reject();var Z,j}function wt(M){be("pera-wallet-sign-txn-modal-wrapper"),M&&M(new oe({type:"SIGN_TXN_CANCELLED"},"Transaction sign is cancelled"))}function be(M){const z=document.getElementById(M);z&&z.remove()}const ce="PeraWallet.Wallet",Ue="walletconnect";function Ke(){return typeof localStorage>"u"?void 0:localStorage}function tt(M,z){var Z;(Z=Ke())===null||Z===void 0||Z.setItem(ce,JSON.stringify({type:z||"pera-wallet",accounts:M,selectedAccount:M[0]}))}function ht(){var M;const z=(M=Ke())===null||M===void 0?void 0:M.getItem(ce);return z?JSON.parse(z):null}function pt(){return new Promise((M,z)=>{var Z,j;try{(Z=Ke())===null||Z===void 0||Z.removeItem(Ue),(j=Ke())===null||j===void 0||j.removeItem(ce),M(void 0)}catch(X){z(X)}})}function Ft(M){const z=M.slice();for(let Z=z.length-1;Z>0;Z--){const j=Math.floor(Math.random()*(Z+1));[z[Z],z[j]]=[z[j],z[Z]]}return z}function Ot(){return function(M,z={}){return fetch(M,z).then(Z=>Z.json()).then(Z=>Z)}("https://wc.perawallet.app/config.json",{cache:"no-store"})}function nt(){return Ge(this,void 0,void 0,function*(){let M={bridgeURL:"",webWalletURL:"",isWebWalletAvailable:!1,shouldDisplayNewBadge:!1,shouldUseSound:!0,silent:!1};try{const z=yield Ot();z.web_wallet!==void 0&&z.web_wallet_url&&(M.isWebWalletAvailable=z.web_wallet),z.display_new_badge!==void 0&&(M.shouldDisplayNewBadge=z.display_new_badge),z.use_sound!==void 0&&(M.shouldUseSound=z.use_sound),z.silent!==void 0&&(M.silent=z.silent),M=Object.assign(Object.assign({},M),{bridgeURL:Ft(z.servers||[])[0]||"",webWalletURL:z.web_wallet_url||""})}catch(z){console.log(z)}return M})}function ye(M){return Uint8Array.from(window.atob(M),z=>z.charCodeAt(0))}function it(){return typeof navigator<"u"}function dt(){return it()&&/Android/i.test(navigator.userAgent)}function rt(){return it()&&/iPhone|iPad|iPod/i.test(navigator.userAgent)}function ct(){return it()&&/iPhone|iPod|Android/i.test(navigator.userAgent)}function at(){if(!it())return null;const{userAgent:M}=navigator;let z;return z=M.match(/DuckDuckGo/i)?"DuckDuckGo":M.match(/OPX/i)?"Opera GX":navigator.brave?"Brave":Me.default.getParser(navigator.userAgent).getBrowserName(),z}const kt=dt()?"algorand://":"algorand-wc://";function ve(M){return{ROOT:`https://${M}`,CONNECT:`https://${M}/connect`,TRANSACTION_SIGN:`https://${M}/transaction/sign`}}function ge(M=!0){let z=kt;const Z=at();return M&&Z&&(z=`${z}?browser=${encodeURIComponent(Z)}`),z}function K(M){const z=new URL(M);return z.searchParams.append("embedded","true"),z.toString()}function Ve({isWebWalletAvailable:M,shouldDisplayNewBadge:z,shouldUseSound:Z}){return{open:(j={isWebWalletAvailable:M,shouldDisplayNewBadge:z,shouldUseSound:Z},X=>{if(!document.getElementById("pera-wallet-connect-modal-wrapper")){const H=ot("pera-wallet-connect-modal-wrapper"),q=`${X}&algorand=true`,{isWebWalletAvailable:te,shouldDisplayNewBadge:ue,shouldUseSound:ee}=j;H.innerHTML=`<pera-wallet-connect-modal uri="${q}" is-web-wallet-avaliable="${te}" should-display-new-badge="${ue}" should-use-sound="${ee}"></pera-wallet-connect-modal>`}}),close:()=>be("pera-wallet-connect-modal-wrapper")};var j}return typeof window<"u"&&(window.global=window,window.Buffer=window.Buffer||Jn().Buffer,Promise.resolve().then(function(){return ti()})),Ie.PERA_DOWNLOAD_URL="https://perawallet.app/download/",Ie.PERA_WALLET_CONNECT_MODAL_ID="pera-wallet-connect-modal-wrapper",Ie.PERA_WALLET_MODAL_CLASSNAME="pera-wallet-modal",Ie.PERA_WALLET_REDIRECT_MODAL_ID="pera-wallet-redirect-modal-wrapper",Ie.PERA_WALLET_SIGN_TXN_MODAL_ID="pera-wallet-sign-txn-modal-wrapper",Ie.PERA_WALLET_SIGN_TXN_TOAST_ID="pera-wallet-sign-txn-toast-wrapper",Ie.PeraWalletConnect=class{constructor(M){this.bridge=M?.bridge||"",this.connector=null,this.shouldShowSignTxnToast=M?.shouldShowSignTxnToast===void 0||M.shouldShowSignTxnToast,this.chainId=M?.chainId}get platform(){return function(){const M=ht();let z=null;return M?.type==="pera-wallet"?z="mobile":M?.type==="pera-wallet-web"&&(z="web"),z}()}get isConnected(){var M;return this.platform==="mobile"?!!this.connector:this.platform==="web"&&!!(!((M=ht())===null||M===void 0)&&M.accounts.length)}connectWithWebWallet(M,z,Z,j){const X=at(),H=ve(Z),q=document.createElement("iframe");function te(){be("pera-wallet-connect-modal-wrapper")}return{onWebWalletConnect:function(ue){if(X==="Chrome"){if(q.setAttribute("id","pera-wallet-iframe"),q.setAttribute("src",K(H.CONNECT)),ue.appendChild(q),q.contentWindow){let ee=0;const he=setInterval(()=>{ee+=1,ee!==50?_e.sendMessage({message:{type:"IFRAME_INITIALIZED"},origin:H.CONNECT,targetWindow:q.contentWindow}):clearInterval(he)},700);_e.setupListener({onReceiveMessage:ae=>{var me,D,V,G,$,ne;if(ae.data.message.type==="IFRAME_INITIALIZED_RECEIVED")clearInterval(he),_e.sendMessage({message:{type:"CONNECT",data:Object.assign(Object.assign({},Se()),{chainId:j})},origin:H.CONNECT,targetWindow:q.contentWindow});else if(M&&ae.data.message.type==="CONNECT_CALLBACK"){const Q=ae.data.message.data.addresses;tt(Q,"pera-wallet-web"),M(Q),te(),(me=document.getElementById("pera-wallet-iframe"))===null||me===void 0||me.remove()}else if(ae.data.message.type==="CONNECT_NETWORK_MISMATCH")z(new oe({type:"CONNECT_NETWORK_MISMATCH",detail:ae.data.message.error},ae.data.message.error||"Your wallet is connected to a different network to this dApp. Update your wallet to the correct network (MainNet or TestNet) to continue.")),te(),(D=document.getElementById("pera-wallet-iframe"))===null||D===void 0||D.remove();else if(["CREATE_PASSCODE_EMBEDDED","SELECT_ACCOUNT_EMBEDDED"].includes(ae.data.message.type)){if(ae.data.message.type==="CREATE_PASSCODE_EMBEDDED")je(H.CONNECT).then(Q=>{Q&&_e.sendMessage({message:{type:"CONNECT",data:Object.assign(Object.assign({},Se()),{chainId:j})},origin:H.CONNECT,targetWindow:Q});const pe=setInterval(()=>{Q?.closed===!0&&(z(new oe({type:"CONNECT_CANCELLED"},"Connect is cancelled by user")),te(),clearInterval(pe))},2e3);_e.setupListener({onReceiveMessage:Te=>{if(M&&Te.data.message.type==="CONNECT_CALLBACK"){const Xe=Te.data.message.data.addresses;tt(Xe,"pera-wallet-web"),M(Xe),te(),Q?.close()}}})});else if(ae.data.message.type==="SELECT_ACCOUNT_EMBEDDED"){const Q=document.getElementById("pera-wallet-connect-modal-wrapper"),pe=(G=(V=Q?.querySelector("pera-wallet-connect-modal"))===null||V===void 0?void 0:V.shadowRoot)===null||G===void 0?void 0:G.querySelector(".pera-wallet-modal"),Te=(ne=($=pe?.querySelector("pera-wallet-modal-desktop-mode"))===null||$===void 0?void 0:$.shadowRoot)===null||ne===void 0?void 0:ne.querySelector(".pera-wallet-connect-modal-desktop-mode");pe&&Te&&(pe.classList.add("pera-wallet-modal--select-account"),pe.classList.remove("pera-wallet-modal--create-passcode"),Te.classList.add("pera-wallet-connect-modal-desktop-mode--select-account"),Te.classList.remove("pera-wallet-connect-modal-desktop-mode--create-passcode")),_e.sendMessage({message:{type:"SELECT_ACCOUNT_EMBEDDED_CALLBACK"},origin:H.CONNECT,targetWindow:q.contentWindow})}}}})}}else je(H.CONNECT).then(ee=>{ee&&_e.sendMessage({message:{type:"CONNECT",data:Object.assign(Object.assign({},Se()),{chainId:j})},origin:H.CONNECT,targetWindow:ee});const he=setInterval(()=>{ee?.closed===!0&&(z(new oe({type:"CONNECT_CANCELLED"},"Connect is cancelled by user")),clearInterval(he),te())},2e3);_e.setupListener({onReceiveMessage:ae=>{if(M&&ae.data.message.type==="CONNECT_CALLBACK"){const me=ae.data.message.data.addresses;tt(me,"pera-wallet-web"),M(me),te(),ee?.close()}else ae.data.message.type==="CONNECT_NETWORK_MISMATCH"&&(z(new oe({type:"CONNECT_NETWORK_MISMATCH",detail:ae.data.message.error},ae.data.message.error||"Your wallet is connected to a different network to this dApp. Update your wallet to the correct network (MainNet or TestNet) to continue.")),te(),ee?.close())}})}).catch(ee=>{te(),z(ee)})}}}connect(){return new Promise((M,z)=>Ge(this,void 0,void 0,function*(){var Z;try{if(!((Z=this.connector)===null||Z===void 0)&&Z.connected)try{yield this.connector.killSession()}catch{}const{isWebWalletAvailable:j,bridgeURL:X,webWalletURL:H,shouldDisplayNewBadge:q,shouldUseSound:te}=yield nt(),{onWebWalletConnect:ue}=this.connectWithWebWallet(M,z,H,this.chainId);j&&(window.onWebWalletConnect=ue),this.connector=new Fe.default({bridge:this.bridge||X||"https://bridge.walletconnect.org",qrcodeModal:Ve({isWebWalletAvailable:j,shouldDisplayNewBadge:q,shouldUseSound:te})}),yield this.connector.createSession({chainId:this.chainId||4160}),function(ee){var he,ae,me,D;const V=document.getElementById("pera-wallet-connect-modal-wrapper"),G=(ae=(he=V?.querySelector("pera-wallet-connect-modal"))===null||he===void 0?void 0:he.shadowRoot)===null||ae===void 0?void 0:ae.querySelector(".pera-wallet-modal"),$=(D=(me=G?.querySelector("pera-wallet-modal-header"))===null||me===void 0?void 0:me.shadowRoot)===null||D===void 0?void 0:D.getElementById("pera-wallet-modal-header-close-button");$?.addEventListener("click",()=>{ee(),be("pera-wallet-connect-modal-wrapper")})}(()=>z(new oe({type:"CONNECT_MODAL_CLOSED"},"Connect modal is closed by user"))),this.connector.on("connect",(ee,he)=>{var ae,me;ee&&z(ee),M(((ae=this.connector)===null||ae===void 0?void 0:ae.accounts)||[]),tt(((me=this.connector)===null||me===void 0?void 0:me.accounts)||[])})}catch(j){console.log(j),z(new oe({type:"SESSION_CONNECT",detail:j},j.message||"There was an error while connecting to Pera Wallet"))}}))}reconnectSession(){return new Promise((M,z)=>Ge(this,void 0,void 0,function*(){var Z,j;try{const X=ht();if(X?.type==="pera-wallet-web"){const{isWebWalletAvailable:H}=yield nt();H?M(X.accounts||[]):z(new oe({type:"SESSION_RECONNECT",detail:"Pera Web is not available"},"Pera Web is not available"))}this.connector&&M(this.connector.accounts||[]),this.bridge=((Z=function(){var H;const q=(H=Ke())===null||H===void 0?void 0:H.getItem(Ue);return q?JSON.parse(q):null}())===null||Z===void 0?void 0:Z.bridge)||"",this.bridge&&(this.connector=new Fe.default({bridge:this.bridge}),M(((j=this.connector)===null||j===void 0?void 0:j.accounts)||[])),this.isConnected||M([])}catch(X){yield this.disconnect(),z(new oe({type:"SESSION_RECONNECT",detail:X},X.message||"There was an error while reconnecting to Pera Wallet"))}}))}disconnect(){var M;return Ge(this,void 0,void 0,function*(){let z;this.isConnected&&this.platform==="mobile"&&(z=(M=this.connector)===null||M===void 0?void 0:M.killSession(),z?.then(()=>{this.connector=null})),yield pt()})}signTransactionWithMobile(M){return Ge(this,void 0,void 0,function*(){const z=(Z="algo_signTxn",j=[M],{id:Date.now()*Math.pow(10,3)+Math.floor(Math.random()*Math.pow(10,3)),jsonrpc:"2.0",method:Z,params:j});var Z,j;try{try{const{silent:X}=yield nt(),H=(yield this.connector.sendCustomRequest(z,{forcePushNotification:!X})).filter(Boolean);return typeof H[0]=="string"?H.map(ye):H.map(q=>Uint8Array.from(q))}catch(X){return yield Promise.reject(new oe({type:"SIGN_TRANSACTIONS",detail:X},X.message||"Failed to sign transaction"))}}finally{be("pera-wallet-redirect-modal-wrapper"),be("pera-wallet-sign-txn-toast-wrapper")}})}signTransactionWithWeb(M,z){return new Promise((Z,j)=>{const X=ve(z);at()==="Chrome"?lt().then(H=>{var q,te,ue,ee;const he=H,ae=document.createElement("iframe"),me=K(X.TRANSACTION_SIGN),D=`hid ${me}; bluetooth ${me}`;ae.setAttribute("id","pera-wallet-iframe"),ae.setAttribute("src",me),ae.setAttribute("allow",D),he?.appendChild(ae);const V=(ue=(te=(q=document.getElementById("pera-wallet-sign-txn-modal-wrapper"))===null||q===void 0?void 0:q.querySelector("pera-wallet-sign-txn-modal"))===null||te===void 0?void 0:te.shadowRoot)===null||ue===void 0?void 0:ue.querySelector("pera-wallet-modal-header"),G=(ee=V?.shadowRoot)===null||ee===void 0?void 0:ee.getElementById("pera-wallet-modal-header-close-button");if(G&&G.addEventListener("click",()=>{j(new oe({type:"SIGN_TXN_CANCELLED"},"Transaction signing is cancelled by user.")),be("pera-wallet-sign-txn-modal-wrapper")}),ae.contentWindow){let $=0;const ne=setInterval(()=>{$+=1,$!==50?_e.sendMessage({message:{type:"IFRAME_INITIALIZED"},origin:X.CONNECT,targetWindow:ae.contentWindow}):clearInterval(ne)},700);_e.setupListener({onReceiveMessage:Q=>{var pe,Te,Xe;Q.data.message.type==="IFRAME_INITIALIZED_RECEIVED"&&(clearInterval(ne),_e.sendMessage({message:{type:"SIGN_TXN",txn:M},origin:K(X.TRANSACTION_SIGN),targetWindow:ae.contentWindow})),Q.data.message.type==="SIGN_TXN_CALLBACK"&&((pe=document.getElementById("pera-wallet-iframe"))===null||pe===void 0||pe.remove(),wt(),Z(Q.data.message.signedTxns.map($e=>ye($e.signedTxn)))),Q.data.message.type==="SIGN_TXN_NETWORK_MISMATCH"&&j(new oe({type:"SIGN_TXN_NETWORK_MISMATCH",detail:Q.data.message.error},Q.data.message.error||"Network mismatch")),Q.data.message.type==="SESSION_DISCONNECTED"&&((Te=document.getElementById("pera-wallet-iframe"))===null||Te===void 0||Te.remove(),wt(),pt(),j(new oe({type:"SESSION_DISCONNECTED",detail:Q.data.message.error},Q.data.message.error))),Q.data.message.type==="SIGN_TXN_CALLBACK_ERROR"&&((Xe=document.getElementById("pera-wallet-iframe"))===null||Xe===void 0||Xe.remove(),wt(),j(new oe({type:"SIGN_TXN_CANCELLED"},Q.data.message.error)))}})}}).catch(H=>{console.log(H)}):je(X.TRANSACTION_SIGN).then(H=>{H&&_e.sendMessage({message:{type:"SIGN_TXN",txn:M},origin:X.TRANSACTION_SIGN,targetWindow:H});const q=setInterval(()=>{H?.closed===!0&&(j(new oe({type:"SIGN_TXN_CANCELLED"},"Transaction signing is cancelled by user.")),clearInterval(q))},2e3);_e.setupListener({onReceiveMessage:te=>{te.data.message.type==="SIGN_TXN_CALLBACK"&&(H?.close(),Z(te.data.message.signedTxns.map(ue=>ye(ue.signedTxn)))),te.data.message.type==="SIGN_TXN_NETWORK_MISMATCH"&&j(new oe({type:"SIGN_TXN_NETWORK_MISMATCH",detail:te.data.message.error},te.data.message.error||"Network mismatch")),te.data.message.type==="SESSION_DISCONNECTED"&&(H?.close(),pt(),j(new oe({type:"SESSION_DISCONNECTED",detail:te.data.message.error},te.data.message.error))),te.data.message.type==="SIGN_TXN_CALLBACK_ERROR"&&(H?.close(),j(new oe({type:"SIGN_TXN_CANCELLED"},te.data.message.error)))}})}).catch(H=>{j(H)})})}signTransaction(M,z){return Ge(this,void 0,void 0,function*(){if(this.platform==="mobile"&&(ct()?ot("pera-wallet-redirect-modal-wrapper").innerHTML="<pera-wallet-redirect-modal></pera-wallet-redirect-modal>":!ct()&&this.shouldShowSignTxnToast&&(ot("pera-wallet-sign-txn-toast-wrapper").innerHTML="<pera-wallet-sign-txn-toast></pera-wallet-sign-txn-toast>"),!this.connector))throw new Error("PeraWalletConnect was not initialized correctly.");const Z=M.flatMap(j=>j.map(X=>function(H,q){let te;q&&!(H.signers||[]).includes(q)&&(te=[]);const ue={txn:(ee=H.txn,Buffer.from(Ye.default.encodeUnsignedTransaction(ee)).toString("base64"))};var ee;return Array.isArray(te)&&(ue.signers=te),H.authAddr&&(ue.authAddr=H.authAddr),H.message&&(ue.message=H.message),H.msig&&(ue.msig=H.msig),ue}(X,z)));if(this.platform==="web"){const{webWalletURL:j}=yield nt();return this.signTransactionWithWeb(Z,j)}return this.signTransactionWithMobile(Z)})}},Ie.closePeraWalletSignTxnToast=function(){be("pera-wallet-sign-txn-toast-wrapper")},Ie.detectBrowser=at,Ie.generatePeraWalletAppDeepLink=ge,Ie.generatePeraWalletConnectDeepLink=function(M){let z=ge(!1);rt()&&!z.includes("-wc")&&(z=z.replace("://","-wc://"));let Z=`${z}wc?uri=${encodeURIComponent(M)}`;const j=at();return dt()&&(Z=M),j&&(Z=`${Z}&browser=${encodeURIComponent(j)}`),Z},Ie.isIOS=rt,Ie.isMobile=ct,Ie.removeModalWrapperFromDOM=be,Ie}var xn,Cn;Object.defineProperty(Zt,"__esModule",{value:!0});var _n=bn();Cn=Zt.PeraWalletConnect=_n.PeraWalletConnect,xn=Zt.closePeraWalletSignTxnToast=_n.closePeraWalletSignTxnToast;const si=Qn({__proto__:null,get PeraWalletConnect(){return Cn},get closePeraWalletSignTxnToast(){return xn},default:Zt},[Zt]);export{si as i};
