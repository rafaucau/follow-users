(()=>{var t={195:(t,e,r)=>{t.exports=r(236)},252:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.parse=void 0,o(r(952),e);var s=r(952);Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return a(s).default}});var i=r(784);Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a(i).default}})},952:function(t,e){"use strict";var r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.isTraversal=void 0;var n=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,o=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,a=new Map([["~","element"],["^","start"],["$","end"],["*","any"],["!","not"],["|","hyphen"]]),s={">":"child","<":"parent","~":"sibling","+":"adjacent"},i={"#":["id","equals"],".":["class","element"]},l=new Set(["has","not","matches","is","where","host","host-context"]),u=new Set(r(["descendant"],Object.keys(s).map((function(t){return s[t]})),!0)),c=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"]);function f(t){return u.has(t.type)}e.isTraversal=f;var h=new Set(["contains","icontains"]),p=new Set(['"',"'"]);function m(t,e,r){var n=parseInt(e,16)-65536;return n!=n||r?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function d(t){return t.replace(o,m)}function v(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function w(t,e,r,o){var u,m;void 0===r&&(r={});var g=[],b=!1;function _(t){var r=e.slice(o+t).match(n);if(!r)throw new Error("Expected name, found "+e.slice(o));var a=r[0];return o+=t+a.length,d(a)}function x(t){for(;v(e.charAt(o+t));)t++;o+=t}function L(t){for(var r=0;"\\"===e.charAt(--t);)r++;return 1==(1&r)}function A(){if(g.length>0&&f(g[g.length-1]))throw new Error("Did not expect successive traversals.")}for(x(0);""!==e;){var F=e.charAt(o);if(v(F))b=!0,x(1);else if(F in s)A(),g.push({type:s[F]}),b=!1,x(1);else if(","===F){if(0===g.length)throw new Error("Empty sub-selector");t.push(g),g=[],b=!1,x(1)}else if(e.startsWith("/*",o)){var P=e.indexOf("*/",o+2);if(P<0)throw new Error("Comment was not terminated");o=P+2}else if(b&&(A(),g.push({type:"descendant"}),b=!1),F in i){var O=i[F],j=O[0],k=O[1];g.push({type:"attribute",name:j,action:k,value:_(1),namespace:null,ignoreCase:!!r.xmlMode&&null})}else if("["===F){x(1);var E=null;"|"===e.charAt(o)&&(E="",o+=1),e.startsWith("*|",o)&&(E="*",o+=2);var S=_(0);null===E&&"|"===e.charAt(o)&&"="!==e.charAt(o+1)&&(E=S,S=_(1)),(null!==(u=r.lowerCaseAttributeNames)&&void 0!==u?u:!r.xmlMode)&&(S=S.toLowerCase()),x(0),k="exists";var U=a.get(e.charAt(o));if(U){if(k=U,"="!==e.charAt(o+1))throw new Error("Expected `=`");x(2)}else"="===e.charAt(o)&&(k="equals",x(1));var C="",M=null;if("exists"!==k){if(p.has(e.charAt(o))){for(var N=e.charAt(o),B=o+1;B<e.length&&(e.charAt(B)!==N||L(B));)B+=1;if(e.charAt(B)!==N)throw new Error("Attribute value didn't end");C=d(e.slice(o+1,B)),o=B+1}else{for(var G=o;o<e.length&&(!v(e.charAt(o))&&"]"!==e.charAt(o)||L(o));)o+=1;C=d(e.slice(G,o))}x(0);var T=e.charAt(o);"s"===T||"S"===T?(M=!1,x(1)):"i"!==T&&"I"!==T||(M=!0,x(1))}if(r.xmlMode||null!=M||(M=c.has(S)),"]"!==e.charAt(o))throw new Error("Attribute selector didn't terminate");o+=1;var D={type:"attribute",name:S,action:k,value:C,namespace:E,ignoreCase:M};g.push(D)}else if(":"===F){if(":"===e.charAt(o+1)){g.push({type:"pseudo-element",name:_(2).toLowerCase()});continue}var I=_(1).toLowerCase(),q=null;if("("===e.charAt(o))if(l.has(I)){if(p.has(e.charAt(o+1)))throw new Error("Pseudo-selector "+I+" cannot be quoted");if(o=w(q=[],e,r,o+1),")"!==e.charAt(o))throw new Error("Missing closing parenthesis in :"+I+" ("+e+")");o+=1}else{for(var W=o+=1,z=1;z>0&&o<e.length;o++)"("!==e.charAt(o)||L(o)?")"!==e.charAt(o)||L(o)||z--:z++;if(z)throw new Error("Parenthesis not matched");if(q=e.slice(W,o-1),h.has(I)){var $=q.charAt(0);$===q.slice(-1)&&p.has($)&&(q=q.slice(1,-1)),q=d(q)}}g.push({type:"pseudo",name:I,data:q})}else{E=null;var R=void 0;if("*"===F)o+=1,R="*";else{if(!n.test(e.slice(o)))return g.length&&"descendant"===g[g.length-1].type&&g.pop(),y(t,g),o;"|"===e.charAt(o)&&(E="",o+=1),R=_(0)}"|"===e.charAt(o)&&(E=R,"*"===e.charAt(o+1)?(R="*",o+=2):R=_(1)),"*"===R?g.push({type:"universal",namespace:E}):((null!==(m=r.lowerCaseTags)&&void 0!==m?m:!r.xmlMode)&&(R=R.toLowerCase()),g.push({type:"tag",name:R,namespace:E}))}}return y(t,g),o}function y(t,e){if(t.length>0&&0===e.length)throw new Error("Empty sub-selector");t.push(e)}e.default=function(t,e){var r=[],n=w(r,""+t,e,0);if(n<t.length)throw new Error("Unmatched selector: "+t.slice(n));return r}},784:function(t,e){"use strict";var r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0});var n={equals:"",element:"~",start:"^",end:"$",any:"*",not:"!",hyphen:"|"},o=new Set(r(r([],Object.keys(n).map((function(t){return n[t]})).filter(Boolean),!0),[":","[","]"," ","\\","(",")","'"],!1));function a(t){return t.map(s).join(", ")}function s(t){return t.map(i).join("")}function i(t){switch(t.type){case"child":return" > ";case"parent":return" < ";case"sibling":return" ~ ";case"adjacent":return" + ";case"descendant":return" ";case"universal":return u(t.namespace)+"*";case"tag":return l(t);case"pseudo-element":return"::"+c(t.name);case"pseudo":return null===t.data?":"+c(t.name):"string"==typeof t.data?":"+c(t.name)+"("+c(t.data)+")":":"+c(t.name)+"("+a(t.data)+")";case"attribute":if("id"===t.name&&"equals"===t.action&&!t.ignoreCase&&!t.namespace)return"#"+c(t.value);if("class"===t.name&&"element"===t.action&&!t.ignoreCase&&!t.namespace)return"."+c(t.value);var e=l(t);return"exists"===t.action?"["+e+"]":"["+e+n[t.action]+"='"+c(t.value)+"'"+(t.ignoreCase?"i":!1===t.ignoreCase?"s":"")+"]"}}function l(t){return""+u(t.namespace)+c(t.name)}function u(t){return null!==t?("*"===t?"*":c(t))+"|":""}function c(t){return t.split("").map((function(t){return o.has(t)?"\\"+t:t})).join("")}e.default=a},236:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),s=new j(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=F(s,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=c(t,e,r);if("normal"===l.type){if(n=r.done?m:h,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}(t,r,s),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={};function v(){}function w(){}function y(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(k([])));_&&_!==r&&n.call(_,a)&&(g=_);var x=y.prototype=v.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(o,a,s,i){var l=c(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,i)}),(function(t){r("throw",t,s,i)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,i)}))}i(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function F(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:E}}function E(){return{value:e,done:!0}}return w.prototype=x.constructor=y,y.constructor=w,w.displayName=l(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(A.prototype),A.prototype[s]=function(){return this},t.AsyncIterator=A,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var s=new A(u(e,r,n,o),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(x),l(x,i,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(l&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["forum/app"];var e=r.n(t);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/NotificationGrid"];var s=r.n(a);const i=flarum.core.compat["common/Model"];var l=r.n(i);const u=flarum.core.compat["common/models/User"];var c=r.n(u);const f=flarum.core.compat["forum/utils/UserControls"];var h=r.n(f);const p=flarum.core.compat["common/components/Button"];var d=r.n(p);function v(t,e,r,n,o,a,s){try{var i=t[a](s),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(n,o)}function w(){return w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},w.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function g(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e)}var b=r(195),_=r.n(b);const x=flarum.core.compat["common/components/Modal"];var L=r.n(x);const A=flarum.core.compat["common/components/Select"];var F=r.n(A);const P=flarum.core.compat["common/app"];var O=r.n(P),j=function(t){return function(e){return O().translator.trans("ianm-follow-users.lib.follow_levels."+t,e)}},k=Object.freeze([{value:"unfollow",name:j("unfollow.name"),description:j("unfollow.description")},{value:"follow",name:j("follow.name"),description:j("follow.description")},{value:"lurk",name:j("lurk.name"),description:j("lurk.description")}]),E=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={user:null,saving:!1,followState:void 0},e.className=function(){return"iam_follow_users-selectFollowLevelModal"},e}g(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state.user=this.attrs.user,this.state.followState=this.state.user.followed()||"unfollow"},n.title=function(){var t;return this.trans("title",{username:m("em",null,null==(t=this.state.user)||null==t.username?void 0:t.username())})},n.content=function(){var t=this;if(!(this.state.user instanceof c()))return m("div",{class:"Modal-body"},m("p",null,this.trans("no_user_attr_provided_err"+(e().forum.attribute("debug")?"_debug":""))));var r=this.state.user,n=k.reduce((function(t,e){var r;return w({},t,((r={})[e.value]=e.name(),r))}),{}),o=k.find((function(e){return e.value===t.state.followState}));return m("div",{class:"Modal-body"},m("fieldset",null,m("legend",null,this.trans("description",{user:r})),m("div",{class:"selectFollowLevelModal-level"},m("label",{for:"selectFollowLevelModal-select"},this.trans("follow_select_label")),m(F(),{disabled:this.state.saving,id:"selectFollowLevelModal-select",onchange:this.onFollowLevelChange.bind(this),value:o.value,"aria-described-by":"selectFollowLevelModal-"+o.value+"-help",options:n}),m("p",{id:"selectFollowLevelModal-"+o.value+"-help"},o.description({user:r})))),m("fieldset",{class:"selectFollowLevelModal-actions"},m(d(),{disabled:this.state.saving,class:"Button",onclick:this.hide.bind(this)},this.trans("cancel_btn")),m(d(),{disabled:this.state.saving,class:"Button Button--primary",onclick:this.saveFollowLevel.bind(this),loading:this.state.saving},this.trans("save_btn"))))},n.onFollowLevelChange=function(){var t=this.$(".Select-input")[0];this.state.followState=t.value||"unfollow"},n.trans=function(t){for(var r,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(r=e().translator).trans.apply(r,["ianm-follow-users.forum.modals.select_follow_level."+t].concat(o))},n.onsubmit=function(){this.saveFollowLevel()},n.saveFollowLevel=function(){var t,e=(t=_().mark((function t(){var e;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="unfollow"===this.state.followState?null:this.state.followState,this.state.saving=!0,this.state.user.attribute("following")!==e){t.next=5;break}return this.hide(),t.abrupt("return");case 5:return t.next=7,this.state.user.save({followUsers:e});case 7:t.sent,this.hide();case 9:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){v(a,n,o,s,i,"next",t)}function i(t){v(a,n,o,s,i,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}(),r}(L());const S=flarum.core.compat["forum/components/UserCard"];var U=r.n(S),C=r(252);function M(t,e,r){return N(t,(0,C.parse)(e),r)}function N(t,e,r){var n;n=Array.isArray(t)?t:[t];var o=void 0;return n.some((function(t){if("boolean"==typeof t||"number"==typeof t||"string"==typeof t||null==t)return!1;if(Array.isArray(t)){var n=N(t,e,r);return!!n&&(o=n,!0)}if(function(t,e){return e.some((function(e){return e.every((function(e){var r,n,o,a;switch(e.type){case"tag":return t.tag===e.name;case"attribute":if(!t.attrs)return!1;"class"===e.name&&(e.name="className");var s=t.attrs[e.name];switch("className"===e.name&&"string"==typeof s&&(s=s.trim()),e.ignoreCase&&"string"==typeof s&&(s=s.toLowerCase(),e.value=e.value.toLowerCase()),e.action){case"exists":return t.attrs.hasOwnProperty(e.name);case"equals":return s===e.value;case"start":return(null==(r=s)||null==r.startsWith?void 0:r.startsWith(e.value))||!1;case"end":return(null==(n=s)||null==n.endsWith?void 0:n.endsWith(e.value))||!1;case"element":return(null==(o=s)||null==o.split||null==(a=o.split(" "))||null==a.includes?void 0:a.includes(e.value))||!1}}return!1}))}))}(t,e))return o=t,!0;if(Array.isArray(t.children)){var a=N(t.children,e);return!!a&&(o=a,!0)}return!1})),r&&o&&r(o),o}const B=flarum.core.compat["common/components/LinkButton"];var G=r.n(B);const T=flarum.core.compat["forum/components/UserPage"];var D=r.n(T);const I=flarum.core.compat["common/components/Link"];var q=r.n(I);const W=flarum.core.compat["common/helpers/avatar"];var z=r.n(W);const $=flarum.core.compat["common/helpers/username"];var R=r.n($),Y=function(t){function r(){return t.apply(this,arguments)||this}g(r,t);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.refresh()},n.refresh=function(){this.loading=!0,this.followedUsers=e().session.user.followedUsers(),this.loadUser(e().session.user.username())},n.changeUserFollowOptions=function(t){e().modal.show(E,{user:t})},n.content=function(){var t=this;return 0===this.followedUsers.length?m("div",{class:"Placeholder"},m("p",null,e().translator.trans("ianm-follow-users.forum.profile_page.no_following"))):m("table",{className:"NotificationGrid followPage-grid"},this.followedUsers.map((function(r,n){return m("tr",{class:"followPage-user"},m("td",null,m(q(),{href:e().route.user(r)},m("h3",null,z()(r,{className:"followPage-avatar"}),m("div",{class:"followPage-userInfo"},R()(r),m("span",{class:"followPage-type"},e().translator.trans("ianm-follow-users.forum.badge.label."+r.followed())))))),m("td",{className:"followPage-button"},m(d(),{icon:"fas fa-user-friends",type:"button",className:"Button Button--warning",onclick:function(){return t.changeUserFollowOptions(r)}},e().translator.trans("ianm-follow-users.forum.user_controls.unfollow_button"))))})))},n.show=function(){this.user=e().session.user,m.redraw()},r}(D());const H=flarum.core.compat["common/components/Notification"];var J=r.n(H),K=function(t){function r(){return t.apply(this,arguments)||this}g(r,t);var n=r.prototype;return n.icon=function(){return"fas fa-user-friends"},n.href=function(){var t=this.attrs.notification.subject();return e().route.discussion(t)},n.content=function(){return e().translator.trans("ianm-follow-users.forum.notifications.new_discussion_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},n.excerpt=function(){return null},r}(J()),Q=function(t){function r(){return t.apply(this,arguments)||this}g(r,t);var n=r.prototype;return n.icon=function(){return"fas fa-user-friends"},n.href=function(){var t=this.attrs.notification,r=t.subject(),n=t.content()||{};return e().route.discussion(r,n.postNumber)},n.content=function(){return e().translator.trans("ianm-follow-users.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},n.excerpt=function(){return null},r}(J()),V=function(t){function r(){return t.apply(this,arguments)||this}g(r,t);var n=r.prototype;return n.icon=function(){return"fas fa-user-plus"},n.href=function(){var t=this.attrs.notification.subject();return e().route.user(t)},n.content=function(){return e().translator.trans("ianm-follow-users.forum.notifications.new_follower_text",{user:this.attrs.notification.fromUser()})},n.excerpt=function(){return null},r}(J()),X=function(t){function r(){return t.apply(this,arguments)||this}g(r,t);var n=r.prototype;return n.icon=function(){return"fas fa-user-minus"},n.href=function(){var t=this.attrs.notification.subject();return e().route.user(t)},n.content=function(){return e().translator.trans("ianm-follow-users.forum.notifications.new_unfollower_text",{user:this.attrs.notification.fromUser()})},n.excerpt=function(){return null},r}(J());const Z=flarum.core.compat["common/models/Discussion"];var tt=r.n(Z);const et=flarum.core.compat["common/components/Badge"];var rt=r.n(et);const nt=flarum.core.compat["forum/components/SettingsPage"];var ot=r.n(nt);const at=flarum.core.compat["common/components/Switch"];var st=r.n(at);const it=flarum.extensions["fof-follow-tags"],lt=flarum.extensions["fof-user-directory"],ut=flarum.core.compat["forum/states/DiscussionListState"];var ct=r.n(ut),ft=it.utils.followingPageOptions;const ht=function(t){var e=ft(t);return e.users=O().translator.trans("ianm-follow-users.lib.following_link"),e},pt=flarum.core.compat["common/components/Separator"];var mt=r.n(pt);e().initializers.add("ianm-follow-users",(function(){c().prototype.followed=l().attribute("followed"),c().prototype.followedUsers=l().hasMany("followedUsers"),c().prototype.blocksFollow=l().attribute("blocksFollow"),c().prototype.canBeFollowed=l().attribute("canBeFollowed"),e().routes.followedUsers={path:"/followedUsers",component:Y},(0,o.extend)(h(),"userControls",(function(t,r){e().session.user&&e().session.user!==r&&r.canBeFollowed()&&t.add("follow",m(d(),{icon:"fas fa-user-friends",onclick:function(t){t instanceof c()&&e().modal.show(E,{user:t})}.bind(this,r)},e().translator.trans("ianm-follow-users.forum.user_controls."+(r.followed()?"unfollow_button":"follow_button"))))})),(0,o.extend)(U().prototype,"view",(function(t){if(e().forum.attribute("ianm-follow-users.button-on-profile")){var r=this.attrs.user,n=m(d(),{className:"Button",icon:"fas fa-user-friends",onclick:function(t){t instanceof c()&&e().modal.show(E,{user:t})}.bind(this,r)},e().translator.trans("ianm-follow-users.forum.user_controls."+(r.followed()?"unfollow_button":"follow_button")));M(t,".UserCard-profile",(function(t){t.children.splice(2,0,n)}))}})),(0,o.extend)(D().prototype,"navItems",(function(t){e().session.user&&e().session.user===this.user&&t.add("followed-users",m(G(),{href:e().route("followedUsers"),icon:"fas fa-user-friends"},e().translator.trans("ianm-follow-users.forum.profile_link")))})),(0,o.extend)(tt().prototype,"badges",(function(t){var r;null!=(r=this.user())&&null!=r.followed&&r.followed()&&t.add("user-following",m(rt(),{label:e().translator.trans("ianm-follow-users.forum.badge.label."+this.user().followed()),icon:"fas fa-user-friends",type:"friend"}))})),(0,o.extend)(c().prototype,"badges",(function(t){this.followed()&&t.add("user-following",m(rt(),{label:e().translator.trans("ianm-follow-users.forum.badge.label."+this.followed()),icon:"fas fa-user-friends",type:"friend"}))})),(0,o.extend)(ot().prototype,"privacyItems",(function(t){var r=this;t.add("follow-users-block",m(st(),{state:this.user.preferences().blocksFollow,onchange:function(t){r.blocksFollowLoading=!0,r.user.savePreferences({blocksFollow:t}).then((function(){r.blocksFollowLoading=!1,m.redraw()}))},loading:this.blocksFollowLoading},e().translator.trans("ianm-follow-users.forum.settings.block_follow")))})),e().initializers.has("fof/follow-tags")&&(it.utils.followingPageOptions=ht,it.utils.followingPageOptions("forum.index.following"),(0,o.extend)(ct().prototype,"requestParams",(function(t){if(it.utils.isFollowingPage()&&e().session.user){this.followTags||(this.followTags=it.utils.getDefaultFollowingFiltering());var r=this.followTags;"following"===e().current.get("routeName")&&"users"===r&&(t.filter["following-users"]=!0,delete t.filter.subscription)}}))),e().initializers.has("fof-user-directory")&&(0,o.extend)(lt.UserDirectoryPage.prototype,"groupItems",(function(t){var r=this;t.add("follow-users",lt.CheckableButton.component({className:"GroupFilterButton",icon:"fas fa-user-friends",checked:"is:followeduser"===this.enabledSpecialGroupFilters["ianm-follow-users"],onclick:function(){var t="ianm-follow-users";"is:followeduser"===r.enabledSpecialGroupFilters[t]?r.enabledSpecialGroupFilters[t]="":r.enabledSpecialGroupFilters[t]="is:followeduser",r.changeParams(r.params().sort)}},e().translator.trans("ianm-follow-users.forum.filter.following")),65),t.add("separator",m(mt(),null),50)})),e().notificationComponents.newFollower=V,e().notificationComponents.newUnfollower=X,e().notificationComponents.newDiscussionByUser=K,e().notificationComponents.newPostByUser=Q,(0,o.extend)(s().prototype,"notificationTypes",(function(t){t.add("newFollower",{name:"newFollower",icon:"fas fa-user-plus",label:e().translator.trans("ianm-follow-users.forum.settings.notify_new_follower_label")}),t.add("newUnfollower",{name:"newUnfollower",icon:"fas fa-user-minus",label:e().translator.trans("ianm-follow-users.forum.settings.notify_new_unfollower_label")}),t.add("newDiscussionByUser",{name:"newDiscussionByUser",icon:"fas fa-user-friends",label:e().translator.trans("ianm-follow-users.forum.settings.notify_new_discussion_label")}),t.add("newPostByUser",{name:"newPostByUser",icon:"fas fa-user-friends",label:e().translator.trans("ianm-follow-users.forum.settings.notify_new_post_label")})}))}),-1)})(),module.exports=n})();
//# sourceMappingURL=forum.js.map