// footer
$(".more_link").toggle(function(){
	$(this).next(".wb_more_link").slideDown(500);
	},
	function(){
		$(this).next(".wb_more_link").slideUp(500);
	}
);
$(".select_tik").toggle(
	function(){
		$(this).find(".iconCheck01-2").css("display","block");
},	function(){
		$(this).find(".iconCheck01-2").css("display","none");
})
// --------------------------------------
// 显示购物车
$(function() {
    // 显示购物车
    $.ajax({
        type: "GET",
        url: "getGoodsList.php",
        success: function (str) {
            showShop(str);
        }
    });
})
var imgs;
var t;
function showShop(str){
    var objs=JSON.parse(str);
    var htmlStr="";
    if(objs.length>0){
        $("#cart_empty").css("display","none");
        $(".cart_wrap").css("display","block");
    }else{
        $("#cart_empty").css("display","block");
        $(".cart_wrap").css("display","none");
    }
    $.each(objs,function(i){
        htmlStr+=`<div class="W_store_floor">
					<div class="store_top">
						<span class="select_tik">
							<i class="iconCheck01-1"></i>
							<i class="iconCheck01-2"></i>
						</span>
						<a href="javascript:void(0);" class="store_name fl">${objs[i].dname}</a>
					</div>
					<div class="goods_floor">
						<div class="goods_info clearfix">
							<div class="goods_right clearfix">
								<span class="select_tik">
									<i class="iconCheck01-1"></i>
									<i class="iconCheck01-2"></i>
								</span> 
								<a href="detail.html" target="_blank">
									<div class="goods_img">
										<img src=${objs[i].img} alt="">
									</div>
									<div class="goods_txt fl">
										<div class="goods_a">
											<p class="p1">${objs[i].sname}</p>
											<p class="specifications">${objs[i].decr}</p>
										</div>
									</div>
								</a>
								<ul class="fr">
									<li class="unit_price"> ¥<em>${objs[i].price}</em></li>
									<li class="goods_num">
										<span class="reduce calc-btns">-</span> 
										<input type="text" class="num" value=${objs[i].snum} readonly="">
										<span class="add calc-btns">+</span>
									</li>
									<li class="total_price">¥<em class="subTotal">${objs[i].price*objs[i].snum}</em></li>
									<li class="others">
										<a href="javascript:void(0);" id="delete_goods" class="delete_goods deleGoods">删除</a> 
										<a href="javascript:void(0);" class="to_collection">移入收藏</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>`;
    })
    $(".normal-goods").append(htmlStr);
    imgs=$(".goods_img img").attr("src");
    t=$(".deleGoods");
    t.each(function() {
        $(this).click(function(){
            ajax180803({
                type:"GET",
                url:"deleteGoods.php",
                param:"img="+imgs,
                func:deleteShop(str)
            })
        })
    })
    // 删除购物车
    function deleteShop(str){
        if(str=="1"){
            alert("删除成功!");
            console.log($(".deleGoods").parent().parent().parent().parent());
            $(".deleGoods").parent().parent().parent().parent().remove();
        }else{
            alert("删除失败！");
        }
    }
}





