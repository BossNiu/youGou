$(function(){
	$('#login_btn').click(function(){
		console.log("data");
		$.post("http://47.104.244.134:8080/userlogin.do",{"name":$('#login_zhanghao').val(),"password":$("#login_password").val()},function(data){
			console.log(data);
			console.log("data");
			if(data.code==0){
				
				$.cookie("token",data.data.token,{
					path:"/",
					expires:7
				});
				location.href = "../index.html";
			}else{
				alert("账号或密码不正确，请重新输入！");
			}
		})
	})
	// 把token值存到cookie中
	
})
//http://47.104.244.134:8080/
