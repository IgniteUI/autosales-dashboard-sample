// TODO: Do not use global
var isAnimated = false;
var centeredMap = false;
var Autosales = Autosales || {};


// create a general purpose namespace method
// this will allow us to create namespace a bit easier
Autosales.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = Autosales;

    // we want to be able to include or exclude the root namespace 
    // So we strip it if it's in the namespace
    if (nsparts[0] === "Autosales") {
        nsparts = nsparts.slice(1);
    }

    // loop through the parts and create 
    // a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has 
        // the namespace declared, if not create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element 
        // in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now completely constructed 
    // with empty namespaces and can be used.
    return parent;
};

// Define application configuration
Autosales.Config = {
    filters: [{
        name: "measure",
        label: Autosales.Resources.Filters.Measure,
        options: [Autosales.Resources.Filters.Revenue,
            Autosales.Resources.Filters.Volume]
    }, {
        name: "region",
        label: Autosales.Resources.Filters.Region,
        extendLabel: Autosales.Resources.Filters.Dealer,
        extend: "dealer"
    }, {
        name: "period",
        label: Autosales.Resources.Filters.Period,
        options: [
            Autosales.Resources.Filters.TwelveMonths,
            Autosales.Resources.Filters.Year,
            Autosales.Resources.Filters.Quarter,
            Autosales.Resources.Filters.Month,
            Autosales.Resources.Filters.Week]
    }],
    defaultParams: {
        measure: 0,
        period: 0,
        filter: 1,
        filterParam: "Northeast"
    },
    bulletGraph: [{
        minimumValue: 0,
        maximumValue: 50,
        devider: 1000000,
        label: "M"
    }, {
        minimumValue: 0,
        maximumValue: 5,
        devider: 1000,
        label: "K"
    }],
    bulletGraphInGrid: [{
        minimumValue: 0,
        maximumValue: 13,
        devider: 1000000,
        label: "M"
    },
    {
        minimumValue: 0,
        maximumValue: 100,
        devider: 1,
        label: ""
    }],
        bulletGraphBrush: [{
        // Blue
        ranges: ["#00aade",
            "#4ac1e5",
            "#91d5ea"]
    }, {
        // Purple
        ranges: ["#564a97",
            "#847bb1",
            "#b1accb"]
    }],
    dataChartBrush: [{
        // Blue
        series: ["rgba(68, 172, 214, 1)",
            "rgba(68, 172, 214, .5)",
            "rgba(151, 151, 151, 1)",
            "rgba(151, 151, 151, .5)"]
    }, {
        // Purple
        series: ["rgba(84, 73, 142, 1)",
            "rgba(84, 73, 142, .5)",
            "rgba(151, 151, 151, 1)",
            "rgba(151, 151, 151, .5)"]
    }],
    texts: [{
        header: Autosales.Resources.General.Regional
    }, {
        header: Autosales.Resources.General.Dealership
    }],
    animationDuration: 300
}

// Define application helper functions and objects
Autosales.Helpers = {
    isPhoneCheck: function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    scrollToTop: function () {
        Autosales.Helpers.isPhoneCheck && Autosales.Helpers.isPhoneCheck() && setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1000);
    },
    formatAmount: function (num, type) {
        if (num < 1000) {
            return num;
        }

        var p = num.toFixed(2).split("."),
            result,
            prefix = (type == 0 ? "$" : "");
        
        result = prefix + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
            return num + (i && !(i % 3) ? "," : "") + acc;
        }, "") + "," + p[1];

        return result.slice(0, -7) + "K";
    },
    formatMonthFromDate: function (value) {
        var date = value.Date;
        var substringedDate = date.substring(6);
        var parsedIntDate = parseInt(substringedDate);
        var date = new Date(parsedIntDate);
        return date.toDateString().substring(4, 8);
    },
    isDealerDashboard: function () {
        var check = false;
        check = $("#panels").hasClass("dealer");
        return check;
    },
    isEnabledPanel: function (element) {
        return !$(element).hasClass("disabled");
    },
    disablePanel: function (element) {
        $(element).addClass("disabled");
        $(element + " .closeButton").hide();
        $(element).append("<div class='disabledOverlay'></div>");
    },
    enablePanel: function (element) {
        $(element).removeClass("disabled");
        $(element + " .closeButton").show();
        $(element + " .disabledOverlay").remove();
    },
    isShownPanel: function (element) {
        return $(element).css("display") !== "none";
    },
    getIndexOfArrayObj: function (array, obj, prop) {
        var i = 0;
        for (; i < array.length; i++) {
            if (obj[prop] === array[i][prop]) {
                break;
            }
        }

        return i;
    },
    uniqueId: (function () {
        var id = 0;
        return function () {
            return "item" + id++;
        };
    })(),
    LoadIndicator: {
        init: function (element, text) {
            text = text || Autosales.Resources.General.Loading;
            $(element).append("<div class='overlay'><img src='" + Autosales.Config.baseUrl + "Content/images/ig-loading-small.gif'></div>");
        },
        destroy: function () {
            $(".overlay").remove();
        }
    },
    BulletGraph: function (element, options) {
        setTimeout(function () {
            $(element).igBulletGraph({
                height: options.height,
                width: options.width ? options.width : "100%",
                font: "11px Arial",
                scaleEndExtent: 0.9,
                fontBrush: "#666666",
                minorTickBrush: "transparent",
                backingBrush: "transparent",
                tickBrush: "transparent",
                tickStartExtent: 0.02,
                tickEndExtent: 0.2,
                interval: options.config.maximumValue / 2,
                minimumValue: options.config.minimumValue,
                maximumValue: options.config.maximumValue,
                formatLabel: function (evt, ui) {
                    ui.label = ui.value + options.config.label;
                },
                backingOutline: "transparent",
                targetValue: options.data.targetValue / options.config.devider,
                value: options.data.value / options.config.devider,
                valueBrush: "white",
                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: options.config.maximumValue * 0.33,
                        brush: options.brush[0],
                        outline: "transparent"
                    }, {
                        name: 'range2',
                        startValue: options.config.maximumValue * 0.33,
                        endValue: options.config.maximumValue * 0.66,
                        brush: options.brush[1],
                        outline: "transparent"
                    }, {
                        name: 'range3',
                        startValue: options.config.maximumValue * 0.66,
                        endValue: options.config.maximumValue,
                        brush: options.brush[2],
                        outline: "transparent"
                    }
                ]
            });
        }, 0);
    },
    isMouseOutsideOfTooltipTolerance: function (circleUi, mouseUi) {
        var xTolerance = 20;
        var yTolerance = 25;
        var positionXChange = Math.abs(circleUi.positionX - mouseUi.positionX);
        var positionYChange = Math.abs(circleUi.positionY - mouseUi.positionY);
        return (xTolerance < positionXChange || yTolerance < positionYChange);
    },
    messageForSupportedWidth: function (el) {
        var htmlTemplate = "<div class='unsupportedDeviceWidth'><p>${MessageForSupportedWidth}</p><img src='${ImagePath}'/></div>"

        el.append($.ig.tmpl(htmlTemplate, {
            MessageForSupportedWidth: Autosales.Resources.General.MessageForSupportedWidth,
            ImagePath: Autosales.Config.baseUrl + "Content/Images/logo-big.png"
        }));
    }
}

