const utils = require('../utils');

const markdown = {
  headers: (function() {
    return utils.draw( ["#", "##", "###", "####", "#####", "######"]);
  }),
  emphasis: (function() {
    return utils.draw( ["_", "~", "*", "**"]);
  }),
};

module.exports = markdown
