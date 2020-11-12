(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{506:function(n,t,e){"use strict";e.r(t);var o=e(53),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("本节将介绍如何在项目中使用 oranges-ui。")]),n._v(" "),e("p",[n._v("1.添加 CSS 样式\n使用本框架前，请在 CSS 中开启 border-box")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("*{box-sizing: border-box;}\n")])])]),e("p",[n._v("你还需要设置默认颜色等变量（后续会改为 SCSS 变量）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("html {\n    --button-height: 32px;\n    --font-size: 14px;\n    --button-bg: white;\n    --button-active-bg: #eee;\n    --border-radius: 4px;\n    --color: #333;\n    --border-color: #999;\n    --border-color-hover: #666;\n}\n")])])]),e("p",[n._v("IE 15 及以上浏览器都支持此样式。\n2.引入 oranges-ui")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import {Button,Icon,Input} from 'oranges-ui'\nimport 'oranges-ui/dist/index.css'\n\nexport default {\n    name: 'app',\n    components: {\n        'g-button': Button,\n        'g-icon': Icon,\n        'g-input':Input\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);