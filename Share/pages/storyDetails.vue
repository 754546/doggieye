<template>
	<view class="content" v-if="data.length>0">
		<image src="http://pic.doggieye.com/20200117/2f48b26ec00f4497bcb07af8d917003d.png" class="play_mp3" v-if="show_mp3&&mp3" @click="play(1)"></image>
		<view class="bofang" @click="play(2)"  v-if="!show_mp3&&mp3">
			<image src="http://pic.doggieye.com/20200117/9d91c919790a4a689c706d2e5be7bc70.png" class="loading" v-if="index==0&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/66d1de83cfa049c695a7f8e4cb13f181.png" v-show="index==1&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/3394530518ab4b409c1c5494f438abe2.png" v-show="index==2&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/5b2eca3447674b2a8c1edccdb33ff1a6.png" v-show="index==3&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/ffc34aef886c4d7a87a1eb5a4eb3b747.png" v-show="index==4&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/40742ae673704a78acb9f84ef80ac2e7.png" v-show="index==5&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/3d95ba235db14f8f851b15ae9fa2e37f.png" v-show="index==6&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/9f5767c177ee46e2910493216ba3e6d0.png" v-show="index==7&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/da3d57e0ec3f4f4da901c07afb9c13f7.png" v-show="index==8&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/ecebb67afd3b44bca0af358dfd4637ca.png" v-show="index==9&&mp3"></image>
			<image src="http://pic.doggieye.com/20200117/7b48ce759d61415e931ce65217aa0daf.png" v-show="index==10&&mp3"></image>
		</view>
		<view id="mybox" :class="unfold?'altitude':'list'" >
			<image :src="item"  mode="widthFix" v-for="(item,index) in data" :key="index"></image>
			<view class="gradient" v-if="unfold"></view>
		</view>
		<button  @click="jump()" class="jump" v-if="unfold">点击展开全文</button>
		<view class="shadow" v-show="shadow">
			<view class="popup-lead-con" v-show="shadow">
				<view class="popup-lead-title">
					提示
				</view>
				<view class="popup-lead-text">
					{{title}}
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
		<view class="story">
			<image src="../static/pic-end-ios.png" mode="widthFix" class="end"  @click="jump(id,1)"></image>
			<view class="story_head">
				<view>推荐阅读</view>
			</view>
			<view class="story_content">
				<view class="story_content_li" v-for="(item,index) in list" :key="index" @click="jump(item.id)">
					<view class="storyTitle">
						<view style="font-size: 20upx !important;">{{item.knowledge}}</view>
						<view v-if="item.knowledge.length>6">...</view>
						<image src="../static/pic-fenleitag.png"></image>
					</view>
					<image :src="item.storyCover" class="bg_story" mode="aspectFill"></image>
					<view class="commentary">
						<image src="../static/x.png" v-for="(img,key) in item.stars" :key="key"></image>
						<image src="../static/bx.png"  v-if='item.Bstars'></image>
						<image src="../static/notx.png"  v-for="x in item.Nstars"></image>
					</view>
					<view class="description">{{item.storyName}}</view>
				</view>
			</view>
			<view class="no"><view>没有更多了</view></view>
		</view>
		<view class="progress"  v-show="!show_mp3&&mp3">
			<cmd-progress :width='72'  type="circle" :percent="nub" :showInfo="false" stroke-color='#ff7bb6' ></cmd-progress>
		</view>
	</view>
	<view class="msg" v-else>
		<image src="../static/pic_storyloadfail.png" v-if="msg"></image>
		<image src="../static/pic_storyloading.png" v-else></image>
		<view>{{msg}}</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	import {post} from '@/index';
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		components: {cmdProgress},
		data() {
			return {
				data:[],
				list:[],
				show_mp3:true,
				top:0,
				mp3:true,
				msg:'',
				unfold:true,
				shadow:false,
				flag:'',
				id:'',
				more:false,
				title:"前往小狗眼看世界APP，体验更佳",
				index:0,
				timer:'',
				nub:0
			}
		},
		onLoad(e) {
			this.getinfo(e.storyId);
			this.id=e.storyId;
			this.frequency();
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			var box = document.getElementById('mybox');
			if(e.scrollTop-box.clientHeight>40&&this.show_mp3){
				this.mp3=false
			}else if(e.scrollTop-box.clientHeight<-40&&this.show_mp3){
				this.mp3=true
			}
		},
		methods: {
			jump:function(e,x){
				if(e&&!x){
					this.more=false;
					this.flag=e;
				}else if(x){
					this.more=true;
					this.title='是否前往小狗眼看世界APP？';
				}
				this.shadow=true
			},
			frequency:function(){
				var that=this
				setInterval(function(){
					that.index++;
					if(that.index==10){
						that.index=1
					}
					that.nub=parseInt(innerAudioContext.currentTime/innerAudioContext.duration*100);
				},300)
			},
			cancel:function(){
				if(this.flag){
					if(!this.more){
						this.getinfo(this.flag)
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						});
						this.unfold=true;
						this.index=0,
						this.show_mp3=true
					}
				}else{
					this.unfold=false
				}
				this.shadow=false;
				this.flag='';
				this.title='前往小狗眼看世界APP，体验更佳';
			},
			confirm:function(){
				if(this.flag){
					this.download(this.flag)
				}else{
					this.download(this.id)
				}
				this.shadow=false;
				this.unfold=false;
				this.flag='';
				this.title='前往小狗眼看世界APP，体验更佳';
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
						this.data=res[1].data.data.imageUrlList.split(',')
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
			},
			download:function(id){
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
					window.location.href='lovexiaodoggieye://storyDetails?id='+id;
					var url='lovexiaodoggieye://storyDetails?id='+id;
					window.setTimeout(function() {
						uni.navigateTo({
							url:"iosDownload?url="+url
						})
					}, 200)
				}else if(navigator.userAgent.match(/android/i)) {
					window.location.href='doggieyeshare://type/story?id='+id;
					var url='doggieyeshare://type/story?id='+id;
					window.setTimeout(function() {
						window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
					}, 200)
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.progress{
	position: fixed;
	top: 27px;
	left: 11px;
	transform: rotate(90deg);
}
.no{
	width: 100%;
	display: flex;
	justify-content: center;
	height: 50upx;
	line-height: 50upx;
	margin-bottom: 40upx;
	border-radius: 0 0 10upx 10upx;
	view{
		width: 100%;
		height: 100%;
		color: #FF7BB6;
		background:#FFD5E8;
		margin:0 12px;
		font-size: 20upx;
		text-align: center;
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
.bofang{
	width: 70px;
	height: 70px;
	border-radius: 50%;
	// background: url(http://pic.doggieye.com/20200117/e19ed796f6e74f43808de6cf948c9508.png) no-repeat;
	background:#FFFFFF;
	overflow: hidden;
	position: fixed;
	left: 12px;
	top: 28px;
	z-index: 99999;
	image{
		width: 100%;
		height: 100%;
		transform: rotate(90deg);
	}
}
.jump{
	width: 92%;
	background:#ff7bb6;
	color: #FFFFFF;
	margin: 20upx auto !important;
}
.shadow{
	width: 100%;
	height: 100vh;
	background: rgba(3,3,3,0.3);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
}
.altitude{
	width:100%;
	height: 100vh;
	overflow: hidden;
	image{
		width: 100%;
	}
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
	view{
		display: block;
		margin: 0 auto;
		text-align: center;
		font-size:24upx !important;
		word-wrap: break-word; 
		font-family:Source Han Sans CN;
		color:rgba(29,32,31,1);
		line-height: 35upx;
		background-color: #ffea00;
	}
	view:nth-of-type(1){
		max-height: 196upx;
		overflow: hidden;
		padding-top: 6upx;
		padding-bottom: 10upx;
	}
	view:nth-of-type(2){
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
.play_mp3,.stop_mp3{
	width: 70px;
	height: 70px;
	position: fixed;
	left: 12px;
	top: 28px;
	z-index: 999;
	transform: rotate(90deg);
}
.story_content_li{
	position: relative;
	margin: 0;
	float: left;
	margin-left: 24upx;
	width:312upx;
	height: 432upx;
	background: url(../static/bg-story-s.png);
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
	margin:0  12px;
	background-color: #FFD5E8FF;
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
	display: block;
}
</style>