Autosales.Helpers.Map = {
    init: function (element, options) {
        element.igMap({
            width: "100%",
            height: options.height,
            zoomable: true,
            plotAreaBackground: "#c4e4ee",
            series: [{
                type: "geographicShape",
                name: "states",
                markerType: "none",
                shapeDataSource: Autosales.Config.baseUrl + "Content/Shapes/states.shp",
                databaseSource: Autosales.Config.baseUrl + "Content/Shapes/states.dbf",
                brush: "white", 
                outline: "gray",
                markerTemplate: new $.ig.SimpleTextMarkerTemplate({
                    font: "8pt Open Sans",
                    textColor: "#333333",
                    backgroundColor: "rgba(250,250,250,.0)",
                    borderColor: "rgba(250,250,250,.0)",
                    borderThickness: 0,
                    getText: function (item) {
                        return item.fieldValues.STATE_ABBR;
                    }
                })
            }],
            windowResponse: "immediate",
            windowRect: options.windowRect ? options.windowRect : {}
        });
    },
    setStateStyle: function (element, index, value) {
        element.igMap("option", "series", [{
            name: "states",
            shapeStyleSelector: {
                selectStyle: function (s, o) {
                    if (Autosales.Helpers.isDealerDashboard()) {
                        return {
                            fill: "#ffffff",
                            stroke: "#808080"
                        };
                    } else {
                        if (s.fields.item(index) === value) {
                            return {
                                fill: "#57b8d5",
                                stroke: "#298098"
                            };
                        } else {
                            return {
                                fill: "#ffffff",
                                stroke: "#808080"
                            };
                        }
                    }
                }
            }
        }]);
    },
    setDealersSeries: function (element, ds) {
        element.igMap("option", "series", [{
            type: "geographicSymbol",
            name: "dealers",
            dataSource: ds,
            latitudeMemberPath: "Latitude",
            longitudeMemberPath: "Longitude",
            //  Defines marker template rendering function
            markerTemplate: {
                measure: function (measureInfo) {
                    measureInfo.width = 40;
                    measureInfo.height = 40;
                },
                render: function (renderInfo) {
                    var ctx = renderInfo.context,
                        x = renderInfo.xPosition,
                        y = renderInfo.yPosition;
                    if (renderInfo.isHitTestRender) {
                        ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
                    } else {
                        ctx.fillStyle = "black";
                    }


                    if (renderInfo.isHitTestRender) {
                        //D.U. 153603
                        var radious = 10;
                        ctx.beginPath();
                        ctx.arc(x, y, radious, 0, 2.0 * Math.PI);
                        ctx.fill();
                    } else {
                        if (Autosales.Helpers.isDealerDashboard()) {
                            ctx.fillStyle = "#564a97";
                            ctx.beginPath();
                            ctx.arc(x, y, 5, 0, 2.0 * Math.PI);
                            ctx.fill();
                        } else {
                            //This is responsible for range circles aroung the main one
                            ctx.globalAlpha = .5;
                            ctx.fillStyle = "rbga(129,240,68,.5)";
                            ctx.strokeStyle = "#2b8098";
                            ctx.beginPath();
                            ctx.arc(x, y, renderInfo.data._item.Percent, 0, 2.0 * Math.PI);
                            ctx.fill()
                            ctx.stroke();
                            ctx.globalAlpha = 1.0;
                            //Main circles
                            ctx.fillStyle = "#00475b";
                            ctx.beginPath();
                            ctx.arc(x, y, 5, 0, 2.0 * Math.PI);
                            ctx.fill();
                        }
                    }
                }
            }
        }]);
    },
    removeDealersSeries: function (element) {
        $(element).igMap("option", "series", [{
            name: "dealers",
            remove: true
        }]);
    },
    center: function (element, centered) {
        var geographic = Autosales.Helpers.Map.geographicFromCentered(centered);
        var relative = element.igMap("zoomToGeographic", geographic);

        //element.igMap("option", "windowRect", relative);
    },
    getTooltip: function (top, left) {
        var tooltip = $("<div class=\"tooltip\"><div class=\"tooltipHeading\"></div><span class=\"tooltipMeasure\"></span>: <div class=\"tooltipValue\"></div><span>" +
            Autosales.Resources.General.Target + "</span>: <div class=\"tooltipTarget\"></div></div>").css({
            top: top,
            left: left
        });

        return tooltip;
    },
    geographicFromCentered: function (centered) {
        var leftDelta = (Autosales.Helpers.isPhoneCheck() ? 0 : 10),
            geographic = {
                left: centered.longitude - centered.radius - leftDelta,
                top: centered.latitude - centered.radius,
                width: centered.radius * 2,
                height: centered.radius * 2
        };

        return geographic;
    },
    bindHandlers: function (data) {
        // TODO: remove hard coded values
        $(document).on("igmapseriesmouseenter", function (evt, ui) {
            $("#map_chart_container").css({ opacity: 1, "-webkit-filter": "saturate(100%)" });
            if (ui.item && ui.item.Name && ui.item.Value && ui.item.Target) {
                $(".tooltip").remove();
                var index, tooltip;
                var removeTooltip = function (insideEv, insideUi) {
                        //D.U. 153603
                        var movedOutSideTheTolerance = Autosales.Helpers.isMouseOutsideOfTooltipTolerance(ui, insideUi);
                        if (movedOutSideTheTolerance) {
                            $(".tooltip").remove();
                            $(document).off("igmapseriesmousemove", removeTooltip);
                        }
                        
                    };
                var removeTooltipOnWrectChange = function(){
                        $(".tooltip").remove();
                        $(document).off("igmapwindowrectchanged", removeTooltipOnWrectChange);
                    };
                index = Autosales.Helpers.getIndexOfArrayObj(data, ui.item, "Id");
                if (Autosales.Helpers.isPhoneCheck()) {
                    tooltip = Autosales.Helpers.Map.getTooltip(ui.positionY, ui.positionX);
                } else {
                    // TODO: remove hard coded values
                    tooltip = Autosales.Helpers.Map.getTooltip(ui.positionY - (250 / 2), ui.positionX - (120 / 2));
                }
                tooltip.find(".tooltipMeasure").text(Autosales.Config.filters[0].options[ui.item.Measure]);
                tooltip.find(".tooltipValue").text(Autosales.Helpers.formatAmount(ui.item.Value, ui.item.Measure));
                tooltip.find(".tooltipTarget").text(Autosales.Helpers.formatAmount(ui.item.Target, ui.item.Measure));

                if (Autosales.Helpers.isDealerDashboard()) {
                    tooltip.find(".tooltipHeading").text(ui.item.Name);
                } else {
                    var anchor = $("<a></a>")
                        .text(ui.item.Name)
                        .attr("href", "dealer")
                        .attr("data-index", index)
                        .attr("data-region", ui.item.Region)
                        .attr("data-value", ui.item.Name);

                    if (Autosales.Helpers.isShownPanel("#dashboard")) {
                        anchor.attr("class", "jumpDetail");
                    }

                    if (Autosales.Helpers.isShownPanel("#status")) {
                        anchor.attr("class", "showDetail");
                    }

                    if (Autosales.Helpers.isShownPanel("#detail")) {
                        anchor.attr("class", "reloadDetail");
                    }

                    tooltip.find(".tooltipHeading").append(anchor);
                }

                $("body").append(tooltip);

                $(".tooltip").hover(
                    function () {
                        $(this).addClass("tooltipFocused");
                    }, function () {
                        $(this).removeClass("tooltipFocused");
                    });

                window.setTimeout(function () {
                    //D.U. 153603
                    if (!Autosales.Helpers.isPhoneCheck()) {
                        $(document).on("igmapseriesmousemove", removeTooltip);
                    }
                    $(document).on("igmapwindowrectchanged", removeTooltipOnWrectChange);
                }, 100);
            }
        });
    },
    unbindHandlers: function () {
        $(document).off("igmapwindowrectchanged");
        $(document).off("igmapseriesmouseenter");
    },
    animate: function (element, callback) {
        $(".tooltip").remove();
        element.stop().animate({ opacity: 0.5, zoomProperty: 0.5 }, {
            duration: 0,
            step: function (now, tween) {
                if (tween.prop === "zoomProperty") {
                    $(this).css('-webkit-transform', 'scale(' + now + ')');
                    $(this).css('-moz-transform', 'scale(' + now + ')');
                    // add Opera, MS etc. variants
                    $(this).css('transform', 'scale(' + now + ')');
                }
            },
            complete: function () {
                callback();
                element.stop().animate({ opacity: 1, zoomProperty: 1 }, {
                    duration: "slow",
                    step: function (now, tween) {
                        if (tween.prop === "zoomProperty") {
                            $(this).css('-webkit-transform', 'scale(' + now + ')');
                            $(this).css('-moz-transform', 'scale(' + now + ')');
                            // add Opera, MS etc. variants
                            $(this).css('transform', 'scale(' + now + ')');
                        }
                    }
                });
            }
        });
    }
}

// Define application models
Autosales.createNS("Autosales.Model");

Autosales.Model.Filters = function () {
    var _data = null,
        _url = Autosales.Config.apiUrl + "filter";

    // private methods
    var _loadData = function (callback) {
        $.ajax({
            url: _url,
            type: 'POST',
            data: {},
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {
                _data = result;
                return callback();
            }
        });
    }

    var _getDealers = function () {
        return _data.Dealers;
    }

    var _getRegions = function () {
        return _data.Regions;
    }

    // public API
    return {
        loadData: _loadData,
        dealers: _getDealers,
        regions: _getRegions
    };
}

Autosales.Model.ReportData = function (params) {
    var _data = null,
        _url = Autosales.Config.apiUrl + "reportdata";

    // private methods
    var _loadData = function (callback) {
        $.ajax({
            url: _url,
            type: 'POST',
            data: JSON.stringify(params),
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {
                if (result.Dealers.length === 0 || 
                    result.Products.length === 0 ||
                    result.Sales.length === 0 ||
                    result.SalesPeople.length === 0) {
                        Autosales.Helpers.LoadIndicator.destroy();
                        alert(Autosales.Resources.General.ErrorNoDataAvailableForSelectedPeriod);
                }
                _data = result;
                return callback();
            }
        });
    }

    var _reportData = function () {
        return _data;
    }

    // public API
    return {
        loadData: _loadData,
        reportData: _reportData,
    };
}

// Define application core
Autosales.createNS("Autosales.Core");

Autosales.Core.Filters = function (element, options) {
    // private variables
    var _element = null,
        _options = null,
        _filters = null,
        _homeButton = "#homeButton";

    // private methods
    var _createUI = function () {
        var tabsHeader = '<ul>', tabsContent = '',
            headerTemplateLI = "<li><a href='#filterTabs-${name}'><span> ${firstOption}</span><hr><span>${label}</span></a></li>",
            contentTemplateUL = "<div id='filterTabs-${name}'><ul><li><a href='#'>${Resources.Select} ${label} <span></span></a></li>",
            contentTemplateLI = "<li><a href='${name}' data-index='${index}' data-value='${value}' class='changeFilter'>${value} {{if ${extend} }} <div class='tabListIcon'><span>&nbsp;</span></div>{{/if}}</a></li>",
            extendedTemplateLI = "<li><a href='${extend}' data-index='${index}' data-value='${value}' data-${name}='${itemValue}' class='changeFilter'>${value}</a></li>";

        for (var i = 0; i < _options.filters.length; i++) {
            tabsHeader += $.ig.tmpl(headerTemplateLI, {
                name: _options.filters[i].name,
                label: _options.filters[i].label,
                firstOption: _options.filters[i].options[0]
            });

            tabsContent += $.ig.tmpl(contentTemplateUL, {
                name: _options.filters[i].name,
                label: _options.filters[i].label,
                Resources: Autosales.Resources.Filters
            });

            for (var j = 0; j < _options.filters[i].options.length; j++) {
                tabsContent += $.ig.tmpl(contentTemplateLI, {
                    name: _options.filters[i].name,
                    extend: _options.filters[i].extend !== undefined,
                    index: j,
                    value: _options.filters[i].options[j]
                });
            }

            tabsContent += '</ul>';

            if (_options.filters[i].extend !== undefined) {
                var array = _filters[_options.filters[i].extend + "s"]();
                var extendedList = array.map(function (item) {
                    return $.ig.tmpl(extendedTemplateLI, {
                        extend: _options.filters[i].extend,
                        index: item.ID,
                        value: item.Name,
                        name: _options.filters[i].name,
                        itemValue: item.Region
                    });
                }).join("");

                tabsContent += '<ul class="extendedFilter">' +
                    '<li><a href="#"><div class="backFilter"><span>' + Autosales.Resources.Filters.Back + '</span></div> ' + Autosales.Resources.Filters.Select + " " +
                    _options.filters[i].extendLabel + ' ' + Autosales.Resources.Filters.In + ' <span></span></a></li>' +
                    extendedList +
                '</ul>';
            }

            tabsContent += '</div>';
        }
        tabsHeader += '</ul>';

        $(_element).append('<div id="filterTabs">' + tabsHeader + tabsContent + '</div>');

        $("ul.extendedFilter > li > a[data-region]").parent().hide();

        $("div[id=filterTabs-region] ul li a span").first().text(Autosales.Resources.Filters.OrDealer);

        $("#filterTabs").tabs({
            active: false,
            collapsible: true,
            width: "100%",
            hide: {
                effect: "blind",
                duration: Autosales.Config.animationDuration
            },
            show: {
                effect: "blind",
                duration: Autosales.Config.animationDuration
            }
        });
    };

    var _unbindHandlers = function () {
        $(document).off("switchPanels");
        $(document).off("click", "a.changeFilter");
        $(document).off("click", "div.tabListIcon");
        $(document).off("click", "div.backFilter");
        $('#filterTabs').off("tabsbeforeactivate");
        $(document).off("disable");
        $(document).off("enable");
    };

    var _bindHandlers = function () {
        $('#filterTabs').on("tabsbeforeactivate", function (ev, ui) {
            if ($("#filter").hasClass("disabled")) {
                return false;
            }
        });

        $(document).on("switchPanels", function (ev) {
            var spans = $("a[href*='-region']").find("span");
            if (Autosales.Helpers.isDealerDashboard()) {
                $(spans[0]).text(_options.params.dealer);
                $(spans[1]).text(_options.params.regionName);
            } else {
                $(spans[0]).text(_options.params.regionName);
                $(spans[1]).text(Autosales.Resources.Filters.Region);
            }
        });
        $(document).on("click", "a.changeFilter", function (ev) {
            ev.preventDefault();
            var param = {
                type: $(this).attr("href"),
                index: $(this).attr("data-index"),
                value: $(this).attr("data-value")
            },
            $filterTab = $("a[href=#filterTabs-" + param.type + "]");

            if ($filterTab.length > 0) {
                $($filterTab.find("span")[0]).html(param.value);
                $("#filterTabs").tabs("option", "active", false);
                _options.params[param.type] = param.index;
                if (param.type === "region") {
                    _options.params.filterParam = _options.filters[1].options[param.index];
                    _options.params.regionName = param.value;

                    if (Autosales.Helpers.isDealerDashboard()) {
                        var e = jQuery.Event("switchPanels");
                        _options.params.filter = 1;
                        e.params = _options.params;
                        $(_options.panelID).trigger(e);
                        var r = $("#filterTabs-region > ul");
                        $(r[1]).hide();
                        $(r[0]).show();
                    }
                }
                $(_homeButton).trigger("click", { duration: 0 });
                var e = jQuery.Event("refreshPanels");
                e.params = _options.params;

                $(_options.panelID).trigger(e);
            }
            if (param.type === "dealer") {
                $("#filterTabs").tabs("option", "active", false);
                _options.params[param.type] = param.value;
                _options.params.regionName = $(this).attr("data-region");
                _options.params.filterParam = param.index;
                var ar = $("a[href=#filterTabs-region]").find("span");
                $(ar[0]).html(param.value);
                $(ar[1]).html($(this).attr("data-region"));

                if (Autosales.Helpers.isDealerDashboard()) {
                    $(_homeButton).trigger("click", { duration: 0 });
                    var e = jQuery.Event("refreshPanels");
                    e.params = _options.params;

                    $(_options.panelID).trigger(e);
                } else {
                    var switchPanelsEvent = jQuery.Event("switchPanels");
                    _options.params.filter = 3;
                    switchPanelsEvent.params = _options.params;
                    switchPanelsEvent.dealer = _filters.dealers().filter(function (item) {
                        return item.ID === param.index;
                    })[0];
                    $(_options.panelID).trigger(switchPanelsEvent);

                    $(_homeButton).trigger("click", { duration: 0 });
                    var refreshPanelsEvent = jQuery.Event("refreshPanels");
                    refreshPanelsEvent.params = _options.params;
                    refreshPanelsEvent.dealer = _filters.dealers().filter(function (item) {
                        return item.ID === param.index;
                    })[0];
                    $(_options.panelID).trigger(refreshPanelsEvent);
                }
            }

            return false;
        });
        $(document).on("click", "div.tabListIcon", function (ev) {
            ev.preventDefault();
            _showExtendedFilter(this, "region");
            Autosales.Helpers.scrollToTop();
            return false;
        });
        $(document).on("click", "div.backFilter", function (ev) {
            ev.preventDefault();
            _hideExtendedFilter("region");
            return false;
        });
        $(document).on("disable", function (ev) {
            $(_element).addClass("disabled");
        });
        $(document).on("enable", function (ev) {
            $(_element).removeClass("disabled");
        });
    };

    var _showExtendedFilter = function (element, type) {
        $("ul.extendedFilter > li > a[data-" + type + "='" + $(element).parent().attr("data-value") + "']").parent().show();
        var ul = $("#filterTabs-" + type + " > ul");
        $(ul[1]).find("li a span").text($(element).parent().attr("data-value"));
        $(ul[1]).stop().show({
            effect: 'slide',
            direction: 'right',
            queue: false,
            duration: Autosales.Config.animationDuration
        });
        $(ul[0]).stop().hide({
            effect: 'slide',
            direction: 'left',
            queue: false,
            duration: Autosales.Config.animationDuration
        });
    };

    var _hideExtendedFilter = function (type) {
        var ul = $("#filterTabs-" + type + " > ul");
        $(ul[1]).stop().hide({
            effect: 'slide',
            direction: 'right',
            queue: false,
            duration: Autosales.Config.animationDuration
        });
        $(ul[0]).stop().show({
            effect: 'slide',
            direction: 'left',
            queue: false,
            duration: Autosales.Config.animationDuration
        });
        $("ul.extendedFilter > li > a[data-" + type + "]").parent().hide();
    };

    var _init = function (element, options) {
        _element = "#" + element;
        _options = options;
        _filters = Autosales.Model.Filters();
        _filters.loadData(function () {
            _options.filters[1].options = _filters.regions().map(function (item) {
                return item.Name;
            });
            _createUI();
            _unbindHandlers();
            _bindHandlers();
        });
    };

    _init(element, options);

    // public API
    return {
        getRegionData: function () {
            return _filters.regions();
        }
    }
};

