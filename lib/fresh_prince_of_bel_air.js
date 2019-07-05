const utils = require('../utils');

const fresh_prince_of_bel_air = {
  characters: (function() {
    return utils.draw( ["Will Smith", "Philip Banks", "Carlton Banks", "Ashley Banks", "Hilary Banks", "Vivian Banks", "Nicky Banks", "Geoffrey Butler", "Jazz", "Vy Smith", "Hattie Banks", "Lisa Wilkes", "Jackie Ames", "Henry Furth", "Trevor", "Tyriq", "Ice Tray", "Dee Dee", "Kellogg Lieberbaum", "Coach Smiley", "Judge Carl Robertson"]);
  }),
  celebrities: (function() {
    return utils.draw( ["Quincy Jones", "Jay Leno", "Ronald Reagan", "Dick Clark", "Evander Holyfield", "Isaiah Thomas", "Heavy D", "Don Cornelius", "Kadeem Hardison", "Hugh M. Hefner", "Kareem Abdul-Jabbar", "Bo Jackson", "Ken Griffey Jr.", "Al B. Sure!", "John Ridley", "Doctor Dré", "Regis Philbin", "William Shatner", "B. B. King", "Kim Fields", "Arthel Neville", "Oprah Winfrey", "Donal J. Trump", "Leeza Gibbons", "Susan Powter", "Tempestt Bledsoe", "Kathie Lee Gifford", "Garcelle Beauvais", "Bree Walker"]);
  }),
  // quotes: (function() {
  //   return utils.draw( [);
  // }),
  // "will,_there's_something_you_should_know: (function() {
  //   return utils.draw( Sometimes... parents just don't understand.",);
  // }),
  // "you_know_what_they_say: (function() {
  //   return utils.draw( Behind every successful man is a woman... or if you want to switch positions that's okay with me, too.",);
  // }),
};

module.exports = fresh_prince_of_bel_air
