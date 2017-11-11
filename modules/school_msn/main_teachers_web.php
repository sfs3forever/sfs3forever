<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

	//閮剖?銝??頝臬?
	$img_path = "photo/teacher";

?>
<head>
	 <title>?∪?MSN-?葦?飛蝬脩??”</title>
</head>
<?php
if (!isset($_SESSION['MSN_LOGIN_ID'])) {
  echo "<Script language=\"JavaScript\">window.close();</Script>";
	exit();
}


//???【d
// ====================================================================
$Subject_KIND=array("隤?_??","隤?_?望?","?詨飛","?芰??瘣餌??_??","?芰??瘣餌??_?","?芰??瘣餌??_?啁?蝘飛","?芰??瘣餌??_鞈?","蝷暹?_?啁?","蝷暹?_甇瑕","蝷暹?_?祆?","?亙熒???淪?亙熒","?亙熒???淪擃","???犖??質死??","???犖?閬死??","???犖?銵冽???","蝬?","?寞?");
foreach ($Subject_KIND as $k=>$kind) {
 $i=0; //蝝?憿鈭箸
 $master_subjects=iconv("UTF-8", "big5",$kind);
 $query="select teacher_sn,teach_id,name from teacher_base where master_subjects like '%".$master_subjects."%' and teach_condition=0 order by name";
 $result=$CONN->Execute($query);
 ?>
 <table border="0" width="700">
   <tr>
     <td style="color:#800000">??-蝘嚗??php echo $kind;?></td>
   </tr>
 </table>
 <table border="0">
 	<?php
  while ($row=$result->fetchRow()) {
  	$teacher_sn=$row['teacher_sn'];
  	$selfweb="";
  	$sql_web="select selfweb from teacher_connect where teacher_sn='$teacher_sn'";
  	$res_web=$CONN->Execute($sql_web) or die ("Error! ".$sql_web);
  	
  	$selfweb=$res_web->fields['selfweb'];
  	
  	if ($selfweb=="") {
  	  $D=big52utf8($row['name']);
  	} else {
  		if (substr($selfweb,0,7)=="http://" or substr($selfweb,0,8)=="https://" ) {
  			$D="<a href=\"".$selfweb."\" target=\"_blank\">".big52utf8($row['name'])."</a>";
  		} else { 
  	   $D="<a href=\"http://".$selfweb."/\" target=\"_blank\">".big52utf8($row['name'])."</a>";
  	  }
  	}
  	$f_color=($selfweb=="")?"#CCCCCC":"blue";

  			$i++;  if ($i%10==1) echo "<tr>";
       ?>
        
        <td style="font-size:10pt" align="center">
        	<table border="1"  style="border-collapse:collapse">
           		<tr>
        			<td align="center" style="font-size:11pt;color:<?php echo $f_color;?>">
        				
        				<?php
        					echo $D;
        				?>
        				
        			</td>
        		</tr>
        	</table>
         </td>
        	<?php
      		if ($i%10==0) echo "</tr>";
 	}// end while
 ?>
</table>
?梯? <?php echo $i;?> 雿?撣?br><br>
 <?php 
} // end foreach

?>  	