Autosales.Core.NavigationManager = function (element, options) {
    // private variables
    var _positions = [],
        _currentPosition = "dashboard",
        _element = null,
        _options = null,
        _backButtonID = "backButton",
        _homeButtonID = "homeButton",
        _infoButtonID = "infoButton",
        _infoPanelID = "infoPanel",
        _stepForward = Autosales.Helpers.isPhoneCheck() ? -320 : -310,
        _stepBack = Autosales.Helpers.isPhoneCheck() ? 320 : 310;

    // private members
    var _createUI = function () {
        var $backButton = $('<a href="#"><span>&nbsp;</span></a>').attr("id", _backButtonID),
            $homeButton = $('<a href="#"><span>&nbsp;</span></a>').attr("id", _homeButtonID),
            $infoButton = $('<a href="#"><span>&nbsp;</span></a>').attr("id", _infoButtonID),
            $title = $('<div id="headerContent"><span>&nbsp;</span><h4>' + _options.title + '</h4></div>');

        $(_element).append($backButton);
        $(_element).append($title);
        $(_element).append($homeButton);
        $(_element).append($infoButton);
    };

    var _unbindHandlers = function () {
        $(document).off("navigate");
        $(document).off("updateNavigationTitle");
        $(document).off("click", "#" + _backButtonID);
        $(document).off("click", "#" + _homeButtonID);
        $(document).off("click", "#" + _infoButtonID);
        $(document).off("click", "a.closeButton");
        $(document).off("click", "div.disabledOverlay");
    };

    var _bindHandlers = function () {
        $(document).on("navigate", function (ev) {
            Autosales.Helpers.scrollToTop();
            _doNavigate(ev.target);
        });
        $(document).on("updateNavigationTitle", function (ev) {
            _updateTitle(ev.title);
        });
        $(document).on("updateNavigation", function (ev) {
            _updateNavigation(ev.html);
        });
        $(document).on("click", "#" + _backButtonID, function (ev) {
            ev.preventDefault();
            var $infoPanel = $("#" + _infoPanelID);
            if (Autosales.Helpers.isPhoneCheck() && $infoPanel.length > 0) {
                $infoPanel.stop().hide({
                    effect: 'slide',
                    direction: 'right',
                    queue: false,
                    duration: Autosales.Config.animationDuration,
                    complete: function () {
                        $infoPanel.remove();
                    }
                });
            }

            if (!isAnimated) {
                _goBack(Autosales.Config.animationDuration);
            }
            return false;
        });
        $(document).on("click", "#" + _homeButtonID, function (ev, data) {
            if (isAnimated) {
                return false;
            }
            var $infoPanel = $("#" + _infoPanelID);
            if (Autosales.Helpers.isPhoneCheck() && $infoPanel.length > 0) {
                $infoPanel.stop().hide({
                    effect: 'slide',
                    direction: 'right',
                    queue: false,
                    duration: Autosales.Config.animationDuration,
                    complete: function () {
                        $infoPanel.remove();
                    }
                });
            }

            data = data || ev.data;
            ev.preventDefault();
            if (data !== undefined) {
                _goHome(data.duration);
            } else {
                _goHome(Autosales.Config.animationDuration);
            }
            return false;
        });
        $(document).on("click", "#" + _infoButtonID, function (ev) {
            ev.preventDefault();
            if (Autosales.Helpers.isPhoneCheck()) {
                _showInfoPanel();
            } else {
                _showInfoDialog();
            }
            return false;
        });
        $(document).on("click", "div.disabledOverlay", function (ev) {
            ev.preventDefault();
            if ($(ev.target).hasClass("enableClick") && !isAnimated) {
                _goBack(Autosales.Config.animationDuration);
            }
            return false;
        });
        $(document).on("click", "a.closeButton", function (ev) {
            ev.preventDefault();
            _goBack(Autosales.Config.animationDuration);
            return false;
        });
    };

    var _updateTitle = function (title) {
        if ($("#" + _backButtonID).css("display") === "none") {
            $("#headerContent > span:first").show();
        } else {
            $("#headerContent > span:first").hide();
        }
        $("#headerContent > h4").text(title);
    };

    var _updateNavigation = function (html) {
        $(".extendNavigation").remove();
        $("#headerContent").hide();
        $("#" + _homeButtonID).hide();
        $(_element).append($("<div class='extendNavigation'></div>").append(html));
    };

    var _doNavigate = function (position) {
        $(document).off("touchmove");
        $(".tooltip").remove();
        $("#filterTabs").tabs("option", "active", false);

        _positions.push(_currentPosition);
        _currentPosition = position;

        _doMove(_currentPosition, _stepForward, Autosales.Config.animationDuration);

        $("#" + _homeButtonID).show();
        $("#" + _backButtonID).show();
        $("#" + _infoButtonID).hide();

        var e = jQuery.Event("disable");
        $(document).trigger(e);
    };

    var _goBack = function (duration) {
        $(".extendNavigation").remove();
        $("#headerContent").show();
        $("#" + _homeButtonID).show();
        $(document).off("touchmove");
        $(".tooltip").remove();

        if (_positions.length > 0) {
            var e = jQuery.Event("hide" + _currentPosition);
            $(document).trigger(e);
            _doMove(null, _stepBack, duration);
            _currentPosition = _positions.pop();
            Autosales.Helpers.enablePanel("#" + _currentPosition);
        }
        if (_positions.length === 0) {
            $("#" + _homeButtonID).hide();
            $("#" + _backButtonID).hide();
            $("#" + _infoButtonID).show();

            var e = jQuery.Event("enable");
            $(document).trigger(e);

            if (Autosales.Helpers.isPhoneCheck()) {
                _updateTitle(Autosales.Resources.General.Title);
            }
        }
    };

    var _goHome = function (duration) {
        do {
            _goBack(0);
        } while (_positions.length > 0);
        $(_options.panelsID.join(", ")).css({ left: 0 });
    };

    var _doMove = function (position, step, duration) {
        var left,
            leftPosition = 1600,
            easingFunc = "linear";
        isAnimated = true;

        left = $(_options.filterID).css("left");
        left = left === "auto" ? 0 : parseInt(left, 10);
        $(_options.filterID).stop().animate({ left: left + step }, duration);

        if (_positions.length > 0) {
            for (var i = 0; i < _positions.length; i++) {
                left = $("#" + _positions[i]).css("left");
                left = left === "auto" ? 0 : parseInt(left, 10);
                $("#" + _positions[i]).stop().animate({
                    left: left + step
                }, duration, easingFunc, function () {
                    isAnimated = false;
                    $("#" + $(this).attr('id') + " .disabledOverlay").addClass("enableClick");
                });
            }
        }

        if (position !== null) {
            left = $("#" + position).css("left");
            left = left === "auto" ? 0 : parseInt(left, 10);
            $("#" + position).stop().animate({
                left: leftPosition
            }, 0, easingFunc, function () {
                isAnimated = false;
            });
        }
    };

    var _showInfoPanel = function () {
        $("body").append("<div id='" + _infoPanelID + "'>" +
            $.ig.tmpl(Autosales.Resources.General.ShowcaseInfo, {
                BaseUrl: Autosales.Config.baseUrl
            }) +
        "</div>");

        $("#" + _infoPanelID).height($(window).height() + 16).stop().show({
            effect: 'slide',
            direction: 'right',
            queue: false,
            duration: Autosales.Config.animationDuration
        });

        $("#" + _homeButtonID).show();
        $("#" + _backButtonID).show();
        $("#" + _infoButtonID).hide();

        var e = jQuery.Event("updateNavigationTitle");
        e.title = Autosales.Resources.General.AboutTitle;
        $(document).trigger(e);
    }

    var _showInfoDialog = function () {
        var element = "dialog";
        if ($('#' + element).length > 0) {
            $("#" + element).igDialog("option", "state", "opened");
        } else {    
            $("body").append("<div id='" + element + "' style='display:none;'>" +
                $.ig.tmpl(Autosales.Resources.General.ShowcaseInfo, {
                    BaseUrl: Autosales.Config.baseUrl
                }) +
            "</div>");

            $("#" + element).igDialog({
                state: "opened",
                modal: true,
                draggable: false,
                resizable: false,
                zIndex: 10000000,
                height: "507px",
                width: "700px"
            });

            $("#barcode").igQRCodeBarcode({
                height: "62px",
                width: "100%",
                data: Autosales.Config.baseUrl
            });
        }
    };

    var _init = function (element, options) {
        _element = "#" + element;
        _options = options;

        _unbindHandlers();
        _bindHandlers();

        _createUI();

        $("#" + _backButtonID).hide();
        $("#" + _homeButtonID).hide();
    };

    _init(element, options);
};

