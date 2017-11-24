<?php
include_once('config.php');
include_once('include/PHPTelnet.php');
sfs_check();


//秀出網頁
head("網路管理 - 設定電腦教室");

$tool_bar=&make_menu($school_menu_p);

//列出選單
echo $tool_bar;

$module_manager=checkid($_SERVER['SCRIPT_FILENAME'],1);
if ($module_manager!=1) {
 echo "抱歉 , 您沒有無管理權限!";
 exit();
}

$comproom=$_POST['comproom'];

//儲存
if ($_POST['act']=='save') {
    //
    echo "儲存第".substr($comproom,-1)."電腦教室座位 <br><br>";
    //物件
    $telnet = new PHPTelnet();

    echo "登入防火牆中...(接下來可能會花較久時間，請耐心等候，要等出現「完成」畫面，才能關閉或切換畫面)<br><br>";
    ob_flush();
    flush();
    $result = $telnet->Connect($firewall_ip,$firewall_user,$firewall_pwd);

    if ($result == 0) {
        echo "防火牆登入成功! <br>";
        ob_flush();
        flush();
        if ($VDOM) {
            echo "貴校防火牆啟用 VDOM ...<br>";
            ob_flush();
            flush();
            $telnet->DoCommand('config vdom', $result);
            $telnet->DoCommand('edit root', $result);
            echo str_replace("\n","<br>",$result);
            echo "<br>";
            ob_flush();
            flush();
        }
        foreach ($_POST['site_num'] as $net_edit=>$site_num) {
            $net_ip=$_POST['net_ip'][$net_edit];
            if ($net_ip!='') {
                //
                //檢查是否有此網址設定
                echo "教室座位：".$site_num."  ，電腦 IP: ".$net_ip."<br>  檢查防火牆中是否有此 IP address 定義...<br>";
                ob_flush();
                flush();

                $telnet->DoCommand('show firewall address '.$net_ip, $result);
                // NOTE: $result may contain newlines
                $RES=explode("\n",$result);
                // $RES[0] 會重覆送出的指令
                //有定義
                if (trim($RES[1])=='config firewall address') {
                    echo "本 IP address 已有定義<br>";
                    foreach ($RES as $k=>$v) {
                        echo $v."<br>";
                        ob_flush();
                        flush();
                    }


                    //處理MySQL資料
                    $sql="select * from comp_roomsite where net_edit='$net_edit'";
                    echo $sql."<br>";
                    ob_flush();
                    flush();
                    $res=$CONN->Execute($sql) or die ("SQL error! sql=".$sql);
                    if ($res->RecordCount()) {
                        $net_edit=$res->fields['net_edit'];
                        $query="update comp_roomsite set net_ip='$net_ip',site_num='$site_num' where net_edit='$net_edit'";
                        echo $query."<br>";
                        if (mysqli_query($conID, $query)) {
                            echo "已更新本座位資料.<br>";
                        } else {
                            echo "更新座位資料失敗.<br>";
                        }

                    } else {
                        $query="insert into comp_roomsite (net_edit,net_ip,site_num) values ('$net_edit','$net_ip','$site_num')";
                        if (mysqli_query($conID, $query)) {
                            echo "已儲存本座位資料.<br>";
                        } else {
                            echo "儲存座位資料失敗. $query <br>";
                        }

                    }

                    ob_flush();
                    flush();

                } else {
                    //如果沒有, 進行定義
                    echo "尚未定義，進行定義...<br>";
                    $telnet->DoCommand('config firewall address', $result);
                    $telnet->DoCommand('edit '.$net_ip, $result);
                    $telnet->DoCommand('set subnet '.$net_ip." 255.255.255.255", $result);
                    $telnet->DoCommand('next', $result);
                    $telnet->DoCommand('end', $result);
                    $telnet->DoCommand('show firewall address '.$net_ip, $result);
                    $RES=explode("\n",$result);
                    if (trim($RES[1])=='config firewall address') {
                        echo "設定完成<br>";
                        foreach ($RES as $k=>$v) {
                            echo $v."<br>";
                            ob_flush();
                            flush();
                        }

                        //處理MySQL資料
                        $sql="select * from comp_roomsite where net_edit='$net_edit'";
                        echo $sql."<br>";
                        ob_flush();
                        flush();
                        $res=$CONN->Execute($sql) or die ("SQL error! sql=".$sql);
                        if ($res->RecordCount()) {
                            $net_edit=$res->fields['net_edit'];
                            $query="update comp_roomsite set net_ip='$net_ip',site_num='$site_num' where net_edit='$net_edit'";
                            if (mysqli_query($conID, $query)) {
                                echo "已更新本座位資料.<br>";
                            } else {
                                echo "更新座位資料失敗.<br>";
                            }

                        } else {
                            $query="insert into comp_roomsite (net_edit,net_ip,site_num) values ('$net_edit','$net_ip','$site_num')";
                            if (mysqli_query($conID, $query)) {
                                echo "已儲存本座位資料.<br>";
                            } else {
                                echo "儲存座位資料失敗. $query <br>";
                            }

                        }
                        echo "<br>";
                        ob_flush();
                        flush();
                    } else {
                        echo "設定失敗! <br>";
                        foreach ($RES as $k=>$v) {
                            echo $v."<br>";
                            ob_flush();
                            flush();
                        }
                        echo "<br>";
                        ob_flush();
                        flush();
                    }
                }
                echo "<br>";
            } // end if $net_ip

        } // end foreach

        //讀取所有電腦ip
        $sql="select * from comp_roomsite";
       // $res=$CONN->Execute($sql);
        $row=$CONN->queryFetchAllAssoc($sql);
        $addrgrp="\"sfs3_addrgrp_deny_tag\"";
        foreach ($row as $v) {
            $addrgrp.=" \"".$v['net_ip']."\"";
        }
        if ($addrgrp_comp_all!="") {
            echo "現在, 將所有位址存入 電腦教室ip群組 : $addrgrp_comp_all 中... <br>";
            ob_flush();
            flush();
            $telnet->DoCommand('config firewall addrgrp', $result);
            $telnet->DoCommand('edit "'.$addrgrp_comp_all.'"', $result);
            $telnet->DoCommand('set member '.$addrgrp, $result);
            $telnet->DoCommand('next', $result);
            $telnet->DoCommand('end', $result);
            echo "<span style='color:#FF0000'>完成!</span>";
        } else {
            echo "模組變數未設定電腦教室ip群組的名稱, 無法在防火牆上定義! <br>";
        }
        //中斷 telnet 連線
        $telnet->Disconnect();
        exit();
    } else {
        echo "防火牆登入失敗! <br>";
        exit();
    }

 
} // end if save


