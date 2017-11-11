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
 * Faroese language file.
 $Id: fo.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Fjal ambo簸sbj獺lkan",
ToolbarExpand		: "V穩s ambo簸sbj獺lkan",

// Toolbar Items and Context Menu
Save				: "Goym",
NewPage				: "N羸ggj s穩簸a",
Preview				: "Frums羸ning",
Cut					: "Kvett",
Copy				: "Avrita",
Paste				: "Innrita",
PasteText			: "Innrita reinan tekst",
PasteWord			: "Innrita fr獺 Word",
Print				: "Prenta",
SelectAll			: "Markera alt",
RemoveFormat		: "Strika sni簸geving",
InsertLinkLbl		: "Tilkn羸ti",
InsertLink			: "Ger/broyt tilkn羸ti",
RemoveLink			: "Strika tilkn羸ti",
Anchor				: "Ger/broyt marknastein",
InsertImageLbl		: "Myndir",
InsertImage			: "Set inn/broyt mynd",
InsertFlashLbl		: "Flash",
InsertFlash			: "Set inn/broyt Flash",
InsertTableLbl		: "Tabell",
InsertTable			: "Set inn/broyt tabell",
InsertLineLbl		: "Linja",
InsertLine			: "Ger vatnr疆tta linju",
InsertSpecialCharLbl: "Sertekn",
InsertSpecialChar	: "Set inn sertekn",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Set inn Smiley",
About				: "Um FCKeditor",
Bold				: "Feit skrift",
Italic				: "Skr獺skrift",
Underline			: "Undirstrika簸",
StrikeThrough		: "Yvirstrika簸",
Subscript			: "L疆kka簸 skrift",
Superscript			: "H疆kka簸 skrift",
LeftJustify			: "Vinstrasett",
CenterJustify		: "Mi簸sett",
RightJustify		: "H繪grasett",
BlockJustify		: "Javnir tekstkantar",
DecreaseIndent		: "Minka reglubrotarinntriv",
IncreaseIndent		: "?kja reglubrotarinntriv",
Undo				: "Angra",
Redo				: "Vend aftur",
NumberedListLbl		: "Talmerktur listi",
NumberedList		: "Ger/strika talmerktan lista",
BulletedListLbl		: "Punktmerktur listi",
BulletedList		: "Ger/strika punktmerktan lista",
ShowTableBorders	: "V穩s tabellbordar",
ShowDetails			: "V穩s 穩 sm獺lutum",
Style				: "Typografi",
FontFormat			: "Skriftsni簸",
Font				: "Skrift",
FontSize			: "Skriftst繪dd",
TextColor			: "Tekstlitur",
BGColor				: "Bakgrundslitur",
Source				: "Kelda",
Find				: "Leita",
Replace				: "Yvirskriva",
SpellCheck			: "Kanna stavseting",
UniversalKeyboard	: "Knappabor簸",
PageBreakLbl		: "S穩簸uskift",
PageBreak			: "Ger s穩簸uskift",

Form			: "Formur",
Checkbox		: "Flugubein",
RadioButton		: "Radiokn繪ttur",
TextField		: "Tekstteigur",
Textarea		: "Tekstumr獺簸i",
HiddenField		: "Fjaldur teigur",
Button			: "Kn繪ttur",
SelectionField	: "Valskr獺",
ImageButton		: "Myndakn繪ttur",

FitWindow		: "Set tekstvi簸gera til fulla st繪dd",

// Context Menu
EditLink			: "Broyt tilkn羸ti",
CellCM				: "Meski",
RowCM				: "Ra簸",
ColumnCM			: "Kolonna",
InsertRow			: "N羸tt ra簸",
DeleteRows			: "Strika r繪簸ir",
InsertColumn		: "N羸ggj kolonna",
DeleteColumns		: "Strika kolonnur",
InsertCell			: "N羸ggjur meski",
DeleteCells			: "Strika meskar",
MergeCells			: "Fl疆tta meskar",
SplitCell			: "B羸t sundur meskar",
TableDelete			: "Strika tabell",
CellProperties		: "Meskueginleikar",
TableProperties		: "Tabelleginleikar",
ImageProperties		: "Myndaeginleikar",
FlashProperties		: "Flash eginleikar",

