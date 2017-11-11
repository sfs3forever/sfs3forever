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
 * Slovenian language file.
 $Id: sl.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Zlo鱉i orodno vrstico",
ToolbarExpand		: "Raz禳iri orodno vrstico",

// Toolbar Items and Context Menu
Save				: "Shrani",
NewPage				: "Nova stran",
Preview				: "Predogled",
Cut					: "Izre鱉i",
Copy				: "Kopiraj",
Paste				: "Prilepi",
PasteText			: "Prilepi kot golo besedilo",
PasteWord			: "Prilepi iz Worda",
Print				: "Natisni",
SelectAll			: "Izberi vse",
RemoveFormat		: "Odstrani oblikovanje",
InsertLinkLbl		: "Povezava",
InsertLink			: "Vstavi/uredi povezavo",
RemoveLink			: "Odstrani povezavo",
Anchor				: "Vstavi/uredi zaznamek",
InsertImageLbl		: "Slika",
InsertImage			: "Vstavi/uredi sliko",
InsertFlashLbl		: "Flash",
InsertFlash			: "Vstavi/Uredi Flash",
InsertTableLbl		: "Tabela",
InsertTable			: "Vstavi/uredi tabelo",
InsertLineLbl		: "?rta",
InsertLine			: "Vstavi vodoravno ?rto",
InsertSpecialCharLbl: "Posebni znak",
InsertSpecialChar	: "Vstavi posebni znak",
InsertSmileyLbl		: "Sme禳ko",
InsertSmiley		: "Vstavi sme禳ka",
About				: "O FCKeditorju",
Bold				: "Krepko",
Italic				: "Le鱉e?e",
Underline			: "Pod?rtano",
StrikeThrough		: "Pre?rtano",
Subscript			: "Podpisano",
Superscript			: "Nadpisano",
LeftJustify			: "Leva poravnava",
CenterJustify		: "Sredinska poravnava",
RightJustify		: "Desna poravnava",
BlockJustify		: "Obojestranska poravnava",
DecreaseIndent		: "Zmanj禳aj zamik",
IncreaseIndent		: "Pove?aj zamik",
Undo				: "Razveljavi",
Redo				: "Ponovi",
NumberedListLbl		: "O禳tevil?en seznam",
NumberedList		: "Vstavi/odstrani o禳tevil?evanje",
BulletedListLbl		: "Ozna?en seznam",
BulletedList		: "Vstavi/odstrani ozna?evanje",
ShowTableBorders	: "Poka鱉i meje tabele",
ShowDetails			: "Poka鱉i podrobnosti",
Style				: "Slog",
FontFormat			: "Oblika",
Font				: "Pisava",
FontSize			: "Velikost",
TextColor			: "Barva besedila",
BGColor				: "Barva ozadja",
Source				: "Izvorna koda",
Find				: "Najdi",
Replace				: "Zamenjaj",
SpellCheck			: "Preveri ?rkovanje",
UniversalKeyboard	: "Ve?jezi?na tipkovnica",
PageBreakLbl		: "Prelom strani",
PageBreak			: "Vstavi prelom strani",

Form			: "Obrazec",
Checkbox		: "Potrditveno polje",
RadioButton		: "Izbirno polje",
TextField		: "Vnosno polje",
Textarea		: "Vnosno obmo?je",
HiddenField		: "Skrito polje",
Button			: "Gumb",
SelectionField	: "Spustni seznam",
ImageButton		: "Gumb s sliko",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Uredi povezavo",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "Vstavi vrstico",
DeleteRows			: "Izbri禳i vrstice",
InsertColumn		: "Vstavi stolpec",
DeleteColumns		: "Izbri禳i stolpce",
InsertCell			: "Vstavi celico",
DeleteCells			: "Izbri禳i celice",
MergeCells			: "Zdru鱉i celice",
SplitCell			: "Razdeli celico",
TableDelete			: "Izbri禳i tabelo",
CellProperties		: "Lastnosti celice",
TableProperties		: "Lastnosti tabele",
ImageProperties		: "Lastnosti slike",
FlashProperties		: "Lastnosti Flash",

AnchorProp			: "Lastnosti zaznamka",
ButtonProp			: "Lastnosti gumba",
CheckboxProp		: "Lastnosti potrditvenega polja",
HiddenFieldProp		: "Lastnosti skritega polja",
RadioButtonProp		: "Lastnosti izbirnega polja",
ImageButtonProp		: "Lastnosti gumba s sliko",
TextFieldProp		: "Lastnosti vnosnega polja",
SelectionFieldProp	: "Lastnosti spustnega seznama",
TextareaProp		: "Lastnosti vnosnega obmo?ja",
FormProp			: "Lastnosti obrazca",

