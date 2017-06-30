$(function(){
	//alert(1);
	$.ajax({
	url: "data.json",
	type: "GET",
	success: function(arr){
		alert(arr.length);
		var html = "";
		for(var i = 0; i < arr.length; i++){
			html = '<img src="'+arr[i].img+'"/><p>'+arr[i].name+'</p><div>'+arr[i].grade+'<span>'+arr[i].code+'</span></div>';
			$(".beauty").eq(i).html(html);
		}
		//$(".produit").find(".beauty").html(html)
	}
	})
})