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
 * Brazilian Portuguese language file.
 $Id: pt-br.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Ocultar Barra de Ferramentas",
ToolbarExpand		: "Exibir Barra de Ferramentas",

// Toolbar Items and Context Menu
Save				: "Salvar",
NewPage				: "Novo",
Preview				: "Visualizar",
Cut					: "Recortar",
Copy				: "Copiar",
Paste				: "Colar",
PasteText			: "Colar como Texto sem Formata癟瓊o",
PasteWord			: "Colar do Word",
Print				: "Imprimir",
SelectAll			: "Selecionar Tudo",
RemoveFormat		: "Remover Formata癟瓊o",
InsertLinkLbl		: "Hiperlink",
InsertLink			: "Inserir/Editar Hiperlink",
RemoveLink			: "Remover Hiperlink",
Anchor				: "Inserir/Editar ?ncora",
InsertImageLbl		: "Figura",
InsertImage			: "Inserir/Editar Figura",
InsertFlashLbl		: "Flash",
InsertFlash			: "Insere/Edita Flash",
InsertTableLbl		: "Tabela",
InsertTable			: "Inserir/Editar Tabela",
InsertLineLbl		: "Linha",
InsertLine			: "Inserir Linha Horizontal",
InsertSpecialCharLbl: "Caracteres Especiais",
InsertSpecialChar	: "Inserir Caractere Especial",
InsertSmileyLbl		: "Emoticon",
InsertSmiley		: "Inserir Emoticon",
About				: "Sobre FCKeditor",
Bold				: "Negrito",
Italic				: "It獺lico",
Underline			: "Sublinhado",
StrikeThrough		: "Tachado",
Subscript			: "Subscrito",
Superscript			: "Sobrescrito",
LeftJustify			: "Alinhar Esquerda",
CenterJustify		: "Centralizar",
RightJustify		: "Alinhar Direita",
BlockJustify		: "Justificado",
DecreaseIndent		: "Diminuir Recuo",
IncreaseIndent		: "Aumentar Recuo",
Undo				: "Desfazer",
Redo				: "Refazer",
NumberedListLbl		: "Numera癟瓊o",
NumberedList		: "Inserir/Remover Numera癟瓊o",
BulletedListLbl		: "Marcadores",
BulletedList		: "Inserir/Remover Marcadores",
ShowTableBorders	: "Exibir Bordas da Tabela",
ShowDetails			: "Exibir Detalhes",
Style				: "Estilo",
FontFormat			: "Formata癟瓊o",
Font				: "Fonte",
FontSize			: "Tamanho",
TextColor			: "Cor do Texto",
BGColor				: "Cor do Plano de Fundo",
Source				: "C籀digo-Fonte",
Find				: "Localizar",
Replace				: "Substituir",
SpellCheck			: "Verificar Ortografia",
UniversalKeyboard	: "Teclado Universal",
PageBreakLbl		: "Quebra de P獺gina",
PageBreak			: "Inserir Quebra de P獺gina",

Form			: "Formul獺rio",
Checkbox		: "Caixa de Sele癟瓊o",
RadioButton		: "Bot瓊o de Op癟瓊o",
TextField		: "Caixa de Texto",
Textarea		: "?rea de Texto",
HiddenField		: "Campo Oculto",
Button			: "Bot瓊o",
SelectionField	: "Caixa de Listagem",
ImageButton		: "Bot瓊o de Imagem",

FitWindow		: "Maximizar o tamanho do editor",

// Context Menu
EditLink			: "Editar Hiperlink",
CellCM				: "C矇lula",
RowCM				: "Linha",
ColumnCM			: "Coluna",
InsertRow			: "Inserir Linha",
DeleteRows			: "Remover Linhas",
InsertColumn		: "Inserir Coluna",
DeleteColumns		: "Remover Colunas",
InsertCell			: "Inserir C矇lulas",
DeleteCells			: "Remover C矇lulas",
MergeCells			: "Mesclar C矇lulas",
SplitCell			: "Dividir C矇lular",
TableDelete			: "Apagar Tabela",
CellProperties		: "Formatar C矇lula",
TableProperties		: "Formatar Tabela",
ImageProperties		: "Formatar Figura",
FlashProperties		: "Propriedades Flash",

