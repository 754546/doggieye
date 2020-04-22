<template>
	<view class="content">
		<view class="head" v-show="!show_popups">
			<view @click="goback">
				<image src="../static/goback.png"></image>
			</view>
			<view>英文名</view>
		</view>
		<view class="cancel" @click="cancel" v-show="show_popups">取消</view>
		<view :class="{head_img1:!show_popups,'head_img':true}" >
			<image src="http://pic.doggieye.com/20200417/390192114073413199734e135b24d9b2.png" class="publicity_img" mode="widthFix" v-show="!show_popups" ></image>
			<view class="search_input" @click="search" :style="show_popups?'height:120upx;width:100%;':'width:650upx;height:88upx;background:rgba(139,199,255,1);box-shadow:3upx 5upx 10upx 0px rgba(82,159,231,0.2);'">
				<view :class="{top_search:show_popups,'flex_input':true}">
					<view  :class="{bg_input:show_popups,flex_input:true}">
						<view class="imgs" @click="enquiry(keywords)">
							<image src="../static/search1.png" v-if="show_popups"></image>
							<image src="http://pic.doggieye.com/20200316/d5fd5c28d36040c282abca5d796d4a9d.png" v-else></image>
						</view>
						<input style="color: #FFFFFF;font-size:30upx;vertical-align: middle;" v-model="keywords" placeholder="输入中文名/英文名进行搜索"  :placeholder-style="show_popups?'color: #999':'color: #fff'" @confirm="enquiry(keywords)"></p>
					</view>
				</view>
			</view>
		</view>
		<view class="footer" v-show="!show_popups">
			<view @click="girlsEnglishName">
				<view class="name_img">
					<image src="http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png" ></image>
				</view>
				<view class="top">
					<view>女生英文名</view>
					<view><view>TOP</view> <view>100</view></view>
				</view>
			</view>
			<view>
				<view class="name_img">
					<image src="http://pic.doggieye.com/20200417/68ae23fda2af4e3e81a6fbb15e4330dd.png" ></image>
				</view>
				<view class="top" @click="random">
					<view>随机英文名</view>
					<view>随意有惊喜</view>
				</view>
			</view>
			<view @click="boysEnglishName">
				<view class="name_img">
					<image src="http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png" ></image>
				</view>
				<view class="top">
					<view>男生英文名</view>
					<view><view>TOP</view> <view>100</view></view>
				</view>
			</view>
			<view>
				<view class="name_img">
					<image src="http://pic.doggieye.com/20200417/5330272664ea4176a63e5747f89d5c89.png" ></image>
				</view>
				<view class="top" @click="letter">
					<view>字母取名</view>
					<view>ABCDEFG</view>
				</view>
			</view>
			<view @click="neutralEnglishName">
				<view class="name_img">
					<image src="http://pic.doggieye.com/20200417/e3f25e11cfbc488fab1989cd850538a9.png" ></image>
				</view>
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
				<view class="details" v-for="(item,key) in list1 " :key="key" @click="Details(item)">
					<view class="left_details">
						<image src="http://pic.doggieye.com/20200417/5d66bec2cbd940e5a2c94e8bdffb7991.png" v-if="item.sex==1" style="background:#E2F1FF;"></image>
						<image src="http://pic.doggieye.com/20200417/b43b73c4f610489b86c62ff3fc3e4b89.png" v-if="item.sex==2" style="background:rgba(247,222,255,1);"></image>
						<image src="http://pic.doggieye.com/20200417/e3f25e11cfbc488fab1989cd850538a9.png" v-if="item.sex==3" style="background:#FFE595;"></image>
						<view>
							<view>{{item.englishName}}</view>
							<view>{{item.chineseName}}</view>
						</view>
					</view>
					<view class="right_details">
						<view :style="'color: #FF97D9;'" v-if="item.sex==2">女生</view>
						<view :style="'color: #53A0E8;'" v-if="item.sex==1">男生</view>
						<view :style="'color: #FFB400;'" v-if="item.sex==3">中性</view>
						<view :style="'color: #999;'">{{item.usageNumber}}万人使用</view>
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
	function setupWebViewJavascriptBridge(callback) {
		if (window.WebViewJavascriptBridge) {
			callback(WebViewJavascriptBridge)
		} else {
			document.addEventListener(
				'WebViewJavascriptBridgeReady',
				function() {
					callback(WebViewJavascriptBridge)
				},
				false
			);
		}
		//iOS使用
		if (window.WebViewJavascriptBridge) {
			return callback(WebViewJavascriptBridge);
		}
		if (window.WVJBCallbacks) {
			return window.WVJBCallbacks.push(callback);
		}
		window.WVJBCallbacks = [callback];
		var WVJBIframe = document.createElement('iframe');
		WVJBIframe.style.display = 'none';
		WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
		document.documentElement.appendChild(WVJBIframe);
		setTimeout(function() {
			document.documentElement.removeChild(WVJBIframe)
		}, 0)
	}
	export default {
		data() {
			return {
				show_popups:false,
				active:1,
				enquiry_show:false,
				keywords:'',
				data:[],
				list:[],
				numbers:false,
				list1:[],
				size:0
			}
		},
		onReachBottom:function(){
			this.size+=10;
			this.circulates(1)
		},
		methods: {
			goback:function(){
				var u=navigator.userAgent;
				var isiOS=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
				function fun1(e){
				 console.log(e)
				}
				if(isiOS){
					setupWebViewJavascriptBridge(function(bridge) {
						 bridge.callHandler('goHome', function(response) {})
					})
				}else{
					window.android.goBack('fun1');
				}
			},
			Details:function(e){
				uni.navigateTo({
					url:"namesDetails?englishName="+e.englishName
				})
			},
			circulates:function(e){
				for (var i=0;i<10;i++) {
					if(this.list[i+this.size]){
						this.list1.push(this.list[i+this.size])
					}
				}
				if(!this.list[9+this.size]&&e==1&&this.enquiry_show){
					toast("没有更多了")
				}
			},
			enquiry:function(e){
				var that=this;
				that.size=0;
				that.list=[]
				if(e.length>0){
					uni.showLoading()
					post("/api/game/englishName/getListByChineseName",e).then((res)=>{
						if(res[1].data.code==200){
							that.data=res[1].data.data;
							that.list=res[1].data.data.allNameList;
							that.numbers=that.data.allNameNumber;
							if(that.active==1){
								that.list=that.data.allNameList;
								that.numbers=that.data.allNameNumber;
							}else if(that.active==2){
								that.list=that.data.boyNameList;
								that.numbers=that.data.boyNameNumber;
							}else if(that.active==3){
								that.list=that.data.girlNameList;
								that.numbers=that.data.girlNameNumber;
							}else{
								that.list=that.data.neutralNameList;
								that.numbers=that.data.neutralNameNumber;
							}
							that.enquiry_show=true;
							that.list1=[];
							that.size=0;
							that.circulates()
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
				this.list1=[];
				this.size=0;
				if(e==1){
					this.list=this.data.allNameList;
					this.numbers=this.data.allNameNumber;
					this.circulates()
				}else if(e==2){
					this.list=this.data.boyNameList;
					this.numbers=this.data.boyNameNumber;
					this.circulates()
				}else if(e==3){
					this.list=this.data.girlNameList;
					this.numbers=this.data.girlNameNumber;
					this.circulates()
				}else{
					this.list=this.data.neutralNameList;
					this.numbers=this.data.neutralNameNumber;
					this.circulates()
				}
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
				this.show_popups=true;
				this.size=10;
				this.list=[];
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration:0
				});
			},
			cancel:function(){
				this.keywords='';
				this.enquiry_show=false;
				this.show_popups=false;
				this.list1=[];
			}
		}
	}
</script>

<style scoped lang="scss">
.content{
	background: url("http://pic.doggieye.com/20191223/7433870a122546a18662159afa56d1e4.png") !important;
}
.tishi{
	width: 100%;
	height: 100%;
	text-align: center;
	view{
		color: #999999;
	}
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
				>view{
					width:300upx;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
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
	margin-top: 48upx;
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
	height: 168upx;
	line-height: 248upx;
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
		margin-top: 80upx;
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
		width: 100%;
		margin: 20upx auto;
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
	height: 168upx;
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
	.name_img{
		margin-left: 0;
		width: 96upx;
		height: 96upx;
		background-color: #FFFFFF;
		border-radius: 50%;
	}
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
		background:url("http://pic.doggieye.com/20200417/54a7ba1956954a30bec7c43b34209e3d.png");
		background-size: 100%;
		box-shadow: 0upx 20upx 100upx -40upx #fcf2f8;
	}
	>view:nth-of-type(2){
		margin-top: 30upx;
		background:url("http://pic.doggieye.com/20200417/e6373fff21344575917292d4224b5ad6.png");
		background-size: 100%;
		box-shadow: 0upx 20upx 100upx -40upx #f3e0fc;
	}
	>view:nth-of-type(3){
		background:url("http://pic.doggieye.com/20200417/ebb411407e1a48ff8addc577ed6bb865.png");
		background-size: 100%;
		box-shadow: 0upx 20upx 100upx -40upx #d8f0fd;
	}
	>view:nth-of-type(4){
		background:url("http://pic.doggieye.com/20200417/2c70e8ed6da843938a6c574a882ea8fb.png");
		background-size: 100%;
		box-shadow: 0upx 20upx 100upx -40upx #f0fc80;
	}
	>view:nth-of-type(5){
		background:url("http://pic.doggieye.com/20200417/7023545fb2dc4537a9d78e5f9b1028f5.png");
		background-size: 100%;
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
