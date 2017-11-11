/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */
jQuery(function($){
	$.datepicker.regional['lt'] = {
		closeText: 'U鱉daryti',
		prevText: '&#x3c;Atgal',
		nextText: 'Pirmyn&#x3e;',
		currentText: '?iandien',
		monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegu鱉?','Bir鱉elis',
		'Liepa','Rugpj贖tis','Rugs?jis','Spalis','Lapkritis','Gruodis'],
		monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
		'Lie','Rugp','Rugs','Spa','Lap','Gru'],
		dayNames: ['sekmadienis','pirmadienis','antradienis','tre?iadienis','ketvirtadienis','penktadienis','禳e禳tadienis'],
		dayNamesShort: ['sek','pir','ant','tre','ket','pen','禳e禳'],
		dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','?e'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lt']);
});