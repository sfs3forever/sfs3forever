/**

$Id: sfs_script_value.js 5311 2009-01-10 08:11:55Z hami $
取代 js_value.js

LogicalValue:用于判斷對象的值是否符合條件，現已提供的選擇有：
integer：整數，可判斷正整數和負整數
number ：浮點數，同樣可判別正負數
date ：日期型，可支援以自定分隔符號的日期格式，預設是以'-'為分隔符號
string ：判斷一個字串包括或不包括某些字串
回傳值：true或false

參數：
ObjStr ：傳值
ObjType：處理型態('integer','number','date','string'之一)

其他說明：
空值時，回傳錯誤訊息。

Author:PPDJ

*/
function LogicalValue(ObjStr,ObjType)
{
var str='';
if ((ObjStr==null) || (ObjStr=='') || ObjType==null)
{
alert('函數 LogicalValue 缺少參數');
return false;
}
var obj = document.all(ObjStr);
if (obj.value=='') return false;
for (var i=2;i<arguments.length;i++)
{
if (str!='')
str += ',';
str += 'arguments['+i+']';
}
str=(str==''?'obj.value':'obj.value,'+str);
var temp=ObjType.toLowerCase();
if (temp=='integer')
{
return eval('IsInteger('+str+')');
}
else if (temp=='number')
{
return eval('IsNumber('+str+')');
}
else if (temp=='string')
{
return eval('SpecialString('+str+')');
}
else if (temp=='date')
{
return eval('IsDate('+str+')');
}
else if (temp=='twToDate')
{
return eval('twToDate('+str+')');
}
else
{
alert('"'+temp+'"類型在現在版本中未提供');
return false;
}
}

/**
IsInteger: 用于判斷一個數字型字符串是否為整形，
可判斷是否是正整數或負整數，返回值為true或false
string: 需要判斷的字串
sign: 若要判斷是正整數時使用，是正用'+'，負'-'，不用則表示不作判斷
Author: PPDJ
sample:
var a = '123';
if (IsInteger(a))
{
alert('a is a integer');
}
if (IsInteger(a,'+'))
{
alert(a is a positive integer);
}
if (IsInteger(a,'-'))
{
alert('a is a negative integer');
}
*/

function IsInteger(string ,sign)
{
var integer;
if ((sign!=null) && (sign!='-') && (sign!='+'))
{
alert('IsInter(string,sign)的參數出錯：\nsign為null或"-"或"+"');
return false;
}
integer = parseInt(string);
if (isNaN(integer))
{
return false;
}
else if (integer.toString().length==string.length)
{
if ((sign==null) || (sign=='-' && integer<0) || (sign=='+' && integer>0))
{
return true;
}
else
return false;
}
else
return false;
}

/**
twToDate: 將民國日期轉為西元日期
參數：
DateString： 需要判斷的字串
Dilimeter ： 日期的分隔符號，預設值為'-'
Author: hami
*/

function twToDate(DateString,Dilimeter)
{
if (DateString==null) return false;
if (Dilimeter=='' || Dilimeter==null)
Dilimeter = '-';
var tempArray;
var tempa=0;	
var ttt ;
tempArray = DateString.split(Dilimeter);
tempa = parseInt(tempArray[0])+1911;	
ttt = tempa.toString();
ttt = ttt+Dilimeter+tempArray[1]+Dilimeter+tempArray[2];	
return  ttt;	
}

/*
返回值：
true或false

參數：
DateString： 需要判斷的字串
Dilimeter ： 日期的分隔符號，預設值為'-'
Author: 


/**
IsDate: 用于判斷一個字串是否是日期格式的字串

返回值：
true或false

參數：
DateString： 需要判斷的字串
Dilimeter ： 日期的分隔符號，預設值為'-'
Author: PPDJ 


sample:
var date = '1999-1-2';
if (IsDate(date))
{
alert('You see, the default separator is "-");
}
date = '1999/1/2";
if (IsDate(date,'/'))
{
alert('The date\'s separator is "/");
}
*/

