<?php
/*
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
 */
if (!defined('IN_CKFINDER')) exit;

/**
 * @package CKFinder
 * @subpackage Utils
 * @copyright CKSource - Frederico Knabben
 */

/**
 * @package CKFinder
 * @subpackage Utils
 * @copyright CKSource - Frederico Knabben
 */
class CKFinder_Connector_Utils_FileSystem
{
    /**
     * @param string $path
     * @return string
     */
    private function trimPathTrailingSlashes($path)
    {
        return rtrim($path, DIRECTORY_SEPARATOR . '/\\');
    }

    /**
     * This function behaves similar to System.IO.Path.Combine in C#, the only diffrenece is that it also accepts null values and treat them as empty string
     *
     * @static
     * @access public
     * @param string $path1 first path
     * @param string $path2 scecond path
     * @return string
     */
    public static function combinePaths($path1, $path2)
    {
        if (is_null($path1))  {
            $path1 = "";
        }
        if (is_null($path2))  {
            $path2 = "";
        }
        if (!strlen($path2)) {
            if (strlen($path1)) {
                $_lastCharP1 = substr($path1, -1, 1);
                if ($_lastCharP1 != "/" && $_lastCharP1 != "\\") {
                    $path1 .= '/';
                }
            }
        }
        else {
            $_firstCharP2 = substr($path2, 0, 1);
            if (strlen($path1)) {
                if (strpos($path2, $path1)===0) {
                    return $path2;
                }
                $_lastCharP1 = substr($path1, -1, 1);
                if ($_lastCharP1 != "/" && $_lastCharP1 != "\\" && $_firstCharP2 != "/" && $_firstCharP2 != "\\") {
                    $path1 .= '/';
                }
            }
            else {
                return $path2;
            }
        }
        return $path1 . $path2;
    }

    /**
     * Check whether $fileName is a valid file name, return true on success
     *
     * @static
     * @access public
     * @param string $fileName
     * @return boolean
     */
    public static function checkFileName($fileName)
    {
        $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");

        if (is_null($fileName) || !strlen($fileName) || substr($fileName,-1,1)=="." || false!==strpos($fileName, "..")) {
            return false;
        }

        if (preg_match(CKFINDER_REGEX_INVALID_FILE, $fileName)) {
            return false;
        }

        if ($_config->getDisallowUnsafeCharacters()) {
            if (strpos($fileName, ";") !== false) {
                return false;
            }
        }

        return true;
    }

    /**
     * Check whether $folderName is a valid folder name, return true on success
     *
     * @static
     * @access public
     * @param string $folderName
     * @return boolean
     */
    public static function checkFolderName($folderName)
    {
        $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");

        if ($_config->getDisallowUnsafeCharacters()) {
            if (strpos($folderName, ".") !== false) {
                return false;
            }
        }

        return CKFinder_Connector_Utils_FileSystem::checkFileName($folderName);
    }

    /**
     * Check whether $path contains valid folders names
     *
     * @static
     * @access public
     * @param string $path
     */
    public static function checkFolderPath($path){
      $path = substr($path,strpos($path,'/')+1);
      $path = explode('/',trim($path,'/'));
        foreach ( $path as $dir ){
          if ( !empty($dir) && !CKFinder_Connector_Utils_FileSystem::checkFolderName($dir) ){
            return false;
          }
        }

        return true;
    }

    /**
     * Unlink file/folder
     *
     * @static
     * @access public
     * @param string $path
     * @return boolean
     */
    public static function unlink($path)
    {
        /*    make sure the path exists    */
        if(!file_exists($path)) {
            return false;
        }

        /*    If it is a file or link, just delete it    */
        if(is_file($path) || is_link($path)) {
            return @unlink($path);
        }

        /*    Scan the dir and recursively unlink    */
        $files = scandir($path);
        if ($files) {
            foreach($files as $filename)
            {
                if ($filename == '.' || $filename == '..') {
                    continue;
                }
                $file = str_replace('//','/',$path.'/'.$filename);
                CKFinder_Connector_Utils_FileSystem::unlink($file);
            }
        }

        /*    Remove the parent dir    */
        if(!@rmdir($path)) {
            return false;
        }

        return true;
    }

