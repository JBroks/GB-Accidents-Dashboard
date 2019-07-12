// Spinner show method

/**
 * This is jQuery method that activates the overlay div containing spinner
 * This was implemented so the user can see the loading spinner instead of empty charts while the data is loading
 */
$("#overlay").show();

queue()
    .defer(d3.csv, "assets/data/Accidents2017.csv")
    .defer(d3.csv, "assets/data/Accidents2016.csv")
    .await(makeGraphs);

function makeGraphs(error, accData, accData16) {
    let dataFor2017 = crossfilter(accData);
    let dataFor2016 = crossfilter(accData16);

    // Parse strings to integers

    accData16.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    });

    accData.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    });

    accData.forEach(function(d) {
        d.hour = parseInt(d.hour);
    });

    // Convert date to tdate data types

    let parseDate = d3.time.format("%d/%m/%Y").parse;
    accData.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    // Call functions for each individual chart

    showRegionSelector(dataFor2017);
    showAccidentsTotal(dataFor2017);
    showSparklineAcc(dataFor2016);
    showSparklineCas(dataFor2016);
    showSparklineVeh(dataFor2016);
    showCasualtiesTotal(dataFor2017);
    showVehiclesTotal(dataFor2017);
    showAccidentsSeverity(dataFor2017);
    showAccidentsRoad(dataFor2017);
    showAccidentsHour(dataFor2017);
    showAccidentsMonth(dataFor2017);
    showSeverityDistribution(dataFor2017);
    showAccidentsAvg(dataFor2017);
    showCasualtiesAvg(dataFor2017);
    showPeakHrAcc(dataFor2017);
    showPeakHrAccValue(dataFor2017);
    showPeakHrCas(dataFor2017);
    showPeakHrCasValue(dataFor2017);
    showRecordsCount(dataFor2017);

    // Spinner hide method
    /**
     * This is jQuery method that hides the overlay div containing spinner
     * When data is loaded spinner with overlay will be hidden
     */
    $("#overlay").hide();

    // Render all charts
    dc.renderAll();

}

// CHART FUNCTIONS


/**
 * Region selecter to enable user to choose region of Great Britain
 * This function takes 2017 data and groups it by region 
 * If in the future you decide to allow multiple selection you will need to set multiple() to true
 * Title was edited to avoid showing values and only show region name (key)
 */

function showRegionSelector(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("region"));
    let group = dim.group();

    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group)
        .promptText("All regions")
        .multiple(false)
        .title(function(d) {
            return d.key;
        });
}

// Tile showing total number of accidents

/**
 * This function uses sums column containing number of accidents and displays the total
 */
function showAccidentsTotal(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("ref"));
    let totalAcc = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay("#accidents-total")
        .formatNumber(d3.format(".2s"))
        .group(totalAcc);
}

// Sparkline chart for decoration purposes

/**
 * This function uses 2016 data to create non-responsive chart for decoration purposes
 * Chart is placed in the same tile as accident totals
 * Renderlet was edited to disable click for sparkline chart
 * This code was use to edit renderlet: https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ
 * Pointer event was removed
 */

function showSparklineAcc(dataFor2016) {
    let dim = dataFor2016.dimension(dc.pluck("month"));
    let group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-acc")
        .width(120)
        .height(30)
        .margins({ left: 0, top: 6, right: 10, bottom: 0 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style("pointer-events", "none");
        }))
        .on("pretransition", (function(chart) {
            chart.selectAll(".bar")
                .style("fill", "#fd8b3e");
            chart.selectAll(".domain")
                .style("stroke", "none");
            chart.selectAll("line")
                .style("stroke", "none");
        }))
        .dimension(dim)
        .group(group);
}

// Tile showing total number of casualties

/**
 * This function uses sums column containing number of casualties and displays the total
 */

function showCasualtiesTotal(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("ref"));
    let totalCas = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay("#casualties-total")
        .formatNumber(d3.format(".2s"))
        .group(totalCas);
}

// Sparkline chart for decoration purposes

/**
 * This function uses 2016 data to create non-responsive chart for decoration purposes
 * Chart is placed in the same tile as casualties totals
 * Renderlet was edited to disable click for sparkline chart
 * This code was use to edit renderlet: https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ
 * Pointer event was removed
 */

function showSparklineCas(dataFor2016) {
    let dim = dataFor2016.dimension(dc.pluck("month"));
    let group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-cas")
        .width(120)
        .height(30)
        .margins({ left: 0, top: 6, right: 10, bottom: 0 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style("pointer-events", "none");
        }))
        .on("pretransition", (function(chart) {
            chart.selectAll(".bar")
                .style("fill", "#e6550e");
            chart.selectAll(".domain")
                .style("stroke", "none");
            chart.selectAll("line")
                .style("stroke", "none");
        }))
        .dimension(dim)
        .group(group);
}

