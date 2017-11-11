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
 * Swedish language file.
 $Id: sv.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "D繹lj verktygsf瓣lt",
ToolbarExpand		: "Visa verktygsf瓣lt",

// Toolbar Items and Context Menu
Save				: "Spara",
NewPage				: "Ny sida",
Preview				: "F繹rhandsgranska",
Cut					: "Klipp ut",
Copy				: "Kopiera",
Paste				: "Klistra in",
PasteText			: "Klistra in som text",
PasteWord			: "Klistra in fr疇n Word",
Print				: "Skriv ut",
SelectAll			: "Markera allt",
RemoveFormat		: "Radera formatering",
InsertLinkLbl		: "L瓣nk",
InsertLink			: "Infoga/Redigera l瓣nk",
RemoveLink			: "Radera l瓣nk",
Anchor				: "Infoga/Redigera ankarl瓣nk",
InsertImageLbl		: "Bild",
InsertImage			: "Infoga/Redigera bild",
InsertFlashLbl		: "Flash",
InsertFlash			: "Infoga/Redigera Flash",
InsertTableLbl		: "Tabell",
InsertTable			: "Infoga/Redigera tabell",
InsertLineLbl		: "Linje",
InsertLine			: "Infoga horisontal linje",
InsertSpecialCharLbl: "Ut繹kade tecken",
InsertSpecialChar	: "Klistra in ut繹kat tecken",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Infoga Smiley",
About				: "Om FCKeditor",
Bold				: "Fet",
Italic				: "Kursiv",
Underline			: "Understruken",
StrikeThrough		: "Genomstruken",
Subscript			: "Neds瓣nkta tecken",
Superscript			: "Upph繹jda tecken",
LeftJustify			: "V瓣nsterjustera",
CenterJustify		: "Centrera",
RightJustify		: "H繹gerjustera",
BlockJustify		: "Justera till marginaler",
DecreaseIndent		: "Minska indrag",
IncreaseIndent		: "?ka indrag",
Undo				: "?ngra",
Redo				: "G繹r om",
NumberedListLbl		: "Numrerad lista",
NumberedList		: "Infoga/Radera numrerad lista",
BulletedListLbl		: "Punktlista",
BulletedList		: "Infoga/Radera punktlista",
ShowTableBorders	: "Visa tabellkant",
ShowDetails			: "Visa radbrytningar",
Style				: "Anpassad stil",
FontFormat			: "Teckenformat",
Font				: "Typsnitt",
FontSize			: "Storlek",
TextColor			: "Textf瓣rg",
BGColor				: "Bakgrundsf瓣rg",
Source				: "K瓣lla",
Find				: "S繹k",
Replace				: "Ers瓣tt",
SpellCheck			: "Stavningskontroll",
UniversalKeyboard	: "Universellt tangentbord",
PageBreakLbl		: "Sidbrytning",
PageBreak			: "Infoga sidbrytning",

Form			: "Formul瓣r",
Checkbox		: "Kryssruta",
RadioButton		: "Alternativknapp",
TextField		: "Textf瓣lt",
Textarea		: "Textruta",
HiddenField		: "Dolt f瓣lt",
Button			: "Knapp",
SelectionField	: "Flervalslista",
ImageButton		: "Bildknapp",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Redigera l瓣nk",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "Infoga rad",
DeleteRows			: "Radera rad",
InsertColumn		: "Infoga kolumn",
DeleteColumns		: "Radera kolumn",
InsertCell			: "Infoga cell",
DeleteCells			: "Radera celler",
MergeCells			: "Sammanfoga celler",
SplitCell			: "Separera celler",
TableDelete			: "Radera tabell",
CellProperties		: "Cellegenskaper",
TableProperties		: "Tabellegenskaper",
ImageProperties		: "Bildegenskaper",
FlashProperties		: "Flashegenskaper",

AnchorProp			: "Egenskaper f繹r ankarl瓣nk",
ButtonProp			: "Egenskaper f繹r knapp",
CheckboxProp		: "Egenskaper f繹r kryssruta",
HiddenFieldProp		: "Egenskaper f繹r dolt f瓣lt",
RadioButtonProp		: "Egenskaper f繹r alternativknapp",
ImageButtonProp		: "Egenskaper f繹r bildknapp",
TextFieldProp		: "Egenskaper f繹r textf瓣lt",
SelectionFieldProp	: "Egenskaper f繹r flervalslista",
TextareaProp		: "Egenskaper f繹r textruta",
FormProp			: "Egenskaper f繹r formul瓣r",

