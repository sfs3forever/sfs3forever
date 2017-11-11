<?php
//$Id: module-cfg.php 6064 2010-08-31 12:26:33Z infodaes $

//---------------------------------------------------
//
// 1.這裡定義：模組資料表名稱 (供 "模組權限設定" 程式使用)
//   這區的 "變數名稱" 請勿改變!!!
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

$MODULE_TABLE_NAME[0] = "authentication_item";
$MODULE_TABLE_NAME[1] = "authentication_subitem";
$MODULE_TABLE_NAME[2] = "authentication_record";

//---------------------------------------------------
//
// 2.這裡定義：模組中文名稱，請精簡命名 (供 "模組權限設定" 程式使用)
//
// 它會顯示給使用者
//-----------------------------------------------


$MODULE_PRO_KIND_NAME = "學習認證";


//---------------------------------------------------
//
// 3. 這裡定義：模組版本相關資訊 (供 "自動更新程式" 取用)
//    這區的 "變數名稱" 請勿改變!!!
//
//---------------------------------------------------

// 模組最後更新版本
$MODULE_UPDATE_VER="1.0.0";

// 模組最後更新日期
$MODULE_UPDATE="2010-12-06";


//---------------------------------------------------
//
// 4. 這裡請定義：您這支程式需要用到的：變數或常數
//---------------------------------^^^^^^^^^^
//
// (不想被 "模組參數管理" 控管者，請置放於此)
//
// 建議：請儘量用英文大寫來定義，最好要能由字面看出其代表的意義。
//
// 這區的 "變數名稱" 可以自由改變!!!
//
//---------------------------------------------------

//目錄內程式
$MENU_P = array(
"item.php"=>"項目設定","subitem.php"=>"細目設定","authentication_list.php"=>"認證卡","barcode_auth.php"=>"條碼掃瞄登錄","authentication.php"=>"項目別認證登錄 ","authentication2.php"=>"學生別認證登錄","seme_report.php"=>"學期統計","class_report.php"=>"班級統計","student_report.php"=>"個人認證紀錄","student_rank.php"=>"排行榜","new_authentication.php"=>"最新認證");

//---------------------------------------------------
//
// 5. 這裡定義：預設值要由 "模組參數管理" 程式來控管者，
//    若不想，可不必設定。
//
// 格式： var 代表變數名稱
//       msg 代表顯示訊息
//       value 代表變數設定值
//
// 若您決定將這些變數交由 "模組參數管理" 來控管，那麼您的模組程式
// 就要對這些變數有感知，也就是說：若這些變數值在模組參數管理中改變，
// 您的模組就要針對這些變數有不同的動作反映。
//
// 例如：某留言板模組，提供每頁顯示筆數的控制，如下：
// $SFS_MODULE_SETUP[1] =
// array('var'=>"PAGENUM", 'msg'=>"每頁顯示筆數", 'value'=>10);
//
// 上述的意思是說：您定義了一個變數 PAGENUM，這個變數的預設值為 10
// PAGENUM 的中文名稱為 "每頁顯示筆數"，這個變數在安裝模組時會寫入
// pro_module 這個 table 中
//
// 我們有提供一個函式 get_module_setup
// 供您取用目前這個變數的最新狀況值，
//
// 使用法：
//
// $ret_array =& get_module_setup("module_makeer")
//
//
// 詳情請參考 include/sfs_core_module.php 中的說明。
//
// 這區的 "變數名稱 $SFS_MODULE_SETUP" 請勿改變!!!
//---------------------------------------------------

$IS_MODULE_ARR = array("Y"=>"是","N"=>"否");

$SFS_MODULE_SETUP[0]=array('var'=>"types", 'msg'=>"認證類別(請以英文逗號(\",\")分隔)", 'value'=>"語文,體育,才藝,其他");
$SFS_MODULE_SETUP[1]=array('var'=>"new_day_limit", 'msg'=>"最新認證天數限定", 'value'=>7);
$SFS_MODULE_SETUP[2]=array('var'=>"zero_display", 'msg'=>"分數為零時顯示文字", 'value'=>'通過');
$SFS_MODULE_SETUP[3]=array('var'=>"over_100_display", 'msg'=>"分數超過100時顯示文字", 'value'=>'優異');
$SFS_MODULE_SETUP[4]=array('var'=>"header", 'msg'=>"認證卡頁首", 'value'=>'親愛的小朋友：<br>　　這是您本學期的學習認證項目，希望您能和同學互相勉勵，一起提昇自己的能力喔！');
$SFS_MODULE_SETUP[5]=array('var'=>"footer", 'msg'=>"認證卡頁腳", 'value'=>'導師：　　　　　　　　　　　　　　家長簽章：');
$SFS_MODULE_SETUP[6]=array('var'=>"title_font_size", 'msg'=>"抬頭字體大小", 'value'=>'24px');
$SFS_MODULE_SETUP[7]=array('var'=>"person_font_size", 'msg'=>"學生資料字體大小", 'value'=>'12px');
$SFS_MODULE_SETUP[8]=array('var'=>"text_font_size", 'msg'=>"內文字體大小", 'value'=>'12px');
$SFS_MODULE_SETUP[9] =array('var'=>"Barcode_height", 'msg'=>"條碼高度?", 'value'=>'24');
?>
