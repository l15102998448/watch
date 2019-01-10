<?php
	header("Content-type:text/html;charset=utf-8");
	// 接收数据
	$mobile=$_GET['mobile'];
	$password=$_GET['password'];
	// 建立连接
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败");
	}else{
		// 选择数据库
		mysql_select_db("uuu",$conn);
		// 在w1809表中查询用户名
		$sqlStr="select * from w1809 where tel='$mobile' and pass='$password'";
		$result=mysql_query($sqlStr,$conn);
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "3";
		}else{
			echo "2";//查找出 可以登录
		}
	}










?>