FontFormats			: "Normal;Formaterad;Adress;Rubrik 1;Rubrik 2;Rubrik 3;Rubrik 4;Rubrik 5;Rubrik 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Bearbetar XHTML. Var god v瓣nta...",
Done				: "Klar",
PasteWordConfirm	: "Texten du vill klistra in verkar vara kopierad fr疇n Word. Vill du rensa innan du klistar in?",
NotCompatiblePaste	: "Denna 疇tg瓣rd 瓣r inte tillg瓣ngligt f繹r Internet Explorer version 5.5 eller h繹gre. Vill du klistra in utan att rensa?",
UnknownToolbarItem	: "Ok瓣nt verktygsf瓣lt \"%1\"",
UnknownCommand		: "Ok瓣nt kommando \"%1\"",
NotImplemented		: "Kommandot finns ej",
UnknownToolbarSet	: "Verktygsf瓣lt \"%1\" finns ej",
NoActiveX			: "Din webl瓣sares s瓣kerhetsinst瓣llningar kan begr瓣nsa funktionaliteten. Du b繹r aktivera \"K繹r ActiveX kontroller och plug-ins\". Fel och avsaknad av funktioner kan annars uppst疇.",
BrowseServerBlocked : "Kunde Ej 繹ppna resursf繹nstret. Var god och avaktivera alla popup-blockerare.",
DialogBlocked		: "Kunde Ej 繹ppna dialogf繹nstret. Var god och avaktivera alla popup-blockerare.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Avbryt",
DlgBtnClose			: "St瓣ng",
DlgBtnBrowseServer	: "Bl瓣ddra p疇 server",
DlgAdvancedTag		: "Avancerad",
DlgOpOther			: "?vrigt",
DlgInfoTab			: "Information",
DlgAlertUrl			: "Var god och ange en URL",

// General Dialogs Labels
DlgGenNotSet		: "<ej angivet>",
DlgGenId			: "Id",
DlgGenLangDir		: "Spr疇kriktning",
DlgGenLangDirLtr	: "V瓣nster till H繹ger (VTH)",
DlgGenLangDirRtl	: "H繹ger till V瓣nster (HTV)",
DlgGenLangCode		: "Spr疇kkod",
DlgGenAccessKey		: "Beh繹righetsnyckel",
DlgGenName			: "Namn",
DlgGenTabIndex		: "Tabindex",
DlgGenLongDescr		: "URL-beskrivning",
DlgGenClass			: "Stylesheet class",
DlgGenTitle			: "Titel",
DlgGenContType		: "Inneh疇llstyp",
DlgGenLinkCharset	: "Teckenuppst瓣llning",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "Bildegenskaper",
DlgImgInfoTab		: "Bildinformation",
DlgImgBtnUpload		: "Skicka till server",
DlgImgURL			: "URL",
DlgImgUpload		: "Ladda upp",
DlgImgAlt			: "Alternativ text",
DlgImgWidth			: "Bredd",
DlgImgHeight		: "H繹jd",
DlgImgLockRatio		: "L疇s h繹jd/bredd f繹rh疇llanden",
DlgBtnResetSize		: "?terst瓣ll storlek",
DlgImgBorder		: "Kant",
DlgImgHSpace		: "Horis. marginal",
DlgImgVSpace		: "Vert. marginal",
DlgImgAlign			: "Justering",
DlgImgAlignLeft		: "V瓣nster",
DlgImgAlignAbsBottom: "Absolut nederkant",
DlgImgAlignAbsMiddle: "Absolut centrering",
DlgImgAlignBaseline	: "Baslinje",
DlgImgAlignBottom	: "Nederkant",
DlgImgAlignMiddle	: "Mitten",
DlgImgAlignRight	: "H繹ger",
DlgImgAlignTextTop	: "Text 繹verkant",
DlgImgAlignTop		: "?verkant",
DlgImgPreview		: "F繹rhandsgranska",
DlgImgAlertUrl		: "Var god och ange bildens URL",
DlgImgLinkTab		: "L瓣nk",

