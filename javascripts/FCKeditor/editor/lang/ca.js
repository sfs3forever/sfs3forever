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
 * Catalan language file.
 $Id: ca.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Col繚lapsa la barra",
ToolbarExpand		: "Amplia la barra",

// Toolbar Items and Context Menu
Save				: "Desa",
NewPage				: "Nova P?gina",
Preview				: "Vista Pr癡via",
Cut					: "Retalla",
Copy				: "Copia",
Paste				: "Enganxa",
PasteText			: "Enganxa com a text no formatat",
PasteWord			: "Enganxa des del Word",
Print				: "Imprimeix",
SelectAll			: "Selecciona-ho tot",
RemoveFormat		: "Elimina Format",
InsertLinkLbl		: "Enlla癟",
InsertLink			: "Insereix/Edita enlla癟",
RemoveLink			: "Elimina enlla癟",
Anchor				: "Insereix/Edita ?ncora",
InsertImageLbl		: "Imatge",
InsertImage			: "Insereix/Edita imatge",
InsertFlashLbl		: "Flash",
InsertFlash			: "Insereix/Edita Flash",
InsertTableLbl		: "Taula",
InsertTable			: "Insereix/Edita taula",
InsertLineLbl		: "L穩nia",
InsertLine			: "Insereix l穩nia horitzontal",
InsertSpecialCharLbl: "Car?cter Especial",
InsertSpecialChar	: "Insereix car?cter especial",
InsertSmileyLbl		: "Icona",
InsertSmiley		: "Insereix icona",
About				: "Quant a FCKeditor",
Bold				: "Negreta",
Italic				: "Cursiva",
Underline			: "Subratllat",
StrikeThrough		: "Barrat",
Subscript			: "Sub穩ndex",
Superscript			: "Super穩ndex",
LeftJustify			: "Aliniament esquerra",
CenterJustify		: "Aliniament centrat",
RightJustify		: "Aliniament dreta",
BlockJustify		: "Justifica",
DecreaseIndent		: "Sagna el text",
IncreaseIndent		: "Treu el sagnat del text",
Undo				: "Desf矇s",
Redo				: "Ref矇s",
NumberedListLbl		: "Llista numerada",
NumberedList		: "Aplica o elimina la llista numerada",
BulletedListLbl		: "Llista de pics",
BulletedList		: "Aplica o elimina la llista de pics",
ShowTableBorders	: "Mostra les vores de les taules",
ShowDetails			: "Mostra detalls",
Style				: "Estil",
FontFormat			: "Format",
Font				: "Tipus de lletra",
FontSize			: "Mida",
TextColor			: "Color de Text",
BGColor				: "Color de Fons",
Source				: "Codi font",
Find				: "Cerca",
Replace				: "Reempla癟a",
SpellCheck			: "Revisa l'ortografia",
UniversalKeyboard	: "Teclat universal",
PageBreakLbl		: "Salt de p?gina",
PageBreak			: "Insereix salt de p?gina",

Form			: "Formulari",
Checkbox		: "Casella de verificaci籀",
RadioButton		: "Bot籀 d'opci籀",
TextField		: "Camp de text",
Textarea		: "?rea de text",
HiddenField		: "Camp ocult",
Button			: "Bot籀",
SelectionField	: "Camp de selecci籀",
ImageButton		: "Bot籀 d'imatge",

FitWindow		: "Maximiza la mida de l'editor",

// Context Menu
EditLink			: "Edita l'enlla癟",
CellCM				: "Cel繚la",
RowCM				: "Fila",
ColumnCM			: "Columna",
InsertRow			: "Insereix una fila",
DeleteRows			: "Suprimeix una fila",
InsertColumn		: "Afegeix una columna",
DeleteColumns		: "Suprimeix una columna",
InsertCell			: "Insereix una cel繚la",
DeleteCells			: "Suprimeix les cel繚les",
MergeCells			: "Fusiona les cel繚les",
SplitCell			: "Separa les cel繚les",
TableDelete			: "Suprimeix la taula",
CellProperties		: "Propietats de la cel繚la",
TableProperties		: "Propietats de la taula",
ImageProperties		: "Propietats de la imatge",
FlashProperties		: "Propietats del Flash",

AnchorProp			: "Propietats de l'?ncora",
ButtonProp			: "Propietats del bot籀",
CheckboxProp		: "Propietats de la casella de verificaci籀",
HiddenFieldProp		: "Propietats del camp ocult",
RadioButtonProp		: "Propietats del bot籀 d'opci籀",
ImageButtonProp		: "Propietats del bot籀 d'imatge",
TextFieldProp		: "Propietats del camp de text",
SelectionFieldProp	: "Propietats del camp de selecci籀",
TextareaProp		: "Propietats de l'?rea de text",
FormProp			: "Propietats del formulari",