Autosales.Core.PanelsManager = function (element, options) {
    // private variables
    var _element = null,
        _options = null,
        _mapElement = null,
        _map = "#map",
        _centerRadius = 10,
        _styleIndex = "REGION",
        _homeButton = $("a#homeButton")
       
    // private methods
    var _createMap = function () {
        var windowRect = {
            left: 0.2470,
            top: 0.3143,
            width: 0.127,
            height: 0.127
        };

        _mapElement = $(_map);
        Autosales.Helpers.Map.init(_mapElement, {
            height: $(window).height() + 120,
            windowRect: windowRect
        });
    };

    var _unbindHandlers = function () {
        $(document).off("refreshPanels");
        $(document).off("switchPanels");
        for (var i = 1; i < _options.panels.length; i++) {
            $(document).off("show" + _options.panels[i]);
            $(document).off("hide" + _options.panels[i]);
        }
        //Autosales.Helpers.Map.unbindHandlers();
    };

    var _bindHandlers = function () {
        var zoomIn = {
            opacity: 0.5,
            zoom: 0.5
        },
        zoomOut = {
            opacity: 1,
            zoom: 1
        },
        leftPosition = 1600;

        $(_element).on("refreshPanels", function (ev) {
            Autosales.Helpers.LoadIndicator.init(_element);
            _options.params = ev.params;
            var rd = Autosales.Model.ReportData(_options.params);

            rd.loadData(function () {
                _options.data = rd.reportData();
                _initPanel(_options.panels[0]);
                if (Autosales.Helpers.isPhoneCheck() === false) {
                    Autosales.Helpers.Map.setDealersSeries(_mapElement, _options.data.Dealers.map(function (item) {
                        item.Measure = _options.params.measure;
                        return item;
                    }));
                    if (_options.data.Dealers[0]) {
                        Autosales.Helpers.Map.setStateStyle(_mapElement, _styleIndex, _options.data.Dealers[0].Region);
                        Autosales.Helpers.Map.center(_mapElement, {
                            latitude: _options.data.Dealers[0].Latitude,
                            longitude: _options.data.Dealers[0].Longitude,
                            radius: _centerRadius
                        });
                    }
                }
                Autosales.Helpers.scrollToTop();
                Autosales.Helpers.LoadIndicator.destroy();
            });
        });

        $(_element).on("switchPanels", function (ev) {
            if (Autosales.Helpers.isPhoneCheck() === false) {
                Autosales.Helpers.Map.animate(_mapElement, function () {
                    _homeButton.trigger("click", { duration: 0 });
                    $(_element).toggleClass("dealer");
                });
            } else {
                var panelsID = _options.panels.map(function (item) {
                    return "#" + item;
                });

                $(panelsID.join(", ")).stop().animate(zoomIn, {
                    duration: 0,
                    complete: function () {
                        _homeButton.trigger("click", { duration: 0 });
                        $(_element).toggleClass("dealer");
                        $(panelsID.join(", ")).stop().animate(zoomOut, {
                            duration: Autosales.Config.animationDuration
                        });
                    }
                });
            }
        });

        for (var i = 1; i < _options.panels.length; i++) {
            $(document).on("show" + _options.panels[i], function (ev) {
                var e = jQuery.Event("navigate");
                e.target = ev.type.replace("show", "");
                $(document).trigger(e);
                _initPanel(e.target, ev.options);
            });

            $(document).on("hide" + _options.panels[i], function (ev) {
                $("#" + ev.type.replace("hide", "")).stop().animate({
                    left: leftPosition
                },
                ev.duration,
                function () {
                    $(this).empty();
                    $(this).hide();
                });
            });
        }
    };

    var _initPanel = function (element, options) {
        switch (element) {
            case "dashboard":
                $(".panel").empty().hide();
                var dashboard = Autosales.Core.Panels.Dashboard("#" + element, _options);
                break;
            case "status":
                _options.view = options.view;
                var status = Autosales.Core.Panels.Status("#" + element, _options);
                break;
            case "detail":
                _options.view = options.view;
                var detail = Autosales.Core.Panels.Detail("#" + element, _options);
                break;
            default:
                throw new Error(Autosales.Resourses.General.ErrorInitPanel);
        }
    };

    var _init = function (element, options) {
        var i = 0, panel;
        _element = "#" + element;
        _options = options;

        for (i = 0; i < _options.panels.length; i++) {
            panel = $("<div></div>").hide().addClass("panel").attr("id", _options.panels[i]);
            $(_element).append(panel);
        }

        if (Autosales.Helpers.isPhoneCheck() === false) {
            $(_element).wrap("<div id='" + _map.replace("#", "") + "'></div>");
            _createMap();
        }

        Autosales.Helpers.LoadIndicator.init(_element);
        var reportData = Autosales.Model.ReportData(_options.params);
        reportData.loadData(function () {
            _options.data = reportData.reportData();
            _initPanel(_options.panels[0]);

            if (Autosales.Helpers.isPhoneCheck() === false) {
                Autosales.Helpers.Map.setStateStyle(_mapElement, _styleIndex, _options.data.Dealers[0].Region);
                Autosales.Helpers.Map.setDealersSeries(_mapElement, _options.data.Dealers.map(function (item) {
                    item.Measure = _options.params.measure;
                    return item;
                }));
                Autosales.Helpers.Map.center(_mapElement, {
                    latitude: _options.data.Dealers[0].Latitude,
                    longitude: _options.data.Dealers[0].Longitude,
                    radius: _centerRadius
                });
            }

            Autosales.Helpers.scrollToTop();
            Autosales.Helpers.LoadIndicator.destroy();
        });
        _unbindHandlers();
        _bindHandlers();
    };

    _init(element, options);
};

Autosales.createNS("Autosales.Core.Panels");

// Define dashboard template
Autosales.createNS("Autosales.Templates.Panels.Dashboard");

Autosales.Templates.Panels.Dashboard = [
    "<div class='section regional-sales'>",
        "<h2>${headerText} ${Resources.Sales}</h2>",
        "<span class='highlight'>${RegionalSales}</span> ",
        "<span> <strong>${percent}%</strong> ${Resources.Target} ",
        "<strong>${RegionalSalesTarget}</strong></span>",
        "<div id='bulletGraph'></div>",
    "</div>",
    "<div class='section period-sales'>",
        "<h2>${PeriodSales} ${Resources.Sales}</h2>",
        "<div class='boxWrapper sales-highlight'><span>${RegionalSales}</span> <span>${Resources.Current} ${PeriodSales}</span></div>",
        "<div class='boxWrapper'><span>${PreviousRegionalSales}</span> <span>${Resources.Previous} ${PeriodSales}</span></div>",
        "<div class='boxWrapper'><span class='{{if ${percentChange} < 0 }} negative{{else }} positive {{/if}}' ><span class='arrow'>&nbsp;</span>${printPercentChange}%</span> ",
        "<span><strong>% ${Resources.Change}</strong></span></div>",
        "<div id='chart'></div>",
    "</div>",
    "<div class='section regional-sales-status'>",
        "<h2>${headerText} ${Resources.SalesStatus} <a href='#' id='showProducts'>&nbsp;</a></h2>",
        "<div id='${prefix}'>",
            "<div id='${prefix}Tabs'>",
              "<ul>",
                "<li><a href='#${prefix}Tabs-${firstTab.type}'>${firstTab.label}</a></li>",
                "<li><a href='#${prefix}Tabs-car-models'>${Resources.CarModels}</a></li>",
              "</ul>",
              "<div id='${prefix}Tabs-${firstTab.type}'>",
                "<div class='${firstTab.className}'></div>",
              "</div>",
              "<div id='${prefix}Tabs-car-models'>",
                 "<div class='carModels'></div>",
              "</div>",
            "</div>",
        "</div>",
    "</div>",
    "<div class='section top-regions'>",
        "<h2>${Resources.NationalTopRegions} <a href='#' id='showRegions'>&nbsp;</a></h2>",
        "<div id='nationalTopRegions'></div>",
    "</div>"
].join('\n');

