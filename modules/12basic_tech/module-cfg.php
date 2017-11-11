<?php

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

$MODULE_TABLE_NAME[0] = "12basic_tech";
$MODULE_TABLE_NAME[1] = "12basic_kind_tech";

//---------------------------------------------------
//
// 2.這裡定義：模組中文名稱，請精簡命名 (供 "模組權限設定" 程式使用)
//
// 它會顯示給使用者
//-----------------------------------------------


$MODULE_PRO_KIND_NAME = "12年國教五專免試入學";


//---------------------------------------------------
//
// 3. 這裡定義：模組版本相關資訊 (供 "自動更新程式" 取用)
//    這區的 "變數名稱" 請勿改變!!!
//
//---------------------------------------------------

// 模組最後更新版本
$MODULE_UPDATE_VER="1.0.0";

// 模組最後更新日期
$MODULE_UPDATE="2013-10-21";


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

//目錄內程式  //「多元學習表現」、「技藝優良」、「弱勢身分」、「均衡學習」、「適性輔導」、「國中教育會考」、「其他」
$MENU_P = array("readme.php"=>"使用說明","student_list.php"=>"參與免試學生","kind_mirror.php"=>"身分對應設定","student_kind.php"=>"報名身分","signup.php"=>"報名學校","basic_data.php"=>"基本資料","diversification.php"=>"1.多元學習表現","particular.php"=>"2.技藝優良#","disadvantage.php"=>"3.弱勢身分","balance.php"=>"4.均衡學習","personality.php"=>"5.適性輔導","exam.php"=>"6.教育會考*","others.php"=>"7.其他#","sealed.php"=>"資料封存","prove.php"=>"積分證明單","output_103.php"=>"報名資料檔");


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

//$school_nature_array = array("10"=>"免試學區學校","5"=>"共同學區學校");
//$SFS_MODULE_SETUP[]=array('var'=>"aspiration_separateor", 'msg'=>"志願列表方式", 'value'=>array("<br>"=>"分項條列"," "=>"以空白分隔"));
//$SFS_MODULE_SETUP[]=array('var'=>"kind_evaluate", 'msg'=>"身分類別權值<br>一般生,原住民,原住民(語言認證),身心障礙,其他,境外優秀科技人才子女,政府派赴國外工作人員子女,僑生,蒙藏生", 'value'=>'0,10,20,30,40,50,60,70,80');
//$SFS_MODULE_SETUP[]=array('var'=>"native_id", 'msg'=>"身心障礙身分類別代號", 'value'=>1);
//$SFS_MODULE_SETUP[]=array('var'=>"native_language_sort", 'msg'=>"身心障礙屬性記載順位", 'value'=>3);
//$SFS_MODULE_SETUP[]=array('var'=>"native_id", 'msg'=>"原住民身分類別代號", 'value'=>9);
//$SFS_MODULE_SETUP[]=array('var'=>"native_language_sort", 'msg'=>"族語認證屬性記載順位", 'value'=>3);
$SFS_MODULE_SETUP[] =array('var'=>"remove_alarm", 'msg'=>"撤除參與有視窗提示", 'value'=>array("1"=>"是","0"=>"否"));
$SFS_MODULE_SETUP[] =array('var'=>"pic_checked", 'msg'=>"顯示學生大頭照", 'value'=>array("0"=>"否","1"=>"是"));
$SFS_MODULE_SETUP[] =array('var'=>"pic_width", 'msg'=>"大頭照顯示的寬度", 'value'=>'60');
$SFS_MODULE_SETUP[]=array('var'=>"comm_editable", 'msg'=>"可直接修改學生的聯絡資料", 'value'=>array(0=>"否",1=>"是"));
$SFS_MODULE_SETUP[]=array('var'=>"kind_editable", 'msg'=>"可直接修改身分別資料", 'value'=>array(0=>"否",1=>"是"));
//$SFS_MODULE_SETUP[]=array('var'=>"diversification_editable", 'msg'=>"可直接修改多元學習表現級分", 'value'=>array(0=>"否",1=>"是"));
//必需可修改 $SFS_MODULE_SETUP[]=array('var'=>"particular_editable", 'msg'=>"可直接修改技藝優良級分", 'value'=>array(0=>"否",1=>"是"));
//$SFS_MODULE_SETUP[]=array('var'=>"disadvantage_editable", 'msg'=>"可直接修改經濟弱勢級分", 'value'=>array(0=>"否",1=>"是"));
$SFS_MODULE_SETUP[]=array('var'=>"balance_editable", 'msg'=>"可直接修改均衡學習級分", 'value'=>array(0=>"否",1=>"是"));

