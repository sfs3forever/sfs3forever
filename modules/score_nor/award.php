<?php
//$Id: award.php 5493 2009-06-04 08:10:23Z brucelyc $
include "config.php";
include "../../include/sfs_case_menu.php";
include "../../include/sfs_case_absent.php";

//認證
sfs_check();

if (empty($year_seme)) {
	$sel_year = curr_year(); //目前學年
	$sel_seme = curr_seme(); //目前學期
	$year_seme=$sel_year."_".$sel_seme;
} else {
	$ys=explode("_",$year_seme);
	$sel_year=$ys[0];
	$sel_seme=$ys[1];
}

if ($_POST[year_name]) {
	$move_year_seme=sprintf("%02d",$sel_year).$sel_seme;
	$query="select * from stud_move where move_kind='2'";
	$res=$CONN->Execute($query);
	while(!$res->EOF) {
		$move_sn.="'".$res->fields['student_sn']."',";
		$res->MoveNext();
	}
	if ($move_sn) 
		$move_str=" and a.student_sn not in (".substr($move_sn,0,-1).")";
	else
		$move_str="";
	$seme_year_seme=sprintf("%03d",$sel_year).$sel_seme;
	$seme_class=$_POST[year_name]."%";
	$class_base=class_base($seme_year_seme);
	$query="select a.* from stud_seme a left join stud_base b on a.student_sn=b.student_sn where a.seme_year_seme='$seme_year_seme' and a.seme_class like '$seme_class' and b.stud_study_cond in ('0') $move_str order by a.seme_num";
	$res=$CONN->Execute($query);
	while(!$res->EOF) {
		$sn[]=$res->fields['student_sn'];
		$id[]=$res->fields[stud_id];
		$res->MoveNext();
	}
	$query="select stud_study_year from stud_base where student_sn='".$sn[0]."'";
	$res=$CONN->Execute($query);
	$stud_study_year=$res->rs[0];
	$maxy=($IS_JHORES==0)?5:2;
	for ($i=0;$i<=$maxy;$i++) {
		for ($j=1;$j<=2;$j++) {
			$semes[]=sprintf("%03d",$stud_study_year+$i).$j;
			$show_year[]=$stud_study_year+$i;
			$show_seme[]=$j;
		}
	}
	$fin_score=check_absent($id,$semes);

	$all_id="'".implode("','",array_keys($fin_score))."'";
	$query="select a.*,b.stud_name from stud_seme a left join stud_base b on a.student_sn=b.student_sn where a.seme_year_seme='$seme_year_seme' and a.stud_id in ($all_id) order by a.seme_class,a.seme_num";
	$res=$CONN->Execute($query);
	while(!$res->EOF) {
		$ssn=$res->fields['student_sn'];
		$show_sn[$ssn]=$ssn;
		$sclass[$ssn]=$class_base[$res->fields['seme_class']];
		$snum[$ssn]=$res->fields[seme_num];
		$stud_name[$ssn]=$res->fields[stud_name];
		$stud_id[$ssn]=$res->fields[stud_id];
		$res->MoveNext();
	}
}

$smarty->assign("SFS_TEMPLATE",$SFS_TEMPLATE); 
$smarty->assign("module_name","全勤獎名單"); 
$smarty->assign("SFS_MENU",$menu_p); 
$smarty->assign("year_seme_menu",year_seme_menu($sel_year,$sel_seme)); 
$smarty->assign("class_year_menu",class_year_menu($sel_year,$sel_seme,$_POST[year_name])); 
$smarty->assign("show_year",$show_year);
$smarty->assign("show_seme",$show_seme);
$smarty->assign("show_ss",$show_ss);
$smarty->assign("show_ss_num",count($show_ss));
$smarty->assign("semes",$semes);
$smarty->assign("show_sn",$show_sn);
$smarty->assign("stud_id",$stud_id);
$smarty->assign("stud_name",$stud_name);
$smarty->assign("sclass",$sclass);
$smarty->assign("snum",$snum);
$smarty->assign("fin_score",$fin_score);
$smarty->assign("fin_score_num",count($fin_score));
$smarty->display('score_nor_award.tpl'); 
?>
