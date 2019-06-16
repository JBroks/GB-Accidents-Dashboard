queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated.csv")
    .await(makeGraphs);

function makeGraphs(error, accData) {
    var ndx = crossfilter(accData);

    accData.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    });

    show_region_selector(ndx);
    show_accidents_severity(ndx);
    show_percent_by_severity(ndx, "Slight", "#percent-of-slight");
    show_percent_by_severity(ndx, "Serious", "#percent-of-serious");
    show_percent_by_severity(ndx, "Fatal", "#percent-of-fatal");
    show_accidents_road(ndx);

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

    function add_item(p, v) {
        p.total += v.number_of_accidents;
        return p;
    }

    function remove_item(p, v) {
        p.total -= v.number_of_accidents;
        return p;
    }

    function initialise() {
        return { total: 0 };
    }

    var totalAccBySeverity = dim.group().reduce(add_item, remove_item, initialise);

    dc.pieChart("#accidents-severity")
        .width(368)
        .height(380)
        .slicesCap(3)
        .innerRadius(80)
        .dimension(dim)
        .group(totalAccBySeverity)
        .valueAccessor(function(d) {
            return d.value.total.toFixed(0);
        })
        .transitionDuration(500)
        .renderLabel(true)
        .label(function(d) {
            console.log('label');
            console.log(d);
            return d.key;
        });
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


function show_accidents_road(ndx) {
    var dim = ndx.dimension(dc.pluck('road_type'));

    function add_item(p, v) {
        p.total += v.number_of_accidents;
        return p;
    }

    function remove_item(p, v) {
        p.total -= v.number_of_accidents;
        return p;
    }

    function initialise() {
        return { total: 0 };
    }

    var totalAccByRoad = dim.group().reduce(add_item, remove_item, initialise);

    dc.rowChart("#rd-type-split")
        .width(400)
        .height(300)
        .gap(5)
        .renderTitleLabel(true)
        .dimension(dim)
        .group(totalAccByRoad)
        .valueAccessor(function(d) {
            return d.value.total.toFixed(0);
        })
        .transitionDuration(500);
}
