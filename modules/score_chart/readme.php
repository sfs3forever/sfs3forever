做sxw樣板的方法：

先做一個writer的檔案

和科目無關的欄位是：{欄位編號}

和科目有關的欄位是：{欄位編號_{ss_sn}}

科目名稱是：{ss_name}

做好後存檔。

解壓縮到 htdocs/school_teacher/academic_record/ooo/

然後用mozilla或IE去讀取content.xml

找出和科目相關的那一行xml，例如：

<table:table-row table:style-name="ss_table.1"><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{ss_name}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{24_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{25_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.A2" table:value-type="string"><text:p text:style-name="P5">{26_{ss_sn}}</text:p></table:table-cell><table:table-cell table:style-name="ss_table.E2" table:value-type="string"><text:p text:style-name="P10">{27_{ss_sn}}</text:p></table:table-cell></table:table-row>

然後把這一段存到資料庫的 score_input_interface 的 xml 欄位中

接著，把content.xml 中的那一行刪除，並代替成{ss_table}

如此即可。