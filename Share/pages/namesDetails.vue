<template>
	<view class="content">
		<view class="head">
			<image src="../static/goback.png" @click="goback"></image>
			<b>英文名详情</b>
		</view>
		<view class="container">
			<view class="head_content">
				<view class="name" :class="{'color1':data.sex=='2','color2':data.sex=='1','color3':data.sex=='3'}">
					{{data.englishName}}
				</view>
		<!-- 		<view class="pronunciation">
					{{data.phoneticSymbol}}
				</view> -->
				<view class="noon">
					{{data.chineseName}}
				</view>
				<view class="translation" @click="play" :class="{'bg1':data.sex=='2','bg2':data.sex=='1','bg3':data.sex=='3'}">
					<image src="http://pic.doggieye.com/20200323/f1272451839a446c8c381788643b17c7.png" v-if="data.sex=='2'"></image>
					<image src="http://pic.doggieye.com/20200323/1801a0ab7e894bc9a19e7d426feb0fe6.png" v-if="data.sex=='1'"></image>
					<image src="http://pic.doggieye.com/20200323/dc69be7b960445b4b804168e472b0529.png" v-if="data.sex=='3'"></image>
					<view>读一读</view>
				</view>
			</view>
			<view class="explain">
				<view class="title" :class="{'sex1':data.sex=='2','sex2':data.sex=='1','sex3':data.sex=='3'}">
					英文名详情
				</view>
				<view>
					<view>名字性别：</view>
					<view>{{data.sex}}</view>
				</view>
				<view>
					<view>来源语种：</view>
					<view>{{data.language}}</view>
				</view>
				<view>
					<view>名字寓意：</view>
					<view>{{data.allegory}}</view>
				</view>
				<view>
					<view>名字印象：</view>
					<view>{{data.impression}}</view>
				</view>
				<view>
					<view>名字含义：</view>
					<view>{{data.signification}}</view>
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
				data:{}
			}
		},
		onLoad(e) {
			this.data=e
		},
		methods: {	
			play:function(){
				innerAudioContext.src = "http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=24.9f5734d6f996169601c25e72c7dcb72a.2592000.1587521840.282335-18781667&vol=10&per=4&spd=5&pit=5&aue=3&tex="+this.data.name;
				innerAudioContext.play()
			},
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
.bg1{
	background: url('http://pic.doggieye.com/20200323/fea0960f310c417d854d7d29eeb856bb.png') no-repeat;
	background-size: 100%;
}
.bg2{
	background: url('http://pic.doggieye.com/20200323/f0c0a519d7c3462ea9cae07261e27ff4.png') no-repeat;
	background-size: 100%;
}
.bg3{
	background: url('http://pic.doggieye.com/20200323/7434c41354a84d01ac14b977809de7ce.png') no-repeat;
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
			width:630upx;
			height:429upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 10upx 29upx 3upx rgba(83,160,232,0.15);
			border-radius:30upx;
			margin: 26upx auto;
			overflow: hidden;
			.translation{
				width: 212upx;
				height: 76upx;
				margin: 0 auto;
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
				width:100%;
				height:60upx;
				font-size:64upx;
				font-weight:bold;
				margin: 70upx auto 30upx;
				text-align: center;
				line-height: 60upx;
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
				width:100%;
				height:40upx;
				font-size:32upx;
				line-height: 40upx;
				margin: 10upx auto 30upx;
				text-align: center;
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
