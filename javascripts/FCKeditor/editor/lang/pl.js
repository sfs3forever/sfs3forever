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
 * Polish language file.
 $Id: pl.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Zwi? pasek narz?dzi",
ToolbarExpand		: "Rozwi? pasek narz?dzi",

// Toolbar Items and Context Menu
Save				: "Zapisz",
NewPage				: "Nowa strona",
Preview				: "Podgl?d",
Cut					: "Wytnij",
Copy				: "Kopiuj",
Paste				: "Wklej",
PasteText			: "Wklej jako czysty tekst",
PasteWord			: "Wklej z Worda",
Print				: "Drukuj",
SelectAll			: "Zaznacz wszystko",
RemoveFormat		: "Usu? formatowanie",
InsertLinkLbl		: "Hiper??cze",
InsertLink			: "Wstaw/edytuj hiper??cze",
RemoveLink			: "Usu? hiper??cze",
Anchor				: "Wstaw/edytuj kotwic?",
InsertImageLbl		: "Obrazek",
InsertImage			: "Wstaw/edytuj obrazek",
InsertFlashLbl		: "Flash",
InsertFlash			: "Dodaj/Edytuj element Flash",
InsertTableLbl		: "Tabela",
InsertTable			: "Wstaw/edytuj tabel?",
InsertLineLbl		: "Linia pozioma",
InsertLine			: "Wstaw poziom? lini?",
InsertSpecialCharLbl: "Znak specjalny",
InsertSpecialChar	: "Wstaw znak specjalny",
InsertSmileyLbl		: "Emotikona",
InsertSmiley		: "Wstaw emotikon?",
About				: "O programie FCKeditor",
Bold				: "Pogrubienie",
Italic				: "Kursywa",
Underline			: "Podkre?lenie",
StrikeThrough		: "Przekre?lenie",
Subscript			: "Indeks dolny",
Superscript			: "Indeks g籀rny",
LeftJustify			: "Wyr籀wnaj do lewej",
CenterJustify		: "Wyr籀wnaj do ?rodka",
RightJustify		: "Wyr籀wnaj do prawej",
BlockJustify		: "Wyr籀wnaj do lewej i prawej",
DecreaseIndent		: "Zmniejsz wci?cie",
IncreaseIndent		: "Zwi?ksz wci?cie",
Undo				: "Cofnij",
Redo				: "Pon籀w",
NumberedListLbl		: "Lista numerowana",
NumberedList		: "Wstaw/usu? numerowanie listy",
BulletedListLbl		: "Lista wypunktowana",
BulletedList		: "Wstaw/usu? wypunktowanie listy",
ShowTableBorders	: "Pokazuj ramk? tabeli",
ShowDetails			: "Poka髒 szczeg籀?y",
Style				: "Styl",
FontFormat			: "Format",
Font				: "Czcionka",
FontSize			: "Rozmiar",
TextColor			: "Kolor tekstu",
BGColor				: "Kolor t?a",
Source				: "饕r籀d?o dokumentu",
Find				: "Znajd驕",
Replace				: "Zamie?",
SpellCheck			: "Sprawd驕 pisowni?",
UniversalKeyboard	: "Klawiatura Uniwersalna",
PageBreakLbl		: "Odst?p",
PageBreak			: "Wstaw odst?p",

Form			: "Formularz",
Checkbox		: "Checkbox",
RadioButton		: "Pole wyboru",
TextField		: "Pole tekstowe",
Textarea		: "Obszar tekstowy",
HiddenField		: "Pole ukryte",
Button			: "Przycisk",
SelectionField	: "Lista wyboru",
ImageButton		: "Przycisk obrazek",

FitWindow		: "Maksymalizuj rozmiar edytora",

