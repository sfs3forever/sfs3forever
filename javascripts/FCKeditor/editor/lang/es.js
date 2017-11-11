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
 * Spanish language file.
 $Id: es.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Contraer Barra",
ToolbarExpand		: "Expandir Barra",

// Toolbar Items and Context Menu
Save				: "Guardar",
NewPage				: "Nueva P獺gina",
Preview				: "Vista Previa",
Cut					: "Cortar",
Copy				: "Copiar",
Paste				: "Pegar",
PasteText			: "Pegar como texto plano",
PasteWord			: "Pegar desde Word",
Print				: "Imprimir",
SelectAll			: "Seleccionar Todo",
RemoveFormat		: "Eliminar Formato",
InsertLinkLbl		: "V穩nculo",
InsertLink			: "Insertar/Editar V穩nculo",
RemoveLink			: "Eliminar V穩nculo",
Anchor				: "Referencia",
InsertImageLbl		: "Imagen",
InsertImage			: "Insertar/Editar Imagen",
InsertFlashLbl		: "Flash",
InsertFlash			: "Insertar/Editar Flash",
InsertTableLbl		: "Tabla",
InsertTable			: "Insertar/Editar Tabla",
InsertLineLbl		: "L穩nea",
InsertLine			: "Insertar L穩nea Horizontal",
InsertSpecialCharLbl: "Caracter Especial",
InsertSpecialChar	: "Insertar Caracter Especial",
InsertSmileyLbl		: "Emoticons",
InsertSmiley		: "Insertar Emoticons",
About				: "Acerca de FCKeditor",
Bold				: "Negrita",
Italic				: "Cursiva",
Underline			: "Subrayado",
StrikeThrough		: "Tachado",
Subscript			: "Sub穩ndice",
Superscript			: "Super穩ndice",
LeftJustify			: "Alinear a Izquierda",
CenterJustify		: "Centrar",
RightJustify		: "Alinear a Derecha",
BlockJustify		: "Justificado",
DecreaseIndent		: "Disminuir Sangr穩a",
IncreaseIndent		: "Aumentar Sangr穩a",
Undo				: "Deshacer",
Redo				: "Rehacer",
NumberedListLbl		: "Numeraci籀n",
NumberedList		: "Insertar/Eliminar Numeraci籀n",
BulletedListLbl		: "Vi簽etas",
BulletedList		: "Insertar/Eliminar Vi簽etas",
ShowTableBorders	: "Mostrar Bordes de Tablas",
ShowDetails			: "Mostrar saltos de P獺rrafo",
Style				: "Estilo",
FontFormat			: "Formato",
Font				: "Fuente",
FontSize			: "Tama簽o",
TextColor			: "Color de Texto",
BGColor				: "Color de Fondo",
Source				: "Fuente HTML",
Find				: "Buscar",
Replace				: "Reemplazar",
SpellCheck			: "Ortograf穩a",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Salto de P獺gina",
PageBreak			: "Insertar Salto de P獺gina",

Form			: "Formulario",
Checkbox		: "Casilla de Verificaci籀n",
RadioButton		: "Botones de Radio",
TextField		: "Campo de Texto",
Textarea		: "Area de Texto",
HiddenField		: "Campo Oculto",
Button			: "Bot籀n",
SelectionField	: "Campo de Selecci籀n",
ImageButton		: "Bot籀n Imagen",

FitWindow		: "Maximizar el tama簽o del editor",

// Context Menu
EditLink			: "Editar V穩nculo",
CellCM				: "Celda",
RowCM				: "Fila",
ColumnCM			: "Columna",
InsertRow			: "Insertar Fila",
DeleteRows			: "Eliminar Filas",
InsertColumn		: "Insertar Columna",
DeleteColumns		: "Eliminar Columnas",
InsertCell			: "Insertar Celda",
DeleteCells			: "Eliminar Celdas",
MergeCells			: "Combinar Celdas",
SplitCell			: "Dividir Celda",
TableDelete			: "Eliminar Tabla",
CellProperties		: "Propiedades de Celda",
TableProperties		: "Propiedades de Tabla",
ImageProperties		: "Propiedades de Imagen",
FlashProperties		: "Propiedades de Flash",

