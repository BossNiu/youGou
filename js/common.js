$(function(){
	$(".item a").hover(function () {
	    $(".dis_none").stop().slideDown().css('border-bottom','solid 3px black');
		$(this).css('border-bottom','solid 2px black');
	}, function () { 
		$(this).css('border',0);
		$(".dis_none").stop().slideUp();
	    $(".dis_none").on("mouseleave", function () {
	        $(".dis_none").stop().slideUp();
	    });
		$(".dis_none").on("mouseenter", function () {
		    $(".dis_none").stop().slideDown();
		});
	});
	// xuanfu
	$(window).scroll(function () { 
	    var top = $(document).scrollTop();
	    if (top > 210) {
	        $("#nav_logo").eq(0).css({
	            "display": "block"
	        });
	        $("#nav_logo").css({
	            "padding": " 6px 0"
	        });
	        $(".nav_container").css({
	            "position": "fixed",
	            "top": 0,
	            "left": 0,
	            "background": "#fff",
	            "border-bottom": "3px solid #333",
	            "width": "1160px",
	            "padding": "0 80px",
	            "padding-right": "100px",
	            "z-index": "4"
	        });
			$('.item').css('width',"60px");
	    }
		 else {
	        $(".nav_container").css({
	            "position": "static",
	            "border-bottom": "0",
	            "padding": "0"
	        });
	        $(".nav_container li").eq(0).css({
	            "display": "none",
	            "padding": "13px",
	            "padding-right": "8px"
	        });
	    }
	});
	// search
	var oInput = document.getElementById("keyword");
	var oUl = document.querySelectorAll(".find")[0];
	
	oInput.oninput = function(){
		$.getJSON("http://suggest.taobao.com/sug?q="+oInput.value+"&callback=?",data=>{
			var str = "";
			for(var i in data.result){
				// console.log(data.result[i][0]);
				str += `<li>${data.result[i][0]}</li>`;
			}
			oUl.innerHTML = str;
		})
	}
	
	
	
})