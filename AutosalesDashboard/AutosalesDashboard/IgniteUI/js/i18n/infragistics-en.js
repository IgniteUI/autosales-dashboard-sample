/*!@license
* Infragistics.Web.ClientUI data source localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.DataSourceLocale) {
	$.ig.DataSourceLocale = {};

	$.extend($.ig.DataSourceLocale, {

		locale: {
			invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
			unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
			errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
			errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
			errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
			errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
			errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
			errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
			errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
			errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
			errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
			errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
			errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
			errorRemoteRequest: "The remote request to fetch data has failed: ",
			errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
			errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
			errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
			hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
			cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
			unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
			fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
			noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
			filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source."
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Chart) {
	$.ig.Chart = {};

	$.extend($.ig.Chart, {

		locale: {
			seriesName: "must specify series name option when setting options.",
			axisName: "must specify axis name option when setting options.",
			invalidLabelBinding: "There is no such value for the labels to bind.",
			close: "Close",
			overview: "Overview",
			zoomOut: "Zoom Out",
			zoomIn: "Zoom In",
			resetZoom: "Reset Zoom"
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI shared localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*jQuery must be defined before this. If it is not the $ variable is created*/
$ = $ || {};

$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
			
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI templating localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Templating) {
	$.ig.Templating = {};

	$.extend($.ig.Templating, {
		locale: {
			undefinedArgument: 'An error has occurred while trying to retrieve data source property: '
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Barcode) {
	$.ig.Barcode = {
		locale: {
			aILength: "The AI should have at least 2 digits.",
			badFormedUCCValue: "The Data property value of the UCC barcode is not well formed. It should look like (AI)GTIN.",
			code39_NonNumericError: "The character '{0}' is invalid for CODE39 Data property value. The valid ones are: {1}",
			countryError: "Error converting Country property value code. It should be a numeric value.",
			emptyValueMsg: "The Data property value is empty.",
			encodingError: "Error in the convertion. Refer to the documentation for the valid property values.",
			errorMessageText: "Invalid value! Reference the documentation for the valid barcode Data property value structure.",
			gS1ExMaxAlphanumNumber: "The GS1 DataBar Expanded family can encode up to 41 alphanumeric characters.",
			gS1ExMaxNumericNumber: "The GS1 DataBar Expanded family can encode up to 74 numeric characters.",
			gS1Length: "The GS1 DataBar Data property value is used for GTIN - 8, 12, 13, 14 and its length should be 7, 11, 12 or 13. The last digit is reserved for a check sum.",
			gS1LimitedFirstChar: "GS1 DataBar Limited barcode should have 0 or 1 in the first digit. When encoding GTIN-14 data with an Indicator value greater than 1, Omnidirectional, Stacked, Stacked Omnidirectional or Truncated barcode type must be used.",
			i25Length: "The Interleaved2of5 barcode should have even number of digits. You can put 0 in the front of it if they are odd number.",
			intelligentMailLength: "The length of the Intelligent Mail barcode Data property value should be 20, 25, 29 or 31 characters - 20 digits track code (2 for barcode identifier, 3 for service type identifier, 6 or 9 for mailer identifier and 9 or 6 for serial number) and 0, 5, 9 or 11 zip code symbols.",
			intelligentMailSecondDigit: "The second digit should be in the range of 0-4.",
			invalidAI: "Invalid Application Identifier element strings. Please, ensure that the AI string in the Data property value is well formed.",
			invalidCharacter: "The character '{0}' is invalid for the current barcode type. The valid ones are: {1}",
			invalidDimension: "The barcode dimension cannot be determined because of an incorrect combination of Stretch, BarsFillMode and XDimension property values.",
			invalidHeight: "This number of barcode grid rows ({0}) cannot fit in such a height ({1} pixel(s)).",
			invalidLength: "The barcode Data property value should have {0} digit(s).",
			invalidPostalCode: "Invalid PostalCode value - Mode 2 encodes up to 9 digits postal code (U.S. zip code) while Mode 3 encodes up to 6 characters alpha-numeric code.",
			invalidPropertyValue: "The {0} property value should be in the range of {1}-{2}.",
			invalidVersion: "The SizeVersion propery value number does not generate enough cells to encode the data with the current encoding mode and error correction level.",
			invalidWidth: "This number of barcode grid columns ({0}) cannot fit in such a width ({1} pixel(s)). Check the XDimension or/and the WidthToHeightRatio property values.",
			invalidXDimensionValue: "The XDimension property value should be in the range of {0} to {1} for the current barcode type.",
			maxLength: "The length {0} of the text exceeds the maximum encodable for the current type of barcode. It could encode max {1} characters.",
			notSupportedEncoding: "The encoding corresponding under the {0} {1} is not supported.",
			pDF417InvalidRowsColumnsCombination: "The codewords (data & error correction) are more than can be encoded in symbol with a matrix {0}x{1}.",
			primaryMessageError: "Cannot extract the primary message from the Data property value. Refer to the documentation for its structure.",
			serviceClassError: "Error converting service class. It should be a numeric value.",
			smallSize: "Cannot fit the grid in Size({0}, {1}) with the defined Stretch settings.",
			unencodableCharacter: "The character '{0}' cannot be encoded.",
			uPCEFirstDigit: "The first UPCE digit shall always be zero by specification.",
			warningString: "Barcode warning: ",
			wrongCompactionMode: "The Data property value cannot be compacted with {0} mode.",
            notLoadedEncoding: "The {0} encoding is not loaded."
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Combo localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Combo) {
	$.ig.Combo = {
		locale: {
			noMatchFoundText: 'No Results',
			dropDownButtonTitle: 'Show drop-down',
			clearButtonTitle: 'Clear value'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Dialog) {
	$.ig.Dialog = {
		locale: {
			closeButtonTitle: "Close",
			minimizeButtonTitle: "Minimize",
			maximizeButtonTitle: "Maximize",
			pinButtonTitle: "Pin",
			unpinButtonTitle: "Unpin",
			restoreButtonTitle: "Restore"
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Doughnut Chart localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.igDoughnutChart) {
    $.ig.igDoughnutChart = {};

    $.extend($.ig.igDoughnutChart, {
        locale: {
            invalidBaseElement: " is not supported as base element. Use DIV instead."
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Editor) {
	$.ig.Editor = {
		locale: {
			spinUpperTitle: 'Increment',
			spinLowerTitle: 'Decrement',
			buttonTitle: 'Show list',
			clearTitle: 'Clear value',
			datePickerButtonTitle: 'Show calendar',
			updateModeUnsupportedValue: 'The updateMode option supports two possible values - "onChange" and "immediate"'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Grid localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "No such widget loaded: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns is enabled, but there are no records in the data source in order to determine the columns",
			optionChangeNotSupported: "Changing the following option after the igGrid has been created is not supported:",
			optionChangeNotScrollingGrid: "The following option cannot be changed after the grid is created because your initial grid is not scrolling and full re-rendering is required:",
			noPrimaryKeyDefined: "There is no primary key defined for the grid. In order to use features such as Grid Editing, you will need to define a primary key.",
			indexOutOfRange: "The row index you have specified is out of range.",
			noSuchColumnDefined: "The specified column key does not match any of the defined grid columns.",
			columnIndexOutOfRange: "The specified column index is out of range.",
			recordNotFound: "The record with the specified id could not be found in the data view:",
			columnNotFound: "No column was found matching key:",
			colPrefix: "Column ",
			columnVirtualizationRequiresWidth: "You have virtualization / columnVirtualization set to true, but no width could be inferred for grid columns. You should set one of a) grid width, b) defaultColumnWidth, c) define width for each column",
			virtualizationRequiresHeight: "You have virtualization set to true which requires grid height to be set too.",
            colVirtualizationDenied: "columnVirtualization is applicable for fixed virtualization only",
			noColumnsButAutoGenerateTrue: "You have autoGenerateColumns set to false, but there are no columns defined in the grid. Please set autoGenerateColumns to true, or specify columns manually",
			noPrimaryKey: "the igHierarchicalGrid widget requires a primary key to be defined.",
			templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
			expandTooltip: "Expand Row",
			collapseTooltip: "Collapse Row",
			movingNotAllowedOrIncompatible: "Moving of the requested column could not be completed. The column was not found or the result was not compatible with the column layout."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Starts with...",
			endsWithNullText: "Ends with...",
			containsNullText: "Contains...",
			doesNotContainNullText: "Does not contain...",
			equalsNullText: "Equals...",
			doesNotEqualNullText: "Does not equal...",
			greaterThanNullText: "Greater than...",
			lessThanNullText: "Less than...",
			greaterThanOrEqualToNullText: "Greater than or equal to...",
			lessThanOrEqualToNullText: "Less than or equal to...",
			onNullText: "On...",
			notOnNullText: "Not on...",
            afterNullText: "After",
            beforeNullText: "Before",
			emptyNullText: "Empty",
			notEmptyNullText: "Not empty",
			nullNullText: "Null",
			notNullNullText: "Not null",
			startsWithLabel: "Starts with",
			endsWithLabel: "Ends with",
			containsLabel: "Contains",
			doesNotContainLabel: "Does not contain",
			equalsLabel: "Equals",
			doesNotEqualLabel: "Does not equal",
			greaterThanLabel: "Greater than",
			lessThanLabel: "Less than",
			greaterThanOrEqualToLabel: "Greater than or equal to",
			lessThanOrEqualToLabel: "Less than or equal to",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "After",
			beforeLabel: "Before",
			todayLabel: "Today",
			yesterdayLabel: "Yesterday",
			thisMonthLabel: "This month",
			lastMonthLabel: "Last month",
			nextMonthLabel: "Next month",
			thisYearLabel: "This year",
			lastYearLabel: "Last year",
			nextYearLabel: "Next year",
			clearLabel: "Clear Filter",
			noFilterLabel: "No",
			onLabel: "On",
			notOnLabel: "Not on",
			advancedButtonLabel: "Advanced",
			filterDialogCaptionLabel: "ADVANCED SEARCH",
			filterDialogConditionLabel1: "Show records matching ",
			filterDialogConditionLabel2: " of the following criteria",
			filterDialogOkLabel: "Search",
			filterDialogCancelLabel: "Cancel",
			filterDialogAnyLabel: "ANY",
			filterDialogAllLabel: "ALL",
			filterDialogAddLabel: "Add",
			filterDialogErrorLabel: "Maximum filters count exceeded.",
			filterSummaryTitleLabel: "Search results",
			filterSummaryTemplate: "${matches} matching records",
			filterDialogClearAllLabel: "Clear ALL",
			tooltipTemplate: "${condition} filter applied",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Hide Filter",
			featureChooserTextHide: "Show Filter",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Advanced Filter",
			virtualizationSimpleFilteringNotAllowed: "When horizontal virtualization is enabled, simple filtering (filter row) is not supported. Please set mode to 'advanced' and/or do not enable advancedModeEditorsVisible",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use loader or use one of the combined script files."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Drag a column here or {0} to Group By",
			emptyGroupByAreaContentSelectColumns: "select columns",
			emptyGroupByAreaContentSelectColumnsCaption: "select columns",
			expandTooltip: "Expand Grouped Row",
			collapseTooltip: "Collapse Grouped Row",
			removeButtonTooltip: "Remove Grouped Column",
			featureChooserText: "Ungroup By",
			featureChooserTextHide: "Group By",
			modalDialogCaptionButtonDesc: "Click to sort ascending",
			modalDialogCaptionButtonAsc: "Click to sort descending",
			modalDialogCaptionButtonUngroup: "Click to ungroup",
			modalDialogGroupByButtonText: "Group By",
			modalDialogCaptionText: 'Add to Group By',
			modalDialogDropDownLabel: 'Showing:',
			modalDialogClearAllButtonLabel: 'clear all',
			modalDialogRootLevelHierarchicalGrid: 'root',
			modalDialogDropDownButtonCaption: "Click to show/hide",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Column Chooser",
			hiddenColumnIndicatorTooltipText: "Hidden Column(s)",
			columnHideText: "Hide",
			columnChooserCaptionLabel: "Column Chooser",
			columnChooserCheckboxesHeader: "view",
			columnChooserColumnsHeader: "column",
			columnChooserCloseButtonTooltip: "Close",
			hideColumnIconTooltip: "Hide",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.",
			columnChooserShowText: "Show",
			columnChooserHideText: "Hide",
			columnChooserResetButtonLabel: "reset",
			columnChooserButtonApplyText: 'Apply',
			columnChooserButtonCancelText: 'Cancel'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Show ",
			pageSizeDropDownTrailingLabel: "records",
			//pageSizeDropDownTemplate: "Show ${dropdown} records",
			nextPageLabelText: "next",
			prevPageLabelText: "prev",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pg",
			currentPageDropDownTrailingLabel: "of ${count}",
			//currentPageDropDownTemplate: "Pg ${dropdown} of ${count}",
			currentPageDropDownTooltip: "Choose page index",
			pageSizeDropDownTooltip: "Choose number of records per page",
			pagerRecordsLabelTooltip: "Current records range",
			prevPageTooltip: "go to the previous page",
			nextPageTooltip: "go to the next page",
			firstPageTooltip: "go to the first page",
			lastPageTooltip: "go to the last page",
			pageTooltipFormat: "page ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} of ${recordCount} records"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection is not initialized. To avoid receiving this error message please enable the Selection feature for the grid or set the requireSelection property of the Row Selectors feature to false."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'sorted ${direction}',
			unsortedColumnTooltip: 'click to sort column',
			ascending: 'ascending',
			descending: 'descending',
			modalDialogSortByButtonText: 'sort by',
			modalDialogResetButton: "reset",
			modalDialogCaptionButtonDesc: "Click to sort descending",
			modalDialogCaptionButtonAsc: "Click to sort ascending",
			modalDialogCaptionButtonUnsort: "Click to remove sorting",
			featureChooserText: "Sort on Multiple",
			modalDialogCaptionText: "Sort Multiple",
			modalDialogButtonApplyText: 'Apply',
			modalDialogButtonCancelText: 'Cancel',
            sortingHiddenColumnNotSupport: 'Sorting hidden column is not supported',
            featureChooserSortAsc: 'Sort A to Z',
            featureChooserSortDesc: 'Sort Z to A'
			//modalDialogButtonSlideCaption: "Click to show/hide sorted columns"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Hide Summaries",
			featureChooserTextHide: "Show Summaries",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Cancel',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Show/hide summaries',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Count',
			defaultSummaryRowDisplayLabelMin: 'Min',
			defaultSummaryRowDisplayLabelMax: 'Max',
			defaultSummaryRowDisplayLabelSum: 'Sum',
			defaultSummaryRowDisplayLabelAvg: 'Avg',
			defaultSummaryRowDisplayLabelCustom: 'Custom',
			calculateSummaryColumnKeyNotSpecified: "Please specify column key to calculate summary",
			featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Done',
			doneTooltip: 'Stop editing and update',
			cancelLabel: 'Cancel',
			cancelTooltip: 'Stop editing and do not update',
			addRowLabel: 'Add new row',
			addRowTooltip: 'Click to start adding new row',
			deleteRowLabel: '',
			deleteRowTooltip: 'Delete row',
			igEditorException: 'The updating for ui.igGrid requires ui.igEditor to be loaded',
			igComboException: 'In order to use the combo type for ui.igGrid, the ui.igCombo should be loaded',
			igRatingException: 'In order to use the igRating as editor for ui.igGrid, the ui.igRating should be loaded',
			igValidatorException: 'Validation options defined in igGridUpdating require ui.igValidator to be loaded',
			noPrimaryKeyException: 'In order to support update operations after a row was deleted, application should define "primaryKey" in options of igGrid.',
			hiddenColumnValidationException: 'Cannot edit row which has a hidden column with enabled validation.',
			dataDirtyException: 'Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable "autoCommit" option of igGrid, or it should process "dataDirty" event of igGridUpdating and return false. While processing that event, application also may do "commit()" data in igGrid.',
            rowEditDialogCaptionLabel: 'Edit row data'
		}
	});

	$.ig.ColumnMoving = $.ig.ColumnMoving || {};
	
	$.extend($.ig.ColumnMoving, {
		locale: {
		    movingDialogButtonApplyText: 'Apply',
            movingDialogButtonCancelText: 'Cancel',
            movingDialogCaptionButtonDesc: 'Move Down',
            movingDialogCaptionButtonAsc: 'Move Up',
            movingDialogCaptionText: 'Move Columns',
			movingDialogDisplayText: 'Move Columns',
			dropDownMoveLeftText: 'Move Left',
			dropDownMoveRightText: 'Move Right',
			dropDownMoveFirstText: 'Move First',
			dropDownMoveLastText: 'Move Last',
			featureChooserNotReferenced: 'Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.',
			movingToolTipMove: 'Move',
            featureChooserSubmenuText: 'Move To'
		}
	});

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};
	
	$.extend($.ig.ColumnFixing, {
		locale: {
		    headerFixButtonText: 'Click to fix this column',
            headerUnfixButtonText: 'Click to unfix this column',
            featureChooserTextFixedColumn: 'Fix column',
            featureChooserTextUnfixedColumn: 'Unfix column',
            groupByNotSupported: 'igGridGroupBy is not supported with ColumnFixing',
            virtualizationNotSupported: 'Virtualization is not supported with ColumnFixing',
            columnMovingNotSupported: 'igGridColumnMoving is not supported with ColumnFixing',
            hidingNotSupported: 'igGridHiding is not supported with ColumnFixing',
            hierarchicalGridNotSupported: 'igHierarchicalGrid is not supported with ColumnFixing',
            responsiveNotSupported: 'igGridResponsive is not supported with ColumnFixing',
            noGridWidthHeightNotSupported: 'When grid hasn\'t width and height Column Fixing is not supported'
		}
	});

	$.ig.GridLoadOnDemand = $.ig.GridLoadOnDemand || {};

	$.extend($.ig.GridLoadOnDemand, {
		locale: {
			loadMoreDataButtonText: 'Load more data',
			loadOnDemandRequiresHeight: 'Load On Demand feature requires height',
			groupByNotSupported: 'igGridGroupBy is not supported with LoadOnDemand',
			pagingNotSupported: 'igGridPaging is not supported with LoadOnDemand',
			cellMergingNotSupported: 'igGridCellMerging is not supported with LoadOnDemand',
			virtualizationNotSupported: 'virtualization is not supported with LoadOnDemand'
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Bold',
			italicButtonTitle: 'Italic',
			underlineButtonTitle: 'Underline',
			strikethroughButtonTitle: 'Strikethrough',
			increaseFontSizeButtonTitle: 'Increase Font Size',
			decreaseFontSizeButtonTitle: 'Decrease Font Size',
			alignTextLeftButtonTitle: 'Align Text Left',
			alignTextRightButtonTitle: 'Align Text Right',
			alignTextCenterButtonTitle: 'Center',
			justifyButtonTitle: 'Justify',
			bulletsButtonTitle: 'Bullets',
			numberingButtonTitle: 'Numbering',
			decreaseIndentButtonTitle: 'Decrease Indent',
			increaseIndentButtonTitle: 'Increase Indent',
			insertPictureButtonTitle: 'Insert Picture',
			fontColorButtonTitle: 'Font Color',
			textHighlightButtonTitle: 'Text Highlight Color',
			insertLinkButtonTitle: 'Insert Hyperlink',
			insertTableButtonTitle: 'Table',
			addRowButtonTitle: 'Add Row',
			removeRowButtonTitle: 'Remove Row',
			addColumnButtonTitle: 'Add Column',
			removeColumnButtonTitle: 'Remove Column',
			inserHRButtonTitle: 'Insert Horizontal Rule',
			viewSourceButtonTitle: 'View Source',
			cutButtonTitle: 'Cut',
			copyButtonTitle: 'Copy',
			pasteButtonTitle: 'Paste',
			undoButtonTitle: 'Undo',
			redoButtonTitle: 'Redo',
			imageUrlDialogText: 'Image URL:',
			imageAlternativeTextDialogText: 'Alternative Text:',
			imageWidthDialogText: 'Image Width:',
			imageHeihgtDialogText: 'Image Height:',
			linkNavigateToUrlDialogText: 'Navigate to URL:',
			linkDisplayTextDialogText: 'Display Text:',
			linkOpenInDialogText: 'Open In:',
			linkTargetNewWindowDialogText: 'New Window',
			linkTargetSameWindowDialogText: 'Same Window',
			linkTargetParentWindowDialogText: 'Parent Window',
			linkTargetTopmostWindowDialogText: 'Topmost Window',
			applyButtonTitle: 'Apply',
			cancelButtonTitle: 'Cancel',
			collapseButtonTitle: 'Collapse',
			expandButtonTitle: 'Expand',
            defaultToolbars: {
                textToolbar: "text manipulation toolbar",
                formattingToolbar: "text formatting toolbar",
                insertObjectToolbar: "objects insertion toolbar",
                copyPasteToolbar: "copy/paste toolbar"
            },
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "1 (8pt)", style: "xx-small"},
				{ text: "2", value: "2 (9pt)", style: "x-small" },
				{ text: "3", value: "3 (10pt)", style: "small" },
				{ text: "4", value: "4 (12pt)", style: "medium" },
				{ text: "5", value: "5 (14pt)", style: "large" },
				{ text: "6", value: "6 (16pt)", style: "x-large" },
				{ text: "7", value: "7 (18pt)", style: "xx-large" }
			],
			formatsList: [
					{ text: "h1", value: "Heading 1" },
					{ text: "h2", value: "Heading 2" },
					{ text: "h3", value: "Heading 3" },
					{ text: "h4", value: "Heading 4" },
					{ text: "h5", value: "Heading 5" },
					{ text: "h6", value: "Heading 6" }
				]
		}

	});
}
/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotShared) {
    $.ig.PivotShared = {};

    $.extend($.ig.PivotShared, {
        locale: {
            invalidDataSource: "The passed data source either null or not supported.",
            measureList: "Measures",
            ok: "OK",
            cancel: "Cancel",
            addToMeasures: "Add to Measures",
            addToFilters: "Add to Filters",
            addToColumns: "Add to Columns",
            addToRows: "Add to Rows"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotDataSelector) {
    $.ig.PivotDataSelector = {};

    $.extend($.ig.PivotDataSelector, {
        locale: {
            invalidBaseElement: " is not supported as base element. Use DIV instead.",
            catalog: "Catalog",
            cube: "Cube",
            measureGroup: "Measure Group",
            measureGroupAll: "(All)",
            rows: "Rows",
            columns: "Columns",
            measures: "Measures",
            filters: "Filters",
            deferUpdate: "Defer Update",
            updateLayout: "Update Layout",
            selectAll: "Select All"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotGrid) {
    $.ig.PivotGrid = {};

    $.extend($.ig.PivotGrid, {
        locale: {
            filtersHeader: "Drop Filter Fields Here",
            measuresHeader: "Drop Data Items Here",
            rowsHeader: "Drop Row Fields Here",
            columnsHeader: "Drop Column Fields Here",
            disabledFiltersHeader: "Filter Fields",
            disabledMeasuresHeader: "Data Items",
            disabledRowsHeader: "Row Fields",
            disabledColumnsHeader: "Column Fields",
            noSuchAxis: "No such axis"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Popover localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*jQuery must be defined before this. If it is not the $ variable is created*/
$ = $ || {};

$.ig = $.ig || {};

if (!$.ig.Popover) {
    $.ig.Popover = {};

    $.extend( $.ig.Popover, {
	    locale: {
			popoverOptionChangeNotSupported: "Changing the following option after igPopover has been initialized is not supported:"
		}
	});

}
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
			errorPanels: 'The number of panels have to be no more than two.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
			renderDataError: "Data was not successfully retrieved or parsed.",
		    setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI Tree localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Tree) {
	$.ig.Tree = {};

	$.extend($.ig.Tree, {
		locale: {
			invalidArgumentType: 'Invalid argument type provided.',
			errorOnRequest: 'An error has occurred while retrieving data: ',
			noDataSourceUrl: 'The igTree control requires a dataSourceUrl provided in order to initiate a request for data to that URL.',
			incorrectPath: 'A node was not found at the provided path: ',
			incorrectNodeObject: 'The provided argument is not a jQuery node element.',
			setOptionError: 'Runtime changes are not allowed for the following option: ',
			moveTo: '<strong>Move to</strong> {0}',
			moveBetween: '<strong>Move between</strong> {0} and {1}',
			moveAfter: '<strong>Move after</strong> {0}',
			moveBefore: '<strong>Move before</strong> {0}',
			copyTo: '<strong>Copy to</strong> {0}',
			copyBetween: '<strong>Copy between</strong> {0} and {1}',
			copyAfter: '<strong>Copy after</strong> {0}',
			copyBefore: '<strong>Copy before</strong> {0}',
			and: 'and'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Upload localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Upload) {
	$.ig.Upload = {};

	$.extend($.ig.Upload, {

		locale: {
			labelUploadButton: "Upload File",
			labelAddButton: "Add",
			labelClearAllButton: "Clear Uploaded",
			// M.H. 13 May 2011 - fix bug 75042
			labelSummaryTemplate: "{0} of {1} uploaded",
			labelSummaryProgressBarTemplate: "{0}/{1}",
			labelShowDetails: "Show Details",
			labelHideDetails: "Hide Details",
			labelSummaryProgressButtonCancel: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			labelSummaryProgressButtonContinue: "Upload",
			labelSummaryProgressButtonDone: "Done",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "Max file size exceeded.",
			errorMessageGetFileStatus: "Could not get your current file status! Probably connection dropped.",
			errorMessageCancelUpload: "Could not send to server command to cancel upload! Probably connection dropped.",
			errorMessageNoSuchFile: "The file you requested could not be found. Probably this file is too big.",
			errorMessageOther: "There is internal error uploading file. Error code: {0}.",
			errorMessageValidatingFileExtension: "File extension validation failed.",
			errorMessageAJAXRequestFileSize: "AJAX error while trying to get file size.",
			errorMessageMaxUploadedFiles: "Maximum count of uploading files exceeded.",
			errorMessageMaxSimultaneousFiles: "Value of maxSimultaneousFilesUploads is incorrect. It should be more than 0 or null.",
			errorMessageTryToRemoveNonExistingFile: "You are trying to remove non-existing file with id {0}.",
			errorMessageTryToStartNonExistingFile: "You are trying to start non-existing file with id {0}.",

			// M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			// title attributes            
			titleUploadFileButtonInit: "Upload File",
			titleAddFileButton: "Add",
			titleCancelUploadButton: "Cancel",
			// M.H. 1 June 2011 Fix bug #77532
			titleSummaryProgressButtonContinue: "Upload",
			titleClearUploaded: "Clear Uploaded",
			titleShowDetailsButton: "Show Details",
			titleHideDetailsButton: "Hide Details",
			titleSummaryProgressButtonCancel: "Cancel",
			titleSummaryProgressButtonDone: "Done",
			// M.H. 1 June 2011 Fix bug #77532
			titleSingleUploadButtonContinue: "Upload",
			titleClearAllButton: "Clear Uploaded"
		}
	});

}


/*!@license
* Infragistics.Web.ClientUI Validator localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Validator) {
	$.ig.Validator = {
		locale: {
			defaultMessage: 'Please fix this field',
			selectMessage: 'Please select a value',
			rangeSelectMessage: 'Please select no more than {0} and not less than {1} items',
			minSelectMessage: 'Please select at least {0} items',
			maxSelectMessage: 'Please select no more than {0} items',
			rangeLengthMessage: 'Please enter a value between {0} and {1} characters long',
			minLengthMessage: 'Please enter at least {0} characters',
			maxLengthMessage: 'Please enter no more than {0} characters',
			requiredMessage: 'This field is required',
			maskMessage: 'Please fill all required positions',
			dateFieldsMessage: 'Please enter values in date fields',
			invalidDayMessage: 'Invalid day of month. Please enter correct day',
			dateMessage: 'Please enter a valid date',
			numberMessage: 'Please enter a valid number',
			rangeMessage: 'Please enter a value between {0} and {1}',
			minMessage: 'Please enter a value greater than or equal to {0}',
			maxMessage: 'Please enter a value less than or equal to {0}'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.VideoPlayer) {
	$.ig.VideoPlayer = {};

	$.extend($.ig.VideoPlayer, {

		locale: {
			liveStream: "Live video",
			live: "Live",
			paused: "Paused",
			playing: "Playing",
			play: 'Play',
			volume: "Volume",
			unsupportedVideoSource: "The current video sources does not contain a format that is supported by your browser.",
			missingVideoSource: "No compatible video source.",
			progressLabelLongFormat: "$currentTime$ / $duration$",
			progressLabelShortFormat: "$currentTime$",
			enterFullscreen: "Go Fullscreen",
			exitFullscreen: "Exit Fullscreen",
			skipTo: "SKIP TO",
			unsupportedBrowser: "The current browser does not support HTML5 video. <br/>Try upgrading to any of the following versions:",
			currentBrowser: "Current browser: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/",
			buffering: 'Buffering...',
			adMessage: 'Ad: Video will resume in $duration$ seconds.',
			adMessageLong: 'Ad: Video will resume in $duration$.',
			adMessageNoDuration: 'Ad: Video will resume after the commercial.',
			adNewWindowTip: 'Ad: Click to open ad content in a new window.',
			nonDivException: 'The Infragistics HTML5 Video Player can be instantiated only on a DIV tag.',
			relatedVideos: 'RELATED VIDEOS',
			replayButton: 'Replay',
			replayTooltip: 'Click to replay last video.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Zoombar) {
	$.ig.Zoombar = {};

	$.extend($.ig.Zoombar, {
		
		locale: {
			zoombarTargetNotSpecified: "igZoombar requires a valid target to attach to!",
			zoombarTypeNotSupported: "The type of widget the Zoombar is trying to attach to is not supported!",
			optionChangeNotSupported: "Changing the following option after the igZoombar has been created is not supported:"
		}
	});

}
/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 13.2.20132.2055
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.util) {
	$.ig.util = {};

	$.extend($.ig.util, {

		locale: {
			unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
			currentBrowser: "Current browser: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/"
		}
	});

}


