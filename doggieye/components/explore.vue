<template>
	<view style="width: 100%;">
		<view class="nav_head" :style="'line-height:'+((88+(datas.statusBarHeight*2-40)))+'px !important;'">
			{{datas.nowBox.boxName}}盒子
		</view>
		<view class="bg">
			<view class="content">
				<view class="info" style="margin-top: 0;">
					<image class="theme" :src="datas.nowBox.boxImage"  ></image>
					<view class="titles">
						<view class="titleList">
							<view class="title1">{{datas.nowBox.boxTopicName}}</view>
							<view class="title">{{datas.nowBox.boxName}}盒子介绍</view>
						</view>
						<view class="buyBox" @click="buyBox">
							购买盒子
						</view>
					</view>
					
				</view>
				<view class="info0">
					<view class="title3"><text>本期玩具</text><!-- <text @click="navget">下载APP</text> --></view>
					<view class="images">
						<view class="imgList" >
							<view v-for="(item,index) in datas.toyList" :key="index" class="img_content" :style="index%2==1?'margin-left:10rpx':''">
								<image  :src="item.toyIcon" @click="particulars(item.id)" ></image>
								<view class="shadow" >
									<text>{{item.toyName}}</text>
									<text>购买</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="info" style="margin-bottom: 180upx !important;">
					<view class="guarantee">
						<view class="guaranteeList">
							<image src="http://pic.doggieye.com/20191216/1c92e6a5163c425cbb1b50eb1357b436.png"></image>
							<view>安全认证</view>
							<view>专业机构认证</view>
							<view>放心使用</view>
						</view>
						<view class="guaranteeList">
							<image src="http://pic.doggieye.com/20191216/cb56f9246ddb476ba000e3885685fe0f.png"></image>
							<view>包邮寄送</view>
							<view>省心包邮</view>
							<view>安心收货</view>
						</view>
						<view class="guaranteeList">
							<image src="http://pic.doggieye.com/20191216/d284213c79ae48be98e9427854e4ea3b.png"></image>
							<view>星级客服</view>
							<view>09:00-20:00</view>
							<view>提供服务</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post} from '@/common/index'
	export default {
		data() {
			return {
				loginInfo:false,
			}
		},
		props: ['datas'],
		methods: {
			navget:function(){
				uni.navigateTo({
					url:'download'
				})
			},
			particulars:function(id){
				uni.navigateTo({
					url: 'toyDetails?id='+id
				});
			},
			buyBox:function(){
				uni.navigateTo({
					url:"../pages/boxDetails"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.bg{
	background: url("http://pic.doggieye.com/20191223/7433870a122546a18662159afa56d1e4.png");
	margin-top:168upx;
	display: flex;
	justify-content: center;
}
.nav_head{
	height: 168upx;
	width: 100%;
	text-align: center;
	line-height: 148upx;
	font-size:32upx;
	font-family:Porter;
	font-weight:bold;
	background: url("http://pic.doggieye.com/20191218/7c6fc85dc37c4e9dac15ad69fe686cc2.png");
	background-size: 100%;
	position: fixed;
	z-index: 999;
	top:0upx;
	left: 0;
}
.info{
	padding: 26upx;
	background: #FFFFFF;
	box-shadow:1px 2px 15px 0px rgba(145,165,179,0.2);
	margin:20upx 0 30upx;
	border-radius: 10upx;
}
.info0{
	padding: 26upx;
	background: #FFFFFF;
	box-shadow:1px 2px 15px 0px rgba(145,165,179,0.2);
	margin:30upx 0;
	border-radius: 10upx;
}
.title3{
	display: flex;
	justify-content: space-between;
	align-items: center;
	text:first-child{
		font-size:36upx;
		font-family:Source Han Sans CN;
		font-weight:600;
		color:rgba(51,51,51,1);
		padding:0 0 26upx;
	}
}
.theme{
	width: 650upx;
	height: 364upx;
	border-radius: 10upx;
}
.titles{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10upx;
	.title{
	font-size:26upx;
	}
	.title1{
		font-size: 32upx;
		font-weight: 600;
	}
	.buyBox{
		width:180upx;
		height:60upx;
		line-height: 60upx;
		background:rgba(29,32,31,1);
		border-radius:30upx;
		text-align: center;
		color: #FFFFFF;
		font-size:28upx;
	}
}

.images{
	display: flex;
	justify-content:center;
	.imgList{
		width: 650upx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.img_content{
			width: 320upx;
			height: 320upx;
			margin-bottom: 10upx;
			position: relative;
			border-radius: 10upx;
			image{
				width: 320upx;
				height: 320upx;
				border-radius: 10upx;
			}
		}
	}
	.shadow{
		position: absolute;
		bottom: 0upx;
		left: 0;
		width: 320upx;
		height: 60upx;
		background:rgba(0,0,0,0.4);
		text:first-child{
			margin-left: 12upx;
			font-size: 30upx;
			float: left;
		}
		text:last-child{
			float: right;
			font-size:28upx;
			width: 100upx;
			height: 48upx;
			color: #FFFFFF;
			border-radius: 24upx;
			background: #333333;
			line-height: 48upx;
			text-align: center;
			display: block;
			margin: 6upx 12upx 0 0;
		}
		font-weight: 600;
		line-height: 60upx;
		color: #FFFFFF;border-radius:0 0 10upx 10upx;
	}
}

.guarantee{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
	text-align: center;
	image{
		width: 73upx;
		height: 50upx;
	}
	.guaranteeList{
		width: 33.33%;
		view{
			font-size:21upx;
			font-family:Source Han Sans CN;
			color:rgba(204,204,204,1);
		}
		view:nth-of-type(1){
			font-size:25upx;
			font-family:Source Han Sans CN;
			color:rgba(153,153,153,1);
		}
	}
}
</style>
