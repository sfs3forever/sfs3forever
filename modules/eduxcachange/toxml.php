<?php

// $Id: toxml.php 5588 2009-08-16 17:13:02Z infodaes $

// 引入 SFS3 的函式庫
include "../../include/config.php";

// 引入您自己的 config.php 檔
require "config.php";

// 認證
sfs_check();

// 叫用 SFS3 的版頭
head("國前署XML上傳");

//
// 您的程式碼由此開始

$tool_bar=make_menu($eduxcachange_menu);

echo $tool_bar;

/*
echo <<<HERE

<table border='1' cellpadding='4' cellspacing='0' bgcolor='#0000FF'><tr>
<td  bgcolor='#FFFFFF' class='small'>
教育部九年一貫課程：
<p>學生成績評量及學籍電子資料交換作業。</p>
<p>本作業依與部定 國民中小學－學生學籍╱成績╱健康資料交換規格標準3.0版 標準為之。</p>
<p>詳情請參考：<a href="http://www.edu.tw/moecc/content.aspx?site_content_sn=6011" target=_blank>教育部教育行政ｅ化網頁</a></p>
</td>
</tr></table>

HERE;
*/

echo <<<HERE

<br>

<table style="border-style: solid;border-color: #FF0000;background-color: #FFCCCC;border-width: thin;border-collapse: collapse">
    <tr>
        <td style="padding:20px;color:#FF0000">
            <li>源於原開發維護人員的生涯規劃，本模組已停止官方維護。</li>
            <li>任何的問題諮詢，請逕洽原作者。</li>
        </td>
    </tr>
</table>

HERE;

// SFS3 的版尾
foot();

?>
