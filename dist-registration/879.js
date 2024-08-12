(globalThis.webpackChunk_kenyaemr_esm_patient_registration_app=globalThis.webpackChunk_kenyaemr_esm_patient_registration_app||[]).push([[879],{8879:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",s="minute",i="hour",u="day",a="week",c="month",o="quarter",h="year",f="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,u=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:a,d:u,D:f,h:i,m:s,s:r,ms:n,Q:o}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",v={};v[g]=m;var p="$isDayjsObject",D=function(t){return t instanceof b||!(!t||!t[p])},S=function t(e,n,r){var s;if(!e)return g;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(s=i),n&&(v[i]=n,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;v[a]=e,s=a}return!r&&s&&(g=s),s||!r&&g},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},_=y;_.l=S,_.i=D,_.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var M=m.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return _},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,o=!!_.u(e)||e,d=_.p(t),$=function(t,e){var r=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return o?r:r.endOf(u)},l=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,M=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case h:return o?$(1,0):$(31,11);case c:return o?$(1,M):$(0,M+1);case a:var v=this.$locale().weekStart||0,p=(m<v?m+7:m)-v;return $(o?y-p:y+(6-p),M);case u:case f:return l(g+"Hours",0);case i:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case r:return l(g+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var a,o=_.p(t),d="set"+(this.$u?"UTC":""),$=(a={},a[u]=d+"Date",a[f]=d+"Date",a[c]=d+"Month",a[h]=d+"FullYear",a[i]=d+"Hours",a[s]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[o],l=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(f,1);m.$d[$](l),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[_.p(t)]()},M.add=function(n,o){var f,d=this;n=Number(n);var $=_.p(o),l=function(t){var e=w(d);return _.w(e.date(e.date()+Math.round(t*n)),d)};if($===c)return this.set(c,this.$M+n);if($===h)return this.set(h,this.$y+n);if($===u)return l(1);if($===a)return l(7);var m=(f={},f[s]=t,f[i]=e,f[r]=1e3,f)[$]||1,M=this.$d.getTime()+n*m;return _.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=_.z(this),i=this.$H,u=this.$m,a=this.$M,c=n.weekdays,o=n.months,h=n.meridiem,f=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},$=function(t){return _.s(i%12||12,t,"0")},m=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(l,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return a+1;case"MM":return _.s(a+1,2,"0");case"MMM":return f(n.monthsShort,a,o,3);case"MMMM":return f(o,a);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,c,2);case"ddd":return f(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return _.s(i,2,"0");case"h":return $(1);case"hh":return $(2);case"a":return m(i,u,!0);case"A":return m(i,u,!1);case"m":return String(u);case"mm":return _.s(u,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,f,d){var $,l=this,m=_.p(f),M=w(n),y=(M.utcOffset()-this.utcOffset())*t,g=this-M,v=function(){return _.m(l,M)};switch(m){case h:$=v()/12;break;case c:$=v();break;case o:$=v()/3;break;case a:$=(g-y)/6048e5;break;case u:$=(g-y)/864e5;break;case i:$=g/e;break;case s:$=g/t;break;case r:$=g/1e3;break;default:$=g}return d?$:_.a($)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return v[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return _.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},m}(),O=b.prototype;return w.prototype=O,[["$ms",n],["$s",r],["$m",s],["$H",i],["$W",u],["$M",c],["$y",h],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=v[g],w.Ls=v,w.p={},w}()}}]);