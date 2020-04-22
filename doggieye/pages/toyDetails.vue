<template>
	<view style="width: 100%;">
		<view class="nav_heads"  :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>{{data.toyName?data.toyName:'玩具详情'}}</text>
		</view>
		<view class="bg">
			<view class="content">
				<view class="info1">
					<view class="uni-padding-wrap banner">
						<view class="page-section swiper">
							<view class="page-section-spacing">
								<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="500" indicator-active-color="#fff" indicator-color='rgba(3,3,3,0.3)'>
									<swiper-item v-for="(item,index) in bannerImageUrlList" :key="index" class="swiper_img">
										<image :src="item"></image>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>
			<!-- 		<view class="title">
						<view class="h3">
							<view>{{data.toyName?data.toyName:''}}</view>
							<view><text>库存</text><text>9999+</text></view>
							<view><text>销量</text><text>755</text></view>
						</view>
						<view class="promotionalName">{{data.promotionalName?data.promotionalName:''}}</view>
						<view class="pic">
							￥70.00
						</view>
					</view> -->
				</view>
				<view class="info" >
					<view class="tab">
						<view  @click="tab(1)" :class="{active_tab:tabShow}">玩具介绍</view>
						<view  @click="tab(2)" :class="{active_tab:!tabShow,}">相关故事</view>
					</view>
					<view class="tab_content" v-if="tabShow">
						<view class="imgListD" v-for="(item,index) in imglist" :key="index">
							<image :src="item" mode="widthFix"></image>
						</view>
					</view>
					<view class="tab_content" v-else>
						<view class="story_content">
							<view class="story_content_li" v-for="(item,index) in list" :key="index" @click="jump(item.id)" :style="index%2==1?'margin-left: 26rpx':''">
								<view class="storyTitle">
									<text>{{item.knowledge}}</text>
									<text v-if="item.knowledge.length>6">...</text>
									<image src="../static/pic-fenleitag.png"></image>
								</view>
								<image :src="item.storyCover" class="bg_story" mode="aspectFill"></image>
								<view class="commentary">
									<image src="../static/x.png" v-for="(img,key) in item.stars" :key="key"></image>
									<image src="../static/bx.png"  v-if='item.Bstars'></image>
									<image src="../static/notx.png"  v-for="(x,h) in item.Nstars" :key='h'></image>
								</view>
								<view class="description">{{item.storyName}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
<!-- 		<view class="buyToy">
			立即购买
		</view> -->
	</view>
</template>

<script>
	import {toast,post} from '@/common/index'
	export default {
		data() {
			return {
				imglist:[],
				data:[],
				list:[],
				tabShow:true,
				htmlData:'',
				id:'',
				statusBarHeight:getApp().globalData.statusBarHeight,
				bannerImageUrlList:[]
			}
		},
		onLoad(e) {
			this.id=e.id;
			this.getinfo(e.id)
		},
		methods: {
			jump:function(id){
				uni.navigateTo({
					url:'storyDetails?id='+id
				})
			},
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			getinfo(articleId){
				var data =String(articleId)
				post('/api/box/toy/info/info',data).then((res)=>{
					if(res[1].data.code==200){
						if(res[1].data.data.bannerImageUrlList){
							this.bannerImageUrlList=res[1].data.data.bannerImageUrlList.split(',');
						}
						if(res[1].data.data.imageUrlList){
							this.imglist=res[1].data.data.imageUrlList.split(',');
						}
						this.data=res[1].data.data;
						uni.setNavigationBarTitle({
						    title: this.data.toyName
						});
					}else{
						toast(res[1].data.msg)
					}
				})
				
			},
			tab(e){
				if(e==1){
					this.tabShow=true;
					this.getinfo(this.id)
				}else{
					this.tabShow=false;
					var data1={"vo": {"toyId":this.id}}
					post('/api/story/info/listByToyId',data1).then((res)=>{
						this.list=res[1].data.data.list;
						for (let i=0;i<this.list.length;i++) {
							this.list[i].stars=this.list[i].score/2;
							if(this.list[i].stars%1){
								this.list[i].stars=this.list[i].stars-0.5
								this.list[i].Bstars=1;
								this.list[i].Nstars=5-this.list[i].stars
							}else{
								this.list[i].Nstars=5-this.list[i].stars
								this.list[i].Bstars=0;
							}
						}
					}).catch((res)=>{
						console.log("出错了")
					})	
				}
			}
		}
	}
</script>
<style >
	>>>.rich-img{
		max-width:100%;
	}
</style>
<style scoped lang="scss">
.buyToy{
	width:678upx;
	height:88upx;
	background:rgba(83,160,232,1);
	box-shadow:-10upx 3upx 15upx 0px rgba(0, 0, 0, 0.2);
	border-radius:44upx;
	position:fixed;
	bottom: 54upx;
	left: 50%;
	transform:translateX(-50%) ;
	color:rgba(254,254,254,1);
	text-align: center;
	line-height: 88upx;
	z-index: 9;
}
.content{
	margin: 0;
}
.imgListD{
	width: 100%;
	image{
		display: block;
		padding: 0;
		margin: 0;
		width: 100%;
		margin-bottom: -2upx;
	}
}
.storyTitle{
	z-index:7;
	width: 40upx;
	position: absolute;
	top: 10upx;
	right: 19upx;
	min-height: 40upx;
	max-height: 286upx;
	overflow: hidden;
	text{
		display: block;
		margin: 0 auto;
		text-align: center;
		font-size:24upx;
		word-wrap: break-word; 
		font-family:Source Han Sans CN;
		color:rgba(29,32,31,1);
		line-height: 35upx;
		background-color: #ffea00;
	}
	text:nth-of-type(1){
		max-height: 196upx;
		overflow: hidden;
		padding-top: 6upx;
		padding-bottom: 10upx;
	}
	text:nth-of-type(2){
		line-height: 20upx;
		max-height: 20upx;
		padding-bottom: 10upx;
	}
	image{
		width:40upx;
		height:12.6upx;
		display: block;
		margin-top: -4upx;
	}
}
.story_content{
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 150upx;
	margin-top: 80upx;
}
.story_content_li{
	position: relative;
	width:312upx;
	height: 432upx;
	background: url(../static/bg-story-s.png);
	background-size: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin:0 0 30upx  42upx !important;
	box-shadow:0px 13upx 17upx 0px rgba(0, 0, 0, 0.1);
	.bg_story{
		display: block;
		width: 284upx;
		height: 284upx;
		margin-right:10upx;
		margin-top: 10upx;
		border-radius:10upx;
	}
	.commentary{
		width: 100%;
		margin: 0upx 20upx 0px 10upx;
		height: 25upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		image{
			width: 25upx;
			height: 25upx;
			display: block;
			margin-left: 10upx;
		}
	}
	.description{
		width: 100%;
		margin: 0upx 20upx 0px 10upx;
		font-size:28upx;
		font-family:Source Han Sans CN;
		font-weight:500;
		color:rgba(51,51,51,1);
		height: 80upx;
		overflow: hidden;
	}
}
.info{
	width: 100%;
	background:rgba(255,255,255,1);
	position: relative;
	margin-top: 120upx;
}

.info1{
	width: 100%;
	background:rgba(255,255,255,1);
}
body{
	background: #E4F2FA;
}
.isHighlight{
    position: absolute;
    right: 10px;
    bottom: 20px;
    color: #fff;
    z-index: 999;
	width:56upx;
	height:30upx;
	background:rgba(0,0,0,1);
	opacity:0.5;
	font-size:20upx;
	font-weight: 600;
	border-radius:4upx;
	text-align: center;
}

.title_info:before{
	position: absolute;
	content: '';
	width: 10upx;
	height: 10upx;
	border-radius: 50%;
	top: 30upx;
	left: 0;
	background: #333333;
}
uni-swiper{
	width:650px;
	height:330px;
}
.knowledge{
	font-size: 24upx;
	color: #888;
	line-height:42upx;
}
.content{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.banner{
		border-radius: 10upx;
		width:100%;
	}
	.swiper{
		width: 100%;
		height: 750upx;
		.swiper_img{
			width: 750upx;
			height: 750upx;
			image{
				width: 750upx;
				height: 750upx;
			}
		}
	}
	.title{
		margin: 20upx 20upx;
		.pic{
			width:100%;
			height:40upx;
			padding: 10upx 0 10upx;
			font-size:42upx;
			font-weight:bold;
			color:rgba(51,51,51,1);
		}
		.h3{
			view{
				line-height: 40upx;
			}
			view:nth-of-type(1){
				font-size:28upx;
				font-weight:600 ;
				float: left;
			}
			view:nth-of-type(2){
				font-size:24upx;
				float: right;
				color: #999999;
				margin-left: 10upx;
				text:last-child{
					margin-left: 6upx;
				}
			}
			view:nth-of-type(3){
				font-size:24upx;
				float: right;
				color: #999999;
				text:last-child{
					margin-left: 6upx;
				}
			}
		}
		.promotionalName{
			font-size:26upx;
			color: #888;
			margin-bottom: 20upx;
			clear: both;
		}
	}
	.tab{
		position: absolute;
		z-index: 6;
		top: -48upx;
		left: 40upx;
		width:678upx;
		height:96upx;
		line-height: 96upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 8upx 20upx 0px rgba(185,195,201,0.2);
		border-radius:10upx;
		display: flex;
		justify-content: center;
		align-items: center;
		view{
			width: 50%;
			text-align: center;
			font-size:28upx;
			color: #999;
			font-weight: 600;
		}
	}
}
.active_tab{
	color: #333333 !important;
	position: relative;
}
.active_tab::before{
	content: '';
	width: 36%;
	height: 2px;
	background: #333333;
	bottom: 20upx;
	left: 32%;
	position: absolute;
	
}
.tab_content{
	.title_info{
		padding: 20upx 0;
		font-size:30upx;
		font-weight: 600;
		position: relative;
		height: 30upx;
		margin-top: 20upx;
		line-height: 30upx;
		span{
			margin-left: 20upx;
		}
	}
	.tab_info{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.tab_info_zi{
			width: 50%;
			view{
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 100%;
				overflow: hidden;
				line-height: 40upx;
				span:first-child{
					display: inline-block;
					width: 130upx;
					color: #888;
				}
				span:last-child{
					// margin-left: 20upx;
				}
				span{font-size:25upx;}
			}
		}
	}
	
}

// .uni-swiper-slides{
// 	w
// }
</style>
