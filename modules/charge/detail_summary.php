<?php
// $Id: detail_summary.php 5469 2009-04-28 15:06:15Z infodaes $

include "config.php";
include "my_fun.php";

sfs_check();

//秀出網頁
head("收費管理");

//學期別
$work_year_seme=$_REQUEST[work_year_seme];
if($work_year_seme=='') $work_year_seme = sprintf("%03d%d",curr_year(),curr_seme());
$curr_year_seme=sprintf("%03d%d",curr_year(),curr_seme());

$item_id=$_REQUEST[item_id];
//$stud_class=$_POST[stud_class];
$record_id=$_POST[record_id];

// 取出班級名稱陣列
$class_base = class_base($work_year_seme);

//橫向選單標籤
$linkstr="work_year_seme=$work_year_seme&item_id=$item_id";
echo print_menu($MENU_P,$linkstr);

//取得年度與學期的下拉選單
$seme_list=get_class_seme();
$main="<table><form name='form_item' method='post' action='$_SERVER[PHP_SELF]'>
	<select name='work_year_seme' onchange='this.form.submit()'>";
foreach($seme_list as $key=>$value){
	$main.="<option ".($key==$work_year_seme?"selected":"")." value=$key>$value</option>";
}
$main.="</select><select name='item_id' onchange='this.form.submit()'><option></option>";

//取得年度項目
$sql_select="select * from charge_item where year_seme='$work_year_seme' order by end_date desc";
$res=$CONN->Execute($sql_select) or user_error("讀取失敗！<br>$sql_select",256);

while(!$res->EOF) {
	$main.="<option ".($item_id==$res->fields[item_id]?"selected":"")." value=".$res->fields[item_id].">".$res->fields[item]."(".$res->fields[start_date]."~".$res->fields[end_date].")</option>";
	$res->MoveNext();
}
$main.="</select>";

if($item_id>0)
{
	//取得各年級收費列表及計算減免金額  自定函數在 my-fun.php
	$grade_dollars=get_grade_charge($item_id);
	$data_arr=array();

	//取得收費項目各年級資料統計
	//$stud_select="select MID(record_id,5,1) as grade,count(*) as members,sum(dollars) as dollars from charge_record where item_id=$item_id group by grade order by grade";
	$stud_select="select MID(record_id,5,1) as grade,count(*) as members from charge_record where item_id=$item_id group by grade";
	$recordSet=$CONN->Execute($stud_select) or user_error("讀取失敗！<br>$stud_select",256);


	//將收費列表乘上應收人數　並將已收費金額
	while(!$recordSet->EOF) {
		$grade=$recordSet->fields[grade];
		$members_count=$recordSet->fields[members];
		$detail=$grade_dollars[$grade];
		foreach($detail as $key=>$value){
			$data_arr[$grade][$key][singal]=$value;
			$data_arr[$grade][$key][total]=$value*$members_count;
		}
		$members[$grade]=$members_count;
		$recordSet->MoveNext();
	}

	//將有減免的資料加陣列中
	$decrease_dollars=get_charge_decrease($item_id);  //此函數會將已設定減免但又取消收費名單列入其中
	$stud_select="select student_sn,MID(record_id,5,1) as grade from charge_record where item_id=$item_id";
	$recordSet=$CONN->Execute($stud_select) or user_error("讀取失敗！<br>$stud_select",256);
	while(!$recordSet->EOF) {
		if (array_key_exists($recordSet->fields[student_sn],$decrease_dollars)) {
			foreach($decrease_dollars[$recordSet->fields[student_sn]] as $key=>$value){
				if($key<>"total") {
					$data_arr[$recordSet->fields[grade]][$key][decrease_count]+=1;
					$data_arr[$recordSet->fields[grade]][$key][decrease_dollars]+=$value[dollars];
				}
			}
		}
		$recordSet->MoveNext();
	}
	//將各學年的細項做小計
	//$detail_list=array_keys(current($data_arr));
	foreach($data_arr as $grade=>$detail){
		foreach($detail as $detail_name=>$detail_value){
			foreach($detail_value as $key=>$value){
				$data_arr[$grade]['年級合計'][$key]+=$value;
			}
		}
	}
//echo "=======after count <PRE>";
//print_r($data_arr);
//echo "</PRE>";
	//將陣列轉為HTML表格---顯示  減免人數　減免金額　應收合計
	//顯示標題
	$showdata="<table border='1' cellpadding='3' cellspacing='0' style='border-collapse: collapse' bordercolor='#111111'><tr bgcolor='#CCFFCC'><td rowspan=2 align='center'>收費細目</td>";
	//取得年級
	$grade_list=array_keys($data_arr);
	foreach($grade_list as $grade) {
		$showdata.="<td colspan=5 align='center'>$grade 年級 (".$members[$grade]."人)</td>";
		$sub_title.="<td align='center'>細目額</td><td align='center'>年級<BR>金額</td><td align='center'>減免數</td><td align='center'>減免額</td><td align='center'>應收<BR>合計</td>";
	}
	$showdata.="<td rowspan='2' align='center'>全校<BR>應收<BR>合計</td></tr><tr>$sub_title</tr>";
	//顯示資料
	//取得細目名稱
	$detail_list=array_keys(current($data_arr));
	//print_r($detail_list);
	foreach($detail_list as $detail_key){
		$showdata.="<tr bgcolor='#FFDDFF'><td>$detail_key</td>";
		$school_detail_total=0;
		foreach($grade_list as $grade) {
			$showdata.="<td align='center'>".$data_arr[$grade][$detail_key][singal]."</td>";
			$showdata.="<td align='center'>".$data_arr[$grade][$detail_key][total]."</td>";
			$showdata.="<td align='center'>".$data_arr[$grade][$detail_key][decrease_count]."</td>";
			$showdata.="<td align='center'>".$data_arr[$grade][$detail_key][decrease_dollars]."</td>";
			$detail_should_paid=$data_arr[$grade][$detail_key][total]-$data_arr[$grade][$detail_key][decrease_dollars];
			$showdata.="<td align='center'>$detail_should_paid</td>";
			$school_detail_total+=$detail_should_paid;
			}
		$showdata.="<td align='center'>$school_detail_total</td></tr>";
	}

}

$showdata.="</form></table>";
echo $main.$showdata;
foot();
?>