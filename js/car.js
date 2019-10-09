$(function(){
	let str = "";
	var token = $.cookie("token");
	console.log(token);
	console.log("aa");
	$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
		for(var i in data){
			str += `<ul class="good">
						<li class="good_1">
							<input type="checkbox" class="goodscheck" id="${data[i].gid}">
							<img src="http:${data[i].goods.picurl}" alt="">
						</li>
						<li class="good_2">${data[i].goods.name}</li>
						<li class="good_3">
							<p>颜色：<span>粉色</span></p>
							<p>尺码：<span>37</span></p>
						</li>
						<li class="good_4">
							<span class="danjia">${data[i].goods.price}</span>
						</li>
						<li class="good_5">
							<p>
								<span class="jian" id="${data[i].gid}">-</span>
								<span class="num">${data[i].count}</span>
								<span class="jia" id="${data[i].gid}">+</span>
							</p>
						</li>
						<li class="good_6">
							<span class="danzongjia">${data[i].goods.price*data[i].count}</span>
						</li>
						<li class="good_7">
							<p>移入收藏夹</p>
							<p class="remove" id="${data[i].gid}">删除</p>
						</li>
					</ul>`;
			$('.goodslist')[0].innerHTML = str;

		}
		//全选
		$(".qx").click(function(){
			$(".goodscheck").prop("checked",$(this).prop("checked"));
			totalprice();
		});
		$(".goodscheck").click(function(){
			if($(".goodscheck:checked").length == $("ul").length){
				$(".qx").prop("checked",true);
				totalprice();
			}else{
				$(".qx").prop("checked",false);
				totalprice();
			}
		});
		
		$(".select_all").click(function(){
			$(".goodscheck").prop("checked",$(this).prop("checked"));
			totalprice();
		});	
		$(".goodscheck").click(function(){
			if($(".goodscheck:checked").length == $("ul").length){
				$(".select_all").prop("checked",true);
				totalprice();
			}else{
				$(".select_all").prop("checked",false);
				totalprice();
			}
		});


		
		
		
		
		// 加减操作
	
		$('.jia').css("cursor","pointer");
		$('.jian').css("cursor","pointer");
		$('.jia').click(function(){
			$(this).parent().parent().parent().find('.danzongjia').text(parseInt($(this).parent().parent().parent().find('.danzongjia').text())+parseInt($(this).parent().parent().parent().find('.danjia').text()));
			
			let gid = $(this).prop("id");
			let num = parseInt($(this).parent().find(".num").text());
			var token = $.cookie("token");
			$(this).parent().find(".num").text(parseInt($(this).parent().find(".num").text())+1); 
			$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
				let id;
				
				console.log(data);
				console.log(gid);
				for(var i in data){
					console.log(data[i]);
					if(data[i].gid == gid){
						id = data[i].id;
					}
				}
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":id,"gid":gid,"num":1,"token":token},function(data){
					
				})
			})
			totalprice();
		});
		$('.jian').click(function(){
			if($(this).parent().find(".num").text()<=0){
				$(this).parent().find(".num").text(0);
			}else{
				$(this).parent().parent().parent().find('.danzongjia').text(parseInt($(this).parent().parent().parent().find('.danzongjia').text())-parseInt($(this).parent().parent().parent().find('.danjia').text()));
				let gid = $(this).prop("id");
				let num = parseInt($(this).parent().find(".num").text());
				var token = $.cookie("token");
				$(this).parent().find(".num").text(parseInt($(this).parent().find(".num").text())-1); 
				$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
					let id;
					
					console.log(data);
					console.log(gid);
					for(var i in data){
						console.log(data[i]);
						if(data[i].gid == gid){
							id = data[i].id;
						}
					}
					$.get("http://47.104.244.134:8080/cartupdate.do",{"id":id,"gid":gid,"num":-1,"token":token},function(data){
						
					})
				}) 
			}	
			totalprice();
		})
		//单个删除
		$('.remove').click(function(){
			$(this).parent().parent().remove();
			let gid = $(this).prop("id");
			var token = $.cookie("token");
			$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
				let id;
				console.log(data);
				console.log(gid);
				for(var i in data){
					console.log(data[i]);
					if(data[i].gid == gid){
						id = data[i].id;
					}
				}
				$.get("http://47.104.244.134:8080/cartupdate.do",{"id":id,"gid":gid,"num":0,"token":token},function(data){
					
				})
			})
			totalprice();
		})
		//多个删除
		$('.delete').click(function(){
			for(i=0;i<$('.goodscheck').length;i++){
				if($('.goodscheck')[i].checked){
					$($('.goodscheck')[i]).addClass("xuyaoshan");	
				}
			}
			var arr = [];
			for(var a = 0;a<$(".xuyaoshan").length;a++){
				
				arr.push($($(".xuyaoshan")[a]).prop("id"));
			}
			console.log(arr);
			// let gid = $(".xuyaoshan").prop("id");
			// console.log($(".xuyaoshan"));
			// console.log(gid);
			var token = $.cookie("token");
			$(".xuyaoshan").parent().parent().remove();
			$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
				let id;
				for(var b=0;b<arr.length;b++){
					console.log(arr[b]);
					for(var i in data){
						if(data[i].gid == arr[b]){
							id = data[i].id;
						}
					}
					$.get("http://47.104.244.134:8080/cartupdate.do",{"id":id,"gid":parseInt(arr[b]),"num":0,"token":token},function(data){
						
					})
			    }
			})
			totalprice();
			
		})
		// 总价结算
		function totalprice(){
			for(i=0;i<$('.goodscheck').length;i++){
				if($('.goodscheck')[i].checked){
					$($('.goodscheck')[i]).addClass("total_price");	
				}else{
					$($('.goodscheck')[i]).removeClass("total_price");	
				}
			}
			var price=0;
			for(var t = 0;t<$('.total_price').length;t++){
				price += parseInt($($('.total_price')[t]).parent().parent().find('.danzongjia').text());
				
			}
			console.log(price);
			$("#all_price").text(price);
			
			
			
			// var arr = [];
			// for(var t = 0;t<$(".total_price").length;t++){
				
			// 	arr.push($($(".total_price")[t]).prop("id"));
			// }
			// console.log(arr);
		}
		
	})
})

