#!/usr/bin/env node
const readline = require('readline');

// Other files in this repository:
const d3types = require('./d3types');
const d3input = require('./inputfns');
const handleInput = require('./handle-input');
const states = require('./states');
process.stdin.setEncoding('utf8');

//console.log('What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stateStack = new Array();
var getCmdState = states.getState("INITIAL");
stateStack.push(getCmdState);
//console.log("stateStack = " + stateStack)
let actionStack = new Array();
actionStack.push("PROMPT_FOR_CMD"); // TODO -- think about this
// we pass readline so we can quit input, prompt, etc. from within the event handler
handleInput.setConfig(rl, stateStack, actionStack);

handleInput.actionPrompt();

rl.on('line', (line) => {
  handleInput.onLine(line);
});

rl.on('close', (line) => {
  console.log("Goodbye!");
})
