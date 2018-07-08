<?php
	//引入公共文件
	include "public.php";

	//接收用户传入的数据
	$uname = $_REQUEST["reg-username"];

	$uword = $_REQUEST["reg-password"];

	$sql = "insert into `enter` (uname, uword) values ('$username', '$password')";

	$rows = mysqli_query($conn, $row);

	if($rows){
		echo "<script>alert('注册成功');localhost.href='index.html'</script>"
	}else{
		echo "<script>alert('注册失败');localhost.href='index.html'</script>"
	}
?>