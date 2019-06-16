queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated.csv")
    .await(makeGraphs);

function makeGraphs(error, accData) {
    var ndx = crossfilter(accData);
    accData.forEach(function(d) {
        d.number_of_accidents = parseInt(d.number_of_accidents);
    })


    show_region_selector(ndx);
    show_accidents_severity(ndx);

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
            return d.key.toUpperCase();
        });
}


