In the long term, I'd like this project to evolve into a conversational
user interface to a programming environment.

 * not "automatic programming" -- that's been a dream for more than 50 years, and it's likely to remain one
 * use "divide and conquer" in as many ways as possible
   - help to analyze a code base, and refactor code to disentangle and encapsulate what is there
   - help in the design and documentation of a project as well as in coding and testing
   - keep track of TODOs and make it easy to skip over non-essentials without forgetting about them
   - look for ways to use existing open source libraries to solve the current problem
   - look for ways to simplify code to remove dependencies on open source libraries that are overkill
 * the goal is to help the programmer, not to replace the programmer
   - conversational UI should not assume any knowledge from the programmer
   - try to teach / explain as much as anything else
   - don't assume greenfield (new) development - parse and discuss existing code
   - ask questions to determine requirements, and don't overcomplicate (e.g. don't use functional programming for hello world)
   - should be able to pass questions along to real senior developers if automation can't currently handle them
 * there should be a good reason for people to use goodwin to make goodwin itself more useful
   - explore ways to evolve it - e.g. different people can branch/improve alternative subsystems
   - use ML and simulations to try to automatically learn coding by processing projects in github and asking questions
   - try to keep track somehow of how helpful people have been, similar to karma points?

Things to avoid:
 * don't try to support many languages (at least initially)
 * don't try to support many frameworks -- should just be basic programming
 * don't try to be perfect or complete

Start with a story
 * conversation between programmers about how one of them is so productive
 * explains that goodwin used to be super primitive but thousands of programmers helped make him more useful
 * initially just a chatbox that could pass on a question to a live developer for help when it gets stuck
 * gradually able to answer more and more things itself
 * people give back to community by helping to improve Goodwin
   