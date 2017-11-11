{{* $Id: score_manage_new_disgrad_print.tpl 5310 2009-01-10 07:57:56Z hami $ *}}
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=big5">
<title>修業建議名單</title>
</head>

<body>
{{foreach from=$show_sn item=sc key=sn name=fs}}
{{if $smarty.foreach.fs.iteration % 40 == 1}}
<table border="0" cellspacing="0" cellpadding="0" width="610" style="page-break-after: always">
<tr align="right">
<td colspan="11"><b>{{if $smarty.post.years==5}}五{{else}}六{{/if}}學期學習領域平均成績在60分以上者未達{{$smarty.post.fail_num}}項名單　　 <font size="1" style="font-size: 10pt">列印日期：{{$smarty.now|date_format}}</font></b></td>
</tr>
<tr align="center">
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 1.5pt;"><font size="1" style="font-size: 10pt">班級</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">座號</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">學號</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">姓名</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">語文</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">數學</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">自然與生活科技</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">社會</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">健康與體育</font></td>
<td style="border-style:solid; border-width:1.5pt 0.75pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">藝術與人文</font></td>
<td style="border-style:solid; border-width:1.5pt 1.5pt 1.5pt 0pt;"><font size="1" style="font-size: 10pt">綜合</font></td>
</tr>
{{/if}}
<tr align="center">
<td style="border-style:solid; border-width:0pt 0.75pt {{if $smarty.foreach.fs.iteration % 5 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}1.5{{else}}0.75{{/if}}pt 1.5pt;">{{$sclass[$sn]}}</td>
<td style="border-style:solid; border-width:0pt 0.75pt {{if $smarty.foreach.fs.iteration % 5 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}1.5{{else}}0.75{{/if}}pt 0pt;">{{$snum[$sn]}}</td>
<td style="border-style:solid; border-width:0pt 0.75pt {{if $smarty.foreach.fs.iteration % 5 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}1.5{{else}}0.75{{/if}}pt 0pt;">{{$stud_id[$sn]}}</td>
<td style="border-style:solid; border-width:0pt 0.75pt {{if $smarty.foreach.fs.iteration % 5 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}1.5{{else}}0.75{{/if}}pt 0pt;">{{$stud_name[$sn]}}</td>
{{foreach from=$show_ss item=ssn key=ss name=sss}}
<td style="border-style:solid; border-width:0pt {{if $smarty.foreach.sss.iteration == $show_ss_num}}1.5{{else}}0.75{{/if}}pt {{if $smarty.foreach.fs.iteration % 5 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}1.5{{else}}0.75{{/if}}pt 0pt;">{{$fin_score.$sn.$ss.avg.score}}</td>
{{/foreach}}
</tr>
{{if $smarty.foreach.fs.iteration % 40 == 0 || $smarty.foreach.fs.iteration == $fin_score_num}}
</table>
{{/if}}
{{/foreach}}
</body>
</html>