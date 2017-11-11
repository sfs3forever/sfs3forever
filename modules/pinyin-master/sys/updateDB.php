<?php

$latestTimestamp = 1487251992;
$sn=1;
if(isTableValid($phDB,"updatePh")){
	//update ph data
	//??鞈?摨咨imestamp
	$stmt = $phDB->prepare("select * from updatePh where sn = :sn");
	$stmt->bindParam(":sn", $sn, PDO::PARAM_INT);
	$stmt->execute();
	
	$sth = $stmt->fetchAll();

	foreach($sth as $row){
		$dbTimestamp = $row['timestamp'];
	}
	
	
	if($dbTimestamp != $latestTimestamp){
		//?湔鞈?摨?
		$ty = "ciou";
		$ph="???;
		$stmt = $phDB->prepare("UPDATE ph SET ty = :ty where ph = :ph");
		$stmt->bindParam(":ty", $ty, PDO::PARAM_STR);
		$stmt->bindParam(":ph", $ph, PDO::PARAM_STR);
		$stmt->execute();

                $ty = "rong";
                $ph="??瓦?;
                $stmt = $phDB->prepare("UPDATE ph SET ty = :ty where ph = :ph");
                $stmt->bindParam(":ty", $ty, PDO::PARAM_STR);
                $stmt->bindParam(":ph", $ph, PDO::PARAM_STR);
                $stmt->execute();


		//?湔timestamp 2017/02/17
		$stmt = $phDB->prepare("UPDATE updatePh SET timestamp = :timestamp where sn = :sn");
		$stmt->bindParam(":sn", $sn, PDO::PARAM_INT);
		$stmt->bindParam(":timestamp", $latestTimestamp, PDO::PARAM_INT);
		$stmt->execute();
	
		$smarty=new Smarty;// instantiates an object $smarty of class Smarty
		$smarty->left_delimiter='<{';
		$smarty->right_delimiter='}>';
		$smarty->setCompileDir($templates_c);
		$smarty->assign("showModal","true");
		$smarty->assign("infoMsg","?湔?????瓦?);

		$smarty->display("templates/showModal.tpl");
		
	
	}
	
} else {
	//create table
	$phDB->exec("CREATE TABLE IF NOT EXISTS updatePh(
		'sn' INT PRIMARY KEY,
		'timestamp' INTEGER)");

	$stmt = $phDB->prepare("INSERT INTO updatePh(sn, timestamp) VALUES(:sn, :timestamp)");

	$sn = 1;
	$timestamp = 1;
	$stmt->bindParam(":sn", $sn, PDO::PARAM_INT);
	$stmt->bindParam(":timestamp", $timestamp, PDO::PARAM_INT);
	$stmt->execute();

	$smarty=new Smarty;// instantiates an object $smarty of class Smarty
	$smarty->left_delimiter='<{';
	$smarty->right_delimiter='}>';
	$smarty->setCompileDir($templates_c);
	$smarty->assign("showModal","true");
	$smarty->assign("infoMsg","鞈?銵典歇?湔,隢??璅∠?");

	$smarty->display("templates/showModal.tpl");

	exit;

}

function isTableValid($phDB, $tableName){
	$tables = $phDB->query("SELECT * FROM sqlite_master;");

	foreach($tables as $table){
		if ($table["name"] == $tableName){
			return true;	
		}
	}
	return false;
}


