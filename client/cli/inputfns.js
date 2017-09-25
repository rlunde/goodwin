/* supported?, name, example url, input function, generator function */
function inputFunction(name) {
  let fn = funcs[name];
  if (fn != undefined) {
    return fn;
  } else {
    console.log("undefined input function: " + name)
    return undefined
  }
}
var funcs = {
  iBarChart: function(rl) {
    let props = {
      source_dir: {
        name: "sample code directory",
        type: "directory",
        set: false,
        default: "sample_bar_chart"
      }
    }
  }
}

module.exports.input = inputFunction;
