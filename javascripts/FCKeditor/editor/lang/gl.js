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
 * Galician language file.
 $Id: gl.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Ocultar Ferramentas",
ToolbarExpand		: "Mostrar Ferramentas",

// Toolbar Items and Context Menu
Save				: "Gardar",
NewPage				: "Nova P獺xina",
Preview				: "Vista Previa",
Cut					: "Cortar",
Copy				: "Copiar",
Paste				: "Pegar",
PasteText			: "Pegar como texto plano",
PasteWord			: "Pegar dende Word",
Print				: "Imprimir",
SelectAll			: "Seleccionar todo",
RemoveFormat		: "Eliminar Formato",
InsertLinkLbl		: "Ligaz籀n",
InsertLink			: "Inserir/Editar Ligaz籀n",
RemoveLink			: "Eliminar Ligaz籀n",
Anchor				: "Inserir/Editar Referencia",
InsertImageLbl		: "Imaxe",
InsertImage			: "Inserir/Editar Imaxe",
InsertFlashLbl		: "Flash",
InsertFlash			: "Inserir/Editar Flash",
InsertTableLbl		: "Tabla",
InsertTable			: "Inserir/Editar Tabla",
InsertLineLbl		: "Li簽a",
InsertLine			: "Inserir Li簽a Horizontal",
InsertSpecialCharLbl: "Car獺cter Special",
InsertSpecialChar	: "Inserir Car獺cter Especial",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Inserir Smiley",
About				: "Acerca de FCKeditor",
Bold				: "Negrita",
Italic				: "Cursiva",
Underline			: "Sub-raiado",
StrikeThrough		: "Tachado",
Subscript			: "Sub穩ndice",
Superscript			: "Super穩ndice",
LeftJustify			: "Ali簽ar 獺 Esquerda",
CenterJustify		: "Centrado",
RightJustify		: "Ali簽ar 獺 Dereita",
BlockJustify		: "Xustificado",
DecreaseIndent		: "Disminuir Sangr穩a",
IncreaseIndent		: "Aumentar Sangr穩a",
Undo				: "Desfacer",
Redo				: "Refacer",
NumberedListLbl		: "Lista Numerada",
NumberedList		: "Inserir/Eliminar Lista Numerada",
BulletedListLbl		: "Marcas",
BulletedList		: "Inserir/Eliminar Marcas",
ShowTableBorders	: "Mostrar Bordes das T獺boas",
ShowDetails			: "Mostrar Marcas Par獺grafo",
Style				: "Estilo",
FontFormat			: "Formato",
Font				: "Tipo",
FontSize			: "Tama簽o",
TextColor			: "Cor do Texto",
BGColor				: "Cor do Fondo",
Source				: "C籀digo Fonte",
Find				: "Procurar",
Replace				: "Substituir",
SpellCheck			: "Correcci籀n Ortogr獺fica",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Salto de P獺xina",
PageBreak			: "Inserir Salto de P獺xina",

Form			: "Formulario",
Checkbox		: "Cadro de Verificaci籀n",
RadioButton		: "Bot籀n de Radio",
TextField		: "Campo de Texto",
Textarea		: "?rea de Texto",
HiddenField		: "Campo Oculto",
Button			: "Bot籀n",
SelectionField	: "Campo de Selecci籀n",
ImageButton		: "Bot籀n de Imaxe",

FitWindow		: "Maximizar o tama簽o do editor",

// Context Menu
EditLink			: "Editar Ligaz籀n",
CellCM				: "Cela",
RowCM				: "Fila",
ColumnCM			: "Columna",
InsertRow			: "Inserir Fila",
DeleteRows			: "Borrar Filas",
InsertColumn		: "Inserir Columna",
DeleteColumns		: "Borrar Columnas",
InsertCell			: "Inserir Cela",
DeleteCells			: "Borrar Cela",
MergeCells			: "Unir Celas",
SplitCell			: "Partir Celas",
TableDelete			: "Borrar T獺boa",
CellProperties		: "Propriedades da Cela",
TableProperties		: "Propriedades da T獺boa",
ImageProperties		: "Propriedades Imaxe",
FlashProperties		: "Propriedades Flash",

