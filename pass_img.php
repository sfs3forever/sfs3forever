<?php
//$Id: pass_img.php 6800 2012-06-22 07:48:38Z smallduh $

//session_start();
include "include/config.php";
$img=new pass_img();//建立物件
$img->show();

class pass_img {
	var $pass;//驗証碼
	var $height=30;//圖片高度
	var $weight=110;//圖片度
	var $font_file="harvey.ttf"; //from http://font101.com/	

	function pass_img() {
		$t1=range('A','Z');
		$t2=range('a','z');

		mt_srand((double)microtime()*1000000);
		$this->pass=$t1[mt_rand(0,25)].$t2[mt_rand(0,25)].sprintf("%04d",mt_rand(1,9999));

		//驗証碼寫入session
		unset($_SESSION["Login_img"]);	
		//session_register("Login_img");
		$_SESSION["Login_img"]=$this->pass;
	}

	function show($font_no=0) {
		//取得設定值
		$c=chk_login_img("","",2);

		$f_name = dirname(__file__)."/images/pass1.png"; //圖檔名稱
		if ($c['FONT_NO']==1) {
			$this->font_file="sir.ttf";
			$fs = 20; // 字體大小
			$fx = 6; //字開頭 x 座標
			$fy = 20; //字開頭 y 座標
			$xoffset = 3; //每個字的距離
		} elseif ($c['FONT_NO']==2) {
			$this->font_file="epilog.ttf";
			$fs = 26; // 字體大小
			$fx = 0; //字開頭 x 座標
			$fy = 24; //字開頭 y 座標
			$xoffset = 3; //每個字的距離
		} elseif ($c['FONT_NO']==3) {
			$this->font_file="hotshot.ttf";
			$fs = 20; // 字體大小
			$fx = 0; //字開頭 x 座標
			$fy = 22; //字開頭 y 座標
			$xoffset = 2; //每個字的距離
		} elseif ($c['FONT_NO']==4) {
			$this->font_file="arial.ttf";
			$fs = 18; // 字體大小
			$fx = 0; //字開頭 x 座標
			$fy = 22; //字開頭 y 座標
			$xoffset = 2; //每個字的距離

		} else {
			$fs = 24; // 字體大小
			$fx = -4; //字開頭 x 座標
			$fy = 32; //字開頭 y 座標
			$xoffset = 2; //每個字的距離
		}
		$this->font_file="fonts/".$this->font_file;

		//產生圖片
		$origImg = @imagecreate($this->weight,$this->height);
		$backgroundcolor = ImageColorAllocate($origImg,255,255,255);
	
		//影像處理
		$font_box=array();
		for($i=0;$i<strlen($this->pass);$i++) {
			//逐字處理
			$w=substr($this->pass,$i,1);
			//亂數產生文字顏色
			$textcolor=ImageColorAllocate($origImg,rand(0,255*$c['COLOR']),rand(0,128*$c['COLOR']),rand(0,255*$c['COLOR']));
			//亂數產生角度
			$fa=($i*$c['SLOPE']>2)?(rand(-20,-10)):-20;
			//畫出文字
			ImageTTFText($origImg,$fs,$fa,$fx,$fy,$textcolor,$this->font_file,$w);
			//計算下一個字的x座標
			$font_box=array();
			$font_box=imagettfbbox($fs,0,$this->font_file,$w);
			$fx+=$font_box[4]+$xoffset;
		}

		//加入干擾像素
		if ($c['DOT']) {
			for($i=0;$i<300;$i++)	{
				$randcolor = ImageColorallocate($origImg,rand(0,255),rand(0,255),rand(0,255));
				imagesetpixel($origImg,rand()%$this->weight,rand()%$this->height,$randcolor);
			}
		}

		// 產生最終PNG圖片並且釋放記憶體
		ImagePNG($origImg);

	//釋放任何和圖形origImg關聯的記憶體
		ImageDestroy($origImg);
	}
}
?>
