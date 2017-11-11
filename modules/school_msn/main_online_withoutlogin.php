<?
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

mysql_query("SET NAMES 'utf8'");

?>
<html>
<head>
<title>?亦?隤啣蝺?</title>
<style>
A:link {font-size:9pt;color:#ff0000; text-decoration: none}
A:visited {font-size:9pt;color: #ff0000; text-decoration: none;}
A:hover {font-size:9pt;color: #ffff00; text-decoration: underline}
td {font-size:10pt}
</style>

</head>
<body bgcolor="#99CCFF">
<table border="0" width="100%">
	 <tr>
	 	<td style="color:#FF0000">禮?亦??桀?銝??</td>
	 	<td align="right">
       <input type="button" value="??" name="B2" onclick="window.close()">
	 		
	 	</td>
	 		
	</tr>
</table>
<font color="#FF0000"></font>
  <table border="1" cellpadding="0" cellspacing="0" width="100%" bordercolorlight="#800000" bordercolordark="#FFFFFF" bordercolor="#FFFFFF">
    <tr style="color:#0000FF">
      <td bgcolor="#FFFFCC" align="center">撣唾?</td>
      <td bgcolor="#FFFFCC" align="center">憪?</td>
      <td bgcolor="#FFFFCC" align="center">銝???</td>
      <td bgcolor="#FFFFCC" align="center">???/td>
      <td bgcolor="#FFFFCC" align="center">?潸???/td>
    </tr>
    <?php
    $search="select teach_id,name,onlinetime,state from sc_msn_online where ifonline>0 order by teach_id";
    $result=mysql_query($search);
    while ($row=mysql_fetch_row($result))
    {
    list($teach_id,$name,$onlinetime,$state)=$row;
	  ?>
    <tr>
      <td bgcolor="#FFFFFF" align="center"><?php echo substr($teach_id,0,1)."******";?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo substr($name,0,3)."嚗?";?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo $onlinetime;?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo $state;?></td>
      <td align="center" bgcolor="#FFFFFF">**</td>
    </tr>
	  
	  <?php
    }
    ?>
  </table>
  <font color="#FF0000">?餅敹??餃??嘩SN?折?砍?????鈭方?</font>
</body>
</html>

  