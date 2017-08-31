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
    let inputType = 'unknown';
    console.log("what file should we put the sample code in?");
    //TODO: use readline here with rl.question?
    while (inputType === 'unknown') {
      rl.question('Is your data in a file, or available via an API?', (answer) => {
        if (answer.toLowerCase().includes("file")) {
          inputType = 'file';
        } else if (answer.toLowerCase().includes("api")) {
          inputType = 'api';
        } else {
          console.log("I didn't understand that. Please say either 'file' or 'api'");
        }
      });
    }
    console.log(`Great! Let's plan on using #{inputType} input`);
  }
}

module.exports.input = inputFunction;
