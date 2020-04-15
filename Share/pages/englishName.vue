<template>
	<view class="content">
		<view class="head" v-show="!show_popups">
			<b>英文名</b>
		</view>
		<view class="cancel" @click="cancel" v-show="show_popups">取消</view>
		<view :class="{head_img1:!show_popups,'head_img':true}" >
			<image src="http://pic.doggieye.com/20200316/4cf0570c67eb4b32878bdab1e75a4ef7.png" class="publicity_img" v-show="!show_popups" ></image>
			<view class="search_input" @click="search" :style="show_popups?'height:120upx;width:100%;':'width:650upx;height:88upx;background:rgba(139,199,255,1);box-shadow:3upx 5upx 10upx 0px rgba(82,159,231,0.2);'">
				<view :class="{top_search:show_popups,'flex_input':true}">
					<view  :class="{bg_input:show_popups,flex_input:true}">
						<view class="imgs" @click="enquiry(keywords)">
							<image src="../static/search1.png" v-if="show_popups"></image>
							<image src="http://pic.doggieye.com/20200316/d5fd5c28d36040c282abca5d796d4a9d.png" v-else></image>
						</view>
						<input style="color: #FFFFFF;font-size:30upx;vertical-align: middle;" v-model="keywords" placeholder="输入正文名/英文名进行搜索"  :placeholder-style="show_popups?'color: #999':'color: #fff'" @confirm="enquiry(keywords)"></p>
					</view>
				</view>
			</view>
		</view>
		<view class="footer" v-show="!show_popups">
			<view @click="girlsEnglishName">
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png" ></image>
				<view class="top">
					<view>女生英文名</view>
					<view><view>TOP</view> <view>100</view></view>
				</view>
			</view>
			<view>
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png" ></image>
				<view class="top" @click="random">
					<view>随机英文名</view>
					<view>随意有惊喜</view>
				</view>
			</view>
			<view @click="boysEnglishName">
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png" ></image>
				<view class="top">
					<view>男生英文名</view>
					<view><view>TOP</view> <view>100</view></view>
				</view>
			</view>
			<view>
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png" ></image>
				<view class="top" @click="letter">
					<view>字母取名</view>
					<view>ABCDEFG</view>
				</view>
			</view>
			<view @click="neutralEnglishName">
				<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png" ></image>
				<view class="top">
					<view>中性英文名</view>
					<view><view>TOP</view> <view>100</view></view>
				</view>
			</view>
		</view>
		<view class="popups" v-show="show_popups&&enquiry_show" >
			<view class="tab" v-if="data.neutralNameNumber||data.allNameNumber||data.boyNameNumber||data.girlNameNumber     ">
				<view :class="{'active_tab':active==1}" @click="tab(1)">
					<view>{{data.allNameNumber}}</view>
					<view>全部</view>
				</view>
				<view  :class="{'active_tab':active==2}" @click="tab(2)">
					<view>{{data.boyNameNumber}}</view>
					<view>男生</view>
				</view>
				<view  :class="{'active_tab':active==3}" @click="tab(3)">
					<view>{{data.girlNameNumber}}</view>
					<view>女生</view>
				</view>
				<view  :class="{'active_tab':active==4}" @click="tab(4)">
					<view>{{data.neutralNameNumber}}</view>
					<view>中性</view>
				</view>
			</view>
			<view class="list">
				<view class="details" v-for="(item,key) in list " :key="key">
					<view class="left_details">
						<image src="http://pic.doggieye.com/20200316/fbba8768ae194c5e9078d1c2d4b1db2b.png"></image>
						<view>
							<view>{{item.englishName}}</view>
							<view>{{item.chineseName}}</view>
						</view>
					</view>
					<view class="right_details">
						<view :style="'color: #FF97D9;'" v-if="item.sex==2">女生</view>
						<view :style="'color: #53A0E8;'" v-if="item.sex==1">男生</view>
						<view :style="'color: #FFB400;'" v-if="item.sex==3">中性</view>
						<view :style="'color: #999;'">{{item.usageNumber}}人使用</view>
					</view>
				</view>
				<view class="tishi" v-show="numbers<1">
					<image src="../static/pic_searchresult.png" ></image>
					<view>抱歉，神马都没找到</view>
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
				show_popups:false,
				active:1,
				enquiry_show:false,
				keywords:'',
				data:{},
				list:[],
				numbers:false
			}
		},
		methods: {
			enquiry:function(e){
				if(e.length>0){
					uni.showLoading({
					    title: '加载中'
					});
					post("/api/game/englishName/getListByChineseName",e).then((res)=>{
						if(res[1].data.code==200){
							this.data=res[1].data.data;
							this.list=res[1].data.data.allNameList;
							this.numbers=this.data.allNameNumber;
							this.enquiry_show=true;
						}else{
							this.msg=res[1].data.msg;
						}
						 uni.hideLoading();
					}).catch((res)=>{
						toast(res[1].data.msg)
						uni.hideLoading();
					})
				}else{
					toast("请输入您想要搜索的名字")
				}
			},
			random:function(){
				uni.navigateTo({
					url:"randomName"
				})
			},
			letter:function(){
				uni.navigateTo({
					url:"lettersName"
				})
			},
			tab:function(e){
				this.active=e;
				if(e==1){
					this.list=this.data.allNameList;
					this.numbers=this.data.allNameNumber;
				}else if(e==2){
					this.list=this.data.boyNameList;
					this.numbers=this.data.boyNameNumber;
				}else if(e==3){
					this.list=this.data.girlNameList;
					this.numbers=this.data.girlNameNumber;
				}else{
					this.list=this.data.neutralNameList;
					this.numbers=this.data.neutralNameNumber;
				}
				console.log(this.list)
			},
			girlsEnglishName:function(){
				uni.navigateTo({
					url:'girlsEnglishName'
				})
			},
			boysEnglishName:function(){
				uni.navigateTo({
					url:'boysEnglishName'
				})
			},
			neutralEnglishName:function(){
				uni.navigateTo({
					url:'neutralEnglishName'
				})
			},
			search:function(){
				this.show_popups=true
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration:0
				});
			},
			cancel:function(){
				var that=this;
				that.guanle()
				this.keywords=''
			},
			guanle:function(){
				var that=this;
				that.show_popups=false;
			}
		}
	}
