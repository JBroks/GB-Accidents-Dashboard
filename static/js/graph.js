queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated_v2.csv")
    .defer(d3.csv, "data/Accidents_2016_aggregated_v2.csv")
    .await(makeGraphs);

function makeGraphs(error, accData, accData16) {
    var ndx = crossfilter(accData);
    var ndx_16 = crossfilter(accData16);

    accData16.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    });

    accData.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    });

    accData.forEach(function(d) {
        d.hour = parseInt(d.hour);
    });

    var parseDate = d3.time.format("%d/%m/%Y").parse;
    accData.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    show_region_selector(ndx);
    show_accidents_total(ndx);
    show_sparkline_acc(ndx_16);
    show_sparkline_cas(ndx_16);
    show_sparkline_veh(ndx_16);
    show_casualties_total(ndx);
    show_vehicles_total(ndx);
    show_accidents_severity(ndx);
    show_accidents_road(ndx);
    show_accidents_hour(ndx);
    show_accidents_month(ndx);
    show_severity_distribution(ndx);

    dc.renderAll();
}

function show_region_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();


    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group)
        .promptText('All regions')
        .multiple(false) //change to true if you decide to allow multiple selection
        .title(function(d) {
            return d.key;
        });
}

function show_accidents_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalAcc = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.numberDisplay("#accidents-total")
        .formatNumber(d3.format(".2s"))
        .group(totalAcc);
}

function show_sparkline_acc(ndx_16) {
    var dim = ndx_16.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-acc")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 6, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            }); // code suggesting how to disable click for sparkline charts found in here: https://groups.google.com/forum/#!msg/dc-js-user-group/Fxg4vykNSqI/hgdj2PEomHsJ
            chart.selectAll(".bar")
                .style('pointer-events', 'none');
        }))
        .on("renderlet", (function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-30')
                .attr('transform', "rotate(-45)");
        }))
        .dimension(dim)
        .group(group);

}

function show_casualties_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalCas = dim.group().reduceSum(dc.pluck('number_of_casualties'));

    dc.numberDisplay("#casualties-total")
        .formatNumber(d3.format(".2s"))
        .group(totalCas);
}

function show_sparkline_cas(ndx_16) {
    var dim = ndx_16.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-cas")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 6, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style('pointer-events', 'none');
        }))
        .dimension(dim)
        .group(group);
}


function show_vehicles_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalVeh = dim.group().reduceSum(dc.pluck('number_of_vehicles'));

    dc.numberDisplay("#vehicles-total")
        .formatNumber(d3.format(".2s"))
        .group(totalVeh);
}

function show_sparkline_veh(ndx_16) {
    var dim = ndx_16.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-veh")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 6, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d) {
                chart.filter(null);
            });
            chart.selectAll(".bar")
                .style('pointer-events', 'none');
        }))
        .dimension(dim)
        .group(group);
}


function show_accidents_severity(ndx) {
    var dim = ndx.dimension(dc.pluck('accident_severity'));
    var totalAccBySeverity = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.pieChart("#accidents-severity")
        .width(320)
        .height(360)
        .slicesCap(3)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccBySeverity)
        .transitionDuration(500)
        .renderLabel(true)
        .legend(dc.legend().x(110).y(150).itemHeight(13).gap(5))
        .title(function(d) {
            return ((d.value / d3.sum(totalAccBySeverity.all(), function(d) { return d.value; })) * 100).toFixed(2) + "%";
        }) // solution inspired by the follwoing code: https://groups.google.com/forum/#!topic/dc-js-user-group/u-zPORy4-2Y
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) >= 5) {
                    return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                }
            }); // solution suggested by CI Tutor: https://github.com/dc-js/dc.js/blob/master/web/examples/pie.html
            chart.selectAll('.dc-legend-item text')
                .text('')
                .append('tspan')
                .text(function(d) { return d.name; })
                .append('tspan')
                .attr('x', 100)
                .attr('text-anchor', 'end')
                .text(function(d) { return d.data.toLocaleString(); });
        }); //toLocalString() method found in here: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

}

function show_accidents_road(ndx) {
    var dim = ndx.dimension(dc.pluck('road_type'));
    var totalAccByRoad = dim.group().reduceSum(dc.pluck('number_of_accidents'));

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
            return ((d.value / d3.sum(totalAccByRoad.all(), function(d) { return d.value; })) * 100).toFixed(2) + "%";
        })
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) >= 5) {
                    return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                }
            });
            chart.selectAll('.dc-legend-item text')
                .text('')
                .append('tspan')
                .text(function(d) { return d.name; })
                .append('tspan')
                .attr('x', 150)
                .attr('text-anchor', 'end')
                .text(function(d) { return d.data.toLocaleString(); });
        });

}

function show_severity_distribution(ndx) {

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
        .width(400)
        .height(360)
        .dimension(dim)
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
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) + "% of fatal accidents";
        })
        .title("Serious", function(d) {
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) + "% of serious accidents";
        })
        .title("Slight", function(d) {
            var percent = (d.value.by_severity / d.value.total) * 100;
            return d.key + " mph: " + percent.toFixed(1) + "% of slight accidents";
        })
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 40, left: 50 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Speed limit (mph)", 25)
        .yAxisLabel("Percentage of accidents", 20)
        .yAxis().tickFormat(function(d) { return d + "%"; }); //- why it doesn't work? ;

}

function show_accidents_month(ndx) {

    var dim = ndx.dimension(dc.pluck('date'));

    var totalAccByMonth = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    var minDate = dim.bottom(1)[0].date;
    var maxDate = dim.top(1)[0].date;

    dc.lineChart("#accidents-month")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 60, left: 50 })
        .dimension(dim)
        .group(totalAccByMonth)
        .transitionDuration(500)
        .renderDataPoints(true)
        .renderArea(true)
        .renderDataPoints({ radius: 2.5, fillOpacity: 1.0 })
        .brushOn(false)
        .elasticY(true)
        .title(function(d) {
            var numberWithCommas = d.value.toLocaleString();
            return numberWithCommas + " accidents";
        })
        .yAxisLabel("Total number of accidents")
        //.yAxis().ticks(5) - why i cant display it?
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxis().ticks(12).tickFormat(d3.time.format("%b"));

}

function show_accidents_hour(ndx) {

    var dim = ndx.dimension(dc.pluck('hour'));

    var totalAccByHour = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.lineChart("#accidents-hour")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 60, left: 50 })
        .dimension(dim)
        .group(totalAccByHour)
        .transitionDuration(500)
        .renderDataPoints(true)
        .renderArea(true)
        .renderDataPoints({ radius: 2.5, fillOpacity: 1.0 })
        .brushOn(false)
        .elasticY(true)
        .title(function(d) {
            var numberWithCommas = d.value.toLocaleString();
            if (d.key < 10) {
                return numberWithCommas + " accidents at " + "0" + d.key + ':00';
            }
            else { return numberWithCommas + " accidents at " + d.key + ':00'; }
        })
        .on("renderlet", (function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-30')
                .attr('transform', "rotate(-45)");
        })) // solution that enabled label rotation found in here: https://groups.google.com/forum/#!msg/dc-js-user-group/TjXkTTbOhsQ/7WU14__RGoIJ
        .yAxisLabel("Total number of accidents")
        //.yAxis().ticks(6).tickFormat(d3.format(".1s"))
        .x(d3.scale.linear().domain([0, 23]))
        .xAxis().ticks(24).tickFormat(function(d) {
            if (d < 10) {
                return "0" + d + ':00';
            }
            else { return d + ':00'; }
        });
}
