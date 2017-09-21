/*
 * Keep track of what state we're in, what to display before
 * a prompt, what to prompt, what commands to accept.
 */
const STATE_GET_CMD = 1,
  STATE_GET_PARAMS = 2,
  STATE_CONFIRM = 3;
const cmdHelp = `At any time you can type:
quit - to exit
help (or just ?) - to get some help
back - to go back a step
gen <name> - generate a D3 sample of type <type> (e.g. gen Bar)
config - choose where to save sample code (etc.)
list - show the types of D3 visualizations I can generate
save - to save the current session for later
load - to load a previously saved session`

const states = [{
    id: STATE_GET_CMD,
    name: "Start",
    firstprompt: `Hello! I'm Goodwin. I'll help you generate D3 sample code.\n` + cmdHelp,
    prompt: `Enter a command (help or just ? for the list)`
  },
  {
    id: STATE_GET_PARAMS,
    name: "Get visualization Params",
    prompt: `Let's collect the parameters we need for this visualization`
  },
  {
    id: STATE_CONFIRM,
    name: "Confirm",
    prompt: "(Y/n)?"
  }
];
module.exports.states = states;
module.exports.STATE_GET_CMD = STATE_GET_CMD;
