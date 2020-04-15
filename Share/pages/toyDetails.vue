<template>
	<view class="content" v-if="data">
		<view class="uni-padding-wrap banner">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="500">
						<swiper-item v-for="(item,index) in bannerImageUrlList" :key="index" class="swiper_img">
							<image :src="item" mode="widthFix"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="title">
			<h3>{{data.toyName}}</h3>
			<view>{{data.promotionalName}}</view>
		</view>
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
			<view class="shadow" v-show="shadow">
				<view class="popup-lead-con" v-show="shadow">
					<view class="popup-lead-title">
						提示
					</view>
					<view class="popup-lead-text">
						前往小狗眼看世界APP，体验更佳
					</view>
					<view class="popup-lead-btn">
						<view class="popup-lead-cancel" @click="cancel">
							取消
						</view>
						<view class="popup-lead-confirm" @click="confirm">
							确定
						</view>
					</view>
				</view>
			</view>
			<view class="story_content">
				<view class="story_content_li" v-for="(item,index) in list" :key="index" @click="jump(item.id)">
					<view class="storyTitle">
						<text>{{item.knowledge}}</text>
						<text v-if="item.knowledge.length>6">...</text>
						<image src="../static/pic-fenleitag.png"></image>
					</view>
					<image :src="item.storyCover" class="bg_story"></image>
					<view class="commentary">
						<image src="../static/x.png" v-for="(img,key) in item.stars" :key="key"></image>
						<image src="../static/bx.png"  v-if='item.Bstars'></image>
						<image src="../static/notx.png"  v-for="(x,z) in item.Nstars"  :key="z"></image>
					</view>
					<view class="description">{{item.storyName}}</view>
				</view>
			</view>
		</view>
	</view>
	<view class="msg" v-else>
		<image src="../static/pic_searchresult.png"></image>
		<view class="texts">{{msg}}</view>
	</view>
</template>

<script>
	import {post} from '@/index'
	export default {
		data() {
			return {
				imglist:[],
				data:'',
				list:[],
				tabShow:true,
				htmlData:'',
				msg:'',
				unfold:true,
				shadow:false,
				flag:'',
				bannerImageUrlList:[]
			}
		},
		onLoad(e) {
			this.getinfo(e.articleId)
		},
		methods: {
			getinfo(articleId){
				var data =String(articleId)
				post('/api/box/toy/info/info',data).then((res)=>{
					console.log(res[1].data.data)
					if(res[1].data.data){
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
						this.msg='玩具不存在'
					}
					
				})
				var data1={"vo": {"toyId":articleId}}
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
			},
			jump:function(e){
				if(e){
					this.flag=e
				}
				this.shadow=true
			},
			cancel:function(){
				if(this.flag){
					uni.navigateTo({
						url:'./storyDetails?storyId='+this.flag
					})
				}
				this.shadow=false;
				this.unfold=false
				this.flag=''
			},
			confirm:function(){
				if(this.flag){
					this.download(this.flag)
				}else{
					this.download(this.id)
				}
				this.shadow=false;
				this.unfold=false;
				this.flag=''
			},
			download:function(id){
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
					window.location = 'lovexiaodoggieye://storyDetails?id='+id;
					var url='lovexiaodoggieye://storyDetails?id='+id;
					window.setTimeout(function() {
						uni.navigateTo({
							url:"iosDownload?url="+url
						})
					}, 200)
				}else if(navigator.userAgent.match(/android/i)) {
					window.location = 'doggieyeshare://type/story?id='+id;
					var url='doggieyeshare://type/story?id='+id;
					window.setTimeout(function() {
						window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
					}, 200)
				}
			},
			tab(e){
				if(e==1){
					this.tabShow=true;
				}else{
					this.tabShow=false;
					
				}
			}
		}
	}
</script>
<style scoped lang="scss">
body{
	padding: 0;
	margin: 0;
}
.imgListD image{
	width: 100%;
	display: block;
}
.tab_content{
	margin-top: 20upx;
}
.storyTitle{
	z-index: 666;
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
.shadow{
	width: 100%;
	height: 100vh;
	background: rgba(3,3,3,0.3);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
}
.popup-lead-con {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 80%;
	border-radius: 20upx;
	background: #fff;
	transform: translate(-50%, -50%);
	text-align: center;
}
.popup-lead-title {
	font-size: 48upx;
	line-height: 1;
	color: #303030;
	margin-top: 50upx;
}
.popup-lead-text {
	font-size: 32upx;
	line-height: 1;
	color: #999;
	margin-top: 50upx;
}
.popup-lead-btn {
	position: relative;
	display: block;
	width: 100%;
	height: 100upx;
	font-size: 36upx;
	color: #000;
	border-top: 2upx solid #eee;
	margin-top: 60upx;
}
.popup-lead-cancel {
	border-right: 1px solid #eee;
	box-sizing: border-box;
}
.popup-lead-cancel, .popup-lead-confirm {
	width: 48%;
	height: 100%;
	display: inline-block;
	line-height: 100upx;
	text-align: center;
	cursor: pointer;
	font-size: 34upx;
}
.gradient{
	position: absolute;
	bottom: 0;
	left: 0;
	height: 80px;
	width: 100%;
	background-image: linear-gradient(-180deg,rgba(255,255,255,0),#fff);
}
.texts{
	color: #999999 !important;
}
.msg{
	margin-top: 200upx;
	text-align: center;
	image{
		width: 150px;
		height: 150px;
		display: block;
		margin: 0 auto;
	}
}
.isHighlight{
    position: absolute;
    right: 10px;
    bottom: 20px;
    color: #fff;
    z-index: 999;
    padding: 2px;
    background: rgba(0, 0, 0, 0.3);
}
.story_content_li{
	position: relative;
	margin: 0;
	float: left;
	margin-left: 42upx;
	width:312upx;
	height: 432upx;
	background: url(../static/bg-story-s.png);
	background-size: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom:30upx;
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
.story_content{
	width: 100%;
	display: block;
	box-sizing: border-box;
	overflow: hidden;
	border-radius: 0 0 10upx 10upx;
	margin-bottom: 20px;
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
.swiper_img{
	width: 750upx;
	height: 750upx;
}
.swiper_img image{
	width: 750upx !important;
	height: 750upx  !important;
}
uni-swiper{
	height: 750upx !important;
}
h5{
	font-size: 26upx;
	padding: 10upx 0;
}
.knowledge{
	font-size: 25upx;
	color: #888;
	line-height:42upx;
}
.content{
	width: 100%;
	.banner{
		border-radius: 10upx;
	}
	.title{
		margin: 20upx;
		h3{
			font-size:30upx;
			padding: 10upx 0;
		}
		view{
			font-size:24upx;
			color: #888;
		}
	}
	.tab{
		display: flex;
		justify-content: center;
		height: 100upx;
		align-items: center;
		view{
			width: 50%;
			text-align: center;
			font-size: 32upx;
			color: #888;
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
	bottom: -10upx;
	left: 32%;
	position: absolute;
	
}
</style>
