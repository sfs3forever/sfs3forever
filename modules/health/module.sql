# $Id: module.sql 8539 2015-09-23 03:26:41Z chiming $

#
# 資料表格式： `BMI`
#

CREATE TABLE BMI (
  `year` int(2) unsigned NOT NULL default '0',
  `sex` int(1) unsigned NOT NULL default '0',
  `range` int(1) unsigned NOT NULL default '0',
  `value` float NOT NULL default '0',
  PRIMARY KEY (`year`,`sex`,`range`)
) ENGINE=MyISAM;

INSERT INTO BMI VALUES ( 2,1,1,15.2);
INSERT INTO BMI VALUES ( 2,1,2,17.7);
INSERT INTO BMI VALUES ( 2,1,3,19.0);
INSERT INTO BMI VALUES ( 3,1,1,14.8);
INSERT INTO BMI VALUES ( 3,1,2,17.7);
INSERT INTO BMI VALUES ( 3,1,3,19.1);
INSERT INTO BMI VALUES ( 4,1,1,14.4);
INSERT INTO BMI VALUES ( 4,1,2,17.7);
INSERT INTO BMI VALUES ( 4,1,3,19.3);
INSERT INTO BMI VALUES ( 5,1,1,14.0);
INSERT INTO BMI VALUES ( 5,1,2,17.7);
INSERT INTO BMI VALUES ( 5,1,3,19.4);
INSERT INTO BMI VALUES ( 6,1,1,13.9);
INSERT INTO BMI VALUES ( 6,1,2,17.9);
INSERT INTO BMI VALUES ( 6,1,3,19.7);
INSERT INTO BMI VALUES ( 7,1,1,14.7);
INSERT INTO BMI VALUES ( 7,1,2,18.6);
INSERT INTO BMI VALUES ( 7,1,3,21.2);
INSERT INTO BMI VALUES ( 8,1,1,15.0);
INSERT INTO BMI VALUES ( 8,1,2,19.3);
INSERT INTO BMI VALUES ( 8,1,3,22.0);
INSERT INTO BMI VALUES ( 9,1,1,15.2);
INSERT INTO BMI VALUES ( 9,1,2,19.7);
INSERT INTO BMI VALUES ( 9,1,3,22.5);
INSERT INTO BMI VALUES (10,1,1,15.4);
INSERT INTO BMI VALUES (10,1,2,20.3);
INSERT INTO BMI VALUES (10,1,3,22.9);
INSERT INTO BMI VALUES (11,1,1,15.8);
INSERT INTO BMI VALUES (11,1,2,21.0);
INSERT INTO BMI VALUES (11,1,3,23.5);
INSERT INTO BMI VALUES (12,1,1,16.4);
INSERT INTO BMI VALUES (12,1,2,21.5);
INSERT INTO BMI VALUES (12,1,3,24.2);
INSERT INTO BMI VALUES (13,1,1,17.0);
INSERT INTO BMI VALUES (13,1,2,22.2);
INSERT INTO BMI VALUES (13,1,3,24.8);
INSERT INTO BMI VALUES (14,1,1,17.6);
INSERT INTO BMI VALUES (14,1,2,22.7);
INSERT INTO BMI VALUES (14,1,3,25.2);
INSERT INTO BMI VALUES (15,1,1,18.2);
INSERT INTO BMI VALUES (15,1,2,23.1);
INSERT INTO BMI VALUES (15,1,3,25.5);
INSERT INTO BMI VALUES (16,1,1,18.6);
INSERT INTO BMI VALUES (16,1,2,23.4);
INSERT INTO BMI VALUES (16,1,3,25.6);
INSERT INTO BMI VALUES (17,1,1,19.0);
INSERT INTO BMI VALUES (17,1,2,23.6);
INSERT INTO BMI VALUES (17,1,3,25.6);
INSERT INTO BMI VALUES (18,1,1,19.2);
INSERT INTO BMI VALUES (18,1,2,23.7);
INSERT INTO BMI VALUES (18,1,3,25.6);
INSERT INTO BMI VALUES ( 2,2,1,14.9);
INSERT INTO BMI VALUES ( 2,2,2,17.3);
INSERT INTO BMI VALUES ( 2,2,3,18.3);
INSERT INTO BMI VALUES ( 3,2,1,14.5);
INSERT INTO BMI VALUES ( 3,2,2,17.2);
INSERT INTO BMI VALUES ( 3,2,3,18.5);
INSERT INTO BMI VALUES ( 4,2,1,14.2);
INSERT INTO BMI VALUES ( 4,2,2,17.1);
INSERT INTO BMI VALUES ( 4,2,3,18.6);
INSERT INTO BMI VALUES ( 5,2,1,13.9);
INSERT INTO BMI VALUES ( 5,2,2,17.1);
INSERT INTO BMI VALUES ( 5,2,3,18.9);
INSERT INTO BMI VALUES ( 6,2,1,13.6);
INSERT INTO BMI VALUES ( 6,2,2,17.2);
INSERT INTO BMI VALUES ( 6,2,3,19.1);
INSERT INTO BMI VALUES ( 7,2,1,14.4);
INSERT INTO BMI VALUES ( 7,2,2,18.0);
INSERT INTO BMI VALUES ( 7,2,3,20.3);
INSERT INTO BMI VALUES ( 8,2,1,14.6);
INSERT INTO BMI VALUES ( 8,2,2,18.8);
INSERT INTO BMI VALUES ( 8,2,3,21.0);
INSERT INTO BMI VALUES ( 9,2,1,14.9);
INSERT INTO BMI VALUES ( 9,2,2,19.3);
INSERT INTO BMI VALUES ( 9,2,3,21.6);
INSERT INTO BMI VALUES (10,2,1,15.2);
INSERT INTO BMI VALUES (10,2,2,20.1);
INSERT INTO BMI VALUES (10,2,3,22.3);
INSERT INTO BMI VALUES (11,2,1,15.8);
INSERT INTO BMI VALUES (11,2,2,20.9);
INSERT INTO BMI VALUES (11,2,3,23.1);
INSERT INTO BMI VALUES (12,2,1,16.4);
INSERT INTO BMI VALUES (12,2,2,21.6);
INSERT INTO BMI VALUES (12,2,3,23.9);
INSERT INTO BMI VALUES (13,2,1,17.0);
INSERT INTO BMI VALUES (13,2,2,22.2);
INSERT INTO BMI VALUES (13,2,3,24.6);
INSERT INTO BMI VALUES (14,2,1,17.6);
INSERT INTO BMI VALUES (14,2,2,22.7);
INSERT INTO BMI VALUES (14,2,3,25.1);
INSERT INTO BMI VALUES (15,2,1,18.0);
INSERT INTO BMI VALUES (15,2,2,22.7);
INSERT INTO BMI VALUES (15,2,3,25.3);
INSERT INTO BMI VALUES (16,2,1,18.2);
INSERT INTO BMI VALUES (16,2,2,22.7);
INSERT INTO BMI VALUES (16,2,3,25.3);
INSERT INTO BMI VALUES (17,2,1,18.3);
INSERT INTO BMI VALUES (17,2,2,22.7);
INSERT INTO BMI VALUES (17,2,3,25.3);
INSERT INTO BMI VALUES (18,2,1,18.3);
INSERT INTO BMI VALUES (18,2,2,22.7);
INSERT INTO BMI VALUES (18,2,3,25.3);

