<?php
	
//$Id:$

if(!$CONN){
        echo "go away !!";
        exit;
}

//$tablename鞈?銵其?摮?撱箇?
$tablename="sign_data";

if(mysqli_num_rows(mysqli_query($conID, "SHOW TABLES LIKE '$tablename'")) == 0) 
{ 
  $SQL="CREATE TABLE $tablename(
  id bigint(20) NOT NULL auto_increment,
  kind bigint(20) NOT NULL default '0',
  item varchar(10) NOT NULL default '',
  order_pos tinyint(4) NOT NULL default '0',
  stud_name varchar(12) NOT NULL default '',
  data_get tinytext,
  data_input tinytext NOT NULL,
  teach_id varchar(20) default NULL,
  class_id varchar(10) default NULL,
  PRIMARY KEY  (id),
  UNIQUE KEY myindex (class_id,kind,item,order_pos)
) ENGINE=MyISAM COMMENT='?勗?鈭箄??”';
";
  $rs=$CONN->Execute($SQL);
}
else
{
  $SQL="alter table sign_data modify stud_name varchar(12)";
  $rs=$CONN->Execute($SQL);
}	


   
	
?>