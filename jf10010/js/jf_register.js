
$(function(){
	var oInput = $(".excel").find("input")
	var oImg = $("#attention").find("img");
	var oAtten = $("#attention").find("span");
	oInput.on("focus",function(){
		//console.log($(this).closest(".excel").find("p").index())
		$(this).css("borderColor", "#7abd54");
	})

	oInput.eq(0).on("blur", function(){
		//console.log($(".excel").find("input").eq($(this).index()));
		if(!($(this).val())){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");

			//switch($(this).index()){
				/*case 0:*/oAtten.html("请输入邮箱");
				//	break;
				// case 1:oAtten.html("请设置注册密码");
				// 	break;
				// case 2:oAtten.html("请确认登录密码");
				// 	break;
				// default: oAtten.html("请输入验证码");
				// 
			//}
			
		}
	})
	oInput.eq(1).on("blur", function(){
		//console.log($(".excel").find("input").eq($(this).index()));
		if(!($(this).val())){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("请设置注册密码");
			
			
		}
	})
	oInput.eq(2).on("blur", function(){
		//console.log($(".excel").find("input").eq($(this).index()));
		if(!($(this).val())){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("请确认登录密码");
			
			
		}
	})
	oInput.eq(3).on("blur", function(){
		//console.log($(".excel").find("input").eq($(this).index()));
		if(!($(this).val())){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("请输入验证码");				
		}
	})

	oInput.eq(0).on("blur", function(){
		if(oInput.eq(0).val() != /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("请输入正确格式的邮箱");
		}
	})
	oInput.eq(1).on("blur", function(){
		if(oInput.eq(1).val() != /^[a-zA-Z]\w{5,15}$/){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("请输入6-16位的密码");
		}
	})
	oInput.eq(2).on("blur", function(){
		if(oInput.eq(1).val() != oInput.eq(2).val()){
			$("#attention").css("display", "block");
			$(this).css("borderColor", "#ff6600");
			oAtten.html("两次输入密码不一致");
		}
	})


	$(".verify").click(function(){
		$(this).html(testCode(4));
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
