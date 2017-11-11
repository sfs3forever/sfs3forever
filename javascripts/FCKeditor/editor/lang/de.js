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
 * German language file.
 $Id: de.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Symbolleiste einklappen",
ToolbarExpand		: "Symbolleiste ausklappen",

// Toolbar Items and Context Menu
Save				: "Speichern",
NewPage				: "Neue Seite",
Preview				: "Vorschau",
Cut					: "Ausschneiden",
Copy				: "Kopieren",
Paste				: "Einf羹gen",
PasteText			: "aus Textdatei einf羹gen",
PasteWord			: "aus MS-Word einf羹gen",
Print				: "Drucken",
SelectAll			: "Alles ausw瓣hlen",
RemoveFormat		: "Formatierungen entfernen",
InsertLinkLbl		: "Link",
InsertLink			: "Link einf羹gen/editieren",
RemoveLink			: "Link entfernen",
Anchor				: "Anker einf羹gen/editieren",
InsertImageLbl		: "Bild",
InsertImage			: "Bild einf羹gen/editieren",
InsertFlashLbl		: "Flash",
InsertFlash			: "Flash einf羹gen/editieren",
InsertTableLbl		: "Tabelle",
InsertTable			: "Tabelle einf羹gen/editieren",
InsertLineLbl		: "Linie",
InsertLine			: "Horizontale Linie einf羹gen",
InsertSpecialCharLbl: "Sonderzeichen",
InsertSpecialChar	: "Sonderzeichen einf羹gen/editieren",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Smiley einf羹gen",
About				: "?ber FCKeditor",
Bold				: "Fett",
Italic				: "Kursiv",
Underline			: "Unterstrichen",
StrikeThrough		: "Durchgestrichen",
Subscript			: "Tiefgestellt",
Superscript			: "Hochgestellt",
LeftJustify			: "Linksb羹ndig",
CenterJustify		: "Zentriert",
RightJustify		: "Rechtsb羹ndig",
BlockJustify		: "Blocksatz",
DecreaseIndent		: "Einzug verringern",
IncreaseIndent		: "Einzug erh繹hen",
Undo				: "R羹ckg瓣ngig",
Redo				: "Wiederherstellen",
NumberedListLbl		: "Nummerierte Liste",
NumberedList		: "Nummerierte Liste einf羹gen/entfernen",
BulletedListLbl		: "Liste",
BulletedList		: "Liste einf羹gen/entfernen",
ShowTableBorders	: "Zeige Tabellenrahmen",
ShowDetails			: "Zeige Details",
Style				: "Stil",
FontFormat			: "Format",
Font				: "Schriftart",
FontSize			: "Gr繹?e",
TextColor			: "Textfarbe",
BGColor				: "Hintergrundfarbe",
Source				: "Quellcode",
Find				: "Finden",
Replace				: "Ersetzen",
SpellCheck			: "Rechtschreibpr羹fung",
UniversalKeyboard	: "Universal-Tastatur",
PageBreakLbl		: "Seitenumbruch",
PageBreak			: "Seitenumbruch einf羹gen",

Form			: "Formular",
Checkbox		: "Checkbox",
RadioButton		: "Radiobutton",
TextField		: "Textfeld einzeilig",
Textarea		: "Textfeld mehrzeilig",
HiddenField		: "verstecktes Feld",
Button			: "Klickbutton",
SelectionField	: "Auswahlfeld",
ImageButton		: "Bildbutton",

FitWindow		: "Editor maximieren",

// Context Menu
EditLink			: "Link editieren",
CellCM				: "Zelle",
RowCM				: "Zeile",
ColumnCM			: "Spalte",
InsertRow			: "Zeile einf羹gen",
DeleteRows			: "Zeile entfernen",
InsertColumn		: "Spalte einf羹gen",
DeleteColumns		: "Spalte l繹schen",
InsertCell			: "Zelle einf羹gen",
DeleteCells			: "Zelle l繹schen",
MergeCells			: "Zellen vereinen",
SplitCell			: "Zelle teilen",
TableDelete			: "Tabelle l繹schen",
CellProperties		: "Zellen Eigenschaften",
TableProperties		: "Tabellen Eigenschaften",
ImageProperties		: "Bild Eigenschaften",
FlashProperties		: "Flash Eigenschaften",

