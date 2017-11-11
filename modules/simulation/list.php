<?php
/*
* $Id: list.php 7752 2013-11-08 10:31:02Z hami $
* 模擬使用者
*/

// 載入系統設定檔
require_once "config.php";

// 身分認證
sfs_check();

// 載入物件程式
require_once "simu_class.php";

// 建立物件
$obj = new simu_class();

// 執行程序處理
$obj->process();


?>