FontFormats			: "Normal;Formatejat;Adre癟a;Encap癟alament 1;Encap癟alament 2;Encap癟alament 3;Encap癟alament 4;Encap癟alament 5;Encap癟alament 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Processant XHTML. Si us plau esperi...",
Done				: "Fet",
PasteWordConfirm	: "El text que voleu enganxar sembla provenir de Word. Voleu netejar aquest text abans que sigui enganxat?",
NotCompatiblePaste	: "Aquesta funci籀 矇s disponible per a Internet Explorer versi籀 5.5 o superior. Voleu enganxar sense netejar?",
UnknownToolbarItem	: "Element de la barra d'eines desconegut \"%1\"",
UnknownCommand		: "Nom de comanda desconegut \"%1\"",
NotImplemented		: "M癡tode no implementat",
UnknownToolbarSet	: "Conjunt de barra d'eines \"%1\" inexistent",
NoActiveX			: "Les prefer癡ncies del navegador poden limitar algunes funcions d'aquest editor. Cal habilitar l'opci籀 \"Executa controls ActiveX i plug-ins\". Poden sorgir errors i poden faltar algunes funcions.",
BrowseServerBlocked : "El visualitzador de recursos no s'ha pogut obrir. Assegura't de que els bloquejos de finestres emergents estan desactivats.",
DialogBlocked		: "No ha estat possible obrir una finestra de di?leg. Assegura't de que els bloquejos de finestres emergents estan desactivats.",

// Dialogs
DlgBtnOK			: "D'acord",
DlgBtnCancel		: "Cancel繚la",
DlgBtnClose			: "Tanca",
DlgBtnBrowseServer	: "Veure servidor",
DlgAdvancedTag		: "Avan癟at",
DlgOpOther			: "Altres",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Si us plau, afegiu la URL",

// General Dialogs Labels
DlgGenNotSet		: "<no definit>",
DlgGenId			: "Id",
DlgGenLangDir		: "Direcci籀 de l'idioma",
DlgGenLangDirLtr	: "D'esquerra a dreta (LTR)",
DlgGenLangDirRtl	: "De dreta a esquerra (RTL)",
DlgGenLangCode		: "Codi d'idioma",
DlgGenAccessKey		: "Clau d'acc矇s",
DlgGenName			: "Nom",
DlgGenTabIndex		: "Index de Tab",
DlgGenLongDescr		: "Descripci籀 llarga de la URL",
DlgGenClass			: "Classes del full d'estil",
DlgGenTitle			: "T穩tol consultiu",
DlgGenContType		: "Tipus de contingut consultiu",
DlgGenLinkCharset	: "Conjunt de car?cters font enlla癟at",
DlgGenStyle			: "Estil",

// Image Dialog
DlgImgTitle			: "Propietats de la imatge",
DlgImgInfoTab		: "Informaci籀 de la imatge",
DlgImgBtnUpload		: "Envia-la al servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Puja",
DlgImgAlt			: "Text alternatiu",
DlgImgWidth			: "Amplada",
DlgImgHeight		: "Al癟ada",
DlgImgLockRatio		: "Bloqueja les proporcions",
DlgBtnResetSize		: "Restaura la mida",
DlgImgBorder		: "Vora",
DlgImgHSpace		: "Espaiat horit.",
DlgImgVSpace		: "Espaiat vert.",
DlgImgAlign			: "Alineaci籀",
DlgImgAlignLeft		: "Ajusta a l'esquerra",
DlgImgAlignAbsBottom: "Abs Bottom",
DlgImgAlignAbsMiddle: "Abs Middle",
DlgImgAlignBaseline	: "Baseline",
DlgImgAlignBottom	: "Bottom",
DlgImgAlignMiddle	: "Middle",
DlgImgAlignRight	: "Ajusta a la dreta",
DlgImgAlignTextTop	: "Text Top",
DlgImgAlignTop		: "Top",
DlgImgPreview		: "Vista pr癡via",
DlgImgAlertUrl		: "Si us plau, escriviu la URL de la imatge",
DlgImgLinkTab		: "Enlla癟",

// Flash Dialog
DlgFlashTitle		: "Propietats del Flash",
DlgFlashChkPlay		: "Reproduci籀 autom?tica",
DlgFlashChkLoop		: "Bucle",
DlgFlashChkMenu		: "Habilita men繳 Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostra-ho tot",
DlgFlashScaleNoBorder	: "Sense vores",
DlgFlashScaleFit	: "Mida exacta",

