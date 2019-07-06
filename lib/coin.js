const utils = require('../utils');

const coin = {
  flip() {
    return utils.draw(["Heads", "Tails"])
  },
};

module.exports = coin

