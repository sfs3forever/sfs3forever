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
 * Portuguese language file.
 $Id: pt.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Fechar Barra",
ToolbarExpand		: "Expandir Barra",

// Toolbar Items and Context Menu
Save				: "Guardar",
NewPage				: "Nova P獺gina",
Preview				: "Pr矇-visualizar",
Cut					: "Cortar",
Copy				: "Copiar",
Paste				: "Colar",
PasteText			: "Colar como texto n瓊o formatado",
PasteWord			: "Colar do Word",
Print				: "Imprimir",
SelectAll			: "Seleccionar Tudo",
RemoveFormat		: "Eliminar Formato",
InsertLinkLbl		: "Hiperliga癟瓊o",
InsertLink			: "Inserir/Editar Hiperliga癟瓊o",
RemoveLink			: "Eliminar Hiperliga癟瓊o",
Anchor				: " Inserir/Editar ?ncora",
InsertImageLbl		: "Imagem",
InsertImage			: "Inserir/Editar Imagem",
InsertFlashLbl		: "Flash",
InsertFlash			: "Inserir/Editar Flash",
InsertTableLbl		: "Tabela",
InsertTable			: "Inserir/Editar Tabela",
InsertLineLbl		: "Linha",
InsertLine			: "Inserir Linha Horizontal",
InsertSpecialCharLbl: "Caracter Especial",
InsertSpecialChar	: "Inserir Caracter Especial",
InsertSmileyLbl		: "Emoticons",
InsertSmiley		: "Inserir Emoticons",
About				: "Acerca do FCKeditor",
Bold				: "Negrito",
Italic				: "It獺lico",
Underline			: "Sublinhado",
StrikeThrough		: "Rasurado",
Subscript			: "Superior ? Linha",
Superscript			: "Inferior ? Linha",
LeftJustify			: "Alinhar ? Esquerda",
CenterJustify		: "Alinhar ao Centro",
RightJustify		: "Alinhar ? Direita",
BlockJustify		: "Justificado",
DecreaseIndent		: "Diminuir Avan癟o",
IncreaseIndent		: "Aumentar Avan癟o",
Undo				: "Anular",
Redo				: "Repetir",
NumberedListLbl		: "Numera癟瓊o",
NumberedList		: "Inserir/Eliminar Numera癟瓊o",
BulletedListLbl		: "Marcas",
BulletedList		: "Inserir/Eliminar Marcas",
ShowTableBorders	: "Mostrar Limites da Tabelas",
ShowDetails			: "Mostrar Par獺grafo",
Style				: "Estilo",
FontFormat			: "Formato",
Font				: "Tipo de Letra",
FontSize			: "Tamanho",
TextColor			: "Cor do Texto",
BGColor				: "Cor de Fundo",
Source				: "Fonte",
Find				: "Procurar",
Replace				: "Substituir",
SpellCheck			: "Verifica癟瓊o Ortogr獺fica",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Quebra de P獺gina",
PageBreak			: "Inserir Quebra de P獺gina",

Form			: "Formul獺rio",
Checkbox		: "Caixa de Verifica癟瓊o",
RadioButton		: "Bot瓊o de Op癟瓊o",
TextField		: "Campo de Texto",
Textarea		: "?rea de Texto",
HiddenField		: "Campo Escondido",
Button			: "Bot瓊o",
SelectionField	: "Caixa de Combina癟瓊o",
ImageButton		: "Bot瓊o de Imagem",

FitWindow		: "Maximizar o tamanho do editor",

// Context Menu
EditLink			: "Editar Hiperliga癟瓊o",
CellCM				: "C矇lula",
RowCM				: "Linha",
ColumnCM			: "Coluna",
InsertRow			: "Inserir Linha",
DeleteRows			: "Eliminar Linhas",
InsertColumn		: "Inserir Coluna",
DeleteColumns		: "Eliminar Coluna",
InsertCell			: "Inserir C矇lula",
DeleteCells			: "Eliminar C矇lula",
MergeCells			: "Unir C矇lulas",
SplitCell			: "Dividir C矇lula",
TableDelete			: "Eliminar Tabela",
CellProperties		: "Propriedades da C矇lula",
TableProperties		: "Propriedades da Tabela",
ImageProperties		: "Propriedades da Imagem",
FlashProperties		: "Propriedades do Flash",