FontFormats			: "Navaden;Oblikovan;Napis;Naslov 1;Naslov 2;Naslov 3;Naslov 4;Naslov 5;Naslov 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Obdelujem XHTML. Prosim po?akajte...",
Done				: "Narejeno",
PasteWordConfirm	: "Izgleda, da 鱉elite prilepiti besedilo iz Worda. Ali ga 鱉elite o?istiti, preden ga prilepite?",
NotCompatiblePaste	: "Ta ukaz deluje le v Internet Explorerje razli?ice 5.5 ali vi禳je. Ali 鱉elite prilepiti brez ?i禳?enja?",
UnknownToolbarItem	: "Neznan element orodne vrstice \"%1\"",
UnknownCommand		: "Neznano ime ukaza \"%1\"",
NotImplemented		: "Ukaz ni izdelan",
UnknownToolbarSet	: "Skupina orodnih vrstic \"%1\" ne obstoja",
NoActiveX			: "Your browser's security settings could limit some features of the editor. You must enable the option \"Run ActiveX controls and plug-ins\". You may experience errors and notice missing features.",	//MISSING
BrowseServerBlocked : "The resources browser could not be opened. Make sure that all popup blockers are disabled.",	//MISSING
DialogBlocked		: "It was not possible to open the dialog window. Make sure all popup blockers are disabled.",	//MISSING

// Dialogs
DlgBtnOK			: "V redu",
DlgBtnCancel		: "Prekli?i",
DlgBtnClose			: "Zapri",
DlgBtnBrowseServer	: "Prebrskaj na stre鱉niku",
DlgAdvancedTag		: "Napredno",
DlgOpOther			: "<Ostalo>",
DlgInfoTab			: "Podatki",
DlgAlertUrl			: "Prosim vpi禳i spletni naslov",

// General Dialogs Labels
DlgGenNotSet		: "<ni postavljen>",
DlgGenId			: "Id",
DlgGenLangDir		: "Smer jezika",
DlgGenLangDirLtr	: "Od leve proti desni (LTR)",
DlgGenLangDirRtl	: "Od desne proti levi (RTL)",
DlgGenLangCode		: "Oznaka jezika",
DlgGenAccessKey		: "Vstopno geslo",
DlgGenName			: "Ime",
DlgGenTabIndex		: "?tevilka tabulatorja",
DlgGenLongDescr		: "Dolg opis URL-ja",
DlgGenClass			: "Razred stilne predloge",
DlgGenTitle			: "Predlagani naslov",
DlgGenContType		: "Predlagani tip vsebine (content-type)",
DlgGenLinkCharset	: "Kodna tabela povezanega vira",
DlgGenStyle			: "Slog",

// Image Dialog
DlgImgTitle			: "Lastnosti slike",
DlgImgInfoTab		: "Podatki o sliki",
DlgImgBtnUpload		: "Po禳lji na stre鱉nik",
DlgImgURL			: "URL",
DlgImgUpload		: "Po禳lji",
DlgImgAlt			: "Nadomestno besedilo",
DlgImgWidth			: "?irina",
DlgImgHeight		: "Vi禳ina",
DlgImgLockRatio		: "Zakleni razmerje",
DlgBtnResetSize		: "Ponastavi velikost",
DlgImgBorder		: "Obroba",
DlgImgHSpace		: "Vodoravni razmik",
DlgImgVSpace		: "Navpi?ni razmik",
DlgImgAlign			: "Poravnava",
DlgImgAlignLeft		: "Levo",
DlgImgAlignAbsBottom: "Popolnoma na dno",
DlgImgAlignAbsMiddle: "Popolnoma v sredino",
DlgImgAlignBaseline	: "Na osnovno ?rto",
DlgImgAlignBottom	: "Na dno",
DlgImgAlignMiddle	: "V sredino",
DlgImgAlignRight	: "Desno",
DlgImgAlignTextTop	: "Besedilo na vrh",
DlgImgAlignTop		: "Na vrh",
DlgImgPreview		: "Predogled",
DlgImgAlertUrl		: "Vnesite URL slike",
DlgImgLinkTab		: "Povezava",

