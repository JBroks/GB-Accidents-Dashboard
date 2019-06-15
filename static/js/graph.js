queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated.csv")
    .await(makeGraphs);
    
function makeGraphs(error, accData) {
    var ndx = crossfilter(accData);
    
    show_region_selector(ndx);
    
    dc.renderAll();
}

function show_region_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('region'));
    var group = dim.group();
    
    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group)
        .promptText('UK total')
        .multiple(false);   //change to true if you decide to allow multiple selection
}