function IsDate(DateString , Dilimeter)
{
if (DateString==null) return false;
if (Dilimeter=='' || Dilimeter==null)
Dilimeter = '-';
var tempy='';
var tempm='';
var tempd='';
var mm=0;
var tempArray;
if (DateString.length<8 && DateString.length>10)
return false; 
tempArray = DateString.split(Dilimeter);
if (tempArray.length!=3)
return false;
if (tempArray[0].length==4)
{
tempy = tempArray[0];
tempd = tempArray[2];
}
else
{
tempy = tempArray[2];
tempd = tempArray[1];
}
tempm = tempArray[1];
if((tempm.length==2)&&(tempm.substring(0,1)=='0'))
tempm = tempm.substring(2,1);
if((tempd.length==2)&& (tempd.substring(0,1)=='0'))
tempd = tempd.substring(2,1);
var tDateString = tempy + '/'+tempm.toString() + '/'+tempd.toString()+' 8:0:0';//加八小?是因?我??于?八?
var tempDate = new Date(tDateString);
if (isNaN(tempDate))
return false;
if (((tempDate.getUTCFullYear()).toString()==tempy) && (tempDate.getMonth()==parseInt(tempm)-1) && (tempDate.getDate()==parseInt(tempd)))
{
return true;
}
else
{
return false;
}
}


/**
IsNumber: 用于判斷一個數字型字串是否數字值型，
還可判斷是否是正或負，返回值為true或false
string: 需要判斷的字符串
sign: 若要判斷是正整數時使用，是正用'+'，負'-'，不用則表示不作判斷
Author: PPDJ
sample:
var a = '123';
if (IsNumber(a))
{
alert('a is a number');
}
if (IsNumber(a,'+'))
{
alert(a is a positive number);
}
if (IsNumber(a,'-'))
{
alert('a is a negative number');
}
*/

function IsNumber(string,sign)
{
var number;
if (string==null) return false;
if ((sign!=null) && (sign!='-') && (sign!='+'))
{
alert('IsNumber(string,sign)的參數出錯：\nsign為null或"-"或"+"');
return false;
}
number = new Number(string);
if (isNaN(number))
{
return false;
}
else if ((sign==null) || (sign=='-' && number<0) || (sign=='+' && number>0))
{
return true;
}
else
return false;
}



/**
SpecialString: 用于判斷一個字符串是否含有或不含有某些字符

返回值：
true或false

參數：
string ： 需要判斷的字串
compare ： 比較的字符(基準字串)
BelongOrNot： true或false，"true"表示string的每一個字串都包含在compare中，
"false"表示string的每一個字符都不包含在compare中

Author: PPDJ
sample1:
var str = '123G';
if (SpecialString(str,'1234567890'))
{
alert('Yes, All the letter of the string in \'1234567890\'');
}
else
{
alert('No, one or more letters of the string not in \'1234567890\'');
}
如果執行的是else部分
sample2:
var password = '1234';
if (!SpecialString(password,'\'"@#$%',false))
{
alert('Yes, The password is correct.');
}
else
{
alert('No, The password is contain one or more letters of \'"@#$%\'');
}
如果執行的是else部分
*/
function SpecialString(string,compare,BelongOrNot)
{
if ((string==null) || (compare==null) || ((BelongOrNot!=null) && (BelongOrNot!=true) && (BelongOrNot!=false)))
{
alert('function SpecialString(string,compare,BelongOrNot)????');
return false;
}
if (BelongOrNot==null || BelongOrNot==true)
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))==-1)
return false
}
return true;
}
else
{
for (var i=0;i<string.length;i++)
{
if (compare.indexOf(string.charAt(i))!=-1)
return false
}
return true;
}
}
function checkok()
{
	var OK=true;	
	var chk_date='';	
	chk_date = twToDate(document.myform.tempbirthday.value,'-');
	alert(chk_date);
	if(IsDate(chk_date))
	{
		document.myform.birthday.value = chk_date;		
	}
	else
	{
		alert(document.myform.tempbirthday.value + '\n 不是正確的日期');
		OK=false;
	}	
	return OK
}

function setfocus(element) {
	element.focus();
 return;
}
