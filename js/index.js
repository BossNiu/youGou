$(function(){
		let token = $.cookie("token");
		console.log(token);
		// 阻止事件默认行为
		// $('.left').click(function(e){
		// 	 var event1 = e || event;
		// 	  event1.preventDefault();
		// });
		// $('.right').click(function(e){
		// 	 var event1 = e || event;
		// 	  event1.preventDefault();
		// });
		//new_pro tabs
		
		var oDiv = document.querySelectorAll(".item-wrap")[0];
		if( $('.tabs').find('a').eq(0).hasClass("active")){
			var str = "";
			$.ajax({
				type:"get",
				url:"https://www.fastmock.site/mock/e147089a0a5c381350e252873a7f0665/yougou/nannvxie",
				success:function(data) {
					for(var i in data.nanvxie){
						str += `
						<div class="nannv-item">
							<div class="goods-img">
								<a href="html/product.html" title="甜美 短靴">
									<img src="${data.nanvxie[i].tupian}" alt="">
								</a>
							</div>
							<img src="${data.nanvxie[i].touxiang}" >
							<p>${data.nanvxie[i].con}</p>
							<div class="price">
								￥<span>${data.nanvxie[i].price}</span>
								<strong class="xin"></strong>
							</div>
						</div>
						`;
					}
					oDiv.innerHTML = str;
						// hover效果
					$('.nannv-item').hover(function(){
						$(this).css('background',"#f6f6f6");
						$(this).find('.xin')[0].innerHTML=`<i class="iconfont icon-tubiaozhizuomoban"></i>`;
						$(this).find('.xin').find("i").click(function(){
							$(this).css("color","red");
						})
					},function(){
						$(this).css('background',"#ffffff")
						$(this).find('.xin')[0].innerHTML=``;
					})
				}
			})
		}
		$('.tabs').find('a').click(function(e){
			 var event1 = e || event;
			 event1.preventDefault();
			$(this).addClass("active").siblings().removeClass("active");
			
			var str = "";
			if( $('.tabs').find('a').eq(0).hasClass("active")){
				$.ajax({
					type:"get",
					url:"https://www.fastmock.site/mock/e147089a0a5c381350e252873a7f0665/yougou/nannvxie",
					success:function(data) {
						for(var i in data.nanvxie){
							str += `
							<div class="nannv-item">
								<div class="goods-img">
									<a href="html/product.html" title="甜美 短靴">
										<img src="${data.nanvxie[i].tupian}" alt="">
									</a>
								</div>
								<img src="${data.nanvxie[i].touxiang}" >
								<p>${data.nanvxie[i].con}</p>
								<div class="price">
									￥<span>${data.nanvxie[i].price}</span>
									<strong class="xin"></strong>
								</div>
							</div>
							`;
						}
						oDiv.innerHTML = str;
						// hover效果
						$('.nannv-item').hover(function(){
							$(this).css('background',"#f6f6f6");
							$(this).find('.xin')[0].innerHTML=`<i class="iconfont icon-tubiaozhizuomoban"></i>`;
							$(this).find('.xin').find("i").click(function(){
								$(this).css("color","red");
							})
						},function(){
							$(this).css('background',"#ffffff")
							$(this).find('.xin')[0].innerHTML=``;
						})
					}
				})
			}else if( $('.tabs').find('a').eq(1).hasClass("active")){
				$.ajax({
					type:"get",
					url:"https://www.fastmock.site/mock/e147089a0a5c381350e252873a7f0665/yougou/yundong",
					success:function(data) {
						for(var i in data.yundong){
							str += `
							<div class="nannv-item">
								<div class="goods-img">
									<a href="html/product.html" title="甜美 短靴">
										<img src="${data.yundong[i].tupian}" alt="">
									</a>
								</div>
								<img src="${data.yundong[i].touxiang}" >
								<p>${data.yundong[i].con}</p>
								<div class="price">
									￥<span>${data.yundong[i].price}</span>
									<strong class="xin"></strong>
								</div>
							</div>
							`;
						}
						oDiv.innerHTML = str;
						// hover效果
						$('.nannv-item').hover(function(){
							$(this).css('background',"#f6f6f6");
							$(this).find('.xin')[0].innerHTML=`<i class="iconfont icon-tubiaozhizuomoban"></i>`;
							$(this).find('.xin').find("i").click(function(){
								$(this).css("color","red");
							})
						},function(){
							$(this).css('background',"#ffffff")
							$(this).find('.xin')[0].innerHTML=``;
						})
					}
				})
				
			}
		});
		// 左右箭头
		$('.nannv').find('.right').click(function(event){
			 event.preventDefault();
			if(parseInt($('#swiper1').css('width'))>920){
				$('#swiper1').animate({"left":"-920px"});
			}
		
		});
		$('.nannv').find('.left').click(function(event){
				 event.preventDefault();
			if($('#swiper1').position().left!=0)
			{
				$('#swiper1').animate({"left":"0"});
			}
		
		})
		
	// 今日主推大牌
		$('.panels').find('.brand-img').find("li").hover(function(){
			$(this).find('div').removeClass('hide');
		},function(){
			$(this).find('div').addClass('hide');
		})
		
		var str3 = "";
		$.ajax({
			type:"get",
			url:"https://www.fastmock.site/mock/e147089a0a5c381350e252873a7f0665/yougou/brand",
			success:function(data) {
				for(var i in data.brand){
					str3 += `
					<a href="html/product.html"><img src="${data.brand[i].tupian}" ></a>
					`;
				}
				$('.brand-item')[0].innerHTML = str3;		
			}
		});
		$('.brand-lists-wrap').find('.right').click(function(e){
			var evt = e||event;
			evt.preventDefault();
			$('.brand-lists-wrap').find('.brand-item').animate({"left":"-970px"});
		});
		$('.brand-lists-wrap').find('.left').click(function(e){
			var evt = e||event;
			evt.preventDefault();
			if($('.brand-item').position().left!=0)
			$('.brand-lists-wrap').find('.brand-item').animate({"left":"0"});
		})
		
		$('.video').click(function(){
			$(this)[0].play();	
		})
		
		 $(".modules_list li").hover(function(){
			$(this).find('div').addClass('_hide').removeClass('hide');
		},function(){
			$(this).find('div').removeClass('_hide').addClass('hide');
		})
})