AnchorProp			: "Eginleikar fyri marknastein",
ButtonProp			: "Eginleikar fyri kn繪tt",
CheckboxProp		: "Eginleikar fyri flugubein",
HiddenFieldProp		: "Eginleikar fyri fjaldan teig",
RadioButtonProp		: "Eginleikar fyri radiokn繪tt",
ImageButtonProp		: "Eginleikar fyri myndakn繪tt",
TextFieldProp		: "Eginleikar fyri tekstteig",
SelectionFieldProp	: "Eginleikar fyri valskr獺",
TextareaProp		: "Eginleikar fyri tekstumr獺簸i",
FormProp			: "Eginleikar fyri Form",

FontFormats			: "Vanligt;Sni簸givi簸;Adressa;Yvirskrift 1;Yvirskrift 2;Yvirskrift 3;Yvirskrift 4;Yvirskrift 5;Yvirskrift 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "XHTML ver簸ur vi簸gj繪rt. B穩簸a vi簸...",
Done				: "Li簸ugt",
PasteWordConfirm	: "Teksturin, royndur ver簸ur at seta inn, tykist at stava fr獺 Word. Vilt t繳 reinsa tekstin, 獺簸renn hann ver簸ur settur inn?",
NotCompatiblePaste	: "Hetta er bert t繪kt 穩 Internet Explorer 5.5 og n羸ggjari. Vilt t繳 seta tekstin inn kortini - 籀reinsa簸an?",
UnknownToolbarItem	: "?kendur lutur 穩 ambo簸sbj獺lkanum \"%1\"",
UnknownCommand		: "?kend kommando \"%1\"",
NotImplemented		: "Hetta er ikki t繪kt 穩 hesi 繳tg獺vuni",
UnknownToolbarSet	: "Ambo簸sbj獺lkin \"%1\" finst ikki",
NoActiveX			: "Trygdaruppsetingin 穩 aln籀tskaganum kann sum er avmarka onkrar hentleikar 穩 tekstvi簸geranum. T繳 m獺st loyva m繪guleikanum \"Run/K繪r ActiveX controls and plug-ins\". T繳 kanst uppliva feilir og 獺varingar um tv繪rrandi hentleikar.",
BrowseServerBlocked : "Amb疆tarakagin kundi ikki opnast. Tryggja t疆r, at allar pop-up for簸ingar eru 籀virknar.",
DialogBlocked		: "Ta簸 ey簸na簸ist ikki at opna samskiftisr繳tin. Tryggja t疆r, at allar pop-up for簸ingar eru 籀virknar.",

// Dialogs
DlgBtnOK			: "G籀簸kent",
DlgBtnCancel		: "Avl羸st",
DlgBtnClose			: "Lat aftur",
DlgBtnBrowseServer	: "Amb疆tarakagi",
DlgAdvancedTag		: "Fj繪lbroytt",
DlgOpOther			: "<Anna簸>",
DlgInfoTab			: "Uppl羸singar",
DlgAlertUrl			: "Vinarliga veit ein URL",

// General Dialogs Labels
DlgGenNotSet		: "<ikki sett>",
DlgGenId			: "Id",
DlgGenLangDir		: "Tekstk籀s",
DlgGenLangDirLtr	: "Fr獺 vinstru til h繪gru (LTR)",
DlgGenLangDirRtl	: "Fr獺 h繪gru til vinstru (RTL)",
DlgGenLangCode		: "M獺lkoda",
DlgGenAccessKey		: "Snarvegisknappur",
DlgGenName			: "Navn",
DlgGenTabIndex		: "Inntriv indeks",
DlgGenLongDescr		: "V穩簸ka簸 URL fr獺grei簸ing",
DlgGenClass			: "Typografi klassar",
DlgGenTitle			: "Veglei簸andi heiti",
DlgGenContType		: "Veglei簸andi innihaldsslag",
DlgGenLinkCharset	: "Atkn羸tt teknsett",
DlgGenStyle			: "Typografi",

