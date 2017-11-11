<?php
header('Content-type: text/html; charset=utf-8');
include ('config.php');
include_once ('my_functions.php');

mysql_query("SET NAMES 'utf8'");

if ($_POST['set']=="" and $_SESSION['MSN_LOGIN_ID']!="") {
$query="select * from sc_msn_online where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
$result=mysql_query($query);
$row=mysql_fetch_array($result,1);
?>
<html>
<head>
<title>霈?桀??????/title>
<style>
A:link {font-size:9pt;color:#ff0000; text-decoration: none}
A:visited {font-size:9pt;color: #ff0000; text-decoration: none;}
A:hover {font-size:9pt;color: #ffff00; text-decoration: underline}
td {font-size:12pt}
</style>
</head>
<script language="javascript">
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
function checkdata()
{
if (document.form1.state.value=='')
  {
 	alert('隢撓?交????')
  document.form1.state.focus();
    return false;
  }else{
  	return true;
  }
}
</Script>
<body bgcolor="#99CCFF">
<table border="0" width="100%">
	<form name="form1" method="post" action="main_state.php" onsubmit="return checkdata()">
   <input type="hidden" name="set" value="updatting">
	 <tr>
	 	<td style="color:#FF0000">禮霈???蝷?/td>
	 	<td align="left">
	 		<input type="text" value="<?php echo $row['state'];?>" name="state" size="10">
	 	  <input type="submit" value="?" name="B1">
	 	  <input type="button" value="??" name="B2" onclick="window.close()"> 
	 	</td>
	</tr>
	 <tr>
	 	<td style="color:#FF0000">禮蝘??脤?內</td>
	 	<td align="left" style="font-size:10pt">
	 	  <input type="radio" value="1" name="sound" <?php if ($row['sound']==1) echo "checked";?>>??
	 	  <input type="radio" value="0" name="sound" <?php if ($row['sound']==0) echo "checked";?>>??
	 	</td>
	</tr>
	<tr>
	 	<td style="color:#FF0000">禮?內?喟車憿?/td>
	 	<td align="left" style="font-size:10pt">
	 	  <input type="radio" value="sound1" name="sound_kind" <?php if ($row['sound_kind']=='sound1') echo "checked";?>>瘜⊥部
	 	  <input type="radio" value="sound2" name="sound_kind" <?php if ($row['sound_kind']=='sound2') echo "checked";?>> ?脫?
	 	  <input type="radio" value="sound3" name="sound_kind" <?php if ($row['sound_kind']=='sound3') echo "checked";?>> ?航炊
	 	  <input type="radio" value="sound4" name="sound_kind" <?php if ($row['sound_kind']=='sound4') echo "checked";?>> ?餉店??
	 	  <input type="radio" value="sound5" name="sound_kind" <?php if ($row['sound_kind']=='sound5') echo "checked";?>> 霅衣內	  
	 	</td>
	</tr>
	</form>
</table>
<br>
??湔頛詨??券??訾誑銝?閮剔????
<table width="100%" border="0">
	<tr>
		<td><input type="radio" value="1" name="R1" onclick="document.form1.state.value='銝?'">銝?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='敹?'">敹?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='銝玨銝?">銝玨銝?/td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='??銝?">??銝?/td>
	</tr>
	<tr>	
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?征'">?征</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='??'">??</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?航?憭?">?航?憭?/td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='隡'">隡</td>
	</tr>
	<tr>	
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='擃?'">擃?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='敹急?'">敹急?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?除'">?除</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='敹踵?">敹踵?/td>
	</tr>
	<tr>	
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='???'">???</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?瑕?'">?瑕?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?澆?'">?澆?</td>
		<td><input type="radio" value="2" name="R1" onclick="document.form1.state.value='?∟?'">?∟?</td>
	</tr>

</table>	
</body>
</html>	
<?php
exit();
}

if ($_POST['set']=="updatting") {
	$query="update sc_msn_online set state='".$_POST['state']."',sound='".$_POST['sound']."',sound_kind='".$_POST['sound_kind']."' where teach_id='".$_SESSION['MSN_LOGIN_ID']."'";
  mysql_query($query);
?>
<Script language="JavaScript">
	opener.window.location.reload(); //?嗉?蝒??
	window.close();
</Script>
<?php
exit();
} //
?>

