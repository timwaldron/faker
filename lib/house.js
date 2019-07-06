const utils = require('../utils');

const house = {
  furniture() {
    return utils.draw(["chair", "armchair\"", "table", "dining table", "stool", "sofa", "couch", "bath", "bed", "cupboard", "drawers", "dresser", "floor lamp", "bedside table", "futon"])
  },
  rooms() {
    return utils.draw(["kitchen", "living room", "reception room", "bedroom", "master bedroom", "guest room", "drawing room", "conservatory", "porch", "hallway", "pantry", "sunroom", "bathroom", "ensuite bathroom", "cellar", "attic", "loft"])
  },
};

module.exports = house

