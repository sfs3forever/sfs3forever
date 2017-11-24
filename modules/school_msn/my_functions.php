<?php
//Big5 頧?UTF8
function big52utf8($big5str) {  
	
	$blen = strlen($big5str);  
	$utf8str = "";  
		for($i=0; $i<$blen; $i++) {    
			$sbit = ord(substr($big5str, $i, 1));    
			if ($sbit < 129) {      
				$utf8str.=substr($big5str,$i,1);    
			}elseif ($sbit > 128 && $sbit < 255) {     
				$new_word = iconv("big5", "UTF-8", substr($big5str,$i,2));
				$utf8str.=($new_word=="")?" ":$new_word;      
				$i++;    
			} //end if 
		} // end for
	
	return $utf8str;
}

//?梁?D???葦?迂??賂??交閰Ｖ??堆??＊蝷箏??駁???
function get_teacher_name_by_id($teach_id){
	$sql_select = "select name from teacher_base where teach_id = '".$teach_id."'";
  $result=mysql_query($sql_select);
	if (mysqli_num_rows($result)) {
	list($name) = mysqli_fetch_row($result);
	return $name;
  } else {
  return $teach_id;	
  }
}

function get_teacher_email_by_id($teach_id){
	$MYEMAIL="";
	$query="select b.email,b.email2,b.email3 from teacher_base a,teacher_connect b where a.teacher_sn=b.teacher_sn and a.teach_id='$teach_id'";
	$result=mysqli_query($conID, $query);
	list($email,$email2,$email3)=mysqli_fetch_row($result);
	$MYEMAIL=($email=="")?$email2:$email;
	if ($MYEMAIL=="") $MYEMAIL=$email3;
  
  return $MYEMAIL;
  
}

function matchCIDR($addr, $cidr) {
     list($ip, $mask) = explode('/', $cidr);
     return (ip2long($addr) >> (32 - $mask) == ip2long($ip) >> (32 - $mask));
}

// 撠?銝脖葉?雯??頞??
function AddLink2Text($strURL = null)
{

$regex = "{ ((https?|telnet|gopher|file|wais|ftp):[\\w/\\#~:.?+=&%@!\\-]+?)(?=[.:?\\-]*(?:[^\\w/\\#~:.?+=&%@!\\-]|$)) }x";
return preg_replace($regex, "<a href=\"$1\" target=\"_blank\" alt=\"$1\" title=\"$1\">$1</a>",$strURL);

}

// 撠?銝脖葉?雯??頞??
function get_name_state($teach_id)
{
 mysql_query("SET NAMES 'utf8'");
 $query="select name,state from sc_msn_online where teach_id='".$teach_id."'";
 $result=mysqli_query($conID, $query);
 list($N[0],$N[1]) = mysqli_fetch_row($result);
 return $N;
}

//?芷蝯行?鈭箇?閮??瑼?
function delete_file($idnumber,$to_id) {
	//??$download_path 摰???脖?
	global $download_path;
	  //憒??隞??idnumber , 銵函內?箏???策憭犖???? 銝???瑼?
    //?血?瑼Ｘ?臬??瑼?
    $query_other="select idnumber from sc_msn_data where idnumber='".$idnumber."' and to_id<>'".$to_id."' and data_kind<>2";
    $result_other=mysql_query($query_other);
    if (mysqli_num_rows($result_other)==0) {
     //瑼Ｘ?臬??瑼? ???航???? ?典
     $query_file="select filename from sc_msn_file where idnumber='".$idnumber."'";
     $result_file=mysql_query($query_file);
     while ($row_file=mysqli_fetch_row($result_file)) {
      list($filename)=$row_file;  	  
      unlink($download_path.$filename);
     } // end unlink file
     //?芷??閮?
     $query="delete from sc_msn_file where idnumber='".$idnumber."'";
     mysqli_query($conID, $query);
    }// end if mysqli_num_rows
} // end function

//?芷??瑼?
function delete_onefile($filename) {
	//??$download_path 摰???脖?
	global $download_path;
    unlink($download_path.$filename);
     $query="delete from sc_msn_file where filename='".$filename."'";
     mysqli_query($conID, $query);
} // end function



//瑼Ｘ葫瑼?憿?
function check_file_attr($ATTR) {
 global $PHP_FILE_ATTR;
 if (strpos(" ".$PHP_FILE_ATTR,$ATTR)) {
  return true;
 } else {
  return false;
 }
}


//????
function ImageResize($from_filename, $save_filename, $in_width=400, $in_height=300, $quality=100)
{
    $allow_format = array('jpeg', 'png', 'gif');
    $sub_name = $t = '';

    // Get new dimensions
    $img_info = getimagesize($from_filename);
    $width    = $img_info['0'];
    $height   = $img_info['1'];
    $imgtype  = $img_info['2'];
    $imgtag   = $img_info['3'];
    $bits     = $img_info['bits'];
    $channels = $img_info['channels'];
    $mime     = $img_info['mime'];

    list($t, $sub_name) = split('/', $mime);
    if ($sub_name == 'jpg') {
        $sub_name = 'jpeg';
    }

    if (!in_array($sub_name, $allow_format)) {
        return false;
    }

    
    // ??蝮桀甇斤????靘?
    $percent = getResizePercent($width, $height, $in_width, $in_height);
    $new_width  = $width * $percent;
    $new_height = $height * $percent;

    // Resample
    $image_new = imagecreatetruecolor($new_width, $new_height);

    // $function_name: set function name
    //   => imagecreatefromjpeg, imagecreatefrompng, imagecreatefromgif
    /*
    // $sub_name = jpeg, png, gif
    $function_name = 'imagecreatefrom' . $sub_name;

    if ($sub_name=='png')
        return $function_name($image_new, $save_filename, intval($quality / 10 - 1));

    $image = $function_name($filename); //$image = imagecreatefromjpeg($filename);
    */
    
    
    //$image = imagecreatefromjpeg($from_filename);
    
    $function_name = 'imagecreatefrom'.$sub_name;
    $image = $function_name($from_filename);

    imagecopyresampled($image_new, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

    return imagejpeg($image_new, $save_filename, $quality);
    
   
     
    
}

/**
 * ??閬葬??瘥?
 * $source_w : 靘???撖砍漲
 * $source_h : 靘???擃漲
 * $inside_w : 蝮桀???撖砍漲
 * $inside_h : 蝮桀???擃漲
 *
 * Test:
 *   $v = (getResizePercent(1024, 768, 400, 300));
 *   echo 1024 * $v . "\n";
 *   echo  768 * $v . "\n";
 */
function getResizePercent($source_w, $source_h, $inside_w, $inside_h)
{
    if ($source_w < $inside_w && $source_h < $inside_h) {
        return 1; // Percent = 1, 憒??賣???蝮桀???撠曹??函葬
    }

    $w_percent = $inside_w / $source_w;
    $h_percent = $inside_h / $source_h;

    return ($w_percent > $h_percent) ? $h_percent : $w_percent;
}


?>
