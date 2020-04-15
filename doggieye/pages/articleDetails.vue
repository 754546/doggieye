<template>
	<view style="width: 100%;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text >{{data.title}}</text>
		</view>
		<view class="bg">
			<view class="info">
				<image src="data.image" class="con_img"></image>
				<view class="title">{{data.title}}</view>
				<rich-text :nodes="data.content" class="rich"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import {post,toast} from '@/common/index'
	export default {
		data() {
			return {
				id:'',
				data:{},
				statusBarHeight:getApp().globalData.statusBarHeight,
			}
		},
		onLoad(e) {
			this.id=e.id;
			this.getData()
		},
		methods: {
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			getData:function(){
				var that=this;
				post("/api/article/info/info",{"articleId": this.id}).then((res)=>{
					if(res[1].data.code==200){
						that.data=res[1].data.data
					}else{
						toast(res[1].data.msg)
					}
					
				}).catch((err)=>{
					toast("网络连接失败！")
				})
			}
		}
	}
</script>

<style >
	.rich-img{
		width: 100%;
	}
</style>
<style lang="scss">
body{
	background: #E4F2FA;
}
.rich{
	margin: 20upx;
}
.con_img{
	width: 648upx;
	height: 364upx;
	margin: 26upx;
}
.title{
	width: 100%;
	font-size: 32upx;
	font-weight: 600;
	margin: 0 26upx 20upx;
}
.info{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	background:rgba(255,255,255,1);
	box-shadow:1upx 2upx 15upx 0upx rgba(145,165,179,0.2);
	border-radius:10upx;
	margin: 20upx 26upx 0;
}

</style>
               