AnchorProp			: "Propiedades de Referencia",
ButtonProp			: "Propiedades de Bot籀n",
CheckboxProp		: "Propiedades de Casilla",
HiddenFieldProp		: "Propiedades de Campo Oculto",
RadioButtonProp		: "Propiedades de Bot籀n de Radio",
ImageButtonProp		: "Propiedades de Bot籀n de Imagen",
TextFieldProp		: "Propiedades de Campo de Texto",
SelectionFieldProp	: "Propiedades de Campo de Selecci籀n",
TextareaProp		: "Propiedades de Area de Texto",
FormProp			: "Propiedades de Formulario",

FontFormats			: "Normal;Con formato;Direcci籀n;Encabezado 1;Encabezado 2;Encabezado 3;Encabezado 4;Encabezado 5;Encabezado 6;Normal (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Procesando XHTML. Por favor, espere...",
Done				: "Hecho",
PasteWordConfirm	: "El texto que desea parece provenir de Word. Desea depurarlo antes de pegarlo?",
NotCompatiblePaste	: "Este comando est獺 disponible s籀lo para Internet Explorer version 5.5 or superior. Desea pegar sin depurar?",
UnknownToolbarItem	: "Item de barra desconocido \"%1\"",
UnknownCommand		: "Nombre de comando desconocido \"%1\"",
NotImplemented		: "Comando no implementado",
UnknownToolbarSet	: "Nombre de barra \"%1\" no definido",
NoActiveX			: "La configuraci籀n de las opciones de seguridad de su navegador puede estar limitando algunas caracter穩sticas del editor. Por favor active la opci籀n \"Ejecutar controles y complementos de ActiveX \", de lo contrario puede experimentar errores o ausencia de funcionalidades.",
BrowseServerBlocked : "La ventana de visualizaci籀n del servidor no pudo ser abierta. Verifique que su navegador no est矇 bloqueando las ventanas emergentes (pop up).",
DialogBlocked		: "No se ha podido abrir la ventana de di獺logo. Verifique que su navegador no est矇 bloqueando las ventanas emergentes (pop up).",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Cerrar",
DlgBtnBrowseServer	: "Ver Servidor",
DlgAdvancedTag		: "Avanzado",
DlgOpOther			: "<Otro>",
DlgInfoTab			: "Informaci籀n",
DlgAlertUrl			: "Inserte el URL",

// General Dialogs Labels
DlgGenNotSet		: "<No definido>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientaci籀n de idioma",
DlgGenLangDirLtr	: "Izquierda a Derecha (LTR)",
DlgGenLangDirRtl	: "Derecha a Izquierda (RTL)",
DlgGenLangCode		: "C籀digo de idioma",
DlgGenAccessKey		: "Clave de Acceso",
DlgGenName			: "Nombre",
DlgGenTabIndex		: "Indice de tabulaci籀n",
DlgGenLongDescr		: "Descripci籀n larga URL",
DlgGenClass			: "Clases de hojas de estilo",
DlgGenTitle			: "T穩tulo",
DlgGenContType		: "Tipo de Contenido",
DlgGenLinkCharset	: "Fuente de caracteres vinculado",
DlgGenStyle			: "Estilo",

// Image Dialog
DlgImgTitle			: "Propiedades de Imagen",
DlgImgInfoTab		: "Informaci籀n de Imagen",
DlgImgBtnUpload		: "Enviar al Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Cargar",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Anchura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Proporcional",
DlgBtnResetSize		: "Tama簽o Original",
DlgImgBorder		: "Borde",
DlgImgHSpace		: "Esp.Horiz",
DlgImgVSpace		: "Esp.Vert",
DlgImgAlign			: "Alineaci籀n",
DlgImgAlignLeft		: "Izquierda",
DlgImgAlignAbsBottom: "Abs inferior",
DlgImgAlignAbsMiddle: "Abs centro",
DlgImgAlignBaseline	: "L穩nea de base",
DlgImgAlignBottom	: "Pie",
DlgImgAlignMiddle	: "Centro",
DlgImgAlignRight	: "Derecha",
DlgImgAlignTextTop	: "Tope del texto",
DlgImgAlignTop		: "Tope",
DlgImgPreview		: "Vista Previa",
DlgImgAlertUrl		: "Por favor tipee el URL de la imagen",
DlgImgLinkTab		: "V穩nculo",