AnchorProp			: "Propriedades da ?ncora",
ButtonProp			: "Propriedades do Bot瓊o",
CheckboxProp		: "Propriedades da Caixa de Verifica癟瓊o",
HiddenFieldProp		: "Propriedades do Campo Escondido",
RadioButtonProp		: "Propriedades do Bot瓊o de Op癟瓊o",
ImageButtonProp		: "Propriedades do Bot瓊o de imagens",
TextFieldProp		: "Propriedades do Campo de Texto",
SelectionFieldProp	: "Propriedades da Caixa de Combina癟瓊o",
TextareaProp		: "Propriedades da ?rea de Texto",
FormProp			: "Propriedades do Formul獺rio",

FontFormats			: "Normal;Formatado;Endere癟o;T穩tulo 1;T穩tulo 2;T穩tulo 3;T穩tulo 4;T穩tulo 5;T穩tulo 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "A Processar XHTML. Por favor, espere...",
Done				: "Conclu穩do",
PasteWordConfirm	: "O texto que deseja parece ter sido copiado do Word. Deseja limpar a formata癟瓊o antes de colar?",
NotCompatiblePaste	: "Este comando s籀 est獺 dispon穩vel para Internet Explorer vers瓊o 5.5 ou superior. Deseja colar sem limpar a formata癟瓊o?",
UnknownToolbarItem	: "Item de barra desconhecido \"%1\"",
UnknownCommand		: "Nome de comando desconhecido \"%1\"",
NotImplemented		: "Comando n瓊o implementado",
UnknownToolbarSet	: "Nome de barra \"%1\" n瓊o definido",
NoActiveX			: "As defini癟繭es de seguran癟a do navegador podem limitar algumas potencalidades do editr. Deve activar a op癟瓊o \"Executar controlos e extens繭es ActiveX\". Pode ocorrer erros ou verificar que faltam potencialidades.",
BrowseServerBlocked : "N瓊o foi poss穩vel abrir o navegador de recursos. Certifique-se que todos os bloqueadores de popup est瓊o desactivados.",
DialogBlocked		: "N瓊o foi poss穩vel abrir a janela de di獺logo. Certifique-se que todos os bloqueadores de popup est瓊o desactivados.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Fechar",
DlgBtnBrowseServer	: "Navegar no Servidor",
DlgAdvancedTag		: "Avan癟ado",
DlgOpOther			: "<Outro>",
DlgInfoTab			: "Informa癟瓊o",
DlgAlertUrl			: "Por favor introduza o URL",

// General Dialogs Labels
DlgGenNotSet		: "<N瓊o definido>",
DlgGenId			: "Id",
DlgGenLangDir		: "Orienta癟瓊o de idioma",
DlgGenLangDirLtr	: "Esquerda ? Direita (LTR)",
DlgGenLangDirRtl	: "Direita a Esquerda (RTL)",
DlgGenLangCode		: "C籀digo de Idioma",
DlgGenAccessKey		: "Chave de Acesso",
DlgGenName			: "Nome",
DlgGenTabIndex		: "?ndice de Tubula癟瓊o",
DlgGenLongDescr		: "Descri癟瓊o Completa do URL",
DlgGenClass			: "Classes de Estilo de Folhas Classes",
DlgGenTitle			: "T穩tulo",
DlgGenContType		: "Tipo de Conte繳do",
DlgGenLinkCharset	: "Fonte de caracteres vinculado",
DlgGenStyle			: "Estilo",

// Image Dialog
DlgImgTitle			: "Propriedades da Imagem",
DlgImgInfoTab		: "Informa癟瓊o da Imagem",
DlgImgBtnUpload		: "Enviar para o Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Carregar",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Largura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Proporcional",
DlgBtnResetSize		: "Tamanho Original",
DlgImgBorder		: "Limite",
DlgImgHSpace		: "Esp.Horiz",
DlgImgVSpace		: "Esp.Vert",
DlgImgAlign			: "Alinhamento",
DlgImgAlignLeft		: "Esquerda",
DlgImgAlignAbsBottom: "Abs inferior",
DlgImgAlignAbsMiddle: "Abs centro",
DlgImgAlignBaseline	: "Linha de base",
DlgImgAlignBottom	: "Fundo",
DlgImgAlignMiddle	: "Centro",
DlgImgAlignRight	: "Direita",
DlgImgAlignTextTop	: "Topo do texto",
DlgImgAlignTop		: "Topo",
DlgImgPreview		: "Pr矇-visualizar",
DlgImgAlertUrl		: "Por favor introduza o URL da imagem",
DlgImgLinkTab		: "Hiperliga癟瓊o",

