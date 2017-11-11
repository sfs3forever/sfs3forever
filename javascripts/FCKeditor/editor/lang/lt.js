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
 * Lithuanian language file.
 $Id: lt.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Sutraukti mygtuk鑒 juost?",
ToolbarExpand		: "I禳pl?sti mygtuk鑒 juost?",

// Toolbar Items and Context Menu
Save				: "I禳saugoti",
NewPage				: "Naujas puslapis",
Preview				: "Per鱉i贖ra",
Cut					: "I禳kirpti",
Copy				: "Kopijuoti",
Paste				: "蠔d?ti",
PasteText			: "蠔d?ti kaip gryn? tekst?",
PasteWord			: "蠔d?ti i禳 Word",
Print				: "Spausdinti",
SelectAll			: "Pa鱉ym?ti visk?",
RemoveFormat		: "Panaikinti format?",
InsertLinkLbl		: "Nuoroda",
InsertLink			: "蠔terpti/taisyti nuorod?",
RemoveLink			: "Panaikinti nuorod?",
Anchor				: "蠔terpti/modifikuoti 鱉ym?",
InsertImageLbl		: "Vaizdas",
InsertImage			: "蠔terpti/taisyti vaizd?",
InsertFlashLbl		: "Flash",
InsertFlash			: "蠔terpti/taisyti Flash",
InsertTableLbl		: "Lentel?",
InsertTable			: "蠔terpti/taisyti lentel?",
InsertLineLbl		: "Linija",
InsertLine			: "蠔terpti horizontali? linij?",
InsertSpecialCharLbl: "Spec. simbolis",
InsertSpecialChar	: "蠔terpti special鑒 simbol蠕",
InsertSmileyLbl		: "Veideliai",
InsertSmiley		: "蠔terpti veidel蠕",
About				: "Apie FCKeditor",
Bold				: "Pusjuodis",
Italic				: "Kursyvas",
Underline			: "Pabrauktas",
StrikeThrough		: "Perbrauktas",
Subscript			: "Apatinis indeksas",
Superscript			: "Vir禳utinis indeksas",
LeftJustify			: "Lygiuoti kair?",
CenterJustify		: "Centruoti",
RightJustify		: "Lygiuoti de禳in?",
BlockJustify		: "Lygiuoti abi puses",
DecreaseIndent		: "Suma鱉inti 蠕trauk?",
IncreaseIndent		: "Padidinti 蠕trauk?",
Undo				: "At禳aukti",
Redo				: "Atstatyti",
NumberedListLbl		: "Numeruotas s?ra禳as",
NumberedList		: "蠔terpti/Panaikinti numeruot? s?ra禳?",
BulletedListLbl		: "Su鱉enklintas s?ra禳as",
BulletedList		: "蠔terpti/Panaikinti su鱉enklint? s?ra禳?",
ShowTableBorders	: "Rodyti lentel?s r?mus",
ShowDetails			: "Rodyti detales",
Style				: "Stilius",
FontFormat			: "?rifto formatas",
Font				: "?riftas",
FontSize			: "?rifto dydis",
TextColor			: "Teksto spalva",
BGColor				: "Fono spalva",
Source				: "?altinis",
Find				: "Rasti",
Replace				: "Pakeisti",
SpellCheck			: "Ra禳ybos tikrinimas",
UniversalKeyboard	: "Universali klaviat贖ra",
PageBreakLbl		: "Puslapi鑒 skirtukas",
PageBreak			: "蠔terpti puslapi鑒 skirtuk?",

Form			: "Forma",
Checkbox		: "鬚ymimasis langelis",
RadioButton		: "鬚ymimoji akut?",
TextField		: "Teksto laukas",
Textarea		: "Teksto sritis",
HiddenField		: "Nerodomas laukas",
Button			: "Mygtukas",
SelectionField	: "Atrankos laukas",
ImageButton		: "Vaizdinis mygtukas",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Taisyti nuorod?",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "蠔terpti eilut?",
DeleteRows			: "?alinti eilutes",
InsertColumn		: "蠔terpti stulpel蠕",
DeleteColumns		: "?alinti stulpelius",
InsertCell			: "蠔terpti langel蠕",
DeleteCells			: "?alinti langelius",
MergeCells			: "Sujungti langelius",
SplitCell			: "Skaidyti langelius",
TableDelete			: "?alinti lentel?",
CellProperties		: "Langelio savyb?s",
TableProperties		: "Lentel?s savyb?s",
ImageProperties		: "Vaizdo savyb?s",
FlashProperties		: "Flash savyb?s",

