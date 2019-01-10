// footer

$(".more_link").toggle(function(){
	$(this).next(".wb_more_link").slideDown(500);
	},
	function(){
		$(this).next(".wb_more_link").slideUp(500);
	});
// 右侧固定小图标滑过效果
$(".iconHover").hover(function(){
	$(this).css("background","#f1f1f1");
	$(this).find("span").fadeIn(500);
},function(){
	$(this).css("background","white");
	$(this).find("span").fadeOut(10);
})
// 导航栏切换
$(".title_text").children().click(function(){
	$(this).addClass("on1");
	$(this).siblings().removeClass();
})

// 导航栏固定
	function navFixed(scroll){
	
	if(scroll>1600){
		// $(".lower_right_title").css({
		// 	position:'fixed',
		// 	right:'80px',
		// 	top:'0',
		// 	z-index:"50",
		// background:'white',
		// width:"960px"
		// });
		// $(".title_button").css("display","block");
			$(".lower_right_title")[0].style.background='white';
			$(".lower_right_title")[0].style.width='960px';
			$(".lower_right_title")[0].style.position='fixed';
			$(".lower_right_title")[0].style.right="80px";
			$(".lower_right_title")[0].style.top="0";
			$(".title_button")[0].style.display="block";
	}else{

		// $(".lower_right_title").css({
		// 	position:'relative',
		// 	right:'0',
		// 	top:'0',
		// 	z-index:"50"
		// });
		// $(".title_button").css("display","none");
		
			$(".lower_right_title")[0].style.position='relative';
			$(".lower_right_title")[0].style.right="0";
			$(".lower_right_title")[0].style.top="0";
			$(".title_button")[0].style.display="none";
			
	}
}
window.onscroll=function(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	navFixed(scroll);
}

$(".smallPic").children().mouseover(function(){
	var $source = $(this).children().children().attr("src");
	$("#bigBox").css("background-image","url("+$source+")");
	$("#showBox").css("background-image","url("+$source+")");
})

// 数量减
var count1=1;
$(".num_reduce").click(function(){
	if(count1<1){
		return alert("不能再减啦");
	}else{
		count1--;
		$("#count").val(count1);
	}

})
$(".num_add").click(function(){
	count1++;
	if(count1>5){
		return alert("本产品限购5件");
	}else{
		$("#count").val(count1);
	}
	
})
// 放大镜
 	$("#bigBox").mouseover(function () {
        $("#mirrorBox").css("display","block");
        $("#showBox").css("display","block");
    });

    $("#bigBox").mouseout(function () {
        $("#mirrorBox").css("display","none");
        $("#showBox").css("display","none");
    });


// -------------------------------------------
// 获取数据
$(".upper_button_b").click(function(){
    var dname=$(".Bread_content_right").find("span").eq(1).children().html();
    var img=$(".smallPic").find("li").children().children().attr("src");
    var sname=$(".upper_title").html();
    var decr=$("#upper_style_right_text").html();
    var  price=$(".upper_price_jiage_b").html();
    var snum=$("#count").val();
	ajax180803({
		"url":"addShoppingCart.php",
		"param":"dname="+dname+"&img="+img+"&sname="+sname+"&decr="+decr+"&price="+price+"&snum="+snum,
		"func":addShop
	})
})
function addShop(str){
	if(str==1){
		alert("添加成功！");
		location.href="shoppingCar.html";
	}else{
		alert("添加失败");
	}
}
// 模拟复选框
// 模拟复选框
var a=parseFloat($(".upper_price_jiage_b").html());
var b=parseFloat($("#count").val());
var c1=parseFloat($(".price257").html());
var c2=parseFloat($(".price353").html());
var totalMoney;
$(".select_tik").toggle(
    function(){
        $(this).find(".iconCheck01-2").css("display","block");
        $(this).find(".iconCheck01-2").attr("checked","true");


        if(($(".checked1").attr("checked")=="true") && ($(".checked2").attr("checked")=="true")){
            totalMoney=parseFloat(a*b+c1+c2);
        }else if(($(".checked1").attr("checked")=="true") && ($(".checked2").attr("checked")!="true")){
            totalMoney=parseFloat(a*b+c1);
        }else if(($(".checked2").attr("checked")=="true") && ($(".checked1").attr("checked")!="true")){
            totalMoney=parseFloat(a*b+c2);
        }else{
            totalMoney=0;
        }
        $(".sp1 i").html(totalMoney);
    },
    function(){
        $(this).find(".iconCheck01-2").attr("checked","false");
        $(this).find(".iconCheck01-2").css("display","none").removeClass("selected1");
        if(($(".checked1").attr("checked")=="false") && ($(".checked2").attr("checked")=="false")){
            totalMoney=0;
        }else if(($(".checked1").attr("checked")=="false") && ($(".checked2").attr("checked")!="false")){
            totalMoney=parseFloat(a*b+c2);
        }else if(($(".checked2").attr("checked")=="false") && ($(".checked1").attr("checked")!="false")){
            totalMoney=parseFloat(a*b+c1);
        }else{
            totalMoney=parseFloat(a*b+c1+c2);
        }
        $(".sp1 i").html(totalMoney);
    })



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
