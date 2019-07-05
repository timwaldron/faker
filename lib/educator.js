const utils = require('../utils');

const educator = {
  name: (function() {
    return utils.draw( ["Marblewald", "Mallowtown", "Brookville", "Flowerlake", "Falconholt", "Ostbarrow", "Lakeacre", "Clearcourt", "Ironston", "Mallowpond", "Iceborough", "Icelyn", "Brighthurst", "Bluemeadow", "Vertapple", "Ironbarrow"]);
  }),
  secondary: (function() {
    return utils.draw( ["High School", "Secondary College", "High"]);
  }),
  type: (function() {
    return utils.draw( ["College", "University", "Technical College", "TAFE"]);
  }),
  subject: (function() {
    return utils.draw( ["Arts", "Business", "Education", "Applied Science (Psychology)", "Architectural Technology", "Biological Science", "Biomedical Science", "Commerce", "Communications", "Creative Arts", "Criminology", "Design", "Engineering", "Forensic Science", "Health Science", "Information Systems", "Computer Science", "Law", "Nursing", "Medicine", "Psychology", "Teaching"]);
  }),
  type: (function() {
    return utils.draw( ["Associate Degree in", "Bachelor of", "Master of"]);
  }),
  course_number: (function() {
    return utils.draw( ["1##", "2##", "3##", "4##", "5##"]);
  }),
};

module.exports = educator
