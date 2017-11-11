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
 * Korean language file.
 $Id: ko.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "?渠? 穈?篣?,
ToolbarExpand		: "?渠? 貐渥篣?,

// Toolbar Items and Context Menu
Save				: "??伕?篣?,
NewPage				: "??諡賄?",
Preview				: "諯賈收貐湊萼",
Cut					: "??湊萼",
Copy				: "貐蛙?萼",
Paste				: "賱??萼",
PasteText			: "??賈? 賱??萼",
PasteWord			: "MS Word ???? 賱??萼",
Print				: "?賄??萼",
SelectAll			: "?眼??",
RemoveFormat		: "?禺孚 鴔?國萼",
InsertLinkLbl		: "諤",
InsertLink			: "諤 ?趣?/貐窶?,
RemoveLink			: "諤 ?原?",
Anchor				: "麇????趣?/貐窶?,
InsertImageLbl		: "?渠站鴔",
InsertImage			: "?渠站鴔 ?趣?/貐窶?,
InsertFlashLbl		: "????,
InsertFlash			: "?????趣?/貐窶?,
InsertTableLbl		: "??,
InsertTable			: "???趣?/貐窶?,
InsertLineLbl		: "????,
InsertLine			: "?????趣?",
InsertSpecialCharLbl: "?寢?諡賄? ?趣?",
InsertSpecialChar	: "?寢?諡賄? ?趣?",
InsertSmileyLbl		: "?儠?,
InsertSmiley		: "?儠??趣?",
About				: "FCKeditor????",
Bold				: "鴔?窶?,
Italic				: "?渣?謔?,
Underline			: "諻?",
StrikeThrough		: "鼒到???,
Subscript			: "?? 麮到?",
Superscript			: "??麮到?",
LeftJustify			: "?潰直 ?",
CenterJustify		: "穈?渠 ?",
RightJustify		: "?月斥鴘??",
BlockJustify		: "?直 諤隊",
DecreaseIndent		: "?渥?國萼",
IncreaseIndent		: "?木?國萼",
Undo				: "鼒到?",
Redo				: "?科??,
NumberedListLbl		: "???? 諈拘?",
NumberedList		: "???? 諈拘?",
BulletedListLbl		: "???? 諈拘?",
BulletedList		: "???? 諈拘?",
ShowTableBorders	: "????謔?貐湊萼",
ShowDetails			: "諡賄?篣堅 貐湊萼",
Style				: "?欠???,
FontFormat			: "?禺孚",
Font				: "?堅",
FontSize			: "篣???禹萼",
TextColor			: "篣????",
BGColor				: "諻國祭 ??",
Source				: "?",
Find				: "麆樽萼",
Replace				: "諻噪篣?,
SpellCheck			: "麮?窶??,
UniversalKeyboard	: "?曰筏???篣?,
PageBreakLbl		: "Page Break",	//MISSING
PageBreak			: "Insert Page Break",	//MISSING

Form			: "??,
Checkbox		: "麮渣諻",
RadioButton		: "?潺??月???,
TextField		: "???",
Textarea		: "??",
HiddenField		: "?刷???",
Button			: "貒",
SelectionField	: "?潰麂諈拘?",
ImageButton		: "?渠站鴔貒",

FitWindow		: "Maximize the editor size",	//MISSING

// Context Menu
EditLink			: "諤 ??",
CellCM				: "Cell",	//MISSING
RowCM				: "Row",	//MISSING
ColumnCM			: "Column",	//MISSING
InsertRow			: "穈諢? ?趣?",
DeleteRows			: "穈諢? ?原?",
InsertColumn		: "?賈?鴗??趣?",
DeleteColumns		: "?賈?鴗??原?",
InsertCell			: "? ?趣?",
DeleteCells			: "? ?原?",
MergeCells			: "? ?拖?篣?,
SplitCell			: "? ??篣?,
TableDelete			: "Delete Table",	//MISSING
CellProperties		: "? ?",
TableProperties		: "???",
ImageProperties		: "?渠站鴔 ?",
FlashProperties		: "?????",

AnchorProp			: "麇????",
ButtonProp			: "貒 ?",
CheckboxProp		: "麮渣諻 ?",
HiddenFieldProp		: "?刷??? ?",
RadioButtonProp		: "?潺??月????",
ImageButtonProp		: "?渠站鴔貒 ?",
TextFieldProp		: "??? ?",
SelectionFieldProp	: "?潰麂諈拘? ?",
TextareaProp		: "?? ?",
FormProp			: "???",

