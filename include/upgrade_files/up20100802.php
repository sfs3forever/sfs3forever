<?php

//$Id: up20090921.php 5649 2009-09-20 17:08:17Z brucelyc $

if(!$CONN){
        echo "go away !!";
        exit;
}
$query ="update sfs_text  set  t_name='歌唱' where  t_name='唱歌' and  t_kind='特殊才能'";
mysql_query($query);
?>
