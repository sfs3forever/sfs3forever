<?php

// $Id: config.php 8914 2016-06-22 03:35:53Z qfon $

include_once "../../include/config.php";
include_once "../../include/sfs_case_PLlib.php";
include_once "../../include/sfs_case_studclass.php";
include_once "../../include/sfs_case_calendar.php";
include_once "../../include/sfs_case_dataarray.php";
include "../../include/sfs_oo_zip2.php";
include_once "module-cfg.php";

//---------------------------------------------------
// 這裡請引入您自己的函式庫
//---------------------------------------------------
include_once "function.php";

$abskind=array("事假"=>"1","病假"=>"2","曠課"=>"3","公假"=>"5");

//重新定義星期
$weekN=array('一','二','三','四','五','六');

//取得模組設定
$m_arr = get_sfs_module_set();
extract($m_arr, EXTR_OVERWRITE);
$ranks=$ranks?$ranks:50;

$n_arr = get_sfs_module_set("score_nor");
$section_include=$n_arr["section_include"];
?>
