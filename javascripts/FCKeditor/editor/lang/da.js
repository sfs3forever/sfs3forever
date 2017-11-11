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
 * Danish language file.
 $Id: da.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Skjul v疆rkt繪jslinier",
ToolbarExpand		: "Vis v疆rkt繪jslinier",

// Toolbar Items and Context Menu
Save				: "Gem",
NewPage				: "Ny side",
Preview				: "Vis eksempel",
Cut					: "Klip",
Copy				: "Kopier",
Paste				: "Inds疆t",
PasteText			: "Inds疆t som ikke-formateret tekst",
PasteWord			: "Inds疆t fra Word",
Print				: "Udskriv",
SelectAll			: "V疆lg alt",
RemoveFormat		: "Fjern formatering",
InsertLinkLbl		: "Hyperlink",
InsertLink			: "Inds疆t/rediger hyperlink",
RemoveLink			: "Fjern hyperlink",
Anchor				: "Inds疆t/rediger bogm疆rke",
InsertImageLbl		: "Inds疆t billede",
InsertImage			: "Inds疆t/rediger billede",
InsertFlashLbl		: "Flash",
InsertFlash			: "Inds疆t/rediger Flash",
InsertTableLbl		: "Table",
InsertTable			: "Inds疆t/rediger tabel",
InsertLineLbl		: "Linie",
InsertLine			: "Inds疆t vandret linie",
InsertSpecialCharLbl: "Symbol",
InsertSpecialChar	: "Inds疆t symbol",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Inds疆t smiley",
About				: "Om FCKeditor",
Bold				: "Fed",
Italic				: "Kursiv",
Underline			: "Understreget",
StrikeThrough		: "Overstreget",
Subscript			: "S疆nket skrift",
Superscript			: "H疆vet skrift",
LeftJustify			: "Venstrestillet",
CenterJustify		: "Centreret",
RightJustify		: "H繪jrestillet",
BlockJustify		: "Lige margener",
DecreaseIndent		: "Formindsk indrykning",
IncreaseIndent		: "For繪g indrykning",
Undo				: "Fortryd",
Redo				: "Annuller fortryd",
NumberedListLbl		: "Talopstilling",
NumberedList		: "Inds疆t/fjern talopstilling",
BulletedListLbl		: "Punktopstilling",
BulletedList		: "Inds疆t/fjern punktopstilling",
ShowTableBorders	: "Vis tabelkanter",
ShowDetails			: "Vis detaljer",
Style				: "Typografi",
FontFormat			: "Formatering",
Font				: "Skrifttype",
FontSize			: "Skriftst繪rrelse",
TextColor			: "Tekstfarve",
BGColor				: "Baggrundsfarve",
Source				: "Kilde",
Find				: "S繪g",
Replace				: "Erstat",
SpellCheck			: "Stavekontrol",
UniversalKeyboard	: "Universaltastatur",
PageBreakLbl		: "Sidskift",
PageBreak			: "Inds疆t sideskift",

Form			: "Inds疆t formular",
Checkbox		: "Inds疆t afkrydsningsfelt",
RadioButton		: "Inds疆t alternativknap",
TextField		: "Inds疆t tekstfelt",
Textarea		: "Inds疆t tekstboks",
HiddenField		: "Inds疆t skjult felt",
Button			: "Inds疆t knap",
SelectionField	: "Inds疆t liste",
ImageButton		: "Inds疆t billedknap",

FitWindow		: "Maksimer editor vinduet",

// Context Menu
EditLink			: "Rediger hyperlink",
CellCM				: "Celle",
RowCM				: "R疆kke",
ColumnCM			: "Kolonne",
InsertRow			: "Inds疆t r疆kke",
DeleteRows			: "Slet r疆kke",
InsertColumn		: "Inds疆t kolonne",
DeleteColumns		: "Slet kolonne",
InsertCell			: "Inds疆t celle",
DeleteCells			: "Slet celle",
MergeCells			: "Flet celler",
SplitCell			: "Opdel celle",
TableDelete			: "Slet tabel",
CellProperties		: "Egenskaber for celle",
TableProperties		: "Egenskaber for tabel",
ImageProperties		: "Egenskaber for billede",
FlashProperties		: "Egenskaber for Flash",

