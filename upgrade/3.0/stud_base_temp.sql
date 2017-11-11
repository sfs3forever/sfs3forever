# $Id: stud_base_temp.sql 5311 2009-01-10 08:11:55Z hami $
DROP TABLE IF EXISTS stud_eduh;
CREATE TABLE stud_eduh (
  eh_id bigint(20) unsigned NOT NULL auto_increment,
  stud_id varchar(20) default NULL,
  eh_from tinyint(3) unsigned default NULL,
  eh_from_date date default NULL,
  eh_teacher varchar(20) default NULL,
  eh_caes varchar(60) default NULL,
  eh_meth varchar(60) default NULL,
  eh_resion_memo varchar(40) default NULL,
  eh_is_over tinyint(3) unsigned default NULL,
  eh_over_memo varchar(40) default NULL,
  eh_over_date date default NULL,
  eh_case_date date default NULL,
  eh_case_memo text,
  eh_case_relation varchar(30) default NULL,
  PRIMARY KEY  (eh_id)
) TYPE=MyISAM;


DROP TABLE IF EXISTS subj_hour;
CREATE TABLE subj_hour (
  sj_id char(2) NOT NULL default '',
  sj_b_time varchar(4) NOT NULL default '',
  sj_e_time varchar(4) NOT NULL default '',
  sj_kind tinyint(3) unsigned NOT NULL default '0',
  sj_memo varchar(20) NOT NULL default '',
  PRIMARY KEY  (sj_id),
  UNIQUE KEY sj_id (sj_id)
) TYPE=MyISAM COMMENT='上課時間設定';


DROP TABLE IF EXISTS subj_cour;
CREATE TABLE subj_cour (
  seme_year_seme varchar(6) NOT NULL default '',
  seme_class varchar(10) NOT NULL default '',
  subj_id smallint(5) unsigned NOT NULL default '0',
  sc_num tinyint(3) unsigned NOT NULL default '0',
  sc_perr double NOT NULL default '0',
  sc_five_kind tinyint(3) unsigned NOT NULL default '0',
  sc_percent double NOT NULL default '0',
  sc_order tinyint(3) unsigned NOT NULL default '0',
  PRIMARY KEY  (seme_year_seme,seme_class),
  UNIQUE KEY seme_year_seme (seme_year_seme,seme_class)
) TYPE=MyISAM COMMENT='年級開課';

/*==============================================================*/
/* Database name:  student                                      */
/* DBMS name:      MySQL 3.23                                   */
/* Created on:     2002/9/24 上午 03:57:56                        */
/*==============================================================*/

DROP TABLE IF EXISTS stud_base_temp;
CREATE TABLE stud_base_temp (
  stud_id varchar(20) NOT NULL default '',
  student_sn int(10) unsigned NOT NULL auto_increment,
  stud_name varchar(20) default NULL,
  stud_sex tinyint(3) unsigned default NULL,
  stud_birthday date default NULL,
  stud_blood_type tinyint(3) unsigned default NULL,
  stud_birth_place tinyint(3) unsigned default NULL,
  stud_kind varchar(60) default NULL,
  stud_country varchar(20) default NULL,
  stud_country_kind tinyint(3) unsigned default NULL,
  stud_person_id varchar(20) default NULL,
  stud_country_name varchar(20) default NULL,
  stud_addr_1 varchar(60) default NULL,
  stud_addr_2 varchar(60) default NULL,
  stud_tel_1 varchar(20) default NULL,
  stud_tel_2 varchar(20) default NULL,
  stud_tel_3 varchar(20) default NULL,
  stud_mail varchar(50) default NULL,
  stud_addr_a varchar(6) default NULL,
  stud_addr_b varchar(12) default NULL,
  stud_addr_c varchar(12) default NULL,
  stud_addr_d varchar(6) default NULL,
  stud_addr_e varchar(20) default NULL,
  stud_addr_f varchar(6) default NULL,
  stud_addr_g varchar(8) default NULL,
  stud_addr_h varchar(6) default NULL,
  stud_addr_i varchar(8) default NULL,
  stud_addr_j varchar(8) default NULL,
  stud_addr_k varchar(6) default NULL,
  stud_addr_l varchar(6) default NULL,
  stud_addr_m varchar(12) default NULL,
  stud_class_kind tinyint(3) unsigned default NULL,
  stud_spe_kind tinyint(3) unsigned default NULL,
  stud_spe_class_kind tinyint(3) unsigned default NULL,
  stud_spe_class_id tinyint(3) unsigned default NULL,
  stud_preschool_status tinyint(3) unsigned default NULL,
  stud_preschool_id varchar(8) default NULL,
  stud_preschool_name varchar(40) default NULL,
  stud_Mschool_status tinyint(3) unsigned default NULL,
  stud_mschool_id varchar(8) default NULL,
  stud_mschool_name varchar(40) default NULL,
  email_pass varchar(10) default NULL,
  stud_study_year int(10) unsigned default NULL,
  curr_class_num varchar(6) default NULL,
  stud_study_cond tinyint(3) unsigned default NULL,
  PRIMARY KEY  (stud_id),
  UNIQUE KEY student_sn (student_sn)
) TYPE=MyISAM;

#
# 資料表格式： `stud_seme_abs`
#

