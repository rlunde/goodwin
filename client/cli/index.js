#!/usr/bin/env node

// var co = require('co');
// var prompt = require('co-prompt');

// var program = require('commander');
// program
//   .arguments('<file>')
//   .action(function(file) {
//     console.log('info about code to be generated will be optionally saved in file: %s', file);
//   })
//   .parse(process.argv);
// console.log("We're just getting started here.\nWhat kind of D3 output would you like?\nEnter 'list' to see what I know about.\n");
//
// co(function*() {
//   var outputType = yield prompt('D3 graph/chart type? ');
//   console.log("you entered: %s", outputType);
//   process.exit(0);
// });

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
console.log('Let\'s have a conversation!');
var file = "sample.js";
console.log('The info about code to be generated will be optionally saved in file: %s', file);
console.log('Enter \'quit\' to exit')
process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n') {
    done();
  }
});
console.log('TODO: replace this with https://nodejs.org/api/readline.html')

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}