#
# 資料表格式： `GHD`
#

CREATE TABLE GHD (
  `year` int(2) unsigned NOT NULL default '0',
  `sex` int(1) unsigned NOT NULL default '0',
  `value` float NOT NULL default '0',
  PRIMARY KEY (`year`,`sex`)
) ENGINE=MyISAM;

INSERT INTO GHD VALUES (5,1,103);
INSERT INTO GHD VALUES (6,1,106.7);
INSERT INTO GHD VALUES (7,1,110.5);
INSERT INTO GHD VALUES (8,1,116.4);
INSERT INTO GHD VALUES (9,1,120.3);
INSERT INTO GHD VALUES (10,1,125.5);
INSERT INTO GHD VALUES (11,1,129.6);
INSERT INTO GHD VALUES (12,1,134.4);
INSERT INTO GHD VALUES (13,1,140.9);
INSERT INTO GHD VALUES (14,1,148.7);
INSERT INTO GHD VALUES (15,1,154.6);
INSERT INTO GHD VALUES (16,1,157.9);
INSERT INTO GHD VALUES (17,1,159.1);
INSERT INTO GHD VALUES (18,1,159.8);
INSERT INTO GHD VALUES (5,2,102.2);
INSERT INTO GHD VALUES (6,2,106.3);
INSERT INTO GHD VALUES (7,2,110.4);
INSERT INTO GHD VALUES (8,2,115.6);
INSERT INTO GHD VALUES (9,2,119.2);
INSERT INTO GHD VALUES (10,2,124.9);
INSERT INTO GHD VALUES (11,2,131.3);
INSERT INTO GHD VALUES (12,2,138.6);
INSERT INTO GHD VALUES (13,2,143.5);
INSERT INTO GHD VALUES (14,2,146.2);
INSERT INTO GHD VALUES (15,2,147.2);
INSERT INTO GHD VALUES (16,2,148.2);
INSERT INTO GHD VALUES (17,2,148.7);
INSERT INTO GHD VALUES (18,2,148.9);