AnchorProp			: "Anker Eigenschaften",
ButtonProp			: "Button Eigenschaften",
CheckboxProp		: "Checkbox Eigenschaften",
HiddenFieldProp		: "Verstecktes Feld Eigenschaften",
RadioButtonProp		: "Optionsfeld Eigenschaften",
ImageButtonProp		: "Bildbutton Eigenschaften",
TextFieldProp		: "Textfeld (einzeilig) Eigenschaften",
SelectionFieldProp	: "Auswahlfeld Eigenschaften",
TextareaProp		: "Textfeld (mehrzeilig) Eigenschaften",
FormProp			: "Formular Eigenschaften",

FontFormats			: "Normal;Formatiert;Addresse;?berschrift 1;?berschrift 2;?berschrift 3;?berschrift 4;?berschrift 5;?berschrift 6;Normal (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Bearbeite XHTML. Bitte warten...",
Done				: "Fertig",
PasteWordConfirm	: "Der Text, den Sie einf羹gen m繹chten, scheint aus MS-Word kopiert zu sein. M繹chten Sie ihn zuvor bereinigen lassen?",
NotCompatiblePaste	: "Diese Funktion steht nur im Internet Explorer ab Version 5.5 zur Verf羹gung. M繹chten Sie den Text unbereinigt einf羹gen?",
UnknownToolbarItem	: "Unbekanntes Men羹leisten-Objekt \"%1\"",
UnknownCommand		: "Unbekannter Befehl \"%1\"",
NotImplemented		: "Befehl nicht implementiert",
UnknownToolbarSet	: "Men羹leiste \"%1\" existiert nicht",
NoActiveX			: "Die Sicherheitseinstellungen Ihres Browsers beschr瓣nken evtl. einige Funktionen des Editors. Aktivieren Sie die Option \"ActiveX-Steuerelemente und Plugins ausf羹hren\" in den Sicherheitseinstellungen, um diese Funktionen nutzen zu k繹nnen",
BrowseServerBlocked : "Ein Auswahlfenster konnte nicht ge繹ffnet werden. Stellen Sie sicher, das alle Popup-Blocker ausgeschaltet sind.",
DialogBlocked		: "Das Dialog-Fenster konnte nicht ge繹ffnet werden. Stellen Sie sicher, das alle Popup-Blocker ausgeschaltet sind.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Abbrechen",
DlgBtnClose			: "Schlie?en",
DlgBtnBrowseServer	: "Server durchsuchen",
DlgAdvancedTag		: "Erweitert",
DlgOpOther			: "<andere>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Bitte tragen Sie die URL ein",

