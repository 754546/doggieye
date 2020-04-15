<template>
	<view class="content">
		<view class="head">
			<image src="../static/goback.png" @click="goback"></image>
			<b>随机取名</b>
		</view>
		<radio-group  class="radio-groups">
			<view class="sex_content">
					<view class="sex">
						<image src="http://pic.doggieye.com/20200320/08c9c4a090ca4ed79f36cad3d2807525.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view >
								<radio value="0"  color="#53A0E8" class="danxuan"/>
							</view>
							<view>男生</view>
						</label>
					</view>	 
					<view class="sex">
						<image src="http://pic.doggieye.com/20200320/08c9c4a090ca4ed79f36cad3d2807525.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view>
								<radio value="1" color="#FF97D9"  class="danxuan"/>
							</view>
							<view>女生</view>
						</label>
					</view>	 
					<view class="sex">
						<image src="http://pic.doggieye.com/20200320/08c9c4a090ca4ed79f36cad3d2807525.png"  class="head_img"></image>
						<label class="uni-list-cell uni-list-cell-pd radios">
							<view>
								<radio value="2" color="#FFE628"  class="danxuan"/>
							</view>
							<view>中性</view>
						</label>
					</view>	 
				</view>
			</radio-group>	
	</view>
</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				}
		},
		methods: {	
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>
<style>
	.danxuan .uni-radio-wrapper .uni-radio-input{
		border: 1px solid #000 !important;
	}
</style>
<style scoped lang="scss">

.radio-groups{
	overflow:hidden;
	overflow-x: scroll;
	.sex_content{
		width: 1000upx;
		height: 400upx;
		margin: 20upx auto;
		// .sex:nth-of-type(1){
		// 	uni-radio .uni-radio-input{
		// 		border: 1upx solid #53A0E8 !important;
		// 	}
		// }
		// .sex:nth-of-type(2){
		// 	uni-radio .uni-radio-input{
		// 		border: 1upx solid #FF97D9 !important;
		// 	}
		// }
		// .sex:nth-of-type(3){
		// 	uni-radio .uni-radio-input{
		// 		border: 1upx solid #FFE628 !important;
		// 	}
		// }
		.sex{
			width:288upx;
			height:360upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 4upx 29upx 2upx rgba(83,160,232,0.2);
			border-radius:30upx;
			display: inline-block;
			margin-left: 20upx;
			.head_img{
				width: 192upx;
				height: 192upx;
				display: block;
				border-radius: 50%;
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
.content{
	background: url('http://pic.doggieye.com/20200320/c0b47adc763f4c71a68b7a3377c4520d.png');
	background-size: 100%;
	width: 100%;
	height: 100vh;
}
</style>
