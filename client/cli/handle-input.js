#!/usr/bin/env node


// Other files in this repository:
const d3types = require('./d3types');
const d3input = require('./inputfns');

const onLine = function(line) {
  if (line == 'list') {
    d3types.d3visList.map((t) => console.log(t.name));
    console.log('\nWhat kind of D3 graph or chart do you want to create?\n(Or type "list" to see options, or "quit" to quit)\n');
    rl.prompt();
  } else if (line == 'quit') {
    // rl.close();
  } else {
  // TODO
  }
}
module.exports.onLine = onLine;
