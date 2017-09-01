#!/usr/bin/env node
var co = require('co');
var prompt = require('co-prompt');
// Note: if I need to read a password at some point, use https://github.com/npm/read instead of readline
const readline = require('readline');

// Other files in this repository:
const d3types = require('./d3types');
const d3input = require('./inputfns');

console.log('Let\'s have a conversation!');
var file = "sample.js";
console.log('Note: The info about the code to be generated will be saved in file: %s\n', file);

console.log('What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: readline supports tab completion -- try using it on D3 types
rl.prompt();
rl.on('line', (line) => {
  if (line == 'list') {
    d3types.d3visList.map((t) => console.log(t.name));
    console.log('\nWhat kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n');
    rl.prompt();
  } else if (line == 'quit') {
    rl.close();
  } else {
    let vis = d3types.d3visList.find((el) => {
      return el.name.toLowerCase().startsWith(line.toLowerCase());
    });
    if (vis != undefined) {
      console.log("you chose " + vis.name);
    } else {
      console.log(`couldn't find a D3 visualization named: ${line}`)
    }
    let inputFn = d3input.input(vis.inputfn);
    let inputValues = inputFn(rl);
    rl.close();
  }
});
