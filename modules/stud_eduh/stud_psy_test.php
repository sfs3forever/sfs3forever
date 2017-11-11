<?php 

// $Id: stud_psy_test.php 7441 2013-08-28 14:55:27Z infodaes $

// 載入設定檔
include "config.php";
// 認證檢查
sfs_check();

//升級檢查 
require "module-upgrade.php";

$this_year = sprintf("%03d",curr_year());

//目前學年學期
$this_seme_year_seme = sprintf("%03d%d",curr_year(),curr_seme());

$sel_seme_year_seme = $_POST[sel_seme_year_seme];
if ($sel_seme_year_seme=='')
	$sel_seme_year_seme = $this_seme_year_seme;

$work_year=substr($sel_seme_year_seme,0,-1);
$work_seme=substr($sel_seme_year_seme,-1);
	
//儲存紀錄處理
if($_POST['go']=='匯入'){
	if($_POST['content']){
		$content=explode("\r\n",$_POST['content']);
		foreach($content as $key=>$value){
			$student_data=explode("\t",$value);
			//抓取student_sn
			$seme_class=$student_data[0];
			$seme_num=$student_data[1];
			$stud_id=$student_data[2];

			if($stud_id and $seme_class){
				//找出student_sn
				$query="select student_sn from stud_seme where seme_year_seme='$sel_seme_year_seme' and stud_id='$stud_id' and seme_class=$seme_class";
				$res=$CONN->Execute($query) or die("SQL錯誤:$query");
				if($res->recordcount()){
					$student_sn=$res->fields[0];
					$batch_values.="('$work_year','$work_seme','{$student_data[4]}','$student_sn','{$student_data[5]}','{$student_data[6]}','{$student_data[7]}','{$student_data[8]}','{$student_data[9]}','{$student_data[10]}','{$_SESSION[session_tea_sn]}',now()),";
					$ok_msg.="班級：$seme_class 座號：$seme_num 學號：$stud_id ，資料匯入OK！<br>";
				} else $err_msg.="班級：$seme_class  學號：$stud_id ，$sel_seme_year_seme 學期的就學紀錄不符，拒絕匯入！ ( 匯入資料之座號：$seme_num )<br>";
			}
		}
		if($batch_values) {
			$batch_values=substr($batch_values,0,-1);
			$batch_values="INSERT INTO stud_psy_test(year,semester,test_date,student_sn,item,score,model,standard,pr,explanation,teacher_sn,update_time) VALUES $batch_values ;";
			$res=$CONN->Execute($batch_values) or die("SQL錯誤:$batch_values");
		}

	}
}
	
	
	
$year=substr($sel_seme_year_seme,0,3);
$semester=substr($sel_seme_year_seme,-1);

$do_key = $_GET[do_key];
if ($do_key == '')
	$do_key = $_POST[do_key];

	

$c_curr_class = $_POST[c_curr_class];
$c_curr_seme = $_POST[c_curr_seme];
//更改班級
if ($c_curr_class=="")
	// 利用 $IS_JHORES 來 區隔 國中、國小、高中 的預設值
	$c_curr_class = sprintf("%03s_%s_%02s_%02s",curr_year(),curr_seme(),$default_begin_class + round($IS_JHORES/2),1);
else {
	$temp_curr_class_arr = explode("_",$c_curr_class); //091_1_02_03
	$c_curr_class = sprintf("%03s_%s_%02s_%02s",substr($c_curr_seme,0,3),substr($c_curr_seme,-1),$temp_curr_class_arr[2],$temp_curr_class_arr[3]);
}
	
if($c_curr_seme =='')
	$c_curr_seme = sprintf ("%03s%s",curr_year(),curr_seme()); //現在學年學期

//更改學期
if ($c_curr_seme != "")
	$curr_seme = $c_curr_seme;
	$c_curr_class_arr = explode("_",$c_curr_class);
	$seme_class = intval($c_curr_class_arr[2]).$c_curr_class_arr[3];
if($c_curr_seme =='')
	$c_curr_seme = sprintf ("%03s%s",curr_year(),curr_seme()); //現在學年學期

$c_curr_class_arr = explode("_",$c_curr_class);
$seme_class = intval($c_curr_class_arr[2]).$c_curr_class_arr[3];

