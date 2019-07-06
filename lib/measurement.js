const utils = require('../utils');

const measurement = {
  height() {
    return utils.draw(["inch", "foot"])
  },
  length() {
    return utils.draw(["yard", "foot", "mile"])
  },
  volume() {
    return utils.draw(["cup", "tablespoon", "teaspoon", "quart", "pint", "gallon", "fluid ounce"])
  },
  weight() {
    return utils.draw(["pound", "ounce", "ton"])
  },
  metric_height() {
    return utils.draw(["centimeter", "meter"])
  },
  metric_length() {
    return utils.draw(["millimeter", "centimeter", "decimeter", "meter", "dekameter", "hectometer", "kilometer"])
  },
  metric_volume() {
    return utils.draw(["milliliter", "liter"])
  },
  metric_weight() {
    return utils.draw(["milligram", "centigram", "decigram", "gram", "dekagram", "hectogram", "kilogram", "metric ton"])
  },
};

module.exports = measurement

