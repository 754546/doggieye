(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-recommended"],{"2f99":function(t,e,i){"use strict";i.r(e);var n=i("8136"),a=i.n(n);for(var d in n)"default"!==d&&function(t){i.d(e,t,(function(){return n[t]}))}(d);e["default"]=a.a},3162:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.sex1[data-v-8ddf7bb4]{background:url(http://pic.doggieye.com/20200417/c238414221254325940ced74a1fee7f1.png) no-repeat;background-size:100%}.sex2[data-v-8ddf7bb4]{background:url(http://pic.doggieye.com/20200320/8445b2e16cfd4f6a825025d6987214be.png) no-repeat;background-size:100%}.sex3[data-v-8ddf7bb4]{background:url(http://pic.doggieye.com/20200417/d248b6777d4940c985a02bcbb1c9019b.png) no-repeat;background-size:100%}.nameList[data-v-8ddf7bb4]{width:100%;background-color:#e4f2fa;padding-bottom:%?20?%;overflow:hidden}.nameList .name[data-v-8ddf7bb4]{width:%?702?%;height:%?136?%;background:#fff;box-shadow:0 %?5?% %?14?% %?2?% rgba(139,199,255,.14);border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% auto 0}.nameList .name uni-image[data-v-8ddf7bb4]{width:%?96?%;height:%?96?%;border-radius:50%;margin-left:%?26?%}.nameList .name .details[data-v-8ddf7bb4]{margin-left:%?26?%;width:%?532?%}.nameList .name .details > uni-view[data-v-8ddf7bb4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?50?%}.nameList .name .details > uni-view > uni-view[data-v-8ddf7bb4]:first-child{width:%?300?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.Introduction[data-v-8ddf7bb4]{width:100%;height:%?558?%;background:#fff;border-radius:%?30?%}.Introduction .word uni-view[data-v-8ddf7bb4]{width:100%;text-align:center;line-height:%?40?%;margin-top:%?30?%}.Introduction .word .button_grils[data-v-8ddf7bb4]{width:%?212?%;height:%?76?%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?76?%;margin:%?20?% auto}.Introduction .Introduction_head[data-v-8ddf7bb4]{width:%?288?%;height:%?360?%;background:#fff;box-shadow:0 %?5?% %?29?% %?3?% rgba(83,160,232,.2);border-radius:%?30?%;margin:%?16?% auto;text-align:center}.Introduction .Introduction_head uni-image[data-v-8ddf7bb4]{width:%?230?%;height:%?200?%;border-radius:50%;margin:%?34?% auto}.Introduction .Introduction_head uni-view[data-v-8ddf7bb4]{font-size:%?32?%}.head[data-v-8ddf7bb4]{height:%?168?%;width:100%;background:url(http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png);background-size:100%;text-align:center;line-height:%?168?%;font-size:%?36?%;font-family:PingFang SC;font-weight:600;letter-spacing:2px}.head > uni-view[data-v-8ddf7bb4]:first-child{width:%?100?%;height:%?168?%;line-height:%?168?%;display:inline-block;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:0;left:0}.head uni-image[data-v-8ddf7bb4]{width:%?28?%;height:%?28?%}',""]),t.exports=e},"4c8e":function(t,e,i){"use strict";i.r(e);var n=i("c3bc"),a=i("2f99");for(var d in a)"default"!==d&&function(t){i.d(e,t,(function(){return a[t]}))}(d);i("8c9c");var c,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"8ddf7bb4",null,!1,n["a"],c);e["default"]=s.exports},8136:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("27ab"),a={data:function(){return{data:[],sex:1}},onLoad:function(t){this.sex=t.sex,this.getInfo()},methods:{namesDetails:function(t){uni.navigateTo({url:"namesDetails?englishName="+t.englishName})},goback:function(){uni.navigateBack({delta:1})},getInfo:function(){var t=this;uni.showLoading();var e=setTimeout((function(){(0,n.toast)("网络连接超时"),uni.hideLoading()}),15e3);(0,n.post)("/api/game/englishName/RandomName",{sex:this.sex}).then((function(i){t.data=i[1].data.data,uni.hideLoading(),clearTimeout(e)})).catch((function(t){uni.hideLoading(),(0,n.toast)(t[1].data.msg),clearTimeout(e)}))}}};e.default=a},"8c9c":function(t,e,i){"use strict";var n=i("b761"),a=i.n(n);a.a},a714:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMA2Q3NFRjFCb8HEtLiH56Pp1ugAAABP0lEQVR42u3cMU4CURSF4VtIY62diazBFegOZAE2Nrbuwti5BK3tLG2oKEnYCiEhFIQHDwpOyAAFnElu+P/yNOSjYRImN7L0Ev46d6Ow1yvDcNe5L/PnsKSQUm7DkkJKGT+GIYXUbsKRQirlW0cHpPanowNSW8jogpQHGV2QSXc7AgECBAgQIEBWAQECBAgQN+SqDcgTECCbgAABAuQ0yKuMLsj0XVYX5E1GIECAAAECBMgqIEDOCPmQ0QWZfcnqgnzKCKS56zYgv21A+kCArMv5Ic1fF5RLoPz4KfqbtfsUke15SB6IoECpQYECBQoUKFCgQOnGbrn+Kd9SJlCg1KBAgQIlwTvJ0YMCBQqUGhQoUKBAgQIFysVTFrq6KP/RVKaTQUeOH2U647SmDMKTUuaj2FemI2GHz52lOtx2vCVwjDrum4ozpQAAAABJRU5ErkJggg=="},b761:function(t,e,i){var n=i("3162");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7903d167",n,!0,{sourceMap:!1,shadowMode:!1})},c3bc:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"head"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("a714")}})],1),n("v-uni-view",[t._v("为您推荐")])],1),n("v-uni-view",{staticClass:"Introduction"},[1==t.sex?n("v-uni-view",{class:{Introduction_head:!0}},[n("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/efd351ab4163466595bf12caa330ec8c.png"}}),n("v-uni-view",{staticStyle:{color:"#53A0E8"}},[t._v("男生")])],1):t._e(),2==t.sex?n("v-uni-view",{staticClass:"Introduction_head"},[n("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/994f9182d9ff405e9c0f0cf95b39bb0c.png"}}),n("v-uni-view",{staticStyle:{color:"#FF97D9"}},[t._v("女生")])],1):t._e(),3==t.sex?n("v-uni-view",{staticClass:"Introduction_head"},[n("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/905260684ebe4217b6d33cffb52d9781.png"}}),n("v-uni-view",{staticStyle:{color:"#FFE628"}},[t._v("中性")])],1):t._e(),n("v-uni-view",{staticClass:"word"},[n("v-uni-view",[t._v("帮您选了8个好听的英文名，一起来看看吧！")]),n("v-uni-view",{class:{sex1:1==t.sex,sex2:2==t.sex,sex3:3==t.sex,button_grils:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getInfo.apply(void 0,arguments)}}},[t._v("换一批")])],1)],1),n("v-uni-view",{staticClass:"nameList"},t._l(t.data,(function(e,i){return n("v-uni-view",{key:i,staticClass:"name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.namesDetails(e)}}},[1==e.sex?n("v-uni-image",{staticStyle:{background:"#E2F1FF"},attrs:{src:"http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png"}}):t._e(),2==e.sex?n("v-uni-image",{staticStyle:{background:"rgba(247,222,255,1)"},attrs:{src:"http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png"}}):t._e(),3==e.sex?n("v-uni-image",{staticStyle:{background:"#FFE595"},attrs:{src:"http://pic.doggieye.com/20200417/e3f25e11cfbc488fab1989cd850538a9.png"}}):t._e(),n("v-uni-view",{staticClass:"details"},[n("v-uni-view",[n("v-uni-view",[t._v(t._s(e.englishName))]),2==e.sex?n("v-uni-view",{staticStyle:{color:"#FF97D9"}},[t._v("女生")]):t._e(),1==e.sex?n("v-uni-view",{staticStyle:{color:"#53A0E8"}},[t._v("男生")]):t._e(),3==e.sex?n("v-uni-view",{staticStyle:{color:"#FFE628"}},[t._v("中性")]):t._e()],1),n("v-uni-view",[n("v-uni-view",[t._v(t._s(e.chineseName))]),n("v-uni-view",{staticStyle:{color:"#999999"}},[t._v(t._s(e.usageNumber)+"万人使用")])],1)],1)],1)})),1)],1)},d=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return n}))}}]);