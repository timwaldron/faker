const utils = require('../utils');

const compass = {
  word: (function() {
    return utils.draw( ["north", "east", "south", "west"]);
  }),
  abbreviation: (function() {
    return utils.draw(  ["N", "E", "S", "W"]);
  }),
  azimuth: (function() {
    return utils.draw(  ["0", "90", "180", "270"]);
  }),
  word: (function() {
    return utils.draw(  ["northeast", "southeast", "southwest", "northwest"]);
  }),
  abbreviation: (function() {
    return utils.draw(  ["NE", "SE", "SW", "NW"]);
  }),
  azimuth: (function() {
    return utils.draw(  ["45", "135", "225", "315"]);
  }),
  word: (function() {
    return utils.draw(  ["north-northeast", "east-northeast", "east-southeast", "south-southeast", "south-southwest", "west-southwest", "west-northwest", "north-northwest"]);
  }),
  abbreviation: (function() {
    return utils.draw(  ["NNE", "ENE", "ESE", "SSE", "SSW", "WSW", "WNW", "NNW"]);
  }),
  azimuth: (function() {
    return utils.draw(  ["22.5", "67.5", "112.5", "157.5", "202.5", "247.5", "292.5", "337.5"]);
  }),
  word: (function() {
    return utils.draw(  ["north by east", "northeast by north", "northeast by east", "east by north", "east by south", "southeast by east", "southeast by south", "south by east", "south by west", "southwest by south", "southwest by west", "west by south", "west by north", "northwest by west", "northwest by north", "north by west"]);
  }),
  abbreviation: (function() {
    return utils.draw(  ["NbE", "NEbN", "NEbE", "EbN", "EbS", "SEbE", "SEbS", "SbE", "SbW", "SWbS", "SWbW", "WbS", "WbN", "NWbW", "NWbN", "NbW"]);
  }),
  azimuth: (function() {
    return utils.draw(  ["11.25", "33.75", "56.25", "78.75", "101.25", "123.75", "146.25", "168.75", "191.25", "213.75", "236.25", "258.75", "281.25", "303.75", "326.25", "348.75"]);
  }),
};

module.exports = compass
