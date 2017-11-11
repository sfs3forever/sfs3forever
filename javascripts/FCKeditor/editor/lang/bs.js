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
 * Bosnian language file.
 $Id: bs.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Skupi trake sa alatima",
ToolbarExpand		: "Otvori trake sa alatima",

// Toolbar Items and Context Menu
Save				: "Snimi",
NewPage				: "Novi dokument",
Preview				: "Prika鱉i",
Cut					: "Izre鱉i",
Copy				: "Kopiraj",
Paste				: "Zalijepi",
PasteText			: "Zalijepi kao obi癡an tekst",
PasteWord			: "Zalijepi iz Word-a",
Print				: "?tampaj",
SelectAll			: "Selektuj sve",
RemoveFormat		: "Poni禳ti format",
InsertLinkLbl		: "Link",
InsertLink			: "Ubaci/Izmjeni link",
RemoveLink			: "Izbri禳i link",
Anchor				: "Insert/Edit Anchor",	//MISSING
InsertImageLbl		: "Slika",
InsertImage			: "Ubaci/Izmjeni sliku",
InsertFlashLbl		: "Flash",	//MISSING
InsertFlash			: "Insert/Edit Flash",	//MISSING
InsertTableLbl		: "Tabela",
InsertTable			: "Ubaci/Izmjeni tabelu",
InsertLineLbl		: "Linija",
InsertLine			: "Ubaci horizontalnu liniju",
InsertSpecialCharLbl: "Specijalni karakter",
InsertSpecialChar	: "Ubaci specijalni karater",
InsertSmileyLbl		: "Smje禳ko",
InsertSmiley		: "Ubaci smje禳ka",
About				: "O FCKeditor-u",
Bold				: "Boldiraj",
Italic				: "Ukosi",
Underline			: "Podvuci",
StrikeThrough		: "Precrtaj",
Subscript			: "Subscript",
Superscript			: "Superscript",
LeftJustify			: "Lijevo poravnanje",
CenterJustify		: "Centralno poravnanje",
RightJustify		: "Desno poravnanje",
BlockJustify		: "Puno poravnanje",
DecreaseIndent		: "Smanji uvod",
IncreaseIndent		: "Pove疆aj uvod",
Undo				: "Vrati",
Redo				: "Ponovi",
NumberedListLbl		: "Numerisana lista",
NumberedList		: "Ubaci/Izmjeni numerisanu listu",
BulletedListLbl		: "Lista",
BulletedList		: "Ubaci/Izmjeni listu",
ShowTableBorders	: "Poka鱉i okvire tabela",
ShowDetails			: "Poka鱉i detalje",
Style				: "Stil",
FontFormat			: "Format",
Font				: "Font",
FontSize			: "Veli癡ina",
TextColor			: "Boja teksta",
BGColor				: "Boja pozadine",
Source				: "HTML k繫d",
Find				: "Na簸i",
Replace				: "Zamjeni",
SpellCheck			: "Check Spelling",	//MISSING
UniversalKeyboard	: "Universal Keyboard",	//MISSING
PageBreakLbl		: "Page Break",	//MISSING
PageBreak			: "Insert Page Break",	//MISSING

Form			: "Form",	//MISSING
Checkbox		: "Checkbox",	//MISSING
RadioButton		: "Radio Button",	//MISSING
TextField		: "Text Field",	//MISSING
Textarea		: "Textarea",	//MISSING
HiddenField		: "Hidden Field",	//MISSING
Button			: "Button",	//MISSING
SelectionField	: "Selection Field",	//MISSING
ImageButton		: "Image Button",	//MISSING

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Izmjeni link",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "Ubaci red",
DeleteRows			: "Bri禳i redove",
InsertColumn		: "Ubaci kolonu",
DeleteColumns		: "Bri禳i kolone",
InsertCell			: "Ubaci 疆eliju",
DeleteCells			: "Bri禳i 疆elije",
MergeCells			: "Spoji 疆elije",
SplitCell			: "Razdvoji 疆eliju",
TableDelete			: "Delete Table",	//MISSING
CellProperties		: "Svojstva 疆elije",
TableProperties		: "Svojstva tabele",
ImageProperties		: "Svojstva slike",
FlashProperties		: "Flash Properties",	//MISSING

