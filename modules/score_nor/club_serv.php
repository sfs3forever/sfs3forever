<?php
//$Id: chc_9401.php 7075 2013-01-16 03:58:25Z hami $

require_once("config.php");
require_once ("../score_chart/chc_class2.php");



//認證

sfs_check();
##################  文字檔修改  ##########################
if($_POST['year_seme'] && $_POST['grade'] && $_POST[input_txt] && $_POST[act]=='write_txt'){
	$URL=$_SERVER[PHP_SELF]."?year_seme=".$_POST['year_seme']."&grade=".$_POST['grade'];
	header("location:$URL");
}
##################  文字檔預設值  ##########################
if($_POST['year_seme'] && $_POST['grade'] &&  $_POST[act]=='write_def'){
	$URL=$_SERVER[PHP_SELF]."?year_seme=".$_POST['year_seme']."&grade=".$_POST['grade'];
	header("location:$URL");
}

##################  文字檔處理  ##########################

$img_title=get_title_pic();//讀取職稱圖章
//////  從SFS3內建的函式取學校資料函式---------------------
$sch_data=get_school_base();


//讀取模組變數
$M_SETUP=get_module_setup('score_nor');

$default_txt="說明與注意事項：<br>
1.分數級距 90～100 -> 優；分數 80～89 -> 甲；分數 70～79 -> 乙；分數 60～69 -> 丙；分數 0～59 -> 丁。<br>
2.如對成績記錄有任何疑慮，請洽業務承辦單位。<br>
列印日期：".date("Y-m-d");

//程式檔頭
head("列印學期通知單");
print_menu($menu_p);
##################陣列列示函式2##########################
// 1.smarty物件
$template_dir = $SFS_PATH."/".get_store_path()."/templates/";
$smarty->left_delimiter="{{";
$smarty->right_delimiter="}}";

$smarty->assign("M_SETUP",$M_SETUP);

// 2.判斷學年度
	($_GET['year_seme']=='') ? $year_seme=curr_year()."_".curr_seme():$year_seme=$_GET['year_seme'];

// 3.指派下拉式選擇學期
	$smarty->assign("sel_year",sel_year('year_seme',$year_seme));

// 4.指派下拉式選擇年級
	$url=$_SERVER[PHP_SELF]."?year_seme=".$year_seme."&grade=";
	$smarty->assign("sel_grade",sel_grade('grade',$_GET[grade],$url));
	$smarty->assign("phpself",$_SERVER[PHP_SELF]);
	$smarty->assign("input_txt",$input_txt);
	$smarty->assign("add_memo_file",$add_memo_file);
	$smarty->assign("school_name",$sch_data[sch_cname]);

// 5.若有選擇班級  指派班級選擇區 ,判斷是否傳值  再列出各班以供選擇 
if($year_seme!='' && $_GET[grade]!='' ){
	$all_class_array=get_class_info1($_GET[grade],$year_seme);
	$num=count($all_class_array);
	$num_max=(ceil($num/10))*10;
	$prt_ary=array();
	for($i=0;$i<$num_max;$i++){
		if($all_class_array[$i]['class_id']!='') { 
			$prt_ary[$i]['class_id']=$all_class_array[$i]['class_id'];
			$prt_ary[$i][c_name]="<TD width=10%><LABEL><INPUT TYPE='checkbox' NAME='class_id[".$all_class_array[$i]['class_id']."]' >".$all_class_array[$i][c_name]."班</LABEL></TD>\n";
		}else {
			$prt_ary[$i]['class_id']="";
			$prt_ary[$i][c_name]="<TD width=10%>&nbsp;</TD>";
			}
	}


  
	$smarty->assign("sel_class",$prt_ary);
	$smarty->assign("click_button",$click_button);
  
  //2012/12/07 by smallduh
  $smarty->assign("IS_JHORES",$IS_JHORES); //$IS_JHORES==6表示國中
  

	}//end if 
else {
	$smarty->assign("sel_class","<CENTER>使用方式：先選學期，再選年級！</CENTER>");
}
$smarty->assign("default_txt",$default_txt);
//是否無條件進位狀態
$smarty->display("stud_club_serv.tpl");

