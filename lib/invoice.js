const utils = require('../utils');

const invoice = {
  reference(obj) {
    toFind = {
      check_digit_method: "method_731",
      pattern: "\d{3,19}#",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
};

module.exports = invoice

