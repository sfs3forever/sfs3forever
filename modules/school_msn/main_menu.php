<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');


//$_SESSION['MSN_LOGIN_ID'] ?餃撣唾?

?>
<head>
<META HTTP-EQUIV="Expires" CONTENT="Fri, Jan 01 1900 00:00:00 GMT">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<title>閮</title>
<style>
A:link {font-size:9pt;color:#ff0000; text-decoration: none}
A:visited {font-size:9pt;color: #ff0000; text-decoration: none;}
A:hover {font-size:9pt;color: #ffff00; text-decoration: underline}
input.selectoption {
 background-color:#FFCCFF;
 border-color:#0000FF;
 border-width:1pt;
 padding: 1 1 1 1;
 color:#800000;
 font-size:8pt;
 cursor:hand
}
</style>
</head>
<body bgcolor="#ccccff" leftmargin="0" topmargin="0">
<table border="0" cellspacing="0" width="100%" cellpadding="0" valign="center">
  <tr>
    <td width="100%" align="left" style="font-size:8pt">

<?php
if ($_GET['act']=='logout') {
	mysql_query("SET NAMES 'utf8'");
	$query="update sc_msn_online set ifonline='0' where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
	mysql_query($query);
  $_SESSION['MSN_LOGIN_ID']="";
  echo "<Script>reload()</Script>";
}

if ($_GET['act']=='login') {
?>
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>" name="form1" onsubmit="return checkdata()">
	撣?<input type='text' name='log_id' tabindex="1" size='7' style="font-size:10pt">
	撖?<input type='password' name='log_pass' tabindex="2" size='7' style="font-size:10pt">
	<input type="submit" name="act" tabindex="3" value="?餃" title="隢蝙?典飛?頂蝯勗董??>
	<input type="button" value="?暹?" tabindex="4"  onclick="window.location='main_menu.php'">
</form>
<?php
}

if ($_POST['act']=='?餃') {
	
$log_id=$_POST['log_id']; 
$log_pass=pass_operate($_POST['log_pass']);
if ($IS_UTF8==0) mysql_query("SET NAMES 'latin1'");
$query="select teacher_sn, login_pass from teacher_base where teach_condition=0 and teach_id='$log_id' and login_pass='$log_pass' and teach_id<>''";
$result=mysql_query($query);

if (mysql_num_rows($result)) {

	$_SESSION['MSN_LOGIN_ID']=$log_id;
	//閮?銝?
   mysql_query("SET NAMES 'utf8'");
	 $my_ip=$_SERVER['REMOTE_ADDR'];
   $onlinetime=date("Y-m-d H:i:s");
	 mysql_query("SET NAMES 'utf8'");
   $query="select * from sc_msn_online where teach_id='$log_id'";
   $result=mysql_query($query);
   //撌脩?仿? MSN 
   if (mysql_num_rows($result)) {
   	  $row=mysql_fetch_array($result,1);
   	  $hits=$row['hits'];
   	  $_SESSION['is_email']=$row['is_email'];
   	  $_SESSION['is_showpic']=$row['is_showpic'];
   	  $_SESSION['is_upload']=$row['is_upload'];
   	  $hits++;
   	  $query="update sc_msn_online set onlinetime='".date("Y-m-d H:i:s")."',ifonline='1',hits='$hits' where teach_id='$log_id'";
      mysql_query($query);
   }else{
   	if ($IS_UTF8==0) {
   		mysql_query("SET NAMES 'latin1'");
    	$name=big52utf8(get_teacher_name_by_id($_SESSION['MSN_LOGIN_ID']));
    } else {
      $name=get_teacher_name_by_id($_SESSION['MSN_LOGIN_ID']);
    }
  	  mysql_query("SET NAMES 'utf8'");
   	  $query="insert into sc_msn_online (teach_id,name,from_ip,lasttime,onlinetime,ifonline,state,hits) values ('".$_SESSION['MSN_LOGIN_ID']."','".$name."','".$my_ip."','".$onlinetime."','".$onlinetime."','1','銝?','1')";
    if (!mysql_query($query)) {
      echo "$query=".$query;
      exit;
    }
   }
  
	//?芸?皜?????閮, 蝘犖閮
	$query="select * from sc_msn_data where to_days(curdate()-".$PRESERVE_DAYS.")>(to_days(post_date)) and data_kind=1";
  //?芸?文歇霈??
  if ($CLEAN_MODE) $query.=" and ifread=1";
  
  $result=mysql_query($query);
  
  while ($row=mysql_fetch_array($result,1)) {
   //?芷?祉?????
   delete_file($row['idnumber'],$row['to_id']);
   $query="delete from sc_msn_data where id='".$row['id']."'";
   mysql_query($query);
  }//end while
 } else {
 	$INFO="-撣唾???蝣潮隤歹?";  
 } // end if (mysql_num_rows($result))

} // end if ?餃
?>
<img border="0" src="./images/start.gif" align="absmiddle">
<img style="cursor:pointer" border="1" src="./images/reload.jpg" onclick="parent.location.reload()" title="?湔?恍" align="absmiddle">
<?php
//?交??餃
if ($_SESSION['MSN_LOGIN_ID']!="") {
	
//???葦蝑?
if ($IS_UTF8==0) mysql_query("SET NAMES 'latin1'");
$query="select teacher_sn from teacher_base where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
$result=mysql_query($query);
list($teacher_sn)=mysqli_fetch_row($result);
$query="select post_kind from teacher_post where teacher_sn='".$teacher_sn."'";
$result=mysql_query($query);
list($POST_KIND)=mysqli_fetch_row($result);

mysql_query("SET NAMES 'utf8'");	

 $MyName=get_name_state($_SESSION['MSN_LOGIN_ID']);	
 ?>

<img style="cursor:pointer" border="1" src="./images/post.jpg" onclick="msg_post();" title="????扯??臭漱瘚摰寞??喲???鈭箄??胯? align="absmiddle">
<img style="cursor:pointer" border="1" src="./images/download.jpg"  onclick="download();" title="銝?瑼?" align="absmiddle">
<img style="cursor:pointer" border="1" src="./images/manage.jpg" onclick="msg_manage();" title="蝞∠??犖閮" align="absmiddle">
<img style="cursor:pointer" border="1" src="./images/online.jpg" onclick="msg_online();" title="?亦?隤啣蝺?" align="absmiddle">
<img style="cursor:pointer" border="1" src="./images/state.jpg"  onclick="state();" title="閮剖?????? align="absmiddle">
<?php
if ($m_arr['portfolio']) {
	?>
 <img style="cursor:pointer" border="1" src="./images/myweb.jpg" onclick="web();" title="?葦蝬脤?" align="absmiddle">
 <?php	
 }
 ?>
<img style="cursor:pointer" border="1" src="./images/logout.jpg" onclick="window.location='main_menu.php?act=logout'" title="?餃" align="absmiddle">
<?php
 echo "-".$MyName[1];
} else {

  if($is_home_ip ) {
  ?>
  <img style="cursor:pointer" border="1" src="./images/online.jpg" onclick="msg_online_withoutlogin();" title="?亦?隤啣蝺?" align="absmiddle">
  <?php
  }
  ?>
 <input type="button" value="?餃" onclick="window.location='main_menu.php?act=login'" title="隢蝙?典飛?頂蝯勗董??伐??餃?鈭怠??游???>
 <?php
 echo $INFO;
} // end if login
?>
</td>
</tr>
</table>
</body>
</html>
<Script language="JavaScript">
<?php
	if (($_POST['act']=='?餃' and $_SESSION['MSN_LOGIN_ID']) or ($_GET['act']=='logout' and $_SESSION['MSN_LOGIN_ID']==""))  
	  echo "parent.location.reload();";
?>

//??恍
function reload()
{
window.main.replace('main_window.php');
}

//?潮???
function msg_post()
{
 if(window.flagWindow) flagWindow.focus();
 flagWindow=window.open('main_message.php?act=post','MessagePost','width=450,height=560,resizable=1,toolbar=no,scrollbars=auto');
}
//瑼?銝?
function download()
{
 if(window.flagWindow) flagWindow.focus();
 flagWindow=window.open('main_download_list.php','DownLoad','width=780,height=560,resizable=1,toolbar=no,scrollbars=yes');
}
//閮蝞∠?
function msg_manage()
{
 if(window.flagWindow) flagWindow.focus();	
 flagWindow=window.open('main_mlist.php','MessageManage','width=800,height=560,resizable=1,toolbar=no,scrollbars=yes');
}
//隤啣蝺?
function msg_online()
{
 if(window.flagWindow) flagWindow.focus();	
 flagWindow=window.open('main_online.php','MessagePost','width=450,height=560,resizable=1,toolbar=no,scrollbars=auto');
}
function msg_online_withoutlogin()
{
 if(window.flagWindow) flagWindow.focus();	 
 flagWindow=window.open('main_online_withoutlogin.php','MessagePost','width=450,height=560,resizable=1,toolbar=no,scrollbars=auto');
}

//?????
function state()
{
 if(window.flagWindow) flagWindow.focus();
 flagWindow=window.open('main_state.php','MessagePost','width=450,height=560,resizable=1,toolbar=no,scrollbars=auto');
}

//閮蝞∠?
function web()
{
 if(window.flagWindow) flagWindow.focus();	
 flagWindow=window.open('main_teachers_web.php','MessageManage','width=800,height=560,resizable=1,toolbar=no,scrollbars=yes');
}

//?餃撽?
function checkdata() {
sFlag=true
if (document.form1.log_id.value=='')
  {
  	document.form1.log_id.focus()
  	sFlag=false
  }
 if (document.form1.log_pass.value=='')
  {
  	document.form1.log_pass.focus()
  	sFlag=false
  }
if (sFlag)
  {
  return sFlag
  }else{
  alert('撣唾?撖Ⅳ銝?舐征?踝?')
  return sFlag
  }
}

 if(window.flagWindow) flagWindow.focus();

<?php
if ($_GET['act']=='login') echo "document.form1.log_id.focus();";
?>

</Script>
