<?php

// $Id: module-cfg.php 5310 2009-01-10 07:57:56Z smallduh $

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

$MODULE_TABLE_NAME[0] = "contest_itembank";  			//查資料比賽題庫
$MODULE_TABLE_NAME[1] = "contest_ibgroup";   			//每次競賽從題庫抓出的題目組
$MODULE_TABLE_NAME[2] = "contest_record1";   			//查資料作答記錄
$MODULE_TABLE_NAME[3] = "contest_record2";   			//繪圖與簡報比賽作答記錄
$MODULE_TABLE_NAME[4] = "contest_setup";      		//每次競賽設定
$MODULE_TABLE_NAME[5] = "contest_score_setup";		//繪圖與簡報比賽細項評分設定
$MODULE_TABLE_NAME[6] = "contest_score_user"; 		//繪圖與簡報比賽各細項評分成績
$MODULE_TABLE_NAME[7] = "contest_score_record2"; 	//繪圖與簡報比賽總成績和評語
$MODULE_TABLE_NAME[8] = "contest_user";      			//每次競賽報名資料
$MODULE_TABLE_NAME[9] = "contest_judge_user";			//評審老師
$MODULE_TABLE_NAME[10] = "contest_news";					//最新消息
$MODULE_TABLE_NAME[11] = "contest_files";					//檔案下載檔案設定
//---------------------------------------------------
//
// 2.這裡定義：模組中文名稱，請精簡命名 (供 "模組權限設定" 程式使用)
//
// 它會顯示給使用者
//-----------------------------------------------

$MODULE_PRO_KIND_NAME = "中市網競-學生模組";

// 需要使用管理者權限
$MODULE_MAN=false;


//---------------------------------------------------
//
// 3. 這裡定義：模組版本相關資訊 (供 "自動更新程式" 取用)
//    這區的 "變數名稱" 請勿改變!!!
//
//---------------------------------------------------

// 模組最後更新版本
$MODULE_UPDATE_VER="1.0";

// 模組最後更新日期
$MODULE_UPDATE="2013-02-21";


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
$school_menu_p = array(
"ct_stud_news.php"=>"最新消息",
"ct_stud_review.php"=>"成績與作品",
//"ct_search.php"=>"查資料比賽",
"ct_painting.php"=>"靜態繪圖比賽",
//"ct_animation.php"=>"動畫繪圖",
"ct_impress.php"=>"專題簡報比賽",
"ct_scratch_ani.php"=>"Scratch動畫比賽",
"ct_type1.php"=>"中打比賽",
"ct_type2.php"=>"英打比賽",
"ct_typingtest.php"=>"打字練習"
);


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
// 詳情請參考 include/sfs_core_module.php 中的說明。
//
// 這區的 "變數名稱 $SFS_MODULE_SETUP" 請勿改變!!!
//---------------------------------------------------

// 第2,3,4....個，依此類推： 

// $SFS_MODULE_SETUP[1] =
//	array('var'=>"xxxx", 'msg'=>"yyyy", 'value'=>0);

// $SFS_MODULE_SETUP[2] =
//	array('var'=>"ssss", 'msg'=>"tttt", 'value'=>1);

?>