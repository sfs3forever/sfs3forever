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
 * Serbian (Latin) language file.
 $Id: sr-latn.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Smanji liniju sa alatkama",
ToolbarExpand		: "Proiri liniju sa alatkama",

// Toolbar Items and Context Menu
Save				: "Sa?uvaj",
NewPage				: "Nova stranica",
Preview				: "Izgled stranice",
Cut					: "Iseci",
Copy				: "Kopiraj",
Paste				: "Zalepi",
PasteText			: "Zalepi kao neformatiran tekst",
PasteWord			: "Zalepi iz Worda",
Print				: "?tampa",
SelectAll			: "Ozna?i sve",
RemoveFormat		: "Ukloni formatiranje",
InsertLinkLbl		: "Link",
InsertLink			: "Unesi/izmeni link",
RemoveLink			: "Ukloni link",
Anchor				: "Unesi/izmeni sidro",
InsertImageLbl		: "Slika",
InsertImage			: "Unesi/izmeni sliku",
InsertFlashLbl		: "Fle禳",
InsertFlash			: "Unesi/izmeni fle禳",
InsertTableLbl		: "Tabela",
InsertTable			: "Unesi/izmeni tabelu",
InsertLineLbl		: "Linija",
InsertLine			: "Unesi horizontalnu liniju",
InsertSpecialCharLbl: "Specijalni karakteri",
InsertSpecialChar	: "Unesi specijalni karakter",
InsertSmileyLbl		: "Smajli",
InsertSmiley		: "Unesi smajlija",
About				: "O FCKeditoru",
Bold				: "Podebljano",
Italic				: "Kurziv",
Underline			: "Podvu?eno",
StrikeThrough		: "Precrtano",
Subscript			: "Indeks",
Superscript			: "Stepen",
LeftJustify			: "Levo ravnanje",
CenterJustify		: "Centriran tekst",
RightJustify		: "Desno ravnanje",
BlockJustify		: "Obostrano ravnanje",
DecreaseIndent		: "Smanji levu marginu",
IncreaseIndent		: "Uve?aj levu marginu",
Undo				: "Poni嚙緣i akciju",
Redo				: "Ponovi akciju",
NumberedListLbl		: "Nabrojiva lista",
NumberedList		: "Unesi/ukloni nabrojivu listu",
BulletedListLbl		: "Nenabrojiva lista",
BulletedList		: "Unesi/ukloni nenabrojivu listu",
ShowTableBorders	: "Prika鱉i okvir tabele",
ShowDetails			: "Prika鱉i detalje",
Style				: "Stil",
FontFormat			: "Format",
Font				: "Font",
FontSize			: "Veli?ina fonta",
TextColor			: "Boja teksta",
BGColor				: "Boja pozadine",
Source				: "K繫d",
Find				: "Pretraga",
Replace				: "Zamena",
SpellCheck			: "Proveri spelovanje",
UniversalKeyboard	: "Univerzalna tastatura",
PageBreakLbl		: "Page Break",	//MISSING
PageBreak			: "Insert Page Break",	//MISSING

Form			: "Forma",
Checkbox		: "Polje za potvrdu",
RadioButton		: "Radio-dugme",
TextField		: "Tekstualno polje",
Textarea		: "Zona teksta",
HiddenField		: "Skriveno polje",
Button			: "Dugme",
SelectionField	: "Izborno polje",
ImageButton		: "Dugme sa slikom",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "Izmeni link",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "Unesi red",
DeleteRows			: "Obri禳i redove",
InsertColumn		: "Unesi kolonu",
DeleteColumns		: "Obri禳i kolone",
InsertCell			: "Unesi ?elije",
DeleteCells			: "Obri禳i ?elije",
MergeCells			: "Spoj celije",
SplitCell			: "Razdvoji celije",
TableDelete			: "Delete Table",	//MISSING
CellProperties		: "Osobine celije",
TableProperties		: "Osobine tabele",
ImageProperties		: "Osobine slike",
FlashProperties		: "Osobine fle禳a",

AnchorProp			: "Osobine sidra",
ButtonProp			: "Osobine dugmeta",
CheckboxProp		: "Osobine polja za potvrdu",
HiddenFieldProp		: "Osobine skrivenog polja",
RadioButtonProp		: "Osobine radio-dugmeta",
ImageButtonProp		: "Osobine dugmeta sa slikom",
TextFieldProp		: "Osobine tekstualnog polja",
SelectionFieldProp	: "Osobine izbornog polja",
TextareaProp		: "Osobine zone teksta",
FormProp			: "Osobine forme",

