queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated_v2.csv")
    .await(makeGraphs);

function makeGraphs(error, accData) {
    var ndx = crossfilter(accData);

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
    show_casualties_total(ndx);
    show_vehicles_total(ndx);
    show_accidents_severity(ndx);
    show_percent_by_severity(ndx, "Slight", "#percent-of-slight");
    show_percent_by_severity(ndx, "Serious", "#percent-of-serious");
    show_percent_by_severity(ndx, "Fatal", "#percent-of-fatal");
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
        .promptText('UK total')
        .multiple(false); //change to true if you decide to allow multiple selection
}

function show_accidents_severity(ndx) {
    var dim = ndx.dimension(dc.pluck('accident_severity'));
    var totalAccBySeverity = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.pieChart("#accidents-severity")
        .width(268)
        .height(280)
        .slicesCap(3)
        .innerRadius(50)
        .dimension(dim)
        .group(totalAccBySeverity)
        .transitionDuration(500)
        .renderLabel(false)
        .legend(dc.legend().x(160).y(170))
}

function show_accidents_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalAcc = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    dc.numberDisplay("#accidents-total")
        .formatNumber(d3.format(".2s"))
        .group(totalAcc);
}

function show_casualties_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalCas = dim.group().reduceSum(dc.pluck('number_of_casualties'));

    dc.numberDisplay("#casualties-total")
        .formatNumber(d3.format(".2s"))
        .group(totalCas);
}

function show_vehicles_total(ndx) {
    var dim = ndx.dimension(dc.pluck('ref'));
    var totalVeh = dim.group().reduceSum(dc.pluck('number_of_vehicles'));

    dc.numberDisplay("#vehicles-total")
        .formatNumber(d3.format(".2s"))
        .group(totalVeh);
}

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
}
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
        .width(268)
        .height(280)
        .slicesCap(3)
        .innerRadius(50)
        .dimension(dim)
        .group(totalAccByRoad)
        .transitionDuration(500)
        .renderLabel(false)
        .legend(dc.legend().x(160).y(170))
}


function show_accidents_month(ndx) {

    var dim = ndx.dimension(dc.pluck('date'));

    var totalAccByMonth = dim.group().reduceSum(dc.pluck('number_of_accidents'));

    var minDate = dim.bottom(1)[0].date;
    var maxDate = dim.top(1)[0].date;

    dc.lineChart("#accidents-month")
        .width(1000)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(totalAccByMonth)
        .transitionDuration(500)
        .renderDataPoints(true)
        .renderArea(true)
        .dotRadius(5)
        .brushOn(false)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Month")
        .yAxis().ticks(5);

}

function show_accidents_hour(ndx) {

    var dim = ndx.dimension(dc.pluck('hour'));

    var totalAccByHour = dim.group().reduceSum(dc.pluck('number_of_accidents'));


    dc.lineChart("#accidents-hour")
        .width(1000)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(totalAccByHour)
        .transitionDuration(500)
        .renderDataPoints(true)
        .renderArea(true)
        .dotRadius(5)
        .brushOn(false)
        .x(d3.scale.linear().domain([0, 23]))
        .xAxisLabel("Hour")
        .xAxis().ticks(24);

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
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 30, left: 30 });
}
