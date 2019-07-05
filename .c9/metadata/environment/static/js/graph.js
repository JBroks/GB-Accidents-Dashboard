{"filter":false,"title":"graph.js","tooltip":"/static/js/graph.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":474,"column":44},"end":{"row":474,"column":46},"action":"remove","lines":["45"],"id":10327},{"start":{"row":474,"column":44},"end":{"row":474,"column":45},"action":"insert","lines":["9"]},{"start":{"row":474,"column":45},"end":{"row":474,"column":46},"action":"insert","lines":["0"]}],[{"start":{"row":473,"column":34},"end":{"row":474,"column":0},"action":"insert","lines":["",""],"id":10328},{"start":{"row":474,"column":0},"end":{"row":474,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":474,"column":16},"end":{"row":474,"column":34},"action":"insert","lines":[".attr('dx', '-30')"],"id":10329}],[{"start":{"row":474,"column":24},"end":{"row":474,"column":25},"action":"remove","lines":["x"],"id":10330},{"start":{"row":474,"column":24},"end":{"row":474,"column":25},"action":"insert","lines":["y"]}],[{"start":{"row":474,"column":30},"end":{"row":474,"column":31},"action":"remove","lines":["3"],"id":10331}],[{"start":{"row":474,"column":30},"end":{"row":474,"column":31},"action":"insert","lines":["1"],"id":10332}],[{"start":{"row":474,"column":30},"end":{"row":474,"column":31},"action":"remove","lines":["1"],"id":10333},{"start":{"row":474,"column":29},"end":{"row":474,"column":30},"action":"remove","lines":["-"]}],[{"start":{"row":474,"column":29},"end":{"row":474,"column":30},"action":"remove","lines":["0"],"id":10334}],[{"start":{"row":474,"column":29},"end":{"row":474,"column":30},"action":"insert","lines":["-"],"id":10335},{"start":{"row":474,"column":30},"end":{"row":474,"column":31},"action":"insert","lines":["5"]}],[{"start":{"row":445,"column":0},"end":{"row":449,"column":9},"action":"remove","lines":["","","","","//testing"],"id":10336},{"start":{"row":444,"column":0},"end":{"row":445,"column":0},"action":"remove","lines":["",""]},{"start":{"row":443,"column":1},"end":{"row":444,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":335,"column":0},"end":{"row":379,"column":9},"action":"remove","lines":["/*","function show_accidents_month(ndx) {","","    var dim = ndx.dimension(dc.pluck('date'));","","    var totalAccByMonth = dim.group().reduceSum(dc.pluck('number_of_accidents'));","","    var minDate = dim.bottom(1)[0].date;","    var maxDate = dim.top(1)[0].date;","","    dc.lineChart(\"#accidents-month\")","        .width(750)","        .height(300)","        .margins({ top: 10, right: 60, bottom: 20, left: 40 })","        .dimension(dim)","        .group(totalAccByMonth)","        .transitionDuration(500)","        .renderArea(true)","        .renderDataPoints({ radius: 2.5, fillOpacity: 1.0 })","        .brushOn(false)","        .elasticY(true)","        .title(function(d) {","            var numberWithCommas = d.value.toLocaleString();","            return numberWithCommas + \" accidents\";","        })","        .on('pretransition', function(chart) {","            chart.select(\"svg\")","                .attr(\"height\", \"100%\")","                .attr(\"width\", \"100%\")","                .attr(\"viewBox\", \"0 0 700 300\"); // viewbox solution applied to resolve issue of responsiveness on mobile devices, solution found here: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox","            chart.selectAll('.dc-chart text')","                .attr(\"fill\", \"#E5E5E5\");","            chart.selectAll('.dc-legend-item text')","                .attr(\"fill\", \"#ffffff\");","            chart.selectAll('line')","                .style(\"stroke\", \"#E5E5E5\");","            chart.selectAll('.domain')","                .style(\"stroke\", \"#E5E5E5\");","        })","        .x(d3.time.scale().domain([minDate, maxDate]))","        .xAxis().ticks(12).tickFormat(d3.time.format(\"%b\"));","","}*/","","//testing"],"id":10337}],[{"start":{"row":85,"column":32},"end":{"row":85,"column":39},"action":"remove","lines":["#d9534f"],"id":10338}],[{"start":{"row":85,"column":32},"end":{"row":85,"column":33},"action":"insert","lines":["/"],"id":10339},{"start":{"row":85,"column":33},"end":{"row":85,"column":34},"action":"insert","lines":["/"]},{"start":{"row":85,"column":34},"end":{"row":85,"column":35},"action":"insert","lines":["/"]},{"start":{"row":85,"column":35},"end":{"row":85,"column":36},"action":"insert","lines":["/"]},{"start":{"row":85,"column":36},"end":{"row":85,"column":37},"action":"insert","lines":["/"]},{"start":{"row":85,"column":37},"end":{"row":85,"column":38},"action":"insert","lines":["/"]},{"start":{"row":85,"column":38},"end":{"row":85,"column":39},"action":"insert","lines":["/"]},{"start":{"row":85,"column":39},"end":{"row":85,"column":40},"action":"insert","lines":["/"]},{"start":{"row":85,"column":40},"end":{"row":85,"column":41},"action":"insert","lines":["/"]},{"start":{"row":85,"column":41},"end":{"row":85,"column":42},"action":"insert","lines":["/"]},{"start":{"row":85,"column":42},"end":{"row":85,"column":43},"action":"insert","lines":["/"]},{"start":{"row":85,"column":43},"end":{"row":85,"column":44},"action":"insert","lines":["/"]},{"start":{"row":85,"column":44},"end":{"row":85,"column":45},"action":"insert","lines":["/"]},{"start":{"row":85,"column":45},"end":{"row":85,"column":46},"action":"insert","lines":["/"]},{"start":{"row":85,"column":46},"end":{"row":85,"column":47},"action":"insert","lines":["/"]},{"start":{"row":85,"column":47},"end":{"row":85,"column":48},"action":"insert","lines":["/"]}],[{"start":{"row":85,"column":48},"end":{"row":85,"column":49},"action":"insert","lines":["/"],"id":10340},{"start":{"row":85,"column":49},"end":{"row":85,"column":50},"action":"insert","lines":["/"]},{"start":{"row":85,"column":50},"end":{"row":85,"column":51},"action":"insert","lines":["/"]}],[{"start":{"row":124,"column":39},"end":{"row":124,"column":40},"action":"insert","lines":[" "],"id":10341}],[{"start":{"row":124,"column":40},"end":{"row":124,"column":47},"action":"insert","lines":["#d9534f"],"id":10342}],[{"start":{"row":124,"column":32},"end":{"row":124,"column":39},"action":"remove","lines":["#fd8c3d"],"id":10343}],[{"start":{"row":124,"column":32},"end":{"row":124,"column":33},"action":"remove","lines":[" "],"id":10344}],[{"start":{"row":85,"column":32},"end":{"row":85,"column":51},"action":"remove","lines":["///////////////////"],"id":10345},{"start":{"row":85,"column":32},"end":{"row":85,"column":39},"action":"insert","lines":["#fd8c3d"]}],[{"start":{"row":194,"column":115},"end":{"row":195,"column":0},"action":"insert","lines":["",""],"id":10346},{"start":{"row":195,"column":0},"end":{"row":195,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":195,"column":12},"end":{"row":195,"column":24},"action":"insert","lines":["pie-slice _0"],"id":10347}],[{"start":{"row":195,"column":12},"end":{"row":195,"column":13},"action":"insert","lines":["c"],"id":10348},{"start":{"row":195,"column":13},"end":{"row":195,"column":14},"action":"insert","lines":["h"]},{"start":{"row":195,"column":14},"end":{"row":195,"column":15},"action":"insert","lines":["a"]},{"start":{"row":195,"column":15},"end":{"row":195,"column":16},"action":"insert","lines":["r"]},{"start":{"row":195,"column":16},"end":{"row":195,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":195,"column":17},"end":{"row":195,"column":18},"action":"insert","lines":["."],"id":10349},{"start":{"row":195,"column":18},"end":{"row":195,"column":19},"action":"insert","lines":["S"]},{"start":{"row":195,"column":19},"end":{"row":195,"column":20},"action":"insert","lines":["e"]},{"start":{"row":195,"column":20},"end":{"row":195,"column":21},"action":"insert","lines":["l"]},{"start":{"row":195,"column":21},"end":{"row":195,"column":22},"action":"insert","lines":["e"]},{"start":{"row":195,"column":22},"end":{"row":195,"column":23},"action":"insert","lines":["c"]},{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"insert","lines":["t"]}],[{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"remove","lines":["t"],"id":10350},{"start":{"row":195,"column":22},"end":{"row":195,"column":23},"action":"remove","lines":["c"]},{"start":{"row":195,"column":21},"end":{"row":195,"column":22},"action":"remove","lines":["e"]},{"start":{"row":195,"column":20},"end":{"row":195,"column":21},"action":"remove","lines":["l"]},{"start":{"row":195,"column":19},"end":{"row":195,"column":20},"action":"remove","lines":["e"]},{"start":{"row":195,"column":18},"end":{"row":195,"column":19},"action":"remove","lines":["S"]}],[{"start":{"row":195,"column":18},"end":{"row":195,"column":19},"action":"insert","lines":["s"],"id":10351},{"start":{"row":195,"column":19},"end":{"row":195,"column":20},"action":"insert","lines":["e"]},{"start":{"row":195,"column":20},"end":{"row":195,"column":21},"action":"insert","lines":["l"]},{"start":{"row":195,"column":21},"end":{"row":195,"column":22},"action":"insert","lines":["e"]},{"start":{"row":195,"column":22},"end":{"row":195,"column":23},"action":"insert","lines":["c"]},{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"insert","lines":["r"]}],[{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"remove","lines":["r"],"id":10352}],[{"start":{"row":195,"column":23},"end":{"row":195,"column":24},"action":"insert","lines":["t"],"id":10353}],[{"start":{"row":195,"column":18},"end":{"row":195,"column":24},"action":"remove","lines":["select"],"id":10354},{"start":{"row":195,"column":18},"end":{"row":195,"column":26},"action":"insert","lines":["select()"]}],[{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"remove","lines":[")"],"id":10355}],[{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"insert","lines":["'"],"id":10356},{"start":{"row":195,"column":26},"end":{"row":195,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":195,"column":26},"end":{"row":195,"column":27},"action":"remove","lines":["."],"id":10357},{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"remove","lines":["'"]}],[{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"insert","lines":["\""],"id":10358},{"start":{"row":195,"column":26},"end":{"row":195,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":195,"column":37},"end":{"row":195,"column":38},"action":"insert","lines":["."],"id":10359}],[{"start":{"row":195,"column":40},"end":{"row":195,"column":41},"action":"insert","lines":["\""],"id":10360},{"start":{"row":195,"column":41},"end":{"row":195,"column":42},"action":"insert","lines":[")"]}],[{"start":{"row":195,"column":42},"end":{"row":196,"column":0},"action":"insert","lines":["",""],"id":10361},{"start":{"row":196,"column":0},"end":{"row":196,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":196,"column":12},"end":{"row":196,"column":13},"action":"insert","lines":[";"],"id":10362}],[{"start":{"row":195,"column":42},"end":{"row":196,"column":0},"action":"insert","lines":["",""],"id":10363},{"start":{"row":196,"column":0},"end":{"row":196,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":196,"column":8},"end":{"row":196,"column":12},"action":"remove","lines":["    "],"id":10365},{"start":{"row":196,"column":8},"end":{"row":196,"column":9},"action":"insert","lines":["."]},{"start":{"row":196,"column":9},"end":{"row":196,"column":10},"action":"insert","lines":["a"]},{"start":{"row":196,"column":10},"end":{"row":196,"column":11},"action":"insert","lines":["t"]},{"start":{"row":196,"column":11},"end":{"row":196,"column":12},"action":"insert","lines":["t"]},{"start":{"row":196,"column":12},"end":{"row":196,"column":13},"action":"insert","lines":["r"]}],[{"start":{"row":196,"column":13},"end":{"row":196,"column":15},"action":"insert","lines":["()"],"id":10366}],[{"start":{"row":196,"column":14},"end":{"row":196,"column":16},"action":"insert","lines":["\"\""],"id":10367}],[{"start":{"row":196,"column":15},"end":{"row":196,"column":16},"action":"insert","lines":["f"],"id":10368},{"start":{"row":196,"column":16},"end":{"row":196,"column":17},"action":"insert","lines":["i"]},{"start":{"row":196,"column":17},"end":{"row":196,"column":18},"action":"insert","lines":["l"]},{"start":{"row":196,"column":18},"end":{"row":196,"column":19},"action":"insert","lines":["l"]}],[{"start":{"row":196,"column":20},"end":{"row":196,"column":21},"action":"insert","lines":[","],"id":10369}],[{"start":{"row":196,"column":21},"end":{"row":196,"column":22},"action":"insert","lines":[" "],"id":10370},{"start":{"row":196,"column":22},"end":{"row":196,"column":23},"action":"insert","lines":["r"]},{"start":{"row":196,"column":23},"end":{"row":196,"column":24},"action":"insert","lines":["e"]},{"start":{"row":196,"column":24},"end":{"row":196,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":196,"column":25},"end":{"row":196,"column":26},"action":"insert","lines":["\""],"id":10371}],[{"start":{"row":196,"column":25},"end":{"row":196,"column":26},"action":"remove","lines":["\""],"id":10372},{"start":{"row":196,"column":24},"end":{"row":196,"column":25},"action":"remove","lines":["d"]},{"start":{"row":196,"column":23},"end":{"row":196,"column":24},"action":"remove","lines":["e"]},{"start":{"row":196,"column":22},"end":{"row":196,"column":23},"action":"remove","lines":["r"]}],[{"start":{"row":196,"column":22},"end":{"row":196,"column":24},"action":"insert","lines":["\"\""],"id":10373}],[{"start":{"row":196,"column":23},"end":{"row":196,"column":24},"action":"insert","lines":["r"],"id":10374},{"start":{"row":196,"column":24},"end":{"row":196,"column":25},"action":"insert","lines":["e"]},{"start":{"row":196,"column":25},"end":{"row":196,"column":26},"action":"insert","lines":["d"]}],[{"start":{"row":196,"column":8},"end":{"row":196,"column":16},"action":"insert","lines":["        "],"id":10375},{"start":{"row":196,"column":36},"end":{"row":197,"column":12},"action":"remove","lines":["","            "]},{"start":{"row":344,"column":0},"end":{"row":344,"column":4},"action":"remove","lines":["    "]},{"start":{"row":379,"column":12},"end":{"row":379,"column":16},"action":"insert","lines":["    "]},{"start":{"row":380,"column":12},"end":{"row":380,"column":16},"action":"insert","lines":["    "]},{"start":{"row":381,"column":0},"end":{"row":381,"column":4},"action":"insert","lines":["    "]},{"start":{"row":386,"column":12},"end":{"row":386,"column":16},"action":"insert","lines":["    "]},{"start":{"row":387,"column":12},"end":{"row":387,"column":16},"action":"insert","lines":["    "]},{"start":{"row":388,"column":0},"end":{"row":388,"column":4},"action":"insert","lines":["    "]},{"start":{"row":393,"column":12},"end":{"row":393,"column":16},"action":"insert","lines":["    "]},{"start":{"row":394,"column":12},"end":{"row":394,"column":16},"action":"insert","lines":["    "]},{"start":{"row":395,"column":0},"end":{"row":395,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":195,"column":24},"end":{"row":195,"column":25},"action":"insert","lines":["A"],"id":10376},{"start":{"row":195,"column":25},"end":{"row":195,"column":26},"action":"insert","lines":["l"]},{"start":{"row":195,"column":26},"end":{"row":195,"column":27},"action":"insert","lines":["l"]}],[{"start":{"row":194,"column":115},"end":{"row":196,"column":37},"action":"remove","lines":["","            chart.selectAll(\".pie-slice ._0\")","                .attr(\"fill\", \"red\");"],"id":10377}],[{"start":{"row":183,"column":32},"end":{"row":184,"column":0},"action":"insert","lines":["",""],"id":10378},{"start":{"row":184,"column":0},"end":{"row":184,"column":8},"action":"insert","lines":["        "]},{"start":{"row":184,"column":8},"end":{"row":184,"column":9},"action":"insert","lines":["."]},{"start":{"row":184,"column":9},"end":{"row":184,"column":10},"action":"insert","lines":["c"]},{"start":{"row":184,"column":10},"end":{"row":184,"column":11},"action":"insert","lines":["o"]},{"start":{"row":184,"column":11},"end":{"row":184,"column":12},"action":"insert","lines":["l"]},{"start":{"row":184,"column":12},"end":{"row":184,"column":13},"action":"insert","lines":["o"]}],[{"start":{"row":184,"column":13},"end":{"row":184,"column":14},"action":"insert","lines":["r"],"id":10379},{"start":{"row":184,"column":14},"end":{"row":184,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":184,"column":15},"end":{"row":184,"column":17},"action":"insert","lines":["()"],"id":10380}],[{"start":{"row":184,"column":8},"end":{"row":184,"column":17},"action":"remove","lines":[".colors()"],"id":10387},{"start":{"row":184,"column":8},"end":{"row":185,"column":52},"action":"insert","lines":[".colors(d3.scale.ordinal().range(","  [ '#1f78b4', '#b2df8a', '#cab2d6'..., '#bc80bd']);"]}],[{"start":{"row":185,"column":1},"end":{"row":185,"column":2},"action":"remove","lines":[" "],"id":10388},{"start":{"row":185,"column":0},"end":{"row":185,"column":1},"action":"remove","lines":[" "]},{"start":{"row":184,"column":41},"end":{"row":185,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":184,"column":76},"end":{"row":184,"column":77},"action":"remove","lines":["."],"id":10389},{"start":{"row":184,"column":75},"end":{"row":184,"column":76},"action":"remove","lines":["."]},{"start":{"row":184,"column":74},"end":{"row":184,"column":75},"action":"remove","lines":["."]},{"start":{"row":184,"column":73},"end":{"row":184,"column":74},"action":"remove","lines":["'"]}],[{"start":{"row":184,"column":73},"end":{"row":184,"column":74},"action":"insert","lines":["'"],"id":10390}],[{"start":{"row":184,"column":87},"end":{"row":184,"column":88},"action":"remove","lines":[";"],"id":10391}],[{"start":{"row":184,"column":87},"end":{"row":184,"column":88},"action":"insert","lines":[")"],"id":10392}],[{"start":{"row":184,"column":74},"end":{"row":184,"column":85},"action":"remove","lines":[", '#bc80bd'"],"id":10393}],[{"start":{"row":184,"column":44},"end":{"row":184,"column":51},"action":"remove","lines":["#1f78b4"],"id":10394},{"start":{"row":184,"column":44},"end":{"row":184,"column":45},"action":"insert","lines":["r"]},{"start":{"row":184,"column":45},"end":{"row":184,"column":46},"action":"insert","lines":["e"]},{"start":{"row":184,"column":46},"end":{"row":184,"column":47},"action":"insert","lines":["d"]}],[{"start":{"row":184,"column":51},"end":{"row":184,"column":58},"action":"remove","lines":["#b2df8a"],"id":10395},{"start":{"row":184,"column":51},"end":{"row":184,"column":52},"action":"insert","lines":["o"]},{"start":{"row":184,"column":52},"end":{"row":184,"column":53},"action":"insert","lines":["r"]},{"start":{"row":184,"column":53},"end":{"row":184,"column":54},"action":"insert","lines":["a"]},{"start":{"row":184,"column":54},"end":{"row":184,"column":55},"action":"insert","lines":["n"]},{"start":{"row":184,"column":55},"end":{"row":184,"column":56},"action":"insert","lines":["g"]},{"start":{"row":184,"column":56},"end":{"row":184,"column":57},"action":"insert","lines":["e"]}],[{"start":{"row":184,"column":61},"end":{"row":184,"column":68},"action":"remove","lines":["#cab2d6"],"id":10396},{"start":{"row":184,"column":61},"end":{"row":184,"column":62},"action":"insert","lines":["b"]},{"start":{"row":184,"column":62},"end":{"row":184,"column":63},"action":"insert","lines":["l"]},{"start":{"row":184,"column":63},"end":{"row":184,"column":64},"action":"insert","lines":["u"]},{"start":{"row":184,"column":64},"end":{"row":184,"column":65},"action":"insert","lines":["e"]}],[{"start":{"row":184,"column":44},"end":{"row":184,"column":47},"action":"remove","lines":["red"],"id":10397},{"start":{"row":184,"column":44},"end":{"row":184,"column":45},"action":"insert","lines":["b"]},{"start":{"row":184,"column":45},"end":{"row":184,"column":46},"action":"insert","lines":["l"]},{"start":{"row":184,"column":46},"end":{"row":184,"column":47},"action":"insert","lines":["u"]},{"start":{"row":184,"column":47},"end":{"row":184,"column":48},"action":"insert","lines":["e"]}],[{"start":{"row":184,"column":62},"end":{"row":184,"column":66},"action":"remove","lines":["blue"],"id":10398},{"start":{"row":184,"column":62},"end":{"row":184,"column":63},"action":"insert","lines":["r"]},{"start":{"row":184,"column":63},"end":{"row":184,"column":64},"action":"insert","lines":["e"]},{"start":{"row":184,"column":64},"end":{"row":184,"column":65},"action":"insert","lines":["d"]}],[{"start":{"row":184,"column":62},"end":{"row":184,"column":65},"action":"remove","lines":["red"],"id":10399},{"start":{"row":184,"column":62},"end":{"row":184,"column":69},"action":"insert","lines":["#e6550e"]}],[{"start":{"row":184,"column":52},"end":{"row":184,"column":58},"action":"remove","lines":["orange"],"id":10400},{"start":{"row":184,"column":52},"end":{"row":184,"column":59},"action":"insert","lines":["#fd8c3d"]}],[{"start":{"row":184,"column":44},"end":{"row":184,"column":48},"action":"remove","lines":["blue"],"id":10401},{"start":{"row":184,"column":44},"end":{"row":184,"column":51},"action":"insert","lines":["#3182bc"]}],[{"start":{"row":124,"column":33},"end":{"row":124,"column":39},"action":"remove","lines":["d9534f"],"id":10403},{"start":{"row":124,"column":32},"end":{"row":124,"column":33},"action":"remove","lines":["#"]}],[{"start":{"row":124,"column":32},"end":{"row":124,"column":39},"action":"insert","lines":["#e6550e"],"id":10404}],[{"start":{"row":85,"column":33},"end":{"row":85,"column":39},"action":"remove","lines":["fd8c3d"],"id":10405},{"start":{"row":85,"column":32},"end":{"row":85,"column":33},"action":"remove","lines":["#"]}],[{"start":{"row":85,"column":32},"end":{"row":85,"column":39},"action":"insert","lines":["#fd8b3e"],"id":10406}],[{"start":{"row":287,"column":23},"end":{"row":288,"column":0},"action":"insert","lines":["",""],"id":10407},{"start":{"row":288,"column":0},"end":{"row":288,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":288,"column":8},"end":{"row":288,"column":77},"action":"insert","lines":[".colors(d3.scale.ordinal().range([ '#3182bc', '#fd8c3d', '#e6550e']))"],"id":10408}],[{"start":{"row":288,"column":43},"end":{"row":288,"column":52},"action":"remove","lines":["'#3182bc'"],"id":10410}],[{"start":{"row":288,"column":65},"end":{"row":288,"column":66},"action":"insert","lines":[" "],"id":10411}],[{"start":{"row":288,"column":66},"end":{"row":288,"column":75},"action":"insert","lines":["'#3182bc'"],"id":10412}],[{"start":{"row":288,"column":56},"end":{"row":288,"column":65},"action":"remove","lines":["'#e6550e'"],"id":10413}],[{"start":{"row":288,"column":55},"end":{"row":288,"column":56},"action":"remove","lines":[" "],"id":10414}],[{"start":{"row":288,"column":43},"end":{"row":288,"column":52},"action":"insert","lines":["'#e6550e'"],"id":10415}],[{"start":{"row":188,"column":19},"end":{"row":188,"column":20},"action":"insert","lines":["d"],"id":10424},{"start":{"row":188,"column":20},"end":{"row":188,"column":21},"action":"insert","lines":["."]},{"start":{"row":188,"column":21},"end":{"row":188,"column":22},"action":"insert","lines":["k"]},{"start":{"row":188,"column":22},"end":{"row":188,"column":23},"action":"insert","lines":["e"]},{"start":{"row":188,"column":23},"end":{"row":188,"column":24},"action":"insert","lines":["y"]}],[{"start":{"row":188,"column":24},"end":{"row":188,"column":25},"action":"insert","lines":[" "],"id":10425},{"start":{"row":188,"column":25},"end":{"row":188,"column":26},"action":"insert","lines":["+"]}],[{"start":{"row":188,"column":26},"end":{"row":188,"column":27},"action":"insert","lines":[" "],"id":10426},{"start":{"row":188,"column":27},"end":{"row":188,"column":28},"action":"insert","lines":["\""]}],[{"start":{"row":188,"column":28},"end":{"row":188,"column":29},"action":"insert","lines":[":"],"id":10427}],[{"start":{"row":188,"column":29},"end":{"row":188,"column":30},"action":"insert","lines":[" "],"id":10428},{"start":{"row":188,"column":30},"end":{"row":188,"column":31},"action":"insert","lines":["\""]}],[{"start":{"row":188,"column":31},"end":{"row":188,"column":32},"action":"insert","lines":[" "],"id":10429},{"start":{"row":188,"column":32},"end":{"row":188,"column":33},"action":"insert","lines":["+"]}],[{"start":{"row":188,"column":33},"end":{"row":188,"column":34},"action":"insert","lines":[" "],"id":10430}],[{"start":{"row":228,"column":19},"end":{"row":228,"column":33},"action":"insert","lines":["d.key + \": \" +"],"id":10431}],[{"start":{"row":228,"column":33},"end":{"row":228,"column":34},"action":"insert","lines":[" "],"id":10432}],[{"start":{"row":423,"column":43},"end":{"row":424,"column":0},"action":"insert","lines":["",""],"id":10433},{"start":{"row":424,"column":0},"end":{"row":424,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":424,"column":12},"end":{"row":425,"column":49},"action":"insert","lines":["chart.selectAll(\".bar\")","                .style('pointer-events', 'none');"],"id":10434}],[{"start":{"row":424,"column":30},"end":{"row":424,"column":33},"action":"remove","lines":["bar"],"id":10435},{"start":{"row":424,"column":30},"end":{"row":424,"column":31},"action":"insert","lines":["d"]},{"start":{"row":424,"column":31},"end":{"row":424,"column":32},"action":"insert","lines":["o"]},{"start":{"row":424,"column":32},"end":{"row":424,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":425,"column":42},"end":{"row":425,"column":46},"action":"remove","lines":["none"],"id":10436},{"start":{"row":425,"column":42},"end":{"row":425,"column":43},"action":"insert","lines":["a"]},{"start":{"row":425,"column":43},"end":{"row":425,"column":44},"action":"insert","lines":["u"]},{"start":{"row":425,"column":44},"end":{"row":425,"column":45},"action":"insert","lines":["t"]},{"start":{"row":425,"column":45},"end":{"row":425,"column":46},"action":"insert","lines":["o"]}],[{"start":{"row":425,"column":31},"end":{"row":425,"column":38},"action":"remove","lines":["-events"],"id":10437}],[{"start":{"row":425,"column":24},"end":{"row":425,"column":31},"action":"remove","lines":["pointer"],"id":10438},{"start":{"row":425,"column":24},"end":{"row":425,"column":25},"action":"insert","lines":["c"]},{"start":{"row":425,"column":25},"end":{"row":425,"column":26},"action":"insert","lines":["u"]},{"start":{"row":425,"column":26},"end":{"row":425,"column":27},"action":"insert","lines":["r"]},{"start":{"row":425,"column":27},"end":{"row":425,"column":28},"action":"insert","lines":["s"]},{"start":{"row":425,"column":28},"end":{"row":425,"column":29},"action":"insert","lines":["o"]},{"start":{"row":425,"column":29},"end":{"row":425,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":425,"column":34},"end":{"row":425,"column":38},"action":"remove","lines":["auto"],"id":10439},{"start":{"row":425,"column":34},"end":{"row":425,"column":35},"action":"insert","lines":["p"]},{"start":{"row":425,"column":35},"end":{"row":425,"column":36},"action":"insert","lines":["o"]},{"start":{"row":425,"column":36},"end":{"row":425,"column":37},"action":"insert","lines":["i"]},{"start":{"row":425,"column":37},"end":{"row":425,"column":38},"action":"insert","lines":["n"]},{"start":{"row":425,"column":38},"end":{"row":425,"column":39},"action":"insert","lines":["t"]},{"start":{"row":425,"column":39},"end":{"row":425,"column":40},"action":"insert","lines":["e"]},{"start":{"row":425,"column":40},"end":{"row":425,"column":41},"action":"insert","lines":["r"]}],[{"start":{"row":360,"column":26},"end":{"row":361,"column":0},"action":"insert","lines":["",""],"id":10440},{"start":{"row":361,"column":0},"end":{"row":361,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":361,"column":4},"end":{"row":361,"column":8},"action":"remove","lines":["    "],"id":10452},{"start":{"row":361,"column":0},"end":{"row":361,"column":4},"action":"remove","lines":["    "]},{"start":{"row":360,"column":26},"end":{"row":361,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":360,"column":26},"end":{"row":361,"column":0},"action":"insert","lines":["",""],"id":10453},{"start":{"row":361,"column":0},"end":{"row":361,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":361,"column":8},"end":{"row":369,"column":11},"action":"insert","lines":[".on(\"renderlet\", (function(chart) {","            chart.selectAll(\".dot\")","                .style('cursor', 'pointer');","            chart.selectAll(\"g.x text\")","                .attr('dx', '-30')","                .attr('dy', '-5')","                .attr('transform', \"rotate(-90)\"); // solution that enabled label rotation found in here: https://groups.google.com/forum/#!msg/dc-js-user-group/TjXkTTbOhsQ/7WU14__RGoIJ","","        }))"],"id":10454}],[{"start":{"row":364,"column":12},"end":{"row":368,"column":0},"action":"remove","lines":["chart.selectAll(\"g.x text\")","                .attr('dx', '-30')","                .attr('dy', '-5')","                .attr('transform', \"rotate(-90)\"); // solution that enabled label rotation found in here: https://groups.google.com/forum/#!msg/dc-js-user-group/TjXkTTbOhsQ/7WU14__RGoIJ",""],"id":10455},{"start":{"row":364,"column":8},"end":{"row":364,"column":12},"action":"remove","lines":["    "]},{"start":{"row":364,"column":4},"end":{"row":364,"column":8},"action":"remove","lines":["    "]},{"start":{"row":364,"column":0},"end":{"row":364,"column":4},"action":"remove","lines":["    "]},{"start":{"row":363,"column":44},"end":{"row":364,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":5581,"scrollleft":0,"selection":{"start":{"row":363,"column":24},"end":{"row":363,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":347,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1562337495078,"hash":"c716fce7573f9baab41329fc1df973705a708891"}