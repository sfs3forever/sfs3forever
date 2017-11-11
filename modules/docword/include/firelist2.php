<?php 
//文件開頭
function content_header() {
global $school_long_name,$page,$last_page,$page_count,$num_record,$QueryBeginDate,$QueryEndDate;

$ptemp = $num_record - (($page) * $page_count);
if ( $ptemp > 0)
	$less_record = $page_count;
else
	$less_record = $page_count+$ptemp;
	
$etemp = sprintf ("%d年%d月%d日", date("Y")-1911,date("m"),date("j"));
?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=big5">
<title><?php echo $school_short_name ?> 公文簽收單</title>
</head>
<table border="1" cellspacing="0" cellpadding="0" width="636" style="width:477.0pt;
 margin-left:1.4pt;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .75pt;
 mso-padding-alt:0cm 1.4pt 0cm 1.4pt">

 <tr>
  <td width=640 colspan=8 valign=top style='width:479.8pt;padding:0cm 1.4pt 0cm 1.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b><span
  style='font-family:新細明體;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:
  "Times New Roman"'><?php echo $school_long_name ?>公文銷毀清冊</span><span lang=EN-US><o:p></o:p></span></b></p>
  <p class=MsoNormal align=right style='text-align:right'><span
  style='font-family:新細明體;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:
  "Times New Roman"'>列印日期：<?php echo $etemp ?></span><span lang=EN-US><span
  style='mso-tab-count:1'>&nbsp;&nbsp; </span></span><span style='font-family:新細明體;
  mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"'><?php echo "第 $page 頁/共 $last_page 頁(本頁 $less_record 件)" ?></span><b><span lang=EN-US><o:p></o:p></span></b></p>
  </td>
 </tr>
  <tr>
    <td width="52" style="width:38.8pt;border:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">系統號</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="71" style="width:53.3pt;border:solid windowtext .75pt;border-left:
  none;mso-border-left-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">收文日期</span><span lang="EN-US"><br>
      </span><span style="font-family:新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;">單位</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="90" style="width:67.3pt;border:solid windowtext .75pt;border-left:
  none;mso-border-left-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">收文號</span><span lang="EN-US"><br>
      </span><span style="font-family:新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;">文別</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="279" style="width:209.6pt;border:solid windowtext .75pt;border-left:
  none;mso-border-left-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">文</span> <span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">件</span> <span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">主</span> <span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">旨</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="72" style="width:54.0pt;border:solid windowtext .75pt;border-left:
  none;mso-border-left-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">辦理單位</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="72" style="width:54.0pt;border:solid windowtext .75pt;border-left:
  none;mso-border-left-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" align="center" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:
  auto;text-align:center"><span style="font-family:新細明體;mso-ascii-font-family:
  &quot;Times New Roman&quot;">備註</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
  </tr>
<?php
}


//一般內容部份
function content_normal() {
global $doc1_id,$doc1_date,$doc1_word,$doc1_main,$doc1_unit_num1,$doc1_unit,$doc1_kind;
?>
  
<tr>
    <td width="52" style="width:38.8pt;border:solid windowtext .75pt;border-top:
  none;mso-border-top-alt:solid windowtext .75pt;padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
  text-align:justify;text-justify:inter-ideograph"><span lang="EN-US" style="mso-fareast-font-family:&quot;MS Gothic&quot;"><?php echo $doc1_id ?><O:P>
      </O:P>
      </span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="71" style="width:53.3pt;border-top:none;border-left:none;border-bottom:
  solid windowtext .75pt;border-right:solid windowtext .75pt;mso-border-top-alt:
  solid windowtext .75pt;mso-border-left-alt:solid windowtext .75pt;padding:
  0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
  text-align:justify;text-justify:inter-ideograph"><span lang="EN-US" style="mso-fareast-font-family:&quot;MS Gothic&quot;"><?php echo $doc1_date ?><br>
      </span><span style="font-family:新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;"><?php echo $doc1_unit ?></span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="90" style="width:67.3pt;border-top:none;border-left:none;border-bottom:
  solid windowtext .75pt;border-right:solid windowtext .75pt;mso-border-top-alt:
  solid windowtext .75pt;mso-border-left-alt:solid windowtext .75pt;padding:
  0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
  text-align:justify;text-justify:inter-ideograph"><span lang="EN-US" style="mso-fareast-font-family:&quot;MS Gothic&quot;">
 <?php echo $doc1_word ?></span><span style="font-family:&quot;MS Gothic&quot;;mso-ascii-font-family:&quot;Times New Roman&quot;"><br><?php echo $doc1_kind ?></span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="279" style="width:209.6pt;border-top:none;border-left:none;
  border-bottom:solid windowtext .75pt;border-right:solid windowtext .75pt;
  mso-border-top-alt:solid windowtext .75pt;mso-border-left-alt:solid windowtext .75pt;
  padding:0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
  text-align:justify;text-justify:inter-ideograph"><span style="font-family:
  新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;"><?php echo $doc1_main ?></span><span lang="EN-US">-</span><span style="font-family:新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;">全國花燈競賽</span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="72" style="width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext .75pt;border-right:solid windowtext .75pt;mso-border-top-alt:
  solid windowtext .75pt;mso-border-left-alt:solid windowtext .75pt;padding:
  0cm 1.4pt 0cm 1.4pt">
      <p class="MsoNormal" style="mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;
  text-align:justify;text-justify:inter-ideograph"><span style="font-family:
  新細明體;mso-ascii-font-family:&quot;Times New Roman&quot;"><?php echo $doc1_unit_num1 ?></span><span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>
    <td width="72" style="width:54.0pt;border-top:none;border-left:none;border-bottom:
  solid windowtext .75pt;border-right:solid windowtext .75pt;mso-border-top-alt:
  solid windowtext .75pt;mso-border-left-alt:solid windowtext .75pt;padding:
  0cm 1.4pt 0cm 1.4pt"><span lang="EN-US" style="font-size:12.0pt;font-family:
  新細明體;mso-hansi-font-family:&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;
  mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;
  mso-bidi-language:AR-SA"><O:P>
      </O:P>
      </span>
      <p class="MsoNormal" style="text-align:justify;text-justify:inter-ideograph">&nbsp;<span lang="EN-US" style="font-family:新細明體"><o:p>
      </o:p>
      </span></p>
    </td>

  </tr>

<?php
}


//文件結尾
Function content_footer() {
?>
</table>

</body>
</html>
<?php
}

//分頁
function page_break() {
?>
<p class="MsoNormal"><span lang="EN-US" style="mso-bidi-font-size:12.0pt">&nbsp;<o:p>
</o:p>
</span></p>
<span lang="EN-US" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;;
mso-fareast-font-family:新細明體;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA"><br clear="all" style="mso-special-character:line-break;page-break-before:always">
</span>
<p class="MsoNormal">&nbsp;<span lang="EN-US" style="mso-bidi-font-size:12.0pt"><o:p>
</o:p>
</span></p>
<?php
}
?>
