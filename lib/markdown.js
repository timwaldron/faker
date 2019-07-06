const utils = require('../utils');

const markdown = {
  headers() {
    return utils.draw(["#", "##", "###", "####", "#####", "######"])
  },
  emphasis() {
    return utils.draw(["_", "~", "*", "**"])
  },
};

module.exports = markdown

