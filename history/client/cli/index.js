#!/usr/bin/env node

const readline = require('readline')

// Other files in this repository:

const handleInput = require('./handle-input')
const states = require('./states')
process.stdin.setEncoding('utf8')

// console.log('What kind of D3 graph or chart do you want to create?\n(Or type 'list' to see options, or 'quit' to quit)\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let stateStack = []
var initialState = states.getState('INITIAL')
stateStack.push(initialState)

// we pass readline so we can quit input, prompt, etc. from within the event handler
handleInput.setConfig(rl, stateStack)

rl.on('line', (line) => {
  handleInput.onLine(line)
})

rl.on('close', (line) => {
  console.log('Goodbye!')
})

// fake a first line, to take us from the initial state to cmd state
handleInput.onLine('')
