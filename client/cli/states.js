/*
 * Keep track of what state we're in, what to display before
 * a prompt, what to prompt, what commands to accept.
 */
const STATE_START = 1,
  STATE_GET_SPECIFIC_PARAMS = 2,
  STATE_CONFIRM = 3,
  STATE_LOAD_SESSION = 4,
  STATE_SAVE_SESSION = 5,
  STATE_GET_GENERAL_PARAMS = 6;

/*
 * TODO: put in an action fn that collects input for each state that takes
 * the previous state as an arg (to go back). New Rule: don't try to make
 * something data driven until I have at least 3 instances of it!
 */
const states = [{
    id: STATE_START,
    name: "Start",
    prompt: `Hello! I'm Goodwin. I'll help you generate D3 sample code.\nAt any time you can type:
    quit - to exit
    help (or just ?) - to get some help
    back - to go back a step
    gen <name> - generate a D3 sample of type <type> (e.g. gen Bar)
    config - choose where to save sample code (etc.)
    list - show the types of D3 visualizations I can generate
    save - to save the current session for later
    load - to load a previously saved session`,
    genfn: null
  },
  {
    id: STATE_GET_SPECIFIC_PARAMS,
    name: "Get visualization Params",
    prompt: `Let's collect the parameters we need for this visualization!\nAt any time you can type:
    quit - to exit
    help (or just ?) - to get some help
    back - to go back a step`
    genfn: null
  }
];
module.exports.states = states;
