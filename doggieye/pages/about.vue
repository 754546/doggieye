<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text >关于小狗眼看世界</text>
		</view>
		<view class="bg">
			<view class="body">
				<view class="info">
					<image src="http://pic.doggieye.com/20191219/40eacb2b2ad948cd9d241ea5d9211186.png"></image>
				</view>
				<view class="info">
					<view class="title" @click="userAgreement">
						<text>用户协议</text>
						<text class="iconfont icon-jiantouyou"></text>
					</view>
					
				</view>
			</view>
			<view class="version">
				<view>Copyright@2019-2028</view>
				<view>湖南恺讯教育科技有限公司  版权所有</view>
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
				statusBarHeight:getApp().globalData.statusBarHeight,
			}
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			userAgreement:function(){
				uni.navigateTo({
				    url:"/pages/userAgreement"
				});
				 
			}
		}
	}
</script>

<style lang="scss">
body{
	background: #E4F2FA;
}
.info{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
	background:rgba(255,255,255,1);
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
	border-radius:10upx;
	margin: 20upx 26upx 0;
	image{
		width:361upx;
		height:117upx;
		padding: 32upx 0 60upx;
	}
	.title{
		width: 100%;
		margin: 0 26upx;
		line-height: 88upx;
		height: 88upx;
		display: flex;
		font-size: 28upx;
		justify-content: space-between;
		.iconfont{
			font-size: 20upx;
		}
	}
}

.logo{
	width: 600upx;
	display: block;
	margin: 200upx auto;
}
.body{
	width: 100%;
	position: relative;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
}
.version{
	font-size: 20upx;
	text-align: center;
	line-height: 30upx;
	height: 60upx;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 72upx;
	font-family:PingFang SC;
	color:rgba(153,153,153,1);
}
</style>
