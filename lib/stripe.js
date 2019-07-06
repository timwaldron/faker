const utils = require('../utils');

const stripe = {
  valid_cards(obj) {
    toFind = {
      visa: "4242424242424242",
      visa_debit: "4000056655665556",
      mc: "5555555555554444",
      mc_2_series: "2223003122003222",
      mc_debit: "5200828282828210",
      mc_prepaid: "5105105105105100",
      amex: "378282246310005",
      amex_2: "371449635398431",
      discover: "6011111111111117",
      discover_2: "6011000990139424",
      diners_club: "30569309025904",
      diners_club_2: "38520000023237",
      jcb: "3530111333300000",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  valid_tokens(obj) {
    toFind = {
      visa: "tok_visa",
      visa_debit: "tok_visa_debit",
      mc: "tok_mastercard",
      mc_debit: "tok_mastercard_debit",
      mc_prepaid: "tok_mastercard_prepaid",
      amex: "tok_amex",
      discover: "tok_discover",
      diners_club: "tok_diners",
      jcb: "tok_jcb",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  invalid_cards(obj) {
    toFind = {
      addressZipFail: "4000000000000010",
      addressFail: "4000000000000028",
      zipFail: "4000000000000036",
      addressZipUnavailable: "4000000000000044",
      cvcFail: "4000000000000101",
      customerChargeFail: "4000000000000341",
      successWithReview: "4000000000009235",
      declineCard: "4000000000000002",
      declineFraudulentCard: "4100000000000019",
      declineIncorrectCvc: "4000000000000127",
      declineExpired: "4000000000000069",
      declineProcessingError: "4000000000000119",
      declineIncorrectNumber: "4242424242424241",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
};

module.exports = stripe

