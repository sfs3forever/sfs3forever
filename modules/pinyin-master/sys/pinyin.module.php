<?php
//print_r($_POST);
//print $_POST[upload_path];

//20151127 39銵?iconv 銝虫??賣迤蝣箄????ig5 摮? ?寧 mb_convert_encoding
//http://sweslo17.blogspot.tw/2012/04/big5-erpms-sql-local-cache-phpiconv.html

//pre check everyting.
session_start();
//$time_start = microtime(true);
if (empty($_SESSION['session_tea_sn'])){
	$stop_msg = "?潛??航炊鈭? 隢?<a href='javascript:history.go(-1)'>銝???/a> ";
	print $stop_msg; 
}

$sfs3_public_dir = $_POST[upload_path];;
$templates_c = $sfs3_public_dir."school/pinyin/templates_c";
$db = $sfs3_public_dir."school/pinyin";
$dirWritable = array($db,$templates_c);

//print $db;
//print $templates_c;

if ( (!file_exists($db)) || (!file_exists($templates_c)) ){
  if (is_writable($sfs3_public_dir)){
      mkdir($db, 07777, true);
      mkdir($templates_c, 07777, true);
      $source = "db/ph.sqlite";
      $target = $sfs3_public_dir."school/pinyin/ph.sqlite";
      if (!copy($source, $target)) {
	print "failed to copy $source...\n";
      }
  }else{
      $msg = sprintf("%sdata/ is  not writable </br> chmod -R 777 %sdata/",$sfs3_public_dir, $sfs3_public_dir);
      print $msg;
      exit;
  }
  
} //end if ( (!file_exists($db)) || (!file_exists($templates_c)) )

foreach($dirWritable as $dir){
	if (!is_writable($dir)){
		$stop_msg = sprintf("The directory : %s should be writable. <br> Please chmod -R 777 %s",$dir,$dir);
	  print $stop_msg;
	  exit;
	}
}

//program begins from here
require 'vendor/autoload.php';
require_once "../module-cfg.php";
require "Phonetic.class.php";

$update_stud_eng_names = isset($_POST['update_stud_eng_names'])?'yes':'null';
$stop_msg = 'null';

//???撘? ?身???Ｗ??曄?view?痂ainView
$route = 'mainView';
if(isset($_POST['view_selected'])) {
  $route = $_POST['view_selected'] ;
}
//print $route;

try {
  $phDB = new PDO('sqlite:'."$db/ph.sqlite");
  $phDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


//?湔鞈?摨?
include_once "updateDB.php";

}catch (PDOException $e) {
    throw new pdoDbException($e);
}

