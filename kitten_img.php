<?php
//$Id: $
$img=new pass_img();
if (intval($_REQUEST['num'])>0) {
	echo $img->getNum();
	$a = $img->chk();
	exit;
}
if ($_SESSION['imgArr'] && $_REQUEST['x'] && $_REQUEST['y']) $img->draw();
else $img->show();

class pass_img {

	var $width = 260;
	var $height = 200;
	var $dir = "./images/";
	var $backgroundImg = "grass.png";
	var $animals = array("kitten_01"=>"1", "kitten_02"=>"1", "rabbit"=>"1", "guinea_pig"=>"2", "chick"=>"4", "hamster"=>"6");
	var $img;
	var $imgArr = array();
	var $grid = 5;
	var $gMax = 0;
	var $gArr = array();
	var $overLap = 0.5;

	function __construct() {
		$this->gMax = intval($this->width/$this->grid) * intval($this->height/$this->grid);
		$img = imagecreatefrompng($this->dir.$this->backgroundImg);
		$this->img = imagecreatetruecolor($this->width, $this->height);
		imagecopy($this->img, $img, 0, 0, 0, 0, $this->width, $this->height);
		session_start();
		//unset($_SESSION["imgArr"]);
	}

	function getNum() {
		$nums = 0;
		if (count($_SESSION["onClick"])>0) foreach($_SESSION["onClick"] as $v) if ($v==1) $nums++;
		return $nums;
	}

	function chk() {
		$chk = 0;
		if ($this->getNum() != 2) return "Wrong!";
		foreach($_SESSION["onClick"] as $k=>$v) if ($v==1 && substr($_SESSION["imgArr"][$k][0], 0,1) == "k") $chk++;
		if ($chk == 2) {
			$_SESSION["kittenCheck"] = "OK";
			return "Right!";
		} else {
			$_SESSION["kittenCheck"] = "OH";
			return "Wrong!";
		}
	}

	function imagecopymerge_alpha($dstImg, $srcImg, $paddingX, $paddingY, $opacity) {
		//?脣???gd??璅?
		$srcWidth = imagesx($srcImg);
		$srcHeight = imagesy($srcImg);

		//?萄遣?啣?
		$cutImg = imagecreatetruecolor($srcWidth, $srcHeight);
		//??炬???其遢摨?
		imagecopy($cutImg, $dstImg, 0, 0, $paddingX, $paddingY, $srcWidth, $srcHeight);
		//撠??圈隞賢???
		imagecopy($cutImg, $srcImg, 0, 0, 0, 0, $srcWidth, $srcHeight);
		//撠憟賜?????雿萄????? 銝虫?alpha?潸???摨?
		imagecopymerge($dstImg, $cutImg, $paddingX, $paddingY, 0, 0, $srcWidth, $srcHeight, 100-$opacity);
		return $dstImg;

		//??憿 + alpha嚗?憿憛怠??唳??
		//$alpha = imagecolorallocatealpha($newImg, 0, 0, 0, 127);
		//imagefill($newImg, 0, 0, $alpha);

		//撠??鞎?啣?銝?銝西身蝵桀靽? PNG ????摮??渡? alpha ??靽⊥
		//imagecopyresampled($newImg, $srcImg, 0, 0, 0, 0, $srcWidth, $srcHeight, $srcWidth, $srcHeight);
		//imagesavealpha($newImg, true);
		//imagepng($newImg);
	}

	function show() {
		foreach($this->animals as $m => $mmax) {
			$img2 = imagecreatefrompng($this->dir.$m.".png");
			$posArr = $this->putPic(imagesx($img2), imagesy($img2), $mmax);
			foreach($posArr as $v) {
				//?撠?隞亙?????
				if (substr($m, 0, 1)<>"k") $img = $this->imagecopymerge_alpha($this->img, $img2, $v[0], $v[1], 25);
				$this->imgArr[] = array($m, $v[0], $v[1], imagesx($img2), imagesy($img2));
			}
		}
		//???怠?鞎?
		$kArr = array();
		foreach($this->imgArr as $k=>$i) {
			$img2 = imagecreatefrompng($this->dir.$i[0].".png");
			if (substr($i[0], 0, 1)=="k") $img = $this->imagecopymerge_alpha($this->img, $img2, $i[1], $i[2], 25);
			//?撠?鞈?
			$kArr[] = $i;
			//?函???葉皜撠?鞈?
			unset($this->imgArr[$k]);
		}
		//撠?鞎??????敺??箔?閫?捱???????詨???)
		foreach($kArr as $i) $this->imgArr[] = $i;
		krsort($this->imgArr);
//exit;
		$_SESSION['imgArr'] = $this->imgArr;
		unset($_SESSION['onClick']);
		header('Content-Type: image/png');
		ImagePNG($img);
		ImageDestroy($img);
	}

