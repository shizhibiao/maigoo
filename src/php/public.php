<?php
	//连接数据库
	header("content-type:text/html;charset=utf8");

	$db_hostname = "localhost";

	$db_username ="root";

	$db_password = "root";

	$db_name = "xiaomi_enter";

	$conn = new mysqli($db_hostname, $db_username, $db_password, $db_name);

	//判断是否连接成功，连接失败返回给客户端
	if($conn->connect_error){
		die("连接失败".$conn->connect_error);
	}

	$conn->query("set names utf8");
?>