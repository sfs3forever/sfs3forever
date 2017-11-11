<?php

// $Id: my_fun.php 6278 2011-01-06 13:57:59Z infodaes $

function num2str($money) {
    $ar = array("零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖") ;
    $cName = array("", "", "拾", "佰", "仟", "萬", "拾", "佰", "仟", "億", "拾", "佰", "仟");
    $conver = "";
    $cLast = "" ;
    $cZero = 0;
    $i = 0;
    for ($j = strlen($money) ; $j >=1 ; $j--){  
      $cNum = intval(substr($money, $i, 1));
      $cunit = $cName[$j]; //取出位數
      if ($cNum == 0) { //判斷取出的數字是否為0,如果是0,則記錄共有幾0
         $cZero++;
         if (strpos($cunit,"萬億") >0 && ($cLast == "")){ // '如果取出的是萬,億,則位數以萬億來補
          $cLast = $cunit ;
         }      
      }else {
        if ($cZero > 0) {// '如果取出的數字0有n個,則以零代替所有的0
          if (strpos("萬億", substr($conver, strlen($conver)-2)) >0) {
             $conver .= $cLast; //'如果最後一位不是億,萬,則最後一位補上"億萬"
          }
          $conver .=  "零" ;
          $cZero = 0;
          $cLast = "" ;
        }
         $conver = $conver.$ar[$cNum].$cunit; // '如果取出的數字沒有0,則是中文數字+單位          
      }
      $i++;
    }  
  //'判斷數字的最後一位是否為0,如果最後一位為0,則把萬億補上
     if (strpos("萬億", substr($conver, strlen($conver)-2)) >0) {
       $conver .=$cLast; // '如果最後一位不是億,萬,則最後一位補上"億萬"
    }
    return $conver;
}

function sc2str($score="",$rule=""){
	
	$r=explode("\n",$rule);
	while(list($k,$v)=each($r)){

		$str=explode("_",$v);
		$du_str = (double)$str[2];
		
		if($str[1]==">="){
			if($score >= $du_str)return $str[0];
		}elseif($str[1]==">"){
			if($score > $du_str)return $str[0];
		}elseif($str[1]=="="){
			if($score == $du_str)return $str[0];
		}elseif($str[1]=="<"){
			if($score < $du_str)return $str[0];
		}elseif($str[1]=="<="){
			if($score <= $du_str)return $str[0];
		}
	}
	$score_name="";
	return $score_name;
}

function year_seme_menu($sel_year,$sel_seme) {
	global $CONN;

	$sql="select year,semester from school_class where enable='1' order by year,semester";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$year=$rs->fields["year"];
		$semester=$rs->fields["semester"];
		if ($year!=$oy || $semester!=$os)
			$show_year_seme[$year."_".$semester]=$year."學年度第".$semester."學期";
		$oy=$year;
		$os=$semester;
		$rs->MoveNext();
	}
	$scys = new drop_select();
	$scys->s_name ="year_seme";
	$scys->top_option = "選擇學期";
	$scys->id = $sel_year."_".$sel_seme;
	$scys->arr = $show_year_seme;
	$scys->is_submit = true;
	return $scys->get_select();
}

function class_year_menu($sel_year,$sel_seme,$id) {
	global $school_kind_name,$CONN;

	$sql="select distinct c_year from school_class where year='$sel_year' and semester='$sel_seme' and enable='1' order by c_year";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$show_year_name[$rs->fields["c_year"]]=$school_kind_name[$rs->fields["c_year"]]."級";
		$rs->MoveNext();
	}
	$scy = new drop_select();
	$scy->s_name ="year_name";
	$scy->top_option = "選擇年級";
	$scy->id = $id;
	$scy->arr = $show_year_name;
	$scy->is_submit = true;
	return $scy->get_select();
}

function class_name_menu($sel_year,$sel_seme,$sel_class,$id) {
	global $CONN;

	$sql="select distinct c_name,c_sort from school_class where year='$sel_year' and semester='$sel_seme' and c_year='$sel_class' and enable='1' order by c_sort";
	$rs=$CONN->Execute($sql);
	while (!$rs->EOF) {
		$show_class_year[$rs->fields["c_sort"]]=$rs->fields["c_name"]."班";
		$rs->MoveNext();
	}
	$sc = new drop_select();
	$sc->s_name ="me";
	$sc->top_option = "選擇班級";
	$sc->id = $id;
	$sc->arr = $show_class_year;
	$sc->is_submit = true;
	return $sc->get_select();
}
?>