//佈景結尾
foot();
#####################   CSS  ###########################
function myheader(){
?>
<style type="text/css">
body{background-color:#f9f9f9;font-size:12pt}
.ip12{border-style: solid; border-width: 0px; background-color:#E6ECF0; font-size:12pt;}
.ipmei{border-style: solid; border-width: 0px; background-color:#E6ECF0; font-size:14pt;}
.ipme2{border-style: solid; border-width: 0px; background-color:#E6ECF0; font-size:14pt;color:red;font-family:標楷體 新細明體;}
.ip2{border-style: solid; border-width: 0px; background-color:#E6ECF0; font-size:11pt;color:red;font-family:新細明體 標楷體;}
.ip3{border-style: solid; border-width: 0px; background-color:#E6ECF0; font-size:12pt;color:blue;font-family:新細明體 標楷體;}
.bu1{border-style: groove;border-width:1px: groove;background-color:#CCCCFF;font-size:12px;Padding-left:0 px;Padding-right:0 px;}
.bub{background-color:#FFCCCC;font-size:14pt;}
.bur2{border-style: groove;border-width:1px: groove;background-color:#FFCCCC;font-size:12px;Padding-left:0 px;Padding-right:0 px;}
.f8{font-size:9pt;color:blue;}
.f9{font-size:9 pt;}
</style><?php
}

##################  學期下拉式選單函式  ##########################
function sel_year($name,$select_t='') {
	global $CONN ;
	$SQL = "select * from school_day where  day<=now() and day_kind='start' order by day desc ";
	$rs=$CONN->Execute($SQL) or die("無法查詢，語法:".$SQL);
	while(!$rs->EOF){
	$ro = $rs->FetchNextObject(false);
	// 亦可$ro=$rs->FetchNextObj()，但是僅用於新版本的adodb，目前的SFS3不適用
	$year_seme=$ro->year."_".$ro->seme;
	$obj_stu[$year_seme]=$ro->year."學年度第".$ro->seme."學期";
	}
	$str="<select name='$name' onChange=\"location.href='".$_SERVER[PHP_SELF]."?".$name."='+this.options[this.selectedIndex].value;\">\n";
		//$str.="<option value=''>-未選擇-</option>\n";
	foreach($obj_stu as $key=>$val) {
		($key==$select_t) ? $bb=' selected':$bb='';
		$str.= "<option value='$key' $bb>$val</option>\n";
		}
	$str.="</select>";
	return $str;
	}


##################陣列列示函式2##########################
function sel_grade($name,$select_t='',$url='') {
	//名稱,起始值,結束值,選擇值
	global $IS_JHORES;
($IS_JHORES==6) ? $all_grade=array(7=>"一年級",8=>"二年級",9=>"三年級"):$all_grade=array(1=>"一年級",2=>"二年級",3=>"三年級",4=>"四年級",5=>"五年級",6=>"六年級");

$str="<select name='$name' onChange=\"location.href='".$url."'+this.options[this.selectedIndex].value;\">\n";
$str.= "<option value=''>-未選擇-</option>\n";
foreach($all_grade as $key=>$val) {
 ($key==$select_t) ? $bb=' selected':$bb='';
	$str.= "<option value='$key' $bb>$val</option>\n";
	}

$str.="</select>";
return $str;
 }
###########################################################
##  傳入年級,學年度,學期 預設值為all表示將傳出所有年級與班級
##  傳出以  class_id  為索引的陣列  
function get_class_info1($grade='all',$year_seme='') {
	global $CONN ;
if ($year_seme=='') {
	$curr_year=curr_year(); $curr_seme=curr_seme();}
else {
	$CID=split("_",$year_seme);//093_1
	$curr_year=$CID[0]; $curr_seme=$CID[1];}
	($grade=='all') ? $ADD_SQL='':$ADD_SQL=" and c_year='$grade'  ";
	$SQL="select class_id,c_name,teacher_1 from  school_class where year='$curr_year' and semester='$curr_seme' and enable=1  $ADD_SQL order by class_id  ";
	$rs=$CONN->Execute($SQL) or die("無法查詢，語法:".$SQL);
	if ($rs->RecordCount()==0) return"尚未設定班級資料！";
	$obj_stu=$rs->GetArray();
	return $obj_stu;
}
?>
