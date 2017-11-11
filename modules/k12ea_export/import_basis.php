<?php
	//??XML鞈??湔
	$SQL="UPDATE stud_base SET ";  //stud_name='$stud_name',stud_sex=$stud_sex,stud_birthday='$stud_birthday'
	$SQL.="stud_country='$stud_country',stud_country_kind='$stud_country_kind'";
	$SQL.=",stud_person_id='$stud_person_id',stud_country_name='$stud_country_name'";
	$SQL.=",stud_addr_1='$stud_addr_1',stud_addr_2='$stud_addr_2'";
	$SQL.=",stud_tel_1='$stud_tel_1',stud_tel_2='$stud_tel_2',stud_tel_3='$stud_te1_3'";
	//閮餉圾?典??銝剛???
	//$SQL.=",stud_addr_a='$stud_addr_a',stud_addr_b='$stud_addr_b',stud_addr_c='$stud_addr_c',stud_addr_d='$stud_addr_d'";
	//$SQL.=",stud_addr_e='$stud_addr_e',stud_addr_f='$stud_addr_f',stud_addr_g='$stud_addr_g',stud_addr_h='$stud_addr_h'";
	//$SQL.=",stud_addr_i='$stud_addr_i',stud_addr_j='$stud_addr_j',stud_addr_k='$stud_addr_k',stud_addr_l='$stud_addr_l',stud_addr_m='$stud_addr_m'";
	$SQL.=",stud_class_kind='$stud_class_kind',stud_spe_kind='$stud_spe_kind',stud_spe_class_kind='$stud_spe_class_kind',stud_spe_class_id='$stud_spe_class_id'";
	$SQL.=",stud_preschool_status='$stud_preschool_status',stud_preschool_id='$stud_preschool_id',stud_preschool_name='$stud_preschool_name'";
	$SQL.=",stud_mschool_status='$stud_mschool_status',stud_mschool_id='$stud_mschool_id',stud_mschool_name='$stud_mschool_name'";
	$SQL.=" WHERE student_sn=$student_sn;";
	
	//$SQL=str_replace("'null'","NULL",$SQL);
	$SQL=str_replace("'null'","''",$SQL);
	//$SQL=str_replace(",null,",",NULL,",$SQL);
	$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
	echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬摮貊??箸鞈? ( stud_base ) OK ! ");
	if($ShowSQL) echo '<BR>'.$SQL;

	
	/* ???摮訾???
	$graduate=$basis_data->?Ｖ耨璆剜????
	$WWW=$graduate->?Ｖ耨璆剖;
	$XXX=$graduate->?Ｖ耨璆茁?交?;
	$YYY=$graduate->?Ｖ耨璆茁摮?
	$ZZZ=$graduate->?Ｖ耨璆茁??  */
	
	$fath_relation_array=fath_relation();
	$moth_relation_array=moth_relation();
	$guardian_relation_array=guardian_relation();
	$guardian_relation_array=guardian_relation();
	$edu_kind_array=edu_kind();
	$grad_kind_array=grad_kind();
	
	//隞乩??典?蝝? stud_domicile 鞈?銵?
	$father=$basis_data->?嗉扛?箸鞈?;
	$fath_name=$father->?嗉扛_憪?;
	$fath_birthyear=$father->?嗉扛_?箇?撟湔活;
	$fath_alive=($father->?嗉扛_摮?="甇?)?"2":"1"; 
	$fath_relation=iconv('UTF-8','Big5',$father->???);
		$fath_relation=array_search($fath_relation,$fath_relation_array);	
	$fath_p_id=$father->?嗉扛_頨怠?霅?;
	$fath_education=iconv('UTF-8','Big5',$father->?嗉扛_?蝔漲);
		$fath_education=array_search($fath_education,$edu_kind_array);
	$fath_grad_kind=iconv('UTF-8','Big5',$father->?嗉扛_?Ｖ耨璆剖);
		$fath_grad_kind=array_search($fath_grad_kind,$grad_kind_array);
	$fath_occupation=$father->?嗉扛_?瑟平;
	$fath_unit=$father->?嗉扛_???桐?;
	$fath_work_name=$father->?嗉扛_?瑞迂;
	$fath_phone=$father->?嗉扛_?餉店?Ⅳ-??	
	$fath_home_phone=$father->?嗉扛_?餉店?Ⅳ-摰?
	$fath_hand_phone=$father->?嗉扛_銵??餉店;
	$fath_email=$father->?嗉扛_?餃??萎辣靽∠拳;
	
	$mother=$basis_data->瘥扛?箸鞈?;
	$moth_name=$mother->瘥扛_憪?;
	$moth_birthyear=$mother->瘥扛_?箇?撟湔活;
	$moth_alive=($mother->瘥扛_摮倍=="甇?)?"2":"1";
	$moth_relation=iconv('UTF-8','Big5',$mother->????);
		$moth_relation=array_search($moth_relation,$moth_relation_array);
	$moth_p_id=$mother->瘥扛_頨怠?霅?;
	$moth_education=iconv('UTF-8','Big5',$mother->瘥扛_?蝔漲);
		$moth_education=array_search($moth_education,$edu_kind_array);
	$moth_grad_kind=iconv('UTF-8','Big5',$mother->瘥扛_?Ｖ耨璆剖);
		$moth_grad_kind=array_search($moth_grad_kind,$grad_kind_array);
	$moth_occupation=$mother->瘥扛_?瑟平;
	$moth_unit=$mother->瘥扛_???桐?;
	$moth_work_name=$mother->瘥扛_?瑞迂;
	$moth_phone=$mother->瘥扛_?餉店?Ⅳ-??
	$moth_home_phone=$mother->瘥扛_?餉店?Ⅳ-摰?
	$moth_hand_phone=$mother->瘥扛_銵??餉店;
	$moth_email=$mother->瘥扛_?餃??萎辣靽∠拳;
	
	$grandfather=$basis_data->蟡?箸鞈?;
	$grandfath_name=$father->蟡_憪?;
	$grandfath_alive=($father->蟡_摮倍=="甇?)?"2":"1";
		$grandmother=$basis_data->蟡??箸鞈?;
	$grandmoth_name=$grandmother->蟡?_憪?;
	$grandmoth_alive=($grandmother->蟡?_摮倍=="甇?)?"2":"1";
	
	$guardian=$basis_data->??風鈭?
	$guardian_name=$basis_data->??風鈭榕憪?;
	$guardian_phone=$guardian->??風鈭榕??窗?餉店;
	$guardian_address=$guardian->??風鈭榕?啣?;
	$guardian_relation=iconv('UTF-8','Big5',$guardian->?霅瑚犖銋?靽?;
		$guardian_relation=array_search($guardian_relation,$guardian_relation_array);
	$guardian_p_id=$guardian->??風鈭榕頨怠?霅?;
	$guardian_unit=$guardian->??風鈭榕???桐?;
	$guardian_work_name=$guardian->??風鈭榕?瑞迂;
	$guardian_hand_phone=$guardian->??風鈭榕銵??餉店;
	$guardian_email=$guardian->??風鈭榕?餃??萎辣靽∠拳;
	
	
	//?Ｙ?SQL?stud_domicile鞈?銵?
	$SQL="REPLACE stud_domicile SET stud_id='$stud_id',student_sn=$student_sn";
	$SQL.=",fath_name='$fath_name',fath_birthyear='$fath_birthyear',fath_alive='$fath_alive',fath_relation='$fath_relation'";
	$SQL.=",fath_p_id='$fath_p_id',fath_education='$fath_education',fath_grad_kind='$fath_grad_kind',fath_occupation='$fath_occupation',fath_unit='$fath_unit',fath_work_name='$fath_work_name'";
	$SQL.=",fath_phone='$fath_phone',fath_home_phone='$fath_home_phone',fath_hand_phone='$fath_hand_phone',fath_email='$fath_email'";
	
	$SQL.=",moth_name='$moth_name',moth_birthyear='$moth_birthyear',moth_alive='$moth_alive',moth_relation='$moth_relation'";
	$SQL.=",moth_p_id='$moth_p_id',moth_education='$moth_education',moth_grad_kind='$moth_grad_kind',moth_occupation='$moth_occupation',moth_unit='$moth_unit',moth_work_name='$moth_work_name'";
	$SQL.=",moth_phone='$moth_phone',moth_home_phone='$moth_home_phone',moth_hand_phone='$moth_hand_phone',moth_email='$moth_email'";
	
	$SQL.=",grandfath_name='$grandfath_name',grandfath_alive=$grandfath_alive";
	$SQL.=",grandmoth_name='$grandmoth_name',grandmoth_alive=$grandmoth_alive";
	
	$SQL.=",guardian_name='$guardian_name',guardian_phone='$guardian_phone',guardian_address='$guardian_address',guardian_relation='$guardian_relation',guardian_p_id='$guardian_p_id'";
	$SQL.=",guardian_unit='$guardian_unit',guardian_work_name='$guardian_work_name',guardian_hand_phone='$guardian_hand_phone',guardian_email='$guardian_email'";

	//$SQL.=" WHERE ";
	
	//$SQL=str_replace("'null'","NULL",$SQL);
	$SQL=str_replace("'null'","''",$SQL);
	$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
	echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬摮貊??嗅鞈? ( stud_domicile ) OK ! ");
	if($ShowSQL) echo '<BR>'.$SQL;

	
	//隞乩?蝝???憪此鞈?銵究tud_brother_sister
	$bs_calling_kind_array=bs_calling_kind();
	
	$bses=$basis_data->??憪此->??憪此_鞈??批捆;
	$SQL="";
	foreach($bses as $bs){
		$bs_name=$bs->??憪此_憪?;
		$bs_calling=iconv("UTF-8","Big5//IGNORE",$bs->??憪此_蝔梯?);  //甇方?敺脰?隞?Ⅳ頧?
			$bs_calling=array_search($bs_calling,$bs_calling_kind_array);
		//$bs_gradu=$bs->??憪此_撠梯?摮豢; //甇方?3.0撌脣??
		//?Ｙ?sql瑼??鞈?
		if($bs_name<>"" AND strtoupper($bs_name)<>"NULL") $SQL.="('$stud_id','$bs_name','$bs_calling','$bs_gradu',$student_sn),";
	}
 
	$SQL=substr($SQL,0,-1);
	if($SQL){
		$SQL="INSERT INTO stud_brother_sister(stud_id,bs_name,bs_calling,bs_gradu,student_sn) VALUES ".$SQL;
		if(substr($SQL,-7)<>'VALUES ') {
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			//??蝛箏?????
			$rs = $CONN->Execute("DELETE FROM stud_brother_sister WHERE stud_id=$stud_id AND student_sn=$student_sn") or user_error("ERROR WHILE DELETING THE RECORDS OF TABLE stud_brother_sister ( STUD_ID:$stud_id )! <br><br>",256) ;
			$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬摮貊???憪此鞈? ( stud_brother_sister ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;
		}
	}

	//隞乩?蝝??嗡?閬芸惇鞈?銵究tud_kinfolk
	$kins=$basis_data->?嗡?閬芸惇->?嗡?閬芸惇_鞈??批捆;
	$SQL="";
	foreach($kins as $kin){
		$kin_name=$kin->?嗡?閬芸惇_憪?;
		$kin_calling=$kin->?嗡?閬芸惇_蝔梯?;
		$kin_phone=$kin->?嗡?閬芸惇_?舐窗?餉店;
		$kin_hand_phone=$kin->?嗡?閬芸惇_銵??餉店;
		$kin_email=$kin->?嗡?閬芸惇_?餃??萎辣靽∠拳;
		//?Ｙ?sql瑼??鞈?
		if($kin_name<>"" AND strtoupper($kin_name)<>"NULL") $SQL.="('$stud_id','$kin_name','$kin_calling','$kin_phone','$kin_hand_phone','$kin_email',$student_sn),";
	}
	$SQL=substr($SQL,0,-1);
	if($SQL) {
		$SQL="INSERT INTO stud_kinfolk(stud_id,kin_name,kin_calling,kin_phone,kin_hand_phone,kin_email,student_sn) VALUES ".$SQL;
		if(substr($SQL,-7)<>'VALUES ') {
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			//??蝛箏?????
			$rs = $CONN->Execute("DELETE FROM stud_kinfolk WHERE stud_id=$stud_id AND student_sn=$student_sn") or user_error("ERROR WHILE DELETING THE RECORDS OF TABLE stud_kinfolk ( STUD_ID:$stud_id )! <br><br>",256) ;
			$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬?嗡?閬芸惇鞈? ( stud_kinfolk ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;
		}
	}

	//隞乩?蝝?頛???鞈?銵?stud_eduh   3.0璅?撌脩?蝘駁
	/*
	$eduhs=$basis_data->頛???鞈?;
	$SQL="";
	foreach($eduhs as $eduh){
		$eh_from=$eduh->??靘?;
		$eh_from_date=$eduh->?交??交?;
		$eh_teacher=$eduh->隤??葦;
		$eh_caes=$eduh->??憿;
		$eh_meth=$eduh->?榆銵;
		$eh_resion_memo=$eduh->?拇?銝??;
		$eh_is_over=$eduh->蝯???
		$eh_over_memo=$eduh->蝯???;
		$eh_over_date=$eduh->蝯??交?;
		//xml?舀?惜撘???sfs3 銝?  ?刻艘???text甈?  ?臬?店閬??啗圾??
		$eduh_records=$eduh->頛???蝝??>頛???蝝?鞈??批捆;
		$eh_case_memo="";
		foreach($eduh_records as $eduh_record) {
			$eh_case_date=$eduh_record->頛??交?;
			$eh_case_memo.="#".$eduh_record->頛??交?."\r\n".$eduh_record->頛??批捆."\r\n\r\n";
		}
		$eh_case_relation=$eduh->???蝺刻?;
		//?Ｙ?sql瑼??鞈?
		if($eh_from<>"" AND strtoupper($eh_from)<>"NULL") $SQL.="('$stud_id','$eh_from','$eh_from_date','$eh_teacher','$eh_caes','$eh_meth','$eh_resion_memo','$eh_is_over','$eh_over_memo','$eh_over_date','$eh_case_date','$eh_case_memo','$eh_case_relation'),";
	}
	
	$SQL=substr($SQL,0,-1);
	$SQL="INSERT INTO stud_eduh(stud_id,eh_from,eh_from_date,eh_teacher,eh_caes,eh_meth,eh_resion_memo,eh_is_over,eh_over_memo,eh_over_date,eh_case_date,eh_case_memo,eh_case_relation) VALUES ".$SQL;
	if(substr($SQL,-7)<>'VALUES ') {
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		//??蝛箏?????
		$rs = $CONN->Execute("DELETE FROM stud_eduh WHERE stud_id=$stud_id") or user_error("ERROR WHILE DELETING THE RECORDS OF TABLE stud_eduh ( STUD_ID:$stud_id )! <br><br>",256) ;
		$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬頛???鞈? ( stud_eduh ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	}
	*/
?>
