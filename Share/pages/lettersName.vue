<template>
	<view class="content">
		<view class="head">
			<view @click="goback">
				<image src="../static/goback.png"></image>
			</view>
			<view>请选一个首字母</view>
		</view>
		<view class="back">
			<view class="list">
				<view :class="{'child':true,'style1':key%4==1||key%4==2||key%4==0,'style2':key%4==3}" v-for="(data,key) in list" :key="key" @click="jump(data.val)">
					<image :src="data.img" ></image>
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
				list:[
					{img:'../static/a.png',val:'a'},
					{img:'../static/b.png',val:'b'},
					{img:'../static/c.png',val:'c'},
					{img:'../static/d.png',val:'d'},
					{img:'../static/e.png',val:'e'},
					{img:'../static/f.png',val:'f'},
					{img:'../static/g.png',val:'g'},
					{img:'../static/h.png',val:'h'},
					{img:'../static/i.png',val:'i'},
					{img:'../static/j.png',val:'j'},
					{img:'../static/k.png',val:'k'},
					{img:'../static/l.png',val:'l'},
					{img:'../static/m.png',val:'m'},
					{img:'../static/n.png',val:'n'},
					{img:'../static/o.png',val:'o'},
					{img:'../static/p.png',val:'p'},
					{img:'../static/q.png',val:'q'},
					{img:'../static/r.png',val:'r'},
					{img:'../static/s.png',val:'s'},
					{img:'../static/t.png',val:'t'},
					{img:'../static/u.png',val:'u'},
					{img:'../static/v.png',val:'v'},
					{img:'../static/w.png',val:'w'},
					{img:'../static/xx.png',val:'x'},
					{img:'../static/y.png',val:'y'},
					{img:'../static/z.png',val:'z'}
				]
			}},
		methods: {
			jump(e){
				uni.navigateTo({
					url:'alphabeticName?initial='+e
				})
			},
			goback:function(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
.style1{
	border-right: 2upx solid #CCE4F3;
	border-bottom: 2upx solid #CCE4F3 ;
}
.style2{
	border-bottom: 2upx solid #CCE4F3 ;
}
.back{
	display: flex;
	justify-content: center;
	.list{
		width:662upx ;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin:32upx auto;
		clear: both;
		.child{
			background: #FFFFFF;
			width: 164upx;
			height: 144upx;
			float: left;
		}
		image{
			width: 100%;
			height: 100%;
			display: block;
		}
	}
}

.content{
	background-color: #E4F2FA;
	min-height: 100vh;
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
