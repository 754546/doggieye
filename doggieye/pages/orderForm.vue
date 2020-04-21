<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>我的订单</text>
		</view>
		<view class="bg">
			<view class="tab">
				<view :class="{active:active==0}" @click="tabChange(0)">全部</view>
				<view :class="{active:active==1}" @click="tabChange(1)"><view><text>待付款</text><text v-if="numberList.unpaidNumber<100&&numberList.unpaidNumber>0"  class="origin">{{numberList.unpaidNumber}}</text><text v-if="numberList.shippedNumber>99"  class="origin">99</text></view></view>
				<view :class="{active:active==2}" @click="tabChange(2)"><view><text>待发货</text><text v-if="numberList.unconsignedNumber<100&&numberList.unconsignedNumber>0"  class="origin">{{numberList.unconsignedNumber}}</text><text  v-if="numberList.shippedNumber>99"  class="origin">99</text></view></view>
				<view :class="{active:active==3}" @click="tabChange(3)"><view><text>待收货</text><text v-if="numberList.shippedNumber<100&&numberList.shippedNumber>0" class="origin">{{numberList.shippedNumber}}</text><text  v-if="numberList.shippedNumber>99"  class="origin">99</text></view></view>
			</view>
			<view class="order" v-if="data.length>0">
				<view >
					<navigator class="orderList"  v-for="(item,index) in data" :key="index" :url='"/pages/orderDetails?id="+item.id'>
						<view class="orderList_content">
							<view class="orderList_title">{{item.creationTime}}</view>
							<view class="orderList_info">
								<image :src="item.boxImage"></image>
								<view class="orderList_info_introduction">
									<view>{{item.boxTopicName}}</view>
								<!-- 	<view>{{item.toyName}}</view>
									<view>下单时间：{{item.creationTime}}</view> -->
								</view>
								<view class="orderList_info_itemized">
									<view>￥{{item.unitPrice}}</view>
									<view>X{{item.boxNumber}}</view>
								</view>
							</view>
							<view class="total">
								<text>共{{item.boxNumber}}件</text><text>小计：￥ {{item.actuallyPrice}}</text>
							</view>
						</view>
					</navigator>
					<view class="end">- THE END -</view>
				</view>
			</view>
			<view class="hint" v-else>
				<image src="http://pic.doggieye.com/20191217/30f8a88dd6e74e18ab4b26a9084c77bf.png"></image>
				<view>您还没有订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post} from '@/common/index'
	export default {
		data() {
			return {
				data:[],
				id:'',
				statusBarHeight: getApp().globalData.statusBarHeight,
				active:0,
				numberList:{}
			}
		},	
		onShow() {
			this.id=uni.getStorageSync('userId');
			this.getOrder({'vo':{"userId":this.id}})
			post('/api/buy/order/info/orderNumber',this.id).then((res)=>{
					if(res[1].data.code==200){
						this.numberList=res[1].data.data
						console.log(this.numberList)
					}else{
						toast(res[1].data.msg)
					}
				}).catch((error)=>{
					toast(res[1].data.msg)
				})
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
					delta: 1
				});
				
			},
			tabChange:function(index){
				this.active=index
				if(index==0){
					var data={'vo':{"userId":this.id}}
					this.getOrder(data)
				}else if(index==1){
					var data={'vo':{"userId":this.id,"orderStatus":1}}
					this.getOrder(data)
				}else if(index==2){
					var data={'vo':{"userId":this.id,"orderStatus":2}}
					this.getOrder(data)
				}else if(index==3){
					var data={'vo':{"userId":this.id,"orderStatus":3}}
					this.getOrder(data)
				}
				
			},
			getOrder:function(data){
				post('/api/buy/order/info/list',data).then((res)=>{
					if(res[1].data.code==200){
						this.data=res[1].data.data.list
					}else{
						toast(res[1].data.msg)
					}
				}).catch((error)=>{
					toast(res[1].data.msg)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
body{
	background: #E4F2FA;
}
.bg{
	flex-wrap: wrap;
}
.tab{
	width: 100%;
	padding-top: 20upx;
	margin: 0 12px;
	>view{
		width:25%;
		float: left;
		text-align: center;
		font-size:24upx;
		color: #999999;
		>view{
			display: inline-block;
			position: relative;
			.origin{
				position: absolute;
				top: -8upx;
				right:-24upx;
				background-color: #D63F51;
				color: #FFFFFF;
				// padding: 6upx;
				border-radius: 50%;
				font-size: 16upx;
				display: inline-block;
				width: 24upx;
				height: 24upx;
				line-height: 24upx;
			}
		}
		
	}
	.active{
		font-size: 26upx;
		color: #333;
	}
}
.hint{
	width: 100%;
	height: 100vh;
	background: #F5FAFD;
	text-align: center;
	view{
		width:100%;
		font-size:28upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		text-align: center;
	}
	image{
		width: 220upx;
		height: 220upx;
		margin-top: 300upx;
	}
}
.end{
	width:100%;
	height:30upx;
	margin: 40upx 0;
	font-size:20upx;
	font-family:Porter;
	font-weight:normal;
	color:rgba(51,51,51,1);
	text-align: center;
}
.order{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin:0 36upx ;
	// min-height: 100vh;
	.orderList{
		width: 100%;
		height: 343upx;
		background: #FFFFFF;
		margin-bottom: 20upx;
		margin: 24upx auto 0;
		box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
		border-radius:10px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.orderList_content{
			width: 100%;
			margin: 0 26upx;
			.total{
				text-align: right;
				padding: 10upx 0upx;
				text:nth-of-type(1){
					font-size:28upx;
					color:rgba(153,153,153,1);
				}
				text:nth-of-type(2){
					font-size:28upx;
					margin-left: 10upx;
				}
			}
			.orderList_title{
				font-size:26upx;
				font-family:San Francisco Text;
				padding: 20upx 0;
			}
			.orderList_info{
				display: flex;
				justify-content: center;
				padding: 0 0 30upx;
				border-bottom: 1upx solid #EDEFF3;
				image{
					width: 167upx;
					height: 167upx;
					border-radius: 8upx;
				}
				.orderList_info_itemized{
					view:nth-of-type(1){
						font-size: 27upx;
						padding: 5upx 0 16upx;
					}
					view:nth-of-type(2){
						font-size: 23upx;
						height: 70upx;
						width: 100%;
						overflow: hidden;
						text-align: right;
					}
				}
				.orderList_info_introduction{
					width: 364upx;
					margin: 0upx 20upx;
					view:nth-of-type(1){
						padding: 5upx 0 16upx;
						font-size:28upx;
						font-family:Source Han Sans CN;
						font-weight:600;
					}
				}
			}
		}
		
	}
}

</style>
