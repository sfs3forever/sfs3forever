/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
jQuery(function($){
	$.datepicker.regional['sk'] = {
		closeText: 'Zavrie聽',
		prevText: '&#x3c;Predch獺dzaj繳ci',
		nextText: 'Nasleduj繳ci&#x3e;',
		currentText: 'Dnes',
		monthNames: ['Janu獺r','Febru獺r','Marec','Apr穩l','M獺j','J繳n',
		'J繳l','August','September','Okt籀ber','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','M獺j','J繳n',
		'J繳l','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedel\'a','Pondelok','Utorok','Streda','?tvrtok','Piatok','Sobota'],
		dayNamesShort: ['Ned','Pon','Uto','Str','?tv','Pia','Sob'],
		dayNamesMin: ['Ne','Po','Ut','St','?t','Pia','So'],
		weekHeader: 'Ty',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sk']);
});
