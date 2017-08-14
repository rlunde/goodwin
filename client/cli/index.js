#!/usr/bin/env node
console.log('Let\'s have a conversation!')
var program = require('commander');
program
  .arguments('<file>')
  .action(function(file) {
    console.log('info about code to be generated will be saved in file: %s', file);
  })
  .parse(process.argv);
