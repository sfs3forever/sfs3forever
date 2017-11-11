<?php

// $Id: help.php 5310 2009-01-10 07:57:56Z hami $

include "config.php";

//sfs_check();
   
  head("輔助說明") ;
  print_menu($school_menu_p);

include "help/readme.htm"
?>


<?foot(); ?>