//寫入前預先進行 < > ' " &字元替換  避免HTML特殊字元造成顯示或sxw報表錯誤
$char_replace=array("<"=>"＜",">"=>"＞","'"=>"’","\""=>"”","&"=>"＆");
foreach($char_replace as $key=>$value){
	$_POST[item]=str_replace($key,$value,$_POST[item]);
	$_POST[model]=str_replace($key,$value,$_POST[model]);
	$_POST[explanation]=str_replace($key,$value,$_POST[explanation]);
}

if ($do_key ==  $newBtn) {
	$seme_year_seme = $_POST[sel_seme_year_seme];
	if ($seme_year_seme =='')
		$seme_year_seme = $this_seme_year_seme;
	if ($_POST['all_class']) { //複製到全班
		$query  = "SELECT  a.student_sn  FROM  stud_base a,stud_seme b where a.stud_id=b.stud_id  and (a.stud_study_cond=0 or a.stud_study_cond=5) and  b.seme_year_seme='$c_curr_seme' and b.seme_class='$seme_class'   ";   //SQL 命令		
		$res= $CONN->Execute($query);
		while($row = $res->fetchrow()) {
				$stud_temp_sn= $row['student_sn'];
				$sql_insert = "insert into stud_psy_test (year,semester,student_sn,item,score,model,standard,pr,explanation,test_date,teacher_sn,update_time) values ('$year','$semester','$stud_temp_sn','$_POST[item]','$_POST[score]','$_POST[model]','$_POST[standard]','$_POST[pr]','$_POST[explanation]','$_POST[test_date]','$_SESSION[session_tea_sn]',now())";			
				$CONN->Execute($sql_insert) or die($sql_insert);
		}
	}
	else {		
		$sql_insert = "insert into stud_psy_test (year,semester,student_sn,item,score,model,standard,pr,explanation,test_date,teacher_sn,update_time) values ('$year','$semester','$_POST[student_sn]','$_POST[item]','$_POST[score]','$_POST[model]','$_POST[standard]','$_POST[pr]','$_POST[explanation]','$_POST[test_date]','$_SESSION[session_tea_sn]',now())";
		$CONN->Execute($sql_insert) or die($sql_insert);
	}

	//回到目前學年
		$sel_this_year = $this_year;		
}
elseif ($do_key ==  $editBtn ) {	
	$sql_update = "update stud_psy_test set item='$_POST[item]',score='$_POST[score]',model='$_POST[model]',standard='$_POST[standard]',pr='$_POST[pr]',explanation='$_POST[explanation]',test_date='$_POST[test_date]',teacher_sn='$_SESSION[session_tea_sn]',update_time=now() where sn=$_POST[sn]";
	$CONN->Execute($sql_update) or die($sql_update);

}
else if ($_POST['act'] ==  "delete" ) {
		$query = "delete from stud_psy_test where sn='$_POST[sn]' and teacher_sn='$_SESSION[session_tea_sn]'";
		$CONN->Execute($query);
}
elseif ($_POST['act']== "edit" ) {	
	$sql_select = "select * from stud_psy_test where sn='$_POST[sn]'";	
	$recordSet = $CONN->Execute($sql_select) or die ($sql_select);
	while (!$recordSet->EOF) {
		$sn = $recordSet->fields["sn"];
		$student_sn = $recordSet->fields["student_sn"];
		$year = $recordSet->fields["year"];
		$semester = $recordSet->fields["semester"];
		$item = $recordSet->fields["item"];
		$score = $recordSet->fields["score"];
		$model = $recordSet->fields["model"];
		$standard = $recordSet->fields["standard"];
		$pr = $recordSet->fields["pr"];
		$explanation = $recordSet->fields["explanation"];
		$test_date = $recordSet->fields["test_date"];
		$teacher_sn = $recordSet->fields["teacher_sn"];
		$recordSet->MoveNext();
	};
 }


if ($student_sn=='')
	$student_sn= $_REQUEST[student_sn];

// 印出頁頭
head();

//選單連結字串
$linkstr = "student_sn=$student_sn&c_curr_class=$c_curr_class&c_curr_seme=$c_curr_seme";
//模組選單
print_menu($menu_p,$linkstr);


