<?php
                                                                                                                             
// $Id: qbookout.php 5310 2009-01-10 07:57:56Z hami $

include "book_config.php";
include "header.php";
echo "<center><BR><H3>本校圖書室 借閱狀況表</H3>";
echo "<table border=1 width=80% align=center>";
echo "<tr><td bgcolor=#8080FF width=20% align=center><strong>分類號</strong></td>";
echo "<td bgcolor=#8080FF width=60% align=center><strong>圖書分類</strong></td>";
echo "<td bgcolor=#8080FF width=20% align=center><strong>目前<BR>借出冊數</strong></td></tr>";
$query = " select * from bookch1 order by bookch1_id ";
$result= mysqli_query($conID,$query);
$i=0;
$tol=0;
while ($row = mysqli_fetch_array($result)){
	//$query2 = "select count(*) as cc  from book where book_isout=1 and  bookch1_id = '".$row["bookch1_id"]."'";
	$query2 = "select  count(*)as cc from borrow where in_date=0 and curr_class_num<>0 and bookch1_id = '$row[bookch1_id]'";     
	$result2 = mysql_query($query2);
	$row2 = mysqli_fetch_array($result2);
	$cc = $row2["cc"];
	if ($i % 2 == 1 )
		echo "<tr bgcolor=#FFFF80>";
	else
	echo "<tr>";

	echo sprintf("<td  align=center >%s</td><td  align=center ><a href=\"%s?bookch1_id=%s\">%s</a></td><td align=center>%s</td></tr>",$row["bookch1_id"],"qbookout_list.php",$row["bookch1_id"],$row["bookch1_name"],$cc);
	$tol +=$cc;
}
echo "<tr><td bgcolor=#8080FF width=20% align=center><strong>合計</strong></td>";
echo "<td bgcolor=#8080FF width=60% align=center></td>";
echo "<td bgcolor=#8080FF width=20% align=center><strong>$tol</strong></td></tr>";
echo "</table>";
echo "</center>";
include "footer.php";
?>
