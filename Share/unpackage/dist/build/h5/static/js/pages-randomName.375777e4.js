(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-randomName"],{"0daa":function(e,i,a){"use strict";var t=a("be8e"),o=a.n(t);o.a},3154:function(e,i,a){var t=a("24fb");i=t(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.big[data-v-3d1867aa]{-webkit-transform:scale(1.1);transform:scale(1.1)}.img[data-v-3d1867aa]{width:100%;height:%?120?%;margin:%?76?% 0 %?50?%}.img uni-image[data-v-3d1867aa]{display:block;width:%?376?%;margin:0 auto}.animation[data-v-3d1867aa]{width:100%;position:fixed;bottom:0;left:0}.animation .footer[data-v-3d1867aa]{position:relative}.animation .footer > uni-image[data-v-3d1867aa]{display:block;width:100%}.animation .footer .clouds[data-v-3d1867aa]{position:absolute;top:0;left:50%;width:%?182?%;-webkit-transform:translate(-20%,-30%);transform:translate(-20%,-30%)}.animation .footer .clouds uni-image[data-v-3d1867aa]{width:%?182?%;height:%?240?%}.radio-groups[data-v-3d1867aa]{overflow:hidden;overflow-x:scroll}.radio-groups .sex_content[data-v-3d1867aa]{width:%?1000?%;height:%?400?%;margin:%?20?% auto}.radio-groups .sex_content .sex[data-v-3d1867aa]{width:%?288?%;height:%?360?%;background:#fff;box-shadow:0 %?4?% %?29?% %?2?% rgba(83,160,232,.2);border-radius:%?30?%;display:inline-block;margin-left:%?20?%}.radio-groups .sex_content .sex .head_img[data-v-3d1867aa]{width:%?230?%;height:%?200?%;display:block;margin:%?20?% auto}.radio-groups .sex_content .sex .radios[data-v-3d1867aa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.head[data-v-3d1867aa]{height:%?168?%;width:100%;background:url(http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png);background-size:100%;text-align:center;line-height:%?168?%;font-size:%?36?%;font-family:PingFang SC;font-weight:600;letter-spacing:2px}.head > uni-view[data-v-3d1867aa]:first-child{width:%?100?%;height:%?168?%;line-height:%?168?%;display:inline-block;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;top:0;left:0}.head uni-image[data-v-3d1867aa]{width:%?28?%;height:%?28?%}.content[data-v-3d1867aa]{background:url(http://pic.doggieye.com/20200320/c0b47adc763f4c71a68b7a3377c4520d.png);background-size:100%;width:100%;height:100vh}',""]),e.exports=i},"41a2":function(e,i,a){var t=a("86fa");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=a("4f06").default;o("2b23c017",t,!0,{sourceMap:!1,shadowMode:!1})},"46e9":function(e,i,a){"use strict";a.r(i);var t=a("4716"),o=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(i,e,(function(){return t[e]}))}(n);i["default"]=o.a},4716:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;a("27ab");var t={data:function(){return{footer:1,cloud:0,sex:1,dingshi:""}},methods:{sexFun:function(e){this.sex=e.target.value},radios:function(e){this.sex=e},goback:function(){window.history.go(-1)},time:function(){if(this.cloud<7)this.cloud++;else{this.cloud=0,this.footer=1;var e=this;clearInterval(this.dingshi),setTimeout((function(){uni.navigateTo({url:"recommended?sex="+e.sex})}),100)}},play:function(){var e=this;if(1==this.footer){e=this;e.footer=2,e.dingshi=setInterval((function(){e.time()}),400)}else this.footer=1,clearInterval(this.dingshi)}}};i.default=t},"86fa":function(e,i,a){var t=a("24fb");i=t(!1),i.push([e.i,".danxuan .uni-radio-wrapper .uni-radio-input[data-v-3d1867aa]{border:1px solid #000!important}",""]),e.exports=i},"987f":function(e,i,a){"use strict";var t,o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"head"},[t("v-uni-view",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goback.apply(void 0,arguments)}}},[t("v-uni-image",{attrs:{src:a("a714")}})],1),t("v-uni-view",[e._v("随机取名")])],1),t("v-uni-view",{staticClass:"img"},[t("v-uni-image",{attrs:{src:"http://pic.doggieye.com/20200422/0079e2fd05bd425186d41aad7f3c5a7c.png",mode:"widthFix"}})],1),t("v-uni-radio-group",{staticClass:"radio-groups",on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.sexFun.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"sex_content"},[t("v-uni-view",{class:{sex:!0,big:1==e.sex},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.radios(1)}}},[t("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/efd351ab4163466595bf12caa330ec8c.png"}}),t("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd radios"},[t("v-uni-view",[t("v-uni-radio",{staticClass:"danxuan",attrs:{value:"1",color:"#53A0E8",checked:!0,checked:1==e.sex}})],1),t("v-uni-view",[e._v("男生")])],1)],1),t("v-uni-view",{class:{sex:!0,big:2==e.sex},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.radios(2)}}},[t("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/994f9182d9ff405e9c0f0cf95b39bb0c.png"}}),t("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd radios"},[t("v-uni-view",[t("v-uni-radio",{staticClass:"danxuan",attrs:{value:"2",color:"#FF97D9",checked:2==e.sex}})],1),t("v-uni-view",[e._v("女生")])],1)],1),t("v-uni-view",{class:{sex:!0,big:3==e.sex},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.radios(3)}}},[t("v-uni-image",{staticClass:"head_img",attrs:{src:"http://pic.doggieye.com/20200417/905260684ebe4217b6d33cffb52d9781.png"}}),t("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd radios"},[t("v-uni-view",[t("v-uni-radio",{staticClass:"danxuan",attrs:{value:"3",color:"#FFE628",checked:3==e.sex}})],1),t("v-uni-view",[e._v("中性")])],1)],1)],1)],1),t("v-uni-view",{staticClass:"animation"},[t("v-uni-view",{staticClass:"footer",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.play.apply(void 0,arguments)}}},[t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==e.footer,expression:"footer==1"}],attrs:{src:"http://pic.doggieye.com/20200417/ec4027f39d0c4cc889ec9040b65f9055.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:2==e.footer,expression:"footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/33460830323044e8babbdf2e9a1327e0.png",mode:"widthFix"}}),t("v-uni-view",{staticClass:"clouds"},[t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:1==e.cloud&&2==e.footer,expression:"cloud==1&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/6de09d6de9304cb1aa21606f9e930338.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:2==e.cloud&&2==e.footer,expression:"cloud==2&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/abe282543824493897e80f4e3be36cec.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:3==e.cloud&&2==e.footer,expression:"cloud==3&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/5694acc07062437dbca2dd31f4347478.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:4==e.cloud&&2==e.footer,expression:"cloud==4&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/da771253e614451c8532f73be664bd49.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:5==e.cloud&&2==e.footer,expression:"cloud==5&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/f16f811ef22f4967bec57f4366507098.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:6==e.cloud&&2==e.footer,expression:"cloud==6&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/ffb0dca0f08a435399fadc0a34e3a2bb.png",mode:"widthFix"}}),t("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:7==e.cloud&&2==e.footer,expression:"cloud==7&&footer==2"}],attrs:{src:"http://pic.doggieye.com/20200417/2deccd6efdc14a7fad2b638d5ec26f5b.png",mode:"widthFix"}})],1)],1)],1)],1)},n=[];a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return t}))},a714:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaPxwLAAAAD3RSTlMA2Q3NFRjFCb8HEtLiH56Pp1ugAAABP0lEQVR42u3cMU4CURSF4VtIY62diazBFegOZAE2Nrbuwti5BK3tLG2oKEnYCiEhFIQHDwpOyAAFnElu+P/yNOSjYRImN7L0Ev46d6Ow1yvDcNe5L/PnsKSQUm7DkkJKGT+GIYXUbsKRQirlW0cHpPanowNSW8jogpQHGV2QSXc7AgECBAgQIEBWAQECBAgQN+SqDcgTECCbgAABAuQ0yKuMLsj0XVYX5E1GIECAAAECBMgqIEDOCPmQ0QWZfcnqgnzKCKS56zYgv21A+kCArMv5Ic1fF5RLoPz4KfqbtfsUke15SB6IoECpQYECBQoUKFCgQOnGbrn+Kd9SJlCg1KBAgQIlwTvJ0YMCBQqUGhQoUKBAgQIFysVTFrq6KP/RVKaTQUeOH2U647SmDMKTUuaj2FemI2GHz52lOtx2vCVwjDrum4ozpQAAAABJRU5ErkJggg=="},be8e:function(e,i,a){var t=a("3154");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=a("4f06").default;o("3c3837ac",t,!0,{sourceMap:!1,shadowMode:!1})},ec28:function(e,i,a){"use strict";a.r(i);var t=a("987f"),o=a("46e9");for(var n in o)"default"!==n&&function(e){a.d(i,e,(function(){return o[e]}))}(n);a("f4ed"),a("0daa");var s,c=a("f0c5"),d=Object(c["a"])(o["default"],t["b"],t["c"],!1,null,"3d1867aa",null,!1,t["a"],s);i["default"]=d.exports},f4ed:function(e,i,a){"use strict";var t=a("41a2"),o=a.n(t);o.a}}]);