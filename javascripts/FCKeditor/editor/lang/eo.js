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
 * Esperanto language file.
 $Id: eo.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Ka?i Ilobreton",
ToolbarExpand		: "Vidigi Ilojn",

// Toolbar Items and Context Menu
Save				: "Sekurigi",
NewPage				: "Nova Pa?o",
Preview				: "Vidigi Aspekton",
Cut					: "Eltondi",
Copy				: "Kopii",
Paste				: "Interglui",
PasteText			: "Interglui kiel Tekston",
PasteWord			: "Interglui el Word",
Print				: "Presi",
SelectAll			: "Elekti ?ion",
RemoveFormat		: "Forigi Formaton",
InsertLinkLbl		: "Ligilo",
InsertLink			: "Enmeti/?an?i Ligilon",
RemoveLink			: "Forigi Ligilon",
Anchor				: "Enmeti/?an?i Ankron",
InsertImageLbl		: "Bildo",
InsertImage			: "Enmeti/?an?i Bildon",
InsertFlashLbl		: "Flash",	//MISSING
InsertFlash			: "Insert/Edit Flash",	//MISSING
InsertTableLbl		: "Tabelo",
InsertTable			: "Enmeti/?an?i Tabelon",
InsertLineLbl		: "Horizonta Linio",
InsertLine			: "Enmeti Horizonta Linio",
InsertSpecialCharLbl: "Speciala Signo",
InsertSpecialChar	: "Enmeti Specialan Signon",
InsertSmileyLbl		: "Mienvinjeto",
InsertSmiley		: "Enmeti Mienvinjeton",
About				: "Pri FCKeditor",
Bold				: "Grasa",
Italic				: "Kursiva",
Underline			: "Substreko",
StrikeThrough		: "Trastreko",
Subscript			: "Subskribo",
Superscript			: "Superskribo",
LeftJustify			: "Maldekstrigi",
CenterJustify		: "Centrigi",
RightJustify		: "Dekstrigi",
BlockJustify		: "?israndigi Amba躑flanke",
DecreaseIndent		: "Malpligrandigi Krommar?enon",
IncreaseIndent		: "Pligrandigi Krommar?enon",
Undo				: "Malfari",
Redo				: "Refari",
NumberedListLbl		: "Numera Listo",
NumberedList		: "Enmeti/Forigi Numeran Liston",
BulletedListLbl		: "Bula Listo",
BulletedList		: "Enmeti/Forigi Bulan Liston",
ShowTableBorders	: "Vidigi Borderojn de Tabelo",
ShowDetails			: "Vidigi Detalojn",
Style				: "Stilo",
FontFormat			: "Formato",
Font				: "Tiparo",
FontSize			: "Grando",
TextColor			: "Teksta Koloro",
BGColor				: "Fona Koloro",
Source				: "Fonto",
Find				: "Ser?i",
Replace				: "Anstata躑igi",
SpellCheck			: "Literumada Kontrolilo",
UniversalKeyboard	: "Universala Klavaro",
PageBreakLbl		: "Page Break",	//MISSING
PageBreak			: "Insert Page Break",	//MISSING

Form			: "Formularo",
Checkbox		: "Markobutono",
RadioButton		: "Radiobutono",
TextField		: "Teksta kampo",
Textarea		: "Teksta Areo",
HiddenField		: "Ka?ita Kampo",
Button			: "Butono",
SelectionField	: "Elekta Kampo",
ImageButton		: "Bildbutono",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Modifier Ligilon",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "Enmeti Linion",
DeleteRows			: "Forigi Liniojn",
InsertColumn		: "Enmeti Kolumnon",
DeleteColumns		: "Forigi Kolumnojn",
InsertCell			: "Enmeti ?elon",
DeleteCells			: "Forigi ?elojn",
MergeCells			: "Kunfandi ?elojn",
SplitCell			: "Dividi ?elojn",
TableDelete			: "Delete Table",	//MISSING
CellProperties		: "Atributoj de ?elo",
TableProperties		: "Atributoj de Tabelo",
ImageProperties		: "Atributoj de Bildo",
FlashProperties		: "Flash Properties",	//MISSING

AnchorProp			: "Ankraj Atributoj",
ButtonProp			: "Butonaj Atributoj",
CheckboxProp		: "Markobutonaj Atributoj",
HiddenFieldProp		: "Atributoj de Ka?ita Kampo",
RadioButtonProp		: "Radiobutonaj Atributoj",
ImageButtonProp		: "Bildbutonaj Atributoj",
TextFieldProp		: "Atributoj de Teksta Kampo",
SelectionFieldProp	: "Atributoj de Elekta Kampo",
TextareaProp		: "Atributoj de Teksta Areo",
FormProp			: "Formularaj Atributoj",