// Flash Dialog
DlgFlashTitle		: "Propriedades do Flash",
DlgFlashChkPlay		: "Reproduzir automaticamente",
DlgFlashChkLoop		: "Loop",
DlgFlashChkMenu		: "Permitir Menu do Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostrar tudo",
DlgFlashScaleNoBorder	: "Sem Limites",
DlgFlashScaleFit	: "Tamanho Exacto",

// Link Dialog
DlgLnkWindowTitle	: "Hiperliga癟瓊o",
DlgLnkInfoTab		: "Informa癟瓊o de Hiperliga癟瓊o",
DlgLnkTargetTab		: "Destino",

DlgLnkType			: "Tipo de Hiperliga癟瓊o",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Refer礙ncia a esta p獺gina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<outro>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "Seleccionar una refer礙ncia",
DlgLnkAnchorByName	: "Por Nome de Refer礙ncia",
DlgLnkAnchorById	: "Por ID de elemento",
DlgLnkNoAnchors		: "<N瓊o h獺 refer礙ncias dispon穩veis no documento>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Endere癟o de E-Mail",
DlgLnkEMailSubject	: "T穩tulo de Mensagem",
DlgLnkEMailBody		: "Corpo da Mensagem",
DlgLnkUpload		: "Carregar",
DlgLnkBtnUpload		: "Enviar ao Servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<Frame>",
DlgLnkTargetPopup	: "<Janela de popup>",
DlgLnkTargetBlank	: "Nova Janela(_blank)",
DlgLnkTargetParent	: "Janela Pai (_parent)",
DlgLnkTargetSelf	: "Mesma janela (_self)",
DlgLnkTargetTop		: "Janela primaria (_top)",
DlgLnkTargetFrameName	: "Nome do Frame Destino",
DlgLnkPopWinName	: "Nome da Janela de Popup",
DlgLnkPopWinFeat	: "Caracter穩sticas de Janela de Popup",
DlgLnkPopResize		: "Ajust獺vel",
DlgLnkPopLocation	: "Barra de localiza癟瓊o",
DlgLnkPopMenu		: "Barra de Menu",
DlgLnkPopScroll		: "Barras de deslocamento",
DlgLnkPopStatus		: "Barra de Estado",
DlgLnkPopToolbar	: "Barra de Ferramentas",
DlgLnkPopFullScrn	: "Janela Completa (IE)",
DlgLnkPopDependent	: "Dependente (Netscape)",
DlgLnkPopWidth		: "Largura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Posi癟瓊o Esquerda",
DlgLnkPopTop		: "Posi癟瓊o Direita",

DlnLnkMsgNoUrl		: "Por favor introduza a hiperliga癟瓊o URL",
DlnLnkMsgNoEMail	: "Por favor introduza o endere癟o de e-mail",
DlnLnkMsgNoAnchor	: "Por favor seleccione uma refer礙ncia",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "Seleccionar Cor",
DlgColorBtnClear	: "Nenhuma",
DlgColorHighlight	: "Destacado",
DlgColorSelected	: "Seleccionado",

// Smiley Dialog
DlgSmileyTitle		: "Inserir um Emoticon",

// Special Character Dialog
DlgSpecialCharTitle	: "Seleccione um caracter especial",

// Table Dialog
DlgTableTitle		: "Propriedades da Tabela",
DlgTableRows		: "Linhas",
DlgTableColumns		: "Colunas",
DlgTableBorder		: "Tamanho do Limite",
DlgTableAlign		: "Alinhamento",
DlgTableAlignNotSet	: "<N瓊o definido>",
DlgTableAlignLeft	: "Esquerda",
DlgTableAlignCenter	: "Centrado",
DlgTableAlignRight	: "Direita",
DlgTableWidth		: "Largura",
DlgTableWidthPx		: "pixeis",
DlgTableWidthPc		: "percentagem",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Esp. e/c矇lulas",
DlgTableCellPad		: "Esp. interior",
DlgTableCaption		: "T穩tulo",
DlgTableSummary		: "Sum獺rio",

