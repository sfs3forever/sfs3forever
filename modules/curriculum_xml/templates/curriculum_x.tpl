<?xml version="1.0" encoding="UTF-8"?>
<?葦?玨鈭斗?鞈?>
	<摮豢鞈?>
		<摮豢隞?Ⅳ>{{$schoolid}}</摮豢隞?Ⅳ>
		<摮豢?迂>{{$schoolname}}</摮豢?迂>
		<?拍摮詨僑>{{$this_year}}</?拍摮詨僑>
		<?拍摮豢?>{{$this_semester}}</?拍摮豢?>
		<?臬撣唾?>{{$x_id}}</?臬撣唾?>
		<?臬撖Ⅳ>{{$x_pwd}}</?臬撖Ⅳ>
	</摮豢鞈?>
{{foreach from=$out_arr item=content key=arr_key}}
{{foreach from=$content.teacherdata item=teacherdata key=teacher_sn}}
		<?葦?玨鞈?>
			<?葦頨怠?霅?{{$teacherdata.teach_person_id}}</?葦頨怠?霅?
			<?葦憪?>{{$teacherdata.name}}</?葦憪?>
{{foreach from=$teacherdata.subjects item=subject key=ss_id}}
			<蝘鞈?>
				<蝘?迂>{{$subject.subject_name}}</蝘?迂>
				<蝘?撅祇???{{$subject.learningareas}}</蝘?撅祇???
				<蝘甇?玨?>{{if $subject.counter_0}}{{$subject.counter_0}}{{else}}0{{/if}}</蝘甇?玨?>
				<蝘?潸玨?>{{if $subject.counter_1}}{{$subject.counter_1}}{{else}}0{{/if}}</蝘?潸玨?>
				<蝘蝮賣???{{$subject.counter}}</蝘蝮賣???
				<?玨?剔?>{{$subject.class_list|substr:0:-1}}</?玨?剔?>
			</蝘鞈?>
{{/foreach}}
		</?葦?玨鞈?>
{{/foreach}}
{{/foreach}}
</?葦?玨鈭斗?鞈?>