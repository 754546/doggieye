<template>
	<view class="content">
		<view class="head">
			<image src="../static/goback.png" @click="goback"></image>
			<b>{{data.englishName}}</b>
		</view>
		<view class="container">
			<view :class="{'head_content':true,'background1':data.sex=='1','background2':data.sex=='2','background3':data.sex=='3'}">
				<view class="name" :class="{'color1':data.sex=='2','color2':data.sex=='1','color3':data.sex=='3'}">
					{{data.englishName?data.englishName:''}}
				</view>
				<view class="noon">
					<view>
						{{data.chineseName&&data.chineseName!='null'?data.chineseName:''}}
					</view>
				</view>
				<view class="translation" @click="play" :class="{'bg1':data.sex=='1','bg2':data.sex=='2','bg3':data.sex=='3'}">
					<image src="http://pic.doggieye.com/20200421/6a17cb45cfb7487f9411831fabd01021.png" v-if="data.sex=='2'"></image>
					<image src="http://pic.doggieye.com/20200421/aaf376722d744fe6a4e90c3214e68fb5.png" v-if="data.sex=='1'"></image>
					<image src="http://pic.doggieye.com/20200421/93c0dac05db04bd99bace16c9f00ebd0.png" v-if="data.sex=='3'"></image>
					<view>读一读</view>
				</view>
			</view>
			<view class="explain">
				<view class="title" :class="{'sex1':data.sex=='2','sex2':data.sex=='1','sex3':data.sex=='3'}">
					英文名详情
				</view>
				<view>
					<view>名字性别：</view>
					<view><text v-if="data.sex==1">男</text><text  v-if="data.sex==2">女</text><text  v-if="data.sex==3">中性</text></view>
				</view>
				<view>
					<view>来源语种：</view>
					<view>{{data.language&&data.language!='null'?data.language:'无'}}</view>
				</view>
				<view>
					<view>名字寓意：</view>
					<view>{{data.allegory&&data.allegory!='null'?data.allegory:'无'}}</view>
				</view>
				<view>
					<view>名字印象：</view>
					<view>{{data.impression&&data.impression!='null'?data.impression:"无"}}</view>
				</view>
				<view>
					<view>名字含义：</view>
					<view>{{data.signification&&data.signification!='null'?data.signification:'无'}}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	var innerAudioContext = uni.createInnerAudioContext();
	import {post} from '@/index';
	export default {
		data() {
			return {
				data:{},
				token:'',
				tokenList:[]
			}
		},
		onLoad(e) {
			post("/api/game/englishName/info",e.englishName).then((res)=>{
				if(res[1].data.code==200){
					this.data=res[1].data.data
					this.token=res[1].data.data.tk;
					this.tokenList=this.token.split("-");
					this.token=this.tokenList[0]+this.tokenList[1]+'-'+this.tokenList[2];
				}
				 uni.hideLoading();
			}).catch((res)=>{
				toast(res[1].data.msg)
				uni.hideLoading();
			})
		},
		methods: {	
			play:function(){
				innerAudioContext.src = "http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok="+this.token+"&vol=10&per=4&spd=5&pit=5&aue=3&tex="+this.data.englishName;
				innerAudioContext.play()
			},
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
.background1{
	background: url('http://pic.doggieye.com/20200421/abe1df1580e3489e92d629fbcd09d4ee.png') no-repeat;
	background-size: 100%;
}
.background2{
	background: url('http://pic.doggieye.com/20200421/acea18065694469c8865b9645ffba1d6.png') no-repeat;
	background-size: 100%;
}
.background3{
	background: url('http://pic.doggieye.com/20200421/f1c10b1980aa4d2b9558f81ad11ada5e.png') no-repeat;
	background-size: 100%;
}
.bg1{
	background: url('http://pic.doggieye.com/20200421/b22e94785fdc4ff7b9a3a244a72596f5.png') no-repeat;
	background-size: 100%;
}
.bg2{
	background: url('http://pic.doggieye.com/20200421/03665e6f5d554840b5733f02410eeea1.png') no-repeat;
	background-size: 100%;
}
.bg3{
	background: url('http://pic.doggieye.com/20200421/9750184ab4d14747b751d0257200ddcb.png') no-repeat;
	background-size: 100%;
}
.color1{
	color: #FF97D9;
}
.color2{
	color: #53A0E8;
}
.color3{
	color: #FFB400;
}
.sex1{
	border-bottom: 4upx solid #FF97D9
}
.sex2{
	border-bottom: 4upx solid  #53A0E8
}
.sex3{
	border-bottom: 4upx solid  #FFB400
}
.content{
	background: #E4F2FA;
	min-height: 100vh;
	.container{
		width:702upx;
		margin: 0 auto;
		background:rgba(255,255,255,1);
		box-shadow:0px 5upx 29upx 3upx rgba(139,199,255,0.14);
		border-radius:10upx;
		overflow: hidden;
		.explain{
			width:630upx;
			margin: 40upx auto 20upx;
			.title{
				width:160upx;
				height:60upx;
				line-height: 60upx;
				font-size:32upx;
				margin: 10upx 0;
			}
			>view{
				overflow: hidden;
				width: 100%;
				padding: 16upx 0;
				line-height: 40upx;
				view:first-child{
					color: #999;
					width: 150upx;
					float: left;
					font-size:28upx;
				}
				view:last-child{
					max-width: 480upx;
					float: left;
					font-size:28upx;
				}
			}
		}
		.head_content{
			width:654upx;
			height:400upx;
			overflow: hidden;
			box-shadow:0px 10upx 29upx 3upx rgba(83,160,232,0.15);
			border-radius:30upx;
			margin: 26upx auto;
			.translation{
				width: 212upx;
				height: 76upx;
				margin-left: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				view{
					color: #fff;
					font-size:32upx;
					height: 76upx;
					line-height:76upx;
					margin: 6upx;
				}
				image{
					width: 40upx;
					height: 40upx;
					margin: 6upx;
				}
			}
			.name{
				display: inline-block;
				height:110upx;
				font-size:64upx;
				min-width: 200upx;
				font-weight:bold;
				color:#FFFFFF;
				text-align: center;
				line-height: 100upx;
				margin: 50upx 0 30upx;
				margin-left: 60upx;
				background: url('http://pic.doggieye.com/20200420/d5ad11c11de04adabdd32b847653566e.png');
				background-size: 100% 100%;
				background-repeat: repeat-x;
			}
			.pronunciation{
				height:40upx;
				width: 100%;
				font-size:30upx;
				line-height: 40upx;
				padding: 10upx 0;
				text-align: center;
			}
			.noon{
				width: 100%;
				view{
					display: inline-block;
					min-width:106upx;
					height:40upx;
					font-size:32upx;
					line-height: 40upx;
					margin: 10upx auto 40upx;
					padding-left: 60upx;
					color: #FFFFFF;
					text-align: center;
				}
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
