<?php

require_once "commonclass.php";
$obj = new TC_OID_BASE();
session_start();

if( $obj->getResponseStatus($msg) >0) {
  $arr= $obj->getResponseArray();
  header("Content-Type:text/html; charset=utf-8");
  print "<pre>";
  print_r($arr);
  /*
Array
(
    [identity] => http://example.openid.tc.edu.tw/
    [fullname] => 撘焜O
    [email] => example@tc.edu.tw
    [schooldistrict] => 镼踹扈?
    [schoolname] => OO?葉
    [schooltitle] => 撠遙?葦
    [schooltype] => 撣???銝剖飛
)
  */
}else print $msg;


?>
