const utils = require('../utils');

const address = {
  city_prefix: (function() {
    return utils.draw( ["North", "East", "West", "South", "New", "Lake", "Port"]);
  }),
  city_suffix: (function() {
    return utils.draw( ["town", "ton", "land", "ville", "berg", "burgh", "borough", "bury", "view", "port", "mouth", "stad", "furt", "chester", "mouth", "fort", "haven", "side", "shire"]);
  }),
  country: (function() {
    return utils.draw( ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica (the territory South of 60 deg S)", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island (Bouvetoya)", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands Antilles", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard & Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "'Virgin Islands", "British", "Virgin Islands", "U.S.'", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"]);
  }),
  af: (function() {
    return utils.draw( "Afghanistan");
  }),
  al: (function() {
    return utils.draw( "Albania");
  }),
  dz: (function() {
    return utils.draw( "Algeria");
  }),
  as: (function() {
    return utils.draw( "American Samoa");
  }),
  ad: (function() {
    return utils.draw( "Andorra");
  }),
  ao: (function() {
    return utils.draw( "Angola");
  }),
  ai: (function() {
    return utils.draw( "Anguilla");
  }),
  aq: (function() {
    return utils.draw( "Antarctica");
  }),
  ag: (function() {
    return utils.draw( "Antigua And Barbuda");
  }),
  ar: (function() {
    return utils.draw( "Argentina");
  }),
  am: (function() {
    return utils.draw( "Armenia");
  }),
  aw: (function() {
    return utils.draw( "Aruba");
  }),
  au: (function() {
    return utils.draw( "Australia");
  }),
  at: (function() {
    return utils.draw( "Austria");
  }),
  ax: (function() {
    return utils.draw( "Aland Islands");
  }),
  az: (function() {
    return utils.draw( "Azerbaijan");
  }),
  bs: (function() {
    return utils.draw( "Bahamas");
  }),
  bh: (function() {
    return utils.draw( "Bahrain");
  }),
  bd: (function() {
    return utils.draw( "Bangladesh");
  }),
  bb: (function() {
    return utils.draw( "Barbados");
  }),
  by: (function() {
    return utils.draw( "Belarus");
  }),
  be: (function() {
    return utils.draw( "Belgium");
  }),
  bz: (function() {
    return utils.draw( "Belize");
  }),
  bj: (function() {
    return utils.draw( "Benin");
  }),
  bm: (function() {
    return utils.draw( "Bermuda");
  }),
  bt: (function() {
    return utils.draw( "Bhutan");
  }),
  bo: (function() {
    return utils.draw( "Bolivia");
  }),
  bq: (function() {
    return utils.draw( 'Bonaire');
  }),
  ba: (function() {
    return utils.draw( "Bosnia And Herzegovina");
  }),
  bw: (function() {
    return utils.draw( "Botswana");
  }),
  bv: (function() {
    return utils.draw( "Bouvet Island");
  }),
  br: (function() {
    return utils.draw( "Brazil");
  }),
  io: (function() {
    return utils.draw( "British Indian Ocean Territory");
  }),
  bn: (function() {
    return utils.draw( "Brunei Darussalam");
  }),
  bg: (function() {
    return utils.draw( "Bulgaria");
  }),
  bf: (function() {
    return utils.draw( "Burkina Faso");
  }),
  bi: (function() {
    return utils.draw( "Burundi");
  }),
  kh: (function() {
    return utils.draw( "Cambodia");
  }),
  cm: (function() {
    return utils.draw( "Cameroon");
  }),
  ca: (function() {
    return utils.draw( "Canada");
  }),
  cv: (function() {
    return utils.draw( "Cape Verde");
  }),
  ky: (function() {
    return utils.draw( "Cayman Islands");
  }),
  cf: (function() {
    return utils.draw( "Central African Republic");
  }),
  td: (function() {
    return utils.draw( "Chad");
  }),
  cl: (function() {
    return utils.draw( "Chile");
  }),
  cn: (function() {
    return utils.draw( "China");
  }),
  cx: (function() {
    return utils.draw( "Christmas Island");
  }),
  cc: (function() {
    return utils.draw( "Cocos (keeling) Islands");
  }),
  co: (function() {
    return utils.draw( "Colombia");
  }),
  km: (function() {
    return utils.draw( "Comoros");
  }),
  cg: (function() {
    return utils.draw( "Congo");
  }),
  cd: (function() {
    return utils.draw( "Congo, The Democratic Republic Of The");
  }),
  ck: (function() {
    return utils.draw( "Cook Islands");
  }),
  cr: (function() {
    return utils.draw( "Costa Rica");
  }),
  ci: (function() {
    return utils.draw( "Cote D'ivoire");
  }),
  hr: (function() {
    return utils.draw( "Croatia");
  }),
  cu: (function() {
    return utils.draw( "Cuba");
  }),
  cw: (function() {
    return utils.draw( "Curacao");
  }),
  cy: (function() {
    return utils.draw( "Cyprus");
  }),
  cz: (function() {
    return utils.draw( "Czech Republic");
  }),
  dk: (function() {
    return utils.draw( "Denmark");
  }),
  dj: (function() {
    return utils.draw( "Djibouti");
  }),
  dm: (function() {
    return utils.draw( "Dominica");
  }),
  do: (function() {
    return utils.draw( "Dominican Republic");
  }),
  tp: (function() {
    return utils.draw( "East Timor");
  }),
  ec: (function() {
    return utils.draw( "Ecuador");
  }),
  eg: (function() {
    return utils.draw( "Egypt");
  }),
  sv: (function() {
    return utils.draw( "El Salvador");
  }),
  gq: (function() {
    return utils.draw( "Equatorial Guinea");
  }),
  er: (function() {
    return utils.draw( "Eritrea");
  }),
  ee: (function() {
    return utils.draw( "Estonia");
  }),
  et: (function() {
    return utils.draw( "Ethiopia");
  }),
  fk: (function() {
    return utils.draw( "Falkland Islands (malvinas)");
  }),
  fo: (function() {
    return utils.draw( "Faroe Islands");
  }),
  fj: (function() {
    return utils.draw( "Fiji");
  }),
  fi: (function() {
    return utils.draw( "Finland");
  }),
  fr: (function() {
    return utils.draw( "France");
  }),
  gf: (function() {
    return utils.draw( "French Guiana");
  }),
  pf: (function() {
    return utils.draw( "French Polynesia");
  }),
  tf: (function() {
    return utils.draw( "French Southern Territories");
  }),
  ga: (function() {
    return utils.draw( "Gabon");
  }),
  gm: (function() {
    return utils.draw( "Gambia");
  }),
  ge: (function() {
    return utils.draw( "Georgia");
  }),
  de: (function() {
    return utils.draw( "Germany");
  }),
  gh: (function() {
    return utils.draw( "Ghana");
  }),
  gi: (function() {
    return utils.draw( "Gibraltar");
  }),
  gr: (function() {
    return utils.draw( "Greece");
  }),
  gl: (function() {
    return utils.draw( "Greenland");
  }),
  gd: (function() {
    return utils.draw( "Grenada");
  }),
  gp: (function() {
    return utils.draw( "Guadeloupe");
  }),
  gu: (function() {
    return utils.draw( "Guam");
  }),
  gt: (function() {
    return utils.draw( "Guatemala");
  }),
  gg: (function() {
    return utils.draw( 'Guernsey');
  }),
  gn: (function() {
    return utils.draw( "Guinea");
  }),
  gw: (function() {
    return utils.draw( "Guinea-bissau");
  }),
  gy: (function() {
    return utils.draw( "Guyana");
  }),
  ht: (function() {
    return utils.draw( "Haiti");
  }),
  hm: (function() {
    return utils.draw( "Heard Island And Mcdonald Islands");
  }),
  va: (function() {
    return utils.draw( "Holy See (vatican City State)");
  }),
  hn: (function() {
    return utils.draw( "Honduras");
  }),
  hk: (function() {
    return utils.draw( "Hong Kong");
  }),
  hu: (function() {
    return utils.draw( "Hungary");
  }),
  is: (function() {
    return utils.draw( "Iceland");
  }),
  in: (function() {
    return utils.draw( "India");
  }),
  id: (function() {
    return utils.draw( "Indonesia");
  }),
  ir: (function() {
    return utils.draw( "Iran, Islamic Republic Of");
  }),
  iq: (function() {
    return utils.draw( "Iraq");
  }),
  ie: (function() {
    return utils.draw( "Ireland");
  }),
  im: (function() {
    return utils.draw( "Isle of Man");
  }),
  il: (function() {
    return utils.draw( "Israel");
  }),
  it: (function() {
    return utils.draw( "Italy");
  }),
  jm: (function() {
    return utils.draw( "Jamaica");
  }),
  jp: (function() {
    return utils.draw( "Japan");
  }),
  je: (function() {
    return utils.draw( "Jersey");
  }),
  jo: (function() {
    return utils.draw( "Jordan");
  }),
  kz: (function() {
    return utils.draw( "Kazakstan");
  }),
  ke: (function() {
    return utils.draw( "Kenya");
  }),
  ki: (function() {
    return utils.draw( "Kiribati");
  }),
  kp: (function() {
    return utils.draw( "Korea, Democratic People's Republic Of");
  }),
  kr: (function() {
    return utils.draw( "Korea, Republic Of");
  }),
  kv: (function() {
    return utils.draw( "Kosovo");
  }),
  kw: (function() {
    return utils.draw( "Kuwait");
  }),
  kg: (function() {
    return utils.draw( "Kyrgyzstan");
  }),
  la: (function() {
    return utils.draw( "Lao People's Democratic Republic");
  }),
  lv: (function() {
    return utils.draw( "Latvia");
  }),
  lb: (function() {
    return utils.draw( "Lebanon");
  }),
  ls: (function() {
    return utils.draw( "Lesotho");
  }),
  lr: (function() {
    return utils.draw( "Liberia");
  }),
  ly: (function() {
    return utils.draw( "Libyan Arab Jamahiriya");
  }),
  li: (function() {
    return utils.draw( "Liechtenstein");
  }),
  lt: (function() {
    return utils.draw( "Lithuania");
  }),
  lu: (function() {
    return utils.draw( "Luxembourg");
  }),
  mo: (function() {
    return utils.draw( "Macau");
  }),
  mk: (function() {
    return utils.draw( "Macedonia, The Former Yugoslav Republic Of");
  }),
  mg: (function() {
    return utils.draw( "Madagascar");
  }),
  mw: (function() {
    return utils.draw( "Malawi");
  }),
  my: (function() {
    return utils.draw( "Malaysia");
  }),
  mv: (function() {
    return utils.draw( "Maldives");
  }),
  ml: (function() {
    return utils.draw( "Mali");
  }),
  mt: (function() {
    return utils.draw( "Malta");
  }),
  mh: (function() {
    return utils.draw( "Marshall Islands");
  }),
  mq: (function() {
    return utils.draw( "Martinique");
  }),
  mr: (function() {
    return utils.draw( "Mauritania");
  }),
  mu: (function() {
    return utils.draw( "Mauritius");
  }),
  yt: (function() {
    return utils.draw( "Mayotte");
  }),
  mx: (function() {
    return utils.draw( "Mexico");
  }),
  fm: (function() {
    return utils.draw( "Micronesia, Federated States Of");
  }),
  md: (function() {
    return utils.draw( "Moldova, Republic Of");
  }),
  mc: (function() {
    return utils.draw( "Monaco");
  }),
  mn: (function() {
    return utils.draw( "Mongolia");
  }),
  ms: (function() {
    return utils.draw( "Montserrat");
  }),
  me: (function() {
    return utils.draw( "Montenegro");
  }),
  ma: (function() {
    return utils.draw( "Morocco");
  }),
  mz: (function() {
    return utils.draw( "Mozambique");
  }),
  mm: (function() {
    return utils.draw( "Myanmar");
  }),
  na: (function() {
    return utils.draw( "Namibia");
  }),
  nr: (function() {
    return utils.draw( "Nauru");
  }),
  np: (function() {
    return utils.draw( "Nepal");
  }),
  nl: (function() {
    return utils.draw( "Netherlands");
  }),
  an: (function() {
    return utils.draw( "Netherlands Antilles");
  }),
  nc: (function() {
    return utils.draw( "New Caledonia");
  }),
  nz: (function() {
    return utils.draw( "New Zealand");
  }),
  ni: (function() {
    return utils.draw( "Nicaragua");
  }),
  ne: (function() {
    return utils.draw( "Niger");
  }),
  ng: (function() {
    return utils.draw( "Nigeria");
  }),
  nu: (function() {
    return utils.draw( "Niue");
  }),
  nf: (function() {
    return utils.draw( "Norfolk Island");
  }),
  mp: (function() {
    return utils.draw( "Northern Mariana Islands");
  }),
  'no': (function() {
    return utils.draw( "Norway");
  }),
  om: (function() {
    return utils.draw( "Oman");
  }),
  pk: (function() {
    return utils.draw( "Pakistan");
  }),
  pw: (function() {
    return utils.draw( "Palau");
  }),
  ps: (function() {
    return utils.draw( "Palestinian Territory, Occupied");
  }),
  pa: (function() {
    return utils.draw( "Panama");
  }),
  pg: (function() {
    return utils.draw( "Papua New Guinea");
  }),
  py: (function() {
    return utils.draw( "Paraguay");
  }),
  pe: (function() {
    return utils.draw( "Peru");
  }),
  ph: (function() {
    return utils.draw( "Philippines");
  }),
  pn: (function() {
    return utils.draw( "Pitcairn");
  }),
  pl: (function() {
    return utils.draw( "Poland");
  }),
  pt: (function() {
    return utils.draw( "Portugal");
  }),
  pr: (function() {
    return utils.draw( "Puerto Rico");
  }),
  qa: (function() {
    return utils.draw( "Qatar");
  }),
  re: (function() {
    return utils.draw( "Reunion");
  }),
  ro: (function() {
    return utils.draw( "Romania");
  }),
  ru: (function() {
    return utils.draw( "Russian Federation");
  }),
  rw: (function() {
    return utils.draw( "Rwanda");
  }),
  bl: (function() {
    return utils.draw( "Saint Barthelemy");
  }),
  sh: (function() {
    return utils.draw( "Saint Helena");
  }),
  kn: (function() {
    return utils.draw( "Saint Kitts And Nevis");
  }),
  lc: (function() {
    return utils.draw( "Saint Lucia");
  }),
  mf: (function() {
    return utils.draw( "Saint Martin");
  }),
  pm: (function() {
    return utils.draw( "Saint Pierre And Miquelon");
  }),
  vc: (function() {
    return utils.draw( "Saint Vincent And The Grenadines");
  }),
  ws: (function() {
    return utils.draw( "Samoa");
  }),
  sm: (function() {
    return utils.draw( "San Marino");
  }),
  st: (function() {
    return utils.draw( "Sao Tome And Principe");
  }),
  sa: (function() {
    return utils.draw( "Saudi Arabia");
  }),
  sn: (function() {
    return utils.draw( "Senegal");
  }),
  rs: (function() {
    return utils.draw( "Serbia");
  }),
  sc: (function() {
    return utils.draw( "Seychelles");
  }),
  sl: (function() {
    return utils.draw( "Sierra Leone");
  }),
  sg: (function() {
    return utils.draw( "Singapore");
  }),
  sx: (function() {
    return utils.draw( "Sint Maarten");
  }),
  sk: (function() {
    return utils.draw( "Slovakia");
  }),
  si: (function() {
    return utils.draw( "Slovenia");
  }),
  sb: (function() {
    return utils.draw( "Solomon Islands");
  }),
  so: (function() {
    return utils.draw( "Somalia");
  }),
  za: (function() {
    return utils.draw( "South Africa");
  }),
  gs: (function() {
    return utils.draw( "South Georgia And The South Sandwich Islands");
  }),
  ss: (function() {
    return utils.draw( "South Sudan");
  }),
  es: (function() {
    return utils.draw( "Spain");
  }),
  lk: (function() {
    return utils.draw( "Sri Lanka");
  }),
  sd: (function() {
    return utils.draw( "Sudan");
  }),
  sr: (function() {
    return utils.draw( "Suriname");
  }),
  sj: (function() {
    return utils.draw( "Svalbard And Jan Mayen");
  }),
  sz: (function() {
    return utils.draw( "Swaziland");
  }),
  se: (function() {
    return utils.draw( "Sweden");
  }),
  ch: (function() {
    return utils.draw( "Switzerland");
  }),
  sy: (function() {
    return utils.draw( "Syrian Arab Republic");
  }),
  tw: (function() {
    return utils.draw( "Taiwan, Province Of China");
  }),
  tj: (function() {
    return utils.draw( "Tajikistan");
  }),
  tz: (function() {
    return utils.draw( "Tanzania, United Republic Of");
  }),
  th: (function() {
    return utils.draw( "Thailand");
  }),
  tl: (function() {
    return utils.draw( "Timor-Leste");
  }),
  tg: (function() {
    return utils.draw( "Togo");
  }),
  tk: (function() {
    return utils.draw( "Tokelau");
  }),
  to: (function() {
    return utils.draw( "Tonga");
  }),
  tt: (function() {
    return utils.draw( "Trinidad And Tobago");
  }),
  tn: (function() {
    return utils.draw( "Tunisia");
  }),
  tr: (function() {
    return utils.draw( "Turkey");
  }),
  tm: (function() {
    return utils.draw( "Turkmenistan");
  }),
  tc: (function() {
    return utils.draw( "Turks And Caicos Islands");
  }),
  tv: (function() {
    return utils.draw( "Tuvalu");
  }),
  ug: (function() {
    return utils.draw( "Uganda");
  }),
  ua: (function() {
    return utils.draw( "Ukraine");
  }),
  ae: (function() {
    return utils.draw( "United Arab Emirates");
  }),
  gb: (function() {
    return utils.draw( "United Kingdom");
  }),
  us: (function() {
    return utils.draw( "United States");
  }),
  um: (function() {
    return utils.draw( "United States Minor Outlying Islands");
  }),
  uy: (function() {
    return utils.draw( "Uruguay");
  }),
  uz: (function() {
    return utils.draw( "Uzbekistan");
  }),
  vu: (function() {
    return utils.draw( "Vanuatu");
  }),
  ve: (function() {
    return utils.draw( "Venezuela");
  }),
  vn: (function() {
    return utils.draw( "Viet Nam");
  }),
  vg: (function() {
    return utils.draw( "Virgin Islands, British");
  }),
  vi: (function() {
    return utils.draw( "Virgin Islands, U.s.");
  }),
  wf: (function() {
    return utils.draw( "Wallis And Futuna");
  }),
  eh: (function() {
    return utils.draw( "Western Sahara");
  }),
  ye: (function() {
    return utils.draw( "Yemen");
  }),
  zm: (function() {
    return utils.draw( "Zambia");
  }),
  zw: (function() {
    return utils.draw( "Zimbabwe");
  }),
  afghanistan: (function() {
    return utils.draw( "AF");
  }),
  albania: (function() {
    return utils.draw( "AB");
  }),
  algeria: (function() {
    return utils.draw( "DZ");
  }),
  american_samoa: (function() {
    return utils.draw( "AS");
  }),
  andorra: (function() {
    return utils.draw( "AD");
  }),
  angola: (function() {
    return utils.draw( "AO");
  }),
  anguilla: (function() {
    return utils.draw( "AI");
  }),
  antarctica: (function() {
    return utils.draw( "AQ");
  }),
  antigua_and_barbuda: (function() {
    return utils.draw( "AG");
  }),
  argentina: (function() {
    return utils.draw( "AR");
  }),
  armenia: (function() {
    return utils.draw( "AM");
  }),
  aruba: (function() {
    return utils.draw( "AW");
  }),
  australia: (function() {
    return utils.draw( "AU");
  }),
  austria: (function() {
    return utils.draw( "AT");
  }),
  azerbaijan: (function() {
    return utils.draw( "AZ");
  }),
  bahamas: (function() {
    return utils.draw( "BS");
  }),
  bahrain: (function() {
    return utils.draw( "BH");
  }),
  bangladesh: (function() {
    return utils.draw( "BD");
  }),
  barbados: (function() {
    return utils.draw( "BB");
  }),
  belarus: (function() {
    return utils.draw( "BY");
  }),
  belgium: (function() {
    return utils.draw( "BE");
  }),
  belize: (function() {
    return utils.draw( "BZ");
  }),
  benin: (function() {
    return utils.draw( "BJ");
  }),
  bermuda: (function() {
    return utils.draw( "BM");
  }),
  bhutan: (function() {
    return utils.draw( "BT");
  }),
  bolivia: (function() {
    return utils.draw( "BO");
  }),
  bosnia_and_herzegovina: (function() {
    return utils.draw( "BA");
  }),
  botswana: (function() {
    return utils.draw( "BW");
  }),
  bouvet_island: (function() {
    return utils.draw( "BV");
  }),
  brazil: (function() {
    return utils.draw( "BR");
  }),
  british_indian_ocean_territory: (function() {
    return utils.draw( "IO");
  }),
  brunei_darussalam: (function() {
    return utils.draw( "BN");
  }),
  bulgaria: (function() {
    return utils.draw( "BG");
  }),
  burkina_faso: (function() {
    return utils.draw( "BF");
  }),
  burundi: (function() {
    return utils.draw( "BI");
  }),
  cambodia: (function() {
    return utils.draw( "KH");
  }),
  cameroon: (function() {
    return utils.draw( "CM");
  }),
  canada: (function() {
    return utils.draw( "CA");
  }),
  cape_verde: (function() {
    return utils.draw( "CV");
  }),
  cayman_islands: (function() {
    return utils.draw( "KY");
  }),
  central_african_republic: (function() {
    return utils.draw( "CF");
  }),
  chad: (function() {
    return utils.draw( "TD");
  }),
  chile: (function() {
    return utils.draw( "CL");
  }),
  china: (function() {
    return utils.draw( "CN");
  }),
  christmas_island: (function() {
    return utils.draw( "CX");
  }),
  cocos_islands: (function() {
    return utils.draw( "CC");
  }),
  colombia: (function() {
    return utils.draw( "CO");
  }),
  comoros: (function() {
    return utils.draw( "KM");
  }),
  congo: (function() {
    return utils.draw( "CG");
  }),
  cook_islands: (function() {
    return utils.draw( "CK");
  }),
  costa_rica: (function() {
    return utils.draw( "CR");
  }),
  cote_d_ivoire: (function() {
    return utils.draw( "CI");
  }),
  croatia: (function() {
    return utils.draw( "HR");
  }),
  cuba: (function() {
    return utils.draw( "CU");
  }),
  cyprus: (function() {
    return utils.draw( "CY");
  }),
  czech_republic: (function() {
    return utils.draw( "CZ");
  }),
  denmark: (function() {
    return utils.draw( "DK");
  }),
  djibouti: (function() {
    return utils.draw( "DJ");
  }),
  dominica: (function() {
    return utils.draw( "DM");
  }),
  dominican_republic: (function() {
    return utils.draw( "DO");
  }),
  east_timor: (function() {
    return utils.draw( "TP");
  }),
  ecuador: (function() {
    return utils.draw( "EC");
  }),
  egypt: (function() {
    return utils.draw( "EG");
  }),
  el_salvador: (function() {
    return utils.draw( "SV");
  }),
  equatorial_guinea: (function() {
    return utils.draw( "GQ");
  }),
  eritrea: (function() {
    return utils.draw( "ER");
  }),
  estonia: (function() {
    return utils.draw( "EE");
  }),
  ethiopia: (function() {
    return utils.draw( "ET");
  }),
  falkland_islands: (function() {
    return utils.draw( "FK");
  }),
  malvinas: (function() {
    return utils.draw( "FK");
  }),
  faroe_islands: (function() {
    return utils.draw( "FO");
  }),
  fiji: (function() {
    return utils.draw( "FJ");
  }),
  finland: (function() {
    return utils.draw( "FI");
  }),
  france: (function() {
    return utils.draw( "FR");
  }),
  french_guiana: (function() {
    return utils.draw( "GF");
  }),
  french_polynesia: (function() {
    return utils.draw( "PF");
  }),
  french_southern_territories: (function() {
    return utils.draw( "TF");
  }),
  gabon: (function() {
    return utils.draw( "GA");
  }),
  gambia: (function() {
    return utils.draw( "GM");
  }),
  georgia: (function() {
    return utils.draw( "GE");
  }),
  germany: (function() {
    return utils.draw( "DE");
  }),
  ghana: (function() {
    return utils.draw( "GH");
  }),
  gibraltar: (function() {
    return utils.draw( "GI");
  }),
  greece: (function() {
    return utils.draw( "GR");
  }),
  greenland: (function() {
    return utils.draw( "GL");
  }),
  grenada: (function() {
    return utils.draw( "GD");
  }),
  guadeloupe: (function() {
    return utils.draw( "GP");
  }),
  guam: (function() {
    return utils.draw( "GU");
  }),
  guatemala: (function() {
    return utils.draw( "GT");
  }),
  guinea: (function() {
    return utils.draw( "GN");
  }),
  guinea_bissau: (function() {
    return utils.draw( "GW");
  }),
  guyana: (function() {
    return utils.draw( "GY");
  }),
  haiti: (function() {
    return utils.draw( "HT");
  }),
  heard_island_and_mcdonald_islands: (function() {
    return utils.draw( "HM");
  }),
  holy_see: (function() {
    return utils.draw( "VA");
  }),
  honduras: (function() {
    return utils.draw( "HN");
  }),
  hong_kong: (function() {
    return utils.draw( "HK");
  }),
  hungary: (function() {
    return utils.draw( "HU");
  }),
  iceland: (function() {
    return utils.draw( "IS");
  }),
  india: (function() {
    return utils.draw( "IN");
  }),
  indonesia: (function() {
    return utils.draw( "ID");
  }),
  ir_islamic_republic_of: (function() {
    return utils.draw( "IR");
  }),
  iraq: (function() {
    return utils.draw( "IQ");
  }),
  ireland: (function() {
    return utils.draw( "IE");
  }),
  israel: (function() {
    return utils.draw( "IL");
  }),
  italy: (function() {
    return utils.draw( "IT");
  }),
  jamaica: (function() {
    return utils.draw( "JM");
  }),
  japan: (function() {
    return utils.draw( "JP");
  }),
  jordan: (function() {
    return utils.draw( "JO");
  }),
  kazakstan: (function() {
    return utils.draw( "KZ");
  }),
  kenya: (function() {
    return utils.draw( "KE");
  }),
  kiribati: (function() {
    return utils.draw( "KI");
  }),
  korea_democratic_people_s_republic_of: (function() {
    return utils.draw( "KP");
  }),
  korea_republic_of: (function() {
    return utils.draw( "KR");
  }),
  kosovo: (function() {
    return utils.draw( "KV");
  }),
  kuwait: (function() {
    return utils.draw( "KW");
  }),
  kyrgyzstan: (function() {
    return utils.draw( "KG");
  }),
  lao_people_s_democratic_republic: (function() {
    return utils.draw( "LA");
  }),
  latvia: (function() {
    return utils.draw( "LV");
  }),
  lebanon: (function() {
    return utils.draw( "LB");
  }),
  lesotho: (function() {
    return utils.draw( "LS");
  }),
  liberia: (function() {
    return utils.draw( "LR");
  }),
  libyan_arab_jamahiriya: (function() {
    return utils.draw( "LY");
  }),
  liechtenstein: (function() {
    return utils.draw( "LI");
  }),
  lithuania: (function() {
    return utils.draw( "LT");
  }),
  luxembourg: (function() {
    return utils.draw( "LU");
  }),
  macau: (function() {
    return utils.draw( "MO");
  }),
  macedonia_the_former_yugoslav_republic_of: (function() {
    return utils.draw( "MK");
  }),
  madagascar: (function() {
    return utils.draw( "MG");
  }),
  malawi: (function() {
    return utils.draw( "MW");
  }),
  malaysia: (function() {
    return utils.draw( "MY");
  }),
  maldives: (function() {
    return utils.draw( "MV");
  }),
  mali: (function() {
    return utils.draw( "ML");
  }),
  malta: (function() {
    return utils.draw( "MT");
  }),
  marshall_islands: (function() {
    return utils.draw( "MH");
  }),
  martinique: (function() {
    return utils.draw( "MQ");
  }),
  mauritania: (function() {
    return utils.draw( "MR");
  }),
  mauritius: (function() {
    return utils.draw( "MU");
  }),
  mayotte: (function() {
    return utils.draw( "YT");
  }),
  mexico: (function() {
    return utils.draw( "MX");
  }),
  micronesia_federated_states_of: (function() {
    return utils.draw( "FM");
  }),
  moldova_republic_of: (function() {
    return utils.draw( "MD");
  }),
  monaco: (function() {
    return utils.draw( "MC");
  }),
  mongolia: (function() {
    return utils.draw( "MN");
  }),
  montserrat: (function() {
    return utils.draw( "MS");
  }),
  montenegro: (function() {
    return utils.draw( "ME");
  }),
  morocco: (function() {
    return utils.draw( "MA");
  }),
  mozambique: (function() {
    return utils.draw( "MZ");
  }),
  myanmar: (function() {
    return utils.draw( "MM");
  }),
  namibia: (function() {
    return utils.draw( "NA");
  }),
  nauru: (function() {
    return utils.draw( "NR");
  }),
  nepal: (function() {
    return utils.draw( "NP");
  }),
  netherlands: (function() {
    return utils.draw( "NL");
  }),
  netherlands_antilles: (function() {
    return utils.draw( "AN");
  }),
  new_caledonia: (function() {
    return utils.draw( "NC");
  }),
  new_zealand: (function() {
    return utils.draw( "NZ");
  }),
  nicaragua: (function() {
    return utils.draw( "NI");
  }),
  niger: (function() {
    return utils.draw( "NE");
  }),
  nigeria: (function() {
    return utils.draw( "NG");
  }),
  niue: (function() {
    return utils.draw( "NU");
  }),
  norfolk_island: (function() {
    return utils.draw( "NF");
  }),
  northern_mariana_islands: (function() {
    return utils.draw( "NP");
  }),
  norway: (function() {
    return utils.draw( "NO");
  }),
  oman: (function() {
    return utils.draw( "OM");
  }),
  pakistan: (function() {
    return utils.draw( "PK");
  }),
  palau: (function() {
    return utils.draw( "PW");
  }),
  palestinian_territory_occupied: (function() {
    return utils.draw( "PS");
  }),
  panama: (function() {
    return utils.draw( "PA");
  }),
  papua_new_guinea: (function() {
    return utils.draw( "PG");
  }),
  paraguay: (function() {
    return utils.draw( "PY");
  }),
  peru: (function() {
    return utils.draw( "PE");
  }),
  philippines: (function() {
    return utils.draw( "PH");
  }),
  pitcairn: (function() {
    return utils.draw( "PN");
  }),
  poland: (function() {
    return utils.draw( "PL");
  }),
  portugal: (function() {
    return utils.draw( "PT");
  }),
  puerto_rico: (function() {
    return utils.draw( "PR");
  }),
  qatar: (function() {
    return utils.draw( "QA");
  }),
  reunion: (function() {
    return utils.draw( "RE");
  }),
  romania: (function() {
    return utils.draw( "RO");
  }),
  russian_federation: (function() {
    return utils.draw( "RU");
  }),
  rwanda: (function() {
    return utils.draw( "RW");
  }),
  saint_helena: (function() {
    return utils.draw( "SH");
  }),
  saint_kitts_and_nevis: (function() {
    return utils.draw( "KN");
  }),
  saint_lucia: (function() {
    return utils.draw( "LC");
  }),
  saint_pierre_and_miquelon: (function() {
    return utils.draw( "PM");
  }),
  saint_vincent_and_the_grenadines: (function() {
    return utils.draw( "VC");
  }),
  samoa: (function() {
    return utils.draw( "WS");
  }),
  san_marino: (function() {
    return utils.draw( "SM");
  }),
  sao_tome_and_principe: (function() {
    return utils.draw( "ST");
  }),
  saudi_arabia: (function() {
    return utils.draw( "SA");
  }),
  senegal: (function() {
    return utils.draw( "SN");
  }),
  serbia: (function() {
    return utils.draw( "RS");
  }),
  seychelles: (function() {
    return utils.draw( "SC");
  }),
  sierra_leone: (function() {
    return utils.draw( "SL");
  }),
  singapore: (function() {
    return utils.draw( "SG");
  }),
  slovakia: (function() {
    return utils.draw( "SK");
  }),
  slovenia: (function() {
    return utils.draw( "SI");
  }),
  solomon_islands: (function() {
    return utils.draw( "SB");
  }),
  somalia: (function() {
    return utils.draw( "SO");
  }),
  south_africa: (function() {
    return utils.draw( "ZA");
  }),
  south_georgia_and_the_south_sandwich_islands: (function() {
    return utils.draw( "GS");
  }),
  spain: (function() {
    return utils.draw( "ES");
  }),
  sri_lanka: (function() {
    return utils.draw( "LK");
  }),
  sudan: (function() {
    return utils.draw( "SD");
  }),
  suriname: (function() {
    return utils.draw( "SR");
  }),
  svalbard_and_jan_mayen: (function() {
    return utils.draw( "SJ");
  }),
  swaziland: (function() {
    return utils.draw( "SZ");
  }),
  sweden: (function() {
    return utils.draw( "SE");
  }),
  switzerland: (function() {
    return utils.draw( "CH");
  }),
  syrian_arab_republic: (function() {
    return utils.draw( "SY");
  }),
  taiwan_province_of_china: (function() {
    return utils.draw( "TW");
  }),
  tajikistan: (function() {
    return utils.draw( "TJ");
  }),
  tanzania_united_republic_of: (function() {
    return utils.draw( "TZ");
  }),
  thailand: (function() {
    return utils.draw( "TH");
  }),
  togo: (function() {
    return utils.draw( "TG");
  }),
  tokelau: (function() {
    return utils.draw( "TK");
  }),
  tonga: (function() {
    return utils.draw( "TO");
  }),
  trinidad_and_tobago: (function() {
    return utils.draw( "TT");
  }),
  tunisia: (function() {
    return utils.draw( "TN");
  }),
  turkey: (function() {
    return utils.draw( "TR");
  }),
  turkmenistan: (function() {
    return utils.draw( "TM");
  }),
  turks_and_caicos_islands: (function() {
    return utils.draw( "TC");
  }),
  tuvalu: (function() {
    return utils.draw( "TV");
  }),
  uganda: (function() {
    return utils.draw( "UG");
  }),
  ukraine: (function() {
    return utils.draw( "UA");
  }),
  united_arab_emirates: (function() {
    return utils.draw( "UAE");
  }),
  united_kingdom: (function() {
    return utils.draw( "GB");
  }),
  united_states: (function() {
    return utils.draw( "US");
  }),
  united_states_minor_outlying_islands: (function() {
    return utils.draw( "UM");
  }),
  uruguay: (function() {
    return utils.draw( "UY");
  }),
  uzbekistan: (function() {
    return utils.draw( "UZ");
  }),
  vanuatu: (function() {
    return utils.draw( "VU");
  }),
  venezuela: (function() {
    return utils.draw( "VE");
  }),
  viet_nam: (function() {
    return utils.draw( "VN");
  }),
  virgin_islands_british: (function() {
    return utils.draw( "VG");
  }),
  virgin_islands_u_s_: (function() {
    return utils.draw( "VI");
  }),
  wallis_and_futuna: (function() {
    return utils.draw( "WF");
  }),
  western_sahara: (function() {
    return utils.draw( "EH");
  }),
  yemen: (function() {
    return utils.draw( "YE");
  }),
  zambia: (function() {
    return utils.draw( "ZM");
  }),
  zimbabwe: (function() {
    return utils.draw( "ZW");
  }),
  country_code: (function() {
    return utils.draw( ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
  }),
  country_code_long: (function() {
    return utils.draw( ["ABW", "AFG", "AGO", "AIA", "ALA", "ALB", "AND", "ARE", "ARG", "ARM", "ASM", "ATA", "ATF", "ATG", "AUS", "AUT", "AZE", "BDI", "BEL", "BEN", "BES", "BFA", "BGD", "BGR", "BHR", "BHS", "BIH", "BLM", "BLR", "BLZ", "BMU", "BOL", "BRA", "BRB", "BRN", "BTN", "BVT", "BWA", "CAF", "CAN", "CCK", "CHE", "CHL", "CHN", "CIV", "CMR", "COD", "COG", "COK", "COL", "COM", "CPV", "CRI", "CUB", "CUW", "CXR", "CYM", "CYP", "CZE", "DEU", "DJI", "DMA", "DNK", "DOM", "DZA", "ECU", "EGY", "ERI", "ESH", "ESP", "EST", "ETH", "FIN", "FJI", "FLK", "FRA", "FRO", "FSM", "GAB", "GBR", "GEO", "GGY", "GHA", "GIB", "GIN", "GLP", "GMB", "GNB", "GNQ", "GRC", "GRD", "GRL", "GTM", "GUF", "GUM", "GUY", "HKG", "HMD", "HND", "HRV", "HTI", "HUN", "IDN", "IMN", "IND", "IOT", "IRL", "IRN", "IRQ", "ISL", "ISR", "ITA", "JAM", "JEY", "JOR", "JPN", "KAZ", "KEN", "KGZ", "KHM", "KIR", "KNA", "KOR", "KWT", "LAO", "LBN", "LBR", "LBY", "LCA", "LIE", "LKA", "LSO", "LTU", "LUX", "LVA", "MAC", "MAF", "MAR", "MCO", "MDA", "MDG", "MDV", "MEX", "MHL", "MKD", "MLI", "MLT", "MMR", "MNE", "MNG", "MNP", "MOZ", "MRT", "MSR", "MTQ", "MUS", "MWI", "MYS", "MYT", "NAM", "NCL", "NER", "NFK", "NGA", "NIC", "NIU", "NLD", "NOR", "NPL", "NRU", "NZL", "OMN", "PAK", "PAN", "PCN", "PER", "PHL", "PLW", "PNG", "POL", "PRI", "PRK", "PRT", "PRY", "PSE", "PYF", "QAT", "REU", "ROU", "RUS", "RWA", "SAU", "SDN", "SEN", "SGP", "SGS", "SHN", "SJM", "SLB", "SLE", "SLV", "SMR", "SOM", "SPM", "SRB", "SSD", "STP", "SUR", "SVK", "SVN", "SWE", "SWZ", "SXM", "SYC", "SYR", "TCA", "TCD", "TGO", "THA", "TJK", "TKL", "TKM", "TLS", "TON", "TTO", "TUN", "TUR", "TUV", "TWN", "TZA", "UGA", "UKR", "UMI", "URY", "USA", "UZB", "VAT", "VCT", "VEN", "VGB", "VIR", "VNM", "VUT", "WLF", "WSM", "YEM", "ZAF", "ZMB", "ZWE"]);
  }),
  building_number: (function() {
    return utils.draw( ['#####', '####', '###']);
  }),
  community_prefix: (function() {
    return utils.draw( ["Park", "Summer", "Autumn", "Paradise", "Eagle", "Pine", "Royal", "University", "Willow"]);
  }),
  community_suffix: (function() {
    return utils.draw( ["Village", "Creek", "Place", "Pointe", "Square", "Oaks", "Gardens", "Crossing", "Court", "Acres", "Estates", "Heights"]);
  }),
  street_suffix: (function() {
    return utils.draw( ["Alley", "Avenue", "Branch", "Bridge", "Brook", "Brooks", "Burg", "Burgs", "Bypass", "Camp", "Canyon", "Cape", "Causeway", "Center", "Centers", "Circle", "Circles", "Cliff", "Cliffs", "Club", "Common", "Corner", "Corners", "Course", "Court", "Courts", "Cove", "Coves", "Creek", "Crescent", "Crest", "Crossing", "Crossroad", "Curve", "Dale", "Dam", "Divide", "Drive", "Drive", "Drives", "Estate", "Estates", "Expressway", "Extension", "Extensions", "Fall", "Falls", "Ferry", "Field", "Fields", "Flat", "Flats", "Ford", "Fords", "Forest", "Forge", "Forges", "Fork", "Forks", "Fort", "Freeway", "Garden", "Gardens", "Gateway", "Glen", "Glens", "Green", "Greens", "Grove", "Groves", "Harbor", "Harbors", "Haven", "Heights", "Highway", "Hill", "Hills", "Hollow", "Inlet", "Inlet", "Island", "Island", "Islands", "Islands", "Isle", "Isle", "Junction", "Junctions", "Key", "Keys", "Knoll", "Knolls", "Lake", "Lakes", "Land", "Landing", "Lane", "Light", "Lights", "Loaf", "Lock", "Locks", "Locks", "Lodge", "Lodge", "Loop", "Mall", "Manor", "Manors", "Meadow", "Meadows", "Mews", "Mill", "Mills", "Mission", "Mission", "Motorway", "Mount", "Mountain", "Mountain", "Mountains", "Mountains", "Neck", "Orchard", "Oval", "Overpass", "Park", "Parks", "Parkway", "Parkways", "Pass", "Passage", "Path", "Pike", "Pine", "Pines", "Place", "Plain", "Plains", "Plains", "Plaza", "Plaza", "Point", "Points", "Port", "Port", "Ports", "Ports", "Prairie", "Prairie", "Radial", "Ramp", "Ranch", "Rapid", "Rapids", "Rest", "Ridge", "Ridges", "River", "Road", "Road", "Roads", "Roads", "Route", "Row", "Rue", "Run", "Shoal", "Shoals", "Shore", "Shores", "Skyway", "Spring", "Springs", "Springs", "Spur", "Spurs", "Square", "Square", "Squares", "Squares", "Station", "Station", "Stravenue", "Stravenue", "Stream", "Stream", "Street", "Street", "Streets", "Summit", "Summit", "Terrace", "Throughway", "Trace", "Track", "Trafficway", "Trail", "Trail", "Tunnel", "Tunnel", "Turnpike", "Turnpike", "Underpass", "Union", "Unions", "Valley", "Valleys", "Via", "Viaduct", "View", "Views", "Village", "Village", "Villages", "Ville", "Vista", "Vista", "Walk", "Walks", "Wall", "Way", "Ways", "Well", "Wells"]);
  }),
  secondary_address: (function() {
    return utils.draw( ['Apt. ###', 'Suite ###']);
  }),
  postcode: (function() {
    return utils.draw( ['#####', '#####-####']);
  }),
  al: (function() {
    return utils.draw( '350##');
  }),
  ak: (function() {
    return utils.draw( '995##');
  }),
  as: (function() {
    return utils.draw( '967##');
  }),
  az: (function() {
    return utils.draw( '850##');
  }),
  ar: (function() {
    return utils.draw( '717##');
  }),
  ca: (function() {
    return utils.draw( '900##');
  }),
  co: (function() {
    return utils.draw( '800##');
  }),
  ct: (function() {
    return utils.draw( '061##');
  }),
  dc: (function() {
    return utils.draw( '204##');
  }),
  de: (function() {
    return utils.draw( '198##');
  }),
  fl: (function() {
    return utils.draw( '322##');
  }),
  ga: (function() {
    return utils.draw( '301##');
  }),
  hi: (function() {
    return utils.draw( '967##');
  }),
  id: (function() {
    return utils.draw( '832##');
  }),
  il: (function() {
    return utils.draw( '600##');
  }),
  in: (function() {
    return utils.draw( '463##');
  }),
  ia: (function() {
    return utils.draw( '510##');
  }),
  ks: (function() {
    return utils.draw( '666##');
  }),
  ky: (function() {
    return utils.draw( '404##');
  }),
  la: (function() {
    return utils.draw( '701##');
  }),
  me: (function() {
    return utils.draw( '042##');
  }),
  md: (function() {
    return utils.draw( '210##');
  }),
  ma: (function() {
    return utils.draw( '026##');
  }),
  mi: (function() {
    return utils.draw( '480##');
  }),
  mn: (function() {
    return utils.draw( '555##');
  }),
  ms: (function() {
    return utils.draw( '387##');
  }),
  mo: (function() {
    return utils.draw( '650##');
  }),
  mt: (function() {
    return utils.draw( '590##');
  }),
  ne: (function() {
    return utils.draw( '688##');
  }),
  nv: (function() {
    return utils.draw( '898##');
  }),
  nh: (function() {
    return utils.draw( '036##');
  }),
  nj: (function() {
    return utils.draw( '076##');
  }),
  nm: (function() {
    return utils.draw( '880##');
  }),
  ny: (function() {
    return utils.draw( '122##');
  }),
  nc: (function() {
    return utils.draw( '288##');
  }),
  nd: (function() {
    return utils.draw( '586##');
  }),
  oh: (function() {
    return utils.draw( '444##');
  }),
  ok: (function() {
    return utils.draw( '730##');
  }),
  or: (function() {
    return utils.draw( '979##');
  }),
  pa: (function() {
    return utils.draw( '186##');
  }),
  ri: (function() {
    return utils.draw( '029##');
  }),
  sc: (function() {
    return utils.draw( '299##');
  }),
  sd: (function() {
    return utils.draw( '577##');
  }),
  tn: (function() {
    return utils.draw( '383##');
  }),
  tx: (function() {
    return utils.draw( '798##');
  }),
  ut: (function() {
    return utils.draw( '847##');
  }),
  vt: (function() {
    return utils.draw( '050##');
  }),
  va: (function() {
    return utils.draw( '222##');
  }),
  wa: (function() {
    return utils.draw( '990##');
  }),
  wv: (function() {
    return utils.draw( '247##');
  }),
  wi: (function() {
    return utils.draw( '549##');
  }),
  wy: (function() {
    return utils.draw( '831##');
  }),
  state: (function() {
    return utils.draw( ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]);
  }),
  state_abbr: (function() {
    return utils.draw( ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]);
  }),
  time_zone: (function() {
    return utils.draw( ["Pacific/Midway", "Pacific/Pago_Pago", "Pacific/Honolulu", "America/Juneau", "America/Los_Angeles", "America/Tijuana", "America/Denver", "America/Phoenix", "America/Chihuahua", "America/Mazatlan", "America/Chicago", "America/Regina", "America/Mexico_City", "America/Mexico_City", "America/Monterrey", "America/Guatemala", "America/New_York", "America/Indiana/Indianapolis", "America/Bogota", "America/Lima", "America/Lima", "America/Halifax", "America/Caracas", "America/La_Paz", "America/Santiago", "America/St_Johns", "America/Sao_Paulo", "America/Argentina/Buenos_Aires", "America/Guyana", "America/Godthab", "Atlantic/South_Georgia", "Atlantic/Azores", "Atlantic/Cape_Verde", "Europe/Dublin", "Europe/London", "Europe/Lisbon", "Europe/London", "Africa/Casablanca", "Africa/Monrovia", "Etc/UTC", "Europe/Belgrade", "Europe/Bratislava", "Europe/Budapest", "Europe/Ljubljana", "Europe/Prague", "Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb", "Europe/Brussels", "Europe/Copenhagen", "Europe/Madrid", "Europe/Paris", "Europe/Amsterdam", "Europe/Berlin", "Europe/Berlin", "Europe/Rome", "Europe/Stockholm", "Europe/Vienna", "Africa/Algiers", "Europe/Bucharest", "Africa/Cairo", "Europe/Helsinki", "Europe/Kiev", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Vilnius", "Europe/Athens", "Europe/Istanbul", "Europe/Minsk", "Asia/Jerusalem", "Africa/Harare", "Africa/Johannesburg", "Europe/Moscow", "Europe/Moscow", "Europe/Moscow", "Asia/Kuwait", "Asia/Riyadh", "Africa/Nairobi", "Asia/Baghdad", "Asia/Tehran", "Asia/Muscat", "Asia/Muscat", "Asia/Baku", "Asia/Tbilisi", "Asia/Yerevan", "Asia/Kabul", "Asia/Yekaterinburg", "Asia/Karachi", "Asia/Karachi", "Asia/Tashkent", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kolkata", "Asia/Kathmandu", "Asia/Dhaka", "Asia/Dhaka", "Asia/Colombo", "Asia/Almaty", "Asia/Novosibirsk", "Asia/Rangoon", "Asia/Bangkok", "Asia/Bangkok", "Asia/Jakarta", "Asia/Krasnoyarsk", "Asia/Shanghai", "Asia/Chongqing", "Asia/Hong_Kong", "Asia/Urumqi", "Asia/Kuala_Lumpur", "Asia/Singapore", "Asia/Taipei", "Australia/Perth", "Asia/Irkutsk", "Asia/Ulaanbaatar", "Asia/Seoul", "Asia/Tokyo", "Asia/Tokyo", "Asia/Tokyo", "Asia/Yakutsk", "Australia/Darwin", "Australia/Adelaide", "Australia/Melbourne", "Australia/Melbourne", "Australia/Sydney", "Australia/Brisbane", "Australia/Hobart", "Asia/Vladivostok", "Pacific/Guam", "Pacific/Port_Moresby", "Asia/Magadan", "Asia/Magadan", "Pacific/Noumea", "Pacific/Fiji", "Asia/Kamchatka", "Pacific/Majuro", "Pacific/Auckland", "Pacific/Auckland", "Pacific/Tongatapu", "Pacific/Fakaofo", "Pacific/Apia"]);
  }),
  default_country: (function() {
    return utils.draw( ["United States of America"]);
  }),
};

module.exports = address
