const utils = require('../utils');

const cosmere = {
  aons() {
    return utils.draw(["Aon", "Aan", "Aeo", "Aha", "Ake", "Ala", "Aor", "Are", "Ashe", "Ata", "Ate", "Ati", "Ato", "Daa", "Dao", "Dii", "Dio", "Eda", "Edo", "Ehe", "Ela", "Ena", "Ene", "Eno", "Eon", "Eshe", "Eto", "Iad", "Ido", "Ien", "Iir", "Ire", "Kaa", "Kae", "Kai", "Kie", "Kii", "Mae", "Mai", "Mea", "Nae", "Oed", "Omi", "Opa", "Ope", "Ore", "Rao", "Reo", "Rii", "Sao", "Sea", "Seo", "Shao", "Sheo", "Soi", "Tae", "Tia", "Tii", "Toa"])
  },
  shard_worlds() {
    return utils.draw(["Ashyn", "Braize", "First of the Sun", "Nalthis", "Obrodai", "Roshar", "Scadrial", "Sel", "Taldain", "Threnody", "Vax", "Yolen"])
  },
  shards() {
    return utils.draw(["Devotion", "Dominion", "Preservation", "Ruin", "Odium", "Cultivation", "Honor", "Endowment", "Autonomy", "Ambition", "Harmony"])
  },
  surges() {
    return utils.draw(["Abrasion", "Adhesion", "Cohesion", "Division", "Gravitation", "Illumination", "Progression", "Transformation", "Transportation", "Tension"])
  },
  knights_radiant() {
    return utils.draw(["Bondsmith", "Dustbringer", "Edgedancer", "Elsecaller", "Lightweaver", "Skybreaker", "Stoneward", "Truthwatcher", "Willshaper", "Windrunner"])
  },
  metals() {
    return utils.draw(["Steel", "Iron", "Pewter", "Tin", "Zinc", "Brass", "Copper", "Bronze'", "Duralumin", "Aluminum", "Nicrosil", "Chromium", "Gold", "Electrum", "Cadmium", "Bendalloy", "Atium", "Lerasium", "Ettmetal", "Malatium"])
  },
  allomancers() {
    return utils.draw(["Mistborn", "Coinshot", "Lurcher", "Pewterarm", "Tineye", "Rioter", "Soother", "Smoker", "Seeker", "Duralumin Gnat", "Aluminum Gnat", "Nicroburst", "Leecher", "Augur", "Oracle", "Pulser", "Slider", "Seer"])
  },
  feruchemists() {
    return utils.draw(["Feruchemist", "Skimmer", "Steelrunner", "Windwhisper", "Brute", "Sparker", "Firesoul", "Archivist", "Sentry", "Spinner", "Soulbearer", "Trueself", "Connector", "Gasper", "Subsumer", "Bloodmaker", "Pinnacle"])
  },
  heralds() {
    return utils.draw(["Jezrien", "Nale", "Chanarach", "Vedel", "Pailiah", "Shalash", "Battar", "Kalak", "Talanel", "Ishar"])
  },
  sprens() {
    return utils.draw(["Alespren", "Angerspren", "Anticipationspren", "Awespren", "Bindspren", "Captivityspren", "Coldspren", "Concentrationspren", "Creationspren", "Cryptic", "Cultivationspren", "Deathspren", "Decayspren", "Exhaustionspren", "Fearspren", "Flamespren", "Gloomspren", "Gloryspren", "Gravityspren", "Groundspren", "Heatspren", "Highspren", "Honorspren", "Hungerspren", "Inkspren", "Joyspren", "Keenspren", "Laughterspren", "Liespren", "Lifespren", "Logicspren", "Luckspren", "Mistspren", "Musicspren", "Painspren", "Passionspren", "Rainspren", "Riverspren", "Rotspren", "Shamespren", "Shockspren", "Stormspren"])
  },
};

module.exports = cosmere