// Flash Dialog
DlgFlashTitle		: "Lastnosti Flash",
DlgFlashChkPlay		: "Samodejno predvajaj",
DlgFlashChkLoop		: "Ponavljanje",
DlgFlashChkMenu		: "Omogo?i Flash Meni",
DlgFlashScale		: "Pove?ava",
DlgFlashScaleAll	: "Poka鱉i vse",
DlgFlashScaleNoBorder	: "Brez obrobe",
DlgFlashScaleFit	: "Natan?no prileganje",

// Link Dialog
DlgLnkWindowTitle	: "Povezava",
DlgLnkInfoTab		: "Podatki o povezavi",
DlgLnkTargetTab		: "Cilj",

DlgLnkType			: "Vrsta povezave",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Zaznamek na tej strani",
DlgLnkTypeEMail		: "Elektronski naslov",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<drugo>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Izberi zaznamek",
DlgLnkAnchorByName	: "Po imenu zaznamka",
DlgLnkAnchorById	: "Po ID-ju elementa",
DlgLnkNoAnchors		: "<V tem dokumentu ni zaznamkov>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Elektronski naslov",
DlgLnkEMailSubject	: "Predmet sporo?ila",
DlgLnkEMailBody		: "Vsebina sporo?ila",
DlgLnkUpload		: "Prenesi",
DlgLnkBtnUpload		: "Po禳lji na stre鱉nik",

DlgLnkTarget		: "Cilj",
DlgLnkTargetFrame	: "<okvir>",
DlgLnkTargetPopup	: "<pojavno okno>",
DlgLnkTargetBlank	: "Novo okno (_blank)",
DlgLnkTargetParent	: "Star禳evsko okno (_parent)",
DlgLnkTargetSelf	: "Isto okno (_self)",
DlgLnkTargetTop		: "Najvi禳je okno (_top)",
DlgLnkTargetFrameName	: "Ime ciljnega okvirja",
DlgLnkPopWinName	: "Ime pojavnega okna",
DlgLnkPopWinFeat	: "Zna?ilnosti pojavnega okna",
DlgLnkPopResize		: "Spremenljive velikosti",
DlgLnkPopLocation	: "Naslovna vrstica",
DlgLnkPopMenu		: "Menijska vrstica",
DlgLnkPopScroll		: "Drsniki",
DlgLnkPopStatus		: "Vrstica stanja",
DlgLnkPopToolbar	: "Orodna vrstica",
DlgLnkPopFullScrn	: "Celozaslonska slika (IE)",
DlgLnkPopDependent	: "Podokno (Netscape)",
DlgLnkPopWidth		: "?irina",
DlgLnkPopHeight		: "Vi禳ina",
DlgLnkPopLeft		: "Lega levo",
DlgLnkPopTop		: "Lega na vrhu",

DlnLnkMsgNoUrl		: "Vnesite URL povezave",
DlnLnkMsgNoEMail	: "Vnesite elektronski naslov",
DlnLnkMsgNoAnchor	: "Izberite zaznamek",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Izberite barvo",
DlgColorBtnClear	: "Po?isti",
DlgColorHighlight	: "Ozna?i",
DlgColorSelected	: "Izbrano",

// Smiley Dialog
DlgSmileyTitle		: "Vstavi sme禳ka",

// Special Character Dialog
DlgSpecialCharTitle	: "Izberi posebni znak",

// Table Dialog
DlgTableTitle		: "Lastnosti tabele",
DlgTableRows		: "Vrstice",
DlgTableColumns		: "Stolpci",
DlgTableBorder		: "Velikost obrobe",
DlgTableAlign		: "Poravnava",
DlgTableAlignNotSet	: "<Ni nastavljeno>",
DlgTableAlignLeft	: "Levo",
DlgTableAlignCenter	: "Sredinsko",
DlgTableAlignRight	: "Desno",
DlgTableWidth		: "?irina",
DlgTableWidthPx		: "pik",
DlgTableWidthPc		: "procentov",
DlgTableHeight		: "Vi禳ina",
DlgTableCellSpace	: "Razmik med celicami",
DlgTableCellPad		: "Polnilo med celicami",
DlgTableCaption		: "Naslov",
DlgTableSummary		: "Povzetek",