AnchorProp			: "Formatar ?ncora",
ButtonProp			: "Formatar Bot瓊o",
CheckboxProp		: "Formatar Caixa de Sele癟瓊o",
HiddenFieldProp		: "Formatar Campo Oculto",
RadioButtonProp		: "Formatar Bot瓊o de Op癟瓊o",
ImageButtonProp		: "Formatar Bot瓊o de Imagem",
TextFieldProp		: "Formatar Caixa de Texto",
SelectionFieldProp	: "Formatar Caixa de Listagem",
TextareaProp		: "Formatar ?rea de Texto",
FormProp			: "Formatar Formul獺rio",

FontFormats			: "Normal;Formatado;Endere癟o;T穩tulo 1;T穩tulo 2;T穩tulo 3;T穩tulo 4;T穩tulo 5;T穩tulo 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Processando XHTML. Por favor, aguarde...",
Done				: "Pronto",
PasteWordConfirm	: "O texto que voc礙 deseja colar parece ter sido copiado do Word. Voc礙 gostaria de remover a formata癟瓊o antes de colar?",
NotCompatiblePaste	: "Este comando est獺 dispon穩vel para o navegador Internet Explorer 5.5 ou superior. Voc礙 gostaria de colar sem remover a formata癟瓊o?",
UnknownToolbarItem	: "O item da barra de ferramentas \"%1\" n瓊o 矇 reconhecido",
UnknownCommand		: "O comando \"%1\" n瓊o 矇 reconhecido",
NotImplemented		: "O comando n瓊o foi implementado",
UnknownToolbarSet	: "A barra de ferramentas \"%1\" n瓊o existe",
NoActiveX			: "As configura癟繭es de seguran癟a do seu browser podem limitar algumas caracter穩sticas do editor. Voc礙 precisa habilitar a op癟瓊o \"Executar controles e plug-ins ActiveX\". Voc礙 pode experimentar erros e alertas de caracter穩sticas faltantes.",
BrowseServerBlocked : "Os recursos do browser n瓊o puderam ser abertos. Tenha certeza que todos os bloqueadores de popup est瓊o desabilitados.",
DialogBlocked		: "N瓊o foi poss穩vel abrir a janela de di獺logo. Tenha certeza que todos os bloqueadores de popup est瓊o desabilitados.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Cancelar",
DlgBtnClose			: "Fechar",
DlgBtnBrowseServer	: "Localizar no Servidor",
DlgAdvancedTag		: "Avan癟ado",
DlgOpOther			: "<Outros>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Inserir a URL",

// General Dialogs Labels
DlgGenNotSet		: "<n瓊o ajustado>",
DlgGenId			: "Id",
DlgGenLangDir		: "Dire癟瓊o do idioma",
DlgGenLangDirLtr	: "Esquerda para Direita (LTR)",
DlgGenLangDirRtl	: "Direita para Esquerda (RTL)",
DlgGenLangCode		: "Idioma",
DlgGenAccessKey		: "Chave de Acesso",
DlgGenName			: "Nome",
DlgGenTabIndex		: "?ndice de Tabula癟瓊o",
DlgGenLongDescr		: "Descri癟瓊o da URL",
DlgGenClass			: "Classe de Folhas de Estilo",
DlgGenTitle			: "T穩tulo",
DlgGenContType		: "Tipo de Conte繳do",
DlgGenLinkCharset	: "Conjunto de Caracteres do Hiperlink",
DlgGenStyle			: "Estilos",