AnchorProp			: "Egenskaber for bogm疆rke",
ButtonProp			: "Egenskaber for knap",
CheckboxProp		: "Egenskaber for afkrydsningsfelt",
HiddenFieldProp		: "Egenskaber for skjult felt",
RadioButtonProp		: "Egenskaber for alternativknap",
ImageButtonProp		: "Egenskaber for billedknap",
TextFieldProp		: "Egenskaber for tekstfelt",
SelectionFieldProp	: "Egenskaber for liste",
TextareaProp		: "Egenskaber for tekstboks",
FormProp			: "Egenskaber for formular",

FontFormats			: "Normal;Formateret;Adresse;Overskrift 1;Overskrift 2;Overskrift 3;Overskrift 4;Overskrift 5;Overskrift 6;Normal (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Behandler XHTML...",
Done				: "F疆rdig",
PasteWordConfirm	: "Den tekst du fors繪ger at inds疆tte ser ud til at komme fra Word.<br>Vil du rense teksten f繪r den inds疆ttes?",
NotCompatiblePaste	: "Denne kommando er tilg疆ndelig i Internet Explorer 5.5 eller senere.<br>Vil du inds疆tte teksten uden at rense den ?",
UnknownToolbarItem	: "Ukendt v疆rkt繪jslinjeobjekt \"%1\"!",
UnknownCommand		: "Ukendt kommandonavn \"%1\"!",
NotImplemented		: "Kommandoen er ikke implementeret!",
UnknownToolbarSet	: "V疆rkt繪jslinjen \"%1\" eksisterer ikke!",
NoActiveX			: "Din browsers sikkerhedsindstillinger begr疆nser nogle af editorens muligheder.<br>Sl疇 \"K繪r ActiveX-objekter og plug-ins\" til, ellers vil du opleve fejl og manglende muligheder.",
BrowseServerBlocked : "Browseren kunne ikke 疇bne de n繪dvendige ressourcer!<br>Sl疇 pop-up blokering fra.",
DialogBlocked		: "Dialogvinduet kunne ikke 疇bnes!<br>Sl疇 pop-up blokering fra.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Annuller",
DlgBtnClose			: "Luk",
DlgBtnBrowseServer	: "Gennemse...",
DlgAdvancedTag		: "Avanceret",
DlgOpOther			: "<Andet>",
DlgInfoTab			: "Generelt",
DlgAlertUrl			: "Indtast URL",

// General Dialogs Labels
DlgGenNotSet		: "<intet valgt>",
DlgGenId			: "Id",
DlgGenLangDir		: "Tekstretning",
DlgGenLangDirLtr	: "Fra venstre mod h繪jre (LTR)",
DlgGenLangDirRtl	: "Fra h繪jre mod venstre (RTL)",
DlgGenLangCode		: "Sprogkode",
DlgGenAccessKey		: "Genvejstast",
DlgGenName			: "Navn",
DlgGenTabIndex		: "Tabulator indeks",
DlgGenLongDescr		: "Udvidet beskrivelse",
DlgGenClass			: "Typografiark",
DlgGenTitle			: "Titel",
DlgGenContType		: "Indholdstype",
DlgGenLinkCharset	: "Tegns疆t",
DlgGenStyle			: "Typografi",

// Image Dialog
DlgImgTitle			: "Egenskaber for billede",
DlgImgInfoTab		: "Generelt",
DlgImgBtnUpload		: "Upload",
DlgImgURL			: "URL",
DlgImgUpload		: "Upload",
DlgImgAlt			: "Alternativ tekst",
DlgImgWidth			: "Bredde",
DlgImgHeight		: "H繪jde",
DlgImgLockRatio		: "L疇s st繪rrelsesforhold",
DlgBtnResetSize		: "Nulstil st繪rrelse",
DlgImgBorder		: "Ramme",
DlgImgHSpace		: "HMargen",
DlgImgVSpace		: "VMargen",
DlgImgAlign			: "Justering",
DlgImgAlignLeft		: "Venstre",
DlgImgAlignAbsBottom: "Absolut nederst",
DlgImgAlignAbsMiddle: "Absolut centreret",
DlgImgAlignBaseline	: "Grundlinje",
DlgImgAlignBottom	: "Nederst",
DlgImgAlignMiddle	: "Centreret",
DlgImgAlignRight	: "H繪jre",
DlgImgAlignTextTop	: "Toppen af teksten",
DlgImgAlignTop		: "?verst",
DlgImgPreview		: "Vis eksempel",
DlgImgAlertUrl		: "Indtast stien til billedet",
DlgImgLinkTab		: "Hyperlink",

