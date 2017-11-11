#$Id$
# 鞈?銵冽撘? `msn_data`
#
# 隢??函?鞈?銵?CREATE TABLE 隤?蝵格銝?
# ?亦嚗?隢??祆? module.sql ?芷??

#idnumber ?臭?隞?Ⅳ11053110553020, ??4蝣?
#data_kind 0?祇?,1蝘犖,2瑼??澈(銵),3?餃???
#folder ?亦瑼??澈, 甇斗?獢飛?粹銝???冗

#閮?批捆 
CREATE TABLE IF NOT EXISTS sc_msn_data (
  id int(5) not null auto_increment,
  idnumber varchar(14) not null,
  teach_id varchar(20) NOT NULL default '' ,
  to_id varchar(20) NOT NULL default '',
  data_kind tinyint(1) unsigned ,
  post_date datetime ,
  last_date tinyint(2) ,
  data text not null,
  ifread tinyint(1) UNSIGNED not null default '0',
  relay varchar(14) not null,
  folder varchar(14) not null,
  primary key (id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#撣唾?, 銝? teacher_sn , ?∟? teacher_id?撘?
create table IF NOT EXISTS sc_msn_online (
	teach_id varchar(40) not null,
	name varchar(20) not null,
	from_ip varchar(40) not null,
	lasttime datetime not null,
	onlinetime datetime not null,
	ifonline tinyint(1) not null,
	state varchar(20) not null,
	hits int(5) not null,
	sound tinyint(1) not null default '1',
	sound_kind varchar(10) not null default 'sound4',
	is_upload tinyint(1) not null default '0',
	is_email tinyint(1) not null default '0',
	is_showpic tinyint(1) not null default '0',
	primary key (teach_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#瑼?, 蝚砌?蝣澆???msn_data 閮?批捆, 銵函內?箄府?批捆?冗瑼?             
CREATE TABLE IF NOT EXISTS `sc_msn_file` (
  `id` int(5) not null auto_increment,
  `idnumber` varchar(14) NOT NULL,
  `filename` varchar(48)  NOT NULL,
  `filename_r` varchar(128)  NOT NULL,
  `file_download` int(5) NOT NULL,
  primary key (id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#?澈瑼?雿輻??獢?憿?
CREATE TABLE IF NOT EXISTS `sc_msn_folder` (
  `id` int(3) not null auto_increment,
  `idnumber` varchar(14) NOT NULL,
  `foldername` varchar(48)  NOT NULL,
  `open_upload` tinyint(1)  NOT NULL,
  primary key (id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#?餃????餃??
CREATE TABLE IF NOT EXISTS `sc_msn_board_pic` (
  id int(5) not null auto_increment,
  teach_id varchar(20) NOT NULL default '',
  stdate date NOT NULL,
  enddate date NOT NULL,
  delay_sec datetime not Null,
  file_text varchar(64) not null, 
  filename varchar(48) NOT NULL,
  show_off tinyint(1) not null,
  primary key (id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

SET NAMES 'utf8';
insert into sc_msn_folder (idnumber,foldername,open_upload) values ('140116121212','?芸?憿?,'0');
insert into sc_msn_folder (idnumber,foldername,open_upload) values ('private','蝘犖瑼?','0');
SET NAMES 'latin1';