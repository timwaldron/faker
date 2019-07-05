const utils = require('../utils');

const subscription = {
  plans: (function() {
    return utils.draw( ["Free Trial", "Basic", "Starter", "Essential", "Student", "Bronze", "Standard", "Silver", "Gold", "Platinum", "Professional", "Business", "Diamond", "Premium"]);
  }),
  statuses: (function() {
    return utils.draw( ["Active", "Idle", "Blocked", "Pending"]);
  }),
  payment_methods: (function() {
    return utils.draw( ["Credit card", "Debit card", "Paypal", "Cash", "Money transfer", "Bitcoins", "Cheque", "Apple Pay", "Google Pay", "WeChat Pay", "Alipay", "Visa checkout"]);
  }),
  subscription_terms: (function() {
    return utils.draw( ["Daily", "Weekly", "Monthly", "Annual", "Biennal", "Triennal", "Quinquennal", "Lifetime"]);
  }),
  payment_terms: (function() {
    return utils.draw( ["Payment in advance", "Monthly", "Annual", "Full subscription"]);
  }),
};

module.exports = subscription