#
# 資料表格式： `health_WH`
#

CREATE TABLE health_WH (
  `year` smallint(5) unsigned NOT NULL default '0',
  `semester` enum('1','2') NOT NULL default '1',
  `student_sn` int(10) unsigned NOT NULL default '0',
  `weight` decimal(4,1) NOT NULL default '0.0',
  `height` decimal(4,1) NOT NULL default '0.0',
  `measure_date` date NOT NULL default '0000-00-00',
  `diag_id` tinyint(3) NOT NULL default '0',
  `diag_place` varchar(40) NOT NULL default '',
  `diag` varchar(40) NOT NULL default '',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`year`,`semester`,`student_sn`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_sight`
#

CREATE TABLE health_sight (
  `year` smallint(5) unsigned NOT NULL default '0',
  `semester` enum('1','2') NOT NULL default '1',
  `student_sn` int(10) unsigned NOT NULL default '0',
  `side` char(1) NOT NULL default '',
  `sight_o` varchar(3) NOT NULL default '',
  `sight_r` varchar(3) NOT NULL default '',
  `My` char(1) NOT NULL default '',
  `Hy` char(1) NOT NULL default '',
  `Ast` char(1) NOT NULL default '',
  `Amb` char(1) NOT NULL default '',
  `other` char(1) NOT NULL default '',
  `measure_date` date NOT NULL default '0000-00-00',
  `manage_id` char(1) NOT NULL default '',
  `manage` text NOT NULL default '',
  `diag_id` char(1) NOT NULL default '',
  `diag` text NOT NULL default '',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`year`,`semester`,`student_sn`,`side`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_sight_ntu`
#

CREATE TABLE health_sight_ntu (
  `student_sn` int(10) unsigned NOT NULL default '0',
  `ntu` varchar(1) NOT NULL default '', 
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn)
) ENGINE=MyISAM;

#
# 資料表格式： `health_worm`
#

