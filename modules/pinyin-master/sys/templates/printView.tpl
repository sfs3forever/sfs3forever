
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

	table.list{
		width: 100%;
	}
	table.list td{
		border: 1px solid #ddd;
	}

</style>

<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

</head>




<body class="container">

<{foreach key=id item=name from=$users_name_data }>

<table class="table table-hover table-condensed table-striped table-bordered" cellspacing="0" width="100%" >
    <tr class="danger"> 
	<td class="col-md-12"> ???Ｘ平霅憪??梯陌隤踵 </td>
    </tr>

    <tr>
        <td>
          <table class="list" style="width:100%">
	    <tr>
	      <td width="15%" align="left" valign="middle">
		摨扯?:<{$keep_data[$id]['number']}> <{*摨扯?*}></br>
		摮貉?:<{$id}>  <{*摮貉?*}> 
	      </td>
	      <td width="25%" align="center" valign="middle">
               憪?:<{$name}><{*憪?*}> 
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
    <{*憪??梯陌*}>
    </br>
    <li> 撌脫?霅瑞?霅舐_____________________________ <br> (隢漱霅瑞敶望靘?撣急撠?</li>
    <li> 瞍Ｚ?:  <{$eng_name_format['hy'].$id}> </li>
    <li> ?: <{$eng_name_format['ty'].$id}> </li>
    <li> 憡戎蝣? <{$eng_name_format['wg'].$id}> </li>
    <li> ?鈭?: <{$eng_name_format['g2'].$id}> </li>
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

<{/foreach}>

</body>
</html>
