<?php

// $Id: stud_kind2.php 8347 2015-03-12 01:54:07Z smallduh $


//載入設定檔
require("config.php") ;
// --認證 session 
sfs_check();



//-----------------------------------


  if ($_POST['Submit']=="匯出EXCEL") {

             
	$filename ="score.xls" ;


	header("Content-disposition: filename=$filename");
	header("Content-type: application/octetstream");
	//header("Pragma: no-cache");
				//配合 SSL連線時，IE 6,7,8下載有問題，進行修改 
				header("Cache-Control: max-age=0");
				header("Pragma: public");
	header("Expires: 0");

$data_array = show_data(0) ;

//使用樣版
$template_dir = $SFS_PATH."/".get_store_path()."/templates";
// 使用 smarty tag
$smarty->left_delimiter="{{";
$smarty->right_delimiter="}}";
//$smarty->debugging = true;


$smarty->assign("data_array",$data_array); 


$smarty->assign("template_dir",$template_dir);

$smarty->display("$template_dir/kind_excel.htm");
	exit;
         
  }       


head("特殊身分別學生名冊");
print_menu($menu_p);
if(checkid($_SERVER['SCRIPT_FILENAME'],1)) {
$data_array = show_data() ;

//使用樣版
$template_dir = $SFS_PATH."/".get_store_path()."/templates";
// 使用 smarty tag
$smarty->left_delimiter="{{";
$smarty->right_delimiter="}}";
//$smarty->debugging = true;


$smarty->assign("data_array",$data_array); 


$smarty->assign("template_dir",$template_dir);

$smarty->display("$template_dir/kind.htm");
} else echo "<center><br><br><font size=3 color='red'>請先向系統管理者取得本模組的模組管理權！</font></center>";
foot() ;


function show_data($view=1 ) {
  global $CONN ;     
  $class_year_p = class_base(); //班級

 
    //取得各類別名稱
    $sqlstr = "select d_id , t_name from sfs_text where  t_kind='stud_kind'  " ;
    $result =$CONN->Execute($sqlstr) or user_error("讀取失敗！<br>$sqlstr",256) ;
    while ($row = $result->FetchRow() ) {
        $d_id = $row["d_id"] ;
        $t_name = $row["t_name"] ;    
        $kind_name[$d_id] = "($d_id)$t_name"   ;
    }


    $sqlstr = "select b.* , d.*  from stud_base b ,stud_domicile d  where b.stud_study_cond = 0  and b.stud_kind <> '0' and (b.stud_kind <> ',0,') and b.stud_kind <> ''  and b.stud_id =d.stud_id and b.student_sn=d.student_sn order by  b.curr_class_num " ;
    $result =$CONN->Execute($sqlstr) or user_error("讀取失敗！<br>$sqlstr",256) ; 
    //echo $sqlstr ;
    

    while ($row = $result->FetchRow() ) {
    	unset($row_data) ;
      $s_kind ="" ;
      $stud_kind = $row["stud_kind"];
    	$stud_kind_arr = split("," , $stud_kind) ;
    	foreach( $stud_kind_arr as  $tid =>$tval) {
    	  if ($tval > 0 )
    	     $s_kind .= $kind_name["$tval"]; 
    	}    

    	if ($s_kind) {
    		
        	$row_data[s_kind]=$s_kind ; 
        	    	
        	$row_data[s_addres] = $row["stud_addr_1"];
        	$row_data[s_home_phone] = $row["stud_tel_1"];	  //家中電話
        	$row_data[s_offical_phone] = $row["stud_tel_2"];  	//工作地電話
        
        	$row_data[stud_id] = $row["stud_id"];
        	$row_data[stud_name] = $row["stud_name"];
        	$row_data[stud_person_id] = $row["stud_person_id"];
          
        
        	$class_num_curr = $row["curr_class_num"];
        	$row_data[s_year_class] = $class_year_p[substr($class_num_curr,0,3)];   //取得班級
        
        	$row_data[s_num] = intval(substr($class_num_curr,-2));	//座號
        	$row_data[s_birthday] = $row["stud_birthday"]  ;
        	//轉換民國日期
        	if ($view)
                $row_data[s_birthday] = DtoCh($row_data[s_birthday]) ; 
                
          $row_data[d_guardian_name] = $row["guardian_name"] ;
          $row_data[fath_name] = $row["fath_name"] ;
          $row_data[moth_name] = $row["moth_name"] ;
          $data_arr[]= $row_data ;
      }

    }
    
    return $data_arr ;
    
}    

?>