// Image Dialog
DlgImgTitle			: "Formatar Figura",
DlgImgInfoTab		: "Informa癟繭es da Figura",
DlgImgBtnUpload		: "Enviar para o Servidor",
DlgImgURL			: "URL",
DlgImgUpload		: "Submeter",
DlgImgAlt			: "Texto Alternativo",
DlgImgWidth			: "Largura",
DlgImgHeight		: "Altura",
DlgImgLockRatio		: "Manter propor癟繭es",
DlgBtnResetSize		: "Redefinir para o Tamanho Original",
DlgImgBorder		: "Borda",
DlgImgHSpace		: "Horizontal",
DlgImgVSpace		: "Vertical",
DlgImgAlign			: "Alinhamento",
DlgImgAlignLeft		: "Esquerda",
DlgImgAlignAbsBottom: "Inferior Absoluto",
DlgImgAlignAbsMiddle: "Centralizado Absoluto",
DlgImgAlignBaseline	: "Baseline",
DlgImgAlignBottom	: "Inferior",
DlgImgAlignMiddle	: "Centralizado",
DlgImgAlignRight	: "Direita",
DlgImgAlignTextTop	: "Superior Absoluto",
DlgImgAlignTop		: "Superior",
DlgImgPreview		: "Visualiza癟瓊o",
DlgImgAlertUrl		: "Por favor, digite o URL da figura.",
DlgImgLinkTab		: "Hiperlink",

// Flash Dialog
DlgFlashTitle		: "Propriedades Flash",
DlgFlashChkPlay		: "Tocar Automaticamente",
DlgFlashChkLoop		: "Loop",
DlgFlashChkMenu		: "Habilita Menu Flash",
DlgFlashScale		: "Escala",
DlgFlashScaleAll	: "Mostrar tudo",
DlgFlashScaleNoBorder	: "Sem Borda",
DlgFlashScaleFit	: "Escala Exata",

// Link Dialog
DlgLnkWindowTitle	: "Hiperlink",
DlgLnkInfoTab		: "Informa癟繭es",
DlgLnkTargetTab		: "Destino",

DlgLnkType			: "Tipo de hiperlink",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "?ncora nesta p獺gina",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocolo",
DlgLnkProtoOther	: "<outro>",
DlgLnkURL			: "URL do hiperlink",
DlgLnkAnchorSel		: "Selecione uma 璽ncora",
DlgLnkAnchorByName	: "Pelo Nome da 璽ncora",
DlgLnkAnchorById	: "Pelo Id do Elemento",
DlgLnkNoAnchors		: "(N瓊o h獺 璽ncoras dispon穩veis neste documento)",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Endere癟o E-Mail",
DlgLnkEMailSubject	: "Assunto da Mensagem",
DlgLnkEMailBody		: "Corpo da Mensagem",
DlgLnkUpload		: "Enviar ao Servidor",
DlgLnkBtnUpload		: "Enviar ao Servidor",

DlgLnkTarget		: "Destino",
DlgLnkTargetFrame	: "<frame>",
DlgLnkTargetPopup	: "<janela popup>",
DlgLnkTargetBlank	: "Nova Janela (_blank)",
DlgLnkTargetParent	: "Janela Pai (_parent)",
DlgLnkTargetSelf	: "Mesma Janela (_self)",
DlgLnkTargetTop		: "Janela Superior (_top)",
DlgLnkTargetFrameName	: "Nome do Frame de Destino",
DlgLnkPopWinName	: "Nome da Janela Pop-up",
DlgLnkPopWinFeat	: "Atributos da Janela Pop-up",
DlgLnkPopResize		: "Redimension獺vel",
DlgLnkPopLocation	: "Barra de Endere癟os",
DlgLnkPopMenu		: "Barra de Menus",
DlgLnkPopScroll		: "Barras de Rolagem",
DlgLnkPopStatus		: "Barra de Status",
DlgLnkPopToolbar	: "Barra de Ferramentas",
DlgLnkPopFullScrn	: "Modo Tela Cheia (IE)",
DlgLnkPopDependent	: "Dependente (Netscape)",
DlgLnkPopWidth		: "Largura",
DlgLnkPopHeight		: "Altura",
DlgLnkPopLeft		: "Esquerda",
DlgLnkPopTop		: "Superior",