// General Dialogs Labels
DlgGenNotSet		: "< nichts >",
DlgGenId			: "ID",
DlgGenLangDir		: "Schreibrichtung",
DlgGenLangDirLtr	: "Links nach Rechts (LTR)",
DlgGenLangDirRtl	: "Rechts nach Links (RTL)",
DlgGenLangCode		: "Sprachenk羹rzel",
DlgGenAccessKey		: "Schl羹ssel",
DlgGenName			: "Name",
DlgGenTabIndex		: "Tab Index",
DlgGenLongDescr		: "Langform URL",
DlgGenClass			: "Stylesheet Klasse",
DlgGenTitle			: "Titel Beschreibung",
DlgGenContType		: "Content Beschreibung",
DlgGenLinkCharset	: "Ziel-Zeichensatz",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "Bild Eigenschaften",
DlgImgInfoTab		: "Bild-Info",
DlgImgBtnUpload		: "Zum Server senden",
DlgImgURL			: "Bildauswahl",
DlgImgUpload		: "Upload",
DlgImgAlt			: "Alternativer Text",
DlgImgWidth			: "Breite",
DlgImgHeight		: "H繹he",
DlgImgLockRatio		: "Gr繹?enverh瓣ltniss beibehalten",
DlgBtnResetSize		: "Gr繹?e zur羹cksetzen",
DlgImgBorder		: "Rahmen",
DlgImgHSpace		: "H-Abstand",
DlgImgVSpace		: "V-Abstand",
DlgImgAlign			: "Ausrichtung",
DlgImgAlignLeft		: "Links",
DlgImgAlignAbsBottom: "Abs Unten",
DlgImgAlignAbsMiddle: "Abs Mitte",
DlgImgAlignBaseline	: "Baseline",
DlgImgAlignBottom	: "Unten",
DlgImgAlignMiddle	: "Mitte",
DlgImgAlignRight	: "Rechts",
DlgImgAlignTextTop	: "Text Oben",
DlgImgAlignTop		: "Oben",
DlgImgPreview		: "Vorschau",
DlgImgAlertUrl		: "Bitte geben Sie die Bild-URL an",
DlgImgLinkTab		: "Link",

// Flash Dialog
DlgFlashTitle		: "Flash Eigenschaften",
DlgFlashChkPlay		: "autom. Abspielen",
DlgFlashChkLoop		: "Endlosschleife",
DlgFlashChkMenu		: "Flash-Men羹 aktivieren",
DlgFlashScale		: "Skalierung",
DlgFlashScaleAll	: "Alles anzeigen",
DlgFlashScaleNoBorder	: "ohne Rand",
DlgFlashScaleFit	: "Passgenau",

// Link Dialog
DlgLnkWindowTitle	: "Link",
DlgLnkInfoTab		: "Link Info",
DlgLnkTargetTab		: "Zielseite",

DlgLnkType			: "Link-Typ",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Anker in dieser Seite",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protokoll",
DlgLnkProtoOther	: "<anderes>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Anker ausw瓣hlen",
DlgLnkAnchorByName	: "nach Anker Name",
DlgLnkAnchorById	: "nach Element Id",
DlgLnkNoAnchors		: "<keine Anker im Dokument vorhanden>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "E-Mail Addresse",
DlgLnkEMailSubject	: "Betreffzeile",
DlgLnkEMailBody		: "Nachrichtentext",
DlgLnkUpload		: "Upload",
DlgLnkBtnUpload		: "Zum Server senden",

DlgLnkTarget		: "Zielseite",
DlgLnkTargetFrame	: "<Frame>",
DlgLnkTargetPopup	: "<Pop-up Fenster>",
DlgLnkTargetBlank	: "Neues Fenster (_blank)",
DlgLnkTargetParent	: "Oberes Fenster (_parent)",
DlgLnkTargetSelf	: "Gleiches Fenster (_self)",
DlgLnkTargetTop		: "Oberstes Fenster (_top)",
DlgLnkTargetFrameName	: "Ziel-Fenster Name",
DlgLnkPopWinName	: "Pop-up Fenster Name",
DlgLnkPopWinFeat	: "Pop-up Fenster Eigenschaften",
DlgLnkPopResize		: "Vergr繹?erbar",
DlgLnkPopLocation	: "Adress-Leiste",
DlgLnkPopMenu		: "Men羹-Leiste",
DlgLnkPopScroll		: "Rollbalken",
DlgLnkPopStatus		: "Statusleiste",
DlgLnkPopToolbar	: "Werkzeugleiste",
DlgLnkPopFullScrn	: "Vollbild (IE)",
DlgLnkPopDependent	: "Abh瓣ngig (Netscape)",
DlgLnkPopWidth		: "Breite",
DlgLnkPopHeight		: "H繹he",
DlgLnkPopLeft		: "Linke Position",
DlgLnkPopTop		: "Obere Position",