AnchorProp			: "鬚ym?s savyb?s",
ButtonProp			: "Mygtuko savyb?s",
CheckboxProp		: "鬚ymimojo langelio savyb?s",
HiddenFieldProp		: "Nerodomo lauko savyb?s",
RadioButtonProp		: "鬚ymimosios akut?s savyb?s",
ImageButtonProp		: "Vaizdinio mygtuko savyb?s",
TextFieldProp		: "Teksto lauko savyb?s",
SelectionFieldProp	: "Atrankos lauko savyb?s",
TextareaProp		: "Teksto srities savyb?s",
FormProp			: "Formos savyb?s",

FontFormats			: "Normalus;Formuotas;Kreipinio;Antra禳tinis 1;Antra禳tinis 2;Antra禳tinis 3;Antra禳tinis 4;Antra禳tinis 5;Antra禳tinis 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Apdorojamas XHTML. Pra禳ome palaukti...",
Done				: "Baigta",
PasteWordConfirm	: "蠔dedamas tekstas yra pana禳us 蠕 kopij? i禳 Word. Ar J贖s norite prie禳 蠕d?jim? i禳valyti j蠕?",
NotCompatiblePaste	: "?i komanda yra prieinama tik per Internet Explorer 5.5 ar auk禳tesn? versij?. Ar J贖s norite 蠕terpti be valymo?",
UnknownToolbarItem	: "Ne鱉inomas mygtuk鑒 juosta elementas \"%1\"",
UnknownCommand		: "Ne鱉inomas komandos vardas \"%1\"",
NotImplemented		: "Komanda n?ra 蠕gyvendinta",
UnknownToolbarSet	: "Mygtuk鑒 juostos rinkinys \"%1\" neegzistuoja",
NoActiveX			: "J贖s鑒 nar禳ykl?s saugumo nuostatos gali riboti kai kurias redaktoriaus savybes. J贖s turite aktyvuoti opcij? \"Run ActiveX controls and plug-ins\". Kitu atveju Jums bus prane禳ama apie klaidas ir tr贖kstamas savybes.",
BrowseServerBlocked : "Ne蠕manoma atidaryti naujo nar禳ykl?s lango. 蠔sitikinkite, kad i禳kylan?i鑒 lang鑒 blokavimo programos neveiksnios.",
DialogBlocked		: "Ne蠕manoma atidaryti dialogo lango. 蠔sitikinkite, kad i禳kylan?i鑒 lang鑒 blokavimo programos neveiksnios.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Nutraukti",
DlgBtnClose			: "U鱉daryti",
DlgBtnBrowseServer	: "Nar禳yti po server蠕",
DlgAdvancedTag		: "Papildomas",
DlgOpOther			: "<Kita>",
DlgInfoTab			: "Informacija",
DlgAlertUrl			: "Pra禳ome 蠕ra禳yti URL",

// General Dialogs Labels
DlgGenNotSet		: "<n?ra nustatyta>",
DlgGenId			: "Id",
DlgGenLangDir		: "Teksto kryptis",
DlgGenLangDirLtr	: "I禳 kair?s 蠕 de禳in? (LTR)",
DlgGenLangDirRtl	: "I禳 de禳in?s 蠕 kair? (RTL)",
DlgGenLangCode		: "Kalbos kodas",
DlgGenAccessKey		: "Prieigos raktas",
DlgGenName			: "Vardas",
DlgGenTabIndex		: "Tabuliavimo indeksas",
DlgGenLongDescr		: "Ilgas apra禳ymas URL",
DlgGenClass			: "Stili鑒 lentel?s klas?s",
DlgGenTitle			: "Konsultacin? antra禳t?",
DlgGenContType		: "Konsultacinio turinio tipas",
DlgGenLinkCharset	: "Susiet鑒 i禳tekli鑒 simboli鑒 lentel?",
DlgGenStyle			: "Stilius",