// Image Dialog
DlgImgTitle			: "Myndaeginleikar",
DlgImgInfoTab		: "Myndauppl羸singar",
DlgImgBtnUpload		: "Send til amb疆taran",
DlgImgURL			: "URL",
DlgImgUpload		: "Send",
DlgImgAlt			: "Alternativur tekstur",
DlgImgWidth			: "Breidd",
DlgImgHeight		: "H疆dd",
DlgImgLockRatio		: "L疆s lutfalli簸",
DlgBtnResetSize		: "Upprunast繪dd",
DlgImgBorder		: "Bordi",
DlgImgHSpace		: "H繪gri breddi",
DlgImgVSpace		: "Vinstri breddi",
DlgImgAlign			: "Justering",
DlgImgAlignLeft		: "Vinstra",
DlgImgAlignAbsBottom: "Abs botnur",
DlgImgAlignAbsMiddle: "Abs mi簸ja",
DlgImgAlignBaseline	: "Basislinja",
DlgImgAlignBottom	: "Botnur",
DlgImgAlignMiddle	: "Mi簸ja",
DlgImgAlignRight	: "H繪gra",
DlgImgAlignTextTop	: "Tekst toppur",
DlgImgAlignTop		: "Ovast",
DlgImgPreview		: "Frums羸ning",
DlgImgAlertUrl		: "Rita sl籀簸ina til myndina",
DlgImgLinkTab		: "Tilkn羸ti",

// Flash Dialog
DlgFlashTitle		: "Flash eginleikar",
DlgFlashChkPlay		: "Avsp疆lingin byrjar sj獺lv",
DlgFlashChkLoop		: "Endursp疆l",
DlgFlashChkMenu		: "Ger Flash skr獺 virkna",
DlgFlashScale		: "Skalering",
DlgFlashScaleAll	: "V穩s alt",
DlgFlashScaleNoBorder	: "Eingin bordi",
DlgFlashScaleFit	: "Neyv skalering",

// Link Dialog
DlgLnkWindowTitle	: "Tilkn羸ti",
DlgLnkInfoTab		: "Tilkn羸tis uppl羸singar",
DlgLnkTargetTab		: "M獺l",

DlgLnkType			: "Tilkn羸tisslag",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Tilkn羸ti til marknastein 穩 tekstinum",
DlgLnkTypeEMail		: "Teldupostur",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<Anna簸>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Vel ein marknastein",
DlgLnkAnchorByName	: "Eftir navni 獺 marknasteini",
DlgLnkAnchorById	: "Eftir element Id",
DlgLnkNoAnchors		: "(Eingir marknasteinar eru 穩 hesum dokumenti簸)",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Teldupost-adressa",
DlgLnkEMailSubject	: "Evni",
DlgLnkEMailBody		: "Brey簸tekstur",
DlgLnkUpload		: "Send til amb疆taran",
DlgLnkBtnUpload		: "Send til amb疆taran",

DlgLnkTarget		: "M獺l",
DlgLnkTargetFrame	: "<ramma>",
DlgLnkTargetPopup	: "<popup vindeyga>",
DlgLnkTargetBlank	: "N羸tt vindeyga (_blank)",
DlgLnkTargetParent	: "Upphavliga vindeyga簸 (_parent)",
DlgLnkTargetSelf	: "Sama vindeyga簸 (_self)",
DlgLnkTargetTop		: "Alt vindeyga簸 (_top)",
DlgLnkTargetFrameName	: "V穩s navn vindeygans",
DlgLnkPopWinName	: "Popup vindeygans navn",
DlgLnkPopWinFeat	: "Popup vindeygans v穩簸ka簸u eginleikar",
DlgLnkPopResize		: "Kann broyta st繪dd",
DlgLnkPopLocation	: "Adressulinja",
DlgLnkPopMenu		: "Skr獺bj獺lki",
DlgLnkPopScroll		: "Rullibj獺lki",
DlgLnkPopStatus		: "St繪簸ufr獺grei簸ingarbj獺lki",
DlgLnkPopToolbar	: "Ambo簸sbj獺lki",
DlgLnkPopFullScrn	: "Fullur skermur (IE)",
DlgLnkPopDependent	: "Bundi簸 (Netscape)",
DlgLnkPopWidth		: "Breidd",
DlgLnkPopHeight		: "H疆dd",
DlgLnkPopLeft		: "Fr獺st繪簸a fr獺 vinstru",
DlgLnkPopTop		: "Fr獺st繪簸a fr獺 穩erva",

