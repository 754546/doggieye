<template>
	<view class="content">
		<view class="head">
			<view class="search">
				<input  type="text"  :focus='focusd' ref="inpt"/>
				<image src="http://pic.doggieye.com/20200317/669f7bc954c34645810ed1c03e01a08e.png"></image>
			</view>
			<view class="cancel" @click="cancel">
				取消
			</view>
		</view>
	</view>

</template>

<script>
	import {post} from '@/index';
	export default {
		data() {
			return {
				key:'',
				focusd:false
			}
		},
		
		onShow() {
			var that=this;
			setTimeout(function(){
				that.focusd=true;
				console.log(that.focusd)
			},500)
		},
		methods: {
			top:function(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration:0
				});
			},
			cancel:function(){
				uni.navigateTo({
					url:'englishName'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.head{
	height: 120upx;
	width: 100%;
	background: url('http://pic.doggieye.com/20200316/5da8920f66d54cfb8f47993b682919a4.png');
	background-size: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.search{
		width:600upx;
		height:72upx;
		background:rgba(255,255,255,1);
		border-radius:36upx;
		margin-left: 26upx;
		position: relative;
		input{
			width: 500upx;
			height: 100%;
			margin-left: 80upx;
		}
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
.cancel{
	width: 100upx;
	text-align: center;
}
</style>
