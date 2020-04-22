<template>
	<view style="width: 100%;background-color: #FFFFFF;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>收货地址</text>
		</view>
		<view class="bg">
			<view class="list" v-if="data.length>0">
				<view class="address" v-for="(item,key) in data" :key="key">
					<view class="address_left" @click="check(item)">
						<view>
							<image src="http://pic.doggieye.com/20200413/ca41d78f8fd845bb90f19e3f44b6115f.png"></image>
						</view>
						<view>
							<view><text>{{item.consignee}}</text><text>{{item.phone1}}</text></view>
							<view>{{item.province}}{{item.city}}{{item.county}}{{item.detailedAddress}}</view>
						</view>
					</view>
					<view class="address_right" @click="update(item)">
						<image src="http://pic.doggieye.com/20200413/4f545b7b70014fe397af402d73c80531.png"></image>
					</view>
				</view>
				<view class="add" @click="jump">
					<view>新增地址</view>
				</view>
			</view>
			<view class="hint" v-else>
				<image src="http://pic.doggieye.com/20200413/d7948cccb0a74688ac0f074717141223.png"></image>
				<view>没有相关内容</view>
				<view class="add1" @click="jump">新增地址</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {post,toast} from '@/common/index'
	export default {
		data() {
			return {
				statusBarHeight:getApp().globalData.statusBarHeight,
				titile:'',
				data:[],
				choose:0,
				orderId:''
			}
		},
		onLoad(e) {
			if(e.choose==1){
				this.choose=e.choose
			}else if(e.choose==2){
				this.choose=e.choose;
				this.orderId=e.orderId;
			}
			this.getinfo()
		},
		onShow() {
			this.getinfo()
		},
		methods: {
			check:function(item){
				if(this.choose==1){
					uni.redirectTo({
						url:"boxDetails?id="+item.id+"&type=1&isDefault=1&consignee="+item.consignee+"&phone="+item.phone+"&province="+item.province+"&city="+item.city+"&county="+item.county+"&detailedAddress="+item.detailedAddress
					})
				}else if(this.choose==2){
					post("/api/buy/order/info/updateAddress",{"orderId":this.orderId,"shippingAddressId":item.id}).then((res)=>{
						if(res[1].data.code==200){
							uni.navigateBack({
								delta: 1
							});
						}else{
							toast(res[1].data.msg)
						}
					}).catch((res)=>{
						toast(res[1].data.msg)
					})
				}
				
			},
			getinfo:function(){
				post("/api/user/shippingaddress/list",{"vo": {"isDefault": 0,"userId":uni.getStorageSync('userId') }}).then((res)=>{
					this.data=res[1].data.data.list
					for(let i=0;i<this.data.length;i++){
						this.data[i].phone1=this.data[i].phone.substr(0,3)+'****'+this.data[i].phone.substr(7)
					}
				}).catch((res)=>{
					toast(res[1].data.msg)
				})
			},			
			jump:function(){
				uni.navigateTo({
					url:"addAddress"
				})
			},
			goBack:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			update:function(item){
				uni.navigateTo({
					url:"addAddress?detailedAddress="+item.detailedAddress+"&id="+item.id+"&isDefault="+item.isDefault+"&phone="+item.phone+"&consignee="+item.consignee+"&userId="+item.userId+"&province="+item.province+"&city="+item.city+"&county="+item.county
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.add1{
	color: #FFFFFF ;
	height: 60upx;
	width:200upx;
	line-height: 60upx;
	background-color:#1D201F ;
	font-size: 28upx;
	border-radius: 30upx;
	margin: 40upx auto;
	text-align: center;
}
.add{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 80upx;
	width: 100%;
	display:flex ;
	justify-content: center;
	align-items: center;
	line-height: 80upx;
	view{
		width:100%;
		margin: 0 12px;
		height: 80upx;
		line-height: 80upx;
		font-size: 28upx;
		text-align: center;
		color: #FFFFFF;
		background-color:#1D201F ;
		border-radius: 40upx;
	}
}
.list{
	margin: 0 12px;
	width: 100%;
	.address{
		height: 136upx;
		width: 100%;
		border-bottom: 1upx solid #EDEFF3;
		.address_left{
			display:flex ;
			align-items: center;
			float: left;
			>view{
				height: 100%;
				overflow: hidden;
				image{
					width: 32upx;
					height: 32upx;
				}
			}
			>view:last-child{
				view:last-child{
					color: #999999;
					width: 540upx;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow: hidden;
					margin-left: 10upx;
					font-size:22upx;
					line-height: 40upx;
				}
				view:first-child{
					font-size:28upx;
					line-height: 40upx;
					width: 540upx;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow: hidden;
					line-height: 40upx;
					margin-top: 28upx;
					text:first-child{
						margin-left: 10upx;
					}
					text:last-child{
						margin-left: 20upx;
					}
				}
				
			}
		}
		.address_right{
			width:100upx;
			height:136upx;
			line-height:136upx;
			text-align: right;
			float: right;
			image{
				width: 32upx;
				height: 32upx;
			}
		}
	}
}
.hint{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	image{
		display: block;
		width: 220upx;
		height: 220upx;
		margin: 0 auto;
	}
	view:nth-of-type(1){
		text-align: center;
		color: #999999;
		font-size:26upx;
	}
}
</style>