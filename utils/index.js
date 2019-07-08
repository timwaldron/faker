class Utils {
  static draw(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
  }
  static randomizer(param) {
    let charArray = param.split('');
    let result = "";

    charArray.forEach((char) => {
      if (char === "#")
        result += Math.floor(Math.random() * 10).toString();
      else
        result += char
    });

    return result
  }
}

module.exports = Utils;