	//隞兄ession鞈??湔?怠?
	function draw() {
		$onClick = "";
		foreach($_SESSION['imgArr'] as $k=>$imgData) {
			if ($_REQUEST['x'] >= $imgData[1] && $_REQUEST['x'] <= ($imgData[1]+$imgData[3]) && $_REQUEST['y'] >= $imgData[2] && $_REQUEST['y'] <= ($imgData[2]+$imgData[4])) $onClick = $k;
		}
		if ($onClick!=="") {
			if ($_SESSION['onClick'][$onClick]==1) $_SESSION['onClick'][$onClick] = "";
			else $_SESSION['onClick'][$onClick] = 1;
		}
		foreach($_SESSION['imgArr'] as $k=>$imgData) {
			if ($_SESSION['onClick'][$k]==1) $img2 = imagecreatefrompng($this->dir.$imgData[0]."_highlight.png");
			else $img2 = imagecreatefrompng($this->dir.$imgData[0].".png");
			$img = $this->imagecopymerge_alpha($this->img, $img2, $imgData[1], $imgData[2], 25);
		}
		header('Content-Type: image/png');
		ImagePNG($img);
		ImageDestroy($img);
	}

	function putPic($picW, $picH, $num) {
		$tempArr = array();
		$effW = $this->width - $picW;
		$effH = $this->height - $picH;
		$gwMax = floor(($effW+1) / $this->grid); //閮??憭扳撖祆???1隞仿??憟賣?文撠?銝?潛???
		$ghMax = floor(($effH+1) / $this->grid); //閮??憭扳擃?銝?

		//???銝剜?閮??
		foreach($this->imgArr as $d) {
			$tempImg = imagecreatefrompng($this->dir.$d[0].".png");
			$xStart = intval(($d[1] - $picW * $this->overLap) / $this->grid);
			if ($xStart < 0) $xStart = 0;
			$xEnd = intval(($d[1] + imagesx($tempImg) - $picW * $this->overLap) / $this->grid);
			if ($xEnd > $gwMax) $xEnd = $gwMax;
			$yStart = intval(($d[2] - $picH * $this->overLap) / $this->grid);
			if ($yStart < 0) $yStart = 0;
			$yEnd = intval(($d[2] + imagesy($tempImg) - $picH * $this->overLap) / $this->grid);
			if ($yEnd > $ghMax) $yEnd = $ghMax;
			for($x = $xStart; $x <= $xEnd; $x++) {
				for($y = $yStart; $y <= $yEnd; $y++) {
					$tempArr[$x + $y * ($gwMax + 1)]++; //撖砍?0蝞絲, ?隞亥???
				}
			}
		}


		//?冽???
		$rArr = array();
		for($i=1; $i<=$num; $i++) {
/*
echo "picW=$picW, picH=$picH ... $effW, $effH($gwMax, $ghMax) ... ".$this->width.", ".$this->height." ... ".intval($effW/$this->grid).", ".intval($effH/$this->grid)."<br><pre>";
print_r($this->imgArr);
print_r($rArr);
echo "</pre>";
$this->trace($tempArr, $gwMax, $ghMax);
*/
			//????
			$arr = array();
			$arr = $this->getEffArr($tempArr, ($gwMax + 1) * ($ghMax + 1));
			$tempArr2 = $arr['arr'];
			$aMax = $arr['max'];
			if ($aMax <= 0) break;
			$rr = mt_rand(0,$aMax);
			if ($tempArr2[$rr] > 0) $rr=$tempArr2[$rr];
			$x = ($rr % ($gwMax + 1)) * $this->grid + intval(mt_rand(0, $this->grid));
			$y = intval($rr / ($gwMax + 1)) * $this->grid + intval(mt_rand(0, $this->grid));
			$uStart = intval(($x - $picW * $this->overLap) / $this->grid);
			if ($uStart < 0) $uStart = 0;
			$uEnd = intval(($x + $picW - $picW * $this->overLap) / $this->grid);
			if ($uEnd > $gwMax) $uEnd = $gwMax;
			$vStart = intval(($y - $picH * $this->overLap) / $this->grid);
			if ($vStart < 0) $vStart = 0;
			$vEnd = intval(($y + $picH - $picH * $this->overLap) / $this->grid);
			if ($vEnd > $ghMax) $vEnd = $ghMax;
//echo "<br><br>realU=".($rr % ($gwMax + 1)).", realV=".intval($rr / ($gwMax + 1))." uStart=$uStart, uEnd=$uEnd, vStart=$vStart, vEnd=$vEnd gwMax=$gwMax, ghMax=$ghMax<br>";
			for($u=$uStart; $u<=$uEnd; $u++) {
				for($v=$vStart; $v<=$vEnd; $v++) {
					$tempArr[$u + $v * ($gwMax + 1)]++; //撖砍?0蝞絲, ?隞亥???
//echo "rr=$rr, x=$x, y=$y, $u, $v, ".($u + $v * $gwMax)."<br>";
				}
			}
//$this->trace($tempArr, $gwMax, $ghMax);
			$rArr[] = array($x, $y);
		}
		return $rArr;
	}

	//????暺
	function getEffArr($arr, $max) {
		$tempArr = array();
		krsort($arr);
		foreach($arr as $k=>$v) {
			if ($tempArr[$max]>0) $tempArr[$k] = $tempArr[$max];
			else $tempArr[$k] = $max;
			$max--;
		}
		return array('arr'=>$tempArr, 'max'=>$max);
	}

	//?日?典撘?
	function trace($arr, $w, $h) {
		echo "0";
		for($i=0;$i<=9;$i++) for($j=0;$j<=9;$j++) echo $j;
		echo "<br>";
		for($j=0;$j<=$h;$j++) {
			echo ($j % 10);
			for($i=0;$i<=$w;$i++) {
				echo intval($arr[$i+$j*($w+1)]);
			}
			echo "<br>";
		}
		echo "<br><br>";
	}
}
?>
