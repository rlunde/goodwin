function visProps(vis) {
  //console.log(`visProps passed ${JSON.stringify(vis)}`)
  let pl = propLists[vis.inputProps];
  if (pl != undefined) {
    return pl;
  } else {
    console.log("undefined input properties: " + vis.name)
    return undefined
  }
}
var propLists = {
  iBarChart: {
    source_dir: {
      name: "sample code directory",
      type: "directory",
      set: false,
      default: "sample_bar_chart"
    },
    barColor: {
      name: "bar color",
      type: "color",
      set: false,
      default: "blue"
    },
    barHoverColor: {
      name: "bar hover color",
      type: "color",
      set: false,
      default: "red"
    },
    data_type: {
      name: "data source type",
      type: "choice", // or tsv, or api
      selections: [
        "csv", "tsv", "api"
      ],
      default: "csv",
      set: false
    },
    data_source: {
      name: "data source",
      type: "string",
      default: "input.csv",
      set: false
    }
  }
}

module.exports.visProps = visProps;