//儲存後到下一筆
if ($_POST[chknext])
	$student_sn = $_POST[nav_next];	
$query = "select a.student_sn,a.stud_name from stud_base a,stud_seme b where a.student_sn=b.student_sn and a.student_sn='$student_sn' and (a.stud_study_cond=0 or a.stud_study_cond=5)  and  b.seme_year_seme='$c_curr_seme' and b.seme_class='$seme_class'";
$res = $CONN->Execute($query) or die($res->ErrorMsg());
//未設定或改變在職狀況或刪除記錄後 到第一筆
if ($student_sn =="" || $res->RecordCount()==0) {
	$temp_sql = "select a.student_sn,a.stud_name from stud_base a,stud_seme b where a.student_sn=b.student_sn  and  (a.stud_study_cond=0 or a.stud_study_cond=5) and  b.seme_year_seme='$c_curr_seme' and b.seme_class='$seme_class' order by b.seme_num ";
		$res = $CONN->Execute($temp_sql) or die($temp_sql);
		$student_sn = $res->fields[0];
}
                                                                                                                    
$stud_name = $res->fields[1];

?> 
<script language="JavaScript">
function checkok()
{
	var OK=true;
	document.myform.nav_next.value = document.gridform.nav_next.value;	
	return OK
}

function setfocus(element) {
	element.focus();
 	return; 
}
//-->

</script>

<body onload="setfocus(document.myform.test_date)">
<table BORDER=0 CELLPADDING=0 CELLSPACING=0 CLASS="tableBg" WIDTH="100%" > 
<tr>
<td valign=top align="right">

<?php
	//建立左邊選單   
	$class_seme_p = get_class_seme(); //學年度	
	$upstr = "<select name=\"c_curr_seme\" onchange=\"this.form.submit()\">\n";
	while (list($tid,$tname)=each($class_seme_p)){
		if ($curr_seme== $tid)
      			$upstr .= "<option value=\"$tid\" selected>$tname</option>\n";
      		else
      			$upstr .= "<option value=\"$tid\">$tname</option>\n";
	}
	$upstr .= "</select><br>";
	
	$s_y = substr($c_curr_seme,0,3);
	$s_s = substr($c_curr_seme,-1);

	$tmp=&get_class_select($s_y,$s_s,"","c_curr_class","this.form.submit",$c_curr_class);
	$upstr .= $tmp;

	$temparr = class_base();   
	$grid1 = new ado_grid_menu($_SERVER['PHP_SELF'],$URI,$CONN);  //建立選單	   
	$grid1->bgcolor = $gridBgcolor;  // 顏色   
	$grid1->row = $gridRow_num ;	     //顯示筆數   
	$grid1->key_item = "student_sn";  // 索引欄名  	
	$grid1->display_item = array("sit_num","stud_name");  // 顯示欄名   
	$grid1->display_color = array("1"=>"$gridBoy_color","2"=>"$gridGirl_color"); //男女生別
	$grid1->color_index_item ="stud_sex" ; //顏色判斷值
	$grid1->class_ccs = " class=leftmenu";  // 顏色顯示
	$grid1->sql_str = "select a.student_sn,a.stud_name,a.stud_sex,b.seme_num as sit_num from stud_base a,stud_seme b where a.student_sn=b.student_sn  and (a.stud_study_cond=0 or a.stud_study_cond=5) and  b.seme_year_seme='$c_curr_seme' and b.seme_class='$seme_class' order by b.seme_num ";   //SQL 命令   
	$downstr = "<input type='hidden' name='sel_seme_year_seme' value='{$_POST['sel_seme_year_seme']}'>'";
	$grid1->do_query(); //執行命令
	$grid1->print_grid($student_sn,$upstr,$downstr); // 顯示畫面   
 
?>
    </td>
    <td width="100%" valign=top bgcolor="#CCCCCC">
    <form name ="myform" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post"  <?php
	//當mnu筆數為0時 讓 form 為 disabled
	if ($grid1->count_row==0 && !($key == $newBtn || $key == $postBtn))  
		echo " disabled "; 
	?> onsubmit="checkok()"  >


