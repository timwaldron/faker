# jfaker
Generate fake data, great for databases! Ported from stympy's Ruby gem: (https://github.com/stympy/faker)

# Usage
Install the package

```
$ npm i jfaker
```  

Require then use jfaker in your JavaScript files
```js
const faker = require('jfaker')


let pokemon = faker.pokemon.names()
let boop = faker.dog.meme_phrase()

```

# Notice

Only 78 of 148 categories have been ported so for because of the way I have decided to extract the data and discrepencies with how the data is stored in Stympy's gem.

If you find any bugs or have any suggestions you can let me know here: https://github.com/timwaldron/jfaker/issues

# Categories

    * jfaker

        *  address
            *  city_prefix
            *  city_suffix
            *  country
            *  state (USA)
            *  state_abbr (USA)
            *  time_zone
            
        *  ancient
            *  god
            *  primordial
            *  titan
            *  hero

        *  animal
            *  name

        *  app
            *  name
            *  version

        *  appliance
            *  brand
            *  equipment

        *  aqua_teen_hunger_force
            *  character

        *  artist
            *  names

        *  basketball

        *  beer
            *  brand
            *  name
            *  hop
            *  yeast
            *  malt
            *  style

        *  book
            *  title
            *  author
            *  publisher
            *  genre

        *  bossa_nova
            *  artists
            *  songs

        *  business
            *  credit_card_numbers
            *  credit_card_types

        *  cannabis
            *  strains
            *  cannabinoid_abbreviations
            *  cannabinoids
            *  terpenes
            *  medical_uses
            *  health_benefits
            *  categories
            *  types
            *  buzzwords

        *  cat
            *  name
            *  breed
            *  registry

        *  code
            *  asin

        *  coffee
            *  country
            *  brazil
            *  colombia
            *  sumatra
            *  ethiopia
            *  honduras
            *  kenya
            *  uganda
            *  mexico
            *  guatemala
            *  nicaragua
            *  costa_rica
            *  tanzania
            *  el_salvador
            *  rwanda
            *  burundi
            *  panama
            *  yemen
            *  india
            *  variety
            *  intensifier
            *  body
            *  descriptor
            *  notes
            *  name_1
            *  name_2
            *  blend_name

        *  coin

        *  compass
            *  word
            *  abbreviation
            *  azimuth

        *  culture_series

        *  currency
            *  code
            *  name
            *  symbol

        *  demographic
            *  race
            *  sex
            *  demonym
            *  educational_attainment
            *  marital_status

        *  dessert
            *  variety
            *  topping
            *  flavor

        *  device
            *  model_name
            *  platform
            *  manufacturer
            *  serial

        *  dog
            *  name
            *  breed
            *  sound
            *  meme_phrase
            *  age
            *  coat_length
            *  size

        *  dota
            *  hero
            *  quote
            *  item
            *  team
            *  player

        *  dragon_ball
            *  characters

        *  educator
            *  name
            *  secondary
            *  type
            *  subject
            *  course_number

        *  elder_scrolls
            *  race
            *  creature
            *  region
            *  dragon
            *  city
            *  first_name
            *  last_name

        *  electrical_components
            *  active
            *  passive
            *  electromechanical

        *  family_guy
            *  character
            *  location
            *  quote

        *  file
            *  extension
            *  mime_type

        *  food
            *  dish
            *  descriptions
            *  ingredients
            *  fruits
            *  vegetables
            *  spices
            *  measurements
            *  measurement_sizes
            *  metric_measurements
            *  sushi

        *  football
            *  teams
            *  players
            *  coaches
            *  competitions
            *  positions

        *  fresh_prince_of_bel_air
            *  characters
            *  celebrities

        *  funny_name
            *  name

        *  gender
            *  types
            *  binary_types

        *  half_life
            *  character
            *  enemy
            *  location

        *  harry_potter
            *  characters
            *  locations
            *  quotes
            *  books
            *  houses
            *  spells

        *  heroes
            *  names
            *  specialties
            *  klasses

        *  heroes_of_the_storm
            *  battlegrounds
            *  classes
            *  heroes
            *  quotes

        *  hipster
            *  words

        *  horse
            *  name
            *  breed

        *  id_number
            *  valid
            *  invalid

        *  industry_segments
            *  industry
            *  super_sector
            *  sector
            *  sub_sector

        *  invoice
            *  check_digit_method
            *  pattern

        *  league_of_legends
            *  champion
            *  location
            *  quote
            *  summoner_spell
            *  masteries
            *  rank

        *  lovecraft
            *  fhtagn
            *  deity
            *  location
            *  tome
            *  words

        *  markdown
            *  headers
            *  emphasis

        *  marketing
            *  buzzwords

        *  measurement
            *  height
            *  length
            *  volume
            *  weight
            *  metric_height
            *  metric_length
            *  metric_volume
            *  metric_weight

        *  military
            *  army_rank
            *  marines_rank
            *  navy_rank
            *  air_force_rank
            *  dod_paygrade

        *  movie
            *  quote

        *  nato_phonetic_alphabet
            *  code_word

        *  one_piece
            *  characters
            *  seas
            *  islands
            *  locations
            *  quotes
            *  akumas_no_mi

        *  opera

        *  phish
            *  song

        *  phone_number
            *  formats
            *  country_code

        *  pokemon
            *  names
            *  locations
            *  moves

        *  quote
            *  famous_last_words
            *  matz
            *  most_interesting_man_in_the_world
            *  robin
            *  singular_siegler
            *  yoda

        *  relationship
            *  direct
            *  extended
            *  in_law
            *  spouse
            *  parent
            *  sibling

        *  restaurant

        *  rock_band
            *  name

        *  science
            *  element
            *  element_symbol
            *  scientist

        *  seinfeld
            *  character
            *  quote
            *  business

        *  slack_emoji
            *  people
            *  nature
            *  food_and_drink
            *  celebration
            *  activity
            *  travel_and_places
            *  objects_and_symbols
            *  custom

        *  space
            *  planet
            *  moon
            *  galaxy
            *  nebula
            *  star_cluster
            *  constellation
            *  star
            *  agency
            *  agency_abv
            *  nasa_space_craft
            *  company
            *  distance_measurement
            *  meteorite
            *  launch_vehicule

        *  star_trek
            *  character
            *  location
            *  specie
            *  villain

        *  subscription
            *  plans
            *  statuses
            *  payment_methods
            *  subscription_terms
            *  payment_terms

        *  super_smash_bros

        *  superhero
            *  power
            *  prefix
            *  suffix
            *  descriptor

        *  team
            *  creature
            *  sport
            *  mascot

        *  the_thick_of_it
            *  characters
            *  positions
            *  departments

        *  umphreys_mcgee
            *  song

        *  university
            *  prefix
            *  suffix

        *  venture_bros
            *  character
            *  organization
            *  vehicle
            *  quote

        *  verbs
            *  base
            *  past
            *  past_participle
            *  simple_present
            *  ing_form

        *  witcher
            *  characters
            *  witchers
            *  schools
            *  locations
            *  quotes
            *  monsters

        *  yoda
            *  quotes