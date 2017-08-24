#!/usr/bin/env node
const d3types = require('./d3types');

console.log('Let\'s have a conversation!');
var file = "sample.js";
console.log('Note: The info about the code to be generated will be saved in file: %s\n', file);

// Note: if I need to read a password at some point, use https://github.com/npm/read instead of readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What kind of D3 graph or chart do you want to create?\n(Or type "list" to see options)\n: ', (answer) => {
  console.log(`You entered: ${answer}`);
  if (answer == 'list') {
    d3types.d3visList.map((t) => console.log(t));
  }
  rl.close();
});
// TODO: readline supports tab completion -- try using it on D3 types
