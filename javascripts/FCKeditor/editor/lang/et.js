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
 * Estonian language file.
 $Id: et.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Voldi t繹繹riistariba",
ToolbarExpand		: "Laienda t繹繹riistariba",

// Toolbar Items and Context Menu
Save				: "Salvesta",
NewPage				: "Uus leht",
Preview				: "Eelvaade",
Cut					: "L繭ika",
Copy				: "Kopeeri",
Paste				: "Kleebi",
PasteText			: "Kleebi tavalise tekstina",
PasteWord			: "Kleebi Wordist",
Print				: "Prindi",
SelectAll			: "Vali k繭ik",
RemoveFormat		: "Eemalda vorming",
InsertLinkLbl		: "Link",
InsertLink			: "Sisesta/Muuda link",
RemoveLink			: "Eemalda link",
Anchor				: "Sisesta/Muuda ankur",
InsertImageLbl		: "Pilt",
InsertImage			: "Sisesta/Muuda pilt",
InsertFlashLbl		: "Flash",
InsertFlash			: "Sisesta/Muuda flash",
InsertTableLbl		: "Tabel",
InsertTable			: "Sisesta/Muuda tabel",
InsertLineLbl		: "Joon",
InsertLine			: "Sisesta horisontaaljoon",
InsertSpecialCharLbl: "Erim瓣rgid",
InsertSpecialChar	: "Sisesta erim瓣rk",
InsertSmileyLbl		: "Emotikon",
InsertSmiley		: "Sisesta emotikon",
About				: "FCKeditor teave",
Bold				: "Rasvane kiri",
Italic				: "Kursiiv kiri",
Underline			: "Allajoonitud kiri",
StrikeThrough		: "L瓣bijoonitud kiri",
Subscript			: "Allindeks",
Superscript			: "?laindeks",
LeftJustify			: "Vasakjoondus",
CenterJustify		: "Keskjoondus",
RightJustify		: "Paremjoondus",
BlockJustify		: "R繹繹pjoondus",
DecreaseIndent		: "V瓣henda taanet",
IncreaseIndent		: "Suurenda taanet",
Undo				: "V繭ta tagasi",
Redo				: "Korda toimingut",
NumberedListLbl		: "Nummerdatud loetelu",
NumberedList		: "Sisesta/Eemalda nummerdatud loetelu",
BulletedListLbl		: "Punktiseeritud loetelu",
BulletedList		: "Sisesta/Eemalda punktiseeritud loetelu",
ShowTableBorders	: "N瓣ita tabeli jooni",
ShowDetails			: "N瓣ita 羹ksikasju",
Style				: "Laad",
FontFormat			: "Vorming",
Font				: "Kiri",
FontSize			: "Suurus",
TextColor			: "Teksti v瓣rv",
BGColor				: "Tausta v瓣rv",
Source				: "L瓣htekood",
Find				: "Otsi",
Replace				: "Asenda",
SpellCheck			: "Kontrolli 繭igekirja",
UniversalKeyboard	: "Universaalne klaviatuur",
PageBreakLbl		: "Lehepiir",
PageBreak			: "Sisesta lehevahetus koht",

Form			: "Vorm",
Checkbox		: "M瓣rkeruut",
RadioButton		: "Raadionupp",
TextField		: "Tekstilahter",
Textarea		: "Tekstiala",
HiddenField		: "Varjatud lahter",
Button			: "Nupp",
SelectionField	: "Valiklahter",
ImageButton		: "Piltnupp",

FitWindow		: "Maksimeeri redaktori m繭繭tmed",

// Context Menu
EditLink			: "Muuda linki",
CellCM				: "Lahter",
RowCM				: "Rida",
ColumnCM			: "Veerg",
InsertRow			: "Lisa rida",
DeleteRows			: "Eemalda ridu",
InsertColumn		: "Lisa veerg",
DeleteColumns		: "Eemalda veerud",
InsertCell			: "Lisa lahter",
DeleteCells			: "Eemalda lahtrid",
MergeCells			: "?henda lahtrid",
SplitCell			: "Lahuta lahtrid",
TableDelete			: "Kustuta tabel",
CellProperties		: "Lahtri atribuudid",
TableProperties		: "Tabeli atribuudid",
ImageProperties		: "Pildi  atribuudid",
FlashProperties		: "Flash omadused",