</script>

<style scoped lang="scss">
.tishi{
	width: 100%;
	height: 100%;
	text-align: center;
	image{
		width: 220upx;
		height: 220upx;
		margin-top: 50%;
	}
}
.list{
	width:100%;
	padding-bottom: 20upx;
	.details:first-child{
		margin-top: 26upx;
	}
	.details{
		width:702upx;
		height:136upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 14upx 2upx rgba(139,199,255,0.14);
		border-radius:10upx;
		margin:20upx auto 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left_details{
			margin-left: 26upx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width:96upx;
				height:96upx;
				border-radius:50%;
			}
			>view{
				line-height: 48upx;
				margin-left: 26upx;
				view:first-child{
					font-size: 34upx;
				}
				view:lastst-child{
					font-size: 28upx;
				}
			}
		}
		.right_details{
			line-height: 48upx;
			text-align: right;
			margin-right: 26upx;
		}
	}
}
.tab{
	width: 100%;
	height:96upx;
	background:rgba(255,255,255,1);
	display: flex;
	justify-content: center;
	align-items: center;
	>view{
		width: 150upx;
		text-align: center;
		line-height:40upx;
		>view{
			font-size:26upx;
			color:rgba(153,153,153,1);
		}
	}
	.active_tab{
		>view{
			font-size:28upx;
			color: #333;
		}
		
	}
}
.popups{
	width: 100%;
	background-color: #E4F2FA;
}
.cancel{
	width: 120upx;
	height: 120upx;
	line-height: 120upx;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9999;
	text-align: center;
}
.flex_input{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height:100%;
	width: 100%;
	.bg_input{
		width:600upx;
		height: 72upx;
		border-radius: 36upx;
		background-color: #FFFFFF;
		margin-left: 20upx;
	}
	.flex_input{
		input{
			height:72upx ;
			width: 500upx;
			line-height:40upx;
		}
	}
	
}
.head_img{
	.publicity_img{
		display: block;
		width: 660upx;
		height: 200upx;
		margin: 32upx auto 20upx;
	}
	.search_input{
		border-radius:44upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 0 auto;
		.imgs{
			width: 100upx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 36upx;
				height: 36upx;
			}
		}
		
	}
}
.top_search{
	height: 120upx;
	width: 100%;
	background: url('http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png');
	background-size: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	.search{
		width:600upx;
		height:72upx;
		background:rgba(255,255,255,1);
		border-radius:36upx;
		margin-left: 26upx;
		position: relative;
		image{
			display: block;
			position: absolute;
			top: 18upx;
			left: 20upx;
			width: 36upx;
			height: 36upx;
		}
	}
}
.footer{
	width:702upx;
	height:719upx;
	background:rgba(255,255,255,1);
	border-radius:10upx;
	margin: 26upx auto;
	box-shadow:0upx 20upx 100upx -40upx #d2dbe0;
	>view{
		width:315upx;
		height:200upx;
		background:rgba(239,64,163,1);
		border-radius:10upx;
		margin-left: 24upx;
		margin-top: 20upx;
		float: left;
		display: flex;
		align-items: center;
		justify-content: center;
		image{
			width: 96upx;
			height: 96upx;
			border-radius: 50%;
		}
		>view{
			margin-left: 24upx;
			view{
				color: #FFFFFF;
				display: flex;
				>view:nth-of-type(2){
					margin-left: 24upx;
				}
			}
			
		}
	}
	>view:nth-of-type(1){
		margin-top: 30upx;
		background:rgba(239,64,163,0.1);
		box-shadow: 0upx 20upx 100upx -40upx #fcf2f8;
	}
	>view:nth-of-type(2){
		margin-top: 30upx;
		background:rgba(221,175,244,0.5);
		box-shadow: 0upx 20upx 100upx -40upx #f3e0fc;
	}
	>view:nth-of-type(3){
		background:rgba(171,214,255,0.5);
		box-shadow: 0upx 20upx 100upx -40upx #d8f0fd;
	}
	>view:nth-of-type(4){
		background:rgba(206,224,35,0.4);
		box-shadow: 0upx 20upx 100upx -40upx #f0fc80;
	}
	>view:nth-of-type(5){
		background:rgba(255,165,8,0.3);
		box-shadow: 0upx 20upx 100upx -50upx #fbc25e;
	}
}
.content{
	background: #E4F2FA;
	width: 100%;
	min-height: 100vh;
}
.head_img1{
	width:702rpx;
	height:364rpx;
	background:rgba(255,255,255,1);
	border-radius:10rpx;
	margin: -32upx auto 0;
	overflow: hidden;
	box-shadow:0upx 20upx 100upx -40upx #d2dbe0;
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
	
}
</style>