FontFormats			: "Normal;Formatirano;Adresa;Naslov 1;Naslov 2;Naslov 3;Naslov 4;Naslov 5;Naslov 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Obradujem XHTML. Malo strpljenja...",
Done				: "Zavr禳io",
PasteWordConfirm	: "Tekst koji 鱉elite da nalepite kopiran je iz Worda. Da li 鱉elite da bude o?i禳?en od formata pre lepljenja?",
NotCompatiblePaste	: "Ova komanda je dostupna samo za Internet Explorer od verzije 5.5. Da li 鱉elite da nalepim tekst bez ?i禳?enja?",
UnknownToolbarItem	: "Nepoznata stavka toolbara \"%1\"",
UnknownCommand		: "Nepoznata naredba \"%1\"",
NotImplemented		: "Naredba nije implementirana",
UnknownToolbarSet	: "Toolbar \"%1\" ne postoji",
NoActiveX			: "Your browser's security settings could limit some features of the editor. You must enable the option \"Run ActiveX controls and plug-ins\". You may experience errors and notice missing features.",	//MISSING
BrowseServerBlocked : "The resources browser could not be opened. Make sure that all popup blockers are disabled.",	//MISSING
DialogBlocked		: "It was not possible to open the dialog window. Make sure all popup blockers are disabled.",	//MISSING

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Otka鱉i",
DlgBtnClose			: "Zatvori",
DlgBtnBrowseServer	: "Pretra鱉i server",
DlgAdvancedTag		: "Napredni tagovi",
DlgOpOther			: "<Ostali>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Molimo Vas, unesite URL",

// General Dialogs Labels
DlgGenNotSet		: "<nije postavljeno>",
DlgGenId			: "Id",
DlgGenLangDir		: "Smer jezika",
DlgGenLangDirLtr	: "S leva na desno (LTR)",
DlgGenLangDirRtl	: "S desna na levo (RTL)",
DlgGenLangCode		: "K繫d jezika",
DlgGenAccessKey		: "Pristupni taster",
DlgGenName			: "Naziv",
DlgGenTabIndex		: "Tab indeks",
DlgGenLongDescr		: "Pun opis URL",
DlgGenClass			: "Stylesheet klase",
DlgGenTitle			: "Advisory naslov",
DlgGenContType		: "Advisory vrsta sadr鱉aja",
DlgGenLinkCharset	: "Linked Resource Charset",
DlgGenStyle			: "Stil",

// Image Dialog
DlgImgTitle			: "Osobine slika",
DlgImgInfoTab		: "Info slike",
DlgImgBtnUpload		: "Po禳alji na server",
DlgImgURL			: "URL",
DlgImgUpload		: "Po禳alji",
DlgImgAlt			: "Alternativni tekst",
DlgImgWidth			: "?irina",
DlgImgHeight		: "Visina",
DlgImgLockRatio		: "Zaklju?aj odnos",
DlgBtnResetSize		: "Resetuj veli?inu",
DlgImgBorder		: "Okvir",
DlgImgHSpace		: "HSpace",
DlgImgVSpace		: "VSpace",
DlgImgAlign			: "Ravnanje",
DlgImgAlignLeft		: "Levo",
DlgImgAlignAbsBottom: "Abs dole",
DlgImgAlignAbsMiddle: "Abs sredina",
DlgImgAlignBaseline	: "Bazno",
DlgImgAlignBottom	: "Dole",
DlgImgAlignMiddle	: "Sredina",
DlgImgAlignRight	: "Desno",
DlgImgAlignTextTop	: "Vrh teksta",
DlgImgAlignTop		: "Vrh",
DlgImgPreview		: "Izgled",
DlgImgAlertUrl		: "Unesite URL slike",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "Osobine fle禳a",
DlgFlashChkPlay		: "Automatski start",
DlgFlashChkLoop		: "Ponavljaj",
DlgFlashChkMenu		: "Uklju?i fle禳 meni",
DlgFlashScale		: "Skaliraj",
DlgFlashScaleAll	: "Prika鱉i sve",
DlgFlashScaleNoBorder	: "Bez ivice",
DlgFlashScaleFit	: "Popuni povr禳inu",

