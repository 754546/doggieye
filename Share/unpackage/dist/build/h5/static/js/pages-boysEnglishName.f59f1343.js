(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-boysEnglishName"],{"218f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-09f3fafa]{background-color:#e4f2fa;min-height:100vh}.topButton[data-v-09f3fafa]{width:%?120?%;height:%?120?%;display:block;position:fixed;right:%?26?%;bottom:%?120?%}.nameList[data-v-09f3fafa]{width:100%;padding-bottom:%?20?%;overflow:hidden}.nameList .name[data-v-09f3fafa]{width:%?702?%;height:%?136?%;background:#fff;box-shadow:0 %?5?% %?14?% %?2?% rgba(139,199,255,.14);border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% auto 0}.nameList .name .sex_img[data-v-09f3fafa]{width:%?96?%;height:%?96?%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?26?%;background:#e2f1ff}.nameList .name .sex_img uni-image[data-v-09f3fafa]{width:%?72?%;height:%?66?%}.nameList .name .details[data-v-09f3fafa]{margin-left:%?26?%;width:%?532?%}.nameList .name .details > uni-view[data-v-09f3fafa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?50?%}.nameList .name .details > uni-view > uni-view[data-v-09f3fafa]:first-child{width:%?300?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.head[data-v-09f3fafa]{height:%?168?%;width:100%;background:url(http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png);background-size:100%;text-align:center;line-height:%?168?%;font-size:%?36?%;font-family:PingFang SC;font-weight:600;letter-spacing:2px}.head > uni-view[data-v-09f3fafa]:first-child{width:%?100?%;height:%?168?%;line-height:%?168?%;display:inline-block;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:0;left:0}.head uni-image[data-v-09f3fafa]{width:%?28?%;height:%?28?%}',""]),t.exports=e},"2e06":function(t,e,i){var a=i("218f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("74bf60b8",a,!0,{sourceMap:!1,shadowMode:!1})},"3f45":function(t,e,i){"use strict";i.r(e);var a=i("bc46"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},9514:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:i("a714")}})],1),a("v-uni-view",[t._v("男生英文名TOP100")])],1),a("v-uni-view",{staticClass:"nameList"},t._l(t.data,(function(e,i){return 1==e.sex?a("v-uni-view",{key:i,staticClass:"name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.Details(e)}}},[a("v-uni-view",{staticClass:"sex_img1 sex_img"},[a("v-uni-image",{attrs:{src:"http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png"}})],1),a("v-uni-view",{staticClass:"details"},[a("v-uni-view",[a("v-uni-view",[t._v(t._s(e.englishName))]),a("v-uni-view",{staticStyle:{color:"#53A0E8"}},[t._v("男生 NO."+t._s(i+1))])],1),a("v-uni-view",[a("v-uni-view",[t._v(t._s(e.chineseName))]),a("v-uni-view",{staticStyle:{color:"#999999"}},[t._v(t._s(t.data.usageNumber)+"万人使用")])],1)],1)],1):t._e()})),1),a("v-uni-image",{staticClass:"topButton",attrs:{src:"http://pic.doggieye.com/20200317/d8545ca8ae4f4d96ad705bddf6b97b33.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.top.apply(void 0,arguments)}}})],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"9b16":function(t,e,i){"use strict";var a=i("2e06"),n=i.n(a);n.a},a714:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMA2Q3NFRjFCb8HEtLiH56Pp1ugAAABP0lEQVR42u3cMU4CURSF4VtIY62diazBFegOZAE2Nrbuwti5BK3tLG2oKEnYCiEhFIQHDwpOyAAFnElu+P/yNOSjYRImN7L0Ev46d6Ow1yvDcNe5L/PnsKSQUm7DkkJKGT+GIYXUbsKRQirlW0cHpPanowNSW8jogpQHGV2QSXc7AgECBAgQIEBWAQECBAgQN+SqDcgTECCbgAABAuQ0yKuMLsj0XVYX5E1GIECAAAECBMgqIEDOCPmQ0QWZfcnqgnzKCKS56zYgv21A+kCArMv5Ic1fF5RLoPz4KfqbtfsUke15SB6IoECpQYECBQoUKFCgQOnGbrn+Kd9SJlCg1KBAgQIlwTvJ0YMCBQqUGhQoUKBAgQIFysVTFrq6KP/RVKaTQUeOH2U647SmDMKTUuaj2FemI2GHz52lOtx2vCVwjDrum4ozpQAAAABJRU5ErkJggg=="},bc46:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("27ab"),n={data:function(){return{data:[],list:[],totalPage:1,pageSize:1,pageNumber:10}},onLoad:function(){this.getInfo()},onReachBottom:function(){this.pageSize<this.totalPage?(this.pageSize++,this.getInfo()):(0,a.toast)("没有更多了")},methods:{getInfo:function(){var t=this;uni.showLoading();var e=setTimeout((function(){(0,a.toast)("网络连接超时"),uni.hideLoading()}),15e3);(0,a.post)("/api/game/englishName/list",{curPage:this.pageSize,limit:this.pageNumber,vo:{isBoyTop:1}}).then((function(i){for(var a=0;a<i[1].data.data.list.length;a++)t.data.push(i[1].data.data.list[a]),clearTimeout(e);t.totalPage=i[1].data.data.totalPage,uni.hideLoading()})).catch((function(t){uni.hideLoading(),(0,a.toast)(t[1].data.msg),clearTimeout(e)}))},top:function(){uni.pageScrollTo({scrollTop:0,duration:0})},Details:function(t){uni.navigateTo({url:"namesDetails?englishName="+t.englishName})},goback:function(){window.history.go(-1)}}};e.default=n},d740:function(t,e,i){"use strict";i.r(e);var a=i("9514"),n=i("3f45");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9b16");var s,c=i("f0c5"),f=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"09f3fafa",null,!1,a["a"],s);e["default"]=f.exports}}]);