// Image Dialog
DlgImgTitle			: "Vaizdo savyb?s",
DlgImgInfoTab		: "Vaizdo informacija",
DlgImgBtnUpload		: "Si鑒sti 蠕 server蠕",
DlgImgURL			: "URL",
DlgImgUpload		: "Nusi鑒sti",
DlgImgAlt			: "Alternatyvus Tekstas",
DlgImgWidth			: "Plotis",
DlgImgHeight		: "Auk禳tis",
DlgImgLockRatio		: "I禳laikyti proporcij?",
DlgBtnResetSize		: "Atstatyti dyd蠕",
DlgImgBorder		: "R?melis",
DlgImgHSpace		: "Hor.Erdv?",
DlgImgVSpace		: "Vert.Erdv?",
DlgImgAlign			: "Lygiuoti",
DlgImgAlignLeft		: "Kair?",
DlgImgAlignAbsBottom: "Absoliu?i? apa?i?",
DlgImgAlignAbsMiddle: "Absoliut鑒 vidur蠕",
DlgImgAlignBaseline	: "Apatin? linij?",
DlgImgAlignBottom	: "Apa?i?",
DlgImgAlignMiddle	: "Vidur蠕",
DlgImgAlignRight	: "De禳in?",
DlgImgAlignTextTop	: "Teksto vir禳贖n?",
DlgImgAlignTop		: "Vir禳贖n?",
DlgImgPreview		: "Per鱉i贖ra",
DlgImgAlertUrl		: "Pra禳ome 蠕vesti vaizdo URL",
DlgImgLinkTab		: "Nuoroda",

// Flash Dialog
DlgFlashTitle		: "Flash savyb?s",
DlgFlashChkPlay		: "Automatinis paleidimas",
DlgFlashChkLoop		: "Ciklas",
DlgFlashChkMenu		: "Leisti Flash meniu",
DlgFlashScale		: "Mastelis",
DlgFlashScaleAll	: "Rodyti vis?",
DlgFlashScaleNoBorder	: "Be r?melio",
DlgFlashScaleFit	: "Tikslus atitikimas",

// Link Dialog
DlgLnkWindowTitle	: "Nuoroda",
DlgLnkInfoTab		: "Nuorodos informacija",
DlgLnkTargetTab		: "Paskirtis",

DlgLnkType			: "Nuorodos tipas",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "鬚ym? 禳iame puslapyje",
DlgLnkTypeEMail		: "El.pa禳tas",
DlgLnkProto			: "Protokolas",
DlgLnkProtoOther	: "<kitas>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Pasirinkite 鱉ym?",
DlgLnkAnchorByName	: "Pagal 鱉ym?s vard?",
DlgLnkAnchorById	: "Pagal 鱉ym?s Id",
DlgLnkNoAnchors		: "<?iame dokumente 鱉ymi鑒 n?ra>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "El.pa禳to adresas",
DlgLnkEMailSubject	: "鬚inut?s tema",
DlgLnkEMailBody		: "鬚inut?s turinys",
DlgLnkUpload		: "Si鑒sti",
DlgLnkBtnUpload		: "Si鑒sti 蠕 server蠕",

DlgLnkTarget		: "Paskirties vieta",
DlgLnkTargetFrame	: "<kadras>",
DlgLnkTargetPopup	: "<i禳skleid鱉iamas langas>",
DlgLnkTargetBlank	: "Naujas langas (_blank)",
DlgLnkTargetParent	: "Pirminis langas (_parent)",
DlgLnkTargetSelf	: "Tas pats langas (_self)",
DlgLnkTargetTop		: "Svarbiausias langas (_top)",
DlgLnkTargetFrameName	: "Paskirties kadro vardas",
DlgLnkPopWinName	: "Paskirties lango vardas",
DlgLnkPopWinFeat	: "I禳skleid鱉iamo lango savyb?s",
DlgLnkPopResize		: "Kei?iamas dydis",
DlgLnkPopLocation	: "Adreso juosta",
DlgLnkPopMenu		: "Meniu juosta",
DlgLnkPopScroll		: "Slinkties juostos",
DlgLnkPopStatus		: "B贖senos juosta",
DlgLnkPopToolbar	: "Mygtuk鑒 juosta",
DlgLnkPopFullScrn	: "Visas ekranas (IE)",
DlgLnkPopDependent	: "Priklausomas (Netscape)",
DlgLnkPopWidth		: "Plotis",
DlgLnkPopHeight		: "Auk禳tis",
DlgLnkPopLeft		: "Kair? pozicija",
DlgLnkPopTop		: "Vir禳utin? pozicija",

