(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/study/study"],{"8a5e":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var u={uNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-navbar/u-navbar")]).then(t.bind(null,"f84d"))},uPopup:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-popup/u-popup")]).then(t.bind(null,"158be"))},"u-Text":function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u--text/u--text")]).then(t.bind(null,"fab2"))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"24f1"))},uRow:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-row/u-row")]).then(t.bind(null,"17ca"))},uCol:function(){return Promise.all([t.e("common/vendor"),t.e("node-modules/uview-ui/components/u-col/u-col")]).then(t.bind(null,"41bb"))}},o=function(){var n=this,e=n.$createElement;n._self._c},i=[]},a4e0:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{char:[{eng:"comparison",cn:"比较"}],listnum:0,charlist:[{eng:"separate",cn:"单独的"},{eng:"simplify",cn:"使简化"},{eng:"similar",cn:"相似的"},{eng:"eliminate",cn:"排除"},{eng:"preliminary",cn:"初步的"},{eng:"limit",cn:"限制"},{eng:"limited",cn:"有限的"},{eng:"superrfluous",cn:"多余的"}],show:!1}},methods:{next:function(){8==this.listnum?this.show=!0:(this.char[0].eng=this.charlist[this.listnum].eng,this.char[0].cn=this.charlist[this.listnum].cn,this.listnum=this.listnum+1)},another:function(){this.listnum=0,this.show=!1,this.char[0].eng=this.charlist[this.listnum].eng,this.char[0].cn=this.charlist[this.listnum].cn},returnback:function(){n.redirectTo({url:"../main/main"})},close:function(){this.show=!1},open:function(){}}};e.default=t}).call(this,t("543d")["default"])},b4ca:function(n,e,t){"use strict";(function(n){t("df30");u(t("66fd"));var e=u(t("e19e"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},bf31:function(n,e,t){"use strict";t.r(e);var u=t("a4e0"),o=t.n(u);for(var i in u)"default"!==i&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=o.a},e19e:function(n,e,t){"use strict";t.r(e);var u=t("8a5e"),o=t("bf31");for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);var r,c=t("f0c5"),s=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=s.exports}},[["b4ca","common/runtime","common/vendor"]]]);