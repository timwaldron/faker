const utils = require('../utils');

const gender = {
  types: (function() {
    return utils.draw( ["Female", "Male", "Non-binary", "Agender", "Genderfluid", "Genderqueer", "Bigender", "Polygender"]);
  }),
  binary_types: (function() {
    return utils.draw( ["Female", "Male"]);
  }),
};

module.exports = gender