Autosales.Core.Panels.Dashboard = function (element, options) {
    // private variables
    var _element = null,
        _options = null,
        _map = $("#map");

    // private methods
    var _createUI = function () {
        var percentChange = Math.ceil((_options.data.RegionalSales / _options.data.PreviousRegionalSales) * 100) - 100,
            // TODO: add to Autosales.Config namespace
            type = Autosales.Helpers.isDealerDashboard() ? 1 : 0,
            firstTab = [{
                label: Autosales.Resources.Dashboard.DealershipsLabel,
                type: "dealership",
                className: "dealers"
            }, {
                label: Autosales.Resources.Dashboard.SalesPersonLabel,
                type: "salesPerson",
                className: "salesPersons"
            }],
            data = {
                headerText: Autosales.Config.texts[type].header,
                percent: Math.ceil((_options.data.RegionalSales / _options.data.RegionalSalesTarget) * 100),
                RegionalSales: Autosales.Helpers.formatAmount(_options.data.RegionalSales, _options.params.measure),
                RegionalSalesTarget: Autosales.Helpers.formatAmount(_options.data.RegionalSalesTarget, _options.params.measure),
                percentChange: percentChange,
                printPercentChange: percentChange < 0 ? percentChange * -1 : percentChange,
                PeriodSales: Autosales.Config.filters[2].options[_options.data.Period],
                PreviousRegionalSales: Autosales.Helpers.formatAmount(_options.data.PreviousRegionalSales, _options.params.measure),
                prefix: "status2",
                firstTab: firstTab[type],
                Resources: Autosales.Resources.Dashboard
            },
            regionsSelector = "#nationalTopRegions",
            productsSelector = "#status2 .carModels",
            dealersSelector = "#status2 .dealers",
            salesPersonSelector = "#status2 .salesPersons",
            bulletGraphSelector = "#bulletGraph",
            chartSelector = "#chart";

        $(_element).empty();
        $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Dashboard, data));

        _createBulletGraph(bulletGraphSelector);
        _createDataChart(chartSelector);
        $("#" + data.prefix + "Tabs").tabs();
        if (_options.data.Products) {
            _createGridWithBulletGraph(productsSelector, _options.data.Products.slice(0, 3));
        }
        if (!Autosales.Helpers.isDealerDashboard() && _options.data.Dealers) {
            _createGridWithBulletGraph(dealersSelector, _options.data.Dealers.slice(0, 3));
        }
        if (Autosales.Helpers.isDealerDashboard() && _options.data.SalesPeople) {
            _createGridWithBulletGraph(salesPersonSelector, _options.data.SalesPeople.slice(0, 3));
        }
        if (_options.data.Regions) {
            _createRegionGrid(regionsSelector, _options.data.Regions.slice(0, 3));
        }
    };

    var _unbindHandlers = function () {
        $(document).off('click', '#showProducts');
        $(document).off('click', '#showRegions');
        $(document).off("click", "a.jumpDetail");
    };

    var _bindHandlers = function () {
        var options = { data: _options.data };
        $("#showProducts, [id*='status2Tabs-'], .regional-sales-status > h2").click(function (ev) {
            ev.preventDefault();
            if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
                isAnimated = true;
                Autosales.Helpers.disablePanel(_element);
                setTimeout(function () {
                    var eventHideDetail = jQuery.Event("hidedetail");
                    $(document).trigger(eventHideDetail);

                    var eventShowStatus = jQuery.Event("showstatus");
                    _options.view = "sales";
                    _options.activeTabIndex = _getActiveTabIndex();
                    eventShowStatus.options = _options;
                    $(document).trigger(eventShowStatus);
                }, 100);
            }

            return false;
        });

        $("div.top-regions").click(function (ev) {
            ev.preventDefault();
            if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
                isAnimated = true;
                Autosales.Helpers.disablePanel(_element);
                setTimeout(function () {
                    var eventHideDetail = jQuery.Event("hidedetail");
                    $(document).trigger(eventHideDetail);

                    var eventShowStatus = jQuery.Event("showstatus");
                    _options.view = "regions";
                    eventShowStatus.options = _options;
                    $(document).trigger(eventShowStatus);
                }, 100);
            }

            return false;
        });

        $(document).on("click", "a.jumpDetail", function (ev) {
            ev.preventDefault();
            if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
                $(".tooltip").remove();
                isAnimated = true;
                Autosales.Helpers.disablePanel(_element);
                var param = {
                    type: $(this).attr("href"),
                    index: $(this).attr("data-index"),
                    value: $(this).attr("data-value")
                };

                setTimeout(function () {
                    var e = jQuery.Event("showdetail");
                    e.options = {};
                    e.options = _options;
                    e.options.view = param.type;
                    e.options.index = param.index;
                    e.options.leftPostion = -310;
                    $(document).trigger(e);
                }, 100);
            }
            return false;
        });

        Autosales.Helpers.Map.bindHandlers(_options.data.Dealers);

        $(document).on("igmapwindowrectchanged", function (evt, ui) {
            //D.U. 153623
            var widthOfHide = 0.13;

            if (ui.newWidth > widthOfHide) {
                Autosales.Helpers.Map.removeDealersSeries(_map);
            } else {
                Autosales.Helpers.Map.setDealersSeries(_map, _options.data.Dealers.map(function (item) {
                    item.Measure = _options.params.measure;
                    return item;
                }));
            }
        });
    };

    var _getActiveTabIndex = function () {
        var $tabList = $("#status2 ul li");

        for (var i = 0; i < $tabList.length; i++) {
            if ($($tabList[i]).hasClass("ui-state-active")) {
                return i;
            }
        }

        return 0;
    }

    var _createBulletGraph = function (element) {
        var config = Autosales.Config.bulletGraph[_options.params.measure],
            brush = Autosales.Config.bulletGraphBrush[Autosales.Helpers.isDealerDashboard() ? 1 : 0].ranges;

        setTimeout(function () {
            Autosales.Helpers.BulletGraph(element, {
                height: "30px",
                brush: brush,
                config: config,
                data: {
                    targetValue: _options.data.RegionalSalesTarget,
                    value: _options.data.RegionalSales
                }
            });
        }, 100);
    };

    var _createDataChart = function (element) {
        var brush = Autosales.Config.dataChartBrush[Autosales.Helpers.isDealerDashboard() ? 1 : 0].series;

        setTimeout(function () {
            $(element).igDataChart({
                width: "100%",
                height: "85px",
                dataSource: _options.data.Sales,
                dataSourceType: "json",
                gridMode: "none",
                plotAreaBackground: "rgba(0, 0, 0, 0)",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    label: "Date",
                    formatLabel: function (value) {
                        return Autosales.Helpers.formatMonthFromDate(value);
                    }
                }, {
                    name: "yAxis",
                    type: "numericY",
                    labelVisibility: "collapsed"
                }],
                series: [{
                    name: "series1",
                    type: "area",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    dataSource: _options.data.PreviousSales,
                    dataSourceType: "json",
                    valueMemberPath: "Value",
                    thickness: 2,
                    markerType: "circle",
                    markerOutline: brush[2],
                    markerBrush: brush[2],
                    brush: brush[3],
                    outline: brush[3]
                }, {
                    name: "series2",
                    type: "area",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    valueMemberPath: "Value",
                    thickness: 2,
                    markerType: "circle",
                    markerOutline: brush[0],
                    markerBrush: brush[0],
                    brush: brush[1],
                    outline: brush[1]
                }],
                windowResponse: "immediate"
            });
        }, 100);
    };

    var _createGridWithBulletGraph = function (element, data) {
        var id = Autosales.Helpers.uniqueId(),
            brush = Autosales.Config.bulletGraphBrush[Autosales.Helpers.isDealerDashboard() ? 1 : 0].ranges,
            config = Autosales.Config.bulletGraphInGrid[_options.params.measure];

        $(element).attr("id", id);

        setTimeout(function () {
            $("#" + id).igGrid({
                dataSource: data,
                autoGenerateColumns: false,
                dataType: "json",
                rowsRendered: function (evt, ui) {
                    $("#" + id + " .bulletGraphGrid").each(function (i) {
                        Autosales.Helpers.BulletGraph(this, {
                            height: "28px",
                            config: config,
                            data: {
                                targetValue: data[i].Target,
                                value: data[i].Value
                            },
                            brush: brush
                        });
                    });
                    $("#" + id + " span.number").each(function (i) {
                        $(this).html("#" + (i + 1))
                    });
                },
                columns: [{
                    headerText: Autosales.Resources.Dashboard.Name,
                    key: "Name",
                    dataType: "string",
                    template: "<span class='number'></span> ${Name}"
                }, {
                    headerText: Autosales.Resources.Dashboard.Graph,
                    key: "Graph",
                    rowspan: 1,
                    dataType: "string",
                    template: "<div class='bulletGraphGrid'></div>"
                }]
            });
        }, 100);
    };

    var _createRegionGrid = function (element, data) {
        setTimeout(function () {
            $(element).igGrid({
                dataSource: data,
                autoGenerateColumns: false,
                dataType: "json",
                rowsRendered: function (evt, ui) {
                    $("#nationalTopRegions span.number").each(function (i) {
                        $(this).html("#" + (i + 1))
                    });
                },
                showHeader: false,
                columns: [{
                    headerText: Autosales.Resources.Dashboard.Name,
                    key: "Name",
                    dataType: "string",
                    template: "<span class='number'></span> ${Name}"
                }]
            });
        }, 100);
    }

    var _init = function (element, options) {
        _element = element;
        _options = options;

        _createUI();
        _unbindHandlers();
        _bindHandlers();

        $(_element).show();
    }

    _init(element, options);
};

// Define status template views
Autosales.createNS("Autosales.Templates.Panels.Status");

Autosales.Templates.Panels.Status.Sales = [
    "<h1>${headerText} ${Resources.SalesStatus} <a href='#' class='closeButton'>&nbsp;</a> </h1>",
    "<div class='section'>",
        "<div id='${prefix}'>",
            "<div id='${prefix}Tabs'>",
              "<ul>",
                "<li><a href='#${prefix}Tabs-${firstTab.type}'>${firstTab.label}</a></li>",
                "<li><a href='#${prefix}Tabs-car-models'>${Resources.CarModels}</a></li>",
              "</ul>",
              "<div id='${prefix}Tabs-${firstTab.type}'>",
                "<div class='${firstTab.className}'></div>",
              "</div>",
              "<div id='${prefix}Tabs-car-models'>",
                 "<div class='carModels'></div>",
              "</div>",
            "</div>",
        "</div>",
    "</div>"
].join('\n');

Autosales.Templates.Panels.Status.SalesMobile = [
    "<div class='section'>",
        "<div id='${prefix}'>",
            "<div id='${prefix}Tabs'>",
              "<ul>",
                "<li><a href='#${prefix}Tabs-${firstTab.type}'>${firstTab.label}</a></li>",
                "<li><a href='#${prefix}Tabs-car-models'>${Resources.CarModels}</a></li>",
              "</ul>",
              "<div id='${prefix}Tabs-${firstTab.type}'>",
                "<div class='${firstTab.className}'></div>",
              "</div>",
              "<div id='${prefix}Tabs-car-models'>",
                 "<div class='carModels'></div>",
              "</div>",
            "</div>",
        "</div>",
        "<div id='viewStatus'>",
            "<a href='grid' class='changeViewStatus mobileGridIcon'>&nbsp;</a>",
            "<a href='graph' class='changeViewStatus mobileGraphIcon'>&nbsp;</a>",
            "<a href='map' class='changeViewStatus mobileMapIcon'>&nbsp;</a>",
        "</div>",
    "</div>"
].join('\n');

Autosales.Templates.Panels.Status.Region = [
    "<h1>${Resources.NationalTopRegions} <a href='#' class='closeButton'>&nbsp;</a></h1>",
    "<div class='section'>",
        "<div id='nationalTopRegions1'></div>",
    "</div>"
].join('\n');

Autosales.Templates.Panels.Status.RegionMobile = [
    "<div class='section'>",
        "<div id='nationalTopRegions1'></div>",
    "</div>"
].join('\n');

