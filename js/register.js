$(function(){
	// blank验证
	$('#reg_tel').change(function(){
		var str = "";
		if(!(/^1[34578]\d{9}$/.test($(this).val()))){
			str += `<span class="iconfont icon-zanting"></span><i>手机号格式不正确</i>`;
			$('.blank_1')[0].innerHTML = str;
			$('.tel').css("border","solid 1px red")
		}else{
			str += `<i>格式正确</i>`;
			$('.blank_1')[0].innerHTML = str;
			$('.tel').css("border","solid 1px #333333")
		}
	})
	$('#reg_password').change(function(){
		var str = "";
		if(!(/^[a-zA-Z0-9]{6,25}$/.test($(this).val()))){
			str += `<span class="iconfont icon-zanting"></span><i>密码格式不正确</i>`;
			$('.blank_4')[0].innerHTML = str;
			$('.password').css("border","solid 1px red")
		}else{
			str += `<i>格式正确</i>`;
			$('.blank_4')[0].innerHTML = str;
			$('.password').css("border","solid 1px #333333")
		}
	})
	$('#reg_confirpassword').change(function(){
		var str = "";
		if($(this).val()!=$("#reg_password").val()){
			str += `<span class="iconfont icon-zanting"></span><i>确认密码错误</i>`;
			$('.blank_5')[0].innerHTML = str;
			$('.confirpassword').css("border","solid 1px red")
		}else{
			str += `<i>正确！</i>`;
			$('.blank_5')[0].innerHTML = str;
			$('.confirpassword').css("border","solid 1px #333333")
		}
	})
	
	
	var verifyCode = new GVerify("v_container");
	var res = verifyCode.validate(document.getElementById("reg_checkcode").value);
	$('#reg_checkcode').change(function(){
		console.log(res);
		if(!res){
		}else{
			alert("验证码输入错误");
		}
	}) 
	$('.huoqu').click(function(e){
		e.preventDefault();
	})
	// 确认注册按钮
	$('#reg_btn').click(function(){
		$.get("http://47.104.244.134:8080/username.do",{"username":$('#reg_tel').val()},data=>{
			if(data.code==1){
				$.post("http://47.104.244.134:8080/usersave.do",{"username":$('#reg_tel').val(),"password":$("#reg_password").val(),"email":$('#reg_tel').val(),"sex":"男"},data1=>{
				})
				$('.tishi').css("display","block");
				
			}else{
					alert("用户名重复，请重新输入");
			}
		
		})
		// $('#reg_tel').val()
		
		
	})
})
//http://47.104.244.134:8080/