// Flash Dialog
DlgFlashTitle		: "Flashegenskaper",
DlgFlashChkPlay		: "Automatisk uppspelning",
DlgFlashChkLoop		: "Upprepa/Loopa",
DlgFlashChkMenu		: "Aktivera Flashmeny",
DlgFlashScale		: "Skala",
DlgFlashScaleAll	: "Visa allt",
DlgFlashScaleNoBorder	: "Ingen ram",
DlgFlashScaleFit	: "Exakt passning",

// Link Dialog
DlgLnkWindowTitle	: "L瓣nk",
DlgLnkInfoTab		: "L瓣nkinformation",
DlgLnkTargetTab		: "M疇l",

DlgLnkType			: "L瓣nktyp",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ankare i sidan",
DlgLnkTypeEMail		: "E-post",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<繹vrigt>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "V瓣lj ett ankare",
DlgLnkAnchorByName	: "efter ankarnamn",
DlgLnkAnchorById	: "efter objektid",
DlgLnkNoAnchors		: "<Inga ankare kunde hittas>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-postadress",
DlgLnkEMailSubject	: "?mne",
DlgLnkEMailBody		: "Inneh疇ll",
DlgLnkUpload		: "Ladda upp",
DlgLnkBtnUpload		: "Skicka till servern",

DlgLnkTarget		: "M疇l",
DlgLnkTargetFrame	: "<ram>",
DlgLnkTargetPopup	: "<popup-f繹nster>",
DlgLnkTargetBlank	: "Nytt f繹nster (_blank)",
DlgLnkTargetParent	: "F繹reg疇ende Window (_parent)",
DlgLnkTargetSelf	: "Detta f繹nstret (_self)",
DlgLnkTargetTop		: "?versta f繹nstret (_top)",
DlgLnkTargetFrameName	: "M疇lets ramnamn",
DlgLnkPopWinName	: "Popup-f繹nstrets namn",
DlgLnkPopWinFeat	: "Popup-f繹nstrets egenskaper",
DlgLnkPopResize		: "Kan 瓣ndra storlek",
DlgLnkPopLocation	: "Adressf瓣lt",
DlgLnkPopMenu		: "Menyf瓣lt",
DlgLnkPopScroll		: "Scrolllista",
DlgLnkPopStatus		: "Statusf瓣lt",
DlgLnkPopToolbar	: "Verktygsf瓣lt",
DlgLnkPopFullScrn	: "Helsk瓣rm (endast IE)",
DlgLnkPopDependent	: "Beroende (endest Netscape)",
DlgLnkPopWidth		: "Bredd",
DlgLnkPopHeight		: "H繹jd",
DlgLnkPopLeft		: "Position fr疇n v瓣nster",
DlgLnkPopTop		: "Position fr疇n sidans topp",

DlnLnkMsgNoUrl		: "Var god ange l瓣nkens URL",
DlnLnkMsgNoEMail	: "Var god ange E-postadress",
DlnLnkMsgNoAnchor	: "Var god ange ett ankare",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "V瓣lj f瓣rg",
DlgColorBtnClear	: "Rensa",
DlgColorHighlight	: "Markera",
DlgColorSelected	: "Vald",

// Smiley Dialog
DlgSmileyTitle		: "Infoga smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "V瓣lj ut繹kat tecken",

// Table Dialog
DlgTableTitle		: "Tabellegenskaper",
DlgTableRows		: "Rader",
DlgTableColumns		: "Kolumner",
DlgTableBorder		: "Kantstorlek",
DlgTableAlign		: "Justering",
DlgTableAlignNotSet	: "<ej angivet>",
DlgTableAlignLeft	: "V瓣nster",
DlgTableAlignCenter	: "Centrerad",
DlgTableAlignRight	: "H繹ger",
DlgTableWidth		: "Bredd",
DlgTableWidthPx		: "pixlar",
DlgTableWidthPc		: "procent",
DlgTableHeight		: "H繹jd",
DlgTableCellSpace	: "Cellavst疇nd",
DlgTableCellPad		: "Cellutfyllnad",
DlgTableCaption		: "Rubrik",
DlgTableSummary		: "Sammanfattning",

