<?php

// $Id: config.php 5310 2009-01-10 07:57:56Z hami $

require_once "./module-cfg.php";

include_once "../../include/config.php";
include_once "../../include/sfs_case_PLlib.php";
  //============================================================ 
  $path_str = "school/photo/";
  set_upload_path($path_str);  
  //儲存附加檔案絕對位置，目錄權限設為777(最後有 / )
  $savepath = $UPLOAD_PATH.$path_str;

  //和網頁根目錄相對位置 下載路徑 (最後有 / ) 
  $htmpath = $UPLOAD_URL.$path_str;  
  //=========================================================


//取得模組參數設定

$m_arr = &get_module_setup("photoview");
extract($m_arr, EXTR_OVERWRITE);

$PHP_SELF = $_SERVER["PHP_SELF"] ;

 //做縮圖
 function ImageResized( $filename_src , $small_image ,$w ,$h ,$GD2=0 ) {

    if ($GD2) {
        ImageCopyResizedTrue( $filename_src , $filename ,$w ,$h) ; 
    }else {    
        $size=$w."x".$h;
        $exec_str="/usr/bin/convert '-resize'  $size  '$filename_src' '$small_image' "; //注意"跟'唷
        //echo $exec_str ;
        exec($exec_str);    
    }
 }    
    /*  Convert image size. true color*/
    //$src        來源檔案
    //$dest        目的檔案
    //$maxWidth    縮圖寬度
    //$maxHeight    縮圖高度
    //$quality    JPEG品質
    function ImageCopyResizedTrue($src,$dest,$maxWidth,$maxHeight,$quality=100) {

        //檢查檔案是否存在
        if (file_exists($src)  && isset($dest)) {

            $destInfo  = pathInfo($dest);
            $srcSize   = getImageSize($src); //圖檔大小
            $srcRatio  = $srcSize[0]/$srcSize[1]; // 計算寬/高
            $destRatio = $maxWidth/$maxHeight;
            if ($destRatio > $srcRatio) {
                $destSize[1] = $maxHeight;
                $destSize[0] = $maxHeight*$srcRatio;
            }
            else {
                $destSize[0] = $maxWidth;
                $destSize[1] = $maxWidth/$srcRatio;
            }


            //GIF 檔不支援輸出，因此將GIF轉成JPEG
            if ($destInfo['extension'] == "gif") $dest = substr_replace($dest, 'jpg', -3);

            //建立一個 True Color 的影像
            $destImage = imageCreateTrueColor($destSize[0],$destSize[1]);

            //根據副檔名讀取圖檔
            switch ($srcSize[2]) {
                case 1: $srcImage = imageCreateFromGif($src); break;
                case 2: $srcImage = imageCreateFromJpeg($src); break;
                case 3: $srcImage = imageCreateFromPng($src); break;
                default: return false; break;
            }

            //取樣縮圖
            ImageCopyResampled($destImage, $srcImage, 0, 0, 0, 0,$destSize[0],$destSize[1],
                                $srcSize[0],$srcSize[1]);

            //輸出圖檔
            switch ($srcSize[2]) {
                case 1: case 2: imageJpeg($destImage,$dest,$quality); break;
                case 3: imagePng($destImage,$dest); break;
            }
            return true;
        }
        else {
            return false;
        }
    }


function saveFile($filename, $somecontent){

        // In our example we're opening $filename in append mode.
        // The file pointer is at the bottom of the file hence 
        // that's where $somecontent will go when we fwrite() it.
        if (!$handle = fopen($filename, 'w')) {
             echo "Cannot open file ($filename)";
             return false ;
             exit;
        }
    
        // Write $somecontent to our opened file.
        if (fwrite($handle, $somecontent) === FALSE) {
            echo "Cannot write to file ($filename)";
            return false ;
            exit;
        }
        
        return true ;
        
        fclose($handle);
                        


}    
?>
