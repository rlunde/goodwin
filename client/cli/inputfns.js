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
    //TODO: figure out how to use co with prompt here?
    while (inputType === 'unknown') {
      console.log('Is your data in a file, or available via an API?')
      rl.prompt();
      //TODO: fix this -- need to move rl.on(x) to do a promise or something
      if (answer.toLowerCase().includes("file")) {
        inputType = 'file';
      } else if (answer.toLowerCase().includes("api")) {
        inputType = 'api';
      } else {
        console.log("I didn't understand that. Please say either 'file' or 'api'");
      }
    }
    console.log(`Great! Let's plan on using #{inputType} input`);
  }
}

module.exports.input = inputFunction;
