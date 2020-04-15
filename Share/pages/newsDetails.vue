<template>
	<view class="content" v-if="content">
		<view class="text_parent">
			<view :class="unfold?'altitude':'text_content'" v-html="content" ></view>
			<view class="gradient" v-if="unfold"></view>
		</view>
		<button  @click="jump()" class="jump" v-if="unfold">点击展开全文</button>
		<h4 v-if="list.length>0">为您推荐</h4>
		<view class="list" v-for="(item,key) in list" :key="key" @click="jump(item.id)">
			<view class="list_content">
				<p>{{item.title}}</p>
				<view class="Operation">
					<view>
						<image src="../static/Likeit.png" mode=""></image>
						<span>{{item.likeNumber}}</span>
					</view>
					<view >
						<image src="../static/Commentary.png" mode="">
						<span>{{item.commentNumber}}</span>
					</view>
				</view>
			</view>
			<image :src="item.image"></image>
			<p class="isHighlight" v-if="item.isHighlight==1">精选</p>
		</view>
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
		
	</view>
	<view class="msg" v-else>
		<image src="../static/pic_searchresult.png"></image>
		<view class="texts">{{msg}}</view>
	</view>
</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				title: '新闻分享页面',
				content:"",
				ios:'',
				list:[],
				msg:'',
				id:'',
				unfold:true,
				shadow:false,
				flag:'',
			}
		},
		onLoad(e) {
			this.getinfo(e.articleId)
			this.id=e.articleId
		},
		methods: {
			jump:function(e){
				if(e){
					this.flag=e
				}
				this.shadow=true
			},
			cancel:function(){
				if(this.flag){
					this.getinfo(this.flag)
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 0
					});
					this.unfold=true;
				}else{
					this.unfold=false
				}
				this.shadow=false;
				
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
			getinfo(articleId){
				post('/api/article/info/info',{"articleId": articleId}).then((res)=>{
					if(res[1].data.code==200){
						this.content=res[1].data.data.content
					}else{
						this.msg=res[1].data.msg;
					}
					
				}).catch((res)=>{
					console.log("出错了")
				})
				post('/api/article/info/listBySimilar',{"vo": {"articleId": articleId,}}).then((res)=>{
					this.list=res[1].data.data.list
				}).catch((res)=>{
					console.log("出错了")
				})	
			},
			download:function(id){
				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
					window.location.href='lovexiaodoggieye://newsDetails?id='+id;
					window.setTimeout(function() {
						window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
					}, 200)
				}else if(navigator.userAgent.match(/android/i)) {
					window.location.href= 'doggieyeshare://type/explore?id='+id;
					window.setTimeout(function() {
						window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
					}, 200)
				}
			}
		}
	}
</script>

<style>
	>>> .text_content img{
		max-width: 100%;
	}
	>>> .altitude img{
		max-width: 100%;
	}
</style>
<style scoped lang="scss">
	body{
		box-sizing: border-box !important;
		border: 1upx solid #fff;
	}
	.shadow{
		width: 100%;
		height: 100vh;
		background: rgba(3,3,3,0.3);
		position: fixed;
		top: 0;
		left: 0;
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
	.hint{
		color: #888;
		margin-top: 200upx;
		text-align: center;
	}
	.jump{
		width: 92%;
		background:rgba(29,32,31,1);
		color: #FFFFFF;
		margin: 20upx auto !important;
	}
	.text_content{
		margin: 20upx auto;
		width: 92%;
	}
	.text_parent{
		width:100%;
		height: 100%;
		position: relative;
	}
	.altitude{
		margin: 0 auto 20upx;
		width: 92%;
		height: 100vh;
		overflow: hidden;
	}
	.isHighlight{
		position: absolute;
		right: 20upx;
		bottom: 40upx;
		color: #fff;
		z-index: 999;
		padding:5upx;
		background: rgba(0,0,0,0.3);
	}
	h4{
		margin: 30upx auto;
		width: 92%;
		font-size: 33upx;
	}
	.list{
		position: relative;
		width: 92%;
		height: 275upx;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid rgba(237,239,243,1);
		image{
			width: 250upx;
			height: 213upx;
			border-radius:8upx 8upx 10upx 10upx;
		}
		.list_content{
			height: 213upx;
			width: 275upx;
			p:first-child{
				font-size: 30upx;
				height: 80upx;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 40upx;
			}
			.Operation{
				display: flex;
				margin-top: 50upx;
				justify-content: flex-start;
				view{
					margin-right: 82upx;
					text-align: center;
					vertical-align: middle;
					margin-top: 22upx;
					image{
						width: 33upx;
						height: 33upx;
					}
					span{
						display: block;
						width: 100%;
						font-size:21upx;
					}
					
				}
			}
		}
	}
</style>
