﻿/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.util) {
	    $.ig.util = {};

	    $.extend($.ig.util, {

		    locale: {
			    unsupportedBrowser: "Ваш браузер не поддерживает HTML5 canvas элемент. <br/>Попробуйте воспользоваться следующими версиями браузеров:",
			    currentBrowser: "Ваш браузер: {0}",
			    ie9: "Microsoft Internet Explorer 9+",
			    chrome8: "Google Chrome 8+",
			    firefox36: "Mozilla Firefox 3.6+",
			    safari5: "Apple Safari 5+",
			    opera11: "Opera 11+",
			    ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			    operaDownload: "http://www.opera.com/download/",
			    chromeDownload: "http://www.google.com/chrome",
			    firefoxDownload: "http://www.mozilla.com/",
			    safariDownload: "http://www.apple.com/safari/download/"
		    }
	    });

    }
})(jQuery);