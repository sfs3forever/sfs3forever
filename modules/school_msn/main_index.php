<?php
//憒??箔葉 敹垢, 閮剖? COOKIE
if ($_GET['sch_id']) {
 $sch_id = $_GET['sch_id'];
 setcookie("cookie_sch_id","$sch_id",0,"/","");
}
include_once ('config.php');


?>
<html>
<head>
<meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8">
<title>?∪?MSN</title>
</head>
<body onLoad="gowindow()">

</body>
<Script language='JavaScript'>
	 
	 window.focus();
	 
    function gowindow(){    //?刻??交??寡?閬?憭批?
       reSize(390,560);         //閮剖???1024*768 憭批?
    }
    function reSize(x,y){
        XX=screen.availWidth
        YY=screen.availHeight
        PX=XX-x; 
        PY=YY-y
        MX=(XX-x)/2;
        MY=(YY-y)/2;
        
        top.resizeTo(x,y);   // ?拍 resizeto ?寡?閬?憭批?
        <?php
        if ($POSITION=="") $POSITION=0;
        switch ($POSITION) {
          case 0:  //?喃?
        		echo "top.moveTo(PX,0);   //蝘餃??啣銝?";
          break;

          case 1:  //撌虫?
        	  echo "top.moveTo(0,0);   //蝘餃??啣銝?";
          break;

          case 2:  //甇?葉
        	  echo "top.moveTo(MX,MY);   //蝘餃??唳迤銝?;
          break;

          case 3:  //?喃?
        	  echo "top.moveTo(PX,PY);   //蝘餃??啣銝?";          
          break;
        	
          case 4:  //撌虫?
        	  echo "top.moveTo(0,PY);   //蝘餃??啣椰銝?";          
          break;
        }

        ?>        
         window.location.href='main_window.php';
 		}

</Script>
</html>
