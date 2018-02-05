const path = require('path');
//used by jest -- see moduleNmaeMapper in package.json
module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};