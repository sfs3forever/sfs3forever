<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

	//閮剖?銝??頝臬?
	$img_path = "photo/teacher";

?>
<head>
	 <title>?∪?MSN-?豢??潮??舐?撠情</title>
</head>
<?php
if (!isset($_SESSION['MSN_LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}

$form_name=$_GET['form_name'];
$item_name=$_GET['item_name'];
$selected_text=$_GET['selected_text'];


//???【d
// ====================================================================
$POST_KIND=array("","?⊿","?葦?潔蜓隞?,"銝颱遙","?葦?潛???,"蝯","撠葦","撠遙?葦","撖衣??葦","閰衣?葦","隞??/隞?玨?葦","?潔遙?葦","?瑕","霅瑕ㄚ","霅西?","撌亙?");
?>
<form name="form0" method="post" action="<?php echo $_SERVER['php_self']?>">
<table border="0" cellspacing="0" width="100%" bgcolor="#FFFFFF" bordercolor="#FFFFFF" style="border-collapse:collapse">
<tr>
 <td style="color:#FF0000">
 	???桃祟?豢?隞?<input type="text" size="10" name="master_subjects" value="<?php echo $_POST['master_subjects'];?>">
 	<input type="button" value="蝭拚" onclick="document.form0.submit()"><font size="2" color="#000000">(隢撓?亦??桀,憒??????...嚗頛詨???瑕??)</font>
 
 </td>
</tr>
</table>
</form>
<table border="0" cellspacing="0" width="100%" bgcolor="#FFFFFF" bordercolor="#FFFFFF" style="border-collapse:collapse">
<tr>
 <td align="left" style="color:blue">
 	禮隢???潮??舐?撠情嚗?
 <?php
 if ($_GET['email']==1) echo "?芾身摰?E-mail靽∠拳?瘜??";
 ?>
  <br>
  <input type="button" value="?鞈?" onclick="select_item()">
	<input type="button" value="?券" onclick="check_select_all()">
  <input type="button" value="?券銝" onclick="check_disable()">
</td>
</tr>
 <form name="form1" method="post" action="<?php echo $_SERVER['php_self']?>" onsubmit="return false">
<tr>
<td colspan="2">
 <table border="0" cellspacing="0" width="100%" bordercolor="#FFFFFF" style="border-collapse:collapse">
<?php
if ($_POST['master_subjects']=="") {
//靘?亙?敺???
for ($kind=1;$kind<=count($POST_KIND);$kind++) {
 $i=0; //蝝?憿鈭箸
 $query="select a.teacher_sn,c.teach_id,c.name from teacher_post a,teacher_title b,teacher_base c where a.post_kind=".$kind." and a.teach_title_id=b.teach_title_id and a.teacher_sn=c.teacher_sn and c.teach_condition=0 order by b.room_id,b.rank";
 if ($kind==6) {
 	$query="select a.teacher_sn,a.class_num,c.teach_id,c.name from teacher_post a,teacher_title b,teacher_base c where a.post_kind=".$kind." and a.teach_title_id=b.teach_title_id and a.teacher_sn=c.teacher_sn and c.teach_condition=0 order by a.class_num";
 }
 //echo $query;
 $result=$CONN->Execute($query);
 if ($result->RecordCount()>0) {
 	?>
  <tr><td colspan="5" style="color:#800000"><b>?瑕嚗? <?php echo $POST_KIND[$kind]; ?> </b></td></tr>
 	<tr>
  		<td>
  			<table border="0">
 	<?php
  while ($row=$result->fetchRow()) {
  	$email=get_teacher_email_by_id($row['teach_id']);
  	$f_color=($_GET['email']==1 and $email=="")?"#CCCCCC":"blue";
  	?>
  	
  		
  		<?php
  			$i++;  if ($i%7==1) echo "<tr>";
				$teacher_sn=$row['teacher_sn'];
       ?>
        
        <td style="font-size:10pt" align="center">
        	<table border="1"  style="border-collapse:collapse">
        		<?php
        		/*
        		<tr>
        			<td align="center" width="130" height="180">
        				<?php
        				 //?啣?抒?    	
    						if (file_exists($UPLOAD_PATH."/$img_path/".$teacher_sn)&& $teacher_sn<>'') {
    							echo "<img src=\"".$UPLOAD_URL."$img_path/$teacher_sn\" width=\"120\"><br>";
								} else {
									echo "<font size=2>瘝??抒?</font><br>";
								}
        				?>
        			</td>
        		</tr>
        		*/
        		?>
        		<tr>
        			<td align="center" style="font-size:11pt;color:<?php echo $f_color;?>">
        				<input type="checkbox" name="sendid[]" value="<?php echo $row['teach_id'];?>" style="width:9pt;height:9pt" <?php if ($_GET['email']==1 and $email=="") echo "disabled";?>>
        				
        				<?php
  				        if ($kind==6 and $row['class_num']>0) echo $row['class_num']-600;
        					echo big52utf8($row['name']);
        				?>
        				
        			</td>
        		</tr>
        	</table>
         </td>
        	<?php
      		if ($i%7==0) echo "</tr>";
 	}// end while
	?> 
		</table>
  	</td>
  </tr>
  <?php
 	
 } // end if $result->RecordCount() 
 
} // end for
//靘??桃祟?豢?撣?
}else{
 $master_subjects=iconv("UTF-8", "big5",$_POST['master_subjects']);
 $query="select a.teacher_sn,c.teach_id,c.name from teacher_post a,teacher_title b,teacher_base c where c.master_subjects like '%".$master_subjects."%' and a.teach_title_id=b.teach_title_id and a.teacher_sn=c.teacher_sn and c.teach_condition=0 order by c.name";
 $result=$CONN->Execute($query);
 if ($result->RecordCount()>0) {
 	?>
 	<tr>
  		<td>
  			<table border="0">
 	<?php
  while ($row=$result->fetchRow()) {
  	$email=get_teacher_email_by_id($row['teach_id']);
  	$f_color=($_GET['email']==1 and $email=="")?"#CCCCCC":"blue";
  	?>
  	
  		
  		<?php
  			$i++;  if ($i%7==1) echo "<tr>";
				$teacher_sn=$row['teacher_sn'];
       ?>
        
        <td style="font-size:10pt" align="center">
        	<table border="1"  style="border-collapse:collapse">
        		<?php
        		/*
        		<tr>
        			<td align="center" width="130" height="180">
        				<?php
        				 //?啣?抒?    	
    						if (file_exists($UPLOAD_PATH."/$img_path/".$teacher_sn)&& $teacher_sn<>'') {
    							echo "<img src=\"".$UPLOAD_URL."$img_path/$teacher_sn\" width=\"120\"><br>";
								} else {
									echo "<font size=2>瘝??抒?</font><br>";
								}
        				?>
        			</td>
        		</tr>
        		*/
        		?>
        		<tr>
        			<td align="center" style="font-size:11pt;color:<?php echo $f_color;?>">
        				<input type="checkbox" name="sendid[]" value="<?php echo $row['teach_id'];?>" style="width:9pt;height:9pt" <?php if ($_GET['email']==1 and $email=="") echo "disabled";?>>
        				
        				<?php
  				        if ($kind==6 and $row['class_num']>0) echo $row['class_num']-600;
        					echo big52utf8($row['name']);
        				?>
        				
        			</td>
        		</tr>
        	</table>
         </td>
        	<?php
      		if ($i%7==0) echo "</tr>";
 	}// end while
	?> 
		</table>
  	</td>
  </tr>
  <?php 
 }// end if $result->RecordCount()
 
} // end if else

?>  	

</table>
</td>
</tr>
<tr>
	<td colspan="2">   
<input type="button" value="?鞈?" onclick="select_item()">
<input type="button" value="?券" onclick="check_select_all()">
<input type="button" value="?券銝" onclick="check_disable()">
</td>
</tr>
 </form>
</table>

 <script language="javascript">
function select_item(){
 var strSelect='';
 var i =0;
 while (i < document.form1.elements.length)  {
  var e = document.form1.elements[i];
  if(e.checked==true && e.name.substr(0,6)=='sendid') strSelect+=";"+e.value;
	i++;
 }
 if (strSelect) {
  strSelect=strSelect.substr(1,strSelect.length-1);
 }
 opener.document.<?php echo $form_name;?>.<?php echo $item_name;?>.value=strSelect;
 window.close();
}

function check_old() {
 var checked_str=opener.document.<?php echo $form_name;?>.<?php echo $item_name;?>.value;
 check_student=checked_str.split(';');
 for(var i=0; i<check_student.length; i++) {
   for (var j=0; j<document.form1.elements.length;j++) {
    if (document.form1.elements[j].value==check_student[i]) {
      document.form1.elements[j].checked=true;
    }
   }
 }
}

function check_disable()
{
	var i =0;
 	while (i < document.form1.elements.length)  {
    if (document.form1.elements[i].name.substr(0,6)=='sendid') {
    	document.form1.elements[i].checked=false;
    }  
  	i++;
  } //end while
}

function check_select_all()
{
	var i =0;
 	while (i < document.form1.elements.length)  {
    if (document.form1.elements[i].name.substr(0,6)=='sendid') {
    	if (document.form1.elements[i].disabled==false) document.form1.elements[i].checked=true;
    }  
  	i++;
  } //end while
}


check_old();

</script>
