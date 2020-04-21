import Vue from 'vue';
import md5 from 'js-md5';
export const post=(url,data)=>{
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
		url:"https://www.doggieye.com:8081/doggieye-api"+url, //仅为示例，并非真实接口地址。
		// url:"http://app.test.doggieye.com:8081/doggieye-api"+url,
		// url:"http://192.168.1.244:8081/doggieye-api"+url,
		data:data,
		method:'POST',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'sign':sign,
			'token':''
		}
		//, success: () => {}
	});
}
export const toast=(title,time,icon)=>{
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
export const backward=(data)=>{
	return uni.navigateBack({
	    delta: data
	});
}
export const upload=(url,data)=>{
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
export const download=(url,data)=>{
	return uni.downloadFile({
		url: url //仅为示例，并非真实的资源
	});
}
