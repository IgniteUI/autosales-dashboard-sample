﻿/*!@license
* Infragistics.Web.ClientUI data source localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.DataSourceLocale) {
	    $.ig.DataSourceLocale = {};

	    $.extend($.ig.DataSourceLocale, {

		    locale: {
			    invalidDataSource: "Источник данных неизвестен. Скалярные данные не поддерживаются.",
			    unknownDataSource: "Невозможно определить тип источника данных. Установите тип данных: JSON или XML.",
			    errorParsingArrays: "Произошла ошибка при обработке массива данных. Схема не соответствует: ",
			    errorParsingJson: "Произошла ошибка при обработке данных формата JSON. Схема не соответствует: ",
			    errorParsingXml: "Произошла ошибка при обработке данных формата XML. Схема не соответствует: ",
			    errorParsingHtmlTable: "Произошла ошибка при извлечении данных из HTML таблицы. Схема не соответствует: ",
			    errorExpectedTbodyParameter: "Ожидаемый параметр: tbody или table элемент.",
			    errorTableWithIdNotFound: "Не найдена HTML таблица соответствующая идентификатору: ",
			    errorParsingHtmlTableNoSchema: "Произошла ошибка при извлечении данных из DOM таблицы: ",
			    errorParsingJsonNoSchema: "Произошла ошибка при извлечении данных из JSON текста: ",
			    errorParsingXmlNoSchema: "Произошла ошибка при извлечении данных из XML текста: ",
			    errorXmlSourceWithoutSchema: "Источник данных является XML документом, но схема для документа не определена ($.IgDataSchema) ",
			    errorUnrecognizedFilterCondition: " Предоставленное условие фильтра нераспознаваемо: ",
			    errorRemoteRequest: "Удаленный запрос на извлечение данных не удался: ",
			    errorSchemaMismatch: "Входные данные не соответствуют схеме, это поле не может быть сопоставлено: ",
			    errorSchemaFieldCountMismatch: "Входные данные не соответствуют схеме по числу полей. ",
			    errorUnrecognizedResponseType: "Тип ответа указан некорректно или невозможно определить автоматически. Пожалуйста установите settings.responseDataType и/или settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Таблицы в HierarchicalSchema не поддерживаются.",
			    cannotBuildTemplate: "Шаблон jQuery не может быть сконструирован. В источнике данных отсутствуют записи и колонки неопределены.",
			    unrecognizedCondition: "Нераспозноваемое условие фильтровки в следующем выражении: ",
			    fieldMismatch: "Следующее выражение содержит ошибочное поле или условие фильтровки: ",
			    noSortingFields: "Поля не установлены. Необходимо установить хотя бы одно поле для сортировки перед использованием функции sort().",
			    filteringNoSchema: "Схема/поля не установлены. Необходимо установить схему с определением полей и типов перед фильтровкой источника данных."
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "необходимо установить опцию name при определении серий.",
			    axisName: "необходимо установить опцию name при определении осей.",
			    invalidLabelBinding: "Привязанное значение для пометок не существует.",
			    close: "Закрыть",
			    overview: "Обзор",
			    zoomOut: "Уменьшить",
			    zoomIn: "Увеличить",
			    resetZoom: "Сброс увеличения"
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI shared localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
			
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI templating localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Templating) {
	    $.ig.Templating = {};

	    $.extend($.ig.Templating, {
		    locale: {
			    undefinedArgument: 'Произошла ошибка при извлечении значения поля из источника данных: '
		    }
	    });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Barcode) {
	    $.ig.Barcode = {
		    locale: {
			    aILength: "AI должен состоять из минимум 2-х цифр.",
			    badFormedUCCValue: "Значение свойства Data в штрих-коде UCC задано некорректно. Допустимый формат: (AI)GTIN.",
			    code39_NonNumericError: "Символ '{0}' недопустим в значении свойства Data для CODE39. Допустимые символы: {1}",
			    countryError: "Ошибка при расшифровке кода в свойстве Country. Значение должно быть численным.",
			    emptyValueMsg: "Значение свойства Data пусто.",
			    encodingError: "Ошибка во время преобразования. Обратитесь к документации и проверьте правильность заданных свойств.",
			    errorMessageText: "Недопустимое значение! Обратитесь к документации и проверьте правильность структуры свойства Data в штрих-коде.",
			    gS1ExMaxAlphanumNumber: "Семейство GS1 DataBar Expanded способно закодировать до 41 буквенно-цифровых символов.",
			    gS1ExMaxNumericNumber: "Семейство GS1 DataBar Expanded способно закодировать до 74 цифровых символов.",
			    gS1Length: "Свойство Data в GS1 DataBar используется для GTIN - 8, 12, 13, 14 и его длинна должна быть 7, 11, 12 или 13. Последняя цифра зарезервирована для контрольной суммы.",
			    gS1LimitedFirstChar: "Штрих-код GS1 DataBar Limited должен начинаться с 0 или 1. При кодировке данных GTIN-14 со значением Indicator больше 1, необходимо использовать Omnidirectional, Stacked, Stacked Omnidirectional или Truncated тип штрих-кода.",
			    i25Length: "Штрих-код типа Interleaved2of5 должен иметь четное количество цифр. В случае нечетного количества цифр, можно добавить 0 впереди.",
			    intelligentMailLength: "Длинна значения свойства Data для штрих-кода типа Intelligent Mail должна быть равна 20, 25, 29 или 31 символу: 20 цифр - это трэк-код (2 для идентификации штрих-кода, 3 для идентификации типа сервиса, 6 или 9 для идентификации отправителя, и 9 или 6 для серийного номера) и 0, 5, 9 или 11 символов почтового индекса.",
			    intelligentMailSecondDigit: "Вторая цифра должна быть от 0 до 4.",
			    invalidAI: "Недопустимое значение строки для Application Identifier. Пожалуйста убедитесь, что AI строка в свойстве Data задана корректно.",
			    invalidCharacter: "Символ '{0}' недопустим для этого типа штрих-кода. Допустимые символы: {1}",
			    invalidDimension: "Размерность штрих-кода не может быть определена из-за недопустимой комбинации значений для следующих свойств: Stretch, BarsFillMode и XDimension.",
			    invalidHeight: "Такое количество рядов ({0}) разметки штрих-кода не может быть помещено в заданное количество пикселей по высоте: {1}.",
			    invalidLength: "Значение свойства Data в штрих-коде должно иметь следующее количество цифр: {0}.",
			    invalidPostalCode: "Недопустимое значение PostalCode - в режиме 2 кодируются до 9 цифр почтового индекса (почтовый индекс в США), а в режиме 3 кодируются до 6 символов буквенно-цифрового кода.",
			    invalidPropertyValue: "Значение свойства {0} должно быть в диапазоне от {1} до {2}.",
			    invalidVersion: "Число, заданное в свойстве SizeVersion, не позволяет сгенерировать достаточное количество клеток для кодировки данных в указанном режиме кодирования и уровня корректировки ошибок.",
			    invalidWidth: "Такое количество колонок ({0}) разметки штрих-кода не может быть помещено в заданное количество пикселей по ширине: {1}. Проверьте значения свойств: XDimension и/или WidthToHeightRatio.",
			    invalidXDimensionValue: "Для заданного типа штрих-кода, значение свойства XDimension должно быть в диапазоне от {0} до {1}.",
			    maxLength: "Для заданного типа штрих-кода, длинна текста ({0}) превосходит максимально допустимую для кодировки. Максимально допустимое количество символов для кодировки: {1}.",
			    notSupportedEncoding: "Кодировка соответствующая {0} {1} не поддерживается.",
			    pDF417InvalidRowsColumnsCombination: "Кодовые слова (данные и корректировка ошибок) превышают допустимое количество, которое может быть закодировано в символьной матрице {0}x{1}.",
			    primaryMessageError: "Невозможно извлечь основное сообщение из значения свойства Data. Обратитесь к документации для уточнения структуры этого значения.",
			    serviceClassError: "Ошибка при преобразовании класса сервиса. Значение должно быть численным.",
			    smallSize: "Невозможно уместить разметку в Size({0}, {1}) как указано в установках Stretch.",
			    unencodableCharacter: "Символ '{0}' не может быть закодирован.",
			    uPCEFirstDigit: "Первая цифра UPCE всегда должна быть нулем в соответствии со спецификацией.",
			    warningString: "Штрих-код предупреждение: ",
			    wrongCompactionMode: "Значение свойства Data не может быть упаковано в режиме {0}.",
			    notLoadedEncoding: "Кодировка {0} не загружена."
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Combo localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Combo) {
	    $.ig.Combo = {
		    locale: {
		        noMatchFoundText: 'Результатов нет',
		        dropDownButtonTitle: 'Показать список',
		        clearButtonTitle: 'Очистить значение',
		        placeHolder: 'select...',
		        notSuported: 'Operation not supported',
		        errorNoSupportedTextsType: "Тип текста не поддерживается. Для фильтрации поддерживается текст типов Строка и Массив.",
			    errorUnrecognizedHighlightMatchesMode: "Unrecognized Highlight Matches Mode. Supported values are multi, contains, startsWith, full and null."
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Dialog) {
	    $.ig.Dialog = {
		    locale: {
			    closeButtonTitle: "закрыть",
			    minimizeButtonTitle: "минимизировать",
			    maximizeButtonTitle: "максимизировать",
			    pinButtonTitle: "прикрепить",
			    unpinButtonTitle: "открепить",
			    restoreButtonTitle: "восстановить"
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Doughnut Chart localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.igDoughnutChart) {
        $.ig.igDoughnutChart = {};

        $.extend($.ig.igDoughnutChart, {
            locale: {
                invalidBaseElement: " не может быть использован в качестве базового элемента. Вместо этого используйте DIV."
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Editor) {
	    $.ig.Editor = {
		    locale: {
			    spinUpperTitle: 'Увеличение',
			    spinLowerTitle: 'Уменьшение',
			    buttonTitle: 'Показать список',
			    clearTitle: 'Удалить значение',
			    datePickerButtonTitle: 'Показать календарь',
			    updateModeUnsupportedValue: 'Опция updateMode поддерживает два возможных значения - "onChange" и "immediate"'			
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "Компонент не загружен: ",
			autoGenerateColumnsNoRecords: "Установлена опция autoGenerateColumns, но исходные данные не содержат записей и поэтому невозможно определить поля",
			optionChangeNotSupported: "Динамические изменения следующей опции не поддерживаются:",
			optionChangeNotScrollingGrid: "Динамические изменения следующей опции не поддерживаются так как изначально таблица не имела ограничения размеров и необходима полная перерисовка:",
			noPrimaryKeyDefined: "Первичный ключ не определен. Чтобы использовать такие возможности как редактирование (Grid Updating), необходимо установить первичный ключ.",
			indexOutOfRange: "Индекс записи выходит за пределы допустимого.",
			noSuchColumnDefined: "Указанный идентификатор колонки не соответствует ни одной колонке в таблице.",
			columnIndexOutOfRange: "Индекс колонки выходит за пределы допустимого.",
			recordNotFound: "Указанный идентификатор записи не соответствует ни одной записи в таблице:",
			columnNotFound: "Колонка не найдена по указанному ключу:",
			colPrefix: "Колонка ",
			columnVirtualizationRequiresWidth: "Опция virtualization / columnVirtualization установлена в true, но ширина таблицы не может быть определена по колонкам. Необходимо установить a) ширину таблицы (width), b) defaultColumnWidth, c) ширину каждой колонки",
			virtualizationRequiresHeight: "Опция virtualization установлена в true, что требует определения высоты таблицы (height).",
			colVirtualizationDenied: "Установка опции columnVirtualization разрешена только при фиксированной виртуализации.",
			noColumnsButAutoGenerateTrue: "Опция autoGenerateColumns установлена в false, но таблица не содержит определений колонок. Установите autoGenerateColumns в true или определите колонки программно.",
			noPrimaryKey: "Для компонента igHierarchicalGrid необходимо задать первичный ключ.",
			templatingEnabledButNoTemplate: "Опция jQueryTemplating установлена в true, но опция rowTemplate не определена.",
			expandTooltip: "Развернуть",
			collapseTooltip: "Свернуть",
			movingNotAllowedOrIncompatible: "Невозможно переместить колонку. Колонка не найдена или конечный результат несовместим с заданным расположением колонок.",
			allColumnsHiddenOnInitialization: "Все столбцы сетки не могут быть скрыты. Задайте хотя бы один столбец, который будет отображаться.",
			columnVirtualizationNotSupportedWithPercentageWidth: "Если ширина сетки задана в процентах, виртуализация столбцов не поддерживается.",
			mixedWidthsNotSupported: "Смешанные/частичные установки ширины столбца не поддерживаются. Не поддерживаются варианты, когда ширина некоторых столбцов задана в процентах, а ширина других – в пикселах (либо вообще не задана)."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Начинается с...",
			endsWithNullText: "Оканчивается на...",
			containsNullText: "Содержит...",
			doesNotContainNullText: "Не содержит...",
			equalsNullText: "Равно...",
			doesNotEqualNullText: "Не равно...",
			greaterThanNullText: "Больше...",
			lessThanNullText: "Меньше...",
			greaterThanOrEqualToNullText: "Больше или равно...",
			lessThanOrEqualToNullText: "Меньше или равно...",
			onNullText: "На...",
			notOnNullText: "Не на...",
			afterNullText: "После",
			beforeNullText: "До",
			emptyNullText: "Пусто",
			notEmptyNullText: "Не пусто",
			nullNullText: "Null",
			notNullNullText: "Не null",
			startsWithLabel: "Начинается с",
			endsWithLabel: "Оканчивается на",
			containsLabel: "Содержит",
			doesNotContainLabel: "Не содержит",
			equalsLabel: "Равно",
			doesNotEqualLabel: "Не равно",
			greaterThanLabel: "Больше",
			lessThanLabel: "Меньше",
			greaterThanOrEqualToLabel: "Больше или равно",
			lessThanOrEqualToLabel: "Меньше или равно",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "После",
			beforeLabel: "До",
			todayLabel: "Сегодня",
			yesterdayLabel: "Вчера",
			thisMonthLabel: "В этом месяце",
			lastMonthLabel: "В прошлом месяце",
			nextMonthLabel: "В следующем месяце",
			thisYearLabel: "В этом году",
			lastYearLabel: "В прошлом году",
			nextYearLabel: "В следующем году",
			clearLabel: "Очистить фильтр",
			noFilterLabel: "Нет",
			onLabel: "На",
			notOnLabel: "Не на",
			advancedButtonLabel: "Дополнительно",
			filterDialogCaptionLabel: "Усиленный поиск",
			filterDialogConditionLabel1: "Показать записи соответствующие ",
			filterDialogConditionLabel2: " из следующих условий",
			filterDialogOkLabel: "Поиск",
			filterDialogCancelLabel: "Отмена",
			filterDialogAnyLabel: "ОДНОМУ",
			filterDialogAllLabel: "КАЖДОМУ",
			filterDialogAddLabel: "Добавить",
			filterDialogErrorLabel: "Превышено допустимое количество условий.",
			filterSummaryTitleLabel: "Результаты поиска",
			filterSummaryTemplate: "${matches} найденных записей",
			filterDialogClearAllLabel: "Очистить ВСЕ",
			tooltipTemplate: "Отфильтровано по ${condition}",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Спрятать фильтр",
			featureChooserTextHide: "Показать фильтр",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Усиленный фильтр",
			virtualizationSimpleFilteringNotAllowed: "Когда горизонтальная виртуализация включена, упрощенный режим фильтрации (фильтровочный ряд) не поддерживается. Установите 'усиленный' режим и/или не устанавливайте advancedModeEditorsVisible",
			featureChooserNotReferenced: "Скрипт модуля выбора опций отсутствует. Чтобы избежать этой ошибки, добавьте ссылку на файл ig.ui.grid.featurechooser.js, используйте загрузчик или ссылку на комбинированный скрипт."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Поместите колонку сюда или {0} для группировки",
			emptyGroupByAreaContentSelectColumns: "выберите колонки",
			emptyGroupByAreaContentSelectColumnsCaption: "выберите колонки",
			expandTooltip: "Развернуть групповой ряд",
			collapseTooltip: "Свернуть групповой ряд",
			removeButtonTooltip: "Убрать группировочную колонку",
			featureChooserText: "Разгруппировать",
			featureChooserTextHide: "Группировать",
			modalDialogCaptionButtonDesc: "Нажмите для сортировки по возрастанию",
			modalDialogCaptionButtonAsc: "Нажмите для сортировки по убыванию",
			modalDialogCaptionButtonUngroup: "Нажмите для разгруппировки",
			modalDialogGroupByButtonText: "Добавить",
			modalDialogCaptionText: 'Добавить к группировке',
			modalDialogDropDownLabel: 'Показ:',
			modalDialogClearAllButtonLabel: 'очистить все',
			modalDialogRootLevelHierarchicalGrid: 'первый уровень',
			modalDialogDropDownButtonCaption: "Нажмите чтобы показать/спрятать",
			modalDialogButtonApplyText: 'Готово',
			modalDialogButtonCancelText: 'Отмена',
			fixedVirualizationNotSupported: 'Функция GroupBy не работает с фиксированной виртуализацией.'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Выбор колонок",
			hiddenColumnIndicatorTooltipText: "Скрытые колонки",
			columnHideText: "Скрыть",
			columnChooserCaptionLabel: "Выбор колонок",
			columnChooserCheckboxesHeader: "видеть",
			columnChooserColumnsHeader: "колонка",
			columnChooserCloseButtonTooltip: "Закрыть",
			hideColumnIconTooltip: "Скрыть",
			featureChooserNotReferenced: "Скрипт модуля выбора опций отсутствует. Чтобы избежать этой ошибки, добавьте ссылку на файл ig.ui.grid.featurechooser.js, используйте загрузчик или ссылку на комбинированный скрипт.",
			columnChooserShowText: "Показ",
			columnChooserHideText: "Скрыть",
			columnChooserResetButtonLabel: "сброс",
			columnChooserButtonApplyText: 'Готово',
			columnChooserButtonCancelText: 'Отмена'
		}
	});

		$.ig.GridResizing = $.ig.GridResizing || {};

		$.extend($.ig.GridResizing, {
			locale: {
			    noSuchVisibleColumn: "Не удалось найти видимый столбец с заданным ключом. Изменение размера возможно только для видимых столбцов.",
			    resizingAndFixedVirtualizationNotSupported: "Если включена виртуализация либо виртуализация столбцов и для параметра virtualizationMode установлено значение фиксированная, функция изменения размера не работает. Чтобы избежать этого, установите для параметра virtualizationMode значение 'continuous' либо используйте только опцию rowVirtualization."
			}
		});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Показать ",
			pageSizeDropDownTrailingLabel: "записей",
			//pageSizeDropDownTemplate: "Show ${dropdown} records",
			nextPageLabelText: "след",
			prevPageLabelText: "пред",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Стр",
			currentPageDropDownTrailingLabel: "из ${count}",
			//currentPageDropDownTemplate: "Стр ${dropdown} из ${count}",
			currentPageDropDownTooltip: "Выберите номер страницы",
			pageSizeDropDownTooltip: "Выберите количество записей на страницу",
			pagerRecordsLabelTooltip: "Текущий спектр записей",
			prevPageTooltip: "перейти к предыдущей странице",
			nextPageTooltip: "перейти к следующей странице",
			firstPageTooltip: "перейти к первой странице",
			lastPageTooltip: "перейти к последней странице",
			pageTooltipFormat: "страница ${index}",
			    pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} из ${recordCount} записей",
			    invalidPageIndex: "Недопустимый индекс страницы: индекс должен быть больше или равен 0 и не должен превышать количество страниц"
		}
	});

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
        	persistenceImpossible: "Сохранение состояния селекции при обновлении возможно только при установки опции primaryKey в igGrid. Чтобы избежать этой ошибки, пожалуйста, установите первичный ключ или отключите сохранение состояния."
        }
    });

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection не включена. Чтобы избежать этого сообщения об ошибке, включите опцию селекции (Selection) в таблице или установите опцию requireSelection в модуле Row Selectors в false.",
			columnVirtualizationEnabled: "Если включена виртуализация столбцов, опция igGridRowSelectors не поддерживается. Для того чтобы предотвратить получение этого сообщения об ошибке, включите только виртуализацию строк, активировав свойство сетки 'rowVirtualization', либо измените режим виртуализации на 'continuous'."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'отсортировано ${direction}',
			unsortedColumnTooltip: 'нажмите для сортировки колонки',
			ascending: 'по возрастанию',
			descending: 'по убыванию',
			modalDialogSortByButtonText: 'сортировать',
			modalDialogResetButton: "сброс",
			modalDialogCaptionButtonDesc: "Нажмите для сортировки по убыванию",
			modalDialogCaptionButtonAsc: "Нажмите для сортировки по возрастанию",
			modalDialogCaptionButtonUnsort: "Нажмите для очистки сортировки",
			featureChooserText: "Порядок данных",
			modalDialogCaptionText: "Сортировать по нескольким",
			modalDialogButtonApplyText: 'Готово',
			modalDialogButtonCancelText: 'Отмена',
			sortingHiddenColumnNotSupport: 'Сортировка скрытых колонок не поддерживается',
			featureChooserSortAsc: 'Порядок А-Я',
			featureChooserSortDesc: 'Порядок Я-А'
			//modalDialogButtonSlideCaption: "Нажмите для показа/скрытия отсортированных колонок"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Скрыть сводки",
			featureChooserTextHide: "Показать сводки",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Отмена',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Показать/скрыть сводки',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Кол',
			defaultSummaryRowDisplayLabelMin: 'Мин',
			defaultSummaryRowDisplayLabelMax: 'Макс',
			defaultSummaryRowDisplayLabelSum: 'Сумма',
			defaultSummaryRowDisplayLabelAvg: 'Сред',
			defaultSummaryRowDisplayLabelCustom: 'Вычисление',
			calculateSummaryColumnKeyNotSpecified: "Установите идентификатор поля (column key) для вычисления сводки",
			featureChooserNotReferenced: "Скрипт модуля выбора опций отсутствует. Чтобы избежать этой ошибки, добавьте ссылку на файл ig.ui.grid.featurechooser.js, используйте загрузчик или ссылку на комбинированный скрипт."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Готово',
			doneTooltip: 'Завершить редактирование и обновить',
			cancelLabel: 'Отмена',
			cancelTooltip: 'Завершить редактирование и не обновлять',
			addRowLabel: 'Добавить новую запись',
			addRowTooltip: 'Нажмите для редактирования новой записи',
			deleteRowLabel: '',
			deleteRowTooltip: 'Удалить запись',
			igEditorException: 'Редактирование ui.igGrid возможно только при наличии ui.igEditor',
			igComboException: 'Использование редактора спискового типа в ui.igGrid возможно только при наличии ui.igCombo',
			igRatingException: 'Использование редактора рейтингового типа в ui.igGrid возможно только при наличии ui.igRating',
			igValidatorException: 'Опции валидности в igGridUpdating доступны только при наличии ui.igValidator',
			noPrimaryKeyException: 'Обновление после удаления возможно только если установлено "primaryKey" в опциях igGrid.',
			hiddenColumnValidationException: 'Невозможно редактировать запись со скрытой колонкой и валидацией.',
			dataDirtyException: 'Таблица содержит несохраненные данные. Чтобы избежать сообщения об ошибке, установите опцию "autoCommit" в igGrid или обработайте событие "dataDirty" из igGridUpdating и возвратите false из обработчика. Обработчик также может вызвать "commit()" из igGrid.',
			recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
			rowEditDialogCaptionLabel: 'Редактировать запись',
			unboundColumnsNotSupported: 'Опция ColumnFixing не поддерживается с несвязанными столбцами',
			excelNavigationNotSupportedWithCurrentEditMode: "Режим навигации Excel поддерживается только для режимов редактирования ячейки и редактирования строки. Для предотвращения этой ошибки отключите опцию excelNavigationMode либо установите с помощью параметра editMode режим редактирования ячейки или строки."
		}
	});

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Готово',
            movingDialogButtonCancelText: 'Отмена',
            movingDialogCaptionButtonDesc: 'Переместить вверх',
            movingDialogCaptionButtonAsc: 'Переместить вниз',
            movingDialogCaptionText: 'Переместить колонки',
            movingDialogDisplayText: 'Переместить колонки',
            movingDialogDropTooltipText: "Переместить сюда",
            dropDownMoveLeftText: 'Переместить влево',
            dropDownMoveRightText: 'Переместить вправо',
            dropDownMoveFirstText: 'Переместить в начало',
            dropDownMoveLastText: 'Переместить в конец',
            featureChooserNotReferenced: "Скрипт модуля выбора опций отсутствует. Чтобы избежать этой ошибки, добавьте ссылку на файл ig.ui.grid.featurechooser.js, используйте загрузчик или ссылку на комбинированный скрипт.",
            movingToolTipMove: 'Переместить',
            featureChooserSubmenuText: 'Двигать'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Нажмите для закрепления этой колонки',
            headerUnfixButtonText: 'Нажмите для открепления этой колонки',
            featureChooserTextFixedColumn: 'Закрепить колонку',
            featureChooserTextUnfixedColumn: 'Открепить колонку',
            groupByNotSupported: 'igGridGroupBy не поддерживается вместе с ColumnFixing',
            virtualizationNotSupported: 'Функция сетки – виртуализация позволяет выполнять виртуализацию как строк, так и столбцов. С опцией ColumnFixing виртуализация столбцов не поддерживается. Активируйте опцию rowVirtualization сетки',
            columnVirtualizationNotSupported: 'С опцией ColumnFixing виртуализация столбцов не поддерживается',
            columnMovingNotSupported: 'igGridColumnMoving не поддерживается вместе с ColumnFixing',
            hidingNotSupported: 'igGridHiding не поддерживается вместе с ColumnFixing',
            hierarchicalGridNotSupported: 'igHierarchicalGrid не поддерживается вместе с ColumnFixing',
            responsiveNotSupported: 'igGridResponsive не поддерживается вместе с ColumnFixing',
            noGridWidthNotSupported: 'При использовании опции ColumnFixing необходимо задавать ширину сетки в пикселах',
            defaultColumnWidthInPercentageNotSupported: "При использовании опции ColumnFixing ширина столбца в процентах по умолчанию не поддерживается",
            columnsWidthShouldBeSetInPixels: 'Для использования опции ColumnFixing необходимо, чтобы ширина всех столбцов сетки была установлена в пикселах. Проверьте столбец с ключом: ',
            unboundColumnsNotSupported: 'Опция ColumnFixing не поддерживается с несвязанными столбцами',
            excelNavigationNotSupportedWithCurrentEditMode: "Режим навигации Excel поддерживается только для режимов редактирования ячейки и редактирования строки. Для предотвращения этой ошибки отключите опцию excelNavigationMode либо установите с помощью параметра editMode режим редактирования ячейки или строки.",
            internalErrors: {
                none: 'Ошибки отсутствуют',
                notValidIdentifier: 'Столбец с указанным идентификатором отсутствует',
                fixingRefused: 'Фиксация невозможна, поскольку имеется ТОЛЬКО один видимый незафиксированный столбец',
                fixingRefusedMinVisibleAreaWidth: 'Фиксация столбца недопустима вследствие минимальной ширины видимой области для незафиксированных столбцов',
                alreadyHidden: 'Попытка зафиксировать / отменить фиксацию скрытого столбца',
                alreadyUnfixed: 'Попытка отменить фиксацию незафиксированного столбца',
                alreadyFixed: 'Попытка зафиксировать ранее зафиксированный столбец',
                unfixingRefused: 'Отмена фиксации невозможна, поскольку имеется только один видимый зафиксированный столбец и, по крайней мере, один скрытый зафиксированный столбец.',
                targetNotFound: 'Target column is not found with the specified target identifier'
            }
        }
    });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
    	locale: {
    		loadMoreDataButtonText: 'Загрузить больше данных',
    		appendRowsOnDemandRequiresHeight: 'Требуется установить высоту для использования AppendRowsOnDemand',
    		groupByNotSupported: 'igGridGroupBy не поддерживается вместе с AppendRowsOnDemand',
    		pagingNotSupported: 'igGridPaging не поддерживается вместе с AppendRowsOnDemand',
    		cellMergingNotSupported: 'igGridCellMerging не поддерживается вместе с AppendRowsOnDemand',
    		virtualizationNotSupported: 'Виртуализация не поддерживается вместе с AppendRowsOnDemand'
    	}
    });

    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
    	locale: {
    	    fixedVirualizationNotSupported: 'Опция igGridResponsive не поддерживается с фиксированной виртуализацией'
    	}
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
    	locale: {
    	    multiColumnHeadersNotSupportedWithColumnVirtualization: 'Заголовки для нескольких столбцов не поддерживаются с опцией columnVirtualization'
    	}
    });

}
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Жирность',
			italicButtonTitle: 'Наклон',
			underlineButtonTitle: 'Подчеркивание',
			strikethroughButtonTitle: 'Зачеркивание',
			increaseFontSizeButtonTitle: 'Увеличить размер шрифта',
			decreaseFontSizeButtonTitle: 'Уменьшить размер шрифта',
			alignTextLeftButtonTitle: 'Выравнить влево',
			alignTextRightButtonTitle: 'Выравнить вправо',
			alignTextCenterButtonTitle: 'Выравнить по центру',
			justifyButtonTitle: 'Распределить',
			bulletsButtonTitle: 'Пункты',
			numberingButtonTitle: 'Нумеровка',
			decreaseIndentButtonTitle: 'Уменьшить отступ',
			increaseIndentButtonTitle: 'Увеличить отступ',
			insertPictureButtonTitle: 'Вставить картинку',
			fontColorButtonTitle: 'Цвет букв',
			textHighlightButtonTitle: 'Цвет отметки',
			insertLinkButtonTitle: 'Вставить ссылку',
			insertTableButtonTitle: 'Таблица',
			addRowButtonTitle: 'Добавить ряд',
			removeRowButtonTitle: 'Удалить ряд',
			addColumnButtonTitle: 'Добавить колонку',
			removeColumnButtonTitle: 'Удалить колонку',
			inserHRButtonTitle: 'Вставить разделитель',
			viewSourceButtonTitle: 'Показать HTML',
			cutButtonTitle: 'Вырезать',
			copyButtonTitle: 'Копировать',
			pasteButtonTitle: 'Вставить',
			undoButtonTitle: 'Отменить изменения',
			redoButtonTitle: 'Вернуть изменения',
			imageUrlDialogText: 'URL картинки:',
			imageAlternativeTextDialogText: 'Дополнительный текст:',
			imageWidthDialogText: 'Ширина картинки:',
			imageHeihgtDialogText: 'Высота картинки:',
			linkNavigateToUrlDialogText: 'URL адрес:',
			linkDisplayTextDialogText: 'Текст ссылки:',
			linkOpenInDialogText: 'Назначение:',
			linkTargetNewWindowDialogText: 'Новое окно',
			linkTargetSameWindowDialogText: 'Текущее окно',
			linkTargetParentWindowDialogText: 'Родительское окно',
			linkTargetTopmostWindowDialogText: 'Верхнее окно',
			applyButtonTitle: 'Применить',
			cancelButtonTitle: 'Отмена',
			defaultToolbars: {
			    textToolbar: "Панель инструментов для работы с текстом",
			    formattingToolbar: "Панель инструментов для форматирования текста",
			    insertObjectToolbar: "Панель инструментов для добавления объектов",
			    copyPasteToolbar: "Панель инструментов для копирования и вставки"
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
				{ text: "1", value: "7.5 pt" },
				{ text: "2", value: "10 pt" },
				{ text: "3", value: "12 pt" },
				{ text: "4", value: "13.5 pt" },
				{ text: "5", value: "18 pt" },
				{ text: "6", value: "24 pt" },
				{ text: "7", value: "36 pt" }
				],
			formatsList: [
					{ text: "h1", value: "Заголовок 1" },
					{ text: "h2", value: "Заголовок 2" },
					{ text: "h3", value: "Заголовок 3" },
					{ text: "h4", value: "Заголовок 4" },
					{ text: "h5", value: "Заголовок 5" },
					{ text: "h6", value: "Заголовок 6" },
                    { text: "p", value: "Обычный" }
				]
		}

	});
}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};

        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: "Предоставленный источник данных либо null, либо не поддерживается.",
                measureList: "Меры",
                ok: "OK",
                cancel: "Отмена",
                addToMeasures: "Добавить в меры",
                addToFilters: "Добавить в фильтры",
                addToColumns: "Добавить в колонки",
                addToRows: "Добавить в ряды"
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotDataSelector) {
        $.ig.PivotDataSelector = {};

        $.extend($.ig.PivotDataSelector, {
            locale: {
                invalidBaseElement: " не может быть использован в качестве базового элемента. Вместо этого используйте DIV.",
                catalog: "Каталог",
                cube: "Куб",
                measureGroup: "Группа Мер",
                measureGroupAll: "(Все)",
                rows: "Ряды",
                columns: "Колонки",
                measures: "Меры",
                filters: "Фильтры",
                deferUpdate: "Задержать Обновление",
                updateLayout: "Обновить Раскладку",
                selectAll: "Выбрать Все"
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Перенесите поля для фильтрования сюда",
                measuresHeader: "Перенесите данные сюда",
                rowsHeader: "Перенесите поля для рядов сюда",
                columnsHeader: "Перенесите поля для колонок сюда",
                disabledFiltersHeader: "Поля для фильтрования",
                disabledMeasuresHeader: "Данные",
                disabledRowsHeader: "Поля для рядов",
                disabledColumnsHeader: "Поля для колонок",
                noSuchAxis: "Ось не существует"
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Popover localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Popover) {
	$.ig.Popover = {};

	$.extend( $.ig.Popover, {
		locale: {
			popoverOptionChangeNotSupported: "Изменение этой опции невозможно после инициализации igPopover:",
			popoverShowMethodWithoutTarget: "Параметр target функции show обязателен, когда используется опция selectors"
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Rating localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Rating) {
	    $.ig.Rating = {};

	    $.extend($.ig.Rating, {
		    locale: {
			    setOptionError: 'Динамические изменения следующей опции не поддерживаются: '
		    }
	    });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Splitter) {
	    $.ig.Splitter = {};

	    $.extend($.ig.Splitter, {
		    locale: {
		        errorPanels: 'Количество панелей не может быть больше двух.',
		        errorSettingOption: 'Ошибочное значение опции.'
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
		    renderDataError: "Данные получены или проанализированы безуспешно.",
		    setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Toolbar) {
    $.ig.Toolbar = {};

    $.extend($.ig.Toolbar, {

		locale: {
			collapseButtonTitle: 'Свернуть',
			expandButtonTitle: 'Развернуть'
		}

	});
}
})(jQuery);
/*!@license
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
			    invalidArgumentType: 'Неправильный тип аргумента.',
			    errorOnRequest: 'Произошла ошибка при запросе данных: ',
			    noDataSourceUrl: 'Необходимо установить опцию dataSourceUrl, чтобы igTree смог произвести запрос данных с указанного URL.',
			    incorrectPath: 'Узел не найден по указанному пути: ',
			    incorrectNodeObject: 'Указанный аргумент не соответствует узлу jQuery.',
			    setOptionError: 'Динамические изменения следующей опции не поддерживаются: ',
			    moveTo: '<strong>Перенести в</strong> {0}',
			    moveBetween: '<strong>Перенести между</strong> {0} и {1}',
			    moveAfter: '<strong>Перенести после</strong> {0}',
			    moveBefore: '<strong>Перенести до</strong> {0}',
			    copyTo: '<strong>Копировать в</strong> {0}',
			    copyBetween: '<strong>Копировать между</strong> {0} и {1}',
			    copyAfter: '<strong>Копировать после</strong> {0}',
			    copyBefore: '<strong>Копировать до</strong> {0}',
			    and: 'и'
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tree Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.TreeGrid) {
        $.ig.TreeGrid = {};

        $.extend($.ig.TreeGrid, {
            locale: {
                fixedVirtualizationNotSupported: 'Fixed virtualization is not supported. Please set virtualizationMode to continuous in order to enable row virtualization'
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Upload localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Upload) {
	    $.ig.Upload = {};

	    $.extend($.ig.Upload, {

		    locale: {
			    labelUploadButton: "Загрузить файл",
			    labelAddButton: "Добавить",
			    labelClearAllButton: "Очистить загруженные",
			    // M.H. 13 May 2011 - fix bug 75042
			    labelSummaryTemplate: "Загружено {0} из {1}",
			    labelSummaryProgressBarTemplate: "{0}/{1}",
			    labelShowDetails: "Показать подробнее",
			    labelHideDetails: "Скрыть подробности",
			    labelSummaryProgressButtonCancel: "Отмена",
			    // M.H. 1 June 2011 Fix bug #77532
			    labelSummaryProgressButtonContinue: "Загрузить",
			    labelSummaryProgressButtonDone: "Готово",
			    labelProgressBarFileNameContinue: "...",

			    //error messages
			    errorMessageFileSizeExceeded: "Файл превышает разрешенный размер.",
			    errorMessageGetFileStatus: "Невозможно получить текущий статус загрузки! Возможна потеря соединения.",
			    errorMessageCancelUpload: "Невозможно отправить команду на отмену загрузки! Возможна потеря соединения.",
			    errorMessageNoSuchFile: "Указанный файл не найден. Возможно файл слишком большой.",
			    errorMessageOther: "Произошла внутренняя ошибка при загрузке. Код ошибки: {0}.",
			    errorMessageValidatingFileExtension: "Файлы с таким расширением не поддерживаются.",
			    errorMessageAJAXRequestFileSize: "Ошибка удаленного запроса размера файла.",
			    errorMessageMaxUploadedFiles: "Превышено разрешенное количество файлов для загрузки.",
			    errorMessageMaxSimultaneousFiles: "Недопустимое значение опции maxSimultaneousFilesUploads - должно быть больше 0 и не null.",
			    errorMessageTryToRemoveNonExistingFile: "Попытка удаления несуществующего файла {0}.",
			    errorMessageTryToStartNonExistingFile: "Попытка загрузки несуществующего файла {0}.",

			    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			    // title attributes            
			    titleUploadFileButtonInit: "Загрузить файл",
			    titleAddFileButton: "Добавить",
			    titleCancelUploadButton: "Отмена",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSummaryProgressButtonContinue: "Загрузить",
			    titleClearUploaded: "Очистить загруженные",
			    titleShowDetailsButton: "Показать подробнее",
			    titleHideDetailsButton: "Скрыть подробности",
			    titleSummaryProgressButtonCancel: "Отмена",
			    titleSummaryProgressButtonDone: "Готово",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSingleUploadButtonContinue: "Загрузить",
			    titleClearAllButton: "Очистить загруженные"
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Validator localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Validator) {
	    $.ig.Validator = {
		    locale: {
			    defaultMessage: 'Пожалуйста, исправьте это поле',
			    selectMessage: 'Пожалуйста, выберите значение',
			    rangeSelectMessage: 'Пожалуйста, выберите не более {0} и не менее {1} пунктов',
			    minSelectMessage: 'Пожалуйста, выберите по крайней мере {0} пунктов',
			    maxSelectMessage: 'Пожалуйста, выберите не более {0} пунктов',
			    rangeLengthMessage: 'Пожалуйста, введите значение в диапазоне от {0} до {1} символов',
			    minLengthMessage: 'Пожалуйста, введите по крайней мере {0} символов',
			    maxLengthMessage: 'Пожалуйста, введите не более {0) символов',
			    requiredMessage: 'Это поле является обязательным',
			    maskMessage: 'Пожалуйста, заполните все необходимые позиции',
			    dateFieldsMessage: 'Пожалуйста, введите значения в поля даты',
			    invalidDayMessage: 'Неверный день месяца. Пожалуйста, введите правильный день',
			    dateMessage: 'Пожалуйста, введите действительную дату',
			    numberMessage: 'Пожалуйста, введите действительный номер',
			    rangeMessage: 'Пожалуйста, введите значение в диапазоне от {0} до {1}',
			    minMessage: 'Пожалуйста, введите значение больше или равно {0}',
			    maxMessage: 'Пожалуйста, введите значение меньше или равно {0}'
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.VideoPlayer) {
	    $.ig.VideoPlayer = {};

	    $.extend($.ig.VideoPlayer, {

		    locale: {
			    liveStream: "Прямой эфир",
			    live: "Вживую",
			    paused: "Пауза",
			    playing: "Воспроизведение",
			    play: 'Воспроизводить',
			    volume: "Уровень звука",
			    unsupportedVideoSource: "В исходных видеоклипах отсутствует клип в формате, поддерживаемом вашим браузером.",
			    missingVideoSource: "Исходный видеоклип неопределен.",
			    progressLabelLongFormat: "$currentTime$ / $duration$",
			    progressLabelShortFormat: "$currentTime$",
			    enterFullscreen: "На весь экран",
			    exitFullscreen: "Вернуться в браузер",
			    skipTo: "ПРОПУСТИТЬ ДО",
			    unsupportedBrowser: "Ваш браузер не поддерживает HTML5 video. <br/>Попробуйте воспользоваться следующими версиями браузеров:",
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
			    safariDownload: "http://www.apple.com/safari/download/",
			    buffering: 'Буферизация...',
			    adMessage: 'Реклама: Видео возобновиться через $duration$ секунд.',
			    adMessageLong: 'Реклама: Видео возобновиться через $duration$.',
			    adMessageNoDuration: 'Реклама: Видео возобновиться после рекламы.',
			    adNewWindowTip: 'Реклама: Щелкните, чтобы открыть в новом окне браузера.',
			    nonDivException: 'Infragistics HTML5 Video Player может быть определен только через DIV элемент.',
			    relatedVideos: 'ПОХОЖИЕ КЛИПЫ',
			    replayButton: 'Еще раз',
			    replayTooltip: 'Щелкнить чтобы посмотреть еще раз.'
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Zoombar) {
	$.ig.Zoombar = {};

	$.extend($.ig.Zoombar, {

	    locale: {
	        zoombarTargetNotSpecified: "Виджету igZoombar необходим целевой объект для отображения!",
			zoombarTypeNotSupported: "Целевой виджет, к которому Zoombar пытается присоединиться, не поддерживается!",
			optionChangeNotSupported: "Изменение этой опции после создания igZoombar не поддерживается:"
		}
	});

}
})(jQuery);
/*!@license
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