// Context Menu
EditLink			: "Edytuj hiper??cze",
CellCM				: "Kom籀rka",
RowCM				: "Wiersz",
ColumnCM			: "Kolumna",
InsertRow			: "Wstaw wiersz",
DeleteRows			: "Usu? wiersze",
InsertColumn		: "Wstaw kolumn?",
DeleteColumns		: "Usu? kolumny",
InsertCell			: "Wstaw kom籀rk?",
DeleteCells			: "Usu? kom籀rki",
MergeCells			: "Po??cz kom籀rki",
SplitCell			: "Podziel kom籀rk?",
TableDelete			: "Usu? tabel?",
CellProperties		: "W?a?ciwo?ci kom籀rki",
TableProperties		: "W?a?ciwo?ci tabeli",
ImageProperties		: "W?a?ciwo?ci obrazka",
FlashProperties		: "W?a?ciwo?ci elementu Flash",

AnchorProp			: "W?a?ciwo?ci kotwicy",
ButtonProp			: "W?a?ciwo?ci przycisku",
CheckboxProp		: "Checkbox - w?a?ciwo?ci",
HiddenFieldProp		: "W?a?ciwo?ci pola ukrytego",
RadioButtonProp		: "W?a?ciwo?ci pola wyboru",
ImageButtonProp		: "W?a?ciwo?ci przycisku obrazka",
TextFieldProp		: "W?a?ciwo?ci pola tekstowego",
SelectionFieldProp	: "W?a?ciwo?ci listy wyboru",
TextareaProp		: "W?a?ciwo?ci obszaru tekstowego",
FormProp			: "W?a?ciwo?ci formularza",

FontFormats			: "Normalny;Tekst sformatowany;Adres;Nag?籀wek 1;Nag?籀wek 2;Nag?籀wek 3;Nag?籀wek 4;Nag?籀wek 5;Nag?籀wek 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Przetwarzanie XHTML. Prosz? czeka?...",
Done				: "Gotowe",
PasteWordConfirm	: "Tekst, kt籀ry chcesz wklei?, prawdopodobnie pochodzi z programu Word. Czy chcesz go wyczy?cic przed wklejeniem?",
NotCompatiblePaste	: "Ta funkcja jest dost?pna w programie Internet Explorer w wersji 5.5 lub wy髒szej. Czy chcesz wklei? tekst bez czyszczenia?",
UnknownToolbarItem	: "Nieznany element paska narz?dzi \"%1\"",
UnknownCommand		: "Nieznana komenda \"%1\"",
NotImplemented		: "Komenda niezaimplementowana",
UnknownToolbarSet	: "Pasek narz?dzi \"%1\" nie istnieje",
NoActiveX			: "Ustawienia zabezpiecze? twojej przegl?darki mog? ograniczy? niekt籀re funkcje edytora. Musisz w??czy? opcj? \"Uruchamianie formant籀w Activex i dodatk籀w plugin\". W przeciwnym wypadku mog? pojawia? si? b??dy.",
BrowseServerBlocked : "Okno menad髒era plik籀w nie mo髒e zosta? otwarte. Upewnij si?, 髒e wszystkie blokady popup s? wy??czone.",
DialogBlocked		: "Nie mo髒na otworzy? okna dialogowego. Upewnij si?, 髒e wszystkie blokady popup s? wy??czone.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Anuluj",
DlgBtnClose			: "Zamknij",
DlgBtnBrowseServer	: "Przegl?daj",
DlgAdvancedTag		: "Zaawansowane",
DlgOpOther			: "<Inny>",
DlgInfoTab			: "Informacje",
DlgAlertUrl			: "Prosz? poda? URL",

// General Dialogs Labels
DlgGenNotSet		: "<nieustawione>",
DlgGenId			: "Id",
DlgGenLangDir		: "Kierunek tekstu",
DlgGenLangDirLtr	: "Od lewej do prawej (LTR)",
DlgGenLangDirRtl	: "Od prawej do lewej (RTL)",
DlgGenLangCode		: "Kod j?zyka",
DlgGenAccessKey		: "Klawisz dost?pu",
DlgGenName			: "Nazwa",
DlgGenTabIndex		: "Indeks tabeli",
DlgGenLongDescr		: "Long Description URL",
DlgGenClass			: "Stylesheet Classes",
DlgGenTitle			: "Advisory Title",
DlgGenContType		: "Advisory Content Type",
DlgGenLinkCharset	: "Linked Resource Charset",
DlgGenStyle			: "Styl",

