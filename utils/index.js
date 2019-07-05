class Utils {
  static draw(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
  }
}

module.exports = Utils;
