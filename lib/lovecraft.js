const utils = require('../utils');

const lovecraft = {
  fhtagn() {
    return utils.draw(["Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"])
  },
  deity() {
    return utils.draw(["Azathoth", "Cthulhu", "Dagon", "Hastur", "Nyarlathotep", "Shub-Niggurath", "Tsathoggua", "Yog-Sothoth"])
  },
  location() {
    return utils.draw(["Arkham", "Dunwich", "Innsmouth", "Kadath", "Kingsport", "Leng", "Miskatonic", "R’lyeh", "Yuggoth", "Irem"])
  },
  tome() {
    return utils.draw(["Necronomicon", "Pnakotic Manuscripts", "De Vermis Mysteriis", "Book of Eibon", "Eltdown Shards"])
  },
  words() {
    return utils.draw(["abnormal", "accursed", "amorphous", "antediluvian", "antiquarian", "blasphemous", "cat", "charnel", "comprehension", "cyclopean", "dank", "decadent", "daemoniac", "effulgence", "eldritch", "fainted", "foetid", "fungus", "furtive", "gambrel", "gibbous", "gibbering", "hideous", "immemorial", "indescribable", "iridescence", "loathsome", "lurk", "madness", "manuscript", "mortal", "nameless", "noisome", "non-euclidean", "shunned", "singular", "spectral", "squamous", "stench", "stygian", "swarthy", "tenebrous", "tentacles", "ululate", "unmentionable", "unnamable", "unutterable"])
  },
};

module.exports = lovecraft

