<?php

include "config.php";

sfs_check();

//秀出網頁
head("均衡學習");
print_menu($menu_p);

//學期別
$work_year_seme=$_REQUEST['work_year_seme'];
if($work_year_seme=='') $work_year_seme = sprintf("%03d%d",curr_year(),curr_seme());
$curr_year_seme=sprintf("%03d%d",curr_year(),curr_seme());
$academic_year=substr($curr_year_seme,0,-1);
$work_year=substr($work_year_seme,0,-1);
$session_tea_sn=$_SESSION['session_tea_sn'];

$stud_class=$_REQUEST['stud_class'];
$selected_stud=$_POST['selected_stud'];
$edit_sn=$_POST['edit_sn'];

if($_POST['act']=='統計本年度所有開列學生均衡學習的積分'){
	//抓本年度所有開列學生的student_sn
	$sn_array=get_student_list($work_year);

	//均衡學習
	$score_balance_array=get_student_score_balance($sn_array);

	//更新積分
	foreach($sn_array as $key=>$student_sn){
		$sql="update 12basic_tech set score_balance_health='{$score_balance_array[$student_sn]['health']['bonus']}',score_balance_art='{$score_balance_array[$student_sn]['art']['bonus']}',score_balance_complex='{$score_balance_array[$student_sn]['complex']['bonus']}' where academic_year=$work_year AND student_sn=$student_sn AND editable='1'";
		$res=$CONN->Execute($sql) or user_error("讀取失敗！<br>$sql",256);
	}
};

if($_POST['act']=='清除所有開列學生均衡學習的積分'){
	$sql="update 12basic_tech set score_balance_health=NULL,score_balance_art=NULL,score_balance_complex=NULL where academic_year=$work_year AND editable='1'";
	$res=$CONN->Execute($sql) or user_error("讀取失敗！<br>$sql",256);
};

if($_POST['act']=='確定修改'){
	//決定高限
	$_POST['score_balance_health']=min($_POST['score_balance_health'],$balance_score);
	$_POST['score_balance_art']=min($_POST['score_balance_art'],$balance_score);
	$_POST['score_balance_complex']=min($_POST['score_balance_complex'],$balance_score);
	
	//更新
	$sql="update 12basic_tech set score_balance_health={$_POST['score_balance_health']},score_balance_art={$_POST['score_balance_art']},score_balance_complex={$_POST['score_balance_complex']},balance_memo='{$_POST['memo']}'
		where academic_year=$work_year AND student_sn=$edit_sn AND editable='1'";
	
	$res=$CONN->Execute($sql) or user_error("讀取失敗！<br>$sql",256);
	$edit_sn=0;
};


//橫向選單標籤
$linkstr="work_year_seme=$work_year_seme&stud_class=$stud_class";
echo print_menu($MENU_P,$linkstr);

//取得年度與學期的下拉選單
$recent_semester=get_recent_semester_select('work_year_seme',$work_year_seme);

//顯示班級
$class_list=get_semester_graduate_select('stud_class',$work_year_seme,$graduate_year,$stud_class);

//檢查是否有可修改紀錄的參與免試學生
$editable_sn_array=get_editable_sn($work_year);

if($work_year==$academic_year and $editable_sn_array and $stud_class) $tool_icon.=" <input type='submit' value='統計本年度所有開列學生均衡學習的積分' name='act' onclick='return confirm(\"確定要重新統計本年度所有開列學生均衡學習的積分?\")'>
		<input type='submit' value='清除所有開列學生均衡學習的積分' name='act' onclick='return confirm(\"確定要\"+this.value+\"?\")'>";

$main="<form name='myform' method='post' action='$_SERVER[PHP_SELF]'><input type='hidden' name='edit_sn' value='$edit_sn'>$recent_semester $class_list $tool_icon <table border='2' cellpadding='3' cellspacing='0' style='border-collapse: collapse; collapse; font-size:9pt;' bordercolor='#111111' id='AutoNumber1' width='100%'>";

