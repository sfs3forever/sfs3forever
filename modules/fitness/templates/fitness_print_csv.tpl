{{* $Id: fitness_print_csv.tpl 7217 2013-03-12 05:42:03Z infodaes $ *}}
注意事項：,,,,,,,,,,,,,,,
1.學校登錄之帳號及密碼為學校代號，學校可連結至教育部中統計處之各級學校名錄中查詢,,,,,,,,,,,,,,,
2.測驗日期、學校類別、年級、班級名稱、學號、性別、身分證字號、生日為學生之基本資料不得留空。請即日起至10月31日前上傳基本資料，以供學生登入健康體育網路護照使用，檢測資料可於分區上傳時間內再補上傳。,,,,,,,,,,,,,,,
3.測驗日期與生日以民國年格式鍵入，例如「810302」、「81.03.02」。,,,,,,,,,,,,,,,
4.性別鍵入方式：男生鍵入1，女生鍵入2。,,,,,,,,,,,,,,,
5.請注意各項檢測的單位：身高為公分(四捨五入至小數點第1位或整數)，體重為公斤(四捨五入至小數點第1位或整數)，坐姿體前彎為公分(整數)，仰臥起坐是次數(整數)，心肺耐力為分秒均可，如3分20秒鍵入3.20或是200(秒)，立定跳遠為公分(整數)。,,,,,,,,,,,,,,,
6.請把所有的班級存在同一張工作表即可。,,,,,,,,,,,,,,,
7.請放心有關資料不會有洩密問題，因為您傳上來的資料網路上不會顯示，出生日期僅供計算年齡，上傳後即不再保留，資料沒有姓名，且我們將做單向加密的動作，故不會有洩密的問題。,,,,,,,,,,,,,,,
8.「學校類別」欄請根據不同學層分別輸入「國小、國中、高中職、大專」；「年級」欄請依序輸入阿拉伯數字「1-13（1-6代表國小1-6年級；7-9代表國中1-3年級；10-12代表高中職1-3年級；13代表大專所有年級）」。,,,,,,,,,,,,,,,
例子：,,,,,,,,,,,,,,,
測驗日期,學校類別,年級,班級名稱,學號,性別,身分證字號,生日,身高,體重,坐姿體前彎,立定跳遠,仰臥起坐,心肺適能,,
950926,,,301,87456,1,A123456789,850718,175.5,50.1,30,187,32,5.32,,
,,,,,,,,,,,,,或是化成秒數332,,
正式資料請由此以下開始填寫，但請不要把上面的說明刪掉，系統將從17列開始抓取資料,,,,,,,,,,,,,,,
校碼：,{{$sch.sch_id}},,,,,,,,,,
測驗日期,學校類別,年級,班級名稱,學號,性別,身分證字號,生日,身高,體重,坐姿體前彎,立定跳遠,仰臥起坐,心肺適能
{{foreach from=$rowdata item=d key=i}}
{{assign var=sn value=$d.student_sn}}
{{assign var=birthday value=$d.4}}
"{{$fd.$sn.test_y}}{{$fd.$sn.test_m|string_format:"%02d"}}01","{{if $IS_JHORES}}國中{{else}}國小{{/if}}","{{$class_num|@substr:0:1}}","{{$d.seme_class}}","{{$d.stud_id}}","{{$d.stud_sex}}","{{$d.stud_person_id}}","{{$d.stud_birthday2}}","{{$fd.$sn.tall}}","{{$fd.$sn.weigh}}","{{$fd.$sn.test1}}","{{$fd.$sn.test3}}","{{$fd.$sn.test2}}","{{$fd.$sn.test4}}"
{{/foreach}}
