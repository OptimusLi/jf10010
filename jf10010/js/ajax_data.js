$(function(){
	// alert($(".section").eq(0).find(".sec_r").find(".beauty").size());
	$.ajax({
		url: "data.json",
		type: "GET",
		success: function(arr){
			
			var html = "";
			for(var i = 0; i < arr[0].length; i++){
				//console.log(arr[0][i]);
				html = '<img src="'+arr[0][i].img+'"class="sc_btn" id = "'+arr[0][i].id+'"/><p>'+arr[0][i].name+'</p><div>'+arr[0][i].grade+'<span>'+arr[0][i].code+'</span></div>';
				$(".produit .beauty").eq(i).html(html);
			}
			//$(".produit").find(".beauty").html(html)
			for(var j = 0; j < 6; j++){
				for(var i = 0; i < arr[1].length; i++){
					// console.log(arr[1][i]);

					html = '<img class="sec_img" src="'+arr[1][i].img+'"/><p class="sec_p">'+arr[1][i].name+'</p><div class = "sec_d">'+arr[1][i].grade+'<span>'+arr[1][i].code+'</span></div>';
					//console.log(j + "," + i);
					$(".section").eq(j).find(".sec_r").find(".beauty").eq(i).html(html);

				}
				
			}
		}
	})


	

	sc_car();
	$(".beauty").on("click",".sc_btn",function(){
			//alert($.cookie("goods"));
			// console.log(this.attr("class"));
			//alert($(this).attr("id"));
			//判断是否第一次装入cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie("goods","[{id : " + $(this).attr("id") + ",num :1}]",{expires:7});
			}else{
				var cookieStr = $.cookie("goods");
				var arr = eval(cookieStr);

				var isYes = false;
				for(var i = 0 ;i < arr.length ;i++){

					if( $(this).attr("id") == arr[i].id){
						arr[i].num++;
						isYes = true;
					}
				}

				if(!isYes){
					var obj = {id: $(this).attr("id"),num:1};
					arr.push(obj);
				}
				$.cookie("goods",JSON.stringify(arr),{expires:7});
			}
			console.log(arr);
			sc_car();
	})

	function sc_car(){
		var cookieStr = $.cookie("goods");
		
		var arr = eval(cookieStr);
		var sum = 0;
	
		if(arr){
			
			for(var i =0;i<arr.length ;i++){
			sum += Number(arr[i].num);
			}
		
		}
		$(".sc_num").html(sum);
	}
	$(".sc_right").on("mouseenter",function(){//注意mouseenter与mouseover的区别
			$(".sc_right").stop().animate({
				right:0
			})
			sc_msg();
		})

		$(".sc_right").on("mouseleave",function(){//注意mouseleave 与mouseout的区别
			$(".sc_right").stop().animate({
				right:"-270px"
			})
		})
	function sc_msg(){
		$.ajax({
			type:"get",
			url:"data.json",
			success:function(data){
				var arr = eval($.cookie("goods"));
				if(!arr){
					return;
				}
				var html = "";
				for(var i = 0 ;i<arr.length ; i++){
					html += '<li><div class="sc_goodsPic"><img src="'+data[0][arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>'+data[0][arr[i].id].name+'</p></div><div class="sc_goodsBtn" id="'+arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+arr[i].num+'</div></li>';
					
				}
				$(".sc_right ul").html(html);
			}
		})
	}
})