AnchorProp			: "Propriedades da Referencia",
ButtonProp			: "Propriedades do Bot籀n",
CheckboxProp		: "Propriedades do Cadro de Verificaci籀n",
HiddenFieldProp		: "Propriedades do Campo Oculto",
RadioButtonProp		: "Propriedades do Bot籀n de Radio",
ImageButtonProp		: "Propriedades do Bot籀n de Imaxe",
TextFieldProp		: "Propriedades do Campo de Texto",
SelectionFieldProp	: "Propriedades do Campo de Selecci籀n",
TextareaProp		: "Propriedades da ?rea de Texto",
FormProp			: "Propriedades do Formulario",

FontFormats			: "Normal;Formateado;Enderezo;Enacabezado 1;Encabezado 2;Encabezado 3;Encabezado 4;Encabezado 5;Encabezado 6;Paragraph (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Procesando XHTML. Por facor, agarde...",
Done				: "Feiro",
PasteWordConfirm	: "Parece que o texto que quere pegar est獺 copiado do Word.聶Quere limpar o formato antes de pegalo?",
NotCompatiblePaste	: "Este comando est獺 disponible para Internet Explorer versi籀n 5.5 ou superior. 聶Quere pegalo sen limpar o formato?",
UnknownToolbarItem	: "?tem de ferramentas desco簽ecido \"%1\"",
UnknownCommand		: "Nome de comando desco簽ecido \"%1\"",
NotImplemented		: "Comando non implementado",
UnknownToolbarSet	: "O conxunto de ferramentas \"%1\" non existe",
NoActiveX			: "As opci籀ns de seguridade do seu navegador poder穩an limitar algunha das caracter穩sticas de editor. Debe activar a opci籀n \"Executar controis ActiveX e plug-ins\". Pode notar que faltan caracter穩sticas e experimentar erros",
BrowseServerBlocked : "Non se poido abrir o navegador de recursos. Aseg繳rese de que est獺n desactivados os bloqueadores de xanelas emerxentes",
DialogBlocked		: "Non foi posible abrir a xanela de di獺logo. Aseg繳rese de que est獺n desactivados os bloqueadores de xanelas emerxentes",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Pechar",
DlgBtnBrowseServer	: "Navegar no Servidor",
DlgAdvancedTag		: "Advanzado",
DlgOpOther			: "<Outro>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Por favor, insira a URL",

// General Dialogs Labels
DlgGenNotSet		: "<non definido>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orientaci籀n do Idioma",
DlgGenLangDirLtr	: "Esquerda a Dereita (LTR)",
DlgGenLangDirRtl	: "Dereita a Esquerda (RTL)",
DlgGenLangCode		: "C籀digo do Idioma",
DlgGenAccessKey		: "Chave de Acceso",
DlgGenName			: "Nome",
DlgGenTabIndex		: "?ndice de Tabulaci籀n",
DlgGenLongDescr		: "Descrici籀n Completa da URL",
DlgGenClass			: "Clases da Folla de Estilos",
DlgGenTitle			: "T穩tulo",
DlgGenContType		: "Tipo de Contido",
DlgGenLinkCharset	: "Fonte de Caracteres Vinculado",
DlgGenStyle			: "Estilo",

// Image Dialog
DlgImgTitle			: "Propriedades da Imaxe",
DlgImgInfoTab		: "Informaci籀n da Imaxe",
DlgImgBtnUpload		: "Enviar 籀 Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Carregar",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Largura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Proporcional",
DlgBtnResetSize		: "Tama簽o Orixinal",
DlgImgBorder		: "L穩mite",
DlgImgHSpace		: "Esp. Horiz.",
DlgImgVSpace		: "Esp. Vert.",
DlgImgAlign			: "Ali簽amento",
DlgImgAlignLeft		: "Esquerda",
DlgImgAlignAbsBottom: "Abs Inferior",
DlgImgAlignAbsMiddle: "Abs Centro",
DlgImgAlignBaseline	: "Li簽a Base",
DlgImgAlignBottom	: "P矇",
DlgImgAlignMiddle	: "Centro",
DlgImgAlignRight	: "Dereita",
DlgImgAlignTextTop	: "Tope do Texto",
DlgImgAlignTop		: "Tope",
DlgImgPreview		: "Vista Previa",
DlgImgAlertUrl		: "Por favor, escriba a URL da imaxe",
DlgImgLinkTab		: "Ligaz籀n",

