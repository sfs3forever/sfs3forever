<?php

// $Id: config.php 5357 2009-02-02 12:34:41Z brucelyc $
include_once "../../include/config.php";
include_once "../../include/sfs_case_PLlib.php";
require_once "./module-cfg.php";
require_once "./module-upgrade.php";
require_once "../../include/fckeditor.php";

  //============================================================ 
  $path_str = "school/news/";
  set_upload_path($path_str);  
  //儲存附加檔案絕對位置，目錄權限設為777(最後有 / )
  $savepath = $UPLOAD_PATH.$path_str;

  /*和網頁根目錄相對位置 下載路徑 */
  $htmlsavepath = $UPLOAD_URL.$path_str;  
  //=========================================================

//取得模組參數設定
$m_arr =& get_module_setup("news");
extract($m_arr, EXTR_OVERWRITE);

$PHP_SELF = $_SERVER["PHP_SELF"] ;


  function userdata($userid) 
  {
     //取得全名、單位、email 	 
     global $CONN , $user_name, $group_name , $user_eamil,  $class_year, $class_name;

     $sqlstr = " SELECT n.name ,a.class_num , b.email , c.title_name 
		FROM teacher_post a 
		LEFT JOIN teacher_base as n ON a. teacher_sn = n. teacher_sn
		LEFT JOIN teacher_title as c ON a.teach_title_id = c.teach_title_id
		LEFT JOIN teacher_connect as b ON a.teacher_sn = b.teacher_sn 
        where  n.teach_id =  '$userid'  " ;
	
   // echo $sqlstr ;	

     $result = $CONN->Execute($sqlstr);
     if ($result) {     
     	$nb = $result->FetchRow()  ;	
     	$user_name = $nb[name];
     	//單位
     	$group_name = $nb[title_name] ;

        if ($nb[class_num]) {//級任 
          $temp_year = $class_year[substr($nb[class_num],0,1)] ;
          $temp_class =$class_name[substr($nb[class_num],1)] ;
          $group_name = $temp_year . $temp_class ."班";
        }       	
 
     	$user_eamil = $nb[email];
     }	   
  }
  
  //網址轉換
  function disphtml($bodytxt) {
    if (strpos($bodytxt,"</")) return $bodytxt ;
    else {
      $bodytxt =preg_replace( "/\[www *\]([\\x0-\\xff]*?)\[\/www *\]/", '<a href="\\1" class="slink" target="_blank">\\1</a>', $bodytxt);
      $bodytxt =preg_replace( "/\[www +([a-zA-Z0-9\.:\/_\- ]+)\]([\\x0-\\xff]*?)\[\/www *\]/", '<a href="\\1" class="slink" target="_blank">\\2</a>', $bodytxt);
      return nl2br($bodytxt) ;
    }  
  }
?>
