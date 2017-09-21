#!/usr/bin/env node


// Other files in this repository:
const d3types = require('./d3types');
const d3input = require('./inputfns');
let config = {}
const cmdPrompt = 'What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n';
const setConfig = function(rl, state, actionStack) {
  config.readline = rl;
  config.state = state;
  config.actionStack = actionStack
}
const onLine = function(line) {
  if (line == 'list') {
    d3types.d3visList.map((t) => console.log(t.name));
    console.log(`\n${cmdPrompt}`);
    config.readline.prompt();
  } else if (line == 'quit') {
    // TODO: confirm quit if we could lose data
    config.readline.close();
  } else {
    // TODO
    console.log(`you entered: ${line}\n`);
    config.readline.prompt();
  }
}
const actionPrompt = function(action) {
  if (action === "PROMPT_FOR_CMD") {
    config.readline.prompt(cmdPrompt + '>');
  }
  else {
    config.readline.prompt();
  }
}
module.exports.setConfig = setConfig;
module.exports.onLine = onLine;
