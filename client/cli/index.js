#!/usr/bin/env node

var co = require('co');
var prompt = require('co-prompt');
console.log('Let\'s have a conversation!')
var program = require('commander');
program
  .arguments('<file>')
  .action(function(file) {
    console.log('info about code to be generated will be optionally saved in file: %s', file);
  })
  .parse(process.argv);
console.log("We're just getting started here.\nWhat kind of D3 output would you like?\nEnter 'list' to see what I know about.\n");

co(function*() {
  var outputType = yield prompt('D3 graph/chart type? ');
  console.log("you entered: %s", outputType);
  process.exit(0);
});