// Link Dialog
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Link Info",
DlgLnkTargetTab		: "Meta",

DlgLnkType			: "Vrsta linka",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Sidro na ovoj stranici",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokol",
DlgLnkProtoOther	: "<drugo>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Odaberi sidro",
DlgLnkAnchorByName	: "Po nazivu sidra",
DlgLnkAnchorById	: "Po Id-ju elementa",
DlgLnkNoAnchors		: "<Nema dostupnih sidra>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-Mail adresa",
DlgLnkEMailSubject	: "Naslov",
DlgLnkEMailBody		: "Sadr鱉aj poruke",
DlgLnkUpload		: "Po禳alji",
DlgLnkBtnUpload		: "Po禳alji na server",

DlgLnkTarget		: "Meta",
DlgLnkTargetFrame	: "<okvir>",
DlgLnkTargetPopup	: "<popup prozor>",
DlgLnkTargetBlank	: "Novi prozor (_blank)",
DlgLnkTargetParent	: "Roditeljski prozor (_parent)",
DlgLnkTargetSelf	: "Isti prozor (_self)",
DlgLnkTargetTop		: "Prozor na vrhu (_top)",
DlgLnkTargetFrameName	: "Naziv odredi禳nog frejma",
DlgLnkPopWinName	: "Naziv popup prozora",
DlgLnkPopWinFeat	: "Mogu?nosti popup prozora",
DlgLnkPopResize		: "Promenljiva velicina",
DlgLnkPopLocation	: "Lokacija",
DlgLnkPopMenu		: "Kontekstni meni",
DlgLnkPopScroll		: "Scroll bar",
DlgLnkPopStatus		: "Statusna linija",
DlgLnkPopToolbar	: "Toolbar",
DlgLnkPopFullScrn	: "Prikaz preko celog ekrana (IE)",
DlgLnkPopDependent	: "Zavisno (Netscape)",
DlgLnkPopWidth		: "?irina",
DlgLnkPopHeight		: "Visina",
DlgLnkPopLeft		: "Od leve ivice ekrana (px)",
DlgLnkPopTop		: "Od vrha ekrana (px)",

DlnLnkMsgNoUrl		: "Unesite URL linka",
DlnLnkMsgNoEMail	: "Otkucajte adresu elektronske pote",
DlnLnkMsgNoAnchor	: "Odaberite sidro",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Odaberite boju",
DlgColorBtnClear	: "Obri禳i",
DlgColorHighlight	: "Posvetli",
DlgColorSelected	: "Odaberi",

// Smiley Dialog
DlgSmileyTitle		: "Unesi smajlija",

// Special Character Dialog
DlgSpecialCharTitle	: "Odaberite specijalni karakter",

// Table Dialog
DlgTableTitle		: "Osobine tabele",
DlgTableRows		: "Redova",
DlgTableColumns		: "Kolona",
DlgTableBorder		: "Veli?ina okvira",
DlgTableAlign		: "Ravnanje",
DlgTableAlignNotSet	: "<nije postavljeno>",
DlgTableAlignLeft	: "Levo",
DlgTableAlignCenter	: "Sredina",
DlgTableAlignRight	: "Desno",
DlgTableWidth		: "?irina",
DlgTableWidthPx		: "piksela",
DlgTableWidthPc		: "procenata",
DlgTableHeight		: "Visina",
DlgTableCellSpace	: "?elijski prostor",
DlgTableCellPad		: "Razmak ?elija",
DlgTableCaption		: "Naslov tabele",
DlgTableSummary		: "Summary",	//MISSING

