const utils = require('../utils');

const university = {
  prefix: (function() {
    return utils.draw(["The", "Northern", "North", "Western", "West", "Southern", "South", "Eastern", "East"]);
  }),
  suffix: (function() {
    return utils.draw( ["University", "Institute", "College", "Academy"]);
  }),
};

module.exports = university
