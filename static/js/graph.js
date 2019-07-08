queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated_v2.csv")
    .defer(d3.csv, "data/Accidents_2016_aggregated_v2.csv")
    .await(makeGraphs);

function makeGraphs(error, accData, accData16) {
    var ndx = crossfilter(accData);
    var ndx16 = crossfilter(accData16);


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

    var parseDate = d3.time.format("%d/%m/%Y").parse;
    accData.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    // Call functions for each individual chart

    showRegionSelector(ndx);
    showAccidentsTotal(ndx);
    showSparklineAcc(ndx16);
    showSparklineCas(ndx16);
    showSparklineVeh(ndx16);
    showCasualtiesTotal(ndx);
    showVehiclesTotal(ndx);
    showAccidentsSeverity(ndx);
    showAccidentsRoad(ndx);
    showAccidentsHour(ndx);
    showAccidentsMonth(ndx);
    showSeverityDistribution(ndx);
    showAccidentsAvg(ndx);
    showCasualtiesAvg(ndx);
    showPeakHrAcc(ndx);
    showPeakHrAccValue(ndx);
    showPeakHrCas(ndx);
    showPeakHrCasValue(ndx);


    // Render all charts
    dc.renderAll();
}

// ------------- CHART FUNCTIONS -------------


// ------------- Region selecter to enable user to choose region of Great Britain -------------

function showRegionSelector(ndx) {
    var dim = ndx.dimension(dc.pluck("region"));
    var group = dim.group();

    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group)
        .promptText("All regions")
        .multiple(false) //change multiple to true if you decide to allow multiple selection
        .title(function(d) {
            return d.key;
        });
}

// ------------- Tile showing total number of accidents -------------

function showAccidentsTotal(ndx) {
    var dim = ndx.dimension(dc.pluck("ref"));
    var totalAcc = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay("#accidents-total")
        .formatNumber(d3.format(".2s"))
        .group(totalAcc);
}

// ------------- Sparkline chart for decoration purposes -------------

