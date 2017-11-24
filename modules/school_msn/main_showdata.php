<?php
header('Content-type: text/html; charset=utf-8');
include_once ('config.php');
include_once ('my_functions.php');

$ann_num=-1;

 mysql_query("SET NAMES 'utf8'");
   //閮????砍?, ?折?砍?
   $nowsec=date("U",mktime(0,0,0,date("n"),date("j"),date("Y")));
   $nowdate=date("Y-m-d 0:0:0");
   $query="select idnumber,data,data_kind from sc_msn_data where to_id='' and to_days(curdate())<=(to_days(post_date)+last_date) and (data_kind=0 or data_kind=2) order by post_date desc";
   $result=mysqli_query($conID, $query);
   $board_num=mysqli_num_rows($result);
   while($row=mysqli_fetch_row($result)) {
   	 $ann_num++;
    list($idnumber,$data,$data_kind)=$row;
    $ann_data[$ann_num]=nl2br($data);
    
     $query_file="select filename,filename_r from sc_msn_file where idnumber='".$idnumber."'";
  	$result_file=mysql_query($query_file);
	  	if (mysqli_num_rows($result_file)) {
       $ann_data[$ann_num].="<font size=5 color=#000000>--??SN/瑼?銝???/font>";
	  	} else {
	  	 $ann_data[$ann_num].="<font size=5 color=#000000>--??SN/?∪閮??/font>";
	  	}
    
   
   }


//霈???亙??, ?脣???$ann_data ??? , $ann_num 霈銵典?
$BOARD_P=$SOURCE."_p";
$BOARD_KIND=$SOURCE."_kind";
$CONN->Execute("SET NAMES 'latin1'");
$query="select a.* from $BOARD_P a,$BOARD_KIND b where to_days(a.b_open_date)+$LAST_DAYS > to_days(curdate()) and a.bk_id = b.bk_id order by a.b_open_date desc ,a.b_post_time desc ";
$res=$CONN->Execute($query) or die("Error! query=".$query);
if ($res->RecordCount()>0) {
 while ($row=$res->FetchRow()) {
  $ann_num++;
//$ann_data[$ann_num]=big52utf8($row['b_open_date']." ".$row['b_sub']." <font size=1>(".$row['b_unit']."_".$row['b_title'].")</font>");
$ann_data[$ann_num]=big52utf8(addslashes($row['b_sub']))."<font size=5 color=#000000>--《".$row['    b_open_date'].",首頁/".big52utf8($row['b_unit'])."/".big52utf8($row['b_title'])."公告》</font>";
 }
} else {
 $ann_num=0;
 $ann_data[0]="餈??抒?啣??";
}




//敺?????蝚砌???

//? sfs3鞈?
 mysql_query("SET NAMES 'utf8'");

   $query="select data from sc_msn_data where to_id='' and to_days(curdate())<=(to_days(post_date)+last_date) and data_kind=3 order by post_date desc";
   $result=mysqli_query($conID, $query);
   while($row=mysqli_fetch_row($result)) {
    list($data)=$row;
    $ann_data[$ann_num]=$data;
    $ann_num++;
   }
   




$cc[0]="#FFFFFF";
$cc[1]="#FFFF00";
$cc[2]="#00FFFF";
$cc[3]="#00FF00";

   $board_num=$ann_num;
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
.ann{overflow:hidden;height:750px;color:#0000FF;font-size:56pt;font-family:璅扑擃 
</style>
</head>
<body bgcolor="#f9f7b3" leftmargin="3" topmargin="0" style="overflow: hidden">
<div id="ann_box" class="ann" style="width:100%;"> 
	<?php
	for ($ii=0;$ii<$ann_num;$ii++) {
	?>
		  <div id="a1" class="ann"><?php echo $ann_data[$ii];?></div>
	<?php
	}
	?>
</div> 

</body>
</html>
<Script language="JavaScript">
	function reloading() {
		//window.location.reload();
	  window.location.href='main_showpic.php';
	}
	
	function slideLine(box,stf,delay,speed,h) 
	{   //??id
		   var allelement=<?php echo $ann_num-1;?>;
		   //?批捆?梯?敺銝蕃?嗾甈?, ?箇蜇?批捆??1
		   var start_ok=1;
		   var slideBox = document.getElementById(box);
		      //?身??delay:撟暹神蝘遝??甈?1000瘥怎?=1蝘?   
		      //       speed:?詨?頞?頞翰嚗:擃漲
		   var delay = delay||10000,speed = speed||20,h = h||750;
		   var tid = null,pause = false;
		      //setInterval頝etTimeout?瘜隞亙???蝛嗡?銝
		   var s = function(){tid=setInterval(slide, speed);}
		      //銝餉??????
		   var slide = function(){
		      //?嗆?曌宏?唬??Ｙ??停???
		        //if(pause) return;
		      //皛曉?璇?銝遝???詨?頞之??敹思??舐?韏瑚?頞???疵嚗?隞仿???
		        slideBox.scrollTop += 5;
		      //皛曉??唬???摨?h)???停?迫
		        if(slideBox.scrollTop%h == 0){
		      //頝etInterval?剝?雿輻??
		          clearInterval(tid);
		      //撠??遝???餌???????游???敺???
		          slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
		      //??閮剜遝???唳?銝
		          slideBox.scrollTop = 0;
		      //撱園憭??銵?甈?
		          setTimeout(s, delay);
		          start_ok++;
		           if (start_ok>=allelement) { 
		           	setTimeout("reloading()",15000); 
		           }
		          } //end if 
		        }   //皛?蝘颱??餅??怠? 蝘餉粥?匱蝥?
		          slideBox.onmouseover=function(){pause=true;}
		          slideBox.onmouseout=function(){pause=false;}
		          //韏瑕???對?瘝??停銝???
		          setTimeout(s, delay); 
	}
		
		           //蝬脤?load摰??瑁?銝甈?
		           //鈭惇?批??交嚗??▃iv?d?迂???刻ㄐ?Ｙ?璅惜憿? 
		           //撱園瘥怎??詻漲??摨?

		          slideLine('ann_box','div',6000,20,750); 

</Script>

 