// Flash Dialog
DlgFlashTitle		: "Propiedades de Flash",
DlgFlashChkPlay		: "Autoejecuci籀n",
DlgFlashChkLoop		: "Repetir",
DlgFlashChkMenu		: "Activar Men繳 Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostrar todo",
DlgFlashScaleNoBorder	: "Sin Borde",
DlgFlashScaleFit	: "Ajustado",

// Link Dialog
DlgLnkWindowTitle	: "V穩nculo",
DlgLnkInfoTab		: "Informaci籀n de V穩nculo",
DlgLnkTargetTab		: "Destino",

DlgLnkType			: "Tipo de v穩nculo",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Referencia en esta p獺gina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<otro>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Seleccionar una referencia",
DlgLnkAnchorByName	: "Por Nombre de Referencia",
DlgLnkAnchorById	: "Por ID de elemento",
DlgLnkNoAnchors		: "<No hay referencias disponibles en el documento>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Direcci籀n de E-Mail",
DlgLnkEMailSubject	: "T穩tulo del Mensaje",
DlgLnkEMailBody		: "Cuerpo del Mensaje",
DlgLnkUpload		: "Cargar",
DlgLnkBtnUpload		: "Enviar al Servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<marco>",
DlgLnkTargetPopup	: "<ventana emergente>",
DlgLnkTargetBlank	: "Nueva Ventana(_blank)",
DlgLnkTargetParent	: "Ventana Padre (_parent)",
DlgLnkTargetSelf	: "Misma Ventana (_self)",
DlgLnkTargetTop		: "Ventana primaria (_top)",
DlgLnkTargetFrameName	: "Nombre del Marco Destino",
DlgLnkPopWinName	: "Nombre de Ventana Emergente",
DlgLnkPopWinFeat	: "Caracter穩sticas de Ventana Emergente",
DlgLnkPopResize		: "Ajustable",
DlgLnkPopLocation	: "Barra de ubicaci籀n",
DlgLnkPopMenu		: "Barra de Men繳",
DlgLnkPopScroll		: "Barras de desplazamiento",
DlgLnkPopStatus		: "Barra de Estado",
DlgLnkPopToolbar	: "Barra de Herramientas",
DlgLnkPopFullScrn	: "Pantalla Completa (IE)",
DlgLnkPopDependent	: "Dependiente (Netscape)",
DlgLnkPopWidth		: "Anchura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Posici籀n Izquierda",
DlgLnkPopTop		: "Posici籀n Derecha",

DlnLnkMsgNoUrl		: "Por favor tipee el v穩nculo URL",
DlnLnkMsgNoEMail	: "Por favor tipee la direcci籀n de e-mail",
DlnLnkMsgNoAnchor	: "Por favor seleccione una referencia",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Seleccionar Color",
DlgColorBtnClear	: "Ninguno",
DlgColorHighlight	: "Resaltado",
DlgColorSelected	: "Seleccionado",

// Smiley Dialog
DlgSmileyTitle		: "Insertar un Emoticon",

// Special Character Dialog
DlgSpecialCharTitle	: "Seleccione un caracter especial",

// Table Dialog
DlgTableTitle		: "Propiedades de Tabla",
DlgTableRows		: "Filas",
DlgTableColumns		: "Columnas",
DlgTableBorder		: "Tama簽o de Borde",
DlgTableAlign		: "Alineaci籀n",
DlgTableAlignNotSet	: "<No establecido>",
DlgTableAlignLeft	: "Izquierda",
DlgTableAlignCenter	: "Centrado",
DlgTableAlignRight	: "Derecha",
DlgTableWidth		: "Anchura",
DlgTableWidthPx		: "pixeles",
DlgTableWidthPc		: "porcentaje",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Esp. e/celdas",
DlgTableCellPad		: "Esp. interior",
DlgTableCaption		: "T穩tulo",
DlgTableSummary		: "S穩ntesis",