    /**
     * Return file name without extension
     *
     * @static
     * @access public
     * @param string $fileName
     * @param boolean $shortExtensionMode If set to false, extension is everything after a first dot
     * @return string
     */
    public static function getFileNameWithoutExtension($fileName, $shortExtensionMode = TRUE)
    {
        $dotPos = $shortExtensionMode ? strrpos( $fileName, '.' ) : strpos( $fileName, '.' );
        if (false === $dotPos) {
            return $fileName;
        }

        return substr($fileName, 0, $dotPos);
    }

    /**
     * Get file extension
     *
     * @static
     * @access public
     * @param string $fileName
     * @param boolean $shortExtensionMode If set to false, extension is everything after a first dot
     * @return string
     */
    public static function getExtension( $fileName, $shortExtensionMode = TRUE )
    {
        $dotPos = $shortExtensionMode ? strrpos( $fileName, '.' ) : strpos( $fileName, '.' );
        if (false === $dotPos) {
            return "";
        }

        return substr( $fileName, $dotPos + 1 );
    }

    /**
	 * Read file, split it into small chunks and send it to the browser
	 *
     * @static
     * @access public
	 * @param string $filename
	 * @return boolean
	 */
    public static function readfileChunked($filename)
    {
        $chunksize = 1024 * 10; // how many bytes per chunk

        $handle = fopen($filename, 'rb');
        if ($handle === false) {
            return false;
        }
        while (!feof($handle)) {
            echo fread($handle, $chunksize);
            @ob_flush();
            flush();
            @set_time_limit(8);
        }
        fclose($handle);
        return true;
    }