CREATE TABLE stud_seme_abs (
  seme_year_seme varchar(6) NOT NULL default '',
  stud_id varchar(20) NOT NULL default '',
  abs_kind tinyint(3) unsigned default NULL,
  abs_days int(10) unsigned default NULL,
  PRIMARY KEY  (seme_year_seme,stud_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_abs`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_seme_eduh`
#

CREATE TABLE stud_seme_eduh (
  seme_year_seme varchar(6) NOT NULL default '',
  stud_id varchar(20) NOT NULL default '',
  sse_relation tinyint(3) unsigned default NULL,
  sse_family_kind tinyint(3) unsigned default NULL,
  sse_family_air tinyint(3) unsigned default NULL,
  sse_farther tinyint(3) unsigned default NULL,
  sse_mother tinyint(3) unsigned default NULL,
  sse_live_state tinyint(3) unsigned default NULL,
  sse_rich_state tinyint(3) unsigned default NULL,
  sse_s1 varchar(40) default NULL,
  sse_s2 varchar(40) default NULL,
  sse_s3 varchar(40) default NULL,
  sse_s4 varchar(40) default NULL,
  sse_s5 varchar(40) default NULL,
  sse_s6 varchar(40) default NULL,
  sse_s7 varchar(40) default NULL,
  sse_s8 varchar(40) default NULL,
  sse_s9 varchar(40) default NULL,
  sse_s10 varchar(40) default NULL,
  sse_s11 varchar(40) default NULL,
  PRIMARY KEY  (seme_year_seme,stud_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_eduh`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_seme_score`
#

CREATE TABLE stud_seme_score (
  sss_id bigint(20) unsigned NOT NULL auto_increment,
  seme_year_seme varchar(6) default NULL,
  student_sn int(10) unsigned NOT NULL default '0',
  ss_id smallint(5) unsigned default NULL,
  ss_score decimal(4,2) default NULL,
  ss_score_memo text,
  PRIMARY KEY  (sss_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_score`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_seme_score_s`
#

CREATE TABLE stud_seme_score_s (
  sss_id bigint(20) unsigned NOT NULL default '0',
  ss_id bigint(20) unsigned default NULL,
  sss_kind tinyint(3) unsigned default NULL,
  sss_score decimal(4,2) default NULL,
  PRIMARY KEY  (sss_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_score_s`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_seme_spe`
#
CREATE TABLE stud_seme_spe (
  ss_id bigint(20) unsigned NOT NULL auto_increment,
  seme_year_seme varchar(6) default NULL,
  stud_id varchar(20) default NULL,
  sp_date date default NULL,
  sp_memo text,
  teach_id varchar(20) NOT NULL default '',
  update_time timestamp(14) NOT NULL,
  PRIMARY KEY  (ss_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_spe`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_seme_talk`
#
CREATE TABLE stud_seme_talk (
  sst_id bigint(20) unsigned NOT NULL auto_increment,
  seme_year_seme varchar(6) default NULL,
  stud_id varchar(20) default NULL,
  sst_date date default NULL,
  sst_name varchar(20) default NULL,
  sst_main varchar(40) default NULL,
  sst_memo text,
  teach_id varchar(20) NOT NULL default '',
  update_time timestamp(14) NOT NULL,
  PRIMARY KEY  (sst_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_talk`
#



#
# 資料表格式： `stud_seme_test`
#

CREATE TABLE stud_seme_test (
  st_id bigint(20) unsigned NOT NULL default '0',
  seme_year_seme varchar(6) default NULL,
  stud_id varchar(20) default NULL,
  st_numb varchar(20) default NULL,
  st_name varchar(20) default NULL,
  st_score_numb varchar(20) default NULL,
  st_data_from varchar(40) default NULL,
  st_chang_numb varchar(20) default NULL,
  st_name_long varchar(40) default NULL,
  PRIMARY KEY  (st_id)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_seme_test`
#

# --------------------------------------------------------


# --------------------------------------------------------


drop table if exists stud_mid_sco;

drop table if exists stud_mid_rep;

drop table if exists stud_mid_abs;

drop table if exists stud_family;

drop table if exists stud_psy_tests;

drop table if exists stud_score;

drop table if exists stud_tea_parent;

drop table if exists pro_kind_old;

drop table if exists pro_share;

 



/*==============================================================*/
/* Table : stud_mid_abs                                         */
/*==============================================================*/
create table if not exists stud_mid_abs
(
   sma_year                       varchar(4)                     not null,
   sma_month                      varchar(2)                     not null,
   stud_id                        varchar(20)                    not null,
   sma_kind                       tinyint unsigned               not null,
   sma_days                       int unsigned,
   primary key (stud_id, sma_year, sma_month, sma_kind)
);

/*==============================================================*/
/* Table : stud_mid_rep                                         */
/*==============================================================*/
create table if not exists stud_mid_rep
(
   smr_id                         bigint unsigned                not null auto_increment ,
   stud_id                        varchar(20),
   smr_date                       date,
   smr_kind                       tinyint unsigned,
   smr_num                        tinyint unsigned,
   smr_res                        text,
   primary key (smr_id)
);
#
# 資料表格式： `stud_mid_sco`
#

CREATE TABLE stud_mid_sco (
  smc_id bigint(20) unsigned NOT NULL default '0',
  stud_id varchar(20) default NULL,
  smc_date date default NULL,
  smc_name varchar(20) default NULL,
  smc_score decimal(4,2) default NULL,
  smc_class1 varchar(60) default NULL,
  smc_class2 varchar(60) default NULL,
  smc_class3 varchar(60) default NULL,
  PRIMARY KEY  (smc_id)
) TYPE=MyISAM;


/*==============================================================*/
/* Database name:  student                                      */
/* DBMS name:      MySQL 3.23                                   */
/* Created on:     2002/9/24 上午 04:06:39                        */
/*==============================================================*/


drop table if exists stud_grad;

/*==============================================================*/
/* Table : stud_grad                                            */
/*==============================================================*/
create table if not exists stud_grad
(
   stud_id                        varchar(20)                    not null,
   grad_kind                      varchar(10),
   grad_date                      date,
   grad_word                      varchar(20),
   grad_numb                      varchar(10),
   primary key (stud_id)
);

#
# 資料表格式： `sys_data_field`
#

CREATE TABLE sys_data_field (
  d_table_name varchar(30) NOT NULL default '',
  d_field_name varchar(30) NOT NULL default '',
  d_field_cname varchar(30) NOT NULL default '',
  d_field_type varchar(30) NOT NULL default '',
  d_field_order tinyint(4) NOT NULL default '0',
  d_is_display tinyint(4) NOT NULL default '0',
  d_field_xml varchar(40) NOT NULL default '',
  PRIMARY KEY  (d_table_name,d_field_name),
  UNIQUE KEY d_table_name (d_table_name,d_field_name)
) TYPE=MyISAM COMMENT='資料欄位';

#
# 列出以下資料庫的數據： `sys_data_field`
#
#
# Dumping data for table `sys_data_field`
#
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_Mschool_status', '', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_mschool_id', '教育部代號', 'varchar(8)', 0, 0, '教育部學校代號_國小');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_spe_class_id', '特殊班上課性質', 'tinyint(3) unsigned', 0, 0, '特殊班上課性質');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_preschool_status', '入學資格', 'tinyint(3) unsigned', 0, 0, '幼稚園入學資格');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_spe_class_kind', '特殊班班別', 'tinyint(3) unsigned', 0, 0, '特殊班班別');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_spe_kind', '特殊班類別', 'tinyint(3) unsigned', 0, 0, '特殊班類別');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_a', '縣/市', 'varchar(6)', 0, 0, '縣市名');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_b', '鄉/鎮/市/區', 'varchar(12)', 0, 0, '鄉鎮市區名');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_c', '村/里', 'varchar(12)', 0, 0, '村里');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_d', '鄰', 'varchar(6)', 0, 0, '鄰');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_e', '路/街', 'varchar(20)', 0, 0, '路街');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_f', '段', 'varchar(6)', 0, 0, '段');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_g', '巷', 'varchar(8)', 0, 0, '巷');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_h', '弄', 'varchar(6)', 0, 0, '弄');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_i', '號', 'varchar(8)', 0, 0, '號');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_j', '之', 'varchar(8)', 0, 0, '之');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_k', '樓', 'varchar(6)', 0, 0, '樓');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_l', '樓之', 'varchar(6)', 0, 0, '樓之');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_m', '其他', 'varchar(12)', 0, 0, '其他');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_class_kind', '班級性質', 'tinyint(3) unsigned', 0, 0, '班級性質');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_id', '學號', 'varchar(20)', 0, 0, '學號');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_name', '姓名', 'varchar(20)', 0, 0, '學生姓名');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_sex', '性別', 'tinyint(3) unsigned', 0, 0, '性別');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_birthday', '出生年月日', 'date', 0, 0, '出生年月日');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_blood_type', '血型', 'tinyint(3) unsigned', 0, 0, '血型');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_birth_place', '出生地', 'tinyint(3) unsigned', 0, 0, '出生地');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_kind', '學生身分別', 'varchar(60)', 0, 0, '學生身分別');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_country', '國籍', 'varchar(20)', 0, 0, '國籍');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_country_kind', '證照種類', 'tinyint(3) unsigned', 0, 0, '證照種類');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_person_id', '身分證號碼', 'varchar(20)', 0, 0, '身分證號碼');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_country_name', '僑居地', 'varchar(20)', 0, 0, '僑居地');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_1', '戶籍地址', 'varchar(60)', 0, 0, '戶籍地址');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_addr_2', '連絡地址', 'varchar(60)', 0, 0, '連絡地址');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_tel_1', '戶籍電話', 'varchar(20)', 0, 0, '戶籍電話');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandmoth_birthyear', '', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandmoth_alive', '祖母存歿\.', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandmoth_name', '祖母姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandfath_alive', '祖父存歿\.', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandfath_birthyear', '', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'grandfath_name', '祖父姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_email', '電子郵件', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_hand_phone', '行動電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_work_name', '職稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_p_id', '身分證證照', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_unit', '服務單位', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_relation', '與監護人關係', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_address', '地址', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_phone', '監護人電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'guardian_name', '監護人姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'is_same_gua', '', 'char(1)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_note', '', 'tinytext', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_email', '電子郵件', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_hand_phone', '行動電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_home_phone', '電話(宅)', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_phone', '電話(公)', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_work_name', '職稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_unit', '服務單位', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_occupation', '職業', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_education', '教育程度', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_abroad', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_p_id', '身分證證照', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_country', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_relation', '與母關係', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_alive', '存歿\.', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_birthyear', '出生年次', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'moth_name', '母親姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_email', '電子郵件', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_note', '', 'tinytext', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_hand_phone', '行動電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_home_phone', '電話(宅)', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_phone', '電話(公)', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_work_name', '職稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_unit', '服務單位', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_occupation', '職業', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_abroad', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_education', '教育程度', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_p_id', '身分證證照', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_country', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_alive', '存歿\.', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_relation', '與父關係', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_birthyear', '出生年次', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'fath_name', '父親姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'addr_id', '', 'bigint(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'update_time', '', 'timestamp(14)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_domicile', 'update_id', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'bs_birthyear', '年次', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'bs_gradu', '就讀學校', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'bs_id', '代號', 'bigint(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'bs_name', '姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_brother_sister', 'bs_calling', '稱謂', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_id', '親屬代號', 'bigint(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_name', '姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_calling', '稱謂', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_phone', '電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_hand_phone', '手機', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_kinfolk', 'kin_email', '電子郵件', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_id', '個案編號', 'bigint(20) unsigned', 0, 0, '個案編號');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'stud_id', '學號', 'varchar(20)', 0, 0, '學號');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_from', '個案來源', 'tinyint(3) unsigned', 0, 0, '個案來源');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_from_date', '接案日期', 'date', 0, 0, '接案日期');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_teacher', '認輔老師', 'varchar(20)', 0, 0, '認輔老師');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_caes', '問題類別', 'varchar(60)', 0, 0, '問題類別');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_meth', '偏差行為', 'varchar(60)', 0, 0, '偏差行為');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_resion_memo', '適應不良原因', 'varchar(40)', 0, 0, '適應不良原因');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_is_over', '結案否', 'tinyint(3) unsigned', 0, 0, '結案否');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_over_memo', '結案原因', 'varchar(40)', 0, 0, '結案原因');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_over_date', '結案日期', 'date', 0, 0, '結案日期');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_case_date', '輔導日期', 'date', 0, 0, '輔導日期');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_case_memo', '輔導內容', 'text', 0, 0, '輔導內容');
INSERT INTO sys_data_field VALUES ('stud_eduh', 'eh_case_relation', '個案關聯編號', 'varchar(30)', 0, 0, '個案關聯編號');
INSERT INTO sys_data_field VALUES ('subj_hour', 'sj_id', '節次', 'char(2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('subj_hour', 'sj_b_time', '開始時間', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('subj_hour', 'sj_e_time', '結束時間', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('subj_hour', 'sj_kind', '排課類別', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('subj_hour', 'sj_memo', '活動內容', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('subj_cour', 'sc_five_kind', '五育類別', 'tinyint(3) unsigned', 0, 0, '五育類別');
INSERT INTO sys_data_field VALUES ('subj_cour', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '學年學期');
INSERT INTO sys_data_field VALUES ('subj_cour', 'seme_class', '班級', 'varchar(10)', 0, 0, '班級');
INSERT INTO sys_data_field VALUES ('subj_cour', 'subj_id', '領域名稱', 'smallint(5) unsigned', 0, 0, '領域名稱');
INSERT INTO sys_data_field VALUES ('subj_cour', 'sc_num', '節數', 'tinyint(3) unsigned', 0, 0, '節數');
INSERT INTO sys_data_field VALUES ('subj_cour', 'sc_perr', '權數', 'double', 0, 0, '權數');
INSERT INTO sys_data_field VALUES ('subj_cour', 'sc_percent', '五育比例', 'double', 0, 0, '五育比例');
INSERT INTO sys_data_field VALUES ('subj_cour', 'sc_order', '列印排序', 'tinyint(3) unsigned', 0, 0, '列印排序');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_preschool_id', '教育部代號', 'varchar(8)', 0, 0, '教育部學校代號_幼稚園');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_preschool_name', '學校名稱', 'varchar(40)', 0, 0, '學校名稱_幼稚園');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_tel_2', '連絡電話', 'varchar(20)', 0, 0, '連絡電話');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_tel_3', '行動電話', 'varchar(20)', 0, 0, '行動電話');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_mail', '電子郵件信箱', 'varchar(50)', 0, 0, '電子郵件信箱');
INSERT INTO sys_data_field VALUES ('stud_mid_abs', 'sma_year', '年', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_abs', 'sma_month', '月', 'char(2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_abs', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_abs', 'sma_kind', '缺席類別', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_abs', 'sma_days', '缺席天數', 'int(10) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'smr_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'smr_date', '日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'smr_kind', '類別', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'smr_num', '次數', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_rep', 'smr_res', '事由', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_date', '日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_name', '社團名稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_score', '社團成績', 'decimal(4,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_class1', '班級活動', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_class2', '學生自治會活動', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_mid_sco', 'smc_class3', '學校例行活動', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_id', '流水號', 'bigint(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_kind', '異動類別', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_year_seme', '異動學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_date', '異動日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_c_unit', '異動核准機關名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_c_date', '核准日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_c_word', '核准字', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'move_c_num', '核准號', 'varchar(14)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'update_time', '更動時間', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'update_id', '更動代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_move', 'update_ip', '更動IP', 'varchar(15)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_grad', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_grad', 'grad_kind', '畢業類別', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_grad', 'grad_date', '畢業日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_grad', 'grad_word', '畢業字', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_grad', 'grad_numb', '畢業號', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_class', '年級', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_class_name', '班級', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_num', '座號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_class_year_s', '分散式_年級', 'int(10) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_class_s', '分散式_班級', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme', 'seme_num_s', '分散式_座號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_abs', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_abs', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_abs', 'abs_kind', '缺席類別', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_abs', 'abs_days', '缺席天數', 'int(10) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_relation', '父母關係', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_family_kind', '家庭類型', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_family_air', '家庭氣氛', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_farther', '父管教方式', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_mother', '母管教方式', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_live_state', '居住情形', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_rich_state', '經濟狀況', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s1', '最喜愛科目', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s2', '最困難科目', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s3', '特殊才能', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s4', '興趣', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s5', '生活習慣', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s6', '人際關係', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s7', '外向行為', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s8', '內向行為', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s9', '學習行為', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s10', '不良習慣', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_eduh', 'sse_s11', '焦慮行為', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'ss_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'ss_subject', '科目', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'ss_score', '成績', 'decimal(4,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score', 'ss_score_memo', '文字描述', 'varchar(200)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score_s', 'sss_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score_s', 'ss_id', '領域代號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score_s', 'sss_kind', '分項科目', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_score_s', 'sss_score', '成績', 'decimal(4,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_spe', 'ss_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_spe', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_spe', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_spe', 'sp_date', '日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_spe', 'sp_memo', '優良表現事由', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'sst_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'sst_date', '記錄日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'sst_name', '連絡對象', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'sst_main', '連絡事項', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_talk', 'sst_memo', '內容要點', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_numb', '心理測驗編號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_name', '測驗成績的中文簡稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_score_numb', '成績編號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_data_from', '資料來源', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_chang_numb', '使用的轉換表編號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_seme_test', 'st_name_long', '測驗成績的中文全名', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_mschool_name', '學校名稱', 'varchar(40)', 0, 0, '學校名稱_國小');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_study_year', '入學年', 'int(10) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_base', 'curr_class_num', '目前班級', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_base', 'stud_study_cond', '', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_base', 'email_pass', '', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'teach_title_id', '職稱代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'title_name', '職稱', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'title_kind', '職稱類別', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'title_short_name', '簡稱', 'varchar(12)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'room_id', '處室代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_title', 'title_memo', '備註', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_id', '教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_person_id', '身分證字號', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'name', '姓名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'sex', '性別', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'age', '年齡', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'birthday', '生日', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'birth_place', '出生地', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'marriage', '結婚狀態', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'address', '住址', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'home_phone', '家中電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'cell_phone', '手機', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'office_home', '辦公室電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_condition', '在職狀態', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_memo', '備註', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'login_pass', '登入密碼', 'varchar(12)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_edu_kind', '最高學歷', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_edu_abroad', '學歷國別', 'varchar(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_sub_kind', '教師檢定科', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_check_kind', '檢定資格', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_check_word', '教師證書登記字號', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'teach_is_cripple', '是否領有殘障手冊', 'char(2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'update_time', '', 'timestamp(14)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_base', 'update_id', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'teach_id', '教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'email', '電子郵件一', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'email2', '電子郵件二', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'email3', '電子郵件三', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'selfweb', '個人首頁一', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'selfweb2', '個人首頁二', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'classweb', '班級首頁一', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'classweb2', '班級首頁二', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_connect', 'ICQ', 'ICQ', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_table', 'd_table_name', '資料表名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_table', 'd_table_cname', '中文名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_table', 'd_table_group', '群組名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_table_name', '資料表名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_field_name', '欄位名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_field_cname', '中文欄位名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_field_type', '欄位型態', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_field_order', '排序', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_is_display', '是否顯示', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('sys_data_field', 'd_field_xml', 'XML TAG', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_kind_id', '模組編號', 'smallint(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_kind_name', '模組名稱', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_kind_order', '排列次序', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'home_index', '首頁程式', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'store_path', '程式路徑', 'varchar(200)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_author', '作者', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_parent', '上層模組編號', 'smallint(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_isopen', '允許\進入', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_kind', 'pro_islive', '是否啟用', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'pc_id', '認證流水號', 'int(11)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'pro_kind_id', '模組編號', 'smallint(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'stud_id', '學生學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'teach_id', '授權教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'use_date', '啟用日期', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'use_last_date', '結束啟用日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check_stu', 'class_num', '班級編號', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'pc_id', '認證流水號', 'bigint(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'pro_kind_id', '模組編號', 'smallint(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'post_office', '所在處室編號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'teach_id', '教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'teach_title_id', '職稱代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_check', 'is_admin', '是否為管理者', 'char(1)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'teach_id', '教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'post_kind', '職別編號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'post_office', '所在處室編號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'post_level', '職等', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'official_level', '官等', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'post_class', '職級', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'post_num', '本職代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'bywork_num', '兼職代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'salay', '薪俸', 'mediumint(9)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'appoint_date', '初任職日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'arrive_date', '到職日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'approve_date', '任職核准日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'approve_number', '任職核准文號', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'teach_title_id', '職稱', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'class_num', '任教班級', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'update_time', '更新時間', 'timestamp(14)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('teacher_post', 'update_id', '更新者ID', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_id', '學校代號', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_attr_id', '學校屬性', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_cname', '全銜', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_cname_s', '簡稱', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_cname_ss', '短稱', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_ename', '英文名稱', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_sheng', '所在縣市', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_cdate', '建校日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_mark', '註記', 'varchar(8)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_class', '級別', 'varchar(8)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_montain', '山地識別', 'char(2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_area_tol', '校地總面積', 'float(10,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_area_ext', '校地總延面積', 'float(10,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_area_pin', '建坪面積', 'float(10,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_money', '資本門支出', 'float(10,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_money_o', '經常門支出', 'float(10,2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_local_name', '鄉鎮市區別', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_post_num', '郵遞區號', 'varchar(5)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_addr', '學校地址', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_phone', '學校電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_fax', '傳真', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_area', '學校行政區', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_kind', '學校類型', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_url', '學校網址', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'sch_email', '電子郵件', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'update_time', '', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'update_id', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_base', 'update_ip', '', 'varchar(15)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'enable', '是否存在', 'enum(\'1\',\'0\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'c_year', '年', 'tinyint(2) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'c_name', '班名', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'c_kind', '類型', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'c_sort', '班名排序', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'class_sn', '流水號', 'mediumint(8) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'class_id', '班級代號', 'varchar(11)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'year', '學年度', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_class', 'semester', '學期', 'enum(\'1\',\'2\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module', 'pm_id', '流水號', 'bigint(11)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module', 'pm_name', '名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module', 'pm_item', '選項', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module', 'pm_memo', '說明', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module', 'pm_value', '設定值', 'varchar(100)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'pm_name', '程式代號', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'm_display_name', '程式名稱', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'm_group_name', '群組', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'm_ver', '版本', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'm_create_date', '建立時間', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('pro_module_main', 'm_path', '預設存放目錄', 'varchar(60)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'seme_year_seme', '學年學期', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'stud_id', '學生代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_p_relation', '父母關係', 'varchar(8)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_air', '家庭氣氛', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_edu_fath', '父管教方式', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_edu_moth', '母管教方式', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_live', '居住情形', 'varchar(12)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_camer', '經濟狀況', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_sub_like', '最喜愛科目', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_sub_diff', '最困難科目', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_spec', '特殊才能', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_hobby', '興趣', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_habit', '習慣', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_relation', '人際關係', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_behave_o', '外向行為', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_behave_i', '內向行為', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_behave_edu', '學習行為', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_habit_bad', '不良習慣', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_behave_agi', '焦慮行為', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_temp1', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'guid_temp2', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'update_time', '', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guidance', 'update_id', '', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_id', '個案編號', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_from', '個案來源', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_bdate', '接案日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_teacher', '認輔老師', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_kind', '問題類別', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_behave', '偏差行為', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_reason', '適應不良原因', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_isover', '結案否', 'char(2)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_over_reason', '結案日期', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'guid_c_edate', '輔導日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'update_time', '更新時間', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case', 'update_id', '更新者代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_list', 'guid_l_id', '流水號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_list', 'guid_c_id', '個案編號', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_list', 'guid_l_date', '輔導日期', 'date', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_list', 'guid_l_con', '輔導內', 'varchar(40)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_list', 'update_id', '更新者代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_u', 'guid_u_id', '個案編號', 'bigint(20) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('stud_guid_case_u', 'guid_c_id', '關聯編號', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'current_school_year', '學年學期', 'smallint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'teach_id', '教師代號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'teach_title_id', '教師職稱代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'class_num', '任教班級', 'varchar(6)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id1', '任教科目一', 'tinyint(3)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id2', '任教科目二', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id3', '任教科目三', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id4', '任教科目四', 'tinyint(3)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id5', '任教科目五', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('seme_class', 'subject_id6', '任教科目六', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_room', 'room_id', '處室編號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_room', 'room_name', '處室名稱', 'varchar(30)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_room', 'room_tel', '處室電話', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_room', 'room_fax', '處室傳真', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('school_room', 'enable', '是否作用', 'enum(\'1\',\'0\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'serial', '流水號', 'smallint(8) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'teacher_id', '教師代號', 'int(8) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'subject', '科目', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'property', '', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'kind', '類別', 'tinyint(2) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'level', '等級', 'varchar(10)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment', 'comm', '評語內容', 'varchar(200)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_kind', 'kind_serial', '流水號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_kind', 'kind_teacher_id', '教師代號', 'int(8) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_kind', 'kind_name', '類別名稱', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_level', 'level_serial', '流水號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_level', 'level_teacher_id', '教師代號', 'int(8) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('comment_level', 'level_name', '等級', 'varchar(50)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_sn', '流水號', 'smallint(5) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'interface_sn', '界面代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_text', '欄位名稱', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_value', '欄位選項', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_type', '欄位控制項', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_fn', '取值函式', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_ss', '科目相關', 'enum(\'n\',\'y\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_comment', '呼叫選填', 'enum(\'n\',\'y\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_check', '檢查空值', 'enum(\'0\',\'1\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'col_date', '建立時間', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_col', 'enable', '是否作用', 'enum(\'1\',\'0\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'interface_sn', '樣版代號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'title', '標題', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'text', '說明', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'html', '', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'sshtml', '', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'xml', '', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_interface', 'all_ss', '', 'enum(\'n\',\'y\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'sc_sn', '流水號', 'int(10) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'interface_sn', '界面代號', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'date', '建立日期', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'stud_id', '學號', 'varchar(20)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'class_id', '班級代號', 'varchar(11)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'value', '值', 'text', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'sel_year', '學年', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_input_value', 'sel_seme', '學期', 'enum(\'1\',\'2\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'setup_id', '流水號', 'smallint(5) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'year', '學年', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'semester', '學期', 'enum(\'1\',\'2\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'class_year', '年級', 'tinyint(2) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'performance_test_times', '定期考查次數', 'tinyint(1) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'practice_test_times', '預設考試次數', 'tinyint(2) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'test_ratio', '比率', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'rule', '等第設定', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'score_mode', '各年級採用相同設定', 'enum(\'all\',\'severally\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'sections', '每日上課節數', 'tinyint(4)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'interface_sn', '成績單界面', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'update_date', '更新時間', 'datetime', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_setup', 'enable', '是否作用', 'enum(\'1\',\'0\',\'always\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_subject', 'subject_id', '科目流水號', 'tinyint(3) unsigned', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_subject', 'subject_name', '科目名稱', 'varchar(255)', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_subject', 'subject_school', '符合科目年級', 'set(\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_subject', 'subject_kind', '科目類別(領域或學科)', 'enum(\'scope\',\'subject\')', 0, 0, '');
INSERT INTO sys_data_field VALUES ('score_subject', 'enable', '是否作用', 'enum(\'1\',\'0\')', 0, 0, '');

#
# 資料表格式： `sys_data_table`
#

CREATE TABLE sys_data_table (
  d_table_name varchar(30) NOT NULL default '',
  d_table_cname varchar(30) NOT NULL default '',
  d_table_group varchar(30) NOT NULL default '',
  PRIMARY KEY  (d_table_name),
  UNIQUE KEY d_table_name (d_table_name)
) TYPE=MyISAM COMMENT='資料庫名稱';

#
# 列出以下資料庫的數據： `sys_data_table`
#

#
# Dumping data for table `sys_data_table`
#
INSERT INTO sys_data_table VALUES ('score_input_col', '成績單界面-欄位', '成績資料');
INSERT INTO sys_data_table VALUES ('score_input_interface', '成績單界面', '成績資料');
INSERT INTO sys_data_table VALUES ('compclass', '', '校務模組');
INSERT INTO sys_data_table VALUES ('borrow', '', '校務模組');
INSERT INTO sys_data_table VALUES ('bookch1', '', '校務模組');
INSERT INTO sys_data_table VALUES ('book', '', '校務模組');
INSERT INTO sys_data_table VALUES ('board_p', '', '校務模組');
INSERT INTO sys_data_table VALUES ('board_kind', '', '校務模組');
INSERT INTO sys_data_table VALUES ('board_check', '', '校務模組');
INSERT INTO sys_data_table VALUES ('stud_guidance', '輔導基本資料', '學生輔導資料');
INSERT INTO sys_data_table VALUES ('stud_guid_case_u', '輔導個案資料-關聯記錄', '學生輔導資料');
INSERT INTO sys_data_table VALUES ('pro_check', '模組認證', '系統設定');
INSERT INTO sys_data_table VALUES ('pro_check_stu', '學生認證', '系統設定');
INSERT INTO sys_data_table VALUES ('pro_kind', '模組項目', '系統設定');
INSERT INTO sys_data_table VALUES ('stud_behabior', '', '學生輔導資料');
INSERT INTO sys_data_table VALUES ('stud_guid_case_list', '輔導個案資料-輔導內容', '學生輔導資料');
INSERT INTO sys_data_table VALUES ('stud_guid_case', '輔導個案資料', '學生輔導資料');
INSERT INTO sys_data_table VALUES ('pro_module_main', '程式設定記錄', '系統設定');
INSERT INTO sys_data_table VALUES ('stud_base', '學生基本資料', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_brother_sister', '學生兄弟姐妹', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_domicile', '學生家庭資料', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_eduh', '輔導個案資料', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_grad', '畢修業紀錄', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_kinfolk', '其他親屬', '學生資料');
INSERT INTO sys_data_table VALUES ('stud_mid_abs', '學期缺席', '期中資料');
INSERT INTO sys_data_table VALUES ('stud_mid_rep', '期中獎懲記錄', '期中資料');
INSERT INTO sys_data_table VALUES ('stud_mid_sco', '社團資料', '期中資料');
INSERT INTO sys_data_table VALUES ('stud_move', '期中異動', '期中資料');
INSERT INTO sys_data_table VALUES ('stud_seme', '個別學期資料', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_abs', '學期缺席', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_eduh', '學期輔導基本資料', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_score', '學期成績', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_score_s', '學期成期-分項成績', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_spe', '特殊優良表現', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_talk', '學期輔導訪談記錄', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_seme_test', '心理測驗成績', '學期資料');
INSERT INTO sys_data_table VALUES ('stud_sick_f', '學生家庭病史', '學生健康資料');
INSERT INTO sys_data_table VALUES ('stud_sick_p', '學生個人病史', '學生健康資料');
INSERT INTO sys_data_table VALUES ('subj_cour', '年級開課維護', '課務管理');
INSERT INTO sys_data_table VALUES ('subj_hour', '上課時間設定', '課務管理');
INSERT INTO sys_data_table VALUES ('sys_data_field', '系統欄位', '系統設定');
INSERT INTO sys_data_table VALUES ('sys_data_table', '系統資料表', '系統設定');
INSERT INTO sys_data_table VALUES ('teacher_base', '教師基本資料', '教師資料');
INSERT INTO sys_data_table VALUES ('teacher_connect', '教師網路資料', '教師資料');
INSERT INTO sys_data_table VALUES ('teacher_post', '教師任職資料', '教師資料');
INSERT INTO sys_data_table VALUES ('teacher_subject', '教師任教科目', '教師資料');
INSERT INTO sys_data_table VALUES ('teacher_title', '教師職稱資料', '教師資料');
INSERT INTO sys_data_table VALUES ('pro_module', '程式選項設定', '系統設定');
INSERT INTO sys_data_table VALUES ('school_class', '班級資料', '學校資料');
INSERT INTO sys_data_table VALUES ('school_base', '學校基本資料', '學校資料');
INSERT INTO sys_data_table VALUES ('comment', '評語', '成績資料');
INSERT INTO sys_data_table VALUES ('comment_kind', '評語種類', '成績資料');
INSERT INTO sys_data_table VALUES ('comment_level', '評語等級', '成績資料');
INSERT INTO sys_data_table VALUES ('docup', '', '校務模組');
INSERT INTO sys_data_table VALUES ('docup_p', '', '校務模組');
INSERT INTO sys_data_table VALUES ('exam', '', '校務模組');
INSERT INTO sys_data_table VALUES ('exam_kind', '', '校務模組');
INSERT INTO sys_data_table VALUES ('exam_stud', '', '校務模組');
INSERT INTO sys_data_table VALUES ('exam_stud_data', '', '校務模組');
INSERT INTO sys_data_table VALUES ('file_db', '', '校務模組');
INSERT INTO sys_data_table VALUES ('fixed_check', '', '校務模組');
INSERT INTO sys_data_table VALUES ('fixed_kind', '', '校務模組');
INSERT INTO sys_data_table VALUES ('fixedtb', '', '校務模組');
INSERT INTO sys_data_table VALUES ('form_all', '', '校務模組');
INSERT INTO sys_data_table VALUES ('form_col', '', '校務模組');
INSERT INTO sys_data_table VALUES ('form_fill_in', '', '校務模組');
INSERT INTO sys_data_table VALUES ('form_value', '', '校務模組');
INSERT INTO sys_data_table VALUES ('goodstu', '', '校務模組');
INSERT INTO sys_data_table VALUES ('gscore', '', '校務模組');
INSERT INTO sys_data_table VALUES ('inquire', '', '校務模組');
INSERT INTO sys_data_table VALUES ('new_board', '', '校務模組');
INSERT INTO sys_data_table VALUES ('quire_data', '', '校務模組');
INSERT INTO sys_data_table VALUES ('sch_doc1', '', '校務模組');
INSERT INTO sys_data_table VALUES ('sch_doc1_unit', '', '校務模組');
INSERT INTO sys_data_table VALUES ('school_board', '', '校務模組');
INSERT INTO sys_data_table VALUES ('soft', '', '校務模組');
INSERT INTO sys_data_table VALUES ('softm', '', '校務模組');
INSERT INTO sys_data_table VALUES ('stud_addr', '', '校務模組');
INSERT INTO sys_data_table VALUES ('tape', '', '校務模組');
INSERT INTO sys_data_table VALUES ('tapem', '', '校務模組');
INSERT INTO sys_data_table VALUES ('tool', '', '校務模組');
INSERT INTO sys_data_table VALUES ('toolm', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_entry', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_entry_repeats', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_entry_user', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_user', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_user_layers', '', '校務模組');
INSERT INTO sys_data_table VALUES ('webcal_user_pref', '', '校務模組');
INSERT INTO sys_data_table VALUES ('sfs_log', '', '系統設定');
INSERT INTO sys_data_table VALUES ('sfs_text', '', '系統設定');
INSERT INTO sys_data_table VALUES ('school_class_num', '學年班級數', '學校資料');
INSERT INTO sys_data_table VALUES ('school_room', '處室資料', '學校資料');
INSERT INTO sys_data_table VALUES ('score_course', '學期排課記錄', '課務管理');
INSERT INTO sys_data_table VALUES ('score_input_value', '成績單界面-值', '成績資料');
INSERT INTO sys_data_table VALUES ('score_setup', '成績基本設定', '成績資料');
INSERT INTO sys_data_table VALUES ('score_subject', '學科資料', '成績資料');
INSERT INTO sys_data_table VALUES ('seme_class', '學期班級記錄', '學期資料');


INSERT INTO sfs_text VALUES ('550', 'non_display', 3, 0, '不顯示目錄', '', 0, '');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 0, 'include', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 1, 'images', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 2, 'image', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 3, 'doc', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 4, 'upgrade', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 5, 'pass', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 6, 'setup', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 7, 'db', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 8, 'themes', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 9, 'docs', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 10, 'templates', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 11, 'util', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 12, 'includes', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 13, 'translations', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 14, 'pnadodb', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 15, 'updata', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 16, 'CVS', '550,', 550, '.');
INSERT INTO sfs_text VALUES ('', 'non_display', 3, 17, 'data', '550,', 550, '.');

CREATE TABLE IF NOT EXISTS compclass (
  pDate date NOT NULL default '0000-00-00',
  pMday tinyint(4) NOT NULL default '0',
  pCNum tinyint(4) NOT NULL default '0',
  pClass varchar(20) default NULL,
  pTeacher varchar(20) default NULL,
  teach_id varchar(20) default NULL,
  PRIMARY KEY  (pDate,pMday,pCNum)
) TYPE=MyISAM;


#
# 資料表格式： `comment`
#

CREATE TABLE comment (
  serial smallint(8) unsigned NOT NULL auto_increment,
  teacher_id int(8) unsigned default NULL,
  subject tinyint(3) unsigned default NULL,
  property tinyint(3) unsigned default NULL,
  kind tinyint(2) unsigned default NULL,
  level varchar(10) NOT NULL default '',
  comm varchar(200) NOT NULL default '',
  PRIMARY KEY  (serial)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `comment`
#

INSERT INTO comment VALUES (1, 0, 0, 0, 2, '1', '力學不倦急公好義');
INSERT INTO comment VALUES (2, 0, 0, 0, 2, '1', '服務熱心品德優良');
INSERT INTO comment VALUES (3, 0, 0, 0, 2, '1', '勤奮好學熱心公益');
INSERT INTO comment VALUES (4, 0, 0, 0, 2, '1', '熱誠和藹遵守校規');
INSERT INTO comment VALUES (5, 0, 0, 0, 2, '1', '努力謙恭循規蹈矩');
INSERT INTO comment VALUES (6, 0, 0, 0, 2, '1', '熱心公益品行端正');
INSERT INTO comment VALUES (7, 0, 0, 0, 2, '1', '品行端正學業優良');
INSERT INTO comment VALUES (8, 0, 0, 0, 2, '1', '勤勉不懈循規蹈矩');
INSERT INTO comment VALUES (9, 0, 0, 0, 2, '1', '志切上進品德優良');
INSERT INTO comment VALUES (10, 0, 0, 0, 2, '1', '服務熱心讀書認真');
INSERT INTO comment VALUES (11, 0, 0, 0, 2, '1', '嚴守校規行為檢點');
INSERT INTO comment VALUES (12, 0, 0, 0, 2, '1', '專心向學篤實守分');
INSERT INTO comment VALUES (13, 0, 0, 0, 2, '1', '名列前茅品學兼優');
INSERT INTO comment VALUES (14, 0, 0, 0, 2, '1', '頗堪造就誠懇篤實');
INSERT INTO comment VALUES (15, 0, 0, 0, 2, '1', '有恆有守勤奮好學');
INSERT INTO comment VALUES (16, 0, 0, 0, 2, '1', '熱心服務守規認真');
INSERT INTO comment VALUES (17, 0, 0, 0, 2, '1', '努力進取品行優良');
INSERT INTO comment VALUES (18, 0, 0, 0, 2, '1', '好學不倦潔身自愛');
INSERT INTO comment VALUES (19, 0, 0, 0, 2, '1', '友愛同學熱心公益');
INSERT INTO comment VALUES (20, 0, 0, 0, 2, '1', '生活規律勤敏向學');
INSERT INTO comment VALUES (21, 0, 0, 0, 2, '1', '處事勤敏性情和善');
INSERT INTO comment VALUES (22, 0, 0, 0, 2, '1', '堪以造就學行均優');
INSERT INTO comment VALUES (23, 0, 0, 0, 2, '1', '品學兼優熱心公務');
INSERT INTO comment VALUES (24, 0, 0, 0, 2, '1', '學業優良品行端方');
INSERT INTO comment VALUES (25, 0, 0, 0, 2, '1', '志行堪嘉誠懇樸實');
INSERT INTO comment VALUES (26, 0, 0, 0, 2, '1', '謙恭有禮坦白直爽');
INSERT INTO comment VALUES (27, 0, 0, 0, 2, '1', '行為良好思想純正');
INSERT INTO comment VALUES (28, 0, 0, 0, 2, '1', '做事敏捷性情溫良');
INSERT INTO comment VALUES (29, 0, 0, 0, 2, '1', '捨己為群熱心公益');
INSERT INTO comment VALUES (30, 0, 0, 0, 2, '1', '課業認真活潑進取');
INSERT INTO comment VALUES (31, 0, 0, 0, 2, '1', '熱心公益刻苦耐勞');
INSERT INTO comment VALUES (32, 0, 0, 0, 2, '1', '待人和氣品學兼優');
INSERT INTO comment VALUES (33, 0, 0, 0, 2, '1', '志行純潔忠厚勤僕');
INSERT INTO comment VALUES (34, 0, 0, 0, 2, '1', '深知自愛沉靜認真');
INSERT INTO comment VALUES (35, 0, 0, 0, 2, '1', '喜抱不平富正義感');
INSERT INTO comment VALUES (36, 0, 0, 0, 2, '1', '工作努力儀容整潔');
INSERT INTO comment VALUES (37, 0, 0, 0, 2, '1', '行為端莊思想純正');
INSERT INTO comment VALUES (38, 0, 0, 0, 2, '1', '埋頭進取努力求知');
INSERT INTO comment VALUES (39, 0, 0, 0, 2, '1', '知過即改擇善固執');
INSERT INTO comment VALUES (40, 0, 0, 0, 2, '1', '專志向學行為端正');
INSERT INTO comment VALUES (41, 0, 0, 0, 2, '1', '專心向學嚴篤守分');
INSERT INTO comment VALUES (42, 0, 0, 0, 2, '1', '品學兼優熱心為公');
INSERT INTO comment VALUES (43, 0, 0, 0, 2, '1', '謙恭有禮聰明和藹');
INSERT INTO comment VALUES (44, 0, 0, 0, 2, '1', '孜孜不倦勤學守規');
INSERT INTO comment VALUES (45, 0, 0, 0, 2, '1', '禮貌周到精神振作');
INSERT INTO comment VALUES (46, 0, 0, 0, 2, '1', '朝氣蓬勃作息有序');
INSERT INTO comment VALUES (47, 0, 0, 0, 2, '1', '善于待人服務熱心');
INSERT INTO comment VALUES (48, 0, 0, 0, 2, '1', '天性善良忠厚純樸');
INSERT INTO comment VALUES (49, 0, 0, 0, 2, '1', '聰明伶俐剛毅爽直');
INSERT INTO comment VALUES (50, 0, 0, 0, 2, '1', '努力進取品行優良');
INSERT INTO comment VALUES (51, 0, 0, 0, 2, '1', '克己助人守規勤學');
INSERT INTO comment VALUES (52, 0, 0, 0, 2, '1', '熱誠和藹遵守校規');
INSERT INTO comment VALUES (53, 0, 0, 0, 2, '1', '處事勤敏性情和善');
INSERT INTO comment VALUES (54, 0, 0, 0, 2, '1', '力學不倦勤誠穩重');
INSERT INTO comment VALUES (55, 0, 0, 0, 2, '1', '有責任感服務熱誠');
INSERT INTO comment VALUES (56, 0, 0, 0, 2, '1', '勤勉不懈循規蹈矩');
INSERT INTO comment VALUES (57, 0, 0, 0, 2, '1', '活潑親切純樸踏實');
INSERT INTO comment VALUES (58, 0, 0, 0, 2, '1', '頗堪造就志切上進');
INSERT INTO comment VALUES (59, 0, 0, 0, 2, '1', '志行堪嘉活潑進取');
INSERT INTO comment VALUES (60, 0, 0, 0, 2, '1', '持之有恆刻苦好學');
INSERT INTO comment VALUES (61, 0, 0, 0, 2, '1', '服務熱心敬業樂群');
INSERT INTO comment VALUES (62, 0, 0, 0, 2, '1', '品學超群氣宇軒昂');
INSERT INTO comment VALUES (63, 0, 0, 0, 2, '1', '深知自愛沉靜認真');
INSERT INTO comment VALUES (64, 0, 0, 0, 2, '1', '謙和有禮品學兼優');
INSERT INTO comment VALUES (65, 0, 0, 0, 2, '1', '專心向學誠篤守分');
INSERT INTO comment VALUES (66, 0, 0, 0, 2, '1', '品學兼優熱心為公');
INSERT INTO comment VALUES (67, 0, 0, 0, 2, '1', '勤勉有為熱心公務');
INSERT INTO comment VALUES (68, 0, 0, 0, 2, '1', '謙恭有禮聰明和藹');
INSERT INTO comment VALUES (69, 0, 0, 0, 2, '1', '孜孜不倦勤學守規');
INSERT INTO comment VALUES (70, 0, 0, 0, 2, '1', '捨己為群熱心公益');
INSERT INTO comment VALUES (71, 0, 0, 0, 2, '1', '有責任心富正義感');
INSERT INTO comment VALUES (72, 0, 0, 0, 2, '1', '熱心服務守規認真');
INSERT INTO comment VALUES (73, 0, 0, 0, 2, '1', '任勞任怨坦白純誠');
INSERT INTO comment VALUES (74, 0, 0, 0, 2, '1', '力圖上進精細週詳');
INSERT INTO comment VALUES (75, 0, 0, 0, 2, '1', '工作認真品學兼優');
INSERT INTO comment VALUES (76, 0, 0, 0, 2, '1', '勇於負責品學兼優');
INSERT INTO comment VALUES (77, 0, 0, 0, 2, '1', '行為端莊思想純正');
INSERT INTO comment VALUES (78, 0, 0, 0, 2, '1', '知過即改擇善固執');
INSERT INTO comment VALUES (79, 0, 0, 0, 2, '1', '持之有恆刻苦好學');
INSERT INTO comment VALUES (80, 0, 0, 0, 2, '1', '合群守法勤懇熱誠');
INSERT INTO comment VALUES (81, 0, 0, 0, 2, '1', '埋頭進取努力求知');
INSERT INTO comment VALUES (82, 0, 0, 0, 2, '1', '專志向學行為端正');
INSERT INTO comment VALUES (83, 0, 0, 0, 2, '1', '志行堪嘉誠懇樸實');
INSERT INTO comment VALUES (84, 0, 0, 0, 2, '1', '恪守校規刻苦自勵');
INSERT INTO comment VALUES (85, 0, 0, 0, 2, '1', '自動自發勤勉向上');
INSERT INTO comment VALUES (86, 0, 0, 0, 2, '1', '性情溫和服務勤勞');
INSERT INTO comment VALUES (87, 0, 0, 0, 2, '1', '耿直忠誠奮勉自勵');
INSERT INTO comment VALUES (88, 0, 0, 0, 2, '1', '熱心公益虛心學習');
INSERT INTO comment VALUES (89, 0, 0, 0, 2, '1', '敬業樂群彬彬有禮');
INSERT INTO comment VALUES (90, 0, 0, 0, 2, '1', '負責盡職孜孜奮勉');
INSERT INTO comment VALUES (91, 0, 0, 0, 2, '1', '勤敏好學秉性純厚');
INSERT INTO comment VALUES (92, 0, 0, 0, 2, '1', '端莊誠篤溫和嫻靜');
INSERT INTO comment VALUES (93, 0, 0, 0, 2, '1', '循規蹈矩敦品勵學');
INSERT INTO comment VALUES (94, 0, 0, 0, 2, '1', '互助合作謹言慎行');
INSERT INTO comment VALUES (95, 0, 0, 0, 2, '1', '聰穎勤敏天真篤實');
INSERT INTO comment VALUES (96, 0, 0, 0, 2, '1', '堅苦自勵服務熱心');
INSERT INTO comment VALUES (97, 0, 0, 0, 2, '1', '力爭上游努力不懈');
INSERT INTO comment VALUES (98, 0, 0, 0, 2, '1', '富進取心尚知自愛');
INSERT INTO comment VALUES (99, 0, 0, 0, 2, '1', '克盡職守精明幹練');
INSERT INTO comment VALUES (100, 0, 0, 0, 2, '1', '任勞任怨互助合作');
INSERT INTO comment VALUES (101, 0, 0, 0, 2, '1', '守正不阿品行端莊');
INSERT INTO comment VALUES (102, 0, 0, 0, 2, '1', '節儉樸實刻苦自勵');
INSERT INTO comment VALUES (103, 0, 0, 0, 2, '1', '個性活潑資質穎悟');
INSERT INTO comment VALUES (104, 0, 0, 0, 2, '1', '待人誠&#65533;鬼茤妗膘}');
INSERT INTO comment VALUES (105, 0, 0, 0, 2, '1', '舉止安詳端莊持重');
INSERT INTO comment VALUES (106, 0, 0, 0, 2, '1', '勤學不倦莊重大方');
INSERT INTO comment VALUES (107, 0, 0, 0, 2, '1', '含蓄有禮忠厚勤懇');
INSERT INTO comment VALUES (108, 0, 0, 0, 2, '1', '聰明大方勤懇坦率');
INSERT INTO comment VALUES (109, 0, 0, 0, 2, '1', '頗知進取學習專心');
INSERT INTO comment VALUES (110, 0, 0, 0, 2, '1', '潔身自愛安分守己');
INSERT INTO comment VALUES (111, 0, 0, 0, 2, '1', '能知自愛守紀合群');
INSERT INTO comment VALUES (112, 0, 0, 0, 2, '1', '沉靜自勵誠實純樸');
INSERT INTO comment VALUES (113, 0, 0, 0, 2, '1', '儀容整潔自勉自勵');
INSERT INTO comment VALUES (114, 0, 0, 0, 2, '1', '剛毅沉著儀容端莊');
INSERT INTO comment VALUES (115, 0, 0, 0, 2, '1', '守法重紀克盡職責');
INSERT INTO comment VALUES (116, 0, 0, 0, 2, '1', '自動自覺守法重紀');
INSERT INTO comment VALUES (117, 0, 0, 0, 2, '1', '氣度高尚溫文爾雅');
INSERT INTO comment VALUES (118, 0, 0, 0, 2, '1', '謙恭有禮態度嚴謹');
INSERT INTO comment VALUES (119, 0, 0, 0, 2, '1', '待人和藹機智敏捷');
INSERT INTO comment VALUES (120, 0, 0, 0, 2, '1', '努力不懈溫和純樸');
INSERT INTO comment VALUES (121, 0, 0, 0, 2, '1', '勇於助人忠厚誠實');
INSERT INTO comment VALUES (122, 0, 0, 0, 2, '1', '敦厚誠實沉默寡言');
INSERT INTO comment VALUES (123, 0, 0, 0, 2, '1', '勤奮不懈頗知進取');
INSERT INTO comment VALUES (124, 0, 0, 0, 2, '1', '力求上進文靜大方');
INSERT INTO comment VALUES (125, 0, 0, 0, 2, '1', '純善可愛樂觀合群');
INSERT INTO comment VALUES (126, 0, 0, 0, 2, '1', '求知心切活潑聰明');
INSERT INTO comment VALUES (127, 0, 0, 0, 2, '1', '服務勤勉熱心公益');
INSERT INTO comment VALUES (128, 0, 0, 0, 2, '1', '堅毅果決勇於負責');
INSERT INTO comment VALUES (129, 0, 0, 0, 2, '1', '循規蹈矩秉性純厚');
INSERT INTO comment VALUES (130, 0, 0, 0, 2, '1', '樂於助人熱心服務');
INSERT INTO comment VALUES (131, 0, 0, 0, 2, '1', '力學不懈謙和有禮');
INSERT INTO comment VALUES (132, 0, 0, 0, 2, '1', '篤行耐勞安分守己');
INSERT INTO comment VALUES (133, 0, 0, 0, 2, '2', '尚知認真謹言慎行');
INSERT INTO comment VALUES (134, 0, 0, 0, 2, '2', '尚知努力坦白誠懇');
INSERT INTO comment VALUES (135, 0, 0, 0, 2, '2', '尚肯學習守分自治');
INSERT INTO comment VALUES (136, 0, 0, 0, 2, '2', '公私分明忠厚穩重');
INSERT INTO comment VALUES (137, 0, 0, 0, 2, '2', '守秩序愛整潔');
INSERT INTO comment VALUES (138, 0, 0, 0, 2, '2', '課業平平品行端正');
INSERT INTO comment VALUES (139, 0, 0, 0, 2, '2', '學業亦佳思想純正');
INSERT INTO comment VALUES (140, 0, 0, 0, 2, '2', '亦知認真謙恭有禮');
INSERT INTO comment VALUES (141, 0, 0, 0, 2, '2', '虛心學習安分守紀');
INSERT INTO comment VALUES (142, 0, 0, 0, 2, '2', '沉默寡言守規好學');
INSERT INTO comment VALUES (143, 0, 0, 0, 2, '2', '禮貌周到服務努力');
INSERT INTO comment VALUES (144, 0, 0, 0, 2, '2', '學業尚佳安分守己');
INSERT INTO comment VALUES (145, 0, 0, 0, 2, '2', '尚能合群謹言慎行');
INSERT INTO comment VALUES (146, 0, 0, 0, 2, '2', '學習認真性情溫和');
INSERT INTO comment VALUES (147, 0, 0, 0, 2, '2', '服務熱心禮貌周到');
INSERT INTO comment VALUES (148, 0, 0, 0, 2, '2', '待人有禮素性流利');
INSERT INTO comment VALUES (149, 0, 0, 0, 2, '2', '尚知用心思想純正');
INSERT INTO comment VALUES (150, 0, 0, 0, 2, '2', '服務熱心尚知勤學');
INSERT INTO comment VALUES (151, 0, 0, 0, 2, '2', '尚能合群循規蹈矩');
INSERT INTO comment VALUES (152, 0, 0, 0, 2, '2', '知過能改頗有認識');
INSERT INTO comment VALUES (153, 0, 0, 0, 2, '2', '品學尚佳知禮守法');
INSERT INTO comment VALUES (154, 0, 0, 0, 2, '2', '不知認真資質慧敏');
INSERT INTO comment VALUES (155, 0, 0, 0, 2, '2', '學業尚佳樂於助人');
INSERT INTO comment VALUES (156, 0, 0, 0, 2, '2', '學業尚佳體格健全');
INSERT INTO comment VALUES (157, 0, 0, 0, 2, '2', '更待進取學習尚佳');
INSERT INTO comment VALUES (158, 0, 0, 0, 2, '2', '能識大體忠厚穩重');
INSERT INTO comment VALUES (159, 0, 0, 0, 2, '2', '學習虛心品行端正');
INSERT INTO comment VALUES (160, 0, 0, 0, 2, '2', '堪以造就本質純正');
INSERT INTO comment VALUES (161, 0, 0, 0, 2, '2', '尚知努力勤謹自守');
INSERT INTO comment VALUES (162, 0, 0, 0, 2, '2', '遇事樂觀沉著努力');
INSERT INTO comment VALUES (163, 0, 0, 0, 2, '2', '尚知奮勉勤勞克苦');
INSERT INTO comment VALUES (164, 0, 0, 0, 2, '2', '尚能律己性情倔強');
INSERT INTO comment VALUES (165, 0, 0, 0, 2, '2', '稍欠勤奮性情保守');
INSERT INTO comment VALUES (166, 0, 0, 0, 2, '2', '尚知勤奮秉性忠誠');
INSERT INTO comment VALUES (167, 0, 0, 0, 2, '2', '稍欠活潑沉靜好學');
INSERT INTO comment VALUES (168, 0, 0, 0, 2, '2', '尚勤于學熱心公益');
INSERT INTO comment VALUES (169, 0, 0, 0, 2, '2', '學行尚佳體格健全');
INSERT INTO comment VALUES (170, 0, 0, 0, 2, '2', '學習認真性情溫和');
INSERT INTO comment VALUES (171, 0, 0, 0, 2, '2', '隨遇而安性情和順');
INSERT INTO comment VALUES (172, 0, 0, 0, 2, '2', '尚知努力安分守己');
INSERT INTO comment VALUES (173, 0, 0, 0, 2, '2', '亦知合群勤儉守規');
INSERT INTO comment VALUES (174, 0, 0, 0, 2, '2', '勤於學習熱心公務');
INSERT INTO comment VALUES (175, 0, 0, 0, 2, '2', '獨善其身守規認真');
INSERT INTO comment VALUES (176, 0, 0, 0, 2, '2', '尚知認真守法知禮');
INSERT INTO comment VALUES (177, 0, 0, 0, 2, '2', '修養稍差性情直率');
INSERT INTO comment VALUES (178, 0, 0, 0, 2, '2', '樂於助人工作負責');
INSERT INTO comment VALUES (179, 0, 0, 0, 2, '2', '學業尚佳安分守矩');
INSERT INTO comment VALUES (180, 0, 0, 0, 2, '2', '略欠積極勤儉向學');
INSERT INTO comment VALUES (181, 0, 0, 0, 2, '2', '尚知努力平庸自守');
INSERT INTO comment VALUES (182, 0, 0, 0, 2, '2', '更待進取學行尚佳');
INSERT INTO comment VALUES (183, 0, 0, 0, 2, '2', '遵守校規安分守己');
INSERT INTO comment VALUES (184, 0, 0, 0, 2, '2', '堪以造就思想純正');
INSERT INTO comment VALUES (185, 0, 0, 0, 2, '2', '服務熱心禮貌周到');
INSERT INTO comment VALUES (186, 0, 0, 0, 2, '2', '修養稍差性情直率');
INSERT INTO comment VALUES (187, 0, 0, 0, 2, '2', '學業平均尚遵校規');
INSERT INTO comment VALUES (188, 0, 0, 0, 2, '2', '明識大體忠厚穩重');
INSERT INTO comment VALUES (189, 0, 0, 0, 2, '2', '尚能負責性情倔強');
INSERT INTO comment VALUES (190, 0, 0, 0, 2, '2', '尚能負責熱心公務');
INSERT INTO comment VALUES (191, 0, 0, 0, 2, '2', '虛心學習安分守己');
INSERT INTO comment VALUES (192, 0, 0, 0, 2, '2', '稍欠勤奮性情保守');
INSERT INTO comment VALUES (193, 0, 0, 0, 2, '2', '待人有禮秉性溫和');
INSERT INTO comment VALUES (194, 0, 0, 0, 2, '2', '尚勤於學敬愛師長');
INSERT INTO comment VALUES (195, 0, 0, 0, 2, '2', '勤於學習熱心公務');
INSERT INTO comment VALUES (196, 0, 0, 0, 2, '2', '尚知認真謹言慎行');
INSERT INTO comment VALUES (197, 0, 0, 0, 2, '2', '尚知勤學守分自治');
INSERT INTO comment VALUES (198, 0, 0, 0, 2, '2', '尚知奮勉勤勞刻苦');
INSERT INTO comment VALUES (199, 0, 0, 0, 2, '2', '尚知勤奮秉性忠誠');
INSERT INTO comment VALUES (200, 0, 0, 0, 2, '2', '略欠積極勤儉向學');
INSERT INTO comment VALUES (201, 0, 0, 0, 2, '2', '遇事樂觀沉著努力');
INSERT INTO comment VALUES (202, 0, 0, 0, 2, '2', '獨善其身守規認真');
INSERT INTO comment VALUES (203, 0, 0, 0, 2, '2', '資質平庸守己樂群');
INSERT INTO comment VALUES (204, 0, 0, 0, 2, '2', '學業尚佳謙恭有禮');
INSERT INTO comment VALUES (205, 0, 0, 0, 2, '2', '守秩序愛整潔');
INSERT INTO comment VALUES (206, 0, 0, 0, 2, '2', '尚知好學敬友樂群');
INSERT INTO comment VALUES (207, 0, 0, 0, 2, '2', '學業尚佳樂於助人');
INSERT INTO comment VALUES (208, 0, 0, 0, 2, '2', '不知認真資質敏慧');
INSERT INTO comment VALUES (209, 0, 0, 0, 2, '2', '學業平平品尚端正');
INSERT INTO comment VALUES (210, 0, 0, 0, 2, '2', '學業亦佳思想純正');
INSERT INTO comment VALUES (211, 0, 0, 0, 2, '2', '勤於學業坦白誠懇');
INSERT INTO comment VALUES (212, 0, 0, 0, 2, '2', '沉默寡言守規勤學');
INSERT INTO comment VALUES (213, 0, 0, 0, 2, '2', '尚知奮發勤勞負責');
INSERT INTO comment VALUES (214, 0, 0, 0, 2, '2', '互助合群勤樸守規');
INSERT INTO comment VALUES (215, 0, 0, 0, 2, '2', '尚知努力守法知禮');
INSERT INTO comment VALUES (216, 0, 0, 0, 2, '2', '待人有禮天真活潑');
INSERT INTO comment VALUES (217, 0, 0, 0, 2, '2', '樂觀好動求學不力');
INSERT INTO comment VALUES (218, 0, 0, 0, 2, '2', '沉著堅定尚能自治');
INSERT INTO comment VALUES (219, 0, 0, 0, 2, '2', '認真不夠貪玩好動');
INSERT INTO comment VALUES (220, 0, 0, 0, 2, '2', '頗有理智勇於改過');
INSERT INTO comment VALUES (221, 0, 0, 0, 2, '2', '愛好活動剛直不阿');
INSERT INTO comment VALUES (222, 0, 0, 0, 2, '2', '稍嫌浮動潔身自愛');
INSERT INTO comment VALUES (223, 0, 0, 0, 2, '2', '缺乏自治反應遲鈍');
INSERT INTO comment VALUES (224, 0, 0, 0, 2, '2', '尚知本份意志不專');
INSERT INTO comment VALUES (225, 0, 0, 0, 2, '2', '尚知進取天真活潑');
INSERT INTO comment VALUES (226, 0, 0, 0, 2, '2', '頗知進取活潑合群');
INSERT INTO comment VALUES (227, 0, 0, 0, 2, '2', '稍欠活潑沉靜好學');
INSERT INTO comment VALUES (228, 0, 0, 0, 2, '2', '品學尚佳知禮守法');
INSERT INTO comment VALUES (229, 0, 0, 0, 2, '2', '尚知認真唯天資稍差');
INSERT INTO comment VALUES (230, 0, 0, 0, 2, '2', '品德與學業較前進步');
INSERT INTO comment VALUES (231, 0, 0, 0, 2, '2', '性情爽直惜未專心課業');
INSERT INTO comment VALUES (232, 0, 0, 0, 2, '2', '學業尚可惟不知慎言');
INSERT INTO comment VALUES (233, 0, 0, 0, 2, '2', '尚知認真缺乏合作精神');
INSERT INTO comment VALUES (234, 0, 0, 0, 2, '2', '學業尚佳惟行動不便');
INSERT INTO comment VALUES (235, 0, 0, 0, 2, '2', '尚知認真惟天資較差');
INSERT INTO comment VALUES (236, 0, 0, 0, 2, '2', '努力不夠智慧有餘');
INSERT INTO comment VALUES (237, 0, 0, 0, 2, '2', '情緒鬆弛沉默寡言');
INSERT INTO comment VALUES (238, 0, 0, 0, 2, '2', '性好嬉戲自知檢點');
INSERT INTO comment VALUES (239, 0, 0, 0, 2, '2', '尚知奮勉性情剛直');
INSERT INTO comment VALUES (240, 0, 0, 0, 2, '3', '行為失檢生活放蕩');
INSERT INTO comment VALUES (241, 0, 0, 0, 2, '3', '行為失檢模糊不清');
INSERT INTO comment VALUES (242, 0, 0, 0, 2, '3', '不負責任推諉敷衍');
INSERT INTO comment VALUES (243, 0, 0, 0, 2, '3', '成績欠佳不知努力');
INSERT INTO comment VALUES (244, 0, 0, 0, 2, '3', '不求上進性情頑劣');
INSERT INTO comment VALUES (245, 0, 0, 0, 2, '3', '不知奮發懶惰萎靡');
INSERT INTO comment VALUES (246, 0, 0, 0, 2, '3', '不知振作精神萎靡');
INSERT INTO comment VALUES (247, 0, 0, 0, 2, '3', '程度仍差雖知努力');
INSERT INTO comment VALUES (248, 0, 0, 0, 2, '3', '不知努力行為隨便');
INSERT INTO comment VALUES (249, 0, 0, 0, 2, '3', '不善交遊獨善其身');
INSERT INTO comment VALUES (250, 0, 0, 0, 2, '3', '不求上進意志頹唐');
INSERT INTO comment VALUES (251, 0, 0, 0, 2, '3', '不知努力資質平庸');
INSERT INTO comment VALUES (252, 0, 0, 0, 2, '3', '有始無終有心學習');
INSERT INTO comment VALUES (253, 0, 0, 0, 2, '3', '學業平平身體衰弱');
INSERT INTO comment VALUES (254, 0, 0, 0, 2, '3', '言行不一公私不分');
INSERT INTO comment VALUES (255, 0, 0, 0, 2, '3', '不知認真投機取巧');
INSERT INTO comment VALUES (256, 0, 0, 0, 2, '3', '言行不符認識不清');
INSERT INTO comment VALUES (257, 0, 0, 0, 2, '3', '宜加檢點行動隨便');
INSERT INTO comment VALUES (258, 0, 0, 0, 2, '3', '不善待人學識尚佳');
INSERT INTO comment VALUES (259, 0, 0, 0, 2, '3', '不知善群性情孤僻');
INSERT INTO comment VALUES (260, 0, 0, 0, 2, '3', '學不安心性情浮躁');
INSERT INTO comment VALUES (261, 0, 0, 0, 2, '3', '不知合群言行粗野');
INSERT INTO comment VALUES (262, 0, 0, 0, 2, '3', '無公德心見利忘義');
INSERT INTO comment VALUES (263, 0, 0, 0, 2, '3', '不知猛醒小過屢犯');
INSERT INTO comment VALUES (264, 0, 0, 0, 2, '3', '悲觀消極服裝不整');
INSERT INTO comment VALUES (265, 0, 0, 0, 2, '3', '不聽教誨固執自信');
INSERT INTO comment VALUES (266, 0, 0, 0, 2, '3', '無心認真精神渙散');
INSERT INTO comment VALUES (267, 0, 0, 0, 2, '3', '毫無長進陽奉陰違');
INSERT INTO comment VALUES (268, 0, 0, 0, 2, '3', '得過且過茍且偷安');
INSERT INTO comment VALUES (269, 0, 0, 0, 2, '3', '不知長進懶惰嫉妒');
INSERT INTO comment VALUES (270, 0, 0, 0, 2, '3', '反覆無常意志不堅');
INSERT INTO comment VALUES (271, 0, 0, 0, 2, '3', '毫無進步程度低劣');
INSERT INTO comment VALUES (272, 0, 0, 0, 2, '3', '禮節不週散漫鬆懈');
INSERT INTO comment VALUES (273, 0, 0, 0, 2, '3', '無同情心幸災樂禍');
INSERT INTO comment VALUES (274, 0, 0, 0, 2, '3', '不知振作暮氣沉沉');
INSERT INTO comment VALUES (275, 0, 0, 0, 2, '3', '學業欠佳屢犯校規');
INSERT INTO comment VALUES (276, 0, 0, 0, 2, '3', '不知努力懶惰荒疏');
INSERT INTO comment VALUES (277, 0, 0, 0, 2, '3', '時學時輟一暴十寒');
INSERT INTO comment VALUES (278, 0, 0, 0, 2, '3', '行為散漫意志頹唐');
INSERT INTO comment VALUES (279, 0, 0, 0, 2, '3', '不專課業心有外鶩');
INSERT INTO comment VALUES (280, 0, 0, 0, 2, '3', '不知振作信心喪失');
INSERT INTO comment VALUES (281, 0, 0, 0, 2, '3', '無公德心自私自利');
INSERT INTO comment VALUES (282, 0, 0, 0, 2, '3', '不求上進萎靡不振');
INSERT INTO comment VALUES (283, 0, 0, 0, 2, '3', '不負責任懶惰敷衍');
INSERT INTO comment VALUES (284, 0, 0, 0, 2, '3', '勉能應付尚知努力');
INSERT INTO comment VALUES (285, 0, 0, 0, 2, '3', '雜亂無章懶惰成性');
INSERT INTO comment VALUES (286, 0, 0, 0, 2, '3', '不堪教誨侮辱師長');
INSERT INTO comment VALUES (287, 0, 0, 0, 2, '3', '課業荒疏愛看小說');
INSERT INTO comment VALUES (288, 0, 0, 0, 2, '3', '不求進益行為自私');
INSERT INTO comment VALUES (289, 0, 0, 0, 2, '3', '不知悔改屢犯小錯');
INSERT INTO comment VALUES (290, 0, 0, 0, 2, '3', '得過且過不知認真');
INSERT INTO comment VALUES (291, 0, 0, 0, 2, '3', '學業退步精神萎靡');
INSERT INTO comment VALUES (292, 0, 0, 0, 2, '3', '不知努力行為隨便');
INSERT INTO comment VALUES (293, 0, 0, 0, 2, '3', '不求上進精神分散');
INSERT INTO comment VALUES (294, 0, 0, 0, 2, '3', '心有二用不守規則');
INSERT INTO comment VALUES (295, 0, 0, 0, 2, '3', '尚待啟發天資遲鈍');
INSERT INTO comment VALUES (296, 0, 0, 0, 2, '3', '學習不專精神萎靡');
INSERT INTO comment VALUES (297, 0, 0, 0, 2, '3', '有始無終用心不專');
INSERT INTO comment VALUES (298, 0, 0, 0, 2, '3', '讀書不專心欠沉靜');
INSERT INTO comment VALUES (299, 0, 0, 0, 2, '3', '不善合群學業尚佳');
INSERT INTO comment VALUES (300, 0, 0, 0, 2, '3', '欠進取精神');
INSERT INTO comment VALUES (301, 0, 0, 0, 2, '3', '不求甚解用心不專');
INSERT INTO comment VALUES (302, 0, 0, 0, 2, '3', '課業平平尚守規矩');
INSERT INTO comment VALUES (303, 0, 0, 0, 2, '3', '且不認真天資笨拙');
INSERT INTO comment VALUES (304, 0, 0, 0, 2, '3', '不安於學性情浮躁');
INSERT INTO comment VALUES (305, 0, 0, 0, 2, '3', '成績欠佳性情懶惰');
INSERT INTO comment VALUES (306, 0, 0, 0, 2, '3', '不知自檢個性倔強');
INSERT INTO comment VALUES (307, 0, 0, 0, 2, '3', '課業落後表面敷衍');
INSERT INTO comment VALUES (308, 0, 0, 0, 2, '3', '時生爭執性情頑皮');
INSERT INTO comment VALUES (309, 0, 0, 0, 2, '3', '不知認真精神渙散');
INSERT INTO comment VALUES (310, 0, 0, 0, 2, '3', '自甘落後不知勤學');
INSERT INTO comment VALUES (311, 0, 0, 0, 2, '3', '不認真好嬉戲');
INSERT INTO comment VALUES (312, 0, 0, 0, 2, '3', '性情懶惰言不顧行');
INSERT INTO comment VALUES (313, 0, 0, 0, 2, '3', '不知自愛自私自利');
INSERT INTO comment VALUES (314, 0, 0, 0, 2, '3', '性情倔強精神萎靡');
INSERT INTO comment VALUES (315, 0, 0, 0, 2, '3', '敷衍馬虎怠惰懶散');
INSERT INTO comment VALUES (316, 0, 0, 0, 2, '3', '浮躁無恆逞強好勝');
INSERT INTO comment VALUES (317, 0, 0, 0, 2, '3', '學不專心外務太多');
INSERT INTO comment VALUES (318, 0, 0, 0, 2, '3', '進步緩慢性情和順');
INSERT INTO comment VALUES (319, 0, 0, 0, 2, '3', '不知檢討時犯小錯');
INSERT INTO comment VALUES (320, 0, 0, 0, 2, '3', '渾渾噩噩性情懦弱');
INSERT INTO comment VALUES (321, 0, 0, 0, 2, '3', '不切實際處事馬虎');
INSERT INTO comment VALUES (322, 0, 0, 0, 2, '3', '不思上進氣質輕浮');
INSERT INTO comment VALUES (323, 0, 0, 0, 2, '3', '課業落後遇事敷衍');
INSERT INTO comment VALUES (324, 0, 0, 0, 2, '3', '怠忽學業性情爽直');
INSERT INTO comment VALUES (325, 0, 0, 0, 2, '3', '陽奉陰違不聽規勸');
INSERT INTO comment VALUES (326, 0, 0, 0, 2, '3', '傲慢無禮不求上進');
INSERT INTO comment VALUES (327, 0, 0, 0, 2, '3', '生活不檢虛浮不實');
INSERT INTO comment VALUES (328, 0, 0, 0, 2, '3', '無心向學虛浮隨便');
INSERT INTO comment VALUES (329, 0, 0, 0, 2, '3', '輕浮好動因循玩忽');
INSERT INTO comment VALUES (330, 0, 0, 0, 2, '3', '屢誡不悛言行虛偽');
INSERT INTO comment VALUES (331, 0, 0, 0, 2, '3', '頑皮好動個性孤僻');
INSERT INTO comment VALUES (332, 0, 0, 0, 2, '3', '態度倨傲性情粗暴');
INSERT INTO comment VALUES (333, 0, 0, 0, 2, '4', '難望造就個性頑劣');
INSERT INTO comment VALUES (334, 0, 0, 0, 2, '4', '破壞秩序無理取鬧');
INSERT INTO comment VALUES (335, 0, 0, 0, 2, '4', '言行不符口是心非');
INSERT INTO comment VALUES (336, 0, 0, 0, 2, '4', '屢誡屢犯破壞校規');
INSERT INTO comment VALUES (337, 0, 0, 0, 2, '4', '不守本分好勇滋事');
INSERT INTO comment VALUES (338, 0, 0, 0, 2, '4', '自甘墮落懶散不振');
INSERT INTO comment VALUES (339, 0, 0, 0, 2, '4', '學業亦劣品德欠佳');
INSERT INTO comment VALUES (340, 0, 0, 0, 2, '4', '不守校規嬉戲好鬧');
INSERT INTO comment VALUES (341, 0, 0, 0, 2, '4', '屢犯過失行為無檢');
INSERT INTO comment VALUES (342, 0, 0, 0, 2, '4', '屢誡不悟因循怠惰');
INSERT INTO comment VALUES (343, 0, 0, 0, 2, '4', '糾正不改思想謬誤');
INSERT INTO comment VALUES (344, 0, 0, 0, 2, '4', '不明是非胡作亂為');
INSERT INTO comment VALUES (345, 0, 0, 0, 2, '4', '好勇鬥狠個性倔強');
INSERT INTO comment VALUES (346, 0, 0, 0, 2, '4', '不務課業曠課犯規');
INSERT INTO comment VALUES (347, 0, 0, 0, 2, '4', '傲慢無禮性情乖僻');
INSERT INTO comment VALUES (348, 0, 0, 0, 2, '4', '鮮知檢點頑皮成性');
INSERT INTO comment VALUES (349, 0, 0, 0, 2, '4', '好事生飛不知勤學');
INSERT INTO comment VALUES (350, 0, 0, 0, 2, '4', '不知自愛行為失檢');
INSERT INTO comment VALUES (351, 0, 0, 0, 2, '4', '不守秩序精神渙散');
INSERT INTO comment VALUES (352, 0, 0, 0, 2, '4', '不自檢束放肆輕浮');
INSERT INTO comment VALUES (353, 0, 0, 0, 2, '4', '自暴自棄乖張頑劣');
INSERT INTO comment VALUES (354, 0, 0, 0, 2, '4', '時犯校規不聽訓誨');
INSERT INTO comment VALUES (355, 0, 0, 0, 2, '4', '屢誡不悛頑劣不化');
INSERT INTO comment VALUES (356, 0, 0, 0, 2, '4', '不知悔改行為乖張');
INSERT INTO comment VALUES (357, 0, 0, 0, 2, '4', '學不專心心性浮躁');
INSERT INTO comment VALUES (358, 0, 0, 0, 2, '4', '性行頑劣損人利己');
INSERT INTO comment VALUES (359, 0, 0, 0, 2, '4', '不知上進秉性頑劣');
INSERT INTO comment VALUES (360, 0, 0, 0, 2, '4', '不知認真性情頑劣');
INSERT INTO comment VALUES (361, 0, 0, 0, 2, '4', '不守禮儀態度傲慢');
INSERT INTO comment VALUES (362, 0, 0, 0, 2, '4', '不知振作頹唐懶惰');
INSERT INTO comment VALUES (363, 0, 0, 0, 2, '4', '不守校規擾亂秩序');
INSERT INTO comment VALUES (364, 0, 0, 0, 2, '4', '精神萎靡生活浪漫');
INSERT INTO comment VALUES (365, 0, 0, 0, 2, '4', '行為放蕩個性橫蠻');
INSERT INTO comment VALUES (366, 0, 0, 0, 2, '4', '精神頹廢生活散漫');
INSERT INTO comment VALUES (367, 0, 0, 0, 2, '4', '不知悔改言行荒謬');
INSERT INTO comment VALUES (368, 0, 0, 0, 2, '4', '學業荒疏言行欺詐');
INSERT INTO comment VALUES (369, 0, 0, 0, 2, '4', '好逸惡勞強詞好辯');
INSERT INTO comment VALUES (370, 0, 0, 0, 2, '4', '不重公德精神散漫');
INSERT INTO comment VALUES (371, 0, 0, 0, 2, '4', '多言貪玩精神不振');
INSERT INTO comment VALUES (372, 0, 0, 0, 2, '4', '不能合群個性孤僻');
INSERT INTO comment VALUES (373, 0, 0, 0, 2, '4', '不知認真懶惰成性');
INSERT INTO comment VALUES (374, 0, 0, 0, 2, '4', '缺乏恆心讀書不專');
INSERT INTO comment VALUES (375, 0, 0, 0, 2, '4', '不聽訓誡性情剛愎');
INSERT INTO comment VALUES (376, 0, 0, 0, 2, '4', '課業欠佳精神萎靡');
INSERT INTO comment VALUES (377, 0, 0, 0, 2, '4', '生活鬆懈精神浮躁');
INSERT INTO comment VALUES (378, 0, 0, 0, 2, '4', '性情乖戾身體虛弱');
INSERT INTO comment VALUES (379, 0, 0, 0, 2, '4', '無心讀書聰明有餘');
INSERT INTO comment VALUES (380, 0, 0, 0, 2, '4', '生活散漫不拘小節');
INSERT INTO comment VALUES (381, 0, 0, 0, 3, '1', '反應敏捷，舉一能反三，能很快的進入各種學習情境，唯有時糊塗須常常提省。');
INSERT INTO comment VALUES (382, 0, 0, 0, 3, '1', '性情憨厚，課業已有進步，不過仍需努力，字體欠端正，要好好練習。');
INSERT INTO comment VALUES (383, 0, 0, 0, 3, '1', '天賦不錯，努力不夠，數理方面表現較佳，語文較差，需要好好練習。');
INSERT INTO comment VALUES (384, 0, 0, 0, 3, '1', '活潑好動，動如脫兔，唯很難安靜下來。課業已有進步，但仍未盡全力，否則表現會更好。');
INSERT INTO comment VALUES (385, 0, 0, 0, 3, '1', '個性嚴肅，不茍言笑；不過做事有點兒草率，努力不夠，仍須常常予以督導。');
INSERT INTO comment VALUES (386, 0, 0, 0, 3, '1', '活動力旺盛，有用不完的精力，很難定心定性，學習已有進步。');
INSERT INTO comment VALUES (387, 0, 0, 0, 3, '1', '學習漸入佳境，但很容易分心，須時時加以督導。');
INSERT INTO comment VALUES (388, 0, 0, 0, 3, '1', '性情率真、忠實，不善掩飾。求學未盡全力，否則應有更好的表現。');
INSERT INTO comment VALUES (389, 0, 0, 0, 3, '1', '天生樂觀，熱心公務，樂於助人，唯求學未盡全力，應再努力。');
INSERT INTO comment VALUES (390, 0, 0, 0, 3, '1', '活潑大方，做事粗率，課業表現佳，五育均衡發展才是良策，宜培養其他方面的興趣。');
INSERT INTO comment VALUES (391, 0, 0, 0, 3, '1', '個性憨厚，不善與人爭，唯做事不夠仔細，容易分心，需時時予以督導、關懷。');
INSERT INTO comment VALUES (392, 0, 0, 0, 3, '1', '反應敏捷，常識豐富，發表能力頗強，但求學態度不夠認真、仔細，天資雖好，仍須靠後天努力。');
INSERT INTO comment VALUES (393, 0, 0, 0, 3, '1', '個性活潑大方，很會發表自己的意見。服務熱心，但有點兒粗心大意。');
INSERT INTO comment VALUES (394, 0, 0, 0, 3, '1', '天賦不錯，若再加上後天的努力，表現一定更好；只是喋喋不休，很愛說話，要常常提醒。');
INSERT INTO comment VALUES (395, 0, 0, 0, 3, '1', '活潑好動，很愛說話，與友伴相處愉快，不過寫字太快，以致於有點兒草率。');
INSERT INTO comment VALUES (396, 0, 0, 0, 3, '1', '活潑敏捷，做事勤快，手腳俐落，求學頗認真，字體也很端正。');
INSERT INTO comment VALUES (397, 0, 0, 0, 3, '1', '天資不敏，又不肯好好的努力，跟不上同學的進度；須在家中實施個別的指導，才能跟上進度。');
INSERT INTO comment VALUES (398, 0, 0, 0, 3, '1', '活潑好動，活動量頗大，求學態度已見進步，可謂漸入佳境，唯寫字仍然不夠端整  。');
INSERT INTO comment VALUES (399, 0, 0, 0, 3, '1', '反應敏捷，善於掌握情境，求學認真，字體端整，在繪畫方面表現頗佳。');
INSERT INTO comment VALUES (400, 0, 0, 0, 3, '1', '性情憨厚、老實，在公共場合比較不敢發言，但私底下，卻很容易與人打成一片，需多培養發言勇氣。');
INSERT INTO comment VALUES (401, 0, 0, 0, 3, '1', '求學認真，態度頗佳，做事亦有責任感，唯除了讀書之外，宜再培養其他方面的興趣。');
INSERT INTO comment VALUES (402, 0, 0, 0, 3, '1', '忠厚老實，十分憨厚，生性樂觀，熱心公共服務，在課業上應多做努力。');
INSERT INTO comment VALUES (403, 0, 0, 0, 3, '1', '個性已較活潑、好動，與友伴相處融洽，求學態度亦佳。');
INSERT INTO comment VALUES (404, 0, 0, 0, 3, '1', '天真爛漫討人喜，做事很專注，不容易分心，有始有終，又很能掌握情境做適度的表現。');
INSERT INTO comment VALUES (405, 0, 0, 0, 3, '1', '個性隨和，對自己的東西很懂得愛惜；在課業上努力不夠，宜再督導。');
INSERT INTO comment VALUES (406, 0, 0, 0, 3, '1', '個性閒散，不易集中注意力，需常常提醒、督導才會有所成。');
INSERT INTO comment VALUES (407, 0, 0, 0, 3, '1', '個性活潑大方，唯努力不夠，若能定心於課業上，當不只於此。');
INSERT INTO comment VALUES (408, 0, 0, 0, 3, '1', '活潑大方，交遊廣闊，與人交朋友很快，課業頗有進展，值得嘉許\。');
INSERT INTO comment VALUES (409, 0, 0, 0, 3, '1', '蘭心慧質，嫻雅溫柔，頗有大家閨秀的風範，課業表現亦佳，可謂品學兼優。');
INSERT INTO comment VALUES (410, 0, 0, 0, 3, '1', '天賦不錯，也頗肯努力，表現尚佳，為人和樂，樂與人交，且熱心助人，很得人緣。');
INSERT INTO comment VALUES (411, 0, 0, 0, 3, '1', '個性溫和、善良，天資不敏，需靠後天不斷的努力，才可能有所成，不斷的關注及耐心的輔導仍是需要的。');
INSERT INTO comment VALUES (412, 0, 0, 0, 3, '1', '粗心大意，常常糊塗，天資即或不敏，須靠後天的努力、不斷的關注和個別指導。');
INSERT INTO comment VALUES (413, 0, 0, 0, 3, '1', '天賦敏捷，思路清晰，字體端正，課業表現佳，唯很愛講話，須常常提醒。');
INSERT INTO comment VALUES (414, 0, 0, 0, 3, '1', '心思細密，有小女孩的嬌柔，課業表現亦佳，唯有時粗心，仍要常予提醒。');
INSERT INTO comment VALUES (415, 0, 0, 0, 3, '1', '頑皮好動，十分淘氣，活動量很大，課業未盡全力，寫字也很草率。');
INSERT INTO comment VALUES (416, 0, 0, 0, 3, '1', '學習已漸入佳境，唯上課很容易分心，須常常予以提醒。');
INSERT INTO comment VALUES (417, 0, 0, 0, 3, '1', '性情溫和，不善與人爭，不太願意在公眾場合表現，宜多鼓勵。');
INSERT INTO comment VALUES (418, 0, 0, 0, 3, '1', '反應敏捷，課外知識很豐富，活動量很大，唯求學態度不夠認真，宜再加以引導。');
INSERT INTO comment VALUES (419, 0, 0, 0, 3, '1', '個性溫柔，嫻雅善良，做事仔細，求學認真，可謂品學兼優。');
INSERT INTO comment VALUES (420, 0, 0, 0, 3, '1', '安靜輕巧，不善交際，學業已進步，值得嘉許\。');
INSERT INTO comment VALUES (421, 0, 0, 0, 3, '1', '活潑好動，很有表演慾、領導慾，唯不夠仔細，粗率得可愛。');
INSERT INTO comment VALUES (422, 0, 0, 0, 3, '1', '思路敏捷，很有主動求知的精神，做事仔細，為人和善。');
INSERT INTO comment VALUES (423, 0, 0, 0, 3, '1', '五育均衡發展，興趣廣泛，可謂能動能靜，極討人喜愛。');
INSERT INTO comment VALUES (424, 0, 0, 0, 3, '1', '性溫婉，不太愛說話，學習已有進步，但仍須努力，比同年齡的小孩，社會性的發展較為遲緩。');
INSERT INTO comment VALUES (425, 0, 0, 0, 3, '1', '心地善良，課業表現尚佳，顯示其用心程度，唯興趣不夠廣泛，宜多培養。');
INSERT INTO comment VALUES (426, 0, 0, 0, 3, '1', '溫和良善，個性羞怯膽小，學習漸有進步，繼續努力。');
INSERT INTO comment VALUES (427, 0, 0, 0, 3, '1', '性情溫和柔順，課業尚佳，對繪畫很有興趣，觀察十分細密，若能加以培養，日後當有所成。');
INSERT INTO comment VALUES (428, 0, 0, 0, 3, '1', '溫和柔順、和氣有禮，別人才會喜歡接近你，如果常欺侮同學，那你的朋友就會愈來愈少了。');
INSERT INTO comment VALUES (429, 0, 0, 0, 3, '1', '收起頑皮之心，專心於學業，上課須專心，工作須負責，才不辜負父母之期望！');
INSERT INTO comment VALUES (430, 0, 0, 0, 3, '1', '辛勤的耕耘之後，必有歡欣的收穫！雖未能名列前茅，但成績之穩定與優越，足證妳是有潛力的，再努力吧！祝福妳下次如願。');
INSERT INTO comment VALUES (431, 0, 0, 0, 3, '1', '天真坦率，工作熱心。課業面如能細心、勤讀，必可獲改善，願妳體會力行之。');
INSERT INTO comment VALUES (432, 0, 0, 0, 3, '1', '數學只要多用心，多算，相信妳也可以考得好。');
INSERT INTO comment VALUES (433, 0, 0, 0, 3, '1', '唯勤才能補拙，多花些時間，研究數學，必可進步。');
INSERT INTO comment VALUES (434, 0, 0, 0, 3, '1', '天真率直，勤於發問，學業突飛猛進，願能持之以恆，將來在求學之路上，必有成就。');
INSERT INTO comment VALUES (435, 0, 0, 0, 3, '1', '鈺婷：老師多麼希望妳平日多接近我，多問我課業上的問題，要知道，我看到妳靜靜的不愛說話，我是多麼難過呀！');
INSERT INTO comment VALUES (436, 0, 0, 0, 3, '1', '擔任總務股長，為同學服務，工作雖苦，毫無怨言，精神可嘉！數學成績漸有進步， 雖未達理想，但足證妳已付出了努力。');
INSERT INTO comment VALUES (437, 0, 0, 0, 3, '1', '文靜勤勉，五育皆優。每日自動幫助老師整理教室，從不懈怠，勤勞精神，令老師感動！妙娟，謝謝妳。');
INSERT INTO comment VALUES (438, 0, 0, 0, 3, '1', '活潑明?唌A精於美勞，願多發揮長處，將來才能有所發展。');
INSERT INTO comment VALUES (439, 0, 0, 0, 3, '1', '樂觀和群，負責乖巧，課業如能多花心思研究，定會進步。');
INSERT INTO comment VALUES (440, 0, 0, 0, 3, '1', '「一分耕耘，一分收穫」，好好的努力，\r\n期待往後能有好的表現。');
INSERT INTO comment VALUES (441, 0, 0, 0, 3, '1', '活潑開朗，能關心別人，處處替別人設想，群性特佳。');
INSERT INTO comment VALUES (442, 0, 0, 0, 3, '1', '乖巧文靜，微笑常掛臉上，親切感人，課業尚知勤勉，唯數學一科有待加強。');
INSERT INTO comment VALUES (443, 0, 0, 0, 3, '1', '有了努力，必會有收獲，妳已盡了力，數學雖未達理想，老師又何忍怪妳呢？');
INSERT INTO comment VALUES (444, 0, 0, 0, 3, '1', '精神要振作，讀書要積極，成績才會好。淑華：振作起來吧！祝福妳！');
INSERT INTO comment VALUES (445, 0, 0, 0, 3, '1', '性情爽朗，但卻失之隨便，如能謹言慎行，發憤讀書，成績必可精進。');
INSERT INTO comment VALUES (446, 0, 0, 0, 3, '1', '與人相處，必須寬厚，工於計較，朋友必失。心必沉靜，才能安心向學。');
INSERT INTO comment VALUES (447, 0, 0, 0, 3, '1', '天資不差，由數學成績可看出，如能稍加用心，其他成績也必會進步！努力吧！多看書，少說話。');
INSERT INTO comment VALUES (448, 0, 0, 0, 3, '1', '秉性溫和，待人有禮，工作熱心，勤於學習，足堪嘉部A願家長全力培植，以成大器。');
INSERT INTO comment VALUES (449, 0, 0, 0, 3, '1', '個性倔強，犯錯而不思檢討，喜以強言狡辯，態度失之理智，願能自我深思，加以改進，謹聽師言，孜孜向學，才是學生應有之態度，願你能體會。');
INSERT INTO comment VALUES (450, 0, 0, 0, 3, '1', '聰穎而知勤學，但切記品德比學問更重要，聽從師長教誨，切記不可言語冒失，以惹人嫌。');
INSERT INTO comment VALUES (451, 0, 0, 0, 3, '1', '學校是個大家庭，必須人人遵守秩序，不可無理取鬧，破壞秩序。多用心思於學業，相信勤必能補拙。');
INSERT INTO comment VALUES (452, 0, 0, 0, 3, '1', '稟賦聰穎，偶有佳績，但驕氣重，未能持之於恆。與長輩交談，須注意傾聽，不可時常多言、插嘴，才是謙恭之道。');
INSERT INTO comment VALUES (453, 0, 0, 0, 3, '1', '記取古人「言多必失」之言，盡量保持沉默，尤其上課中，不可隨便說話，以免損人又不利己，待人以誠，別人必也喜歡你！');
INSERT INTO comment VALUES (454, 0, 0, 0, 3, '1', '平日多用心思考，多研算，相信數學成績也可和其他科目一樣好。');
INSERT INTO comment VALUES (742, 1001, 0, 0, 0, '', '');
INSERT INTO comment VALUES (456, 0, 0, 0, 1, '1', '溫和純樸');
INSERT INTO comment VALUES (457, 0, 0, 0, 1, '1', '坦白爽直');
INSERT INTO comment VALUES (458, 0, 0, 0, 1, '1', '頗有志氣');
INSERT INTO comment VALUES (459, 0, 0, 0, 1, '1', '勇敢果決');
INSERT INTO comment VALUES (460, 0, 0, 0, 1, '1', '誠實真摯');
INSERT INTO comment VALUES (462, 0, 0, 0, 1, '1', '篤行耐勞');
INSERT INTO comment VALUES (463, 0, 0, 0, 1, '1', '天資聰穎');
INSERT INTO comment VALUES (464, 0, 0, 0, 1, '1', '慷慨豪邁');
INSERT INTO comment VALUES (465, 0, 0, 0, 1, '1', '秉性純厚');
INSERT INTO comment VALUES (466, 0, 0, 0, 1, '1', '精明能幹');
INSERT INTO comment VALUES (467, 0, 0, 0, 1, '1', '領導力強');
INSERT INTO comment VALUES (468, 0, 0, 0, 1, '1', '勤勞儉僕');
INSERT INTO comment VALUES (469, 0, 0, 0, 1, '1', '積極奮鬥');
INSERT INTO comment VALUES (470, 0, 0, 0, 1, '1', '活潑天真');
INSERT INTO comment VALUES (471, 0, 0, 0, 1, '1', '文靜篤實');
INSERT INTO comment VALUES (472, 0, 0, 0, 1, '1', '樂觀進取');
INSERT INTO comment VALUES (473, 0, 0, 0, 1, '1', '擇善固執');
INSERT INTO comment VALUES (474, 0, 0, 0, 1, '1', '尚知奮勉');
INSERT INTO comment VALUES (475, 0, 0, 0, 1, '1', '篤守信義');
INSERT INTO comment VALUES (476, 0, 0, 0, 1, '1', '剛直渾厚');
INSERT INTO comment VALUES (477, 0, 0, 0, 1, '1', '誠懇坦率');
INSERT INTO comment VALUES (478, 0, 0, 0, 1, '1', '活潑爽朗');
INSERT INTO comment VALUES (479, 0, 0, 0, 1, '1', '和藹可親');
INSERT INTO comment VALUES (480, 0, 0, 0, 1, '1', '不矜不伐');
INSERT INTO comment VALUES (481, 0, 0, 0, 1, '1', '堅毅有恆');
INSERT INTO comment VALUES (482, 0, 0, 0, 1, '1', '胸襟開闊');
INSERT INTO comment VALUES (483, 0, 0, 0, 1, '1', '富進取心');
INSERT INTO comment VALUES (484, 0, 0, 0, 1, '1', '內向自律');
INSERT INTO comment VALUES (485, 0, 0, 0, 1, '1', '敦厚誠實');
INSERT INTO comment VALUES (486, 0, 0, 0, 1, '1', '意志堅強');
INSERT INTO comment VALUES (487, 0, 0, 0, 1, '1', '機智沉著');
INSERT INTO comment VALUES (488, 0, 0, 0, 1, '1', '光明磊落');
INSERT INTO comment VALUES (489, 0, 0, 0, 1, '1', '溫順忠厚');
INSERT INTO comment VALUES (490, 0, 0, 0, 1, '1', '讀書專心');
INSERT INTO comment VALUES (491, 0, 0, 0, 1, '1', '專心聽課');
INSERT INTO comment VALUES (492, 0, 0, 0, 1, '1', '理解力強');
INSERT INTO comment VALUES (493, 0, 0, 0, 1, '1', '品學兼優');
INSERT INTO comment VALUES (494, 0, 0, 0, 1, '1', '學有專長');
INSERT INTO comment VALUES (495, 0, 0, 0, 1, '1', '勤奮好學');
INSERT INTO comment VALUES (496, 0, 0, 0, 1, '1', '服從指導');
INSERT INTO comment VALUES (497, 0, 0, 0, 1, '1', '觀念正確');
INSERT INTO comment VALUES (498, 0, 0, 0, 1, '1', '沉著鎮靜');
INSERT INTO comment VALUES (499, 0, 0, 0, 1, '1', '見義勇為');
INSERT INTO comment VALUES (500, 0, 0, 0, 1, '1', '氣度高尚');
INSERT INTO comment VALUES (501, 0, 0, 0, 1, '1', '沉靜溫良');
INSERT INTO comment VALUES (502, 0, 0, 0, 1, '1', '安分守己');
INSERT INTO comment VALUES (503, 0, 0, 0, 1, '1', '思想純正');
INSERT INTO comment VALUES (504, 0, 0, 0, 1, '1', '秉性純厚');
INSERT INTO comment VALUES (505, 0, 0, 0, 1, '1', '聰明伶俐');
INSERT INTO comment VALUES (506, 0, 0, 0, 1, '1', '機智敏捷');
INSERT INTO comment VALUES (507, 0, 0, 0, 1, '1', '創造進取');
INSERT INTO comment VALUES (508, 0, 0, 0, 1, '1', '尚知進取');
INSERT INTO comment VALUES (509, 0, 0, 0, 1, '1', '求知慾強');
INSERT INTO comment VALUES (510, 0, 0, 0, 1, '1', '學業優良');
INSERT INTO comment VALUES (511, 0, 0, 0, 1, '1', '敏而好學');
INSERT INTO comment VALUES (512, 0, 0, 0, 1, '1', '奮發向上');
INSERT INTO comment VALUES (513, 0, 0, 0, 1, '1', '立求進取');
INSERT INTO comment VALUES (514, 0, 0, 0, 1, '1', '熟讀深思');
INSERT INTO comment VALUES (515, 0, 0, 0, 1, '1', '勤於求知');
INSERT INTO comment VALUES (516, 0, 0, 0, 1, '1', '尚肯認真');
INSERT INTO comment VALUES (517, 0, 0, 0, 1, '1', '專心致志');
INSERT INTO comment VALUES (518, 0, 0, 0, 1, '1', '日有進步');
INSERT INTO comment VALUES (519, 0, 0, 0, 1, '1', '手不釋卷');
INSERT INTO comment VALUES (520, 0, 0, 0, 1, '1', '存疑求真');
INSERT INTO comment VALUES (521, 0, 0, 0, 1, '1', '學習認真');
INSERT INTO comment VALUES (522, 0, 0, 0, 1, '1', '頗知認真');
INSERT INTO comment VALUES (523, 0, 0, 0, 1, '1', '思考縝密');
INSERT INTO comment VALUES (524, 0, 0, 0, 1, '1', '節約儉省');
INSERT INTO comment VALUES (525, 0, 0, 0, 1, '1', '熱心公益');
INSERT INTO comment VALUES (526, 0, 0, 0, 1, '1', '愛惜公物');
INSERT INTO comment VALUES (527, 0, 0, 0, 1, '1', '服務勤慎');
INSERT INTO comment VALUES (528, 0, 0, 0, 1, '1', '心平氣和');
INSERT INTO comment VALUES (529, 0, 0, 0, 1, '1', '克盡職責');
INSERT INTO comment VALUES (530, 0, 0, 0, 1, '1', '服務盡責');
INSERT INTO comment VALUES (531, 0, 0, 0, 1, '1', '尚守規矩');
INSERT INTO comment VALUES (532, 0, 0, 0, 1, '1', '禮貌周到');
INSERT INTO comment VALUES (533, 0, 0, 0, 1, '1', '刻苦耐勞');
INSERT INTO comment VALUES (534, 0, 0, 0, 1, '1', '友愛同學');
INSERT INTO comment VALUES (535, 0, 0, 0, 1, '1', '敬師睦友');
INSERT INTO comment VALUES (536, 0, 0, 0, 1, '1', '客觀公正');
INSERT INTO comment VALUES (537, 0, 0, 0, 1, '1', '溫文有禮');
INSERT INTO comment VALUES (538, 0, 0, 0, 1, '1', '平易近人');
INSERT INTO comment VALUES (539, 0, 0, 0, 1, '1', '任勞任怨');
INSERT INTO comment VALUES (540, 0, 0, 0, 1, '1', '簡單樸素');
INSERT INTO comment VALUES (541, 0, 0, 0, 1, '1', '循規蹈矩');
INSERT INTO comment VALUES (542, 0, 0, 0, 1, '1', '舉止端莊');
INSERT INTO comment VALUES (543, 0, 0, 0, 1, '1', '合作無間');
INSERT INTO comment VALUES (544, 0, 0, 0, 1, '1', '工作努力');
INSERT INTO comment VALUES (545, 0, 0, 0, 1, '1', '儀容整肅');
INSERT INTO comment VALUES (546, 0, 0, 0, 1, '1', '愛護團體');
INSERT INTO comment VALUES (547, 0, 0, 0, 1, '1', '守法重紀');
INSERT INTO comment VALUES (548, 0, 0, 0, 1, '1', '待人熱忱');
INSERT INTO comment VALUES (549, 0, 0, 0, 1, '1', '自重自愛');
INSERT INTO comment VALUES (550, 0, 0, 0, 1, '1', '刻苦自勵');
INSERT INTO comment VALUES (551, 0, 0, 0, 1, '1', '作息有序');
INSERT INTO comment VALUES (552, 0, 0, 0, 1, '1', '態度大方');
INSERT INTO comment VALUES (553, 0, 0, 0, 1, '1', '持躬謹嚴');
INSERT INTO comment VALUES (554, 0, 0, 0, 1, '1', '熱心助人');
INSERT INTO comment VALUES (555, 0, 0, 0, 1, '1', '勇於認錯');
INSERT INTO comment VALUES (556, 0, 0, 0, 1, '1', '處世和平');
INSERT INTO comment VALUES (557, 0, 0, 0, 1, '1', '待人誠懇');
INSERT INTO comment VALUES (558, 0, 0, 0, 1, '1', '行為穩健');
INSERT INTO comment VALUES (559, 0, 0, 0, 1, '1', '責任心重');
INSERT INTO comment VALUES (560, 0, 0, 0, 1, '1', '端莊有禮');
INSERT INTO comment VALUES (561, 0, 0, 0, 1, '1', '急公好義');
INSERT INTO comment VALUES (562, 0, 0, 0, 1, '1', '謙恭有禮');
INSERT INTO comment VALUES (563, 0, 0, 0, 1, '1', '熱心助人');
INSERT INTO comment VALUES (564, 0, 0, 0, 1, '1', '整齊清潔');
INSERT INTO comment VALUES (565, 0, 0, 0, 1, '1', '勤勞儉僕');
INSERT INTO comment VALUES (566, 0, 0, 0, 1, '1', '明辨篤行');
INSERT INTO comment VALUES (567, 0, 0, 0, 1, '1', '樂觀合群');
INSERT INTO comment VALUES (568, 0, 0, 0, 1, '1', '尚守紀律');
INSERT INTO comment VALUES (569, 0, 0, 0, 1, '1', '談吐有度');
INSERT INTO comment VALUES (570, 0, 0, 0, 1, '1', '遵守紀律');
INSERT INTO comment VALUES (571, 0, 0, 0, 1, '1', '活潑愉快');
INSERT INTO comment VALUES (572, 0, 0, 0, 1, '1', '精神飽滿');
INSERT INTO comment VALUES (573, 0, 0, 0, 1, '1', '敬業樂群');
INSERT INTO comment VALUES (574, 0, 0, 0, 1, '1', '熱心公益');
INSERT INTO comment VALUES (575, 0, 0, 0, 1, '1', '');
INSERT INTO comment VALUES (576, 0, 0, 0, 1, '1', '球藝精湛');
INSERT INTO comment VALUES (577, 0, 0, 0, 1, '1', '技藝超群');
INSERT INTO comment VALUES (578, 0, 0, 0, 1, '1', '精通游泳');
INSERT INTO comment VALUES (579, 0, 0, 0, 1, '1', '擅長寫作');
INSERT INTO comment VALUES (580, 0, 0, 0, 1, '1', '擅長國術');
INSERT INTO comment VALUES (581, 0, 0, 0, 1, '1', '擅長書法');
INSERT INTO comment VALUES (582, 0, 0, 0, 1, '1', '擅長美術');
INSERT INTO comment VALUES (583, 0, 0, 0, 1, '1', '擅長音樂');
INSERT INTO comment VALUES (584, 0, 0, 0, 1, '1', '擅長工藝');
INSERT INTO comment VALUES (585, 0, 0, 0, 1, '1', '擅長演說');
INSERT INTO comment VALUES (586, 0, 0, 0, 1, '1', '擅長家事');
INSERT INTO comment VALUES (587, 0, 0, 0, 1, '1', '擅長運動');
INSERT INTO comment VALUES (588, 0, 0, 0, 1, '1', '擅長數理');
INSERT INTO comment VALUES (589, 0, 0, 0, 1, '1', '擅長舞蹈');
INSERT INTO comment VALUES (590, 0, 0, 0, 1, '1', '擅長戲劇');
INSERT INTO comment VALUES (591, 0, 0, 0, 1, '1', '擅長文史');
INSERT INTO comment VALUES (592, 0, 0, 0, 1, '1', '喜抱不平');
INSERT INTO comment VALUES (593, 0, 0, 0, 1, '1', '胸襟狹小');
INSERT INTO comment VALUES (594, 0, 0, 0, 1, '1', '個性倔強');
INSERT INTO comment VALUES (595, 0, 0, 0, 1, '1', '委曲求全');
INSERT INTO comment VALUES (596, 0, 0, 0, 1, '1', '心浮氣躁');
INSERT INTO comment VALUES (597, 0, 0, 0, 1, '1', '意志薄弱');
INSERT INTO comment VALUES (598, 0, 0, 0, 1, '1', '抑鬱寡歡');
INSERT INTO comment VALUES (599, 0, 0, 0, 1, '1', '急性好動');
INSERT INTO comment VALUES (600, 0, 0, 0, 1, '1', '觀念偏頗');
INSERT INTO comment VALUES (601, 0, 0, 0, 1, '4', '不夠誠實');
INSERT INTO comment VALUES (602, 0, 0, 0, 1, '1', '懦弱因循');
INSERT INTO comment VALUES (603, 0, 0, 0, 1, '1', '沉默寡言');
INSERT INTO comment VALUES (604, 0, 0, 0, 1, '1', '不聽訓誡');
INSERT INTO comment VALUES (605, 0, 0, 0, 1, '1', '衝動好怒');
INSERT INTO comment VALUES (606, 0, 0, 0, 1, '1', '性情乖戾');
INSERT INTO comment VALUES (607, 0, 0, 0, 1, '1', '性情剛愎');
INSERT INTO comment VALUES (608, 0, 0, 0, 1, '1', '自卑害羞');
INSERT INTO comment VALUES (609, 0, 0, 0, 1, '1', '不夠認真');
INSERT INTO comment VALUES (610, 0, 0, 0, 1, '1', '不喜數理');
INSERT INTO comment VALUES (611, 0, 0, 0, 1, '1', '自暴自棄');
INSERT INTO comment VALUES (612, 0, 0, 0, 1, '1', '課業欠佳');
INSERT INTO comment VALUES (613, 0, 0, 0, 1, '1', '敷衍草率');
INSERT INTO comment VALUES (614, 0, 0, 0, 1, '1', '嬉遊無度');
INSERT INTO comment VALUES (615, 0, 0, 0, 1, '1', '聰穎貪玩');
INSERT INTO comment VALUES (616, 0, 0, 0, 1, '1', '不求上進');
INSERT INTO comment VALUES (617, 0, 0, 0, 1, '2', '不好讀書');
INSERT INTO comment VALUES (618, 0, 0, 0, 1, '2', '貪玩好學');
INSERT INTO comment VALUES (619, 0, 0, 0, 1, '2', '缺乏恆心');
INSERT INTO comment VALUES (620, 0, 0, 0, 1, '2', '勉能應付');
INSERT INTO comment VALUES (621, 0, 0, 0, 1, '2', '尚欠努力');
INSERT INTO comment VALUES (622, 0, 0, 0, 1, '2', '懶於學習');
INSERT INTO comment VALUES (623, 0, 0, 0, 1, '2', '不拘小節');
INSERT INTO comment VALUES (624, 0, 0, 0, 1, '2', '個性孤僻');
INSERT INTO comment VALUES (625, 0, 0, 0, 1, '2', '資質魯鈍');
INSERT INTO comment VALUES (626, 0, 0, 0, 1, '2', '心不專一');
INSERT INTO comment VALUES (627, 0, 0, 0, 1, '3', '不負責任');
INSERT INTO comment VALUES (628, 0, 0, 0, 1, '2', '應多自律');
INSERT INTO comment VALUES (629, 0, 0, 0, 1, '2', '不善交際');
INSERT INTO comment VALUES (630, 0, 0, 0, 1, '2', '稚氣太重');
INSERT INTO comment VALUES (631, 0, 0, 0, 1, '3', '散漫鬆懈');
INSERT INTO comment VALUES (632, 0, 0, 0, 1, '2', '屢誡不悛');
INSERT INTO comment VALUES (633, 0, 0, 0, 1, '2', '心浮氣燥');
INSERT INTO comment VALUES (634, 0, 0, 0, 1, '3', '交遊不慎');
INSERT INTO comment VALUES (635, 0, 0, 0, 1, '2', '精神不振');
INSERT INTO comment VALUES (636, 0, 0, 0, 1, '3', '玩世不恭');
INSERT INTO comment VALUES (637, 0, 0, 0, 1, '3', '言多行少');
INSERT INTO comment VALUES (638, 0, 0, 0, 1, '2', '草率從事');
INSERT INTO comment VALUES (639, 0, 0, 0, 1, '3', '粗心大意');
INSERT INTO comment VALUES (640, 0, 0, 0, 1, '2', '學而不專');
INSERT INTO comment VALUES (641, 0, 0, 0, 1, '2', '不求甚解');
INSERT INTO comment VALUES (642, 0, 0, 0, 1, '2', '時學時停');
INSERT INTO comment VALUES (643, 0, 0, 0, 1, '2', '我行我素');
INSERT INTO comment VALUES (644, 0, 0, 0, 1, '2', '愛出風頭');
INSERT INTO comment VALUES (645, 0, 0, 0, 1, '3', '浮華不實');
INSERT INTO comment VALUES (646, 0, 0, 0, 1, '2', '服務欠佳');
INSERT INTO comment VALUES (647, 0, 0, 0, 1, '4', '敷衍草率');
INSERT INTO comment VALUES (648, 0, 0, 0, 1, '3', '強詞好辯');
INSERT INTO comment VALUES (649, 0, 0, 0, 1, '4', '魯莽無禮');
INSERT INTO comment VALUES (650, 0, 0, 0, 1, '4', '行為傲慢');
INSERT INTO comment VALUES (651, 0, 0, 0, 1, '4', '舉止輕佻');
INSERT INTO comment VALUES (652, 0, 0, 0, 1, '4', '性情粗暴');
INSERT INTO comment VALUES (653, 0, 0, 0, 1, '2', '深知悔改');
INSERT INTO comment VALUES (654, 0, 0, 0, 1, '3', '意志消沉');
INSERT INTO comment VALUES (655, 0, 0, 0, 1, '3', '不甚合群');
INSERT INTO comment VALUES (656, 0, 0, 0, 1, '2', '柔弱寡斷');
INSERT INTO comment VALUES (657, 0, 0, 0, 1, '3', '態度輕浮');
INSERT INTO comment VALUES (658, 0, 0, 0, 1, '3', '禮貌不週');
INSERT INTO comment VALUES (659, 0, 0, 0, 1, '3', '愚而自用');
INSERT INTO comment VALUES (660, 0, 0, 0, 1, '3', '偏袒循私');
INSERT INTO comment VALUES (661, 0, 0, 0, 1, '3', '言行隨便');
INSERT INTO comment VALUES (662, 0, 0, 0, 1, '2', '得過且過');
INSERT INTO comment VALUES (663, 0, 0, 0, 1, '2', '身體虛弱');
INSERT INTO comment VALUES (664, 0, 0, 0, 1, '3', '不能合群');
INSERT INTO comment VALUES (665, 0, 0, 0, 1, '4', '膽大妄為');
INSERT INTO comment VALUES (666, 0, 0, 0, 1, '3', '儀容不整');
INSERT INTO comment VALUES (667, 0, 0, 0, 1, '4', '好逸惡勞');
INSERT INTO comment VALUES (668, 0, 0, 0, 1, '4', '生活散漫');
INSERT INTO comment VALUES (669, 0, 0, 0, 1, '3', '粗心大意');
INSERT INTO comment VALUES (670, 0, 0, 0, 1, '3', '閒話太多');
INSERT INTO comment VALUES (671, 0, 0, 0, 1, '4', '行為不檢');
INSERT INTO comment VALUES (672, 0, 0, 0, 1, '4', '自甘頹惰');
INSERT INTO comment VALUES (673, 0, 0, 0, 1, '1', '處事主觀');
INSERT INTO comment VALUES (674, 0, 0, 0, 1, '3', '精神萎靡');
INSERT INTO comment VALUES (675, 0, 0, 0, 1, '1', '能幹熱心');
INSERT INTO comment VALUES (676, 0, 0, 0, 1, '1', '活潑好學');
INSERT INTO comment VALUES (677, 0, 0, 0, 1, '1', '讀書努力');
INSERT INTO comment VALUES (678, 0, 0, 0, 1, '1', '聰明用心');
INSERT INTO comment VALUES (679, 0, 0, 0, 1, '1', '認真守規');
INSERT INTO comment VALUES (680, 0, 0, 0, 1, '1', '尚知認真');
INSERT INTO comment VALUES (681, 0, 0, 0, 1, '1', '成績進步');
INSERT INTO comment VALUES (682, 0, 0, 0, 1, '1', '學習認真');
INSERT INTO comment VALUES (683, 0, 0, 0, 1, '1', '上課用心');
INSERT INTO comment VALUES (684, 0, 0, 0, 1, '1', '認真老實');
INSERT INTO comment VALUES (685, 0, 0, 0, 1, '1', '聰明認真');
INSERT INTO comment VALUES (686, 0, 0, 0, 1, '1', '勤學守法');
INSERT INTO comment VALUES (687, 0, 0, 0, 1, '1', '認真負責');
INSERT INTO comment VALUES (688, 0, 0, 0, 1, '1', '循規蹈矩');
INSERT INTO comment VALUES (689, 0, 0, 0, 1, '1', '認真好學');
INSERT INTO comment VALUES (690, 0, 0, 0, 1, '1', '品學兼優');
INSERT INTO comment VALUES (691, 0, 0, 0, 1, '1', '有進取心');
INSERT INTO comment VALUES (692, 0, 0, 0, 1, '1', '精力充沛');
INSERT INTO comment VALUES (693, 0, 0, 0, 1, '1', '性情純良');
INSERT INTO comment VALUES (694, 0, 0, 0, 1, '1', '沉靜勤奮');
INSERT INTO comment VALUES (695, 0, 0, 0, 1, '1', '合群和睦');
INSERT INTO comment VALUES (696, 0, 0, 0, 1, '1', '天資穎慧');
INSERT INTO comment VALUES (697, 0, 0, 0, 1, '1', '沉默守規');
INSERT INTO comment VALUES (698, 0, 0, 0, 1, '1', '溫文有禮');
INSERT INTO comment VALUES (699, 0, 0, 0, 1, '1', '品行端正');
INSERT INTO comment VALUES (700, 0, 0, 0, 1, '1', '富公德心');
INSERT INTO comment VALUES (701, 0, 0, 0, 1, '1', '認真聽話');
INSERT INTO comment VALUES (702, 0, 0, 0, 1, '1', '乖巧可愛');
INSERT INTO comment VALUES (703, 0, 0, 0, 1, '1', '和藹親切');
INSERT INTO comment VALUES (704, 0, 0, 0, 1, '1', '成績頗佳');
INSERT INTO comment VALUES (705, 0, 0, 0, 1, '1', '習作認真');
INSERT INTO comment VALUES (706, 0, 0, 0, 1, '1', '性情溫和');
INSERT INTO comment VALUES (707, 0, 0, 0, 1, '1', '讀書認真');
INSERT INTO comment VALUES (708, 0, 0, 0, 1, '2', '課業潦草');
INSERT INTO comment VALUES (709, 0, 0, 0, 1, '1', '待人寬厚');
INSERT INTO comment VALUES (710, 0, 0, 0, 1, '1', '秉性純良');
INSERT INTO comment VALUES (711, 0, 0, 0, 1, '1', '待人親切');
INSERT INTO comment VALUES (712, 0, 0, 0, 1, '1', '勤勞熱忱');
INSERT INTO comment VALUES (713, 0, 0, 0, 1, '1', '富同情心');
INSERT INTO comment VALUES (714, 0, 0, 0, 1, '1', '心地善良');
INSERT INTO comment VALUES (715, 0, 0, 0, 1, '1', '口齒清晰');
INSERT INTO comment VALUES (716, 0, 0, 0, 1, '1', '領悟力強');
INSERT INTO comment VALUES (717, 0, 0, 0, 1, '1', '領袖慾強');
INSERT INTO comment VALUES (718, 0, 0, 0, 1, '1', '作息守時');
INSERT INTO comment VALUES (719, 0, 0, 0, 1, '1', '沉靜勤奮');
INSERT INTO comment VALUES (720, 0, 0, 0, 1, '1', '憨厚誠實');
INSERT INTO comment VALUES (721, 0, 0, 0, 1, '1', '性情惇厚');
INSERT INTO comment VALUES (722, 0, 0, 0, 1, '1', '服從寡言');
INSERT INTO comment VALUES (723, 0, 0, 0, 1, '1', '富進取心');
INSERT INTO comment VALUES (724, 0, 0, 0, 1, '1', '溫柔知禮');
INSERT INTO comment VALUES (725, 0, 0, 0, 1, '1', '認真負責');
INSERT INTO comment VALUES (726, 0, 0, 0, 1, '1', '學習認真');
INSERT INTO comment VALUES (727, 0, 0, 0, 1, '1', '作業工整');
INSERT INTO comment VALUES (728, 0, 0, 0, 1, '1', '天資聰穎');
INSERT INTO comment VALUES (729, 0, 0, 0, 1, '4', '不潔懶散');
INSERT INTO comment VALUES (730, 0, 0, 0, 1, '4', '好動多話');
INSERT INTO comment VALUES (731, 0, 0, 0, 1, '3', '學習力差');
INSERT INTO comment VALUES (732, 0, 0, 0, 1, '3', '反應遲鈍');
INSERT INTO comment VALUES (733, 0, 0, 0, 1, '3', '要多努力');
INSERT INTO comment VALUES (734, 0, 0, 0, 1, '3', '理解力差');
INSERT INTO comment VALUES (745, 1001, 0, 0, 3, '1', '尚知奮勉性情剛直，稍嫌浮動潔身自愛，個性嚴肅，不茍\r\n言笑；不過做事有點兒草率，努力不夠，仍須常常予以督\r\n導。性情率真、忠實，不善掩飾。求學未盡全力，否則應\r\n有更好的表現。活潑大方，做事粗率，課業表現佳');
INSERT INTO comment VALUES (746, 1001, 0, 0, 1, '5', '太棒了!');
INSERT INTO comment VALUES (747, 1001, 0, 0, 5, '5', '太棒了!');
INSERT INTO comment VALUES (753, 1001, 0, 0, 3, '2', '誠實真摯，頗有志氣，篤行耐勞');
# --------------------------------------------------------

#
# 資料表格式： `comment_kind`
#

CREATE TABLE comment_kind (
  kind_serial tinyint(3) unsigned NOT NULL auto_increment,
  kind_teacher_id int(8) unsigned default NULL,
  kind_name varchar(50) NOT NULL default '',
  PRIMARY KEY  (kind_serial)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `comment_kind`
#

INSERT INTO comment_kind VALUES (1, 0, '四字箴言');
INSERT INTO comment_kind VALUES (2, 0, '八文絕妙');
INSERT INTO comment_kind VALUES (3, 0, '肺腑之言');
INSERT INTO comment_kind VALUES (5, 1001, 'test3');
# --------------------------------------------------------

#
# 資料表格式： `comment_level`
#

CREATE TABLE comment_level (
  level_serial tinyint(3) unsigned NOT NULL auto_increment,
  level_teacher_id int(8) unsigned default NULL,
  level_name varchar(50) NOT NULL default '',
  PRIMARY KEY  (level_serial)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `comment_level`
#

INSERT INTO comment_level VALUES (1, 0, '甲');
INSERT INTO comment_level VALUES (2, 0, '乙');
INSERT INTO comment_level VALUES (3, 0, '丙');
INSERT INTO comment_level VALUES (4, 0, '丁');
# --------------------------------------------------------


#
# 資料表格式： `file_db`
#

CREATE TABLE file_db (
  FSN mediumint(8) unsigned NOT NULL auto_increment,
  eduer_unit_sn smallint(5) unsigned NOT NULL default '0',
  filename varchar(255) NOT NULL default '',
  main_data longblob NOT NULL,
  description text NOT NULL,
  type varchar(128) NOT NULL default '',
  size int(11) NOT NULL default '0',
  date datetime NOT NULL default '0000-00-00 00:00:00',
  category_sn smallint(6) NOT NULL default '0',
  col_name varchar(255) default NULL,
  col_sn mediumint(8) unsigned default '0',
  unit_sn tinyint(3) unsigned NOT NULL default '0',
  enable enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (FSN),
  KEY ESN (eduer_unit_sn),
  KEY msg_id (col_sn,unit_sn),
  FULLTEXT KEY description (description),
  FULLTEXT KEY filename (filename),
  KEY category (category_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `file_db`
#

# --------------------------------------------------------
#
# 資料表格式： `form_all`
#

CREATE TABLE form_all (
  ofsn smallint(5) unsigned NOT NULL auto_increment,
  of_title varchar(255) NOT NULL default '',
  of_start_date date NOT NULL default '0000-00-00',
  of_dead_line date NOT NULL default '0000-00-00',
  of_text text,
  of_who varchar(255) default NULL,
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  of_communication varchar(255) default NULL,
  of_date datetime NOT NULL default '0000-00-00 00:00:00',
  enable enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (ofsn),
  KEY eduer_unit_sn (teacher_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `form_all`
#

INSERT INTO form_all VALUES (1, '無主題', '2002-12-30', '2002-12-30', '', NULL, 1, NULL, '2002-12-30 13:49:17', '0');
# --------------------------------------------------------

#
# 資料表格式： `form_col`
#

CREATE TABLE form_col (
  col_sn int(10) unsigned NOT NULL auto_increment,
  ofsn smallint(5) unsigned NOT NULL default '0',
  col_title varchar(255) NOT NULL default '',
  col_text text,
  col_dataType enum('date','varchar','int','bool') NOT NULL default 'date',
  col_value varchar(255) default NULL,
  col_chk enum('1','0') default NULL,
  col_function set('sum','avg','count') default NULL,
  col_sort tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (col_sn),
  KEY ofsn (ofsn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `form_col`
#

# --------------------------------------------------------

#
# 資料表格式： `form_fill_in`
#

CREATE TABLE form_fill_in (
  schfi_sn int(10) unsigned NOT NULL auto_increment,
  ofsn smallint(5) unsigned NOT NULL default '0',
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  man_name varchar(20) NOT NULL default '',
  tel varchar(10) NOT NULL default '',
  email varchar(50) NOT NULL default '',
  fill_time datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (schfi_sn),
  KEY ofsn (ofsn,teacher_sn),
  KEY SHN (teacher_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `form_fill_in`
#

# --------------------------------------------------------

#
# 資料表格式： `form_value`
#

CREATE TABLE form_value (
  value_sn bigint(20) unsigned NOT NULL auto_increment,
  schfi_sn int(10) unsigned NOT NULL default '0',
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  ofsn smallint(5) unsigned NOT NULL default '0',
  col_sn int(10) unsigned NOT NULL default '0',
  value varchar(255) NOT NULL default '',
  PRIMARY KEY  (value_sn),
  KEY schfi_sn (schfi_sn,ofsn,col_sn),
  KEY SHN (teacher_sn),
  KEY col_sn (col_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `form_value`
#

# --------------------------------------------------------
#
# 資料表格式： `new_board`
#

CREATE TABLE new_board (
  serial int(10) unsigned NOT NULL auto_increment,
  title varchar(200) NOT NULL default '無主題',
  content text NOT NULL,
  teacher_sn smallint(5) unsigned NOT NULL default '1',
  post_date datetime NOT NULL default '0000-00-00 00:00:00',
  work_date date NOT NULL default '0000-00-00',
  FSN smallint(5) unsigned default NULL,
  image_url varchar(255) default NULL,
  PRIMARY KEY  (serial),
  KEY serial (serial)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `new_board`
#


#
# 資料表格式： `pro_module`
#

CREATE TABLE pro_module (
  pm_id bigint(11) NOT NULL auto_increment,
  pm_name varchar(30) NOT NULL default '',
  pm_item varchar(40) NOT NULL default '',
  pm_memo varchar(40) NOT NULL default '',
  pm_value varchar(100) NOT NULL default '',
  PRIMARY KEY  (pm_id),
  UNIQUE KEY pm_id (pm_id)
) TYPE=MyISAM COMMENT='程式設定資料';

#
# 列出以下資料庫的數據： `pro_module`
#

# --------------------------------------------------------

#
# 資料表格式： `pro_module_main`
#

CREATE TABLE pro_module_main (
  pm_name varchar(30) NOT NULL default '',
  m_display_name varchar(60) NOT NULL default '',
  m_group_name varchar(30) NOT NULL default '',
  m_ver  varchar(30) NOT NULL default '',
  m_create_date date NOT NULL default '0000-00-00',
  m_path varchar(60) NOT NULL default '',
  m_update_date datetime NOT NULL default '0000-00-00 00:00:00',  
  PRIMARY KEY  (pm_name),
  UNIQUE KEY pm_name (pm_name)
) TYPE=MyISAM COMMENT='校務模組主檔';

#
# 列出以下資料庫的數據： `pro_module_main`
#

#
# 資料表格式： `school_class`
#

CREATE TABLE school_class (
  class_sn mediumint(8) unsigned NOT NULL auto_increment,
  class_id varchar(11) NOT NULL default '',
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  c_year tinyint(2) unsigned NOT NULL default '0',
  c_name varchar(20) default NULL,
  c_kind varchar(30) default '一般班',
  c_sort tinyint(3) unsigned NOT NULL default '0',
  enable enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (class_sn),
  KEY year (year,semester)
) TYPE=MyISAM;

# --------------------------------------------------------

#
# 資料表格式： `score_course`
#

CREATE TABLE score_course (
  course_id mediumint(8) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  class_id varchar(11) NOT NULL default '',
  teacher_sn mediumint(9) NOT NULL default '0',
  class_year tinyint(2) unsigned NOT NULL default '0',
  class_name tinyint(2) unsigned NOT NULL default '0',
  day enum('0','1','2','3','4','5','6','7') default NULL,
  sector tinyint(1) NOT NULL default '0',
  ss_id smallint(5) unsigned NOT NULL default '0',
  room varchar(10) default NULL,
  allow enum('0','1') NOT NULL default '0',
  PRIMARY KEY  (course_id),
  KEY class_name (class_name),
  KEY class_year (class_year),
  KEY year (year,semester)
) TYPE=MyISAM;

# --------------------------------------------------------

#
# 資料表格式： `new_stud`
#

CREATE TABLE new_stud (
  newstud_sn int(10) NOT NULL auto_increment,
  stud_study_year tinyint(3) unsigned default NULL,
  old_school varchar(100) default NULL,
  stud_person_id varchar(20) default NULL,
  stud_name varchar(20) default NULL,
  stud_sex tinyint(3) unsigned default NULL,
  stud_tel_1 varchar(20) default NULL,
  stud_birthday date default NULL,
  guardian_name varchar(20) default NULL,
  stud_address varchar(200) default NULL,
  sure_study enum('1','0') default NULL,
  stud_id varchar(20) default NULL,
  class_year char(2) default NULL,
  class_sort tinyint(2) unsigned default NULL,
  class_site tinyint(2) unsigned default NULL,
  temp_score1 tinyint(4) NOT NULL default '-100',
  temp_score2 tinyint(4) NOT NULL default '-100',
  temp_score3 tinyint(4) NOT NULL default '-100',
  meno varchar(200) NOT NULL default '',
  UNIQUE KEY newstud_sn (newstud_sn)
) TYPE=MyISAM;


#
# 列出以下資料庫的數據： `score_course`
#




# --------------------------------------------------------

#
# 資料表格式： `score_input_col`
#

CREATE TABLE score_input_col (
  col_sn smallint(5) unsigned NOT NULL auto_increment,
  interface_sn tinyint(4) NOT NULL default '0',
  col_text varchar(255) default NULL,
  col_value varchar(255) default NULL,
  col_type varchar(20) NOT NULL default '',
  col_fn varchar(255) default NULL,
  col_ss enum('n','y') NOT NULL default 'n',
  col_comment enum('n','y') NOT NULL default 'n',
  col_check enum('0','1') default '0',
  col_date datetime default NULL,
  enable enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (col_sn),
  KEY interface_sn (interface_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `score_input_col`
#

INSERT INTO score_input_col VALUES (2, 1, '日常行為表現', '表現優異,表現良好,表現尚可,需再加油,有待改進', 'select', '', 'n', 'n', '0', '2002-12-13 14:21:52', '1');
INSERT INTO score_input_col VALUES (3, 1, '團體活動表現', '表現優異,表現良好,表現尚可,需再加油,有待改進', 'select', '', 'n', 'n', '0', '2002-12-13 14:21:57', '1');
INSERT INTO score_input_col VALUES (4, 1, '公共服務', '表現優異,表?{良好,表現尚可,需再加油,有待改進', 'select', '', 'n', 'n', '0', '2002-12-13 14:21:47', '1');
INSERT INTO score_input_col VALUES (5, 1, '校外特殊表現', '表現優異,表現良好,表現尚可,需再加油,有待改進', 'select', '', 'n', 'n', '0', '2002-12-13 14:22:21', '1');
INSERT INTO score_input_col VALUES (6, 1, '導師評語及建議', '', 'textarea', '', 'n', 'y', '0', '2002-12-19 10:29:00', '1');
INSERT INTO score_input_col VALUES (7, 1, '等第', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:23:17', '1');
INSERT INTO score_input_col VALUES (9, 1, '事假節數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:24:47', '1');
INSERT INTO score_input_col VALUES (10, 1, '病假節數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:25:08', '1');
INSERT INTO score_input_col VALUES (11, 1, '曠課節數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:25:43', '1');
INSERT INTO score_input_col VALUES (12, 1, '集會次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:26:01', '1');
INSERT INTO score_input_col VALUES (13, 1, '公假節數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:26:38', '1');
INSERT INTO score_input_col VALUES (14, 1, '其他節數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:26:53', '1');
INSERT INTO score_input_col VALUES (16, 1, '大功\次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:27:21', '1');
INSERT INTO score_input_col VALUES (17, 1, '小功\次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:27:43', '1');
INSERT INTO score_input_col VALUES (18, 1, '小過次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:27:58', '1');
INSERT INTO score_input_col VALUES (19, 1, '嘉獎次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:28:17', '1');
INSERT INTO score_input_col VALUES (20, 1, '大過次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:28:30', '1');
INSERT INTO score_input_col VALUES (21, 1, '警告次數', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:28:43', '1');
INSERT INTO score_input_col VALUES (22, 1, '其他', '', 'text', '', 'n', 'n', '0', '2002-12-13 14:29:12', '1');
INSERT INTO score_input_col VALUES (24, 1, '每週節數', '', 'text', 'get_ss_num', 'y', 'n', '0', '2002-12-17 11:38:07', '1');
INSERT INTO score_input_col VALUES (25, 1, '努力程度', '表現優異,表現良好,表現尚可,需再加油,有待改進', 'select', '', 'y', 'n', '0', '2002-12-13 14:30:51', '1');
INSERT INTO score_input_col VALUES (26, 1, '學習成就', '', 'text', 'get_ss_score', 'y', 'n', '0', '2002-12-17 11:38:51', '1');
INSERT INTO score_input_col VALUES (27, 1, '學習描述文字說明', '', 'text', '', 'y', 'y', '0', '2002-12-19 10:29:12', '1');
# --------------------------------------------------------

#
# 資料表格式： `score_input_interface`
#

CREATE TABLE score_input_interface (
  interface_sn tinyint(3) unsigned NOT NULL auto_increment,
  title varchar(255) NOT NULL default '',
  text text NOT NULL,
  html text NOT NULL,
  sshtml text,
  xml text,
  all_ss enum('n','y') NOT NULL default 'n',
  PRIMARY KEY  (interface_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `score_input_interface`
#

INSERT INTO score_input_interface VALUES (1, '預設成績單', '此成績單適合九年一貫課程，成績單版面使用中區六縣市九年一貫課程策略聯盟的成績評量通知書格式。', '<table cellspacing="0" cellpadding="0">\r\n<tr>\r\n<td>\r\n	<table bgcolor="#9ebcdd" cellspacing="1" cellpadding="4" width="100%">\r\n	<tr bgcolor="white">\r\n	<td colspan="13" nowrap>一、日常生活表現評量</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>日常行為表現</td>\r\n	<td colspan="3">{2_輸入欄}</td>\r\n	<td colspan="8" nowrap>導師評語及建議</td>\r\n	<td nowrap>等第</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>團體活動表現</td>\r\n	<td colspan="3">{3_輸入欄}</td>\r\n	<td rowspan="3" colspan="8">{6_輸入欄}</td>\r\n	<td rowspan="3" colspan="1">{7_輸入欄}</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>公共服務</td>\r\n	<td colspan="3">{4_輸入欄}</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>校外特殊表現</td>\r\n	<td colspan="3">{5_輸入欄}</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>學生缺席情況<br>\r\n	</td>\r\n	<td nowrap>事假<br>節數</td>\r\n	<td>{9_輸入欄}</td>\r\n	<td nowrap>病假<br>節數</td>\r\n	<td>{10_輸入欄}</td>\r\n	<td nowrap>曠課<br>節數</td>\r\n	<td>{11_輸入欄}</td>\r\n	<td nowrap>集會<br>次數</td>\r\n	<td>{12_輸入欄}</td>\r\n	<td nowrap>公假<br>節數</td>\r\n	<td>{13_輸入欄}</td>\r\n	<td nowrap>其他<br>節數</td>\r\n	<td>{14_輸入欄}</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>獎懲<br>\r\n	</td>\r\n	<td nowrap>大功\<br>次數</td>\r\n	<td>{16_輸入欄}</td>\r\n	<td nowrap>小功\<br>次數</td>\r\n	<td>{17_輸入欄}</td>\r\n	<td nowrap>嘉獎<br>次數</td>\r\n	<td>{18_輸入欄}</td>\r\n	<td nowrap>大過<br>次數</td>\r\n	<td>{19_輸入欄}</td>\r\n	<td nowrap>小過<br>次數</td>\r\n	<td>{20_輸入欄}</td>\r\n	<td nowrap>警告<br>次數</td>\r\n	<td>{21_輸入欄}</td>\r\n	</tr>\r\n	<tr bgcolor="white">\r\n	<td nowrap>其他</td>\r\n	<td colspan="12">{22_輸入欄}</td>\r\n	</tr>\r\n	</table>\r\n</td></tr>\r\n<tr><td>\r\n	<table bgcolor="#9ebcdd" cellspacing="1" cellpadding="4" width="100%">\r\n	<tr bgcolor="#c4d9ff">\r\n	<td>科目</td>\r\n	<td align="center">每週節數</td>\r\n	<td align="center">努力程度</td>\r\n	<td align="center">學習成就</td>\r\n	<td align="center">學習描述文字說明</td>\r\n	</tr>\r\n\r\n	<!--此處會自動加入下方『和科目相關欄位』的設定-->\r\n</table>\r\n</td>\r\n</tr>\r\n</table>\r\n', '<tr bgcolor=\'white\'>\r\n<td>{科目名稱}</td>\r\n<td align=\'center\'>{24_輸入欄}節</td>\r\n<td>{25_輸入欄}</td>\r\n<td align=\'center\'>{26_輸入欄}</td>\r\n<td>{27_輸入欄}</td>\r\n</tr>\r\n', '<table:table-row table:style-name="ss_table.1"><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{ss_name}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{24_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{25_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{26_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.E2" table:value-type="string"><text:p text:style-name="P10">{27_{ss_sn}}</text:p></table:table-cell></table:table-row>', 'y');




#
# 資料表格式： `score_input_value`
#

CREATE TABLE score_input_value (
  sc_sn int(10) unsigned NOT NULL auto_increment,
  interface_sn tinyint(4) NOT NULL default '0',
  date datetime NOT NULL default '0000-00-00 00:00:00',
  stud_id varchar(20) NOT NULL default '',
  class_id varchar(11) NOT NULL default '',
  value text NOT NULL,
  sel_year smallint(5) NOT NULL default '0',
  sel_seme enum('1','2') NOT NULL default '1',
  PRIMARY KEY  (sc_sn),
  KEY stud_id (stud_id),
  KEY class_id (class_id)
) TYPE=MyISAM;



# --------------------------------------------------------
#
# 資料表格式： `score_setup`
#

CREATE TABLE score_setup (
  setup_id smallint(5) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  class_year tinyint(2) unsigned NOT NULL default '0',
  allow_modify enum('false','true') NOT NULL default 'false',
  performance_test_times tinyint(1) unsigned default NULL,
  practice_test_times tinyint(2) unsigned default NULL,
  test_ratio varchar(255) default NULL,
  rule varchar(255) NOT NULL default '',
  score_mode enum('all','severally') NOT NULL default 'all',
  sections tinyint(4) NOT NULL default '8',
  interface_sn tinyint(3) unsigned NOT NULL default '1',
  update_date datetime NOT NULL default '0000-00-00 00:00:00',
  enable enum('1','0','always') NOT NULL default '1',
  PRIMARY KEY  (setup_id),
  KEY year (year,semester)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `score_setup`
#

# --------------------------------------------------------

#
# 資料表格式： `score_ss`
#

CREATE TABLE score_ss (
  ss_id smallint(5) unsigned NOT NULL auto_increment,
  scope_id tinyint(3) unsigned NOT NULL default '0',
  subject_id tinyint(3) unsigned NOT NULL default '0',
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  class_id varchar(11) NOT NULL default '',
  class_year tinyint(4) unsigned NOT NULL default '0',
  enable enum('1','0') NOT NULL default '1',
  need_exam enum('1','0') NOT NULL default '1',
  rate tinyint(3) unsigned NOT NULL default '0',
  sort float default NULL,
  sub_sort tinyint(3) unsigned default NULL,
  print enum('1','0') default NULL,
  link_ss varchar(200) NOT NULL default '',
  PRIMARY KEY  (ss_id),
  KEY scope_id (scope_id,subject_id,year),
  KEY class_year (class_year),
  KEY sort (sort),
  KEY class_id (class_id)
) TYPE=MyISAM;


# --------------------------------------------------------

#
# 資料表格式： `score_subject`
#

CREATE TABLE score_subject (
  subject_id tinyint(3) unsigned NOT NULL auto_increment,
  subject_name varchar(255) NOT NULL default '',
  subject_school set('0','1','2','3','4','5','6','7','8','9','10','11','12') default NULL,
  subject_kind enum('scope','subject') default NULL,
  enable enum('1','0') NOT NULL default '1',
  PRIMARY KEY  (subject_id)
) TYPE=MyISAM;
#
# 資料表格式： `course_class_time`
#

CREATE TABLE course_class_time (
  cct int(10) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  seme enum('1','2') NOT NULL default '1',
  class_time varchar(4) NOT NULL default '',
  class_id varchar(11) NOT NULL default '',
  Cyear tinyint(2) unsigned default NULL,
  PRIMARY KEY  (cct),
  KEY year (year,seme)
) TYPE=MyISAM;

# --------------------------------------------------------
#
# 資料表格式： `course_ss_num`
#

CREATE TABLE course_ss_num (
  csn int(10) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  seme enum('1','2') NOT NULL default '1',
  ss_id smallint(5) unsigned NOT NULL default '0',
  num tinyint(3) unsigned NOT NULL default '0',
  PRIMARY KEY  (csn),
  KEY year (year,seme)
) TYPE=MyISAM;

# --------------------------------------------------------

CREATE TABLE course_teach_num (
  ctn int(10) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  seme enum('1','2') NOT NULL default '1',
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  num tinyint(3) unsigned NOT NULL default '0',
  teach_year varchar(255) default NULL,
  PRIMARY KEY  (ctn),
  KEY year (year,seme)
) TYPE=MyISAM;
# --------------------------------------------------------
#
# 資料表格式： `course_teacher_ss_num`
#

CREATE TABLE course_teacher_ss_num (
  ctsn int(10) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  seme enum('1','2') NOT NULL default '1',
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  class_id varchar(11) NOT NULL default '',
  ss_id smallint(5) unsigned NOT NULL default '0',
  num tinyint(3) unsigned NOT NULL default '0',
  other varchar(20) default NULL,
  PRIMARY KEY  (ctsn),
  KEY year (year,seme)
) TYPE=MyISAM;

# --------------------------------------------------------
#
# 資料表格式： `course_tmp`
#

CREATE TABLE course_tmp (
  ctmp_sn mediumint(8) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  class_id varchar(11) NOT NULL default '',
  teacher_sn mediumint(9) NOT NULL default '0',
  class_year tinyint(2) unsigned NOT NULL default '0',
  class_name tinyint(2) unsigned NOT NULL default '0',
  day enum('0','1','2','3','4','5','6','7') default NULL,
  sector tinyint(1) NOT NULL default '0',
  ss_id smallint(5) unsigned NOT NULL default '0',
  room varchar(10) default NULL,
  other varchar(255) default NULL,
  PRIMARY KEY  (ctmp_sn),
  KEY class_name (class_name),
  KEY class_year (class_year),
  KEY year (year,semester)
) TYPE=MyISAM;



#
# 列出以下資料庫的數據： `score_subject`
#

INSERT INTO score_subject VALUES (1, ' 語文', '', 'scope', '1');
INSERT INTO score_subject VALUES (2, '健康與體育', '', 'scope', '1');
INSERT INTO score_subject VALUES (3, '生活', '', 'scope', '1');
INSERT INTO score_subject VALUES (4, '數學', '', 'scope', '1');
INSERT INTO score_subject VALUES (5, '綜合活動', '', 'scope', '1');
INSERT INTO score_subject VALUES (6, '國語', '', 'subject', '1');
INSERT INTO score_subject VALUES (7, '鄉土語文', '', 'subject', '1');
INSERT INTO score_subject VALUES (8, '彈性課程', '', 'scope', '1');
INSERT INTO score_subject VALUES (9, '社會', '', 'scope', '1');
INSERT INTO score_subject VALUES (10, '藝術與人文', '', 'scope', '1');
INSERT INTO score_subject VALUES (11, '自然與生活科技', '', 'scope', '1');
INSERT INTO score_subject VALUES (12, '自然', '', 'subject', '1');
INSERT INTO score_subject VALUES (13, '電腦', '', 'subject', '1');
INSERT INTO score_subject VALUES (14, '輔導活動', '', 'scope', '1');
# --------------------------------------------------------

#
# 資料表格式： `sfs_log`
#

CREATE TABLE sfs_log (
  log_id bigint(20) NOT NULL auto_increment,
  log_user varchar(20) NOT NULL default '',
  log_table varchar(40) NOT NULL default '',
  log_time timestamp(14) NOT NULL,
  log_ip varchar(16) NOT NULL default '',
  update_kind enum('insert','update','delete','query') NOT NULL default 'insert',
  chang_id varchar(20) NOT NULL default '',
  PRIMARY KEY  (log_id),
  KEY log_user (log_user)
) TYPE=MyISAM COMMENT='系統?O錄';

#
# 列出以下資料庫的數據： `sfs_log`
#

# --------------------------------------------------------

ALTER TABLE `teacher_base` RENAME `teacher_base1`;

 CREATE TABLE `teacher_base` (
`teach_id` varchar(20) NOT NULL default '',
`teach_person_id` varchar(10) NOT NULL default '',
`name` varchar(20) NOT NULL default '',
`sex` tinyint(3) unsigned NOT NULL default '0',
`age` tinyint(3) unsigned NOT NULL default '0',
`birthday` date NOT NULL default '0000-00-00',
`birth_place` tinyint(3) unsigned NOT NULL default '0',
`marriage` tinyint(3) unsigned default NULL,
`address` varchar(60) default NULL,
`home_phone` varchar(20) default NULL,
`cell_phone` varchar(20) default NULL,
`office_home` varchar(20) default NULL,
`teach_condition` tinyint(3) unsigned NOT NULL default '0',
`teach_memo` varchar(30) default NULL,
`login_pass` varchar(12) NOT NULL default '',
`teach_edu_kind` tinyint(3) unsigned NOT NULL default '0',
`teach_edu_abroad` varchar(4) NOT NULL default '',
`teach_sub_kind` varchar(10) NOT NULL default '',
`teach_check_kind` tinyint(3) unsigned NOT NULL default '0',
`teach_check_word` varchar(30) NOT NULL default '',
`teach_is_cripple` char(2) NOT NULL default '',
`update_time` timestamp(14) NOT NULL,
`update_id` varchar(20) NOT NULL default '',
`teacher_sn` smallint(6) unsigned NOT NULL auto_increment,
  PRIMARY KEY  (`teach_id`),
  KEY teacher_sn (`teacher_sn`)
) TYPE=MyISAM;
INSERT INTO `teacher_base` SELECT *,'' FROM `teacher_base1`;

DROP TABLE `teacher_base1`;

#
# Table structure for table `pro_user_state`
#

CREATE TABLE pro_user_state (
  teacher_sn smallint(6) NOT NULL default '0',
  pu_state tinyint(4) NOT NULL default '0',
  pu_time datetime default NULL,
  pu_time_over datetime NOT NULL default '0000-00-00 00:00:00',
  pu_ip varchar(20) NOT NULL default ''
) TYPE=MyISAM COMMENT='使用者狀態';

CREATE TABLE stud_compile (
  compile_sn int(10) unsigned NOT NULL auto_increment,
  student_sn int(10) unsigned NOT NULL default '0',
  sort tinyint(3) unsigned NOT NULL default '0',
  old_class varchar(11) NOT NULL default '',
  new_class varchar(11) NOT NULL default '',
  site_num tinyint(3) unsigned NOT NULL default '0',
  sex tinyint(1) unsigned NOT NULL default '0',
  stud_birthday date NOT NULL default '0000-00-00',
  update_time datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (compile_sn)
) TYPE=MyISAM;


CREATE TABLE pro_check_new (
  p_id int(10) unsigned NOT NULL auto_increment,
  pro_kind_id smallint(5) unsigned NOT NULL default '0',
  id_kind enum('處室','教師','職稱','學號','其他') default '其他',
  id_sn int(10) unsigned NOT NULL default '0',
  is_admin enum('0','1') NOT NULL default '0',
  PRIMARY KEY  (p_id),
  KEY pro_kind_id (pro_kind_id)
) TYPE=MyISAM;


#
# 資料表格式： `stud_addr_zip`
#

CREATE TABLE stud_addr_zip (
  zip char(3) NOT NULL default '',
  country varchar(10) NOT NULL default '',
  town varchar(10) NOT NULL default '',
  area_num varchar(6) NOT NULL default '',
  PRIMARY KEY  (zip)
) TYPE=MyISAM COMMENT='郵遞區號';

#
# 列出以下資料庫的數據： `stud_addr_zip`
#

INSERT INTO stud_addr_zip VALUES ('100', '台北市', '中正區', '02');
INSERT INTO stud_addr_zip VALUES ('103', '台北市', '大同區', '02');
INSERT INTO stud_addr_zip VALUES ('104', '台北市', '中山區', '02');
INSERT INTO stud_addr_zip VALUES ('105', '台北市', '松山區', '02');
INSERT INTO stud_addr_zip VALUES ('106', '台北市', '大安區', '02');
INSERT INTO stud_addr_zip VALUES ('108', '台北市', '萬華區', '02');
INSERT INTO stud_addr_zip VALUES ('110', '台北市', '信義區', '02');
INSERT INTO stud_addr_zip VALUES ('111', '台北市', '士林區', '02');
INSERT INTO stud_addr_zip VALUES ('112', '台北市', '北投區', '02');
INSERT INTO stud_addr_zip VALUES ('114', '台北市', '內湖區', '02');
INSERT INTO stud_addr_zip VALUES ('115', '台北市', '南港區', '02');
INSERT INTO stud_addr_zip VALUES ('116', '台北市', '文山區', '02');
INSERT INTO stud_addr_zip VALUES ('117', '台北市', '景美區', '02');
INSERT INTO stud_addr_zip VALUES ('200', '基隆市', '仁愛區', '02');
INSERT INTO stud_addr_zip VALUES ('201', '基隆市', '信義區', '02');
INSERT INTO stud_addr_zip VALUES ('202', '基隆市', '中正區', '02');
INSERT INTO stud_addr_zip VALUES ('203', '基隆市', '中山區', '02');
INSERT INTO stud_addr_zip VALUES ('204', '基隆市', '安樂區', '02');
INSERT INTO stud_addr_zip VALUES ('205', '基隆市', '暖暖區', '02');
INSERT INTO stud_addr_zip VALUES ('206', '基隆市', '七堵區', '02');
INSERT INTO stud_addr_zip VALUES ('207', '台北縣', '萬里鄉', '02');
INSERT INTO stud_addr_zip VALUES ('208', '台北縣', '金山鄉', '02');
INSERT INTO stud_addr_zip VALUES ('209', '連江縣', '馬祖南', '0836');
INSERT INTO stud_addr_zip VALUES ('210', '連江縣', '馬祖北', '0837');
INSERT INTO stud_addr_zip VALUES ('211', '連江縣', '馬祖莒', '0838');
INSERT INTO stud_addr_zip VALUES ('212', '連江縣', '馬祖東', '0839');
INSERT INTO stud_addr_zip VALUES ('220', '台北縣', '板橋市', '02');
INSERT INTO stud_addr_zip VALUES ('221', '台北縣', '汐止市', '02');
INSERT INTO stud_addr_zip VALUES ('222', '台北縣', '深坑鄉', '02');
INSERT INTO stud_addr_zip VALUES ('223', '台北縣', '石碇鄉', '02');
INSERT INTO stud_addr_zip VALUES ('224', '台北縣', '瑞芳鎮', '02');
INSERT INTO stud_addr_zip VALUES ('226', '台北縣', '平溪鄉', '02');
INSERT INTO stud_addr_zip VALUES ('227', '台北縣', '雙溪鄉', '02');
INSERT INTO stud_addr_zip VALUES ('228', '台北縣', '貢寮鄉', '02');
INSERT INTO stud_addr_zip VALUES ('231', '台北縣', '新店市', '02');
INSERT INTO stud_addr_zip VALUES ('232', '台北縣', '坪林鄉', '02');
INSERT INTO stud_addr_zip VALUES ('233', '台北縣', '烏來鄉', '02');
INSERT INTO stud_addr_zip VALUES ('234', '台北縣', '永和市', '02');
INSERT INTO stud_addr_zip VALUES ('235', '台北縣', '中和市', '02');
INSERT INTO stud_addr_zip VALUES ('236', '台北縣', '土城市', '02');
INSERT INTO stud_addr_zip VALUES ('237', '台北縣', '三峽鎮', '02');
INSERT INTO stud_addr_zip VALUES ('238', '台北縣', '樹林市', '02');
INSERT INTO stud_addr_zip VALUES ('239', '台北縣', '鶯歌鎮', '02');
INSERT INTO stud_addr_zip VALUES ('241', '台北縣', '三重市', '02');
INSERT INTO stud_addr_zip VALUES ('242', '台北縣', '新莊市', '02');
INSERT INTO stud_addr_zip VALUES ('243', '台北縣', '泰山鄉', '02');
INSERT INTO stud_addr_zip VALUES ('244', '台北縣', '林口鄉', '02');
INSERT INTO stud_addr_zip VALUES ('247', '台北縣', '蘆洲市', '02');
INSERT INTO stud_addr_zip VALUES ('248', '台北縣', '五股鄉', '02');
INSERT INTO stud_addr_zip VALUES ('249', '台北縣', '八里鄉', '02');
INSERT INTO stud_addr_zip VALUES ('251', '台北縣', '淡水鎮', '02');
INSERT INTO stud_addr_zip VALUES ('252', '台北縣', '三芝鄉', '02');
INSERT INTO stud_addr_zip VALUES ('253', '台北縣', '石門鄉', '02');
INSERT INTO stud_addr_zip VALUES ('260', '宜蘭縣', '宜蘭市', '039');
INSERT INTO stud_addr_zip VALUES ('261', '宜蘭縣', '頭城鎮', '039');
INSERT INTO stud_addr_zip VALUES ('262', '宜蘭縣', '礁溪鄉', '039');
INSERT INTO stud_addr_zip VALUES ('263', '宜蘭縣', '壯圍鄉', '039');
INSERT INTO stud_addr_zip VALUES ('264', '宜蘭縣', '員山鄉', '039');
INSERT INTO stud_addr_zip VALUES ('265', '宜蘭縣', '羅東鎮', '039');
INSERT INTO stud_addr_zip VALUES ('266', '宜蘭縣', '三星鄉', '039');
INSERT INTO stud_addr_zip VALUES ('267', '宜蘭縣', '大同鄉', '039');
INSERT INTO stud_addr_zip VALUES ('268', '宜蘭縣', '五結鄉', '039');
INSERT INTO stud_addr_zip VALUES ('269', '宜蘭縣', '冬山鄉', '039');
INSERT INTO stud_addr_zip VALUES ('270', '宜蘭縣', '蘇澳鎮', '039');
INSERT INTO stud_addr_zip VALUES ('272', '宜蘭縣', '南澳鄉', '039');
INSERT INTO stud_addr_zip VALUES ('300', '新竹市', '新竹市', '035');
INSERT INTO stud_addr_zip VALUES ('302', '新竹縣', '竹北市', '035');
INSERT INTO stud_addr_zip VALUES ('303', '新竹縣', '湖口鄉', '035');
INSERT INTO stud_addr_zip VALUES ('304', '新竹縣', '新豐鄉', '035');
INSERT INTO stud_addr_zip VALUES ('305', '新竹縣', '新埔鎮', '035');
INSERT INTO stud_addr_zip VALUES ('306', '新竹縣', '關西鎮', '035');
INSERT INTO stud_addr_zip VALUES ('307', '新竹縣', '芎林鄉', '035');
INSERT INTO stud_addr_zip VALUES ('308', '新竹縣', '寶山鄉', '035');
INSERT INTO stud_addr_zip VALUES ('310', '新竹縣', '竹東鎮', '035');
INSERT INTO stud_addr_zip VALUES ('311', '新竹縣', '五峰鄉', '035');
INSERT INTO stud_addr_zip VALUES ('312', '新竹縣', '橫山鄉', '035');
INSERT INTO stud_addr_zip VALUES ('313', '新竹縣', '尖石鄉', '035');
INSERT INTO stud_addr_zip VALUES ('314', '新竹縣', '北埔鄉', '035');
INSERT INTO stud_addr_zip VALUES ('315', '新竹縣', '峨眉鄉', '035');
INSERT INTO stud_addr_zip VALUES ('320', '桃園縣', '中壢市', '03');
INSERT INTO stud_addr_zip VALUES ('324', '桃園縣', '平鎮市', '03');
INSERT INTO stud_addr_zip VALUES ('325', '桃園縣', '龍潭鄉', '03');
INSERT INTO stud_addr_zip VALUES ('326', '桃園縣', '楊梅鎮', '03');
INSERT INTO stud_addr_zip VALUES ('327', '桃園縣', '新屋鄉', '03');
INSERT INTO stud_addr_zip VALUES ('328', '桃園縣', '觀音鄉', '03');
INSERT INTO stud_addr_zip VALUES ('330', '桃園縣', '桃園市', '03');
INSERT INTO stud_addr_zip VALUES ('333', '桃園縣', '龜山鄉', '03');
INSERT INTO stud_addr_zip VALUES ('334', '桃園縣', '八德市', '03');
INSERT INTO stud_addr_zip VALUES ('335', '桃園縣', '大溪鎮', '03');
INSERT INTO stud_addr_zip VALUES ('336', '桃園縣', '復興鄉', '03');
INSERT INTO stud_addr_zip VALUES ('337', '桃園縣', '大園鄉', '03');
INSERT INTO stud_addr_zip VALUES ('338', '桃園縣', '蘆竹鄉', '03');
INSERT INTO stud_addr_zip VALUES ('350', '苗栗縣', '竹南鎮', '037');
INSERT INTO stud_addr_zip VALUES ('351', '苗栗縣', '頭份鎮', '037');
INSERT INTO stud_addr_zip VALUES ('352', '苗栗縣', '三灣鄉', '037');
INSERT INTO stud_addr_zip VALUES ('353', '苗栗縣', '南庄鄉', '037');
INSERT INTO stud_addr_zip VALUES ('354', '苗栗縣', '獅潭鄉', '037');
INSERT INTO stud_addr_zip VALUES ('356', '苗栗縣', '後龍鎮', '037');
INSERT INTO stud_addr_zip VALUES ('357', '苗栗縣', '通霄鎮', '037');
INSERT INTO stud_addr_zip VALUES ('358', '苗栗縣', '苑裡鎮', '037');
INSERT INTO stud_addr_zip VALUES ('360', '苗栗縣', '苗栗市', '037');
INSERT INTO stud_addr_zip VALUES ('361', '苗栗縣', '造橋鄉', '037');
INSERT INTO stud_addr_zip VALUES ('362', '苗栗縣', '頭屋鄉', '037');
INSERT INTO stud_addr_zip VALUES ('363', '苗栗縣', '公館鄉', '037');
INSERT INTO stud_addr_zip VALUES ('364', '苗栗縣', '大湖鄉', '037');
INSERT INTO stud_addr_zip VALUES ('365', '苗栗縣', '泰安鄉', '037');
INSERT INTO stud_addr_zip VALUES ('366', '苗栗縣', '銅鑼鄉', '037');
INSERT INTO stud_addr_zip VALUES ('367', '苗栗縣', '三義鄉', '037');
INSERT INTO stud_addr_zip VALUES ('368', '苗栗縣', '西湖鄉', '037');
INSERT INTO stud_addr_zip VALUES ('369', '苗栗縣', '卓蘭鎮', '04');
INSERT INTO stud_addr_zip VALUES ('400', '台中市', '中區', '04');
INSERT INTO stud_addr_zip VALUES ('401', '台中市', '東區', '04');
INSERT INTO stud_addr_zip VALUES ('402', '台中市', '南區', '04');
INSERT INTO stud_addr_zip VALUES ('403', '台中市', '西區', '04');
INSERT INTO stud_addr_zip VALUES ('404', '台中市', '北區', '04');
INSERT INTO stud_addr_zip VALUES ('406', '台中市', '北屯', '04');
INSERT INTO stud_addr_zip VALUES ('407', '台中市', '西屯', '04');
INSERT INTO stud_addr_zip VALUES ('408', '台中市', '南屯', '04');
INSERT INTO stud_addr_zip VALUES ('411', '台中縣', '太平市', '04');
INSERT INTO stud_addr_zip VALUES ('412', '台中縣', '大里市', '04');
INSERT INTO stud_addr_zip VALUES ('413', '台中縣', '霧峰鄉', '04');
INSERT INTO stud_addr_zip VALUES ('414', '台中縣', '烏日鄉', '04');
INSERT INTO stud_addr_zip VALUES ('420', '台中縣', '豐原市', '04');
INSERT INTO stud_addr_zip VALUES ('421', '台中縣', '后里鄉', '04');
INSERT INTO stud_addr_zip VALUES ('422', '台中縣', '石岡鄉', '04');
INSERT INTO stud_addr_zip VALUES ('423', '台中縣', '東勢鎮', '04');
INSERT INTO stud_addr_zip VALUES ('424', '台中縣', '和平鄉', '04');
INSERT INTO stud_addr_zip VALUES ('426', '台中縣', '新社鄉', '04');
INSERT INTO stud_addr_zip VALUES ('427', '台中縣', '潭子鄉', '04');
INSERT INTO stud_addr_zip VALUES ('428', '台中縣', '大雅鄉', '04');
INSERT INTO stud_addr_zip VALUES ('429', '台中縣', '神岡鄉', '04');
INSERT INTO stud_addr_zip VALUES ('432', '台中縣', '大肚鄉', '04');
INSERT INTO stud_addr_zip VALUES ('433', '台中縣', '沙鹿鎮', '04');
INSERT INTO stud_addr_zip VALUES ('434', '台中縣', '龍井鄉', '04');
INSERT INTO stud_addr_zip VALUES ('435', '台中縣', '梧棲鎮', '04');
INSERT INTO stud_addr_zip VALUES ('436', '台中縣', '清水鎮', '04');
INSERT INTO stud_addr_zip VALUES ('437', '台中縣', '大甲鎮', '04');
INSERT INTO stud_addr_zip VALUES ('438', '台中縣', '外埔鄉', '04');
INSERT INTO stud_addr_zip VALUES ('439', '台中縣', '大安鄉', '04');
INSERT INTO stud_addr_zip VALUES ('500', '彰化縣', '彰化市', '04');
INSERT INTO stud_addr_zip VALUES ('502', '彰化縣', '芬園鄉', '04');
INSERT INTO stud_addr_zip VALUES ('503', '彰化縣', '花壇鄉', '04');
INSERT INTO stud_addr_zip VALUES ('504', '彰化縣', '秀水鄉', '04');
INSERT INTO stud_addr_zip VALUES ('505', '彰化縣', '鹿港鎮', '04');
INSERT INTO stud_addr_zip VALUES ('506', '彰化縣', '福興鄉', '04');
INSERT INTO stud_addr_zip VALUES ('507', '彰化縣', '線西鄉', '04');
INSERT INTO stud_addr_zip VALUES ('508', '彰化縣', '和美鎮', '04');
INSERT INTO stud_addr_zip VALUES ('509', '彰化縣', '伸港鄉', '04');
INSERT INTO stud_addr_zip VALUES ('510', '彰化縣', '員林鎮', '04');
INSERT INTO stud_addr_zip VALUES ('511', '彰化縣', '社頭鄉', '04');
INSERT INTO stud_addr_zip VALUES ('512', '彰化縣', '永靖鄉', '04');
INSERT INTO stud_addr_zip VALUES ('513', '彰化縣', '埔心鄉', '04');
INSERT INTO stud_addr_zip VALUES ('514', '彰化縣', '溪湖鎮', '04');
INSERT INTO stud_addr_zip VALUES ('515', '彰化縣', '大村鄉', '04');
INSERT INTO stud_addr_zip VALUES ('516', '彰化縣', '埔鹽鄉', '04');
INSERT INTO stud_addr_zip VALUES ('520', '彰化縣', '田中鎮', '04');
INSERT INTO stud_addr_zip VALUES ('521', '彰化縣', '北斗鎮', '04');
INSERT INTO stud_addr_zip VALUES ('522', '彰化縣', '田尾鄉', '04');
INSERT INTO stud_addr_zip VALUES ('523', '彰化縣', '埤頭鄉', '04');
INSERT INTO stud_addr_zip VALUES ('524', '彰化縣', '溪州鄉', '04');
INSERT INTO stud_addr_zip VALUES ('525', '彰化縣', '竹塘鄉', '04');
INSERT INTO stud_addr_zip VALUES ('526', '彰化縣', '二林鎮', '04');
INSERT INTO stud_addr_zip VALUES ('527', '彰化縣', '大城鄉', '04');
INSERT INTO stud_addr_zip VALUES ('528', '彰化縣', '芳苑鄉', '04');
INSERT INTO stud_addr_zip VALUES ('530', '彰化縣', '二水鄉', '04');
INSERT INTO stud_addr_zip VALUES ('540', '南投縣', '南投市', '049');
INSERT INTO stud_addr_zip VALUES ('541', '南投縣', '中寮鄉', '049');
INSERT INTO stud_addr_zip VALUES ('542', '南投縣', '草屯鎮', '049');
INSERT INTO stud_addr_zip VALUES ('544', '南投縣', '國姓鄉', '049');
INSERT INTO stud_addr_zip VALUES ('545', '南投縣', '埔里鎮', '049');
INSERT INTO stud_addr_zip VALUES ('546', '南投縣', '仁愛鄉', '049');
INSERT INTO stud_addr_zip VALUES ('551', '南投縣', '名間鄉', '049');
INSERT INTO stud_addr_zip VALUES ('552', '南投縣', '集集鎮', '049');
INSERT INTO stud_addr_zip VALUES ('553', '南投縣', '水里鄉', '049');
INSERT INTO stud_addr_zip VALUES ('555', '南投縣', '魚池鄉', '049');
INSERT INTO stud_addr_zip VALUES ('556', '南投縣', '信義鄉', '049');
INSERT INTO stud_addr_zip VALUES ('557', '南投縣', '竹山鎮', '049');
INSERT INTO stud_addr_zip VALUES ('558', '南投縣', '鹿谷鄉', '049');
INSERT INTO stud_addr_zip VALUES ('600', '嘉義市', '西區友', '05');
INSERT INTO stud_addr_zip VALUES ('602', '嘉義縣', '番路鄉', '05');
INSERT INTO stud_addr_zip VALUES ('603', '嘉義縣', '梅山鄉', '05');
INSERT INTO stud_addr_zip VALUES ('604', '嘉義縣', '竹崎鄉', '05');
INSERT INTO stud_addr_zip VALUES ('605', '嘉義縣', '阿里山鄉', '05');
INSERT INTO stud_addr_zip VALUES ('606', '嘉義縣', '中埔鄉', '05');
INSERT INTO stud_addr_zip VALUES ('607', '嘉義縣', '大埔鄉', '05');
INSERT INTO stud_addr_zip VALUES ('608', '嘉義縣', '水上鄉', '05');
INSERT INTO stud_addr_zip VALUES ('611', '嘉義縣', '鹿草鄉', '05');
INSERT INTO stud_addr_zip VALUES ('612', '嘉義縣', '太保市', '05');
INSERT INTO stud_addr_zip VALUES ('613', '嘉義縣', '朴子市', '05');
INSERT INTO stud_addr_zip VALUES ('614', '嘉義縣', '東石鄉', '05');
INSERT INTO stud_addr_zip VALUES ('615', '嘉義縣', '六腳鄉', '05');
INSERT INTO stud_addr_zip VALUES ('616', '嘉義縣', '新港鄉', '05');
INSERT INTO stud_addr_zip VALUES ('621', '嘉義縣', '民雄鄉', '05');
INSERT INTO stud_addr_zip VALUES ('622', '嘉義縣', '大林鎮', '05');
INSERT INTO stud_addr_zip VALUES ('623', '嘉義縣', '溪口鄉', '05');
INSERT INTO stud_addr_zip VALUES ('624', '嘉義縣', '義竹鄉', '05');
INSERT INTO stud_addr_zip VALUES ('625', '嘉義縣', '布袋鎮', '05');
INSERT INTO stud_addr_zip VALUES ('630', '雲林縣', '斗南鎮', '05');
INSERT INTO stud_addr_zip VALUES ('631', '雲林縣', '大埤鄉', '05');
INSERT INTO stud_addr_zip VALUES ('632', '雲林縣', '虎尾鎮', '05');
INSERT INTO stud_addr_zip VALUES ('633', '雲林縣', '土庫鎮', '05');
INSERT INTO stud_addr_zip VALUES ('634', '雲林縣', '褒忠鄉', '05');
INSERT INTO stud_addr_zip VALUES ('635', '雲林縣', '東勢鄉', '05');
INSERT INTO stud_addr_zip VALUES ('636', '雲林縣', '台西鄉', '05');
INSERT INTO stud_addr_zip VALUES ('637', '雲林縣', '崙背鄉', '05');
INSERT INTO stud_addr_zip VALUES ('638', '雲林縣', '麥寮鄉', '05');
INSERT INTO stud_addr_zip VALUES ('640', '雲林縣', '斗六市', '05');
INSERT INTO stud_addr_zip VALUES ('643', '雲林縣', '林內鄉', '05');
INSERT INTO stud_addr_zip VALUES ('646', '雲林縣', '古坑鄉', '05');
INSERT INTO stud_addr_zip VALUES ('647', '雲林縣', '莿桐鄉', '05');
INSERT INTO stud_addr_zip VALUES ('648', '雲林縣', '西螺鎮', '05');
INSERT INTO stud_addr_zip VALUES ('649', '雲林縣', '二崙鄉', '05');
INSERT INTO stud_addr_zip VALUES ('651', '雲林縣', '北港鎮', '05');
INSERT INTO stud_addr_zip VALUES ('652', '雲林縣', '水林鄉', '05');
INSERT INTO stud_addr_zip VALUES ('653', '雲林縣', '口湖鄉', '05');
INSERT INTO stud_addr_zip VALUES ('654', '雲林縣', '四湖鄉', '05');
INSERT INTO stud_addr_zip VALUES ('655', '雲林縣', '元長鄉', '05');
INSERT INTO stud_addr_zip VALUES ('700', '台南市', '中區', '06');
INSERT INTO stud_addr_zip VALUES ('701', '台南市', '東區', '06');
INSERT INTO stud_addr_zip VALUES ('702', '台南市', '南區', '06');
INSERT INTO stud_addr_zip VALUES ('703', '台南市', '西區', '06');
INSERT INTO stud_addr_zip VALUES ('704', '台南市', '北區', '06');
INSERT INTO stud_addr_zip VALUES ('708', '台南市', '安平區', '06');
INSERT INTO stud_addr_zip VALUES ('709', '台南市', '安南區', '06');
INSERT INTO stud_addr_zip VALUES ('710', '台南縣', '永康市', '06');
INSERT INTO stud_addr_zip VALUES ('711', '台南縣', '歸仁鄉', '06');
INSERT INTO stud_addr_zip VALUES ('712', '台南縣', '新化鎮', '06');
INSERT INTO stud_addr_zip VALUES ('713', '台南縣', '左鎮鄉', '06');
INSERT INTO stud_addr_zip VALUES ('714', '台南縣', '玉井鄉', '06');
INSERT INTO stud_addr_zip VALUES ('715', '台南縣', '楠西鄉', '06');
INSERT INTO stud_addr_zip VALUES ('716', '台南縣', '南化鄉', '06');
INSERT INTO stud_addr_zip VALUES ('717', '台南縣', '仁德鄉', '06');
INSERT INTO stud_addr_zip VALUES ('718', '台南縣', '關廟鄉', '06');
INSERT INTO stud_addr_zip VALUES ('719', '台南縣', '龍崎鄉', '06');
INSERT INTO stud_addr_zip VALUES ('720', '台南縣', '官田鄉', '06');
INSERT INTO stud_addr_zip VALUES ('721', '台南縣', '麻豆鎮', '06');
INSERT INTO stud_addr_zip VALUES ('722', '台南縣', '佳里鎮', '06');
INSERT INTO stud_addr_zip VALUES ('723', '台南縣', '西港鄉', '06');
INSERT INTO stud_addr_zip VALUES ('724', '台南縣', '七股鄉', '06');
INSERT INTO stud_addr_zip VALUES ('725', '台南縣', '將軍鄉', '06');
INSERT INTO stud_addr_zip VALUES ('726', '台南縣', '學甲鎮', '06');
INSERT INTO stud_addr_zip VALUES ('727', '台南縣', '北門鄉', '06');
INSERT INTO stud_addr_zip VALUES ('730', '台南縣', '新營市', '06');
INSERT INTO stud_addr_zip VALUES ('731', '台南縣', '後壁鄉', '06');
INSERT INTO stud_addr_zip VALUES ('732', '台南縣', '白河鎮', '06');
INSERT INTO stud_addr_zip VALUES ('733', '台南縣', '東山鄉', '06');
INSERT INTO stud_addr_zip VALUES ('734', '台南縣', '六甲鄉', '06');
INSERT INTO stud_addr_zip VALUES ('735', '台南縣', '下營鄉', '06');
INSERT INTO stud_addr_zip VALUES ('736', '台南縣', '柳營鄉', '06');
INSERT INTO stud_addr_zip VALUES ('737', '台南縣', '鹽水鎮', '06');
INSERT INTO stud_addr_zip VALUES ('741', '台南縣', '善化鎮', '06');
INSERT INTO stud_addr_zip VALUES ('742', '台南縣', '大內鄉', '06');
INSERT INTO stud_addr_zip VALUES ('743', '台南縣', '山上鄉', '06');
INSERT INTO stud_addr_zip VALUES ('744', '台南縣', '新市鄉', '06');
INSERT INTO stud_addr_zip VALUES ('745', '台南縣', '安定鄉', '06');
INSERT INTO stud_addr_zip VALUES ('800', '高雄市', '新興區', '07');
INSERT INTO stud_addr_zip VALUES ('801', '高雄市', '前金區', '07');
INSERT INTO stud_addr_zip VALUES ('802', '高雄市', '苓雅區', '07');
INSERT INTO stud_addr_zip VALUES ('803', '高雄市', '鹽埕區', '07');
INSERT INTO stud_addr_zip VALUES ('804', '高雄市', '鼓山區', '07');
INSERT INTO stud_addr_zip VALUES ('805', '高雄市', '旗津區', '07');
INSERT INTO stud_addr_zip VALUES ('806', '高雄市', '前鎮區', '07');
INSERT INTO stud_addr_zip VALUES ('807', '高雄市', '三民區', '07');
INSERT INTO stud_addr_zip VALUES ('811', '高雄市', '楠梓區', '07');
INSERT INTO stud_addr_zip VALUES ('812', '高雄市', '小港區', '07');
INSERT INTO stud_addr_zip VALUES ('813', '高雄市', '左營自', '07');
INSERT INTO stud_addr_zip VALUES ('814', '高雄縣', '仁武鄉', '07');
INSERT INTO stud_addr_zip VALUES ('815', '高雄縣', '大社鄉', '07');
INSERT INTO stud_addr_zip VALUES ('817', '南海諸島', '東沙', '0827');
INSERT INTO stud_addr_zip VALUES ('819', '南海諸島', '南沙', '0827');
INSERT INTO stud_addr_zip VALUES ('820', '高雄縣', '岡山鎮', '07');
INSERT INTO stud_addr_zip VALUES ('821', '高雄縣', '路竹鄉', '07');
INSERT INTO stud_addr_zip VALUES ('822', '高雄縣', '阿蓮鄉', '07');
INSERT INTO stud_addr_zip VALUES ('823', '高雄縣', '田寮鄉', '07');
INSERT INTO stud_addr_zip VALUES ('824', '高雄縣', '燕巢鄉', '07');
INSERT INTO stud_addr_zip VALUES ('825', '高雄縣', '橋頭鄉', '07');
INSERT INTO stud_addr_zip VALUES ('826', '高雄縣', '梓官鄉', '07');
INSERT INTO stud_addr_zip VALUES ('827', '高雄縣', '彌陀鄉', '07');
INSERT INTO stud_addr_zip VALUES ('828', '高雄縣', '永安鄉', '07');
INSERT INTO stud_addr_zip VALUES ('829', '高雄縣', '湖內鄉', '07');
INSERT INTO stud_addr_zip VALUES ('830', '高雄縣', '鳳山市', '07');
INSERT INTO stud_addr_zip VALUES ('831', '高雄縣', '大寮鄉', '07');
INSERT INTO stud_addr_zip VALUES ('832', '高雄縣', '林園鄉', '07');
INSERT INTO stud_addr_zip VALUES ('833', '高雄縣', '鳥松鄉', '07');
INSERT INTO stud_addr_zip VALUES ('840', '高雄縣', '大樹鄉', '07');
INSERT INTO stud_addr_zip VALUES ('842', '高雄縣', '旗山鎮', '07');
INSERT INTO stud_addr_zip VALUES ('843', '高雄縣', '美濃鎮', '07');
INSERT INTO stud_addr_zip VALUES ('844', '高雄縣', '六龜鄉', '07');
INSERT INTO stud_addr_zip VALUES ('845', '高雄縣', '內門鄉', '07');
INSERT INTO stud_addr_zip VALUES ('846', '高雄縣', '杉林鄉', '07');
INSERT INTO stud_addr_zip VALUES ('847', '高雄縣', '甲仙鄉', '07');
INSERT INTO stud_addr_zip VALUES ('848', '高雄縣', '桃源鄉', '07');
INSERT INTO stud_addr_zip VALUES ('849', '高雄縣', '三民鄉', '07');
INSERT INTO stud_addr_zip VALUES ('851', '高雄縣', '茂林鄉', '07');
INSERT INTO stud_addr_zip VALUES ('852', '高雄縣', '茄萣鄉', '07');
INSERT INTO stud_addr_zip VALUES ('880', '澎湖縣', '馬公市', '06');
INSERT INTO stud_addr_zip VALUES ('881', '澎湖縣', '西嶼鄉', '06');
INSERT INTO stud_addr_zip VALUES ('882', '澎湖縣', '望安鄉', '06');
INSERT INTO stud_addr_zip VALUES ('883', '澎湖縣', '七美鄉', '06');
INSERT INTO stud_addr_zip VALUES ('884', '澎湖縣', '白沙鄉', '06');
INSERT INTO stud_addr_zip VALUES ('885', '澎湖縣', '湖西鄉', '06');
INSERT INTO stud_addr_zip VALUES ('890', '金門縣', '金沙鎮', '0823');
INSERT INTO stud_addr_zip VALUES ('891', '金門縣', '金湖鎮', '0823');
INSERT INTO stud_addr_zip VALUES ('892', '金門縣', '金寧鄉', '0823');
INSERT INTO stud_addr_zip VALUES ('893', '金門縣', '金城鎮', '0823');
INSERT INTO stud_addr_zip VALUES ('894', '金門縣', '烈嶼鄉', '0823');
INSERT INTO stud_addr_zip VALUES ('896', '金門縣', '烏坵', '0826');
INSERT INTO stud_addr_zip VALUES ('900', '屏東縣', '屏東市', '08');
INSERT INTO stud_addr_zip VALUES ('901', '屏東縣', '三地鄉', '08');
INSERT INTO stud_addr_zip VALUES ('902', '屏東縣', '霧台鄉', '08');
INSERT INTO stud_addr_zip VALUES ('903', '屏東縣', '瑪家鄉', '08');
INSERT INTO stud_addr_zip VALUES ('904', '屏東縣', '九如鄉', '08');
INSERT INTO stud_addr_zip VALUES ('905', '屏東縣', '里港鄉', '08');
INSERT INTO stud_addr_zip VALUES ('906', '屏東縣', '高樹鄉', '08');
INSERT INTO stud_addr_zip VALUES ('907', '屏東縣', '鹽埔鄉', '08');
INSERT INTO stud_addr_zip VALUES ('908', '屏東縣', '長治鄉', '08');
INSERT INTO stud_addr_zip VALUES ('909', '屏東縣', '麟洛鄉', '08');
INSERT INTO stud_addr_zip VALUES ('911', '屏東縣', '竹田鄉', '08');
INSERT INTO stud_addr_zip VALUES ('912', '屏東縣', '內埔鄉', '08');
INSERT INTO stud_addr_zip VALUES ('913', '屏東縣', '萬丹鄉', '08');
INSERT INTO stud_addr_zip VALUES ('920', '屏東縣', '潮州鎮', '08');
INSERT INTO stud_addr_zip VALUES ('921', '屏東縣', '泰武鄉', '08');
INSERT INTO stud_addr_zip VALUES ('922', '屏東縣', '來義鄉', '08');
INSERT INTO stud_addr_zip VALUES ('923', '屏東縣', '萬巒鄉', '08');
INSERT INTO stud_addr_zip VALUES ('924', '屏東縣', '崁頂鄉', '08');
INSERT INTO stud_addr_zip VALUES ('925', '屏東縣', '新埤鄉', '08');
INSERT INTO stud_addr_zip VALUES ('926', '屏東縣', '南州鄉', '08');
INSERT INTO stud_addr_zip VALUES ('927', '屏東縣', '林邊鄉', '08');
INSERT INTO stud_addr_zip VALUES ('928', '屏東縣', '東港鎮', '08');
INSERT INTO stud_addr_zip VALUES ('929', '屏東縣', '琉球鄉', '08');
INSERT INTO stud_addr_zip VALUES ('931', '屏東縣', '佳冬鄉', '08');
INSERT INTO stud_addr_zip VALUES ('932', '屏東縣', '新園鄉', '08');
INSERT INTO stud_addr_zip VALUES ('940', '屏東縣', '枋寮鄉', '08');
INSERT INTO stud_addr_zip VALUES ('941', '屏東縣', '枋山鄉', '08');
INSERT INTO stud_addr_zip VALUES ('942', '屏東縣', '春日鄉', '08');
INSERT INTO stud_addr_zip VALUES ('943', '屏東縣', '獅子鄉', '08');
INSERT INTO stud_addr_zip VALUES ('944', '屏東縣', '車城鄉', '08');
INSERT INTO stud_addr_zip VALUES ('945', '屏東縣', '牡丹鄉', '08');
INSERT INTO stud_addr_zip VALUES ('946', '屏東縣', '恆春鎮', '08');
INSERT INTO stud_addr_zip VALUES ('947', '屏東縣', '滿州鄉', '08');
INSERT INTO stud_addr_zip VALUES ('950', '台東縣', '台東市', '089');
INSERT INTO stud_addr_zip VALUES ('951', '台東縣', '綠島鄉', '089');
INSERT INTO stud_addr_zip VALUES ('952', '台東縣', '蘭嶼鄉', '089');
INSERT INTO stud_addr_zip VALUES ('953', '台東縣', '延平鄉', '089');
INSERT INTO stud_addr_zip VALUES ('954', '台東縣', '卑南鄉', '089');
INSERT INTO stud_addr_zip VALUES ('955', '台東縣', '鹿野鄉', '089');
INSERT INTO stud_addr_zip VALUES ('956', '台東縣', '關山鎮', '089');
INSERT INTO stud_addr_zip VALUES ('957', '台東縣', '海端鄉', '089');
INSERT INTO stud_addr_zip VALUES ('958', '台東縣', '池上鄉', '089');
INSERT INTO stud_addr_zip VALUES ('959', '台東縣', '東河鄉', '089');
INSERT INTO stud_addr_zip VALUES ('961', '台東縣', '成氐?, '089');
INSERT INTO stud_addr_zip VALUES ('962', '台東縣', '長濱鄉', '089');
INSERT INTO stud_addr_zip VALUES ('963', '台東縣', '太麻里', '089');
INSERT INTO stud_addr_zip VALUES ('964', '台東縣', '金峰鄉', '089');
INSERT INTO stud_addr_zip VALUES ('965', '台東縣', '大武鄉', '089');
INSERT INTO stud_addr_zip VALUES ('966', '台東縣', '達仁鄉', '089');
INSERT INTO stud_addr_zip VALUES ('970', '花蓮縣', '花蓮市', '038');
INSERT INTO stud_addr_zip VALUES ('971', '花蓮縣', '新城鄉', '038');
INSERT INTO stud_addr_zip VALUES ('972', '花蓮縣', '秀林鄉', '038');
INSERT INTO stud_addr_zip VALUES ('973', '花蓮縣', '吉安鄉', '038');
INSERT INTO stud_addr_zip VALUES ('974', '花蓮縣', '壽豐鄉', '038');
INSERT INTO stud_addr_zip VALUES ('975', '花蓮縣', '鳳林鎮', '038');
INSERT INTO stud_addr_zip VALUES ('976', '花蓮縣', '光復鄉', '038');
INSERT INTO stud_addr_zip VALUES ('977', '花蓮縣', '豐濱鄉', '038');
INSERT INTO stud_addr_zip VALUES ('978', '花蓮縣', '瑞穗鄉', '038');
INSERT INTO stud_addr_zip VALUES ('979', '花蓮縣', '萬榮鄉', '038');
INSERT INTO stud_addr_zip VALUES ('981', '花蓮縣', '玉里鎮', '038');
INSERT INTO stud_addr_zip VALUES ('982', '花蓮縣', '卓溪鄉', '038');
INSERT INTO stud_addr_zip VALUES ('983', '花蓮縣', '富里鄉', '038');

#
# 資料表格式： `sfs_module`
#

CREATE TABLE sfs_module (
  msn smallint(5) unsigned NOT NULL auto_increment,
  showname varchar(100) NOT NULL default '',
  dirname varchar(100) NOT NULL default '',
  sort smallint(5) unsigned NOT NULL default '0',
  isopen tinyint(1) NOT NULL default '0',
  islive tinyint(4) NOT NULL default '1',
  of_group smallint(5) unsigned NOT NULL default '0',
  ver varchar(20) NOT NULL default '',
  icon_image varchar(255) NOT NULL default '',
  author varchar(100) NOT NULL default '',
  creat_date date NOT NULL default '0000-00-00',
  kind enum('模組','分類') NOT NULL default '模組',
  txt varchar(255) NOT NULL default '',
  PRIMARY KEY  (msn),
  KEY sort (sort,of_group)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `sfs_module`
#
INSERT INTO sfs_module VALUES (1,'系統管理','',7,0,1,0,'','administrator_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (2,'校務行政','',1,1,1,0,'','school_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (8,'文件資料庫','docup',4,1,1,2,'2.0.1','','hami','2002-12-15','模組','');
INSERT INTO sfs_module VALUES (9,'午餐\食譜公告','lunch',3,1,1,2,'1.0.8','','prolin','2000-09-17','模組','');
INSERT INTO sfs_module VALUES (7,'圖書管理系統','book',2,1,1,2,'2.0.1','','hami','2002-12-15','模組','');
INSERT INTO sfs_module VALUES (41,'南縣教師管理','tnc_teach_class',6,0,1,12,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (11,'校園行事曆','school_calendar',1,1,1,2,'1.0','','tad','2003-03-24','模組','');
INSERT INTO sfs_module VALUES (12,'教務','',2,0,1,0,'','school_affairs_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (13,'訓導','',3,0,1,0,'','student_counsellor_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (14,'輔導','',4,0,0,0,'','advisory_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (15,'教職員','',6,0,1,0,'','school_teacher_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (16,'教學組','',3,0,1,12,'','student_edu_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (17,'註冊組','',4,0,1,12,'','student_reg_icon.png','','0000-00-00','分類','');
INSERT INTO sfs_module VALUES (18,'系統備份','backup',2,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (19,'指定新網管','chang_root',8,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (20,'資料庫欄位管理','database_info',6,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (21,'學校設定','school_setup',1,0,1,12,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (23,'成績單介面管理','score_input_interface',11,0,0,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (24,'模組權限管理','sfs_man2',1,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (26,'系統選項清單設定','sfs_text',7,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (60,'缺曠課獎懲管理','absent',1,0,1,13,'1.0','','','2003-04-18','模組','');
INSERT INTO sfs_module VALUES (28,'線上調查系統','online_form',13,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (29,'學期初設定','every_year_setup',2,0,1,12,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (30,'行事曆','calendar',16,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (31,'班級學籍管理','stud_class',1,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (32,'專科教室預約','new_compclass',15,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (33,'成績管理','score_input',12,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (34,'教師管理','teach_class',5,0,1,12,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (35,'行政密碼查詢','teacher_pass',9,0,1,1,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (36,'公告管理','new_board',14,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (37,'製作成績單','academic_record',11,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (40,'學校課表匯出系統','course_paper',1,0,1,16,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (42,'成績查詢','score_list',2,0,1,16,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (43,'成績管理','score_manage',3,0,1,16,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (44,'學籍管理','stud_reg',1,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (45,'學生異動','stud_move',2,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (46,'學生資料查詢統計','stud_query',3,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (47,'匯入資料','create_data',4,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (48,'編班作業','stud_year',5,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (49,'學籍報表','stud_report',6,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (50,'成績輸入','score_input_all',7,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (51,'S形自動編班','stud_compile',8,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (52,'新生編班','temp_compile',9,0,1,17,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (53,'畢業生作業','graduate',10,0,1,17,'','','JRH','2003-03-25','模組','');
INSERT INTO sfs_module VALUES (54,'更改密碼','chpass',21,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (55,'級務管理','class_things',2,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (56,'數位相本','mig',5,1,1,2,'2.0.1','','hami','2003-03-19','模組','');
INSERT INTO sfs_module VALUES (57,'教師通訊錄','teach_report_more',22,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (58,'個人資料','teacher_self',20,0,1,15,'','','','0000-00-00','模組','');
INSERT INTO sfs_module VALUES (59,'學校課表查詢系統','new_course',6,1,1,2,'1.0','','','2003-01-01','模組','');
INSERT INTO sfs_module VALUES (61,'校務佈告欄','board',7,1,1,2,'','','hami','2003-04-06','模組','');
INSERT INTO sfs_module VALUES (62,'校務佈告欄管理程式','board_man',12,0,1,1,'','','hami','2003-04-06','模組','');


# --------------------------------------------------------

#
# 資料表格式： `calendar`
#

CREATE TABLE calendar (
  cal_sn smallint(5) unsigned NOT NULL auto_increment,
  year smallint(4) unsigned NOT NULL default '0',
  month tinyint(2) unsigned NOT NULL default '0',
  day tinyint(2) unsigned NOT NULL default '0',
  week enum('0','1','2','3','4','5','6') NOT NULL default '0',
  time time NOT NULL default '00:00:00',
  place varchar(255) NOT NULL default '',
  thing text NOT NULL,
  kind varchar(255) NOT NULL default '',
  teacher_sn smallint(5) unsigned NOT NULL default '0',
  from_teacher_sn smallint(5) unsigned NOT NULL default '0',
  from_cal_sn mediumint(8) unsigned NOT NULL default '0',
  restart enum('0','md','d','w') NOT NULL default '0',
  restart_day date NOT NULL default '0000-00-00',
  restart_end date NOT NULL default '0000-00-00',
  import varchar(255) NOT NULL default '',
  post_time datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (cal_sn),
  KEY time (time),
  KEY teacher_sn (teacher_sn),
  KEY from_cal_sn (from_cal_sn),
  KEY week (week),
  KEY restart_day (restart_day,restart_end)
) TYPE=MyISAM;

#
# 資料表格式： `course_room`
#

CREATE TABLE course_room (
  crsn int(10) unsigned NOT NULL auto_increment,
  date date NOT NULL default '0000-00-00',
  day enum('0','1','2','3','4','5','6','7') NOT NULL default '0',
  sector tinyint(1) unsigned NOT NULL default '0',
  room varchar(50) NOT NULL default '',
  teacher_sn mediumint(8) unsigned NOT NULL default '0',
  sign_date datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (crsn),
  KEY teacher_sn (teacher_sn),
  KEY sector (sector),
  KEY day (day)
) TYPE=MyISAM;

#
# 資料表格式： `grad_stud`
#

CREATE TABLE grad_stud (
  grad_sn int(10) NOT NULL auto_increment,
  stud_grad_year tinyint(3) unsigned default NULL,
  class_year char(2) default NULL,
  class_sort tinyint(2) unsigned default NULL,
  stud_id varchar(20) default NULL,
  grad_kind tinyint(1) unsigned default NULL,
  grad_date date default NULL,
  grad_word varchar(20) default NULL,
  grad_num varchar(20) default NULL,
  grad_score float unsigned default NULL,
  UNIQUE KEY grad_sn (grad_sn)
) TYPE=MyISAM;

#
# 資料表格式： `lunchtb`
#

CREATE TABLE lunchtb (
  pDate date NOT NULL default '0000-00-00',
  pMday tinyint(4) NOT NULL default '0',
  pFood varchar(20) default NULL,
  pMenu varchar(120) default NULL,
  pFruit varchar(20) default NULL,
  pPs varchar(20) default NULL,
  pDesign varchar(20) default NULL,
  PRIMARY KEY  (pDate)
) TYPE=MyISAM;

#
# 資料表格式： `school_day`
#

CREATE TABLE school_day (
  day_kind varchar(40) NOT NULL default '',
  day date NOT NULL default '0000-00-00',
  year tinyint(2) unsigned NOT NULL default '0',
  seme enum('1','2') NOT NULL default '1',
  UNIQUE KEY year_seme (day_kind,year,seme)
) TYPE=MyISAM;


#
# 資料表格式： `stud_absence`
#

CREATE TABLE stud_absence (
  abs_sn bigint(20) NOT NULL auto_increment,
  date date NOT NULL default '0000-00-00',
  stud_id varchar(20) NOT NULL default '',
  ab1 tinyint(1) default NULL,
  ab2 tinyint(1) default NULL,
  ab3 tinyint(1) default NULL,
  ab4 tinyint(1) default NULL,
  ab5 tinyint(1) default NULL,
  ab6 tinyint(1) default NULL,
  ab7 tinyint(1) default NULL,
  meno varchar(200) default NULL,
  PRIMARY KEY  (abs_sn)
) TYPE=MyISAM;

#
# 列出以下資料庫的數據： `stud_absence`
#

# --------------------------------------------------------

#
# 資料表格式： `stud_absent`
#

CREATE TABLE stud_absent (
  sasn int(10) unsigned NOT NULL auto_increment,
  year smallint(5) unsigned NOT NULL default '0',
  semester enum('1','2') NOT NULL default '1',
  class_id varchar(11) NOT NULL default '',
  stud_id varchar(20) NOT NULL default '',
  date date NOT NULL default '0000-00-00',
  absent_kind varchar(20) NOT NULL default '',
  section varchar(10) NOT NULL default '',
  sign_man_sn int(11) NOT NULL default '0',
  sign_man_name varchar(20) NOT NULL default '',
  sign_time datetime NOT NULL default '0000-00-00 00:00:00',
  txt text NOT NULL,
  PRIMARY KEY  (sasn),
  UNIQUE KEY date (stud_id,date,section),
  KEY year (year,semester,class_id,stud_id),
  KEY sign_man_sn (sign_man_sn)
) TYPE=MyISAM;


#
# 資料表格式： `sfs3_log`
#

CREATE TABLE sfs3_log (
  log_sn int(10) unsigned NOT NULL auto_increment,
  log text NOT NULL,
  mark varchar(255) NOT NULL default '',
  id varchar(20) NOT NULL default '',
  time datetime NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (log_sn)
) TYPE=MyISAM;



# 啟用新的模組
#UPDATE pro_kind SET store_path='admin/sfs_man2' WHERE store_path='admin/sfs_man';

   
# 刪除錯誤的認證類別
#delete from pro_check where pro_kind_id=0;

#更正資料表 stud_seme

ALTER TABLE `stud_seme` CHANGE `seme_class_s` `seme_class_s` TINYINT UNSIGNED NOT NULL ;
ALTER TABLE `stud_seme` CHANGE `seme_num` `seme_num` TINYINT UNSIGNED NOT NULL;
ALTER TABLE `stud_seme` CHANGE `seme_num_s` `seme_num_s` TINYINT UNSIGNED NOT NULL;

# 更正 teacher_base

ALTER TABLE `teacher_base` CHANGE `teach_sub_kind` `teach_sub_kind` VARCHAR( 40 ) NOT NULL;

ALTER TABLE `teacher_post` CHANGE `post_kind` `post_kind` INT( 4 ) UNSIGNED DEFAULT '0' NOT NULL; 
ALTER TABLE `teacher_post` CHANGE `post_office` `post_office` VARCHAR( 40 ) NOT NULL ;
ALTER TABLE `teacher_post` CHANGE `post_class` `post_class` VARCHAR( 40 ) NOT NULL;
ALTER TABLE `teacher_post` CHANGE `teach_title_id` `teach_title_id` VARCHAR( 40 ) NOT NULL;
ALTER TABLE `teacher_title` CHANGE `teach_title_id` `teach_title_id` TINYINT UNSIGNED DEFAULT '0' NOT NULL;
ALTER TABLE `teacher_title` CHANGE `title_name` `title_name` VARCHAR( 50 ) NOT NULL  ;

#更正處室資料表
ALTER TABLE `school_room` ADD `enable` ENUM('1','0') DEFAULT '1' NOT NULL;
#更正處室資料表
ALTER TABLE `teacher_title` ADD `enable` ENUM('1','0') DEFAULT '1' NOT NULL;
#更改 系統選項設定欄位
ALTER TABLE `sfs_text` CHANGE `d_id` `d_id` VARCHAR( 20 ) NOT NULL ;
ALTER TABLE `sfs_text` ADD `t_order_id` INT NOT NULL AFTER `t_id` ;
UPDATE `sfs_text` SET t_order_id = d_id;
#更改 認證資料表
ALTER TABLE `pro_check_new` ADD `set_sn` INT UNSIGNED NOT NULL ,
ADD `p_start_date` DATE,
ADD `p_end_date` DATE NOT NULL ,
ADD `oth_set` VARCHAR( 20 ) NOT NULL ;

