<?php

// $Id: config.php 5310 2009-01-10 07:57:56Z smallduh $

	//系統設定檔
	include_once "./module-cfg.php";
	include_once "../../include/config.php";

	//生涯輔導手冊模組函式
  include_once "../12basic_career/my_fun.php";


	//模組更新程式
	require_once "./module-upgrade.php";
	  

//載入本模組的專用函式庫
include_once ('my_functions.php');


//取得模組參數的類別設定
$m_arr = &get_module_setup("career_leader");
extract($m_arr,EXTR_OVERWRITE);

$name_list_arr=explode(',',$name_list);
$name_list2_arr=explode(',',$name_list2);

if ($max_leader1=='') $max_leader1=8;	
if ($max_leader2=='') $max_leader2=8;	
	
?>