// Flash Dialog
DlgFlashTitle		: "Egenskaber for Flash",
DlgFlashChkPlay		: "Automatisk afspilning",
DlgFlashChkLoop		: "Gentagelse",
DlgFlashChkMenu		: "Vis Flash menu",
DlgFlashScale		: "Skal矇r",
DlgFlashScaleAll	: "Vis alt",
DlgFlashScaleNoBorder	: "Ingen ramme",
DlgFlashScaleFit	: "Tilpas st繪rrelse",

// Link Dialog
DlgLnkWindowTitle	: "Egenskaber for hyperlink",
DlgLnkInfoTab		: "Generelt",
DlgLnkTargetTab		: "M疇l",

DlgLnkType			: "Hyperlink type",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Bogm疆rke p疇 denne side",
DlgLnkTypeEMail		: "E-mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<anden>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "V疆lg et anker",
DlgLnkAnchorByName	: "Efter anker navn",
DlgLnkAnchorById	: "Efter element Id",
DlgLnkNoAnchors		: "<Ingen bogm疆rker dokumentet>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-mailadresse",
DlgLnkEMailSubject	: "Emne",
DlgLnkEMailBody		: "Br繪dtekst",
DlgLnkUpload		: "Upload",
DlgLnkBtnUpload		: "Upload",

DlgLnkTarget		: "M疇l",
DlgLnkTargetFrame	: "<ramme>",
DlgLnkTargetPopup	: "<popup vindue>",
DlgLnkTargetBlank	: "Nyt vindue (_blank)",
DlgLnkTargetParent	: "Overordnet ramme (_parent)",
DlgLnkTargetSelf	: "Samme vindue (_self)",
DlgLnkTargetTop		: "Hele vinduet (_top)",
DlgLnkTargetFrameName	: "Destinationsvinduets navn",
DlgLnkPopWinName	: "Pop-up vinduets navn",
DlgLnkPopWinFeat	: "Egenskaber for pop-up",
DlgLnkPopResize		: "Skalering",
DlgLnkPopLocation	: "Adresselinje",
DlgLnkPopMenu		: "Menulinje",
DlgLnkPopScroll		: "Scrollbars",
DlgLnkPopStatus		: "Statuslinje",
DlgLnkPopToolbar	: "V疆rkt繪jslinje",
DlgLnkPopFullScrn	: "Fuld sk疆rm (IE)",
DlgLnkPopDependent	: "Koblet/dependent (Netscape)",
DlgLnkPopWidth		: "Bredde",
DlgLnkPopHeight		: "H繪jde",
DlgLnkPopLeft		: "Position fra venstre",
DlgLnkPopTop		: "Position fra toppen",

DlnLnkMsgNoUrl		: "Indtast hyperlink URL!",
DlnLnkMsgNoEMail	: "Indtast e-mailaddresse!",
DlnLnkMsgNoAnchor	: "V疆lg bogm疆rke!",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "V疆lg farve",
DlgColorBtnClear	: "Nulstil",
DlgColorHighlight	: "Markeret",
DlgColorSelected	: "Valgt",

// Smiley Dialog
DlgSmileyTitle		: "V疆lg smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "V疆lg symbol",

// Table Dialog
DlgTableTitle		: "Egenskaber for tabel",
DlgTableRows		: "R疆kker",
DlgTableColumns		: "Kolonner",
DlgTableBorder		: "Rammebredde",
DlgTableAlign		: "Justering",
DlgTableAlignNotSet	: "<intet valgt>",
DlgTableAlignLeft	: "Venstrestillet",
DlgTableAlignCenter	: "Centreret",
DlgTableAlignRight	: "H繪jrestillet",
DlgTableWidth		: "Bredde",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "procent",
DlgTableHeight		: "H繪jde",
DlgTableCellSpace	: "Celleafstand",
DlgTableCellPad		: "Cellemargen",
DlgTableCaption		: "Titel",
DlgTableSummary		: "Resume",