// Tile showing total number of vehicles involved in accidents

/**
 * This function uses sums column containing number of vehicles involved and displays the total
 */

function showVehiclesTotal(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("ref"));
    let totalVeh = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    dc.numberDisplay("#vehicles-total")
        .formatNumber(d3.format(".2s"))
        .group(totalVeh);
}

// Sparkline chart for decoration purposes

/**
 * This function uses 2016 data to create non-responsive chart for decoration purposes
 * Chart is placed in the same tile as vehicles involved
 * Renderlet was edited to disable click for sparkline chart
 * This code was use to edit renderlet: https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ
 * Pointer event was removed
 */

function showSparklineVeh(dataFor2016) {
    let dim = dataFor2016.dimension(dc.pluck("month"));
    let group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-veh")
        .width(120)
        .height(30)
        .margins({ left: 0, top: 6, right: 10, bottom: 0 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style("pointer-events", "none");
        }))
        .on("pretransition", (function(chart) {
            chart.selectAll(".domain")
                .style("stroke", "none");
            chart.selectAll("line")
                .style("stroke", "none");
        }))
        .dimension(dim)
        .group(group);
}

// Pie chart presenting accidents split by severity

/**
 * Pie chart presents accident % split by severity level
 * Function used to add up all accidents and group them by severity
 * Function uses crossfilter reduceSum function to sum accidents
 * Pie slices colors changed to express data categories better visually and highlight seriousness of an accident (fatal - red, serious - orange, slight - blue)
 * Title was edited as per following suggestion: https://groups.google.com/forum/#!topic/dc-js-user-group/u-zPORy4-2Y
 * Each pie slices displays % value as per the following example: https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html
 * Viewbox solution applied to resolve issue of responsiveness on mobile devices,
 * solution found here: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
 * toLocaleString() method, used to format number, found in here: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 * Legend display edited to show each category and total number of accidents per category
 */

function showAccidentsSeverity(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("accident_severity"));
    let totalAccBySeverity = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.pieChart("#accidents-severity")
        .width(320)
        .height(360)
        .slicesCap(3)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccBySeverity)
        .transitionDuration(500)
        .colors(d3.scale.ordinal().range(["#3182bc", "#fd8c3d", "#e6550e"]))
        .renderLabel(true)
        .legend(dc.legend().x(110).y(150).itemHeight(13).gap(5))
        .title(function(d) {
            return d.key + ": " + ((d.value / d3.sum(totalAccBySeverity.all(),
                function(d) { return d.value; })) * 100).toFixed(2) + "%";
        })
        .on("pretransition", function(chart) {
            chart.selectAll("text.pie-slice").text(function(d) {
                if (dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) >= 5) {
                    return dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) + "%";
                }
            });
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 320 360");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff")
                .text("")
                .append("tspan")
                .text(function(d) { return d.name; })
                .append("tspan")
                .attr("x", 100)
                .attr("text-anchor", "end")
                .text(function(d) { return d.data.toLocaleString(); });
        });

}

// Pie chart presenting accidents split by road type

/**
 * Pie chart presents accident % split by road type
 * Function used to add up all accidents and group them by road type
 * Function uses crossfilter reduceSum function to sum accidents
 * Title was edited as per following suggestion: https://groups.google.com/forum/#!topic/dc-js-user-group/u-zPORy4-2Y
 * Each pie slices displays % value as per the following example: https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html
 * Viewbox solution applied to resolve issue of responsiveness on mobile devices,
 * solution found here: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
 * toLocaleString() method, used to format number, found in here: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 * Legend display edited to show each category and total number of accidents per category
 */

function showAccidentsRoad(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("road_type"));
    let totalAccByRoad = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.pieChart("#rd-type-split")
        .width(320)
        .height(360)
        .slicesCap(8)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccByRoad)
        .transitionDuration(500)
        .renderLabel(true)
        .legend(dc.legend().x(85).y(125).itemHeight(13).gap(5))
        .title(function(d) {
            return d.key + ": " + ((d.value / d3.sum(totalAccByRoad.all(),
                function(d) { return d.value; })) * 100).toFixed(2) + "%";
        })
        .on("pretransition", function(chart) {
            chart.selectAll("text.pie-slice").text(function(d) {
                if (dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) >= 5) {
                    return dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) + "%";
                }
            });
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 320 360");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff")
                .text("")
                .append("tspan")
                .text(function(d) { return d.name; })
                .append("tspan")
                .attr("x", 150)
                .attr("text-anchor", "end")
                .text(function(d) {
                    return d.data.toLocaleString();
                });
        });
}

// Stacked bar chart presenting accident severity by speed limit

