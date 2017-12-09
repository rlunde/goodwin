#!/usr/bin/env node

const d3types = require('./d3types')
const d3input = require('./inputfns')
const states = require('./states')
let config = {}
var cmdState = states.getState('GET_CMD')
var paramsState = states.getState('GET_PARAMS')

// const cmdPrompt = 'What kind of D3 graph or chart do you want to create?\n(Or type 'list' to see options, or 'quit' to quit)\n';
const setConfig = function (rl, stateStack) {
  config.readline = rl
  config.stateStack = stateStack
  config.vis = null
}
const onLine = function (line) {
  let s = config.stateStack[config.stateStack.length - 1]
  // console.log(`onLine, s = ${JSON.stringify(s)}`)
  if (line === 'quit') {
    // TODO: confirm quit if we could lose data
    config.readline.close()
    return
  }
  if (s.id === 'INITIAL') {
    // only show the menu once unless they ask for help or type ?
    console.log(`\n${s.prompt}`)
    config.stateStack.push(cmdState)
    s = config.stateStack[config.stateStack.length - 1]
  } else {
    if (s.id === 'GET_CMD') {
      if (line === 'list') {
        d3types.d3visList.map((t) => console.log(t.name))
      } else if (line === 'help' || line === '?') {
        console.log(states.help)
      } else if (line.toLowerCase().startsWith('gen ')) {
        let cmd = line.substring(4)
        let vis = d3types.findVis(cmd)
        if (vis === null) {
          console.log(`couldn't find a D3 visualization for ${cmd}`)
        } else {
          // TODO
          console.log(`You picked D3 visualization: ${vis.name}`)
          config.vis = vis
          config.stateStack.push(paramsState)
          s = config.stateStack[config.stateStack.length - 1]
        }
      } else {
        // TODO - all the other commands
      }
    }
    if (s.id === 'GET_PARAMS') {
      if (!s.infn) {
        s.infn = d3input.input(config.vis)
      }
      let param = s.infn.nextArg()
      console.log(`param = ${JSON.stringify(param)}`)
    } else {
      // console.log(`The current state is ${s.id}`);
      console.log(`you entered: ${line}`)
    }
  }
  config.readline.prompt(' >')
}

module.exports.setConfig = setConfig
module.exports.onLine = onLine
