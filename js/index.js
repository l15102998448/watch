$(function(){
	setInterval(daojishi,100);
	function daojishi(){
		var startTime=new Date();
		var endTime=new Date("2019-2-15 00:00:00");
		var temp=endTime-startTime;
		temp=temp/1000;
		var sec =parseInt(temp % 60);
		var min =parseInt(temp/60)%60;
		var hour=parseInt(temp/3600)%24;
		var day =parseInt(temp/3600/24);
		$("#daojishi").html(`距离本期结束  <i>${day}</i><em>天</em><i>${hour}</i><em>时</em><i>${min}</i><em>分</em><i>${sec}</i><em>秒</em>`);
	}
// 排行榜滑过显示效果
	$(".f1").mouseover(function(){
		$(this).find(".elps2").slideDown(500);
	});

	$(".f1").mouseleave(function(){
		$(this).find(".elps2").slideUp(100);
	});

	// 品牌馆大图滑过部分
	$(".lisDom").hover(function(){
		$(this).find(".brand_list-img02").fadeIn(500);
	},
	function(){
		$(this).find(".brand_list-img02").fadeOut(300);
	});

	// 下面轮播图

	// jQuery(".scrollBox").slide({
	//  titCell:".list li",
	//   mainCell:".piclist",
	//    effect:"left",
	//    vis:4,scroll:4,
	//    delayTime:800,
	//    trigger:"click",
	//    easing:"easeOutCirc",
	//     autoPlay:true
	// });

	
// footer

$(".more_link").toggle(function(){
	$(this).next(".wb_more_link").slideDown(500);
	},
	function(){
		$(this).next(".wb_more_link").slideUp(500);
	});
// 右侧轮播图

 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

 $(".textInput").focus(function(){
 	$(".srh_hot").css("display","block");
 })
  $(".textInput").blur(function(){
 	$(".srh_hot").css("display","none");
 })
// 右侧固定小图标滑过效果
$(".iconHover").hover(function(){
	$(this).css("background","#f1f1f1");
	$(this).find("span").fadeIn(500);
},function(){
	$(this).css("background","white");
	$(this).find("span").fadeOut(10);
})
	
// 限时抢购中间轮播图
/* 把最后一个放到第一个前面，然后通过外层ul{margin-left:-980px !important; }来显示第一个 */
	$(".slider  li").first().before($(".slider li").last());
	/* 调用SuperSlide */
	$(".slider").slide({  mainCell:"ul", effect:"leftLoop",  autoPlay:true,  trigger:"click"});

// 达人甄选轮播图
	$(".slider1  li").first().before($(".slider1 li").last());
		/* 调用SuperSlide */
	$(".slider1").slide({mainCell:"ul", trigger:"click", effect:"leftLoop", autopage:true,autoPlay:false});
// 排行榜轮播图
	$(".slider2  li").first().before($(".slider2 li").last());
		/* 调用SuperSlide */
		$(".slider2").slide({mainCell:"ul", trigger:"click", effect:"leftLoop", autopage:true,autoPlay:false});
/*列表九猜你喜欢轮播图*/
	$(".slider3  li").first().before($(".slider3 li").last());
		/* 调用SuperSlide */
	$(".slider3").slide({ titCell:".hd ul", mainCell:".outul", effect:"leftLoop",  autoPlay:true,  autoPage:true, trigger:"click"});
// 品牌馆大图滑过部分
	$(".slider4  li").first().before($(".slider4 li").last());
		/* 调用SuperSlide */
	$(".slider4").slide({ mainCell:".outul", effect:"leftLoop",  autoPlay:true, trigger:"click"});





})

// 导航栏固定
	function navFixed(scroll){
	
	if(scroll>200){
		$(".h_nav")[0].style.position='fixed';
		$(".h_nav")[0].style.left="0";
		$(".h_nav")[0].style.top="0";
		$(".h_nav")[0].style.zIndex="50";
		$(".iconfont-shop")[0].style.display="block";
		
	}else{
			$(".h_nav")[0].style.position='relative';
			$(".h_nav")[0].style.left="0";
			$(".h_nav")[0].style.top="0";
			$(".iconfont-shop")[0].style.display="none";
			
	}
}
window.onscroll=function(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	navFixed(scroll);
}