CREATE TABLE health_worm (
  `year` smallint(5) unsigned NOT NULL default '0',
  `semester` enum('1','2') NOT NULL default '1',
  `student_sn` int(10) unsigned NOT NULL default '0',
  `no` int(1) unsigned NOT NULL default '1',
  `worm` varchar(1) NOT NULL default '',
  `med` varchar(1) NOT NULL default '',
  `measure_date` date NOT NULL default '0000-00-00',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`year`,`semester`,`student_sn`,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_uri`
#

CREATE TABLE health_uri (
  `year` smallint(5) unsigned NOT NULL default '0',
  `semester` enum('1','2') NOT NULL default '1',
  `student_sn` int(10) unsigned NOT NULL default '0',
  `no` int(1) unsigned NOT NULL default '1',
  `pro` varchar(1) NOT NULL default '',
  `bld` varchar(1) NOT NULL default '',
  `glu` varchar(1) NOT NULL default '',
  `ph` float NOT NULL default '0',
  `memo` text NOT NULL default '',
  `measure_date` date NOT NULL default '0000-00-00',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`year`,`semester`,`student_sn`,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_disease`
#

CREATE TABLE health_disease (
  `student_sn` int(10) unsigned NOT NULL default '0',
  `di_id` char(2) NOT NULL default '',
  `enter_date` date NOT NULL default '0000-00-00',
  `state` text NOT NULL default '',
  `treate` text NOT NULL default '',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`student_sn`,`di_id`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_diseaseserious`
#

CREATE TABLE health_diseaseserious (
  `student_sn` int(10) unsigned NOT NULL default '0',
  `di_id` char(2) NOT NULL default '',
  `enter_date` date NOT NULL default '0000-00-00',
  `update_date` timestamp,
  `teacher_sn` int(11) NOT NULL default '0',
  PRIMARY KEY (`student_sn`,`di_id`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_bodymind`
#

CREATE TABLE health_bodymind (
  student_sn int(10) unsigned NOT NULL default '0',
  bm_id char(2) NOT NULL default '',
  bm_level char(1) NOT NULL default '',
  enter_date date NOT NULL default '0000-00-00',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn)
) ENGINE=MyISAM;

#
# 資料表格式： `health_inherit`
#

CREATE TABLE health_inherit (
  student_sn int(10) unsigned NOT NULL default '0',
  folk_id char(2) NOT NULL default '',
  di_id char(2) NOT NULL default '',
  enter_date date NOT NULL default '0000-00-00',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn,folk_id)
) ENGINE=MyISAM;

#
# 資料表格式： `health_checks_item`
#

