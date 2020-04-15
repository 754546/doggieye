<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	*{
		font-size:30upx;
		font-family:Source Han Sans CN;
		color: #333333;
	}
	.uni-radio .uni-radio-wrapper .uni-radio-input{
		border-color: #007AFF !important;
	}
</style>
