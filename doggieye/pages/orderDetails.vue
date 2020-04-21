<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>订单明细</text>
		</view>
		<view class="bg">
			<view class="content">
				<view class="particulars1">
					<view class="status">
						<image src="http://pic.doggieye.com/20191217/c8b8496ada044aed9ea49dbdd8b3778e.png"></image><text>{{data.statusName}}</text>
					</view> 
					<view class="time" v-if="data.status==1">
						订单将在<text style="color: #C2BD55;">{{timeM<10?"0"+timeM:timeM}}分{{timeS<10?"0"+timeS:timeS}}秒</text>后关闭
					</view>
				</view>
				<view class="address" v-if="data.isAbholung==0" @click="address()">
					<view class="address_center">
						<view class="address_left">
							<view>
								<image src="http://pic.doggieye.com/20200413/ca41d78f8fd845bb90f19e3f44b6115f.png"></image>
							</view>
							<view>
								<view><text>{{data.consignee}}</text><text>{{data.phone1}}</text></view>
								<view>{{data.province}}{{data.city}}{{data.county}}{{data.detailedAddress}}</view>
							</view>
						</view>
						<view class="address_right">
							<text class="iconfont icon-jiantouyou"></text>
						</view>
					</view>
					<view class="express">
						<view class="express_title">
							<view><image src="http://pic.doggieye.com/20200421/63c5e21b9fca4a0d9b7ae3c1d6a0655f.png"></image><text>物流信息</text></view>
							<view>顺丰快递12345682</view>
						</view>
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
							<view v-if="data.status==2||data.status==3||data.status==4||data.status==5||data.status==6||data.status==10"><text>付款时间:</text><text>{{data.payTime}}</text></view>
							<view v-if="data.status==2||data.status==3||data.status==4||data.status==5||data.status==6||data.status==10"><text>支付方式:</text><text>{{data.payTypeName?data.payTypeName:""}}</text></view>
							<view><text>邀请码:</text><text>{{data.salesmanCode}}</text></view>
							<!-- <view><text>收货地址:</text><text>{{data.detailedAddress}}</text></view> -->
							<view><text>发货方式:</text><text v-if="isAbholung==1">自提</text><text v-else>快递</text></view>
							<view v-if="data.status==20"><text>关闭时间:</text><text>{{data.cancelTime}}</text></view>
						</view>
						<view class="remarks"><text>备注</text><text v-if='data.orderRemark'>{{data.orderRemark}}</text></view>
					</view>
				</view>
				<view class="button_list" v-if="data.status==1||data.status==2">
					<button open-type="contact">
						<image src="http://pic.doggieye.com/20200416/fe1acdc08fd44ddb846d6896584fc275.png"></image>
						<text>客服</text>
					</button>
					<view v-if="data.status==1">
						<view @click="popup(1)" v-if="data.status==1">取消订单</view>
						<view @click="keepPaying" v-if="data.status==1">继续支付</view>
						<!-- <view @click="keepPaying" v-if="data.status==2">申请退款</view> -->
					</view>
				</view>
				<view class="popup" v-show="popup_show">
					<view class="popup_center">
						<radio-group @change="radioChange">
							<view class="popup_title">请选择取消订单原因</view>
							<view class="popup_list">
								<view class="popup_li">
									<view>其他</view>
									<view><radio value="其他" checked color="#333333"/></view>
								</view>
								<view class="popup_li">
									<view>不想买了</view>
									<view><radio value="不想买了" color="#333333"/></view>
								</view>
								<view class="popup_li">
									<view>地址填写错误，重新下单</view>
									<view><radio value="地址填写错误，重新下单" color="#333333"/></view>
								</view>
								<view class="popup_li">
									<view>线下购买</view>
									<view><radio value="线下购买" color="#333333"/></view>
								</view>
								<view class="popup_button">
									<view @click="popup(2)">取消</view>
									<view @click="orderCancel">确定</view>
								</view>
						</view>
						</radio-group>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post,toast} from '@/common/index'
	export default {
		data() {
			return {
				loginInfo:false,
				data:{},
				statusBarHeight: getApp().globalData.statusBarHeight,
				id:'',
				timeM:0,
				timeS:0,
				popup_show:false,
				reason:'其他',
				expresData:[]
			}
		},
		onLoad(e) {
			this.id=e.id;
		},
		onShow() {
			this.getInfo()
		},
		methods: {
			keepPaying:function(){
				post('/api/buy/order/info/continuedPay',this.id).then((res)=>{
					if(res[1].data.code==200){
						this.wxplay(res[1].data.data.resp)
					}else{
						toast(res[1].data.msg)
					}
				})
			},
			wxplay:function(data){
				var that=this;
				uni.requestPayment({
				    provider:'wxpay',
					signType:String(data.signType),
				    timeStamp:String(data.timeStamp),
				    nonceStr:String(data.nonceStr),
				    package:String(data.package),
				    paySign:String(data.paySign),
				    success: function (res) {
				       toast("支付成功")
					   uni.navigateBack({
					   	delta:1
					   })
				    }
				});
			},
			radioChange:function(e){
				this.reason=e.detail.value
			},
			popup:function(e){
				if(e==1){
					this.popup_show=true;
				}else if(e==2){
					this.popup_show=false;
				}
				
			},
			orderCancel:function(){
				post('/api/buy/order/info/orderCancel',{"cancelExplain": "","cancelReason":this.reason,"orderId":this.id}).then((res)=>{
					if(res[1].data.code==200){
						toast("取消订单成功")
						this.popup_show=false;
						setTimeout(function(){
							uni.navigateBack({
								delta:1
							})
						},300)
					}else{
						toast(res[1].data.msg)
					}
				})
			},
			getExpres:function(){
				post('/api/utils/express/getByExpNo',{"expCode":this.data.expCode,"expNo":this.data.expNo}).then((res)=>{
					if(res[1].data.code==200){
						this.expresData=res[1].data.data
						console.log(res[1].data.data)
					}else{
						toast(res[1].data.msg)
					}
				})
			},
			getInfo:function(){
				var that=this
				post('/api/buy/order/info/info',String(this.id)).then((res)=>{
					if(res[1].data.code==200){
						that.data=res[1].data.data;
						if(that.data.status==1){
							var time=(new Date(res[1].data.data.paymentDeadline).valueOf()-new Date(res[1].data.currentTime).valueOf())/1000
							that.timeM=parseInt(time/60);
							that.timeS=parseInt(time%60);
							var setTimes=setInterval(function(){
								if(that.timeS-1<=0){
									if(that.timeM-1<0){
										that.timeS=0;
										that.timeM=0;
										clearInterval(setTimes)
									} else if(that.timeM-1>=0){
										that.timeM--
										that.timeS=60;
									}
								}else{
									that.timeS--;
								}
							},1000)
						}else if(that.data.status==3){
							that.getExpres()
						}
						
					}else{
						toast(res[1].data.msg)
					}
				})
			},
			goBack:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			address:function(){
				if(this.data.status==1||this.data.status==2){
					uni.navigateTo({
						url:"receivingAddress?choose=2&orderId="+this.data.id
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
.express{
	margin: 0 16upx;
	border-top: 1upx solid #EDEFF3;
	clear: both;
	.express_title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24upx;
		line-height: 60upx;
		>view:first-child{
			display: flex;
			align-items: center;
			image{
				width: 32upx;
				height: 32upx;
			}
		}
	}
}
.popup{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.2);
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	.popup_center{
		width:604upx;
		background:rgba(255,255,255,1);
		border:1upx solid rgba(237,239,243,1);
		border-radius:8upx 8upx 0px 0px;
		margin-top: 50%;
		margin-left: 50%;
		transform: translate(-50%,50%);
		.popup_title{
			height: 90upx;
			line-height: 90upx;
			font-size:30upx;
			text-align: center;
			border-bottom: 1upx solid #EDEFF3;
		}
		.popup_li{
			margin: 0 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			line-height: 90upx;
			height: 90upx;
		}
		.popup_button{
			display: flex;
			justify-content: space-between;
			align-items: center;
			line-height: 90upx;
			height: 90upx;
			view{
				width: 50%;
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				box-sizing: border-box;
				border-top: 1upx solid #EDEFF3;
			}
			view:first-child{
				border-right: 1upx solid #EDEFF3;
			}
		}
	}
}
.button_list{
	width: 100%;
	height: 102upx;
	line-height: 102upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #FFFFFF;
	>button:first-child{
		border: 0 !important;
		border-radius: 0upx !important;
		box-shadow: 0 0 0 #FFFFFF !important; 
		width: 200upx;
		height: 102upx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin: 0;
		background-color: #FFFFFF;
		image{
			width: 30upx;
			height: 30upx;
			margin: 0 12upx 0 12px;
		}
	}
	>button::after {
		border:none;
	}
	>view:last-child{
		display: flex;
		align-items: center;
		justify-content: center;
		>view{
			width:168upx;
			height:64upx;
			border:2upx solid rgba(153,153,153,1);
			border-radius:32upx;
			text-align: center;
			line-height: 64upx;
			margin-left: 32upx;
			margin: 0 12px 0 12upx;
		}
	}
}
.address{
	// height: 136upx;
	background: #FFFFFF;
	padding:0 24upx;
	margin: 24upx 0;
	border-radius: 10upx;
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
	.address_center{
		display:flex ;
		align-items: center;
		justify-content: space-between;
		.address_left{
			display:flex ;
			align-items: center;
			float: left;
			>view{
				height: 100%;
				overflow: hidden;
				image{
					width: 32upx;
					height: 32upx;
				}
			}
			>view:last-child{
				view:last-child{
					color: #999999;
					width: 500upx;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow: hidden;
					margin-left: 10upx;
					font-size:22upx;
					line-height: 40upx;
				}
				view:first-child{
					font-size:28upx;
					line-height: 40upx;
					width: 500upx;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow: hidden;
					line-height: 40upx;
					margin-top: 28upx;
					text:first-child{
						margin-left: 10upx;
					}
					text:last-child{
						margin-left: 20upx;
					}
				}
				
			}
		}
		.address_right{
			width:100upx;
			height:136upx;
			line-height:136upx;
			text-align: right;
			float: right;
			.icon-jiantouyou{
				font-size: 32upx;
			}
		}
	}
	
}
.status{
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
	
.particulars1{
	background: #FFFFFF;
	padding: 24upx;
	margin: 24upx 0;
	border-radius: 10upx;
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
	display: flex;
	justify-content: space-between;
	font-size: 24upx;
	>view{
		line-height: 50upx;
	}
}
.orderList_content{
	width: 100%;
	margin: 0 auto;
	margin-bottom: 110upx;
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
