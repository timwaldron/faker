class Utils {
  static draw(dataSet) {
    if (typeof(dataSet) === String)
      return dataSet
    else
      return dataSet[Math.floor(Math.random() * dataSet.length)];
  }
}

module.exports = Utils;