DlnLnkMsgNoUrl		: "Bitte geben Sie die Link-URL an",
DlnLnkMsgNoEMail	: "Bitte geben Sie e-Mail Adresse an",
DlnLnkMsgNoAnchor	: "Bitte w瓣hlen Sie einen Anker aus",
DlnLnkMsgInvPopName	: "Der Name des Popups muss mit einem Buchstaben beginnen und darf keine Leerzeichen enthalten",

// Color Dialog
DlgColorTitle		: "Farbauswahl",
DlgColorBtnClear	: "Keine Farbe",
DlgColorHighlight	: "Vorschau",
DlgColorSelected	: "Ausgew瓣hlt",

// Smiley Dialog
DlgSmileyTitle		: "Smiley ausw瓣hlen",

// Special Character Dialog
DlgSpecialCharTitle	: "Sonderzeichen ausw瓣hlen",

// Table Dialog
DlgTableTitle		: "Tabellen Eigenschaften",
DlgTableRows		: "Zeile",
DlgTableColumns		: "Spalte",
DlgTableBorder		: "Rahmen",
DlgTableAlign		: "Ausrichtung",
DlgTableAlignNotSet	: "<nichts>",
DlgTableAlignLeft	: "Links",
DlgTableAlignCenter	: "Zentriert",
DlgTableAlignRight	: "Rechts",
DlgTableWidth		: "Breite",
DlgTableWidthPx		: "Pixel",
DlgTableWidthPc		: "%",
DlgTableHeight		: "H繹he",
DlgTableCellSpace	: "Zellenabstand au?en",
DlgTableCellPad		: "Zellenabstand innen",
DlgTableCaption		: "?berschrift",
DlgTableSummary		: "Inhalts羹bersicht",

// Table Cell Dialog
DlgCellTitle		: "Zellen-Eigenschaften",
DlgCellWidth		: "Breite",
DlgCellWidthPx		: "Pixel",
DlgCellWidthPc		: "%",
DlgCellHeight		: "H繹he",
DlgCellWordWrap		: "Umbruch",
DlgCellWordWrapNotSet	: "<nichts>",
DlgCellWordWrapYes	: "Ja",
DlgCellWordWrapNo	: "Nein",
DlgCellHorAlign		: "Horizontale Ausrichtung",
DlgCellHorAlignNotSet	: "<nichts>",
DlgCellHorAlignLeft	: "Links",
DlgCellHorAlignCenter	: "Zentriert",
DlgCellHorAlignRight: "Rechts",
DlgCellVerAlign		: "Vertikale Ausrichtung",
DlgCellVerAlignNotSet	: "<nichts>",
DlgCellVerAlignTop	: "Oben",
DlgCellVerAlignMiddle	: "Mitte",
DlgCellVerAlignBottom	: "Unten",
DlgCellVerAlignBaseline	: "Grundlinie",
DlgCellRowSpan		: "Zeilen zusammenfassen",
DlgCellCollSpan		: "Spalten zusammenfassen",
DlgCellBackColor	: "Hintergrundfarbe",
DlgCellBorderColor	: "Rahmenfarbe",
DlgCellBtnSelect	: "Auswahl...",

// Find Dialog
DlgFindTitle		: "Finden",
DlgFindFindBtn		: "Finden",
DlgFindNotFoundMsg	: "Der gesuchte Text wurde nicht gefunden.",

// Replace Dialog
DlgReplaceTitle			: "Ersetzen",
DlgReplaceFindLbl		: "Suche nach:",
DlgReplaceReplaceLbl	: "Ersetze mit:",
DlgReplaceCaseChk		: "Gro?-Kleinschreibung beachten",
DlgReplaceReplaceBtn	: "Ersetzen",
DlgReplaceReplAllBtn	: "Alle Ersetzen",
DlgReplaceWordChk		: "Nur ganze Worte suchen",

