const utils = require('../utils');

const gender = {
  types() {
    return utils.draw(["Female", "Male", "Non-binary", "Agender", "Genderfluid", "Genderqueer", "Bigender", "Polygender"])
  },
  binary_types() {
    return utils.draw(["Female", "Male"])
  },
};

module.exports = gender