// Table Cell Dialog
DlgCellTitle		: "Egenskaber for celle",
DlgCellWidth		: "Bredde",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "procent",
DlgCellHeight		: "H繪jde",
DlgCellWordWrap		: "Orddeling",
DlgCellWordWrapNotSet	: "<intet valgt>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nej",
DlgCellHorAlign		: "Vandret justering",
DlgCellHorAlignNotSet	: "<intet valgt>",
DlgCellHorAlignLeft	: "Venstrestillet",
DlgCellHorAlignCenter	: "Centreret",
DlgCellHorAlignRight: "H繪jrestillet",
DlgCellVerAlign		: "Lodret justering",
DlgCellVerAlignNotSet	: "<intet valgt>",
DlgCellVerAlignTop	: "?verst",
DlgCellVerAlignMiddle	: "Centreret",
DlgCellVerAlignBottom	: "Nederst",
DlgCellVerAlignBaseline	: "Grundlinje",
DlgCellRowSpan		: "H繪jde i antal r疆kker",
DlgCellCollSpan		: "Bredde i antal kolonner",
DlgCellBackColor	: "Baggrundsfarve",
DlgCellBorderColor	: "Rammefarve",
DlgCellBtnSelect	: "V疆lg...",

// Find Dialog
DlgFindTitle		: "Find",
DlgFindFindBtn		: "Find",
DlgFindNotFoundMsg	: "S繪geteksten blev ikke fundet!",

// Replace Dialog
DlgReplaceTitle			: "Erstat",
DlgReplaceFindLbl		: "S繪g efter:",
DlgReplaceReplaceLbl	: "Erstat med:",
DlgReplaceCaseChk		: "Forskel p疇 store og sm疇 bogstaver",
DlgReplaceReplaceBtn	: "Erstat",
DlgReplaceReplAllBtn	: "Erstat alle",
DlgReplaceWordChk		: "Kun hele ord",

// Paste Operations / Dialog
PasteErrorCut	: "Din browsers sikkerhedsindstillinger tillader ikke editoren at klippe tekst automatisk!<br>Brug i stedet tastaturet til at klippe teksten (Ctrl+X).",
PasteErrorCopy	: "Din browsers sikkerhedsindstillinger tillader ikke editoren at kopiere tekst automatisk!<br>Brug i stedet tastaturet til at kopiere teksten (Ctrl+C).",

PasteAsText		: "Inds疆t som ikke-formateret tekst",
PasteFromWord	: "Inds疆t fra Word",

DlgPasteMsg2	: "Inds疆t i feltet herunder (<STRONG>Ctrl+V</STRONG>) og klik <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorer font definitioner",
DlgPasteRemoveStyles	: "Ignorer typografi",
DlgPasteCleanBox		: "Slet indhold",

// Color Picker
ColorAutomatic	: "Automatisk",
ColorMoreColors	: "Flere farver...",

// Document Properties
DocProps		: "Egenskaber for dokument",

// Anchor Dialog
DlgAnchorTitle		: "Egenskaber for bogm疆rke",
DlgAnchorName		: "Bogm疆rke navn",
DlgAnchorErrorName	: "Indtast bogm疆rke navn!",

// Speller Pages Dialog
DlgSpellNotInDic		: "Ikke i ordbogen",
DlgSpellChangeTo		: "Forslag",
DlgSpellBtnIgnore		: "Ignorer",
DlgSpellBtnIgnoreAll	: "Ignorer alle",
DlgSpellBtnReplace		: "Erstat",
DlgSpellBtnReplaceAll	: "Erstat alle",
DlgSpellBtnUndo			: "Tilbage",
DlgSpellNoSuggestions	: "- ingen forslag -",
DlgSpellProgress		: "Stavekontrolen arbejder...",
DlgSpellNoMispell		: "Stavekontrol f疆rdig: Ingen fejl fundet",
DlgSpellNoChanges		: "Stavekontrol f疆rdig: Ingen ord 疆ndret",
DlgSpellOneChange		: "Stavekontrol f疆rdig: Et ord 疆ndret",
DlgSpellManyChanges		: "Stavekontrol f疆rdig: %1 ord 疆ndret",

IeSpellDownload			: "Stavekontrol ikke installeret.<br>Vil du hente den nu?",

// Button Dialog
DlgButtonText		: "Tekst",
DlgButtonType		: "Type",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Navn",
DlgCheckboxValue	: "V疆rdi",
DlgCheckboxSelected	: "Valgt",

