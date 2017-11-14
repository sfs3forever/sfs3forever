<?php
/**
 * PDO SINGLETON CLASS, ADODB ENABLED
 *  
 * @author Tony Landis
 * @link http://www.tonylandis.com
 * @license Use how you like it, just please don't remove or alter this PHPDoc
 */ 
class sdb 
{  
    /**
     * The singleton instance 
     */
    static private $PDOInstance;
    public $debug=false;
     
  	/**
  	 * Creates a PDO instance representing a connection to a database and makes the instance available as a singleton
  	 * 
  	 * @param string $dsn The full DSN, eg: mysql:host=localhost;dbname=testdb
  	 * @param string $username The user name for the DSN string. This parameter is optional for some PDO drivers.
  	 * @param string $password The password for the DSN string. This parameter is optional for some PDO drivers.
  	 * @param array $driver_options A key=>value array of driver-specific connection options
  	 * 
  	 * @return PDO
  	 */
    public function __construct($dsn, $username=false, $password=false, $driver_options=array()) 
    {
        if(!self::$PDOInstance) { 
	        try {
			   self::$PDOInstance = new PDO($dsn, $username, $password, $driver_options);
			   self::debug(false);
			} catch (PDOException $e) { 
			   die("PDO CONNECTION ERROR: " . $e->getMessage() . "<br/>");
			}
    	}
      	return self::$PDOInstance;    	    	
    }
	 
  	/**
  	 * Initiates a transaction
  	 *
  	 * @return bool
  	 */
	public static function beginTransaction() {
		return self::$PDOInstance->beginTransaction();	  
	}
        
	/**
	 * Commits a transaction
	 *
	 * @return bool
	 */
	public static function commit() {
		return self::$PDOInstance->commit();
	}
	
	/**
	 * Do debugging?
	 *
	 * @param bool $debugging 
	 */
	public static function debug($debug) {
		self::$PDOInstance->debug = (bool) $debug;
		if(self::$PDOInstance->debug) {
			self::$PDOInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} else {
			self::$PDOInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
		}
	}
	
	/**
	 * Fetch the SQLSTATE associated with the last operation on the database handle
	 * 
	 * @return string 
	 */
    public static function errorCode() {
    	return self::$PDOInstance->errorCode();
    }
    
    /**
     * Fetch extended error information associated with the last operation on the database handle
     *
     * @return array
     */
    public static function errorInfo() {
    	return self::$PDOInstance->errorInfo();
    }
    
    /**
     * Execute an SQL statement and return the number of affected rows
     *
     * @param string $statement
     */
    public static function exec($statement) {   
    	try {
			if(self::$PDOInstance->debug) echo "$statement<hr>";
			return self::$PDOInstance->exec($statement);
		} catch(PDOException $e) { 
			die("DB Exception: ".$e->getMessage()."<hr>"); 
		}  		
    }
    
    /**
     * Retrieve a database connection attribute
     *
     * @param int $attribute
     * @return mixed
     */
    public static function getAttribute($attribute) {
    	return self::$PDOInstance->getAttribute($attribute);
    }

    /**
     * Return an array of available PDO drivers
     *
     * @return array
     */
    public static function getAvailableDrivers(){
    	return Self::$PDOInstance->getAvailableDrivers();
    }
    
    /**
     * Returns the ID of the last inserted row or sequence value
     *
     * @param string $name Name of the sequence object from which the ID should be returned.
     * @return string
     */
	public static function lastInsertId($name=false) {
		return self::$PDOInstance->lastInsertId($name);
	}
        
   	/**
     * Prepares a statement for execution and returns a statement object 
     *
     * @param string $statement A valid SQL statement for the target database server
     * @param array $driver_options Array of one or more key=>value pairs to set attribute values for the PDOStatement obj returned  
     * @return PDOStatement
     */
    public static function prepare ($statement, $driver_options=false) {
    	if(!$driver_options) $driver_options=array();
    	return self::$PDOInstance->prepare($statement, $driver_options);
    }
    
