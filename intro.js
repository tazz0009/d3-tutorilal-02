(function (d3) {
  debugger;
  var svg = d3.select("svg");
  var circle = svg.append("circle");
  var width = parseFloat(svg.attr("width"));
  var height = parseFloat(svg.attr("height"));
  circle
    .attr("r", 200)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", "yellow");

  var g = svg.append("g").attr("transform", "translate(250, 200)");
  var mouth = g.append("path").attr(
    "d",
    d3.arc()({
      innerRadius: 80,
      outerRadius: 100,
      startAngle: Math.PI / 2,
      endAngle: (Math.PI * 3) / 2
    })
  );
})(d3);
