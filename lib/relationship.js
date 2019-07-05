const utils = require('../utils');

const relationship = {
  direct: (function() {
    return utils.draw( ["Father", "Mother", "Sister", "Brother"]);
  }),
  extended: (function() {
    return utils.draw( ["Grandfather", "Grandmother", "Uncle", "Aunt", "Cousin", "Niece", "Nephew", "Grandson", "Granddaughter"]);
  }),
  in_law: (function() {
    return utils.draw( ["Father-in-law", "Mother-in-law", "Sister-in-law", "Brother-in-law"]);
  }),
  spouse: (function() {
    return utils.draw( ["Husband", "Wife"]);
  }),
  parent: (function() {
    return utils.draw( ["Father", "Mother"]);
  }),
  sibling: (function() {
    return utils.draw( ["Sister", "Brother"]);
  }),
};

module.exports = relationship
