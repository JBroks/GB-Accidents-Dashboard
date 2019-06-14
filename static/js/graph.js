queue()
    .defer(d3.csv, "data/Accidents_2017_aggregated.csv")
    .await(makeGraphs);
    
function makeGraphs(error, data) {
}