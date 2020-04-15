<script>
	import "@/common/index.css"
	export default {
		data() {
			return {
				loginInfo:false,
				globalData:{}
			}
		},
		onLaunch: function() {
		},
		onShow: function() {
			var that=this;
			uni.getSystemInfo({
			    success: function (res) {
			         that.globalData.statusBarHeight = res.statusBarHeight
			     }
			})
			console.log(that.globalData.statusBarHeight)
		},
		onHide: function() {
			
		}
	}
</script>
<style lang="scss">
	/*每个页面公共css */
*{
	font-size: 28upx;
}
body{
	background: #f5fafd;
	display: flex;
	justify-content: center;
	font-family:Roboto-Black;
	min-height: 100vh;
}
.content{
	width: 100%;
	margin:0 12px;
}
.bg{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 168upx;
}
.nav_heads{
	position: fixed;
	z-index: 999;
	top:0upx;
	left: 0;
	height: 168upx;
	width: 100%;
	background: url("http://pic.doggieye.com/20191218/7a8f469a32254c6aac96a996ede18d45.png");
	background-size: 100%;
	// line-height: 230upx;
	text-align: center;
	font-size:32upx;
	font-family:Source Han Sans CN;
	color: #333333;
	font-weight: 600;
	text:nth-of-type(1){
		width: 100upx;
		height: 168upx;
		display: inline-block;
		text-align: center;
		position: absolute;
		left: 0upx;
		top:0upx;
	}
	text:nth-of-type(2){
		max-width: 360upx;
		height: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: inline-block;
		text-align: center;
	}
}
</style>