AnchorProp			: "Anchor Properties",	//MISSING
ButtonProp			: "Button Properties",	//MISSING
CheckboxProp		: "Checkbox Properties",	//MISSING
HiddenFieldProp		: "Hidden Field Properties",	//MISSING
RadioButtonProp		: "Radio Button Properties",	//MISSING
ImageButtonProp		: "Image Button Properties",	//MISSING
TextFieldProp		: "Text Field Properties",	//MISSING
SelectionFieldProp	: "Selection Field Properties",	//MISSING
TextareaProp		: "Textarea Properties",	//MISSING
FormProp			: "Form Properties",	//MISSING

FontFormats			: "Normal;Formatted;Address;Heading 1;Heading 2;Heading 3;Heading 4;Heading 5;Heading 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Procesiram XHTML. Molim sa癡ekajte...",
Done				: "Gotovo",
PasteWordConfirm	: "Tekst koji 鱉elite zalijepiti 癡ini se da je kopiran iz Worda. Da li 鱉elite da se prvo o癡isti?",
NotCompatiblePaste	: "Ova komanda je podr鱉ana u Internet Explorer-u verzijama 5.5 ili novijim. Da li 鱉elite da izvr禳ite lijepljenje teksta bez 癡i禳疆enja?",
UnknownToolbarItem	: "Nepoznata stavka sa trake sa alatima \"%1\"",
UnknownCommand		: "Nepoznata komanda \"%1\"",
NotImplemented		: "Komanda nije implementirana",
UnknownToolbarSet	: "Traka sa alatima \"%1\" ne postoji",
NoActiveX			: "Your browser's security settings could limit some features of the editor. You must enable the option \"Run ActiveX controls and plug-ins\". You may experience errors and notice missing features.",	//MISSING
BrowseServerBlocked : "The resources browser could not be opened. Make sure that all popup blockers are disabled.",	//MISSING
DialogBlocked		: "It was not possible to open the dialog window. Make sure all popup blockers are disabled.",	//MISSING

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Odustani",
DlgBtnClose			: "Zatvori",
DlgBtnBrowseServer	: "Browse Server",	//MISSING
DlgAdvancedTag		: "Naprednije",
DlgOpOther			: "<Other>",	//MISSING
DlgInfoTab			: "Info",	//MISSING
DlgAlertUrl			: "Please insert the URL",	//MISSING

// General Dialogs Labels
DlgGenNotSet		: "<nije pode禳eno>",
DlgGenId			: "Id",
DlgGenLangDir		: "Smjer pisanja",
DlgGenLangDirLtr	: "S lijeva na desno (LTR)",
DlgGenLangDirRtl	: "S desna na lijevo (RTL)",
DlgGenLangCode		: "Jezi癡ni k繫d",
DlgGenAccessKey		: "Pristupna tipka",
DlgGenName			: "Naziv",
DlgGenTabIndex		: "Tab indeks",
DlgGenLongDescr		: "Duga癡ki opis URL-a",
DlgGenClass			: "Klase CSS stilova",
DlgGenTitle			: "Advisory title",
DlgGenContType		: "Advisory vrsta sadr鱉aja",
DlgGenLinkCharset	: "Linked Resource Charset",
DlgGenStyle			: "Stil",

// Image Dialog
DlgImgTitle			: "Svojstva slike",
DlgImgInfoTab		: "Info slike",
DlgImgBtnUpload		: "?alji na server",
DlgImgURL			: "URL",
DlgImgUpload		: "?alji",
DlgImgAlt			: "Tekst na slici",
DlgImgWidth			: "?irina",
DlgImgHeight		: "Visina",
DlgImgLockRatio		: "Zaklju癡aj odnos",
DlgBtnResetSize		: "Resetuj dimenzije",
DlgImgBorder		: "Okvir",
DlgImgHSpace		: "HSpace",
DlgImgVSpace		: "VSpace",
DlgImgAlign			: "Poravnanje",
DlgImgAlignLeft		: "Lijevo",
DlgImgAlignAbsBottom: "Abs dole",
DlgImgAlignAbsMiddle: "Abs sredina",
DlgImgAlignBaseline	: "Bazno",
DlgImgAlignBottom	: "Dno",
DlgImgAlignMiddle	: "Sredina",
DlgImgAlignRight	: "Desno",
DlgImgAlignTextTop	: "Vrh teksta",
DlgImgAlignTop		: "Vrh",
DlgImgPreview		: "Prikaz",
DlgImgAlertUrl		: "Molimo ukucajte URL od slike.",
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
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Link info",
DlgLnkTargetTab		: "Prozor",