Autosales.Core.Panels.Status = function (element, options) {
    // private variables
    var _element = null,
        _options = null,
        _panelSelector = "#status1",
        _regionSelector = "#nationalTopRegions1",
        _productSelector = "#status1 .carModels",
        _salesPersonSelector = "#status1 .salesPersons",
        _dealersSelector = "#status1 .dealers";

    // private methods
    var _views = {
        sales: function () {
            var type = Autosales.Helpers.isDealerDashboard() ? 1 : 0,
                firstTab = [{
                    label: Autosales.Resources.Status.DealershipsLabel,
                    type: "dealership",
                    className: "dealers"
                }, {
                    label: Autosales.Resources.Status.SalesPersonLabel,
                    type: "salesPerson",
                    className: "salesPersons"
                }],
                data = {
                    prefix: _panelSelector.replace("#", ""),
                    firstTab: firstTab[type],
                    headerText: Autosales.Config.texts[type].header,
                    Resources: Autosales.Resources.Status
                };

            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Status.Sales, data));

            $("#" + data.prefix + "Tabs").tabs({
                active: _options.activeTabIndex
            });

            _createSalesGrid(_productSelector, _options.data.Products, "product");

            if (Autosales.Helpers.isDealerDashboard()) {
                $(_salesPersonSelector).hide();
                _createSalesGrid(_salesPersonSelector, _options.data.SalesPeople, "salesPerson");

                setTimeout(function () {
                    $(_salesPersonSelector).igGrid("option", "height", "543px");
                    $(_salesPersonSelector).show();
                }, 101);
            } else {
                $(_dealersSelector).hide();
                _createSalesGrid(_dealersSelector, _options.data.Dealers, "dealer");

                setTimeout(function () {
                    $(_dealersSelector).igGrid("option", "height", "543px");
                    $(_dealersSelector).show();
                }, 101);
            }
        },
        salesMobile: function () {
            var type = Autosales.Helpers.isDealerDashboard() ? 1 : 0,
                firstTab = [{
                    label: Autosales.Resources.Status.DealershipsLabel,
                    type: "dealership",
                    className: "dealers"
                }, {
                    label: Autosales.Resources.Status.SalesPersonLabel,
                    type: "salesPerson",
                    className: "salesPersons"
                }],
                data = {
                    prefix: _panelSelector.replace("#", ""),
                    firstTab: firstTab[type],
                    headerText: Autosales.Config.texts[type].header,
                    Resources: Autosales.Resources.Status
                };

            var e = jQuery.Event("updateNavigationTitle");
            e.title = Autosales.Config.texts[type].header + " " + Autosales.Resources.Status.SalesStatus;
            $(document).trigger(e);

            $(_element).empty();
            $(_element).height($(window).height() + 16);
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Status.SalesMobile, data));

            $("#" + data.prefix + "Tabs").tabs({
                active: _options.activeTabIndex
            });

            _create.gridMobile(_productSelector, _options.data.Products, "product");

            if (Autosales.Helpers.isDealerDashboard()) {
                _create.gridMobile(_salesPersonSelector, _options.data.SalesPeople, "salesPerson");
            } else {
                _create.gridMobile(_dealersSelector, _options.data.Dealers, "dealer");
            }
        },
        regions: function () {
            var data = {
                Resources: Autosales.Resources.Status
            };
            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Status.Region, data));

            _createRegionGrid(_regionSelector, _options.data.Regions, "region");
        },
        regionsMobile: function () {
            var e = jQuery.Event("updateNavigationTitle");
            e.title = Autosales.Resources.Status.NationalTopRegions;
            $(document).trigger(e);

            $(_element).empty();
            $(_element).height($(window).height() + 16);
            $(_element).append(Autosales.Templates.Panels.Status.RegionMobile);

            _createRegionGrid(_regionSelector, _options.data.Regions, "region");
        }
    };

    var _unbindHandlers = function () {
        $("a.changeViewStatus").off("click");
        $(document).off("click", "a.showDetail");
        //Autosales.Helpers.Map.unbindHandlers();
    };

    var _bindHandlers = function () {
        $(document).on("touchmove", function (ev) {
            return false;
        });
        $("a.changeViewStatus").on("click", function (ev) {
            ev.preventDefault();
            var view = $(this).attr("href") + "Mobile";

            _create[view](_productSelector, _options.data.Products, "product");

            if (Autosales.Helpers.isDealerDashboard()) {
                _create[view](_salesPersonSelector, _options.data.SalesPeople, "salesPerson");
            } else {
                _create[view](_dealersSelector, _options.data.Dealers, "dealer");
            }

            return false;
        });
        $(document).on("click", "a.showDetail", function (ev) {
            ev.preventDefault();
            if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
                $(".tooltip").remove();
                isAnimated = true;
                Autosales.Helpers.disablePanel(_element);
                var param = {
                    type: $(this).attr("href"),
                    index: $(this).attr("data-index"),
                    value: $(this).attr("data-value")
                };

                setTimeout(function () {
                    var e = jQuery.Event("showdetail");
                    e.options = {};
                    e.options = _options;
                    e.options.view = param.type;
                    e.options.index = param.index;
                    $(document).trigger(e);
                }, 100);
            }
            return false;
        });
    };

    var _createSalesGrid = function (element, data, type) {
        var id = Autosales.Helpers.uniqueId(),
                brush = Autosales.Config.bulletGraphBrush[Autosales.Helpers.isDealerDashboard() ? 1 : 0].ranges,
                config = Autosales.Config.bulletGraphInGrid[_options.params.measure];

        $(element).attr("id", id);

        setTimeout(function () {
            $("#" + id).igGrid({
                dataSource: data,
                autoGenerateColumns: false,
                width: "100%",
                dataType: "json",
                cellClick: function (evt, ui) {
                    _cellClick(ui.rowIndex, type);
                },
                rowsRendered: function (evt, ui) {
                    $(element + " .bulletGraphGrid").each(function (i) {
                        var self = this;
                        setTimeout(function () {
                            Autosales.Helpers.BulletGraph(self, {
                                height: "36px",
                                config: config,
                                data: {
                                    targetValue: data[i].Target,
                                    value: data[i].Value
                                },
                                brush: brush
                            });
                        }, 100);
                    });
                },
                features: [{
                    name: "Selection",
                    mode: "row",
                    multipleSelection: false
                    
                }],
                columns: [{
                    headerText: Autosales.Resources.Status.Name,
                    width: "18%",
                    key: "Name",
                    dataType: "string",
                    temaplte: "${Name}"
                }, {
                    headerText: Autosales.Resources.Status.ActualSales,
                    width: "18%",
                    key: "Value",
                    dataType: "number",
                    template: "${Value}",
                    formatter: function (val) {
                        return Autosales.Helpers.formatAmount(val, _options.params.measure);
                    }
                }, {
                    headerText: "",
                    width: "34%",
                    key: "Graph",
                    dataType: "string",
                    template: "<div class='bulletGraphGrid'></div>"
                }, {
                    headerText: Autosales.Resources.Status.Target,
                    width: "15%",
                    key: "Target",
                    dataType: "number",
                    temaplte: "${Target}",
                    formatter: function (val) {
                        return Autosales.Helpers.formatAmount(val, _options.params.measure);
                    }
                }, {
                    headerText: "%",
                    width: "15%",
                    key: "Percent",
                    dataType: "string",
                    template: "<span>${Percent}%</span><span class='clickRight'>&nbsp;</span>"
                }]
            });
        }, 100);
    };

    var _createRegionGrid = function (element, data, type) {
        setTimeout(function () {
            $(element).igGrid({
                dataSource: data,
                autoGenerateColumns: false,
                dataType: "json",
                cellClick: function (evt, ui) {
                    if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
                        isAnimated = true;
                        Autosales.Helpers.disablePanel(_element);
                        setTimeout(function () {
                            var e = jQuery.Event("showdetail");
                            e.options = _options;
                            e.options.view = type;
                            e.options.index = ui.rowIndex;
                            e.options.item = data[ui.rowIndex].Name;
                            $(document).trigger(e);
                        }, 100);
                    }
                },
                features: [{
                    name: "Selection",
                    mode: "row",
                    multipleSelection: false
                }],
                columns: [{
                    headerText: Autosales.Resources.Status.Name,
                    key: "Name",
                    dataType: "string",
                    temaplte: "${Name}",
                }, {
                    headerText: Autosales.Resources.Status.ActualSales,
                    key: "Value",
                    dataType: "number",
                    temaplte: "${Value}",
                    formatter: function (val) { return Autosales.Helpers.formatAmount(val, _options.params.measure); }
                }, {
                    headerText: Autosales.Resources.Status.Target,
                    key: "Target",
                    dataType: "number",
                    template: "${Target} <span class='clickRight'>&nbsp;</span>",
                    formatter: function (val) { return Autosales.Helpers.formatAmount(val, _options.params.measure); }
                }]
            });
        }, 100);
    };

    var _create = {
        gridMobile: function (element, data, type) {
            var $el = $(_assignIdToElement(element));

            _destroyWidgetInView($el);
            setTimeout(function () {
                $el.igGrid({
                    dataSource: data,
                    autoGenerateColumns: false,
                    width: "100%",
                    height: $(window).height() - 74,
                    dataType: "json",
                    cellClick: function (evt, ui) {
                        if (Autosales.Helpers.isEnabledPanel(_element)) {
                            _cellClick(ui.rowIndex, type);
                        }
                    },
                    features: [{
                        name: "Selection",
                        mode: "row",
                        multipleSelection: false
                    }],
                    columns: [{
                        headerText: Autosales.Resources.Status.Name,
                        width: "28%",
                        key: "Name",
                        dataType: "string",
                        template: "${Name}"
                    }, {
                        headerText: Autosales.Resources.Status.Actual,
                        width: "28%",
                        key: "Value",
                        dataType: "number",
                        template: "${Value}",
                        formatter: function (val) { return Autosales.Helpers.formatAmount(val, _options.params.measure); },
                    }, {
                        headerText: Autosales.Resources.Status.Target,
                        width: "28%",
                        key: "Target",
                        dataType: "number",
                        template: "{Target}",
                        formatter: function (val) { return Autosales.Helpers.formatAmount(val, _options.params.measure); }
                    }, {
                        headerText: "%",
                        width: "16%",
                        key: "Percent",
                        dataType: "string",
                        template: "<span>${Percent}%</span><span class='clickRight'>&nbsp;</span>"
                    }]
                });
            }, 100)
        },
        graphMobile: function (element, data, type) {
            var $el = $(_assignIdToElement(element)),
                brush = Autosales.Config.bulletGraphBrush[Autosales.Helpers.isDealerDashboard() ? 1 : 0].ranges,
                config = Autosales.Config.bulletGraph[_options.params.measure];

            _destroyWidgetInView($el);

            setTimeout(function () {
                $el.igGrid({
                    dataSource: data,
                    autoGenerateColumns: false,
                    width: "100%",
                    height: $(window).height() - 74,
                    dataType: "json",
                    rowsRendered: function (evt, ui) {
                        $(element + " .bulletGraphGrid").each(function (i) {
                            Autosales.Helpers.BulletGraph(this, {
                                height: "30px",
                                width: "90%",
                                data: {
                                    targetValue: data[i].Target,
                                    value: data[i].Value
                                },
                                config: config,
                                brush: brush
                            });
                        });
                    },
                    features: [{
                        name: "Selection",
                        mode: "row",
                        multipleSelection: false,
                        cellClick: function (evt, ui) {
                            if (Autosales.Helpers.isEnabledPanel(_element)) {
                                _cellClick(ui.rowIndex, type);
                            }
                        },
                    }],
                    columns: [{
                        headerText: Autosales.Resources.Status.Name,
                        width: "27%",
                        key: "Name",
                        dataType: "string",
                        template: "${Name}"
                    }, {
                        headerText: Autosales.Resources.Status.Target,
                        width: "73%",
                        key: "Graph",
                        dataType: "string",
                        template: "<div class='bulletGraphGrid'></div><span class='clickRight'>&nbsp;</span>"
                    }]
                });
            }, 100);
        },
        mapMobile: function (element, data, type) {
            var $el = $(_assignIdToElement(element)),
                styleIndex = "REGION";

            _destroyWidgetInView($el);

            if (type === "dealer") {
                Autosales.Helpers.Map.init($el, {
                    height: $(window).height() - 74,
                });

                setTimeout(function () {
                    Autosales.Helpers.Map.setStateStyle($el, styleIndex, data[0].Region);
                    Autosales.Helpers.Map.setDealersSeries($el, data.map(function (item) {
                        item.Measure = _options.params.measure;
                        return item;
                    }));
                }, 100);

                // S.T. #153597
                $(document).on("igmaprefreshcompleted", function (ev, ui) {
                    if (!centeredMap) {
                        var gridArea = $el.igMap("option", "gridAreaRect");
                        if (isNaN(gridArea.width) || gridArea.width == 0 ||
                            isNaN(gridArea.height) || gridArea.height == 0) {
                            return;
                        }
                        centeredMap = true;
                        setTimeout(function () {
                            Autosales.Helpers.Map.center($el, {
                                latitude: data[0].Latitude,
                                longitude: data[0].Longitude,
                                radius: 1
                            });
                        }, 100);
                    }
                });
            }
        }
    };

    var _cellClick = function (index, type) {
        if (Autosales.Helpers.isEnabledPanel(_element) && !isAnimated) {
            isAnimated = true;
            Autosales.Helpers.disablePanel(_element);
                setTimeout(function () {
                    var e = jQuery.Event("showdetail");
                    e.options = {};
                    e.options = _options;
                    e.options["view"] = type;
                    e.options["index"] = index;
                    $(document).trigger(e);
                }, 100);
            }
    };

    var _assignIdToElement = function (element) {
        var id = null, $el = $(element);

        if ($el.attr("id") === undefined) {
            id = Autosales.Helpers.uniqueId();
            $el.attr("id", id);
        } else {
            id = $el.attr("id");
        }

        return "#" + id;
    };

    var _destroyWidgetInView = function ($widget) {
        if ($widget.find("#" + $widget.attr("id") + "_chart_container").length === 1) {
            $(document).off("igmaprefreshcompleted");
            centeredMap = false;
            $widget.igMap('destroy');
        }

        if ($widget.find("#" + $widget.attr("id") + "_table_container").length === 1) {
            $widget.igGrid('destroy');
        }
    };

    var _init = function (element, options) {
        var leftPosition = Autosales.Helpers.isPhoneCheck() ? -320 : -310,
            easingFunc = "linear";

        _element = element;
        _options = options;

        $(_element).empty();

        if (Autosales.Helpers.isPhoneCheck() === false) {
            _views[_options.view]();
        } else {
            _views[_options.view + "Mobile"]();
        }

        _unbindHandlers();
        _bindHandlers();

        $(_element).show().animate({
            left: leftPosition
        }, Autosales.Config.animationDuration, easingFunc, function () {
            isAnimated = false;
        });
    };

    _init(element, options);
};

