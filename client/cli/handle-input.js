#!/usr/bin/env node


// Other files in this repository:
const d3types = require('./d3types');
const d3input = require('./inputfns');
const states = require('./states');
let config = {}
//const cmdPrompt = 'What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n';
const setConfig = function(rl, stateStack, actionStack) {
  config.readline = rl;
  config.stateStack = stateStack;
  config.actionStack = actionStack;
  config.vis = null;
}
const onLine = function(line) {
  config.stateStack.pop();
  var getCmdState = states.getState("GET_CMD");
  config.stateStack.push(getCmdState);
  if (line == 'list') {
    d3types.d3visList.map((t) => console.log(t.name));
    actionPrompt();
  } else if (line == 'quit') {
    // TODO: confirm quit if we could lose data
    config.readline.close();
  } else {
    // TODO - all the other commands
    // console.log(`you entered: ${line}\n`);
    if (line === 'help' || line === '?') {
      console.log(states.help);
    }
    else if (line.toLowerCase().startsWith('gen ')) {
      let cmd = line.substring(4);
      let vis = d3types.findVis(cmd);
      if (vis === null) {
        console.log(`couldn't find a D3 visualization for ${cmd}`);
      }
      else {
        // TODO
        console.log(`You picked D3 visualization: ${vis.name}`);
        config.vis = vis;
        var getParamsState = states.getState("GET_PARAMS");
        config.stateStack.push(getParamsState);
      }
    }
    actionPrompt();
  }

}
const actionPrompt = function() {
  //console.log(config);
  let s = config.stateStack[config.stateStack.length - 1];
  let a = config.actionStack[config.actionStack.length - 1];
  console.log(`\n${s.prompt}`);
  if (a === "PROMPT_FOR_CMD") {
    // TODO: what should this be?
    config.readline.prompt(' >');
  } else {
    if (s.name === "GET_PARAMS") {
      
    } else {
      config.readline.prompt(' >');
    }
  }
}
module.exports.setConfig = setConfig;
module.exports.onLine = onLine;
module.exports.actionPrompt = actionPrompt;
