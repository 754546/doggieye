import Vue from 'vue';
import md5 from 'js-md5';
// ad6755129abbcaaa99d5e74f05f7c903
// var domainName='https://doggieye.com:8081/doggieye-api'
// var domainName='http://192.168.1.244:8081/doggieye-api'
var domainName='http://app.test.doggieye.com:8081/doggieye-api'
export const post=function(url,data){
	var sign='';
	if(data&&!(typeof data=='string')){
		sign='KAIXUN'+md5(JSON.stringify(data)).toUpperCase()+'DOGGIEYE';
	}else if(typeof data=='string'){
		sign='KAIXUN'+md5(data).toUpperCase()+'DOGGIEYE';
	}else{
		sign='KAIXUN'+md5('').toUpperCase()+'DOGGIEYE';
	}
	sign=md5(sign).toUpperCase();
	
	return uni.request({
		url:domainName+url, //仅为示例，并非真实接口地址。
		data:data,
		method:'POST',
		header: {
			'content-type': 'application/json;charset=UTF-8',
			'token':uni.getStorageSync('token'),	
			'sign':sign
		}
		//, success: () => {}
	});
}
export const toast=function(title,time,icon){
	if(icon==1){
		icon='success'
	}else if(icon==2){
		icon='loading'
	}else{
		icon='none'
	}
	if(title){
		return uni.showToast({
			title:title,
			icon:icon,
			mask:true,
			duration: time||2000
		});
	}
	
}
export const backward=function(data){
	return uni.navigateBack({
	    delta: data
	});
}
export const upload=function(url,data){
	return uni.chooseImage({
	    success: function (chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				name: 'file',
				formData:data
			});
	    }
	});
}
export const download=function(url,data){
	return uni.downloadFile({
		url: url //仅为示例，并非真实的资源
	});
}
