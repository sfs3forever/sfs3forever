<?php




session_id($_POST['sid']);
//session_start();

require "config.php";
require "class.php";

sfs_check();

$session_id = session_id();
$useragent = $_SERVER['HTTP_USER_AGENT'];
$datafile = $SFS_PATH_HTML.'data/temp/studmove.zip';
//?ㄐ閬??神?出ML瑼?蝔?
$data = base64_decode($_POST['apidata']);
//..................
//撖怠摰?敺??????交?啁??批捆蝯再PPLET,隞亦Ⅱ摰??交?唳?獢?
echo $_POST['apidata'];


?>