FontFormats			: "Normala;Formatita;Adreso;Titolo 1;Titolo 2;Titolo 3;Titolo 4;Titolo 5;Titolo 6;Paragrafo (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Traktado de XHTML. Bonvolu pacienci...",
Done				: "Finita",
PasteWordConfirm	: "La algluota teksto ?ajnas esti Word-devena. ?u vi volas purigi ?in anta躑 ol interglui?",
NotCompatiblePaste	: "Tiu ?i komando bezonas almena躑 Internet Explorer 5.5. ?u vi volas da躑rigi sen purigado?",
UnknownToolbarItem	: "Ilobretero nekonata \"%1\"",
UnknownCommand		: "Komandonomo nekonata \"%1\"",
NotImplemented		: "Komando ne ankora躑 realigita",
UnknownToolbarSet	: "La ilobreto \"%1\" ne ekzistas",
NoActiveX			: "Your browser's security settings could limit some features of the editor. You must enable the option \"Run ActiveX controls and plug-ins\". You may experience errors and notice missing features.",	//MISSING
BrowseServerBlocked : "The resources browser could not be opened. Make sure that all popup blockers are disabled.",	//MISSING
DialogBlocked		: "It was not possible to open the dialog window. Make sure all popup blockers are disabled.",	//MISSING

// Dialogs
DlgBtnOK			: "Akcepti",
DlgBtnCancel		: "Rezigni",
DlgBtnClose			: "Fermi",
DlgBtnBrowseServer	: "Foliumi en la Servilo",
DlgAdvancedTag		: "Speciala",
DlgOpOther			: "<Alia>",
DlgInfoTab			: "Info",	//MISSING
DlgAlertUrl			: "Please insert the URL",	//MISSING

// General Dialogs Labels
DlgGenNotSet		: "<Defa躑lta>",
DlgGenId			: "Id",
DlgGenLangDir		: "Skribdirekto",
DlgGenLangDirLtr	: "De maldekstro dekstren (LTR)",
DlgGenLangDirRtl	: "De dekstro maldekstren (RTL)",
DlgGenLangCode		: "Lingva Kodo",
DlgGenAccessKey		: "Fulmoklavo",
DlgGenName			: "Nomo",
DlgGenTabIndex		: "Taba Ordo",
DlgGenLongDescr		: "URL de Longa Priskribo",
DlgGenClass			: "Klasoj de Stilfolioj",
DlgGenTitle			: "Indika Titolo",
DlgGenContType		: "Indika Enhavotipo",
DlgGenLinkCharset	: "Signaro de la Ligita Rimedo",
DlgGenStyle			: "Stilo",

// Image Dialog
DlgImgTitle			: "Atributoj de Bildo",
DlgImgInfoTab		: "Informoj pri Bildo",
DlgImgBtnUpload		: "Sendu al Servilo",
DlgImgURL			: "URL",
DlgImgUpload		: "Al?uti",
DlgImgAlt			: "Anstata躑iga Teksto",
DlgImgWidth			: "Lar?o",
DlgImgHeight		: "Alto",
DlgImgLockRatio		: "Konservi Proporcion",
DlgBtnResetSize		: "Origina Grando",
DlgImgBorder		: "Bordero",
DlgImgHSpace		: "HSpaco",
DlgImgVSpace		: "VSpaco",
DlgImgAlign			: "?israndigo",
DlgImgAlignLeft		: "Maldekstre",
DlgImgAlignAbsBottom: "Abs Malsupre",
DlgImgAlignAbsMiddle: "Abs Centre",
DlgImgAlignBaseline	: "Je Malsupro de Teksto",
DlgImgAlignBottom	: "Malsupre",
DlgImgAlignMiddle	: "Centre",
DlgImgAlignRight	: "Dekstre",
DlgImgAlignTextTop	: "Je Supro de Teksto",
DlgImgAlignTop		: "Supre",
DlgImgPreview		: "Vidigi Aspekton",
DlgImgAlertUrl		: "Bonvolu tajpi la URL de la bildo",
DlgImgLinkTab		: "Link",	//MISSING

