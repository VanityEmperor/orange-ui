(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{379:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},380:function(t,e,n){var s=n(27),a="["+n(379)+"]",i=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),o=function(t){return function(e){var n=String(s(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},381:function(t,e,n){"use strict";var s=n(1),a=n(380).trim;s({target:"String",proto:!0,forced:n(382)("trim")},{trim:function(){return a(this)}})},382:function(t,e,n){var s=n(2),a=n(379);t.exports=function(t){return s((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},387:function(t,e,n){var s=n(6),a=n(118);t.exports=function(t,e,n){var i,r;return a&&"function"==typeof(i=e.constructor)&&i!==n&&s(r=i.prototype)&&r!==n.prototype&&a(t,r),t}},390:function(t,e,n){"use strict";var s=n(8),a=n(5),i=n(210),r=n(23),o=n(7),c=n(29),u=n(387),l=n(55),d=n(2),v=n(36),p=n(79).f,f=n(35).f,h=n(9).f,b=n(380).trim,m=a.Number,g=m.prototype,_="Number"==c(v(g)),N=function(t){var e,n,s,a,i,r,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=b(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+u}for(r=(i=u.slice(2)).length,o=0;o<r;o++)if((c=i.charCodeAt(o))<48||c>a)return NaN;return parseInt(i,s)}return+u};if(i("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,$=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof $&&(_?d((function(){g.valueOf.call(n)})):"Number"!=c(n))?u(new m(N(e)),n,$):N(e)},y=s?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)o(m,E=y[I])&&!o($,E)&&h($,E,f(m,E));$.prototype=g,g.constructor=$,r(a,"Number",$)}},424:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},427:function(t,e,n){},428:function(t,e,n){},429:function(t,e,n){},474:function(t,e,n){"use strict";n(424)},475:function(t,e,n){"use strict";n(425)},476:function(t,e,n){"use strict";n(426)},477:function(t,e,n){"use strict";n(427)},478:function(t,e,n){"use strict";n(428)},479:function(t,e,n){"use strict";n(429)},486:function(t,e,n){"use strict";n.r(e);n(381),n(116),n(208),n(78),n(117);var s=n(0),a={name:"GuluTabs",props:{selected:{type:String,required:!0},direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>=0}}},data:function(){return{eventBus:new s.a}},provide:function(){return{eventBus:this.eventBus}},methods:{checkChildren:function(){0===this.$children.length&&console&&console.warn&&console.warn("tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件")},selectTab:function(){var t=this;this.$children.forEach((function(e){"GuluTabsHead"===e.$options.name&&e.$children.forEach((function(e){"GuluTabsItem"===e.$options.name&&e.name===t.selected&&t.eventBus.$emit("update:selected",t.selected,e)}))}))}},mounted:function(){this.checkChildren(),this.selectTab()}},i=(n(474),n(53)),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs"},[this._t("default")],2)}),[],!1,null,null,null).exports,o={name:"GuluTabsHead",inject:["eventBus"],mounted:function(){var t=this;this.eventBus.$on("update:selected",(function(e,n){var s=n.$el.getBoundingClientRect(),a=s.width,i=(s.height,s.top,s.left);t.$refs.line.style.width="".concat(a,"px");var r=t.$refs.header.getBoundingClientRect().left;t.$refs.line.style.left="".concat(i-r,"px")}))}},c=(n(475),Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"header",staticClass:"tabs-head"},[this._t("default"),this._v(" "),e("div",{ref:"line",staticClass:"line"}),this._v(" "),e("div",{staticClass:"actions-wrapper"},[this._t("actions")],2)],2)}),[],!1,null,"ac9eb92a",null).exports),u={name:"GuluTabsBody",inject:["eventBus"],created:function(){}},l=(n(476),Object(i.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs-body"},[this._t("default")],2)}),[],!1,null,null,null).exports),d=(n(390),{name:"GuluTabsItem",inject:["eventBus"],data:function(){return{active:!1}},props:{disabled:{type:Boolean,default:!1},name:{type:[String,Number],required:!0}},computed:{classes:function(){return{active:this.active,disabled:this.disabled}}},created:function(){var t=this;this.eventBus&&this.eventBus.$on("update:selected",(function(e){t.active=e===t.name}))},methods:{onClick:function(){this.disabled||(this.eventBus&&this.eventBus.$emit("update:selected",this.name,this),this.$emit("click",this))}}}),v=(n(477),Object(i.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs-item",class:this.classes,attrs:{"data-name":this.name},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"1427322e",null).exports),p={name:"GuluTabsPane",inject:["eventBus"],data:function(){return{active:!1}},props:{name:{type:[String,Number],required:!0}},computed:{classes:function(){return{active:this.active}}},created:function(){var t=this;this.eventBus.$on("update:selected",(function(e){t.active=e===t.name}))}},f=(n(478),{components:{"g-tabs":r,"g-tabs-head":c,"g-tabs-item":v,"g-tabs-body":l,"g-tabs-pane":Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return this.active?e("div",{staticClass:"tabs-pane",class:this.classes},[this._t("default")],2):this._e()}),[],!1,null,"1c8ee987",null).exports},data:function(){return{selected:"1",selectedTab:"sports",content1:'\n<g-tabs :selected.sync="selectedTab">\n        <g-tabs-head>\n          <g-tabs-item name="woman">\n            动漫\n          </g-tabs-item>\n          <g-tabs-item name="finance">\n            武侠\n          </g-tabs-item>\n          <g-tabs-item name="sports">\n            盗墓\n          </g-tabs-item>\n        </g-tabs-head>\n        <g-tabs-body>\n          <g-tabs-pane name="woman">\n            火影忍者\n          </g-tabs-pane>\n          <g-tabs-pane name="finance">\n            多情剑客无情剑\n          </g-tabs-pane>\n          <g-tabs-pane name="sports">\n            盗墓笔记\n          </g-tabs-pane>\n        </g-tabs-body>\n</g-tabs>  \n\ndata () {\n  return {\n      selectedTab: \'sports\'\n  }\n} \n\n      '.trim(),content2:'\n<g-popover position="bottom" trigger="hover">\n    <template slot="content">\n        <div>popover内容</div>\n    </template>\n    <g-button>点我</g-button>\n</g-popover>\n<g-popover position="top" trigger="hover">\n    <template slot="content">\n        <div>popover内容</div>\n    </template>\n    <g-button>点我</g-button>\n</g-popover>\n<g-popover position="left" trigger="hover">\n    <template slot="content">\n        <div>popover内容</div>\n    </template>\n    <g-button>点我</g-button>\n</g-popover>\n<g-popover position="right" trigger="hover">\n    <template slot="content">\n        <div>popover内容</div>\n    </template>\n    <g-button>点我</g-button>\n</g-popover>\n      '.trim()}}}),h=(n(479),Object(i.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-tabs",{attrs:{selected:t.selectedTab},on:{"update:selected":function(e){t.selectedTab=e}}},[n("g-tabs-head",[n("g-tabs-item",{attrs:{name:"woman"}},[t._v("\n                动漫\n              ")]),t._v(" "),n("g-tabs-item",{attrs:{name:"finance"}},[t._v("\n                武侠\n              ")]),t._v(" "),n("g-tabs-item",{attrs:{name:"sports"}},[t._v("\n                盗墓\n              ")])],1),t._v(" "),n("g-tabs-body",[n("g-tabs-pane",{attrs:{name:"woman"}},[t._v("\n                火影忍者\n              ")]),t._v(" "),n("g-tabs-pane",{attrs:{name:"finance"}},[t._v("\n                多情剑客无情剑\n              ")]),t._v(" "),n("g-tabs-pane",{attrs:{name:"sports"}},[t._v("\n                盗墓笔记\n              ")])],1)],1),t._v(" "),n("h2",[t._v("代码")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content1))])]),t._v(" "),n("h2",[t._v("属性")]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("td",[t._v("参数")]),t._v(" "),n("td",[t._v("说明")]),t._v(" "),n("td",[t._v("类型")]),t._v(" "),n("td",[t._v("可选值")]),t._v(" "),n("td",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("selected")]),t._v(" "),n("td",[t._v("默认选项name")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("—")])])])])}],!1,null,"3f3a99e6",null));e.default=h.exports}}]);