// Table Cell Dialog
DlgCellTitle		: "Cellegenskaper",
DlgCellWidth		: "Bredd",
DlgCellWidthPx		: "pixlar",
DlgCellWidthPc		: "procent",
DlgCellHeight		: "H繹jd",
DlgCellWordWrap		: "Automatisk radbrytning",
DlgCellWordWrapNotSet	: "<Ej angivet>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nej",
DlgCellHorAlign		: "Horisontal justering",
DlgCellHorAlignNotSet	: "<Ej angivet>",
DlgCellHorAlignLeft	: "V瓣nster",
DlgCellHorAlignCenter	: "Centrerad",
DlgCellHorAlignRight: "H繹ger",
DlgCellVerAlign		: "Vertikal justering",
DlgCellVerAlignNotSet	: "<Ej angivet>",
DlgCellVerAlignTop	: "Topp",
DlgCellVerAlignMiddle	: "Mitten",
DlgCellVerAlignBottom	: "Nederkant",
DlgCellVerAlignBaseline	: "Underst",
DlgCellRowSpan		: "Radomf疇ng",
DlgCellCollSpan		: "Kolumnomf疇ng",
DlgCellBackColor	: "Bakgrundsf瓣rg",
DlgCellBorderColor	: "Kantf瓣rg",
DlgCellBtnSelect	: "V瓣lj...",

// Find Dialog
DlgFindTitle		: "S繹k",
DlgFindFindBtn		: "S繹k",
DlgFindNotFoundMsg	: "Angiven text kunde ej hittas.",

// Replace Dialog
DlgReplaceTitle			: "Ers瓣tt",
DlgReplaceFindLbl		: "S繹k efter:",
DlgReplaceReplaceLbl	: "Ers瓣tt med:",
DlgReplaceCaseChk		: "Skiftl瓣ge",
DlgReplaceReplaceBtn	: "Ers瓣tt",
DlgReplaceReplAllBtn	: "Ers瓣tt alla",
DlgReplaceWordChk		: "Inkludera hela ord",

// Paste Operations / Dialog
PasteErrorCut	: "S瓣kerhetsinst瓣llningar i Er webl瓣sare till疇ter inte 疇tg疇rden Klipp ut. Anv瓣nd (Ctrl+X) ist瓣llet.",
PasteErrorCopy	: "S瓣kerhetsinst瓣llningar i Er webl瓣sare till疇ter inte 疇tg疇rden Kopiera. Anv瓣nd (Ctrl+C) ist瓣llet",

PasteAsText		: "Klistra in som vanlig text",
PasteFromWord	: "Klistra in fr疇n Word",

DlgPasteMsg2	: "Var god och klistra in Er text i rutan nedan genom att anv瓣nda (<STRONG>Ctrl+V</STRONG>) klicka sen p疇 <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorera typsnittsdefinitioner",
DlgPasteRemoveStyles	: "Radera Stildefinitioner",
DlgPasteCleanBox		: "T繹m rutans inneh疇ll",

// Color Picker
ColorAutomatic	: "Automatisk",
ColorMoreColors	: "Fler f瓣rger...",

// Document Properties
DocProps		: "Dokumentegenskaper",

// Anchor Dialog
DlgAnchorTitle		: "Ankaregenskaper",
DlgAnchorName		: "Ankarnamn",
DlgAnchorErrorName	: "Var god ange ett ankarnamn",

// Speller Pages Dialog
DlgSpellNotInDic		: "Saknas i ordlistan",
DlgSpellChangeTo		: "?ndra till",
DlgSpellBtnIgnore		: "Ignorera",
DlgSpellBtnIgnoreAll	: "Ignorera alla",
DlgSpellBtnReplace		: "Ers瓣tt",
DlgSpellBtnReplaceAll	: "Ers瓣tt alla",
DlgSpellBtnUndo			: "?ngra",
DlgSpellNoSuggestions	: "- F繹rslag saknas -",
DlgSpellProgress		: "Stavningskontroll p疇g疇r...",
DlgSpellNoMispell		: "Stavningskontroll slutf繹rd: Inga stavfel p疇tr瓣ffades.",
DlgSpellNoChanges		: "Stavningskontroll slutf繹rd: Inga ord r瓣ttades.",
DlgSpellOneChange		: "Stavningskontroll slutf繹rd: Ett ord r瓣ttades.",
DlgSpellManyChanges		: "Stavningskontroll slutf繹rd: %1 ord r瓣ttades.",

IeSpellDownload			: "Stavningskontrollen 瓣r ej installerad. Vill du g繹ra det nu?",

// Button Dialog
DlgButtonText		: "Text (V瓣rde)",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Namn",
DlgCheckboxValue	: "V瓣rde",
DlgCheckboxSelected	: "Vald",