// Define detail template views
Autosales.createNS("Autosales.Templates.Panels.Detail");

Autosales.Templates.Panels.Detail.Region = [
    "<div class='section head-info'>",
        "{{if ${isPhoneCheck} === false }} <div class='head-info-header'><a href='region' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='region' data-index='${Index}' class='arrowDown'>&nbsp;</a> <h3> ${Resources.Region} ${RealIndex} ${Resources.Of} ${Count} </h3> <a href='#' class='closeButton'>&nbsp;</a></div> {{/if}}",
        "<h1>${Region.DirectorName}</h1>",
        "<h4>${Resources.RegionalDirector}</h4>",
        "<span>${Resources.In}: ${Region.States}</span>",
        "<span class='dealerships-icon mini-icon sprite-detail'></span>",
        "<strong>${Region.DealersCount} ${Resources.Dealers}</strong>",
        "<span class='smartphone-icon sprite-detail'>${Region.DirectorPhone}</span>",
        "<span class='email-icon sprite-detail'>${Region.DirectorEmail}</span>",
        "<img src='${BaseUrl}Content/images/People/guy-1.png' />",
    "</div>",
    "<div class='section body-info-charts'>",
        "<h2>${Resources.PreviousYearSales}</h2>",
        "<div class='values-wrap'><span class='cash-icon sprite-detail'></span><span>${PreviousYearRegionsAmount}</span></div>",
        "<div class='values-wrap'><span class='units-icon sprite-detail'></span><span>${PreviousYearRegionsQuantity}</span></div>",
        "<p>${Region.Description}</p>",
        "<div id='piechart'></div>",
    "</div>",

    "<div class='changeFilterWrap'><span class='clickRightArrow'></span><a href='${View}' class='changeFilter' data-index='${Index}' data-value='${Region.Name}'>${Resources.Open} ${Region.Name} ${Resources.Dashboard}</a></div>"
].join('\n');

Autosales.Templates.Panels.Detail.Product = [
    "<div class='section head-info'>",
        "{{if ${isPhoneCheck} === false }} <div class='head-info-header'><a href='product' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='product' data-index='${Index}' class='arrowDown'>&nbsp;</a> <h3> ${Resources.Car} ${RealIndex} ${Resources.Of} ${Count} </h3> <a href='#' class='closeButton'>&nbsp;</a></div> {{/if}}",
        "<h1 class='name'>${Product.Name}</h1>",
        "<h4>${Resources.ByManufacturer}</h4>",
        "<img class='car-image' src='${BaseUrl}Content/images/Cars/${Product.Image}' />",
    "</div>",
    "<div class='section body-info-stats'>",
        "<span class='units-icon sprite-detail'></span>",
        "<span>Doors: ${Product.DoorsCount}</span>",
        "<span class='mpg-icon sprite-detail'></span>",
        "<span>Hp: ${Product.Hp}</span>",
        "<span class='horsepower-icon sprite-detail'></span>",
        "<span>Model: ${Product.Model}</span><br />",
        "<span class='safety-icon sprite-detail'></span>",
        "<span>Category: ${Product.Category}</span>",
        "<span class='rating-icon sprite-detail'></span>",
        "<span>Category: ${Product.Category}</span>",
        "<p>${Product.Description}</p>",
    "</div>",
    "<div class='section body-info-past'>",
        "<h2 class='name prev-years'>${Resources.PreviousYearSales}</h2>",
        "<span class='sprite-detail units-icon'></span>",
        "<span>${PrevousYearSalesQuantity}</span>",
        "<span class='sprite-detail star-icon'></span>",
        "<span>${Product.UseCategory}</span>",
        "<h2 class='name h-award'>${Resources.Awards}</h2>",
        "<span class='award-icon'></span>",
        "<span class='award'>${Product.Awards.0}</span><br />",
        "<span class='award-icon'></span>",
        "<span class='award'>${Product.Awards.1}</span>",
    "</div>"
].join('\n');

Autosales.Templates.Panels.Detail.Dealer = [
    "<div class='section head-info dealerships-info'>",
        "{{if ${isPhoneCheck} === false }} <div class='head-info-header'><a href='dealer' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='dealer' data-index='${Index}' class='arrowDown'>&nbsp;</a> <h3> ${Resources.Dealer} ${RealIndex} ${Resources.Of} ${Count} </h3> <a href='#' class='closeButton'>&nbsp;</a> </div>{{/if}}",
        "<h1>${Dealer.Name}</h1>",
        "<span class='up-gap'>${Resources.EstablishedSince} ${Dealer.EstablishDate}</span>",
        "<strong>${Dealer.GeneralManager}, ${Resources.GeneralManager}</strong>",
        "<img src='${BaseUrl}Content/images/Dealerships/${Dealer.Image}' />",
        "<span>${Dealer.City} ${Dealer.State}</span>",
        "<span class='employees-icon mini-icon sprite-detail'></span>",
        "<strong>${Dealer.SalesPeopleCount} ${Resources.Employees}</strong>",
        "<span class='smartphone-icon sprite-detail'>${Dealer.Phone}</span>",
        "<span class='email-icon sprite-detail'>${Dealer.Email}</span>",
        "<span class='location-icon sprite-detail'><a href='http://maps.google.com/?q=${Dealer.Latitude},${Dealer.Longitude}' target='_blank'>&nbsp;</a></span>",
    "</div>",
    "<div class='section body-info-stats'>",
        "<h2 class='name'>${Resources.FeaturesAndServices}</h2>",
        "<div>",
            "<ul>",
                "<li>${Dealer.Services.0}</li>",
                "<li>${Dealer.Services.1}</li>",
                "<li>${Dealer.Services.2}</li>",
            "</ul>",
            "<ul>",
                "<li>${Dealer.Services.3}</li>",
                "<li>${Dealer.Services.4}</li>",
                "<li>${Dealer.Services.5}</li>",
            "</ul>",
        "</div>",
    "</div>",
     "<div class='section body-info-past'>",
        "<h2 class='name prev-years'>${Resources.PreviousYearSales}</h2>",
        "<span class='sprite-detail cash-icon'></span>",
        "<span>${PreviousYearSalesAmount}</span>",
        "<span class='units-icon sprite-detail'></span>",
        "<span>${PreviousYearSalesQuantity}</span>",
        "<span class='sprite-detail star-icon'></span>",
        "<span>${Resources.Ranks} ${Dealer.PrevYearRank}</span>",
        "<h2 class='name h-award'>${Resources.Awards}</h2>",
        "<span class='award-icon'></span>",
        "<span class='award'>${Dealer.Awards.0}</span><br />",
        "<span class='award-icon'></span>",
        "<span class='award'>${Dealer.Awards.1}</span>",
    "</div>",
    "<div class='changeFilterWrap purpleFilter'><span class='clickRightArrow'></span><a href='${View}' class='changeFilter' data-index='${Dealer.Id}' data-value='${Dealer.Name}' data-region='${Dealer.Region}'>${Resources.Open} ${Dealer.Name} ${Resources.Dashboard}</a></div>"
].join('\n');

Autosales.Templates.Panels.Detail.SalesPerson = [
    "<div class='section head-info'>",
        "{{if ${isPhoneCheck} === false }} <div class='head-info-header'><a href='salesPerson' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='salesPerson' data-index='${Index}' class='arrowDown'>&nbsp;</a> <h3> ${Resources.SalesPerson} ${RealIndex} of ${Count} </h3> <a href='#' class='closeButton'>&nbsp;</a> </div>{{/if}}",
        "<h1 class='name'>${SalesPerson.Name}</h1>",
        "<h4>${Resources.SalesConsultant}</h4>",
        "<img src='${BaseUrl}Content/images/People/${SalesPerson.Image}' />",
        "<span>${Dealer.Name}</span>",
        "<span>${Resources.HireDate}: ${SalesPerson.HireDate}</span>",
        "<span class='smartphone-icon sprite-detail'>${SalesPerson.Phone}</span>",
        "<span class='email-icon sprite-detail'>${SalesPerson.Email}</span>",
    "</div>",
    "<div class='section body-info-stats'>",
        "<h2 class='name'>${Resources.PreviousYearPerformance}</h2>",
        "<span class='sprite-detail cash-icon'></span>",
        "<span>${PreviousYearSalesAmount}</span>",
        "<span class='sprite-detail units-icon'></span>",
        "<span>${PreviousYearSalesQuantity}</span>",
        "<span class='sprite-detail star-icon'></span>",
        "<span>${Resources.Ranks} ${SalesPerson.PrevYearRank}</span>",
        "<div id='performanceChart'></div>",
        "<h2 class='name h-award'>${Resources.Awards}</h2>",
        "<span class='award-icon'></span>",
        "<span class='award'>${SalesPerson.Awards.0}</span><br />",
        "<span class='award-icon'></span>",
        "<span class='award'>${SalesPerson.Awards.1}</span>",
    "</div>"
].join('\n');

