<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

mysql_query("SET NAMES 'utf8'");

if (!isset($_SESSION['MSN_LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}

$set=($_POST['set']=='')?'my_msg':$_POST['set'];

//??鈭?日?
if ($_POST['act']=='del') {
 //?芷摮???
 if ($set=='my_pic') {
  foreach($_POST['id'] as $id) {
     	$query="select * from sc_msn_board_pic where id='$id'"; 
 		 	$result=mysqli_query($conID, $query);
  		$row=mysqli_fetch_array($result,1);
  		  //蝮桀?
  		  $a=explode(".",$row['filename']);
  	   	$filename_s=$a[0]."_s.".$a[1];
  		 unlink($UPLOAD_PIC.$row['filename']);
       unlink($UPLOAD_PIC.$filename_s);
			$query="delete from sc_msn_board_pic where id='$id'";
  		mysqli_query($conID, $query);
  } // end foreach
 //?芸隞?
 } else {
  foreach($_POST['id'] as $id) {
    	$query="select * from sc_msn_data where id='$id'"; //銝??idnumber , 銝撠??臬蝯血?鈭箸?, ??? ?dnumber, ?嗅?銋???銝??獢?
 		 	$result=mysqli_query($conID, $query);
  		$row=mysqli_fetch_array($result,1);
  		if ($row['data_kind']==1 or $row['data_kind']==2) {
  	 	  //?芷??
   		  delete_file ($row['idnumber'],$row['to_id']);
   	  }
			$query="delete from sc_msn_data where id='$id'";
  		mysqli_query($conID, $query);
  } // end foreach 
 } // end if else $_POST['set']
 
   
} // end if del



switch ($set) {
 case 'my_msg':  //?乩犖蝯行?????
  $query="select * from sc_msn_data where to_id='".$_SESSION['MSN_LOGIN_ID']."'  and data_kind=1 order by post_date desc";
 break;
 case 'my_msg_post':  //?????
  $query="select * from sc_msn_data where teach_id='".$_SESSION['MSN_LOGIN_ID']."' and data_kind=1 order by post_date desc";
 break;
 case 'my_file':  //??鈭怎?瑼?
  $query="select * from sc_msn_data where teach_id='".$_SESSION['MSN_LOGIN_ID']."' and to_id='' and data_kind=2 order by post_date desc";
 break;
 case 'my_ann':  //????
  $query="select * from sc_msn_data where teach_id='".$_SESSION['MSN_LOGIN_ID']."' and to_id='' and data_kind=0 order by post_date desc";
 break;
 case 'my_pic':  //??摮???
  $query="select * from sc_msn_board_pic where teach_id='".$_SESSION['MSN_LOGIN_ID']."' order by stdate desc";
 break;
}

$result=mysqli_query($conID, $query);

$IF_READ[0]="-";
$IF_READ[1]="已讀取";


?>
<html>
<head>
<META HTTP-EQUIV="Expires" CONTENT="Fri, Jan 01 1900 00:00:00 GMT">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<title>蝞∠???閮</title>
</head>
<body>
<form name="form1" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
<input type="hidden" name="act" value="<?php echo $_POST['act'];?>">
<input type="hidden" name="set" value="<?php echo $_POST['set'];?>">
<table border="0">
	<tr>
		<td>
			<table border="1" style="border-collapse:collapse" bordercolor="#000000">
			 <tr>
			  <td bgcolor="#FFCCFF" style="font-size:10pt;color:#0000FF">蝘犖??/td>
			 </tr>
			</table>
		</td>
		<td style="font-size:10pt">	
			<input type="radio" name="set" value="my_msg" onclick="document.form1.submit()"<?php if ($set=='my_msg') echo " checked";?>>?乩犖蝯行???
			<input type="radio" name="set" value="my_msg_post" onclick="document.form1.submit()"<?php if ($set=='my_msg_post') echo " checked";?>>?策?乩犖??&nbsp;&nbsp;?
		</td>
		<td style="font-size:10pt">
			<table border="1" style="border-collapse:collapse" bordercolor="#000000">
			 <tr>
			  <td bgcolor="#FFCCFF" style="font-size:10pt;color:#0000FF">?祇???/td>
			 </tr>
			</table>
		</td>
		<td style="font-size:10pt">
			<input type="radio" name="set" value="my_file" onclick="document.form1.submit()"<?php if ($set=='my_file') echo " checked";?>>瑼?
			<input type="radio" name="set" value="my_ann" onclick="document.form1.submit()"<?php if ($set=='my_ann') echo " checked";?>>?∪閮
			<input type="radio" name="set" value="my_pic" onclick="document.form1.submit()"<?php if ($set=='my_pic') echo " checked";?>>?餃???

			<input type="button" style="font-size:10px" value="??" name="B3" onClick="window.close()">
		</td>
 </tr>
</table>
<?php
//?, ?餃???
if ($set=='my_pic') {
?>
	<table border="1" cellpadding="0" cellspacing="0" width="100%" bordercolor="#800000" style="border-collapse:collapse">
    <tr>
      <td width="100" bgcolor="#FFCCCC" style="font-size:10pt" align="center">靘</td>
      <td width="100" bgcolor="#FFFFCC" style="font-size:10pt" align="center">韏?/td>
      <td width="100" bgcolor="#FFCCCC" style="font-size:10pt" align="center">餈?/td>
      <td bgcolor="#CCFFCC" style="font-size:10pt" align="center">閮?批捆</td>
      <td width="50" bgcolor="#FFCCCC" style="font-size:10pt" align="center">
       			<input type="button" style="font-size:10px;color:#FF0000;cursor:hand" value="?芷" onClick="if (confirm('?函Ⅱ摰?: \?芷?暸????')) { document.form1.act.value='del';document.form1.submit(); } ">
      </td>
    </tr>

<?php
 while ($row=mysqli_fetch_array($result,1)) {
 	$teach_id_name=get_name_state($row['teach_id']);
 	?>
    <tr>
      <td width="100" style="font-size:10pt" align="center"><?php echo $teach_id_name[0];?></td>
      <td width="100" style="font-size:10pt" align="center"><?php echo $row['stdate'];?></td>
      <td width="100" style="font-size:10pt" align="center"><?php echo $row['enddate'];?></td>
      <td style="font-size:10pt" align="center">
       <?php
         $a=explode(".",$row['filename']);
  	   	 $filename_s=$a[0]."_s.".$a[1];
  	   	 if ($a[1]=='swf') {
  	   	 	?>
  	   	 	<embed src="<?php echo $UPLOAD_PIC_URL.$row['filename'];?>" width=240 height=180 type=application/x-shockwave-flash Wmode="transparent"><br>
  	   	 	<?php
  	   	 } else {
  	   	  ?>
  	   	  <img src="<?php echo $UPLOAD_PIC_URL.$filename_s; ?>" border="0"><br>
  	   	  <?php
  	   	 }
  	   	 echo $row['file_text'];
       ?>
      </td>
      <td width="50" align="center"><input type="checkbox" name="id[]" value="<?php echo $row['id'];?>"></td>
    </tr>
 	
  <?php
 } // end while
} else { //?摮?
	?>
	<table border="1" cellpadding="0" cellspacing="0" width="100%" bordercolor="#800000" style="border-collapse:collapse">
    <tr>
      <td width="100" bgcolor="#FFFFCC" style="font-size:10pt" align="center">?交?</td>
      <td width="100" bgcolor="#FFCCCC" style="font-size:10pt" align="center">靘</td>
      <td width="100" bgcolor="#FFCCCC" style="font-size:10pt" align="center">?喟策</td>
      <td bgcolor="#CCFFCC" style="font-size:10pt" align="center">閮?批捆</td>
      <td width="50" bgcolor="#FFCCCC" style="font-size:10pt" align="center">撌脤霈</td>
      <td width="50" bgcolor="#FFCCCC" style="font-size:10pt" align="center">
       			<input type="button" style="font-size:10px;color:#FF0000;cursor:hand" value="?芷" onClick="if (confirm('?函Ⅱ摰?: \?芷?暸????')) { document.form1.act.value='del';document.form1.submit(); } ">
      </td>
    </tr>

	<?php
 while ($row=mysqli_fetch_array($result,1)) {
 //list($id,$idnumber,$teach_id,$to_id,$post_date,$last_date,$data,$ifread)=$row;
  $teach_id_name=get_name_state($row['teach_id']);
  $to_id_name=get_name_state($row['to_id']);

  $data=AddLink2Text($row['data']);
  
  //瑼Ｘ?臬??瑼?
  $query_file="select filename,filename_r from sc_msn_file where idnumber='".$row['idnumber']."'";
  $result_file=mysql_query($query_file);
  
  ?>
    <tr>
      <td width="100" style="font-size:10pt" align="center"><?php echo $row['post_date'];?></td>
      <td width="100" style="font-size:10pt" align="center"><?php echo $teach_id_name[0];?></td>
      <td width="100" style="font-size:10pt" align="center"><?php echo $to_id_name[0];?></td>
      <td style="font-size:10pt"><?php echo $data;?>
			<?php
			  if (mysqli_num_rows($result_file)) {
			 ?>
			  <br>
      	<font style="color:#0000FF">?祈??臬??嚗???
      		<?php 
      		while ($row_file=mysqli_fetch_row($result_file)) {
      		 list($filename,$filename_r)=$row_file;
      		 echo "<br>".$filename_r;
      		 ?>
      ?<a href="main_download.php?set=<?php echo $filename;?>">銝?</a>	
      	<?php
      	   } // end while
      	   echo "</font>";
         } // end if 
      	?>
      </td>
      <td width="50" style="font-size:9pt" align="center">
      	<?php
      	 if ($set=='my_msg') {
      	   ?>
      	    <input type="button" value="??" style="font-size:9pt" onclick="relay(<?php echo $row['idnumber'];?>)">
      	   <?php
      	 } else { 
      	   echo $IF_READ[$row['ifread']];
      	 }
      	?>
      </td>
      <td width="50" style="font-size:10pt" align="center"><input type="checkbox" name="id[]" value="<?php echo $row['id'];?>"></td>
    </tr>
  
 <?php
 } // end while
} // end if else $set==
?>
  </table>
</form>
</body>
</html>
<Script language="JavaScript">
	
	top.moveTo(0,0);
	
	function confirm_delete() {
    var is_confirmed = confirm('?函Ⅱ隤? :\n?芷?暸???臬?嚗?);
    if (is_confirmed) {
     return true;
    }
    return false;
   }	
   
  function relay(idnumber)
  {
   flagWindow=window.open('main_message.php?act=read&set='+idnumber,'MessageRead','width=420,height=480,resizable=1,toolbar=no,scrollbars=auto');
  }
</Script>
