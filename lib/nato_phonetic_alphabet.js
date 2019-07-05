const utils = require('../utils');

const nato_phonetic_alphabet = {
  code_word: (function() {
    return utils.draw( ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]);
  }),
};

module.exports = nato_phonetic_alphabet
