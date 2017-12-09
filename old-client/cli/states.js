/*
 * Keep track of what state we're in, what to display before
 * a prompt, what to prompt, what commands to accept.
 */

const cmdHelp = `At any time you can type:
quit - to exit
help (or just ?) - to get some help
back - to go back a step
gen <name> - generate a D3 sample of type <type> (e.g. gen Bar)
config - choose where to save sample code (etc.)
list - show the types of D3 visualizations I can generate
save - to save the current session for later
load - to load a previously saved session`

const states = [
  {
    id: "INITIAL",
    name: "Init",
    prompt: `Hello! I'm Goodwin. I'll help you generate D3 sample code.\n` + cmdHelp
    },
  {
    id: "GET_CMD",
    name: "Start",
    prompt: `Enter a command (help or just ? for the list)`
  },
  {
    id: "GET_PARAMS",
    name: "Get visualization Params",
    prompt: `Let's collect the parameters we need for this visualization`
  },
  {
    id: "CONFIRM",
    name: "Confirm",
    prompt: "(Y/n)?"
  }
];
const getState = (s) => {
  let list = states.filter(state => state.id === s);
  if (list.length > 0) {
    return list[0];
  }
  console.log(`Error in getState: couldn't find ${s}`);
  return states[0];
}
module.exports.states = states;
module.exports.getState = getState;
module.exports.help = cmdHelp;