// Form Dialog
DlgFormName		: "Navn",
DlgFormAction	: "Handling",
DlgFormMethod	: "Metod",

// Select Field Dialog
DlgSelectName		: "Navn",
DlgSelectValue		: "V疆rdi",
DlgSelectSize		: "St繪rrelse",
DlgSelectLines		: "linier",
DlgSelectChkMulti	: "Tillad flere valg",
DlgSelectOpAvail	: "Valgmuligheder",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "V疆rdi",
DlgSelectBtnAdd		: "Tilf繪j",
DlgSelectBtnModify	: "Rediger",
DlgSelectBtnUp		: "Op",
DlgSelectBtnDown	: "Ned",
DlgSelectBtnSetValue : "S疆t som valgt",
DlgSelectBtnDelete	: "Slet",

// Textarea Dialog
DlgTextareaName	: "Navn",
DlgTextareaCols	: "Kolonner",
DlgTextareaRows	: "R疆kker",

// Text Field Dialog
DlgTextName			: "Navn",
DlgTextValue		: "V疆rdi",
DlgTextCharWidth	: "Bredde (tegn)",
DlgTextMaxChars		: "Max antal tegn",
DlgTextType			: "Type",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Adgangskode",

// Hidden Field Dialog
DlgHiddenName	: "Navn",
DlgHiddenValue	: "V疆rdi",

// Bulleted List Dialog
BulletedListProp	: "Egenskaber for punktopstilling",
NumberedListProp	: "Egenskaber for talopstilling",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Type",
DlgLstTypeCircle	: "Cirkel",
DlgLstTypeDisc		: "Udfyldt cirkel",
DlgLstTypeSquare	: "Firkant",
DlgLstTypeNumbers	: "Nummereret (1, 2, 3)",
DlgLstTypeLCase		: "Sm疇 bogstaver (a, b, c)",
DlgLstTypeUCase		: "Store bogstaver (A, B, C)",
DlgLstTypeSRoman	: "Sm疇 romertal (i, ii, iii)",
DlgLstTypeLRoman	: "Store romertal (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Generelt",
DlgDocBackTab		: "Baggrund",
DlgDocColorsTab		: "Farver og margen",
DlgDocMetaTab		: "Metadata",

DlgDocPageTitle		: "Sidetitel",
DlgDocLangDir		: "Sprog",
DlgDocLangDirLTR	: "Fra venstre mod h繪jre (LTR)",
DlgDocLangDirRTL	: "Fra h繪jre mod venstre (RTL)",
DlgDocLangCode		: "Landekode",
DlgDocCharSet		: "Tegns疆t kode",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Anden tegns疆t kode",

DlgDocDocType		: "Dokumenttype kategori",
DlgDocDocTypeOther	: "Anden dokumenttype kategori",
DlgDocIncXHTML		: "Inkludere XHTML deklartion",
DlgDocBgColor		: "Baggrundsfarve",
DlgDocBgImage		: "Baggrundsbillede URL",
DlgDocBgNoScroll	: "Fastl疇st baggrund",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Hyperlink",
DlgDocCVisited		: "Bes繪gt hyperlink",
DlgDocCActive		: "Aktivt hyperlink",
DlgDocMargins		: "Sidemargen",
DlgDocMaTop			: "?verst",
DlgDocMaLeft		: "Venstre",
DlgDocMaRight		: "H繪jre",
DlgDocMaBottom		: "Nederst",
DlgDocMeIndex		: "Dokument index n繪gleord (kommasepareret)",
DlgDocMeDescr		: "Dokument beskrivelse",
DlgDocMeAuthor		: "Forfatter",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vis",

// Templates Dialog
Templates			: "Skabeloner",
DlgTemplatesTitle	: "Indholdsskabeloner",
DlgTemplatesSelMsg	: "V疆lg den skabelon, som skal 疇bnes i editoren.<br>(Nuv疆rende indhold vil blive overskrevet!):",
DlgTemplatesLoading	: "Henter liste over skabeloner...",
DlgTemplatesNoTpl	: "(Der er ikke defineret nogen skabelon!)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Om",
DlgAboutBrowserInfoTab	: "Generelt",
DlgAboutLicenseTab	: "Licens",
DlgAboutVersion		: "version",
DlgAboutInfo		: "For yderlig information g疇 til"
};
