<?php
// 撘 SFS3 ?撘澈
include "../../include/config.php";
include_once "../../include/sfs_case_dataarray.php";

// 撘?刻撌梁? config.php 瑼?
require "config.php";

// 隤?
sfs_check();

// ?怎 SFS3 ????
head(iconv("UTF-8","Big5","XML?臬"));
$tool_bar=make_menu($toxml_menu);
echo $tool_bar;

// 瑼Ｘ php.ini ?臬?? file_uploads ?
check_phpini_upload();

if($_POST['go']=='Go'){
	if ($_FILES['xmlfile']['size'] >0 && $_FILES['xmlfile']['name'] != "") {
		$stud_kind_array=stud_kind();  //?瑕?摮貊?頨怠??乩誨蝣潔誑?拙??Ｗ??
		$xml = simplexml_load_file($_FILES['xmlfile']['tmp_name']);
		$students =$xml->摮貊??箸鞈?;
		foreach($students as $student){
			$basis_data=$student->?箸鞈?;
			$stud_name=trim($basis_data->摮貊?憪?);
			if($stud_name<>'null'){
				$stud_sex=($basis_data->摮貊??批=="??)?"1":"2";
				$stud_birthday=$basis_data->摮貊??;
				
				//隞乩????瑁??亙飛?∠??剔?鞈?嚗??箇????鞈???
				//$curr_class_num=sprintf("%d%02d%2d",$basis_data->?曉撟渡?,$basis_data->?曉?剔?,$basis_data->?曉摨扯?);
				
				//頨思遢閮餉?
				$stud_types=$basis_data->摮貊?頨思遢閮餉?->摮貊?頨思遢?北鞈??批捆;
				foreach($stud_types as $temp_type){
					$temp_type_code=iconv("UTF-8","Big5",$temp_type->摮貊?頨思遢?北憿);
					$temp_type_code=array_search($temp_type_code,$stud_kind_array); //頧?摮貊?頨怠??乩誨蝣?
					$stud_type.=$temp_type->摮貊?頨思遢?北憿.',';
				}
				
				//??瘞???
				$stud_aborigine_area=$basis_data->??瘞?>??瘞撅???
				$stud_aborigine_clan=$basis_data->??瘞?>??瘞?;
				
				//頨怠?霅???
				$stud_country=$basis_data->頨怠?霅???>??;
				$stud_country_kind=iconv("UTF-8","Big5",$basis_data->頨怠?霅???>霅蝔桅?);
				$stud_country_kind=array_search($stud_country_kind,stud_country_kind()); //頧?霅蝔桅?隞?Ⅳ
				
				$stud_person_id=strtoupper(trim($basis_data->頨怠?霅???>霅?Ⅳ));
				$stud_country_name=$basis_data->頨怠?霅???>????
				
				//??窗鞈?
				$stud_addr=$basis_data->??窗鞈?->?嗥??啣?;
				$stud_addr_1=$stud_addr->?嗥??啣?_蝮????
				$stud_addr_1.=$stud_addr->?嗥??啣?_?撣???
				$stud_addr_1.=$stud_addr->?嗥??啣?_??;
				$stud_addr_1.=$stud_addr->?嗥??啣?_??
				$stud_addr_1.=$stud_addr->?嗥??啣?_頝航?;
				$stud_addr_1.=$stud_addr->?嗥??啣?_畾?
				$stud_addr_1.=$stud_addr->?嗥??啣?_撌?
				$stud_addr_1.=$stud_addr->?嗥??啣?_撘?
				$stud_addr_1.=$stud_addr->?嗥??啣?_??
				$stud_addr_1.=$stud_addr->?嗥??啣?_銋?
				$stud_addr_1.=$stud_addr->?嗥??啣?_璅?
				$stud_addr_1.=$stud_addr->?嗥??啣?_璅?;
				$stud_addr_1.=$stud_addr->?嗥??啣?_?嗡?;			
				$stud_addr_1=str_replace("null","",$stud_addr_1);
				
				$stud_addr=$basis_data->??窗鞈?->???啣?;
				$stud_addr_2=$stud_addr->???啣?_蝮????
				$stud_addr_2.=$stud_addr->???啣?_?撣???
				$stud_addr_2.=$stud_addr->???啣?_??;
				$stud_addr_2.=$stud_addr->???啣?_??
				$stud_addr_2.=$stud_addr->???啣?_頝航?;
				$stud_addr_2.=$stud_addr->???啣?_畾?
				$stud_addr_2.=$stud_addr->???啣?_撌?
				$stud_addr_2.=$stud_addr->???啣?_撘?
				$stud_addr_2.=$stud_addr->???啣?_??
				$stud_addr_2.=$stud_addr->???啣?_銋?
				$stud_addr_2.=$stud_addr->???啣?_璅?
				$stud_addr_2.=$stud_addr->???啣?_璅?;
				$stud_addr_2.=$stud_addr->???啣?_?嗡?;
				$stud_addr_2=str_replace("null","",$stud_addr_2);
				
				$stud_tel_1=$basis_data->??窗鞈?->???餉店;
				$stud_tel_2=$basis_data->??窗鞈?->???餉店;
				$stud_te1_3=$basis_data->??窗鞈?->銵??餉店;
				
				/* 3.0 XML 撌脣??
				$stud_addr=$basis_data->銝剛??蝐?;
				$stud_addr_a=$stud_addr->蝮????
				$stud_addr_b=$stud_addr->?撣???
				$stud_addr_c=$stud_addr->??;
				$stud_addr_d=$stud_addr->??
				$stud_addr_e=$stud_addr->頝航?;
				$stud_addr_f=$stud_addr->畾?
				$stud_addr_g=$stud_addr->撌?
				$stud_addr_h=$stud_addr->撘?
				$stud_addr_i=$stud_addr->??
				$stud_addr_j=$stud_addr->銋?
				$stud_addr_k=$stud_addr->璅?
				$stud_addr_l=$stud_addr->璅?;
				$stud_addr_m=$stud_addr->?嗡?;
				*/
				
				
				//?剔??扯釭
				$stud_class_kind=iconv("UTF-8","Big5",$basis_data->摮貊??剔??扯釭->?剔??扯釭);
				$stud_class_kind=array_search($stud_class_kind,stud_class_kind()); //頧??剔??扯釭隞?Ⅳ
				
				$stud_spe_kind=iconv("UTF-8","Big5",$basis_data->摮貊??剔??扯釭->?寞??剝???;
				$stud_spe_kind=array_search($stud_spe_kind,stud_spe_kind()); //頧??寞??剝??乩誨蝣?
				
				$stud_spe_class_kind=iconv("UTF-8","Big5",$basis_data->摮貊??剔??扯釭->?寞??剔??;
				$stud_spe_class_kind=array_search($stud_spe_class_kind,stud_spe_class_kind());  //頧??寞??剔?乩誨蝣?
				
				$stud_spe_class_id=iconv("UTF-8","Big5",$basis_data->摮貊??剔??扯釭->?寞??凋?隤脫扯釭);
				$stud_spe_class_id=array_search($stud_spe_class_id,stud_spe_class_id()); //頧??寞??凋?隤脫扯釭隞?Ⅳ
				
				//?亙飛???脰???
				$kindergarden=$basis_data->?亙飛???脰???>撟潛??摮?
				$stud_preschool_status=iconv("UTF-8","Big5",$kindergarden->撟潛??摮貉???;
				$stud_preschool_status=array_search($stud_preschool_status,stud_preschool_status());  //頧??亙飛鞈隞?Ⅳ
				$stud_preschool_id=$kindergarden->撟潛????典飛?∩誨蝣?
				$stud_preschool_name=$kindergarden->撟潛??摮豢?迂;
				
				$elementary=$basis_data->?亙飛???脰???>???亙飛;
				$stud_mschool_status=iconv("UTF-8","Big5",$elementary->???亙飛鞈);
				$stud_mschool_status=array_search($stud_mschool_status,stud_preschool_status());  //頧??亙飛鞈隞?Ⅳ			
				$stud_mschool_id=$elementary->??_??典飛?∩誨蝣?
				$stud_mseschool_name=$elementary->??_摮豢?迂;
				
				
				//??摮貊??啣?-頧摮貊???student_sn ??stud_id
				$SQL="SELECT student_sn,stud_id FROM stud_base WHERE stud_study_cond=0 AND trim(stud_person_id)='$stud_person_id' AND stud_sex='$stud_sex' AND stud_birthday='$stud_birthday' ORDER BY student_sn DESC";  // AND trim(stud_name)='$stud_name'  銝?撠??? ?寞?撠?僑?
				$SQL=iconv("UTF-8","Big5",$SQL);
				$result= $CONN->Execute($SQL) or user_error("?⊥??瑕?摮貊??箸鞈?! <br><br>$SQL",256);
				//$row = $result->FetchRow();			
				$stud_id=$result->fields["stud_id"];
				$student_sn=$result->fields["student_sn"];
				$messages=iconv("UTF-8","Big5","<BR><FONT COLOR=#0000FF>#?餃飛?楊??$student_sn ??餃飛??$stud_id ??餃???$stud_name ??餉澈??摮?:$stud_person_id ?餃?僑?:$stud_birthday</FONT>");
				echo $messages;
				switch ($result->recordcount()) {
					case 0:
						$messages.=iconv("UTF-8","Big5","<BR>?#?曆??唳迨???函?摮貊?蝝?? 蝟餌絞?⊥??臬鞈???<BR><BR> 隢?撠??[頨怠?霅????批]??箇?撟湔??包?臬甇?Ⅱ嚗?BR><BR> ??隢?a href='../stud_move'>?迨?????摮貊??啣?(stud_move)璅∠?</a> ??雿平!!");
						break;
					case 1:
						//頛?鞈?????
						$sse_relation_arr=sfs_text(iconv("UTF-8","Big5","?嗆???"));
						$sse_family_kind_arr=sfs_text(iconv("UTF-8","Big5","摰嗅滬憿?"));
						$sse_family_air_arr=sfs_text(iconv("UTF-8","Big5","摰嗅滬瘞??"));
						$sse_teach_arr=sfs_text(iconv("UTF-8","Big5","蝞⊥??孵?"));
						$sse_live_state_arr=sfs_text(iconv("UTF-8","Big5","撅??耦"));
						$sse_rich_state_arr=sfs_text(iconv("UTF-8","Big5","蝬??瘜?));
		
						$sse_arr= array("1"=>"???圈蝘","2"=>"???圈蝘","3"=>"?寞??","4"=>"?閎","5"=>"?暑蝧","6"=>"鈭粹???","7"=>"憭?銵","8"=>"?批?銵","9"=>"摮貊?銵","10"=>"銝蝧","11"=>"?行銵");
						while(list($id,$val)= each($sse_arr)){
							$temp_sse_arr = sfs_text(iconv("UTF-8","Big5","$val"));
							${"sse_arr_$id"} = $temp_sse_arr;
						}
						//echo iconv("UTF-8","Big5","?餅????....?餃???$stud_name ??餉澈??摮?:$stud_person_id<BR><BR>");
						include "import_basis.php";
						include "import_seme.php";
						include "import_move.php";
						include "import_inner.php";
						include "import_career.php";	//蝷曉????飛蝧??? 2016.11.08 ?啣?
						break;
					default:
						$messages.=iconv("UTF-8","Big5","<BR>#?餃???$stud_name ??餉澈??摮?:$stud_person_id ?餃?僑?:$stud_birthday 甇斤??函?蝝??".$result->recordcount()."蝑? 蝟餌絞?暹??臬, 隢炎??!<BR><BR>");
						break;
				}
			}
		}
	} else { exit('?⊥?霈?ML瑼?!'); }
}

$main=iconv("UTF-8","Big5","<form action =\"{$_SERVER['PHP_SELF']}\" enctype=\"multipart/form-data\" method=post>
<BR><font size=2 color='red'>?ML?臬?航??餉?摮貊?摮貊?鞈???????孵?嚗?冽??摮貊??ML鈭斗?瑼?嚗?<a href='stud_data_patch.php'> ?迨 </a>?脰???鋆嚗?/font><BR><BR>
?餅炬?臬?ML瑼?<input type=file name=\"xmlfile\" size=60>
<input type=\"submit\" name=\"go\" value=\"Go\">
</form>");
echo ($messages?$messages:$main);

foot();
?> 