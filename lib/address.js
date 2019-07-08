const utils = require('../utils');
const name = require('./name');

const address = {
  city_prefix() {
    return utils.draw(["North", "East", "West", "South", "New", "Lake", "Port"])
  },
  city_suffix() {
    return utils.draw(["town", "ton", "land", "ville", "berg", "burgh", "borough", "bury", "view", "port", "mouth", "stad", "furt", "chester", "mouth", "fort", "haven", "side", "shire"])
  },
  country() {
    return utils.draw(["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica (the territory South of 60 deg S)", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island (Bouvetoya)", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands Antilles", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard & Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"])
  },
  country_by_code(param) {
    switch(param.toUpperCase()) {
      case "AF":
        return "Afghanistan"
      case "AL":
        return "Albania"
      case "DZ":
        return "Algeria"
      case "AS":
        return "American Samoa"
      case "AD":
        return "Andorra"
      case "AO":
        return "Angola"
      case "AI":
        return "Anguilla"
      case "AQ":
        return "Antarctica"
      case "AG":
        return "Antigua And Barbuda"
      case "AR":
        return "Argentina"
      case "AM":
        return "Armenia"
      case "AW":
        return "Aruba"
      case "AU":
        return "Australia"
      case "AT":
        return "Austria"
      case "AX":
        return "Aland Islands"
      case "AZ":
        return "Azerbaijan"
      case "BS":
        return "Bahamas"
      case "BH":
        return "Bahrain"
      case "BD":
        return "Bangladesh"
      case "BB":
        return "Barbados"
      case "BY":
        return "Belarus"
      case "BE":
        return "Belgium"
      case "BZ":
        return "Belize"
      case "BJ":
        return "Benin"
      case "BM":
        return "Bermuda"
      case "BT":
        return "Bhutan"
      case "BO":
        return "Bolivia"
      case "BQ":
        return "Bonaire"
      case "BA":
        return "Bosnia And Herzegovina"
      case "BW":
        return "Botswana"
      case "BV":
        return "Bouvet Island"
      case "BR":
        return "Brazil"
      case "IO":
        return "British Indian Ocean Territory"
      case "BN":
        return "Brunei Darussalam"
      case "BG":
        return "Bulgaria"
      case "BF":
        return "Burkina Faso"
      case "BI":
        return "Burundi"
      case "KH":
        return "Cambodia"
      case "CM":
        return "Cameroon"
      case "CA":
        return "Canada"
      case "CV":
        return "Cape Verde"
      case "KY":
        return "Cayman Islands"
      case "CF":
        return "Central African Republic"
      case "TD":
        return "Chad"
      case "CL":
        return "Chile"
      case "CN":
        return "China"
      case "CX":
        return "Christmas Island"
      case "CC":
        return "Cocos (keeling) Islands"
      case "CO":
        return "Colombia"
      case "KM":
        return "Comoros"
      case "CG":
        return "Congo"
      case "CD":
        return "Congo The Democratic Republic Of The"
      case "CK":
        return "Cook Islands"
      case "CR":
        return "Costa Rica"
      case "CI":
        return "Cote D'ivoire"
      case "HR":
        return "Croatia"
      case "CU":
        return "Cuba"
      case "CW":
        return "Curacao"
      case "CY":
        return "Cyprus"
      case "CZ":
        return "Czech Republic"
      case "DK":
        return "Denmark"
      case "DJ":
        return "Djibouti"
      case "DM":
        return "Dominica"
      case "DO":
        return "Dominican Republic"
      case "TP":
        return "East Timor"
      case "EC":
        return "Ecuador"
      case "EG":
        return "Egypt"
      case "SV":
        return "El Salvador"
      case "GQ":
        return "Equatorial Guinea"
      case "ER":
        return "Eritrea"
      case "EE":
        return "Estonia"
      case "ET":
        return "Ethiopia"
      case "FK":
        return "Falkland Islands (malvinas)"
      case "FO":
        return "Faroe Islands"
      case "FJ":
        return "Fiji"
      case "FI":
        return "Finland"
      case "FR":
        return "France"
      case "GF":
        return "French Guiana"
      case "PF":
        return "French Polynesia"
      case "TF":
        return "French Southern Territories"
      case "GA":
        return "Gabon"
      case "GM":
        return "Gambia"
      case "GE":
        return "Georgia"
      case "DE":
        return "Germany"
      case "GH":
        return "Ghana"
      case "GI":
        return "Gibraltar"
      case "GR":
        return "Greece"
      case "GL":
        return "Greenland"
      case "GD":
        return "Grenada"
      case "GP":
        return "Guadeloupe"
      case "GU":
        return "Guam"
      case "GT":
        return "Guatemala"
      case "GG":
        return "Guernsey"
      case "GN":
        return "Guinea"
      case "GW":
        return "Guinea-bissau"
      case "GY":
        return "Guyana"
      case "HT":
        return "Haiti"
      case "HM":
        return "Heard Island And Mcdonald Islands"
      case "VA":
        return "Holy See (vatican City State)"
      case "HN":
        return "Honduras"
      case "HK":
        return "Hong Kong"
      case "HU":
        return "Hungary"
      case "IS":
        return "Iceland"
      case "IN":
        return "India"
      case "ID":
        return "Indonesia"
      case "IR":
        return "Iran Islamic Republic Of"
      case "IQ":
        return "Iraq"
      case "IE":
        return "Ireland"
      case "IM":
        return "Isle of Man"
      case "IL":
        return "Israel"
      case "IT":
        return "Italy"
      case "JM":
        return "Jamaica"
      case "JP":
        return "Japan"
      case "JE":
        return "Jersey"
      case "JO":
        return "Jordan"
      case "KZ":
        return "Kazakstan"
      case "KE":
        return "Kenya"
      case "KI":
        return "Kiribati"
      case "KP":
        return "Korea Democratic People's Republic Of"
      case "KR":
        return "Korea Republic Of"
      case "KV":
        return "Kosovo"
      case "KW":
        return "Kuwait"
      case "KG":
        return "Kyrgyzstan"
      case "LA":
        return "Lao People's Democratic Republic"
      case "LV":
        return "Latvia"
      case "LB":
        return "Lebanon"
      case "LS":
        return "Lesotho"
      case "LR":
        return "Liberia"
      case "LY":
        return "Libyan Arab Jamahiriya"
      case "LI":
        return "Liechtenstein"
      case "LT":
        return "Lithuania"
      case "LU":
        return "Luxembourg"
      case "MO":
        return "Macau"
      case "MK":
        return "Macedonia The Former Yugoslav Republic Of"
      case "MG":
        return "Madagascar"
      case "MW":
        return "Malawi"
      case "MY":
        return "Malaysia"
      case "MV":
        return "Maldives"
      case "ML":
        return "Mali"
      case "MT":
        return "Malta"
      case "MH":
        return "Marshall Islands"
      case "MQ":
        return "Martinique"
      case "MR":
        return "Mauritania"
      case "MU":
        return "Mauritius"
      case "YT":
        return "Mayotte"
      case "MX":
        return "Mexico"
      case "FM":
        return "Micronesia Federated States Of"
      case "MD":
        return "Moldova Republic Of"
      case "MC":
        return "Monaco"
      case "MN":
        return "Mongolia"
      case "MS":
        return "Montserrat"
      case "ME":
        return "Montenegro"
      case "MA":
        return "Morocco"
      case "MZ":
        return "Mozambique"
      case "MM":
        return "Myanmar"
      case "NA":
        return "Namibia"
      case "NR":
        return "Nauru"
      case "NP":
        return "Nepal"
      case "NL":
        return "Netherlands"
      case "AN":
        return "Netherlands Antilles"
      case "NC":
        return "New Caledonia"
      case "NZ":
        return "New Zealand"
      case "NI":
        return "Nicaragua"
      case "NE":
        return "Niger"
      case "NG":
        return "Nigeria"
      case "NU":
        return "Niue"
      case "NF":
        return "Norfolk Island"
      case "MP":
        return "Northern Mariana Islands"
      case "NO":
        return "Norway"
      case "OM":
        return "Oman"
      case "PK":
        return "Pakistan"
      case "PW":
        return "Palau"
      case "PS":
        return "Palestinian Territory Occupied"
      case "PA":
        return "Panama"
      case "PG":
        return "Papua New Guinea"
      case "PY":
        return "Paraguay"
      case "PE":
        return "Peru"
      case "PH":
        return "Philippines"
      case "PN":
        return "Pitcairn"
      case "PL":
        return "Poland"
      case "PT":
        return "Portugal"
      case "PR":
        return "Puerto Rico"
      case "QA":
        return "Qatar"
      case "RE":
        return "Reunion"
      case "RO":
        return "Romania"
      case "RU":
        return "Russian Federation"
      case "RW":
        return "Rwanda"
      case "BL":
        return "Saint Barthelemy"
      case "SH":
        return "Saint Helena"
      case "KN":
        return "Saint Kitts And Nevis"
      case "LC":
        return "Saint Lucia"
      case "MF":
        return "Saint Martin"
      case "PM":
        return "Saint Pierre And Miquelon"
      case "VC":
        return "Saint Vincent And The Grenadines"
      case "WS":
        return "Samoa"
      case "SM":
        return "San Marino"
      case "ST":
        return "Sao Tome And Principe"
      case "SA":
        return "Saudi Arabia"
      case "SN":
        return "Senegal"
      case "RS":
        return "Serbia"
      case "SC":
        return "Seychelles"
      case "SL":
        return "Sierra Leone"
      case "SG":
        return "Singapore"
      case "SX":
        return "Sint Maarten"
      case "SK":
        return "Slovakia"
      case "SI":
        return "Slovenia"
      case "SB":
        return "Solomon Islands"
      case "SO":
        return "Somalia"
      case "ZA":
        return "South Africa"
      case "GS":
        return "South Georgia And The South Sandwich Islands"
      case "SS":
        return "South Sudan"
      case "ES":
        return "Spain"
      case "LK":
        return "Sri Lanka"
      case "SD":
        return "Sudan"
      case "SR":
        return "Suriname"
      case "SJ":
        return "Svalbard And Jan Mayen"
      case "SZ":
        return "Swaziland"
      case "SE":
        return "Sweden"
      case "CH":
        return "Switzerland"
      case "SY":
        return "Syrian Arab Republic"
      case "TW":
        return "Taiwan Province Of China"
      case "TJ":
        return "Tajikistan"
      case "TZ":
        return "Tanzania United Republic Of"
      case "TH":
        return "Thailand"
      case "TL":
        return "Timor-Leste"
      case "TG":
        return "Togo"
      case "TK":
        return "Tokelau"
      case "TO":
        return "Tonga"
      case "TT":
        return "Trinidad And Tobago"
      case "TN":
        return "Tunisia"
      case "TR":
        return "Turkey"
      case "TM":
        return "Turkmenistan"
      case "TC":
        return "Turks And Caicos Islands"
      case "TV":
        return "Tuvalu"
      case "UG":
        return "Uganda"
      case "UA":
        return "Ukraine"
      case "AE":
        return "United Arab Emirates"
      case "GB":
        return "United Kingdom"
      case "US":
        return "United States"
      case "UM":
        return "United States Minor Outlying Islands"
      case "UY":
        return "Uruguay"
      case "UZ":
        return "Uzbekistan"
      case "VU":
        return "Vanuatu"
      case "VE":
        return "Venezuela"
      case "VN":
        return "Viet Nam"
      case "VG":
        return "Virgin Islands British"
      case "VI":
        return "Virgin Islands U.s."
      case "WF":
        return "Wallis And Futuna"
      case "EH":
        return "Western Sahara"
      case "YE":
        return "Yemen"
      case "ZM":
        return "Zambia"
      case "ZW":
        return "Zimbabwe"
      default:
        return undefined
    };
  },
  country_by_name(param) {
    paramSanitized = param.toLowerCase().replace(/ /g, "_");
    
    switch(paramSanitized) {
      case "afghanistan":
        return "AF"
      case "albania":
        return "AB"
      case "algeria":
        return "DZ"
      case "american_samoa":
        return "AS"
      case "andorra":
        return "AD"
      case "angola":
        return "AO"
      case "anguilla":
        return "AI"
      case "antarctica":
        return "AQ"
      case "antigua_and_barbuda":
        return "AG"
      case "argentina":
        return "AR"
      case "armenia":
        return "AM"
      case "aruba":
        return "AW"
      case "australia":
        return "AU"
      case "austria":
        return "AT"
      case "azerbaijan":
        return "AZ"
      case "bahamas":
        return "BS"
      case "bahrain":
        return "BH"
      case "bangladesh":
        return "BD"
      case "barbados":
        return "BB"
      case "belarus":
        return "BY"
      case "belgium":
        return "BE"
      case "belize":
        return "BZ"
      case "benin":
        return "BJ"
      case "bermuda":
        return "BM"
      case "bhutan":
        return "BT"
      case "bolivia":
        return "BO"
      case "bosnia_and_herzegovina":
        return "BA"
      case "botswana":
        return "BW"
      case "bouvet_island":
        return "BV"
      case "brazil":
        return "BR"
      case "british_indian_ocean_territory":
        return "IO"
      case "brunei_darussalam":
        return "BN"
      case "bulgaria":
        return "BG"
      case "burkina_faso":
        return "BF"
      case "burundi":
        return "BI"
      case "cambodia":
        return "KH"
      case "cameroon":
        return "CM"
      case "canada":
        return "CA"
      case "cape_verde":
        return "CV"
      case "cayman_islands":
        return "KY"
      case "central_african_republic":
        return "CF"
      case "chad":
        return "TD"
      case "chile":
        return "CL"
      case "china":
        return "CN"
      case "christmas_island":
        return "CX"
      case "cocos_islands":
        return "CC"
      case "colombia":
        return "CO"
      case "comoros":
        return "KM"
      case "congo":
        return "CG"
      case "cook_islands":
        return "CK"
      case "costa_rica":
        return "CR"
      case "cote_d_ivoire":
        return "CI"
      case "croatia":
        return "HR"
      case "cuba":
        return "CU"
      case "cyprus":
        return "CY"
      case "czech_republic":
        return "CZ"
      case "denmark":
        return "DK"
      case "djibouti":
        return "DJ"
      case "dominica":
        return "DM"
      case "dominican_republic":
        return "DO"
      case "east_timor":
        return "TP"
      case "ecuador":
        return "EC"
      case "egypt":
        return "EG"
      case "el_salvador":
        return "SV"
      case "equatorial_guinea":
        return "GQ"
      case "eritrea":
        return "ER"
      case "estonia":
        return "EE"
      case "ethiopia":
        return "ET"
      case "falkland_islands":
        return "FK"
      case "malvinas":
        return "FK"
      case "faroe_islands":
        return "FO"
      case "fiji":
        return "FJ"
      case "finland":
        return "FI"
      case "france":
        return "FR"
      case "french_guiana":
        return "GF"
      case "french_polynesia":
        return "PF"
      case "french_southern_territories":
        return "TF"
      case "gabon":
        return "GA"
      case "gambia":
        return "GM"
      case "georgia":
        return "GE"
      case "germany":
        return "DE"
      case "ghana":
        return "GH"
      case "gibraltar":
        return "GI"
      case "greece":
        return "GR"
      case "greenland":
        return "GL"
      case "grenada":
        return "GD"
      case "guadeloupe":
        return "GP"
      case "guam":
        return "GU"
      case "guatemala":
        return "GT"
      case "guinea":
        return "GN"
      case "guinea_bissau":
        return "GW"
      case "guyana":
        return "GY"
      case "haiti":
        return "HT"
      case "heard_island_and_mcdonald_islands":
        return "HM"
      case "holy_see":
        return "VA"
      case "honduras":
        return "HN"
      case "hong_kong":
        return "HK"
      case "hungary":
        return "HU"
      case "iceland":
        return "IS"
      case "india":
        return "IN"
      case "indonesia":
        return "ID"
      case "ir_islamic_republic_of":
        return "IR"
      case "iraq":
        return "IQ"
      case "ireland":
        return "IE"
      case "israel":
        return "IL"
      case "italy":
        return "IT"
      case "jamaica":
        return "JM"
      case "japan":
        return "JP"
      case "jordan":
        return "JO"
      case "kazakstan":
        return "KZ"
      case "kenya":
        return "KE"
      case "kiribati":
        return "KI"
      case "korea_democratic_peoples_republic_of":
        return "KP"
      case "korea_republic_of":
        return "KR"
      case "kosovo":
        return "KV"
      case "kuwait":
        return "KW"
      case "kyrgyzstan":
        return "KG"
      case "lao_people_s_democratic_republic":
        return "LA"
      case "latvia":
        return "LV"
      case "lebanon":
        return "LB"
      case "lesotho":
        return "LS"
      case "liberia":
        return "LR"
      case "libyan_arab_jamahiriya":
        return "LY"
      case "liechtenstein":
        return "LI"
      case "lithuania":
        return "LT"
      case "luxembourg":
        return "LU"
      case "macau":
        return "MO"
      case "macedonia_the_former_yugoslav_republic_of":
        return "MK"
      case "madagascar":
        return "MG"
      case "malawi":
        return "MW"
      case "malaysia":
        return "MY"
      case "maldives":
        return "MV"
      case "mali":
        return "ML"
      case "malta":
        return "MT"
      case "marshall_islands":
        return "MH"
      case "martinique":
        return "MQ"
      case "mauritania":
        return "MR"
      case "mauritius":
        return "MU"
      case "mayotte":
        return "YT"
      case "mexico":
        return "MX"
      case "micronesia_federated_states_of":
        return "FM"
      case "moldova_republic_of":
        return "MD"
      case "monaco":
        return "MC"
      case "mongolia":
        return "MN"
      case "montserrat":
        return "MS"
      case "montenegro":
        return "ME"
      case "morocco":
        return "MA"
      case "mozambique":
        return "MZ"
      case "myanmar":
        return "MM"
      case "namibia":
        return "NA"
      case "nauru":
        return "NR"
      case "nepal":
        return "NP"
      case "netherlands":
        return "NL"
      case "netherlands_antilles":
        return "AN"
      case "new_caledonia":
        return "NC"
      case "new_zealand":
        return "NZ"
      case "nicaragua":
        return "NI"
      case "niger":
        return "NE"
      case "nigeria":
        return "NG"
      case "niue":
        return "NU"
      case "norfolk_island":
        return "NF"
      case "northern_mariana_islands":
        return "NP"
      case "norway":
        return "NO"
      case "oman":
        return "OM"
      case "pakistan":
        return "PK"
      case "palau":
        return "PW"
      case "palestinian_territory_occupied":
        return "PS"
      case "panama":
        return "PA"
      case "papua_new_guinea":
        return "PG"
      case "paraguay":
        return "PY"
      case "peru":
        return "PE"
      case "philippines":
        return "PH"
      case "pitcairn":
        return "PN"
      case "poland":
        return "PL"
      case "portugal":
        return "PT"
      case "puerto_rico":
        return "PR"
      case "qatar":
        return "QA"
      case "reunion":
        return "RE"
      case "romania":
        return "RO"
      case "russian_federation":
        return "RU"
      case "rwanda":
        return "RW"
      case "saint_helena":
        return "SH"
      case "saint_kitts_and_nevis":
        return "KN"
      case "saint_lucia":
        return "LC"
      case "saint_pierre_and_miquelon":
        return "PM"
      case "saint_vincent_and_the_grenadines":
        return "VC"
      case "samoa":
        return "WS"
      case "san_marino":
        return "SM"
      case "sao_tome_and_principe":
        return "ST"
      case "saudi_arabia":
        return "SA"
      case "senegal":
        return "SN"
      case "serbia":
        return "RS"
      case "seychelles":
        return "SC"
      case "sierra_leone":
        return "SL"
      case "singapore":
        return "SG"
      case "slovakia":
        return "SK"
      case "slovenia":
        return "SI"
      case "solomonislands":
        return "SB"
      case "somalia":
        return "SO"
      case "south_africa":
        return "ZA"
      case "south_georgia_and_the_south_sandwich_islands":
        return "GS"
      case "spain":
        return "ES"
      case "sri_lanka":
        return "LK"
      case "sudan":
        return "SD"
      case "suriname":
        return "SR"
      case "svalbard_and_jan_mayen":
        return "SJ"
      case "swaziland":
        return "SZ"
      case "sweden":
        return "SE"
      case "switzerland":
        return "CH"
      case "syrian_arab_republic":
        return "SY"
      case "taiwan_province_of_china":
        return "TW"
      case "tajikistan":
        return "TJ"
      case "tanzania_united_republic_of":
        return "TZ"
      case "thailand":
        return "TH"
      case "togo":
        return "TG"
      case "tokelau":
        return "TK"
      case "tonga":
        return "TO"
      case "trinidad_and_tobago":
        return "TT"
      case "tunisia":
        return "TN"
      case "turkey":
        return "TR"
      case "turkmenistan":
        return "TM"
      case "turks_and_caicos_islands":
        return "TC"
      case "tuvalu":
        return "TV"
      case "uganda":
        return "UG"
      case "ukraine":
        return "UA"
      case "united_arab_emirates":
        return ""
      case "united_kingdom":
        return "GB"
      case "united_states":
        return "US"
      case "united_states_minor_outlying_islands":
        return "UM"
      case "uruguay":
        return "UY"
      case "uzbekistan":
        return "UZ"
      case "vanuatu":
        return "VU"
      case "venezuela":
        return "VE"
      case "viet_nam":
        return "VN"
      case "virgin_islands_british":
        return "VG"
      case "virgin_islands_us":
        return "VI"
      case "wallisandfutuna":
        return "WF"
      case "western_sahara":
        return "EH"
      case "yemen":
        return "YE"
      case "zambia":
        return "ZM"
      case "zimbabwe":
        return "ZW"
      default:
        return undefined;
    };
  },
  country_code() {
    return utils.draw(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"])
  },
  country_code_long() {
    return utils.draw(["ABW", "AFG", "AGO", "AIA", "ALA", "ALB", "AND", "ARE", "ARG", "ARM", "ASM", "ATA", "ATF", "ATG", "AUS", "AUT", "AZE", "BDI", "BEL", "BEN", "BES", "BFA", "BGD", "BGR", "BHR", "BHS", "BIH", "BLM", "BLR", "BLZ", "BMU", "BOL", "BRA", "BRB", "BRN", "BTN", "BVT", "BWA", "CAF", "CAN", "CCK", "CHE", "CHL", "CHN", "CIV", "CMR", "COD", "COG", "COK", "COL", "COM", "CPV", "CRI", "CUB", "CUW", "CXR", "CYM", "CYP", "CZE", "DEU", "DJI", "DMA", "DNK", "DOM", "DZA", "ECU", "EGY", "ERI", "ESH", "ESP", "EST", "ETH", "FIN", "FJI", "FLK", "FRA", "FRO", "FSM", "GAB", "GBR", "GEO", "GGY", "GHA", "GIB", "GIN", "GLP", "GMB", "GNB", "GNQ", "GRC", "GRD", "GRL", "GTM", "GUF", "GUM", "GUY", "HKG", "HMD", "HND", "HRV", "HTI", "HUN", "IDN", "IMN", "IND", "IOT", "IRL", "IRN", "IRQ", "ISL", "ISR", "ITA", "JAM", "JEY", "JOR", "JPN", "KAZ", "KEN", "KGZ", "KHM", "KIR", "KNA", "KOR", "KWT", "LAO", "LBN", "LBR", "LBY", "LCA", "LIE", "LKA", "LSO", "LTU", "LUX", "LVA", "MAC", "MAF", "MAR", "MCO", "MDA", "MDG", "MDV", "MEX", "MHL", "MKD", "MLI", "MLT", "MMR", "MNE", "MNG", "MNP", "MOZ", "MRT", "MSR", "MTQ", "MUS", "MWI", "MYS", "MYT", "NAM", "NCL", "NER", "NFK", "NGA", "NIC", "NIU", "NLD", "NOR", "NPL", "NRU", "NZL", "OMN", "PAK", "PAN", "PCN", "PER", "PHL", "PLW", "PNG", "POL", "PRI", "PRK", "PRT", "PRY", "PSE", "PYF", "QAT", "REU", "ROU", "RUS", "RWA", "SAU", "SDN", "SEN", "SGP", "SGS", "SHN", "SJM", "SLB", "SLE", "SLV", "SMR", "SOM", "SPM", "SRB", "SSD", "STP", "SUR", "SVK", "SVN", "SWE", "SWZ", "SXM", "SYC", "SYR", "TCA", "TCD", "TGO", "THA", "TJK", "TKL", "TKM", "TLS", "TON", "TTO", "TUN", "TUR", "TUV", "TWN", "TZA", "UGA", "UKR", "UMI", "URY", "USA", "UZB", "VAT", "VCT", "VEN", "VGB", "VIR", "VNM", "VUT", "WLF", "WSM", "YEM", "ZAF", "ZMB", "ZWE"])
  },
  building_number() {
    dataSet = utils.draw(["#####", "####", "###"])
    return utils.randomizer(dataSet)
  },
  community_prefix() {
    return utils.draw(["Park", "Summer", "Autumn", "Paradise", "Eagle", "Pine", "Royal", "University", "Willow"])
  },
  community_suffix() {
    return utils.draw(["Village", "Creek", "Place", "Pointe", "Square", "Oaks", "Gardens", "Crossing", "Court", "Acres", "Estates", "Heights"])
  },
  community() {
    return this.community_prefix() + " " + this.community_suffix();
  },
  street_suffix() {
    return utils.draw(["Alley", "Avenue", "Branch", "Bridge", "Brook", "Brooks", "Burg", "Burgs", "Bypass", "Camp", "Canyon", "Cape", "Causeway", "Center", "Centers", "Circle", "Circles", "Cliff", "Cliffs", "Club", "Common", "Corner", "Corners", "Course", "Court", "Courts", "Cove", "Coves", "Creek", "Crescent", "Crest", "Crossing", "Crossroad", "Curve", "Dale", "Dam", "Divide", "Drive", "Drive", "Drives", "Estate", "Estates", "Expressway", "Extension", "Extensions", "Fall", "Falls", "Ferry", "Field", "Fields", "Flat", "Flats", "Ford", "Fords", "Forest", "Forge", "Forges", "Fork", "Forks", "Fort", "Freeway", "Garden", "Gardens", "Gateway", "Glen", "Glens", "Green", "Greens", "Grove", "Groves", "Harbor", "Harbors", "Haven", "Heights", "Highway", "Hill", "Hills", "Hollow", "Inlet", "Inlet", "Island", "Island", "Islands", "Islands", "Isle", "Isle", "Junction", "Junctions", "Key", "Keys", "Knoll", "Knolls", "Lake", "Lakes", "Land", "Landing", "Lane", "Light", "Lights", "Loaf", "Lock", "Locks", "Locks", "Lodge", "Lodge", "Loop", "Mall", "Manor", "Manors", "Meadow", "Meadows", "Mews", "Mill", "Mills", "Mission", "Mission", "Motorway", "Mount", "Mountain", "Mountain", "Mountains", "Mountains", "Neck", "Orchard", "Oval", "Overpass", "Park", "Parks", "Parkway", "Parkways", "Pass", "Passage", "Path", "Pike", "Pine", "Pines", "Place", "Plain", "Plains", "Plains", "Plaza", "Plaza", "Point", "Points", "Port", "Port", "Ports", "Ports", "Prairie", "Prairie", "Radial", "Ramp", "Ranch", "Rapid", "Rapids", "Rest", "Ridge", "Ridges", "River", "Road", "Road", "Roads", "Roads", "Route", "Row", "Rue", "Run", "Shoal", "Shoals", "Shore", "Shores", "Skyway", "Spring", "Springs", "Springs", "Spur", "Spurs", "Square", "Square", "Squares", "Squares", "Station", "Station", "Stravenue", "Stravenue", "Stream", "Stream", "Street", "Street", "Streets", "Summit", "Summit", "Terrace", "Throughway", "Trace", "Track", "Trafficway", "Trail", "Trail", "Tunnel", "Tunnel", "Turnpike", "Turnpike", "Underpass", "Union", "Unions", "Valley", "Valleys", "Via", "Viaduct", "View", "Views", "Village", "Village", "Villages", "Ville", "Vista", "Vista", "Walk", "Walks", "Wall", "Way", "Ways", "Well", "Wells"])
  },
  secondary_address() {
    dataSet = utils.draw(["Apt. ###", "Suite ###"])
    return utils.randomizer(dataSet);
  },
  postcode() {
    dataSet = utils.draw(["#####", "#####-####"])
    return utils.randomizer(dataSet);
  },
  postcode_by_state(param) {
    let postCode = undefined;

    switch(param) {
      case "AL":
        postCode = "350##"
        break
      case "AK":
        postCode = "995##"
        break
      case "AS":
        postCode = "967##"
        break
      case "AZ":
        postCode = "850##"
        break
      case "AR":
        postCode = "717##"
        break
      case "CA":
        postCode = "900##"
        break
      case "CO":
        postCode = "800##"
        break
      case "CT":
        postCode = "061##"
        break
      case "DC":
        postCode = "204##"
        break
      case "DE":
        postCode = "198##"
        break
      case "FL":
        postCode = "322##"
        break
      case "GA":
        postCode = "301##"
        break
      case "HI":
        postCode = "967##"
        break
      case "ID":
        postCode = "832##"
        break
      case "IL":
        postCode = "600##"
        break
      case "IN":
        postCode = "463##"
        break
      case "IA":
        postCode = "510##"
        break
      case "KS":
        postCode = "666##"
        break
      case "KY":
        postCode = "404##"
        break
      case "LA":
        postCode = "701##"
        break
      case "ME":
        postCode = "042##"
        break
      case "MD":
        postCode = "210##"
        break
      case "MA":
        postCode = "026##"
        break
      case "MI":
        postCode = "480##"
        break
      case "MN":
        postCode = "555##"
        break
      case "MS":
        postCode = "387##"
        break
      case "MO":
        postCode = "650##"
        break
      case "MT":
        postCode = "590##"
        break
      case "NE":
        postCode = "688##"
        break
      case "NV":
        postCode = "898##"
        break
      case "NH":
        postCode = "036##"
        break
      case "NJ":
        postCode = "076##"
        break
      case "NM":
        postCode = "880##"
        break
      case "NY":
        postCode = "122##"
        break
      case "NC":
        postCode = "288##"
        break
      case "ND":
        postCode = "586##"
        break
      case "OH":
        postCode = "444##"
        break
      case "OK":
        postCode = "730##"
        break
      case "OR":
        postCode = "979##"
        break
      case "PA":
        postCode = "186##"
        break
      case "RI":
        postCode = "029##"
        break
      case "SC":
        postCode = "299##"
        break
      case "SD":
        postCode = "577##"
        break
      case "TN":
        postCode = "383##"
        break
      case "TX":
        postCode = "798##"
        break
      case "UT":
        postCode = "847##"
        break
      case "VT":
        postCode = "050##"
        break
      case "VA":
        postCode = "222##"
        break
      case "WA":
        postCode = "990##"
        break
      case "WV":
        postCode = "247##"
        break
      case "WI":
        postCode = "549##"
        break
      case "WY":
        postCode = "831##"
        break
      default:
        postCode = undefined
        break
    }

    if (!postCode)
      return postCode
    else
      return utils.randomizer(postCode)
  },
  state() {
    return utils.draw(["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"])
  },
  state_abbr() {
    return utils.draw(["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"])
  },
  time_zone() {
    return utils.draw(["Pacific/Midway", "Pacific/Pago_Pago", "Pacific/Honolulu", "America/Juneau", "America/Los_Angeles", "America/Tijuana", "America/Denver", "America/Phoenix", "America/Chihuahua", "America/Mazatlan", "America/Chicago", "America/Regina", "America/Mexico_City", "America/Mexico_City", "America/Monterrey", "America/Guatemala", "America/New_York", "America/Indiana/Indianapolis", "America/Bogota", "America/Lima", "America/Lima", "America/Halifax", "America/Caracas", "America/La_Paz", "America/Santiago", "America/St_Johns", "America/Sao_Paulo", "America/Argentina/Buenos_Aires", "America/Guyana", "America/Godthab", "Atlantic/South_Georgia", "Atlantic/Azores", "Atlantic/Cape_Verde", "Europe/Dublin", "Europe/London", "Europe/Lisbon", "Europe/London", "Africa/Casablanca", "Africa/Monrovia", "Etc/UTC", "Europe/Belgrade", "Europe/Bratislava", "Europe/Budapest", "Europe/Ljubljana", "Europe/Prague", "Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb", "Europe/Brussels", "Europe/Copenhagen", "Europe/Madrid", "Europe/Paris", "Europe/Amsterdam", "Europe/Berlin", "Europe/Berlin", "Europe/Rome", "Europe/Stockholm", "Europe/Vienna", "Africa/Algiers", "Europe/Bucharest", "Africa/Cairo", "Europe/Helsinki", "Europe/Kiev", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Vilnius", "Europe/Athens", "Europe/Istanbul", "Europe/Minsk", "Asia/Jerusalem", "Africa/Harare", "Africa/Johannesburg", "Europe/Moscow", "Europe/Moscow", "Europe/Moscow", "Asia/Kuwait", "Asia/Riyadh", "Africa/Nairobi", "Asia/Baghdad", "Asia/Tehran", "Asia/Muscat", "Asia/Muscat", "Asia/Baku", "Asia/Tbilisi", "Asia/Yerevan", "Asia/Kabul", "Asia/Yekaterinburg", "Asia/Karachi", "Asia/Karachi", "Asia/Tashkent", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kathmandu", "Asia/Dhaka", "Asia/Dhaka", "Asia/Colombo", "Asia/Almaty", "Asia/Novosibirsk", "Asia/Rangoon", "Asia/Bangkok", "Asia/Bangkok", "Asia/Jakarta", "Asia/Krasnoyarsk", "Asia/Shanghai", "Asia/Chongqing", "Asia/Hong_Kong", "Asia/Urumqi", "Asia/Kuala_Lumpur", "Asia/Singapore", "Asia/Taipei", "Australia/Perth", "Asia/Irkutsk", "Asia/Ulaanbaatar", "Asia/Seoul", "Asia/Tokyo", "Asia/Tokyo", "Asia/Tokyo", "Asia/Yakutsk", "Australia/Darwin", "Australia/Adelaide", "Australia/Melbourne", "Australia/Melbourne", "Australia/Sydney", "Australia/Brisbane", "Australia/Hobart", "Asia/Vladivostok", "Pacific/Guam", "Pacific/Port_Moresby", "Asia/Magadan", "Asia/Magadan", "Pacific/Noumea", "Pacific/Fiji", "Asia/Kamchatka", "Pacific/Majuro", "Pacific/Auckland", "Pacific/Auckland", "Pacific/Tongatapu", "Pacific/Fakaofo", "Pacific/Apia"])
  },
  city() {
    return utils.draw([`${this.city_prefix()} ${name.first_name()} ${this.city_suffix()}`, `${this.city_prefix()} ${name.first_name()}`, `${name.first_name()} ${this.city_suffix()}`, `${name.last_name()} ${this.city_suffix()}`])
  },
  street_name() {
    return utils.draw([`${name.first_name()} ${this.street_suffix()}`, `${name.last_name()} ${this.street_suffix()}`])
  },
  street_address() {
    return utils.draw([`${this.building_number()} ${this.street_name()}`])
  },
  full_address() {
    return utils.draw([`${this.street_address()}, ${this.city()}, ${this.state_abbr()} ${this.postcode()}`, `${this.secondary_address()} ${this.street_address()}, ${this.city()}, ${this.state_abbr()} ${this.postcode()}`])
  },
  default_country() {
    return utils.draw(["Australia"])
  },
};

module.exports = address

