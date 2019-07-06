const utils = require('../utils');

const business = {
  credit_card_numbers() {
    return utils.draw(["1234-2121-1221-1211", "1212-1221-1121-1234", "1211-1221-1234-2201", "1228-1221-1221-1431"])
  },
  credit_card_types() {
    return utils.draw(["visa", "mastercard", "american_express", "discover", "diners_club", "jcb", "switch", "solo", "dankort", "maestro", "forbrugsforeningen", "laser"])
  },
};

module.exports = business

