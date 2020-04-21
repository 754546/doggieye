<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text v-if="show">确认购买</text><text v-else>选择优惠券</text>
		</view>
		<view class="bg">
			<view class="content">
				<view class="orderList_content" v-if="show">
					<view class="address">
						<view class="address_left"  @click="address()">
							<view>
								<image src="http://pic.doggieye.com/20200413/ca41d78f8fd845bb90f19e3f44b6115f.png"></image>
							</view>
							<view>
								<view><text :style="item.isDefault!=1?'color:#333':''" v-show="type==1">{{item.isDefault==1?item.consignee:"请选择收货地址"}}</text><text style="color:#333" v-show="type!=1">线下自提</text><text v-if="item.isDefault==1&&type==1">{{item.phone}}</text></view>
								<view v-if="item.isDefault==1&type==1">{{item.province}}{{item.city}}{{item.county}}{{item.detailedAddress}}</view>
							</view>
						</view>
						<view class="address_right" @click="cutType(item)">
							<image src="http://pic.doggieye.com/20200414/a82f00901d7f4a168a3b9110d42a62fc.png" v-show="type==1"></image>
							<image src="http://pic.doggieye.com/20200414/63f7bb549fec42a0acfb497289bf1126.png" v-show="type==2"></image>
						</view>
					</view>
					<view class="viewMar">
						<view class="orderList_info">
							<image :src="data.boxIcon"></image>
							<view class="orderList_info_introduction">
								<view>{{data.boxTopicName}}</view>
							</view>
							<view class="orderList_info_itemized">
								<view>
									<span :style="data.originalPrice>=data.favouredPrice&&data.favouredPrice?'text-decoration:line-through':''">￥</span>
									<span :style="data.originalPrice>=data.favouredPrice&&data.favouredPrice?'text-decoration:line-through':''">{{data.originalPrice}}</span>
									<span v-if='data.originalPrice>=data.favouredPrice&&data.favouredPrice' style="margin-left: 10upx;">￥</span>
									<span v-if='data.originalPrice>=data.favouredPrice&&data.favouredPrice'>{{data.favouredPrice}}</span>
								</view>
								<view>X{{number}}</view>
								<view>
									<text>库存</text>
									<text style="margin-left: 6upx;">{{data.remainNumber?data.remainNumber:0}}</text>
								</view>
							</view>
						</view>
						<view class="commodityDescription">
							<view>
								<text>购买数量</text>
								<view  class="jiajian">
									<text class="iconfont icon-ic_reduce" @click="reduce()"></text>
									<input type="number" v-model="number" style="width:50upx;" class="box_number" maxlength="2" @confirm="confirm"/>
									<text class="iconfont icon-add" @click="add()"></text>
								</view>
							</view>
							<view>
								<text>配送方式</text>
								<text>线下购买</text>
							</view>
							<view>
								<text>订单备注</text>
								<input type="text" v-model="orderRemark" placeholder="选填" maxlength="100"/>
							</view>
					<!-- 		<view>
								<text>收货地址</text>
								<input type="text" v-model="detailedAddress" placeholder="选填"  maxlength="100"/>
							</view> -->
							<view>
								<text>邀请码</text>
								<input type="text" v-model="salesmanCode" placeholder="选填"  maxlength="10"/>
							</view>
						</view>
						<view class="conclusion">
							<text style="color: #999999;font-size: 26upx;font-weight: 600;">共{{number}}件</text>
							<text  style="margin-left: 30upx;font-size: 26upx;font-weight: 600;">小计：￥{{number*data.favouredPrice}}</text>
						</view>
					</view>
					<view class="viewMar" style="padding: 0 20upx;">
						<view class="orderDetails">
							<view>
								<text>优惠券</text>
								<view>
									<text v-if="coupons.length<1&&favouredPrice==0&&!id"  @click="Choose(2)">暂无可用</text>
									<text v-if="coupons.length>0&&favouredPrice==0&&!id" @click="Choose(1)">有{{coupons.length}}张可用</text>
									<text v-if="favouredPrice>0&&id"  @click="Choose(1)">-￥{{favouredPrice}}</text>
									<text class="iconfont icon-enter" style="color:rgba(153,153,153,1);" v-if="coupons.length>0"></text>
								</view>
							</view>
							<view><text>支付方式</text><view><image src="http://pic.doggieye.com/20191217/cae2f000dded42eba29a1ca45d553e6c.png" class="wxplay"></image><text>微信支付</text></view></view>			
						</view>
					</view>
					<view class="conclusion1">
						<text style="color: #999999;font-size: 28upx;font-weight: 600;">共{{number}}件</text>
						<text style="margin: 0 30upx;font-size: 28upx;font-weight: 600;">小计：￥{{id?(number*data.favouredPrice-favouredPrice):number*data.favouredPrice}}</text>
						<view @click="order" v-if="data.remainNumber">确认订单</view>
						<view class="outOfStock" v-else>库存不足</view>
					</view>
				</view>
				<view class="contents" v-else>
					<view class="nav">
						<view @click="activeFun(1)" :class="{active:active==1}">可用</view>
						<view @click="activeFun(2)" :class="{active:active==2}">不可用</view>
					</view>
					
					<view class="couponsList" v-if="list1.length>0">
						<view :class="active==2?'disabled coupons':'coupons'" v-for="(item,key) in list1" :key="key">
							<view class="quota">{{item.favouredPrice}}</view>
							<view class="introduction">
								<view class="introduction_info"><view>满{{item.availablePrice}}减{{item.favouredPrice}}</view><view :class="{'selected':item.id==id}"  v-if="active==1" @click="selected(item.id,item.favouredPrice)">去使用</view></view>
								<view class="introduction_info">{{item.couponStartDate }}-{{item.couponEndDate}}</view>
							</view>
						</view>
					</view>
					<view class="hint" v-else>
						<image src="http://pic.doggieye.com/20191217/9f05b4198eaf45a8a88143aee6e1ad49.png"></image>
						<view>还没有优惠券</view>
					</view>
					<view  @click="needNot()" class="needNot">不使用优惠券</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {toast,post} from '@/common/index'
	export default {
		data() {
			return {
				loginInfo:false,
				orderRemark :"",
				data:{
					remainNumber:99
				},
				detailedAddress:'',
				salesmanCode:'',
				list:[],
				number:1,
				postData:{},
				totalCount:0,
				coupons:[],
				favouredPrice:0,
				id:'',
				price:0,
				show:true,
				list1:[],
				active:1,
				orderId:'',
				statusBarHeight: getApp().globalData.statusBarHeight,
				item:[],
				type:2,
				addressId:''
			}
		},
		onLoad(e) {
			if(e.id){
				this.item=e;
				this.type=e.type;
			}else{
				this.getAddress()
			}
			this.init()
		},
		methods: {
			getAddress:function(){
				var that=this;
				post("/api/user/shippingaddress/list",{"vo": {"isDefault": 1,"userId":uni.getStorageSync('userId') }}).then((res)=>{
					that.item=res[1].data.data.list[0];
				}).catch((res)=>{
					toast(res[1].data.msg+",加载默认地址失败")
				})
			},
			address:function(){
				if(this.type==1){
					uni.navigateTo({
						url:"receivingAddress?choose=1"
					})
				}
			},
			cutType:function(){
				if(this.type==1){
					this.type=2
				}else{
					this.type=1
					this.getAddress()
				}
			},
			init:function(){
				var that=this;
				post('/api/box/info/getNowBox').then((res)=>{
					if(res[1].data.code==200){
						this.data=res[1].data.data.nowBox;
						this.list=res[1].data.data.toyList;
						this.post_fun()
					}else{
						toast(res[1].data.msg)
					}
					
				}).catch((error)=>{
					toast("网络连接失败！")
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
					   uni.navigateTo({
							url: 'orderForm',
					   });
				    },
				    fail: function (err) {
						toast("取消支付")
						uni.navigateTo({
							url: 'orderDetails?id='+that.orderId
						});
				    }
				});
			},
			order:function(){
				var data={}
				if(this.type==1){
					if(this.item.id){
						data={
						  "boxId": this.data.id,
						  "boxNumber": this.number,
						  "channelType": 4,
						  "couponId": this.id,
						  "isAbholung":0,
						  "orderRemark":this.orderRemark,
						  "userId": uni.getStorageSync('userId'),
						  salesmanCode:this.salesmanCode,
						  shippingAddressId:this.item.id
						}
						this.createOrder(data)
					}else{
						toast('请选择收货地址')
					}
				}else{
					data={
					  "boxId": this.data.id,
					  "boxNumber": this.number,
					  "channelType": 4,
					  "couponId": this.id,
					  "isAbholung":1,
					  "orderRemark":this.orderRemark,
					  "userId": uni.getStorageSync('userId'),
					  salesmanCode:this.salesmanCode
					}
					this.createOrder(data)
				}
			},
			createOrder:function(data) {
				var that=this;
				post("/api/buy/order/info/newBoxOrder",data).then((res)=>{
					if(res[1].data.code==200){
						that.orderId=res[1].data.data.orderID;
						that.wxplay(res[1].data.data.resp)
					}else{
						toast(res[1].data.msg)
					}
				}).catch((error)=>{
					toast("订单处理失败！请联系管理员")
				})
			},
			goBack:function(){
				if(!this.show){
					this.show=!this.show
				}else{
					if(this.item.id){
						uni.reLaunch({
							url:"index"
						})
					}else{
						uni.navigateBack({
							delta: 1
						});
					}
					
				}
			},
			activeFun:function(e){
				this.active=e;
				if(e==1){
					this.getData(1)
				}else{
					this.getData(0)
				}
			},
			getData:function(e){
				post('/api/user/coupon/couponList',{"vo": {'couponStatus': 1,"totalPrice":this.number*this.data.favouredPrice,"isAvailable":e,'userId':uni.getStorageSync('userId')}}).then((res)=>{
					if(res[1].data.code==200){
						this.list1=res[1].data.data.list;
						for (let i=0;i<this.list1.length;i++) {
							this.list1[i].couponEndDate=this.list1[i].couponEndDate.substring(0,10)
							this.list1[i].couponStartDate=this.list1[i].couponStartDate.substring(0,10)
						}
					}else{
						toast(res[1].data.msg)
					}	
				}).catch((res)=>{
					toast("网络连接失败！")
				})
			},
			Choose:function(e){
					this.show=false;
					this.activeFun(e)
			},
			reduce:function(){
				if(this.number>1){
					this.number--;
					this.post_fun()
				}
			},
			add:function(){
				if(this.number<10){
					this.number++;
					this.post_fun(this.postData)
				}else if(!this.number<this.data.remainNumber&&this.data.remainNumber<=10){
					this.number=this.data.remainNumber 
				}
			},
			confirm:function(e){
				if(!e.detail.value>1){
					this.number=1
				}else if(!e.detail.value<10){
					this.number=10 
				}else if(!e.detail.value<this.data.remainNumber&&this.data.remainNumber<=10){
					this.number=this.data.remainNumber 
				}
			},
			post_fun:function(){
				this.postData={"vo": {
				    "couponStatus": 1,
				    "isAvailable": 1,
				    "totalPrice":this.number*this.data.favouredPrice,
					'userId':uni.getStorageSync('userId')
				}}
				post('/api/user/coupon/couponList',this.postData).then((res)=>{
					if(res[1].data.code==200){
						this.coupons=res[1].data.data.list;
					}else{
						toast(res[1].data.msg)
					}	
				}).catch((error)=>{
					console.log(error)
				}) 
			},
			needNot:function(){
				this.show=true;
				this.favouredPrice=0;
				this.id='';
				this.favouredPrice=0;
			},
			selected:function(id,favouredPrice){
				this.show=true;
				this.id=id;
				this.favouredPrice=favouredPrice
			}
		}
	}
