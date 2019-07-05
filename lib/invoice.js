const utils = require('../utils');

const invoice = {
  check_digit_method: (function() {
    return utils.draw( "method_731");
  }),
  pattern: (function() {
    return utils.draw( '\d{3,19}#');
  }),
};

module.exports = invoice