<!- ------------------ 輸入表單開始 ------------------------------ !>
  <table border="1" cellspacing="0" cellpadding="2" bordercolorlight="#333354" bordercolordark="#FFFFFF"  width="100%" class="main_body" >
<tr>
<td class=title_mbody colspan=5 align=center  background="images/tablebg.gif" >
<?php 
	echo "<input type=\"hidden\" name=\"sn\" value=\"$sn\">";	
	echo "<input type=\"hidden\" name=\"student_sn\" value=\"$student_sn\">";
	//允許修改上學期資料
	if ($old_year_is_edit) {
		$sel = new drop_select();
		$sel->s_name ="sel_seme_year_seme";
		$sel->id = $sel_seme_year_seme;
		$sel->is_submit = true;
		$sel->has_empty = false;
		$sel->arr = get_class_seme();
		$sel->do_select();
		echo sprintf(" --%s (%s)",$stud_name,$student_sn);
	}
	else   	
		echo sprintf("%d學年第%d學期 %s--%s (%s)",substr($c_curr_seme,0,-1),substr($c_curr_seme,-1),$class_list_p[$c_curr_seme],$stud_name,$student_sn);

	//判斷是否為個人記錄	
	if ($teach_id == $_SESSION[session_tea_sn] || $teach_id=='') {
			
		if ($_POST[chknext])
    			echo "<input type=checkbox name=chknext value=1 checked >";			
    		else
    			echo "<input  id='chknext'  type=checkbox name=chknext value=1 >";
    			
    		echo "<label for='chknext'>自動跳下一位</label> &nbsp;";
		//		echo ($do_key == 'edit')?"<input type=\"submit\" name=\"do_key\" value=\"$editBtn\"> <input type=\"hidden\" name=\"ss_id\" value=\"$ss_id\">":"<input type=\"submit\" name=\"do_key\" value=\"$newBtn\">";
		if ($_POST['act'] == 'edit'){
    			echo "<input type=\"submit\" name=\"do_key\" value=\"$editBtn\"> <input type=\"hidden\" name=\"ss_id\" value=\"$ss_id\">";
    		}
    		else {
    			echo "<input id='all_class' type=checkbox  name='all_class' value=1 >";    			
    			echo "<label for='all_class'>複製到全班</label> &nbsp;";
    			echo"<input type=\"submit\" name=\"do_key\" value=\"$newBtn\">";
    		}
	}
?>
	</td>	
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">測驗日期</td>
	<td CLASS="gendata"><input type="text" size="12" maxlength="12" name="test_date" value="<?php echo $test_date ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">心理測驗名稱</td>
	<td CLASS="gendata"><input type="text" size="60" maxlength="60" name="item" value="<?php echo $item ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">原始分數</td>
	<td CLASS="gendata"><input type="text" size="40" maxlength="40" name="score" value="<?php echo $score ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">常模樣本</td>
	<td CLASS="gendata"><input type="text" size="40" maxlength="40" name="model" value="<?php echo $model ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">標準分數</td>
	<td CLASS="gendata"><input type="text" size="40" maxlength="40" name="standard" value="<?php echo $standard ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">百分等級</td>
	<td CLASS="gendata"><input type="text" size="40" maxlength="40" name="pr" value="<?php echo $pr ?>"></td>
</tr>
<tr>
	<td align="right" CLASS="title_sbody1">解釋</td>
	<td CLASS="gendata"><input type="text" size="100" maxlength="100" name="explanation" value="<?php echo $explanation ?>"></td>
</tr>

</table>
<input type="hidden" name="student_sn" value="<?php echo $student_sn ?>">
<input type="hidden" name="seme_year_seme" value="<?php echo $seme_year_seme ?>">
<input type="hidden" name="c_curr_seme" value="<?php echo $c_curr_seme ?>">
<input type="hidden" name="c_curr_class" value="<?php echo $c_curr_class ?>">
<input type="hidden" name="act" >
<input type=hidden name=nav_next >

<center><b>心理測驗記錄</b></center> 

