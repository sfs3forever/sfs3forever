<?php
//$Id: 2xml.php 5582 2009-08-11 15:59:55Z brucelyc $
if (!$CONN) exit;
$xml='<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE 摮貊?鈭斗?鞈? SYSTEM "http://sfshelp.tcc.edu.tw/download/student_3_1.dtd">
<摮貊?鈭斗?鞈?>
';
while(list($seme_class,$d)=each($health_data->stud_data)) {
	$gid=substr($seme_class,0,1);
	$yid=substr($seme_class,-2,2);
	while(list($seme_num,$dd)=each($d)) {
		$sn=$dd[student_sn];
$xml.='	<摮貊?鞈?>
		<?箸鞈?>
			<摮貊?憪?></摮貊?憪?>
			<摮貊??批>'.(($health_data->stud_base[$sn][stud_sex]==1)?'??:'憟?).'</摮貊??批>
			<摮貊??>'.$health_data->stud_base[$sn][stud_birthday].'</摮貊??>
			<?曉撟渡?>'.$gid.'</?曉撟渡?>
			<?曉?剔?>'.$yid.'</?曉?剔?>
			<?曉摨扯?>'.$seme_num.'</?曉摨扯?>
			<?亙飛撟?'.$health_data->stud_base[$sn][stud_study_year].'</?亙飛撟?
			<頨怠?霅???
				<??></??>
				<霅蝔桅?></霅蝔桅?>
				<霅?Ⅳ>'.$health_data->stud_base[$sn][stud_person_id].'</霅?Ⅳ>
				<????</????
			</頨怠?霅???
		</?箸鞈?>
		<?亙熒鞈?>
			<?亙熒?箸鞈?>
				<?犖?曄???
';
		//???犖?曄???
		if (count($health_data->stud_base[$sn][disease]) > 0) {
			foreach($health_data->stud_base[$sn][disease] as $kk=>$dd) {
$xml.='
					<?犖?曄??淪鞈??批捆>
						<?犖?曄??淪憿>'.iconv("BIG5","UTF-8",$dk_arr[$dd]).'</?犖?曄??淪憿>
						<?犖?曄??淪?迂></?犖?曄??淪?迂>
					</?犖?曄??淪鞈??批捆>
';
			}
		} else {
$xml.='					<?犖?曄??淪鞈??批捆>
						<?犖?曄??淪憿>??/?犖?曄??淪憿>
						<?犖?曄??淪?迂></?犖?曄??淪?迂>
					</?犖?曄??淪鞈??批捆>
';
		}
$xml.='				</?犖?曄???
				<?之?瑞??畾?
					<???之?瑞?霅???'.iconv("BIG5","UTF-8",$sdk_arr[$health_data->stud_base[$sn][serious][0]]).'</???之?瑞?霅???
					<??頨怠?????>
						<??頨怠?????_憿>'.iconv("BIG5","UTF-8",$bk_arr[$health_data->stud_base[$sn][bodymind][bm_id]]).'</??頨怠?????_憿>
						<??頨怠?????_蝑?>'.iconv("BIG5","UTF-8",$bl_arr[$health_data->stud_base[$sn][bodymind][bm_level]]).'</??頨怠?????_蝑?>
					</??頨怠?????>
				</?之?瑞??畾?
				<??靽>
					<??靽_鞈??批捆>
						<??靽_憿></??靽_憿>
					</??靽_鞈??批捆>
				</??靽>
				<摰嗆??>
					<摰嗆??_鞈??批捆>
						<????之?箏?曄?摰嗅惇蝔梯?></????之?箏?曄?摰嗅惇蝔梯?>
						<?箏?抒??蝔?</?箏?抒??蝔?
					</摰嗆??_鞈??批捆>
				</摰嗆??>
			</?亙熒?箸鞈?>
			<蝬虜?扳炎??
';
		//??摮豢?瑼Ｘ閮?
		$sight_arr=array("My"=>"餈?","Hy"=>"??","Ast"=>"撘梯?","Amb"=>"???","other"=>"");
		if (count($health_data->health_data[$sn]) > 0) {
			foreach($health_data->health_data[$sn] as $kk=>$dd) {
$xml.='				<摮豢?瑼Ｘ閮?>
					<摮豢?瑼Ｘ_撟渡?>'.(intval(substr($kk,0,3))-$health_data->stud_base[$sn][stud_study_year]+1).'</摮豢?瑼Ｘ_撟渡?>
					<摮豢?瑼Ｘ_摮豢?>'.substr($kk,-1,1).'</摮豢?瑼Ｘ_摮豢?>
					<??潸>
						<頨恍?>'.$dd[height].'</頨恍?>
						<擃?>'.$dd[weight].'</擃?>
						<??潸閰?'.iconv("BIG5","UTF-8",$Bid_arr[$dd[Bid]]).'</??潸閰?
					</??潸>	
					<閬?>
						<閬?瑼Ｘ蝯?>
							<閬?瑼Ｘ_?其?>??/閬?瑼Ｘ_?其?>
							<鋆貉?閬?>'.$dd[r][sight_o].'</鋆貉?閬?>
							<?舀迤閬?>'.$dd[r][sight_r].'</?舀迤閬?>
							<閬?蝻粹?>
';
				reset($sight_arr);
				foreach($sight_arr as $kkk=>$ddd) {
					if ($dd[r][$kkk]) {
$xml.='								<閬?蝻粹?_鞈??批捆>
									<閬?蝻粹?_憿>'.$ddd.'</閬?蝻粹?_憿>
								</閬?蝻粹?_鞈??批捆>
';
					}
				}
$xml.='							</閬?蝻粹?>
						</閬?瑼Ｘ蝯?>
						<閬?瑼Ｘ蝯?>
							<閬?瑼Ｘ_?其?>撌?/閬?瑼Ｘ_?其?>
							<鋆貉?閬?>'.$dd[l][sight_o].'</鋆貉?閬?>
							<?舀迤閬?>'.$dd[l][sight_r].'</?舀迤閬?>
							<閬?蝻粹?>
';
				reset($sight_arr);
				foreach($sight_arr as $kkk=>$ddd) {
					if ($dd[l][$kkk]) {
$xml.='								<閬?蝻粹?_鞈??批捆>
									<閬?蝻粹?_憿>'.$ddd.'</閬?蝻粹?_憿>
								</閬?蝻粹?_鞈??批捆>
';
					}
				}
$xml.='							</閬?蝻粹?>
						</閬?瑼Ｘ蝯?>
					</閬?>
				</摮豢?瑼Ｘ閮?>
';
			}
		}
		$status_arr=array("1"=>"甇?虜","2"=>"?啣虜");
$xml.='
			</蝬虜?扳炎??
			<?啁?蝡??炎??
				<蝡??炎?亦???'.$status_arr[$health_data->stud_base[$sn][ntu]].'</蝡??炎?亦???
				<蝡??炎?亥牧??</蝡??炎?亥牧??
			</?啁?蝡??炎??
			<?典飛???之?瑞?鈭?>
				<?典飛???之?瑞?鈭?_鞈??批捆>
					<?典飛???之?瑞?鈭?_?交?></?典飛???之?瑞?鈭?_?交?>
					<?典飛???之?瑞?鈭?_?膩></?典飛???之?瑞?鈭?_?膩>
				</?典飛???之?瑞?鈭?_鞈??批捆>
			</?典飛???之?瑞?鈭?>
			<??亦車>
				<蝯??皜祇?></蝯??皜祇?>
				<??亦車_鞈??批捆>
					<?怨?蝔桅?></?怨?蝔桅?>
					<?亦車?活></?亦車?活>
					<?亦車?交?></?亦車?交?>
				</??亦車_鞈??批捆>
			</??亦車>
			<撖阡?摰斗炎??
';
		//??撖阡?摰斗炎?亥???
		if (count($health_data->health_data[$sn]) > 0) {
			reset($health_data->health_data[$sn]);
			foreach($health_data->health_data[$sn] as $kk=>$dd) {
				if (count($dd[exp]) > 0) {
					foreach($dd[exp] as $kkk=>$ddd) {
						foreach($ddd as $kkkk=>$dddd) {
							foreach($dddd as $kkkkk=>$ddddd) {
								if ($exp_item_arr[$kkkkk] || $kkkkk=='status') {
$xml.='				<撖阡?摰斗炎?北鞈??批捆>
					<撖阡?摰斗炎?北撟渡?>'.(intval(substr($kk,0,3))-$health_data->stud_base[$sn][stud_study_year]+1).'</撖阡?摰斗炎?北撟渡?>
					<撖阡?摰斗炎?北憿>'.iconv("BIG5","UTF-8",$exp_arr[$kkk]).'</撖阡?摰斗炎?北憿>
					<撖阡?摰斗炎?北?>'.iconv("BIG5","UTF-8",$exp_item_arr[$kkkkk]).'</撖阡?摰斗炎?北?>
					<撖阡?摰斗炎?北甈∪>'.$kkkk.'</撖阡?摰斗炎?北甈∪>
					<撖阡?摰斗炎?北?詨?'.$ddddd.'</撖阡?摰斗炎?北?詨?
					<撖阡?摰斗炎?北蝯?>'.iconv("BIG5","UTF-8",$hstatus_arr[$ddddd]).'</撖阡?摰斗炎?北蝯?>
				</撖阡?摰斗炎?北鞈??批捆>
';
								}
							}
						}
					}
				}
			}
		}
$xml.='			</撖阡?摰斗炎??
			<?刻澈?交炎>
';
		//???刻澈?交炎鞈?
		if (count($health_data->health_data[$sn]) > 0) {
			reset($health_data->health_data[$sn]);
			foreach($health_data->health_data[$sn] as $kk=>$dd) {
				if (count($dd[checks]) > 0) {
$xml.='				<?刻澈?交炎_鞈??批捆>
					<?刻澈?交炎_撟渡?>'.(intval(substr($kk,0,3))-$health_data->stud_base[$sn][stud_study_year]+1).'</?刻澈?交炎_撟渡?>
					<?刻澈?交炎_?交?>'.$dd['checks']['Oph']['date'].'</?刻澈?交炎_?交?>
					<?刻澈?交炎_?輯齒瑼Ｘ?恍>'.iconv("BIG5","UTF-8",$dd['checks']['Oph']['hospital']).'</?刻澈?交炎_?輯齒瑼Ｘ?恍>
					<?刻澈?交炎蝝??
';
					foreach($dd[checks] as $kkk=>$ddd) {
$xml.='						<?刻澈?交炎蝝?鞈??批捆>
							<?刻澈?交炎?其?>'.iconv("BIG5","UTF-8",$checks_part_arr[$kkk]).'</?刻澈?交炎?其?>
							<?刻澈?交炎?瘜?
';
						if ($dd['Dis'.$kkk]==0) {
$xml.='								<?刻澈?交炎?瘜鞈??批捆>
									<?刻澈?交炎_蝯?>?∠?</?刻澈?交炎_蝯?>
									<?刻澈?交炎_蝯??酉></?刻澈?交炎_蝯??酉>
								</?刻澈?交炎?瘜鞈??批捆>
';
						} else {
							foreach($ddd as $kkkk=>$dddd) {
								if ($kkkk!=0 && $dddd!=0) {
$xml.='								<?刻澈?交炎?瘜鞈??批捆>
									<?刻澈?交炎_蝯?>'.iconv("BIG5","UTF-8",$checks_item_arr[$kkk][$kkkk]).'</?刻澈?交炎_蝯?>
									<?刻澈?交炎_蝯??酉>'.iconv("BIG5","UTF-8",$checks_diag_arr[$dddd]).'</?刻澈?交炎_蝯??酉>
								</?刻澈?交炎?瘜鞈??批捆>
';
								}
							}
						}
$xml.='							</?刻澈?交炎?瘜?
							<?刻澈?交炎_?思?鈭箏>'.iconv("BIG5","UTF-8",$ddd['doctor']).'</?刻澈?交炎_?思?鈭箏>
						</?刻澈?交炎蝝?鞈??批捆>
';
					}
$xml.='						<???亙熒?瘜?
';
					if ($dd[DisTeeth]!=0) {
						foreach($dd as $kkk=>$ddd) {
							if (substr($kkk,0,1)=="T") {
$xml.='							<???亙熒?瘜鞈??批捆>
								<??雿蔭隞?Ⅳ>'.substr($kkk,1,2).'</??雿蔭隞?Ⅳ>
								<??瑼Ｘ_蝯?>'.iconv("BIG5","UTF-8",$tee_chk_arr[$ddd]).'</??瑼Ｘ_蝯?>
							</???亙熒?瘜鞈??批捆>
';
							}
						}
					}
$xml.='						</???亙熒?瘜?
					</?刻澈?交炎蝝??
					<?刻澈?交炎_蝮質?撱箄降></?刻澈?交炎_蝮質?撱箄降>
				</?刻澈?交炎_鞈??批捆>
';
				}
			}
		}
$xml.='			</?刻澈?交炎>
			<?冽??扳炎??
				<?冽??扳炎?北鞈??批捆>
					<?冽??扳炎?北?></?冽??扳炎?北?>
					<?冽??扳炎?北?交?></?冽??扳炎?北?交?>
					<?冽??扳炎?北蝯?></?冽??扳炎?北蝯?>
					<?冽??扳炎?北瑼Ｘ?桐?></?冽??扳炎?北瑼Ｘ?桐?>
					<?冽??扳炎?北銴餈質馱></?冽??扳炎?北銴餈質馱>
				</?冽??扳炎?北鞈??批捆>
			</?冽??扳炎??
			<?亙熒蝞∠?蝬?閮?>
				<餈質馱?舀祥>
					<餈質馱?舀祥_鞈??批捆>
						<餈質馱?舀祥_蝘?></餈質馱?舀祥_蝘?>
						<餈質馱?舀祥_?耦></餈質馱?舀祥_?耦>
					</餈質馱?舀祥_鞈??批捆>
				</餈質馱?舀祥>
				<??蝞∠???>
					<??蝞∠???_鞈??批捆>
						<閮??唾膩></閮??唾膩>
					</??蝞∠???_鞈??批捆>
				</??蝞∠???>
			</?亙熒蝞∠?蝬?閮?>
		</?亙熒鞈?>
	</摮貊?鞈?>
';
	}
}
$xml.='</摮貊?鈭斗?鞈?>';
?>