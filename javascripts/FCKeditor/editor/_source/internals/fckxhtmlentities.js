/*
 * FCKeditor - The text editor for Internet - http://www.fckeditor.net
 * Copyright (C) 2003-2007 Frederico Caldeira Knabben
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 * This file define the HTML entities handled by the editor.
 $Id: fckxhtmlentities.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKXHtmlEntities = new Object() ;

FCKXHtmlEntities.Initialize = function()
{
	if ( FCKXHtmlEntities.Entities )
		return ;

	var sChars = '' ;
	var oEntities, e ;

	if ( FCKConfig.ProcessHTMLEntities )
	{
		FCKXHtmlEntities.Entities = {
			// Latin-1 Entities
			'?':'nbsp',
			'癒':'iexcl',
			'瞽':'cent',
			'瞿':'pound',
			'瞻':'curren',
			'瞼':'yen',
			'礎':'brvbar',
			'禮':'sect',
			'穡':'uml',
			'穢':'copy',
			'穠':'ordf',
			'竄':'laquo',
			'竅':'not',
			'簫':'shy',
			'簧':'reg',
			'簪':'macr',
			'簞':'deg',
			'簣':'plusmn',
			'簡':'sup2',
			'糧':'sup3',
			'織':'acute',
			'繕':'micro',
			'繞':'para',
			'繚':'middot',
			'繡':'cedil',
			'繒':'sup1',
			'繙':'ordm',
			'罈':'raquo',
			'翹':'frac14',
			'翻':'frac12',
			'職':'frac34',
			'聶':'iquest',
			'?':'times',
			'繩':'divide',

			// Symbols

			'?':'fnof',
			'??:'bull',
			'??:'hellip',
			'??:'prime',
			'??:'Prime',
			'??:'oline',
			'??:'frasl',
			'??:'weierp',
			'??:'image',
			'??:'real',
			'??:'trade',
			'??:'alefsym',
			'??:'larr',
			'??:'uarr',
			'??:'rarr',
			'??:'darr',
			'??:'harr',
			'??:'crarr',
			'??:'lArr',
			'??:'uArr',
			'??:'rArr',
			'??:'dArr',
			'??:'hArr',
			'?':'forall',
			'??:'part',
			'??:'exist',
			'??:'empty',
			'??:'nabla',
			'??:'isin',
			'??:'notin',
			'??:'ni',
			'??:'prod',
			'??:'sum',
			'??:'minus',
			'??:'lowast',
			'??:'radic',
			'??:'prop',
			'??:'infin',
			'??:'ang',
			'??:'and',
			'??:'or',
			'??:'cap',
			'??:'cup',
			'??:'int',
			'??:'there4',
			'??:'sim',
			'??:'cong',
			'??:'asymp',
			'??:'ne',
			'??:'equiv',
			'??:'le',
			'??:'ge',
			'??:'sub',
			'??:'sup',
			'??:'nsub',
			'??:'sube',
			'??:'supe',
			'??:'oplus',
			'??:'otimes',
			'??:'perp',
			'??:'sdot',
			'??:'loz',
			'??:'spades',
			'??:'clubs',
			'??:'hearts',
			'??:'diams',

			// Other Special Characters

			'"':'quot',
		//	'&':'amp',		// This entity is automatically handled by the XHTML parser.
		//	'<':'lt',		// This entity is automatically handled by the XHTML parser.
		//	'>':'gt',		// This entity is automatically handled by the XHTML parser.
			'?':'circ',
			'?':'tilde',
			'??:'ensp',
			'??:'emsp',
			'??:'thinsp',
			'??:'zwnj',
			'??:'zwj',
			'??:'lrm',
			'??:'rlm',
			'??:'ndash',
			'??:'mdash',
			'??:'lsquo',
			'??:'rsquo',
			'??:'sbquo',
			'??:'ldquo',
			'??:'rdquo',
			'??:'bdquo',
			'??:'dagger',
			'??:'Dagger',
			'??:'permil',
			'??:'lsaquo',
			'??:'rsaquo',
			'??:'euro'
		} ;

		// Process Base Entities.
		for ( e in FCKXHtmlEntities.Entities )
			sChars += e ;

		// Include Latin Letters Entities.
		if ( FCKConfig.IncludeLatinEntities )
		{
			oEntities = {
				'?':'Agrave',
				'?':'Aacute',
				'?':'Acirc',
				'?':'Atilde',
				'?':'Auml',
				'?':'Aring',
				'?':'AElig',
				'?':'Ccedil',
				'?':'Egrave',
				'?':'Eacute',
				'?':'Ecirc',
				'?':'Euml',
				'?':'Igrave',
				'?':'Iacute',
				'?':'Icirc',
				'?':'Iuml',
				'?':'ETH',
				'?':'Ntilde',
				'?':'Ograve',
				'?':'Oacute',
				'?':'Ocirc',
				'?':'Otilde',
				'?':'Ouml',
				'?':'Oslash',
				'?':'Ugrave',
				'?':'Uacute',
				'?':'Ucirc',
				'?':'Uuml',
				'?':'Yacute',
				'?':'THORN',
				'?':'szlig',
				'?':'agrave',
				'獺':'aacute',
				'璽':'acirc',
				'瓊':'atilde',
				'瓣':'auml',
				'疇':'aring',
				'疆':'aelig',
				'癟':'ccedil',
				'癡':'egrave',
				'矇':'eacute',
				'礙':'ecirc',
				'禱':'euml',
				'穫':'igrave',
				'穩':'iacute',
				'簾':'icirc',
				'簿':'iuml',
				'簸':'eth',
				'簽':'ntilde',
				'簷':'ograve',
				'籀':'oacute',
				'繫':'ocirc',
				'繭':'otilde',
				'繹':'ouml',
				'繪':'oslash',
				'羅':'ugrave',
				'繳':'uacute',
				'羶':'ucirc',
				'羹':'uuml',
				'羸':'yacute',
				'臘':'thorn',
				'藩':'yuml',
				'?':'OElig',
				'?':'oelig',
				'?':'Scaron',
				'禳':'scaron',
				'顫':'Yuml'
			} ;

			for ( e in oEntities )
			{
				FCKXHtmlEntities.Entities[ e ] = oEntities[ e ] ;
				sChars += e ;
			}

			oEntities = null ;
		}

		// Include Greek Letters Entities.
		if ( FCKConfig.IncludeGreekEntities )
		{
			oEntities = {
				'?':'Alpha',
				'?':'Beta',
				'?':'Gamma',
				'?':'Delta',
				'?':'Epsilon',
				'?':'Zeta',
				'?':'Eta',
				'?':'Theta',
				'?':'Iota',
				'?':'Kappa',
				'?':'Lambda',
				'?':'Mu',
				'?':'Nu',
				'?':'Xi',
				'?':'Omicron',
				'?':'Pi',
				'峞':'Rho',
				'峉':'Sigma',
				'峇':'Tau',
				'峊':'Upsilon',
				'峖':'Phi',
				'峓':'Chi',
				'峔':'Psi',
				'峏':'Omega',
				'帢':'alpha',
				'帣':'beta',
				'帠':'gamma',
				'帤':'delta',
				'庰':'epsilon',
				'庤':'zeta',
				'庢':'eta',
				'庛':'theta',
				'庣':'iota',
				'庥':'kappa',
				'弇':'lambda',
				'弮':'mu',
				'彖':'nu',
				'徆':'xi',
				'怷':'omicron',
				'?':'pi',
				'?':'rho',
				'?':'sigmaf',
				'?':'sigma',
				'?':'tau',
				'?':'upsilon',
				'?':'phi',
				'?':'chi',
				'?':'psi',
				'?':'omega'
			} ;

			for ( e in oEntities )
			{
				FCKXHtmlEntities.Entities[ e ] = oEntities[ e ] ;
				sChars += e ;
			}

			oEntities = null ;
		}
	}
	else
	{
		FCKXHtmlEntities.Entities = {} ;

		// Even if we are not processing the entities, we must render the &nbsp;
		// correctly. As we don't want HTML entities, let's use its numeric
		// representation (&#160).
		sChars = '?' ;
	}

	// Create the Regex used to find entities in the text.
	var sRegexPattern = '[' + sChars + ']' ;

	if ( FCKConfig.ProcessNumericEntities )
		sRegexPattern = '[^ -~]|' + sRegexPattern ;

	var sAdditional = FCKConfig.AdditionalNumericEntities ;

	if ( sAdditional && sAdditional.length > 0 )
		sRegexPattern += '|' + FCKConfig.AdditionalNumericEntities ;

	FCKXHtmlEntities.EntitiesRegex = new RegExp( sRegexPattern, 'g' ) ;
}