if($stud_class)
{
	//取得指定學年已經開列的學生清單
	$listed=get_student_list($work_year);
	
	//取得指定學年已經開列的學生多元學習的分數
	$balance_array=get_student_balance($work_year);

	//取得班級學生student_sn
	$stud_select="SELECT student_sn FROM stud_seme WHERE seme_year_seme='$work_year_seme' AND seme_class='$stud_class'";
	$recordSet=$CONN->Execute($stud_select) or user_error("讀取失敗！<br>$stud_select",256);
	while(!$recordSet->EOF)
	{
		$sn=$recordSet->fields['student_sn'];
		$class_sn_arr[]=$sn;
		$recordSet->MoveNext();
	}
	$score_balance_array=get_student_score_balance($class_sn_arr);

	
	//取得stud_base中班級學生列表並據以與前sql對照後顯示
	$stud_select="SELECT a.student_sn,a.seme_num,b.stud_name,b.stud_sex,b.stud_id,b.stud_study_year FROM stud_seme a inner join stud_base b on a.student_sn=b.student_sn WHERE a.seme_year_seme='$work_year_seme' AND a.seme_class='$stud_class' AND b.stud_study_cond in (0,5,15) ORDER BY a.seme_num";
	$recordSet=$CONN->Execute($stud_select) or user_error("讀取失敗！<br>$stud_select",256);
	$studentdata="<tr align='center' bgcolor='#ff8888'><td width=80>學號</td><td width=50>座號</td><td width=120>姓名</td><td width=$pic_width>大頭照</td><td width=50>健體</td><td width=50>藝文</td><td width=50>綜合</td><td>積分統計</td><td>備註</td>";
	while(list($student_sn,$seme_num,$stud_name,$stud_sex,$stud_id,$stud_study_year)=$recordSet->FetchRow()) {
		$seme_num=sprintf('%02d',$seme_num);
		$stud_sex_color=($stud_sex==1)?"#CCFFCC":"#FFCCCC";
		$score_balance_health=$balance_array[$student_sn]['score_balance_health'];
		$color_health=($score_balance_health==$score_balance_array[$student_sn]['health']['bonus'])?'#000000':'#ff0000';
		
		$score_balance_art=$balance_array[$student_sn]['score_balance_art'];
		$color_art=($score_balance_art==$score_balance_array[$student_sn]['art']['bonus'])?'#000000':'#ff0000';
		
		$score_balance_complex=$balance_array[$student_sn]['score_balance_complex'];
		$color_complex=($score_balance_complex==$score_balance_array[$student_sn]['complex']['bonus'])?'#000000':'#ff0000';

		$score=$balance_array[$student_sn]['score'];
		$memo=$balance_array[$student_sn]['balance_memo'];
		
		$my_pic=$pic_checked?get_pic($stud_study_year,$stud_id):'';
		$stud_sex_color=array_key_exists($student_sn,$listed)?$stud_sex_color:'#aaaaaa';
		$stud_sex_color=array_key_exists($student_sn,$editable_sn_array)?$stud_sex_color:$uneditable_bgcolor;
		
		$java_script='';
		$action='';
		
		if($student_sn==$edit_sn){
			$score_balance_health="<input type='text' name='score_balance_health' value='$score_balance_health' size=5>";
			$score_balance_art="<input type='text' name='score_balance_art' value='$score_balance_art' size=5>";
			$score_balance_complex="<input type='text' name='score_balance_complex' value='$score_balance_complex' size=5>";

			$memo="<input type='text' name='memo' value='$memo'>";
			//動作按鈕
			$action="<input type='submit' name='act' value='確定修改' onclick='return confirm(\"確定要修改 $stud_name 的均衡學習積分資料?\")'> <input type='submit' name='act' value='取消' onclick='document.myform.edit_sn.value=0;'>";		
			$stud_sex_color='#ffffaa';
		} else {
			if(array_key_exists($student_sn,$listed)){
				$editable=array_key_exists($student_sn,$editable_sn_array)?1:0;
				$stud_sex_color=$editable?$stud_sex_color:$uneditable_bgcolor;
				$java_script=($work_year==$academic_year and $editable and $balance_editable)?"onMouseOver=\"this.style.cursor='hand'; this.style.backgroundColor='#aaaaff';\" onMouseOut=\"this.style.backgroundColor='$stud_sex_color';\" ondblclick='document.myform.edit_sn.value=\"$student_sn\"; document.myform.submit();'":'';
			} else { $stud_sex_color='#aaaaaa'; }
		}	
		$bg_color_health=$score_balance_health?$stud_sex_color:'#cccccc';
		$bg_color_art=$score_balance_art?$stud_sex_color:'#cccccc';
		$bg_color_complex=$score_balance_complex?$stud_sex_color:'#cccccc';
		$bg_color_score=$score?$stud_sex_color:'#cccccc';

		$studentdata.="<tr align='center' bgcolor='$stud_sex_color' $java_script><td>$stud_id</td><td>$seme_num</td><td>$stud_name</td><td>$my_pic</td>
			<td bgcolor='$bg_color_health'><b><font color='$color_health'>$score_balance_health</font></b><br>({$score_balance_array[$student_sn]['health']['avg']})</td>
			<td bgcolor='$bg_color_art'><b><font color='$color_art'>$score_balance_art</font></b><br>({$score_balance_array[$student_sn]['art']['avg']})</td>
			<td bgcolor='$bg_color_complex'><b><font color='$color_complex'>$score_balance_complex</font></b><br>({$score_balance_array[$student_sn]['complex']['avg']})</td>
			<td bgcolor='$bg_color_score'><B>$score</B></td><td align='left'>$memo $action</td></tr>";
	}
}

//顯示封存狀態資訊
echo get_sealed_status($work_year).'<br>';

echo $main.$studentdata."</form></table>";
foot();
?>