<?php

// $Id: module-upgrade.php 6628 2011-11-22 06:12:20Z infodaes $

if(!$CONN){
        echo "go away !!";
        exit;
}

// 檢查更新否
// 更新記錄檔路徑
$upgrade_path = "upgrade/".get_store_path($path);
$upgrade_str = set_upload_path("$upgrade_path");
$up_file_name =$upgrade_str."2003-06-09.txt";
if (!is_file($up_file_name)){
	$query = "ALTER TABLE `teacher_post` DROP PRIMARY KEY ;";

	if ($CONN->Execute($query)) {
		$query2 =" ALTER TABLE `teacher_post` ADD UNIQUE (`teacher_sn`);";
		$CONN->Execute($query2);
		$temp_query = "更新teacher_post  primary key 值 -- by hami (2003-06-09)\n$query2";
		$fp = fopen ($up_file_name, "w");
		fwrite($fp,$temp_query);
		fclose ($fd);
	}
}
$up_file_name =$upgrade_str."2005-04-04.txt";
if (!is_file($up_file_name)){
	$query = "ALTER TABLE `teacher_connect` DROP PRIMARY KEY;";

	if ($CONN->Execute($query)) {
		$query2 =" ALTER TABLE `teacher_connect` ADD PRIMARY KEY ( `teacher_sn` ) ";
		$CONN->Execute($query2);
		$temp_query = "更新teacher_pconnect  primary key 值 -- by hami (2005-04-04)\n$query2";
		$fp = fopen ($up_file_name, "w");
		fwrite($fp,$temp_query);
		fclose ($fd);
	}
}
$up_file_name =$upgrade_str."2007-03-26.txt";
if (!is_file($up_file_name)){
	$query = "ALTER TABLE `teacher_connect` CHANGE `email` `email` VARCHAR(120);ALTER TABLE `teacher_connect` CHANGE `selfweb` `selfweb` VARCHAR(200);ALTER TABLE `teacher_connect` CHANGE `classweb` `classweb` VARCHAR(200); FLUSH TABLE `teacher_connect`; ";

	if ($CONN->Execute($query)) {
		$temp_query = "更新email  selfweb classweb欄位大小 -- by chi(2007-03-26)\n$query";
		$fp = fopen ($up_file_name, "w");
		fwrite($fp,$temp_query);
		fclose ($fd);
	}
}

$up_file_name =$upgrade_str."2011-11-22.txt";
if (!is_file($up_file_name)){
	$query = "ALTER TABLE `teacher_base` ADD `master_subjects` VARCHAR( 200 ) NULL AFTER `teach_is_cripple`;";
	if ($CONN->Execute($query)) {
		$temp_query = "增加學科領域任教專門科目欄位 master_subjects -- by Infodaes(2011-11-22)\n$query";
		$fp = fopen ($up_file_name, "w");
		fwrite($fp,$temp_query);
		fclose ($fd);
	}
}

$up_file_name =$upgrade_str."2011-11-22-2.txt";
if (!is_file($up_file_name)){
	$query = "ALTER TABLE `teacher_base` ADD `certdate` DATE NULL AFTER `teach_check_word`, ADD `certgroup` VARCHAR( 40 ) NULL AFTER `certdate`,ADD `certarea` VARCHAR( 40 ) NULL AFTER `certgroup`;";
	if ($CONN->Execute($query)) {
		$temp_query = "增加教師證登記日期、教師類別、登記學科領域欄位 master_subjects -- by Infodaes(2011-11-22)\n$query";
		$fp = fopen ($up_file_name, "w");
		fwrite($fp,$temp_query);
		fclose ($fd);
	}
}
?>
