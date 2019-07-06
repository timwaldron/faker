const utils = require('../utils');

const source = {
  hello_world(obj) {
    toFind = {
      ruby: "puts 'Hello World!'",
      javascript: "alert('Hello World!');",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  print(obj) {
    toFind = {
      ruby: "puts 'faker_string_to_print'",
      javascript: "console.log('faker_string_to_print');",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  print_1_to_10(obj) {
    toFind = {
      ruby: "(1..10).each { |i| puts i }",
      javascript: "for (let i=0; i<10; i++) { console.log(i); }",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
};

module.exports = source

