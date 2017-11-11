<?php
$sql="select curr_class_num from stud_base where student_sn='$student_sn'";
$res=$CONN->Execute($sql) or die ('Error! Sql='.$sql);
$curr_class_num=$res->fields['curr_class_num'];     //甇斤??桀?撟渡??剔?摨扯?
$stud_class_year=substr($curr_class_num,0,1);		//甇斤??桀?撟渡?

echo iconv("UTF-8","Big5//IGNORE","<BR>#??僑蝝?".$stud_class_year);

//??鞈?頧????
	$associations_datas=$student->?雄頛?蝝??>摮貊????畾”??>??蝬風->蝷曉?->蝷曉?_鞈??批捆;
//摮豢?蝷曉?閮?
foreach($associations_datas as $seme_association)  {
	$ass_class_year=$seme_association->撟渡?;
	//echo "<br>curr_year:".curr_year();
	//echo "<br>YEAR:".$ass_class_year;
	$ass_seme=$seme_association->摮豢?;
	$ass_association_name=$seme_association->蝷曉??迂;
	$ass_association_post=$seme_association->?遙?瑕?;
	$ass_association_feedback=$seme_association->?芣???

	$seme_year_seme=(curr_year()-($stud_class_year-$ass_class_year)).$ass_seme;

	//???方?鞈?  隞亙???蝝??
	$SQL="DELETE FROM association WHERE student_sn=$student_sn AND seme_year_seme='$seme_year_seme'";
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
	$SQL="INSERT INTO association(seme_year_seme,student_sn,association_name,stud_post,stud_feedback) VALUES ('$seme_year_seme','$student_sn','$ass_association_name','$ass_association_post','$ass_association_feedback')";
	$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
	$SQL=str_replace("'null'","''",$SQL);
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
	echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]蝷曉?瘣餃?蝝??( $ass_association_name ) ??association 鞈?銵?OK ! ");
	if($ShowSQL) echo '<BR>'.$SQL;

}


//??鞈?頧???? , ??摮貊?
//???桀??駁????券?
	$sql_select = "select post_office from teacher_post where teacher_sn='{$_SESSION['session_tea_sn']}'";
	$recordSet = $CONN->Execute($sql_select);
	$department= $recordSet->fields["post_office"];

	$service_datas=$student->?雄頛?蝝??>摮貊????畾”??>??摮貊?蝝??>??摮貊?蝝?鞈??批捆;

	foreach($service_datas as $seme_service) {
		$srv_year = $seme_service->撟渡?;
		$srv_seme = $seme_service->摮豢?;
		$srv_date = $seme_service->???交?;
		$srv_item = addslashes(iconv("UTF-8","Big5//IGNORE",$seme_service->???));
		$srv_memo = addslashes(iconv("UTF-8","Big5//IGNORE",$seme_service->???批捆));
		$srv_min = $seme_service->?*60;
		$srv_sponsor = addslashes(iconv("UTF-8","Big5//IGNORE",$seme_service->銝餉齒?桐?));
		$srv_feedback = addslashes(iconv("UTF-8","Big5//IGNORE",$seme_service->?芣???);

		$seme_year_seme=(curr_year()-($stud_class_year-$srv_year)).$srv_seme;

		//瑼Ｘ鞈??臬撌脣???, ?踹??儔?臬
		$double=0;
		$sql="select * from stud_service where year_seme='$seme_year_seme' and service_date='$srv_date' and item='$srv_item' and memo='$srv_memo'";
		//$sql=iconv("UTF-8","Big5//IGNORE",$sql);
		$res=$CONN->Execute($sql) or die ("Error! sql=".$sql);
		//憒???閮?, 瑼Ｘ?敦鋆⊥?瘝?甇斤?, ?乩??? ?迨蝑????冽憓? 隞亙???
		if ($res->RecordCount()) {
			$item_sn=$res->fields['sn'];
			$SQL="select * from stud_service_detail where student_sn='$student_sn' and item_sn='$item_sn'";
			$res=$CONN->Execute($SQL) or die ("Error! sql=".$SQL);
			if ($res->RecordCount()) {
				$double=1;
			}
		}
		//憒?瘝?, ?脰??啣?
		if ($double==0) {
			$SQL="insert into stud_service (year_seme,service_date,department,item,memo,input_time,confirm,sponsor) values ('$seme_year_seme','$srv_date','$department','$srv_item','$srv_memo','".date('Y-m-d H:i:s')."','1','$srv_sponsor')";
			//$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			$SQL=str_replace("'null'","''",$SQL);
			//if($ShowSQL) echo '<BR>'.$SQL;
			if (mysql_query($SQL)) {
				list($item_sn) = mysql_fetch_row(mysql_query("SELECT LAST_INSERT_ID()"));
				$studmemo = iconv("UTF-8","Big5//IGNORE","憭閮?");

				$SQL = "insert into stud_service_detail (student_sn,item_sn,minutes,studmemo) values ('$student_sn','$item_sn','$srv_min','$studmemo')";
				//$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
				$SQL=str_replace("'null'","''",$SQL);
				if (mysql_query($SQL)) {
					echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]??摮貊?蝝??( ").$srv_memo." ) OK ! ";
					//if($ShowSQL) echo '<BR>'.$SQL;
				} else {
					echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]??摮貊?蝝??( ").$srv_memo.iconv("UTF-8","Big5//IGNORE"," ) 憭望? ! ");
				}

			}else {
				echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]??摮貊?蝝??( ").$srv_memo.iconv("UTF-8","Big5//IGNORE"," ) 憭望? ! ");
			}

		} else {
			echo iconv("UTF-8","Big5//IGNORE","<BR>#??[$seme_year_seme]??摮貊?蝝??("). $srv_memo.iconv("UTF-8","Big5//IGNORE"," ) 撌脩?摮, 銝????駁? ! ");
		}// end if else $double
	} // end foreach


?>
