<?php

include "config.php";

head("午餐食譜");

echo <<<HERE

<table cellspacing='1' cellpadding='4' bgcolor='#0000FF'>
<tr bgcolor="#FFFFFF">
<td align=center><a href="lunchadmin.php">編修食譜</a></td><td align=center><a href="lunch.php">食譜公告</a></td>
</tr>
</table>

HERE;

foot();
  
?>