DlnLnkMsgNoUrl		: "Pra禳ome 蠕vesti nuorodos URL",
DlnLnkMsgNoEMail	: "Pra禳ome 蠕vesti el.pa禳to adres?",
DlnLnkMsgNoAnchor	: "Pra禳ome pasirinkti 鱉ym?",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Pasirinkite spalv?",
DlgColorBtnClear	: "Trinti",
DlgColorHighlight	: "Pary禳kinta",
DlgColorSelected	: "Pa鱉ym?ta",

// Smiley Dialog
DlgSmileyTitle		: "蠔terpti veidel蠕",

// Special Character Dialog
DlgSpecialCharTitle	: "Pasirinkite special鑒 simbol蠕",

// Table Dialog
DlgTableTitle		: "Lentel?s savyb?s",
DlgTableRows		: "Eilut?s",
DlgTableColumns		: "Stulpeliai",
DlgTableBorder		: "R?melio dydis",
DlgTableAlign		: "Lygiuoti",
DlgTableAlignNotSet	: "<Nenustatyta>",
DlgTableAlignLeft	: "Kair?",
DlgTableAlignCenter	: "Centr?",
DlgTableAlignRight	: "De禳in?",
DlgTableWidth		: "Plotis",
DlgTableWidthPx		: "ta禳kais",
DlgTableWidthPc		: "procentais",
DlgTableHeight		: "Auk禳tis",
DlgTableCellSpace	: "Tarpas tarp langeli鑒",
DlgTableCellPad		: "Trapas nuo langelio r?mo iki teksto",
DlgTableCaption		: "Antra禳t?",
DlgTableSummary		: "Santrauka",

// Table Cell Dialog
DlgCellTitle		: "Langelio savyb?s",
DlgCellWidth		: "Plotis",
DlgCellWidthPx		: "ta禳kais",
DlgCellWidthPc		: "procentais",
DlgCellHeight		: "Auk禳tis",
DlgCellWordWrap		: "Teksto lau鱉ymas",
DlgCellWordWrapNotSet	: "<Nenustatyta>",
DlgCellWordWrapYes	: "Taip",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Horizontaliai lygiuoti",
DlgCellHorAlignNotSet	: "<Nenustatyta>",
DlgCellHorAlignLeft	: "Kair?",
DlgCellHorAlignCenter	: "Centr?",
DlgCellHorAlignRight: "De禳in?",
DlgCellVerAlign		: "Vertikaliai lygiuoti",
DlgCellVerAlignNotSet	: "<Nenustatyta>",
DlgCellVerAlignTop	: "Vir禳鑒",
DlgCellVerAlignMiddle	: "Vidur蠕",
DlgCellVerAlignBottom	: "Apa?i?",
DlgCellVerAlignBaseline	: "Apatin? linij?",
DlgCellRowSpan		: "Eilu?i鑒 apjungimas",
DlgCellCollSpan		: "Stulpeli鑒 apjungimas",
DlgCellBackColor	: "Fono spalva",
DlgCellBorderColor	: "R?melio spalva",
DlgCellBtnSelect	: "Pa鱉ym?ti...",

// Find Dialog
DlgFindTitle		: "Paie禳ka",
DlgFindFindBtn		: "Surasti",
DlgFindNotFoundMsg	: "Nurodytas tekstas nerastas.",

// Replace Dialog
DlgReplaceTitle			: "Pakeisti",
DlgReplaceFindLbl		: "Surasti tekst?:",
DlgReplaceReplaceLbl	: "Pakeisti tekstu:",
DlgReplaceCaseChk		: "Skirti did鱉i?sias ir ma鱉?sias raides",
DlgReplaceReplaceBtn	: "Pakeisti",
DlgReplaceReplAllBtn	: "Pakeisti visk?",
DlgReplaceWordChk		: "Atitikti piln? 鱉od蠕",

