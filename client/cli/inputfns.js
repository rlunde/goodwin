/* supported?, name, example url, input function, generator function */
function inputFunction(name) {
  let fn = funcs[name];
  if (fn != undefined) {
    return fn();
  }
  else {
    console.log("undefined input function: " + name)
    return undefined
  }
}
var funcs = {
  iBarChart: function (rl) {
    console.log("what file should we put the sample code in?");
    //TODO: use readline here with rl.question?
  }
}

module.exports.input = inputFunction;