// Image Dialog
DlgImgTitle			: "W?a?ciwo?ci obrazka",
DlgImgInfoTab		: "Informacje o obrazku",
DlgImgBtnUpload		: "Sy?lij",
DlgImgURL			: "Adres URL",
DlgImgUpload		: "Wy?lij",
DlgImgAlt			: "Tekst zast?pczy",
DlgImgWidth			: "Szeroko??",
DlgImgHeight		: "Wysoko??",
DlgImgLockRatio		: "Zablokuj proporcje",
DlgBtnResetSize		: "Przywr籀? rozmiar",
DlgImgBorder		: "Ramka",
DlgImgHSpace		: "Odst?p poziomy",
DlgImgVSpace		: "Odst?p pionowy",
DlgImgAlign			: "Wyr籀wnaj",
DlgImgAlignLeft		: "Do lewej",
DlgImgAlignAbsBottom: "Do do?u",
DlgImgAlignAbsMiddle: "Do ?rodka w pionie",
DlgImgAlignBaseline	: "Do linii bazowej",
DlgImgAlignBottom	: "Do do?u",
DlgImgAlignMiddle	: "Do ?rodka",
DlgImgAlignRight	: "Do prawej",
DlgImgAlignTextTop	: "Do g籀ry tekstu",
DlgImgAlignTop		: "Do g籀ry",
DlgImgPreview		: "Podgl?d",
DlgImgAlertUrl		: "Podaj adres obrazka.",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "W?a?ciwo?ci elementu Flash",
DlgFlashChkPlay		: "Auto Odtwarzanie",
DlgFlashChkLoop		: "P?tla",
DlgFlashChkMenu		: "W??cz menu",
DlgFlashScale		: "Skaluj",
DlgFlashScaleAll	: "Poka髒 wszystko",
DlgFlashScaleNoBorder	: "Bez Ramki",
DlgFlashScaleFit	: "Dok?adne dopasowanie",

// Link Dialog
DlgLnkWindowTitle	: "Hiper??cze",
DlgLnkInfoTab		: "Informacje ",
DlgLnkTargetTab		: "Cel",

DlgLnkType			: "Typ hiper??cza",
DlgLnkTypeURL		: "Adres URL",
DlgLnkTypeAnchor	: "Odno?nik wewn?trz strony",
DlgLnkTypeEMail		: "Adres e-mail",
DlgLnkProto			: "Protok籀?",
DlgLnkProtoOther	: "<inny>",
DlgLnkURL			: "Adres URL",
DlgLnkAnchorSel		: "Wybierz etykiet?",
DlgLnkAnchorByName	: "Wg etykiety",
DlgLnkAnchorById	: "Wg identyfikatora elementu",
DlgLnkNoAnchors		: "<W dokumencie nie zdefiniowano 髒adnych etykiet>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Adres e-mail",
DlgLnkEMailSubject	: "Temat",
DlgLnkEMailBody		: "Tre??",
DlgLnkUpload		: "Upload",
DlgLnkBtnUpload		: "Wy?lij",

