<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>优惠券</text>
		</view>
		<view class="bg">
			<view class="content">
				<view class="popup" capture-catch:touchmove="preventdefault" v-show="popupShow">
					<view class="popupInfo">
						<view>是否确认线下购买操作?</view>
						<view>线下购买</view>
						<view class="popupInfo_button">
							<text @click="popupShow=false">取消</text>
							<text @click="buy">确认</text>
						</view>
					</view>
				</view>
				<view class="nav">
					<view @click="activeFun(1)" :class="{active:active==1}">未使用</view>
					<view @click="activeFun(2)" :class="{active:active==2}">已使用</view>
					<view @click="activeFun(3)" :class="{active:active==3}">已过期</view>
				</view>
				<view v-if="list.length>0">
					<view class="couponsList">
						<view :class="active==1?'coupons coupons1':'coupons'" v-for="(item,key) in list" :key="key">
							<view :class="{'quota':true,'favouredPriceSize':item.favouredPrice>999}"><text style="font-size: 50upx;margin-top: 40upx;">￥</text>{{item.favouredPrice}}</view>
							<view class="introduction">
								<view><text style="font-size: 32upx;font-weight: 600;">满{{item.availablePrice}}减{{item.favouredPrice}}</text><text v-if="active==1" @click="play(item.id,favouredPrice)">去使用</text><image v-if="active==3" src="http://pic.doggieye.com/20191217/e673d6e816db413087825cc2895a773a.png" ></image><image v-if="active==2" src="http://pic.doggieye.com/20191217/d043fc66be9246a5b13d46553a24a961.png"></image></view>
								<view style="font-size: 24upx;">{{item.couponStartDate }}-{{item.couponEndDate}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="hint" v-else>
					<image src="http://pic.doggieye.com/20191217/9f05b4198eaf45a8a88143aee6e1ad49.png"></image>
					<view>还没有优惠券</view>
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
				active: 1,
				list:[],
				popupShow:false,
				statusBarHeight:getApp().globalData.statusBarHeight,
			}
		},
		onLoad() {
			this.activeFun(1)
		},
		methods: {
			play:function(){
				this.popupShow=true
			},
			buy:function(){
				var that=this;
				that.popupShow=false;
				uni.navigateTo({url:"boxDetails"});
			},
			activeFun:function(e){
				post('/api/user/coupon/couponList',{"vo": {"couponStatus":e,'userId':uni.getStorageSync('userId')}}).then((res)=>{
					if(res[1].data.code==200){
						this.list=res[1].data.data.list;
						this.active=e;
						for (let i=0;i<this.list.length;i++) {
							this.list[i].couponEndDate=this.list[i].couponEndDate.substring(0,10)
							this.list[i].couponStartDate=this.list[i].couponStartDate.substring(0,10)
						}
					}else{
						toast(res[1].data.msg)
					}		
				}).catch((res)=>{
					toast("网络连接失败！")
				})
			},
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">

.favouredPriceSize{
	font-size: 60upx !important;
	text:first-child{
		margin-top: 30upx !important;
		font-size: 40upx !important;
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
.coupons{
	position: relative;
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
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
		background: url('http://pic.doggieye.com/20191217/ad1a2b66428943ccb8189e6a6cf44878.png');
		background-size: 100%;
		width: 224upx;
		height: 180upx;
	}
	.introduction{
		color: #999999;
		margin-left: 20upx;
		view:first-child{
			display: flex;
			justify-content: space-between;
			image{
				display: inline-block;
				width: 96upx;
				height: 116upx;
				position: absolute;
				top: 42upx;
				right: 0;
			}
		}
		view{
			line-height: 80upx;
		}
	}
}
.coupons1{
	.quota{
		background: url('http://pic.doggieye.com/20191217/91d8dd137469495db080680e0065d35b.png');
		background-size: 100%;
	}
	.introduction{
		view:first-child{
			color: #333 !important;
		}
		text:last-child{
			display: inline-block;
			width:96upx;
			height:44upx;
			background:rgba(255,255,255,0.6);
			border:2upx solid rgba(29,32,31,1);
			border-radius:22upx;
			font-size:22upx;
			line-height: 44upx;
			text-align: center;
			position: absolute;
			right: 10upx;
			top:78upx
		}
	}
}
.active{
	color: #333 !important;
	font-size:28upx;
	font-weight: 600;
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
		font-size:26upx;
		text-align: center;
		position: relative;
		color: #999999;
		
	}
}
.popup{
	width: 100%;
	height: 100vh;
	background: rgba(0,0,0,0.5);
	position: fixed;
	z-index: 999999;
	top: 0;
	left: 0;
	.popupInfo{
		position: relative;
		top: 500upx;
		left: 120upx;
		width:510upx;
		height:274upx;
		background:rgba(255,255,255,1);
		border-radius:20upx;
		background: #FFFFFF;
		view:nth-of-type(1){
			padding: 20upx 0;
			text-align: center;
			font-size: 30upx;
		}
		view:nth-of-type(2){
			padding: 20upx 0;
			text-align: center;
			font-size: 32upx;
			font-weight: 600;
		}
		view:nth-of-type(3){
			margin-top: 22upx;
			font-size: 30upx;
			border-top: 1upx solid #F8F8F8;
			text{
				display: inline-block;
				box-sizing: border-box;
				width: 50%;
				text-align: center;
				color: #5D9DDE;
				height: 88upx;
				line-height: 88upx;
			}
			text:first-child{
				border-radius: 8upx;
				border-right: 1upx solid #F8F8F8;
			}
			text:last-child{
				border-radius: 8upx;
				font-weight: 600;
			}
		}
	}
}
</style>
