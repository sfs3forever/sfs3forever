<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');
ini_set( 'date.timezone', 'Asia/Taipei' );

if ($IS_UTF8==0) mysql_query("SET NAMES 'utf8'");

//$_SESSION['MSN_LOGIN_ID'] ?餃撣唾?
if ($_SESSION['MSN_LOGIN_ID']!="") {
//check online 撠撌梁??餃鞈??湔
   $my_ip=$_SERVER['REMOTE_ADDR'];
   $onlinetime=date("Y-m-d H:i:s");
   $query="select ifonline from sc_msn_online where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
   $result=mysql_query($query);
   if (mysql_num_rows($result)) {
   	list($ifonline)=mysqli_fetch_row($result);
   	 //?臬撌脰◤隤文?粹蝺?
   	 if ($ifonline==0) {
   	  $query="update sc_msn_online set lasttime='".date("Y-m-d H:i:s")."',ifonline=1 where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
   	 }else{
   	  $query="update sc_msn_online set lasttime='".date("Y-m-d H:i:s")."' where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
     }
    mysql_query($query);
   }else{
   	if ($IS_UTF8==0) {
   	 mysql_query("SET NAMES 'latin1'");
   	 $name=big52utf8(get_teacher_name_by_id($_SESSION['MSN_LOGIN_ID']));
     mysql_query("SET NAMES 'utf8'");
    } else {
     $name=get_teacher_name_by_id($_SESSION['MSN_LOGIN_ID']);
    }
   	$query="insert into sc_msn_online (teach_id,name,from_ip,lasttime,onlinetime,ifonline,state) values ('".$_SESSION['MSN_LOGIN_ID']."','".$name."','".$my_ip."','".$onlinetime."','".$onlinetime."','1','銝?')";
    if (!mysql_query($query)) {
     echo "query=".$query;
     exit;
    }
   }
}   
   $query="update sc_msn_online set ifonline=0 where (now()-lasttime)>60";
   mysql_query($query);
   
//銝?鈭箸
$query="select count(*) from sc_msn_online where ifonline=1";
$result=$CONN->Execute($query);
$online=$result->rs[0];
 
//蝘犖閮 ?嗾??
if ($_SESSION['MSN_LOGIN_ID']!="") {
 $query="select count(*) from sc_msn_data where to_id='".$_SESSION['MSN_LOGIN_ID']."' and ifread=0";
 $result=$CONN->Execute($query);
 $message=$result->rs[0];
 if ($message>0) {
   $query="select sound,sound_kind from sc_msn_online where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
 	 $result=$CONN->Execute($query);
   $sound=$result->rs[0];
   $sound_kind=$result->rs[1];
 }
}

?>
<html>
<head>
<META HTTP-EQUIV="Expires" CONTENT="Fri, Jan 01 1900 00:00:00 GMT">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<title>閮</title>
<style>
A:link {font-size:9pt;color:#ff0000; text-decoration: none}
A:visited {font-size:9pt;color: #ff0000; text-decoration: none;}
A:hover {font-size:9pt;color: #ffff00; text-decoration: underline}
</style>
<Script language="JavaScript">
function loader()
{
 flagWindow=window.open('main_message.php?act=read','MessageRead','width=420,height=480,resizable=1,toolbar=no,scrollbars=auto');
 window.location="main_check.php";
}
function go()
{
location.replace('./main_check.php');
}
</Script>
</head>
<body bgcolor="#ccccff" leftmargin="0" topmargin="0" onload="setTimeout('go()',15000)">
<table border="0" cellspacing="0" width="100%" cellpadding="2" valign="center">
	<tr>
		<td style="color:#FF0000;font-size:8pt" align="right" valign="center">
    <?php
	  if ($message>0)
	   {
	  ?>
		<a href="javascript:loader()">
		<img src="./images/msg.gif" border="0" align="absmiddle">閮(<?php echo $message;?>)
		</a>
		<?php
		} else {
			echo $online."鈭箇??;
    }
    ?>
		</td>
	</tr>
</table>
</body>
<?php
 if ($message>0 and $sound) {
?>
 <bgsound src="./images/<?php echo $sound_kind?>.wav" loop="1">
 <?php
  }
 ?>

</html>