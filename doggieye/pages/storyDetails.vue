<template>
	<view  v-if="data.length>0"  style="width: 100%;">
		<view class="backreturn" @click="goBack">
			<image src="../static/ic_arrow_story.png"></image>
		</view>
		<image src="http://pic.doggieye.com/20200117/2f48b26ec00f4497bcb07af8d917003d.png"  v-if="show_mp3&&mp3" @click="play(1)" class="play_mp3"></image>
		<view @click="play(2)"  v-if="!show_mp3&&mp3" class="bofang">
			<image src="http://pic.doggieye.com/20200117/9d91c919790a4a689c706d2e5be7bc70.png" class="loading" v-if="index==0"></image>
			<image src="http://pic.doggieye.com/20200117/66d1de83cfa049c695a7f8e4cb13f181.png" v-show="index==1"></image>
			<image src="http://pic.doggieye.com/20200117/3394530518ab4b409c1c5494f438abe2.png" v-show="index==2"></image>
			<image src="http://pic.doggieye.com/20200117/5b2eca3447674b2a8c1edccdb33ff1a6.png" v-show="index==3"></image>
			<image src="http://pic.doggieye.com/20200117/ffc34aef886c4d7a87a1eb5a4eb3b747.png" v-show="index==4"></image>
			<image src="http://pic.doggieye.com/20200117/40742ae673704a78acb9f84ef80ac2e7.png" v-show="index==5"></image>
			<image src="http://pic.doggieye.com/20200117/3d95ba235db14f8f851b15ae9fa2e37f.png" v-show="index==6"></image>
			<image src="http://pic.doggieye.com/20200117/9f5767c177ee46e2910493216ba3e6d0.png" v-show="index==7"></image>
			<image src="http://pic.doggieye.com/20200117/da3d57e0ec3f4f4da901c07afb9c13f7.png" v-show="index==8"></image>
			<image src="http://pic.doggieye.com/20200117/ecebb67afd3b44bca0af358dfd4637ca.png" v-show="index==9"></image>
			<image src="http://pic.doggieye.com/20200117/7b48ce759d61415e931ce65217aa0daf.png" v-show="index==10"></image>
		</view>
		<view id="mybox" class="list" >
			<image :src="item"  mode="widthFix" v-for="(item,index) in data" :key="index"></image>
		</view>
		<view class="story">
			<image src="../static/pic-end-ios.png" mode="widthFix" class="end" ></image>
			<view class="story_head">
				<view>推荐阅读</view>
			</view>
			<view class="story_content">
				<view class="story_content_li" v-for="(item,index) in list" :key="index" @click="jump(item.id)">
					<view class="storyTitle">
						<text>{{item.knowledge}}</text>
						<text v-if="item.knowledge.length>6">...</text>
						<image src="../static/pic-fenleitag.png"></image>
					</view>
					<image :src="item.storyCoverIndex" class="bg_story" mode="aspectFill"></image>
					<view class="commentary">
						<image src="../static/x.png" v-for="(img,key) in item.stars" :key="key"></image>
						<image src="../static/bx.png"  v-if='item.Bstars'></image>
						<image src="../static/notx.png"  v-for="(x,h) in item.Nstars" :key="h"></image>
					</view>
					<view class="description">{{item.storyName}}</view>
				</view>
				
			</view>
			<view class="no"><view>没有更多了</view></view>
		</view>
	</view>
	<view class="msg" v-else>
		<text class="iconfont icon-return" @click="goBack"></text>
		<image src="../static/pic_storyloadfail.png" v-if="msg"></image>
		<image src="../static/pic_storyloading.png" v-else></image>
		<view>{{msg}}</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	import {post} from '@/common';
	export default {
		data() {
			return {
				storyName:'',
				data:[],
				list:[],
				show_mp3:true,
				top:0,
				mp3:true,
				msg:'',
				id:'',
				statusBarHeight:getApp().globalData.statusBarHeight,
				index:0,
				timer:'',
				value:10,
				screenHeight:0,
				currentTime:0,
				gaodu:''
			}
		},
		onLoad(e) {
			this.getinfo(100010)
			this.id=100010;
			this.frequency()
			var that=this;
			uni.getSystemInfo({
			    success: function (res) {
					if(res.screenHeight){
						that.screenHeight=res.screenHeight
					}
			    }
			});
		},
		onUnload(){
			clearInterval(this.timer)
			innerAudioContext.pause()
		},
		onHide() {
			clearInterval(this.timer)
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			const query = uni.createSelectorQuery()
			query.select('#mybox').boundingClientRect()
			query.selectViewport().scrollOffset()
			var that=this;
			query.exec(function(res){
				that.gaodu=res[0].height
			})
			if(e.scrollTop>that.gaodu&&that.gaodu>0){
				this.mp3=false
			}
			if(e.scrollTop<that.gaodu&&that.gaodu>0){
				this.mp3=true
			}
			console.log(that.gaodu)
		},
		methods: {
			jump:function(id){
				this.getinfo(id)
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
				innerAudioContext.pause()
			},
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			frequency:function(){
				var that=this
				this.timer=setInterval(function(){
					that.index++;
					if(that.index==10){
						that.index=1
					}
					that.currentTime=parseInt(innerAudioContext.currentTime/innerAudioContext.duration*100);
				},300)
			},
			play:function(e){
				if(e==1){
					this.index=0;
					innerAudioContext.play()
					innerAudioContext.onPlay(()=>{
						this.show_mp3=false;
						this.index=1;
					})
					innerAudioContext.onPause(()=>{
						this.show_mp3=true;
					})
				}else{
					innerAudioContext.pause()
				}
				this.show_mp3=!this.show_mp3
			},
			getinfo(storyId){
				post('/api/story/info/info',{"storyId": storyId}).then((res)=>{
					if(res[1].data.code==200){
						this.storyName=res[1].data.data.storyName;
						this.data=res[1].data.data.imageUrlList.split(',');
						innerAudioContext.src =res[1].data.data.audioUrl;
					}else{
						this.msg=res[1].data.msg
					}
					
				}).catch((res)=>{
					console.log("出错了")
				})
				post('/api/story/info/listBySimilar',{"vo": {"storyId": storyId}}).then((res)=>{
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
</script>

<style scoped lang="scss">
.backreturn{
	position: fixed;
	top: 150upx;
	right: 50upx;
	transform: rotate(90deg);
	image{
		width: 96upx;
		height: 96upx;
	}
}
.nav_heads{
	position: absolute;
	background: none;
}
.icon-return{
	position: fixed;
	top: 66upx;
	left: 24upx;
	z-index: 9999;
}
.bofang{
	width: 128upx;
	height: 128upx;
	border-radius: 50%;
	background:#fff;
	background-size: 100%;
	overflow: hidden;
	position: fixed;
	top: 150upx;
	left: 50upx;
	z-index: 999999;
	transform: rotate(90deg);
	image{
		width: 100%;
		height: 100%;
	}
}
.play_mp3{
	width:128upx;
	height:128upx;
	z-index: 999;
	border-radius: 50%;
	position: fixed;
	top: 150upx;
	left: 50upx;
	transform: rotate(90deg);
}
.altitude{
	width:100%;
	height: 100vh;
	overflow: hidden;
	image{
		width: 100%;
	}
}
.no{
	width: 100%;
	display: flex;
	justify-content: center;
	height: 50upx;
	line-height: 50upx;
	margin-bottom: 40upx;
	view{
		width: 100%;
		height: 100%;
		color: #FF7BB6;
		background:#FFD5E8;
		margin:0 12px;
		font-size: 20upx;
		text-align: center;
		border-radius: 0 0 10upx 10upx;
	}
}
.loading{
	width: 48upx !important;
	height: 48upx !important;
	display: block;
	margin:40upx auto;
	animation:loading 1s linear forwards infinite;
}
@keyframes loading
{
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
}
.storyTitle{
	z-index: 666;
	width: 40upx;
	position: absolute;
	top: 10upx;
	right:18upx;
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
.gradient{
	position: absolute;
	bottom: 0;
	left: 0;
	height: 80px;
	width: 100%;
	background-image: linear-gradient(-180deg,rgba(255,255,255,0),#fff);
}
.msg{
	background-color: #FF7BB6;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	text-align: center;
	image{
		display: block;
		width:200upx;
		height: 200upx;
		margin: 0 auto;
		margin-top: 200upx;
	}
	view{
		color: #fff;
		font-size: 20upx;
	}
}

.story_content_li{
	position: relative;
	margin: 0;
	float: left;
	margin-left: 24upx;
	width:312upx;
	height: 432upx;
	background: url(../static/bg-story-s.png) no-repeat;
	background-size: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 20upx;
	margin-bottom: 20upx;
	box-shadow:0px 13upx 17upx 0px rgba(0, 0, 0, 0.1);
	.bg_story{
		display: block;
		width: 284upx;
		height: 284upx;
		margin-right:10upx;
		margin-top: 10upx;
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
.end{
	width: 100%;
	margin:20upx  12px;
	display: block;
}

.story_content{
	width: 100%;
	margin:0  12px 0upx;
	background:#FFD5E8;
}
.story_head{
	width: 100%;
	margin:0  12px -4upx;
	height: 180upx;
	background: url(../static/storyhead-bg.png);
	background-size: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	overflow: hidden;
	view{
		width:167upx;
		height:52upx;
		background:rgba(255,123,182,1);
		border-radius:26upx;
		font-size:29upx;
		font-family:Source Han Sans CN;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 52upx;
		margin-bottom: 10upx;
	}
}
.story{
	background: url(../static/bg_story.png);
	background-size: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.list{
	width: 100%;
}
.list image{
	width: 100%;
	margin: 0;
	padding: 0;
	display: block;
}
.dingwei{
	position: fixed;
	top: 100px;
	left: 30px;
	transform: rotate(90deg);
}
</style>