DlnLnkMsgNoUrl		: "Vinarliga skriva tilkn羸ti (URL)",
DlnLnkMsgNoEMail	: "Vinarliga skriva teldupost-adressu",
DlnLnkMsgNoAnchor	: "Vinarliga vel marknastein",
DlnLnkMsgInvPopName	: "Popup navni簸 m獺 byrja vi簸 b籀kstavi og m獺 ikki hava millumr繳m",

// Color Dialog
DlgColorTitle		: "Vel lit",
DlgColorBtnClear	: "Strika alt",
DlgColorHighlight	: "Framhevja",
DlgColorSelected	: "Valt",

// Smiley Dialog
DlgSmileyTitle		: "Vel Smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "Vel sertekn",

// Table Dialog
DlgTableTitle		: "Eginleikar fyri tabell",
DlgTableRows		: "R繪簸ir",
DlgTableColumns		: "Kolonnur",
DlgTableBorder		: "Bordabreidd",
DlgTableAlign		: "Justering",
DlgTableAlignNotSet	: "<Einki valt>",
DlgTableAlignLeft	: "Vinstrasett",
DlgTableAlignCenter	: "Mi簸sett",
DlgTableAlignRight	: "H繪grasett",
DlgTableWidth		: "Breidd",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "prosent",
DlgTableHeight		: "H疆dd",
DlgTableCellSpace	: "Fjarst繪簸a millum meskar",
DlgTableCellPad		: "Meskubreddi",
DlgTableCaption		: "Tabellfr獺grei簸ing",
DlgTableSummary		: "Samandr獺ttur",

// Table Cell Dialog
DlgCellTitle		: "Mesku eginleikar",
DlgCellWidth		: "Breidd",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "prosent",
DlgCellHeight		: "H疆dd",
DlgCellWordWrap		: "Or簸kloyving",
DlgCellWordWrapNotSet	: "<Einki valt>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nei",
DlgCellHorAlign		: "Vatnr繪tt justering",
DlgCellHorAlignNotSet	: "<Einki valt>",
DlgCellHorAlignLeft	: "Vinstrasett",
DlgCellHorAlignCenter	: "Mi簸sett",
DlgCellHorAlignRight: "H繪grasett",
DlgCellVerAlign		: "Lodr繪tt justering",
DlgCellVerAlignNotSet	: "<Ikki sett>",
DlgCellVerAlignTop	: "Ovast",
DlgCellVerAlignMiddle	: "Mi簸jan",
DlgCellVerAlignBottom	: "Ni簸ast",
DlgCellVerAlignBaseline	: "Basislinja",
DlgCellRowSpan		: "R繪簸ir, meskin fevnir um",
DlgCellCollSpan		: "Kolonnur, meskin fevnir um",
DlgCellBackColor	: "Bakgrundslitur",
DlgCellBorderColor	: "Litur 獺 borda",
DlgCellBtnSelect	: "Vel...",

// Find Dialog
DlgFindTitle		: "Finn",
DlgFindFindBtn		: "Finn",
DlgFindNotFoundMsg	: "Leititeksturin var簸 ikki funnin",

// Replace Dialog
DlgReplaceTitle			: "Yvirskriva",
DlgReplaceFindLbl		: "Finn:",
DlgReplaceReplaceLbl	: "Yvirskriva vi簸:",
DlgReplaceCaseChk		: "Munur 獺 st籀rum og sm獺簸um b籀kstavum",
DlgReplaceReplaceBtn	: "Yvirskriva",
DlgReplaceReplAllBtn	: "Yvirskriva alt",
DlgReplaceWordChk		: "Bert heil or簸",

// Paste Operations / Dialog
PasteErrorCut	: "Trygdaruppseting aln籀tskagans for簸ar tekstvi簸geranum 穩 at kvetta tekstin. vinarliga n羸t knappabor簸i簸 til at kvetta tekstin (CTRL+X).",
PasteErrorCopy	: "Trygdaruppseting aln籀tskagans for簸ar tekstvi簸geranum 穩 at avrita tekstin. Vinarliga n羸t knappabor簸i簸 til at avrita tekstin (CTRL+C).",

PasteAsText		: "Innrita som reinan tekst",
PasteFromWord	: "Innrita fra Word",

