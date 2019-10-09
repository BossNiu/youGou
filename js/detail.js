function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
    var moveX = x - l - (h_w / 2);
    //鼠标区域距离
    var moveY = y - t - (h_h / 2);
    //鼠标区域距离
    if (moveX < 0) { 
        moveX = 0
    }
    if (moveY < 0) {
        moveY = 0
    }
    if (moveX > imgbox.width() - h_w) {
        moveX = imgbox.width() - h_w
    }
    if (moveY > imgbox.height() - h_h) {
        moveY = imgbox.height() - h_h
    }
    //判断鼠标使其不跑出图片框
    var zoomX = showbox.width() / imgbox.width()
    //求图片比例
    var zoomY = showbox.height() / imgbox.height()

    showbox.css({
        left: -(moveX * zoomX)+130,
        top: -(moveY * zoomY)+130
    })
    hoverbox.css({
        left: moveX,
        top: moveY
    })
    //确定位置

}

function Zoomhover(imgbox, hoverbox, showbox) {
    var l = imgbox.offset().left;
    var t = imgbox.offset().top;
    var w = hoverbox.width();
    var h = hoverbox.height();
    var time;
    $(".probox img,.hoverbox").mouseover(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        $(".hoverbox,.showbox").show();
        hoverbox.css("opacity", "0.3")
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mouseout(function() {
        showbox.parent().hide()
        hoverbox.hide();
    })
}
$(function() {
    Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
	$('.gouwuche').click(function(e){
		var evt = e || event;
		evt.preventDefault();
	})
	// 数据接口
	// 从地址栏得到id值，保存
	let gid = window.location.search.split("=")[1];
	$.get("http://47.104.244.134:8080/goodsbyid.do",{"id":gid},function(data){
		var str = "";
		str += `
			<div class="good_logo">
				<a href="#"><img src="http://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackS-belle.png" ></a>
			</div>
			<h1>${data.name}</h1>
			<div class="good_price">
				<span>￥${data.price}</span>
				<i>￥999</i>
			</div>
			<div class="yanse">
				<span>颜色：</span>
				<i><img src="http:${data.picurl}" alt=""></i>
				<i><img src="http://i2.ygimg.cn/pics/belle/2019/101247979/101247979_01_c.jpg?5" alt=""></i>
			</div>
			<div class="chima">
				<span>尺码:</span>
				<i>33</i>
				<i>34</i>
				<i>35</i>
				<i>36</i>
				<i>37</i>
				<a href="#">
					<strong>
						<span class="iconfont icon-chima"></span>
						查看尺码表>>
					</strong>
				</a>
			</div>
			<div class="shuliang">
				<span>数量：</span>
				<input type="text" name="" id="" value="1" class="num"/>
				<div class="btns">
					<a href="#" id="zengjia"><span class="iconfont icon-up"></span></a>
					<a href="#" id="jianshao"><span class="iconfont icon-down"></span></a>
				</div>
			</div>
			<!-- 按钮 -->
			<div class="anniu">
				<a href="#" class="gouwuche">加入购物袋</a>
				<a href="#" class="goumai">立即购买</a>
			</div>
			<h4>
				<a href="#"><span class="iconfont icon-tubiaozhizuomoban"></span>收藏</a>
				<a href="#"><span class="iconfont icon-fenxiang2"></span>分享</a>
			</h4>
			<div class="saoma">
				<dl>
					<dt><img src="../img/saoma.png" alt=""></dt>
					<dd>扫一扫加入购物袋</dd>
				</dl>
			</div>
		`;
		$('.shop_container')[0].innerHTML = str;
		
		$('#zengjia').click(function(e){
			var evt = e || event;
			evt.preventDefault();
			$(".num").val(parseInt($(".num").val())+1);
		});
		$('#jianshao').click(function(e){
			var evt = e || event;
			evt.preventDefault();
			if($('.num').val()<=0){
				$('.num').val()==0;
			}else{
				$(".num").val(parseInt($(".num").val())-1);
			}
			
			
		})
		
		// 添加购物车接口
	
		$('.gouwuche').click(function(e){
			var evt = e || event;
			evt.preventDefault();
			var token = $.cookie("token");
			let num = $('.num').val();
			if(num != 1){
				$.get("http://47.104.244.134:8080/cartsave.do",{"gid":gid,"token":token},function(data){
					if(data.code==0){
						$.get("http://47.104.244.134:8080/cartlist.do",{"token":token},function(data){
							let id;
							for(var i in data){
								console.log(data[i]);
								if(data[i].gid == gid){
									id = data[i].id;
								}
							}
							$.get("http://47.104.244.134:8080/cartupdate.do",{"id":id,"gid":gid,"num":$('.num').val()-1,"token":token},function(data){
								if(data.code==0){
									alert("添加成功!");
								}else{
									alert("添加失败!");
								}
							})
						})
					}else{
						alert("添加失败!");
					}
					
					
				})
				
			}else{
				$.get("http://47.104.244.134:8080/cartsave.do",{"gid":gid,"token":token},function(data){
					if(data.code==0){
						alert("添加成功!");
					}else{
						alert("添加失败!");
					}
					
					
				})
			}
			
			// 数据修改接口
			
			
		})
		$('.goumai').click(function(){
			location.href = "car.html";
			console.log("aa");
		})
		
	})
	
})
// http://47.104.244.134:8080/
