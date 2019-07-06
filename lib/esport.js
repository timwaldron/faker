const utils = require('../utils');

const esport = {
  players() {
    return utils.draw(["Froggen", "Dendi", "Surefour", "Seagull", "xPeke", "shroud", "KennyS", "pasha", "RamboRay", "Crimsix", "ACE", "Grubby", "f0rest", "cArn", "Flash", "Faker", "Boxer", "Miracle", "Silvername"])
  },
  teams() {
    return utils.draw(["Dignitas", "OpTic Gaming", "FaZe", "iBUYPOWER", "Evil Geniuses", "Ninjas in Pijamas", "Natus Vincere", "Team SoloMid", "Cloud9", "Fnatic", "CLG", "EnVyUs", "Virtus.Pro", "Team Secret"])
  },
  events() {
    return utils.draw(["ESL Cologne", "MLG Meadowlands", "GFinity London", "Worlds", "IEM Championship", "League All Stars", "International"])
  },
  leagues() {
    return utils.draw(["ESL", "IEM", "MLG", "GFinity", "Starladder"])
  },
  games() {
    return utils.draw(["CS:GO", "League of Legends", "Overwatch", "StarCraft II", "Dota 2", "Super Smash Bros. Melee", "Hearthstone", "PUBG"])
  },
};

module.exports = esport

