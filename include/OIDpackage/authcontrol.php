<?php
session_start();

include "commonclass.php";

switch ($_GET['domain']) {
    case "openid.tc.edu.tw":  //?箔葉撣?
        $obj = new TC_OID_BASE();
        break;
    case "openid.phc.edu.tw":   //瞉?蝮?
        $obj = new PHC_OID_BASE();
        break;
    default:

        header("Location: ../../login.php");
        break;
}

$obj->setFinishFile("../../login.php");
//$obj->setFinishFile("finish_auth.php");
if(empty($_GET['openid_identifier'])) { $obj->displayError("隢撓?亙?董??); }
$openid= "http://" . $_GET['openid_identifier'] .".".$_GET['domain'];
$obj->beginAuth($openid);

?>