    /**
    * Replace accented UTF-8 characters by unaccented ASCII-7 "equivalents".
    * The purpose of this function is to replace characters commonly found in Latin
    * alphabets with something more or less equivalent from the ASCII range. This can
    * be useful for converting a UTF-8 to something ready for a filename, for example.
    * Following the use of this function, you would probably also pass the string
    * through utf8_strip_non_ascii to clean out any other non-ASCII chars
    *
    * For a more complete implementation of transliteration, see the utf8_to_ascii package
    * available from the phputf8 project downloads:
    * http://prdownloads.sourceforge.net/phputf8
    *
    * @param string UTF-8 string
    * @param string UTF-8 with accented characters replaced by ASCII chars
    * @return string accented chars replaced with ascii equivalents
    * @author Andreas Gohr <andi@splitbrain.org>
    * @see http://sourceforge.net/projects/phputf8/
    */
    public static function convertToAscii($str)
    {
        static $UTF8_LOWER_ACCENTS = NULL;
        static $UTF8_UPPER_ACCENTS = NULL;

        if ( is_null($UTF8_LOWER_ACCENTS) ) {
            $UTF8_LOWER_ACCENTS = array(
  '?' => 'a', '繫' => 'o', '?' => 'd', '廎? => 'f', '禱' => 'e', '禳' => 's', '' => 'o',
  '?' => 'ss', '?' => 'a', '?' => 'r', '?' => 't', '?' => 'n', '?' => 'a', '譟' => 'k',
  '?' => 's', '廙? => 'y', '?' => 'n', '贍' => 'l', '藹' => 'h', '廜? => 'p', '籀' => 'o',
  '繳' => 'u', '?' => 'e', '矇' => 'e', '癟' => 'c', '廕? => 'w', '?' => 'c', '繭' => 'o',
  '廜? => 's', '繪' => 'o', '耀' => 'g', '襲' => 't', '?' => 's', '?' => 'e', '?' => 'c',
  '?' => 's', '簾' => 'i', '鑄' => 'u', '?' => 'c', '?' => 'e', '霾' => 'w', '廜? => 't',
  '贖' => 'u', '?' => 'c', '繹' => 'oe', '癡' => 'e', '韁' => 'y', '?' => 'a', '?' => 'l',
  '鑒' => 'u', '轡' => 'u', '?' => 's', '?' => 'g', '躁' => 'l', '?' => 'f', '鱉' => 'z',
  '廕? => 'w', '廎? => 'b', '疇' => 'a', '穫' => 'i', '簿' => 'i', '廎? => 'd', '聽' => 't',
  '?' => 'r', '瓣' => 'ae', '穩' => 'i', '?' => 'r', '礙' => 'e', '羹' => 'ue', '簷' => 'o',
  '?' => 'e', '簽' => 'n', '?' => 'n', '艦' => 'h', '?' => 'g', '?' => 'd', '警' => 'j',
  '藩' => 'y', '觼' => 'u', '躑' => 'u', '' => 'u', '籟' => 't', '羸' => 'y', '?' => 'o',
  '璽' => 'a', '躂' => 'l', '廕? => 'w', '髒' => 'z', '蘋' => 'i', '瓊' => 'a', '纂' => 'g',
  '廜? => 'm', '?' => 'o', '藺' => 'i', '羅' => 'u', '蠕' => 'i', '驕' => 'z', '獺' => 'a',
  '羶' => 'u', '臘' => 'th', '簸' => 'dh', '疆' => 'ae', '繕' => 'u', '?' => 'e',
            );
        }

        $str = str_replace(
                array_keys($UTF8_LOWER_ACCENTS),
                array_values($UTF8_LOWER_ACCENTS),
                $str
            );

        if ( is_null($UTF8_UPPER_ACCENTS) ) {
            $UTF8_UPPER_ACCENTS = array(
  '?' => 'A', '?' => 'O', '?' => 'D', '廎? => 'F', '?' => 'E', '?' => 'S', '?' => 'O',
  '?' => 'A', '?' => 'R', '?' => 'T', '?' => 'N', '?' => 'A', '譯' => 'K',
  '?' => 'S', '廙? => 'Y', '?' => 'N', '贏' => 'L', '藻' => 'H', '廜? => 'P', '?' => 'O',
  '?' => 'U', '?' => 'E', '?' => 'E', '?' => 'C', '廕' => 'W', '?' => 'C', '?' => 'O',
  '廜? => 'S', '?' => 'O', '罌' => 'G', '臟' => 'T', '?' => 'S', '?' => 'E', '?' => 'C',
  '?' => 'S', '?' => 'I', '酈' => 'U', '?' => 'C', '?' => 'E', '霽' => 'W', '廜? => 'T',
  '讀' => 'U', '?' => 'C', '?' => 'Oe', '?' => 'E', '韃' => 'Y', '?' => 'A', '?' => 'L',
  '鑑' => 'U', '躓' => 'U', '?' => 'S', '?' => 'G', '躉' => 'L', '?' => 'F', '鬚' => 'Z',
  '廕? => 'W', '廎? => 'B', '?' => 'A', '?' => 'I', '?' => 'I', '廎? => 'D', '聾' => 'T',
  '?' => 'R', '?' => 'Ae', '?' => 'I', '?' => 'R', '?' => 'E', '?' => 'Ue', '?' => 'O',
  '?' => 'E', '?' => 'N', '?' => 'N', '臚' => 'H', '?' => 'G', '?' => 'D', '譬' => 'J',
  '顫' => 'Y', '襯' => 'U', '贗' => 'U', '' => 'U', '籠' => 'T', '?' => 'Y', '?' => 'O',
  '?' => 'A', '躅' => 'L', '廕? => 'W', '驍' => 'Z', '蘆' => 'I', '?' => 'A', '?' => 'G',
  '廜' => 'M', '?' => 'O', '蘑' => 'I', '?' => 'U', '蠔' => 'I', '饕' => 'Z', '?' => 'A',
  '?' => 'U', '?' => 'Th', '?' => 'Dh', '?' => 'Ae', '?' => 'E',
            );
        }
        $str = str_replace(
                array_keys($UTF8_UPPER_ACCENTS),
                array_values($UTF8_UPPER_ACCENTS),
                $str
            );
        return $str;
    }

    /**
     * Secure file name from unsafe characters
     *
     * @param string $fileName
     * @access public
     * @static
     * @return string $fileName
     */
    public static function secureFileName($fileName)
    {
      $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
      $fileName = str_replace(array(":", "*", "?", "|", "/"), "_", $fileName);
      if ( $_config->getDisallowUnsafeCharacters() )
      {
        $fileName = str_replace(";", "_", $fileName);
      }
      if ($_config->forceAscii())
      {
        $fileName = CKFinder_Connector_Utils_FileSystem::convertToAscii($fileName);
      }
      return $fileName;
    }

