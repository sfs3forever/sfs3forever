<?php
header('Content-Type: text/xml, charset=utf-8');
if (!$_POST['sid']){
exit;
}

session_id($_POST['sid']);
//session_start();

require "config.php";
require "class.php";

require_once('Crypt/DiffieHellman.php');
require_once('Crypt/CBC.php');
//include 'security.php';


// 隤?
sfs_check();
if ($_POST['getkey']=='true'){

$alice = new Crypt_DiffieHellman($_POST['serverp'], $_POST['serverg']);

$alice_pubKey = $alice->generateKeys()->getPublicKey(Crypt_DiffieHellman::BINARY);

$_SESSION['alicepk']=$alice_pubKey;

$alice_computeKey = $alice->computeSecretKey(base64_decode($_POST['serverpk']),Crypt_DiffieHellman::BINARY)->getSharedSecretKey(Crypt_DiffieHellman::BINARY);

$_SESSION['alicesk']=$alice_computeKey;


echo base64_encode($_SESSION['alicepk']);

}else{



    $key = base64_encode($_SESSION['alicesk']);

    $aeskey = hash('md5', base64_encode($key));


if ($_POST['encryption_xml']){

        $ciphertext = $_POST['encryption_xml'];
        $ciphertext_dec = base64_decode($ciphertext);
        $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
        $iv_dec = substr($ciphertext_dec, 0, $iv_size);
        $ciphertext_dec = substr($ciphertext_dec, $iv_size);
        $plaintext_utf8_dec = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $aeskey, $ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);
	$decryptedxml = base64_decode($plaintext_utf8_dec);
	//echo $decryptedxml;
	
		$stud_kind_array=stud_kind();  //?瑕?摮貊?頨怠??乩誨蝣潔誑?拙??Ｗ??
		$xml = simplexml_load_string($decryptedxml);
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
				//echo $messages;
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
						break;
					default:
						$messages.=iconv("UTF-8","Big5","<BR>#?餃???$stud_name ??餉澈??摮?:$stud_person_id ?餃?僑?:$stud_birthday 甇斤??函?蝝??".$result->recordcount()."蝑? 蝟餌絞?暹??臬, 隢炎??!<BR><BR>");
						break;
				}
			}
		}
	echo messages.'<BR/>Applet Import Success!';
}else{
	echo '?⊥?甇?Ⅱ閫??';
}


}


?> 

