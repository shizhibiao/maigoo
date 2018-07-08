<?php
	//引入公共的文件
	include "public.php";

	$uname = $_REQUEST["login-username"];

	$uword = $_REQUEST["login-password"];

	$sql = "select *from `enter` where username = '$uname'";

	$rows = mysqli_query($conn, $sql);

	$num = mysqli_num_rows($rows);

	if(!$num){
		echo "<script>alert('用户名不存在');</script>";
	}else{
		$data = mysqli_fetch_assoc($rows);
		if($data["username"] == $uname&&$data["password"] == $uword){
			echo "<script>alert('登录成功')</script>";
		}else{
			echo "<script>alert('密码错误')</script>";
		}
	}
?>