$SFS_MODULE_SETUP[]=array('var'=>"personality_editable", 'msg'=>"可直接修改適性發展級分", 'value'=>array(0=>"否",1=>"是"));
//$SFS_MODULE_SETUP[]=array('var'=>"native_language_text", 'msg'=>"通過族語認證標記文字", 'value'=>'是');
//$SFS_MODULE_SETUP[]=array('var'=>"fitness_keyword", 'msg'=>"有效的體適能檢測單位關鍵字", 'value'=>'檢測站');
$SFS_MODULE_SETUP[]=array('var'=>"uneditable_bgcolor", 'msg'=>"已封存記錄列顏色", 'value'=>'#ffffff');
$SFS_MODULE_SETUP[]=array('var'=>"full_sealed_check", 'msg'=>"全數封存才允許輸出", 'value'=>array(1=>"是",0=>"否"));
$SFS_MODULE_SETUP[]=array('var'=>"full_personal_profile", 'msg'=>"報名檔輸出完整個資", 'value'=>array(1=>"是",0=>"否"));
$SFS_MODULE_SETUP[]=array('var'=>"class_leader_excluded", 'msg'=>"不採計的班級幹部名稱(以[]包覆)",'value'=>'[特殊服務表現]');
$SFS_MODULE_SETUP[]=array('var'=>"club_leader_excluded", 'msg'=>"不採計的社團幹部名稱(以[]包覆)",'value'=>'[]');

$SFS_MODULE_SETUP[]=array('var'=>"data_color", 'msg'=>"積分證明單資料顯示顏色",'value'=>'#0000FF');
$SFS_MODULE_SETUP[]=array('var'=>"header_bgcolor", 'msg'=>"欄位抬頭顯示底色",'value'=>'#FFCCCC');

$SFS_MODULE_SETUP[]=array('var'=>"native_id", 'msg'=>"原住民代號", 'value'=>9);
$SFS_MODULE_SETUP[]=array('var'=>"native_language_sort", 'msg'=>"族語認證屬性記載順位", 'value'=>3);
$SFS_MODULE_SETUP[]=array('var'=>"native_language_text", 'msg'=>"通過族語認證標記文字", 'value'=>'是');

$SFS_MODULE_SETUP[]=array('var'=>"data_source", 'msg'=>"聯絡資料來源", 'value'=>array(0=>"舊規則判斷",1=>"依照我的指定"));
$SFS_MODULE_SETUP[]=array('var'=>"tel_family", 'msg'=>"市內電話資料來源", 'value'=>array(''=>"不輸出",'stud_tel_2'=>"連絡電話",'stud_tel_1'=>"戶籍電話",'stud_tel_3'=>"行動電話"));
$SFS_MODULE_SETUP[]=array('var'=>"tel_mobile", 'msg'=>"行動電話資料來源", 'value'=>array(''=>"不輸出",'stud_tel_3'=>"行動電話",'stud_tel_1'=>"戶籍電話",'stud_tel_2'=>"連絡電話"));
$SFS_MODULE_SETUP[]=array('var'=>"address_family", 'msg'=>"地址資料來源", 'value'=>array(''=>"不輸出",'stud_addr_2'=>"連絡地址",'stud_addr_1'=>"戶籍地址"));



?>
