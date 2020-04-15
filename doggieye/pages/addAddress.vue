<template>
	<view style="width: 100%;background-color: #FFFFFF;">
		<view class="nav_heads" :style="'line-height:'+((88+(statusBarHeight*2-40)))+'px !important;'">
			<text class="iconfont icon-return" @click="goBack"></text><text>{{title}}</text>
		</view>
		<view class="bg">
			<view class="form">
				<view class="list">
					<view class="left">
						收货人
					</view>
					<view class="right">
						<input type="text" v-model="data.consignee" maxlength="20"/>
					</view>
				</view>
				<view class="list">
					<view class="left">
						手机号码
					</view>
					<view class="right">
						<input type="number" v-model="data.phone"  maxlength="11"/>
					</view>
				</view>
				<view class="list">
					<view class="left">
						所在地区
					</view>
					<view class="right">
						<pickRegions :default-regions="defaultRegions" @getRegions="handleGetRegions">
							<input type="text" v-model="region" disabled />
						</pickRegions>
					</view>
				</view>
				<view class="list1">
					<view class="left">
						详细地址
					</view>
					<view class="right">
						<textarea type="text" v-model="data.detailedAddress" maxlength="150"/>
					</view>
				</view>
				<view class="list2">
					<view class="left">
						<view>设为默认地址</view>
						<view>提醒:每次下单都会默认推荐使用该地址</view>
					</view>
					<view class="right">
						<switch :checked="data.isDefault==1" @change="switch1Change"  color="#333" />
					</view>
				</view>
				<view class="button_list">
					<view class="delete" v-if="signs" @click="del">
						删除
					</view>
					<view :class="signs?'add':'add1'" @click="add">
						保存
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue';
	import {post,toast} from '@/common/index';
	export default {
		components:{
		    pickRegions
		},
		data() {
			return {
				regions:[],
				defaultRegions:['湖南省','长沙市','岳麓区'],
				statusBarHeight:getApp().globalData.statusBarHeight,
				titile:'',
				region:'',
				data:{
					detailedAddress:"",
					isDefault:0,
					phone:"",
					consignee:"",
					userId:'',
					province:'',
					city:'',
					county:''
				},
				title:"添加地址",
				signs:false
			}
		},
		onLoad(e) {
			this.data={
				detailedAddress:"",
				isDefault:0,
				phone:"",
				consignee:"",
				userId:'',
				province:'',
				city:'',
				county:''
			}
			if(e.id){
				this.signs=true;
				this.title="修改地址";
				this.data=e;
				this.defaultRegions=[e.province,e.city,e.county];
				this.region=e.province+e.city+e.county
			}else{
				this.signs=false;
				this.title="添加地址"
			}
		},
		methods: {
			handleGetRegions(regions){
				this.region=regions.map(item=>item.name);
				this.data.province=this.region[0];
				this.data.city=this.region[1];
				this.data.county=this.region[2];
			},
			goBack:function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			del:function(){
				post('/api/user/shippingaddress/delete',this.data.id).then((res)=>{
					if(res[1].data.code==200){
						toast("删除成功")
						setTimeout(function(){
							uni.navigateBack({
							    delta: 1
							});
						},1000)
					}else{
						toast(res[1].data.msg)
					}
				}).catch((res)=>{
					toast(res[1].data.msg)
				})
			},
			switch1Change:function(e){
				if(e.target.value){
					this.data.isDefault=1;
				}else{
					this.data.isDefault=0;
				}
			},
			add:function(){
				if(this.data.consignee==''){
					toast('收货人不能为空')
				}else if(this.data.phone==''){
					toast('手机号码不能为空')
				}else if(!(/^1\d{10}$/).test(this.data.phone)){
					toast('手机号码不存在')
				}else  if(this.region==''){
					toast('地区不能为空')
				}else if(this.data.detailedAddress==''){
					toast('详细地址不能为空')
				}else{
					if(this.signs){
						post('/api/user/shippingaddress/update',this.data).then((res)=>{
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
					}else{
						this.data.userId=uni.getStorageSync('userId');
						post('/api/user/shippingaddress/save',this.data).then((res)=>{
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
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.form{
	width: 100%;
	margin: 0 12px;
	.list{
		line-height: 88upx;
		height: 88upx;
		display: flex;
		font-size:26upx;
		border-bottom:1upx solid rgba(237,239,243,1);
		.left{
			width:150upx;
			float: left;
			font-size:26upx;
			color:rgba(153,153,153,1);
		}
		.right{
			float: left;
			input{
				line-height: 88upx;
				height: 88upx;
				width: 560upx;
				font-size:26upx;
			}
		}
	}
	.list1{
		line-height: 88upx;
		height: 300upx;
		display: flex;
		font-size:26upx;
		border-bottom:1upx solid rgba(237,239,243,1);
		.left{
			width:150upx;
			float: left;
			font-size:26upx;
			color:rgba(153,153,153,1);
		}
		.right{
			float: left;
			textarea{
				width: 560upx;
				line-height: 40upx;
				height: 270upx;
				margin-top: 24upx;
				font-size:26upx;
			}
		}
	}
	.list2{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 112upx;
		width: 100%;
		overflow: hidden;
		font-size:26upx;
		border-bottom:1upx solid rgba(237,239,243,1);
		.left{
			float: left;
			color:rgba(153,153,153,1);
		}
		.right{
			float: left;
		}
		
	}
}
.button_list{
	width: 100%;
	// position: fixed;
	// bottom: 0;
	// left: 0;
	margin-top: 20upx;
	height: 120upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.delete,.add{
		width: 300upx;
		height:80upx;
		line-height: 80upx;
		text-align: center;
		border-radius: 40upx;
	}
	.delete{
		background-color:#999;
		color: #FFFFFF;
	}
	.add{
		background-color: #333;
		color: #FFFFFF;
	}
	.add1{
		width: 650upx;
		height:88upx;
		line-height: 88upx;
		text-align: center;
		border-radius: 10upx;
		background-color: #333;
		color: #FFFFFF;
	}
}
</style>