DlnLnkMsgNoUrl		: "Por favor, digite o endere癟o do Hiperlink",
DlnLnkMsgNoEMail	: "Por favor, digite o endere癟o de e-mail",
DlnLnkMsgNoAnchor	: "Por favor, selecione uma 璽ncora",
DlnLnkMsgInvPopName	: "O nome da janela popup deve come癟ar com uma letra ou sublinhado (_) e n瓊o pode conter espa癟os",

// Color Dialog
DlgColorTitle		: "Selecione uma Cor",
DlgColorBtnClear	: "Limpar",
DlgColorHighlight	: "Visualiza癟瓊o",
DlgColorSelected	: "Selecionada",

// Smiley Dialog
DlgSmileyTitle		: "Inserir Emoticon",

// Special Character Dialog
DlgSpecialCharTitle	: "Selecione um Caractere Especial",

// Table Dialog
DlgTableTitle		: "Formatar Tabela",
DlgTableRows		: "Linhas",
DlgTableColumns		: "Colunas",
DlgTableBorder		: "Borda",
DlgTableAlign		: "Alinhamento",
DlgTableAlignNotSet	: "<N瓊o ajustado>",
DlgTableAlignLeft	: "Esquerda",
DlgTableAlignCenter	: "Centralizado",
DlgTableAlignRight	: "Direita",
DlgTableWidth		: "Largura",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "%",
DlgTableHeight		: "Altura",
DlgTableCellSpace	: "Espa癟amento",
DlgTableCellPad		: "Enchimento",
DlgTableCaption		: "Legenda",
DlgTableSummary		: "Resumo",

// Table Cell Dialog
DlgCellTitle		: "Formatar c矇lula",
DlgCellWidth		: "Largura",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "%",
DlgCellHeight		: "Altura",
DlgCellWordWrap		: "Quebra de Linha",
DlgCellWordWrapNotSet	: "<N瓊o ajustado>",
DlgCellWordWrapYes	: "Sim",
DlgCellWordWrapNo	: "N瓊o",
DlgCellHorAlign		: "Alinhamento Horizontal",
DlgCellHorAlignNotSet	: "<N瓊o ajustado>",
DlgCellHorAlignLeft	: "Esquerda",
DlgCellHorAlignCenter	: "Centralizado",
DlgCellHorAlignRight: "Direita",
DlgCellVerAlign		: "Alinhamento Vertical",
DlgCellVerAlignNotSet	: "<N瓊o ajustado>",
DlgCellVerAlignTop	: "Superior",
DlgCellVerAlignMiddle	: "Centralizado",
DlgCellVerAlignBottom	: "Inferior",
DlgCellVerAlignBaseline	: "Baseline",
DlgCellRowSpan		: "Transpor Linhas",
DlgCellCollSpan		: "Transpor Colunas",
DlgCellBackColor	: "Cor do Plano de Fundo",
DlgCellBorderColor	: "Cor da Borda",
DlgCellBtnSelect	: "Selecionar...",

// Find Dialog
DlgFindTitle		: "Localizar...",
DlgFindFindBtn		: "Localizar",
DlgFindNotFoundMsg	: "O texto especificado n瓊o foi encontrado.",

// Replace Dialog
DlgReplaceTitle			: "Substituir",
DlgReplaceFindLbl		: "Procurar por:",
DlgReplaceReplaceLbl	: "Substituir por:",
DlgReplaceCaseChk		: "Coincidir Mai繳sculas/Min繳sculas",
DlgReplaceReplaceBtn	: "Substituir",
DlgReplaceReplAllBtn	: "Substituir Tudo",
DlgReplaceWordChk		: "Coincidir a palavra inteira",

// Paste Operations / Dialog
PasteErrorCut	: "As configura癟繭es de seguran癟a do seu navegador n瓊o permitem que o editor execute opera癟繭es de recortar automaticamente. Por favor, utilize o teclado para recortar (Ctrl+X).",
PasteErrorCopy	: "As configura癟繭es de seguran癟a do seu navegador n瓊o permitem que o editor execute opera癟繭es de copiar automaticamente. Por favor, utilize o teclado para copiar (Ctrl+C).",