DlgPasteMsg2	: "Vinarliga koyr tekstin 穩 hendan r繳tin vi簸 knappabor簸inum (<strong>CTRL+V</strong>) og klikk 獺 <strong>G籀簸tak</strong>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Forfj籀na Font definiti籀nirnar",
DlgPasteRemoveStyles	: "Strika Styles definiti籀nir",
DlgPasteCleanBox		: "Reinskanarkassi",

// Color Picker
ColorAutomatic	: "Av s疆r sj獺lvum",
ColorMoreColors	: "Fleiri litir...",

// Document Properties
DocProps		: "Eginleikar fyri dokument",

// Anchor Dialog
DlgAnchorTitle		: "Eginleikar fyri marknastein",
DlgAnchorName		: "Heiti marknasteinsins",
DlgAnchorErrorName	: "Vinarliga rita marknasteinsins heiti",

// Speller Pages Dialog
DlgSpellNotInDic		: "Finst ikki 穩 or簸ab籀kini",
DlgSpellChangeTo		: "Broyt til",
DlgSpellBtnIgnore		: "Forfj籀na",
DlgSpellBtnIgnoreAll	: "Forfj籀na alt",
DlgSpellBtnReplace		: "Yvirskriva",
DlgSpellBtnReplaceAll	: "Yvirskriva alt",
DlgSpellBtnUndo			: "Angra",
DlgSpellNoSuggestions	: "- Einki uppskot -",
DlgSpellProgress		: "R疆ttstavarin arbei簸ir...",
DlgSpellNoMispell		: "R疆ttstavarain li簸ugur: Eingin feilur funnin",
DlgSpellNoChanges		: "R疆ttstavarain li簸ugur: Einki or簸 var簸 broytt",
DlgSpellOneChange		: "R疆ttstavarain li簸ugur: Eitt or簸 er broytt",
DlgSpellManyChanges		: "R疆ttstavarain li簸ugur: %1 or簸 broytt",

IeSpellDownload			: "R疆ttstavarin er ikki t繪kur 穩 tekstvi簸geranum. Vilt t繳 heinta hann n繳?",

// Button Dialog
DlgButtonText		: "Tekstur",
DlgButtonType		: "Slag",
DlgButtonTypeBtn	: "Kn繪ttur",
DlgButtonTypeSbm	: "Send",
DlgButtonTypeRst	: "Nullstilla",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Navn",
DlgCheckboxValue	: "Vir簸i",
DlgCheckboxSelected	: "Valt",

// Form Dialog
DlgFormName		: "Navn",
DlgFormAction	: "Hending",
DlgFormMethod	: "H獺ttur",

// Select Field Dialog
DlgSelectName		: "Navn",
DlgSelectValue		: "Vir簸i",
DlgSelectSize		: "St繪dd",
DlgSelectLines		: "Linjur",
DlgSelectChkMulti	: "Loyv fleiri valm繪guleikum samstundis",
DlgSelectOpAvail	: "T繪kir m繪guleikar",
DlgSelectOpText		: "Tekstur",
DlgSelectOpValue	: "Vir簸i",
DlgSelectBtnAdd		: "Legg afturat",
DlgSelectBtnModify	: "Broyt",
DlgSelectBtnUp		: "Upp",
DlgSelectBtnDown	: "Ni簸ur",
DlgSelectBtnSetValue : "Set sum valt vir簸i",
DlgSelectBtnDelete	: "Strika",

// Textarea Dialog
DlgTextareaName	: "Navn",
DlgTextareaCols	: "kolonnur",
DlgTextareaRows	: "r繪簸ir",

// Text Field Dialog
DlgTextName			: "Navn",
DlgTextValue		: "Vir簸i",
DlgTextCharWidth	: "Breidd (sj籀nlig tekn)",
DlgTextMaxChars		: "Mest loyvdu tekn",
DlgTextType			: "Slag",
DlgTextTypeText		: "Tekstur",
DlgTextTypePass		: "Loynior簸",

// Hidden Field Dialog
DlgHiddenName	: "Navn",
DlgHiddenValue	: "Vir簸i",

