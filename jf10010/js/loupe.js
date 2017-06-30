window.onload = function(){
			var oDiv = document.getElementById("div1");
			var oMark = oDiv.getElementsByClassName("mark")[0];
			var oFloat = oDiv.getElementsByClassName("float_layer")[0];
			var oBig = oDiv.getElementsByClassName("big_pic")[0];
			var oSmall = oDiv.getElementsByClassName("small_pic")[0];
			var oImg = oBig.getElementsByTagName("img")[0]

			
			oMark.onmouseover = function(){
				
				oFloat.style.display = "block";
				oBig.style.display = "block";
			}
			oMark.onmouseout = function(){
				oFloat.style.display = "none";
				oBig.style.display = "none";
			}
			oMark.onmousemove = function(even){
				var e = even || window.event;
				var l = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth / 2;
				var t = e.clientY - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight / 2;

				
				if(l < 0){
					l = 0
				}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
					l = oMark.offsetWidth - oFloat.offsetWidth;
				}

				if(t < 0){
					t = 0;
				}else if(t > oMark.offsetHeight - oFloat.offsetHeight){
					t = oMark.offsetHeight - oFloat.offsetHeight;
				}


				oFloat.style.left = l + "px";
				oFloat.style.top = t + "px";

				var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
				var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
				

				oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + "px";
				oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + "px";
				
			}

			$(".ul_img").find("li").click(function(){

				var Src = $(this).find("img").attr("src");
				$(".small_pic").find("img").attr("src", Src);
				$(".big_pic").find("img").attr("src", Src);
			})


		}