<template>
	<view class="content">
		<image src="../static/jiantou.png" class="jiantou"></image>
		<view class="title">
			我已经安装小狗眼看世界APP:
		</view>
		<view class="title1">
			1.点击右上角
		</view>
		<view class="title2">
			2.选择在Safari中打开
		</view>
		<image src="../static/pic-weixin.png" class="checkSafari" mode="widthFix"></image>
		<view class="uninstalled">
			还没安装小狗眼看世界？
		</view>
		<button  class="download" @click="download">下载小狗眼看世界</button>
	</view>

</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				
			}
		},
		onLoad(e) {
			if(e.url){
				window.location.href=e.url
			}
		},
		methods: {
			download:function(){
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
					window.location.href='https://itunes.apple.com/cn/app/id1493629434?mt=8'
				}else if(navigator.userAgent.match(/android/i)) {
					window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
				}
			}
			
			
		}
	}
</script>

<style scoped lang="scss">
.content{
	width: 100%;
	min-height: 100vh;
	background: url(../static/bg-download.png);
	background-size: 100%;
	overflow: hidden;
	position: relative;
}
.jiantou{
	display: block;
	width: 316upx;
	height: 165upx;
	position: absolute;
	right:50upx;
	top:100upx;
}
.title{
	margin-left: 135upx;
	line-height:30upx;
	font-size:32upx;
	font-family:Source Han Sans CN;
	font-weight:600;
	color:rgba(51,51,51,1);
	margin-top: 135upx;
	padding:20upx 0 ;
}
.title1,.title2{
	line-height:24upx;
	font-size:24upx;
	font-family:Source Han Sans CN;
	color:rgba(104,116,127,1);
	margin-left: 140upx;
	padding:20upx 0 10upx;
}
.checkSafari{
	width: 496upx;
	display: block;
	margin: 20upx auto;
}
.uninstalled{
	width:100%;
	text-align: center;
	margin: 60upx 0 20upx;
	font-size:24upx;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:rgba(104,116,127,1);
}
.download{
	width:400upx;
	height:88upx;
	background:rgba(255,211,94,1);
	box-shadow:1px 2upx 15upx 0px rgba(145,165,179,0.2);
	border-radius:44upx;
	font-size:32upx;
	font-family:Source Han Sans CN;
	font-weight:600;
	color:rgba(51,51,51,1);
	margin-bottom: 80upx;
}
.download:after{
	width:0;
	height: 0;
}
</style>