FontFormats			: "Normal;Formatted;Address;Heading 1;Heading 2;Heading 3;Heading 4;Heading 5;Heading 6",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "XHTML 麮收鴗? ??諤?篣圉?木ˉ?原???",
Done				: "??",
PasteWordConfirm	: "賱??萼 ????賈? MS Word?? 貐蛙??窶??. 賱??萼 ?? MS Word ?禺岱???原???窶???",
NotCompatiblePaste	: "??諈? ?貲?瑜?欠?諢 5.5 貒? ?渥???諤????拘??? ?禺岱???原??? ?? 賱??萼 ??窶???",
UnknownToolbarItem	: "???? ?渠????? : \"%1\"",
UnknownCommand		: "???? 篣圉???? : \"%1\"",
NotImplemented		: "篣圉???欠??? ???蛟???",
UnknownToolbarSet	: "?渠? ?木?????. : \"%1\"",
NoActiveX			: "Your browser's security settings could limit some features of the editor. You must enable the option \"Run ActiveX controls and plug-ins\". You may experience errors and notice missing features.",	//MISSING
BrowseServerBlocked : "The resources browser could not be opened. Make sure that all popup blockers are disabled.",	//MISSING
DialogBlocked		: "It was not possible to open the dialog window. Make sure all popup blockers are disabled.",	//MISSING

// Dialogs
DlgBtnOK			: "??,
DlgBtnCancel		: "????,
DlgBtnClose			: "?恰萼",
DlgBtnBrowseServer	: "?? 貐湊萼",
DlgAdvancedTag		: "???,
DlgOpOther			: "<篣堅?>",
DlgInfoTab			: "?陷",
DlgAlertUrl			: "URL??????",

// General Dialogs Labels
DlgGenNotSet		: "<?木??? ??>",
DlgGenId			: "ID",
DlgGenLangDir		: "?國萼 諻拗",
DlgGenLangDirLtr	: "?潰直?? ?月斥鴘?(LTR)",
DlgGenLangDirRtl	: "?月斥鴘趣????潰直 (RTL)",
DlgGenLangCode		: "?賄 儠?",
DlgGenAccessKey		: "?????,
DlgGenName			: "Name",
DlgGenTabIndex		: "????",
DlgGenLongDescr		: "URL ?月?",
DlgGenClass			: "Stylesheet Classes",
DlgGenTitle			: "Advisory Title",
DlgGenContType		: "Advisory Content Type",
DlgGenLinkCharset	: "Linked Resource Charset",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "?渠站鴔 ?木?",
DlgImgInfoTab		: "?渠站鴔 ?陷",
DlgImgBtnUpload		: "??諢??",
DlgImgURL			: "URL",
DlgImgUpload		: "????,
DlgImgAlt			: "?渠站鴔 ?月?",
DlgImgWidth			: "??",
DlgImgHeight		: "?",
DlgImgLockRatio		: "赬 ??",
DlgBtnResetSize		: "?? ?禹萼諢?,
DlgImgBorder		: "??謔?,
DlgImgHSpace		: "???禺停",
DlgImgVSpace		: "???禺停",
DlgImgAlign			: "?",
DlgImgAlignLeft		: "?潰直",
DlgImgAlignAbsBottom: "鴗???Abs Bottom)",
DlgImgAlignAbsMiddle: "鴗?穈?Abs Middle)",
DlgImgAlignBaseline	: "篣域???,
DlgImgAlignBottom	: "??",
DlgImgAlignMiddle	: "鴗?",
DlgImgAlignRight	: "?月斥鴘?,
DlgImgAlignTextTop	: "篣??(Text Top)",
DlgImgAlignTop		: "??,
DlgImgPreview		: "諯賈收貐湊萼",
DlgImgAlertUrl		: "?渠站鴔 URL??????",
DlgImgLinkTab		: "諤",

// Flash Dialog
DlgFlashTitle		: "?????梵??陷",
DlgFlashChkPlay		: "???科?",
DlgFlashChkLoop		: "諻陬",
DlgFlashChkMenu		: "???禺???穈??,
DlgFlashScale		: "?",
DlgFlashScaleAll	: "諈刺?貐湊萼",
DlgFlashScaleNoBorder	: "窶赭?????,
DlgFlashScaleFit	: "???魽域?",

// Link Dialog
DlgLnkWindowTitle	: "諤",
DlgLnkInfoTab		: "諤 ?陷",
DlgLnkTargetTab		: "?窶?,

