<?php
	$seme_datas=$student->摮豢?鞈?->?摮豢?鞈?;
	//print_R($seme_datas);
	//echo iconv("UTF-8","Big5//IGNORE","<BR><BR>===== 摮豢?鞈?銵冽??BR><BR>");
	
//echo "<PRE>";
//print_r($seme_datas);
//echo "</PRE>";
//exit;	

	foreach($seme_datas as $seme_data){
		$seme_year_seme=sprintf("%03d%d",$seme_data->摮詨僑??$seme_data->摮豢???;
		$current_year=$seme_data->摮詨僑??
		$current_semester=$seme_data->摮豢???
		$seme_class_grade=$seme_data->?剔?摨扯?->撟渡?;
		$seme_class_name=$seme_data->?剔?摨扯?->?剔?;
		$seme_num=$seme_data->?剔?摨扯?->摨扯?;
		$teacher_name=$seme_data->摮豢??蜀->撠葦憪?;


		//隞乩?鞈?閮??函蝝停霈蝝??stud_seme_import
		$SQL="REPLACE stud_seme_import set seme_year_seme='$seme_year_seme',stud_id='$stud_id',seme_class_grade='$seme_class_grade',seme_class_name='$seme_class_name',teacher_name='$teacher_name'";
		$SQL.=",seme_num=$seme_num,student_sn=$student_sn;";
		$SQL=str_replace("'null'","''",$SQL);
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		if($SQL) $rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]摮豢??剔?撠梯?鞈? ( stud_seme_import ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	

		//隞乩?鞈?閮??券??飛??蝮曇??” stud_seme_final_score
		
		//蝟餌絞撠炎?乩蒂?萄遣?啁?鞈?銵?
		$SQL="CREATE TABLE IF NOT EXISTS `stud_seme_final_score` (
			`student_sn` smallint( 6  ) NOT  NULL default '0',
			`seme_year_seme` varchar( 5 ) NOT NULL default '',
			`area` varchar(40) NOT NULL default  '',
			`score` tinyint(4) NULL ,
			`description` varchar(120)  NULL,
			`comment` varchar(20)  NULL ,
			PRIMARY KEY (`student_sn`,`seme_year_seme`,`area`))";
		$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE CREATEING TABLE.....<br><br>$SQL",256);
		
		$seme_score=$seme_data->摮豢??蜀;
		//---------------------------------------------
		$topics["1"]="隤?_摮貊???";
		$topics["2"]="?詨飛_摮貊???";
		$topics["3"]="?芰??瘣餌??_摮貊???";
		$topics["4"]="蝷暹?_摮貊???";
		$topics["5"]="?亙熒???淪摮貊???";
		$topics["6"]="???犖?摮貊???";
		$topics["7"]="?暑隤脩?_摮貊???";
		$topics["8"]="蝬?瘣餃?_摮貊???";
		
		$topics["9"]="?砍?隤?";
		$topics["10"]="?砍?隤?";
		$topics["11"]="?梯?";
		//---------------------------------------------
		$ss_links["1"]="";
		$ss_links["2"]="?詨飛";
		$ss_links["3"]="?芰??瘣餌??";
		$ss_links["4"]="蝷暹?";
		$ss_links["5"]="?亙熒????;
		$ss_links["6"]="???犖??;
		$ss_links["7"]="?暑";
		$ss_links["8"]="蝬?瘣餃?";
		
		$ss_links["9"]="隤?-?砍?隤?";
		$ss_links["10"]="隤?-??隤?";
		$ss_links["11"]="隤?-?梯?";
		//---------------------------------------------
				/*
         * ??隤?_摮貊??????膩 , ?拍 explode ???蝯行??????隤? 2015.11.09 by smallduh
         */
        $lang_all=explode(';',$seme_score->隤?_摮貊??????膩,3);
        
		$SQL="";
		$SQL2="";
		$SQL3="";
		foreach($topics as $key=>$topic){
			$content_score="$topic"."?曉??嗆?蝮?;
			$content_description="$topic"."???膩";
			
			$area_score=$seme_score->$content_score;
			$area_description=$seme_score->$content_description;
			   	/*
         	 * ???砍?隤?????隤???摮?餈? ?典??脣???隤?_摮貊????? ?誨 2015.11.09 by smallduh
        	 */
			     switch ($topic) {
                case '?砍?隤?':
                    $area_description=$lang_all[0];
                    break;
                case '?砍?隤?':
                    $area_description=$lang_all[1];
                    break;
                case '?梯?':
                    $area_description=$lang_all[2];
                    break;
           }
           
			if($topic=="?砍?隤?")
			{
				$area_comment=",comment='$seme_score->?砍?隤?憿'";
			} else {
				$area_comment="";
			}			
			$SQL.="REPLACE stud_seme_final_score SET seme_year_seme='$seme_year_seme',student_sn=$student_sn,area='$topic',score='$area_score',description='$area_description'$area_comment;<BR>";
			
			//??撟渡????桐誨??
			if($key>1){
				$link_ss=$ss_links[$key];
				$link_ss=iconv("UTF-8","Big5//IGNORE",$link_ss);
				$SQL_SSID="SELECT * FROM score_ss WHERE year='$current_year' AND semester='$current_semester' AND class_year='$seme_class_grade' AND enable=1 AND need_exam=1 AND class_id='' AND link_ss='$link_ss';";
				
				//echo '<BR>'.$SQL_SSID;
				
				$recordSet_SSID=$CONN->Execute($SQL_SSID) or user_error("??撟渡????桐誨?仃??<br>$SQL_SSID",256);
				while ($data_SSID=$recordSet_SSID->FetchRow()) {
					$ss_id=$data_SSID['ss_id'];
					//seme_year_seme  student_sn  ss_id  ss_score  ss_score_memo  
					$SQL2.="REPLACE stud_seme_score SET seme_year_seme='$seme_year_seme',student_sn=$student_sn,ss_id=$ss_id,ss_score='$area_score',ss_score_memo='$area_description';<BR>";
					$SQL3.='#'.$link_ss.'<BR>'."REPLACE stud_seme_score SET seme_year_seme='$seme_year_seme',student_sn=$student_sn,ss_id=$ss_id,ss_score='$area_score',ss_score_memo='$area_description';<BR>";
				}
			}
		}
		
		//??敶扯玨蝔?
		$other_scores=$seme_score->敶扳???>敶扳??筷??蝘;
		foreach($other_scores as $key=>$other_score){
			$SQL.="REPLACE stud_seme_final_score SET seme_year_seme='$seme_year_seme',student_sn=$student_sn,area='$other_score->敶扳??筷蝘?迂',score='$other_score->敶扳??筷蝘?曉??嗆?蝮?,description='$other_score->敶扳??筷蝘???膩',comment='敶扳???;<BR>";
		}
		
		//撖怠stud_seme_final_score
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		$SQL=str_replace("'null'","''",$SQL);	
		$SQL_Arr=explode("<BR>",$SQL);		
		foreach($SQL_Arr as $SQL_S){			
			if($SQL_S<>"") $rs=$CONN->Execute($SQL_S) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL_S",256) ;
		}
		
		//撖怠?迤?tud_seme_score
		$SQL2=iconv("UTF-8","Big5//IGNORE",$SQL2);
		$SQL2=str_replace("'null'","''",$SQL2);
		$SQL2_Arr=explode("<BR>",$SQL2);
		foreach($SQL2_Arr as $SQL2_S){			
			if($SQL2_S<>"") $rs=$CONN->Execute($SQL2_S) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL2_S",256) ;
		}
		
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]??摮豢??蜀 (stud_seme_final_score?tud_seme_score ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
		if($ShowSQL) echo "<font color='blue'>".iconv("UTF-8","Big5//IGNORE",$SQL3)."</font>";

		
		//隞乩?撖怠?亙虜?暑銵函?蜀銵? stud_seme_score_nor
		$nor_score=$seme_data->?亙虜?暑銵函;
		$SQL="REPLACE stud_seme_score_nor SET seme_year_seme='$seme_year_seme',student_sn=$student_sn,ss_id=0,ss_score_memo='$nor_score->?亙虜?暑銵函_???膩';";
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		$SQL=str_replace("'null'","''",$SQL);
		if($SQL) $rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?亙虜?暑銵函 ( stud_seme_score_nor ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	
		//隞乩?撖怠摮豢??箏葉蝝?”  stud_seme_abs
		$SQL="REPLACE stud_seme_abs SET seme_year_seme='$seme_year_seme',stud_id='$stud_id',abs_kind=1,abs_days=$nor_score->摮豢??箇撩撣茁鈭???<BR>";
		$SQL.="REPLACE stud_seme_abs SET seme_year_seme='$seme_year_seme',stud_id='$stud_id',abs_kind=2,abs_days=$nor_score->摮豢??箇撩撣茁????<BR>";
		$SQL.="REPLACE stud_seme_abs SET seme_year_seme='$seme_year_seme',stud_id='$stud_id',abs_kind=3,abs_days=$nor_score->摮豢??箇撩撣茁?玨??<BR>";
		$SQL.="REPLACE stud_seme_abs SET seme_year_seme='$seme_year_seme',stud_id='$stud_id',abs_kind=6,abs_days=$nor_score->摮豢??箇撩撣茁?嗡??;<BR>";
		// SFS摰儔  "4"=>"??","5"=>"?砍?"  xml銝剜摰儔
		//XML銝?摮豢??箇撩撣茁?撣剜??& 摮豢??箇撩撣茁?桐? 撠??
		
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		$SQL=str_replace("'null'","''",$SQL);
		$SQL_Arr=explode("<BR>",$SQL);		
		foreach($SQL_Arr as $SQL_S){
			if($SQL_S) $rs = $CONN->Execute($SQL_S) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL_S",256) ;
		}
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]摮豢??箏葉蝝??( stud_seme_abs ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
		
		//隞乩?撖怠?寞??芾銵函鞈?銵?stud_seme_spe
		$spe_scores=$seme_data->?寞??芾銵函->?芾銵函鈭?;
		$SQL="";
		foreach($spe_scores as $spe_score){
			if($spe_score->?芾銵函_鈭<>"" AND $spe_score->?芾銵函_鈭<>"null")
				$SQL.="('$seme_year_seme','$stud_id','$spe_score->?芾銵函_?交?','$spe_score->?芾銵函_鈭'),";
		}
		$SQL=substr($SQL,0,-1);		
		$SQL="INSERT INTO stud_seme_spe(seme_year_seme,stud_id,sp_date,sp_memo) VALUES ".$SQL;
		if(substr($SQL,-7)<>'VALUES ') {
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			$SQL=str_replace("'null'","''",$SQL);
			//??蝛箏?????
			$rs = $CONN->Execute("DELETE FROM stud_seme_spe WHERE stud_id=$stud_id AND seme_year_seme='$seme_year_seme'") or user_error("ERROR WHILE DELETING THE RECORDS OF TABLE stud_seme_spe ( STUD_ID:$stud_id )! <br><br>",256) ;
			//?瑁??啣?
			$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?寞??芾銵函鞈? ( stud_seme_spe ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;
		}

		//隞乩?撖怠 敹?皜祇? 鞈?銵?stud_psy_test

		$test_scores=$seme_data->敹?皜祇?->敹?皜祇?_鞈??批捆;
		$SQL="";
		foreach($test_scores as $test_score){
			$item=$test_score->敹?皜祇?_?迂;
			if($item<>"" AND $item<>"null") {				
				$score=$test_score->敹?皜祇?_???;
				$model=$test_score->敹?皜祇?_撣豢芋璅?;
				$standard=$test_score->敹?皜祇?_璅??;
				$pr=$test_score->敹?皜祇?_?曉?蝑?;
				$explanation=$test_score->敹?皜祇?_閫??;
				$SQL.="('$current_year','$current_semester','$student_sn','$item','$score','$model','$standard','$pr','$explanation'),";
			}
		}
		
		$SQL=substr($SQL,0,-1);
		$SQL="INSERT INTO stud_psy_test(year,semester,student_sn,item,score,model,standard,pr,explanation) VALUES ".$SQL;
		if(substr($SQL,-7)<>'VALUES ') {
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			$SQL=str_replace("'null'","''",$SQL);
			//??蝛箏?????
			$rs = $CONN->Execute("DELETE FROM stud_psy_test WHERE student_sn=$student_sn AND year='$current_year' AND semester='$current_semester'") or user_error("?芷敹?皜祇?閮?憭望? ( STUDENT_SN=$student_sn )! <br><br>$SQL",256) ;
			//?脰??啣?
			$rs = $CONN->Execute($SQL) or user_error("?啣?敹?皜祇?閮?憭望?! <br><br>$SQL",256) ;
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]敹?皜祇?鞈? ( stud_psy_test ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;
		}
	
		//隞乩?撖怠摮豢?頛??箸鞈? stud_seme_eduh
		$eduh_record=$seme_data->頛?蝝??
		$sse_relation=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->?嗆???),$sse_relation_arr);
		//sse_family_kind ??? 摰嗅滬憿??
		$sse_family_air=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->摰嗅滬瘞??),$sse_family_air_arr);
		$sse_farther=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->?嗥恣?撘?,$sse_teach_arr);
		$sse_mother=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->瘥恣?撘?,$sse_teach_arr);
		$sse_live_state=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->撅??耦),$sse_live_state_arr);
		$sse_rich_state=array_search(iconv("UTF-8","Big5//IGNORE",$eduh_record->蝬??瘜?,$sse_rich_state_arr);
		
		$SQL="'$seme_year_seme','$stud_id','$sse_relation','$sse_family_air','$sse_farther','$sse_mother','$sse_live_state','$sse_rich_state',";

		$topics["1"]="???摮貊???";
		$topics["2"]="??圈摮貊???";
		$topics["3"]="?寞??";
		$topics["4"]="?閎";
		$topics["5"]="?暑蝧";
		$topics["6"]="鈭粹???";
		$topics["7"]="憭?銵";
		$topics["8"]="?批?銵";
		$topics["9"]="摮貊?銵";
		$topics["10"]="銝蝧";
		$topics["11"]="?行銵";

		foreach($topics as $key=>$topic){
			$content="$topic"."_鞈??批捆";
			$items="";
			$contents=$eduh_record->$topic->$content;
			foreach($contents as $item){  //撠?誑,銝脰
				if($item<>"" AND strtoupper($item)<>"NULL") {
					$item=iconv("UTF-8","Big5//IGNORE",$item);
					$item=array_search($item,${"sse_arr_$key"});
					$items.=",$item";
				}
			}
			//$items=substr($items,0,-1);
			$items.=',';
			$SQL.="'$items',";
		}
		$SQL=substr($SQL,0,-1);
		$SQL=str_replace("'null'","''",$SQL);
		
		$SQL="REPLACE INTO stud_seme_eduh(seme_year_seme,stud_id,sse_relation,sse_family_air,sse_farther,sse_mother,sse_live_state,sse_rich_state,sse_s1,sse_s2,sse_s3,sse_s4,sse_s5,sse_s6,sse_s7,sse_s8,sse_s9,sse_s10,sse_s11) VALUES ($SQL)";
		$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		//seme_year_seme  stud_id  sse_relation  sse_family_kind            sse_s1  sse_s2  sse_s3  sse_s4  sse_s5  sse_s6  sse_s7  sse_s8  sse_s9  sse_s10  sse_s11  
		if($SQL) $rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]摮豢?頛??箸鞈? ( stud_seme_eduh ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	
		//隞乩?撖怠 頛?閮芾?蝝??鞈?銵?stud_seme_talk

		$talks=$seme_data->頛?閮芾?蝝??>頛?閮芾?蝝?鞈??批捆;
		
		$SQL="";
		foreach($talks as $talk){
			$sst_memo=$talk->?批捆閬?;
			if($sst_memo<>"" AND $sst_memo<>"null") {
				$sst_date=$talk->蝝???
				$sst_name=$talk->??窗撠情;
				$sst_main=$talk->??窗鈭?;
			
				$SQL.="('$seme_year_seme','$stud_id','$sst_date','$sst_name','$sst_main','$sst_memo'),";
			}
		}
		$SQL=substr($SQL,0,-1);
		$SQL="REPLACE INTO stud_seme_talk(seme_year_seme,stud_id,sst_date,sst_name,sst_main,sst_memo) VALUES $SQL";
		if(substr($SQL,-7)<>'VALUES ') {
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			$SQL=str_replace("'null'","''",$SQL);
			//??蝛箏?????
			$rs = $CONN->Execute("DELETE FROM stud_seme_talk WHERE stud_id=$stud_id AND seme_year_seme='$seme_year_seme'") or user_error("ERROR WHILE DELETING THE RECORDS OF TABLE stud_seme_talk ( STUDENT_SN:$student_sn )! <br><br>",256) ;
			if($SQL) $rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256) ;
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]頛?閮芾?蝝??( stud_seme_talk ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;
		}
	}
?>