// Table Cell Dialog
DlgCellTitle		: "Propiedades de Celda",
DlgCellWidth		: "Anchura",
DlgCellWidthPx		: "pixeles",
DlgCellWidthPc		: "porcentaje",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Cortar L穩nea",
DlgCellWordWrapNotSet	: "<No establecido>",
DlgCellWordWrapYes	: "Si",
DlgCellWordWrapNo	: "No",
DlgCellHorAlign		: "Alineaci籀n Horizontal",
DlgCellHorAlignNotSet	: "<No establecido>",
DlgCellHorAlignLeft	: "Izquierda",
DlgCellHorAlignCenter	: "Centrado",
DlgCellHorAlignRight: "Derecha",
DlgCellVerAlign		: "Alineaci籀n Vertical",
DlgCellVerAlignNotSet	: "<Not establecido>",
DlgCellVerAlignTop	: "Tope",
DlgCellVerAlignMiddle	: "Medio",
DlgCellVerAlignBottom	: "ie",
DlgCellVerAlignBaseline	: "L穩nea de Base",
DlgCellRowSpan		: "Abarcar Filas",
DlgCellCollSpan		: "Abarcar Columnas",
DlgCellBackColor	: "Color de Fondo",
DlgCellBorderColor	: "Color de Borde",
DlgCellBtnSelect	: "Seleccione...",

// Find Dialog
DlgFindTitle		: "Buscar",
DlgFindFindBtn		: "Buscar",
DlgFindNotFoundMsg	: "El texto especificado no ha sido encontrado.",

// Replace Dialog
DlgReplaceTitle			: "Reemplazar",
DlgReplaceFindLbl		: "Texto a buscar:",
DlgReplaceReplaceLbl	: "Reemplazar con:",
DlgReplaceCaseChk		: "Coincidir may/min",
DlgReplaceReplaceBtn	: "Reemplazar",
DlgReplaceReplAllBtn	: "Reemplazar Todo",
DlgReplaceWordChk		: "Coincidir toda la palabra",

// Paste Operations / Dialog
PasteErrorCut	: "La configuraci籀n de seguridad de este navegador no permite la ejecuci籀n autom獺tica de operaciones de cortado. Por favor use el teclado (Ctrl+X).",
PasteErrorCopy	: "La configuraci籀n de seguridad de este navegador no permite la ejecuci籀n autom獺tica de operaciones de copiado. Por favor use el teclado (Ctrl+C).",

PasteAsText		: "Pegar como Texto Plano",
PasteFromWord	: "Pegar desde Word",

DlgPasteMsg2	: "Por favor pegue dentro del cuadro utilizando el teclado (<STRONG>Ctrl+V</STRONG>); luego presione <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorar definiciones de fuentes",
DlgPasteRemoveStyles	: "Remover definiciones de estilo",
DlgPasteCleanBox		: "Borrar el contenido del cuadro",

// Color Picker
ColorAutomatic	: "Autom獺tico",
ColorMoreColors	: "M獺s Colores...",

// Document Properties
DocProps		: "Propiedades del Documento",

// Anchor Dialog
DlgAnchorTitle		: "Propiedades de la Referencia",
DlgAnchorName		: "Nombre de la Referencia",
DlgAnchorErrorName	: "Por favor, complete el nombre de la Referencia",

// Speller Pages Dialog
DlgSpellNotInDic		: "No se encuentra en el Diccionario",
DlgSpellChangeTo		: "Cambiar a",
DlgSpellBtnIgnore		: "Ignorar",
DlgSpellBtnIgnoreAll	: "Ignorar Todo",
DlgSpellBtnReplace		: "Reemplazar",
DlgSpellBtnReplaceAll	: "Reemplazar Todo",
DlgSpellBtnUndo			: "Deshacer",
DlgSpellNoSuggestions	: "- No hay sugerencias -",
DlgSpellProgress		: "Control de Ortograf穩a en progreso...",
DlgSpellNoMispell		: "Control finalizado: no se encontraron errores",
DlgSpellNoChanges		: "Control finalizado: no se ha cambiado ninguna palabra",
DlgSpellOneChange		: "Control finalizado: se ha cambiado una palabra",
DlgSpellManyChanges		: "Control finalizado: se ha cambiado %1 palabras",