    /**
     * Convert file name from UTF-8 to system encoding
     *
     * @static
     * @access public
     * @param string $fileName
     * @return string
     */
    public static function convertToFilesystemEncoding($fileName)
    {
        $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
        $encoding = $_config->getFilesystemEncoding();
        if (is_null($encoding) || strcasecmp($encoding, "UTF-8") == 0 || strcasecmp($encoding, "UTF8") == 0) {
            return $fileName;
        }

        if (!function_exists("iconv")) {
            if (strcasecmp($encoding, "ISO-8859-1") == 0 || strcasecmp($encoding, "ISO8859-1") == 0 || strcasecmp($encoding, "Latin1") == 0) {
                return str_replace("\0", "_", utf8_decode($fileName));
            } else if (function_exists('mb_convert_encoding')) {
                /**
                 * @todo check whether charset is supported - mb_list_encodings
                 */
                $encoded = @mb_convert_encoding($fileName, $encoding, 'UTF-8');
                if (@mb_strlen($fileName, "UTF-8") != @mb_strlen($encoded, $encoding)) {
                    return str_replace("\0", "_", preg_replace("/[^[:ascii:]]/u","_",$fileName));
                }
                else {
                    return str_replace("\0", "_", $encoded);
                }
            } else {
                return str_replace("\0", "_", preg_replace("/[^[:ascii:]]/u","_",$fileName));
            }
        }

        $converted = @iconv("UTF-8", $encoding . "//IGNORE//TRANSLIT", $fileName);
        if ($converted === false) {
            return str_replace("\0", "_", preg_replace("/[^[:ascii:]]/u","_",$fileName));
        }

        return $converted;
    }

    /**
     * Convert file name from system encoding into UTF-8
     *
     * @static
     * @access public
     * @param string $fileName
     * @return string
     */
    public static function convertToConnectorEncoding($fileName)
    {
        $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
        $encoding = $_config->getFilesystemEncoding();
        if (is_null($encoding) || strcasecmp($encoding, "UTF-8") == 0 || strcasecmp($encoding, "UTF8") == 0) {
            return $fileName;
        }

        if (!function_exists("iconv")) {
            if (strcasecmp($encoding, "ISO-8859-1") == 0 || strcasecmp($encoding, "ISO8859-1") == 0 || strcasecmp($encoding, "Latin1") == 0) {
                return utf8_encode($fileName);
            } else {
                return $fileName;
            }
        }

        $converted = @iconv($encoding, "UTF-8", $fileName);

        if ($converted === false) {
            return $fileName;
        }

        return $converted;
    }

    /**
     * Find document root
     *
     * @return string
     * @access public
     */
    public function getDocumentRootPath()
    {
        /**
         * The absolute pathname of the currently executing script.
         * Notatka: If a script is executed with the CLI, as a relative path, such as file.php or ../file.php,
         * $_SERVER['SCRIPT_FILENAME'] will contain the relative path specified by the user.
         */
        if (isset($_SERVER['SCRIPT_FILENAME'])) {
            $sRealPath = dirname($_SERVER['SCRIPT_FILENAME']);
        }
        else {
            /**
             * realpath ??Returns canonicalized absolute pathname
             */
            $sRealPath = realpath('.') ;
        }

        $sRealPath = $this->trimPathTrailingSlashes($sRealPath);

        /**
         * The filename of the currently executing script, relative to the document root.
         * For instance, $_SERVER['PHP_SELF'] in a script at the address http://example.com/test.php/foo.bar
         * would be /test.php/foo.bar.
         */
        $sSelfPath = dirname($_SERVER['PHP_SELF']);
        $sSelfPath = $this->trimPathTrailingSlashes($sSelfPath);

        return $this->trimPathTrailingSlashes(substr($sRealPath, 0, strlen($sRealPath) - strlen($sSelfPath)));
    }

    /**
     * Create directory recursively
     *
     * @access public
     * @static
     * @param string $dir
     * @return boolean
     */
    public static function createDirectoryRecursively($dir)
    {
        if (DIRECTORY_SEPARATOR === "\\") {
            $dir = str_replace("/", "\\", $dir);
        }
        else if (DIRECTORY_SEPARATOR === "/") {
            $dir = str_replace("\\", "/", $dir);
        }

        $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
        if ($perms = $_config->getChmodFolders()) {
            $oldUmask = umask(0);
            $bCreated = @mkdir($dir, $perms, true);
            umask($oldUmask);
        }
        else {
            $bCreated = @mkdir($dir, 0777, true);
        }

        return $bCreated;
    }

