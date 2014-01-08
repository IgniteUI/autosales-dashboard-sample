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
