const utils = require('../utils');

const markdown = {
  headers() {
    let dataSet = utils.draw(["#", "##", "###", "####", "#####", "######"])
    return utils.randomizer(dataSet)
  },
  emphasis() {
    return utils.draw(["_", "~", "*", "**"])
  },
};

module.exports = markdown