DlgLnkType			: "Tip linka",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Sidro na ovoj stranici",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<drugi>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Izaberi sidro",
DlgLnkAnchorByName	: "Po nazivu sidra",
DlgLnkAnchorById	: "Po Id-u elementa",
DlgLnkNoAnchors		: "<Nema dostupnih sidra na stranici>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-Mail Adresa",
DlgLnkEMailSubject	: "Subjekt poruke",
DlgLnkEMailBody		: "Poruka",
DlgLnkUpload		: "?alji",
DlgLnkBtnUpload		: "?alji na server",

DlgLnkTarget		: "Prozor",
DlgLnkTargetFrame	: "<frejm>",
DlgLnkTargetPopup	: "<popup prozor>",
DlgLnkTargetBlank	: "Novi prozor (_blank)",
DlgLnkTargetParent	: "Glavni prozor (_parent)",
DlgLnkTargetSelf	: "Isti prozor (_self)",
DlgLnkTargetTop		: "Najgornji prozor (_top)",
DlgLnkTargetFrameName	: "Target Frame Name",	//MISSING
DlgLnkPopWinName	: "Naziv popup prozora",
DlgLnkPopWinFeat	: "Mogu疆nosti popup prozora",
DlgLnkPopResize		: "Promjenljive veli癡ine",
DlgLnkPopLocation	: "Traka za lokaciju",
DlgLnkPopMenu		: "Izborna traka",
DlgLnkPopScroll		: "Scroll traka",
DlgLnkPopStatus		: "Statusna traka",
DlgLnkPopToolbar	: "Traka sa alatima",
DlgLnkPopFullScrn	: "Cijeli ekran (IE)",
DlgLnkPopDependent	: "Ovisno (Netscape)",
DlgLnkPopWidth		: "?irina",
DlgLnkPopHeight		: "Visina",
DlgLnkPopLeft		: "Lijeva pozicija",
DlgLnkPopTop		: "Gornja pozicija",

DlnLnkMsgNoUrl		: "Molimo ukucajte URL link",
DlnLnkMsgNoEMail	: "Molimo ukucajte e-mail adresu",
DlnLnkMsgNoAnchor	: "Molimo izaberite sidro",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Izaberi boju",
DlgColorBtnClear	: "O癡isti",
DlgColorHighlight	: "Igled",
DlgColorSelected	: "Selektovana",

// Smiley Dialog
DlgSmileyTitle		: "Ubaci smje禳ka",

// Special Character Dialog
DlgSpecialCharTitle	: "Izaberi specijalni karakter",

// Table Dialog
DlgTableTitle		: "Svojstva tabele",
DlgTableRows		: "Redova",
DlgTableColumns		: "Kolona",
DlgTableBorder		: "Okvir",
DlgTableAlign		: "Poravnanje",
DlgTableAlignNotSet	: "<Nije pode禳eno>",
DlgTableAlignLeft	: "Lijevo",
DlgTableAlignCenter	: "Centar",
DlgTableAlignRight	: "Desno",
DlgTableWidth		: "?irina",
DlgTableWidthPx		: "piksela",
DlgTableWidthPc		: "posto",
DlgTableHeight		: "Visina",
DlgTableCellSpace	: "Razmak 疆elija",
DlgTableCellPad		: "Uvod 疆elija",
DlgTableCaption		: "Naslov",
DlgTableSummary		: "Summary",	//MISSING

// Table Cell Dialog
DlgCellTitle		: "Svojstva 疆elije",
DlgCellWidth		: "?irina",
DlgCellWidthPx		: "piksela",
DlgCellWidthPc		: "posto",
DlgCellHeight		: "Visina",
DlgCellWordWrap		: "Vrapuj tekst",
DlgCellWordWrapNotSet	: "<Nije pode禳eno>",
DlgCellWordWrapYes	: "Da",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Horizontalno poravnanje",
DlgCellHorAlignNotSet	: "<Nije pode禳eno>",
DlgCellHorAlignLeft	: "Lijevo",
DlgCellHorAlignCenter	: "Centar",
DlgCellHorAlignRight: "Desno",
DlgCellVerAlign		: "Vertikalno poravnanje",
DlgCellVerAlignNotSet	: "<Nije pode禳eno>",
DlgCellVerAlignTop	: "Gore",
DlgCellVerAlignMiddle	: "Sredina",
DlgCellVerAlignBottom	: "Dno",
DlgCellVerAlignBaseline	: "Bazno",
DlgCellRowSpan		: "Spajanje 疆elija",
DlgCellCollSpan		: "Spajanje kolona",
DlgCellBackColor	: "Boja pozadine",
DlgCellBorderColor	: "Boja okvira",
DlgCellBtnSelect	: "Selektuj...",

