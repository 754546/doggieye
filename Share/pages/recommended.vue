<template>
	<view class="content">
		<view class="head">
			<view @click="goback">
				<image src="../static/goback.png" ></image>
			</view>
			<view>为您推荐</view>
		</view>
		<view class="Introduction">
			<view :class="{Introduction_head:true}" v-if="sex==1">
				<image src="http://pic.doggieye.com/20200417/efd351ab4163466595bf12caa330ec8c.png"  class="head_img"></image>
				<view style="color: #53A0E8;">男生</view>
			</view>
			<view class="Introduction_head" v-if="sex==2">
				<image src="http://pic.doggieye.com/20200417/994f9182d9ff405e9c0f0cf95b39bb0c.png"  class="head_img"></image>
				<view style="color: #FF97D9;">女生</view>
			</view>
			<view class="Introduction_head" v-if="sex==3">
				<image src="http://pic.doggieye.com/20200417/905260684ebe4217b6d33cffb52d9781.png"  class="head_img"></image>
				<view  style="color: #FFE628;">中性</view>
			</view>
			<view class="word">
				<view>帮您选了8个好听的英文名，一起来看看吧！</view>
				<view :class="{'sex1':sex==1,'sex2':sex==2,'sex3':sex==3,'button_grils':true}" @click="getInfo">
					换一批
				</view>
			</view>
		</view>
		<view class="nameList">
			<view class="name" v-for="(item,index) in data" :key="index" @click="namesDetails(item)">
				<image src="http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png" v-if="item.sex==1" style="background:#E2F1FF;"></image>
				<image src="http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png" v-if="item.sex==2" style="background:rgba(247,222,255,1);"></image>
				<image src="http://pic.doggieye.com/20200417/e3f25e11cfbc488fab1989cd850538a9.png" v-if="item.sex==3" style="background:#FFE595;"></image>
				<view class="details">
					<view><view>{{item.englishName}}</view><view style="color: #FF97D9;" v-if="item.sex==2">女生</view><view style="color: #53A0E8;" v-if="item.sex==1">男生</view><view style="color: #FFE628;" v-if="item.sex==3">中性</view></view>
					<view><view>{{item.chineseName}}</view><view style="color: #999999;">{{item.usageNumber}}万人使用</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post,toast} from '@/index';
	export default {
		data() {
			return {
				data:[],
				sex:1
			}
		},
		onLoad(e) {
			this.sex=e.sex;
			this.getInfo()
		},
		methods: {	
			namesDetails:function(e){
				uni.navigateTo({
					url:"namesDetails?englishName="+e.englishName
				})
			},
			goback:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			getInfo:function(){
				uni.showLoading()
				post("/api/game/englishName/RandomName",{sex:this.sex}).then((res)=>{
					this.data=res[1].data.data
					uni.hideLoading()
				}).catch((res)=>{
					uni.hideLoading()
					toast(res[1].data.msg)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.sex1{
	background: url("http://pic.doggieye.com/20200417/c238414221254325940ced74a1fee7f1.png") no-repeat;
	background-size: 100%;
}
.sex2{
	background: url("http://pic.doggieye.com/20200320/8445b2e16cfd4f6a825025d6987214be.png") no-repeat;
	background-size: 100%;
}
.sex3{
	background: url("http://pic.doggieye.com/20200417/d248b6777d4940c985a02bcbb1c9019b.png") no-repeat;
	background-size: 100%;
}
.nameList{
	width: 100%;
	background-color: #E4F2FA;
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
				>view:first-child{
					width: 300upx;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
	}
}
.Introduction{
	width:100%;
	height:558upx;
	background:rgba(255,255,255,1);
	border-radius:30upx;
	.word{
		view{
			width: 100%;
			text-align: center;
			line-height: 40upx;
			margin-top: 30upx;
		}
		.button_grils{
			width:212upx;
			height:76upx;
			font-size:30upx;
			color:rgba(255,255,255,1);
			text-align: center;
			line-height: 76upx;
			margin: 20upx auto;
		}
	}
	.Introduction_head{
		width:288upx;
		height:360upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 29upx 3upx rgba(83,160,232,0.2);
		margin: 16upx auto;
		text-align: center;
		image{
			width: 230upx;
			height: 200upx;
			margin: 34upx auto;
		}
		view{
			font-size:32upx;
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