// Flash Dialog
DlgFlashTitle		: "Flash Properties",	//MISSING
DlgFlashChkPlay		: "Auto Play",	//MISSING
DlgFlashChkLoop		: "Loop",	//MISSING
DlgFlashChkMenu		: "Enable Flash Menu",	//MISSING
DlgFlashScale		: "Scale",	//MISSING
DlgFlashScaleAll	: "Show all",	//MISSING
DlgFlashScaleNoBorder	: "No Border",	//MISSING
DlgFlashScaleFit	: "Exact Fit",	//MISSING

// Link Dialog
DlgLnkWindowTitle	: "Ligilo",
DlgLnkInfoTab		: "Informoj pri la Ligilo",
DlgLnkTargetTab		: "Celo",

DlgLnkType			: "Tipo de Ligilo",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ankri en tiu ?i pa?o",
DlgLnkTypeEMail		: "Retpo?to",
DlgLnkProto			: "Protokolo",
DlgLnkProtoOther	: "<alia>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Elekti Ankron",
DlgLnkAnchorByName	: "Per Ankronomo",
DlgLnkAnchorById	: "Per Elementidentigilo",
DlgLnkNoAnchors		: "<Ne disponeblas ankroj en la dokumento>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Retadreso",
DlgLnkEMailSubject	: "Temlinio",
DlgLnkEMailBody		: "Mesa?a korpo",
DlgLnkUpload		: "Al?uti",
DlgLnkBtnUpload		: "Sendi al Servilo",

DlgLnkTarget		: "Celo",
DlgLnkTargetFrame	: "<kadro>",
DlgLnkTargetPopup	: "<?prucfenestro>",
DlgLnkTargetBlank	: "Nova Fenestro (_blank)",
DlgLnkTargetParent	: "Gepatra Fenestro (_parent)",
DlgLnkTargetSelf	: "Sama Fenestro (_self)",
DlgLnkTargetTop		: "Plej Supra Fenestro (_top)",
DlgLnkTargetFrameName	: "Nomo de Kadro",
DlgLnkPopWinName	: "Nomo de ?prucfenestro",
DlgLnkPopWinFeat	: "Atributoj de la ?prucfenestro",
DlgLnkPopResize		: "Grando ?an?ebla",
DlgLnkPopLocation	: "Adresobreto",
DlgLnkPopMenu		: "Menubreto",
DlgLnkPopScroll		: "Rulumlisteloj",
DlgLnkPopStatus		: "Statobreto",
DlgLnkPopToolbar	: "Ilobreto",
DlgLnkPopFullScrn	: "Tutekrane (IE)",
DlgLnkPopDependent	: "Dependa (Netscape)",
DlgLnkPopWidth		: "Lar?o",
DlgLnkPopHeight		: "Alto",
DlgLnkPopLeft		: "Pozicio de Maldekstro",
DlgLnkPopTop		: "Pozicio de Supro",

DlnLnkMsgNoUrl		: "Bonvolu entajpi la URL-on",
DlnLnkMsgNoEMail	: "Bonvolu entajpi la retadreson",
DlnLnkMsgNoAnchor	: "Bonvolu elekti ankron",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Elekti",
DlgColorBtnClear	: "Forigi",
DlgColorHighlight	: "Emfazi",
DlgColorSelected	: "Elektita",

// Smiley Dialog
DlgSmileyTitle		: "Enmeti Mienvinjeton",

// Special Character Dialog
DlgSpecialCharTitle	: "Enmeti Specialan Signon",

// Table Dialog
DlgTableTitle		: "Atributoj de Tabelo",
DlgTableRows		: "Linioj",
DlgTableColumns		: "Kolumnoj",
DlgTableBorder		: "Bordero",
DlgTableAlign		: "?israndigo",
DlgTableAlignNotSet	: "<Defa躑lte>",
DlgTableAlignLeft	: "Maldekstre",
DlgTableAlignCenter	: "Centre",
DlgTableAlignRight	: "Dekstre",
DlgTableWidth		: "Lar?o",
DlgTableWidthPx		: "Bitbilderoj",
DlgTableWidthPc		: "elcentoj",
DlgTableHeight		: "Alto",
DlgTableCellSpace	: "Interspacigo de ?eloj",
DlgTableCellPad		: "?irka躑enhava Plenigado",
DlgTableCaption		: "Titolo",
DlgTableSummary		: "Summary",	//MISSING

