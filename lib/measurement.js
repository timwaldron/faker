const utils = require('../utils');

const measurement = {
  height: (function() {
    return utils.draw( ["inch", "foot"]);
  }),
  length: (function() {
    return utils.draw( ["yard", "foot", "mile"]);
  }),
  volume: (function() {
    return utils.draw( ["cup", "tablespoon", "teaspoon", "quart", "pint", "gallon", "fluid ounce"]);
  }),
  weight: (function() {
    return utils.draw( ["pound", "ounce", "ton"]);
  }),
  metric_height: (function() {
    return utils.draw( ["centimeter", "meter"]);
  }),
  metric_length: (function() {
    return utils.draw( ["millimeter", "centimeter", "decimeter", "meter", "dekameter", "hectometer", "kilometer"]);
  }),
  metric_volume: (function() {
    return utils.draw( ["milliliter", "liter"]);
  }),
  metric_weight: (function() {
    return utils.draw( ["milligram", "centigram", "decigram", "gram", "dekagram", "hectogram", "kilogram", "metric ton"]);
  }),
};

module.exports = measurement
