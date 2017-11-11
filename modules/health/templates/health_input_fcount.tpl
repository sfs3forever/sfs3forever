{{* $Id: health_input_fcount.tpl 5310 2009-01-10 07:57:56Z hami $ *}}
<script>
function cm() {
	if (confirm("確定要把全校學生狀態都設定為「參與」?")) {
		document.myform.all.value=1;
		document.myform.submit();
	}
}

function cm2() {
	if (confirm("確定要把全校參與學生的實施狀態都設定為「有漱口」?")) {
		document.myform.act.value=1;
		document.myform.submit();
	}
}
</script>

<input type="button" value="設定全校學生皆參與" OnClick="cm();">
<input type="button" value="設定全校參與學生都有漱口" OnClick="cm2();">
<input type="hidden" name="all" value="">
<input type="hidden" name="act" value="">
<table bgcolor="#9ebcdd" cellspacing="1" cellpadding="3" class="small">
<tr style="background-color:#c4d9ff;text-align:center;">
<td rowspan="2">班級</td>
<td rowspan="2">實際<br>人數</td>
<td rowspan="2">參與<br>人數</td>
<td rowspan="2">不參與<br>人數</td>
<td rowspan="2">未設定<br>人數</td>
<td colspan="{{$maxd}}">已實施人數(週/人)</td>
</tr>
<tr style="background-color:#c4d9ff;text-align:center;">
{{foreach from=$date_arr item=d key=i}}
<td>&nbsp;{{if $d.week_no<10}}&nbsp;{{/if}}{{$d.week_no}}&nbsp;</td>
{{/foreach}}
</tr>
{{foreach from=$rowdata item=d key=i}}
<tr style="background-color:{{cycle values="white,white,white,white,yellow"}};text-align:center;">
<td>{{$i}}</td>
<td>{{$d.num|@intval}}</td>
<td>{{$d.y|@intval}}</td>
<td>{{$d.n|@intval}}</td>
<td>{{$d.u|@intval}}</td>
{{foreach from=$date_arr item=dd key=i}}
{{assign var=ww value=$dd.week_no}}
{{assign var=ww value=w$ww}}
<td>{{$d.$ww}}</td>
{{/foreach}}
{{/foreach|@intval}}
</tr>
</table>
