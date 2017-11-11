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
 * French language file.
 $Id: fr.js 5311 2009-01-10 08:11:55Z hami $
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",

ToolbarCollapse		: "Masquer Outils",
ToolbarExpand		: "Afficher Outils",

// Toolbar Items and Context Menu
Save				: "Enregistrer",
NewPage				: "Nouvelle page",
Preview				: "Pr矇visualisation",
Cut					: "Couper",
Copy				: "Copier",
Paste				: "Coller",
PasteText			: "Coller comme texte",
PasteWord			: "Coller de Word",
Print				: "Imprimer",
SelectAll			: "Tout s矇lectionner",
RemoveFormat		: "Supprimer le format",
InsertLinkLbl		: "Lien",
InsertLink			: "Ins矇rer/modifier le lien",
RemoveLink			: "Supprimer le lien",
Anchor				: "Ins矇rer/modifier l'ancre",
InsertImageLbl		: "Image",
InsertImage			: "Ins矇rer/modifier l'image",
InsertFlashLbl		: "Animation Flash",
InsertFlash			: "Ins矇rer/modifier l'animation Flash",
InsertTableLbl		: "Tableau",
InsertTable			: "Ins矇rer/modifier le tableau",
InsertLineLbl		: "S矇parateur",
InsertLine			: "Ins矇rer un s矇parateur",
InsertSpecialCharLbl: "Caract癡res sp矇ciaux",
InsertSpecialChar	: "Ins矇rer un caract癡re sp矇cial",
InsertSmileyLbl		: "Smiley",
InsertSmiley		: "Ins矇rer un Smiley",
About				: "A propos de FCKeditor",
Bold				: "Gras",
Italic				: "Italique",
Underline			: "Soulign矇",
StrikeThrough		: "Barr矇",
Subscript			: "Indice",
Superscript			: "Exposant",
LeftJustify			: "Align矇 ? gauche",
CenterJustify		: "Centr矇",
RightJustify		: "Align矇 ? Droite",
BlockJustify		: "Texte justifi矇",
DecreaseIndent		: "Diminuer le retrait",
IncreaseIndent		: "Augmenter le retrait",
Undo				: "Annuler",
Redo				: "Refaire",
NumberedListLbl		: "Liste num矇rot矇e",
NumberedList		: "Ins矇rer/supprimer la liste num矇rot矇e",
BulletedListLbl		: "Liste ? puces",
BulletedList		: "Ins矇rer/supprimer la liste ? puces",
ShowTableBorders	: "Afficher les bordures du tableau",
ShowDetails			: "Afficher les caract癡res invisibles",
Style				: "Style",
FontFormat			: "Format",
Font				: "Police",
FontSize			: "Taille",
TextColor			: "Couleur de caract癡re",
BGColor				: "Couleur de fond",
Source				: "Source",
Find				: "Chercher",
Replace				: "Remplacer",
SpellCheck			: "Orthographe",
UniversalKeyboard	: "Clavier universel",
PageBreakLbl		: "Saut de page",
PageBreak			: "Ins矇rer un saut de page",

Form			: "Formulaire",
Checkbox		: "Case ? cocher",
RadioButton		: "Bouton radio",
TextField		: "Champ texte",
Textarea		: "Zone de texte",
HiddenField		: "Champ cach矇",
Button			: "Bouton",
SelectionField	: "Liste/menu",
ImageButton		: "Bouton image",

FitWindow		: "Edition pleine page",

// Context Menu
EditLink			: "Modifier le lien",
CellCM				: "Cellule",
RowCM				: "Ligne",
ColumnCM			: "Colonne",
InsertRow			: "Ins矇rer une ligne",
DeleteRows			: "Supprimer des lignes",
InsertColumn		: "Ins矇rer une colonne",
DeleteColumns		: "Supprimer des colonnes",
InsertCell			: "Ins矇rer une cellule",
DeleteCells			: "Supprimer des cellules",
MergeCells			: "Fusionner les cellules",
SplitCell			: "Scinder les cellules",
TableDelete			: "Supprimer le tableau",
CellProperties		: "Propri矇t矇s de cellule",
TableProperties		: "Propri矇t矇s du tableau",
ImageProperties		: "Propri矇t矇s de l'image",
FlashProperties		: "Propri矇t矇s de l'animation Flash",

