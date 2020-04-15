<template>
	<view class="content">
		<view class="head">
			<image src="../static/goback.png" @click="goback"></image>
			<b>女生英文名TOP100</b>
		</view>
		<view class="nameList">
			<view class="name" v-for="(item,index) in data" :key="index"  @click="Details(item)">
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png"></image>
				<view class="details">
					<view><view>{{item.englishName}}</view><view style="color: #FF97D9;">女生 NO.{{index+1}}</view></view>
					<view><view>{{item.chineseName}}</view><view style="color: #999999;">{{data.clickNumber}}万人使用</view></view>
				</view>
			</view>
		</view>
		<image src="http://pic.doggieye.com/20200317/d8545ca8ae4f4d96ad705bddf6b97b33.png" class="topButton" @click="top"></image>
	</view>

</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				data:[]
			}
		},
		onLoad(e) {
			var data={
				// sidx:'time',
			  "vo": {
			    // "chineseName": "string",
			    // "englishName": "string",
			    // "initial": "string",
			    // "isBoyTop": 1,
			    "isGirlTop":1,
			    // "isNeutralTop": 0,
			    // "sex": 0
			  }
			}
			post('/api/game/englishName/list',data).then((res)=>{
				this.data=res[1].data.data.list
			}).catch((res)=>{
				console.log("出错了")
			})	
		},
		methods: {
			top:function(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration:0
				});
			},
			Details:function(e){
				uni.navigateTo({
					url:"namesDetails?englishName="+e.englishName+"&chineseName="+e.chineseName+"&sex="+e.sex+"&allegory="+e.allegory+"&language="+e.language+"&signification="+e.signification 
				})
			},
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
.content{
	min-height: 100vh;
	background-color: #E4F2FA;
}
.topButton{
	width: 120upx;
	height: 120upx;
	display: block;
	position: fixed;
	right: 26upx;
	bottom: 120upx;
}
.nameList{
	width: 100%;
	padding-bottom: 20upx;
	overflow: hidden;
	.name{
		width:702upx;
		height:136upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 14upx 2upx rgba(139,199,255,0.14);
		border-radius:10upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 20upx auto 0;
		image{
			width:96upx;
			height:96upx;
			background:rgba(247,222,255,1);
			border-radius:50%;
			margin-left: 26upx;
		}
		.details{
			margin-left: 26upx;
			width: 532upx;
			>view{
				display: flex;
				justify-content: space-between;
				line-height: 50upx;
			}
		}
	}
}

.head{
	height: 160upx;
	width: 100%;
	background: url('http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png');
	background-size: 100%;
	text-align: center;
	line-height: 160upx;
	font-size: 36upx;
	font-family:PingFang SC;
	font-weight:600;
	letter-spacing: 2px;
	position: relative;
	image{
		width:28upx;
		height: 28upx;
		float: left;
		position: absolute;
		top: 66upx;
		left: 24upx;
	}
}
</style>
