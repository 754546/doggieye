<template>
	<view class="content">
		<view class="head">
			<view @click="goback">
				<image src="../static/goback.png"></image>
			</view>
			<view>中性英文名TOP100</view>
		</view>
		<view class="nameList">
			<view class="name" v-for="(item,index) in data" :key="index" @click="Details(item)" v-if="item.sex==3">
				<view class="sex_img3 sex_img" v-if="item.sex==3">
					<image src="http://pic.doggieye.com/20200417/e3f25e11cfbc488fab1989cd850538a9.png" ></image>
				</view>
				<view class="details">
					<view><view>{{item.englishName}}</view><view style="color: #FFA508;">中性 NO.{{index+1}}</view></view>
					<view><view>{{item.chineseName}}</view><view style="color: #999999;">{{data.clickNumber}}万人使用</view></view>
				</view>
			</view>
		</view>
		<image src="http://pic.doggieye.com/20200317/d8545ca8ae4f4d96ad705bddf6b97b33.png" class="topButton" @click="top"></image>
	</view>

</template>

<script>
	import {post,toast} from '@/index';
	export default {
		data() {
			return {
				data:[],
				list:[],
				totalPage:1,
				pageSize:1,
				pageNumber:10,
			}
		},
		onLoad() {
			this.getInfo()
		},
		onReachBottom:function(){
			if(this.pageSize<this.totalPage){
				this.pageSize++;
				this.getInfo()
			}else{
				toast('没有更多了')
			}
		},
		methods: {
			getInfo:function(){
				uni.showLoading()
				var timeToast=setTimeout(function () {
				 	toast('网络连接超时')
					uni.hideLoading()
				}, 15000);
				post('/api/game/englishName/list',{"curPage":this.pageSize,"limit":this.pageNumber,"vo":{"isNeutralTop": 1,}
				}).then((res)=>{
					for (var i=0;i<res[1].data.data.list.length;i++) {
						this.data.push(res[1].data.data.list[i])
					}
					this.totalPage=res[1].data.data.totalPage;
					clearTimeout(timeToast)
					uni.hideLoading()
				}).catch((res)=>{
					uni.hideLoading()
					toast(res[1].data.msg)
					clearTimeout(timeToast)
				})
			},
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
				console.log(e)
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
		.sex_img{
			width:96upx;
			height:96upx;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 26upx;
			background:#FFE595;
			image{
				width:72upx;
				height:66upx;
			}
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
	height: 168upx;
	width: 100%;
	background: url('http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png');
	background-size: 100%;
	text-align: center;
	line-height: 168upx;
	font-size: 36upx;
	font-family:PingFang SC;
	font-weight:600;
	letter-spacing: 2px;
	>view:first-child{
		width: 100upx;
		height: 168upx;
		line-height:168upx;
		display: inline-block;
		position: absolute;
		justify-content: center;
		top:0;
		left:0;
	}
	image{
		width:28upx;
		height: 28upx;
	}
}
</style>
