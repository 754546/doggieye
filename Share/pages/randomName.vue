<template>
	<view class="content">
		<view class="head">
			<view @click="goback">
				<image src="../static/goback.png" ></image>
			</view>
			<view>随机取名</view>
		</view>
		<view class="img">
			<image src="http://pic.doggieye.com/20200422/0079e2fd05bd425186d41aad7f3c5a7c.png" mode="widthFix"></image>
		</view>
		<radio-group  class="radio-groups" @change="sexFun">
			<view class="sex_content">
					<view :class="{'sex':true,'big':sex==1}" @click="radios(1)">
						<image src="http://pic.doggieye.com/20200417/efd351ab4163466595bf12caa330ec8c.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view >
								<radio value="1"  color="#53A0E8" class="danxuan" checked :checked="sex==1"/>
							</view>
							<view>男生</view>
						</label>
					</view>	 
					<view :class="{'sex':true,'big':sex==2}" @click="radios(2)">
						<image src="http://pic.doggieye.com/20200417/994f9182d9ff405e9c0f0cf95b39bb0c.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view>
								<radio value="2" color="#FF97D9"  class="danxuan" :checked="sex==2"/>
							</view>
							<view>女生</view>
						</label>
					</view>	 
					<view :class="{'sex':true,'big':sex==3}" @click="radios(3)">
						<image src="http://pic.doggieye.com/20200417/905260684ebe4217b6d33cffb52d9781.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view>
								<radio value="3" color="#FFE628"  class="danxuan" :checked="sex==3"/>
							</view>
							<view>中性</view>
						</label>
					</view>	 
				</view>
			</radio-group>	
			<view class="animation">
				<view class="footer" @click="play">
					<image src="http://pic.doggieye.com/20200417/ec4027f39d0c4cc889ec9040b65f9055.png" v-show="footer==1" mode="widthFix"></image>
					<image src="http://pic.doggieye.com/20200417/33460830323044e8babbdf2e9a1327e0.png" mode="widthFix" v-show="footer==2"></image>
					<view class="clouds">
						<image src="http://pic.doggieye.com/20200417/6de09d6de9304cb1aa21606f9e930338.png" mode="widthFix" v-show="cloud==1&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/abe282543824493897e80f4e3be36cec.png" mode="widthFix" v-show="cloud==2&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/5694acc07062437dbca2dd31f4347478.png" mode="widthFix" v-show="cloud==3&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/da771253e614451c8532f73be664bd49.png" mode="widthFix" v-show="cloud==4&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/f16f811ef22f4967bec57f4366507098.png" mode="widthFix" v-show="cloud==5&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/ffb0dca0f08a435399fadc0a34e3a2bb.png" mode="widthFix" v-show="cloud==6&&footer==2"></image>
						<image src="http://pic.doggieye.com/20200417/2deccd6efdc14a7fad2b638d5ec26f5b.png" mode="widthFix" v-show="cloud==7&&footer==2"></image>
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
				footer:1,
				cloud:0,
				sex:1,
				dingshi:''
			}
		},
		methods: {	
			sexFun:function(e){
				this.sex=e.target.value;
			},
			radios:function(e){
				this.sex=e
			},
			goback:function(){
				window.history.go(-1);
			},
			time:function(){
				if(this.cloud<7)
				{
					this.cloud++
				}else{
					this.cloud=0;
					this.footer=1;
					var that=this;
					clearInterval(this.dingshi);
					setTimeout(function(){
						uni.navigateTo({
							url:"recommended?sex="+that.sex
						})
					},100)
				}
			},
			play:function(){
				var that=this;
				if(this.footer==1){
					var that=this;
					that.footer=2
					that.dingshi=setInterval(function(){
						that.time()
					},400)
					
				}else{
					this.footer=1;
					clearInterval(this.dingshi); 
				}
			},
		}
	}
</script>
<style>
	.danxuan .uni-radio-wrapper .uni-radio-input{
		border: 1px solid #000 !important;
	}
</style>
<style scoped lang="scss">
.big{
	transform: scale(1.1,1.1);
}
.img{
	width: 100%;
	height: 120upx;
	margin: 76upx 0 50upx;
	image{
		display: block;
		width: 376upx;
		margin: 0 auto;
	}
}
.animation{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	.footer{
		position: relative;
		>image{
			display: block;
			width: 100%;
		}
		.clouds{
			position: absolute;
			top:0;
			left: 50%;
			width: 182upx;
			transform: translate(-20%,-30%);
			image{
				width: 182upx;
				height: 240upx;
			}
		}
	}
}
.radio-groups{
	overflow:hidden;
	overflow-x: scroll;
	.sex_content{
		width: 1000upx;
		height: 400upx;
		margin: 20upx auto;
		.sex{
			width:288upx;
			height:360upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 4upx 29upx 2upx rgba(83,160,232,0.2);
			border-radius:30upx;
			display: inline-block;
			margin-left: 20upx;
			.head_img{
				width: 230upx;
				height: 200upx;
				display: block;
				margin: 20upx auto;
			}
			.radios{
				display: flex;
				justify-content: center;
			}
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
.content{
	background: url('http://pic.doggieye.com/20200320/c0b47adc763f4c71a68b7a3377c4520d.png');
	background-size: 100%;
	width: 100%;
	height: 100vh;
}
</style>