DlgLnkTarget		: "Cel",
DlgLnkTargetFrame	: "<ramka>",
DlgLnkTargetPopup	: "<wyskakuj?ce okno>",
DlgLnkTargetBlank	: "Nowe okno (_blank)",
DlgLnkTargetParent	: "Okno nadrz?dne (_parent)",
DlgLnkTargetSelf	: "To samo okno (_self)",
DlgLnkTargetTop		: "Okno najwy髒sze w hierarchii (_top)",
DlgLnkTargetFrameName	: "Nazwa Ramki Docelowej",
DlgLnkPopWinName	: "Nazwa wyskakuj?cego okna",
DlgLnkPopWinFeat	: "W?a?ciwo?ci wyskakuj?cego okna",
DlgLnkPopResize		: "Mo髒liwa zmiana rozmiaru",
DlgLnkPopLocation	: "Pasek adresu",
DlgLnkPopMenu		: "Pasek menu",
DlgLnkPopScroll		: "Paski przewijania",
DlgLnkPopStatus		: "Pasek statusu",
DlgLnkPopToolbar	: "Pasek narz?dzi",
DlgLnkPopFullScrn	: "Pe?ny ekran (IE)",
DlgLnkPopDependent	: "Okno zale髒ne (Netscape)",
DlgLnkPopWidth		: "Szeroko??",
DlgLnkPopHeight		: "Wysoko??",
DlgLnkPopLeft		: "Pozycja w poziomie",
DlgLnkPopTop		: "Pozycja w pionie",

DlnLnkMsgNoUrl		: "Podaj adres URL",
DlnLnkMsgNoEMail	: "Podaj adres e-mail",
DlnLnkMsgNoAnchor	: "Wybierz etykiet?",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Wybierz kolor",
DlgColorBtnClear	: "Wyczy??",
DlgColorHighlight	: "Podgl?d",
DlgColorSelected	: "Wybrane",

// Smiley Dialog
DlgSmileyTitle		: "Wstaw emotikon?",

// Special Character Dialog
DlgSpecialCharTitle	: "Wybierz znak specjalny",

// Table Dialog
DlgTableTitle		: "W?a?ciwo?ci tabeli",
DlgTableRows		: "Liczba wierszy",
DlgTableColumns		: "Liczba kolumn",
DlgTableBorder		: "Grubo?? ramki",
DlgTableAlign		: "Wyr籀wnanie",
DlgTableAlignNotSet	: "<brak ustawie?>",
DlgTableAlignLeft	: "Do lewej",
DlgTableAlignCenter	: "Do ?rodka",
DlgTableAlignRight	: "Do prawej",
DlgTableWidth		: "Szeroko??",
DlgTableWidthPx		: "piksele",
DlgTableWidthPc		: "%",
DlgTableHeight		: "Wysoko??",
DlgTableCellSpace	: "Odst?p pomi?dzy kom籀rkami",
DlgTableCellPad		: "Margines wewn?trzny kom籀rek",
DlgTableCaption		: "Tytu?",
DlgTableSummary		: "Podsumowanie",

// Table Cell Dialog
DlgCellTitle		: "W?a?ciwo?ci kom籀rki",
DlgCellWidth		: "Szeroko??",
DlgCellWidthPx		: "piksele",
DlgCellWidthPc		: "%",
DlgCellHeight		: "Wysoko??",
DlgCellWordWrap		: "Zawijanie tekstu",
DlgCellWordWrapNotSet	: "<brak ustawie?>",
DlgCellWordWrapYes	: "Tak",
DlgCellWordWrapNo	: "Nie",
DlgCellHorAlign		: "Wyr籀wnanie poziome",
DlgCellHorAlignNotSet	: "<brak ustawie?>",
DlgCellHorAlignLeft	: "Do lewej",
DlgCellHorAlignCenter	: "Do ?rodka",
DlgCellHorAlignRight: "Do prawej",
DlgCellVerAlign		: "Wyr籀wnanie pionowe",
DlgCellVerAlignNotSet	: "<brak ustawie?>",
DlgCellVerAlignTop	: "Do g籀ry",
DlgCellVerAlignMiddle	: "Do ?rodka",
DlgCellVerAlignBottom	: "Do do?u",
DlgCellVerAlignBaseline	: "Do linii bazowej",
DlgCellRowSpan		: "Zaj?to?? wierszy",
DlgCellCollSpan		: "Zaj?to?? kolumn",
DlgCellBackColor	: "Kolor t?a",
DlgCellBorderColor	: "Kolor ramki",
DlgCellBtnSelect	: "Wybierz...",

// Find Dialog
DlgFindTitle		: "Znajd驕",
DlgFindFindBtn		: "Znajd驕",
DlgFindNotFoundMsg	: "Nie znaleziono szukanego has?a.",

