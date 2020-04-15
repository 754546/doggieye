<template>
    <view>
		<view class="dibu">
			sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
		</view>
		<view class="tan" catchtouchmove="true">
			
		</view>
    </view>
</template>
<script>
	export default {
	    data() {
	        return {
				neirong:''
	        }
	    },
		methods:{
			moveHandle:function(){}
		}
	}
</script>
<style>
	.dibu{
		width: 100vh;
		height: 1000vh;
		background: #4CD964;
	}
	.tan{
		background-color: rgba(0,0,0,0.1);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>