
//功能：发送ajax请求
//参数：
//   请求方式
//   请求地址
//   请求参数
//   是否异步
//   回调函数
//返回值：无

function ajax180801(method,url,param,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = url;
	if(method.toLowerCase()=="get" && param!=""){
		urlAndParam +="?"+param;
	}	
	//2、
	xhr.open(method,urlAndParam,isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}
/*
ajax180802({
	url:"t.php",
	method:"get",
	param:"a=1&b=2",
	isAsync:true,
	func:function(){
		
	}
});
*/
//参数是对象
function ajax180802(obj){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.param!=""){
		urlAndParam +="?"+obj.param;
	}	
	//2、
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}


//参数是对象,并且带默认值
/*
ajax180803({
	url:"t.php",
	param:"a=1&b=2",
	func:function(){}
});
*/
function ajax180803(obj){
	let defaultObj= {
		url:"#",
		method:"get",
		param:"",
		isAsync:true,
		func:null
	};
	/*
	for(let key in obj){  // "url"
		defaultObj[key] = obj[key];
	}	
	*/
	for(let key in defaultObj){  // "url"
		//obj[key]&&(defaultObj[key]=obj[key]);
		if(obj[key]){
			defaultObj[key]=obj[key];
		}
	}
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam +="?"+defaultObj.param;
	}	
	//2、
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func && defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}




//用promise封装ajax

function ajax180803UsePromise(obj){
	let defaultObj= {
		url:"#",
		method:"get",
		param:"",
		isAsync:true
	};
	for(let key in defaultObj){  // "url"
		//obj[key]&&(defaultObj[key]=obj[key]);
		if(obj[key]){
			defaultObj[key]=obj[key];
		}
	}
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam +="?"+defaultObj.param;
	}	
	//2、

	var p =new Promise(function(resolve,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				resolve&&resolve(xhr.responseText);
			}
		}
	});

	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}

	return p;
}

//调用
// ajax180803UsePromise({
// 		"url":"news.php",
// 		"param":"pageIndex="+pageIndex
// 	}).then(function(str){
// 	}).then(function (function_name)(argument) {
// 	}).then(function(){});