AnchorProp			: "Propri矇t矇s de l'ancre",
ButtonProp			: "Propri矇t矇s du bouton",
CheckboxProp		: "Propri矇t矇s de la case ? cocher",
HiddenFieldProp		: "Propri矇t矇s du champ cach矇",
RadioButtonProp		: "Propri矇t矇s du bouton radio",
ImageButtonProp		: "Propri矇t矇s du bouton image",
TextFieldProp		: "Propri矇t矇s du champ texte",
SelectionFieldProp	: "Propri矇t矇s de la liste/du menu",
TextareaProp		: "Propri矇t矇s de la zone de texte",
FormProp			: "Propri矇t矇s du formulaire",

FontFormats			: "Normal;Format矇;Adresse;En-t礙te 1;En-t礙te 2;En-t礙te 3;En-t礙te 4;En-t礙te 5;En-t礙te 6;Normal (DIV)",		//REVIEW : Check _getfontformat.html

// Alerts and Messages
ProcessingXHTML		: "Calcul XHTML. Veuillez patienter...",
Done				: "Termin矇",
PasteWordConfirm	: "Le texte ? coller semble provenir de Word. D矇sirez-vous le nettoyer avant de coller?",
NotCompatiblePaste	: "Cette commande n矇cessite Internet Explorer version 5.5 minimum. Souhaitez-vous coller sans nettoyage?",
UnknownToolbarItem	: "El矇ment de barre d'outil inconnu \"%1\"",
UnknownCommand		: "Nom de commande inconnu \"%1\"",
NotImplemented		: "Commande non encore 矇crite",
UnknownToolbarSet	: "La barre d'outils \"%1\" n'existe pas",
NoActiveX			: "Les param癡tres de s矇curit矇 de votre navigateur peuvent limiter quelques fonctionnalit矇s de l'矇diteur. Veuillez activer l'option \"Ex矇cuter les contr繫les ActiveX et les plug-ins\". Il se peut que vous rencontriez des erreurs et remarquiez quelques limitations.",
BrowseServerBlocked : "Le navigateur n'a pas pu 礙tre ouvert. Assurez-vous que les bloqueurs de popups soient d矇sactiv矇s.",
DialogBlocked		: "La fen礙tre de dialogue n'a pas pu s'ouvrir. Assurez-vous que les bloqueurs de popups soient d矇sactiv矇s.",

// Dialogs
DlgBtnOK			: "OK",
DlgBtnCancel		: "Annuler",
DlgBtnClose			: "Fermer",
DlgBtnBrowseServer	: "Parcourir le serveur",
DlgAdvancedTag		: "Avanc矇",
DlgOpOther			: "<Autre>",
DlgInfoTab			: "Info",
DlgAlertUrl			: "Veuillez saisir l'URL",

// General Dialogs Labels
DlgGenNotSet		: "<Par d矇faut>",
DlgGenId			: "Id",
DlgGenLangDir		: "Sens d'矇criture",
DlgGenLangDirLtr	: "De gauche ? droite (LTR)",
DlgGenLangDirRtl	: "De droite ? gauche (RTL)",
DlgGenLangCode		: "Code langue",
DlgGenAccessKey		: "Equivalent clavier",
DlgGenName			: "Nom",
DlgGenTabIndex		: "Ordre de tabulation",
DlgGenLongDescr		: "URL de description longue",
DlgGenClass			: "Classes de feuilles de style",
DlgGenTitle			: "Titre",
DlgGenContType		: "Type de contenu",
DlgGenLinkCharset	: "Encodage de caract癡re",
DlgGenStyle			: "Style",