// Paste Operations / Dialog
PasteErrorCut	: "J贖s鑒 nar禳ykl?s saugumo nustatymai neleid鱉ia redaktoriui automati禳kai 蠕vykdyti i禳kirpimo operacij鑒. Tam pra禳ome naudoti klaviat贖r? (Ctrl+X).",
PasteErrorCopy	: "J贖s鑒 nar禳ykl?s saugumo nustatymai neleid鱉ia redaktoriui automati禳kai 蠕vykdyti kopijavimo operacij鑒. Tam pra禳ome naudoti klaviat贖r? (Ctrl+C).",

PasteAsText		: "蠔d?ti kaip gryn? tekst?",
PasteFromWord	: "蠔d?ti i禳 Word",

DlgPasteMsg2	: "鬚emiau esan?iame 蠕vedimo lauke 蠕d?kite tekst?, naudodami klaviat贖r? (<STRONG>Ctrl+V</STRONG>) ir sp贖stelkite mygtuk? <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignoruoti 禳rift鑒 nustatymus",
DlgPasteRemoveStyles	: "Pa禳alinti stili鑒 nustatymus",
DlgPasteCleanBox		: "Trinti 蠕vedimo lauk?",

// Color Picker
ColorAutomatic	: "Automatinis",
ColorMoreColors	: "Daugiau spalv鑒...",

// Document Properties
DocProps		: "Dokumento savyb?s",

// Anchor Dialog
DlgAnchorTitle		: "鬚ym?s savyb?s",
DlgAnchorName		: "鬚ym?s vardas",
DlgAnchorErrorName	: "Pra禳ome 蠕vesti 鱉ym?s vard?",

// Speller Pages Dialog
DlgSpellNotInDic		: "鬚odyne nerastas",
DlgSpellChangeTo		: "Pakeisti 蠕",
DlgSpellBtnIgnore		: "Ignoruoti",
DlgSpellBtnIgnoreAll	: "Ignoruoti visus",
DlgSpellBtnReplace		: "Pakeisti",
DlgSpellBtnReplaceAll	: "Pakeisti visus",
DlgSpellBtnUndo			: "At禳aukti",
DlgSpellNoSuggestions	: "- N?ra pasi贖lym鑒 -",
DlgSpellProgress		: "Vyksta ra禳ybos tikrinimas...",
DlgSpellNoMispell		: "Ra禳ybos tikrinimas baigtas: Nerasta ra禳ybos klaid鑒",
DlgSpellNoChanges		: "Ra禳ybos tikrinimas baigtas: N?ra pakeist鑒 鱉od鱉i鑒",
DlgSpellOneChange		: "Ra禳ybos tikrinimas baigtas: Vienas 鱉odis pakeistas",
DlgSpellManyChanges		: "Ra禳ybos tikrinimas baigtas: Pakeista %1 鱉od鱉i鑒",

IeSpellDownload			: "Ra禳ybos tikrinimas neinstaliuotas. Ar J贖s norite j蠕 dabar atsisi鑒sti?",

// Button Dialog
DlgButtonText		: "Tekstas (Reik禳m?)",
DlgButtonType		: "Tipas",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Vardas",
DlgCheckboxValue	: "Reik禳m?",
DlgCheckboxSelected	: "Pa鱉ym?tas",

// Form Dialog
DlgFormName		: "Vardas",
DlgFormAction	: "Veiksmas",
DlgFormMethod	: "Metodas",

// Select Field Dialog
DlgSelectName		: "Vardas",
DlgSelectValue		: "Reik禳m?",
DlgSelectSize		: "Dydis",
DlgSelectLines		: "eilu?i鑒",
DlgSelectChkMulti	: "Leisti daugeriop? atrank?",
DlgSelectOpAvail	: "Galimos parinktys",
DlgSelectOpText		: "Tekstas",
DlgSelectOpValue	: "Reik禳m?",
DlgSelectBtnAdd		: "蠔traukti",
DlgSelectBtnModify	: "Modifikuoti",
DlgSelectBtnUp		: "Auk禳tyn",
DlgSelectBtnDown	: "鬚emyn",
DlgSelectBtnSetValue : "Laikyti pa鱉ym?ta reik禳me",
DlgSelectBtnDelete	: "Trinti",

