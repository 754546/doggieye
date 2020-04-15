<template>
	<view style="width: 100%;">		
		<view  style="width: 100%;">
			<Index :datas="statusBarHeight" v-if="tab_active==0"/>
			<Box :datas="data" v-if="tab_active==1"/>
			<Me :datas="data" v-if="tab_active==2" @showbox="getUser()"/>
		</view>
		<view class="tabbar">
			<view @click="tab(0)">
				<image src="../static/shouye.png" v-show="tab_active!=0"></image>
				<image src="../static/shouye_checked.png" v-show="tab_active==0"></image>
				<view :style="tab_active!=0?'color:#999':''">首页</view>
			</view>
			<view  @click="tab(1)">
				<image src="../static/box.png" v-show="tab_active!=1"></image>
				<image src="../static/box_checked.png" v-show="tab_active==1"></image>
			</view>
			<view  @click="tab(2)">
				<image src="../static/wode.png" v-show="tab_active!=2"></image>
				<image src="../static/wode_checked.png"  v-show="tab_active==2"></image>
				<view :style="tab_active!=2?'color:#999':''">我的</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {post,toast} from '@/common'
	import Index from '../components/index.vue'
	import Box from '../components/explore.vue'
	import Me from "../components/personalCenter.vue"
	export default {
		data() {
			return {
				data:{},
				tab_active:0,
				statusBarHeight: getApp().globalData.statusBarHeight,
			}
		},
		components: {Index,Box,Me},
		methods: {
			tab:function(e){
				this.tab_active=e;
				if(e==1){
					this.getData()
				}else if(e==2){
					this.getUser()
				}
			},
			getData:function(){
				var that=this;
				post('/api/box/info/getNowBox',).then((res)=>{
					if(res[1].data.code==200){
						that.data=res[1].data.data;
						that.data.statusBarHeight=that.statusBarHeight;
					}else{
						toast(res[1].data.msg)
					}
					
				}).catch((error)=>{
					console.log(error)
				})
			},
			getUser:function(){
				var that=this;
				if(String(uni.getStorageSync('userId'))){
					post('/api/user/info',String(uni.getStorageSync('userId'))).then((res)=>{
						if(res[1].data.code==200){
							that.data=res[1].data.data;
							that.data.statusBarHeight=wx.getSystemInfoSync().windowHeight
							if(!that.data.userAvatars){
								that.data.userAvatars=uni.getStorageSync('userAvatars')
							}
							if(!that.data.nickname){
								that.data.nickname=uni.getStorageSync('nickName')
							}
						}
					}).catch((res)=>{
						toast(res[1].data.msg)
					})
				}
				
			},
		}
	}
</script>
<style lang="scss">
.tabbar{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	height:98upx;
	background:url("http://pic.doggieye.com/20191220/a8cc294472ed44578e45b4b2aa05bd30.png");
	background-size: 100%;
	opacity:0.95;
	display: flex;
	justify-content: center;
	view{
		width: 250upx;
		text-align: center;
		image{
			width: 48upx;
			height: 48upx;
			margin: 8upx 0 0;
		}
		view{
			width: 100%;
			line-height: 30upx;
			height: 30upx;
			text-align: center;
			font-size:20upx;
			font-family:Source Han Sans CN;
		}
	}
	view:nth-of-type(2){
		position: relative;
		image{
			width: 144upx;
			height: 144upx;
			position: absolute;
			top: -96upx;
			left: 53upx;
		}
	}
}

</style>