// Form Dialog
DlgFormName		: "Namn",
DlgFormAction	: "Funktion",
DlgFormMethod	: "Metod",

// Select Field Dialog
DlgSelectName		: "Namn",
DlgSelectValue		: "V瓣rde",
DlgSelectSize		: "Storlek",
DlgSelectLines		: "Linjer",
DlgSelectChkMulti	: "Till疇t flerval",
DlgSelectOpAvail	: "Befintliga val",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "V瓣rde",
DlgSelectBtnAdd		: "L瓣gg till",
DlgSelectBtnModify	: "Redigera",
DlgSelectBtnUp		: "Upp",
DlgSelectBtnDown	: "Ner",
DlgSelectBtnSetValue : "Markera som valt v瓣rde",
DlgSelectBtnDelete	: "Radera",

// Textarea Dialog
DlgTextareaName	: "Namn",
DlgTextareaCols	: "Kolumner",
DlgTextareaRows	: "Rader",

// Text Field Dialog
DlgTextName			: "Namn",
DlgTextValue		: "V瓣rde",
DlgTextCharWidth	: "Teckenbredd",
DlgTextMaxChars		: "Max antal tecken",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "L繹senord",

// Hidden Field Dialog
DlgHiddenName	: "Namn",
DlgHiddenValue	: "V瓣rde",

// Bulleted List Dialog
BulletedListProp	: "Egenskaper f繹r punktlista",
NumberedListProp	: "Egenskaper f繹r numrerad lista",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Cirkel",
DlgLstTypeDisc		: "Punkt",
DlgLstTypeSquare	: "Ruta",
DlgLstTypeNumbers	: "Nummer (1, 2, 3)",
DlgLstTypeLCase		: "Gemener (a, b, c)",
DlgLstTypeUCase		: "Versaler (A, B, C)",
DlgLstTypeSRoman	: "Sm疇 romerska siffror (i, ii, iii)",
DlgLstTypeLRoman	: "Stora romerska siffror (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Allm瓣n",
DlgDocBackTab		: "Bakgrund",
DlgDocColorsTab		: "F瓣rg och marginal",
DlgDocMetaTab		: "Metadata",

DlgDocPageTitle		: "Sidtitel",
DlgDocLangDir		: "Spr疇kriktning",
DlgDocLangDirLTR	: "V瓣nster till H繹ger",
DlgDocLangDirRTL	: "H繹ger till V瓣nster",
DlgDocLangCode		: "Spr疇kkod",
DlgDocCharSet		: "Teckenupps瓣ttningar",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "?vriga teckenupps瓣ttningar",

DlgDocDocType		: "Sidhuvud",
DlgDocDocTypeOther	: "?vriga sidhuvuden",
DlgDocIncXHTML		: "Inkludera XHTML deklaration",
DlgDocBgColor		: "Bakgrundsf瓣rg",
DlgDocBgImage		: "Bakgrundsbildens URL",
DlgDocBgNoScroll	: "Fast bakgrund",
DlgDocCText			: "Text",
DlgDocCLink			: "L瓣nk",
DlgDocCVisited		: "Bes繹kt l瓣nk",
DlgDocCActive		: "Aktiv l瓣nk",
DlgDocMargins		: "Sidmarginal",
DlgDocMaTop			: "Topp",
DlgDocMaLeft		: "V瓣nster",
DlgDocMaRight		: "H繹ger",
DlgDocMaBottom		: "Botten",
DlgDocMeIndex		: "Sidans nyckelord",
DlgDocMeDescr		: "Sidans beskrivning",
DlgDocMeAuthor		: "F繹rfattare",
DlgDocMeCopy		: "Upphovsr瓣tt",
DlgDocPreview		: "F繹rhandsgranska",

// Templates Dialog
Templates			: "Sidmallar",
DlgTemplatesTitle	: "Sidmallar",
DlgTemplatesSelMsg	: "Var god v瓣lj en mall att anv瓣nda med editorn<br>(allt nuvarande inneh疇ll raderas):",
DlgTemplatesLoading	: "Laddar mallar. Var god v瓣nta...",
DlgTemplatesNoTpl	: "(Ingen mall 瓣r vald)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Om",
DlgAboutBrowserInfoTab	: "Webl瓣sare",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "version",
DlgAboutInfo		: "F繹r mer information se"
};
