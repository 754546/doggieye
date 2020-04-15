<template>
	<view class="background"  :style="'height:'+(datas.statusBarHeight-84)+'px !important;'">
		<view class="content">
			<view class="popup" capture-catch:touchmove="preventdefault" v-show="popupShow">
				<view class="popupInfo">
					<view>您还未登录</view>
					<view>请先登录</view>
					<view class="popupInfo_button">
						<text @click="popupShow=false">取消</text>
						<button open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo" class="denglu">登录</button>
					</view>
				</view>
			</view>
			<image src="http://pic.doggieye.com/20191218/f6e3b1e47a2b4bb1a5ea0e58a6288e74.png" class="logo"></image>
			<view class="info">
				<view class="userInfo" @click="skips()">
					<image :src="datas.userAvatars?datas.userAvatars:'http://pic.doggieye.com/20191219/157827ee76774ccea9551f354a4f64fd.png'" ></image>
					<span>{{datas.nickname?datas.nickname:'请登录'}}</span>
				</view>
				<view class="userNav">
					<view class="nav_child" @click="skip('/pages/orderForm')">
						<image src="http://pic.doggieye.com/20191218/3c002a45e33e45d19a058e0136e0233e.png"></image>
						<view>我的订单</view>
					</view>
					<view class="nav_child"  @click="skip('/pages/coupons')">
						<image src="http://pic.doggieye.com/20191220/59e442545839465893f089580c47a6cd.png"></image>
						<view>优惠券</view>
					</view>
				</view>
			</view>
			<view class="phone">
				<view  @click="jump('receivingAddress')">
					<text>收货地址</text><text class="iconfont icon-jiantouyou"></text>
				</view>
				<view  @click="jump('about')">
					<text>关于我们</text><text class="iconfont icon-jiantouyou"></text>
				</view>
				<view >
					<text>联系电话</text><text style="color:rgba(78,131,191,1);" @click="call()">0731-86452620</text>
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
				popupShow:false,
			}
		},
		props:['datas'],
		methods: {
			jump:function(url){
				uni.navigateTo({
					url:url
				});
			},
			call:function(){
				uni.makePhoneCall({
				    phoneNumber:'0731-86452620' //仅为示例
				});
			},
			skips:function(){
				if(!uni.getStorageSync('userAvatars')||!uni.getStorageSync('userId')||!uni.getStorageSync('nickName')){
					this.popupShow=true;
				}
			},
			skip:function(e){
				if(uni.getStorageSync('userAvatars')&&uni.getStorageSync('userId')&&uni.getStorageSync('nickName')){
					uni.navigateTo({
						url:e
					});
				}else{
					this.popupShow=true;
				}
			},
			userLogin:function(data,nickName){
				var that=this;
				post('/api/wxXcx/login',data).then((res)=>{
					if(res[1].data.code==200){
						uni.setStorageSync('userAvatars',res[1].data.data.userAvatars);//把获取的头像存储到本地
						uni.setStorageSync('userId',res[1].data.data.userId);//把获取的用户id存储到本地
						uni.setStorageSync('nickName',nickName);//把获取的昵称存储到本地
						uni.setStorageSync('token',res[1].data.data.token);//把获取的token存储到本地
						that.popupShow=false;
						that.$emit('showbox'); //触发showbox方法，true为向父组件传递的数据
					}else{
						toast(res[1].data.msg)
					}
				}).catch((res)=>{
					toast('登录失败！请重新登录')
				})
			},
			bindGetUserInfo: function(e){
				var that=this;
				if (e.detail.userInfo){
					uni.login({
						success: function(loginRes){
							uni.getUserInfo({
								success: function(res) {
									var data={
										  "sex": res.userInfo.gender,
										  "userAvatars": res.userInfo.avatarUrl,
										  "jsCode": loginRes.code
										}
									that.userLogin(data,res.userInfo.nickName)
								}
							});
						}
					});
				} else {
					 console.log("用户按了拒绝授权按钮") 
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.background{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	min-height:100vh;
	background: url('http://pic.doggieye.com/20191223/9d79df86fb61454f95f4eecc14efa38e.png') no-repeat #e4f2fa;
	background-size: 100%;
}
.popup{
	width: 100%;
	height: 100vh;
	background: rgba(0,0,0,0.5);
	position: fixed;
	z-index: 999999;
	top: 0;
	left: 0;
	overflow: hidden;
	.popupInfo{
		overflow: hidden;
		position: relative;
		top: 360upx;
		left: 120upx;
		width:510upx;
		height:274upx;
		background:rgba(255,255,255,1);
		border-radius:20upx;
		background: #FFFFFF;
		view:nth-of-type(1){
			padding: 20upx 0;
			text-align: center;
			font-size: 32upx;
			font-family:PingFang SC;
		}
		view:nth-of-type(2){
			padding: 20upx 0;
			text-align: center;
			font-size: 34upx;
			font-weight: 600;
			font-family:PingFang SC;
		}
		view:nth-of-type(3){
			font-size: 32upx;
			margin-top: 18upx;
			display: flex;
			justify-content: center;
			border-top: 1upx solid #F8F8F8;
			button,text{
				display:block;
				box-sizing: border-box;
				width: 50%;
				text-align: center;
				color: #5D9DDE;
				height: 88upx;
				line-height: 88upx;
				padding: 0;
				margin: 0;
				background: #FFFFFF;
				font-family:Source Han Sans CN;
			}
			text:first-child{
				height: 88upx;
				border-right: 1upx solid #F8F8F8;
				font-size: 30upx;
			}
		}
	}
}
.denglu::after {
	border:none;
}
.denglu{
	font-size: 32upx;
	font-weight: 600;
	border: 0 !important;
	border-radius: 0upx !important;
	box-shadow: 0 0 0 #FFFFFF !important; 
}
.info{
	width: 100%;
	height: 308upx;
	background: #FFFFFF;
	border-radius: 10upx;
	margin: 20upx auto;
	box-shadow:-3upx 10upx 17upx 1upx rgba(142,153,159,0.14);
	.userInfo{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		image{
			width: 123upx;
			height: 124upx;
			border-radius: 50%;
			margin: 20upx;
			border: 3upx solid #1d201f;
		}
	}
	.userNav{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 142upx;
		.nav_child{
			height: 142upx;
			width: 50%;
			text-align: center;
			font-size:24upx;
			image{
				padding: 20upx 0;
				width: 44upx;
				height: 44upx;
			}
		}
	}
}
.logo{
	width: 284upx;
	height: 111upx;
	margin-top: 72upx;
}
.phone{
	box-shadow:-3upx 10upx 17upx 1upx rgba(142,153,159,0.14);
	navigator,view{
		height: 95upx;
		margin:0 27upx ;
		width: 100%;
		font-size:28upx;
		font-family:Source Han Sans CN;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-bottom:1upx solid rgba(237,239,243,1);
		.iconfont{
			color: #999999;
			font-size: 26upx !important;
		}
	}
	background: #FFFFFF;
	border-radius: 10upx;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
