"use strict";

function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
	var moveX = x - l - h_w / 2;
	//鼠标区域距离
	var moveY = y - t - h_h / 2;
	//鼠标区域距离
	if (moveX < 0) {
		moveX = 0;
	}
	if (moveY < 0) {
		moveY = 0;
	}
	if (moveX > imgbox.width() - h_w) {
		moveX = imgbox.width() - h_w;
	}
	if (moveY > imgbox.height() - h_h) {
		moveY = imgbox.height() - h_h;
	}
	//判断鼠标使其不跑出图片框
	var zoomX = showbox.width() / imgbox.width();
	//求图片比例
	var zoomY = showbox.height() / imgbox.height();

	showbox.css({
		left: -(moveX * zoomX) + 130,
		top: -(moveY * zoomY) + 130
	});
	hoverbox.css({
		left: moveX,
		top: moveY
	});
	//确定位置
}

function Zoomhover(imgbox, hoverbox, showbox) {
	var l = imgbox.offset().left;
	var t = imgbox.offset().top;
	var w = hoverbox.width();
	var h = hoverbox.height();
	var time;
	$(".probox img,.hoverbox").mouseover(function (e) {
		var x = e.pageX;
		var y = e.pageY;
		$(".hoverbox,.showbox").show();
		hoverbox.css("opacity", "0.3");
		time = setTimeout(function () {
			Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox);
		}, 1);
	}).mousemove(function (e) {
		var x = e.pageX;
		var y = e.pageY;
		time = setTimeout(function () {
			Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox);
		}, 1);
	}).mouseout(function () {
		showbox.parent().hide();
		hoverbox.hide();
	});
}
$(function () {
	Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
	$('.gouwuche').click(function (e) {
		var evt = e || event;
		evt.preventDefault();
	});
	// 数据接口
	// 从地址栏得到id值，保存
	var gid = window.location.search.split("=")[1];
	$.get("http://47.104.244.134:8080/goodsbyid.do", { "id": gid }, function (data) {
		var str = "";
		str += "\n\t\t\t<div class=\"good_logo\">\n\t\t\t\t<a href=\"#\"><img src=\"http://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackS-belle.png\" ></a>\n\t\t\t</div>\n\t\t\t<h1>" + data.name + "</h1>\n\t\t\t<div class=\"good_price\">\n\t\t\t\t<span>\uFFE5" + data.price + "</span>\n\t\t\t\t<i>\uFFE5999</i>\n\t\t\t</div>\n\t\t\t<div class=\"yanse\">\n\t\t\t\t<span>\u989C\u8272\uFF1A</span>\n\t\t\t\t<i><img src=\"http:" + data.picurl + "\" alt=\"\"></i>\n\t\t\t\t<i><img src=\"http://i2.ygimg.cn/pics/belle/2019/101247979/101247979_01_c.jpg?5\" alt=\"\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"chima\">\n\t\t\t\t<span>\u5C3A\u7801:</span>\n\t\t\t\t<i>33</i>\n\t\t\t\t<i>34</i>\n\t\t\t\t<i>35</i>\n\t\t\t\t<i>36</i>\n\t\t\t\t<i>37</i>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t<span class=\"iconfont icon-chima\"></span>\n\t\t\t\t\t\t\u67E5\u770B\u5C3A\u7801\u8868>>\n\t\t\t\t\t</strong>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"shuliang\">\n\t\t\t\t<span>\u6570\u91CF\uFF1A</span>\n\t\t\t\t<input type=\"text\" name=\"\" id=\"\" value=\"1\" class=\"num\"/>\n\t\t\t\t<div class=\"btns\">\n\t\t\t\t\t<a href=\"#\" id=\"zengjia\"><span class=\"iconfont icon-up\"></span></a>\n\t\t\t\t\t<a href=\"#\" id=\"jianshao\"><span class=\"iconfont icon-down\"></span></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- \u6309\u94AE -->\n\t\t\t<div class=\"anniu\">\n\t\t\t\t<a href=\"#\" class=\"gouwuche\">\u52A0\u5165\u8D2D\u7269\u888B</a>\n\t\t\t\t<a href=\"#\" class=\"goumai\">\u7ACB\u5373\u8D2D\u4E70</a>\n\t\t\t</div>\n\t\t\t<h4>\n\t\t\t\t<a href=\"#\"><span class=\"iconfont icon-tubiaozhizuomoban\"></span>\u6536\u85CF</a>\n\t\t\t\t<a href=\"#\"><span class=\"iconfont icon-fenxiang2\"></span>\u5206\u4EAB</a>\n\t\t\t</h4>\n\t\t\t<div class=\"saoma\">\n\t\t\t\t<dl>\n\t\t\t\t\t<dt><img src=\"../img/saoma.png\" alt=\"\"></dt>\n\t\t\t\t\t<dd>\u626B\u4E00\u626B\u52A0\u5165\u8D2D\u7269\u888B</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t";
		$('.shop_container')[0].innerHTML = str;

		$('#zengjia').click(function (e) {
			var evt = e || event;
			evt.preventDefault();
			$(".num").val(parseInt($(".num").val()) + 1);
		});
		$('#jianshao').click(function (e) {
			var evt = e || event;
			evt.preventDefault();
			if ($('.num').val() <= 0) {
				$('.num').val() == 0;
			} else {
				$(".num").val(parseInt($(".num").val()) - 1);
			}
		});

		// 添加购物车接口

		$('.gouwuche').click(function (e) {
			var evt = e || event;
			evt.preventDefault();
			var token = $.cookie("token");
			var num = $('.num').val();
			if (num != 1) {
				$.get("http://47.104.244.134:8080/cartsave.do", { "gid": gid, "token": token }, function (data) {
					if (data.code == 0) {
						$.get("http://47.104.244.134:8080/cartlist.do", { "token": token }, function (data) {
							var id = void 0;
							for (var i in data) {
								console.log(data[i]);
								if (data[i].gid == gid) {
									id = data[i].id;
								}
							}
							$.get("http://47.104.244.134:8080/cartupdate.do", { "id": id, "gid": gid, "num": $('.num').val() - 1, "token": token }, function (data) {
								if (data.code == 0) {
									alert("添加成功!");
								} else {
									alert("添加失败!");
								}
							});
						});
					} else {
						alert("添加失败!");
					}
				});
			} else {
				$.get("http://47.104.244.134:8080/cartsave.do", { "gid": gid, "token": token }, function (data) {
					if (data.code == 0) {
						alert("添加成功!");
					} else {
						alert("添加失败!");
					}
				});
			}

			// 数据修改接口

		});
		$('.goumai').click(function () {
			location.href = "car.html";
			console.log("aa");
		});
	});
});
// http://47.104.244.134:8080/