AnchorProp			: "Ankru omadused",
ButtonProp			: "Nupu omadused",
CheckboxProp		: "M瓣rkeruudu omadused",
HiddenFieldProp		: "Varjatud lahtri omadused",
RadioButtonProp		: "Raadionupu omadused",
ImageButtonProp		: "Piltnupu omadused",
TextFieldProp		: "Tekstilahtri omadused",
SelectionFieldProp	: "Valiklahtri omadused",
TextareaProp		: "Tekstiala omadused",
FormProp			: "Vormi omadused",

FontFormats			: "Tavaline;Vormindatud;Aadress;Pealkiri 1;Pealkiri 2;Pealkiri 3;Pealkiri 4;Pealkiri 5;Pealkiri 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "T繹繹tlen XHTML. Palun oota...",
Done				: "Tehtud",
PasteWordConfirm	: "Tekst, mida soovid lisada paistab p瓣rinevat Wordist. Kas soovid seda enne kleepimist puhastada?",
NotCompatiblePaste	: "See k瓣sk on saadaval ainult Internet Explorer versioon 5.5 v繭i uuema puhul. Kas soovid kleepida ilma puhastamata?",
UnknownToolbarItem	: "Tundmatu t繹繹riistariba 羹ksus \"%1\"",
UnknownCommand		: "Tundmatu k瓣sunimi \"%1\"",
NotImplemented		: "K瓣sku ei t瓣idetud",
UnknownToolbarSet	: "T繹繹riistariba \"%1\" ei eksisteeri",
NoActiveX			: "Sinu interneti sirvija turvalisuse seaded v繭ivad limiteerida m繭ningaid tekstirdaktori kasutus v繭imalusi. Sa peaksid v繭imaldama valiku \"Run ActiveX controls and plug-ins\" oma sirvija seadetes. Muidu v繭id sa t瓣heldada vigu tekstiredaktori t繹繹s ja m瓣rgata puuduvaid funktsioone.",
BrowseServerBlocked : "Ressursside sirvija avamine eba繭nnestus. V繭imalda pop-up akende avanemine.",
DialogBlocked		: "Ei olenud v繭imalik avada dialoogi akent. V繭imalda pop-up akende avanemine.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Loobu",
DlgBtnClose			: "Sulge",
DlgBtnBrowseServer	: "Sirvi serverit",
DlgAdvancedTag		: "T瓣psemalt",
DlgOpOther			: "<Teine>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Palun sisesta URL",

// General Dialogs Labels
DlgGenNotSet		: "<m瓣瓣ramata>",
DlgGenId			: "Id",
DlgGenLangDir		: "Keele suund",
DlgGenLangDirLtr	: "Vasakult paremale (LTR)",
DlgGenLangDirRtl	: "Paremalt vasakule (RTL)",
DlgGenLangCode		: "Keele kood",
DlgGenAccessKey		: "Juurdep瓣瓣su v繭ti",
DlgGenName			: "Nimi",
DlgGenTabIndex		: "Tab indeks",
DlgGenLongDescr		: "Pikk kirjeldus URL",
DlgGenClass			: "Stiilistiku klassid",
DlgGenTitle			: "Juhendav tiitel",
DlgGenContType		: "Juhendava sisu t羹羹p",
DlgGenLinkCharset	: "Lingitud ressurssi m瓣rgistik",
DlgGenStyle			: "Laad",

// Image Dialog
DlgImgTitle			: "Pildi atribuudid",
DlgImgInfoTab		: "Pildi info",
DlgImgBtnUpload		: "Saada serverissee",
DlgImgURL			: "URL",
DlgImgUpload		: "Lae 羹les",
DlgImgAlt			: "Alternatiivne tekst",
DlgImgWidth			: "Laius",
DlgImgHeight		: "K繭rgus",
DlgImgLockRatio		: "Lukusta kuvasuhe",
DlgBtnResetSize		: "L瓣htesta suurus",
DlgImgBorder		: "Joon",
DlgImgHSpace		: "H. vaheruum",
DlgImgVSpace		: "V. vaheruum",
DlgImgAlign			: "Joondus",
DlgImgAlignLeft		: "Vasak",
DlgImgAlignAbsBottom: "Abs alla",
DlgImgAlignAbsMiddle: "Abs keskele",
DlgImgAlignBaseline	: "Baasjoonele",
DlgImgAlignBottom	: "Alla",
DlgImgAlignMiddle	: "Keskele",
DlgImgAlignRight	: "Paremale",
DlgImgAlignTextTop	: "Tekstit 羹les",
DlgImgAlignTop		: "?les",
DlgImgPreview		: "Eelvaade",
DlgImgAlertUrl		: "Palun kirjuta pildi URL",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "Flash omadused",
DlgFlashChkPlay		: "Automaatne start ",
DlgFlashChkLoop		: "Korduv",
DlgFlashChkMenu		: "V繭imalda flash men羹羹",
DlgFlashScale		: "Mastaap",
DlgFlashScaleAll	: "N瓣ita k繭ike",
DlgFlashScaleNoBorder	: "?瓣rist ei ole",
DlgFlashScaleFit	: "T瓣pne sobivus",

