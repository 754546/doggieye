(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-alphabeticName"],{"210f":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goback.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e("a714")}})],1),a("v-uni-view",[t._v("首字母取名")])],1),a("v-uni-view",{staticClass:"nameList"},t._l(t.data,(function(i,e){return a("v-uni-view",{key:e,staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Details(i)}}},[1==i.sex?a("v-uni-view",{staticClass:"sex_img1 sex_img"},[a("v-uni-image",{attrs:{src:"http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png"}})],1):t._e(),2==i.sex?a("v-uni-view",{staticClass:"sex_img2 sex_img"},[a("v-uni-image",{attrs:{src:"http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png"}})],1):t._e(),3==i.sex?a("v-uni-view",{staticClass:"sex_img3 sex_img"},[a("v-uni-image",{attrs:{src:"http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png"}})],1):t._e(),a("v-uni-view",{staticClass:"details"},[a("v-uni-view",[a("v-uni-view",[t._v(t._s(i.englishName))]),3==i.sex?a("v-uni-view",{staticStyle:{color:"#FFB400"}},[t._v("中性")]):t._e(),2==i.sex?a("v-uni-view",{staticStyle:{color:"#FF97D9"}},[t._v("女生")]):t._e(),1==i.sex?a("v-uni-view",{staticStyle:{color:"#53A0E8"}},[t._v("男生")]):t._e()],1),a("v-uni-view",[a("v-uni-view",[t._v(t._s(i.chineseName))]),a("v-uni-view",{staticStyle:{color:"#999999"}},[t._v(t._s(i.clickNumber)+"万人使用")])],1)],1)],1)})),1),a("v-uni-image",{staticClass:"topButton",attrs:{src:"http://pic.doggieye.com/20200317/d8545ca8ae4f4d96ad705bddf6b97b33.png"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.top.apply(void 0,arguments)}}})],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},"2b6f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("27ab"),n={data:function(){return{data:[],pageSize:1,pageNumber:10,initial:"",totalPage:1}},onLoad:function(t){this.initial=t.initial,this.getInfo()},onReachBottom:function(){this.pageSize<this.totalPage?(this.pageSize++,this.getInfo()):(0,a.toast)("没有更多了")},methods:{getInfo:function(){var t=this;uni.showLoading();var i=setTimeout((function(){(0,a.toast)("网络连接超时"),uni.hideLoading()}),15e3);(0,a.post)("/api/game/englishName/list",{curPage:this.pageSize,limit:this.pageNumber,vo:{initial:this.initial}}).then((function(e){for(var a=0;a<e[1].data.data.list.length;a++)t.data.push(e[1].data.data.list[a]);t.totalPage=e[1].data.data.totalPage,clearTimeout(i),uni.hideLoading()})).catch((function(t){uni.hideLoading(),(0,a.toast)(t[1].data.msg),clearTimeout(i)}))},top:function(){uni.pageScrollTo({scrollTop:0,duration:0})},Details:function(t){uni.navigateTo({url:"namesDetails?englishName="+t.englishName})},goback:function(){window.history.go(-1)}}};i.default=n},"3b38":function(t,i,e){var a=e("b027");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("93da176e",a,!0,{sourceMap:!1,shadowMode:!1})},"944ad":function(t,i,e){"use strict";var a=e("3b38"),n=e.n(a);n.a},a714:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMA2Q3NFRjFCb8HEtLiH56Pp1ugAAABP0lEQVR42u3cMU4CURSF4VtIY62diazBFegOZAE2Nrbuwti5BK3tLG2oKEnYCiEhFIQHDwpOyAAFnElu+P/yNOSjYRImN7L0Ev46d6Ow1yvDcNe5L/PnsKSQUm7DkkJKGT+GIYXUbsKRQirlW0cHpPanowNSW8jogpQHGV2QSXc7AgECBAgQIEBWAQECBAgQN+SqDcgTECCbgAABAuQ0yKuMLsj0XVYX5E1GIECAAAECBMgqIEDOCPmQ0QWZfcnqgnzKCKS56zYgv21A+kCArMv5Ic1fF5RLoPz4KfqbtfsUke15SB6IoECpQYECBQoUKFCgQOnGbrn+Kd9SJlCg1KBAgQIlwTvJ0YMCBQqUGhQoUKBAgQIFysVTFrq6KP/RVKaTQUeOH2U647SmDMKTUuaj2FemI2GHz52lOtx2vCVwjDrum4ozpQAAAABJRU5ErkJggg=="},b027:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.topButton[data-v-8a39d150]{width:%?120?%;height:%?120?%;display:block;position:fixed;right:%?26?%;bottom:%?120?%}.content[data-v-8a39d150]{min-height:100vh;background-color:#e4f2fa}.nameList[data-v-8a39d150]{width:100%;padding-bottom:%?20?%;overflow:hidden}.nameList .name[data-v-8a39d150]{width:%?702?%;height:%?136?%;background:#fff;box-shadow:0 %?5?% %?14?% %?2?% rgba(139,199,255,.14);border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% auto 0}.nameList .name .sex_img[data-v-8a39d150]{width:%?96?%;height:%?96?%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?26?%}.nameList .name .sex_img1[data-v-8a39d150]{background:#e2f1ff}.nameList .name .sex_img1 uni-image[data-v-8a39d150]{width:%?64?%;height:%?66?%}.nameList .name .sex_img2[data-v-8a39d150]{background:#ffe4ee}.nameList .name .sex_img2 uni-image[data-v-8a39d150]{width:%?72?%;height:%?66?%}.nameList .name .sex_img3[data-v-8a39d150]{background:#ffe595}.nameList .name .sex_img3 uni-image[data-v-8a39d150]{width:%?60?%;height:%?60?%}.nameList .name .details[data-v-8a39d150]{margin-left:%?26?%;width:%?532?%}.nameList .name .details > uni-view[data-v-8a39d150]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?50?%}.head[data-v-8a39d150]{height:%?168?%;width:100%;background:url(http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png);background-size:100%;text-align:center;line-height:%?168?%;font-size:%?36?%;font-family:PingFang SC;font-weight:600;letter-spacing:2px}.head > uni-view[data-v-8a39d150]:first-child{width:%?100?%;height:%?168?%;line-height:%?168?%;display:inline-block;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:0;left:0}.head uni-image[data-v-8a39d150]{width:%?28?%;height:%?28?%}',""]),t.exports=i},b5fb:function(t,i,e){"use strict";e.r(i);var a=e("2b6f"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},ff41:function(t,i,e){"use strict";e.r(i);var a=e("210f"),n=e("b5fb");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("944ad");var o,c=e("f0c5"),d=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"8a39d150",null,!1,a["a"],o);i["default"]=d.exports}}]);