//print_r($_POST['raw_data']);
if ( (empty($_POST['raw_data'])) && (empty($_POST['users_name_data'])) ) {
	print $stop_msg = "?潛??航炊鈭???餃蝟餌絞 ";
	exit ;
}else {

	if (isset($_POST['raw_data'])){
		foreach($_POST['raw_data'] as $id => $name){
			//銝剜?摮?utf8
			$name = mb_convert_encoding(urldecode($name), "UTF-8", "BIG5");
			$name = Phonetic::decimal_notation_converting($name);
			$users_name_data[$id] = $name ;
		}
		}else {
			foreach($_POST['users_name_data'] as $id => $name){
			$users_name_data[$id] = $name ;
			}
		}
}
$action_options = array( 'printView' => '蝬脤??',
                        'csv' => 'csv?澆?',
		        'updateDB' => '撖怠鞈?摨?);

$name_format_options = array( 'passport_format' => '霅瑞?澆?',
			      'passport_format_no_hyphen' => '霅瑞?澆???-',
			      'passport_format_western' => '霅瑞?澆?western',
			    'common_format' => 'common format');

$pinyin_method_options = array( 'hy' => '瞍Ｚ??潮',
                                'wg' => 'Wade-Giles?潮',
				'ty' => '??潮',
                                'g2' => '?鈭?');


//==================== ?蝙鞈?  ========================

//  $keep_data ?粹??Ｗ?潮?,敹?銝?游??函?鞈?
$keep_data = Array();
$keep_data = $_POST['keep_data'];
//print_r($keep_data);

//$raw_class_name ?箔??泅fs3?詨??剔?敺?潮?靘??剔??迂, $between_post_class_name ?舫??Ｚ?????箏?潸?靽??剔??
$raw_class_name = mb_convert_encoding(urldecode($_POST['keep_data']['class_name']), "UTF-8", "BIG5");
$between_post_class_name = ($_POST['class_name']) ;
$class_name = empty($between_post_class_name)? $raw_class_name : $between_post_class_name ;


$stud_users = Array();
//$class_name = urldecode($_POST['keep_data']['class_name'];
//print_r($_POST['keep_data']);

foreach($users_name_data as $id => $name){
  $stud_users[$id] =  Phonetic::mb_str_split($name);
}

//$studPh->_users = $stud_users;
$studPh = new UsersNamePhonetic($phDB,$stud_users);

$USERS = $studPh->getUsers() ;

//?身銝餌??
if (($route == "mainView")||($route == "updateDB")){ 

  $default_pinyin = empty($_POST['set_all_pinyin_metod'])?'hy':$_POST['set_all_pinyin_metod']; //?身雿輻瞍Ｚ??潮

  //?潮??
  $pinyin_selected_value = Array();
  $pattern = "pinyin_select";
  $pinyin_selected_values = $studPh->check_selected($pattern,$_POST);
  $studPh->set_pinyin_method($pinyin_selected_values,$default_pinyin); //閮剖??潮?孵?

  $users_name_char_pinyin = ($studPh->set_char_to_pinyin($USERS)); //瘥??閰Ｙ???
  $users_name_multiph = $studPh->set_multiph($USERS);  //?芸??怠?摮葉 ???喳??隞?

  //print_r($users_name_multiph); 
  //end ?蝙鞈?

  //憭摮??? ?芸??箸?憭摮隞? ?嫣噶璅內?豢??芸釣??
  $hanzi_multi_ph = Array();
  $hanzi = Array();

  $tmp = $studPh->show_hanzi_has_multiph($users_name_multiph);
  //$tmp = show_hanzi_has_multiph($users_name_multiph);
  $hanzi = $tmp['hanzi'];
  $hanzi_multi_ph = $tmp['hanzi_multi_ph'] ;


  //print_r($studPh->_users_name_multiph);
  //瘙箏?瘥?瘜券?n?? ?_POST?喲?靘???
  $pattern = "ph_select";
  $post_ph_selected_values = $studPh->check_selected($pattern,$_POST);  //雿輻????憭摮?

  $user_name_eng = Array();
  $user_name_eng = $studPh->user_name_eng($USERS,$post_ph_selected_values,$users_name_char_pinyin);

  //print_r($user_name_eng); //9901] => Array ( [0] => huang [1] => jun [2] => kai )
  //?喳潮脖??瘜???  interface INameFormat
  $_post_name_format=(empty($_POST['set_name_format']))?"passport_format":$_POST['set_name_format'] ;

  $eng_name_format = Array();
  $eng_name_format = $studPh->eng_name_format($user_name_eng,$_post_name_format);
  //english name ?圈????Ｙ?


  if($route == "updateDB"){
    $studPh->update($post_ph_selected_values);
  }


}



//print_r($keep_data);
//print $keep_data[9902]['number'];

if (($route == "printView") || ($route == "csv")){ 
    //$all_pinyin_method = ["hy","wg","ty","g2"];  //php 5.4 隞乩????
    $all_pinyin_method = array("hy","wg","ty","g2");
    $eng_name_format = Array();
    $hanzi_multi_ph = Array();
    $hanzi = Array();
    foreach($all_pinyin_method as $key => $pinyin_method){

      $default_pinyin = $pinyin_method;

      //?潮??
      $pinyin_selected_value = Array();

      $studPh->set_pinyin_method($pinyin_selected_values,$default_pinyin); //閮剖??潮?孵?

      $users_name_char_pinyin = ($studPh->set_char_to_pinyin($USERS)); //瘥??閰Ｙ???
      $users_name_multiph = $studPh->set_multiph($USERS);  //?芸??怠?摮葉 ???喳??隞?

      //print_r($users_name_multiph); 
      //end ?蝙鞈?

      //憭摮??? ?芸??箸?憭摮隞? ?嫣噶璅內?豢??芸釣??
      $tmp = $studPh->show_hanzi_has_multiph($users_name_multiph);
      $hanzi = $tmp['hanzi'];
      $hanzi_multi_ph = $tmp['hanzi_multi_ph'] ;


      //print_r($studPh->_users_name_multiph);
      //瘙箏?瘥?瘜券?n?? ?_POST?喲?靘???
      $pattern = "ph_select";
      $post_ph_selected_values = $studPh->check_selected($pattern,$_POST);  //雿輻????憭摮?

      $user_name_eng = Array();
      $user_name_eng = $studPh->user_name_eng($USERS,$post_ph_selected_values,$users_name_char_pinyin);

      //print_r($user_name_eng); //9901] => Array ( [0] => huang [1] => jun [2] => kai )
      //?喳潮脖??瘜???  interface INameFormat
      $_post_name_format=(empty($_POST['set_name_format']))?"passport_format":$_POST['set_name_format'] ;

      $eng_name_format[$default_pinyin] = $studPh->eng_name_format($user_name_eng,$_post_name_format);
      //english name ?圈????Ｙ?

    }//end foreach
  //print_r($eng_name_format);
    if ($route == "csv"){
      $fileName = $class_name.".pinyin.csv";

//?php 5.4隞乩?, ????     $csv = Writer::createFromFileObject(new SplTempFileObject());

      $header = array("摨扯?","摮貉?","憪?","瞍Ｚ??潮","憡戎蝣潭??,"??潮","?鈭?");
      $contents[] = $header ;
      foreach($keep_data as $id => $data){
	foreach($data as $key => $name){
	      $number = $keep_data[$id]['number'];
	      $name = $users_name_data[$id];
	      $eng_name_hy = $eng_name_format['hy'][$id];
	      $eng_name_wg = $eng_name_format['wg'][$id];
	      $eng_name_ty = $eng_name_format['ty'][$id];
	      $eng_name_g2 = $eng_name_format['g2'][$id];
	      //print $id.",".$number.",".$name.",".$eng_name_hy;
	      $contents[$id]=array($number,$id,$name,$eng_name_hy,$eng_name_wg,$eng_name_ty,$eng_name_g2);
	}
      }

	$fp = fopen('php://memory', 'w+');
	  foreach ($contents as $row) {
	  fputcsv($fp, $row);
	}

		rewind($fp);
		$csv = stream_get_contents($fp);
		fclose($fp);

		header('Content-Description: File Transfer');
		header('Content-Type: application/octet-stream');
		header('Content-Transfer-Encoding: binary');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		//header('Content-Disposition: attachment; filename='.'pinyin.csv');
		header("Content-Disposition: attachment; filename=\"" . ($fileName) . "\"");
		header('Content-Length: '.strlen($csv_file));
		print "\xEF\xBB\xBF";  //UTF8 BOM
		exit($csv);
		exit;

/*?php 5.4隞乩?
      //we insert the CSV header
      $csv->insertOne($header);
      $csv->insertAll($contents);
      $csv->output($fileName);
      die;
*/

  } //if ($route=="csv"){

}

/*
$time_end = microtime(true);
$time_elapsed = sprintf("%01.2f",$time_end - $time_start);
*/

//雿輻 smarty 撘?
  $smarty=new Smarty;// instantiates an object $smarty of class Smarty
  $smarty->left_delimiter='<{';
  $smarty->right_delimiter='}>';
  $smarty->setCompileDir($templates_c);

  //$smarty->debugging = true;
  $smarty->assign("my_title",$my_title);
  $smarty->assign("my_title_version",$my_title_version);
  $smarty->assign("users_name_data",$users_name_data);
  $smarty->assign("keep_data",$keep_data);

  $smarty->assign('pinyin_method_options',$pinyin_method_options);
  $smarty->assign('name_format_options',$name_format_options);
  $smarty->assign('action_options',$action_options);

  $smarty->assign("default_pinyin",$default_pinyin);
  $smarty->assign("pinyin_selected_values",$studPh->getPinyinSelectedValues() );
  //print_r($studPh->_pinyin_selected_values);
  $smarty->assign('post_ph_selected_values',$post_ph_selected_values);
  $smarty->assign('hanzi_multi_ph',$hanzi_multi_ph);
  $smarty->assign('hanzi',$hanzi);
  $smarty->assign("eng_name_format",$eng_name_format);
  $smarty->assign("_post_name_format",$_post_name_format);
  $smarty->assign("route",$route);
  $smarty->assign("class_name",$class_name);
  $smarty->assign("upload_path",$sfs3_public_dir);

  $smarty->assign("update_stud_eng_names",$update_stud_eng_names);
  $smarty->assign("time_elapsed",$time_elapsed);
  //$smarty->assign("stop_msg",$stop_msg);
  $smarty->clearAllCache(600);

  $viewTemplate = $route.".tpl";
  $smarty->display("templates/$viewTemplate");

