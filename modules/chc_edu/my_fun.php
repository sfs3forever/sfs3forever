<?php
// $Id: my_fun.php 5310 2009-01-10 07:57:56Z hami $
function year_seme_menu($sel_year,$sel_seme) {
	global $CONN;

	$sql="select year,semester from school_class where enable='1' order by year,semester";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$year=$rs->fields["year"];
		$semester=$rs->fields["semester"];
		if ($year!=$oy || $semester!=$os)
			$show_year_seme[$year."_".$semester]=$year."學年度第".$semester."學期";
		$oy=$year;
		$os=$semester;
		$rs->MoveNext();
	}
	$scys = new drop_select();
	$scys->s_name ="year_seme";
	$scys->top_option = "選擇學期";
	$scys->id = $sel_year."_".$sel_seme;
	$scys->arr = $show_year_seme;
	$scys->is_submit = true;
	return $scys->get_select();
}

function class_year_menu($sel_year,$sel_seme,$id) {
	global $school_kind_name,$CONN;

	$sql="select distinct c_year from school_class where year='$sel_year' and semester='$sel_seme' and enable='1' order by c_year";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$show_year_name[$rs->fields["c_year"]]=$school_kind_name[$rs->fields["c_year"]]."級";
		$rs->MoveNext();
	}
	$scy = new drop_select();
	$scy->s_name ="year_name";
	$scy->top_option = "選擇年級";
	$scy->id = $id;
	$scy->arr = $show_year_name;
	$scy->is_submit = true;
	return $scy->get_select();
}

function class_name_menu($sel_year,$sel_seme,$sel_class,$id) {
	global $CONN;

	$sql="select distinct c_name,c_sort from school_class where year='$sel_year' and semester='$sel_seme' and c_year='$sel_class' and enable='1' order by c_sort";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$show_class_year[$rs->fields["c_sort"]]=$rs->fields["c_name"]."班";
		$rs->MoveNext();
	}
	$sc = new drop_select();
	$sc->s_name ="me";
	$sc->top_option = "選擇班級";
	$sc->id = $id;
	$sc->arr = $show_class_year;
	$sc->is_submit = true;
	return $sc->get_select();
}

//由資料表中取得升學學校
function get_grade_school_table($sel_year='') {
        global $CONN ;      
	if ($sel_year=='')
        	$sel_year = curr_year(); //目前學年		
	$sqlstr = " SELECT new_school  FROM  grad_stud where stud_grad_year = '$sel_year' group by new_school " ;

	$result =$CONN->Execute($sqlstr) or user_error("讀取失敗！<br>$sqlstr",256) ; 
	while ($row = $result->FetchRow() )
	    if ( $row["new_school"]){
	        $sc_name = $row["new_school"];
		$temp[] = $sc_name ;
	    }	
	return $temp;	
} 

//取得預設值中的升學學校名稱(含表中)
function get_grade_school() {
      global $G_SCHOOL_NAME ;  
      $sc_name_arr = get_grade_school_table() ;
      $tmp_arr = split("," , $G_SCHOOL_NAME) ;
      foreach ($tmp_arr as $key =>$value ) {
        if (!in_array($value, $sc_name_arr))
        $sc_name_arr[] = $value ;
      }  
      return $sc_name_arr ;   
}

//數字轉為國字90 -> 九０
function PNum2CNum($num) {	
	$ChineseNumeric =array ('０','一','二','三','四','五','六','七','八','九');
        for ($i=0 ;$i<strlen($num); $i++){
            $d = substr($num , $i,1) ;
            $str .= $ChineseNumeric[$d] ;
        }
        return $str ;
}             
?>