<table border="1" cellspacing="0" cellpadding="2" bordercolorlight="#333354" bordercolordark="#FFFFFF"  width="100%" class=main_body >
<tr><td>學期</td><td>測驗日期</td><td>心理測驗名稱</td><td>原始分數</td><td>常模樣本</td><td>標準分數</td><td>百分等級</td><td>解釋</td><td>建檔者</td><td>動作</td></tr>
<?php
$sql_select = "select * from stud_psy_test where student_sn='$student_sn' order by year,semester,student_sn desc  ";
$recordSet = $CONN->Execute($sql_select) or die($sql_select);

while (!$recordSet->EOF) {
	$sn = $recordSet->fields["sn"];
	$student_sn = $recordSet->fields["student_sn"];
	$year = $recordSet->fields["year"];
	$semester = $recordSet->fields["semester"];
		
	$item = $recordSet->fields["item"];
	$score = $recordSet->fields["score"];
	$model = $recordSet->fields["model"];
	$standard = $recordSet->fields["standard"];
	$pr = $recordSet->fields["pr"];
	$explanation = $recordSet->fields["explanation"];
	$test_date = $recordSet->fields["test_date"];
	$teacher_sn = $recordSet->fields["teacher_sn"];
	
	$name = get_teacher_name($teacher_sn);
	$seme_str = $year."學年第".$semester."學期";
	$seme_year_seme  = sprintf("%03d%d",$year,$semester);
		
	echo "<td>$seme_str</td><td>$test_date</td><td>$item</td><td>$score</td><td>$model</td><td>$standard</td><td>$pr</td><td>$explanation</td><td>$name</td><td>";
	//if($teacher_sn == $_SESSION[session_tea_sn]) {
	//	echo "<a href=\"{$_SERVER['PHP_SELF']}?do_key=edit&sn=$sn\">修</a>|<a href=\"{$_SERVER['PHP_SELF']}?do_key=delete&sn=$sn\" onClick=\"return confirm('確定刪除?');\">刪</a>";
	//}
	
	if($seme_year_seme == $sel_seme_year_seme) {
	
		if ($teacher_sn == $_SESSION[session_tea_sn]) {
			echo  "<input type=\"button\"  onclick=\"sel_st($sn)\"  value=\"修改\" >";
			echo  " <input type=\"button\"  onclick=\"del_st($sn)\"  value=\"刪除\" >";						
		}
					
	}

	echo "</td></tr>";
	
    $recordSet->MoveNext();
};

?>
</table>
</TD>
</TR>
</TABLE>
<table border='2' cellpadding='3' cellspacing='0' style='border-collapse: collapse; font-size=12px;' bordercolor='#119911' width=100%>
		<tr><td align='center' bgcolor='#ccffff'>測驗結果批次匯入(自EXCEL複製貼於下方粉底處)</td></tr>
		<tr><td>
			<li>本功能可匯入選定學期任何班級學生的心理測驗紀錄。</li>
			<li>程式不會檢查是否重複匯入，也不提供批次刪除功能。</li>
			<li>匯入的資料欄位須為固定的順序：班級、座號、學號、姓名、測驗日期、心理測驗名稱、原始分數、常模樣本、標準分數、百分等級、解釋。</li>
			<li>班級請以代碼呈現，如國小二年甲班請輸入201、國中二年一班請輸入801。</li>
			<li>班級、學號是比對學生的紀錄依據，若有錯誤將會造成張冠李戴。座號、姓名係供閱讀用，可留白！</li>
			<li>複製貼上的資料僅需貼上學生的紀錄列即可！</li>
			</td></tr>
		<tr><td><textarea name='content' rows='10' cols='120'></textarea></td></tr>
		<tr><td align='center' bgcolor='#ccffff'><input type='submit' name='go' value='匯入'></td></tr>
		</table><br><font color='blue'><?php echo $ok_msg ?></font><br><font color='red'><?php echo$err_msg ?></font>
</FORM>
<?php
//印出頁尾
foot();
?>
<script type="text/javascript">
function  sel_st(st) {
	var form = document.myform;
	form.act.value = 'edit';	
	form.sn.value = st;
	
	form.submit();
}

function  del_st(st) {
	if (confirm('確定刪除?')) {
		var form = document.myform;
		form.act.value = 'delete';	
		form.sn.value = st;
		form.submit();
	}
}
</script>