// Image Dialog
DlgImgTitle			: "Propri矇t矇s de l'image",
DlgImgInfoTab		: "Informations sur l'image",
DlgImgBtnUpload		: "Envoyer sur le serveur",
DlgImgURL			: "URL",
DlgImgUpload		: "T矇l矇charger",
DlgImgAlt			: "Texte de remplacement",
DlgImgWidth			: "Largeur",
DlgImgHeight		: "Hauteur",
DlgImgLockRatio		: "Garder les proportions",
DlgBtnResetSize		: "Taille originale",
DlgImgBorder		: "Bordure",
DlgImgHSpace		: "Espacement horizontal",
DlgImgVSpace		: "Espacement vertical",
DlgImgAlign			: "Alignement",
DlgImgAlignLeft		: "Gauche",
DlgImgAlignAbsBottom: "Abs Bas",
DlgImgAlignAbsMiddle: "Abs Milieu",
DlgImgAlignBaseline	: "Bas du texte",
DlgImgAlignBottom	: "Bas",
DlgImgAlignMiddle	: "Milieu",
DlgImgAlignRight	: "Droite",
DlgImgAlignTextTop	: "Haut du texte",
DlgImgAlignTop		: "Haut",
DlgImgPreview		: "Pr矇visualisation",
DlgImgAlertUrl		: "Veuillez saisir l'URL de l'image",
DlgImgLinkTab		: "Lien",

// Flash Dialog
DlgFlashTitle		: "Propri矇t矇s de l'animation Flash",
DlgFlashChkPlay		: "Lecture automatique",
DlgFlashChkLoop		: "Boucle",
DlgFlashChkMenu		: "Activer le menu Flash",
DlgFlashScale		: "Affichage",
DlgFlashScaleAll	: "Par d矇faut (tout montrer)",
DlgFlashScaleNoBorder	: "Sans bordure",
DlgFlashScaleFit	: "Ajuster aux dimensions",

// Link Dialog
DlgLnkWindowTitle	: "Propri矇t矇s du lien",
DlgLnkInfoTab		: "Informations sur le lien",
DlgLnkTargetTab		: "Destination",

DlgLnkType			: "Type de lien",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Ancre dans cette page",
DlgLnkTypeEMail		: "E-Mail",
DlgLnkProto			: "Protocole",
DlgLnkProtoOther	: "<autre>",
DlgLnkURL			: "URL",
DlgLnkAnchorSel		: "S矇lectionner une ancre",
DlgLnkAnchorByName	: "Par nom",
DlgLnkAnchorById	: "Par id",
DlgLnkNoAnchors		: "<Pas d'ancre disponible dans le document>",		//REVIEW : Change < and > with ( and )
DlgLnkEMail			: "Adresse E-Mail",
DlgLnkEMailSubject	: "Sujet du message",
DlgLnkEMailBody		: "Corps du message",
DlgLnkUpload		: "T矇l矇charger",
DlgLnkBtnUpload		: "Envoyer sur le serveur",

DlgLnkTarget		: "Destination",
DlgLnkTargetFrame	: "<cadre>",
DlgLnkTargetPopup	: "<fen礙tre popup>",
DlgLnkTargetBlank	: "Nouvelle fen礙tre (_blank)",
DlgLnkTargetParent	: "Fen礙tre m癡re (_parent)",
DlgLnkTargetSelf	: "M礙me fen礙tre (_self)",
DlgLnkTargetTop		: "Fen礙tre sup矇rieure (_top)",
DlgLnkTargetFrameName	: "Nom du cadre de destination",
DlgLnkPopWinName	: "Nom de la fen礙tre popup",
DlgLnkPopWinFeat	: "Caract矇ristiques de la fen礙tre popup",
DlgLnkPopResize		: "Taille modifiable",
DlgLnkPopLocation	: "Barre d'adresses",
DlgLnkPopMenu		: "Barre de menu",
DlgLnkPopScroll		: "Barres de d矇filement",
DlgLnkPopStatus		: "Barre d'矇tat",
DlgLnkPopToolbar	: "Barre d'outils",
DlgLnkPopFullScrn	: "Plein 矇cran (IE)",
DlgLnkPopDependent	: "D矇pendante (Netscape)",
DlgLnkPopWidth		: "Largeur",
DlgLnkPopHeight		: "Hauteur",
DlgLnkPopLeft		: "Position ? partir de la gauche",
DlgLnkPopTop		: "Position ? partir du haut",

