const utils = require('../utils');
// RandExp = require('randexp');

const bank = {
  name() {
    return utils.draw(["UBS CLEARING AND EXECUTION SERVICES LIMITED", "ABN AMRO CORPORATE FINANCE LIMITED", "ABN AMRO FUND MANAGERS LIMITED", "ABN AMRO HOARE GOVETT SECURITIES", "ABN AMRO HOARE GOVETT CORPORATE FINANCE LTD.", "ALKEN ASSET MANAGEMENT", "ALKEN ASSET MANAGEMENT", "ABN AMRO HOARE GOVETT LIMITED", "AAC CAPITAL PARTNERS LIMITED", "ABBOTSTONE AGRICULTURAL PROPERTY UNIT TRUST", "ABN AMRO QUOTED INVESTMENTS (UK) LIMITED", "ABN AMRO MEZZANINE (UK) LIMITED", "ABBEY LIFE", "SANTANDER UK PLC", "OTKRITIE SECURITIES LIMITED", "ABC INTERNATIONAL BANK PLC", "ALLIED BANK PHILIPPINES (UK) PLC", "ABU DHABI ISLAMIC BANK", "ABG SUNDAL COLLIER LIMITED", "PGMS (GLASGOW) LIMITED", "ABINGWORTH MANAGEMENT LIMITED", "THE ROYAL BANK OF SCOTLAND PLC (FORMER RBS NV)"])
  },
  swift_bic() {
    return utils.draw(["AACCGB21", "AACNGB21", "AAFMGB21", "AAHOGB21", "AAHVGB21", "AANLGB21", "AANLGB2L", "AAOGGB21", "AAPEGB21", "AAPUGB21", "AAQIGB21", "ABAZGB21", "ABBEGB21", "ABBYGB2L", "ABCCGB22", "ABCEGB2L", "ABCMGB21", "ABDIGB21", "ABECGB21", "ABFIGB21", "ABMNGB21", "ABNAGB21VOC"])
  },
  // iban_details(param) {
  //   switch(param) {
  //     case "ad": 
  //     return {length: 24, bban_pattern: new RandExp(/d{8}[A-Z0-9]{12}/)}
  //     case "ae": 
  //       return {length: 23, bban_pattern: new RandExp(/d{19}/)}
  //     case "al": 
  //       return {length: 28, bban_pattern: new RandExp(/d{8}[A-Z0-9]{16}/)}
  //     case "at": 
  //       return {length: 20, bban_pattern: new RandExp(/d{16}/)}
  //     case "az": 
  //       return {length: 28, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{20}/)}
  //     case "ba": 
  //       return {length: 20, bban_pattern: new RandExp(/d{16}/)}
  //     case "be": 
  //       return {length: 16, bban_pattern: new RandExp(/d{12}/)}
  //     case "bg": 
  //       return {length: 22, bban_pattern: new RandExp(/[A-Z]{4}d{6}[A-Z0-9]{8}/)}
  //     case "bh": 
  //       return {length: 22, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{14}/)}
  //     case "br": 
  //       return {length: 29, bban_pattern: new RandExp(/[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1}/)}
  //     case "ch": 
  //       return {length: 21, bban_pattern: new RandExp(/d{5}[A-Z0-9]{12}/)}
  //     case "cr": 
  //       return {length: 22, bban_pattern: new RandExp(/0d{3}d{14}/)}
  //     case "cy": 
  //       return {length: 28, bban_pattern: new RandExp(/d{8}[A-Z0-9]{16}/)}
  //     case "cz": 
  //       return {length: 24, bban_pattern: new RandExp(/d{20}/)}
  //     case "de": 
  //       return {length: 22, bban_pattern: new RandExp(/d{18}/)}
  //     case "dk": 
  //       return {length: 18, bban_pattern: new RandExp(/d{14}/)}
  //     case "do": 
  //       return {length: 28, bban_pattern: new RandExp(/[A-Z]{4}d{20}/)}
  //     case "ee": 
  //       return {length: 20, bban_pattern: new RandExp(/d{16}/)}
  //     case "es": 
  //       return {length: 24, bban_pattern: new RandExp(/d{20}/)}
  //     case "fi": 
  //       return {length: 18, bban_pattern: new RandExp(/d{14}/)}
  //     case "fo": 
  //       return {length: 18, bban_pattern: new RandExp(/d{14}/)}
  //     case "fr": 
  //       return {length: 27, bban_pattern: new RandExp(/d{10}[A-Z0-9]{11}d{2}/)}
  //     case "gb": 
  //       return {length: 22, bban_pattern: new RandExp(/[A-Z]{4}d{14}/)}
  //     case "ge": 
  //       return {length: 22, bban_pattern: new RandExp(/[A-Z]{2}d{16}/)}
  //     case "gi": 
  //       return {length: 23, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{15}/)}
  //     case "gl": 
  //       return {length: 18, bban_pattern: new RandExp(/d{14}/)}
  //     case "gr": 
  //       return {length: 27, bban_pattern: new RandExp(/d{7}[A-Z0-9]{16}/)}
  //     case "gt": 
  //       return {length: 28, bban_pattern: new RandExp(/[A-Z0-9]{4}d{2}d{2}[A-Z0-9]{16}/)}
  //     case "hr": 
  //       return {length: 21, bban_pattern: new RandExp(/d{17}/)}
  //     case "hu": 
  //       return {length: 28, bban_pattern: new RandExp(/d{24}/)}
  //     case "ie": 
  //       return {length: 22, bban_pattern: new RandExp(/[A-Z]{4}d{14}/)}
  //     case "il": 
  //       return {length: 23, bban_pattern: new RandExp(/d{19}/)}
  //     case "is": 
  //       return {length: 26, bban_pattern: new RandExp(/d{22}/)}
  //     case "it": 
  //       return {length: 27, bban_pattern: new RandExp(/[A-Z]d{10}[A-Z0-9]{12}/)}
  //     case "kw": 
  //       return {length: 30, bban_pattern: new RandExp(/[A-Z]{4}d{22}/)}
  //     case "kz": 
  //       return {length: 20, bban_pattern: new RandExp(/[0-9]{3}[A-Z0-9]{13}/)}
  //     case "lb": 
  //       return {length: 28, bban_pattern: new RandExp(/d{4}[A-Z0-9]{20}/)}
  //     case "li": 
  //       return {length: 21, bban_pattern: new RandExp(/d{5}[A-Z0-9]{12}/)}
  //     case "lt": 
  //       return {length: 20, bban_pattern: new RandExp(/d{16}/)}
  //     case "lu": 
  //       return {length: 20, bban_pattern: new RandExp(/d{3}[A-Z0-9]{13}/)}
  //     case "lv": 
  //       return {length: 21, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{13}/)}
  //     case "mc": 
  //       return {length: 27, bban_pattern: new RandExp(/d{10}[A-Z0-9]{11}d{2}/)}
  //     case "md": 
  //       return {length: 24, bban_pattern: new RandExp(/[A-Z]{2}[A-Z0-9]{18}/)}
  //     case "me": 
  //       return {length: 22, bban_pattern: new RandExp(/d{18}/)}
  //     case "mk": 
  //       return {length: 19, bban_pattern: new RandExp(/d{3}[A-Z0-9]{10}d{2}/)}
  //     case "mr": 
  //       return {length: 27, bban_pattern: new RandExp(/d{23}/)}
  //     case "mt": 
  //       return {length: 31, bban_pattern: new RandExp(/[A-Z]{4}d{5}[A-Z0-9]{18}/)}
  //     case "mu": 
  //       return {length: 30, bban_pattern: new RandExp(/[A-Z]{4}d{19}[A-Z]{3}/)}
  //     case "nl": 
  //       return {length: 18, bban_pattern: new RandExp(/[A-Z]{4}d{10}/)}
  //     case "no": 
  //       return {length: 15, bban_pattern: new RandExp(/d{11}/)}
  //     case "pk": 
  //       return {length: 24, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{16}/)}
  //     case "pl": 
  //       return {length: 28, bban_pattern: new RandExp(/d{8}[A-Z0-9]{16}/)}
  //     case "ps": 
  //       return {length: 29, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{21}/)}
  //     case "pt": 
  //       return {length: 25, bban_pattern: new RandExp(/d{21}/)}
  //     case "qa": 
  //       return {length: 29, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{21}/)}
  //     case "ro": 
  //       return {length: 24, bban_pattern: new RandExp(/[A-Z]{4}[A-Z0-9]{16}/)}
  //     case "rs": 
  //       return {length: 22, bban_pattern: new RandExp(/d{18}/)}
  //     case "sa": 
  //       return {length: 24, bban_pattern: new RandExp(/d{2}[A-Z0-9]{18}/)}
  //     case "se": 
  //       return {length: 24, bban_pattern: new RandExp(/d{20}/)}
  //     case "si": 
  //       return {length: 19, bban_pattern: new RandExp(/d{15}/)}
  //     case "sk": 
  //       return {length: 24, bban_pattern: new RandExp(/d{20}/)}
  //     case "sm": 
  //       return {length: 27, bban_pattern: new RandExp(/[A-Z]d{10}[A-Z0-9]{12}/)}
  //     case "tl": 
  //       return {length: 23, bban_pattern: new RandExp(/d{19}/)}
  //     case "tn": 
  //       return {length: 24, bban_pattern: new RandExp(/d{20}/)}
  //     case "tr": 
  //       return {length: 26, bban_pattern: new RandExp(/d{5}[A-Z0-9]{17}/)}
  //     case "ua": 
  //       return {length: 29, bban_pattern: new RandExp(/d{25}/)}
  //     case "vg": 
  //       return {length: 24, bban_pattern: new RandExp(/[A-Z]{4}d{16}/)}
  //     default:
  //     case "xk": 
  //       return {length: 20, bban_pattern: new RandExp(/d{16}/)}
  //   }
  // },
};

module.exports = bank

