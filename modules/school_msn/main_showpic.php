<?php
include_once ('config.php');
include_once ('my_functions.php');

$Now=date("Y-m-d");

mysql_query("SET NAMES 'utf8'");


//?芷撌脤???
$query="select * from sc_msn_board_pic where enddate<'$Now' and show_off=0";
$res=mysqli_query($conID, $query);
while ($row=mysqli_fetch_array($res,1)) {
    unlink($UPLOAD_PIC.$row['filename']);
     $query="delete from sc_msn_board_pic where filename='".$row['filename']."'";
     mysqli_query($conID, $query);
}

$query="select * from sc_msn_board_pic where stdate<='$Now' and enddate>='$Now' and show_off=0 limit 1";
$res=mysqli_query($conID, $query);
if (mysqli_num_rows($res)==0) {
	$query="update sc_Msn_board_pic set show_off=0";
	mysqli_query($conID, $query);
	?>
  <Script Language="javascript">
   window.location.href='main_showdata.php';
  </Script>

  <?php
  exit();
} else {
  $row=mysqli_fetch_array($res,1);
  $query="update sc_msn_board_pic set show_off=1 where id='".$row['id']."'";
  mysqli_query($conID, $query);
}

//header('Content-type: text/html; charset=utf-8');

$SEC=$row['delay_sec']*1000;

?>
<html> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<Meta http-equiv="Page-Enter" content="blendTrans(Duration=3.0)"> 
<title>?餃???撅內</title> 
</head> 
<body bgcolor="#000000" style="overflow: hidden">

<table height="100%" width="100%">
 <tr>
  <td valign="center" align="center" bgcolor="#000000">
	<table border="0" width="100%">
	<tr>
	 <td align="center" valign="center">
	 <?php
	 if (substr($row['filename'],-3)=='swf' or substr($row['filename'],-3)=='wmv') {
	 ?>
	 <embed src="<?php echo $UPLOAD_PIC_URL.$row['filename'];?>" width=800 height=600 type=application/x-shockwave-flash Wmode="transparent">
		<?php
	} else {
		?>
	 	<img src="<?php echo $UPLOAD_PIC_URL.$row['filename'];?>" border="0">
  <?php
   }
  ?>	   		   		
	 </td>
		</tr>
		<tr>
	 		<td align="center" style="font-size:28pt" style="color:#FFFFFF;font-family:璅扑擃?><?php echo $row['file_text'];?></td>
		</tr>
	</table> 
  
  </td>
  </tr>	
 </table> 
</body> 
</html> 

<Script language="JavaScript">

 var s=function () {  window.location.href='main_showpic.php';   }
  //撱園憭??銵?甈?
  setTimeout(s, <?php echo $SEC;?>);

</Script>

 