    /**
     * Detect HTML in the first KB to prevent against potential security issue with
     * IE/Safari/Opera file type auto detection bug.
     * Returns true if file contain insecure HTML code at the beginning.
     *
     * @static
     * @access public
     * @param string $filePath absolute path to file
     * @return boolean
    */
    public static function detectHtml($filePath)
    {
        $fp = @fopen($filePath, 'rb');
        if ( $fp === false || !flock( $fp, LOCK_SH ) ) {
            return -1 ;
        }
        $chunk = fread($fp, 1024);
        flock( $fp, LOCK_UN ) ;
        fclose($fp);

        $chunk = strtolower($chunk);

        if (!$chunk) {
            return false;
        }

        $chunk = trim($chunk);

        if (preg_match("/<!DOCTYPE\W*X?HTML/sim", $chunk)) {
            return true;
        }

        $tags = array('<body', '<head', '<html', '<img', '<pre', '<script', '<table', '<title');

        foreach( $tags as $tag ) {
            if(false !== strpos($chunk, $tag)) {
                return true ;
            }
        }

        //type = javascript
        if (preg_match('!type\s*=\s*[\'"]?\s*(?:\w*/)?(?:ecma|java)!sim', $chunk)) {
            return true ;
        }

        //href = javascript
        //src = javascript
        //data = javascript
        if (preg_match('!(?:href|src|data)\s*=\s*[\'"]?\s*(?:ecma|java)script:!sim',$chunk)) {
            return true ;
        }

        //url(javascript
        if (preg_match('!url\s*\(\s*[\'"]?\s*(?:ecma|java)script:!sim', $chunk)) {
            return true ;
        }

        return false ;
    }

    /**
     * Check file content.
     * Currently this function validates only image files.
     * Returns false if file is invalid.
     *
     * @static
     * @access public
     * @param string $filePath absolute path to file
     * @param string $extension file extension
     * @param integer $detectionLevel 0 = none, 1 = use getimagesize for images, 2 = use DetectHtml for images
     * @return boolean
    */
    public static function isImageValid($filePath, $extension)
    {
        if (!@is_readable($filePath)) {
            return -1;
        }

        $imageCheckExtensions = array('gif', 'jpeg', 'jpg', 'png', 'psd', 'bmp', 'tiff');

        // version_compare is available since PHP4 >= 4.0.7
        if ( function_exists( 'version_compare' ) ) {
            $sCurrentVersion = phpversion();
            if ( version_compare( $sCurrentVersion, "4.2.0" ) >= 0 ) {
                $imageCheckExtensions[] = "tiff";
                $imageCheckExtensions[] = "tif";
            }
            if ( version_compare( $sCurrentVersion, "4.3.0" ) >= 0 ) {
                $imageCheckExtensions[] = "swc";
            }
            if ( version_compare( $sCurrentVersion, "4.3.2" ) >= 0 ) {
                $imageCheckExtensions[] = "jpc";
                $imageCheckExtensions[] = "jp2";
                $imageCheckExtensions[] = "jpx";
                $imageCheckExtensions[] = "jb2";
                $imageCheckExtensions[] = "xbm";
                $imageCheckExtensions[] = "wbmp";
            }
        }

        if ( !in_array( $extension, $imageCheckExtensions ) ) {
            return true;
        }

        if ( @getimagesize( $filePath ) === false ) {
            return false ;
        }

        return true;
    }

    /**
     * Returns true if directory is not empty
     *
     * @access public
     * @static
     * @param string $clientPath client path (with trailing slash)
     * @param object $_resourceType resource type configuration
     * @return boolean
     */
    public static function hasChildren($clientPath, $_resourceType)
    {
        $serverPath = CKFinder_Connector_Utils_FileSystem::combinePaths($_resourceType->getDirectory(), $clientPath);

        if (!is_dir($serverPath) || (false === $fh = @opendir($serverPath))) {
            return false;
        }

        $hasChildren = false;
        while (false !== ($filename = readdir($fh))) {
            if ($filename == '.' || $filename == '..') {
                continue;
            } else if (is_dir($serverPath . $filename)) {
                //we have found valid directory
                $_config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
                $_acl = $_config->getAccessControlConfig();
                $_aclMask = $_acl->getComputedMask($_resourceType->getName(), $clientPath . $filename);
                if ( ($_aclMask & CKFINDER_CONNECTOR_ACL_FOLDER_VIEW) != CKFINDER_CONNECTOR_ACL_FOLDER_VIEW ) {
                    continue;
                }
                if ($_resourceType->checkIsHiddenFolder($filename)) {
                  continue;
                }

                $hasChildren = true;
                break;
            }
        }

        closedir($fh);

        return $hasChildren;
    }

