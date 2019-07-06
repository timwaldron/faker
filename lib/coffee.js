const utils = require('../utils');

const coffee = {
  country() {
    return utils.draw(["Brazil", "Colombia", "Sumatra", "Ethiopia", "Honduras", "Kenya", "Uganda", "Mexico", "Guatemala", "Nicaragua", "Costa Rica", "Tanzania", "El Salvador", "Rwanda", "Burundi", "Panama", "Yemen", "India"])
  },
  regions(obj) {
    toFind = {
      // brazil: "["Sul Minas", "Mogiana", "Cerrado"]",
      // colombia: "["Nariño", "Huila", "Tolima", "Cauca", "Casanare", "Santander", "Antioquia", "Cundinamarca", "Boyacá"]",
      // sumatra: "["Tapanuli", "Lintong", "Aceh", "Lake Tawar", "Lintong", "Gayo"]",
      // ethiopia: "["Sidama", "Harrar", "Limu", "Ojimmah", "Lekempti", "Wellega", "Gimbi"]",
      // honduras: "["Agalta", "Comayagua", "Copan", "Montecillos", "Opalca", "El Paraiso"]",
      // kenya: "["Bungoma", "Embu", "Kiamba", "Kirinyaga", "Mt. Kenya", "Kisii", "Meru", "Murang'a", "Machakos", "Thika", "Nyeri", "Nakuru", "Nyanza", "Kericho"]",
      // uganda: "["Bugisu", "Mount Elgon", "Kibale"]",
      // mexico: "["Chiapas", "Oaxaca", "Veracruz", "Colima", "San Luis Potosi", "Nayarit", "Hidalgo", "Puebla", "Jalisco"]",
      // guatemala: "["Acatenango", "Antigua", "Atitlan", "Fraijanes", "Huehuetenango", "Nuevo Oriente", "Coban", "San Marcos"]",
      // nicaragua: "["Matagalpa", "Jinotega", "Boaco", "Madriz", "Nueva Segovia", "Estelí", "Dipilto", "Jalapa", "Carazo", "Granada", "Masaya", "Managua", "Rivas"]",
      // costa_rica: "["Tarrazu", "Central Valley", "West Valley", "Guanacaste", "Tres Rios", "Turrialba", "Orosi", "Brunca"]",
      // tanzania: "["Western Region, Bukova", "Western Region, Kigoma", "Mbeya Region", "Southern Region, Mbinga", "Western Region, Tarime", "Northern Region, Oldeani", "Northern Region, Arusha", "Northern Region, Kilimanjaro", "Southern Region, Morogoro"]",
      // el_salvador: "["Alotepec-Metapán", "Apaneca-Ilamatepec", "El Balsamo-Quetzaltepec", "Cacahuatique", "Chichontepec", "Tecapa-Chinameca"]",
      // rwanda: "["Rulindo", "Gishamwana Coffee Island", "Lake Kivu Region", "Kigeyo Washing Station", "Kabirizi"]",
      // burundi: "["Kayanza"]",
      // panama: "["Boquete", "Chiriqui", "Volcan"]",
      // yemen: "["Mattari", "San'ani", "Hirazi", "Raimi"]",
      // india: "["Chikmagalur", "Coorg", "Biligiris", "Bababudangiris", "Manjarabad", "Nilgiris", "Travancore", "Manjarabad", "Brahmaputra", "Pulneys", "Sheveroys"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  variety() {
    return utils.draw(["Liberica", "S288", "S795", "Kent", "Java", "Dilla", "Sumatara", "Catuai", "Pacamara", "Mundo Novo", "Red Bourbon", "Bourbon", "Yellow Bourbon", "Pacas", "Caturra", "Pink Bourbon", "Colombia", "Obata", "Catimors", "Sarchimor", "Mokka", "Kaffa", "Gimma", "Tafari-Kela", "S.4", "Agaro", "Dega", "Barbuk Sudan", "Ennarea", "Geisha", "Gesha", "Blue Mountain", "Kona", "San Ramon", "SL28", "SL34", "Villa Sarchi", "Villalobos", "Typica", "Ethiopian Heirloom"])
  },
  intensifier() {
    return utils.draw(["muted", "dull", "mild", "structured", "balanced", "rounded", "soft", "faint", "delicate", "dry", "astringent", "quick", "clean", "crisp", "bright", "vibrant", "tart", "wild", "unbalanced", "sharp", "pointed", "dense", "deep", "complex", "juicy", "lingering", "dirty"])
  },
  body() {
    return utils.draw(["watery", "tea-like", "silky", "slick", "juicy", "smooth", "syrupy", "round", "creamy", "full", "velvety", "big", "chewy", "coating"])
  },
  descriptor() {
    return utils.draw(["bergamot", "hops", "black-tea", "green-tea", "mint", "sage", "dill", "grassy", "snow pea", "sweet pea", "mushroom", "squash", "green pepper", "olive", "leafy greens", "hay", "tobacco", "cedar", "fresh wood", "soil", "tomato", "sundried tomato", "soy sauce", "leathery", "clove", "liquorice", "curry", "nutmeg", "ginger", "corriander", "cinnamon", "white pepper", "black pepper", "carbon", "smokey", "burnt sugar", "toast", "fresh bread", "barley", "wheat", "rye", "graham cracker", "granola", "almond", "hazelnut", "pecan", "cashew", "peanut", "walnut", "cola", "molasses", "maple syrup", "carmel", "brown sugar", "sugar cane", "marshmallow", "cream", "butter", "honey", "nougat", "vanilla", "milk chocolate", "cocoa powder", "bittersweet chocolate", "bakers chocolate", "cacao nibs", "prune", "dates", "figs", "raisin", "golden raisin", "black currant", "red currant", "blueberry", "strawberry", "raspberry", "cranberry", "black cherry", "cherry", "plum", "apricot", "nectarine", "peach", "coconut", "banana", "kiwi", "mango", "papaya", "pineapple", "passion fruit", "tamarind", "star fruit", "lychee", "concord grape", "red grape", "green grape", "white grape", "cantaloupe", "honeydew", "watermelon", "red apple", "green apple", "orange", "mandarin", "tangerine", "clementine", "grapefruit", "lime", "meyer lemon", "lemonade", "lemon", "orange creamsicle", "marzipan", "nutella", "lemongrass", "orange blossom", "jasmine", "honeysuckle", "magnolia", "lavender", "rose hips", "hibiscus", "lemon verbena", "medicinal", "quakery", "baggy", "potato defect!", "musty", "rubber"])
  },
  notes() {
    return utils.draw(["#{intensifier}, #{body}, #{descriptor}, #{descriptor}, #{descriptor}"])
  },
  name_1() {
    return utils.draw(["Summer", "Holiday", "Jacked", "Joe", "Express", "Reg's", "Split", "Spilt", "Chocolate", "Dark", "Veranda", "Major", "Bluebery", "American", "Huggy", "Wake-up", "Morning", "Evening", "Winter", "Captain's", "Thanksgiving", "Seattle", "Brooklyn", "Café", "Blacktop", "Pumpkin-spice", "Good-morning", "Postmodern", "The Captain's", "The", "Cascara", "Melty", "Heart", "Goodbye", "Hello", "Street", "Red", "Blue", "Green", "Strong", "KrebStar", "Kreb-Full-o"])
  },
  name_2() {
    return utils.draw(["Solstice", "Blend", "Level", "Enlightenment", "Cowboy", "", "Choice", "Select", "Equinox", "Star", "Forrester", "Java", "Symphony", "Utopia", "Cup", "Mug", "Been", "Bean", "Cake", "Extract", "Delight", "Pie", "America", "Treat", "Volcano", "Breaker", "Town", "Light", "Look", "Coffee", "Nuts"])
  },
  blend_name() {
    return utils.draw(["#{name_1} #{name_2}"])
  },
};

module.exports = coffee

