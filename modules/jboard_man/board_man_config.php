<?php
                                                                                                                             
// $Id: board_man_config.php 5310 2009-01-10 07:57:56Z hami $

/* 取得學務系統設定檔 */
require_once "../../include/config.php";
require_once "../../include/sfs_case_PLlib.php";
require_once "../../include/sfs_case_dataarray.php";
require_once "../../include/sfs_core_globals.php";
//目錄內程式
$menu_p = array("boardadmin.php"=>"分類區管理","board_user_list.php"=>"分類區授權");

$position_array=array("0"=>"最上層","1"=>"最1層","2"=>"最2層","3"=>"最3層","4"=>"最4層","5"=>"最5層","6"=>"最6層","7"=>"最7層","8"=>"最8層","9"=>"最9層");

//層級顏色
$position_color=array("0"=>"#0000FF","1"=>"#D200B4","2"=>"#1E4B00","3"=>"#7800B4","4"=>"#782D00","5"=>"#A50000","6"=>"#D200B4","7"=>"#003CB4","8"=>"#1E5A00","9"=>"#3C2D00");


?>
