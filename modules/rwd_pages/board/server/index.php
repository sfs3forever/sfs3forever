<?php
include "lib.php";
//header('Access-Control-Allow-Origin: http://web.dayes.tc.edu.tw');

//$myLog = "ajax.log";

//$configFile = "/var/www/html/sfs3/include/config.php";
$configFile = "../../../../include/config.php";

$sfs3Board = new sfs3();

$sfs3Board->getConfig($configFile);                                                                        

$dbname = $sfs3Board->mysql_db ;
$username = $sfs3Board->mysql_user ;
$password = $sfs3Board->mysql_pass ;


$eachPageRows=15; //?鞈?,瘥??身15蝑?
$maxPages = 30 ;  //?迂?亥岷?憭折???
$dsn = "mysql:host=localhost;dbname=$dbname";
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES latin1',
); 

/*
mysql> SELECT default_character_set_name FROM information_schema.SCHEMATA
    -> WHERE schema_name = "sfs3";
*/


//=========Don't edit below this line unless you know where you are going.===============

$initData = Array();

try {
		$dbh = new PDO($dsn, $username, $password, $options);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$startRow=0;
if(isset($_GET)){
	//file_put_contents($myLog,(implode('',$_GET)));
	$requestPage=implode('',$_GET);
	$requestPage = ctype_digit($requestPage)?$requestPage:0 ;
	$requestPage = ($requestPage<$maxPages)?$requestPage:$maxPages ;
	
}else{
	$requestPage = 0;
}
$startRow = $startRow + ($eachPageRows*$requestPage);

    $queryStr = "SELECT * FROM board_p where b_is_intranet <> 1 order by b_post_time DESC limit :eachPageRows OFFSET :startRow" ;

    $stmt = $dbh->prepare($queryStr); 
		$stmt->bindParam(':eachPageRows', $eachPageRows, PDO::PARAM_INT);
		$stmt->bindParam(':startRow', $startRow, PDO::PARAM_INT);
    $stmt->execute();

		// set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	
   
    //?蝙$data, $i?箏???
    foreach($stmt->fetchAll() as $key=>$value) { 
			//??瘥???銝??賊???隞嗡葉???????瑼?
			$articleId = ($value['b_id']);
			$queryStr =  "SELECT org_filename,new_filename FROM  board_files where b_id = ?";
			$stmt = $dbh->prepare($queryStr);
			$stmt->bindParam(1, $articleId, PDO::PARAM_INT);
			$stmt->execute();
			$result = $stmt->fetchAll();
			$value['attachFile'] = $result ;
			//print_r($result);
			//print_r($value);
      $initData[] = $value;
		}
//print_r($initData);

}//end try

catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$dbh = null;
//print sizeof($initData);

$revizedData = Array();

	foreach($initData as $row => $rowData){
		//??id
		$revizedData['records'][$row]['articleId'] = $rowData["b_id"] ;
    //???批捆
		$revizedData['records'][$row]['content'] = rawurlencode(trim($sfs3Board->big52utf8($rowData["b_con"]))) ;
		//??璅?
		$revizedData['records'][$row]['headline'] = rawurlencode(trim($sfs3Board->big52utf8($rowData["b_sub"]))) ;
    //?桐?
		$revizedData['records'][$row]['jobUnit'] = rawurlencode(trim($sfs3Board->big52utf8($rowData["b_unit"]))) ;
		//?瑞迂
		$revizedData['records'][$row]['jobTitle'] = rawurlencode(trim($sfs3Board->big52utf8($rowData["b_title"]))) ;

	  $date = new DateTime($rowData["b_post_time"]);
    $revizedData['records'][$row]['postTime'] = $date->format('Y-m-d') ;
	 
    for($j=0;$j<sizeof($rowData['attachFile']);$j++){
			//print $sfs3Board->big52utf8($rowData['attachFile'][$j]['org_filename']);
			//print $sfs3Board->big52utf8($rowData['attachFile'][$j]['new_filename']);
			$revizedData['records'][$row]['attachFile'][$j]['displayFile'] = rawurlencode($sfs3Board->big52utf8($rowData['attachFile'][$j]['org_filename'])) ;
			$revizedData['records'][$row]['attachFile'][$j]['linkFile'] = $sfs3Board->big52utf8($rowData['attachFile'][$j]['new_filename']) ;
		}
		
	}//end foreach

	//print urldecode($sfs3Board->json($revizedData));
	print ($sfs3Board->json($revizedData));
?>	