// Paste Operations / Dialog
PasteErrorCut	: "Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch auszuschneiden. Bitte benutzen Sie die System-Zwischenablage 羹ber STRG-X (ausschneiden) und STRG-V (einf羹gen).",
PasteErrorCopy	: "Die Sicherheitseinstellungen Ihres Browsers lassen es nicht zu, den Text automatisch kopieren. Bitte benutzen Sie die System-Zwischenablage 羹ber STRG-C (kopieren).",

PasteAsText		: "Als Text einf羹gen",
PasteFromWord	: "Aus Word einf羹gen",

DlgPasteMsg2	: "Bitte f羹gen Sie den Text in der folgenden Box 羹ber die Tastatur (mit <STRONG>Ctrl+V</STRONG>) ein und best瓣tigen Sie mit <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignoriere Schriftart-Definitionen",
DlgPasteRemoveStyles	: "Entferne Style-Definitionen",
DlgPasteCleanBox		: "Inhalt aufr瓣umen",

// Color Picker
ColorAutomatic	: "Automatisch",
ColorMoreColors	: "Weitere Farben...",

// Document Properties
DocProps		: "Dokument Eigenschaften",

// Anchor Dialog
DlgAnchorTitle		: "Anker Eigenschaften",
DlgAnchorName		: "Anker Name",
DlgAnchorErrorName	: "Bitte geben Sie den Namen des Ankers ein",

// Speller Pages Dialog
DlgSpellNotInDic		: "Nicht im W繹rterbuch",
DlgSpellChangeTo		: "?ndern in",
DlgSpellBtnIgnore		: "Ignorieren",
DlgSpellBtnIgnoreAll	: "Alle Ignorieren",
DlgSpellBtnReplace		: "Ersetzen",
DlgSpellBtnReplaceAll	: "Alle Ersetzen",
DlgSpellBtnUndo			: "R羹ckg瓣ngig",
DlgSpellNoSuggestions	: " - keine Vorschl瓣ge - ",
DlgSpellProgress		: "Rechtschreibpr羹fung l瓣uft...",
DlgSpellNoMispell		: "Rechtschreibpr羹fung abgeschlossen - keine Fehler gefunden",
DlgSpellNoChanges		: "Rechtschreibpr羹fung abgeschlossen - keine Worte ge瓣ndert",
DlgSpellOneChange		: "Rechtschreibpr羹fung abgeschlossen - ein Wort ge瓣ndert",
DlgSpellManyChanges		: "Rechtschreibpr羹fung abgeschlossen - %1 W繹rter ge瓣ndert",

IeSpellDownload			: "Rechtschreibpr羹fung nicht installiert. M繹chten Sie sie jetzt herunterladen?",

// Button Dialog
DlgButtonText		: "Text (Wert)",
DlgButtonType		: "Typ",
DlgButtonTypeBtn	: "Button",
DlgButtonTypeSbm	: "Absenden",
DlgButtonTypeRst	: "Zur羹cksetzen",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Name",
DlgCheckboxValue	: "Wert",
DlgCheckboxSelected	: "ausgew瓣hlt",

// Form Dialog
DlgFormName		: "Name",
DlgFormAction	: "Action",
DlgFormMethod	: "Method",

// Select Field Dialog
DlgSelectName		: "Name",
DlgSelectValue		: "Wert",
DlgSelectSize		: "Gr繹?e",
DlgSelectLines		: "Linien",
DlgSelectChkMulti	: "Erlaube Mehrfachauswahl",
DlgSelectOpAvail	: "M繹gliche Optionen",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Wert",
DlgSelectBtnAdd		: "Hinzuf羹gen",
DlgSelectBtnModify	: "?ndern",
DlgSelectBtnUp		: "Hoch",
DlgSelectBtnDown	: "Runter",
DlgSelectBtnSetValue : "Setze als Standardwert",
DlgSelectBtnDelete	: "Entfernen",

// Textarea Dialog
DlgTextareaName	: "Name",
DlgTextareaCols	: "Spalten",
DlgTextareaRows	: "Reihen",