// Flash Dialog
DlgFlashTitle		: "Propriedades Flash",
DlgFlashChkPlay		: "Auto Execuci籀n",
DlgFlashChkLoop		: "Bucle",
DlgFlashChkMenu		: "Activar Men繳 Flash",
DlgFlashScale		: "Escalar",
DlgFlashScaleAll	: "Amosar Todo",
DlgFlashScaleNoBorder	: "Sen Borde",
DlgFlashScaleFit	: "Encaixar axustando",

// Link Dialog
DlgLnkWindowTitle	: "Ligaz籀n",
DlgLnkInfoTab		: "Informaci籀n da Ligaz籀n",
DlgLnkTargetTab		: "Referencia a esta p獺xina",

DlgLnkType			: "Tipo de Ligaz籀n",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Referencia nesta p獺xina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<outro>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Seleccionar unha Referencia",
DlgLnkAnchorByName	: "Por Nome de Referencia",
DlgLnkAnchorById	: "Por Element Id",
DlgLnkNoAnchors		: "<Non hai referencias disponibles no documento>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Enderezo de E-Mail",
DlgLnkEMailSubject	: "Asunto do Mensaxe",
DlgLnkEMailBody		: "Corpo do Mensaxe",
DlgLnkUpload		: "Carregar",
DlgLnkBtnUpload		: "Enviar 籀 servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<frame>",
DlgLnkTargetPopup	: "<Xanela Emerxente>",
DlgLnkTargetBlank	: "Nova Xanela (_blank)",
DlgLnkTargetParent	: "Xanela Pai (_parent)",
DlgLnkTargetSelf	: "Mesma Xanela (_self)",
DlgLnkTargetTop		: "Xanela Primaria (_top)",
DlgLnkTargetFrameName	: "Nome do Marco Destino",
DlgLnkPopWinName	: "Nome da Xanela Emerxente",
DlgLnkPopWinFeat	: "Caracter穩sticas da Xanela Emerxente",
DlgLnkPopResize		: "Axustable",
DlgLnkPopLocation	: "Barra de Localizaci籀n",
DlgLnkPopMenu		: "Barra de Men繳",
DlgLnkPopScroll		: "Barras de Desplazamento",
DlgLnkPopStatus		: "Barra de Estado",
DlgLnkPopToolbar	: "Barra de Ferramentas",
DlgLnkPopFullScrn	: "A Toda Pantalla (IE)",
DlgLnkPopDependent	: "Dependente (Netscape)",
DlgLnkPopWidth		: "Largura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Posici籀n Esquerda",
DlgLnkPopTop		: "Posici籀n dende Arriba",

DlnLnkMsgNoUrl		: "Por favor, escriba a ligaz籀n URL",
DlnLnkMsgNoEMail	: "Por favor, escriba o enderezo de e-mail",
DlnLnkMsgNoAnchor	: "Por favor, seleccione un destino",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Seleccionar Color",
DlgColorBtnClear	: "Nengunha",
DlgColorHighlight	: "Destacado",
DlgColorSelected	: "Seleccionado",

// Smiley Dialog
DlgSmileyTitle		: "Inserte un Smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "Seleccione Caracter Especial",

// Table Dialog
DlgTableTitle		: "Propiedades da T獺boa",
DlgTableRows		: "Filas",
DlgTableColumns		: "Columnas",
DlgTableBorder		: "Tama簽o do Borde",
DlgTableAlign		: "Ali簽amento",
DlgTableAlignNotSet	: "<Non Definido>",
DlgTableAlignLeft	: "Esquerda",
DlgTableAlignCenter	: "Centro",
DlgTableAlignRight	: "Ereita",
DlgTableWidth		: "Largura",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "percent",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Marxe entre Celas",
DlgTableCellPad		: "Marxe interior",
DlgTableCaption		: "T穩tulo",
DlgTableSummary		: "Sumario",