// Table Cell Dialog
DlgCellTitle		: "Atributoj de Celo",
DlgCellWidth		: "Lar?o",
DlgCellWidthPx		: "bitbilderoj",
DlgCellWidthPc		: "elcentoj",
DlgCellHeight		: "Alto",
DlgCellWordWrap		: "Linifaldo",
DlgCellWordWrapNotSet	: "<Defa躑lte>",
DlgCellWordWrapYes	: "Jes",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Horizonta ?israndigo",
DlgCellHorAlignNotSet	: "<Defa躑lte>",
DlgCellHorAlignLeft	: "Maldekstre",
DlgCellHorAlignCenter	: "Centre",
DlgCellHorAlignRight: "Dekstre",
DlgCellVerAlign		: "Vertikala ?israndigo",
DlgCellVerAlignNotSet	: "<Defa躑lte>",
DlgCellVerAlignTop	: "Supre",
DlgCellVerAlignMiddle	: "Centre",
DlgCellVerAlignBottom	: "Malsupre",
DlgCellVerAlignBaseline	: "Je Malsupro de Teksto",
DlgCellRowSpan		: "Linioj Kunfanditaj",
DlgCellCollSpan		: "Kolumnoj Kunfanditaj",
DlgCellBackColor	: "Fono",
DlgCellBorderColor	: "Bordero",
DlgCellBtnSelect	: "Elekti...",

// Find Dialog
DlgFindTitle		: "Ser?i",
DlgFindFindBtn		: "Ser?i",
DlgFindNotFoundMsg	: "La celteksto ne estas trovita.",

// Replace Dialog
DlgReplaceTitle			: "Anstata躑igi",
DlgReplaceFindLbl		: "Ser?i:",
DlgReplaceReplaceLbl	: "Anstata躑igi per:",
DlgReplaceCaseChk		: "Kongruigi Usklecon",
DlgReplaceReplaceBtn	: "Anstata躑igi",
DlgReplaceReplAllBtn	: "Anstata躑igi ?iun",
DlgReplaceWordChk		: "Tuta Vorto",

// Paste Operations / Dialog
PasteErrorCut	: "La sekurecagordo de via TTT-legilo ne permesas, ke la redaktilo faras eltondajn operaciojn. Bonvolu uzi la klavaron por tio (ctrl-X).",
PasteErrorCopy	: "La sekurecagordo de via TTT-legilo ne permesas, ke la redaktilo faras kopiajn operaciojn. Bonvolu uzi la klavaron por tio (ctrl-C).",

PasteAsText		: "Interglui kiel Tekston",
PasteFromWord	: "Interglui el Word",

DlgPasteMsg2	: "Please paste inside the following box using the keyboard (<strong>Ctrl+V</strong>) and hit <strong>OK</strong>.",	//MISSING
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignore Font Face definitions",	//MISSING
DlgPasteRemoveStyles	: "Remove Styles definitions",	//MISSING
DlgPasteCleanBox		: "Clean Up Box",	//MISSING

// Color Picker
ColorAutomatic	: "A躑tomata",
ColorMoreColors	: "Pli da Koloroj...",

// Document Properties
DocProps		: "Dokumentaj Atributoj",

// Anchor Dialog
DlgAnchorTitle		: "Ankraj Atributoj",
DlgAnchorName		: "Ankra Nomo",
DlgAnchorErrorName	: "Bv tajpi la ankran nomon",

// Speller Pages Dialog
DlgSpellNotInDic		: "Ne trovita en la vortaro",
DlgSpellChangeTo		: "?an?i al",
DlgSpellBtnIgnore		: "Malatenti",
DlgSpellBtnIgnoreAll	: "Malatenti ?iun",
DlgSpellBtnReplace		: "Anstata躑igi",
DlgSpellBtnReplaceAll	: "Anstata躑igi ?iun",
DlgSpellBtnUndo			: "Malfari",
DlgSpellNoSuggestions	: "- Neniu propono -",
DlgSpellProgress		: "Literumkontrolado da躑ras...",
DlgSpellNoMispell		: "Literumkontrolado finita: neniu fu?o trovita",
DlgSpellNoChanges		: "Literumkontrolado finita: neniu vorto ?an?ita",
DlgSpellOneChange		: "Literumkontrolado finita: unu vorto ?an?ita",
DlgSpellManyChanges		: "Literumkontrolado finita: %1 vortoj ?an?itaj",

IeSpellDownload			: "Literumada Kontrolilo ne instalita. ?u vi volas el?uti ?in nun?",

// Button Dialog
DlgButtonText		: "Teksto (Valoro)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nomo",
DlgCheckboxValue	: "Valoro",
DlgCheckboxSelected	: "Elektita",

// Form Dialog
DlgFormName		: "Nomo",
DlgFormAction	: "Ago",
DlgFormMethod	: "Metodo",