    /**
     * Retruns temp directory
     *
     * @access public
     * @static
     * @return string
     */
    public static function getTmpDir()
    {
      $_config = & CKFinder_Connector_Core_Factory::getInstance("Core_Config");
      $tmpDir = $_config->getTempDirectory();
      if ( $tmpDir )
      {
        return $tmpDir;
      }
      if ( !function_exists('sys_get_temp_dir')) {
        function sys_get_temp_dir() {
          if( $temp=getenv('TMP') ){
            return $temp;
          }
          if( $temp=getenv('TEMP') ) {
            return $temp;
          }
          if( $temp=getenv('TMPDIR') ) {
            return $temp;
          }
          $temp = tempnam(__FILE__,'');
          if ( file_exists($temp) ){
            unlink($temp);
            return dirname($temp);
          }
          return null;
        }
      }
      return sys_get_temp_dir();
    }

    /**
     * Check if given directory is empty
     *
     * @param string $dirname
     * @access public
     * @static
     * @return bool
     */
    public static function isEmptyDir($dirname)
    {
      $files = scandir($dirname);
      if ( $files && count($files) > 2)
      {
        return false;
      }
      return true;
    }

    /**
     * Autorename file if previous name is already taken
     *
     * @param string $filePath
     * @param string $fileName
     * @param string $sFileNameOrginal
     */
    public static function autoRename( $filePath, $fileName )
    {
      $sFileNameOrginal = $fileName;
      $iCounter = 0;
      while (true)
      {
        $sFilePath = CKFinder_Connector_Utils_FileSystem::combinePaths($filePath, $fileName);
        if ( file_exists($sFilePath) ){
          $iCounter++;
          $fileName = CKFinder_Connector_Utils_FileSystem::getFileNameWithoutExtension($sFileNameOrginal, false) . "(" . $iCounter . ")" . "." .CKFinder_Connector_Utils_FileSystem::getExtension($sFileNameOrginal, false);
        }
        else
        {
          break;
        }
      }
      return $fileName;
    }

    /**
     * Send file to browser
     * Selects the method depending on the XSendfile setting
     * @param string $filePath
     */
    public static function sendFile( $filePath ){
      $config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
      if ( $config->getXSendfile() ){
        CKFinder_Connector_Utils_FileSystem::sendWithXSendfile($filePath);
      } else {
        CKFinder_Connector_Utils_FileSystem::readfileChunked($filePath);
      }
    }

    /**
     * Send files using X-Sendfile server module
     *
     * @param string $filePath
     */
    public static function sendWithXSendfile ( $filePath ){
      if ( stripos($_SERVER['SERVER_SOFTWARE'], 'nginx') !== FALSE ){
        $fallback = true;
        $config =& CKFinder_Connector_Core_Factory::getInstance("Core_Config");
        $XSendfileNginx = $config->getXSendfileNginx();
        foreach ( $XSendfileNginx as $location => $root){
          if ( false !== stripos($filePath , $root) ){
            $fallback = false;
            $filePath = str_ireplace($root,$location,$filePath);
            header("X-Accel-Redirect: ".$filePath); // Nginx
            break;
          }
        }
        // fallback to standar method
        if ( $fallback ){
          CKFinder_Connector_Utils_FileSystem::readfileChunked($filePath);
        }
      } elseif ( stripos($_SERVER['SERVER_SOFTWARE'], 'lighttpd/1.4') !== FALSE ){
        header("X-LIGHTTPD-send-file: ".$filePath); // Lighttpd v1.4
      } else {
        header("X-Sendfile: ".$filePath); // Apache, Lighttpd v1.5, Cherokee
      }
    }
}