// Link Dialog
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Lingi info",
DlgLnkTargetTab		: "Sihtkoht",

DlgLnkType			: "Lingi t羹羹p",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ankur sellel lehel",
DlgLnkTypeEMail		: "E-post",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<muu>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vali ankur",
DlgLnkAnchorByName	: "Ankru nime j瓣rgi",
DlgLnkAnchorById	: "Elemendi id j瓣rgi",
DlgLnkNoAnchors		: "<Selles dokumendis ei ole ankruid>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-posti aadress",
DlgLnkEMailSubject	: "S繭numi teema",
DlgLnkEMailBody		: "S繭numi tekst",
DlgLnkUpload		: "Lae 羹les",
DlgLnkBtnUpload		: "Saada serverisse",

DlgLnkTarget		: "Sihtkoht",
DlgLnkTargetFrame	: "<raam>",
DlgLnkTargetPopup	: "<h羹pikaken>",
DlgLnkTargetBlank	: "Uus aken (_blank)",
DlgLnkTargetParent	: "Vanem aken (_parent)",
DlgLnkTargetSelf	: "Sama aken (_self)",
DlgLnkTargetTop		: "Pealmine aken (_top)",
DlgLnkTargetFrameName	: "Sihtm瓣rk raami nimi",
DlgLnkPopWinName	: "H羹pikakna nimi",
DlgLnkPopWinFeat	: "H羹pikakna omadused",
DlgLnkPopResize		: "Suurendatav",
DlgLnkPopLocation	: "Aadressiriba",
DlgLnkPopMenu		: "Men羹羹riba",
DlgLnkPopScroll		: "Kerimisribad",
DlgLnkPopStatus		: "Olekuriba",
DlgLnkPopToolbar	: "T繹繹riistariba",
DlgLnkPopFullScrn	: "T瓣isekraan (IE)",
DlgLnkPopDependent	: "S繭ltuv (Netscape)",
DlgLnkPopWidth		: "Laius",
DlgLnkPopHeight		: "K繭rgus",
DlgLnkPopLeft		: "Vasak asukoht",
DlgLnkPopTop		: "?lemine asukoht",

DlnLnkMsgNoUrl		: "Palun kirjuta lingi URL",
DlnLnkMsgNoEMail	: "Palun kirjuta E-Posti aadress",
DlnLnkMsgNoAnchor	: "Palun vali ankur",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Vali v瓣rv",
DlgColorBtnClear	: "T羹hjenda",
DlgColorHighlight	: "M瓣rgi",
DlgColorSelected	: "Valitud",

// Smiley Dialog
DlgSmileyTitle		: "Sisesta emotikon",

// Special Character Dialog
DlgSpecialCharTitle	: "Vali erim瓣rk",

// Table Dialog
DlgTableTitle		: "Tabeli atribuudid",
DlgTableRows		: "Read",
DlgTableColumns		: "Veerud",
DlgTableBorder		: "Joone suurus",
DlgTableAlign		: "Joondus",
DlgTableAlignNotSet	: "<M瓣瓣ramata>",
DlgTableAlignLeft	: "Vasak",
DlgTableAlignCenter	: "Kesk",
DlgTableAlignRight	: "Parem",
DlgTableWidth		: "Laius",
DlgTableWidthPx		: "pikslit",
DlgTableWidthPc		: "protsenti",
DlgTableHeight		: "K繭rgus",
DlgTableCellSpace	: "Lahtri vahe",
DlgTableCellPad		: "Lahtri t瓣idis",
DlgTableCaption		: "Tabeli tiitel",
DlgTableSummary		: "Kokkuv繭te",