// Table Cell Dialog
DlgCellTitle		: "Propriedades da Cela",
DlgCellWidth		: "Largura",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "percent",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Axustar Li簽as",
DlgCellWordWrapNotSet	: "<Non Definido>",
DlgCellWordWrapYes	: "Si",
DlgCellWordWrapNo	: "Non",
DlgCellHorAlign		: "Ali簽amento Horizontal",
DlgCellHorAlignNotSet	: "<Non definido>",
DlgCellHorAlignLeft	: "Esquerda",
DlgCellHorAlignCenter	: "Centro",
DlgCellHorAlignRight: "Dereita",
DlgCellVerAlign		: "Ali簽amento Vertical",
DlgCellVerAlignNotSet	: "<Non definido>",
DlgCellVerAlignTop	: "Arriba",
DlgCellVerAlignMiddle	: "Medio",
DlgCellVerAlignBottom	: "Abaixo",
DlgCellVerAlignBaseline	: "Li簽a de Base",
DlgCellRowSpan		: "Ocupar Filas",
DlgCellCollSpan		: "Ocupar Columnas",
DlgCellBackColor	: "Color de Fondo",
DlgCellBorderColor	: "Color de Borde",
DlgCellBtnSelect	: "Seleccionar...",

// Find Dialog
DlgFindTitle		: "Procurar",
DlgFindFindBtn		: "Procurar",
DlgFindNotFoundMsg	: "Non te atopou o texto indicado.",

// Replace Dialog
DlgReplaceTitle			: "Substituir",
DlgReplaceFindLbl		: "Texto a procurar:",
DlgReplaceReplaceLbl	: "Substituir con:",
DlgReplaceCaseChk		: "Coincidir Mai./min.",
DlgReplaceReplaceBtn	: "Substituir",
DlgReplaceReplAllBtn	: "Substitiur Todo",
DlgReplaceWordChk		: "Coincidir con toda a palabra",

// Paste Operations / Dialog
PasteErrorCut	: "Os axustes de seguridade do seu navegador non permiten que o editor realice autom獺ticamente as tarefas de corte. Por favor, use o teclado para iso (Ctrl+X).",
PasteErrorCopy	: "Os axustes de seguridade do seu navegador non permiten que o editor realice autom獺ticamente as tarefas de copia. Por favor, use o teclado para iso (Ctrl+C).",

PasteAsText		: "Pegar como texto plano",
PasteFromWord	: "Pegar dende Word",

DlgPasteMsg2	: "Por favor, pegue dentro do seguinte cadro usando o teclado (<STRONG>Ctrl+V</STRONG>) e pulse <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorar as definici籀ns de Tipograf穩a",
DlgPasteRemoveStyles	: "Eliminar as definici籀ns de Estilos",
DlgPasteCleanBox		: "Limpar o Cadro",

// Color Picker
ColorAutomatic	: "Autom獺tico",
ColorMoreColors	: "M獺is Cores...",

// Document Properties
DocProps		: "Propriedades do Documento",

// Anchor Dialog
DlgAnchorTitle		: "Propriedades da Referencia",
DlgAnchorName		: "Nome da Referencia",
DlgAnchorErrorName	: "Por favor, escriba o nome da referencia",

// Speller Pages Dialog
DlgSpellNotInDic		: "Non est獺 no diccionario",
DlgSpellChangeTo		: "Cambiar a",
DlgSpellBtnIgnore		: "Ignorar",
DlgSpellBtnIgnoreAll	: "Ignorar Todas",
DlgSpellBtnReplace		: "Substituir",
DlgSpellBtnReplaceAll	: "Substituir Todas",
DlgSpellBtnUndo			: "Desfacer",
DlgSpellNoSuggestions	: "- Sen candidatos -",
DlgSpellProgress		: "Correcci籀n ortogr獺fica en progreso...",
DlgSpellNoMispell		: "Correcci籀n ortogr獺fica rematada: Non se atoparon erros",
DlgSpellNoChanges		: "Correcci籀n ortogr獺fica rematada: Non se substituiu nengunha verba",
DlgSpellOneChange		: "Correcci籀n ortogr獺fica rematada: Unha verba substituida",
DlgSpellManyChanges		: "Correcci籀n ortogr獺fica rematada: %1 verbas substituidas",

