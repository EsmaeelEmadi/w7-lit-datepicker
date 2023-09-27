var t="millisecond",n="second",r="minute",i="hour",s="day",e="week",u="month",h="quarter",a="year",c="date",o=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,n,r){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(r)+t},M={s:d,z:function(t){var n=-t.utcOffset(),r=Math.abs(n),i=Math.floor(r/60),s=r%60;return(n<=0?"+":"-")+d(i,2,"0")+":"+d(s,2,"0")},m:function t(n,r){if(n.date()<r.date())return-t(r,n);var i=12*(r.year()-n.year())+(r.month()-n.month()),s=n.clone().add(i,u),e=r-s<0,h=n.clone().add(i+(e?-1:1),u);return+(-(i+(r-s)/(e?s-h:h-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return{M:u,y:a,w:e,d:s,D:c,h:i,m:r,s:n,ms:t,Q:h}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",l={};l[m]=_;var v=function(t){return t instanceof S},D=function t(n,r,i){var s;if(!n)return m;if("string"==typeof n){var e=n.toLowerCase();l[e]&&(s=e),r&&(l[e]=r,s=e);var u=n.split("-");if(!s&&u.length>1)return t(u[0])}else{var h=n.name;l[h]=n,s=h}return!i&&s&&(m=s),s||!i&&m},Y=function(t,n){if(v(t))return t.clone();var r="object"==typeof n?n:{};return r.date=t,r.args=arguments,new S(r)},y=M;y.l=D,y.i=v,y.w=function(t,n){return Y(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var S=function(){function _(t){this.$L=D(t.locale,null,!0),this.parse(t)}var d=_.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,r=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(o);if(i){var s=i[2]-1||0,e=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,e)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,e)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return y},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var r=Y(t);return this.startOf(n)<=r&&r<=this.endOf(n)},d.isAfter=function(t,n){return Y(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<Y(t)},d.$g=function(t,n,r){return y.u(t)?this[n]:this.set(r,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,h){var o=this,f=!!y.u(h)||h,_=y.p(t),d=function(t,n){var r=y.w(o.$u?Date.UTC(o.$y,n,t):new Date(o.$y,n,t),o);return f?r:r.endOf(s)},M=function(t,n){return y.w(o.toDate()[t].apply(o.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),o)},m=this.$W,l=this.$M,v=this.$D,D="set"+(this.$u?"UTC":"");switch(_){case a:return f?d(1,0):d(31,11);case u:return f?d(1,l):d(0,l+1);case e:var Y=this.$locale().weekStart||0,S=(m<Y?m+7:m)-Y;return d(f?v-S:v+(6-S),l);case s:case c:return M(D+"Hours",0);case i:return M(D+"Minutes",1);case r:return M(D+"Seconds",2);case n:return M(D+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(e,h){var o,f=y.p(e),_="set"+(this.$u?"UTC":""),d=(o={},o[s]=_+"Date",o[c]=_+"Date",o[u]=_+"Month",o[a]=_+"FullYear",o[i]=_+"Hours",o[r]=_+"Minutes",o[n]=_+"Seconds",o[t]=_+"Milliseconds",o)[f],M=f===s?this.$D+(h-this.$W):h;if(f===u||f===a){var m=this.clone().set(c,1);m.$d[d](M),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](M);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[y.p(t)]()},d.add=function(t,h){var c,o=this;t=Number(t);var f=y.p(h),_=function(n){var r=Y(o);return y.w(r.date(r.date()+Math.round(n*t)),o)};if(f===u)return this.set(u,this.$M+t);if(f===a)return this.set(a,this.$y+t);if(f===s)return _(1);if(f===e)return _(7);var d=(c={},c[r]=6e4,c[i]=36e5,c[n]=1e3,c)[f]||1,M=this.$d.getTime()+t*d;return y.w(M,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this,r=this.$locale();if(!this.isValid())return r.invalidDate||"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),e=this.$H,u=this.$m,h=this.$M,a=r.weekdays,c=r.months,o=function(t,r,s,e){return t&&(t[r]||t(n,i))||s[r].slice(0,e)},_=function(t){return y.s(e%12||12,t,"0")},d=r.meridiem||function(t,n,r){var i=t<12?"AM":"PM";return r?i.toLowerCase():i},M={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:y.s(h+1,2,"0"),MMM:o(r.monthsShort,h,c,3),MMMM:o(c,h),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:o(r.weekdaysMin,this.$W,a,2),ddd:o(r.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(e),HH:y.s(e,2,"0"),h:_(1),hh:_(2),a:d(e,u,!0),A:d(e,u,!1),m:String(u),mm:y.s(u,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,n){return n||M[t]||s.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,e,c){var o,f=y.p(e),_=Y(t),d=6e4*(_.utcOffset()-this.utcOffset()),M=this-_,m=y.m(this,_);return m=(o={},o[a]=m/12,o[u]=m,o[h]=m/3,o.week=(M-d)/6048e5,o[s]=(M-d)/864e5,o[i]=M/36e5,o[r]=M/6e4,o[n]=M/1e3,o)[f]||M,c?m:y.a(m)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var r=this.clone(),i=D(t,n,!0);return i&&(r.$L=i),r},d.clone=function(){return y.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},_}(),w=S.prototype;Y.prototype=w,[["$ms",t],["$s",n],["$m",r],["$H",i],["$W",s],["$M",u],["$y",a],["$D",c]].forEach((function(t){w[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),Y.extend=function(t,n){return t.$i||(t(n,S,Y),t.$i=!0),Y},Y.locale=D,Y.isDayjs=v,Y.unix=function(t){return Y(1e3*t)},Y.en=l[m],Y.Ls=l,Y.p={};var $={name:"fa",weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekStart:6,months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"}};Y.locale($,null,!0);const g=Math.floor;function H(t,n){return t-n*g(t/n)}function b(t){return t%4==0&&!(t%100==0&&t%400!=0)}const p=1721425.5;function k(t,n,r){return p-1+365*(t-1)+g((t-1)/4)+-g((t-1)/100)+g((t-1)/400)+g((367*n-362)/12+(n<=2?0:b(t)?-1:-2)+r)}function L(t,n,r){let i,s;return i=t-(t>=0?474:473),s=474+H(i,2820),r+(n<=7?31*(n-1):30*(n-1)+6)+g((682*s-110)/2816)+365*(s-1)+1029983*g(i/2820)+1948319.5}var T=(t,n,r)=>function(t){let n,r,i,s,e,u,h,a,c,o;return s=(t=g(t)+.5)-L(475,1,1),e=g(s/1029983),u=H(s,1029983),1029982==u?h=2820:(a=g(u/366),c=H(u,366),h=g((2134*a+2816*c+2815)/1028522)+a+1),n=h+2820*e+474,n<=0&&n--,o=t-L(n,1,1)+1,r=o<=186?Math.ceil(o/31):Math.ceil((o-6)/30),i=t-L(n,r,1)+1,[n,r,i]}(k(t,n,r)),j=(t,n,r)=>function(t){let n,r,i,s,e,u,h,a,c,o,f,_;n=g(t-.5)+.5,r=n-p,i=g(r/146097),s=H(r,146097),e=g(s/36524),u=H(s,36524),h=g(u/1461),a=H(u,1461),c=g(a/365),o=400*i+100*e+4*h+c,4!=e&&4!=c&&o++,f=n-k(o,1,1),_=n<k(o,3,1)?0:b(o)?1:2;let d=g((12*(f+_)+373)/367);return[o,d,n-k(o,d,1)+1]}(L(t,n,r));const A=/^(\d{4})[-/]?(\d{1,2})[-/]?(\d{0,2})(.*)?$/,I=/\[.*?\]|jY{2,4}|jM{1,4}|jD{1,2}|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Z="day",N="month",F="year",J={jmonths:"فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_")};var x=(t,n,r)=>{const i=n.prototype,s=i.$utils(),e=t=>"jalali"===t.$C,u=s.prettyUnit||s.p,h=s.isUndefined||s.u,a=s.padStart||s.s,c=s.monthDiff||s.m,o=s.absFloor||s.a,f=t=>function(...n){const r=t.bind(this)(...n);return r.$C=this.$C,r.isJalali()&&r.InitJalali(),r};i.startOf=f(i.startOf),i.endOf=f(i.endOf),i.add=f(i.add),i.subtract=f(i.subtract),i.set=f(i.set);const _=i.parse,d=i.init,M=i.startOf,m=i.$set,l=i.add,v=i.format,D=i.diff,Y=i.year,y=i.month,S=i.date,w=i.daysInMonth,g=i.toArray,H=i.localeData;r.$C="gregory",r.$fdow=6,r.calendar=function(t){return r.$C=t,r},i.calendar=function(t){const n=this.clone();return n.$C=t,n.isJalali()&&n.InitJalali(),n},i.isJalali=function(){return e(this)},r.en.jmonths="Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand".split("_"),r.locale("fa",{...$,...J},!0);const b=function(t,n){return r(t,{locale:n.$L,utc:n.$u,calendar:n.$C})};i.init=function(t={}){d.bind(this)(t),this.isJalali()&&this.InitJalali()},i.parse=function(t){let n;if(this.$C=t.calendar||this.$C||r.$C,t.jalali&&"string"==typeof t.date&&/.*[^Z]$/i.test(t.date)&&(n=t.date.match(A))){const[r,i,s]=j(parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3]||1,10));t.date=`${r}-${i}-${s}${n[4]||""}`}return _.bind(this)(t)},i.InitJalali=function(){const[t,n,r]=T(this.$y,this.$M+1,this.$D);this.$jy=t,this.$jM=n-1,this.$jD=r},i.startOf=function(t,n){if(!e(this))return M.bind(this)(t,n);const i=!!h(n)||n,s=u(t),a=(t,n,r=this.$jy)=>{const[s,e,u]=j(r,n+1,t),h=b(new Date(s,e-1,u),this);return(i?h:h.endOf(Z)).$set("hour",1)},c=(this.$W+(7-r.$fdow))%7;switch(s){case F:return i?a(1,0):a(0,0,this.$jy+1);case N:return i?a(1,this.$jM):a(0,(this.$jM+1)%12,this.$jy+parseInt((this.$jM+1)/12,10));case"week":return a(i?this.$jD-c:this.$jD+(6-c),this.$jM);default:return M.bind(this)(t,n)}},i.$set=function(t,n){if(!e(this))return m.bind(this)(t,n);const r=(t,n,r=this.$jy)=>{const[i,s,e]=j(r,n+1,t);return this.$d.setFullYear(i),this.$d.setMonth(s-1),this.$d.setDate(e),this};switch(u(t)){case"date":case Z:r(n,this.$jM);break;case N:r(this.$jD,n);break;case F:r(this.$jD,this.$jM,n);break;default:return m.bind(this)(t,n)}return this.init(),this},i.add=function(t,n){if(!e(this))return l.bind(this)(t,n);t=Number(t);const r=!n||1!==n.length&&"ms"!==n?u(n):n;if(["M",N].indexOf(r)>-1){const n=this.$jM+t,r=n<0?-Math.ceil(-n/12):parseInt(n/12,10),i=this.$jD,s=this.set(Z,1).add(r,F).set(N,n-12*r);return s.set(Z,Math.min(s.daysInMonth(),i))}if(["y",F].indexOf(r)>-1)return((n,r)=>{const i=this.set("date",1).set(n,r+t);return i.set("date",Math.min(this.$jD,i.daysInMonth()))})(F,this.$jy);if(["d",Z].indexOf(r)>-1){const n=new Date(this.$d);return n.setDate(n.getDate()+t),b(n,this)}return l.bind(this)(t,n)},i.format=function(t,n){if(!e(this))return v.bind(this)(t,n);const r=t||"YYYY-MM-DDTHH:mm:ssZ",i=n||this.$locale(),{jmonths:s}=i;return r.replace(I,(t=>{if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(this.$jy).slice(-2);case"YYYY":return String(this.$jy);case"M":return String(this.$jM+1);case"MM":return a(this.$jM+1,2,"0");case"MMM":return s[this.$jM].slice(0,3);case"MMMM":return s[this.$jM];case"D":return String(this.$jD);case"DD":return a(this.$jD,2,"0");default:return v.bind(this)(t,n)}}))},i.diff=function(t,n,i){if(!e(this))return D.bind(this)(t,n,i);const s=u(n),h=r(t);let a=c(this,h);switch(s){case F:a/=12;break;case N:break;default:return D.bind(this)(t,n,i)}return i?a:o(a)},i.$g=function(t,n,r){return h(t)?this[n]:this.set(r,t)},i.year=function(t){return e(this)?this.$g(t,"$jy",F):Y.bind(this)(t)},i.month=function(t){return e(this)?this.$g(t,"$jM",N):y.bind(this)(t)},i.date=function(t){return e(this)?this.$g(t,"$jD",Z):S.bind(this)(t)},i.daysInMonth=function(){return e(this)?this.endOf(N).$jD:w.bind(this)()},g&&(i.toArray=function(){return e(this)?[this.$jy,this.$jM,this.$jD,this.$H,this.$m,this.$s,this.$ms]:g.bind(this)()}),i.clone=function(){return b(this.toDate(),this)},H&&(i.localeData=function(){return e(this)?{...H.bind(this)(),months:()=>J.jmonths}:H.bind(this)()})};export{x as default};