/**
 * This function sums accidents and groups them by severity level and road speed limit categories
 * Each bar represents speed limit category that is broken into accident severity stacks 
 * Title function applied to display more informative text
 * Viewbox solution applied to resolve issue of responsiveness on mobile devices
 */

function showSeverityDistribution(dataFor2017) {

    function severityBySpeed(dimension, severity) {
        return dimension.group().reduce(
            function(p, v) {
                p.total += v.number_of_accidents;
                if (v.accident_severity === severity) {
                    p.by_severity += v.number_of_accidents;
                }
                return p;
            },
            function(p, v) {
                p.total -= v.number_of_accidents;
                if (v.accident_severity === severity) {
                    p.by_severity -= v.number_of_accidents;
                }
                return p;
            },
            function() {
                return { total: 0, by_severity: 0 };
            }
        );
    }

    let dim = dataFor2017.dimension(dc.pluck("speed_limit"));
    let slightBySpeeed = severityBySpeed(dim, "Slight");
    let seriousBySpeeed = severityBySpeed(dim, "Serious");
    let fatalBySpeeed = severityBySpeed(dim, "Fatal");

    dc.barChart("#severity-distribution")
        .width(380)
        .height(360)
        .dimension(dim)
        .colors(d3.scale.ordinal().range(["#e6550e", "#fd8c3d", "#3182bc"]))
        .group(fatalBySpeeed, "Fatal")
        .stack(seriousBySpeeed, "Serious")
        .stack(slightBySpeeed, "Slight")
        .valueAccessor(function(d) {
            if (d.value.total > 0) {
                return (d.value.by_severity / d.value.total) * 100;
            }
            else {
                return 0;
            }
        })
        .title("Fatal", function(d) {
            let percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of fatal accidents";
        })
        .title("Serious", function(d) {
            let percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of serious accidents";
        })
        .title("Slight", function(d) {
            let percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of slight accidents";
        })
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 380 360");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "12px")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".x-axis-label")
                .attr("font-size", "14px");
        })
        .legend(dc.legend().x(100).y(345).itemHeight(15).gap(5)
            .horizontal(true))
        .margins({ top: 10, right: 30, bottom: 40, left: 40 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Speed limit (mph)", 25)
        .yAxis().tickFormat(function(d) { return d + "%"; });
}

// Tile showing average numbers of accidents / casualties per day

/**
 * Two functions below sum all accidents and divide them by number of days per year (365) in order to calculate daily average
 */

function showAccidentsAvg(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("ref"));
    let totalAcc = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay("#accidents-average")
        .formatNumber(d3.format(",.0f"))
        .group(totalAcc)
        .valueAccessor(function(d) {
            let numberOfDaysPerYear = 365;
            return (d.value / numberOfDaysPerYear);
        });
}

function showCasualtiesAvg(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("ref"));
    let totalAcc = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay("#casualties-average")
        .formatNumber(d3.format(",.0f"))
        .group(totalAcc)
        .valueAccessor(function(d) {
            let numberOfDaysPerYear = 365;
            return (d.value / numberOfDaysPerYear);
        });
}

// Tile showing peak hours and its values

// Peak Accidents

/**
 * This function adds up all accidents and groups them by hour
 * it then evaluates which hour in a day shows the highest number of accidents and displays that hour (key)
 */

function showPeakHrAcc(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("hour"));

    let totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay('#accidents-peak-hr')
        .group(totalAccByHour)
        .valueAccessor(function(d) {
            return totalAccByHour.top(1)[0].key;
        });
}

/**
 * This function adds up all accidents and groups them by hour
 * it then evaluates which hour in a day shows the highest number of accidents and displays that value divided by number of days per year
 * The final result instead of showing annual total shows daily average for a peak hour
 */
function showPeakHrAccValue(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("hour"));

    let totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay('#accidents-peak-value')
        .formatNumber(d3.format(",.0f"))
        .group(totalAccByHour)
        .valueAccessor(function(d) {
            let numberOfDaysPerYear = 365;
            return totalAccByHour.top(1)[0].value / numberOfDaysPerYear;
        });
}

// Peak Casualties

/**
 * This function adds up all casualties and groups them by hour
 * it then evaluates which hour in a day shows the highest number of casualties and displays that hour (key)
 */
function showPeakHrCas(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("hour"));

    let totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay('#casualties-peak-hr')
        .group(totalCasByHour)
        .valueAccessor(function(d) {
            return totalCasByHour.top(1)[0].key;
        });
}

/**
 * This function adds up all casualties and groups them by hour
 * it then evaluates which hour in a day shows the highest number of casualties and displays that value divided by number of days per year
 * The final result instead of showing annual total shows daily average for a peak hour
 */

