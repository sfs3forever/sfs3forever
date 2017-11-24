<?php

// $Id: stud_birth.php 6896 2012-09-20 08:36:24Z infodaes $

/*
=====================================================
程式：班級學生人數統計名冊(stud_birth.php)  ver1.0

prolin

=====================================================
*/

/* 學務系統設定檔 */
include "stud_query_config.php";


// --認證 session 
sfs_check();

head("學生生日月份統計");
print_menu($menu_p);
$class_year_p = class_base($curr_year_seme); //班級
echo "<h2 align=\"center\"> 全校學生各月份人數統計名冊 </hr><br>"  ;

  //取得各年級總人數  
  $query = "select count(*) as tc ,substring(curr_class_num,1,1) as gg from stud_base
            where stud_study_cond=0 
            group by gg order by gg   ";
  //$result = mysqli_query($conID, $query) or die($query);
  $recordSet=$CONN->Execute($query) or die($query);
  while($row = $recordSet->FetchRow() ){		
		if ($row[gg]==0)
			continue;
		$s_class = $row[gg];	
		$year_stud_num[$s_class] = $row[tc];
  }		

/*
取得各班各月份分別統計表	
select  LEFT(curr_class_num,3) as Tclass , month(stud_birthday)  , count(*) , CONCAT(  LEFT(curr_class_num,3) , LPAD(month(stud_birthday),2,'0')) as tt 
from stud_base
group by  tt	
*/

      $query = " select  LEFT(curr_class_num,3) as Tclass , month(stud_birthday) as TM , count(*) as TC , CONCAT(  LEFT(curr_class_num,3) , LPAD(month(stud_birthday),2,'0')) as tt  
                  from stud_base
                  where stud_study_cond  = 0 
                  group by  tt " ;
            
                        
    //echo $sql1 ."<br>";
    //$result = mysql_query ($sqlstr,$conID)or die ($sqlstr);
    $recordSet=$CONN->Execute($query) or die($query);
    
    while ($row = $recordSet->FetchRow() ) {		
         $classN	 = $row["Tclass" ] ;	//班級
         $monthN = $row["TM" ] ;		//月份
         $studN	 = $row["TC" ] ;		//人數
         $birth_array[ $classN ][$monthN] = $studN ;	//放在 [班級][月份]陣列中
     }
     


//各班級
    $row_title = ' <table width="90%" border="1" cellspacing="0" BGCOLOR="#FDDDAB" align="center" cellpadding=2  bordercolor=#008080  bordercolorlight=#666666 bordercolordark=#FFFFFF>
         <tr align="center"><td>月份</td>  <td>1月</td>    <td>2月</td>    <td>3月</td>    <td>4月</td>    <td>5月</td>    <td>6月</td>    <td>7月</td>    <td>8月</td>    <td>9月</td>    <td>10月</td>    <td>11月</td>    <td>12月</td><td>小計</td> </tr> ' ."\n" ;
    $class_list = $row_title ;     
    foreach ($class_year_p as $curr_class_name=>$value ) {
        //一列中的
        $m_sum = 0 ;   
        $rowstr = "" ;	  
        for ($m= 1 ; $m<=12 ; $m++) {		//各月份人數
            $m_sum += intval($birth_array["$curr_class_name"][$m])   ;
            if (intval($birth_array["$curr_class_name"][$m]) >0)
              $rowstr .= "<td >" .  intval($birth_array["$curr_class_name"][$m])  . "</td> "  ;
            else 
              $rowstr .= "<td >0</td> "  ;
        } 
        $rowstr .= "<td >$m_sum</td> "  ;
        
        if ($m_sum>0) {		//該班有人
                 	
           $class_list .= "<tr align='center' bgcolor=#FFFF80>" ;	
           $class_list .= "<td>" . $value ."</td>" ;
           $class_list .= $rowstr ;   
           
           $class_list .= "</tr> \n" ;
           
 
	   for ($m= 1 ; $m<=12 ; $m++) {		//加總到全校各月份人數            
	       $all_m_sum[$m] += $birth_array["$curr_class_name"][$m] ;
	   }    
      
       }          
    }	
    $class_list .= "</table><br>" ;
    
    echo $class_list ;
