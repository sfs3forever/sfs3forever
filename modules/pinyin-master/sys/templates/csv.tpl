
<!DOCTYPE html>
<html>
<head>


<title>
{{$my_title}}
</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<style type="text/css">
	body {
		font-family: "Helvetica Neue", Helvetica, Arial, "敺株?甇??擃?, sans-serif;
	}

	table.table {
		font-size: 18px;
	}

	table.submitdata {
		font-size: 16px;
	}

	table.list{
		width: 100%;
	}
	table.list td{
		vertical-align: bottom;
		border: 1px solid #ddd;
	}

</style>

{{if $route != "mainView"}} {{*蝬脤?頛詨???Ｗ???}}
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script>
console.log("hello");

{{if $update_stud_eng_names == 'yes'}}
$(document).ready(function(){
    $.post("../update_stud_eng.php",
    {
			{{foreach key=id item=eng_name from=$eng_name_format }}
				{{$id}}:"{{$eng_name}}",
			{{/foreach}}
    },
    function(data,status){
      //alert("Data: " + data);
    });
});
{{/if}} {{*end if $update_stud_eng_names == 'yes'*}}

</script>

{{/if}} {{*if $route != "mainView"*}}

</head>




<body class="container">

{{foreach key=id item=name from=$users_name_data }}

<table class="table table-hover table-condensed table-striped table-bordered" cellspacing="0" width="100%" >
    <tr class="success"> 
	<td class="col-md-12"> ???Ｘ平霅憪??梯陌隤踵 </td>
    </tr>

    <tr>
        <td>
          <table class="list" style="width:100%">
	    <tr>
	      <td width="15%">
		摨扯?:{{$id}}  {{*摨扯?*}} 
	      </td>
	      <td width="25%">
               憪?:{{$name}}{{*憪?*}} 
	      </td>
	      <td width="60%">
		 隢銝???暸嚗誑?抵ˊ雿?隤璆剛??賂??風?扯?敺風?找??唾陌??
	      </td>
	    </tr>
	  </table>
        </td>
    </tr>

    <tr>
      <td>
	憪??梯陌:
	<ul>
    {{*憪??梯陌*}}
    </br>
    <li> 撌脫?霅瑞?霅舐_____________________________ <br> (隢漱霅瑞敶望靘?撣急撠?</li>
    <li> 瞍Ｚ?:  {{$eng_name_format['hy'].$id}} </li>
    <li> ?: {{$eng_name_format['ty'].$id}} </li>
    <li> 憡戎蝣? {{$eng_name_format['wg'].$id}} </li>
    <li> ?: {{$eng_name_format['g2'].$id}} </li>
    <br>
    <li> ?嗅?:___________________________________
      </ul>
      </td>
    </tr>

    <tr>
        <td>
          <table class="list" style="width:100%">
	    <tr>
	      <td width="20%">
		<br>
		摰園蝪賢?
	      </td>
	      <td width="80%" style="text-align: right;" >
		  ____撟復____?____??
	      </td>
	    </tr>
	  </table>
        </td>
    </tr>

</table>
<br>
<br>

{{/foreach}}

<table class="table table-hover table-condensed table-striped table-bordered" cellspacing="0" width="100%" >
		<form name='form9' method='post' action='' target="" >
		 <input name="set_all_pinyin_metod" type="hidden" value="{{$default_pinyin}}">
		 <input name="set_name_format" type="hidden" value="{{$_post_name_format}}">
		<input name="class_name" type="hidden" value="{{$class_name}}">

  <tr class="success"> 
    <th class="col-md-1">摨扯?</th>
    <th class="col-md-1">憪?</th>
		 <th class="col-md-1">?潮?孵?</th>
		 <th class="col-md-3">憭摮?/th>
		 <th class="col-md-3">憪??梯陌</th>
{{foreach key=id item=name from=$users_name_data }}
	{{*???*}}
		{{assign var='uid' value=$id}}
		{{assign var='uuid' value="users_name_data[$uid]"}}
		<input name="{{$uuid}}" type="hidden" value="{{$name}}">
	{{*end ???*}}

  <tr>

	<td>{{$id}} {{*摨扯?*}}</td>
	<td>{{$name}}{{*憪?*}}</td>
	<td style="white-space:nowrap">

{{if $route == "mainView"}}
  {{*?潮?孵?*}}		
  {{assign var='uid' value=$id}}
  {{assign var='uuid' value="pinyin_select[$uid]"}}
  {{html_options name="$uuid" selected=$pinyin_selected_values.$id options=$pinyin_method_options onchange="this.form.submit()"}}
{{else}}
  {{*?嗅??唳??見撘?}}
  {{$pinyin_method_options[$pinyin_selected_values.$id]}}
{{/if}}
	</td>
	<td>

	{{*憭摮?}}
	{{if isset($users_multi_ph.$id)}}
		{{foreach from=$users_multi_ph.$id key=pos item=multi_ph_options}}
			{{$hanzi.$id.$pos.chinese}}
				{{assign var='uid' value=$id}}
				{{assign var='uuid' value="ph_select[$uid][$pos]]"}}

				{{html_options name=$uuid options=$multi_ph_options selected=$post_ph_selected_values.$id.$pos onchange="this.form.submit()"}}
		{{/foreach}}
	{{/if}}


{{if $route != "mainView"}}
	{{if isset($users_multi_ph.$id)}}
		{{foreach from=$users_multi_ph.$id key=pos item=multi_ph_options}}
			<span class="multi_ph">
			{{$hanzi.$id.$pos.chinese}}:
			{{assign var = 'ph_sn' value=$post_ph_selected_values.$id.$pos}}
			{{$users_multi_ph.$id.$pos.$ph_sn}}
			</span>
		 {{/foreach}}
  {{/if}}
{{/if}}  {{*end if $route != "mainView"*}}
	</td>
  <td>
    {{*憪??梯陌*}}
    {{$eng_name_format.$id}}
  </td>
</tr>

{{/foreach}}

		</form>
</table>

<br/>
    <div>
	{{*$eng_name_format|@print_r*}}
      <p>?祆活?亥岷?惋{$time_elapsed}}蝘???/p>
    </div>


</body>
</html>