// Table Cell Dialog
DlgCellTitle		: "Osobine ?elije",
DlgCellWidth		: "?irina",
DlgCellWidthPx		: "piksela",
DlgCellWidthPc		: "procenata",
DlgCellHeight		: "Visina",
DlgCellWordWrap		: "Deljenje re?i",
DlgCellWordWrapNotSet	: "<nije postavljeno>",
DlgCellWordWrapYes	: "Da",
DlgCellWordWrapNo	: "Ne",
DlgCellHorAlign		: "Vodoravno ravnanje",
DlgCellHorAlignNotSet	: "<nije postavljeno>",
DlgCellHorAlignLeft	: "Levo",
DlgCellHorAlignCenter	: "Sredina",
DlgCellHorAlignRight: "Desno",
DlgCellVerAlign		: "Vertikalno ravnanje",
DlgCellVerAlignNotSet	: "<nije postavljeno>",
DlgCellVerAlignTop	: "Gornje",
DlgCellVerAlignMiddle	: "Sredina",
DlgCellVerAlignBottom	: "Donje",
DlgCellVerAlignBaseline	: "Bazno",
DlgCellRowSpan		: "Spajanje redova",
DlgCellCollSpan		: "Spajanje kolona",
DlgCellBackColor	: "Boja pozadine",
DlgCellBorderColor	: "Boja okvira",
DlgCellBtnSelect	: "Odaberi...",

// Find Dialog
DlgFindTitle		: "Prona?i",
DlgFindFindBtn		: "Prona?i",
DlgFindNotFoundMsg	: "Tra鱉eni tekst nije prona?en.",

// Replace Dialog
DlgReplaceTitle			: "Zameni",
DlgReplaceFindLbl		: "Pronadi:",
DlgReplaceReplaceLbl	: "Zameni sa:",
DlgReplaceCaseChk		: "Razlikuj mala i velika slova",
DlgReplaceReplaceBtn	: "Zameni",
DlgReplaceReplAllBtn	: "Zameni sve",
DlgReplaceWordChk		: "Uporedi cele reci",

// Paste Operations / Dialog
PasteErrorCut	: "Sigurnosna pode禳avanja Va禳eg pretra鱉iva?a ne dozvoljavaju operacije automatskog isecanja teksta. Molimo Vas da koristite pre?icu sa tastature (Ctrl+X).",
PasteErrorCopy	: "Sigurnosna pode禳avanja Va禳eg pretra鱉iva?a ne dozvoljavaju operacije automatskog kopiranja teksta. Molimo Vas da koristite pre?icu sa tastature (Ctrl+C).",

PasteAsText		: "Zalepi kao ?ist tekst",
PasteFromWord	: "Zalepi iz Worda",

DlgPasteMsg2	: "Molimo Vas da zalepite unutar donje povrine koriste?i tastaturnu pre?icu (<STRONG>Ctrl+V</STRONG>) i da pritisnete <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignori禳i definicije fontova",
DlgPasteRemoveStyles	: "Ukloni definicije stilova",
DlgPasteCleanBox		: "Obri禳i sve",

// Color Picker
ColorAutomatic	: "Automatski",
ColorMoreColors	: "Vi禳e boja...",

// Document Properties
DocProps		: "Osobine dokumenta",

// Anchor Dialog
DlgAnchorTitle		: "Osobine sidra",
DlgAnchorName		: "Ime sidra",
DlgAnchorErrorName	: "Unesite ime sidra",

// Speller Pages Dialog
DlgSpellNotInDic		: "Nije u re?niku",
DlgSpellChangeTo		: "Izmeni",
DlgSpellBtnIgnore		: "Ignori禳i",
DlgSpellBtnIgnoreAll	: "Ignori禳i sve",
DlgSpellBtnReplace		: "Zameni",
DlgSpellBtnReplaceAll	: "Zameni sve",
DlgSpellBtnUndo			: "Vrati akciju",
DlgSpellNoSuggestions	: "- Bez sugestija -",
DlgSpellProgress		: "Provera spelovanja u toku...",
DlgSpellNoMispell		: "Provera spelovanja zavr禳ena: gre禳ke nisu pronadene",
DlgSpellNoChanges		: "Provera spelovanja zavr禳ena: Nije izmenjena nijedna rec",
DlgSpellOneChange		: "Provera spelovanja zavr禳ena: Izmenjena je jedna re?",
DlgSpellManyChanges		: "Provera spelovanja zavr禳ena: %1 re?(i) je izmenjeno",

IeSpellDownload			: "Provera spelovanja nije instalirana. Da li 鱉elite da je skinete sa Interneta?",

// Button Dialog
DlgButtonText		: "Tekst (vrednost)",
DlgButtonType		: "Tip",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Naziv",
DlgCheckboxValue	: "Vrednost",
DlgCheckboxSelected	: "Ozna?eno",

// Form Dialog
DlgFormName		: "Naziv",
DlgFormAction	: "Akcija",
DlgFormMethod	: "Metoda",

