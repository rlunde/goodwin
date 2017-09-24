/* supported?, name, example url, input function, generator function */
const d3visList = [{
    supported: false,
    name: "Alluvial Diagram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Arc Diagram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Area Chart",
    example: "https://bl.ocks.org/mbostock/3883195",
    inputfn: null,
    genfn: null
  },
  {
    supported: true,
    name: "Bar Chart",
    example: "https://bl.ocks.org/mbostock/3885304",
    inputfn: "iBarChart",
    genfn: "gBarChart"
  },
  {
    supported: false,
    name: "Box And Whisker Plot/Candlestick Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Bubble Cloud/Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Cartogram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Choropleth",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Connected Scatter Plot",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Contour/Isopleth/Isarithmic Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Customer Journey Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Dasymetric Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Dendrogram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Dependency Graph/Circular Hierarchy",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Dot Distribution Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Gantt Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Heat Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Histogram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Hive Plot",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Hyperbolic Tree",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Icicle/Partition Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Line Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Matrix",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Mosaic Display/Marimekko Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Node-Link Diagram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Parallel Coordinates/Parallel Sets",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Pie Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Polar Area/Rose/Circumplex Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Proportional Symbol Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Radar/Spider Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Radial Bar Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Radial Tree",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Ring Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Sankey Diagram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Scatter Plot",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Stacked Graph",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Step Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Stream Graph/ThemeRiver",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Subway/Tube Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Time Series",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Timeline",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Tree Map",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Unordered Bubble Chart/Bubble Cloud",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Venn Diagram",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Waterfall Chart",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Wedge Stack Graph (Radial Hierarchy)/Sunburst",
    example: null,
    inputfn: null,
    genfn: null
  },
  {
    supported: false,
    name: "Word Cloud",
    example: null,
    inputfn: null,
    genfn: null
  }
];
function findVis(name) {
  let list = d3visList.filter((vis) => {
    vis.name.toLowerCase().startsWith(name.toLowerCase);
  });
  if (list.length > 0) {
    return list[0];
  }
  return null;
}
module.exports.d3visList = d3visList;
module.exports.findVis = findVis;