DlgLnkType			: "諤 鮈?",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "麇???,
DlgLnkTypeEMail		: "?渠???,
DlgLnkProto			: "????",
DlgLnkProtoOther	: "<篣堅?>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "麇?????",
DlgLnkAnchorByName	: "麇????渠?",
DlgLnkAnchorById	: "麇???ID",
DlgLnkNoAnchors		: "<諡賄???麇??澎? ??.>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "?渠???鴥潰?",
DlgLnkEMailSubject	: "?版",
DlgLnkEMailBody		: "?渥",
DlgLnkUpload		: "????,
DlgLnkBtnUpload		: "??諢??",

DlgLnkTarget		: "?窶?,
DlgLnkTargetFrame	: "<????",
DlgLnkTargetPopup	: "<??麆?",
DlgLnkTargetBlank	: "??麆?(_blank)",
DlgLnkTargetParent	: "賱諈?麆?(_parent)",
DlgLnkTargetSelf	: "? 麆?(_self)",
DlgLnkTargetTop		: "黖??? 麆?(_top)",
DlgLnkTargetFrameName	: "?窶??????渠?",
DlgLnkPopWinName	: "??麆??渠?",
DlgLnkPopWinFeat	: "??麆??木?",
DlgLnkPopResize		: "?禹萼魽域?",
DlgLnkPopLocation	: "鴥潰???鴗?,
DlgLnkPopMenu		: "諰諻?,
DlgLnkPopScroll		: "?欠諢月?",
DlgLnkPopStatus		: "??諻?,
DlgLnkPopToolbar	: "?渠?",
DlgLnkPopFullScrn	: "?眼?庖 (IE)",
DlgLnkPopDependent	: "Dependent (Netscape)",
DlgLnkPopWidth		: "??",
DlgLnkPopHeight		: "?",
DlgLnkPopLeft		: "?潰直 ??",
DlgLnkPopTop		: "?直 ??",

DlnLnkMsgNoUrl		: "諤 URL??????.",
DlnLnkMsgNoEMail	: "?渠??潰ˉ?未 ????.",
DlnLnkMsgNoAnchor	: "麇??潺???????.",
DlnLnkMsgInvPopName	: "The popup name must begin with an alphabetic character and must not contain spaces",	//MISSING

// Color Dialog
DlgColorTitle		: "?? ??",
DlgColorBtnClear	: "鴔?國萼",
DlgColorHighlight	: "?",
DlgColorSelected	: "????,

// Smiley Dialog
DlgSmileyTitle		: "?儠??趣?",

// Special Character Dialog
DlgSpecialCharTitle	: "?寢?諡賄? ??",

// Table Dialog
DlgTableTitle		: "???木?",
DlgTableRows		: "穈諢?",
DlgTableColumns		: "?賈?鴗?,
DlgTableBorder		: "??謔??禹萼",
DlgTableAlign		: "?",
DlgTableAlignNotSet	: "<?木??? ??>",
DlgTableAlignLeft	: "?潰直",
DlgTableAlignCenter	: "穈?渠",
DlgTableAlignRight	: "?月斥鴘?,
DlgTableWidth		: "??",
DlgTableWidthPx		: "?趣?",
DlgTableWidthPc		: "?潰??,
DlgTableHeight		: "?",
DlgTableCellSpace	: "? 穈痔",
DlgTableCellPad		: "? ?禺停",
DlgTableCaption		: "儥∫?",
DlgTableSummary		: "Summary",	//MISSING

// Table Cell Dialog
DlgCellTitle		: "? ?木?",
DlgCellWidth		: "??",
DlgCellWidthPx		: "?趣?",
DlgCellWidthPc		: "?潰??,
DlgCellHeight		: "?",
DlgCellWordWrap		: "????,
DlgCellWordWrapNotSet	: "<?木??? ??>",
DlgCellWordWrapYes	: "??,
DlgCellWordWrapNo	: "????,
DlgCellHorAlign		: "?? ?",
DlgCellHorAlignNotSet	: "<?木??? ??>",
DlgCellHorAlignLeft	: "?潰直",
DlgCellHorAlignCenter	: "穈?渠",
DlgCellHorAlignRight: "?月斥鴘?,
DlgCellVerAlign		: "?? ?",
DlgCellVerAlignNotSet	: "<?木??? ??>",
DlgCellVerAlignTop	: "??,
DlgCellVerAlignMiddle	: "鴗?",
DlgCellVerAlignBottom	: "??",
DlgCellVerAlignBaseline	: "篣域???,
DlgCellRowSpan		: "?賈? ?拖?篣?,
DlgCellCollSpan		: "穈諢??拖?篣?,
DlgCellBackColor	: "諻國祭 ??",
DlgCellBorderColor	: "??謔???",
DlgCellBtnSelect	: "??",