// Table Cell Dialog
DlgCellTitle		: "Lastnosti celice",
DlgCellWidth		: "?irina",
DlgCellWidthPx		: "pik",
DlgCellWidthPc		: "procentov",
DlgCellHeight		: "Vi禳ina",
DlgCellWordWrap		: "Pomikanje besedila",
DlgCellWordWrapNotSet	: "<Ni nastavljeno>",
DlgCellWordWrapYes	: "Da",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Vodoravna poravnava",
DlgCellHorAlignNotSet	: "<Ni nastavljeno>",
DlgCellHorAlignLeft	: "Levo",
DlgCellHorAlignCenter	: "Sredinsko",
DlgCellHorAlignRight: "Desno",
DlgCellVerAlign		: "Navpi?na poravnava",
DlgCellVerAlignNotSet	: "<Ni nastavljeno>",
DlgCellVerAlignTop	: "Na vrh",
DlgCellVerAlignMiddle	: "V sredino",
DlgCellVerAlignBottom	: "Na dno",
DlgCellVerAlignBaseline	: "Na osnovno ?rto",
DlgCellRowSpan		: "Spojenih vrstic (row-span)",
DlgCellCollSpan		: "Spojenih stolpcev (col-span)",
DlgCellBackColor	: "Barva ozadja",
DlgCellBorderColor	: "Barva obrobe",
DlgCellBtnSelect	: "Izberi...",

// Find Dialog
DlgFindTitle		: "Najdi",
DlgFindFindBtn		: "Najdi",
DlgFindNotFoundMsg	: "Navedeno besedilo ni bilo najdeno.",

// Replace Dialog
DlgReplaceTitle			: "Zamenjaj",
DlgReplaceFindLbl		: "Najdi:",
DlgReplaceReplaceLbl	: "Zamenjaj z:",
DlgReplaceCaseChk		: "Razlikuj velike in male ?rke",
DlgReplaceReplaceBtn	: "Zamenjaj",
DlgReplaceReplAllBtn	: "Zamenjaj vse",
DlgReplaceWordChk		: "Samo cele besede",

// Paste Operations / Dialog
PasteErrorCut	: "Varnostne nastavitve brskalnika ne dopu禳?ajo samodejnega izrezovanja. Uporabite kombinacijo tipk na tipkovnici (Ctrl+X).",
PasteErrorCopy	: "Varnostne nastavitve brskalnika ne dopu禳?ajo samodejnega kopiranja. Uporabite kombinacijo tipk na tipkovnici (Ctrl+C).",

PasteAsText		: "Prilepi kot golo besedilo",
PasteFromWord	: "Prilepi iz Worda",

DlgPasteMsg2	: "Prosim prilepite v sle?i okvir s pomo?jo tipkovnice (<STRONG>Ctrl+V</STRONG>) in pritisnite <STRONG>V redu</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Prezri obliko pisave",
DlgPasteRemoveStyles	: "Odstrani nastavitve stila",
DlgPasteCleanBox		: "Po?isti okvir",

// Color Picker
ColorAutomatic	: "Samodejno",
ColorMoreColors	: "Ve? barv...",

// Document Properties
DocProps		: "Lastnosti dokumenta",

// Anchor Dialog
DlgAnchorTitle		: "Lastnosti zaznamka",
DlgAnchorName		: "Ime zaznamka",
DlgAnchorErrorName	: "Prosim vnesite ime zaznamka",

// Speller Pages Dialog
DlgSpellNotInDic		: "Ni v slovarju",
DlgSpellChangeTo		: "Spremeni v",
DlgSpellBtnIgnore		: "Prezri",
DlgSpellBtnIgnoreAll	: "Prezri vse",
DlgSpellBtnReplace		: "Zamenjaj",
DlgSpellBtnReplaceAll	: "Zamenjaj vse",
DlgSpellBtnUndo			: "Razveljavi",
DlgSpellNoSuggestions	: "- Ni predlogov -",
DlgSpellProgress		: "Preverjanje ?rkovanja se izvaja...",
DlgSpellNoMispell		: "?rkovanje je kon?ano: Brez napak",
DlgSpellNoChanges		: "?rkovanje je kon?ano: Nobena beseda ni bila spremenjena",
DlgSpellOneChange		: "?rkovanje je kon?ano: Spremenjena je bila ena beseda",
DlgSpellManyChanges		: "?rkovanje je kon?ano: Spremenjenih je bilo %1 besed",

IeSpellDownload			: "?rkovalnik ni name禳?en. Ali ga 鱉elite prenesti sedaj?",

// Button Dialog
DlgButtonText		: "Besedilo (Vrednost)",
DlgButtonType		: "Tip",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Ime",
DlgCheckboxValue	: "Vrednost",
DlgCheckboxSelected	: "Izbrano",

// Form Dialog
DlgFormName		: "Ime",
DlgFormAction	: "Akcija",
DlgFormMethod	: "Metoda",

