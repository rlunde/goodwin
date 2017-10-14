
const cmdHelp = `At any time you can type:
quit - to exit
help (or just ?) - to get some help
back - to go back a step
gen <name> - generate a D3 sample of type <type> (e.g. gen Bar)
config - choose where to save sample code (etc.)
list - show the types of D3 visualizations I can generate
save - to save the current session for later
load - to load a previously saved session`;

const d3types = require('./d3types');

let config = {};
const setConfig = function(rl) {
  config.readline = rl;
  config.vis = null;
};
/*
 * Unlike a standard prompt->response model, we have to wait for
 * a line (an event), figure out what to do, do it, then print
 * a prompt for the next line.
 */
const onLine = function(line) {
    if (line === 'quit') {
      // TODO: confirm quit if we could lose data
      config.readline.close();
      return;
    }
    else if (line === 'help' || line === '?') {
      console.log(cmdHelp);
      return;
    }
};

module.exports.help = cmdHelp;
module.exports.setConfig = setConfig;
module.exports.onLine = onLine;