// Select Field Dialog
DlgSelectName		: "Nomo",
DlgSelectValue		: "Valoro",
DlgSelectSize		: "Grando",
DlgSelectLines		: "Linioj",
DlgSelectChkMulti	: "Permesi Plurajn Elektojn",
DlgSelectOpAvail	: "Elektoj Disponeblaj",
DlgSelectOpText		: "Teksto",
DlgSelectOpValue	: "Valoro",
DlgSelectBtnAdd		: "Aldoni",
DlgSelectBtnModify	: "Modifi",
DlgSelectBtnUp		: "Supren",
DlgSelectBtnDown	: "Malsupren",
DlgSelectBtnSetValue : "Agordi kiel Elektitan Valoron",
DlgSelectBtnDelete	: "Forigi",

// Textarea Dialog
DlgTextareaName	: "Nomo",
DlgTextareaCols	: "Kolumnoj",
DlgTextareaRows	: "Vicoj",

// Text Field Dialog
DlgTextName			: "Nomo",
DlgTextValue		: "Valoro",
DlgTextCharWidth	: "Signolar?o",
DlgTextMaxChars		: "Maksimuma Nombro da Signoj",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Teksto",
DlgTextTypePass		: "Pasvorto",

// Hidden Field Dialog
DlgHiddenName	: "Nomo",
DlgHiddenValue	: "Valoro",

// Bulleted List Dialog
BulletedListProp	: "Atributoj de Bula Listo",
NumberedListProp	: "Atributoj de Numera Listo",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "Cirklo",
DlgLstTypeDisc		: "Disc",	//MISSING
DlgLstTypeSquare	: "Kvadrato",
DlgLstTypeNumbers	: "Ciferoj (1, 2, 3)",
DlgLstTypeLCase		: "Minusklaj Literoj (a, b, c)",
DlgLstTypeUCase		: "Majusklaj Literoj (A, B, C)",
DlgLstTypeSRoman	: "Malgrandaj Romanaj Ciferoj (i, ii, iii)",
DlgLstTypeLRoman	: "Grandaj Romanaj Ciferoj (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "?enerala警oj",
DlgDocBackTab		: "Fono",
DlgDocColorsTab		: "Koloroj kaj Mar?enoj",
DlgDocMetaTab		: "Metadatumoj",

DlgDocPageTitle		: "Pa?otitolo",
DlgDocLangDir		: "Skribdirekto de la Lingvo",
DlgDocLangDirLTR	: "De maldekstro dekstren (LTR)",
DlgDocLangDirRTL	: "De dekstro maldekstren (LTR)",
DlgDocLangCode		: "Lingvokodo",
DlgDocCharSet		: "Signara Kodo",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Alia Signara Kodo",

DlgDocDocType		: "Dokumenta Tipo",
DlgDocDocTypeOther	: "Alia Dokumenta Tipo",
DlgDocIncXHTML		: "Inkluzivi XHTML Deklaroj",
DlgDocBgColor		: "Fona Koloro",
DlgDocBgImage		: "URL de Fona Bildo",
DlgDocBgNoScroll	: "Neruluma Fono",
DlgDocCText			: "Teksto",
DlgDocCLink			: "Ligilo",
DlgDocCVisited		: "Vizitita Ligilo",
DlgDocCActive		: "Aktiva Ligilo",
DlgDocMargins		: "Pa?aj Mar?enoj",
DlgDocMaTop			: "Supra",
DlgDocMaLeft		: "Maldekstra",
DlgDocMaRight		: "Dekstra",
DlgDocMaBottom		: "Malsupra",
DlgDocMeIndex		: "?losilvortoj de la Dokumento (apartigita de komoj)",
DlgDocMeDescr		: "Dokumenta Priskribo",
DlgDocMeAuthor		: "Verkinto",
DlgDocMeCopy		: "Kopirajto",
DlgDocPreview		: "Aspekto",

// Templates Dialog
Templates			: "Templates",	//MISSING
DlgTemplatesTitle	: "Content Templates",	//MISSING
DlgTemplatesSelMsg	: "Please select the template to open in the editor<br />(the actual contents will be lost):",	//MISSING
DlgTemplatesLoading	: "Loading templates list. Please wait...",	//MISSING
DlgTemplatesNoTpl	: "(No templates defined)",	//MISSING
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Pri",
DlgAboutBrowserInfoTab	: "Informoj pri TTT-legilo",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "versio",
DlgAboutInfo		: "Por pli da informoj, vizitu"
};