// Link Dialog
DlgLnkWindowTitle	: "Enlla癟",
DlgLnkInfoTab		: "Informaci籀 de l'enlla癟",
DlgLnkTargetTab		: "Dest穩",

DlgLnkType			: "Tipus d'enlla癟",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "?ncora en aquesta p?gina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocol",
DlgLnkProtoOther	: "<altra>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Selecciona una ?ncora",
DlgLnkAnchorByName	: "Per nom d'?ncora",
DlgLnkAnchorById	: "Per Id d'element",
DlgLnkNoAnchors		: "<No hi ha ?ncores disponibles en aquest document>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Adre癟a d'E-Mail",
DlgLnkEMailSubject	: "Assumpte del missatge",
DlgLnkEMailBody		: "Cos del missatge",
DlgLnkUpload		: "Puja",
DlgLnkBtnUpload		: "Envia al servidor",

DlgLnkTarget		: "Dest穩",
DlgLnkTargetFrame	: "<marc>",
DlgLnkTargetPopup	: "<finestra emergent>",
DlgLnkTargetBlank	: "Nova finestra (_blank)",
DlgLnkTargetParent	: "Finestra pare (_parent)",
DlgLnkTargetSelf	: "Mateixa finestra (_self)",
DlgLnkTargetTop		: "Finestra Major (_top)",
DlgLnkTargetFrameName	: "Nom del marc de dest穩",
DlgLnkPopWinName	: "Nom finestra popup",
DlgLnkPopWinFeat	: "Caracter穩stiques finestra popup",
DlgLnkPopResize		: "Redimensionable",
DlgLnkPopLocation	: "Barra d'adre癟a",
DlgLnkPopMenu		: "Barra de men繳",
DlgLnkPopScroll		: "Barres d'scroll",
DlgLnkPopStatus		: "Barra d'estat",
DlgLnkPopToolbar	: "Barra d'eines",
DlgLnkPopFullScrn	: "Pantalla completa (IE)",
DlgLnkPopDependent	: "Depenent (Netscape)",
DlgLnkPopWidth		: "Amplada",
DlgLnkPopHeight		: "Al癟ada",
DlgLnkPopLeft		: "Posici籀 esquerra",
DlgLnkPopTop		: "Posici籀 dalt",

DlnLnkMsgNoUrl		: "Si us plau, escrigui l'enlla癟 URL",
DlnLnkMsgNoEMail	: "Si us plau, escrigui l'adre癟a e-mail",
DlnLnkMsgNoAnchor	: "Si us plau, escrigui l'?ncora",
DlnLnkMsgInvPopName	: "El nom de la finestra emergent ha de comen癟ar amb una lletra i no pot tenir espais",

// Color Dialog
DlgColorTitle		: "Selecciona el color",
DlgColorBtnClear	: "Neteja",
DlgColorHighlight	: "Real癟a",
DlgColorSelected	: "Selecciona",

// Smiley Dialog
DlgSmileyTitle		: "Insereix una icona",

// Special Character Dialog
DlgSpecialCharTitle	: "Selecciona el car?cter especial",

// Table Dialog
DlgTableTitle		: "Propietats de la taula",
DlgTableRows		: "Files",
DlgTableColumns		: "Columnes",
DlgTableBorder		: "Tamany vora",
DlgTableAlign		: "Alineaci籀",
DlgTableAlignNotSet	: "<No Definit>",
DlgTableAlignLeft	: "Esquerra",
DlgTableAlignCenter	: "Centre",
DlgTableAlignRight	: "Dreta",
DlgTableWidth		: "Amplada",
DlgTableWidthPx		: "p穩xels",
DlgTableWidthPc		: "percentatge",
DlgTableHeight		: "Al癟ada",
DlgTableCellSpace	: "Espaiat de cel繚les",
DlgTableCellPad		: "Encoixinament de cel繚les",
DlgTableCaption		: "T穩tol",
DlgTableSummary		: "Resum",

