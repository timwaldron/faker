const utils = require('../utils');

const coffee = {
  country: (function() {
    return utils.draw( ["Brazil", "Colombia", "Sumatra", "Ethiopia", "Honduras", "Kenya", "Uganda", "Mexico", "Guatemala", "Nicaragua", "Costa Rica", "Tanzania", "El Salvador", "Rwanda", "Burundi", "Panama", "Yemen", "India"]);
  }),
  brazil: (function() {
    return utils.draw( ["Sul Minas", "Mogiana", "Cerrado"]);
  }),
  colombia: (function() {
    return utils.draw( ["Nariño", "Huila", "Tolima", "Cauca", "Casanare", "Santander", "Antioquia", "Cundinamarca", "Boyacá"]);
  }),
  sumatra: (function() {
    return utils.draw( ["Tapanuli", "Lintong", "Aceh", "Lake Tawar", "Lintong", "Gayo"]);
  }),
  ethiopia: (function() {
    return utils.draw( ["Sidama", "Harrar", "Limu", "Ojimmah", "Lekempti", "Wellega", "Gimbi"]);
  }),
  honduras: (function() {
    return utils.draw( ["Agalta", "Comayagua", "Copan", "Montecillos", "Opalca", "El Paraiso"]);
  }),
  kenya: (function() {
    return utils.draw( ["Bungoma", "Embu", "Kiamba", "Kirinyaga", "Mt. Kenya", "Kisii", "Meru", "Murang'a", "Machakos", "Thika", "Nyeri", "Nakuru", "Nyanza", "Kericho"]);
  }),
  uganda: (function() {
    return utils.draw( ["Bugisu", "Mount Elgon", "Kibale"]);
  }),
  mexico: (function() {
    return utils.draw( ["Chiapas", "Oaxaca", "Veracruz", "Colima", "San Luis Potosi", "Nayarit", "Hidalgo", "Puebla", "Jalisco"]);
  }),
  guatemala: (function() {
    return utils.draw( ["Acatenango", "Antigua", "Atitlan", "Fraijanes", "Huehuetenango", "Nuevo Oriente", "Coban", "San Marcos"]);
  }),
  nicaragua: (function() {
    return utils.draw( ["Matagalpa", "Jinotega", "Boaco", "Madriz", "Nueva Segovia", "Estelí", "Dipilto", "Jalapa", "Carazo", "Granada", "Masaya", "Managua", "Rivas"]);
  }),
  costa_rica: (function() {
    return utils.draw( ["Tarrazu", "Central Valley", "West Valley", "Guanacaste", "Tres Rios", "Turrialba", "Orosi", "Brunca"]);
  }),
  tanzania: (function() {
    return utils.draw( ["Western Region, Bukova", "Western Region, Kigoma", "Mbeya Region", "Southern Region, Mbinga", "Western Region, Tarime", "Northern Region, Oldeani", "Northern Region, Arusha", "Northern Region, Kilimanjaro", "Southern Region, Morogoro"]);
  }),
  el_salvador: (function() {
    return utils.draw( ["Alotepec-Metapán", "Apaneca-Ilamatepec", "El Balsamo-Quetzaltepec", "Cacahuatique", "Chichontepec", "Tecapa-Chinameca"]);
  }),
  rwanda: (function() {
    return utils.draw( ["Rulindo", "Gishamwana Coffee Island", "Lake Kivu Region", "Kigeyo Washing Station", "Kabirizi"]);
  }),
  burundi: (function() {
    return utils.draw( ["Kayanza"]);
  }),
  panama: (function() {
    return utils.draw( ["Boquete", "Chiriqui", "Volcan"]);
  }),
  yemen: (function() {
    return utils.draw( ["Mattari", "San'ani", "Hirazi", "Raimi"]);
  }),
  india: (function() {
    return utils.draw( ["Chikmagalur", "Coorg","Biligiris", "Bababudangiris", "Manjarabad", "Nilgiris", "Travancore", "Manjarabad", "Brahmaputra", "Pulneys", "Sheveroys"]);
  }),
  variety: (function() {
    return utils.draw( ["Liberica", "S288", "S795", "Kent", "Java", "Dilla", "Sumatara", "Catuai", "Pacamara", "Mundo Novo", "Red Bourbon", "Bourbon", "Yellow Bourbon", "Pacas", "Caturra", "Pink Bourbon", "Colombia", "Obata", "Catimors", "Sarchimor", "Mokka", "Kaffa", "Gimma", "Tafari-Kela", "S.4", "Agaro", "Dega", "Barbuk Sudan", "Ennarea", "Geisha", "Gesha", "Blue Mountain", "Kona", "San Ramon", "SL28", "SL34", "Villa Sarchi", "Villalobos", "Typica", "Ethiopian Heirloom"]);
  }),
  intensifier: (function() {
    return utils.draw( ["muted", "dull", "mild", "structured", "balanced", "rounded", "soft", "faint", "delicate", "dry", "astringent", "quick", "clean", "crisp", "bright", "vibrant", "tart", "wild", "unbalanced", "sharp", "pointed", "dense", "deep", "complex", "juicy", "lingering", "dirty"]);
  }),
  body: (function() {
    return utils.draw( ["watery", "tea-like", "silky", "slick", "juicy", "smooth", "syrupy", "round", "creamy", "full", "velvety", "big", "chewy", "coating"]);
  }),
  descriptor: (function() {
    return utils.draw( ["bergamot", "hops", "black-tea", "green-tea", "mint", "sage", "dill", "grassy", "snow pea", "sweet pea", "mushroom", "squash", "green pepper", "olive", "leafy greens", "hay", "tobacco", "cedar", "fresh wood", "soil", "tomato", "sundried tomato", "soy sauce", "leathery", "clove", "liquorice", "curry", "nutmeg", "ginger", "corriander", "cinnamon", "white pepper", "black pepper", "carbon", "smokey", "burnt sugar", "toast", "fresh bread", "barley", "wheat", "rye", "graham cracker", "granola", "almond", "hazelnut", "pecan", "cashew", "peanut", "walnut", "cola", "molasses", "maple syrup", "carmel", "brown sugar", "sugar cane", "marshmallow", "cream", "butter", "honey", "nougat", "vanilla", "milk chocolate", "cocoa powder", "bittersweet chocolate", "bakers chocolate", "cacao nibs", "prune", "dates", "figs", "raisin", "golden raisin", "black currant", "red currant", "blueberry", "strawberry", "raspberry", "cranberry", "black cherry", "cherry", "plum", "apricot", "nectarine", "peach", "coconut", "banana", "kiwi", "mango", "papaya", "pineapple", "passion fruit", "tamarind", "star fruit", "lychee", "concord grape", "red grape", "green grape", "white grape", "cantaloupe", "honeydew", "watermelon", "red apple", "green apple", "orange", "mandarin", "tangerine", "clementine", "grapefruit", "lime", "meyer lemon", "lemonade", "lemon", "orange creamsicle", "marzipan", "nutella", "lemongrass", "orange blossom", "jasmine", "honeysuckle", "magnolia", "lavender", "rose hips", "hibiscus", "lemon verbena", "medicinal", "quakery", "baggy", "potato defect!", "musty", "rubber"]);
  }),
  notes: (function() {
    return utils.draw( "#{intensifier}, #{body}, #{descriptor}, #{descriptor}, #{descriptor}");
  }),
  name_1: (function() {
    return utils.draw( ["Summer", "Holiday", "Jacked", "Joe", "Express", "Reg's", "Split", "Spilt", "Chocolate", "Dark", "Veranda", "Major", "Bluebery", "American", "Huggy", "Wake-up", "Morning", "Evening", "Winter", "Captain's", "Thanksgiving", "Seattle", "Brooklyn", "Café", "Blacktop", "Pumpkin-spice", "Good-morning", "Postmodern", "The Captain's", "The", "Cascara", "Melty", "Heart", "Goodbye", "Hello", "Street", "Red", "Blue", "Green", "Strong", "KrebStar", "Kreb-Full-o"]);
  }),
  name_2: (function() {
    return utils.draw( ["Solstice", "Blend", "Level", "Enlightenment", "Cowboy", "", "Choice", "Select", "Equinox", "Star", "Forrester", "Java", "Symphony", "Utopia", "Cup", "Mug", "Been", "Bean", "Cake", "Extract", "Delight", "Pie", "America", "Treat", "Volcano", "Breaker", "Town", "Light", "Look", "Coffee", "Nuts"]);
  }),
  blend_name: (function() {
    return utils.draw( "#{name_1} #{name_2}");
  }),
};

module.exports = coffee
