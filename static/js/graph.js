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
    show_sparkline_acc(ndx);
    show_sparkline_cas(ndx);
    show_sparkline_veh(ndx);
    show_casualties_total(ndx);
    show_vehicles_total(ndx);
    show_accidents_severity(ndx);
    //show_percent_by_severity(ndx, "Slight", "#percent-of-slight");
    //show_percent_by_severity(ndx, "Serious", "#percent-of-serious");
    //show_percent_by_severity(ndx, "Fatal", "#percent-of-fatal");
    show_accidents_road(ndx);
    //show_percent_by_road(ndx, "Single carriageway", "#percent-of-single");
    //show_percent_by_road(ndx, "Dual carriageway", "#percent-of-dual");
    //show_percent_by_road(ndx, "Roundabout", "#percent-of-rbt");
    //show_percent_by_road(ndx, "One way street", "#percent-of-oneway");
    //show_percent_by_road(ndx, "Slip road", "#percent-of-slip");
    //show_percent_by_road(ndx, "Unknown", "#percent-of-unknown");
    show_accidents_hour(ndx);
    show_accidents_month(ndx);
    show_severity_distribution(ndx);


    dc.renderAll();
}

function show_region_selector(ndx, ) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();

    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group)
        .promptText('UK total')
        .multiple(false); //change to true if you decide to allow multiple selection
}

function show_accidents_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalAcc = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.numberDisplay("#accidents-total")
        .formatNumber(d3.format(".2s"))
        .group(totalAcc);
}

function show_sparkline_acc(ndx) {
    var dim = ndx.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-acc")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 10, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d){
        chart.filter(null);});
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

function show_sparkline_cas(ndx) {
    var dim = ndx.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-cas")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 10, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d){
        chart.filter(null);});
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

function show_sparkline_veh(ndx) {
    var dim = ndx.dimension(dc.pluck("day_of_week"));
    var group = dim.group().reduceSum(dc.pluck("number_of_accidents"));

    dc.barChart("#sparkline-veh")
        .width(80)
        .height(30)
        .margins({ left: -10, top: 10, right: 10, bottom: -1 })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .on("renderlet", (function(chart) {
            chart.selectAll(".bar").on("click", function(d){
        chart.filter(null);});
        }))
        .dimension(dim)
        .group(group);
}


function show_accidents_severity(ndx) {
    var dim = ndx.dimension(dc.pluck('accident_severity'));
    var totalAccBySeverity = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.pieChart("#accidents-severity")
        .width(320)
        .height(350)
        .slicesCap(3)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccBySeverity)
        .transitionDuration(500)
        .renderLabel(true)
        .legend(dc.legend().x(110).y(150).itemHeight(13).gap(5))
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) >= 4) {
                    return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                }
            });
            chart.selectAll('.dc-legend-item text')
                .text('')
                .append('tspan')
                .text(function(d) { return d.name; })
                .append('tspan')
                .attr('x', 100)
                .attr('text-anchor', 'end')
                .text(function(d) { return d.data.toLocaleString(); });
        });

}
/*
function show_percent_by_severity(ndx, severity, element) {
    var percentageOfAccBySeverity = ndx.groupAll().reduce(
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

        },
    );

    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function(d) {
            if (d.total == 0) {
                return 0;
            }
            else {
                return (d.by_severity / d.total);
            }
        })
        .group(percentageOfAccBySeverity);
}*/
/*
function show_accidents_road(ndx) {
    var dim = ndx.dimension(dc.pluck('road_type'));
    var totalAccByRoad = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.rowChart("#rd-type-split")
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .gap(5)
        .elasticX(false)
        .renderLabel(true)
        .dimension(dim)
        .group(totalAccByRoad)
        .transitionDuration(500);
}
*/

function show_accidents_road(ndx) {
    var dim = ndx.dimension(dc.pluck('road_type'));
    var totalAccByRoad = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.pieChart("#rd-type-split")
        .width(320)
        .height(350)
        .slicesCap(8)
        .innerRadius(95)
        .dimension(dim)
        .group(totalAccByRoad)
        .transitionDuration(500)
        .renderLabel(true)
        .legend(dc.legend().x(85).y(125).itemHeight(13).gap(5))
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) >= 4) {
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
/*
function show_percent_by_road(ndx, road, element) {
    var percentageOfAccByRoad = ndx.groupAll().reduce(
        function(p, v) {
            p.total += v.number_of_accidents;
            if (v.road_type === road) {
                p.by_road += v.number_of_accidents;
            }
            return p;
        },
        function(p, v) {
            p.total -= v.number_of_accidents;
            if (v.road_type === road) {
                p.by_road -= v.number_of_accidents;
            }
            return p;
        },
        function() {
            return { total: 0, by_road: 0 };

        },
    );

    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function(d) {
            if (d.total == 0) {
                return 0;
            }
            else {
                return (d.by_road / d.total);
            }
        })
        .group(percentageOfAccByRoad);
}*/

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
        .height(300)
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
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Percentage of accidents", 20)
        .xAxisLabel("Speed limit (mph)", 25)
        // .yAxis().tickFormat(function(d) { return d + "%" ;}) - why it doesn't work? 
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 60, left: 50 });
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
        .x(d3.time.scale().domain([minDate, maxDate]))
        .yAxisLabel("Total number of accidents")
        .on("renderlet", (function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-30')
                .attr('transform', "rotate(-45)");
        }))
        .yAxis().ticks(5);

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
        .x(d3.scale.linear().domain([0, 23]))
        .yAxisLabel("Total number of accidents")
        //   .yAxis().ticks(5).tickFormat(d3.format(".1s")) - why I can't edit x and y axis labels at the same time?
        .on("renderlet", (function(chart) {
            chart.selectAll("g.x text")
                .attr('dx', '-30')
                .attr('transform', "rotate(-45)");
        }))
        .xAxis().ticks(24).tickFormat(function(d) {
            if (d < 10) {
                return "0" + d + ':00';
            }
            else { return d + ':00'; }
        });

}
