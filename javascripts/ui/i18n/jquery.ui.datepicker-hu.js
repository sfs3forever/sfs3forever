/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquery@spam.raszi.hu). */
jQuery(function($){
	$.datepicker.regional['hu'] = {
		closeText: 'bez獺r獺s',
		prevText: '&laquo;&nbsp;vissza',
		nextText: 'el?re&nbsp;&raquo;',
		currentText: 'ma',
		monthNames: ['Janu獺r', 'Febru獺r', 'M獺rcius', '?prilis', 'M獺jus', 'J繳nius',
		'J繳lius', 'Augusztus', 'Szeptember', 'Okt籀ber', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'M獺r', '?pr', 'M獺j', 'J繳n',
		'J繳l', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
		dayNames: ['Vas獺rnap', 'H矇tf繹', 'Kedd', 'Szerda', 'Cs羹t繹rt繹k', 'P矇ntek', 'Szombat'],
		dayNamesShort: ['Vas', 'H矇t', 'Ked', 'Sze', 'Cs羹', 'P矇n', 'Szo'],
		dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
		weekHeader: 'H矇',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hu']);
});
