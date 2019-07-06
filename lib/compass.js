const utils = require('../utils');

const compass = {
  cardinal(obj) {
    toFind = {
      // word: "["north", "east", "south", "west"]",
      // abbreviation: "["N", "E", "S", "W"]",
      // azimuth: "["0", "90", "180", "270"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  ordinal(obj) {
    toFind = {
      // word: "["northeast", "southeast", "southwest", "northwest"]",
      // abbreviation: "["NE", "SE", "SW", "NW"]",
      // azimuth: "["45", "135", "225", "315"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  half_wind(obj) {
    toFind = {
      // word: "["north-northeast", "east-northeast", "east-southeast", "south-southeast", "south-southwest", "west-southwest", "west-northwest", "north-northwest"]",
      // abbreviation: "["NNE", "ENE", "ESE", "SSE", "SSW", "WSW", "WNW", "NNW"]",
      // azimuth: "["22.5", "67.5", "112.5", "157.5", "202.5", "247.5", "292.5", "337.5"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  quarter_wind(obj) {
    toFind = {
      // word: "["north by east", "northeast by north", "northeast by east", "east by north", "east by south", "southeast by east", "southeast by south", "south by east", "south by west", "southwest by south", "southwest by west", "west by south", "west by north", "northwest by west", "northwest by north", "north by west"]",
      // abbreviation: "["NbE", "NEbN", "NEbE", "EbN", "EbS", "SEbE", "SEbS", "SbE", "SbW", "SWbS", "SWbW", "WbS", "WbN", "NWbW", "NWbN", "NbW"]",
      // azimuth: "["11.25", "33.75", "56.25", "78.75", "101.25", "123.75", "146.25", "168.75", "191.25", "213.75", "236.25", "258.75", "281.25", "303.75", "326.25", "348.75"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  direction() {
    return utils.draw(["\#{cardinal}", "\#{ordinal}", "\#{half_wind}", "\#{quarter_wind}"])
  },
  abbreviation() {
    return utils.draw(["\#{cardinal_abbreviation}", "\#{ordinal_abbreviation}", "\#{half_wind_abbreviation}", "\#{quarter_wind_abbreviation}"])
  },
  azimuth() {
    return utils.draw(["\#{cardinal_azimuth}", "\#{ordinal_azimuth}", "\#{half_wind_azimuth}", "\#{quarter_wind_azimuth}"])
  },
};

module.exports = compass