PasteAsText		: "Colar como Texto sem Formata癟瓊o",
PasteFromWord	: "Colar do Word",

DlgPasteMsg2	: "Transfira o link usado no box usando o teclado com (<STRONG>Ctrl+V</STRONG>) e <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorar defini癟繭es de fonte",
DlgPasteRemoveStyles	: "Remove defini癟繭es de estilo",
DlgPasteCleanBox		: "Limpar Box",

// Color Picker
ColorAutomatic	: "Autom獺tico",
ColorMoreColors	: "Mais Cores...",

// Document Properties
DocProps		: "Propriedades Documento",

// Anchor Dialog
DlgAnchorTitle		: "Formatar ?ncora",
DlgAnchorName		: "Nome da ?ncora",
DlgAnchorErrorName	: "Por favor, digite o nome da 璽ncora",

// Speller Pages Dialog
DlgSpellNotInDic		: "N瓊o encontrada",
DlgSpellChangeTo		: "Alterar para",
DlgSpellBtnIgnore		: "Ignorar uma vez",
DlgSpellBtnIgnoreAll	: "Ignorar Todas",
DlgSpellBtnReplace		: "Alterar",
DlgSpellBtnReplaceAll	: "Alterar Todas",
DlgSpellBtnUndo			: "Desfazer",
DlgSpellNoSuggestions	: "-sem sugest繭es de ortografia-",
DlgSpellProgress		: "Verifica癟瓊o ortogr獺fica em andamento...",
DlgSpellNoMispell		: "Verifica癟瓊o encerrada: N瓊o foram encontrados erros de ortografia",
DlgSpellNoChanges		: "Verifica癟瓊o ortogr獺fica encerrada: N瓊o houve altera癟繭es",
DlgSpellOneChange		: "Verifica癟瓊o ortogr獺fica encerrada: Uma palavra foi alterada",
DlgSpellManyChanges		: "Verifica癟瓊o ortogr獺fica encerrada: %1 foram alteradas",

IeSpellDownload			: "A verifica癟瓊o ortogr獺fica n瓊o foi instalada. Voc礙 gostaria de realizar o download agora?",

// Button Dialog
DlgButtonText		: "Texto (Valor)",
DlgButtonType		: "Tipo",
DlgButtonTypeBtn	: "Bot瓊o",
DlgButtonTypeSbm	: "Enviar",
DlgButtonTypeRst	: "Limpar",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nome",
DlgCheckboxValue	: "Valor",
DlgCheckboxSelected	: "Selecionado",

// Form Dialog
DlgFormName		: "Nome",
DlgFormAction	: "Action",
DlgFormMethod	: "M矇todo",

// Select Field Dialog
DlgSelectName		: "Nome",
DlgSelectValue		: "Valor",
DlgSelectSize		: "Tamanho",
DlgSelectLines		: "linhas",
DlgSelectChkMulti	: "Permitir m繳ltiplas sele癟繭es",
DlgSelectOpAvail	: "Op癟繭es dispon穩veis",
DlgSelectOpText		: "Texto",
DlgSelectOpValue	: "Valor",
DlgSelectBtnAdd		: "Adicionar",
DlgSelectBtnModify	: "Modificar",
DlgSelectBtnUp		: "Para cima",
DlgSelectBtnDown	: "Para baixo",
DlgSelectBtnSetValue : "Definir como selecionado",
DlgSelectBtnDelete	: "Remover",

// Textarea Dialog
DlgTextareaName	: "Nome",
DlgTextareaCols	: "Colunas",
DlgTextareaRows	: "Linhas",

// Text Field Dialog
DlgTextName			: "Nome",
DlgTextValue		: "Valor",
DlgTextCharWidth	: "Comprimento (em caracteres)",
DlgTextMaxChars		: "N繳mero M獺ximo de Caracteres",
DlgTextType			: "Tipo",
DlgTextTypeText		: "Texto",
DlgTextTypePass		: "Senha",

// Hidden Field Dialog
DlgHiddenName	: "Nome",
DlgHiddenValue	: "Valor",

