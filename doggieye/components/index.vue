<template>
	<view style="width: 100%">
		<view class="nav_head"  :style="'line-height:'+((88+(datas*2-40)))+'px !important;'">
			DOGGIEYE
		</view>
		<view class="bg">
			<view class="content">
				<view class="commodities" style="margin-top: 0;">
					<image src="http://pic.doggieye.com/20200410/384a0cc22b634b55bd1ad028a3a32c29.png" class="map_img" mode="widthFix"></image>
				</view>
				<button open-type="getUserInfo" lang="zh_CN" class='denglu' @getuserinfo="bindGetUserInfo">立即购买</button>
				<view class="commodities">
					<image src="http://pic.doggieye.com/20191226/9a8029c756f94fc0a956dc47d9f76212.png" class="map_img" mode="widthFix"></image>
				</view>
				<view class="commodities">
					<image src="http://pic.doggieye.com/20191226/35f84261a5d647078a574a0aa0abcf7b.png" class="map_img" mode="widthFix"></image>
				</view>
				<view class="commodities" style="margin-bottom: 180upx !important;">
					<image src="http://pic.doggieye.com/20191226/8702d134a3f4432ea3ce01ec11a5b8c1.png" class="map_img" mode="widthFix"></image>
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
				
			}
		},
		props:['datas'],
		methods: {
			buy:function(){
				var that=this;
				uni.navigateTo({url:"boxDetails"});
			},
			userLogin:function(data,nickName){
				var that=this;
				post('/api/wxXcx/login',data).then((res)=>{
					if(res[1].data.code==200){
						uni.setStorageSync('userAvatars',res[1].data.data.userAvatars);//把获取的头像存储到本地
						uni.setStorageSync('userId',res[1].data.data.userId);//把获取的用户id存储到本地
						uni.setStorageSync('nickName',nickName);//把获取的昵称存储到本地
						uni.setStorageSync('token',res[1].data.data.token);//把获取的token存储到本地
						that.$forceUpdate();
						uni.navigateTo({url:"boxDetails"});
					}else{
						toast(res[1].data.msg)
					}
					
				}).catch((res)=>{
					toast('登录失败！请重新登录')
				})
			},
			bindGetUserInfo: function(e){
				var that=this;
				if(uni.getStorageSync('userAvatars')&&uni.getStorageSync('userId')&&uni.getStorageSync('nickName')){
					uni.navigateTo({
						url:"../pages/boxDetails"
					})
				}else{
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
	font-size:48upx;
	font-family:Porter;
	font-weight:bold;
	background: url("http://pic.doggieye.com/20191218/7c6fc85dc37c4e9dac15ad69fe686cc2.png");
	background-size: 100%;
	position: fixed;
	z-index: 999;
	top:0upx;
	left: 0;
}
.denglu{
	color: #FFFFFF;
	background: #63ADF2;
	border-radius: 44upx;
	height:88upx;
	width:648upx;
	margin: 40upx auto;
	line-height: 88upx;
	box-shadow:1upx 2upx 13upx 0upx rgba(34,37,36,0.14);
}
.denglu::after{
	border: none;
}
.dis{
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
.content{
	.commodities{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-top:30upx;
		background: #FFFFFF;
		box-shadow:1upx 2upx 13upx 0upx rgba(34,37,36,0.14);
		border-radius: 10upx;
		.map_img{
			width: 100%;
			height: 100%;
		}
		button{
			color: #fff;
			background: #333;
		}
	}
	.commodities1{
		.map_img{
			width: 605upx;
			height: 831upx;
		}
	}
	
}
</style>
