const utils = require('../utils');

const job = {
  field() {
    return utils.draw(["Marketing", "IT", "Accounting", "Administration", "Advertising", "Banking", "Community-Services", "Construction", "Consulting", "Design", "Education", "Farming", "Government", "Healthcare", "Hospitality", "Legal", "Manufacturing", "Marketing", "Mining", "Real-Estate", "Retail", "Sales", "Technology"])
  },
  seniority() {
    return utils.draw(["Lead", "Senior", "Product", "National", "Regional", "District", "Central", "Global", "Customer", "Investor", "Dynamic", "International", "Legacy", "Forward", "Internal", "Chief", "Direct", "Corporate", "Future", "Human", "Principal"])
  },
  position() {
    return utils.draw(["Supervisor", "Associate", "Executive", "Liaison", "Officer", "Manager", "Engineer", "Specialist", "Director", "Coordinator", "Administrator", "Architect", "Analyst", "Designer", "Planner", "Orchestrator", "Technician", "Developer", "Producer", "Consultant", "Assistant", "Facilitator", "Agent", "Representative", "Strategist"])
  },
  key_skills() {
    return utils.draw(["Teamwork", "Communication", "Problem solving", "Leadership", "Organisation", "Work under pressure", "Confidence", "Self-motivated", "Networking skills", "Proactive", "Fast learner", "Technical savvy"])
  },
  employment_type() {
    return utils.draw(["Full-time", "Part-time", "Temporary", "Contract", "Internship", "Commission"])
  },
  education_level() {
    return utils.draw(["Associates", "Bachelor", "Master", "Doctorate"])
  },
  title() {
    return utils.draw(["\#{seniority} \#{field} \#{position}", "\#{seniority} \#{field} \#{position}", "\#{field} \#{position}", "\#{field} \#{position}", "\#{seniority} \#{position}"])
  },
};

module.exports = job