function showPeakHrCasValue(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("hour"));

    let totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay('#casualties-peak-value')
        .formatNumber(d3.format(",.0f"))
        .group(totalCasByHour)
        .valueAccessor(function(d) {
            let numberOfDaysPerYear = 365;
            return totalCasByHour.top(1)[0].value / numberOfDaysPerYear;
        });
}

// Composite line chart presenting total number of accidents by month

/**
 * This composite line chart presents annual total number of accidents, casualties and vehicles involved distributed by month
 * This function sums each category and groups them by month
 * minDate and maxDate used to arrange months in the correct order using d3.domain()
 * Shared title was disabled to display unique titles for each data category (accidents, casualties, vehicles involved)
 * Title method applied to display more explanatory text and edit number format
 * Viewbox solution applied to resolve issue of responsiveness on mobile devices
 * Data points cut off issue was resolved by applying elasticX / elasticY and xAxisPadding / yAxisPadding
 */

function showAccidentsMonth(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("date"));

    let totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));
    let totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));
    let totalVehByHour = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    let minDate = dim.bottom(1)[0].date;
    let maxDate = dim.top(1)[0].date;

    let composite = dc.compositeChart("#composite-month");

    composite
        .width(840)
        .height(310)
        .margins({ top: 10, right: 60, bottom: 50, left: 45 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.time.scale().domain([minDate, maxDate]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false)
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        .compose([
            dc.lineChart(composite)
            .group(totalAccByHour, "Accidents")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " accidents";
            })
            .colors("#ff7e0e")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .interpolate("monotone")
            .group(totalCasByHour, "Casualties")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " casualties";
            })
            .colors("#d95350")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .group(totalVehByHour, "Vehicles involved")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " vehicles involved";
            })
            .colors("#1e77b4")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("8%")
        .xAxis().ticks(12).tickFormat(d3.time.format("%b")).outerTickSize(0);

    composite.yAxis().ticks(5).outerTickSize(0);
}

// Composite line chart presenting total number of accidents by hour

/**
 * This composite line chart presents annual total number of accidents, casualties and vehicles involved distributed by hour
 * This function sums each category and groups them by hour
 * Shared title was disabled to display unique titles for each data category (accidents, casualties, vehicles involved)
 * Title method applied to display more explanatory text and edit number format
 * Viewbox solution applied to resolve issue of responsiveness on mobile devices
 * Data points cut off issue was resolved by applying elasticX / elasticY and xAxisPadding / yAxisPadding
 * Since the hour labels in their initial position were overlapping, rotation transformation was applied
 */


function showAccidentsHour(dataFor2017) {
    let dim = dataFor2017.dimension(dc.pluck("hour"));

    let totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));
    let totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));
    let totalVehByHour = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    let composite = dc.compositeChart("#composite-hour");

    composite
        .width(840)
        .height(310)
        .margins({ top: 20, right: 60, bottom: 50, left: 45 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.scale.linear().domain([0, 23]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false)
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px")
                .attr("dx", "-30")
                .attr("dy", "-5")
                .attr("transform", "rotate(-90)");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        .compose([
            dc.lineChart(composite)
            .group(totalAccByHour, "Accidents")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                if (d.key < 10) {
                    return numberWithCommas + " accidents at " + "0" +
                        d.key + ":00";
                }
                else {
                    return numberWithCommas + " accidents at " +
                        d.key + ":00";
                }
            })
            .colors("#ff7e0e")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .group(totalCasByHour, "Casualties")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                if (d.key < 10) {
                    return numberWithCommas + " casualties at " + "0" +
                        d.key + ":00";
                }
                else {
                    return numberWithCommas + " casualties at " +
                        d.key + ":00";
                }
            })
            .colors("#d95350")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .group(totalVehByHour, "Vehicles involved")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                if (d.key < 10) {
                    return numberWithCommas + " vehicles involved at " + "0" +
                        d.key + ":00";
                }
                else {
                    return numberWithCommas + " vehicles involved at " +
                        d.key + ":00";
                }
            })
            .colors("#1e77b4")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("2%")
        .xAxis().ticks(24).tickFormat(function(d) {
            if (d < 10) {
                return "0" + d + ":00";
            }
            else { return d + ":00"; }
        }).outerTickSize(0);
    composite.yAxis().ticks(5).outerTickSize(0);
}

// Data Count

/**
 * Data count was implemented to show how many records are selected
 * Function counts all selected records
 * Additionally feature that enables reset of all selection was added
 * Solution inspired by this code: https://codepen.io/danshultz11/pen/ZBvjGV
 */

function showRecordsCount(dataFor2017) {

    let dim = dataFor2017;
    let allRecords = dataFor2017.groupAll();

    dc.dataCount('.dc-data-count')
        .group(allRecords)
        .dimension(dim);
}