// Replace Dialog
DlgReplaceTitle			: "Zamie?",
DlgReplaceFindLbl		: "Znajd驕:",
DlgReplaceReplaceLbl	: "Zast?p przez:",
DlgReplaceCaseChk		: "Uwzgl?dnij wielko?? liter",
DlgReplaceReplaceBtn	: "Zast?p",
DlgReplaceReplAllBtn	: "Zast?p wszystko",
DlgReplaceWordChk		: "Ca?e s?owa",

// Paste Operations / Dialog
PasteErrorCut	: "Ustawienia bezpiecze?stwa Twojej przegl?darki nie pozwalaj? na automatyczne wycinanie tekstu. U髒yj skr籀tu klawiszowego Ctrl+X.",
PasteErrorCopy	: "Ustawienia bezpiecze?stwa Twojej przegl?darki nie pozwalaj? na automatyczne kopiowanie tekstu. U髒yj skr籀tu klawiszowego Ctrl+C.",

PasteAsText		: "Wklej jako czysty tekst",
PasteFromWord	: "Wklej z Worda",

DlgPasteMsg2	: "Prosz? wklei? w poni髒szym polu u髒ywaj?c klawiaturowego skr籀tu (<STRONG>Ctrl+V</STRONG>) i klikn?? <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignoruj definicje 'Font Face'",
DlgPasteRemoveStyles	: "Usu? definicje Styl籀w",
DlgPasteCleanBox		: "Wyczy??",

// Color Picker
ColorAutomatic	: "Automatycznie",
ColorMoreColors	: "Wi?cej kolor籀w...",

// Document Properties
DocProps		: "W?a?ciwo?ci dokumentu",

// Anchor Dialog
DlgAnchorTitle		: "W?a?ciwo?ci kotwicy",
DlgAnchorName		: "Nazwa kotwicy",
DlgAnchorErrorName	: "Wpisz nazw? kotwicy",

// Speller Pages Dialog
DlgSpellNotInDic		: "S?owa nie ma w s?owniku",
DlgSpellChangeTo		: "Zmie? na",
DlgSpellBtnIgnore		: "Ignoruj",
DlgSpellBtnIgnoreAll	: "Ignoruj wszystkie",
DlgSpellBtnReplace		: "Zmie?",
DlgSpellBtnReplaceAll	: "Zmie? wszystkie",
DlgSpellBtnUndo			: "Undo",
DlgSpellNoSuggestions	: "- Brak sugestii -",
DlgSpellProgress		: "Trwa sprawdzanie ...",
DlgSpellNoMispell		: "Sprawdzanie zako?czone: nie znaleziono b??d籀w",
DlgSpellNoChanges		: "Sprawdzanie zako?czone: nie zmieniono 髒adnego s?owa",
DlgSpellOneChange		: "Sprawdzanie zako?czone: zmieniono jedno s?owo",
DlgSpellManyChanges		: "Sprawdzanie zako?czone: zmieniono %l s?籀w",

IeSpellDownload			: "S?ownik nie jest zainstalowany. Chcesz go ?ci?gn???",

// Button Dialog
DlgButtonText		: "Tekst (Warto??)",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nazwa",
DlgCheckboxValue	: "Warto??",
DlgCheckboxSelected	: "Zaznaczony",

// Form Dialog
DlgFormName		: "Nazwa",
DlgFormAction	: "Akcja",
DlgFormMethod	: "Metoda",

// Select Field Dialog
DlgSelectName		: "Nazwa",
DlgSelectValue		: "Warto??",
DlgSelectSize		: "Rozmiar",
DlgSelectLines		: "linii",
DlgSelectChkMulti	: "Wielokrotny wyb籀r",
DlgSelectOpAvail	: "Dost?pne opcje",
DlgSelectOpText		: "Tekst",
DlgSelectOpValue	: "Warto??",
DlgSelectBtnAdd		: "Dodaj",
DlgSelectBtnModify	: "Zmie?",
DlgSelectBtnUp		: "Do g籀ry",
DlgSelectBtnDown	: "Do do?u",
DlgSelectBtnSetValue : "Ustaw warto?? zaznaczon?",
DlgSelectBtnDelete	: "Usu?",