// Select Field Dialog
DlgSelectName		: "Naziv",
DlgSelectValue		: "Vrednost",
DlgSelectSize		: "Veli?ina",
DlgSelectLines		: "linija",
DlgSelectChkMulti	: "Dozvoli vi禳estruku selekciju",
DlgSelectOpAvail	: "Dostupne opcije",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "Vrednost",
DlgSelectBtnAdd		: "Dodaj",
DlgSelectBtnModify	: "Izmeni",
DlgSelectBtnUp		: "Gore",
DlgSelectBtnDown	: "Dole",
DlgSelectBtnSetValue : "Podesi kao ozna?enu vrednost",
DlgSelectBtnDelete	: "Obri禳i",

// Textarea Dialog
DlgTextareaName	: "Naziv",
DlgTextareaCols	: "Broj kolona",
DlgTextareaRows	: "Broj redova",

// Text Field Dialog
DlgTextName			: "Naziv",
DlgTextValue		: "Vrednost",
DlgTextCharWidth	: "?irina (karaktera)",
DlgTextMaxChars		: "Maksimalno karaktera",
DlgTextType			: "Tip",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Lozinka",

// Hidden Field Dialog
DlgHiddenName	: "Naziv",
DlgHiddenValue	: "Vrednost",

// Bulleted List Dialog
BulletedListProp	: "Osobine nenabrojive liste",
NumberedListProp	: "Osobine nabrojive liste",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tip",
DlgLstTypeCircle	: "Krug",
DlgLstTypeDisc		: "Disc",	//MISSING
DlgLstTypeSquare	: "Kvadrat",
DlgLstTypeNumbers	: "Brojevi (1, 2, 3)",
DlgLstTypeLCase		: "mala slova (a, b, c)",
DlgLstTypeUCase		: "VELIKA slova (A, B, C)",
DlgLstTypeSRoman	: "Male rimske cifre (i, ii, iii)",
DlgLstTypeLRoman	: "Velike rimske cifre (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Op禳te osobine",
DlgDocBackTab		: "Pozadina",
DlgDocColorsTab		: "Boje i margine",
DlgDocMetaTab		: "Metapodaci",

DlgDocPageTitle		: "Naslov stranice",
DlgDocLangDir		: "Smer jezika",
DlgDocLangDirLTR	: "Sleva nadesno (LTR)",
DlgDocLangDirRTL	: "Zdesna nalevo (RTL)",
DlgDocLangCode		: "?ifra jezika",
DlgDocCharSet		: "Kodiranje skupa karaktera",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Ostala kodiranja skupa karaktera",

DlgDocDocType		: "Zaglavlje tipa dokumenta",
DlgDocDocTypeOther	: "Ostala zaglavlja tipa dokumenta",
DlgDocIncXHTML		: "Ukljuci XHTML deklaracije",
DlgDocBgColor		: "Boja pozadine",
DlgDocBgImage		: "URL pozadinske slike",
DlgDocBgNoScroll	: "Fiksirana pozadina",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Link",
DlgDocCVisited		: "Pose?eni link",
DlgDocCActive		: "Aktivni link",
DlgDocMargins		: "Margine stranice",
DlgDocMaTop			: "Gornja",
DlgDocMaLeft		: "Leva",
DlgDocMaRight		: "Desna",
DlgDocMaBottom		: "Donja",
DlgDocMeIndex		: "Klju?ne reci za indeksiranje dokumenta (razdvojene zarezima)",
DlgDocMeDescr		: "Opis dokumenta",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Autorska prava",
DlgDocPreview		: "Izgled stranice",

// Templates Dialog
Templates			: "Obrasci",
DlgTemplatesTitle	: "Obrasci za sadr鱉aj",
DlgTemplatesSelMsg	: "Molimo Vas da odaberete obrazac koji ce biti primenjen na stranicu (trenutni sadr鱉aj ce biti obrisan):",
DlgTemplatesLoading	: "U?itavam listu obrazaca. Malo strpljenja...",
DlgTemplatesNoTpl	: "(Nema definisanih obrazaca)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "O editoru",
DlgAboutBrowserInfoTab	: "Informacije o pretra鱉ivacu",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "verzija",
DlgAboutInfo		: "Za vi禳e informacija posetite"
};
