<?php
  header("Content-type:text/html;charset=utf-8");
 //接收数据
 $tel=$_GET['phone'];
 $pass=$_GET['passW'];
 
 //连接数据库
 $conn=mysql_connect('localhost','root','root');
 if(!$conn){
 	
 	die("连接失败".mysql_error());
 }else{
 	//选择数据库
 	mysql_select_db("uuu",$conn);
 	//执行sql语句，查询
 	$sqlstr="select * from w1809 where tel='$tel'";
 	$result=mysql_query($sqlstr,$conn);
 	//返回表格有几行
 	$rows=mysql_num_rows($result);
 	//判断 如果行数为0 则插入数据保存
 	if($rows==0){
 		$sqlstr="insert into  w1809(tel,pass)
 				values('$tel','$pass')";
 		$reusult=mysql_query($sqlstr,$conn);
 		mysql_close($conn);
 		if($reusult==1){
 			// echo "注册成功，请<a href='login.html'>登录</a>";
 			echo "0";
 		} else{
 			// echo "注册失败，请重新注册<a href='login.html'>登录</a>";
 			echo "1";
 		}
 	}else{
 		echo "用户名已存在";
 	}
 }
?>