// Table Cell Dialog
DlgCellTitle		: "Propriedades da C矇lula",
DlgCellWidth		: "Largura",
DlgCellWidthPx		: "pixeis",
DlgCellWidthPc		: "percentagem",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Moldar Texto",
DlgCellWordWrapNotSet	: "<N瓊o definido>",
DlgCellWordWrapYes	: "Sim",
DlgCellWordWrapNo	: "N瓊o",
DlgCellHorAlign		: "Alinhamento Horizontal",
DlgCellHorAlignNotSet	: "<N瓊o definido>",
DlgCellHorAlignLeft	: "Esquerda",
DlgCellHorAlignCenter	: "Centrado",
DlgCellHorAlignRight: "Direita",
DlgCellVerAlign		: "Alinhamento Vertical",
DlgCellVerAlignNotSet	: "<N瓊o definido>",
DlgCellVerAlignTop	: "Topo",
DlgCellVerAlignMiddle	: "M矇dio",
DlgCellVerAlignBottom	: "Fundi",
DlgCellVerAlignBaseline	: "Linha de Base",
DlgCellRowSpan		: "Unir Linhas",
DlgCellCollSpan		: "Unir Colunas",
DlgCellBackColor	: "Cor do Fundo",
DlgCellBorderColor	: "Cor do Limite",
DlgCellBtnSelect	: "Seleccione...",

// Find Dialog
DlgFindTitle		: "Procurar",
DlgFindFindBtn		: "Procurar",
DlgFindNotFoundMsg	: "O texto especificado n瓊o foi encontrado.",

// Replace Dialog
DlgReplaceTitle			: "Substituir",
DlgReplaceFindLbl		: "Texto a Procurar:",
DlgReplaceReplaceLbl	: "Substituir por:",
DlgReplaceCaseChk		: "Mai繳sculas/Min繳sculas",
DlgReplaceReplaceBtn	: "Substituir",
DlgReplaceReplAllBtn	: "Substituir Tudo",
DlgReplaceWordChk		: "Coincidir com toda a palavra",

// Paste Operations / Dialog
PasteErrorCut	: "A configura癟瓊o de seguran癟a do navegador n瓊o permite a execu癟瓊o autom獺tica de opera癟繭es de cortar. Por favor use o teclado (Ctrl+X).",
PasteErrorCopy	: "A configura癟瓊o de seguran癟a do navegador n瓊o permite a execu癟瓊o autom獺tica de opera癟繭es de copiar. Por favor use o teclado (Ctrl+C).",

PasteAsText		: "Colar como Texto Simples",
PasteFromWord	: "Colar do Word",

DlgPasteMsg2	: "Por favor, cole dentro da seguinte caixa usando o teclado (<STRONG>Ctrl+V</STRONG>) e prima <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorar da defini癟繭es do Tipo de Letra ",
DlgPasteRemoveStyles	: "Remover as defini癟繭es de Estilos",
DlgPasteCleanBox		: "Caixa de Limpeza",

// Color Picker
ColorAutomatic	: "Autom獺tico",
ColorMoreColors	: "Mais Cores...",

// Document Properties
DocProps		: "Propriedades do Documento",

// Anchor Dialog
DlgAnchorTitle		: "Propriedades da ?ncora",
DlgAnchorName		: "Nome da ?ncora",
DlgAnchorErrorName	: "Por favor, introduza o nome da 璽ncora",

// Speller Pages Dialog
DlgSpellNotInDic		: "N瓊o est獺 num direct籀rio",
DlgSpellChangeTo		: "Mudar para",
DlgSpellBtnIgnore		: "Ignorar",
DlgSpellBtnIgnoreAll	: "Ignorar Tudo",
DlgSpellBtnReplace		: "Substituir",
DlgSpellBtnReplaceAll	: "Substituir Tudo",
DlgSpellBtnUndo			: "Anular",
DlgSpellNoSuggestions	: "- Sem sugest繭es -",
DlgSpellProgress		: "Verifica癟瓊o ortogr獺fica em progresso??,
DlgSpellNoMispell		: "Verifica癟瓊o ortogr獺fica completa: n瓊o foram encontrados erros",
DlgSpellNoChanges		: "Verifica癟瓊o ortogr獺fica completa: n瓊o houve altera癟瓊o de palavras",
DlgSpellOneChange		: "Verifica癟瓊o ortogr獺fica completa: uma palavra alterada",
DlgSpellManyChanges		: "Verifica癟瓊o ortogr獺fica completa: %1 palavras alteradas",