// Textarea Dialog
DlgTextareaName	: "Nazwa",
DlgTextareaCols	: "Kolumnu",
DlgTextareaRows	: "Wiersze",

// Text Field Dialog
DlgTextName			: "Nazwa",
DlgTextValue		: "Warto??",
DlgTextCharWidth	: "Szeroko?? w znakach",
DlgTextMaxChars		: "Max. szeroko??",
DlgTextType			: "Typ",
DlgTextTypeText		: "Tekst",
DlgTextTypePass		: "Has?o",

// Hidden Field Dialog
DlgHiddenName	: "Nazwa",
DlgHiddenValue	: "Warto??",

// Bulleted List Dialog
BulletedListProp	: "W?a?ciwo?ci listy punktowanej",
NumberedListProp	: "W?a?ciwo?ci listy numerowanej",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Ko?o",
DlgLstTypeDisc		: "Dysk",
DlgLstTypeSquare	: "Kwadrat",
DlgLstTypeNumbers	: "Cyfry (1, 2, 3)",
DlgLstTypeLCase		: "Ma?e litery (a, b, c)",
DlgLstTypeUCase		: "Du髒e litery (A, B, C)",
DlgLstTypeSRoman	: "Numeracja rzymska (i, ii, iii)",
DlgLstTypeLRoman	: "Numeracja rzymska (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Og籀lne",
DlgDocBackTab		: "T?o",
DlgDocColorsTab		: "Kolory i marginesy",
DlgDocMetaTab		: "Meta Dane",

DlgDocPageTitle		: "Tytu? strony",
DlgDocLangDir		: "Kierunek pisania",
DlgDocLangDirLTR	: "Od lewej do prawej (LTR)",
DlgDocLangDirRTL	: "Od prawej do lewej (RTL)",
DlgDocLangCode		: "Kod j?zyka",
DlgDocCharSet		: "Kodowanie znak籀w",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Inne kodowanie znak籀w",

DlgDocDocType		: "Nag?owek typu dokumentu",
DlgDocDocTypeOther	: "Inny typ dokumentu",
DlgDocIncXHTML		: "Do??cz deklaracj? XHTML",
DlgDocBgColor		: "Kolor t?a",
DlgDocBgImage		: "Obrazek t?a",
DlgDocBgNoScroll	: "T?o nieruchome",
DlgDocCText			: "Tekst",
DlgDocCLink			: "Hiper??cze",
DlgDocCVisited		: "Odwiedzane hiper??cze",
DlgDocCActive		: "Aktywne hiper??cze",
DlgDocMargins		: "Marginesy strony",
DlgDocMaTop			: "G籀rny",
DlgDocMaLeft		: "Lewy",
DlgDocMaRight		: "Prawy",
DlgDocMaBottom		: "Dolny",
DlgDocMeIndex		: "S?owa kluczowe (oddzielone przecinkami)",
DlgDocMeDescr		: "Opis dokumentu",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Podgl?d",

// Templates Dialog
Templates			: "Sablony",
DlgTemplatesTitle	: "Szablony zawarto?ci",
DlgTemplatesSelMsg	: "Wybierz szablon do otwarcia w edytorze<br>(obecna zawarto?? okna edytora zostanie utracona):",
DlgTemplatesLoading	: "?adowanie listy szablon籀w. Prosz? czeka?...",
DlgTemplatesNoTpl	: "(Brak zdefiniowanych szablon籀w)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "O ...",
DlgAboutBrowserInfoTab	: "O przegl?darce",
DlgAboutLicenseTab	: "Licencja",
DlgAboutVersion		: "wersja",
DlgAboutInfo		: "Wi?cej informacji uzyskasz pod adresem"
};