// Bulleted List Dialog
BulletedListProp	: "Formatar Marcadores",
NumberedListProp	: "Formatar Numera癟瓊o",
DlgLstStart			: "Iniciar",
DlgLstType			: "Tipo",
DlgLstTypeCircle	: "C穩rculo",
DlgLstTypeDisc		: "Disco",
DlgLstTypeSquare	: "Quadrado",
DlgLstTypeNumbers	: "N繳meros (1, 2, 3)",
DlgLstTypeLCase		: "Letras Min繳sculas (a, b, c)",
DlgLstTypeUCase		: "Letras Mai繳sculas (A, B, C)",
DlgLstTypeSRoman	: "N繳meros Romanos Min繳sculos (i, ii, iii)",
DlgLstTypeLRoman	: "N繳meros Romanos Mai繳sculos (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "Geral",
DlgDocBackTab		: "Plano de Fundo",
DlgDocColorsTab		: "Cores e Margens",
DlgDocMetaTab		: "Meta Dados",

DlgDocPageTitle		: "T穩tulo da P獺gina",
DlgDocLangDir		: "Dire癟瓊o do Idioma",
DlgDocLangDirLTR	: "Esquerda para Direita (LTR)",
DlgDocLangDirRTL	: "Direita para Esquerda (RTL)",
DlgDocLangCode		: "C籀digo do Idioma",
DlgDocCharSet		: "Codifica癟瓊o de Caracteres",
DlgDocCharSetCE		: "Europa Central",
DlgDocCharSetCT		: "Chin礙s Tradicional (Big5)",
DlgDocCharSetCR		: "Cir穩lico",
DlgDocCharSetGR		: "Grego",
DlgDocCharSetJP		: "Japon礙s",
DlgDocCharSetKR		: "Coreano",
DlgDocCharSetTR		: "Turco",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Europa Ocidental",
DlgDocCharSetOther	: "Outra Codifica癟瓊o de Caracteres",

DlgDocDocType		: "Cabe癟alho Tipo de Documento",
DlgDocDocTypeOther	: "Other Document Type Heading",
DlgDocIncXHTML		: "Incluir Declara癟繭es XHTML",
DlgDocBgColor		: "Cor do Plano de Fundo",
DlgDocBgImage		: "URL da Imagem de Plano de Fundo",
DlgDocBgNoScroll	: "Plano de Fundo Fixo",
DlgDocCText			: "Texto",
DlgDocCLink			: "Hiperlink",
DlgDocCVisited		: "Hiperlink Visitado",
DlgDocCActive		: "Hiperlink Ativo",
DlgDocMargins		: "Margens da P獺gina",
DlgDocMaTop			: "Superior",
DlgDocMaLeft		: "Inferior",
DlgDocMaRight		: "Direita",
DlgDocMaBottom		: "Inferior",
DlgDocMeIndex		: "Palavras-chave de Indexa癟瓊o do Documento (separadas por v穩rgula)",
DlgDocMeDescr		: "Descri癟瓊o do Documento",
DlgDocMeAuthor		: "Autor",
DlgDocMeCopy		: "Direitos Autorais",
DlgDocPreview		: "Visualizar",

// Templates Dialog
Templates			: "Modelos de layout",
DlgTemplatesTitle	: "Modelo de layout do conte繳do",
DlgTemplatesSelMsg	: "Selecione um modelo de layout para ser aberto no editor<br>(o conte繳do atual ser獺 perdido):",
DlgTemplatesLoading	: "Carregando a lista de modelos de layout. Aguarde...",
DlgTemplatesNoTpl	: "(N瓊o foram definidos modelos de layout)",
DlgTemplatesReplace	: "Substituir o conte繳do atual",

// About Dialog
DlgAboutAboutTab	: "Sobre",
DlgAboutBrowserInfoTab	: "Informa癟繭es do Navegador",
DlgAboutLicenseTab	: "Licen癟a",
DlgAboutVersion		: "vers瓊o",
DlgAboutInfo		: "Para maiores informa癟繭es visite"
};
