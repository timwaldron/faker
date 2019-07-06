const utils = require('../utils');

const university = {
  prefix() {
    return utils.draw(["The", "Northern", "North", "Western", "West", "Southern", "South", "Eastern", "East"])
  },
  suffix() {
    return utils.draw(["University", "Institute", "College", "Academy"])
  },
  name() {
    return utils.draw(["\#{Name.last_name} \#{University.suffix}", "\#{University.prefix} \#{Name.last_name} \#{University.suffix}", "\#{University.prefix} \#{Name.last_name}", "\#{University.prefix} \#{Address.state} \#{University.suffix}"])
  },
};

module.exports = university

