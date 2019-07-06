const utils = require('../utils');

const football = {
  teams() {
    return utils.draw(["Real Madrid", "FC Barcelona", "Valencia CF", "Atletico Madrid", "Manchester United", "Chelsea", "Liverpool", "Arsenal", "Tottenham Hotspur", "AC Milan", "Inter Milan", "AS Roma", "Juventus", "Bayern Munich", "Borussia Dortmund", "Schalke 04", "Benfica", "Galatasaray", "PSV Eindhoven", "LA Galaxy"])
  },
  players() {
    return utils.draw(["Lionel Messi", "Gerard Pique", "Sergio Ramos", "Cristiano Ronaldo", "David De Gea", "Paul Pogba", "Antoine Griezmann", "Alvaro Morata", "Andres Iniesta", "Roberto Firmino", "Mohammed Salah", "Harry Kane", "Delle Alli", "Arjen Robben", "Franck Ribery", "Marco Reus", "Robert Lewandoski", "Zlatan Ibrahimovic", "Edinson Cavani", "Sergio Aguero", "Neymar", "Mesut Ozil", "Gianluigi Buffon", "Willian", "Manuel Neuer", "Juan Mata", "Manuel Neuer", "Cesc Fabregas", "Gareth Bale", "Eden Hazard", "Mario Mandzukic"])
  },
  coaches() {
    return utils.draw(["Ernesto Valverde", "Zinedine Zidane", "Jose Mourinho", "Antonio Conte", "Jurgen Klopp", "Mauricio Pochettino", "Diego Simeone", "Massimiliano Allegri", "Jupp Heyneckes", "Arsene Wenger", "Jorge Sampaoli", "Fernando Santos", "Didier Deschamps", "Joachim Low", "Julen Lopetegui", "Mauricio Pochettino", "Unai Emery", "Massimiliano Allegri"])
  },
  competitions() {
    return utils.draw(["UEFA European Championship", "Asian Cup", "African Cup of Nations", "Copa America", "UEFA Champions League", "FIFA World Cup", "UEFA Europa League", "Serie A", "Barclays Premier League", "Bundesliga", "Liga Santander", "FA Cup", "Ligue 1", "Primeira Liga", "Eredivisie", "Super League", "Major League Soccer", "Coppa Italia", "DFB Pokal", "CONCACAF Gold Cup", "Nations Cup", "Copa del Rey"])
  },
  positions() {
    return utils.draw(["Goalkeeper", "Full Back", "Right Back", "Left Back", "Defensive Midfielder", "Midfielder", "Attacking Midfielder", "Right Midfielder", "Left Midfielder", "Right Wing", "Left Wing", "Second Striker", "Centre Forward"])
  },
};

module.exports = football