?>
<form method="post" name="myform" action="<?php echo $_SERVER['PHP_SELF'];?>">
 <input type="hidden" name="act" value="<?php echo $_POST['act'];?>">
 <input type="hidden" name="option1" value="<?php echo $_POST['option1'];?>">
 
 <select name="comproom" size="1" onchange="document.myform.act.value='';document.myform.submit()">
  <option value="">請選擇要設定的電腦教室...</option>
  <option value="comproom1"<?php if ($comproom=='comproom1') echo " selected";?>>第一電腦教室</option>
  <option value="comproom2"<?php if ($comproom=='comproom2') echo " selected";?>>第二電腦教室</option>
  <option value="comproom3"<?php if ($comproom=='comproom3') echo " selected";?>>第三電腦教室</option>
 </select>
<?php
$net_ip='';
$site_num='';
$ipmac='';
if ($comproom!="") {

 $COMP_INT=substr($comproom,-1);
 $COMP[1]=100;
 $COMP[2]=200;
 $COMP[3]=300;
 //讀取現有設定
 $query="select * from comp_roomsite where net_edit like '".$COMP_INT."%' and site_num>'0' and net_ip!=''";
 $res=mysqli_query($conID, $query);
 while ($row=mysql_fetch_array($res,1)) {
   	 	$net_ip[$row['net_edit']]=$row['net_ip'];
      $site_num[$row['net_edit']]=$row['site_num'];
      $iflock[$row['net_edit']]=$row['iflock'];
 } // end while


?> 
 <table border="0" width="600">
   <tr><td align="center" style="color:#0000FF">第<?php echo $COMP_INT;?>電腦教室配置圖</td></tr> 
 </table>
 <table width="600" style="border-collapse:collapse" bordercolor="#000000" border="0">
 	<tr>
  	<td width="150" align="center">編號　-=電腦 IP =-　</td><td width="150" align="center">編號　-=電腦 IP =-　</td><td width="150" align="center">編號　-=電腦 IP =-　</td><td width="150" align="center">編號　-=電腦 IP =-　</td>
 	</tr>
  <tr>
    <td>
      <table border="0" width="100%">
        <?php
         for ($i=10;$i>0;$i--) {
         ?>
          <tr>
           <td>
            <?php
             pc_site($COMP[$COMP_INT]+$i);
            ?>
           </td>
          </tr>
         <?php
         }        
        ?>       
      </table>
    </td>	
    <td>
      <table border="0" width="100%">
        <?php
         for ($i=20;$i>10;$i--) {
         ?>
          <tr>
           <td>
            <?php
             pc_site($COMP[$COMP_INT]+$i);
            ?>
           </td>
          </tr>
         <?php
         }        
        ?>       
      </table>
    </td>	
    <td>
      <table border="0" width="100%">
        <?php
         for ($i=30;$i>20;$i--) {
         ?>
          <tr>
           <td>
            <?php
             pc_site($COMP[$COMP_INT]+$i);
            ?>
           </td>
          </tr>
         <?php
         }        
        ?>       
      </table>
    </td>	
    <td>
      <table border="0" width="100%">
        <?php
         for ($i=40;$i>30;$i--) {
         ?>
          <tr>
           <td>
            <?php
             pc_site($COMP[$COMP_INT]+$i);
            ?>
           </td>
          </tr>
         <?php
         }        
        ?>       
      </table>
    </td>	
  </tr>
 </table>
  <br>
 <table width="600" border="0" style="border-collapse:collapse" bordercolor="#000000">
 	<tr>
 		<td align="center">
 			<table width="80" border="1" style="border-collapse:collapse" bordercolor="#000000">
 			 <tr><td align="center">教師位置</td></tr>
 			</table>
 		</td>
 </tr>
 </table>

<input type="button" value="儲存" onclick="document.myform.act.value='save';document.myform.submit()">
<br><font color=red size=2>※注意！已設定好的 IP , 盡可能不要隨意更動。</font>。
<br><font color=red size=2>※如果您有更動IP，例如：原有有使用，後來不使用了，程式無法幫您自防火牆中刪除，您必須自行手動刪除該定義。</font>。
<?php
} // end if comproom
?>