/*
//各年級
  reset($class_year) ;
  while(list($c,$s_year_name)= each($class_year)){
    if ($year_stud_num[$c]==0) 
        continue ;
    echo ' <table width="90%" border="1" cellspacing="0" BGCOLOR="#FDDDAB" align="center" cellpadding=2  bordercolor=#008080  bordercolorlight=#666666 bordercolordark=#FFFFFF>
         <tr align="center"><td>月份</td>  <td>1月</td>    <td>2月</td>    <td>3月</td>    <td>4月</td>    <td>5月</td>    <td>6月</td>    <td>7月</td>    <td>8月</td>    <td>9月</td>    <td>10月</td>    <td>11月</td>    <td>12月</td><td>小計</td> </tr> ' ."\n" ;
    
    //各班  
    reset($class_name) ;
    while(list($d,$t_class_name)= each($class_name)){
        $curr_class_name = $c . sprintf("%02d" , $d) ;

        //一列中的
        $m_sum = 0 ;   
        $rowstr = "" ;	  
        for ($m= 1 ; $m<=12 ; $m++) {		//各月份人數
            $m_sum += intval($birth_array["$curr_class_name"][$m])   ;
            if (intval($birth_array["$curr_class_name"][$m]) >0)
              $rowstr .= "<td >" .  intval($birth_array["$curr_class_name"][$m])  . "</td> "  ;
            else 
              //$rowstr .= "<td >&nbsp;</td> "  ;
              $rowstr .= "<td >0</td> "  ;
        } 
        $rowstr .= "<td >$m_sum</td> "  ;
        
        if ($m_sum>0) {		//該班有人
           $class_year[substr($curr_class_name,0,1)] . $class_name[substr($curr_class_name,1)] ;	  
                 	
           echo "<tr align='center' bgcolor=#FFFF80>" ;	
           echo "<td>" . $class_year_p[$curr_class_name] ."</td>" ;
           echo $rowstr ;   
           
           echo "</tr> \n" ;
           
 
	   for ($m= 1 ; $m<=12 ; $m++) {		//加總到全校各月份人數            
	       $all_m_sum[$m] += $birth_array["$curr_class_name"][$m] ;
	   }    
      
       }          
    }	
    echo "</table><br>" ;
}
*/

  //全校統計部份
  $all_stud = 0 ;
  echo ' <table width="90%" border="1" cellspacing="0" BGCOLOR="#FDDDAB" align="center" cellpadding=2  bordercolor=#008080  bordercolorlight=#666666 bordercolordark=#FFFFFF>
     <tr align="center"><td>月份</td>  <td>1月</td>    <td>2月</td>    <td>3月</td>    <td>4月</td>    <td>5月</td>    <td>6月</td>    <td>7月</td>    <td>8月</td>    <td>9月</td>    <td>10月</td>    <td>11月</td>    <td>12月</td><td>小計</td> </tr> ' ."\n" ;
  echo "<tr align='center' bgcolor=#FFFF80><td>全校統計</td>" ;   
  for ($m= 1 ; $m<=12 ; $m++) {		//各月份人數
	$this_month=$all_m_sum[$m];
	$this_month="<a href='stud_birth_list.php?month=$m' target='birthday_$m'>$this_month</a>";
	
     echo  "<td>$this_month</td> "  ;
     $all_stud += $all_m_sum[$m] ;
  }      
  echo "<td>$all_stud</td>" ;
  echo "</tr></table><br>" ;   
  
  
  //教師生日月份
  $query = " select  month(birthday) as TM , count(*) as TC   
                  from teacher_base
                  where teach_condition=0 
                  group by  TM ";
                  //having teach_condition=0 " ;
          
   //$result = mysql_query ($sqlstr,$conID)or die ($sqlstr);  
   $recordSet=$CONN->Execute($query) or die($query);
   
    while ($row = $recordSet->FetchRow() ) {		
         $monthN = $row[TM ] ;		//月份
         $teachN = $row[TC ] ;		//人數
         $birth_array[$monthN] = $teachN ;	//放在 [班級][月份]陣列中
     }   
  echo ' <table width="90%" border="1" cellspacing="0" BGCOLOR="#FDDDAB" align="center" cellpadding=2  bordercolor=#008080  bordercolorlight=#666666 bordercolordark=#FFFFFF>
     <tr align="center"><td>月份</td>  <td>1月</td>    <td>2月</td>    <td>3月</td>    <td>4月</td>    <td>5月</td>    <td>6月</td>    <td>7月</td>    <td>8月</td>    <td>9月</td>    <td>10月</td>    <td>11月</td>    <td>12月</td> <td>小計</td></tr> ' ."\n" ;
  echo "<tr align='center' bgcolor=#FFFF80><td>教職員統計</td>" ;   
  for ($m= 1 ; $m<=12 ; $m++) {		//各月份人數
     if ($birth_array[$m]) {
        echo  "<td >" .  $birth_array[$m]  . "</td> "  ;
        $all_teach +=  $birth_array[$m] ;  
     }   
     else 
        echo  "<td >&nbsp</td> "  ;   
  }      
  echo "<td>$all_teach</td>" ;
  echo "</tr></table><br>" ;     
        
foot();	

?>