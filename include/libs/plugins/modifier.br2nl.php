<?php
/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */
//$Id: modifier.br2nl.php 5624 2009-09-03 04:01:19Z brucelyc $
/**
 * Smarty plugin
 *
 * Type:     modifier<br>
 * Name:     br2nl<br>
 * Date:     Sep 03, 2009
 * Purpose:  convert <<br>> to \r\n, \r or \n 
 * Input:<br>
 *         - contents = contents to replace
 *         - preceed_test = if true, includes preceeding break tags
 *           in replacement
 * Example:  {$text|br2nl}
 * @version  1.0
 * @author   brucelyc <brucelyc at seed dot net dot tw>
 * @param string
 * @return string
 */
function smarty_modifier_br2nl($string)
{
    return preg_replace('/<br\\s*?\/??>/i', '', $string);
}

/* vim: set expandtab: */

?>
