/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pl'] = {
		closeText: 'Zamknij',
		prevText: '&#x3c;Poprzedni',
		nextText: 'Nast?pny&#x3e;',
		currentText: 'Dzi?',
		monthNames: ['Stycze?','Luty','Marzec','Kwiecie?','Maj','Czerwiec',
		'Lipiec','Sierpie?','Wrzesie?','Pa驕dziernik','Listopad','Grudzie?'],
		monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
		'Lip','Sie','Wrz','Pa','Lis','Gru'],
		dayNames: ['Niedziela','Poniedzia?ek','Wtorek','?roda','Czwartek','Pi?tek','Sobota'],
		dayNamesShort: ['Nie','Pn','Wt','?r','Czw','Pt','So'],
		dayNamesMin: ['N','Pn','Wt','?r','Cz','Pt','So'],
		weekHeader: 'Tydz',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pl']);
});
