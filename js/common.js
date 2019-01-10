// 头部菜单
	 var ary = location.href.split("&");
	jQuery("#nav").slide({ type:"menu", titCell:".nLi", targetCell:".sub",effect:ary[1], delayTime:ary[2] , triggerTime:ary[3], defaultPlay:ary[4],returnDefault:ary[5],easing:ary[6] });
// --------------------------------------------------------------------------------------------------------------
// 轮播图
	/*鼠标移过，左右按钮显示*/
	jQuery(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
	/*SuperSlide图片切换*/
	jQuery(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});
// -----------------------------------------------------
// 菜单栏
	jQuery(".menu_box").mouseover(function(){
	jQuery(this).find(".showBox").css({display:"block",background:"white"});
	jQuery(this).css({background:"white",borderLeft:"3px solid #cfad6b",boxSizing:"border-box",boxShadow:"inset 0 0 0 rgba(0,0,0,.1)"});
});
	jQuery(".menu_box").mouseout(function(){
	jQuery(this).find(".showBox").css("display","none");
	jQuery(this).css({background:"rgba(255,255,255,.8)",borderLeft:"none",boxShadow:"inset -20px -7px 7px -15px rgba(0,0,0,.1)"});
});

// 获取cookie
// 1.初始化界面
function initUI(username){
	if(username!=null){
		$("#usernameSpan").html(username);
		$("#welcomeBox").css("display","block");
		$(".navF1").css("display","none");
	}else{
		$("#welcomeBox").css("display","none");
		$(".navF1").css("display","block");
	}
}
// 2.获取用户名
var username=getCookie("name1");
// 3.初始化界面
initUI(username);
// 4.注销
$("#drop_out").click(function(){
	removeCookie("name1");
	location.href="login.html";
})