</script>

<style lang="scss" scoped>
.address{
	height: 136upx;
	width: 100%;
	background: #FFFFFF;
	margin-bottom: 28upx;
	.address_left{
		height: 100%;
		float: left;
		display:flex ;
		align-items: center;
		>view{
			height: 100%;
			overflow: hidden;
			image{
				width: 32upx;
				height: 32upx;
				margin-top: 36upx;
				margin-left: 24upx;
			}
		}
		>view:last-child{
			view:last-child{
				color: #999999;
				width: 420upx;
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
				width: 420upx;
				margin-top: 28upx;
				white-space:nowrap;
				text-overflow:ellipsis;
				overflow: hidden;
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
		float: right;
		width:160upx;
		height:136upx;
		line-height:136upx;
		text-align: center;
		margin-right: 24upx;
		image{
			width:160upx;
			height: 60upx;
			margin-top: 38upx;
		}
	}
}
.hint{
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
.coupons:last-child{
	margin-bottom: 100upx;
}
.wxplay{
	width: 32upx;
	height: 32upx;
	margin: 0 10upx;
	padding-top: 10upx;
}
.jiajian{
	border: 1upx solid #EDEFF3;
	margin: 0;
	padding: 0;
	height: 50upx !important;
	line-height: 50upx !important;
	text{
		width: 50upx !important;
		height: 50upx;
		padding: 0 !important;
		margin: 0 !important;
		text-align: center;
	}
}
.needNot{
	position: fixed;
	left: 0;
	bottom: 0;
	width:100%;
	height:98upx;
	background:rgba(255,255,255,1);
	text-align: center;
	line-height: 98upx;
}
.viewMar{
	width: 100%;
	padding:26upx ;
	background: #FFFFFF;
	margin-bottom: 20upx;
	border-radius: 10upx;
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
}
.success{
	display: flex;
	align-items: center;
	height: 50upx;
	text{
		margin-left: 10upx;
	}
}
.conclusion{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 40upx;
	margin-top: 30upx;
	font-size: 24upx;
}
.conclusion1{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 120upx;
	font-size: 24upx;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #FFFFFF;
	width: 100%;
	view{
		background:#1D201F;
		color: #FFFFFF;
		text-align: center;
		height: 100%;
		width: 300upx;
		line-height: 120upx;
		font-size:28upx;
		font-weight: 600;
	}
	.outOfStock{
		background:#ccc;
		color: #FFFFFF;
		text-align: center;
		height: 100%;
		width: 300upx;
		line-height: 120upx;
		font-size:28upx;
		font-weight: 600;
	}
}
.orderList_content{
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: 10upx;
	// margin:26upx 0;
	margin-bottom: 120upx;
	.remarks{
		height: 50upx;
		line-height: 50upx;
		text:nth-of-type(1){
			font-size:26upx;
		}
		text:nth-of-type(2){
			font-size:24upx;
			margin-left: 10upx;
		}
	}
	.orderDetails{
		text-align: right;
		view:nth-of-type(1){
			border-bottom: 1upx solid #EDEFF3;
		}
		view{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 88upx;
			text:nth-of-type(1){
				font-size:26upx;
				padding-top: 10upx;
			}
			text:nth-of-type(2){
				font-size:24upx;
				margin-left: 10upx;
				padding-top: 10upx;
			}
		}
		
	}
	.commodityDescription{
		text-align: right;
		view:nth-of-type(3){
			border-bottom: 1upx solid #EDEFF3;
		}
		view:nth-of-type(4){
			border-bottom: 1upx solid #EDEFF3;
		}
		view:nth-of-type(5){
			border-bottom: 1upx solid #EDEFF3;
		}
		view{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80upx;
			line-height: 80upx;
			text:nth-of-type(1){
				font-size:26upx;
				color:#333;
			}
			text:nth-of-type(2){
				font-size:26upx;
				margin-left: 10upx;
			}
			.box_number{
				width: 50upx;
				text-align: center;
				border-left: 1px solid #EDEFF3;
				border-right: 1px solid #EDEFF3;
			}
			input{
				font-size:26upx;
				color:#333;
				height: 50upx;
				line-height: 50upx;
				
				width:510upx;
				text-align: left;
			}
			.iconfont{
				font-size: 36upx  !important;
				color: #ccc !important;
				padding: 0 20upx;
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
		justify-content: space-between;
		flex-wrap: nowrap;
		image{
			width: 167upx;
			height: 167upx;
			border-radius: 8upx;
		}
		.orderList_info_itemized{
			view:nth-of-type(1){
				font-size: 27upx;
				padding: 5upx 0 16upx;
				text-align: right;
			}
			view:nth-of-type(2){
				font-size: 23upx;
				color:#333;
				height: 70upx;
				width: 100%;
				overflow: hidden;
				text-align: right;
			}
			view:nth-of-type(3){
				font-size: 23upx;
				color:#999;
				height: 70upx;
				width: 100%;
				overflow: hidden;
				text-align: right;
			}
		}
		.orderList_info_introduction{
			width: 306upx;
			margin: 0upx 20upx;
			view:nth-of-type(1){
				font-size: 27upx;
				padding: 5upx 0 16upx;
			}
			view:nth-of-type(2){
				font-size: 23upx;
				color:#333;
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
				color:#333;
				margin-top: 25upx;
			}
		}
	}
}
.selected{
	background: #333 !important;
	color: #FFFFFF !important;
}
.disabled{
	.quota{
		background: url('http://pic.doggieye.com/20191218/4600a328281c4342bd397c29fe583fb2.png') !important;
	}
	.introduction_info{
		view{
			color: #999999;
		}
	}
}
.coupons{
	position: relative;
	margin: 30upx 0 20upx;
	display: flex;
	align-items: center;
	width: 100%;
	height: 180upx;
	background: #FFFFFF;
	.quota{
		font-size: 80upx;
		color: #fff;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url('http://pic.doggieye.com/20191217/91d8dd137469495db080680e0065d35b.png');
		background-size: 100%;
		width: 224upx;
		height: 180upx;
	}
	.introduction{
		margin-left: 20upx;
		.introduction_info:nth-of-type(1){
			display: flex;
			justify-content: space-between;
			view:nth-of-type(1){
				font-size:32upx;
				font-family:Source Han Sans CN;
				font-weight:600;
			}
			view:nth-of-type(2){
				position: absolute;
				width:96upx;
				height:44upx;
				background:rgba(255,255,255,0.6);
				border:2upx solid rgba(29,32,31,1);
				border-radius:22upx;
				font-size:22upx;
				font-family:Source Han Sans CN;
				right: 30upx;
				top: 80upx;
				text-align: center;
				line-height:44upx;
			}
		}
		.introduction_info:nth-of-type(2){
			color:#999999;
			font-size:24upx;
			font-family:Roboto;
		}
		view{
			line-height: 60upx;
		}
	}
}
.active:before{
	content:"";
	position:absolute;
	height: 2px;
	width: 80%;
	left: 10%;
	bottom: 0upx;
	background: #000000 !important;
}
.active{
	font-size: 28upx;
	font-weight: 600;
	color: #333333;
}
.nav{
	width: 100%;
	line-height: 80upx;
	height: 80upx;
	display: flex;
	justify-content: center;
	view{
		width: 33.33%;
		line-height: 80upx;
		height: 80upx;
		text-align: center;
		position: relative;
		font-size: 26upx;
	}
}
</style>
