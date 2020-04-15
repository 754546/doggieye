<template>
	<view style="width: 100%;">
		<view class="nav_heads"  :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>APP下载</text>
		</view>
		<view class="bg" style="height:100vh;margin-top: 0;">
			<view class="content">
				<viw class="info">
					<image mode="widthFix" src="http://pic.doggieye.com/20191218/17497362f0954184a2493cc4e77445ee.png" class="logo"></image>
					<view class="logoTitle">小狗眼看世界</view>
					<view class="button" @click="to">安卓版</view>
					<view class="button" @click="to">苹果版</view>
					<web-view src="https://www.doggieye.com/Download.html" v-if="show"></web-view>
				</viw>
			</view>
		</view>
	</view>
</template>


<script>
	import post from '@/common/index'
	export default {
		data() {
			return {
				loginInfo:false,
				height:0,
				statusBarHeight: getApp().globalData.statusBarHeight,
				show:false
			}
		},
		onLoad() {
			this.show=false
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			to:function(){
				this.show=true
			}
		}
	}
</script>

<style lang="scss">
.bg{
	background: url("http://pic.doggieye.com/20191223/02ca6cde83ff40fca5af61eebd91d89a.png");
	background-size: 100%;
}
.content{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;
	.logo{
		width: 178upx;
		height: 178upx;
		box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
	}
	.logoTitle{
		width: 100%;
		font-size:30upx;
		font-family:Source Han Sans CN;
		font-weight:600;
		margin: 30upx 0 100upx;
	}
	.button{
		width:400upx;
		height:88upx;
		background:rgba(255,255,255,1);
		box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
		border-radius:44upx;
		line-height: 88upx;
		text-align: center;
		margin-top: 60upx;
		font-weight: 600;
		font-family:Source Han Sans CN;
		font-size: 32upx;
	}
}
</style>