function showSparklineAcc(ndx16) {
    var dim = ndx16.dimension(dc.pluck("month"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

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
            /* "renderlet" code suggesting how to disable click for sparkline charts found in here:
                https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ */
            chart.selectAll(".bar")
                .style("pointer-events", "none"); //pointer event removed 
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

// ------------- Tile showing total number of casualties -------------

function showCasualtiesTotal(ndx) {
    var dim = ndx.dimension(dc.pluck("ref"));
    var totalCas = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay("#casualties-total")
        .formatNumber(d3.format(".2s"))
        .group(totalCas);
}

// ------------- Sparkline chart for decoration purposes -------------

function showSparklineCas(ndx16) {
    var dim = ndx16.dimension(dc.pluck("month"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

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

// ------------- Tile showing total number of vehicles involved in accidents -------------

function showVehiclesTotal(ndx) {
    var dim = ndx.dimension(dc.pluck("ref"));
    var totalVeh = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    dc.numberDisplay("#vehicles-total")
        .formatNumber(d3.format(".2s"))
        .group(totalVeh);
}

// ------------- Sparkline chart for decoration purposes -------------

function showSparklineVeh(ndx16) {
    var dim = ndx16.dimension(dc.pluck("month"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

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

// ------------- Pie chart presenting accidents split by severity -------------

function showAccidentsSeverity(ndx) {
    var dim = ndx.dimension(dc.pluck("accident_severity"));
    var totalAccBySeverity = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.pieChart("#accidents-severity")
        .width(320)
        .height(360)
        .slicesCap(3)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccBySeverity)
        .transitionDuration(500)
        .colors(d3.scale.ordinal().range(["#3182bc", "#fd8c3d", "#e6550e"]))
        /* pie slices colors changed to express data categories better visually
        and highlight seriousness of an accident i.e. fatal accidents in red,
        serious in orange and slight in blue*/
        .renderLabel(true)
        .legend(dc.legend().x(110).y(150).itemHeight(13).gap(5))
        .title(function(d) {
            return d.key + ": " + ((d.value / d3.sum(totalAccBySeverity.all(),
                function(d) { return d.value; })) * 100).toFixed(2) + "%";
        })
        /* solution for title inspired by the follwoing code: 
        https://groups.google.com/forum/#!topic/dc-js-user-group/u-zPORy4-2Y */
        .on("pretransition", function(chart) {
            chart.selectAll("text.pie-slice").text(function(d) {
                if (dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) >= 5) {
                    return dc.utils.printSingleValue(
                        (d.endAngle - d.startAngle) /
                        (2 * Math.PI) * 100) + "%";
                }
            }); // solution suggested by CI Tutor: https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html */
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 320 360");
            /* viewbox solution applied to resolve issue of responsiveness on mobile devices, solution found here:
            https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
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
    /* toLocaleString() method, used to format number, found in here:
    https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */

}

// ------------- Pie chart presenting accidents split by road type -------------

function showAccidentsRoad(ndx) {
    var dim = ndx.dimension(dc.pluck("road_type"));
    var totalAccByRoad = dim.group().reduceSum(dc.pluck("number_of_accidents"));

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
        }) //function added to display text on slices large enough to fit in all text
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
            /* viewbox solution applied to resolve issue of responsiveness
            on mobile devices, solution found here:
            https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox*/
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
                }); // editing text displayed in the legend
        });
}

// ------------- Stacked bar chart presenting accident severity by speed limit -------------

function showSeverityDistribution(ndx) {

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

    var dim = ndx.dimension(dc.pluck("speed_limit"));
    var slightBySpeeed = severityBySpeed(dim, "Slight");
    var seriousBySpeeed = severityBySpeed(dim, "Serious");
    var fatalBySpeeed = severityBySpeed(dim, "Fatal");

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
        /* title function specified to display % value
        and more descriptive information */
        .title("Fatal", function(d) {
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of fatal accidents";
        })
        .title("Serious", function(d) {
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of serious accidents";
        })
        .title("Slight", function(d) {
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) +
                "% of slight accidents";
        })
        .on("pretransition", function(chart) {
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 380 360");
            /* viewbox solution applied to resolve issue of responsiveness on mobile devices, solution found here:
            https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox*/
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".x-axis-label")
                .attr("font-size", "12px");
        })
        .legend(dc.legend().x(100).y(345).itemHeight(15).gap(5)
            .horizontal(true))
        .margins({ top: 10, right: 30, bottom: 40, left: 40 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Speed limit (mph)", 25)
        .yAxis().tickFormat(function(d) { return d + "%"; });
}

// ------------- Composite line chart presenting total number of accidents by month -------------

function showAccidentsMonth(ndx) {
    var dim = ndx.dimension(dc.pluck("date"));

    var totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));
    var totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));
    var totalVehByHour = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    var minDate = dim.bottom(1)[0].date;
    var maxDate = dim.top(1)[0].date;

    var composite = dc.compositeChart("#composite-month");

    composite
        .width(750)
        .height(300)
        .margins({ top: 10, right: 60, bottom: 45, left: 40 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.time.scale().domain([minDate, maxDate]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false) //shared title disabled to display category specific title
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 700 340");
            /* viewbox solution applied to resolve issue of responsiveness on mobile devices, solution found here:
            https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox */
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
        })
        .compose([
            dc.lineChart(composite)
            .group(totalAccByHour, "Accidents")

            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " accidents";
            }) //title function applied to display more explanatory text and edit number format
            .colors("#ff7e0e")
            .renderDataPoints({ radius: 2.5 }),
            dc.lineChart(composite)
            .group(totalCasByHour, "Casualties")
            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " casualties";
            }) //title function applied to display more explanatory text and edit number format
            .colors("#d95350")
            .renderDataPoints({ radius: 2.5 }),
            dc.lineChart(composite)
            .group(totalVehByHour, "Vehicles involved")
            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " vehicles involved";
            }) //title function applied to display more explanatory text and edit number format
            .colors("#1e77b4")
            .renderDataPoints({ radius: 2.5 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("8%")
        .xAxis().ticks(12).tickFormat(d3.time.format("%b")).outerTickSize(0);
    /* elasticX, outerTickSize and xAxisPadding applied to fix the issue with data point cut off
    (the same solution applied for yAxis) */

    composite.yAxis().ticks(5).outerTickSize(0);
}

// ------------- Composite line chart presenting total number of accidents by hour -------------

function showAccidentsHour(ndx) {
    var dim = ndx.dimension(dc.pluck("hour"));

    var totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));
    var totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));
    var totalVehByHour = dim.group().reduceSum(dc.pluck("number_of_vehicles"));

    var composite = dc.compositeChart("#composite-hour");

    composite
        .width(750)
        .height(300)
        .margins({ top: 20, right: 60, bottom: 45, left: 40 })
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
            chart.selectAll("g.x text")
                .attr("dx", "-30")
                .attr("dy", "-5")
                .attr("transform", "rotate(-90)");
            /* solution that enabled label rotation found in here: 
            https://groups.google.com/forum/#!msg/dc-js-user-group/TjXkTTbOhsQ/7WU14__RGoI */
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("viewBox", "0 0 700 340");
            /* viewbox solution applied to resolve issue of responsiveness on mobile devices, solution found here:
            https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox*/
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("fill", "#ffffff");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
        })
        .compose([
            dc.lineChart(composite)
            .group(totalAccByHour, "Accidents")
            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
                if (d.key < 10) {
                    return numberWithCommas + " accidents at " + "0" +
                        d.key + ":00";
                }
                else {
                    return numberWithCommas + " accidents at " +
                        d.key + ":00";
                }
            }) // title function applied to display more explanatory text
            .colors("#ff7e0e")
            .renderDataPoints({ radius: 2.5 }),
            dc.lineChart(composite)
            .group(totalCasByHour, "Casualties")
            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
                if (d.key < 10) {
                    return numberWithCommas + " casualties at " + "0" +
                        d.key + ":00";
                }
                else {
                    return numberWithCommas + " casualties at " +
                        d.key + ":00";
                }
            }) // title function applied to display more explanatory text
            .colors("#d95350")
            .renderDataPoints({ radius: 2.5 }),
            dc.lineChart(composite)
            .group(totalVehByHour, "Vehicles involved")
            // title function applied to display more explanatory text
            .title(function(d) {
                var numberWithCommas = d.value.toLocaleString();
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
            .renderDataPoints({ radius: 2.5 })
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
    /* elasticX, outerTickSize and xAxisPadding applied to fix the issue with data point cut off
    (the same solution applied for yAxis) */
    composite.yAxis().ticks(5).outerTickSize(0);
}

// ------------- Tile showing average numbers of accidents / casualties per day -------------

function showAccidentsAvg(ndx) {
    var dim = ndx.dimension(dc.pluck("ref"));
    var totalAcc = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay("#accidents-average")
        .formatNumber(d3.format(".3n"))
        .group(totalAcc)
        .valueAccessor(function(d) {
            return (d.value / 365);
        });
}

function showCasualtiesAvg(ndx) {
    var dim = ndx.dimension(dc.pluck("ref"));
    var totalAcc = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay("#casualties-average")
        .formatNumber(d3.format(".3n"))
        .group(totalAcc)
        .valueAccessor(function(d) {
            return (d.value / 365);
        });
}

// ------------- Tile showing peak hours and its values -------------


// ------------- Peak Accidents -------------
function showPeakHrAcc(ndx) {
    var dim = ndx.dimension(dc.pluck("hour"));

    var totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay('#accidents-peak-hr')
        .group(totalAccByHour)
        .valueAccessor(function(d) {
            return totalAccByHour.top(1)[0].key;
        });
}

function showPeakHrAccValue(ndx) {
    var dim = ndx.dimension(dc.pluck("hour"));

    var totalAccByHour = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.numberDisplay('#accidents-peak-value')
        .group(totalAccByHour)
        .valueAccessor(function(d) {
            return totalAccByHour.top(1)[0].value;
        });
}

// ------------- Peak Casualties -------------

function showPeakHrCas(ndx) {
    var dim = ndx.dimension(dc.pluck("hour"));

    var totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay('#casualties-peak-hr')
        .group(totalCasByHour)
        .valueAccessor(function(d) {
            return totalCasByHour.top(1)[0].key;
        });
}

function showPeakHrCasValue(ndx) {
    var dim = ndx.dimension(dc.pluck("hour"));

    var totalCasByHour = dim.group().reduceSum(dc.pluck("number_of_casualties"));

    dc.numberDisplay('#casualties-peak-value')
        .group(totalCasByHour)
        .valueAccessor(function(d) {
            return totalCasByHour.top(1)[0].value;
        });
}