// Find Dialog
DlgFindTitle		: "麆樽萼",
DlgFindFindBtn		: "麆樽萼",
DlgFindNotFoundMsg	: "諡賄??渥? 麆樺? ????.",

// Replace Dialog
DlgReplaceTitle			: "諻噪篣?,
DlgReplaceFindLbl		: "麆樺? 諡賄???",
DlgReplaceReplaceLbl	: "諻? 諡賄???",
DlgReplaceCaseChk		: "??爰??窱禺?",
DlgReplaceReplaceBtn	: "諻噪篣?,
DlgReplaceReplAllBtn	: "諈刺? 諻噪篣?,
DlgReplaceWordChk		: "?到????到",

// Paste Operations / Dialog
PasteErrorCut	: "賳?域???貐渥??木??爰????湊萼 篣圉???欠???????. ?月陷??諈???科???. (Ctrl+X).",
PasteErrorCopy	: "賳?域???貐渥??木??爰??貐蛙?萼 篣圉???欠???????. ?月陷??諈???科???.  (Ctrl+C).",

PasteAsText		: "??賈? 賱??萼",
PasteFromWord	: "MS Word ???? 賱??萼",

DlgPasteMsg2	: "?月陷?? (<STRONG>Ctrl+V</STRONG>) 諝??渥?渥? ???? 賱??? <STRONG>OK</STRONG> 諝??打?賄?.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "?堅 ?木? 諡渥?",
DlgPasteRemoveStyles	: "?欠????? ?掠",
DlgPasteCleanBox		: "篣?? ?掠",

// Color Picker
ColorAutomatic	: "篣圉雩??",
ColorMoreColors	: "????...",

// Document Properties
DocProps		: "諡賄? ?",

// Anchor Dialog
DlgAnchorTitle		: "麇????",
DlgAnchorName		: "麇????渠?",
DlgAnchorErrorName	: "麇????渠???????.",

// Speller Pages Dialog
DlgSpellNotInDic		: "?科????? ?到",
DlgSpellChangeTo		: "貐窶踫? ?到",
DlgSpellBtnIgnore		: "穇渠??",
DlgSpellBtnIgnoreAll	: "諈刺? 穇渠??",
DlgSpellBtnReplace		: "貐窶?,
DlgSpellBtnReplaceAll	: "諈刺? 貐窶?,
DlgSpellBtnUndo			: "鼒到?",
DlgSpellNoSuggestions	: "- 黺??到 ?? -",
DlgSpellProgress		: "麮?窶?禺未 鴔?鴗??...",
DlgSpellNoMispell		: "麮?窶????: ?盂??麮?穈 ??.",
DlgSpellNoChanges		: "麮?窶????: 貐窶趟? ?到穈 ??.",
DlgSpellOneChange		: "麮?窶????: ?到穈 貐窶趟???.",
DlgSpellManyChanges		: "麮?窶????: %1 ?到穈 貐窶趟???.",

IeSpellDownload			: "麮? 窶?禹萼穈 麮??? ???蛟??? 鴔篣??木諢???窶???",

// Button Dialog
DlgButtonText		: "貒篣??穈?",
DlgButtonType		: "貒鮈?",
DlgButtonTypeBtn	: "Button",	//MISSING
DlgButtonTypeSbm	: "Submit",	//MISSING
DlgButtonTypeRst	: "Reset",	//MISSING

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "?渠?",
DlgCheckboxValue	: "穈?,
DlgCheckboxSelected	: "????,

// Form Dialog
DlgFormName		: "?潰謔?,
DlgFormAction	: "?欠?窶趟?(Action)",
DlgFormMethod	: "諻拘?(Method)",

// Select Field Dialog
DlgSelectName		: "?渠?",
DlgSelectValue		: "穈?,
DlgSelectSize		: "?賈??禹萼",
DlgSelectLines		: "鴗?,
DlgSelectChkMulti	: "?禺?卿版 ?? ?",
DlgSelectOpAvail	: "???蛙?",
DlgSelectOpText		: "?渠?",
DlgSelectOpValue	: "穈?,
DlgSelectBtnAdd		: "黺?",
DlgSelectBtnModify	: "貐窶?,
DlgSelectBtnUp		: "??",
DlgSelectBtnDown	: "??諢?,
DlgSelectBtnSetValue : "?????潺? ?木?",
DlgSelectBtnDelete	: "?原?",

// Textarea Dialog
DlgTextareaName	: "?渠?",
DlgTextareaCols	: "儦賄?",
DlgTextareaRows	: "鴗?",