// Find Dialog
DlgFindTitle		: "Na簸i",
DlgFindFindBtn		: "Na簸i",
DlgFindNotFoundMsg	: "Tra鱉eni tekst nije prona簸en.",

// Replace Dialog
DlgReplaceTitle			: "Zamjeni",
DlgReplaceFindLbl		: "Na簸i 禳ta:",
DlgReplaceReplaceLbl	: "Zamjeni sa:",
DlgReplaceCaseChk		: "Upore簸uj velika/mala slova",
DlgReplaceReplaceBtn	: "Zamjeni",
DlgReplaceReplAllBtn	: "Zamjeni sve",
DlgReplaceWordChk		: "Upore簸uj samo cijelu rije癡",

// Paste Operations / Dialog
PasteErrorCut	: "Sigurnosne postavke va禳eg pretra鱉iva癡a ne dozvoljavaju operacije automatskog rezanja. Molimo koristite kraticu na tastaturi (Ctrl+X).",
PasteErrorCopy	: "Sigurnosne postavke Va禳eg pretra鱉iva癡a ne dozvoljavaju operacije automatskog kopiranja. Molimo koristite kraticu na tastaturi (Ctrl+C).",

PasteAsText		: "Zalijepi kao obi癡an tekst",
PasteFromWord	: "Zalijepi iz Word-a",

DlgPasteMsg2	: "Please paste inside the following box using the keyboard (<strong>Ctrl+V</strong>) and hit <strong>OK</strong>.",	//MISSING
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignore Font Face definitions",	//MISSING
DlgPasteRemoveStyles	: "Remove Styles definitions",	//MISSING
DlgPasteCleanBox		: "Clean Up Box",	//MISSING

// Color Picker
ColorAutomatic	: "Automatska",
ColorMoreColors	: "Vi禳e boja...",

// Document Properties
DocProps		: "Document Properties",	//MISSING

// Anchor Dialog
DlgAnchorTitle		: "Anchor Properties",	//MISSING
DlgAnchorName		: "Anchor Name",	//MISSING
DlgAnchorErrorName	: "Please type the anchor name",	//MISSING

// Speller Pages Dialog
DlgSpellNotInDic		: "Not in dictionary",	//MISSING
DlgSpellChangeTo		: "Change to",	//MISSING
DlgSpellBtnIgnore		: "Ignore",	//MISSING
DlgSpellBtnIgnoreAll	: "Ignore All",	//MISSING
DlgSpellBtnReplace		: "Replace",	//MISSING
DlgSpellBtnReplaceAll	: "Replace All",	//MISSING
DlgSpellBtnUndo			: "Undo",	//MISSING
DlgSpellNoSuggestions	: "- No suggestions -",	//MISSING
DlgSpellProgress		: "Spell check in progress...",	//MISSING
DlgSpellNoMispell		: "Spell check complete: No misspellings found",	//MISSING
DlgSpellNoChanges		: "Spell check complete: No words changed",	//MISSING
DlgSpellOneChange		: "Spell check complete: One word changed",	//MISSING
DlgSpellManyChanges		: "Spell check complete: %1 words changed",	//MISSING

IeSpellDownload			: "Spell checker not installed. Do you want to download it now?",	//MISSING

// Button Dialog
DlgButtonText		: "Text (Value)",	//MISSING
DlgButtonType		: "Type",	//MISSING
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Name",	//MISSING
DlgCheckboxValue	: "Value",	//MISSING
DlgCheckboxSelected	: "Selected",	//MISSING

// Form Dialog
DlgFormName		: "Name",	//MISSING
DlgFormAction	: "Action",	//MISSING
DlgFormMethod	: "Method",	//MISSING

// Select Field Dialog
DlgSelectName		: "Name",	//MISSING
DlgSelectValue		: "Value",	//MISSING
DlgSelectSize		: "Size",	//MISSING
DlgSelectLines		: "lines",	//MISSING
DlgSelectChkMulti	: "Allow multiple selections",	//MISSING
DlgSelectOpAvail	: "Available Options",	//MISSING
DlgSelectOpText		: "Text",	//MISSING
DlgSelectOpValue	: "Value",	//MISSING
DlgSelectBtnAdd		: "Add",	//MISSING
DlgSelectBtnModify	: "Modify",	//MISSING
DlgSelectBtnUp		: "Up",	//MISSING
DlgSelectBtnDown	: "Down",	//MISSING
DlgSelectBtnSetValue : "Set as selected value",	//MISSING
DlgSelectBtnDelete	: "Delete",	//MISSING

