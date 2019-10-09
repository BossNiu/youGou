'use strict';

$(function () {
	$('.pinlei').click(function () {
		if ($('.pinlei2').css("display") == "block") {
			$('.pinlei2').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.pinlei2').css("display", "block");
			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}

		return false;
	});
	// $('.nvxie_wrap').click(function(){
	// 	if($('.nvxie').css("display")=="block"){
	// 		$('.nvxie').css("display","none");
	// 	}else{
	// 		$('.nvxie').css("display","block");
	// 	}
	// 	return false;
	// })
	// $('.nanxie_wrap').click(function(){
	// 	if($('.nanxie').css("display")=="block"){
	// 		$('.nanxie').css("display","none");
	// 	}else{
	// 		$('.nanxie').css("display","block");
	// 	}
	// 	return false;
	// })
	// 性别
	$('.xingbie').click(function () {
		if ($('.nannv').css("display") == "block") {
			$('.nannv').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.nannv').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});
	// 未完待续（多选功能）
	$('.duoxuan').click(function () {

		return false;
	});
	// 价格
	$('.jiage').click(function () {
		if ($('.qian').css("display") == "block") {
			$('.qian').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.qian').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});

	// 尺码
	$('.chima').click(function () {
		if ($('.chicun').css("display") == "block") {
			$('.chicun').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.chicun').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});

	// 颜色
	$('.yanse').click(function () {
		if ($('.color').css("display") == "block") {
			$('.color').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.color').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});
	// 季节
	$('.jijie').click(function () {
		if ($('.jijie2').css("display") == "block") {
			$('.jijie2').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.jijie2').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});
	// 风格
	$('.fengge').click(function () {
		if ($('.fengge2').css("display") == "block") {
			$('.fengge2').css("display", "none");
			$(this).find('.iconfont').addClass("icon-arrow-fill-right").removeClass("icon-down");
		} else {
			$('.fengge2').css("display", "block");

			$(this).find('.iconfont').addClass("icon-down").removeClass("icon-arrow-fill-right");
		}
		return false;
	});

	// 左侧悬浮
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		if (top > 350) {
			$('.nav_lists').css({
				"position": "fixed",
				"top": "54px",
				"left": "74px",
				"z-index": "4",
				"background": "white",
				"opacity": ".9"
			});
		} else {
			$('.nav_lists').css({
				"position": "static"
			});
		}
	});
	// 商品
	$('.product_wrap').find('dl').hover(function () {
		$(this).css("background", "#f6f6f6");
		$(this).find('.iconfont').addClass('icon-tubiaozhizuomoban');
		$(this).find('.iconfont').click(function () {
			$(this).css("color", "red");
		});
	}, function () {
		$(this).css("background", "#fff");
		$(this).find('.iconfont').removeClass('icon-tubiaozhizuomoban');
	});

	// 分类接口
	//$('.pinlei2')
	$.get("http://47.104.244.134:8080/goodstypelist.do", { "l": 1 }, function (data) {
		var str = "";
		for (var i in data) {
			str += '\n\t\t\t<li class="nvxie_wrap"><span class="iconfont icon-youjiantou"></span>' + data[i].name + '\n\t\t\t\t<ul class="nvxie' + data[i].id + '">\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t';
		}
		$('.pinlei2')[0].innerHTML = str;
		// 二级
		$.get("http://47.104.244.134:8080/goodstypelist.do", { "l": 2 }, function (data) {
			var str1 = "";
			for (var i in data) {
				if (data[i].parentid == 5) {
					str1 += '<li><a href="#">' + data[i].name + '</a></li>';
					$('.nvxie5')[0].innerHTML = str1;
				}
				if (data[i].parentid == 7) {
					var str1 = "";
					str1 += '<li><a href="#">' + data[i].name + '</a></li>';
					$('.nvxie7')[0].innerHTML = str1;
				}
				if (data[i].parentid == 6) {
					var str1 = "";
					str1 += '<li><a href="#">' + data[i].name + '</a></li>';
					$('.nvxie6')[0].innerHTML = str1;
				}
				if (data[i].parentid == 12) {
					var str1 = "";
					str1 += '<li><a href="#">' + data[i].name + '</a></li>';
					$('.nvxie12')[0].innerHTML = str1;
				}
			}

			$('.nvxie_wrap').hover(function () {
				$(this).css("color", "red");
			}, function () {
				$(this).css("color", "#999999");
			});
			$('.nvxie5').find('li').find('a').hover(function () {
				$(this).css("color", "red");
			}, function () {
				$(this).css("color", "#999999");
			});
			$('.nvxie6').find('li').find('a').hover(function () {
				$(this).css("color", "red");
			}, function () {
				$(this).css("color", "#999999");
			});
			$('.nvxie7').find('li').find('a').hover(function () {
				$(this).css("color", "red");
			}, function () {
				$(this).css("color", "#999999");
			});
			$('.nvxie12').find('li').find('a').hover(function () {
				$(this).css("color", "red");
			}, function () {
				$(this).css("color", "#999999");
			});

			$('.pinlei2').find("li").click(function () {
				if ($(this).find('ul').css("display") != "none") {
					$(this).find('ul').css("display", "none");
				} else {
					$(this).find('ul').css("display", "block");
				}
				return false;
			});

			// console.log(tar.innerText);
			$.get("http://47.104.244.134:8080/goodsbytid.do", { "tid": 13, "page": 1, "limit": 20 }, function (data) {

				var str = "";
				for (var i = 1; i < data.data.length - 1; i++) {
					str += '\n\t\t\t\t\t\t<a href="detail.html?id=' + data.data[i].id + '">\n\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t<dt><img src="http:' + data.data[i].picurl + '" alt=""></dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t<h3>' + data.data[i].name + '</h3>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span>' + data.data[i].price + '</span>\n\t\t\t\t\t\t\t\t\t\t<i>\uFFE51498</i>\n\t\t\t\t\t\t\t\t\t\t<strong class="iconfont"></strong>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t';
				}
				$('.product_wrap')[0].innerHTML = str;
			});
			$('.nvxie_wrap').find("a").click(function (e) {
				var evt = e || event;
				var tar = evt.target;
				// console.log(tar.innerText);
				$.get("http://47.104.244.134:8080/goodsbytid.do", { "tid": 13, "page": 1, "limit": 7 }, function (data) {
					if (tar.innerText == "洗衣机") {
						var str = "";
						for (var i = 1; i < data.data.length - 1; i++) {
							console.log(data.data[i]);
							str += '\n\t\t\t\t\t\t\t<a href="detail.html?id=' + data.data[i].id + '">\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt><img src="http:' + data.data[i].picurl + '" alt=""></dt>\n\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t<h3>' + data.data[i].name + '</h3>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span>' + data.data[i].price + '</span>\n\t\t\t\t\t\t\t\t\t\t\t<i>\uFFE51498</i>\n\t\t\t\t\t\t\t\t\t\t\t<strong class="iconfont"></strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t';
						}
						$('.product_wrap')[0].innerHTML = str;
					}
					if (tar.innerText == "冰箱") {
						var str = "";
						for (var i = 5; i < data.data.length - 1; i++) {
							console.log(data.data[i]);
							str += '\n\t\t\t\t\t\t\t<a href="detail.html?id=' + data.data[i].id + '">\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt><img src="http:' + data.data[i].picurl + '" alt=""></dt>\n\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t<h3>' + data.data[i].name + '</h3>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span>' + data.data[i].price + '</span>\n\t\t\t\t\t\t\t\t\t\t\t<i>\uFFE51498</i>\n\t\t\t\t\t\t\t\t\t\t\t<strong class="iconfont"></strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t';
						}
						$('.product_wrap')[0].innerHTML = str;
					};
					if (tar.innerText == "外套") {
						var str = "";
						for (var i = 2; i < data.data.length - 1; i++) {
							console.log(data.data[i]);
							str += '\n\t\t\t\t\t\t\t<a href="detail.html?id=' + data.data[i].id + '">\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt><img src="http:' + data.data[i].picurl + '" alt=""></dt>\n\t\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t\t<h3>' + data.data[i].name + '</h3>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<span>' + data.data[i].price + '</span>\n\t\t\t\t\t\t\t\t\t\t\t<i>\uFFE51498</i>\n\t\t\t\t\t\t\t\t\t\t\t<strong class="iconfont"></strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t';
						}
						$('.product_wrap')[0].innerHTML = str;
					}
				});
			});
		});
	});
});
//http://47.104.244.134:8080/