const utils = require('../utils');

const id_number = {
  valid: (function() {
    return utils.draw( "#{IDNumber.ssn_valid}");
  }),
  invalid: (function() {
    return utils.draw( ["000-##-####", "###-00-####", "###-##-0000", "666-##-####", "9##-##-####"]);
  }),
};

module.exports = id_number
