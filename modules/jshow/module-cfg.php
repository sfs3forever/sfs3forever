<?php

//---------------------------------------------------
//
// 1.這裡定義：系統變數 (供 "模組安裝管理" 程式使用)
//------------------------------------------
//
// "模組安裝管理" 程式會寫入貴校的 SFS/pro_kind 表中
//
// 建議：請儘量用英文大寫來定義，最好能由字面看出其代表的意義。
//---------------------------------------------------
// 您打算把此一模組放在那一個系統區塊中呢?
//
// 目前僅有二區供您選擇
//
// "校務行政" 模組區塊代碼：28
// "工具箱"  模組區塊代碼：161
//---------------------------------------------------

// 您這個模組的名稱，就是您這個模組放置在 SFS 中的目錄名稱

$MODULE_NAME = "jshow";

//本模組須區分管理權
$MODULE_MAN = 1 ;

//管理權說明
$MODULE_MAN_DESCRIPTION = "具有管理權人員,可刪修其他人員圖檔";

//---------------------------------------------------
//
// 2.這裡定義：模組資料表名稱 (供 "模組安裝管理" 程式使用)
//-----------------------------------------------
//
// 若有一個以上，請接續此 $MODULE_TABLE_NAME 陣列來定義
//
// 也可以用以下這種設法：
//
// $MODULE_TABLE_NAME=array(0=>"lunchtb", 1=>"xxxx");
//
// $MODULE_TABLE_NAME[0] = "lunchtb";
// $MODULE_TABLE_NAME[1]="xxxx";
//
// 請注意要和 module.sql 中的 table 名稱一致!!!
//---------------------------------------------------

// 資料表名稱定義

$MODULE_TABLE_NAME[0] = "jshow_setup";  //分類區設定
$MODULE_TABLE_NAME[1] = "jshow_check"; 	//分類區授權
$MODULE_TABLE_NAME[2] = "jshow_pic";   	//圖片資料

//
// 3.這裡定義：模組中文名稱，請精簡命名 (供 "模組安裝管理" 程式使用)
//
// 它會顯示給使用者
//-----------------------------------------------
$MODULE_PRO_KIND_NAME = "Joomla!圖片展示及管理";

//---------------------------------------------------
//
// 4. 這裡定義：模組版本相關資訊 (供 "相關系統程式" 取用)
//
//---------------------------------------------------

// 模組版本
$MODULE_VER="1.0.0";

// 模組程式作者
$MODULE_AUTHOR="smallduh";

// 模組版權種類
$MODULE_LICENSE="";

// 模組外顯名稱(供 "模組設定" 程式使用)
$MODULE_DISPLAY_NAME="Joomla!圖片展示及管理";

// 模組開始日期
$MODULE_CREATE_DATE="2014-03-20";

// 模組最後更新日期
$MODULE_UPDATE="2014-03-20 11:00:00";

// 模組更新者
$MODULE_UPDATE_MAN="smallduh";


//---------------------------------------------------
//
// 5. 這裡請定義：您這支程式需要用到的：變數或常數
//------------------------------^^^^^^^^^^
//
// (不想被 "模組設定" 程式控管者，請置放於此)
//
// 建議：請儘量用英文大寫來定義，最好要能由字面看出其代表的意義。
//---------------------------------------------------
$menu_p = array(
"jshow_upload.php"=>"圖檔上傳",
"jshow_show.php"=>"展圖設定",
"jshow_setup.php"=>"分類區管理",
"jshow_check.php"=>"分類區授權"
);


//---------------------------------------------------
//
// 6. 這裡定義：預設值要由 "模組設定" 程式來控管者，
//    若不想，可不必設定。
//
// 格式： var 代表變數名稱
//       msg 代表顯示訊息
//       value 代表變數設定值
//---------------------------------------------------
$SFS_MODULE_SETUP[] =
	array('var'=>"api_key", 'msg'=>"joomla模組連線API密碼", 'value'=>"publicKey");

?>