// Text Field Dialog
DlgTextName			: "Name",
DlgTextValue		: "Wert",
DlgTextCharWidth	: "Zeichenbreite",
DlgTextMaxChars		: "Max. Zeichen",
DlgTextType			: "Typ",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Passwort",

// Hidden Field Dialog
DlgHiddenName	: "Name",
DlgHiddenValue	: "Wert",

// Bulleted List Dialog
BulletedListProp	: "Listen-Eigenschaften",
NumberedListProp	: "Nummerierte Listen-Eigenschaften",
DlgLstStart			: "Start",
DlgLstType			: "Typ",
DlgLstTypeCircle	: "Ring",
DlgLstTypeDisc		: "Kreis",
DlgLstTypeSquare	: "Quadrat",
DlgLstTypeNumbers	: "Nummern (1, 2, 3)",
DlgLstTypeLCase		: "Kleinbuchstaben (a, b, c)",
DlgLstTypeUCase		: "Gro?buchstaben (A, B, C)",
DlgLstTypeSRoman	: "Kleine r繹mische Zahlen (i, ii, iii)",
DlgLstTypeLRoman	: "Gro?e r繹mische Zahlen (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Allgemein",
DlgDocBackTab		: "Hintergrund",
DlgDocColorsTab		: "Farben und Abst瓣nde",
DlgDocMetaTab		: "Metadaten",

DlgDocPageTitle		: "Seitentitel",
DlgDocLangDir		: "Schriftrichtung",
DlgDocLangDirLTR	: "Links nach Rechts",
DlgDocLangDirRTL	: "Rechts nach Links",
DlgDocLangCode		: "Sprachk羹rzel",
DlgDocCharSet		: "Zeichenkodierung",
DlgDocCharSetCE		: "Zentraleurop瓣isch",
DlgDocCharSetCT		: "traditionell Chinesisch (Big5)",
DlgDocCharSetCR		: "Kyrillisch",
DlgDocCharSetGR		: "Griechisch",
DlgDocCharSetJP		: "Japanisch",
DlgDocCharSetKR		: "Koreanisch",
DlgDocCharSetTR		: "T羹rkisch",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Westeurop瓣isch",
DlgDocCharSetOther	: "Andere Zeichenkodierung",

DlgDocDocType		: "Dokumententyp",
DlgDocDocTypeOther	: "Anderer Dokumententyp",
DlgDocIncXHTML		: "Beziehe XHTML Deklarationen ein",
DlgDocBgColor		: "Hintergrundfarbe",
DlgDocBgImage		: "Hintergrundbild URL",
DlgDocBgNoScroll	: "feststehender Hintergrund",
DlgDocCText			: "Text",
DlgDocCLink			: "Link",
DlgDocCVisited		: "Besuchter Link",
DlgDocCActive		: "Aktiver Link",
DlgDocMargins		: "Seitenr瓣nder",
DlgDocMaTop			: "Oben",
DlgDocMaLeft		: "Links",
DlgDocMaRight		: "Rechts",
DlgDocMaBottom		: "Unten",
DlgDocMeIndex		: "Schl羹sselw繹rter (durch Komma getrennt)",
DlgDocMeDescr		: "Dokument-Beschreibung",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vorschau",

// Templates Dialog
Templates			: "Vorlagen",
DlgTemplatesTitle	: "Vorlagen",
DlgTemplatesSelMsg	: "Klicken Sie auf eine Vorlage, um sie im Editor zu 繹ffnen (der aktuelle Inhalt wird dabei gel繹scht!):",
DlgTemplatesLoading	: "Liste der Vorlagen wird geladen. Bitte warten...",
DlgTemplatesNoTpl	: "(keine Vorlagen definiert)",
DlgTemplatesReplace	: "Aktuellen Inhalt ersetzen",

// About Dialog
DlgAboutAboutTab	: "?ber",
DlgAboutBrowserInfoTab	: "Browser-Info",
DlgAboutLicenseTab	: "Lizenz",
DlgAboutVersion		: "Version",
DlgAboutInfo		: "F羹r weitere Informationen siehe"
};
