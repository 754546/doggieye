<template>
    <view style="width: 100%;height: 100vh;">
    <input type="text" v-model="neirong"/>
	<button type="primary" @click="playAudio">播放内容</button>
    </view>
</template>
<script>
	var innerAudioContext = uni.createInnerAudioContext();
	export default {
	    data() {
	        return {
				neirong:''
	        }
	    },
		methods:{
			getInfo:function(){
				uni.request({
				    url: "https://openapi.baidu.com/oauth/2.0/token", //仅为示例，并非真实接口地址。
				    data:{
						grant_type:'client_credentials',
						client_id:'04k323cD0LttuDfdPnyz0ELg',
						client_secret:"l7af5CrsbG1Qa9gBZrrp4qC7gMA37v3X",
						// https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=04k323cD0LttuDfdPnyz0ELg&client_secret=l7af5CrsbG1Qa9gBZrrp4qC7gMA37v3X
					},
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
			},
			playAudio:function(){
				this.getInfo()
				innerAudioContext.src = "http://tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=abcdxxx&tok=24.9f5734d6f996169601c25e72c7dcb72a.2592000.1587521840.282335-18781667&vol=10&per=4&spd=5&pit=5&aue=3&tex="+this.neirong;
				innerAudioContext.play()
			}
		}
	}
</script>