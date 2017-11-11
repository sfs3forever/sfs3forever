<!DOCTYPE html>
<html>
<head>


<title>
<{$my_title}>
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

	table.my_title{
		border-width:3px;
		border-color: #FFFFF3;
		border-radius:5;
	}
	table.my_title td{
		height: 50px;
		vertical-align: bottom;
	}

</style>

<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script>
  console.log("hello");
</script>

</head>



<body class="container" ng-app>


<table class="my_title" >
	<tr>
		<td>
			<h3><u><{$my_title}></u></h3>
		</td>
		<td>
			<h5><{$my_title_version}></h5>
		</td>
	</tr>
</table>

<table class="submitdata" >
<tr>
	<td>
	 <form name='form1' method='post' action=''>
	?券閮剔:		<{html_options style="background-color:#FDFCDC;" name='set_all_pinyin_metod' options=$pinyin_method_options selected=$default_pinyin onchange="this.form.submit()"}>

		 <input name="class_name" type="hidden" value="<{$class_name}>">
  <input name="upload_path" type="hidden" value="<{$upload_path}>">
   	         <{*?剔??迂*}>
<{*???*}>
<{foreach key=id item=name from=$users_name_data }>
		<{assign var='uid' value=$id}>
		<{assign var='uuid' value="users_name_data[$uid]"}>
		<input name="<{$uuid}>" type="hidden" value="<{$name}>">
<input name="keep_data[<{$id}>][number]" type="hidden" value="<{$keep_data[$id]['number']}>">
<input name="keep_data[<{$id}>][exist_eng_name]" type="hidden" value="<{$keep_data[$id]['exist_eng_name']}>">

<{/foreach}>
<{*end ???*}>
	 </form>
	</td>
	<td>
	<form name='form2' method='post' action=''>
		<input name="set_name_format" type="hidden" value="<{$_post_name_format}>">
		<input name="set_all_pinyin_metod" type="hidden" value="<{$default_pinyin}>">
  <input name="upload_path" type="hidden" value="<{$upload_path}>">
<{*???*}>
<{foreach key=id item=name from=$users_name_data }>
		<{assign var='uid' value=$id}>
		<{assign var='uuid' value="users_name_data[$uid]"}>
		<input name="<{$uuid}>" type="hidden" value="<{$name}>">
<{/foreach}>
<{*end ???*}>

		<{foreach from=$pinyin_selected_values key=id item=py_method}>

      <{*?潮?孵??豢?*}>
      <{assign var='uid' value=$id}>
      <{assign var='uuid' value="pinyin_select[$uid]"}>
       <input name="<{$uuid}>" type="hidden" value="<{$py_method}>">
<input name="keep_data[<{$id}>][number]" type="hidden" value="<{$keep_data[$id]['number']}>">
<input name="keep_data[<{$id}>][exist_eng_name]" type="hidden" value="<{$keep_data[$id]['exist_eng_name']}>">

        <{*憭摮釣?連n?詨?*}>
        <{if isset($post_ph_selected_values.$id)}>
          <{foreach from=$post_ph_selected_values.$id key=pos item=ph_sn}>
            <{assign var='uid' value=$id}>
            <{assign var='uuid' value="ph_select[$uid][$pos]]"}>
             <input name="<{$uuid}>" type="hidden" value="<{$ph_sn}>">
          <{/foreach}>
        <{/if}>

    <{/foreach}>

		 <input name="class_name" type="hidden" value="<{$class_name}>">
   	         <{*?剔??迂*}>
			霅臬神?澆?:
		<{html_options name='set_name_format' options=$name_format_options selected=$_post_name_format onchange="this.form.submit()"}>
</form>
</td>

<td></td>
<td>
	<form name='press_print' method='post' action='' target="_blank" >
		 <input name="class_name" type="hidden" value="<{$class_name}>">
		<input name="set_name_format" type="hidden" value="<{$_post_name_format}>">
		<input name="set_all_pinyin_metod" type="hidden" value="<{$default_pinyin}>">
		<input name="upload_path" type="hidden" value="<{$upload_path}>">
<{*???*}>
<{foreach key=id item=name from=$users_name_data }>
		<{assign var='uid' value=$id}>
		<{assign var='uuid' value="users_name_data[$uid]"}>
		<input name="<{$uuid}>" type="hidden" value="<{$name}>">
<input name="keep_data[<{$id}>][number]" type="hidden" value="<{$keep_data[$id]['number']}>">
<input name="keep_data[<{$id}>][exist_eng_name]" type="hidden" value="<{$keep_data[$id]['exist_eng_name']}>">
<input name="keep_data[<{$id}>][new_eng_name]" type="hidden" value="<{$eng_name_format.$id}>">
<input name="keep_data[<{$id}>][user_name]" type="hidden" value="<{$users_name_data.$id}>">
<{*?喲??}>
	<{*end ???*}>