CREATE TABLE health_checks_item (
	subject varchar(50) NOT NULL default'',
	`no` int(5) NOT NULL default '0',
	item varchar(50) NOT NULL default '',
	ps int(4) NOT NULL default '0',
	PRIMARY KEY (subject,`no`)
) ENGINE=MyISAM;
INSERT INTO health_checks_item VALUES ( 'Oph',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Oph',1,'視力不良',0);
INSERT INTO health_checks_item VALUES ( 'Oph',2,'辨色力異常',0);
INSERT INTO health_checks_item VALUES ( 'Oph',3,'斜視',9);
INSERT INTO health_checks_item VALUES ( 'Oph',4,'睫毛倒插',0);
INSERT INTO health_checks_item VALUES ( 'Oph',5,'眼球震顫',0);
INSERT INTO health_checks_item VALUES ( 'Oph',6,'眼瞼下垂',0);
INSERT INTO health_checks_item VALUES ( 'Ent',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Ent',1,'聽力異常',9);
INSERT INTO health_checks_item VALUES ( 'Ent',2,'疑似中耳炎',0);
INSERT INTO health_checks_item VALUES ( 'Ent',3,'耳道畸型',0);
INSERT INTO health_checks_item VALUES ( 'Ent',4,'唇顎裂',0);
INSERT INTO health_checks_item VALUES ( 'Ent',5,'構音異常',0);
INSERT INTO health_checks_item VALUES ( 'Ent',6,'耳前管',0);
INSERT INTO health_checks_item VALUES ( 'Ent',7,'耵聹栓塞',0);
INSERT INTO health_checks_item VALUES ( 'Ent',8,'慢性鼻炎',0);
INSERT INTO health_checks_item VALUES ( 'Ent',9,'過敏性鼻炎',0);
INSERT INTO health_checks_item VALUES ( 'Ent',10,'扁桃腺腫大',0);
INSERT INTO health_checks_item VALUES ( 'Hea',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Hea',1,'斜頸',0);
INSERT INTO health_checks_item VALUES ( 'Hea',2,'甲狀腺腫',0);
INSERT INTO health_checks_item VALUES ( 'Hea',3,'淋巴腺腫大',0);
INSERT INTO health_checks_item VALUES ( 'Pul',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Pul',1,'胸廓異常',0);
INSERT INTO health_checks_item VALUES ( 'Pul',2,'心雜音',0);
INSERT INTO health_checks_item VALUES ( 'Pul',3,'心律不整',0);
INSERT INTO health_checks_item VALUES ( 'Pul',4,'呼吸聲異常',0);
INSERT INTO health_checks_item VALUES ( 'Dig',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Dig',1,'肝脾腫大',0);
INSERT INTO health_checks_item VALUES ( 'Dig',2,'疝氣',0);
INSERT INTO health_checks_item VALUES ( 'Spi',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Spi',1,'脊柱側彎',0);
INSERT INTO health_checks_item VALUES ( 'Spi',2,'多併指',0);
INSERT INTO health_checks_item VALUES ( 'Spi',3,'青蛙肢',0);
INSERT INTO health_checks_item VALUES ( 'Spi',4,'關節變形',0);
INSERT INTO health_checks_item VALUES ( 'Spi',5,'水腫',0);
INSERT INTO health_checks_item VALUES ( 'Uro',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Uro',1,'隱睪',1);
INSERT INTO health_checks_item VALUES ( 'Uro',2,'陰囊腫大',1);
INSERT INTO health_checks_item VALUES ( 'Uro',3,'包皮異常',1);
INSERT INTO health_checks_item VALUES ( 'Uro',4,'精索靜脈曲張',1);
INSERT INTO health_checks_item VALUES ( 'Der',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Der',1,'癬',0);
INSERT INTO health_checks_item VALUES ( 'Der',2,'疣',0);
INSERT INTO health_checks_item VALUES ( 'Der',3,'疥瘡',0);
INSERT INTO health_checks_item VALUES ( 'Der',4,'紫斑',0);
INSERT INTO health_checks_item VALUES ( 'Der',5,'濕疹',0);
INSERT INTO health_checks_item VALUES ( 'Der',6,'異位性皮膚炎',0);
INSERT INTO health_checks_item VALUES ( 'Ora',0,'無異狀',0);
INSERT INTO health_checks_item VALUES ( 'Ora',1,'口腔衛生不良',0);
INSERT INTO health_checks_item VALUES ( 'Ora',2,'牙結石',0);
INSERT INTO health_checks_item VALUES ( 'Ora',3,'牙周炎',0);
INSERT INTO health_checks_item VALUES ( 'Ora',4,'齒列咬合不正',0);
INSERT INTO health_checks_item VALUES ( 'Ora',5,'牙齦炎',0);
INSERT INTO health_checks_item VALUES ( 'Ora',6,'口腔黏膜異常',0);
INSERT INTO health_checks_item VALUES ( 'Ora',7,'齲齒',0);
INSERT INTO health_checks_item VALUES ( 'Ora',8,'缺牙',0);

#
# 資料表格式： `health_checks_record`
#

CREATE TABLE health_checks_record (
	`year` smallint(5) unsigned NOT NULL default '0',
	semester enum('0','1','2') NOT NULL default '0',
	student_sn int(10) unsigned NOT NULL default '0',
	subject varchar(50) NOT NULL default'',
	`no` int(4) NOT NULL default '0',
	`status` varchar(5) NOT NULL default '',
	`ps` varchar(50) NOT NULL default '',
	update_date timestamp,
	teacher_sn int(11) NOT NULL default '0',
	PRIMARY KEY (`year`,`semester`,student_sn,subject,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_teeth`
#

CREATE TABLE health_teeth (
	`year` smallint(5) unsigned NOT NULL default '0',
	semester enum('0','1','2') NOT NULL default '0',
	student_sn int(10) unsigned NOT NULL default '0',
	`no` varchar(3) NOT NULL default '',
	`status` varchar(3) NOT NULL default '',
	update_date timestamp,
	teacher_sn int(11) NOT NULL default '0',
	PRIMARY KEY (`year`,semester,student_sn,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_hospital`
#

CREATE TABLE health_hospital (
  id int(6) unsigned NOT NULL auto_increment,
  `name` varchar(100) NOT NULL default '',
  enable varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;

#
# 資料表格式： `health_hospital_record`
#

CREATE TABLE health_hospital_record (
  student_sn int(10) unsigned NOT NULL default '0',
  `no` int(1) unsigned NOT NULL default '1',
  id int(6) unsigned NOT NULL default '1',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_insurance`
#

CREATE TABLE health_insurance (
  id int(6) unsigned NOT NULL auto_increment,
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;

INSERT INTO health_insurance VALUES ( 1,'全民健保',1);
INSERT INTO health_insurance VALUES ( 2,'學生團體保險',1);

#
# 資料表格式： `health_insurance_record`
#

CREATE TABLE health_insurance_record (
  student_sn int(10) unsigned NOT NULL default '0',
  `no` int(1) unsigned NOT NULL default '1',
  id int(6) unsigned NOT NULL default '1',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn,`no`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_exam_item`
#

CREATE TABLE health_exam_item (
  id int(6) unsigned NOT NULL auto_increment,
  `name` varchar(200) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_exam_item VALUES ( 1,'頭蝨檢查',1);
INSERT INTO health_exam_item VALUES ( 2,'心臟超音波篩檢',1);

#
# 資料表格式： `health_exam_record`
#

CREATE TABLE health_exam_record (
  `year` smallint(5) unsigned NOT NULL default '0',
  `semester` enum('0','1','2') NOT NULL default '0',
  student_sn int(10) unsigned NOT NULL default '0',
  id int(6) unsigned NOT NULL auto_increment,
  measure_date date NOT NULL default '0000-00-00',
  `diag` varchar(100) NOT NULL default '',
  diag_hos int(6) unsigned NOT NULL default '1',
  rediag varchar(100) NOT NULL default '',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (`year`,semester,student_sn,id)
) ENGINE=MyISAM;

#
# 資料表格式： `health_inject_item`
#

CREATE TABLE health_inject_item (
  id int(6) unsigned NOT NULL auto_increment,
  `name` varchar(200) NOT NULL default '',
  lname varchar(200) NOT NULL default '',
  `times` int(4) unsigned NOT NULL default '0',
  ltimes int(4) unsigned NOT NULL default '0',
  lack0 varchar(10) NOT NULL default '',
  lack1 varchar(10) NOT NULL default '',
  lack2 varchar(10) NOT NULL default '',
  lack3 varchar(10) NOT NULL default '',
  lack4 varchar(10) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  `memo` text NOT NULL default '',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_inject_item VALUES ( 1,'卡介苗','卡介苗',1,1,'1','1','','','',1,'');
INSERT INTO health_inject_item VALUES ( 2,'B型肝炎疫苗','B型肝炎疫苗',3,3,'3','3','2,3','1,2,3','',1,'');
INSERT INTO health_inject_item VALUES ( 3,'小兒麻痺口服疫苗','小兒麻痺口服疫苗',4,4,'1','1,4','1,2,3,4','1,2,3,4','1,2,3,4',1,'');
INSERT INTO health_inject_item VALUES ( 4,'白喉破傷風百日咳混合疫苗','破傷風減量白喉混合疫苗',4,3,'1','1','1,3','1,2,3','1,2,3',1,'');
INSERT INTO health_inject_item VALUES ( 5,'日本腦炎疫苗','日本腦炎疫苗',3,3,'1','1,3','1,2,3','1,2,3','',1,'');
INSERT INTO health_inject_item VALUES ( 6,'麻疹疫苗','',1,0,'','','','','',1,'');
INSERT INTO health_inject_item VALUES ( 7,'MMR','MMR',2,2,'1','1','1,2','','',1,'');

#
# 資料表格式： `health_inject_record`
#

CREATE TABLE health_inject_record (
  student_sn int(10) unsigned NOT NULL default '0',
  id int(6) unsigned NOT NULL default '0',
  `times` int(4) unsigned NOT NULL default '0',
  date0 date NOT NULL default '0000-00-00',
  date1 date NOT NULL default '0000-00-00',
  date2 date NOT NULL default '0000-00-00',
  date3 date NOT NULL default '0000-00-00',
  date4 date NOT NULL default '0000-00-00',
  update_date timestamp,
  teacher_sn int(11) NOT NULL default '0',
  PRIMARY KEY (student_sn,id)
) ENGINE=MyISAM;

#
# 資料表格式： `health_yellowcard`
#

CREATE TABLE health_yellowcard (
	student_sn int(10) unsigned NOT NULL default '0',
	`value` tinyint(1) unsigned NOT NULL default '0',
	PRIMARY KEY (student_sn)
) ENGINE=MyISAM;

#
# 資料表格式： `health_accident_place`
#

CREATE TABLE health_accident_place (
  id int(6) unsigned NOT NULL default '1',
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_accident_place VALUES ( 1,'操場',1);
INSERT INTO health_accident_place VALUES ( 2,'遊戲運動器材',1);
INSERT INTO health_accident_place VALUES ( 3,'普通教室',1);
INSERT INTO health_accident_place VALUES ( 4,'專科教室',1);
INSERT INTO health_accident_place VALUES ( 5,'走廊',1);
INSERT INTO health_accident_place VALUES ( 6,'樓梯',1);
INSERT INTO health_accident_place VALUES ( 7,'地下室',1);
INSERT INTO health_accident_place VALUES ( 8,'體育館活動中心',1);
INSERT INTO health_accident_place VALUES ( 9,'廁所',1);
INSERT INTO health_accident_place VALUES ( 10,'校外',1);
INSERT INTO health_accident_place VALUES ( 999,'其他',1);

#
# 資料表格式： `health_accident_reason`
#

CREATE TABLE health_accident_reason (
  id int(6) unsigned NOT NULL default '1',
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_accident_reason VALUES ( 1,'下課遊戲',1);
INSERT INTO health_accident_reason VALUES ( 2,'上下課途中',1);
INSERT INTO health_accident_reason VALUES ( 3,'升旗',1);
INSERT INTO health_accident_reason VALUES ( 4,'打破玻璃',1);
INSERT INTO health_accident_reason VALUES ( 5,'打掃',1);
INSERT INTO health_accident_reason VALUES ( 6,'上下樓梯',1);
INSERT INTO health_accident_reason VALUES ( 7,'藝能課',1);
INSERT INTO health_accident_reason VALUES ( 8,'體育課',1);
INSERT INTO health_accident_reason VALUES ( 999,'其他',1);

#
# 資料表格式： `health_accident_part`
#

CREATE TABLE health_accident_part (
  id int(6) unsigned NOT NULL default '1',
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_accident_part VALUES ( 1,'頭',1);
INSERT INTO health_accident_part VALUES ( 2,'頸',1);
INSERT INTO health_accident_part VALUES ( 3,'肩',1);
INSERT INTO health_accident_part VALUES ( 4,'胸',1);
INSERT INTO health_accident_part VALUES ( 5,'腹',1);
INSERT INTO health_accident_part VALUES ( 6,'背',1);
INSERT INTO health_accident_part VALUES ( 7,'眼',1);
INSERT INTO health_accident_part VALUES ( 8,'顏面',1);
INSERT INTO health_accident_part VALUES ( 9,'口腔',1);
INSERT INTO health_accident_part VALUES ( 10,'耳鼻喉',1);
INSERT INTO health_accident_part VALUES ( 11,'上肢',1);
INSERT INTO health_accident_part VALUES ( 12,'腰',1);
INSERT INTO health_accident_part VALUES ( 13,'下肢',1);
INSERT INTO health_accident_part VALUES ( 14,'臀部',1);
INSERT INTO health_accident_part VALUES ( 15,'會陰部',1);

#
# 資料表格式： `health_accident_status`
#

CREATE TABLE health_accident_status (
  id int(6) unsigned NOT NULL default'1',
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_accident_status VALUES ( 1,'擦傷',1);
INSERT INTO health_accident_status VALUES ( 2,'裂割刺傷',1);
INSERT INTO health_accident_status VALUES ( 3,'夾壓傷',1);
INSERT INTO health_accident_status VALUES ( 4,'挫撞傷',1);
INSERT INTO health_accident_status VALUES ( 5,'扭傷',1);
INSERT INTO health_accident_status VALUES ( 6,'灼燙傷',1);
INSERT INTO health_accident_status VALUES ( 7,'叮咬傷',1);
INSERT INTO health_accident_status VALUES ( 8,'骨折',1);
INSERT INTO health_accident_status VALUES ( 9,'舊傷',1);
INSERT INTO health_accident_status VALUES ( 10,'外科其他',1);
INSERT INTO health_accident_status VALUES ( 11,'發燒',1);
INSERT INTO health_accident_status VALUES ( 12,'暈眩',1);
INSERT INTO health_accident_status VALUES ( 13,'噁心嘔吐',1);
INSERT INTO health_accident_status VALUES ( 14,'頭痛',1);
INSERT INTO health_accident_status VALUES ( 15,'牙痛',1);
INSERT INTO health_accident_status VALUES ( 16,'胃痛',1);
INSERT INTO health_accident_status VALUES ( 17,'腹痛',1);
INSERT INTO health_accident_status VALUES ( 18,'腹瀉',1);
INSERT INTO health_accident_status VALUES ( 19,'經痛',1);
INSERT INTO health_accident_status VALUES ( 20,'氣喘',1);
INSERT INTO health_accident_status VALUES ( 21,'流鼻血',1);
INSERT INTO health_accident_status VALUES ( 22,'疹癢',1);
INSERT INTO health_accident_status VALUES ( 23,'眼疾',1);
INSERT INTO health_accident_status VALUES ( 24,'內科其他',1);

#
# 資料表格式： `health_accident_attend`
#

CREATE TABLE health_accident_attend (
  id int(6) unsigned NOT NULL default'1',
  `name` varchar(100) NOT NULL default '',
  `enable` varchar(1) NOT NULL default '1',
  PRIMARY KEY (id)
) ENGINE=MyISAM;
INSERT INTO health_accident_attend VALUES ( 1,'傷口處理',1);
INSERT INTO health_accident_attend VALUES ( 2,'冰敷',1);
INSERT INTO health_accident_attend VALUES ( 3,'熱敷',1);
INSERT INTO health_accident_attend VALUES ( 4,'休息觀察',1);
INSERT INTO health_accident_attend VALUES ( 5,'通知家長',1);
INSERT INTO health_accident_attend VALUES ( 6,'家長帶回',1);
INSERT INTO health_accident_attend VALUES ( 7,'校方送醫',1);
INSERT INTO health_accident_attend VALUES ( 8,'衛生教育',1);
INSERT INTO health_accident_attend VALUES ( 999,'其他處理',1);

#
# 資料表格式： `health_accident_record`
#

CREATE TABLE health_accident_record (
	id int(10) unsigned NOT NULL auto_increment,
	`year` smallint(5) unsigned NOT NULL default '0',
	semester enum('0','1','2') NOT NULL default '0',
	student_sn int(10) unsigned NOT NULL default '0',
	sign_time datetime NOT NULL default '0000-00-00 00:00:00',
	obs_min int(6) unsigned NOT NULL default '0',
	temp decimal(3,1) NOT NULL default '0.0',
	place_id int(6) unsigned NOT NULL default '0',
	reason_id int(6) unsigned NOT NULL default '0',
	`memo` text NOT NULL default '',
	update_date timestamp,
	teacher_sn int(11) NOT NULL default '0',
	PRIMARY KEY (id)
) ENGINE=MyISAM;

#
# 資料表格式： `health_accident_part_record`
#

CREATE TABLE health_accident_part_record (
	`pid` int(10) unsigned NOT NULL auto_increment,
	id int(10) unsigned NOT NULL default '0',
	part_id int(6) unsigned NOT NULL default '0',
	PRIMARY KEY (`pid`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_accident_status_record`
#

CREATE TABLE health_accident_status_record (
	`sid` int(10) unsigned NOT NULL auto_increment,
	id int(10) unsigned NOT NULL default '0',
	status_id int(6) unsigned NOT NULL default '0',
	PRIMARY KEY (`sid`)
) ENGINE=MyISAM;

#
# 資料表格式： `health_accident_attend_record`
#

CREATE TABLE health_accident_attend_record (
	aid int(10) unsigned NOT NULL auto_increment,
	id int(10) unsigned NOT NULL default '0',
	attend_id int(6) unsigned NOT NULL default '0',
	PRIMARY KEY (aid)
)ENGINE=MyISAM;
