/* supported?, name, example url, input function, generator function */
const d3visList = [
  {
    supported: false,
    name: 'Alluvial Diagram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Arc Diagram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Area Chart',
    example: 'https://bl.ocks.org/mbostock/3883195',
    inputProps: null
  }, {
    supported: true,
    name: 'Bar Chart',
    example: 'https://bl.ocks.org/mbostock/3885304',
    inputProps: 'iBarChart'
  }, {
    supported: false,
    name: 'Box And Whisker Plot/Candlestick Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Bubble Cloud/Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Cartogram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Choropleth',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Connected Scatter Plot',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Contour/Isopleth/Isarithmic Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Customer Journey Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Dasymetric Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Dendrogram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Dependency Graph/Circular Hierarchy',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Dot Distribution Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Gantt Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Heat Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Histogram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Hive Plot',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Hyperbolic Tree',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Icicle/Partition Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Line Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Matrix',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Mosaic Display/Marimekko Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Node-Link Diagram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Parallel Coordinates/Parallel Sets',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Pie Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Polar Area/Rose/Circumplex Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Proportional Symbol Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Radar/Spider Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Radial Bar Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Radial Tree',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Ring Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Sankey Diagram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Scatter Plot',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Stacked Graph',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Step Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Stream Graph/ThemeRiver',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Subway/Tube Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Time Series',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Timeline',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Tree Map',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Unordered Bubble Chart/Bubble Cloud',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Venn Diagram',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Waterfall Chart',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Wedge Stack Graph (Radial Hierarchy)/Sunburst',
    example: null,
    inputProps: null
  }, {
    supported: false,
    name: 'Word Cloud',
    example: null,
    inputProps: null
  }
]
function findVis(name) {
  // console.log(`findVis: looking for ${name}`);
  let lcn = name.toLowerCase()
  let list = d3visList.filter((vis) => {
    let v = vis
      .name
      .toLowerCase()
    return v.startsWith(lcn)
  })
  if (list.length > 0) {
    return list[0]
  }
  console.log(`Couldn't find any visualization starting with ${name}`)
  return null
}
module.exports.d3visList = d3visList
module.exports.findVis = findVis