// Table Cell Dialog
DlgCellTitle		: "Lahtri atribuudid",
DlgCellWidth		: "Laius",
DlgCellWidthPx		: "pikslit",
DlgCellWidthPc		: "protsenti",
DlgCellHeight		: "K繭rgus",
DlgCellWordWrap		: "S繭na 羹lekanne",
DlgCellWordWrapNotSet	: "<M瓣瓣ramata>",
DlgCellWordWrapYes	: "Jah",
DlgCellWordWrapNo	: "Ei",
DlgCellHorAlign		: "Horisontaaljoondus",
DlgCellHorAlignNotSet	: "<M瓣瓣ramata>",
DlgCellHorAlignLeft	: "Vasak",
DlgCellHorAlignCenter	: "Kesk",
DlgCellHorAlignRight: "Parem",
DlgCellVerAlign		: "Vertikaaljoondus",
DlgCellVerAlignNotSet	: "<M瓣瓣ramata>",
DlgCellVerAlignTop	: "?les",
DlgCellVerAlignMiddle	: "Keskele",
DlgCellVerAlignBottom	: "Alla",
DlgCellVerAlignBaseline	: "Baasjoonele",
DlgCellRowSpan		: "Reaulatus",
DlgCellCollSpan		: "Veeruulatus",
DlgCellBackColor	: "Tausta v瓣rv",
DlgCellBorderColor	: "Joone v瓣rv",
DlgCellBtnSelect	: "Vali...",

// Find Dialog
DlgFindTitle		: "Otsi",
DlgFindFindBtn		: "Otsi",
DlgFindNotFoundMsg	: "Valitud teksti ei leitud.",

// Replace Dialog
DlgReplaceTitle			: "Asenda",
DlgReplaceFindLbl		: "Leia mida:",
DlgReplaceReplaceLbl	: "Asenda millega:",
DlgReplaceCaseChk		: "Erista suur- ja v瓣iket瓣hti",
DlgReplaceReplaceBtn	: "Asenda",
DlgReplaceReplAllBtn	: "Asenda k繭ik",
DlgReplaceWordChk		: "Otsi terviklike s繭nu",

// Paste Operations / Dialog
PasteErrorCut	: "Sinu interneti sirvija turvaseaded ei luba redaktoril automaatselt l繭igata. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl+X).",
PasteErrorCopy	: "Sinu interneti sirvija turvaseaded ei luba redaktoril automaatselt kopeerida. Palun kasutage selleks klaviatuuri klahvikombinatsiooni (Ctrl+C).",

PasteAsText		: "Kleebi tavalise tekstina",
PasteFromWord	: "Kleebi Wordist",

DlgPasteMsg2	: "Palun kleebi j瓣rgnevasse kasti kasutades klaviatuuri klahvikombinatsiooni (<STRONG>Ctrl+V</STRONG>) ja vajuta seej瓣rel <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignoreeri kirja definitsioone",
DlgPasteRemoveStyles	: "Eemalda stiilide definitsioonid",
DlgPasteCleanBox		: "Puhasta 瓣ra kast",

// Color Picker
ColorAutomatic	: "Automaatne",
ColorMoreColors	: "Rohkem v瓣rve...",

// Document Properties
DocProps		: "Dokumendi omadused",

// Anchor Dialog
DlgAnchorTitle		: "Ankru omadused",
DlgAnchorName		: "Ankru nimi",
DlgAnchorErrorName	: "Palun sisest ankru nimi",

// Speller Pages Dialog
DlgSpellNotInDic		: "Puudub s繭nastikust",
DlgSpellChangeTo		: "Muuda",
DlgSpellBtnIgnore		: "Ignoreeri",
DlgSpellBtnIgnoreAll	: "Ignoreeri k繭iki",
DlgSpellBtnReplace		: "Asenda",
DlgSpellBtnReplaceAll	: "Asenda k繭ik",
DlgSpellBtnUndo			: "V繭ta tagasi",
DlgSpellNoSuggestions	: "- Soovitused puuduvad -",
DlgSpellProgress		: "Toimub 繭igekirja kontroll...",
DlgSpellNoMispell		: "?igekirja kontroll sooritatud: 繭igekirjuvigu ei leitud",
DlgSpellNoChanges		: "?igekirja kontroll sooritatud: 羹htegi s繭na ei muudetud",
DlgSpellOneChange		: "?igekirja kontroll sooritatud: 羹ks s繭na muudeti",
DlgSpellManyChanges		: "?igekirja kontroll sooritatud: %1 s繭na muudetud",

IeSpellDownload			: "?igekirja kontrollija ei ole installeeritud. Soovid sa selle alla laadida?",

// Button Dialog
DlgButtonText		: "Tekst (v瓣瓣rtus)",
DlgButtonType		: "T羹羹p",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nimi",
DlgCheckboxValue	: "V瓣瓣rtus",
DlgCheckboxSelected	: "Valitud",

// Form Dialog
DlgFormName		: "Nimi",
DlgFormAction	: "Toiming",
DlgFormMethod	: "Meetod",

