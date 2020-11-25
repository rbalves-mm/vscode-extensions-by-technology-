(()=>{var t={530:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",o="week",i="month",a="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,i),o=n-s<0,a=e.clone().add(r+(o?-1:1),i);return+(-(r+(n-s)/(o?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:i,y:u,w:o,d:s,D:c,h:r,m:n,s:e,ms:t,Q:a}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",m={};m[g]=h;var v=function(t){return t instanceof w},y=function(t,e,n){var r;if(!t)return g;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var s=t.name;m[s]=t,r=s}return!n&&r&&(g=r),r||!n&&g},$=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},b=p;b.l=y,b.i=v,b.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function h(t){this.$L=y(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var s=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return $(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<$(t)},f.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,a){var l=this,d=!!b.u(a)||a,h=b.p(t),f=function(t,e){var n=b.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(s)},p=function(t,e){return b.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case u:return d?f(1,0):f(31,11);case i:return d?f(1,m):f(0,m+1);case o:var $=this.$locale().weekStart||0,w=(g<$?g+7:g)-$;return f(d?v-w:v+(6-w),m);case s:case c:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case n:return p(y+"Seconds",2);case e:return p(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(o,a){var l,d=b.p(o),h="set"+(this.$u?"UTC":""),f=(l={},l[s]=h+"Date",l[c]=h+"Date",l[i]=h+"Month",l[u]=h+"FullYear",l[r]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],p=d===s?this.$D+(a-this.$W):a;if(d===i||d===u){var g=this.clone().set(c,1);g.$d[f](p),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[b.p(t)]()},f.add=function(t,a){var c,l=this;t=Number(t);var d=b.p(a),h=function(e){var n=$(l);return b.w(n.date(n.date()+Math.round(e*t)),l)};if(d===i)return this.set(i,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===s)return h(1);if(d===o)return h(7);var f=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,p=this.$d.getTime()+t*f;return b.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$locale(),o=this.$H,i=this.$m,a=this.$M,u=s.weekdays,c=s.months,l=function(t,r,s,o){return t&&(t[r]||t(e,n))||s[r].substr(0,o)},h=function(t){return b.s(o%12||12,t,"0")},f=s.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:b.s(a+1,2,"0"),MMM:l(s.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,u,2),ddd:l(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:b.s(o,2,"0"),h:h(1),hh:h(2),a:f(o,i,!0),A:f(o,i,!1),m:String(i),mm:b.s(i,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||p[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,h=b.p(c),f=$(t),p=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,m=b.m(this,f);return m=(d={},d[u]=m/12,d[i]=m,d[a]=m/3,d[o]=(g-p)/6048e5,d[s]=(g-p)/864e5,d[r]=g/36e5,d[n]=g/6e4,d[e]=g/1e3,d)[h]||g,l?m:b.a(m)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),S=w.prototype;return $.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",s],["$M",i],["$y",u],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t(e,w,$),$},$.locale=y,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=m[g],$.Ls=m,$.p={},$}()},664:function(t){t.exports=function(){"use strict";return function(t,e,n){var r=e.prototype,s=r.format;n.en.ordinal=function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"},r.format=function(t){var e=this,n=this.$locale(),r=this.$utils(),o=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|zzz|z|gggg|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return s.bind(this)(o)}}}()},703:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=s;var o=function(e,r,o,i){for(var a,u,c,l=o.$locale().relativeTime||s,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,f=0;f<h;f+=1){var p=d[f];p.d&&(a=i?n(e).diff(o,p.d,!0):o.diff(e,p.d,!0));var g=(t.rounding||Math.round)(Math.abs(a));if(c=a>0,g<=p.r||!p.r){g<=1&&f>0&&(p=d[f-1]);var m=l[p.l];u="string"==typeof m?m.replace("%d",g):m(g,r,p.l,c);break}}return r?u:(c?l.future:l.past).replace("%s",u)};r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var i=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(i(this),t)},r.fromNow=function(t){return this.from(i(this),t)}}}()}},e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";class t{constructor(t){this.method=t}}class e{constructor(t){this.method=t}}function r(t,e,n){n(e.params)}const s=new t("configuration/didChange"),o=new e("webview/ready"),i=new e("configuration/update"),a=new e("configuration/preview"),u=new t("configuration/didPreview"),c=(new t("settings/jumpTo"),new t("rebase/change"),new e("rebase/start"),new e("rebase/abort"),new e("rebase/disable"),new e("rebase/change/entry"),new e("rebase/move/entry"),/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i);function l(t,e){const n=t+e,r=e<0?n<0?0:n:n>255?255:n;return Math.round(r)}function d(t,e){return h(t,-e)}function h(t,e){const n=p(t);if(null==n)return t;const[r,s,o,i]=n,a=255*e/100;return`rgba(${l(r,a)}, ${l(s,a)}, ${l(o,a)}, ${i})`}function f(t,e){const n=p(t);if(null==n)return t;const[r,s,o,i]=n;return`rgba(${r}, ${s}, ${o}, ${i*(e/100)})`}function p(t){t=t.trim();const e=c.exec(t);if(null==e)return null;if("#"===e[1]){const t=e[2];switch(t.length){case 3:return[parseInt(t[0]+t[0],16),parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),1];case 6:return[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16),1]}return null}switch(e[3]){case"rgb":return[parseInt(e[4],10),parseInt(e[5],10),parseInt(e[6],10),1];case"rgba":return[parseInt(e[4],10),parseInt(e[5],10),parseInt(e[6],10),parseFloat(e[7])];default:return null}}let g=0;var m;!function(t){t.on=function(t,e,n,r,s){let o=!1;if("string"==typeof t){const i=(null!=s?s:document).querySelectorAll(t);for(const t of i)t.addEventListener(e,n,null!=r&&r);return{dispose:()=>{if(!o){o=!0;for(const t of i)t.removeEventListener(e,n,null!=r&&r)}}}}return t.addEventListener(e,n,null!=r&&r),{dispose:()=>{o||(o=!0,t.removeEventListener(e,n,null!=r&&r))}}}}(m||(m={}));var v=n(530),y=n.n(v),$=n(664),b=n.n($),w=n(703),S=n.n(w);y().extend(b()),y().extend(S());const k=(M=new Date("Wed Jul 25 2018 19:18:00 GMT-0400"),y()(M));var M;let P=0;function D(t){return"true"===t||"false"!==t&&t}function _(t,e,n){const r=e.split("."),s=r.length,o=s-1;let i=-1,a=t;for(;null!=a&&++i<s;){const t=r[i];let e=n;if(i!==o){const n=a[t];e="object"==typeof n?n:{}}a[t]=e,a=a[t]}return t}function I(t){const[e,n,r]=t.trim().split(/([=+!])/);return[e.trim(),void 0!==n?n.trim():"=",void 0!==r?r.trim():r]}function x(t,e){const n={};for(const r in t){const s=t[r];Array.isArray(s)||("object"==typeof s?Object.assign(n,x(s,void 0===e?r:`${e}.${r}`)):n[void 0===e?r:`${e}.${r}`]=s)}return n}function O(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new class extends class extends class{constructor(t,e){this.appName=t,this.log(`${this.appName}.ctor`),this._api=acquireVsCodeApi(),function(){const t=()=>{const t=document.body,e=window.getComputedStyle(t),n=t.style,r=e.getPropertyValue("--vscode-font-family").trim();r?(n.setProperty("--font-family",r),n.setProperty("--font-size",e.getPropertyValue("--vscode-font-size").trim()),n.setProperty("--font-weight",e.getPropertyValue("--vscode-font-weight").trim())):(n.setProperty("--font-family",e.getPropertyValue("--vscode-editor-font-family").trim()),n.setProperty("--font-size",e.getPropertyValue("--vscode-editor-font-size").trim()),n.setProperty("--font-weight",e.getPropertyValue("--vscode-editor-font-weight").trim()));let s=e.getPropertyValue("--vscode-editor-background").trim();n.setProperty("--color-background",s),n.setProperty("--color-background--lighten-05",h(s,5)),n.setProperty("--color-background--darken-05",d(s,5)),n.setProperty("--color-background--lighten-075",h(s,7.5)),n.setProperty("--color-background--darken-075",d(s,7.5)),n.setProperty("--color-background--lighten-15",h(s,15)),n.setProperty("--color-background--darken-15",d(s,15)),n.setProperty("--color-background--lighten-30",h(s,30)),n.setProperty("--color-background--darken-30",d(s,30)),n.setProperty("--color-background--lighten-50",h(s,50)),n.setProperty("--color-background--darken-50",d(s,50)),s=e.getPropertyValue("--vscode-button-background").trim(),n.setProperty("--color-button-background",s),n.setProperty("--color-button-background--darken-30",d(s,30)),s=e.getPropertyValue("--vscode-button-secondaryBackground").trim(),n.setProperty("--color-button-secondary-background",s),n.setProperty("--color-button-secondary-background--darken-30",d(s,30)),s=e.getPropertyValue("--vscode-button-background").trim(),n.setProperty("--color-highlight",s),n.setProperty("--color-highlight--75",f(s,75)),n.setProperty("--color-highlight--50",f(s,50)),n.setProperty("--color-highlight--25",f(s,25)),s=e.getPropertyValue("--vscode-button-foreground").trim(),n.setProperty("--color-button-foreground",s),s=e.getPropertyValue("--vscode-editor-foreground").trim(),s||(s=e.getPropertyValue("--vscode-foreground").trim()),n.setProperty("--color-foreground",s),n.setProperty("--color-foreground--85",f(s,85)),n.setProperty("--color-foreground--75",f(s,75)),n.setProperty("--color-foreground--65",f(s,65)),n.setProperty("--color-foreground--50",f(s,50)),s=e.getPropertyValue("--vscode-focusBorder").trim(),n.setProperty("--color-focus-border",s),s=e.getPropertyValue("--vscode-textLink-foreground").trim(),n.setProperty("--color-link-foreground",s),n.setProperty("--color-link-foreground--darken-20",d(s,20)),n.setProperty("--color-link-foreground--lighten-20",h(s,20))};new MutationObserver(t).observe(document.body,{attributes:!0,attributeFilter:["class"]}),t()}(),this.state=e,setTimeout((()=>{var t,e;this.log(`${this.appName}.initializing`),null===(t=this.onInitialize)||void 0===t||t.call(this),this.bind(),null!=this.onMessageReceived&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(o,{}),null===(e=this.onInitialized)||void 0===e||e.call(this),setTimeout((()=>{document.body.classList.remove("preload")}),500)}),0)}bind(){var t,e;null===(t=this.bindDisposables)||void 0===t||t.forEach((t=>t.dispose())),this.bindDisposables=null===(e=this.onBind)||void 0===e?void 0:e.call(this)}log(t){console.log(t)}getState(){return this._api.getState()}sendCommand(t,e){return this.postMessage({id:(g===Number.MAX_SAFE_INTEGER?g=1:g++,`webview:${g}`),method:t.method,params:e})}setState(t){this.state=t,this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}{constructor(t,e){super(t,e),this._changes=Object.create(null),this._updating=!1}onInitialized(){this.updateState()}onBind(){var t,e;const n=null!==(e=null===(t=super.onBind)||void 0===t?void 0:t.call(this))&&void 0!==e?e:[],r=this;return n.push(m.on("input[type=checkbox][data-setting]","change",(function(){return r.onInputChecked(this)})),m.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(function(){return r.onInputBlurred(this)})),m.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(function(){return r.onInputFocused(this)})),m.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(function(){return r.onInputChanged(this)})),m.on("select[data-setting]","change",(function(){return r.onInputSelected(this)})),m.on(".popup","mousedown",(function(t){return r.onPopupMouseDown(this,t)}))),n}onMessageReceived(t){const e=t.data;switch(e.method){case s.method:r(0,e,(t=>{this.state.config=t.config,this.state.customSettings=t.customSettings,this.updateState()}));break;default:void 0!==super.onMessageReceived&&super.onMessageReceived(t)}}applyChanges(){this.sendCommand(i,{changes:{...this._changes},removes:Object.keys(this._changes).filter((t=>void 0===this._changes[t])),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return"user"}onInputBlurred(t){this.log(`${this.appName}.onInputBlurred: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);null!=e&&e.classList.add("hidden");let n=t.value;null!=n&&0!==n.length||(n=t.dataset.defaultValue,void 0===n&&(n=null)),this._changes[t.name]="number"===t.type&&null!=n?Number(n):n,this.applyChanges()}onInputChanged(t){if(!this._updating)for(const e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){var e,n;if(!this._updating){switch(this.log(`${this.appName}.onInputChecked: name=${t.name}, checked=${t.checked}, value=${t.value}`),t.dataset.settingType){case"object":{const n=t.name.split("."),r=n.splice(0,1)[0],s=null!==(e=this.getSettingValue(r))&&void 0!==e?e:Object.create(null);t.checked?_(s,n.join("."),O(t.value)):_(s,n.join("."),!1),this._changes[r]=s;break}case"array":{const e=null!==(n=this.getSettingValue(t.name))&&void 0!==n?n:[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{const n=e.indexOf(t.value);-1!==n&&e.splice(n,1)}this._changes[t.name]=e}break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=O(t.value):this._changes[t.name]=null!=t.dataset.valueOff&&t.dataset.valueOff}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`${this.appName}.onInputFocused: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);if(null!=e){if(0===e.childElementCount){const t=document.querySelector("#token-popup"),n=document.importNode(t.content,!0);e.appendChild(n)}e.classList.remove("hidden")}}onInputSelected(t){if(this._updating)return;const e=t.options[t.selectedIndex].value;this.log(`${this.appName}.onInputSelected: name=${t.name}, value=${e}`),this._changes[t.name]=D(e),this.applyChanges()}onPopupMouseDown(t,e){e.preventDefault();const n=e.target;(null==n?void 0:n.matches("[data-token]"))&&this.onTokenMouseDown(n,e)}onTokenMouseDown(t,e){var n;if(this._updating)return;this.log(`${this.appName}.onTokenClicked: id=${t.id}`);const r=t.closest(".setting");if(null==r)return;const s=r.querySelector("input[type=text], input:not([type])");if(null==s)return;const o=`\${${t.dataset.token}}`;let i=s.selectionStart;null!=i?(s.value=`${s.value.substring(0,i)}${o}${s.value.substr(null!==(n=s.selectionEnd)&&void 0!==n?n:i)}`,i+=o.length):i=s.value.length,s.focus(),s.setSelectionRange(i,i),i===s.value.length&&(s.scrollLeft=s.scrollWidth),setTimeout((()=>this.onInputChanged(s)),0),setTimeout((()=>s.focus()),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}evaluateStateExpression(t,e){var n,r;let s=!1;for(const o of t.trim().split("&")){const[t,i,a]=I(o);switch(i){case"=":{let r=e[t];void 0===r&&(r=null!==(n=this.getSettingValue(t))&&void 0!==n&&n),s=void 0!==a?a===String(r):Boolean(r);break}case"!":{let n=e[t];void 0===n&&(n=null!==(r=this.getSettingValue(t))&&void 0!==r&&r),s=void 0!==a?a!==String(n):!n;break}case"+":if(void 0!==a){const e=this.getSettingValue(t);s=void 0!==e&&e.includes(a.toString())}}if(!s)break}return s}getCustomSettingValue(t){var e;return null===(e=this.state.customSettings)||void 0===e?void 0:e[t]}getSettingValue(t){const e=this.getCustomSettingValue(t);return null!=e?e:function(t,e){return e.split(".").reduce(((t={},e)=>null==t?void 0:t[e]),t)}(this.state.config,t)}updateState(){var t,e,n,r;this._updating=!0;try{for(const r of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===r.dataset.settingType)r.checked=null!==(t=this.getCustomSettingValue(r.name))&&void 0!==t&&t;else if("array"===r.dataset.settingType)r.checked=(null!==(e=this.getSettingValue(r.name))&&void 0!==e?e:[]).includes(r.value);else if(null!=r.dataset.valueOff){const t=this.getSettingValue(r.name);r.checked=r.dataset.valueOff!==t}else r.checked=null!==(n=this.getSettingValue(r.name))&&void 0!==n&&n;for(const t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=null!==(r=this.getSettingValue(t.name))&&void 0!==r?r:"";for(const t of document.querySelectorAll("select[data-setting]")){const e=this.getSettingValue(t.name),n=t.querySelector(`option[value='${e}']`);null!=n&&(n.selected=!0)}for(const t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}const s=x(this.state.config);this.setVisibility(s),this.setEnablement(s)}setAdditionalSettings(t){if(!t)return;const e=function(t){return t.trim().split(",").map((t=>{const[e,n]=t.split("=");return[e,D(n)]}))}(t);for(const[t,n]of e)this._changes[t]=n}setEnablement(t){for(const e of document.querySelectorAll("[data-enablement]")){const n=!this.evaluateStateExpression(e.dataset.enablement,t);if(n?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=n;else{const t=e.querySelector("input,select");if(null==t)continue;t.disabled=n}}}setVisibility(t){for(const e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){switch(t.dataset.settingPreviewType){case"date":void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),null!=e&&0!==e.length||(e=t.dataset.settingPreviewDefault),t.innerText=null==e?"":k.format(e);break;case"commit":{if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),null!=e&&0!==e.length||(e=t.dataset.settingPreviewDefault),null==e)return void(t.innerText="");const n=(P===Number.MAX_SAFE_INTEGER?P=1:P++,`${P}`),s=m.on(window,"message",(e=>{const o=e.data;o.method===u.method&&o.params.id===n&&(s.dispose(),r(0,o,(e=>{var n;t.innerText=null!==(n=e.preview)&&void 0!==n?n:""})))}));this.sendCommand(a,{key:t.dataset.settingPreview,type:"commit",id:n,format:e});break}}}}{constructor(){super("WelcomeApp",window.bootstrap),window.bootstrap=void 0}}})()})();
//# sourceMappingURL=welcome.js.map