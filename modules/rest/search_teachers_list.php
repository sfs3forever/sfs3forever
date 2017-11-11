<?php
//
// 取得在職教師名單列表 , 最後把資料存在 data 陣列中
//

$sql_select = "select a.teach_id,a.name,a.teach_person_id,a.sex,a.teacher_sn,c.room_name,d.rank,d.title_name,d.teach_title_id from teacher_base a,teacher_post b,school_room c,teacher_title d where a.teach_condition='0' and a.teacher_sn=b.teacher_sn and b.post_office=c.room_id and b.teach_title_id=d.teach_title_id order by d.rank";


$res=$CONN->Execute($sql_select);
$row=$res->getRows();
$i=0;
foreach ($row as $V) {
    $i++;
    $key=($params['key']=='teacher_sn')?$V['teacher_sn']:$i;
    $data[$key]['teacher_sn']=$V['teacher_sn'];
    $data[$key]['teacher_id']=$V['teach_id'];
    $data[$key]['teacher_name']=$V['name'];
    $data[$key]['teacher_sex']=$V['sex'];
    $data[$key]['room_name']=$V['room_name'];
    $data[$key]['title_name']=$V['title_name'];
    $data[$key]['teach_person_id']=$V['teach_person_id'];
}