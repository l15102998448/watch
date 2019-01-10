<?php
	//添加到购物车
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$dname   = $_REQUEST['dname'];
	$img   = $_REQUEST['img'];
	$sname = $_REQUEST['sname'];
	$decr = $_REQUEST['decr'];
	$price = $_REQUEST['price'];
	$snum = $_REQUEST['snum'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("uuu",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$result = mysql_query("select * from shoppingCart where dname='".$dname."'  and sname='".$sname."' and decr='".$decr."' and price='".$price."'",$conn);
	//3.1)先查找该商品是否在购物车中存在
	if(mysql_num_rows($result)>0){
		//如果存在，则使用update语句
		$sqlstr = "update shoppingCart set snum=snum+".$snum." where sname='".$sname."' and img='".$img."' and sname='".$sname."' and decr='".$decr."' and price='".$price."'";
	}else{
		//如果不存在，则使用insert语句	
		$sqlstr = "insert into shoppingCart values('".$dname."','".$img."','".$sname."','".$decr."','".$price."','".$snum."')";		
	}
	
	$result=mysql_query($sqlstr,$conn);	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	if(!$result){
		die("添加失败".mysql_error());
	}	
	
	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result>0){
		echo 1;	
	}else{
		echo 0;
	}
?>