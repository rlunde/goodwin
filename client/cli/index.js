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
var initialState = states.getState("INITIAL");
var cmdState = states.getState("GET_CMD");
stateStack.push(cmdState);
//console.log("stateStack = " + stateStack)
// we pass readline so we can quit input, prompt, etc. from within the event handler
handleInput.setConfig(rl, stateStack);

// only show the menu once unless they ask for help/?
console.log(`\n${initialState.prompt}`);

rl.on('line', (line) => {
  handleInput.onLine(line);
});

rl.on('close', (line) => {
  console.log("Goodbye!");
})
