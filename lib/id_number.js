const utils = require('../utils');

const id_number = {
  // valid() {
  //   return utils.draw(["#{IDNumber.ssn_valid}"])
  // },
  invalid() {
    let dataSet = utils.draw(["000-##-####", "###-00-####", "###-##-0000", "666-##-####", "9##-##-####"])
    return utils.randomizer(["000-##-####", "###-00-####", "###-##-0000", "666-##-####", "9##-##-####"])
  },
};

module.exports = id_number

