<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

mysql_query("SET NAMES 'utf8'");

if (!isset($_SESSION['MSN_LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}

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
    while ($row=mysqli_fetch_row($result))
    {
    list($teach_id,$name,$onlinetime,$state)=$row;
	  ?>
    <tr>
      <td bgcolor="#FFFFFF" align="center"><?php echo $teach_id;?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo $name;?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo $onlinetime;?></td>
      <td bgcolor="#FFFFFF" align="center"><?php echo $state;?></td>
      <td align="center" bgcolor="#FFFFFF">
      	<a href="main_message.php?act=post&set=<?php echo $teach_id;?>"><img style="cursor:pointer" border="1" src="./images/post.jpg" width="16" height="16" title="?潮??舐策???php echo $name;?>??></a>
      	<img style="cursor:pointer" border="1" src="./images/manage.jpg" width="16" height="16" title="???php echo $name;?>??撠店" onclick="javascript:window.open('main_mlist.php?set=<?php echo $teach_id;?>','MessageManage','width=640,height=420,resizable=1,toolbar=no,scrollbars=yes');">
      </td>
    </tr>
	  
	  <?php
    }
    ?>
  </table>
</body>
</html>
<Script>
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

  