Autosales.Core.Panels.Detail = function (element, options) {
    // private variables
    var _element = null,
        _options = null,
        _arrowUpSelector = "a.arrowUp",
        _arrowDownSelector = "a.arrowDown";

    // private methods
    var _views = {
        region: function () {
            var data = {
                Region: _options.regionData()[_options.index],
                Count: _options.regionData().length,
                isPhoneCheck: Autosales.Helpers.isPhoneCheck(),
                PreviousYearRegionsAmount: Autosales.Helpers.formatAmount(_options.data.Regions[_options.index].PrevYearSalesAmount, 0),
                PreviousYearRegionsQuantity: Autosales.Helpers.formatAmount(_options.data.Regions[_options.index].PrevYearSalesQuantity, 1),
                View: _options.view,
                Index: _options.index,
                RealIndex: _options.index + 1,
                Resources: Autosales.Resources.Detail,
                BaseUrl: Autosales.Config.baseUrl
            },
            pieChartSelector = "#piechart",
            $regionGrid = $("#nationalTopRegions1_table");

            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Detail.Region, data));

            if (Autosales.Helpers.isPhoneCheck()) {
                var e = jQuery.Event("updateNavigation");
                e.html = $.ig.tmpl("${Resources.Region} ${RealIndex} of ${Count} <a href='region' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='region' data-index='${Index}' class='arrowDown'>&nbsp;</a>",
                    data);
                $(document).trigger(e);
            }

            if ($regionGrid.length > 0) {
                $regionGrid.igGridSelection("selectRow", data.Index);
            }

            if (data.RealIndex - 1 > 0) {
                $(_arrowUpSelector).show();
            } else {
                $(_arrowUpSelector).hide();
            }

            if (data.RealIndex < data.Count) {
                $(_arrowDownSelector).show();
            } else {
                $(_arrowDownSelector).hide();
            }

            _createPieChart(pieChartSelector);
        },
        product: function () {
            var data = {
                    Product: _options.data.Products[_options.index],
                    Count: _options.data.Products.length,
                    PrevousYearSalesQuantity: Autosales.Helpers.formatAmount(_options.data.Products[_options.index].PrevYearSalesQuantity, 1),
                    Index: _options.index,
                    RealIndex: _options.index + 1,
                    isPhoneCheck: Autosales.Helpers.isPhoneCheck(),
                    Resources: Autosales.Resources.Detail,
                    BaseUrl: Autosales.Config.baseUrl
                },
                $productGrid = $("#" + $("#status1 .carModels").attr("id") + "_table");

            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Detail.Product, data));

            if (Autosales.Helpers.isPhoneCheck()) {
                var e = jQuery.Event("updateNavigation");
                e.html = $.ig.tmpl("${Resources.Car} ${RealIndex} of ${Count} <a href='product' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='product' data-index='${Index}' class='arrowDown'>&nbsp;</a>",
                    data);
                $(document).trigger(e);
            }

            if ($productGrid.length > 0) {
                $productGrid.igGridSelection("selectRow", data.Index);
            }

            if (data.RealIndex - 1 > 0) {
                $(_arrowUpSelector).show();
            } else {
                $(_arrowUpSelector).hide();
            }

            if (data.RealIndex < data.Count) {
                $(_arrowDownSelector).show();
            } else {
                $(_arrowDownSelector).hide();
            }
        },
        dealer: function () {
            var data = {
                    Dealer: _options.data.Dealers[_options.index],
                    Count: _options.data.Dealers.length,
                    PreviousYearSalesAmount: Autosales.Helpers.formatAmount(_options.data.Dealers[_options.index].PrevYearSalesAmount, 0),
                    PreviousYearSalesQuantity: Autosales.Helpers.formatAmount(_options.data.Dealers[_options.index].PrevYearSalesQuantity, 1),
                    View: _options.view,
                    Index: _options.index,
                    RealIndex: parseInt(_options.index, 10) + 1,
                    isPhoneCheck: Autosales.Helpers.isPhoneCheck(),
                    Resources: Autosales.Resources.Detail,
                    BaseUrl: Autosales.Config.baseUrl
                },
                $dealerGrid = $("#" + $("#status1 .dealers").attr("id") + "_table");

            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Detail.Dealer, data));

            if (Autosales.Helpers.isPhoneCheck()) {
                var e = jQuery.Event("updateNavigation");
                e.html = $.ig.tmpl("${Resources.Dealer} ${RealIndex} of ${Count} <a href='dealer' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='dealer' data-index='${Index}' class='arrowDown'>&nbsp;</a>",
                    data);
                $(document).trigger(e);
            }

            if ($dealerGrid.length > 0) {
                $dealerGrid.igGridSelection("selectRow", data.Index);
            }

            if (data.RealIndex - 1 > 0) {
                $(_arrowUpSelector).show();
            } else {
                $(_arrowUpSelector).hide();
            }

            if (data.RealIndex < data.Count) {
                $(_arrowDownSelector).show();
            } else {
                $(_arrowDownSelector).hide();
            }
        },
        salesPerson: function () {
            var data = {
                SalesPerson: _options.data.SalesPeople[_options.index],
                Dealer: _options.data.Dealers[0],
                Count: _options.data.SalesPeople.length,
                PreviousYearSalesAmount: Autosales.Helpers.formatAmount(_options.data.SalesPeople[_options.index].PrevYearSalesAmount, 0),
                PreviousYearSalesQuantity: Autosales.Helpers.formatAmount(_options.data.SalesPeople[_options.index].PrevYearSalesQuantity, 1),
                Index: _options.index,
                RealIndex: _options.index + 1,
                isPhoneCheck: Autosales.Helpers.isPhoneCheck(),
                Resources: Autosales.Resources.Detail,
                BaseUrl: Autosales.Config.baseUrl
            },
            dataChartSelector = "#performanceChart",
            $salesPeopleGrid = $("#" + $("#status1 .salesPersons").attr("id") + "_table");

            $(_element).empty();
            $(_element).append($.ig.tmpl(Autosales.Templates.Panels.Detail.SalesPerson, data));

            if (Autosales.Helpers.isPhoneCheck()) {
                var e = jQuery.Event("updateNavigation");
                e.html = $.ig.tmpl("${Resources.SalesPerson} ${RealIndex} of ${Count} <a href='salesPerson' data-index='${Index}' class='arrowUp'>&nbsp;</a> <a href='salesPerson' data-index='${Index}' class='arrowDown'>&nbsp;</a>",
                    data);
                $(document).trigger(e);
            }

            if ($salesPeopleGrid.length > 0) {
                $salesPeopleGrid.igGridSelection("selectRow", data.Index);
            }

            if (data.RealIndex - 1 > 0) {
                $(_arrowUpSelector).show();
            } else {
                $(_arrowUpSelector).hide();
            }

            if (data.RealIndex < data.Count) {
                $(_arrowDownSelector).show();
            } else {
                $(_arrowDownSelector).hide();
            }

            _createDataChart(dataChartSelector, data.SalesPerson.PrevMonthlySales);
        }
    };

    var _unbindHandlers = function () {
        $(document).off("click", _arrowUpSelector);
        $(document).off("click", _arrowDownSelector);
    };

    var _bindHandlers = function () {
        $(document).on("click", _arrowUpSelector, function (ev) {
            ev.preventDefault();
            $(".tooltip").remove();
 
            var param = {
                type: $(this).attr("href"),
                index: $(this).attr("data-index"),
                value: $(this).attr("data-value")
            };

            _options.view = param.type;
            _options.index = parseInt(param.index, 10) - 1;

            $(_element).empty();
            _views[_options.view]();

            return false;
        });
        $(document).on("click", _arrowDownSelector, function (ev) {
            ev.preventDefault();
            $(".tooltip").remove();

            var param = {
                type: $(this).attr("href"),
                index: $(this).attr("data-index"),
                value: $(this).attr("data-value")
            };

            _options.view = param.type;
            _options.index = parseInt(param.index, 10) + 1;

            $(_element).empty();
            _views[_options.view]();

            return false;
        });
        $(document).on("click", ".reloadDetail", function (ev) {
            ev.preventDefault();
            $(".tooltip").remove();

            var param = {
                type: $(this).attr("href"),
                index: $(this).attr("data-index"),
                value: $(this).attr("data-value")
            };

            _options.view = param.type;
            _options.index = parseInt(param.index, 10);

            $(_element).empty();
            _views[_options.view]();

            return false;
        });
    };

    var _createPieChart = function (element) {
        var brushes = ["#dededf", "#d0d0d0", "#c4c4c5", "#b4b4b5", "#a4a4a5", "#929293", "#494949"],
            regions = _options.data.Regions.map(function (item) {
                if (item.FormatPercent === undefined) {
                    item.FormatPercent = item.Percent + "%";
                }
                return item;
            });
        brushes[_options.index] = "#00AADE";

        $(element).igPieChart({
            dataSource: _options.data.Regions,
            width: '50%',
            height: '200px',
            valueMemberPath: 'PrevYearSalesAmount',
            labelMemberPath: 'FormatPercent',
            explodedSlices: [1],
            radiusFactor: .8,
            showTooltip: true,
            tooltipTemplate: 'regionTooltipTemplate'
        })
        .igPieChart("option", "explodedSlices", [_options.index])
        .igPieChart("option", "brushes", brushes)
        .igPieChart("option", "outlines", brushes);
    };

    var _createDataChart = function (element, data) {
        $(element).igDataChart({
            width: "100%",
            height: "150px",
            dataSource: data,
            axes: [{
                name: "xAxis",
                type: "categoryX",
                label: Autosales.Resources.Detail.Date,
                formatLabel: function (value) {
                    return Autosales.Helpers.formatMonthFromDate(value);
                }
            }, {
                name: "yAxis",
                type: "numericY",
                formatLabel: function (value) {
                    return Autosales.Helpers.formatAmount(value, _options.params.measure);
                }
            }],
            series: [{
                name: "series1",
                title: "Performance",
                type: "column",
                xAxis: "xAxis",
                yAxis: "yAxis",
                valueMemberPath: "Value",
                brush: "rgba(86,74,151,.8)",
                outline: "rgba(48,41,87,.7)"
            }],
            windowResponse: "immediate"
        });
    };

    var _init = function (element, options) {
        var leftPosition = Autosales.Helpers.isPhoneCheck() ? -640 : (options.leftPostion || -620),
            easingFunc = "linear";

        options.leftPostion = null;

        _element = element;
        _options = options;

        $(_element).empty();
        _views[_options.view]();
        _unbindHandlers();
        _bindHandlers();

        $(_element).show().animate({
            left: leftPosition
        }, Autosales.Config.animationDuration, easingFunc, function () {
            isAnimated = false;
        });
    };

    _init(element, options);
};

// Define entry point for application
Autosales.Init = function () {
    var nm = Autosales.Core.NavigationManager("header", {
        title: Autosales.Resources.General.Title,
        panelsID: ["#dashboard", "#status", "#detail"],
        filterID: "#filter"
    });

    $("title").text(Autosales.Resources.General.Title);

    var filter = Autosales.Core.Filters("filter", {
        filters: Autosales.Config.filters,
        params: Autosales.Config.defaultParams,
        panelID: "#panels"
    });

    var pm = Autosales.Core.PanelsManager("panels", {
        params: Autosales.Config.defaultParams,
        panels: ["dashboard", "status", "detail"],
        regionData: filter.getRegionData
    });

    Autosales.Helpers.messageForSupportedWidth($("body"));
};