DlnLnkMsgNoUrl		: "Veuillez saisir l'URL",
DlnLnkMsgNoEMail	: "Veuillez saisir l'adresse e-mail",
DlnLnkMsgNoAnchor	: "Veuillez s矇lectionner une ancre",
DlnLnkMsgInvPopName	: "Le nom de la fen礙tre popup doit commencer par une lettre et ne doit pas contenir d'espace",

// Color Dialog
DlgColorTitle		: "S矇lectionner",
DlgColorBtnClear	: "Effacer",
DlgColorHighlight	: "Pr矇visualisation",
DlgColorSelected	: "S矇lectionn矇",

// Smiley Dialog
DlgSmileyTitle		: "Ins矇rer un Smiley",

// Special Character Dialog
DlgSpecialCharTitle	: "Ins矇rer un caract癡re sp矇cial",

// Table Dialog
DlgTableTitle		: "Propri矇t矇s du tableau",
DlgTableRows		: "Lignes",
DlgTableColumns		: "Colonnes",
DlgTableBorder		: "Bordure",
DlgTableAlign		: "Alignement",
DlgTableAlignNotSet	: "<Par d矇faut>",
DlgTableAlignLeft	: "Gauche",
DlgTableAlignCenter	: "Centr矇",
DlgTableAlignRight	: "Droite",
DlgTableWidth		: "Largeur",
DlgTableWidthPx		: "pixels",
DlgTableWidthPc		: "pourcentage",
DlgTableHeight		: "Hauteur",
DlgTableCellSpace	: "Espacement",
DlgTableCellPad		: "Contour",
DlgTableCaption		: "Titre",
DlgTableSummary		: "R矇sum矇",

// Table Cell Dialog
DlgCellTitle		: "Propri矇t矇s de la cellule",
DlgCellWidth		: "Largeur",
DlgCellWidthPx		: "pixels",
DlgCellWidthPc		: "pourcentage",
DlgCellHeight		: "Hauteur",
DlgCellWordWrap		: "Retour ? la ligne",
DlgCellWordWrapNotSet	: "<Par d矇faut>",
DlgCellWordWrapYes	: "Oui",
DlgCellWordWrapNo	: "Non",
DlgCellHorAlign		: "Alignement horizontal",
DlgCellHorAlignNotSet	: "<Par d矇faut>",
DlgCellHorAlignLeft	: "Gauche",
DlgCellHorAlignCenter	: "Centr矇",
DlgCellHorAlignRight: "Droite",
DlgCellVerAlign		: "Alignement vertical",
DlgCellVerAlignNotSet	: "<Par d矇faut>",
DlgCellVerAlignTop	: "Haut",
DlgCellVerAlignMiddle	: "Milieu",
DlgCellVerAlignBottom	: "Bas",
DlgCellVerAlignBaseline	: "Bas du texte",
DlgCellRowSpan		: "Lignes fusionn矇es",
DlgCellCollSpan		: "Colonnes fusionn矇es",
DlgCellBackColor	: "Fond",
DlgCellBorderColor	: "Bordure",
DlgCellBtnSelect	: "Choisir...",

// Find Dialog
DlgFindTitle		: "Chercher",
DlgFindFindBtn		: "Chercher",
DlgFindNotFoundMsg	: "Le texte indiqu矇 est introuvable.",

// Replace Dialog
DlgReplaceTitle			: "Remplacer",
DlgReplaceFindLbl		: "Rechercher:",
DlgReplaceReplaceLbl	: "Remplacer par:",
DlgReplaceCaseChk		: "Respecter la casse",
DlgReplaceReplaceBtn	: "Remplacer",
DlgReplaceReplAllBtn	: "Tout remplacer",
DlgReplaceWordChk		: "Mot entier",

// Paste Operations / Dialog
PasteErrorCut	: "Les param癡tres de s矇curit矇 de votre navigateur emp礙chent l'矇diteur de couper automatiquement vos donn矇es. Veuillez utiliser les 矇quivalents claviers (Ctrl+X).",
PasteErrorCopy	: "Les param癡tres de s矇curit矇 de votre navigateur emp礙chent l'矇diteur de copier automatiquement vos donn矇es. Veuillez utiliser les 矇quivalents claviers (Ctrl+C).",

