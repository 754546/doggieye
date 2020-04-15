<template>
	<view class="content">
		<view v-if="data.length>0" class="imgs_list">
			<view v-for="(item,key) in data" :key="key" @click="jump(key)">
				<image :src="item" class="imgs" mode="widthFix"></image>
			</view>
			<view class="buy" @click="by">
				立即购买
			</view>
		</view>
		<view class="hint" v-if="data.length<1">
			盒子主题未找到
		</view>
	</view>

</template>

<script>
	import {post,toast} from '@/index';
	export default {
		data() {
			return {
				msg:"",
				data:[''],
				list:'1,3,5,8,10',
				index:'',
				id:''
			}
		},
		onLoad(e) {
			this.getInfo(e)
		},
		methods: {
			jump:function(key){
				if(this.judgment(key+1)&&this.judgment1()){
					//判断都为true 则跳转到id为key的玩具详情 
					//#ifdef H5
						if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
							window.location.href='lovexiaodoggieye://toyDetails?id='+this.toyList[this.index].id;
							var that=this;
							window.setTimeout(function() {
								uni.navigateTo({
									url:'toyDetails?articleId='+that.toyList[that.index].id
								})
							}, 200)
						}else if(navigator.userAgent.match(/android/i)) {
							window.location.href= 'doggieyeshare://type/toy?id='+this.toyList[this.index].id;
							var that=this;
							window.setTimeout(function() {
								uni.navigateTo({
									url:'toyDetails?articleId='+that.toyList[that.index].id
								})
							}, 200)
						}
					//#endif
				}
			},
			judgment:function(key){
				let Signs=false;
				for(let i=0;i<this.list.length;i++){
					if(key==this.list[i]){
						Signs=true;
						this.index=i;
					}
				}
				return Signs;
			},
			judgment1:function(){
				let Signs1=true;
				for(let i=0;i<this.list.length;i++){
					if(!(-1<this.list[i])){
						Signs1=false;
					}
				
				}
				return Signs1;
			},
			getInfo:function(e){
				post('/api/box/info/info',e.id).then((res)=>{
					if(res[1].data.code==200){
						if(res[1].data.data.imageUrlList){
							this.data=res[1].data.data.imageUrlList.split(',');
							this.toyList=res[1].data.data.toyList;
							this.id=res[1].data.data.id;
							if(res[1].data.data.jumpToyList){
								this.list=res[1].data.data.jumpToyList.split(',');
							}else{
								this.list=[]
							}
						}
					}else{
						toast(res[1].data.msg)
					}
				}).catch((res)=>{
					toast(res[1].data.msg)
				})
			},
			by:function(){
				//#ifdef H5
					if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
						window.location.href='lovexiaodoggieye://nowBuy?id='+this.id
						window.setTimeout(function() {
							window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
						}, 1000)
					}else if(navigator.userAgent.match(/android/i)) {
						window.location.href= 'doggieyeshare://type/buy?id='+this.id
						window.setTimeout(function() {
							window.location.href='https://a.app.qq.com/o/simple.jsp?pkgname=com.kaixun.doggieye'
						}, 1000)
					}
				//#endif
			}
		}
	}
</script>

<style scoped lang="scss">
.imgs_list{
	position: relative;
}
.buy{
	width: 650upx;
	height: 88upx;
	line-height: 88upx;
	border-radius: 44upx;
	text-align: center;
	position: absolute;
	bottom: 20upx;
	left: 50upx;
	font-size:28upx;
	color: #FFFFFF;
	background:rgba(83,160,232,1);
}
.imgs{
	width: 100%;
	display:block;
}
.hint{
	width: 100%;
	height: 500px;
	line-height: 500px;
	text-align: center;
	color: #999999;
	font-size: 30px;
}
</style>