IeSpellDownload			: "M籀dulo de Control de Ortograf穩a no instalado. 聶Desea descargarlo ahora?",

// Button Dialog
DlgButtonText		: "Texto (Valor)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nombre",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Seleccionado",

// Form Dialog
DlgFormName		: "Nombre",
DlgFormAction	: "Acci籀n",
DlgFormMethod	: "M矇todo",

// Select Field Dialog
DlgSelectName		: "Nombre",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tama簽o",
DlgSelectLines		: "Lineas",
DlgSelectChkMulti	: "Permitir m繳ltiple selecci籀n",
DlgSelectOpAvail	: "Opciones disponibles",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Agregar",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Subir",
DlgSelectBtnDown	: "Bajar",
DlgSelectBtnSetValue : "Establecer como predeterminado",
DlgSelectBtnDelete	: "Eliminar",

// Textarea Dialog
DlgTextareaName	: "Nombre",
DlgTextareaCols	: "Columnas",
DlgTextareaRows	: "Filas",

// Text Field Dialog
DlgTextName			: "Nombre",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Caracteres de ancho",
DlgTextMaxChars		: "M獺ximo caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Contrase簽a",

// Hidden Field Dialog
DlgHiddenName	: "Nombre",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propiedades de Vi簽etas",
NumberedListProp	: "Propiedades de Numeraciones",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "C穩rculo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Cuadrado",
DlgLstTypeNumbers	: "N繳meros (1, 2, 3)",
DlgLstTypeLCase		: "letras en min繳sculas (a, b, c)",
DlgLstTypeUCase		: "letras en may繳sculas (A, B, C)",
DlgLstTypeSRoman	: "N繳meros Romanos (i, ii, iii)",
DlgLstTypeLRoman	: "N繳meros Romanos (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "General",
DlgDocBackTab		: "Fondo",
DlgDocColorsTab		: "Colores y M獺rgenes",
DlgDocMetaTab		: "Meta Informaci籀n",

DlgDocPageTitle		: "T穩tulo de P獺gina",
DlgDocLangDir		: "Orientaci籀n de idioma",
DlgDocLangDirLTR	: "Izq. a Derecha (LTR)",
DlgDocLangDirRTL	: "Der. a Izquierda (RTL)",
DlgDocLangCode		: "C籀digo de Idioma",
DlgDocCharSet		: "Codif. de Conjunto de Caracteres",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Otra Codificaci籀n",

DlgDocDocType		: "Encabezado de Tipo de Documento",
DlgDocDocTypeOther	: "Otro Encabezado",
DlgDocIncXHTML		: "Incluir Declaraciones XHTML",
DlgDocBgColor		: "Color de Fondo",
DlgDocBgImage		: "URL de Imagen de Fondo",
DlgDocBgNoScroll	: "Fondo sin rolido",
DlgDocCText			: "Texto",
DlgDocCLink			: "V穩nculo",
DlgDocCVisited		: "V穩nculo Visitado",
DlgDocCActive		: "V穩nculo Activo",
DlgDocMargins		: "M獺rgenes de P獺gina",
DlgDocMaTop			: "Tope",
DlgDocMaLeft		: "Izquierda",
DlgDocMaRight		: "Derecha",
DlgDocMaBottom		: "Pie",
DlgDocMeIndex		: "Claves de indexaci籀n del Documento (separados por comas)",
DlgDocMeDescr		: "Descripci籀n del Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vista Previa",

// Templates Dialog
Templates			: "Plantillas",
DlgTemplatesTitle	: "Contenido de Plantillas",
DlgTemplatesSelMsg	: "Por favor selecciona la plantilla a abrir en el editor<br>(el contenido actual se perder獺):",
DlgTemplatesLoading	: "Cargando lista de Plantillas. Por favor, aguarde...",
DlgTemplatesNoTpl	: "(No hay plantillas definidas)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Acerca de",
DlgAboutBrowserInfoTab	: "Informaci籀n de Navegador",
DlgAboutLicenseTab	: "Licencia",
DlgAboutVersion		: "versi籀n",
DlgAboutInfo		: "Para mayor informaci籀n por favor dirigirse a"
};