PasteAsText		: "Coller comme texte",
PasteFromWord	: "Coller ? partir de Word",

DlgPasteMsg2	: "Veuillez coller dans la zone ci-dessous en utilisant le clavier (<STRONG>Ctrl+V</STRONG>) et cliquez sur <STRONG>OK</STRONG>.",
DlgPasteSec		: "Because of your browser security settings, the editor is not able to access your clipboard data directly. You are required to paste it again in this window.",	//MISSING
DlgPasteIgnoreFont		: "Ignorer les polices de caract癡res",
DlgPasteRemoveStyles	: "Supprimer les styles",
DlgPasteCleanBox		: "Effacer le contenu",

// Color Picker
ColorAutomatic	: "Automatique",
ColorMoreColors	: "Plus de couleurs...",

// Document Properties
DocProps		: "Propri矇t矇s du document",

// Anchor Dialog
DlgAnchorTitle		: "Propri矇t矇s de l'ancre",
DlgAnchorName		: "Nom de l'ancre",
DlgAnchorErrorName	: "Veuillez saisir le nom de l'ancre",

// Speller Pages Dialog
DlgSpellNotInDic		: "Pas dans le dictionnaire",
DlgSpellChangeTo		: "Changer en",
DlgSpellBtnIgnore		: "Ignorer",
DlgSpellBtnIgnoreAll	: "Ignorer tout",
DlgSpellBtnReplace		: "Remplacer",
DlgSpellBtnReplaceAll	: "Remplacer tout",
DlgSpellBtnUndo			: "Annuler",
DlgSpellNoSuggestions	: "- Aucune suggestion -",
DlgSpellProgress		: "V矇rification d'orthographe en cours...",
DlgSpellNoMispell		: "V矇rification d'orthographe termin矇e: Aucune erreur trouv矇e",
DlgSpellNoChanges		: "V矇rification d'orthographe termin矇e: Pas de modifications",
DlgSpellOneChange		: "V矇rification d'orthographe termin矇e: Un mot modifi矇",
DlgSpellManyChanges		: "V矇rification d'orthographe termin矇e: %1 mots modifi矇s",

IeSpellDownload			: "Le Correcteur n'est pas install矇. Souhaitez-vous le t矇l矇charger maintenant?",

// Button Dialog
DlgButtonText		: "Texte (valeur)",
DlgButtonType		: "Type",
DlgButtonTypeBtn	: "Bouton",
DlgButtonTypeSbm	: "Envoyer",
DlgButtonTypeRst	: "R矇initialiser",

// Checkbox and Radio Button Dialogs
DlgCheckboxName		: "Nom",
DlgCheckboxValue	: "Valeur",
DlgCheckboxSelected	: "S矇lectionn矇",

// Form Dialog
DlgFormName		: "Nom",
DlgFormAction	: "Action",
DlgFormMethod	: "M矇thode",

// Select Field Dialog
DlgSelectName		: "Nom",
DlgSelectValue		: "Valeur",
DlgSelectSize		: "Taille",
DlgSelectLines		: "lignes",
DlgSelectChkMulti	: "S矇lection multiple",
DlgSelectOpAvail	: "Options disponibles",
DlgSelectOpText		: "Texte",
DlgSelectOpValue	: "Valeur",
DlgSelectBtnAdd		: "Ajouter",
DlgSelectBtnModify	: "Modifier",
DlgSelectBtnUp		: "Monter",
DlgSelectBtnDown	: "Descendre",
DlgSelectBtnSetValue : "Valeur s矇lectionn矇e",
DlgSelectBtnDelete	: "Supprimer",

// Textarea Dialog
DlgTextareaName	: "Nom",
DlgTextareaCols	: "Colonnes",
DlgTextareaRows	: "Lignes",

// Text Field Dialog
DlgTextName			: "Nom",
DlgTextValue		: "Valeur",
DlgTextCharWidth	: "Largeur en caract癡res",
DlgTextMaxChars		: "Nombre maximum de caract癡res",
DlgTextType			: "Type",
DlgTextTypeText		: "Texte",
DlgTextTypePass		: "Mot de passe",

