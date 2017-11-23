<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

ini_set('max_execution_time', 0); //?湔?瑁???


if (!isset($_SESSION['MSN_LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}
//???葦蝑????mail
mysql_query("set names 'latin1';");
$query="select a.teacher_sn,a.name,b.email,b.email2,b.email3 from teacher_base a,teacher_connect b where a.teacher_sn=b.teacher_sn and a.teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
$result=mysql_query($query);
list($teacher_sn,$MYNAME,$email,$email2,$email3)=mysqli_fetch_row($result);
$MYEMAIL=($email=="")?$email2:$email;
if ($MYEMAIL=="") $MYEMAIL=$email3;

$MYNAME=iconv("big5","utf-8",$MYNAME);


//?潮閮 *******************************************************
if ($_GET['act']=='post') {


$m_to=(isset($_GET['set']))?$_GET['set']:"";


?>
<html>
<head>
<title>?潮???/title>
<style>
A:link {font-size:9pt;color:#ff0000; text-decoration: none}
A:visited {font-size:9pt;color: #ff0000; text-decoration: none;}
A:hover {font-size:9pt;color: #ffff00; text-decoration: underline}
td {font-size:10pt}
</style>

<script src="./include/jquery.js" type="text/javascript"></script>
<script src='./include/jquery.MultiFile.js' type="text/javascript" language="javascript"></script>
<script type="text/javascript" src="../../javascripts/JSCal2-1.9/src/js/jscal2.js"></script>
<script type="text/javascript" src="../../javascripts/JSCal2-1.9/src/js/lang/b5.js"></script>
<link type="text/css" rel="stylesheet" href="../../javascripts/JSCal2-1.9/src/css/jscal2.css">

<script language="javascript">
function choice()
{
	if (document.form1.m_to.value=='') {
    document.form1.m_to.value=document.form1.set.value;
  }else{
    document.form1.m_to.value=document.form1.m_to.value+";"+document.form1.set.value;
  }
}

function b_submit() {
	
	var save=1;
	 
	if (document.form1.msg.value=='') {
	  alert('?典??撓?亙摰?!');
	  document.form1.msg.focus();
	  save=0;
    return false;
	}
	 
	 
	//蝘犖閮
	if (document.form1.option1.value==1) {
	  if (document.form1.m_to.value=='') {
  		alert('瘝?頛詨閮?交撠情?董??');
  		document.form1.m_to.focus();
    	save=0;
    	return false;	    
	  }	
	}


	//?餃???
	if (document.form1.option1.value==3) {
	  if (document.form1.stdate.value=='') {
  		alert('瘝?頛詨韏瑕??交?嚗?);
    	save=0;
    	return false;	    
	  }	
	  if (document.form1.enddate.value=='') {
  		alert('瘝?頛詨蝯??交?嚗?);
    	save=0;
    	return false;	    
	  }	
	  if (document.form1.delay_sec.value=='' || document.form1.delay_sec.value>300 || document.form1.delay_sec<5) {
  		alert('隢撓?亙?蝷箇??賂? ( 5蝘300蝘???)');
    	save=0;
    	return false;	    
	  }	
	  if (document.form1.pic_file.value=='') {
  		alert('瘝??豢?瑼?嚗?);
    	save=0;
    	return false;	    
	  }	

	}
 //蝣箄?鞈??賣?頛詨
 if (save) {	
	wait_post.style.display="none";
  wait.style.display="block";
  document.form1.act.value='save';
  document.form1.submit();
 }
    
} // end function

</script>
</head>
<body bgcolor="#FFFFFF">

<div align="center">
  <center>
<form name="form1" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>" enctype="multipart/form-data">
	<input type="hidden" name="act" value="">
	<input type="hidden" name="option1" value="0">
	<input type="hidden" name="email" value="0">

  <font color="#FF0000">?潮???/font>

  <table border="1" cellpadding="3" cellspacing="0" width="100%" bordercolorlight="#FFFFFF" bordercolordark="#FFFFFF" bordercolor="#800000">
		<tr>
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">閮憿</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
			<input value="0" type="radio" name="data_kind" onclick="chkpublic();">?祇? 
			<input value="1" CHECKED type="radio" name="data_kind" onclick="chkprivate();document.form1.email.value='0';">蝘犖 
			<?php
			 if ($_SESSION['is_email'] and $SMPTHost!="") {
			 ?>
    		<input value="4" type="radio" name="data_kind" onclick="chkemail();document.form1.email.value='1';">E-mail
		 	 <?php
		   } // end if
			 if ($_SESSION['is_upload']) {
				?>
				<input value="2" type="radio" name="data_kind" onclick="chkfileshare();">瑼??澈
				<?php
		   } // end if
			 if ($_SESSION['is_showpic']) {
				?>
			 <input value="3" type="radio" name="data_kind" onclick="chkpic();" ><font color=#FF0000>?餃??(??</font> 	
				<?php
		   } // end if
			 ?>
			</td>
		</tr>
		<tr id="Myfolder" style="display:none">
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">瑼?憿</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
				<select size="1" name="folder">
				<?php
				mysql_query("set names 'utf8';");
				$query="select * from sc_msn_folder where idnumber!='private' order by foldername";
				$result=mysql_query($query);
				while ($row=mysql_fetch_array($result)) {
	       ?>
	       <option value="<?php echo $row['idnumber'];?>"><?php echo $row['foldername'];?></option>
	       <?php			 
				}
				?>
			</select>
			</td>
		</tr>

		<tr id="Myprivate" style="display: table-row">
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">?交撠情</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
			<input tabIndex="1" type="text" name="m_to" value="<?php echo $m_to;?>">
			
			<input type="button" style="font-size:10px" value="?冽撣唾?" onclick="OpenTeacherID()" title="?撣唾?">
			??
			<img style="cursor:pointer" border="1" width="16" height="16" src="./images/online.jpg" onclick="window.location='main_online.php'" title="?曹?蝺?銵券??>
			</td>
		</tr>
		<tr id="Mypublic" style="display: table-row">
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">
			撅內??</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
			<input value="3" type="radio" name="lasttime">3憭?
			<input value="5" type="radio" name="lasttime">5憭?
			<input value="7" type="radio" name="lasttime" CHECKED>7憭?
			<input value="10" type="radio" name="lasttime">10憭?
			<input value="14" type="radio" name="lasttime">14憭?
			<input value="30" type="radio" name="lasttime">30憭?/td> 
		</tr>
		<tr id="email_subject" style="display:none">
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">
			靽∩辣璅?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt">
			<input type="text" name="email_subject" size="30"> 
			</td>			
		</tr>

		<tr>
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">
			閮?批捆</td>
			<td bgColor="#ccffcc" style="font-size: 10pt">
			<textarea tabIndex="2" rows="6" cols="36" name="msg"></textarea> 
			</td>
			
		</tr>

		<tr id="Myfile" style="display: table-row">
			<td style="font-size: 10pt" bgColor="#ffffcc">
			??瑼?</td>
		
			<td bgColor="#ccffcc" style="font-size: 10pt">
				<table border="0" width="100%">
					<tr>
						<td><input type="file" class="multi" name="thefile[]"></td>
						<td align="left"><input type="button" value="?甇斗?" name="B1"></td>
					</tr>
				</table>		
			</td>
		</tr>
  	<tr id="M_public" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#FF0000">
				1.甇文???舀??具?SN????扯??臭漱瘚?雿葉嚗誑?脣??恍?撘??整?br>
				2.?⊥?∪IP??阡?賜?閬迨閮嚗?憒??舀憭??餉嚗?敹??餃??????胯?br>
		</tr>
  	<tr id="M_private" style="display: table-row">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF">
				1.?典隞亙??鈭箄??舐策?∪???瑕?隞??嗅?隞?交?SN?喳?交?啗??胯?br>
				2.?潮?閮?臭誑憭曉葆瑼?嚗?銝?冗撣嗆?獢銝‵撖怨??臬摰對??隞亙遣霅啣閮?批捆銝剖‵?交?獢?隤芣???br>
				3.??憭批??輯???font color=red><?php echo $MAX_MB;?>MB</font></br>
				4.瘜冽?! ?祈??臬?靽?<font color=red><b><?php echo $PRESERVE_DAYS;?></b></font>憭?
			</td>
		</tr>
  	<tr id="M_email" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF">
				1.?典隞亙?-mail蝯行?抒??????br>
				2.?潮?E-mail?臭誑憭曉葆瑼?嚗?銝?冗撣嗆?獢銝‵撖怨??臬摰對??隞亙遣霅啣閮?批捆銝剖‵?交?獢?隤芣???br>
				3.??憭批?隢撠靽∠拳蝛粹?嚗?閬云憭扼?/font></br>
			</td>
		</tr>

  	<tr id="M_fileshare" class="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#FF00FF">
				1.隢?敹??嗥?瑼?憿, 隞乩噶?嗡?鈭箔?頛?摰寞??曉瑼???br>
				2.?臬??冗撣嗅???獢? 瘥?獢之撠??輯???font color=red><?php echo $MAX_MB;?>MB</font>??br>
				3.撅內???舀??刻??脣?閬?銝剖?嗾憭? 撅內??敺??舐瑼?銝??銝凋?頛瑼?.
			</td>
		</tr>	
  	<tr id="M_pic_sttime" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">???交?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" id="stdate" name="stdate" value="<?php echo date("Y-m-d");?>" size="10"></td>
					<script type="text/javascript">
					new Calendar({
  		    	inputField: "stdate",
   		    	dateFormat: "%Y-%m-%d",
    	    	trigger: "stdate",
    	    	bottomBar: true,
    	    	weekNumbers: false,
    	    	showTime: 24,
    	    	onSelect: function() {this.hide();}
		    	});
					</script>
		</tr>
  	<tr id="M_pic_endtime" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">蝯??交?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" id="enddate" name="enddate" value="<?php echo date("Y-m-d");?>" size="10"></td>
					<script type="text/javascript">
					new Calendar({
  		    	inputField: "enddate",
   		    	dateFormat: "%Y-%m-%d",
    	    	trigger: "enddate",
    	    	bottomBar: true,
    	    	weekNumbers: false,
    	    	showTime: 24,
    	    	onSelect: function() {this.hide();}
		    	});
					</script>		</tr>
  	<tr id="M_pic_delay" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">撱園蝘</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" name="delay_sec" value="5" size="2">蝘?/td>
		</tr>
		<tr id="M_pic_file" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">
			??瑼?
		  </td>
			<td>
			 <input type="file" name="pic_file">
			</td>
		</tr>
		
  	<tr id="M_pic" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF">
				1.??隤芣?, 隢?陛??br>
				2.?芾銝 jpg/png/gif/swf/wmv ?車憭?擃?獢?瑼?憭批??輯???font color=red><?php echo $MAX_MB;?>MB</font></br>
				3.撅內???頂蝯勗??芸??芷瑼?嚗??芾?靽???瑼???
			</td>
		</tr>
  </table>
  <table border="0">
   <tr id="wait" style="display:none;color:#FF0000">
    <td><br>鞈???銝? 隢???..</td>
   </tr>
  </table>
  <table border="0" width="100%" bgcolor="#FFFFFF">
    <tr id="wait_post"> 
     <td colspan="2" align="right">
       <input type="button" onclick="b_submit()" value="?" name="B1">&nbsp;<input type="button" value="??" name="B2" onclick="window.close()">
      </td>
    </tr>
  </table>
 </form>
  </center>
</div>

</body>
</html>
<script language="javascript">


document.form1.m_to.focus();
chkprivate();

function OpenTeacherID() {
	if (document.form1.email.value=='1') {
	 dialogID=window.open('main_teachers_id.php?form_name=form1&email=1&item_name=m_to&selected_text=document.form1.m_to.value','test','toolbar=no,left=0,top=0,screenX=0,screenY=0,height=400,width=760,resizable=1,scrollbars');
	} else {
   dialogID=window.open('main_teachers_id.php?form_name=form1&item_name=m_to&selected_text=document.form1.m_to.value','test','toolbar=no,left=0,top=0,screenX=0,screenY=0,height=400,width=760,resizable=1,scrollbars');
  }
 if(window.dialogID) dialogID.focus();
}

//蝘犖閮
function chkprivate() {
  Myprivate.style.display="table-row";
  Myfolder.style.display="none";
  Myfile.style.display="table-row";
  Mypublic.style.display="none";
  M_public.style.display="none";
  M_private.style.display=" table-row";
  M_fileshare.style.display="none";
  M_email.style.display="none";
  
  email_subject.style.display="none";
  
  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";

 document.form1.option1.value="1";
}

//E-mail
function chkemail() {
  Myprivate.style.display="table-row";
  Myfolder.style.display="none";
  Myfile.style.display="table-row";
  Mypublic.style.display="none";
  M_public.style.display="none";
  M_private.style.display="none";
  M_fileshare.style.display="none";
  M_email.style.display=" table-row";
  
  email_subject.style.display="table-row";
  
  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";

 document.form1.option1.value="4";
}


//?祇?閮
function chkpublic() {
  Mypublic.style.display="table-row";
  Myprivate.style.display="none";
  Myfolder.style.display="none";
  Myfile.style.display="none";
  M_public.style.display="table-row";
  M_private.style.display="none";
  M_fileshare.style.display="none";
  email_subject.style.display="none";
  
  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";
  M_email.style.display="none";
  
  document.form1.option1.value="0";
}

//瑼??澈
function chkfileshare() {
  Mypublic.style.display="table-row";
  Myprivate.style.display="none";
  Myfolder.style.display="table-row";
  Myfile.style.display="table-row";
  M_public.style.display="none";
  M_private.style.display="none";
  M_fileshare.style.display="table-row";
  email_subject.style.display="none"; 
  
  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";
  M_email.style.display="none";
  
  document.form1.option1.value="2";
}

function chkpic() {
  Mypublic.style.display="none";
  Myprivate.style.display="none";
  Myfolder.style.display="none";
  Myfile.style.display="none";
  M_public.style.display="none";
  M_private.style.display="none";  
  M_fileshare.style.display="none";
  email_subject.style.display="none";
  
  M_pic_sttime.style.display="table-row";
  M_pic_endtime.style.display="table-row";
  M_pic_delay.style.display="table-row";
  M_pic_file.style.display="table-row";
  M_pic.style.display="table-row";  
  M_email.style.display="none";
   document.form1.option1.value="3";
}

</script>
<?php
} // end if act=='post' ******************************************

if ($_GET['act']=='read') {
 //隞?UTF8 ?孵????
 mysql_query("SET NAMES 'utf8'");
	
 if ($_GET['set']=="") {
   $query="select id,idnumber,teach_id,post_date,data_kind,data,relay from sc_msn_data where to_id='".$_SESSION['MSN_LOGIN_ID']."' and ifread=0 order by post_date limit 0,1";
  } else {
    $query="select id,idnumber,teach_id,post_date,data_kind,data,relay from sc_msn_data where to_id='".$_SESSION['MSN_LOGIN_ID']."' and idnumber='".$_GET['set']."' order by post_date limit 0,1";
  }
 $result=mysql_query($query);
 //蝣箏祕??閮
 if ($row=mysqli_fetch_row($result)) {
	list($id,$idnumber,$teach_id,$post_date,$data_kind,$data,$relay)=$row;
  mysql_query("update sc_msn_data set ifread=1 where id=$id");	
  $name=get_name_state($teach_id);
  //?舀????閬?
  if ($relay) {
  	$query_relay="select post_date,data from sc_msn_data where idnumber='".$relay."' and teach_id='".$_SESSION['MSN_LOGIN_ID']."' and to_id='".$teach_id."'";
  	$result_relay=mysql_query($query_relay);
  	list($r_post_date,$r_data)=mysqli_fetch_row($result_relay);
  }
  //?臬??瑼?
  $query_file="select filename,filename_r from sc_msn_file where idnumber='".$idnumber."'";
  $result_file=mysql_query($query_file);
  ?>
<html>
<head>
<title>霈??鈭箄???/title>
</head>
<script src="./include/jquery.js" type="text/javascript"></script>
<script src='./include/jquery.MultiFile.js' type="text/javascript" language="javascript"></script>
<body>
 <form name="form1" method="post" action="main_message.php" onsubmit="return checkdata()" enctype="multipart/form-data">
  <input type="hidden" name="act" value="">
	<input type="hidden" name="m_to" value="<?php echo $teach_id;?>">
	<input type="hidden" name="relay" value="<?php echo $idnumber;?>">
	<input type="hidden" name="data_kind" value="1">
  <table border="1" cellpadding="3" cellspacing="0" width="100%" bordercolorlight="#FFFFFF" bordercolordark="#FFFFFF" bordercolor="#800000">
    <tr>
      <td width="41" bgcolor="#FFFFCC">?交?</td>
      <td  bgcolor="#CCFFCC"><?php echo $post_date ?></td>
    </tr>
    <tr>
      <td width="41" bgcolor="#FFFFCC">靘</td>
      <td  bgcolor="#CCFFCC"><?php echo $name[0];?>(<?php echo $teach_id;?>)</td>
    </tr>
    <tr>
      <td width="41" bgcolor="#FFFFCC">??</td>
      <td  bgcolor="#CCFFCC" style="font-size:10pt">
      	<?php
      	if ($relay) {
      	?>
      	<table border="1" cellpadding="5" cellspacing="0"  bordercolorlight="#FFFFFF" bordercolordark="#FFFFFF" bordercolor="#FFFFFF" width="100%">
         <tr>
           <td style="font-size: 9pt" bgcolor="#B5FFFF">
           	???php echo $r_post_date;?>,?刻牧:<br><?php echo nl2br($r_data);?>
          </td>
         </tr>
        </table>
        <br>	
        <?php
         } //end if relay
        ?>
      	<?php echo AddLink2Text(nl2br($data));?>
      </td>
    </tr>
    <?php
     if (mysql_num_rows($result_file)) {
     ?>
     <tr>
      <td width="41" bgcolor="#FFFFCC">??</td>
      <td bgcolor="#CCFFCC" style="font-size:10pt">?祉?閮???php mysql_num_rows($result_file);?>??瑼?<br>
      	<?php 
      	 while ($row_file=mysqli_fetch_row($result_file)) {
      	  list($filename,$filename_r)=$row_file;
      	  echo $filename_r;?>&nbsp;<a href="main_download.php?set=<?php echo $filename;?>">銝?</a><br>
      	  <?php
      	 } // end while
      	?>
      </td>
    </tr>
    
     <?
     }
    ?>    
  </table>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" bordercolorlight="#800000" bordercolordark="#FFFFFF" bordercolor="#FFFFFF">
    <tr>
      <td>?函???:</td>
    </tr>
    <tr>
      <td colspan='2'>
      <textarea rows="4" name="msg" cols="45"></textarea>
      </td>
    </tr>
    <tr id="Myfile" style="display:block">
			<td style="font-size: 10pt" valign='top' width='80'>??瑼?嚗?/td>
			<td style="font-size: 10pt">
				<table border="0" width="100%">
					<tr>
						<td><input type="file" class="multi" name="thefile[]"></td>
						<td align="left"><input type="button" value="?甇斗?" name="B1"></td>
					</tr>
				</table>		
			</td>
		</tr>
    <tr id='wait_post' style='display:block'>
       <td align="left" colspan='2'>
      <input type="button" onclick="b_submit()" value="?" name="B1">&nbsp;<input type="button" value="??" name="B2" onclick="window.close()">
      </td>
    </tr>
  	<tr>
			<td colspan='2' style="font-size: 10pt;color:#0000FF">
			隤芣?嚗?br>
				1.?潮?閮?臭誑憭曉葆瑼?嚗?銝?冗撣嗆?獢銝‵撖怨??臬摰對??隞亙遣霅啣閮?批捆銝剖‵?交?獢?隤芣???br>
				2.??憭批??輯???font color=red><?php echo $MAX_MB;?>MB</font></br>
				3.瘜冽?! 蝟餌絞?扯??航?潮?絲嚗?靽?<font color=red><b><?php echo $PRESERVE_DAYS;?></b></font>憭?
			</td>
		</tr>
		<tr id='wait' style='display:none'>
		  <td style='color:#FF0000' colspan='2'><br>閮??銝?..</td>
		</tr>
  </table>
</form>
</body>
</html>
 <Script>
 function b_submit() {
	if (document.form1.msg.value=='') {
	  alert('?典??撓?亙摰?!');
	  document.form1.msg.focus();
    return false;
	} else{
		wait_post.style.display="none";
  	wait.style.display="block";
  	document.form1.act.value='save';
  	document.form1.submit();
  }
 }
 

 
 </Script>
 
 <?php
 } // end if ($row=mysqli_fetch_row($result))
} // end if $_GET['act']=='read'


//?脣?閮 *******************************************************
if ($_POST['act']=='save') {

mysql_query("SET NAMES 'utf8'");


$data_kind=$_POST['data_kind'];

$datetime=date("Y-m-d H:i:s");
$m_from=$_SESSION['MSN_LOGIN_ID'];
$m_to=$_POST['m_to'];
$relay=$_POST['relay'];
$msg=$_POST['msg'];
$lasttime=$_POST['lasttime'];
$folder=$_POST['folder'];

//$data_kind 
/***
0 ?祇?閮(銝憭暹?)
1 蝘犖閮(?臬冗瑼?
2 瑼??澈(?臬冗瑼? 敹??豢?獢???
3 ?餃??? (敹冗瑼?
4 E-mail
***/

if ($data_kind=='4') {
	
	require_once('./include/PHPMailer/class.phpmailer.php');
	
	$mail = new PHPMailer(); // defaults to using php "mail()"
  $mail->CharSet = "UTF-8";
	//$mail->IsSendmail(); // telling the class to use SendMail transport

$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = $SMPTHost; // SMTP server
$mail->SMTPDebug  = 2;                     	// enables SMTP debug information (for testing)
                                           	// 1 = errors and messages
                                           	// 2 = messages only
$mail->SMTPAuth   = $SMPTAuth;              // enable SMTP authentication
$mail->Port       = $SMPTPort;              // set the SMTP port for the GMAIL server
$mail->Username   = $SMPTusername; 					// SMTP account username
$mail->Password   = $SMPTpassword;        	// SMTP account password
 
  //撖辣????
	$mail->SetFrom($MYEMAIL,$MYNAME);
	$mail->AddReplyTo($MYEMAIL,$MYNAME);
  //?批捆
	$mail->Subject    = ($_POST['email_subject']=="")?"靘?∪?MSN????":$_POST['email_subject'];
	$mail->AltBody    = $msg; 
	$body=$msg;
	$mail->MsgHTML($body);
	//?嗡辣??
	  mysql_query("set names 'latin1';");
		$a=explode(";",$m_to);
		$Email_fail="";
		$Email_success="";
		 foreach($a as $g) {
		 	
		 	$query="select a.name,b.email,b.email2,b.email3 from teacher_base a,teacher_connect b where a.teacher_sn=b.teacher_sn and a.teach_id='".$g."'";
			$result=mysql_query($query);
			list($TONAME,$email,$email2,$email3)=mysqli_fetch_row($result);
			$TOEMAIL=($email=="")?$email2:$email;
			if ($TOEMAIL=="") $TOEMAIL=$email3;
     
      if ($TOEMAIL!="") {
			  $address = $TOEMAIL;
			  $mail->AddAddress($address, $TONAME);
			  
			  //????
			   if (count($_FILES['thefile']['name'])>0) {
				 for ($i=0;$i<count($_FILES['thefile']['name']);$i++) {
     			$NowFile=$_FILES['thefile']['name'][$i]; //瑼?
     			if ($NowFile!="") {
     				$mail->AddAttachment($_FILES['thefile']['tmp_name'][$i],$NowFile);
   				}
 					}// end for
 				 } //end if file 	
 
		    //撖縑
				if(!$mail->Send()) {
 			 		//echo "Mailer Error: " . $mail->ErrorInfo;
 			 		$Email_fail.=$TONAME." ";
				} else {
					$Email_success.=$TONAME." ";
 	 				$save=1; 
 	 				$countMail+=1;
				}
      } // end if ($TOEMAIL!="")
  			$mail->ClearAddresses();
  			$mail->ClearAttachments();		 	
 		 } // end foreach
   //?潮閮蝯虫蝙?刻?
   	$idnumber=date("y").date("m").date("d").date("H").date("i").date("s");
 		//皜祈岫隞?Ⅳ?臬??
		do {
	 		$a=floor(rand(10,99));
	 		$idnumber_test=$idnumber.$a;
	 		$query="select id from sc_msn_data where idnumber='".$idnumber_test."'";
	 		$result=mysql_query($query);
	 		$exist=mysql_num_rows($result);
		} while ($exist>0);
		
    
 		$idnumber=$idnumber_test;
		$Email_success=iconv("big5","utf-8",$Email_success);
		$Email_fail=iconv("big5","utf-8",$Email_fail);
		mysql_query("SET NAMES 'utf8'");
 		$msg="?望?其蝙?其?E-mail?, 甇斤蝟餌絞?芸??蝯?:<br><br>???潮-mail蝯? ".$Email_success." <br><br>?潮仃??".$Email_fail;
    $sql="insert into sc_msn_data (idnumber,teach_id,to_id,data_kind,post_date,last_date,data,relay,folder) values ('$idnumber','$m_from','$m_from','$data_kind','$datetime','$lasttime','$msg','$relay','private')";
    mysql_query($sql);
} else {

$idnumber=date("y").date("m").date("d").date("H").date("i").date("s");
 //皜祈岫隞?Ⅳ?臬??
	do {
	 $a=floor(rand(10,99));
	 $idnumber_test=$idnumber.$a;
	 $query="select id from sc_msn_data where idnumber='".$idnumber_test."'";
	 $result=mysql_query($query);
	 $exist=mysql_num_rows($result);
	} while ($exist>0);

 $idnumber=$idnumber_test;

//靘車憿????航???
$save=0; $post_count=0;
switch ($data_kind) {
  //?祇?
  case '0':
    $query="insert into sc_msn_data (idnumber,teach_id,to_id,data_kind,post_date,last_date,data,relay,folder) values ('$idnumber','$m_from','','$data_kind','$datetime','$lasttime','$msg','','')";
 		if (mysql_query($query)) {
 		  $save=1;
 		}
  break;
  //蝘犖
  case '1':
		if ($data_kind==1 and $m_to!="" and $msg!="") {
			$a=explode(";",$m_to);
 			 foreach($a as $g) {
 				 	$query="select teach_id from teacher_base where teach_id='".$g."'";
  				$result=mysql_query($query);
  					if (mysql_num_rows($result)) {
 						   $query="insert into sc_msn_data (idnumber,teach_id,to_id,data_kind,post_date,last_date,data,relay,folder) values ('$idnumber','$m_from','$g','$data_kind','$datetime','$lasttime','$msg','$relay','private')";
 						   mysql_query($query);
 							 $save=1;
 							 $post_count++;
  				  }
  		 } 
		}  
  break;
  //瑼??澈
  case '2':
  	if ($m_to=="" and $data_kind==2 and $msg!="" and count($_FILES['thefile']['name'])>0) {
 			$query="insert into sc_msn_data (idnumber,teach_id,to_id,data_kind,post_date,last_date,data,relay,folder) values ('$idnumber','$m_from','$m_to','$data_kind','$datetime','$lasttime','$msg','$relay','$folder')";
 			mysql_query($query);
 			$save=1;
		}
  break;

}

//??鈭箄??舀?瑼??澈?賢冗瑼?
//??瑼? , 閮?????亙???
if ($save==1 and ($data_kind==1 or $data_kind==2)) {
 if (count($_FILES['thefile']['name'])>0) {
 $countFile=0;	
 for ($i=0;$i<count($_FILES['thefile']['name']);$i++) {
     $NowFile=$_FILES['thefile']['name'][$i]; //瑼?
     if ($NowFile!="") {
     	$countFile++;
    //瑼ａ??舀???
    $expand_name=explode(".",$NowFile);
    $nn=count($expand_name)-1;
    //?啣? , ?惇??$idnumber ??銝?
    $filename=$_SESSION['MSN_LOGIN_ID']."_f".date("y").date("m").date("d").date("H").date("i").date("s").$i.".".$expand_name[$nn];
     copy($_FILES['thefile']['tmp_name'][$i],$download_path.$filename);
     $query="insert into sc_msn_file (idnumber,filename,filename_r) values ('$idnumber','$filename','$NowFile')";
     mysql_query($query);
   }
 }// end for
 } //end if file 	
}
 
 //?亦?脣??餃????
 if ($data_kind==3) {
	
	//瑼ａ?銝?桅??臬摮, ?芸??刻?遣蝡?
	 if (!file_exists($UPLOAD_PIC)) {
     mkdir(substr($UPLOAD_PIC,0,strlen($UPLOAD_PIC)-1),0777);
 	}
	
  $stdate=$_POST['stdate'];
  $enddate=$_POST['enddate'];
  $delay_sec=$_POST['delay_sec'];
  if ($stdate!='' and $enddate!='' and $delay_sec!='' and $msg!='') {
   //??瑼?
   if ($_FILES['pic_file']['name']!="") {
       //瑼ａ??舀???
      $expand_name=explode(".",$_FILES['pic_file']['name']);
      $nn=count($expand_name)-1;
      $ATTR=strtolower($expand_name[$nn]); //頧?撖怠瑼?
   	  
      //瑼Ｘ葫?臬?迂銝甇日???獢?
      if (check_file_attr($ATTR)) { 

      //?唳???
      $filename_1=date('ymd').floor(rand(1000,9999)); //敺??蝣潔???
      $filename=$filename_1.".".$ATTR;
       if ($ATTR=='swf' or $ATTR=='wmv') {
        //?
        copy($_FILES['pic_file']['tmp_name'],$UPLOAD_PIC.$filename);
        $query="insert into sc_msn_board_pic (teach_id,stdate,enddate,delay_sec,file_text,filename) values ('$m_from','$stdate','$enddate','$delay_sec','$msg','$filename')";
        mysql_query($query);
        $save=1;      
       } else {
       	//????
        $filename_s=$filename_1."_s.".$ATTR;
       	  if (!ImageResize($_FILES['pic_file']['tmp_name'], $UPLOAD_PIC.$filename, 800, 600, 100)) {
       	   echo "ErroR!";
       	   exit();
       	  } else {      	  
       	  	//蝮桀?
       	  	ImageResize($_FILES['pic_file']['tmp_name'], $UPLOAD_PIC.$filename_s, 200, 150, 100);
            $query="insert into msn_board_pic (teach_id,stdate,enddate,delay_sec,file_text,filename) values ('$m_from','$stdate','$enddate','$delay_sec','$msg','$filename')";
            mysql_query($query);
					  $save=1;
          }
             
        } // end if swf
      }// end if attr
   }// end if files exist
  } 
 
	} // end if data_kind==3
	
} // end if else data_kind=4

 ?>
  <Script language="JavaScript">
	//??閬???蝷箄???
 <?php
 switch ($data_kind) {
   case 0:
      if ($save) {
		    echo "alert('???潮????');";
   		}else{
    		echo "alert('?祇?閮?潮仃??');";
   		}	 	
   break;

   case 1:
      if ($save) {
		    echo "alert('???潮?.$post_count."????');";
   		}else{
    		echo "alert('閮?潮仃??');";
   		}	 	

   break;

   case 2:
	   if ($save) {
  		  echo "alert('瑼?銝??!?梯?".$countFile."??獢?');";
   	 }else{
   		 echo "alert('瑼??澈憭望?!');";
   	 } 	
   break;

   case 3:
      if ($save) {
		    echo "alert('???潮??摮???');";
   		}else{
    		echo "alert('?餃????潮仃??');";
   		}	 	
   break;
   
   case 4:
      if ($save) {
		    echo "alert('???潮?.$countMail."撠?E-mail!');";
   		}else{
    		echo "alert('E-mail ?潮仃?? Error Message:\n".$S."');";
   		}	 	
   break;
 }
  ?>

	window.close();
	
</Script>
  <?php
} // end if ($_POST['act']=='save') ******************************


?>
<Script Language="JavaScript">
	//蝘餃?閬?雿蔭
	window.resizeTo(450,560)
  var XX=screen.availWidth
  var YY=screen.availHeight

	<?php
        if ($POSITION=="") $POSITION=0;
        switch ($POSITION) {
          case 0:  //?喃?
        		echo "var PX=XX-(390+450); \n";
        		echo "var PY=0;\n";
          break;
          case 1:  //撌虫?
        		echo "var PX=391; \n";
        		echo "var PY=0;\n";
          break;

          case 2:  //甇?葉
        		echo "var PX=0; \n";
        		echo "var PY=0;\n";
          break;

          case 3:  //?喃?
        		echo "var PX=XX-(390+450); \n";
        		echo "var PY=YY-560;\n";
          break;
        	
          case 4:  //撌虫?
        		echo "var PX=391; \n";
        		echo "var PY=YY-560;\n";
          break;
        }
   ?>


window.moveTo(PX,PY);
</Script>  