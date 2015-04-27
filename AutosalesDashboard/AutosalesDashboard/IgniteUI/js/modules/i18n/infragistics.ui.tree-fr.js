﻿/*!@license
* Infragistics.Web.ClientUI Tree localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Tree) {
	    $.ig.Tree = {};

	    $.extend($.ig.Tree, {
		    locale: {
			    invalidArgumentType: "Type d'argument fourni invalide.",
			    errorOnRequest: "Une erreur s'est produite pendant la récupération des données : ",
			    noDataSourceUrl: 'La commande igTree requiert une dataSourceUrl pour initier une requête de données pour cette URL.',
			    incorrectPath: 'Un nœud a été trouvé sur le chemin fourni : ',
			    incorrectNodeObject: "L'argument fourni n'est pas un élément de nœud jQuery.",
			    setOptionError: "Les modifications de temps d'exécution ne sont pas autorisées pour l'option suivante : ",
			    moveTo: '<strong>Déplacer vers</strong> {0}',
			    moveBetween: '<strong>Déplacer entre</strong> {0} et {1}',
			    moveAfter: '<strong>Déplacer après</strong> {0}',
			    moveBefore: '<strong>Déplacer avant</strong> {0}',
			    copyTo: '<strong>Copier vers</strong> {0}',
			    copyBetween: '<strong>Copier entre</strong> {0} et {1}',
			    copyAfter: '<strong>Copier après</strong> {0}',
			    copyBefore: '<strong>Copier avant</strong> {0}',
			    and: 'et'
		    }
	    });

    }
})(jQuery);