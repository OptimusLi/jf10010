
$(function(){
	var oBtns = $("#play").find("ol").find("li");
	var oUl = $("#play").find("ul");
	var aLi = $("#play").find("ul").find("li");
	oBtns.click(function(){
		num = $(this).index();
		tab();
	})
	var num = 0;
	var timer = null;
	timer = setInterval(timerInner, 2000);
	

	function timerInner(){
		num++;
		tab();
	}
	function tab(){	
		oBtns.attr("class", "");
		if(num == oBtns.size()){
			
			oBtns.eq(0).attr("class","active");
		}else{
			
			oBtns.eq(num).attr("class","active");
		}
	 	oUl.animate({left: num * -730}, function(){
	 		if(num == oBtns.size()){
	 			num = 0;
	 			oUl.css("left", "0px");
		 	}
	 	});
	 	
	
	 /*	aLi.eq(num).animate({opacity: 0.2},function(){
	 		if(num == oBtns.size()){
	 			num = 0;
	 			oUl.css("left", "0px");
	 		}
	 	})*/
	 	// aLi.eq(num + 1).animate({opacity: 1})
	}
	$("#play").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	})

	$("#sea").find("input").focus(function(){
		$("#sea").find("input").css("border","2px solid #fe7c04").css("border-left","none");
	})
	$("#sea").find("input").blur(function(){
		$("#sea").find("input").css("border-left","none");
	})



	$(".floorNum").hover(function(){
		$("#side").find("span").attr("class", "");
		$(this).find("span").attr("class", "curSpan");
		$(this).find("a").css("right", "0");
		$("#side").find("span").eq(8).attr("class", "");
	}, (function(){
		$(this).find("span").attr("class", "");
		$(this).find("a").css("right", "-203px");
		$("#side").find("a").eq(7).css("right", "0");
	}))

	$(document).scroll(function(){
		if($(this).scrollTop() > 600){
			$("#side").css("display", "block");
		}else{
			$("#side").css("display", "none");
		}
		if($(this).scrollTop() > 900 && $(this).scrollTop() < 1600){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(1).attr("class", "curSpan");
		}
		if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2300){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(2).attr("class", "curSpan");
		}
		if($(this).scrollTop() > 2300 && $(this).scrollTop() < 3000){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(3).attr("class", "curSpan");
		}
		if($(this).scrollTop() > 3000 && $(this).scrollTop() < 3700){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(4).attr("class", "curSpan");
		}
		if($(this).scrollTop() > 3700 && $(this).scrollTop() < 4400){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(5).attr("class", "curSpan");
		}

		if($(this).scrollTop() > 4400){
			$("#side").find("span").attr("class", "");
			$("#side").find("span").eq(6).attr("class", "curSpan");
		}

	})

	$(".item").hover(function(){
		$(this).find(".itemPDetail").css("display", "block");
		$(this).css("backgroundColor", "#ff6d0b");
	}, function(){
		$(this).find(".itemPDetail").css("display", "none");
		$(this).css("backgroundColor", "#ff891d");

	})

})

