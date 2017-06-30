$(function(){
	$(document).scroll(function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTop > 300){
			$(".piloter").css("display", "block");
		}else{
			$(".piloter").css("display", "none");
		}
	})
	$(".piloter").click(function(){
		scrollTo(0, 0);
	})
	$(".add").click(function(){
		var oNum = parseInt($(".num").html());	
		oNum++;
		$(".num").html(oNum);
	})
	$(".sub").click(function(){
		var oNum = parseInt($(".num").html());	
		if(oNum > 1){
			oNum--;
			$(".num").html(oNum);
		}
		
	})
	$(".item_1").hover(function(){
		$(this).find(".itemPDetail").css("display", "block");
	}, function(){
		$(this).find(".itemPDetail").css("display", "none");
	})
})
