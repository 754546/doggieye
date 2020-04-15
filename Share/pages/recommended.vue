<template>
	<view class="content">
		<view class="head">
			<b>为您推荐</b>
		</view>
		<view class="Introduction">
			<view class="Introduction_head">
				<image src="http://pic.doggieye.com/20200320/08c9c4a090ca4ed79f36cad3d2807525.png"  class="head_img"></image>
				<view>女生</view>
			</view>
			<view class="word">
				<view>帮您选了8个好听的英文名，一起来看看吧！</view>
				<view class="button_grils">
					换一批
				</view>
			</view>
		</view>
		<view class="nameList">
			<view class="name" v-for="(item,index) in data" :key="index">
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png"></image>
				<view class="details">
					<view><view>ADele</view><view style="color: #FF97D9;">男生 NO.1</view></view>
					<view><view>阿黛尔</view><view style="color: #999999;">20万人使用</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				data:[1,3,2,4,5,6,7,89,85,54,,456,4,64,6,46,4,64,6,56,4,54,4,54,45,]
				}
		},
		methods: {		
		}
	}
</script>

<style scoped lang="scss">
.nameList{
	width: 100%;
	background-color: #E4F2FA;
	padding-bottom: 20upx;
	overflow: hidden;
	.name{
		width:702upx;
		height:136upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 14upx 2upx rgba(139,199,255,0.14);
		border-radius:10upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 20upx auto 0;
		image{
			width:96upx;
			height:96upx;
			background:rgba(247,222,255,1);
			border-radius:50%;
			margin-left: 26upx;
		}
		.details{
			margin-left: 26upx;
			width: 532upx;
			>view{
				display: flex;
				justify-content: space-between;
				line-height: 50upx;
			}
		}
	}
}
.Introduction{
	width:100%;
	height:558upx;
	background:rgba(255,255,255,1);
	border-radius:30upx;
	.word{
		view{
			width: 100%;
			text-align: center;
			line-height: 40upx;
			margin-top: 30upx;
		}
		.button_grils{
			background: url("http://pic.doggieye.com/20200320/8445b2e16cfd4f6a825025d6987214be.png");
			width:212upx;
			height:72upx;
			font-size:30upx;
			color:rgba(255,255,255,1);
			text-align: center;
			background-size: 100%;
			line-height: 72upx;
			margin: 20upx auto;
		}
	}
	.Introduction_head{
		width:288upx;
		height:360upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 29upx 3upx rgba(83,160,232,0.2);
		border-radius:30upx;
		margin: 16upx auto;
		text-align: center;
		image{
			width: 192upx;
			height: 192upx;
			border-radius: 50%;
			margin: 34upx auto;
		}
		view{
			font-size:32upx;
			color: #FF97D9;
		}
	}
}
.head{
	height: 160upx;
	width: 100%;
	background: url('http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png');
	background-size: 100%;
	text-align: center;
	line-height: 160upx;
	font-size: 36upx;
	font-family:PingFang SC;
	font-weight:600;
	letter-spacing: 2px;
}
</style>