</form>

<?php

//顯示每個座位的顯況
function pc_site ($edit_num) {
 global $net_ip,$site_num,$iflock;
 ?>
 <table border="1" style="border-collapse:collapse" bordercolor="#000000" width="100%">
  <tr>
   <td bgcolor="<?php if ($iflock[$edit_num]==0) { echo "#CCFFCC"; } else { echo "#FFCCCC"; } ?>">
   	<input type="text" name="site_num[<?php echo $edit_num;?>]" value="<?php echo $site_num[$edit_num];?>" size="3">
   	<input type="text" name="net_ip[<?php echo $edit_num;?>]" value="<?php echo $net_ip[$edit_num];?>" size="12">
   </td>
  </tr>
 </table>
 
 <?php
}

?>
<Script Language="JavaScript">
function check_tag(SOURCE,STR) {
	var j=0;
	while (j < document.myform.elements.length)  {
	 if (document.myform.elements[j].name==SOURCE) {
	  if (document.myform.elements[j].checked) {
	   k=1;
	  } else {
	   k=0;
	  }	
	 }
	 	j++;
	}
	
  var i =0;
  while (i < document.myform.elements.length)  {
    if (document.myform.elements[i].name.substr(0,STR.length)==STR) {
      document.myform.elements[i].checked=k;
    }
    i++;
  }
 } // end function
</Script>