    /**
     * Executes an SQL statement, returning a result set as a PDOStatement object
     *
     * @param string $statement
     * @return PDOStatement
     */
    public static function query($statement) { 
    	try {
			if(self::$PDOInstance->debug) echo "$statement<hr>";
			return self::$PDOInstance->query($statement);
		} catch(PDOException $e) { 
			die("DB Exception: ".$e->getMessage()."<hr>"); 
		}  
    }
    
    /**
     * Execute query and return all rows in assoc array
     *
     * @param string $statement
     * @return array
     */
    public static function queryFetchAllAssoc($statement) {
    	return self::$PDOInstance->query($statement)->fetchAll(PDO::FETCH_ASSOC);
    }
    
    /**
     * Execute query and return one row in assoc array
     *
     * @param string $statement
     * @return array
     */
    public static function queryFetchRowAssoc($statement) {
    	return self::$PDOInstance->query($statement)->fetch(PDO::FETCH_ASSOC);    	
    }
    
    /**
     * Execute query and select one column only 
     *
     * @param string $statement
     * @return mixed
     */
    public static function queryFetchColAssoc($statement) {
    	return self::$PDOInstance->query($statement)->fetchColumn();    	
    }
    
    /**
     * Quotes a string for use in a query
     *
     * @param string $input
     * @param int $parameter_type
     * @return string
     */
    public static function quote ($input, $parameter_type=0) {
    	return self::$PDOInstance->quote($input, $parameter_type);
    }
    
    /**
     * Rolls back a transaction
     *
     * @return bool
     */
    public static function rollBack() {
    	return self::$PDOInstance->rollBack();
    }      
    
    /**
     * Set an attribute
     *
     * @param int $attribute
     * @param mixed $value
     * @return bool
     */
    public static function setAttribute($attribute, $value  ) {
    	return self::$PDOInstance->setAttribute($attribute, $value);
    }

    /**
     * Do not call this ever! Only exists for adodb backwards compatibility
     *
     * @todo Refactor existing code that calls this
     */
    public static function GetOne($statement) { return self::queryFetchColAssoc($statement); }
    
    /**
     * Do not call this ever! Only exists for adodb backwards compatibility
     * 
     * @todo Refactor existing code that calls this
     */
    public static function qstr($string) { return self::quote($string); } 
    
    /**
     * Do not call this ever! Only exists for adodb backwards compatibility
     *
     * @todo Refactor existing code that calls this
     * 
     * @return ADODOB_PDOStatement
     */
    public static function Execute($statement) {  
    	if(!$stmt = self::query($statement)) return false;
    	return new ADODOB_PDOStatement($stmt);
    }    
}

/**
 * Class for backwards ADODB RecordSet compatibility
 *
 */
class ADODOB_PDOStatement implements Iterator
{
	/**
	 * The PDOStatement object
	 *
	 * @var PDOStatement
	 */
	private $handle;
	public $fields;
  private $row=0;	
  public $EOF=true;
	
	/* init query */
	public function __construct($handle) { 		
		$this->handle =& $handle;		
    $this->fields =& $this->handle->fetch(PDO::FETCH_ASSOC);
    if($this->fields) $this->EOF=false;
	}
	
	/* get record count */
	public function RecordCount() {
		return $this->handle->rowCount();
	}
	  
	function MoveNext() {
		if (@$this->fields =& $this->handle->fetch(PDO::FETCH_ASSOC)) {
			$this->row += 1;
			return $this->fields;
    } 
    $this->EOF=true;
		return false;		
	} 

	public function & current(){
		return $this->fields;
	}
	
	public function next() {
		$this->fields = $this->handle->fetch(PDO::FETCH_ASSOC);
	}
	
	public function key(){
		return $this->row;
	}
	
	public function valid(){
		return ($this->fields === false ? false : true);
	}
	
	public function rewind(){
		return true;
	}
	
	public function _close() {
		$this->handle->closeCursor();
	} 
}
?>