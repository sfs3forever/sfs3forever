<?php
// 頛閮剖?瑼?
include_once "stud_move_config.php";

// 隤?瑼Ｘ
sfs_check();
//print_r($_SESSION);
//$m_arr = get_sfs_module_set();
//extract($m_arr, EXTR_OVERWRITE);

//?喳?
/*
 * request_edu_id  ?澆蝡臬飛??(?芸楛?飛?∩誨蝣?
 * resource_edu_id  撠 (頧蝡舐?摮豢)
 * stud_person_id  摮貊??澈??摮?
 *
 * API ?單??乩蜓璈炎?亙飛????
 *
 *
 */


$ch = curl_init();

//閬?POST ??bridge 鞈? ,
$POST_DATA['request_edu_id']=base64_encode($_POST['request_edu_id']);
$POST_DATA['resource_edu_id']=base64_encode($_POST['resource_edu_id']);
$POST_DATA['stud_person_id']=base64_encode($_POST['stud_person_id']);
$POST_DATA['act']=base64_encode("bridge_download");
$POST_DATA['request_edu_name']=base64_encode(big5_to_utf8($SCHOOL_BASE['sch_cname']));
$POST_DATA['request_username']=base64_encode(big5_to_utf8($_SESSION['session_tea_name']));

curl_setopt($ch, CURLOPT_CUSTOMREQUEST,  'POST');    //?舐 GET , PUT , POST , DELETE 蝑?method
curl_setopt($ch, CURLOPT_POSTFIELDS,$POST_DATA);

// ?ㄐ?仿?瑼Ｘ SSL ??????
curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,0);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);

curl_setopt($ch, CURLOPT_HEADER, 0);

curl_setopt($ch, CURLOPT_URL, "https://bridge.tc.edu.tw/bridge.php");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$receive=curl_exec($ch);
curl_close($ch);

if (!$receive==false) {
    //頧???? , json_decode ???? true ?
    $SERVICE=json_decode($receive,true);
    $SERVICE=array_base64_decode($SERVICE);
    if ($SERVICE['result']==0) {
        $SERVICE['message']="?⊥????璈銝餅?!\n";
    }
} else {
    $SERVICE['result']=0;
    $SERVICE['message']="connect Server false! ?⊥????璈銝餅?!";
}



if ($SERVICE['result']==1) {
    //header ? data
    $filename_r="STUD_".$_POST['stud_person_id']."_XML_3.xml";

    header("Content-Type: application/octet-stream");

    header("Content-Disposition: attachment; filename=$filename_r");


    echo html_entity_decode($SERVICE['data']);
    //echo html_entity_decode($SERVICE['message']);
} else {
    header("Content-type: text/html; charset=utf-8");
    echo $_POST['request_edu_id'].",".$_POST['resource_edu_id'].",".$_POST['stud_person_id']."<br>";
    echo $SERVICE['message'];
}



