This is a sample CLI to exercise some functions
to generate and parse JSON files containing project
descriptions.

Following along for now with: https://developer.atlassian.com/blog/2015/11/scripting-with-node/

To build:
$ npm install -g

To run:
$ goodwin-cli

That's actually a symlink to the current dir. When/if I'm ready to publish it,
I can do that with "npm publish"

The amazing thing is I started this nearly a year ago, forgot entirely what
I planned to use as a starting point for CLI, and ended up at the exact same
article.

Dependencies:

  * commander - process command line arguments: https://www.npmjs.com/package/commander
  * co - control flow for node using promises: https://www.npmjs.com/package/co
  * co-prompt - terminal user input for node using promises: https://www.npmjs.com/package/co-prompt


