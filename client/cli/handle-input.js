#!/usr/bin/env node

const d3types = require('./d3types');
const d3input = require('./inputfns');
const states = require('./states');
let config = {}
//const cmdPrompt = 'What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n';
const setConfig = function(rl, stateStack) {
  config.readline = rl;
  config.stateStack = stateStack;
  config.vis = null;
}
const onLine = function(line) {
  let s = config.stateStack[config.stateStack.length - 1];

  var cmdState = states.getState("GET_CMD");
  var paramsState = states.getState("GET_PARAMS");

  if (line == 'quit') {
    // TODO: confirm quit if we could lose data
    config.readline.close();
    return;
  }
  if (s.id === "GET_CMD") {
    if (line == 'list') {
      d3types.d3visList.map((t) => console.log(t.name));
    } else if (line === 'help' || line === '?') {
      console.log(states.help);
    } else if (line.toLowerCase().startsWith('gen ')) {
      let cmd = line.substring(4);
      let vis = d3types.findVis(cmd);
      if (vis === null) {
        console.log(`couldn't find a D3 visualization for ${cmd}`);
      } else {
        // TODO
        console.log(`You picked D3 visualization: ${vis.name}`);
        config.vis = vis;
        config.stateStack.push(paramsState);
        s = config.stateStack[config.stateStack.length - 1];
      }
    } else {
      // TODO - all the other commands
    }
  }
  if (s.id === "GET_PARAMS") {
    let fn = d3input.input(config.vis.inputfn);
    console.log(`fn is ${fn}`);
    fn.printArgs();
  } else {
    console.log(`you entered: ${line}\nCurrent state is ${JSON.stringify(s)}`);
  }
  config.readline.prompt(' >');
}

module.exports.setConfig = setConfig;
module.exports.onLine = onLine;
