/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
jQuery(function($){
	$.datepicker.regional['hy'] = {
		closeText: '?捸朘掍晙',
		prevText: '&#x3c;?捸晜.',
		nextText: '?捸梬.&#x3e;',
		currentText: '埜桮桵??',
		monthNames: ['?楖?梮桴捸?','?掍梲?桴捸?','?捸?梲','埜梣?晛晙','?捸桮晛桵','?楖?梮晛桵',
		'?楖?晙晛桵','?掁楖桵梲楖桵','?掍梣梲掍桭掅掍?','?楖朘梲掍桭掅掍?','?楖桮掍桭掅掍?','埭掍朘梲掍桭掅掍?'],
		monthNamesShort: ['?楖?梮桴','?掍梲?','?捸?梲','埜梣?','?捸桮晛桵','?楖?梮晛桵',
		'?楖?晙','?掁桵','?掍梣','?楖朘','?楖桮','埭掍朘'],
		dayNames: ['朘晛?捸朘晛','掍朘楖?梫捸掅晥晛','掍?掍?梫捸掅晥晛','桯楖?掍?梫捸掅晥晛','桹晛梮掁梫捸掅晥晛','楖??掅捸晥','梫捸掅捸晥'],
		dayNamesShort: ['朘晛?','掍?朘','掍??','桯??','桹梮掁','楖??掅','梫掅晥'],
		dayNamesMin: ['朘晛?','掍?朘','掍??','桯??','桹梮掁','楖??掅','梫掅晥'],
		weekHeader: '?埴?',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hy']);
});