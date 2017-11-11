<?php
	$absent_datas=$student->?葉鞈?->?葉蝻箏葉;

	//隞乩?蝝??銝剔撩撣剜?? 蝮賜撩撣剔???耨甇ΦML??  撱箄降??  ?閬絞閮?? ?芸????絞閮??
	//? "1"=>"鈭?","2"=>"??","3"=>"?玨","4"=>"??","5"=>"?砍?","6"=>"?嗡?"
	$total_leave=$absent_datas->?葉蝮賜撩撣茁鈭???
	$total_ill=$absent_datas->?葉蝮賜撩撣茁????
	$total_truancy=$absent_datas->?葉蝮賜撩撣茁?玨??
	$total_other=$absent_datas->?葉蝮賜撩撣茁?嗡??;
	$absent_unit=$absent_datas->?葉蝮賜撩撣茁?桐?;
	
	//隞乩?蝝??葉蝻箏葉蝝?? stud_absent_move  ;  甇方??”?函頂蝯?up20080810.php ?湔  ?◤撱箇?
	//?亙?蝯梯?摮豢?蝻箏葉???斗撣貊??”憭????唳迨銵冽???摮貊??葉蝻箏葉蝝??
	$curr_year_seme=sprintf('%03d%d',curr_year(),curr_seme());
	//???方?鞈?  隞亙???蝝??
	$SQL="DELETE FROM stud_absent_move WHERE student_sn=$student_sn AND seme_year_seme='$curr_year_seme'";
	$rs=$CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
	
	//????鞈?
	$absent_months=$absent_datas->?葉蝻箏葉_鞈??批捆->?葉蝻箏葉_??鞈?;
	
	if(count($absent_months)>0)
	{
		$SQL='';
		foreach($absent_months as $absent_month)
		{
			$sma_year=$absent_month->?葉蝻箏葉_撟?
			$sma_month=$absent_month->?葉蝻箏葉_??
			$sma_leave=$absent_month->?葉蝻箏葉_鈭???
			$sma_ill=$absent_month->?葉蝻箏葉_????
			$sma_truancy=$absent_month->?葉蝻箏葉_?玨??
			$sma_other=$absent_month->?葉蝻箏葉_?嗡??;
			
			$SQL.="('$curr_year_seme','$sma_year','$sma_month','$stud_id',1,$sma_leave,$student_sn),";
			$SQL.="('$curr_year_seme','$sma_year','$sma_month','$stud_id',2,$sma_ill,$student_sn),";
			$SQL.="('$curr_year_seme','$sma_year','$sma_month','$stud_id',3,$sma_truancy,$student_sn),";
			$SQL.="('$curr_year_seme','$sma_year','$sma_month','$stud_id',6,$sma_other,$student_sn),";
		}
		$SQL=substr($SQL,0,-1);
		$SQL="INSERT INTO stud_absent_move(seme_year_seme,year,month,stud_id,abs_kind,abs_days,student_sn) VALUES ".$SQL;
		//?賣?望摮? ???? $SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		//$SQL=str_replace("'null'","''",$SQL);
		$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉蝻箏葉蝝??( stud_absent_move ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;		
	} else echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉蝻箏葉蝝??( stud_absent_move ) ~~?⊥?銝剔撩撣剔??? <BR>");

	//===========================================================================================================================================	
	//隞乩??箸?銝剜?蝮?
	//$scores=array();

	//??鞈?頧????
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_隤?->?葉?蜀_隤?鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_隤???畾菔);
		$scores[$section]['language']['chinese']=intval($area_content->?葉?蜀_?砍?隤??曉??嗆?蝮?;
		$scores[$section]['language']['local']=intval($area_content->?葉?蜀_??隤??曉??嗆?蝮?;
		$scores[$section]['language']['english']=intval($area_content->?葉?蜀_?梯??曉??嗆?蝮?;
	}
	

	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_?詨飛->?葉?蜀_?詨飛鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_?詨飛??畾菔);
		$scores[$section]['math']=intval($area_content->?葉?蜀_?詨飛???曉??嗆?蝮?;
	}
		
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_?芰??瘣餌??->?葉?蜀_?芰??瘣餌??鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_?芰??瘣餌????畾菔);
		$scores[$section]['nature']=intval($area_content->?葉?蜀_?芰??瘣餌?????曉??嗆?蝮?;
	}
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_蝷暹?->?葉?蜀_蝷暹?鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_蝷暹???畾菔);
		$scores[$section]['social']=intval($area_content->?葉?蜀_蝷暹????曉??嗆?蝮?;
	}
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_?亙熒????>?葉?蜀_?亙熒???脰??摰?
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_?亙熒???脤??挾?);
		$scores[$section]['health']=intval($area_content->?葉?蜀_?亙熒???脤????蜀);
	}
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_???犖??>?葉?蜀_???犖???摰?
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_???犖???挾?);
		$scores[$section]['art']=intval($area_content->?葉?蜀_???犖?????蜀);
	}
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_?暑隤脩?->?葉?蜀_?暑隤脩?鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_?暑隤脩???畾菔);
		$scores[$section]['life']=intval($area_content->?葉?蜀_?暑隤脩????曉??嗆?蝮?;
	}
	
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_蝬?瘣餃?->?葉?蜀_蝬?瘣餃?鞈??批捆;
	foreach($inner_scores as $area_content)
	{
		$section=intval($area_content->?葉?蜀_蝬?瘣餃???畾菔);
		$scores[$section]['complex']=intval($area_content->?葉?蜀_蝬?瘣餃????曉??嗆?蝮?;
	}
	
	$inner_scores=$student->?葉鞈?->?葉?蜀->?葉?蜀_敶批?????>?葉?蜀_敶扳???
	$item_sort=0;
	foreach($inner_scores as $area_content)
	{
		$item_sort++;
		$elasticity_scores[$item_sort]['name']=$area_content->?葉?蜀_敶扳??貊??桀?蝔?'';
		$elasticity_scores[$item_sort]['score']=intval($area_content->?葉?蜀_敶扳??貊??桃??蜀);
	}
	/*
		echo "<PRE>";
		print_r($scores);
		print_r($elasticity_scores);
		echo "</PRE>";
	*/	
	//憿舐內銵冽
	$showdata="<BR><BR>?餉?摮訾??葉?蜀(?祈”憿舐內鞈?銝行閮??潛頂蝯曹葉嚗??芾?銴ˊ摮???)<table border='2' cellpadding='5' cellspacing='0' style='border-collapse: collapse' bordercolor='#111111'>
	<tr bgcolor='#FFCCCC'>
		<td rowspan='2' align='center'>?挾??/td>
		<td colspan='3' align='center'>隤???</td>
		<td align='center' rowspan='2'>?詨飛</td>
		<td align='center' rowspan='2'>?芰??瘣餌??</td>
		<td align='center' rowspan='2'>蝷暹?</td>
		<td align='center' rowspan='2'>?亙熒????/td>
		<td align='center' rowspan='2'>???犖??/td>
		<td align='center' rowspan='2'>?暑隤脩?</td>
		<td align='center' rowspan='2'>蝬?瘣餃?</td>
	</tr>
	<tr bgcolor='#FFCCCC'>
		<td align='center'>?砍?隤?</td>
		<td align='center'>??隤?</td>
		<td align='center'>?梯?</td>
	</tr>";
	foreach($scores as $section_key=>$section_score)
	{
		$chinese=$scores[$section_key]['language']['chinese'];
		$local=$scores[$section_key]['language']['local'];
		$english=$scores[$section_key]['language']['english'];
		$math=$scores[$section_key]['math'];
		$nature=$scores[$section_key]['nature'];
		$social=$scores[$section_key]['social'];
		$health=$scores[$section_key]['health'];
		$art=$scores[$section_key]['art'];
		$life=$scores[$section_key]['life'];
		$complex=$scores[$section_key]['complex'];
		$showdata.="<tr>
					<td align='center'>$section_key</td>
					<td align='center'>$chinese</td>
					<td align='center'>$local</td>
					<td align='center'>$english</td>
					<td align='center'>$math</td>
					<td align='center'>$nature</td>
					<td align='center'>$social</td>
					<td align='center'>$health</td>
					<td align='center'>$art</td>
					<td align='center'>$life</td>
					<td align='center'>$complex</td>
					";
	}
	//?蝷曉?瘣餃?鞈?
	$elasticity_data='';
	foreach($elasticity_scores as $lasticity)
	{
		$elasticity_name=$lasticity['name'];
		$elasticity_score=$lasticity['score'];
		$elasticity_data.="<li>蝷曉??迂嚗?$elasticity_name  ?蜀嚗?$elasticity_score</li>";
	}
	
	
	$showdata.="<tr><td colspan=4 align='center'>蝷曉?瘣餃?蝝??/td><td colspan=7>$elasticity_data</td></tr></table>";
	echo iconv("UTF-8","Big5//IGNORE",$showdata);

	//===========================================================================================================================================
	
	//隞乩??箸?銝剔????臬?單摮??” reward_exchange)	
	//???方?鞈?  隞亙???蝝??
	$SQL="DELETE FROM reward_exchange WHERE student_sn=$student_sn AND reward_year_seme='$curr_year_seme'";
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);

	//???葉?鞈?
	$inner_rewards=$student->?葉鞈?->?葉?->?葉?蝝??
	if(count($inner_rewards)>0)
	{
		$SQL='';	
		foreach($inner_rewards as $key=>$inner_reward){
			$reward_date=$inner_reward->?葉?_?交?;
			$reward_kind=addslashes(iconv("UTF-8","Big5//IGNORE",$inner_reward->?葉?_憿));
			$reward_numbers=iconv("UTF-8","Big5//IGNORE",$inner_reward->?葉?_甈⊥);
			$reward_reason=iconv("UTF-8","Big5//IGNORE",$inner_reward->?葉?_鈭);
			$SQL.="('$student_sn','$curr_year_seme','$reward_date','$reward_kind','$reward_numbers','$reward_reason'),";
		}
		$SQL=substr($SQL,0,-1);
		$SQL="INSERT INTO reward_exchange(student_sn,reward_year_seme,reward_date,reward_kind,reward_numbers,reward_reason) VALUES ".$SQL;
		//$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
		$SQL=str_replace("'null'","''",$SQL);
		$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
		echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉?蝝??( stud_absent_move ) OK ! ");
		if($ShowSQL) echo '<BR>'.$SQL;
	} else echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉?蝝??( stud_absent_move ) ~~?⊥?銝剔??脩???! <BR>");

	//隞乩???蝷曉?瘣餃?
	//???方?鞈?  隞亙???蝝??
	$SQL="DELETE FROM association WHERE student_sn=$student_sn AND seme_year_seme='$curr_year_seme'";
	$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
	
	$inner_associations=$student->?葉鞈?->蝷曉?瘣餃?->蝷曉?瘣餃??批捆;
	if(count($inner_associations)>0)
	{
		$SQL='';		
		foreach($inner_associations as $key=>$inner_association){
			$association_name=trim($inner_association->蝷曉??迂);
			$association_score = ($inner_association->蝷曉?瘣餃??蜀=='' or $inner_association->蝷曉?瘣餃??蜀=='null')?0:$inner_association->蝷曉?瘣餃??蜀;
			if ($association_name!='null') {
				$SQL.="('$curr_year_seme',$student_sn,'$association_name',$association_score),";
			}
		}
		if ($SQL!='') {
			$SQL=substr($SQL,0,-1);
			$SQL="INSERT INTO association(seme_year_seme,student_sn,association_name,score) VALUES ".$SQL;
			$SQL=iconv("UTF-8","Big5//IGNORE",$SQL);
			$SQL=str_replace("'null'","''",$SQL);
			$rs = $CONN->Execute($SQL) or user_error("ERROR WHILE EXCUING SQL! <br><br>$SQL",256);
			echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉蝷曉?蝝??( association ) OK ! ");
			if($ShowSQL) echo '<BR>'.$SQL;

		} else {
			echo iconv("UTF-8","Big5//IGNORE","<BR>#????[$seme_year_seme] ?葉蝷曉?蝝??OK ! ");
		}
	} else echo iconv("UTF-8","Big5//IGNORE","<BR>#???臬[$seme_year_seme]?葉蝷曉?蝝??( stud_absent_move ) ~~?⊥?銝剔冗?暑????! <BR>");

?>
