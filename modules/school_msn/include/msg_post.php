<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_function.php');

ini_set('max_execution_time', 0); //?湔?瑁???


if (!isset($_SESSION['LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}


//???葦蝑?
$query="select teacher_sn from teacher_base where teach_id='".$_SESSION['LOGIN_ID']."'";
$result=mysql_query($query);
list($teacher_sn)=mysql_fetch_row($result);
$query="select post_kind from teacher_post where teacher_sn='".$teacher_sn."'";
$result=mysql_query($query);
list($POST_KIND)=mysql_fetch_row($result);

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
<script type="text/javascript" src="./include/JSCal2-1.9/src/js/jscal2.js"></script>
<script type="text/javascript" src="./include/JSCal2-1.9/src/js/lang/b5.js"></script>
<link type="text/css" rel="stylesheet" href="./include/JSCal2-1.9/src/css/jscal2.css">

<script language="javascript">
function choice()
{
	if (document.form1.m_to.value=='') {
    document.form1.m_to.value=document.form1.set.value;
  }else{
    document.form1.m_to.value=document.form1.m_to.value+";"+document.form1.set.value;
  }
}
function checkdata1() {
	
	var save=1;
	 
	if (document.form1.msg.value=='') {
	  alert('?典??撓?亙摰?!');
	  document.form1.msg.focus();
	  save=0;
    return false;
	}
	 
	 
	//蝘犖閮
	if (document.form1.option1.value==0) {
	  if (document.form1.m_to.value=='') {
  		alert('瘝?頛詨閮?交撠情?董??');
  		document.form1.m_to.focus();
    	save=0;
    	return false;	    
	  }	
	}


	//?餃???
	if (document.form1.option1.value==4) {
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
	  if (document.form1.delay_sec.value=='') {
  		alert('瘝?頛詨撱園蝘嚗?);
    	save=0;
    	return false;	    
	  }	
	  if (document.form1.pic_file.value=='') {
  		alert('瘝??豢?瑼?嚗?);
    	save=0;
    	return false;	    
	  }	

	}

  if (save==1) {
   document.form1.submit();
  }
  
  return false;
  
} // end function

</script>
</head>
<body bgcolor="#FFFFFF">
	<?php
//頛詨銵典
if ($_POST['act']=="") {
?>
<div align="center">
  <center>
<form name="form1" method="post" action="msg_posting.php" enctype="multipart/form-data">
	<input type="hidden" name="act" value="">
	<input type="hidden" name="option1" value="0">

  <font color="#FF0000">?潮???/font>
  <table border="1" cellpadding="3" cellspacing="0" width="100%" bordercolorlight="#800000" bordercolordark="#FFFFFF" bordercolor="#FFFFFF">
		<tr>
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">閮憿</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
			<input value="0" type="radio" name="data_kind" onclick="chkpublic();">?祇? 
			<input value="1" CHECKED type="radio" name="data_kind" onclick="chkprivate();">蝘犖 
			<?php
			 if ($POST_KIND<6) {
			 ?>
			<input value="3" type="radio" name="data_kind" onclick="chkhorse();" ><font color=#FF0000>擐??擐砌???/font> 
			<input value="4" type="radio" name="data_kind" onclick="chkpic();" ><font color=#FF0000>?(??</font> 
			<?php
		   } // end if
			?>
			</td>
		</tr>
		<tr id="Myprivate" style="display:block">
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">?交撠情</td>
			<td bgColor="#CCFFCC" style="font-size: 10pt">
			<input tabIndex="1" type="text" name="m_to" value="<?php echo $m_to;?>">
			
			<input type="button" style="font-size:10px" value="?冽撣唾?" onclick="javascript:window.open('teachers_id.php?form_name=form1&item_name=m_to&selected_text=document.form1.m_to.value','test','toolbar=no,left=0,top=0,screenX=0,screenY=0,height=400,width=740,resizable=1,scrollbars')" title="?撣唾?">
			??
			<img style="cursor:pointer" border="1" width="16" height="16" src="./images/online.jpg" onclick="window.location='msg_online.php'" title="?曹?蝺?銵券??>
			</td>
		</tr>
		<tr id="Mypublic" style="display:block">
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
		<tr>
			<td bgColor="#ffffcc" width="60" style="font-size: 10pt">
			閮?批捆(??00摮誑??</td>
			<td bgColor="#ccffcc" style="font-size: 10pt">
			<!--webbot bot="Validation" b-value-required="TRUE" i-maximum-length="200" --><textarea tabIndex="2" rows="6" cols="28" name="msg"></textarea> 
			</td>
			
		</tr>

		<tr id="Myfile" style="display:block">
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
  	<tr id="M_private" style="display:block">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF">
				1.?典隞亙??鈭箄??舐策?∪???瑕?隞??嗅?隞?交?SN?喳?交?啗??胯?br>
				2.?潮?閮?臭誑憭曉葆瑼?嚗?銝?冗撣嗆?獢銝‵撖怨??臬摰對??隞亙遣霅啣閮?批捆銝剖‵?交?獢?隤芣???
			</td>
		</tr>
  	<tr id="M_public" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#FF0000">
				1.甇文???舀??具?SN????扯??臭漱瘚?雿葉嚗誑?脣??恍?撘??整?br>
				2.?芾??臭蝙?冽?抒??餉?質??甇方??荔?雿???∪???佗?????交??賜?閬??胯?br>
				3.憒??航??澈瑼?, 憒?霅啗???, 隢?具?鈭急?獢????
		</tr>
  	<tr id="M_horse" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">隤芣?</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF">
				???臬??摮豢擐????擐砌???橘???憭犖憯恍??閬?嚗?br>
			</td>
		</tr>
		
  	<tr id="M_pic_sttime" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">????</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" id="stdate" name="stdate" value=""></td>
					<script type="text/javascript">
					new Calendar({
  		    	inputField: "stdate",
   		    	dateFormat: "%Y-%m-%d",
    	    	trigger: "service_date",
    	    	bottomBar: true,
    	    	weekNumbers: false,
    	    	showTime: 24,
    	    	onSelect: function() {this.hide();}
		    	});
					</script>
		</tr>
  	<tr id="M_pic_endtime" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">蝯???</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" id="enddate" name="enddate" value=""></td>
					<script type="text/javascript">
					new Calendar({
  		    	inputField: "enddate",
   		    	dateFormat: "%Y-%m-%d",
    	    	trigger: "service_date",
    	    	bottomBar: true,
    	    	weekNumbers: false,
    	    	showTime: 24,
    	    	onSelect: function() {this.hide();}
		    	});
					</script>		</tr>
  	<tr id="M_pic_delay" style="display:none">
			<td style="font-size: 10pt" bgColor="#ffffcc">撱園蝘</td>
			<td bgColor="#ccffcc" style="font-size: 10pt;color:#0000FF"><input type="text" name="delay_sec" value="5"></td>
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
				2.?芾銝 jpg/png/gif/swf ?車??
			</td>
		</tr>
  </table>
  
  <table border="0" width="100%" bgcolor="#FFFFFF">
    <tr> 
     <td colspan="2" align="right">
       <input type="button" onclick="b_submit()" value="?" name="B1">&nbsp;<input type="button" value="??" name="B2" onclick="window.close()">
      </td>
    </tr>
  </table>
 </form>
 <table border="0" width="100%">
  <tr id="info" style="display:block">
  	<td style="color:#FF0000">
  		瘜冽?! 閮????0憭??閮銝剖冗撣嗥?瑼?)嚗???臬?隢撠閬?敺閮??
  	</td>
  </tr>
  <tr id="wait" style="display:none">
    <td><br>鞈???銝? 隢???..</td>
  </tr>
 </table>

  </center>
</div>

</body>
</html>
<script language="javascript">
document.form1.m_to.focus();
chkprivate();

function chkprivate() {
  Myprivate.style.display="block";
  Myfile.style.display="block";
  Mypublic.style.display="none";
  M_public.style.display="none";
  M_private.style.display="block";
  M_horse.style.display="none";
 info.style.display="block";
 wait.style.display="none";

  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";


 document.form1.option1.value="0";
}


function chkpublic() {
  Mypublic.style.display="block";
  Myprivate.style.display="none";
  Myfile.style.display="none";
  M_public.style.display="block";
  M_private.style.display="none";
  M_horse.style.display="none";
  
  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";

  
  document.form1.option1.value="1";
}


function chkhorse() {
  Mypublic.style.display="block";
  Myprivate.style.display="none";
  Myfile.style.display="none";
  M_public.style.display="none";
  M_private.style.display="none";
  M_horse.style.display="block";

  M_pic_sttime.style.display="none";
  M_pic_endtime.style.display="none";
  M_pic_delay.style.display="none";
  M_pic_file.style.display="none";
  M_pic.style.display="none";
  
  document.form1.option1.value="3";
}

function chkpic() {
  Mypublic.style.display="none";
  Myprivate.style.display="none";
  Myfile.style.display="none";
  M_public.style.display="none";
  M_private.style.display="none";
  M_horse.style.display="none";
  
  M_pic_sttime.style.display="block";
  M_pic_endtime.style.display="block";
  M_pic_delay.style.display="block";
  M_pic_file.style.display="block";
  M_pic.style.display="block";
   document.form1.option1.value="4";
}


function b_submit() {
 info.style.display="none";
 wait.style.display="block";
 document.form1.submit();
}

</script>
<?php
} // end if act=="" 
?>  