// Select Field Dialog
DlgSelectName		: "Nimi",
DlgSelectValue		: "V瓣瓣rtus",
DlgSelectSize		: "Suurus",
DlgSelectLines		: "ridu",
DlgSelectChkMulti	: "V繭imalda mitu valikut",
DlgSelectOpAvail	: "V繭imalikud valikud",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "V瓣瓣rtus",
DlgSelectBtnAdd		: "Lisa",
DlgSelectBtnModify	: "Muuda",
DlgSelectBtnUp		: "?les",
DlgSelectBtnDown	: "Alla",
DlgSelectBtnSetValue : "Sea valitud olekuna",
DlgSelectBtnDelete	: "Kustuta",

// Textarea Dialog
DlgTextareaName	: "Nimi",
DlgTextareaCols	: "Veerge",
DlgTextareaRows	: "Ridu",

// Text Field Dialog
DlgTextName			: "Nimi",
DlgTextValue		: "V瓣瓣rtus",
DlgTextCharWidth	: "Laius (t瓣hem瓣rkides)",
DlgTextMaxChars		: "Maksimaalselt t瓣hem瓣rke",
DlgTextType			: "T羹羹p",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Parool",

// Hidden Field Dialog
DlgHiddenName	: "Nimi",
DlgHiddenValue	: "V瓣瓣rtus",

// Bulleted List Dialog
BulletedListProp	: "T瓣pitud loetelu omadused",
NumberedListProp	: "Nummerdatud loetelu omadused",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "T羹羹p",
DlgLstTypeCircle	: "Ring",
DlgLstTypeDisc		: "Ketas",
DlgLstTypeSquare	: "Ruut",
DlgLstTypeNumbers	: "Numbrid (1, 2, 3)",
DlgLstTypeLCase		: "V瓣iket瓣hed (a, b, c)",
DlgLstTypeUCase		: "Suurt瓣hed (A, B, C)",
DlgLstTypeSRoman	: "V瓣iksed Rooma numbrid (i, ii, iii)",
DlgLstTypeLRoman	: "Suured Rooma numbrid (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "?ldine",
DlgDocBackTab		: "Taust",
DlgDocColorsTab		: "V瓣rvid ja veerised",
DlgDocMetaTab		: "Meta andmed",

DlgDocPageTitle		: "Lehek羹lje tiitel",
DlgDocLangDir		: "Kirja suund",
DlgDocLangDirLTR	: "Vasakult paremale (LTR)",
DlgDocLangDirRTL	: "Paremalt vasakule (RTL)",
DlgDocLangCode		: "Keele kood",
DlgDocCharSet		: "M瓣rgistiku kodeering",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "?lej瓣瓣nud m瓣rgistike kodeeringud",

DlgDocDocType		: "Dokumendi t羹羹pp瓣is",
DlgDocDocTypeOther	: "Teised dokumendi t羹羹pp瓣ised",
DlgDocIncXHTML		: "Arva kaasa XHTML deklaratsioonid",
DlgDocBgColor		: "Taustav瓣rv",
DlgDocBgImage		: "Taustapildi URL",
DlgDocBgNoScroll	: "Mittekeritav tagataust",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Link",
DlgDocCVisited		: "K羹lastatud link",
DlgDocCActive		: "Aktiivne link",
DlgDocMargins		: "Lehek羹lje 瓣瓣rised",
DlgDocMaTop			: "?laserv",
DlgDocMaLeft		: "Vasakserv",
DlgDocMaRight		: "Paremserv",
DlgDocMaBottom		: "Alaserv",
DlgDocMeIndex		: "Dokumendi v繭tmes繭nad (eraldatud komadega)",
DlgDocMeDescr		: "Dokumendi kirjeldus",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Autori繭igus",
DlgDocPreview		: "Eelvaade",

// Templates Dialog
Templates			: "?abloon",
DlgTemplatesTitle	: "Sisu 禳abloonid",
DlgTemplatesSelMsg	: "Palun vali 禳abloon, et avada see redaktoris<br />(praegune sisu l瓣heb kaotsi):",
DlgTemplatesLoading	: "Laen 禳abloonide nimekirja. Palun oota...",
DlgTemplatesNoTpl	: "(?htegi 禳ablooni ei ole defineeritud)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Teave",
DlgAboutBrowserInfoTab	: "Interneti sirvija info",
DlgAboutLicenseTab	: "Litsents",
DlgAboutVersion		: "versioon",
DlgAboutInfo		: "T瓣psema info saamiseks mine"
};