// Table Cell Dialog
DlgCellTitle		: "Propietats de la cel繚la",
DlgCellWidth		: "Amplada",
DlgCellWidthPx		: "p穩xels",
DlgCellWidthPc		: "percentatge",
DlgCellHeight		: "Al癟ada",
DlgCellWordWrap		: "Ajust de paraula",
DlgCellWordWrapNotSet	: "<No Definit>",
DlgCellWordWrapYes	: "Si",
DlgCellWordWrapNo	: "No",
DlgCellHorAlign		: "Alineaci籀 horitzontal",
DlgCellHorAlignNotSet	: "<No Definit>",
DlgCellHorAlignLeft	: "Esquerra",
DlgCellHorAlignCenter	: "Centre",
DlgCellHorAlignRight: "Dreta",
DlgCellVerAlign		: "Alineaci籀 vertical",
DlgCellVerAlignNotSet	: "<No definit>",
DlgCellVerAlignTop	: "Top",
DlgCellVerAlignMiddle	: "Middle",
DlgCellVerAlignBottom	: "Bottom",
DlgCellVerAlignBaseline	: "Baseline",
DlgCellRowSpan		: "Rows Span",
DlgCellCollSpan		: "Columns Span",
DlgCellBackColor	: "Color de fons",
DlgCellBorderColor	: "Color de la vora",
DlgCellBtnSelect	: "Seleccioneu...",

// Find Dialog
DlgFindTitle		: "Cerca",
DlgFindFindBtn		: "Cerca",
DlgFindNotFoundMsg	: "El text especificat no s'ha trobat.",

// Replace Dialog
DlgReplaceTitle			: "Reempla癟a",
DlgReplaceFindLbl		: "Cerca:",
DlgReplaceReplaceLbl	: "Rempla癟a amb:",
DlgReplaceCaseChk		: "Sensible a maj繳scules",
DlgReplaceReplaceBtn	: "Reempla癟a",
DlgReplaceReplAllBtn	: "Reempla癟a'ls tots",
DlgReplaceWordChk		: "Cerca paraula completa",

// Paste Operations / Dialog
PasteErrorCut	: "La seguretat del vostre navegador no permet executar autom?ticament les operacions de retallar. Si us plau, utilitzeu el teclat (Ctrl+X).",
PasteErrorCopy	: "La seguretat del vostre navegador no permet executar autom?ticament les operacions de copiar. Si us plau, utilitzeu el teclat (Ctrl+C).",

PasteAsText		: "Enganxa com a text sense format",
PasteFromWord	: "Enganxa com a Word",

DlgPasteMsg2	: "Si us plau, enganxeu dins del seg羹ent camp utilitzant el teclat (<STRONG>Ctrl+V</STRONG>) i premeu <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignora definicions de font",
DlgPasteRemoveStyles	: "Elimina definicions d'estil",
DlgPasteCleanBox		: "Neteja camp",

// Color Picker
ColorAutomatic	: "Autom?tic",
ColorMoreColors	: "M矇s colors...",

// Document Properties
DocProps		: "Propietats del document",

// Anchor Dialog
DlgAnchorTitle		: "Propietats de l'?ncora",
DlgAnchorName		: "Nom de l'?ncora",
DlgAnchorErrorName	: "Si us plau, escriviu el nom de l'ancora",

// Speller Pages Dialog
DlgSpellNotInDic		: "No 矇s al diccionari",
DlgSpellChangeTo		: "Canvia a",
DlgSpellBtnIgnore		: "Ignora",
DlgSpellBtnIgnoreAll	: "Ignora-les totes",
DlgSpellBtnReplace		: "Canvia",
DlgSpellBtnReplaceAll	: "Canvia-les totes",
DlgSpellBtnUndo			: "Desf矇s",
DlgSpellNoSuggestions	: "Cap suger癡ncia",
DlgSpellProgress		: "Comprovaci籀 ortogr?fica en progr矇s",
DlgSpellNoMispell		: "Comprovaci籀 ortogr?fica completada",
DlgSpellNoChanges		: "Comprovaci籀 ortogr?fica: cap paraulada canviada",
DlgSpellOneChange		: "Comprovaci籀 ortogr?fica: una paraula canviada",
DlgSpellManyChanges		: "Comprovaci籀 ortogr?fica %1 paraules canviades",

IeSpellDownload			: "Comprovaci籀 ortogr?fica no instal繚lada. Voleu descarregar-ho ara?",

// Button Dialog
DlgButtonText		: "Text (Valor)",
DlgButtonType		: "Tipus",
DlgButtonTypeBtn	: "Bot籀",
DlgButtonTypeSbm	: "Transmet formulari",
DlgButtonTypeRst	: "Reinicia formulari",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nom",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Seleccionat",

// Form Dialog
DlgFormName		: "Nom",
DlgFormAction	: "Acci籀",
DlgFormMethod	: "M癡tode",