// Bulleted List Dialog
BulletedListProp	: "Eginleikar fyri punktmerktan lista",
NumberedListProp	: "Eginleikar fyri talmerktan lista",
DlgLstStart			: "Byrjan",
DlgLstType			: "Slag",
DlgLstTypeCircle	: "Sirkul",
DlgLstTypeDisc		: "Fyltur sirkul",
DlgLstTypeSquare	: "Fj籀rhyrningur",
DlgLstTypeNumbers	: "Talmerkt (1, 2, 3)",
DlgLstTypeLCase		: "Sm獺ir b籀kstavir (a, b, c)",
DlgLstTypeUCase		: "St籀rir b籀kstavir (A, B, C)",
DlgLstTypeSRoman	: "Sm獺 r籀marat繪l (i, ii, iii)",
DlgLstTypeLRoman	: "St籀r r籀marat繪l (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Generelt",
DlgDocBackTab		: "Bakgrund",
DlgDocColorsTab		: "Litir og breddar",
DlgDocMetaTab		: "META-uppl羸singar",

DlgDocPageTitle		: "S穩簸uheiti",
DlgDocLangDir		: "Tekstk籀s",
DlgDocLangDirLTR	: "Fr獺 vinstru m籀ti h繪gru (LTR)",
DlgDocLangDirRTL	: "Fr獺 h繪gru m籀ti vinstru (RTL)",
DlgDocLangCode		: "M獺lkoda",
DlgDocCharSet		: "Teknsett koda",
DlgDocCharSetCE		: "Mi簸europa",
DlgDocCharSetCT		: "Kinesiskt traditionelt (Big5)",
DlgDocCharSetCR		: "Cyrilliskt",
DlgDocCharSetGR		: "Grikst",
DlgDocCharSetJP		: "Japanskt",
DlgDocCharSetKR		: "Koreanskt",
DlgDocCharSetTR		: "Turkiskt",
DlgDocCharSetUN		: "UNICODE (UTF-8)",
DlgDocCharSetWE		: "Vestureuropa",
DlgDocCharSetOther	: "Onnur teknsett koda",

DlgDocDocType		: "Dokumentslag yvirskrift",
DlgDocDocTypeOther	: "Anna簸 dokumentslag yvirskrift",
DlgDocIncXHTML		: "Vi簸fest XHTML deklarati籀nir",
DlgDocBgColor		: "Bakgrundslitur",
DlgDocBgImage		: "Lei簸 til bakgrundsmynd (URL)",
DlgDocBgNoScroll	: "L疆st bakgrund (rullar ikki)",
DlgDocCText			: "Tekstur",
DlgDocCLink			: "Tilkn羸ti",
DlgDocCVisited		: "Vitja簸i tilkn羸ti",
DlgDocCActive		: "Virkin tilkn羸ti",
DlgDocMargins		: "S穩簸ubreddar",
DlgDocMaTop			: "Ovast",
DlgDocMaLeft		: "Vinstra",
DlgDocMaRight		: "H繪gra",
DlgDocMaBottom		: "Ni簸ast",
DlgDocMeIndex		: "Dokument index lyklaor簸 (sundurb羸tt vi簸 komma)",
DlgDocMeDescr		: "Dokumentl羸sing",
DlgDocMeAuthor		: "H繪vundur",
DlgDocMeCopy		: "Upphavsr疆ttindi",
DlgDocPreview		: "Frums羸ning",

// Templates Dialog
Templates			: "Skabel籀nir",
DlgTemplatesTitle	: "Innihaldsskabel籀nir",
DlgTemplatesSelMsg	: "Vinarliga vel ta skabel籀n, i簸 skal opnast 穩 tekstvi簸geranum<br>(Hetta yvirskrivar n繳verandi innihald):",
DlgTemplatesLoading	: "Heinti yvirlit yvir skabel籀nir. Vinarliga b穩簸a vi簸...",
DlgTemplatesNoTpl	: "(Ongar skabel籀nir t繪kar)",
DlgTemplatesReplace	: "Yvirskriva n繳verandi innihald",

// About Dialog
DlgAboutAboutTab	: "Um",
DlgAboutBrowserInfoTab	: "Uppl羸singar um aln籀tskagan",
DlgAboutLicenseTab	: "License",
DlgAboutVersion		: "version",
DlgAboutInfo		: "Fyri fleiri uppl羸singar, far til"
};