// Hidden Field Dialog
DlgHiddenName	: "Nom",
DlgHiddenValue	: "Valeur",

// Bulleted List Dialog
BulletedListProp	: "Propri矇t矇s de liste ? puces",
NumberedListProp	: "Propri矇t矇s de liste num矇rot矇e",
DlgLstStart			: "D矇but",
DlgLstType			: "Type",
DlgLstTypeCircle	: "Cercle",
DlgLstTypeDisc		: "Disque",
DlgLstTypeSquare	: "Carr矇",
DlgLstTypeNumbers	: "Nombres (1, 2, 3)",
DlgLstTypeLCase		: "Lettres minuscules (a, b, c)",
DlgLstTypeUCase		: "Lettres majuscules (A, B, C)",
DlgLstTypeSRoman	: "Chiffres romains minuscules (i, ii, iii)",
DlgLstTypeLRoman	: "Chiffres romains majuscules (I, II, III)",

// Document Properties Dialog
DlgDocGeneralTab	: "G矇n矇ral",
DlgDocBackTab		: "Fond",
DlgDocColorsTab		: "Couleurs et marges",
DlgDocMetaTab		: "M矇tadonn矇es",

DlgDocPageTitle		: "Titre de la page",
DlgDocLangDir		: "Sens d'矇criture",
DlgDocLangDirLTR	: "De la gauche vers la droite (LTR)",
DlgDocLangDirRTL	: "De la droite vers la gauche (RTL)",
DlgDocLangCode		: "Code langue",
DlgDocCharSet		: "Encodage de caract癡re",
DlgDocCharSetCE		: "Europe Centrale",
DlgDocCharSetCT		: "Chinois Traditionnel (Big5)",
DlgDocCharSetCR		: "Cyrillique",
DlgDocCharSetGR		: "Grec",
DlgDocCharSetJP		: "Japanais",
DlgDocCharSetKR		: "Cor矇en",
DlgDocCharSetTR		: "Turc",
DlgDocCharSetUN		: "Unicode (UTF-8)",
DlgDocCharSetWE		: "Occidental",
DlgDocCharSetOther	: "Autre encodage de caract癡re",

DlgDocDocType		: "Type de document",
DlgDocDocTypeOther	: "Autre type de document",
DlgDocIncXHTML		: "Inclure les d矇clarations XHTML",
DlgDocBgColor		: "Couleur de fond",
DlgDocBgImage		: "Image de fond",
DlgDocBgNoScroll	: "Image fixe sans d矇filement",
DlgDocCText			: "Texte",
DlgDocCLink			: "Lien",
DlgDocCVisited		: "Lien visit矇",
DlgDocCActive		: "Lien activ矇",
DlgDocMargins		: "Marges",
DlgDocMaTop			: "Haut",
DlgDocMaLeft		: "Gauche",
DlgDocMaRight		: "Droite",
DlgDocMaBottom		: "Bas",
DlgDocMeIndex		: "Mots-cl矇s (s矇par矇s par des virgules)",
DlgDocMeDescr		: "Description",
DlgDocMeAuthor		: "Auteur",
DlgDocMeCopy		: "Copyright",
DlgDocPreview		: "Pr矇visualisation",

// Templates Dialog
Templates			: "Mod癡les",
DlgTemplatesTitle	: "Mod癡les de contenu",
DlgTemplatesSelMsg	: "Veuillez s矇lectionner le mod癡le ? ouvrir dans l'矇diteur<br>(le contenu actuel sera remplac矇):",
DlgTemplatesLoading	: "Chargement de la liste des mod癡les. Veuillez patienter...",
DlgTemplatesNoTpl	: "(Aucun mod癡le disponible)",
DlgTemplatesReplace	: "Remplacer tout le contenu",

// About Dialog
DlgAboutAboutTab	: "A propos de",
DlgAboutBrowserInfoTab	: "Navigateur",
DlgAboutLicenseTab	: "License",
DlgAboutVersion		: "version",
DlgAboutInfo		: "Pour plus d'informations, aller ?"
};
