<?php

// $Id: module-cfg.php 8803 2016-01-30 15:54:54Z qfon $

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



$MODULE_NAME = "stud_sta";





// 模組置放主要目錄：

// 可選擇的有 school 及 module



$MODULE_MAIN_DIR="module";





// 模組置放路徑：

// 請儘量使用變數代換，勿修改!



$MODULE_STORE_PATH  = "$MODULE_MAIN_DIR/$MODULE_NAME";





// 父模組代碼，請看上述說明

$MODULE_PRO_PARENT = 28;





// 預設是否開啟使用?

$MODULE_PRO_ISLIVE = 1;



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



$MODULE_TABLE_NAME[0] = "stud_sta";



//

// 3.這裡定義：模組中文名稱，請精簡命名 (供 "模組安裝管理" 程式使用)

//

// 它會顯示給使用者

//-----------------------------------------------





$MODULE_PRO_KIND_NAME = "學生在學證明書";





//---------------------------------------------------

//

// 4. 這裡定義：模組版本相關資訊 (供 "相關系統程式" 取用)

//

//---------------------------------------------------



// 模組版本

$MODULE_VER="1.0";



// 模組程式作者

$MODULE_AUTHOR="chen";



// 模組版權種類

$MODULE_LICENSE="";



// 模組外顯名稱(供 "模組設定" 程式使用)

$MODULE_DISPLAY_NAME="學生在學證明書";



// 模組隸屬群組

$MODULE_GROUP_NAME="校務行政";



// 模組開始日期

$MODULE_CREATE_DATE="2003-5-8";



// 模組最後更新日期

$MODULE_UPDATE="2003-6-11 08:30:00";



// 模組更新者

$MODULE_UPDATE_MAN="chen";





//---------------------------------------------------

//

// 5. 這裡請定義：您這支程式需要用到的：變數或常數

//------------------------------^^^^^^^^^^

//

// (不想被 "模組設定" 程式控管者，請置放於此)

//

// 建議：請儘量用英文大寫來定義，最好要能由字面看出其代表的意義。

//---------------------------------------------------







//---------------------------------------------------

//

// 6. 這裡定義：預設值要由 "模組設定" 程式來控管者，

//    若不想，可不必設定。

//

// 格式： var 代表變數名稱

//       msg 代表顯示訊息

//       value 代表變數設定值

//---------------------------------------------------



$SFS_MODULE_SETUP[0] =
        array('var'=>"sta_word", 'msg'=>"在學證明書字號", 'value'=>"中縣安小在證字");
$SFS_MODULE_SETUP[1] =
        array('var'=>"signature", 'msg'=>"證明聯主管落款", 'value'=>"校長 ");
$SFS_MODULE_SETUP[2] =
        array('var'=>"signature2", 'msg'=>"存根聯主管落款", 'value'=>"校長 ○○○");
$SFS_MODULE_SETUP[3] =
        array('var'=>"signature3", 'msg'=>"英文版主管落款", 'value'=>"Principal name here");
$SFS_MODULE_SETUP[4] =
        array('var'=>"signwhere", 'msg'=>"導師及校對放置位置", 'value'=>array("0"=>"證明聯","1"=>"存根聯","2"=>"都有"));

$school_menu_p = array(

"stud_sta_new.php"=>"開立證明書",
"sta_view.php"=>"檢視與列印"
);
//"stud_sta.php"=>"學生在學證明書",

?>