// Select Field Dialog
DlgSelectName		: "Nom",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tamany",
DlgSelectLines		: "L穩nies",
DlgSelectChkMulti	: "Permet m繳ltiples seleccions",
DlgSelectOpAvail	: "Opcions disponibles",
DlgSelectOpText		: "Text",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Afegeix",
DlgSelectBtnModify	: "Modifica",
DlgSelectBtnUp		: "Amunt",
DlgSelectBtnDown	: "Avall",
DlgSelectBtnSetValue : "Selecciona per defecte",
DlgSelectBtnDelete	: "Elimina",

// Textarea Dialog
DlgTextareaName	: "Nom",
DlgTextareaCols	: "Columnes",
DlgTextareaRows	: "Files",

// Text Field Dialog
DlgTextName			: "Nom",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Amplada de car?cter",
DlgTextMaxChars		: "M?xim de car?cters",
DlgTextType			: "Tipus",
DlgTextTypeText		: "Text",
DlgTextTypePass		: "Contrasenya",

// Hidden Field Dialog
DlgHiddenName	: "Nom",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propietats de la llista de pics",
NumberedListProp	: "Propietats de llista numerada",
DlgLstStart			: "Inici",
DlgLstType			: "Tipus",
DlgLstTypeCircle	: "Cercle",
DlgLstTypeDisc		: "Disc",
DlgLstTypeSquare	: "Quadrat",
DlgLstTypeNumbers	: "N繳meros (1, 2, 3)",
DlgLstTypeLCase		: "Lletres min繳scules (a, b, c)",
DlgLstTypeUCase		: "Lletres maj繳scules (A, B, C)",
DlgLstTypeSRoman	: "N繳meros romans min繳scules (i, ii, iii)",
DlgLstTypeLRoman	: "N繳meros romans maj繳scules (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "General",
DlgDocBackTab		: "Fons",
DlgDocColorsTab		: "Colors i marges",
DlgDocMetaTab		: "Dades Meta",

DlgDocPageTitle		: "T穩tol de la p?gina",
DlgDocLangDir		: "Direcci籀 llenguatge",
DlgDocLangDirLTR	: "Esquerra a dreta (LTR)",
DlgDocLangDirRTL	: "Dreta a esquerra (RTL)",
DlgDocLangCode		: "Codi de llenguatge",
DlgDocCharSet		: "Codificaci籀 de conjunt de car?cters",
DlgDocCharSetCE		: "Centreeuropeu",
DlgDocCharSetCT		: "Xin癡s tradicional (Big5)",
DlgDocCharSetCR		: "Cir穩l繚lic",
DlgDocCharSetGR		: "Grec",
DlgDocCharSetJP		: "Japon癡s",
DlgDocCharSetKR		: "Core?",
DlgDocCharSetTR		: "Turc",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Europeu occidental",
DlgDocCharSetOther	: "Una altra codificaci籀 de car?cters",

DlgDocDocType		: "Cap癟alera de tipus de document",
DlgDocDocTypeOther	: "Altra Cap癟alera de tipus de document",
DlgDocIncXHTML		: "Incloure declaracions XHTML",
DlgDocBgColor		: "Color de fons",
DlgDocBgImage		: "URL de la imatge de fons",
DlgDocBgNoScroll	: "Fons fixe",
DlgDocCText			: "Text",
DlgDocCLink			: "Enlla癟",
DlgDocCVisited		: "Enlla癟 visitat",
DlgDocCActive		: "Enlla癟 actiu",
DlgDocMargins		: "Marges de p?gina",
DlgDocMaTop			: "Cap",
DlgDocMaLeft		: "Esquerra",
DlgDocMaRight		: "Dreta",
DlgDocMaBottom		: "Peu",
DlgDocMeIndex		: "Mots clau per a indexaci籀 (separats per coma)",
DlgDocMeDescr		: "Descripci籀 del document",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vista pr癡via",

// Templates Dialog
Templates			: "Plantilles",
DlgTemplatesTitle	: "Contingut plantilles",
DlgTemplatesSelMsg	: "Si us plau, seleccioneu la plantilla per obrir en l'editor<br>(el contingut actual no ser? enregistrat):",
DlgTemplatesLoading	: "Carregant la llista de plantilles. Si us plau, espereu...",
DlgTemplatesNoTpl	: "(No hi ha plantilles definides)",
DlgTemplatesReplace	: "Reempla癟a el contingut actual",

// About Dialog
DlgAboutAboutTab	: "Quant a",
DlgAboutBrowserInfoTab	: "Informaci籀 del navegador",
DlgAboutLicenseTab	: "Llic癡ncia",
DlgAboutVersion		: "versi籀",
DlgAboutInfo		: "Per a m矇s informaci籀 aneu a"
};
