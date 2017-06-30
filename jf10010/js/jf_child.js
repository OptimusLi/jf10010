
$(function(){
	var oBtns = $("#play").find("ol").find("li");
	var aLi = $("#play").find("ul").find("li");
	oBtns.click(function(){
		num = $(this).index();
		tab();
	})
	var num = 0;
	var timer = setInterval(timerInner, 4000);
	function timerInner(){
		num++;
		tab();	
	}

	function tab(){
		oBtns.attr("class", "");
		if(num > 1){
			num = 0;
			oBtns.eq(0).attr("class", "active");
		}else{
			oBtns.eq(num).attr("class", "active");
		}
		if(num == 1){
			aLi.eq(0).css("zIndex", 1).css("opacity", 1);
			aLi.eq(1).css("zIndex", 0).css("opacity", 0);
		}else{
			aLi.eq(1).css("zIndex", 1).css("opacity", 1);
			aLi.eq(0).css("zIndex", 0).css("opacity", 0);			
		}
				
	}
	$("#play").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 4000);
	})

	
	var oInput = $(".from-group").find("input");
	var oAtten = $("#attention").find("span");
	var oImg = $("#attention").find("img");
	oInput.on("focus",function(){
		oInput.eq($(this).index()).attr("placeholder", "");
		oInput.eq($(this).index()).css("borderColor", "#7abd54");
	})
	oInput.on("blur",function(){
		oInput.eq(0).attr("placeholder", "手机号码/邮箱/固网（无区号）");
		oInput.eq(1).attr("placeholder", "登录密码");
		oInput.eq($(this).index()).css("borderColor", "");
		if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(oInput.eq(0).val()) && /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(oInput.eq(0).val()) || 
			!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(oInput.eq(0).val()) && /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(oInput.eq(0).val()) || 
			/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(oInput.eq(0).val()) && !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(oInput.eq(0).val())){
			oImg.css("display", "none");
			oAtten.html("登&nbsp;&nbsp;录").css("color", "black").css("fontWeight", "bold").css("fontSize", "24px");
			$("#attention").css("paddingTop", "25px");
		}else{
			$("#attention").css("paddingTop", "36px");
			oImg.css("display", "block");
			oAtten.html("请输入手机号码、邮箱或固网号码");
			oAtten.css("fontSize", "14px")
			.css("color", "#ff6600")
			.css("fontWeight", "normal");
		}	
	})
	oInput.eq(1).on("blur", function(){
		oInput.eq(1).attr("placeholder", "登录密码");
		oInput.eq(1).css("borderColor", "");
		if(!/^[a-zA-Z]\w{5,17}$/.test(oInput.eq(1).val())){
			$("#attention").css("paddingTop", "36px");
			oImg.css("display", "block");
			oAtten.html("请输入登录密码");
			oAtten.css("fontSize", "14px")
			.css("color", "#ff6600")
			.css("fontWeight", "normal");
		}
	})

	$(".login_1").click(function(){
		var userName = oInput.eq(0).val();
		$_cookie("username", userName);
		var passWord = oInput.eq(1).val();
		$_cookie("password", passWord);
		oInput.val("");
	})

	$(".switch").click(function(){
		$(".switch_1").css("display", "block");
		$(".switch").css("display", "none");
		$(".verification").css("display","block");
		$(".form-control").eq(0).attr("placeholder", "手机号");
		$(".switch").css("backgroundPosition", "-56px -649px");
	})
	$(".switch_1").click(function(){
		$(".verification").css("display","none");
		$(".switch_1").css("display", "none");
		$(".switch").css("display", "block");
		$(".form-control").eq(0).attr("placeholder", "手机号码/邮箱/固网（无区号）");
		$(".switch").css("backgroundPosition", "-28px -649px");
	})

	$(".verify").click(function(){
		testCode(4);
	})

	function testCode(n){
				var arr = []; 
				for(var i = 0; i < n; i++){
					
					var tmp = parseInt(Math.random() * 100);
					if(tmp < 10){
						arr.push(tmp);
					}else if(tmp >= 65 && tmp <= 90){ 
						var str = String.fromCharCode(tmp);
						arr.push(str);
					}else if(tmp >= 17 && tmp <= 42){ 
						var str = String.fromCharCode(tmp + 80);
						arr.push(str);
					}else{
						
						i--;
					}
				}
				return arr.join("");
			}


})