IeSpellDownload			: "O corrector ortogr獺fico non est獺 instalado. 聶Quere descargalo agora?",

// Button Dialog
DlgButtonText		: "Texto (Valor)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nome",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Seleccionado",

// Form Dialog
DlgFormName		: "Nome",
DlgFormAction	: "Acci籀n",
DlgFormMethod	: "M矇todo",

// Select Field Dialog
DlgSelectName		: "Nome",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tama簽o",
DlgSelectLines		: "li簽as",
DlgSelectChkMulti	: "Permitir m繳ltiples selecci籀ns",
DlgSelectOpAvail	: "Opci籀ns Disponibles",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Engadir",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Subir",
DlgSelectBtnDown	: "Baixar",
DlgSelectBtnSetValue : "Definir como valor por defecto",
DlgSelectBtnDelete	: "Borrar",

// Textarea Dialog
DlgTextareaName	: "Nome",
DlgTextareaCols	: "Columnas",
DlgTextareaRows	: "Filas",

// Text Field Dialog
DlgTextName			: "Nome",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Tama簽o do Caracter",
DlgTextMaxChars		: "M獺ximo de Caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Chave",

// Hidden Field Dialog
DlgHiddenName	: "Nome",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propriedades das Marcas",
NumberedListProp	: "Propriedades da Lista de Numeraci籀n",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "C穩rculo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Cuadrado",
DlgLstTypeNumbers	: "N繳meros (1, 2, 3)",
DlgLstTypeLCase		: "Letras Min繳sculas (a, b, c)",
DlgLstTypeUCase		: "Letras Mai繳sculas (A, B, C)",
DlgLstTypeSRoman	: "N繳meros Romanos en min繳scula (i, ii, iii)",
DlgLstTypeLRoman	: "N繳meros Romanos en Mai繳scula (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Xeral",
DlgDocBackTab		: "Fondo",
DlgDocColorsTab		: "Cores e Marxes",
DlgDocMetaTab		: "Meta Data",

DlgDocPageTitle		: "T穩tulo da P獺xina",
DlgDocLangDir		: "Orientaci籀n do Idioma",
DlgDocLangDirLTR	: "Esquerda a Dereita (LTR)",
DlgDocLangDirRTL	: "Dereita a Esquerda (RTL)",
DlgDocLangCode		: "C籀digo de Idioma",
DlgDocCharSet		: "Codificaci籀n do Xogo de Caracteres",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Outra Codificaci籀n do Xogo de Caracteres",

DlgDocDocType		: "Encabezado do Tipo de Documento",
DlgDocDocTypeOther	: "Outro Encabezado do Tipo de Documento",
DlgDocIncXHTML		: "Incluir Declaraci籀ns XHTML",
DlgDocBgColor		: "Cor de Fondo",
DlgDocBgImage		: "URL da Imaxe de Fondo",
DlgDocBgNoScroll	: "Fondo Fixo",
DlgDocCText			: "Texto",
DlgDocCLink			: "Ligaz籀ns",
DlgDocCVisited		: "Ligaz籀n Visitada",
DlgDocCActive		: "Ligaz籀n Activa",
DlgDocMargins		: "Marxes da P獺xina",
DlgDocMaTop			: "Arriba",
DlgDocMaLeft		: "Esquerda",
DlgDocMaRight		: "Dereita",
DlgDocMaBottom		: "Abaixo",
DlgDocMeIndex		: "Palabras Chave de Indexaci籀n do Documento (separadas por comas)",
DlgDocMeDescr		: "Descripci籀n do Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Vista Previa",

// Templates Dialog
Templates			: "Plantillas",
DlgTemplatesTitle	: "Plantillas de Contido",
DlgTemplatesSelMsg	: "Por favor, seleccione a plantilla a abrir no editor<br>(o contido actual perderase):",
DlgTemplatesLoading	: "Cargando listado de plantillas. Por favor, espere...",
DlgTemplatesNoTpl	: "(Non hai plantillas definidas)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Acerca de",
DlgAboutBrowserInfoTab	: "Informaci籀n do Navegador",
DlgAboutLicenseTab	: "Licencia",
DlgAboutVersion		: "versi籀n",
DlgAboutInfo		: "Para m獺is informaci籀n visitar:"
};