// Textarea Dialog
DlgTextareaName	: "Name",	//MISSING
DlgTextareaCols	: "Columns",	//MISSING
DlgTextareaRows	: "Rows",	//MISSING

// Text Field Dialog
DlgTextName			: "Name",	//MISSING
DlgTextValue		: "Value",	//MISSING
DlgTextCharWidth	: "Character Width",	//MISSING
DlgTextMaxChars		: "Maximum Characters",	//MISSING
DlgTextType			: "Type",	//MISSING
DlgTextTypeText		: "Text",	//MISSING
DlgTextTypePass		: "Password",	//MISSING

// Hidden Field Dialog
DlgHiddenName	: "Name",	//MISSING
DlgHiddenValue	: "Value",	//MISSING

// Bulleted List Dialog
BulletedListProp	: "Bulleted List Properties",	//MISSING
NumberedListProp	: "Numbered List Properties",	//MISSING
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Type",	//MISSING
DlgLstTypeCircle	: "Circle",	//MISSING
DlgLstTypeDisc		: "Disc",	//MISSING
DlgLstTypeSquare	: "Square",	//MISSING
DlgLstTypeNumbers	: "Numbers (1, 2, 3)",	//MISSING
DlgLstTypeLCase		: "Lowercase Letters (a, b, c)",	//MISSING
DlgLstTypeUCase		: "Uppercase Letters (A, B, C)",	//MISSING
DlgLstTypeSRoman	: "Small Roman Numerals (i, ii, iii)",	//MISSING
DlgLstTypeLRoman	: "Large Roman Numerals (I, II, III)",	//MISSING

// Document Properties Dialog
DlgDocGeneralTab	: "General",	//MISSING
DlgDocBackTab		: "Background",	//MISSING
DlgDocColorsTab		: "Colors and Margins",	//MISSING
DlgDocMetaTab		: "Meta Data",	//MISSING

DlgDocPageTitle		: "Page Title",	//MISSING
DlgDocLangDir		: "Language Direction",	//MISSING
DlgDocLangDirLTR	: "Left to Right (LTR)",	//MISSING
DlgDocLangDirRTL	: "Right to Left (RTL)",	//MISSING
DlgDocLangCode		: "Language Code",	//MISSING
DlgDocCharSet		: "Character Set Encoding",	//MISSING
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Other Character Set Encoding",	//MISSING

DlgDocDocType		: "Document Type Heading",	//MISSING
DlgDocDocTypeOther	: "Other Document Type Heading",	//MISSING
DlgDocIncXHTML		: "Include XHTML Declarations",	//MISSING
DlgDocBgColor		: "Background Color",	//MISSING
DlgDocBgImage		: "Background Image URL",	//MISSING
DlgDocBgNoScroll	: "Nonscrolling Background",	//MISSING
DlgDocCText			: "Text",	//MISSING
DlgDocCLink			: "Link",	//MISSING
DlgDocCVisited		: "Visited Link",	//MISSING
DlgDocCActive		: "Active Link",	//MISSING
DlgDocMargins		: "Page Margins",	//MISSING
DlgDocMaTop			: "Top",	//MISSING
DlgDocMaLeft		: "Left",	//MISSING
DlgDocMaRight		: "Right",	//MISSING
DlgDocMaBottom		: "Bottom",	//MISSING
DlgDocMeIndex		: "Document Indexing Keywords (comma separated)",	//MISSING
DlgDocMeDescr		: "Document Description",	//MISSING
DlgDocMeAuthor		: "Author",	//MISSING
DlgDocMeCopy		: "Copyright",	//MISSING
DlgDocPreview		: "Preview",	//MISSING

// Templates Dialog
Templates			: "Templates",	//MISSING
DlgTemplatesTitle	: "Content Templates",	//MISSING
DlgTemplatesSelMsg	: "Please select the template to open in the editor<br />(the actual contents will be lost):",	//MISSING
DlgTemplatesLoading	: "Loading templates list. Please wait...",	//MISSING
DlgTemplatesNoTpl	: "(No templates defined)",	//MISSING
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "About",	//MISSING
DlgAboutBrowserInfoTab	: "Browser Info",	//MISSING
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "verzija",
DlgAboutInfo		: "Za vi禳e informacija posjetite"
};