// Select Field Dialog
DlgSelectName		: "Ime",
DlgSelectValue		: "Vrednost",
DlgSelectSize		: "Velikost",
DlgSelectLines		: "vrstic",
DlgSelectChkMulti	: "Dovoli izbor ve?ih vrstic",
DlgSelectOpAvail	: "Razpolo鱉ljive izbire",
DlgSelectOpText		: "Besedilo",
DlgSelectOpValue	: "Vrednost",
DlgSelectBtnAdd		: "Dodaj",
DlgSelectBtnModify	: "Spremeni",
DlgSelectBtnUp		: "Gor",
DlgSelectBtnDown	: "Dol",
DlgSelectBtnSetValue : "Postavi kot privzeto izbiro",
DlgSelectBtnDelete	: "Izbri禳i",

// Textarea Dialog
DlgTextareaName	: "Ime",
DlgTextareaCols	: "Stolpcev",
DlgTextareaRows	: "Vrstic",

// Text Field Dialog
DlgTextName			: "Ime",
DlgTextValue		: "Vrednost",
DlgTextCharWidth	: "Dol鱉ina",
DlgTextMaxChars		: "Najve?je 禳tevilo znakov",
DlgTextType			: "Tip",
DlgTextTypeText		: "Besedilo",
DlgTextTypePass		: "Geslo",

// Hidden Field Dialog
DlgHiddenName	: "Ime",
DlgHiddenValue	: "Vrednost",

// Bulleted List Dialog
BulletedListProp	: "Lastnosti ozna?enega seznama",
NumberedListProp	: "Lastnosti o禳tevil?enega seznama",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tip",
DlgLstTypeCircle	: "Pikica",
DlgLstTypeDisc		: "Kroglica",
DlgLstTypeSquare	: "Kvadratek",
DlgLstTypeNumbers	: "?tevilke (1, 2, 3)",
DlgLstTypeLCase		: "Male ?rke (a, b, c)",
DlgLstTypeUCase		: "Velike ?rke (A, B, C)",
DlgLstTypeSRoman	: "Male rimske 禳tevilke (i, ii, iii)",
DlgLstTypeLRoman	: "Velike rimske 禳tevilke (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Splo禳no",
DlgDocBackTab		: "Ozadje",
DlgDocColorsTab		: "Barve in zamiki",
DlgDocMetaTab		: "Meta podatki",

DlgDocPageTitle		: "Naslov strani",
DlgDocLangDir		: "Smer jezika",
DlgDocLangDirLTR	: "Od leve proti desni (LTR)",
DlgDocLangDirRTL	: "Od desne proti levi (RTL)",
DlgDocLangCode		: "Oznaka jezika",
DlgDocCharSet		: "Kodna tabela",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Druga kodna tabela",

DlgDocDocType		: "Glava tipa dokumenta",
DlgDocDocTypeOther	: "Druga glava tipa dokumenta",
DlgDocIncXHTML		: "Vstavi XHTML deklaracije",
DlgDocBgColor		: "Barva ozadja",
DlgDocBgImage		: "URL slike za ozadje",
DlgDocBgNoScroll	: "Nepremi?no ozadje",
DlgDocCText			: "Besedilo",
DlgDocCLink			: "Povezava",
DlgDocCVisited		: "Obiskana povezava",
DlgDocCActive		: "Aktivna povezava",
DlgDocMargins		: "Zamiki strani",
DlgDocMaTop			: "Na vrhu",
DlgDocMaLeft		: "Levo",
DlgDocMaRight		: "Desno",
DlgDocMaBottom		: "Spodaj",
DlgDocMeIndex		: "Klju?ne besede (lo?ene z vejicami)",
DlgDocMeDescr		: "Opis strani",
DlgDocMeAuthor		: "Avtor",
DlgDocMeCopy		: "Avtorske pravice",
DlgDocPreview		: "Predogled",

// Templates Dialog
Templates			: "Predloge",
DlgTemplatesTitle	: "Vsebinske predloge",
DlgTemplatesSelMsg	: "Izberite predlogo, ki jo 鱉elite odpreti v urejevalniku<br>(trenutna vsebina bo izgubljena):",
DlgTemplatesLoading	: "Nalagam seznam predlog. Prosim po?akajte...",
DlgTemplatesNoTpl	: "(Ni pripravljenih predlog)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Vizitka",
DlgAboutBrowserInfoTab	: "Informacije o brskalniku",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "razli?ica",
DlgAboutInfo		: "Za ve? informacij obi禳?ite"
};
