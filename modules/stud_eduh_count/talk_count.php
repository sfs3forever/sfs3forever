<?php

// $Id: talk_count.php 8920 2016-06-30 06:11:31Z qfon $

include "config.php";

//取得選擇學年度及學期，如:0921
$select_year_seme=$_POST["select_year_seme"];
//取得記錄基準數
$select_count_value=$_POST["select_count_value"]?$_POST["select_count_value"]:1;

$year=get_curr_year($select_year_seme);//取得選擇之學年，如92
$semester=get_curr_seme($select_year_seme);//取得選擇之學期，如1

if(empty($year))$year=curr_year();//預設為本年度
if(empty($semester))$semester=curr_seme();//預設為本學期

head("學生訪談紀錄填寫情形");

//列出統計

$main=list_talk($year,$semester);
echo $main  ;

foot();
//列出所有班級的資料
function list_talk($year,$semester,$count_num){
	global $menu_p,$CONN,$select_count_value;
	$toolbar=&make_menu($menu_p);

        //底下使用select_yearseme_form 顯示學年度學期下拉選單
        $select_yearseme_form="<form method='post' action='".basename($_SERVER["PHP_SELF"])."'>";
        $class_seme_p = get_class_seme(); //學年度
        $upstr = "<select name='select_year_seme' onchange='this.form.submit()'>";
        while (list($tid,$tname)=each($class_seme_p)){
        	if ($tid=="0".$year.$semester)
              		$upstr .= "<option value='".$tid."' selected>".$tname."</option>";//$tid如"0921"
              	else
              		$upstr .= "<option value='".$tid."'>".$tname."</option>";
        }
        $upstr .= "</select>";
		
	    $upstr .= "紀錄檢核基準數:<select name='select_count_value' onchange='this.form.submit()'>";
     
		for($i=1;$i<=10;$i++)
		{
		
		 $upstr .= $select_count_value==$i?"<option value='$i' selected>".$i."</option>":"<option value='$i'>".$i."</option>";
        
        }
        $upstr .= "</select>";
		
        $select_yearseme_form.= $upstr."</form>";
        //select_yearseme_form 結束


        //找出學期設定之班級
        $sql_select = "select class_id ,teacher_1 from school_class where year='$year' and semester='$semester' order by c_year,c_sort";
       	$record_class=$CONN->Execute($sql_select) or die($sql_select);
        $num_class=$record_class->RecordCount();//班級小計
        if ($num_class<1){
           echo "錯誤，找不到屬於該年度的班級設定！";
           exit;
        }
        $show.="<table width=100% border='1'><tr bgcolor='#00ffff'><td width=5% align=center>班級</td><td width=5% align=center>人數</td><td width=10% align=center>符合人數</td><td width=10% align=center>未符合人數</td><td>待紀錄之學生</td><td width=10% align=center>導師</td></tr>";
        //逐班比對資料
        while ($array_class = $record_class->FetchRow()) {
              $temp = explode("_",$array_class[class_id]); //091_1_07_01$array_class
              $temp[2]=(substr($temp[2],0,1)=='0')?substr($temp[2],1,strlen($temp[2]-1)):$temp[2];
              $temp_class=$temp[2].$temp[3];//$class_temp為班級，如701

              //依班級尋找符合之學生
              $sel_year_seme=sprintf("%03d%d",$year,$semester);//格式化學期成4位數，如0911
              $sql_select = "select b.stud_id ,b.seme_num ,a.stud_name from stud_base a, stud_seme b where a.student_sn=b.student_sn and (a.stud_study_cond=0 or a.stud_study_cond=5) and b.seme_year_seme='$sel_year_seme' and b.seme_class='$temp_class' order by b.seme_num";
              $record_stud=$CONN->Execute($sql_select) or die($sql_select);

              $num_all=$record_stud->RecordCount();//班級人數
              $num_yes=0;//班級已輸入之人數起始
              $num_no=0;//班級未輸入之人數起始
              $name_no="-";//待輸入之學生姓名
              $name_teacher=$array_class[teacher_1];//班級導師
              while ($array_stud = $record_stud->FetchRow()) {
                      //尋找stud_seme_talk中，學年度及學號相符的資料
                      $sql_select = "select stud_id from stud_seme_talk where seme_year_seme='$sel_year_seme' and stud_id='$array_stud[stud_id]'  HAVING count(sst_id) >= $select_count_value";
                      $record_num=$CONN->Execute($sql_select) or die($sql_select);

                      if ($record_num->RecordCount()>0) 
					  {
						  $num_yes++;//找到有資料
					  }					  
                      //若找不到，紀錄該學生座號及姓名
                      else 
					  {
						  
					   $sqlx="select count(stud_id) as cc from stud_seme_talk where seme_year_seme='$sel_year_seme' and stud_id='$array_stud[stud_id]'";
                       $rsx=$CONN->Execute($sqlx);
		               while (!$rsx->EOF) {
	                   $cc=$rsx->fields["cc"];
     		           $rsx->MoveNext();
			
		               }
						  
						  $name_no.="".$array_stud[seme_num].".".$array_stud[stud_name]."($cc 筆),";
					  }
              }
              //去除待輸入學生之多餘字元(開頭-及結尾,)
              $name_no=(strlen($name_no)>1)?substr($name_no,1,strlen($name_no)-2):$name_no;
              //計算未輸入之人數
              $num_no=$num_all-$num_yes;
              //輸出單列資訊
              $show.=($num_no>0)?"<tr bgcolor='#ffccff' align=center><td>":"<tr align=center><td>";
              $show.=($temp[2]>6)?$temp[2]-6:$temp[2];//國中小判斷
              $show.=$temp[3]."</td>";
              $show.="<td>$num_all 人</td><td>$num_yes 人</td><td >$num_no 人</td><td align=left>$name_no</td><td >$name_teacher</td></tr>";
        }
        $show.="</table>";

	$help_text="
	本程式主要為檢查每學期各班學生之[輔導訪談]是否有無紀錄之情形。||每筆紀錄之學期判斷以輸入當時為準，與紀錄日期欄位無關。";
	$help=&help($help_text);

        return $toolbar.$help.$select_yearseme_form.$show;
}
?>
