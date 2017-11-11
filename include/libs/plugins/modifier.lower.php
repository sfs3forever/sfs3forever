<?php
/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */
//$Id: modifier.lower.php 6117 2010-09-10 15:13:53Z brucelyc $
/**
 * Smarty lower modifier plugin
 *
 * Type:     modifier<br>
 * Name:     lower<br>
 * Purpose:  convert string to lowercase
 * @link http://smarty.php.net/manual/en/language.modifier.lower.php
 *          lower (Smarty online manual)
 * @author   Monte Ohrt <monte at ohrt dot com>
 * @param string
 * @return string
 */
function smarty_modifier_lower($string)
{
    return strtolower($string);
}

?>
