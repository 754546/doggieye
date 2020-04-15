<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>订单明细</text>
		</view>
		<view class="bg">
			<view class="content">
				<view class="particulars">
					<view class="success" v-if="data.status">
						<image src="http://pic.doggieye.com/20191217/c8b8496ada044aed9ea49dbdd8b3778e.png"></image><text>交易成功</text>
					</view> 
				</view>
				<view class="orderList_content">
					<view class="particulars">
						<view class="orderList_info">
							<image :src="data.boxImage"></image>
							<view class="orderList_info_introduction">
								<view>{{data.boxTopicName}}</view>
								<view>玩具:{{data.toyName}}</view>
							</view>
							<view class="orderList_info_itemized">
								<view>￥{{data.unitPrice}}</view>
								<view>X{{data.boxNumber}}</view>
							</view>
						</view>
						<view class="commodityDescription">
							<view><text>商品总价</text><text>￥{{data.totalPrice}}</text></view>
							<view><text>优惠</text><text>￥{{data.favouredPrice}}</text></view>
							<view><text>实付</text><text>￥{{data.actuallyPrice}}</text></view>
						</view>
					</view >
					<view class="particulars">
						<view class="orderDetails">
							<view><text>订单编号:</text><text>{{data.orderCode}}</text></view>
							<view><text>下单时间:</text><text>{{data.creationTime}}</text></view>
							<view><text>付款时间:</text><text>{{data.payTime}}</text></view>
							<view><text>支付方式:</text><text>{{data.payTypeName}}</text></view>
							<view><text>邀请码:</text><text>{{data.salesmanCode}}</text></view>
							<!-- <view><text>收货地址:</text><text>{{data.detailedAddress}}</text></view> -->
							<view><text>发货方式:</text><text v-if="isAbholung==1">自提</text><text v-else>快递</text></view>
						</view>
						<view class="remarks"><text>备注</text><text v-if='data.orderRemark'>{{data.orderRemark}}</text></view>
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
				data:{},
				statusBarHeight: getApp().globalData.statusBarHeight,
			}
		},
		onLoad(e) {
			var that=this
			post('/api/buy/order/info/info',String(e.id)).then((res)=>{
				if(res[1].data.code==200){
					that.data=res[1].data.data
				}else{
					toast(res[1].data.msg)
				}
				
			})
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss">
.success{
	display: flex;
	align-items: center;
	height: 50upx;
	image{
		width: 32upx;
		height: 32upx;
	}
	text{
		margin-left: 10upx;
		font-size:24upx;
	}
}
body{
	background: #E4F2FA;
}
.particulars{
	background: #FFFFFF;
	padding: 24upx;
	margin: 24upx 0;
	border-radius: 10upx;
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
}
.orderList_content{
	width: 100%;
	margin: 0 auto;
	.remarks{
		height: 50upx;
		line-height: 50upx;
		text:nth-of-type(1){
			font-size:26upx;
		}
		text:nth-of-type(2){
			font-size:25upx;
			margin-left: 10upx;
		}
	}
	.orderDetails{
		text-align: right;
		padding: 0upx 0 20upx;
		view{
			display: flex;
			justify-content: space-between;
			height: 60upx;
			line-height: 60upx;
			text:nth-of-type(1){
				font-size:24upx;
			}
			text:nth-of-type(2){
				font-size:24upx;
				margin-left: 10upx;
			}
		}
		
	}
	.commodityDescription{
		text-align: right;
		padding: 40upx 0 0;
		view{
			display: flex;
			justify-content: space-between;
			height: 60upx;
			line-height: 60upx;
			text:nth-of-type(1){
				font-size:24upx;
			}
			text:nth-of-type(2){
				font-size:24upx;
				margin-left: 10upx;
			}
		}
		
	}
	.orderList_title{
		font-size: 29upx;
		font-weight: 600;
		padding: 20upx 0;
	}
	.orderList_info{
		display: flex;
		justify-content: center;
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
				color: #999999;
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
				font-size: 27upx;
				padding: 5upx 0 16upx;
			}
			view:nth-of-type(2){
				font-size: 23upx;
				color: #999999;
				height: 120upx;
				width: 100%;
				text-overflow:ellipsis;
				overflow: hidden;
				display: -webkit-box;
				word-break: break-all;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4; 
			}
			view:nth-of-type(3){
				font-size: 21upx;
				color: #999999;
				margin-top: 25upx;
			}
		}
	}
}
</style>