// Textarea Dialog
DlgTextareaName	: "Vardas",
DlgTextareaCols	: "Ilgis",
DlgTextareaRows	: "Plotis",

// Text Field Dialog
DlgTextName			: "Vardas",
DlgTextValue		: "Reik禳m?",
DlgTextCharWidth	: "Ilgis simboliais",
DlgTextMaxChars		: "Maksimalus simboli鑒 skai?ius",
DlgTextType			: "Tipas",
DlgTextTypeText		: "Tekstas",
DlgTextTypePass		: "Slapta鱉odis",

// Hidden Field Dialog
DlgHiddenName	: "Vardas",
DlgHiddenValue	: "Reik禳m?",

// Bulleted List Dialog
BulletedListProp	: "Su鱉enklinto s?ra禳o savyb?s",
NumberedListProp	: "Numeruoto s?ra禳o savyb?s",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipas",
DlgLstTypeCircle	: "Apskritimas",
DlgLstTypeDisc		: "Diskas",
DlgLstTypeSquare	: "Kvadratas",
DlgLstTypeNumbers	: "Skai?iai (1, 2, 3)",
DlgLstTypeLCase		: "Ma鱉osios raid?s (a, b, c)",
DlgLstTypeUCase		: "Did鱉iosios raid?s (A, B, C)",
DlgLstTypeSRoman	: "Rom?n鑒 ma鱉ieji skai?iai (i, ii, iii)",
DlgLstTypeLRoman	: "Rom?n鑒 didieji skai?iai (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Bendros savyb?s",
DlgDocBackTab		: "Fonas",
DlgDocColorsTab		: "Spalvos ir kra禳tin?s",
DlgDocMetaTab		: "Meta duomenys",

DlgDocPageTitle		: "Puslapio antra禳t?",
DlgDocLangDir		: "Kalbos kryptis",
DlgDocLangDirLTR	: "I禳 kair?s 蠕 de禳in? (LTR)",
DlgDocLangDirRTL	: "I禳 de禳in?s 蠕 kair? (RTL)",
DlgDocLangCode		: "Kalbos kodas",
DlgDocCharSet		: "Simboli鑒 kodavimo lentel?",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Kita simboli鑒 kodavimo lentel?",

DlgDocDocType		: "Dokumento tipo antra禳t?",
DlgDocDocTypeOther	: "Kita dokumento tipo antra禳t?",
DlgDocIncXHTML		: "蠔traukti XHTML deklaracijas",
DlgDocBgColor		: "Fono spalva",
DlgDocBgImage		: "Fono paveiksl?lio nuoroda (URL)",
DlgDocBgNoScroll	: "Neslenkantis fonas",
DlgDocCText			: "Tekstas",
DlgDocCLink			: "Nuoroda",
DlgDocCVisited		: "Aplankyta nuoroda",
DlgDocCActive		: "Aktyvi nuoroda",
DlgDocMargins		: "Puslapio kra禳tin?s",
DlgDocMaTop			: "Vir禳uje",
DlgDocMaLeft		: "Kair?je",
DlgDocMaRight		: "De禳in?je",
DlgDocMaBottom		: "Apa?ioje",
DlgDocMeIndex		: "Dokumento indeksavimo raktiniai 鱉od鱉iai (atskirti kableliais)",
DlgDocMeDescr		: "Dokumento apib贖dinimas",
DlgDocMeAuthor		: "Autorius",
DlgDocMeCopy		: "Autorin?s teis?s",
DlgDocPreview		: "Per鱉i贖ra",

// Templates Dialog
Templates			: "?ablonai",
DlgTemplatesTitle	: "Turinio 禳ablonai",
DlgTemplatesSelMsg	: "Pasirinkite norim? 禳ablon?<br>(<b>D?mesio!</b> esamas turinys bus prarastas):",
DlgTemplatesLoading	: "蠔keliamas 禳ablon鑒 s?ra禳as. Pra禳ome palaukti...",
DlgTemplatesNoTpl	: "(?ablon鑒 s?ra禳as tu禳?ias)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Apie",
DlgAboutBrowserInfoTab	: "Nar禳ykl?s informacija",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "versija",
DlgAboutInfo		: "Papildom? informacij? galima gauti"
};