// Text Field Dialog
DlgTextName			: "?渠?",
DlgTextValue		: "穈?,
DlgTextCharWidth	: "篣????",
DlgTextMaxChars		: "黖? 篣??",
DlgTextType			: "鮈?",
DlgTextTypeText		: "諡賄???,
DlgTextTypePass		: "赬?貒",

// Hidden Field Dialog
DlgHiddenName	: "?渠?",
DlgHiddenValue	: "穈?,

// Bulleted List Dialog
BulletedListProp	: "???? 諈拘? ?",
NumberedListProp	: "???? 諈拘? ?",
DlgLstStart			: "Start",	//MISSING
DlgLstType			: "鮈?",
DlgLstTypeCircle	: "??Circle)",
DlgLstTypeDisc		: "Disc",	//MISSING
DlgLstTypeSquare	: "?月爸??Square)",
DlgLstTypeNumbers	: "貒 (1, 2, 3)",
DlgLstTypeLCase		: "?爰??(a, b, c)",
DlgLstTypeUCase		: "?諡賄? (A, B, C)",
DlgLstTypeSRoman	: "諢????爰??(i, ii, iii)",
DlgLstTypeLRoman	: "諢????諡賄? (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "?潺?",
DlgDocBackTab		: "諻國祭",
DlgDocColorsTab		: "?? 諻??禺停",
DlgDocMetaTab		: "諰??域??,

DlgDocPageTitle		: "?鴔諈?,
DlgDocLangDir		: "諡賄? ?國萼諻拗",
DlgDocLangDirLTR	: "?潰直?? ?月斥鴘?(LTR)",
DlgDocLangDirRTL	: "?月斥鴘趣????潰直 (RTL)",
DlgDocLangCode		: "?賄儠?",
DlgDocCharSet		: "儥早?域? ?賄???,
DlgDocCharSetCE		: "Central European",	//MISSING
DlgDocCharSetCT		: "Chinese Traditional (Big5)",	//MISSING
DlgDocCharSetCR		: "Cyrillic",	//MISSING
DlgDocCharSetGR		: "Greek",	//MISSING
DlgDocCharSetJP		: "Japanese",	//MISSING
DlgDocCharSetKR		: "Korean",	//MISSING
DlgDocCharSetTR		: "Turkish",	//MISSING
DlgDocCharSetUN		: "Unicode (UTF-8)",	//MISSING
DlgDocCharSetWE		: "Western European",	//MISSING
DlgDocCharSetOther	: "?月斥 儥早?域? ?賄???,

DlgDocDocType		: "諡賄? ?月?",
DlgDocDocTypeOther	: "?月斥 諡賄??月?",
DlgDocIncXHTML		: "XHTML 諡賄??? ?秒",
DlgDocBgColor		: "諻國祭??",
DlgDocBgImage		: "諻國祭?渠站鴔 URL",
DlgDocBgNoScroll	: "?欠諢月?鴔?? 諻國祭",
DlgDocCText			: "???,
DlgDocCLink			: "諤",
DlgDocCVisited		: "諻拘爰??諤(Visited)",
DlgDocCActive		: "??? 諤(Active)",
DlgDocMargins		: "?鴔 ?禺停",
DlgDocMaTop			: "??,
DlgDocMaLeft		: "?潰直",
DlgDocMaRight		: "?月斥鴘?,
DlgDocMaBottom		: "??",
DlgDocMeIndex		: "諡賄? ?木???(儠月?諢?窱禺?)",
DlgDocMeDescr		: "諡賄? ?月?",
DlgDocMeAuthor		: "???,
DlgDocMeCopy		: "???",
DlgDocPreview		: "諯賈收貐湊萼",

// Templates Dialog
Templates			: "??謔?,
DlgTemplatesTitle	: "?渥 ??謔?,
DlgTemplatesSelMsg	: "???域????科????謔辦? ?????.<br>(鴔篣?鴔 ????渥? ?禺鴔???):",
DlgTemplatesLoading	: "??謔?諈拘???賱?月?鴗??. ??諤?篣圉?木ˉ?原???",
DlgTemplatesNoTpl	: "(??謔辦 ??.)",
DlgTemplatesReplace	: "Replace actual contents",	//MISSING

// About Dialog
DlgAboutAboutTab	: "About",
DlgAboutBrowserInfoTab	: "賳?域? ?陷",
DlgAboutLicenseTab	: "License",	//MISSING
DlgAboutVersion		: "貒?",
DlgAboutInfo		: "For further information go to"
};