IeSpellDownload			: " Verifica癟瓊o ortogr獺fica n瓊o instalada. Quer descarregar agora?",

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
DlgFormAction	: "Ac癟瓊o",
DlgFormMethod	: "M矇todo",

// Select Field Dialog
DlgSelectName		: "Nome",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tamanho",
DlgSelectLines		: "linhas",
DlgSelectChkMulti	: "Permitir selec癟繭es m繳ltiplas",
DlgSelectOpAvail	: "Op癟繭es Poss穩veis",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Adicionar",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Para cima",
DlgSelectBtnDown	: "Para baixo",
DlgSelectBtnSetValue : "Definir um valor por defeito",
DlgSelectBtnDelete	: "Apagar",

// Textarea Dialog
DlgTextareaName	: "Nome",
DlgTextareaCols	: "Colunas",
DlgTextareaRows	: "Linhas",

// Text Field Dialog
DlgTextName			: "Nome",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Tamanho do caracter",
DlgTextMaxChars		: "Nr. M獺ximo de Caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Palavra-chave",

// Hidden Field Dialog
DlgHiddenName	: "Nome",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Propriedades da Marca",
NumberedListProp	: "Propriedades da Numera癟瓊o",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "Circulo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Quadrado",
DlgLstTypeNumbers	: "N繳meros (1, 2, 3)",
DlgLstTypeLCase		: "Letras Min繳sculas (a, b, c)",
DlgLstTypeUCase		: "Letras Mai繳sculas (A, B, C)",
DlgLstTypeSRoman	: "Numera癟瓊o Romana em Min繳sculas (i, ii, iii)",
DlgLstTypeLRoman	: "Numera癟瓊o Romana em Mai繳sculas (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Geral",
DlgDocBackTab		: "Fundo",
DlgDocColorsTab		: "Cores e Margens",
DlgDocMetaTab		: "Meta Data",

DlgDocPageTitle		: "T穩tulo da P獺gina",
DlgDocLangDir		: "Orienta癟瓊o de idioma",
DlgDocLangDirLTR	: "Esquerda ? Direita (LTR)",
DlgDocLangDirRTL	: "Direita ? Esquerda (RTL)",
DlgDocLangCode		: "C籀digo de Idioma",
DlgDocCharSet		: "Codifica癟瓊o de Caracteres",
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "Outra Codifica癟瓊o de Caracteres",

DlgDocDocType		: "Tipo de Cabe癟alho do Documento",
DlgDocDocTypeOther	: "Outro Tipo de Cabe癟alho do Documento",
DlgDocIncXHTML		: "Incluir Declara癟繭es XHTML",
DlgDocBgColor		: "Cor de Fundo",
DlgDocBgImage		: "Caminho para a Imagem de Fundo",
DlgDocBgNoScroll	: "Fundo Fixo",
DlgDocCText			: "Texto",
DlgDocCLink			: "Hiperliga癟瓊o",
DlgDocCVisited		: "Hiperliga癟瓊o Visitada",
DlgDocCActive		: "Hiperliga癟瓊o Activa",
DlgDocMargins		: "Margem das P獺ginas",
DlgDocMaTop			: "Topo",
DlgDocMaLeft		: "Esquerda",
DlgDocMaRight		: "Direita",
DlgDocMaBottom		: "Fundo",
DlgDocMeIndex		: "Palavras de Indexa癟瓊o do Documento (separadas por virgula)",
DlgDocMeDescr		: "Descri癟瓊o do Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Direitos de Autor",
DlgDocPreview		: "Pr矇-visualizar",

// Templates Dialog
Templates			: "Modelos",
DlgTemplatesTitle	: "Modelo de Conte繳do",
DlgTemplatesSelMsg	: "Por favor, seleccione o modelo a abrir no editor<br>(o conte繳do actual ser獺 perdido):",
DlgTemplatesLoading	: "A carregar a lista de modelos. Aguarde por favor...",
DlgTemplatesNoTpl	: "(Sem modelos definidos)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "Acerca",
DlgAboutBrowserInfoTab	: "Informa癟瓊o do Nevegador",
DlgAboutLicenseTab	: "Licen癟a",
DlgAboutVersion		: "vers瓊o",
DlgAboutInfo		: "Para mais informa癟繭es por favor dirija-se a"
};
