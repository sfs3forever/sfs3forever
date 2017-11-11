<?php
/*撘摮詨?蝟餌絞閮剖?瑼?/
include "../../include/config.php";
include_once "../../include/sfs_case_PLlib.php";
if (empty($_SESSION['session_tea_sn'])){
	print "蝟餌絞?潛??航炊";
	exit;
}

$_POST = json_decode(file_get_contents('php://input'), true);
//print (sizeof($_POST));

$flag=1;
foreach($_POST as $users => $user){
		$sql = "UPDATE stud_base SET stud_name_eng=? WHERE stud_id=?";
		$rs=$CONN->Execute($sql,array($user['name'],$user['id']));

		if (!$rs) { $flag =0 ; }
	
}

if($flag==1){
	$msg = sprintf("??d蝑???唳???,sizeof($_POST));
} else{
	$msg = "鞈?撖怠憭望?";
}
print $msg;
