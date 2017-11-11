<?php
	
	$stud_moved_array=array("頧"=>"1","頧"=>"2","銝剛?敺拙飛"=>"3","隡飛敺拙飛"=>"4","?Ｘ平"=>"5","隡飛"=>"6","?箏?"=>"7","隤踵"=>"8","??"=>"9","??"=>"10","甇颱滿"=>"11","銝剛?"=>"12","?啁??亙飛"=>"13","頧飛敺拙飛"=>"14","?典振?芸飛"=>"15");

	//echo "<BR>".$stud_moved_array["頧"]."<BR>".$stud_moved_array["頧"]."<BR>".$stud_moved_array["銝剛?敺拙飛"]."<BR>".$stud_moved_array["隡飛敺拙飛"]."<BR>";

	$seme_year_seme_s=0+$seme_year_seme;
	$SQL='';
	$move_datas=$student->?啣?鞈?->?啣?鞈?_鞈??批捆;
	foreach($move_datas as $move_data){
		//隞乩?撖怠 ?啣?鞈?銵?stud_move
		$sst_city=$move_data->?停霈蝮??;
		$sst_school=$move_data->?停霈摮豢?迂;
		$sst_code=$move_data->?停霈摮豢隞?Ⅳ;
		$move_date=$move_data->?啣??交?;
		$move_c_unit=$move_data->?啣??詨?璈??迂;
		
		$reason=$move_data->?啣???;
		$move_kind=$stud_moved_array["$reason"];
		
		$move_c_date=$move_data->?詨???_?交?;
		$move_c_word=$move_data->?詨???_摮?
		$move_c_num=$move_data->?詨???_??
		$update_id=$_SESSION['session_log_id'];
		$update_ip=$REMOTE_ADDR;
		
		if($reason<>"" AND $reason<>"null") {
			$SQL.="($student_sn,'$stud_id','$move_kind','$seme_year_seme_s','$move_date','$move_c_unit','$move_c_date','$move_c_word','$move_c_num',now(),'$update_id','$update_ip','$reason','$sst_city','$sst_school','$sst_code'),";
		}
	}
	$SQL=substr($SQL,0,-1);
	$SQL="INSERT INTO stud_move_import(student_sn,stud_id,move_kind,move_year_seme,move_date,move_c_unit,move_c_date,move_c_word,move_c_num,update_time,update_id,update_ip,reason,city,school,school_id) VALUES ".$SQL;
	if(substr($SQL,-7)<>'VALUES ') {
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		$SQL=str_replace("'null'","''",$SQL);
		//??蝛箏?????
		$rs = $CONN->Execute("DELETE FROM stud_move_import WHERE student_sn=$student_sn AND move_year_seme='$seme_year_seme_s'") or user_error("?芷 stud_move_import ?抒?頧飛????隤?( student_sn:$student_sn  seme_year_seme=$seme_year_seme_s)! <br><br>",256) ;
		$rs = $CONN->Execute($SQL) or user_error(" ?臬 student_sn=$student_sn  stud_id=$stud_id ?啣?閮? ( stud_move_import ) 憭望?! <br><br>$SQL",256) ;
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬 student_sn=$student_sn  stud_id=$stud_id ?啣?閮? ( stud_move_import ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	}	
?>