<{/foreach}>

		<{foreach from=$pinyin_selected_values key=id item=py_method}>

			<{*?潮?孵??豢?*}>
			<{assign var='uid' value=$id}>
			<{assign var='uuid' value="pinyin_select[$uid]"}>
			 <input name="<{$uuid}>" type="hidden" value="<{$py_method}>">

				<{*憭摮釣?連n?詨?*}>
				<{if isset($post_ph_selected_values.$id)}>
					<{foreach from=$post_ph_selected_values.$id key=pos item=ph_sn}>
						<{assign var='uid' value=$id}>
						<{assign var='uuid' value="ph_select[$uid][$pos]]"}>
						 <input name="<{$uuid}>" type="hidden" value="<{$ph_sn}>">
					<{/foreach}>
				<{/if}>

		<{/foreach}>
	<{html_options name='view_selected' options=$action_options selected=$route}>
		 <input name="class_name" type="hidden" value="<{$class_name}>">

	<input type='submit' class="btn-primary" name='submit_print' value='蝣箏??瑁?'>
</form>
</td><td width="1%"></td>
<td>
  <div class='desc'>
	<form id="aform">
	<select id="downloadDoc" size="1" style="background-color:#F8F8FF;">
	<option value="nothing" selected="selected">?祉頂蝯梯身閮???/option>
	<option value="./tools/doc/pinyinshouce_7881.pdf">??其葉?陌?喃蝙?典???/option>
	<option value="./tools/doc/tc.id4631.pdf">?箔葉撣璆剛??豢?單撘?/option>
	</select>
	</form>

<script type='text/javascript'>
	var selectmenu=document.getElementById("downloadDoc")
	selectmenu.onchange=function(){ //run some code when "onchange" event fires
	 var chosenoption=this.options[this.selectedIndex] //this refers to "selectmenu"
	 if (chosenoption.value!="nothing"){
		window.open(chosenoption.value, "", "") //open target site (based on option's value attr) in new window
	 }
}
</script>
</div>
</td>
</tr>

</table>

<table class="table table-hover table-condensed table-striped table-bordered" cellspacing="0" width="100%" >
		<form name='form9' method='post' action='' target="" >
		 <input name="set_all_pinyin_metod" type="hidden" value="<{$default_pinyin}>">
		 <input name="set_name_format" type="hidden" value="<{$_post_name_format}>">

		 <input name="class_name" type="hidden" value="<{$class_name}>">
  <input name="upload_path" type="hidden" value="<{$upload_path}>">
   	         <{*?剔??迂*}>
		

  <tr class="danger"> 
    <th width="3%">摨扯?</th>
    <th width="5%">摮貉?</th>
    <th class="col-md-1">憪?</th>
		 <th class="col-md-1">?潮?孵?</th>
		 <th class="col-md-3">憭摮?/th>
		 <th class="col-md-3">憪??梯陌</th>
<{foreach key=id item=name from=$users_name_data }>
	<{*???*}>
		<{assign var='uid' value=$id}>
		<{assign var='uuid' value="users_name_data[$uid]"}>
		<input name="<{$uuid}>" type="hidden" value="<{$name}>">
<input name="keep_data[<{$id}>][number]" type="hidden" value="<{$keep_data[$id]['number']}>">
<input name="keep_data[<{$id}>][exist_eng_name]" type="hidden" value="<{$keep_data[$id]['exist_eng_name']}>">
	<{*end ???*}>

  <tr>

    <td><{$keep_data[$id]['number']}> <{*摨扯?*}> </td>
    <td>
        <{$id}> <{*摮貉?*}>
    </td>
    <td><{$name}><{*憪?*}></td>
    <td style="white-space:nowrap">

<{if $route == "mainView"}>
  <{*?潮?孵?*}>		
  <{assign var='uid' value=$id}>
  <{assign var='uuid' value="pinyin_select[$uid]"}>
  <{html_options name="$uuid" selected=$pinyin_selected_values.$id options=$pinyin_method_options onchange="this.form.submit()"}>
<{else}>
  <{*?嗅??唳??見撘?}>
  <{$pinyin_method_options[$pinyin_selected_values.$id]}>
<{/if}>
	</td>
	<td>

	<{*憭摮?}>
	<{if isset($hanzi_multi_ph.$id)}>
		<{foreach from=$hanzi_multi_ph.$id key=pos item=multi_ph_options}>
			<{$hanzi.$id.$pos.chinese}>
				<{assign var='uid' value=$id}>
				<{assign var='uuid' value="ph_select[$uid][$pos]]"}>

				<{html_options name=$uuid options=$multi_ph_options selected=$post_ph_selected_values.$id.$pos onchange="this.form.submit()"}>
		<{/foreach}>
	<{/if}>


<{if $route != "mainView"}>
	<{if isset($hanzi_multi_ph.$id)}>
		<{foreach from=$hanzi_multi_ph.$id key=pos item=multi_ph_options}>
			<span class="multi_ph">
			<{$hanzi.$id.$pos.chinese}>:
			<{assign var = 'ph_sn' value=$post_ph_selected_values.$id.$pos}>
			<{$hanzi_multi_ph.$id.$pos.$ph_sn}>
			</span>
		 <{/foreach}>
  <{/if}>
<{/if}>  <{*end if $route != "mainView"*}>
	</td>
  <td>
    <{*憪??梯陌*}>
    <{*$eng_name_format.$id['selected']*}>
    <{$eng_name_format.$id}>
  </td>
</tr>

<{/foreach}>

		</form>
</table>

<br/>
    <div>
	<{*$eng_name_format|@print_r*}>
	<{*$keep_data|@print_r*}>
    </div>


</body>
</html>
