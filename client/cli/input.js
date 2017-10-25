var fs = require('fs')

const cmdHelp = `At any time you can type:
quit - to exit
help (or just ?) - to get some help
back - to go back a step
gen <name> - generate a D3 sample of type <type> (e.g. gen Bar)
config - choose where to save sample code (etc.)
list - show the types of D3 visualizations I can generate
save - to save the current session for later
load - to load a previously saved session`

// const d3types = require('./d3types');

let config = {}
const setConfig = function (rl) {
  config.readline = rl
  config.context = {}
  config.context.vis = null
  config.context.expectingOptionInput = false
}
/*
 * Unlike a standard prompt->response model, we have to wait for
 * a line (an event), figure out what to do, do it, then print
 * a prompt for the next line.
 */
const onLine = function (line) {
  if (line === 'quit') {
    // TODO: confirm quit if we could lose data
    config.readline.close()
  } else if (line === 'help' || line === '?') {
    console.log(cmdHelp)
  } else if (config.context.expectingOptionInput) {
    if (isAnswer(line)) {
      let na = config.context.needAnswer
      // expectingOptionInput means we're trying to fill out the options for a command
      // needAnswer means we just prompted for a specific thing like 'create a missing directory'
      // while we're processing option input and we want something like a yes or no, or a color name,
      // or a directory name, etc.
      if (na !== undefined && na.answer === 'Y') {
        if (na.forInput === 'sourceDir') {
          try {
            fs.mkdirSync(na.directory)
          } catch (e) {
            console.log(`Error: could not create directory ${na.directory}`)
          }
        }
      }
    }
  }
  // TODO: if we're looking for specific answers, ask next question
  // TODO: otherwise if we get a command, do it or ask for details
  // TODO: otherwise say we don't understand
}
const inputTypes = {
  sourceDir: {
    name: 'sample code directory',
    type: 'directory',
    set: false,
    default: 'sample_bar_chart'
  },
  barColor: {
    name: 'bar color',
    type: 'color',
    set: false,
    default: 'blue'
  },
  barHoverColor: {
    name: 'bar hover color',
    type: 'color',
    set: false,
    default: 'red'
  },
  dataType: {
    name: 'data source type',
    type: 'choice', // or tsv, or api
    selections: ['csv', 'tsv', 'api'],
    default: 'csv',
    set: false
  },
  dataSource: {
    name: 'data source',
    type: 'string',
    default: 'input.csv',
    set: false
  }
}

function isAnswer (line) {
  if (!config.context.expectingOptionInput) {
    return false
  }
  // first, let's see if we're expecting a prompted anwer (e.g. create the directory?)
  let na = config.context.needAnswer
  if (na !== undefined) {
    if (na.type === 'Y/N') {
      let ans = line.toLowerCase
      if (ans === 'y' || ans === 'yes') {
        na.answer = 'Y'
      } else if (ans === 'n' || ans === 'no') {
        na.answer = 'N'
      }
      return true
    }
    return false
  }
  let it = config.context.inputType
  if (it === undefined) {
    return false
  }
  if (inputTypes[it] !== undefined) {
    let t = inputTypes[it].type
    // let d = inputTypes[it].default
    if (t === 'string') {
      return true
    } else if (t === 'directory') {
      let directory = line
      try {
        fs.statSync(directory)
      } catch (e) {
        console.log(`directory ${directory} does not exist. Try to create it?`)
        config.context.needAnswer = {
          type: 'Y/N',
          forInput: it,
          directory: line,
          answer: undefined
        }
      }
    } else if (t === 'color') {
      // TODO: look at: https://github.com/colorjs/color-name and https://github.com/regexhq/hex-color-regex
      // for now, assume any string is a name or a hex value, but later check against real names and a regex
      return true
    } else if (t === 'choice') {
      // TODO

    }
  } else {
    return false
  }
}

module.exports.help = cmdHelp;
module.exports.setConfig = setConfig;
module.exports.onLine = onLine;