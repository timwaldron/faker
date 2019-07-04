const utils = require('../utils');

const dog = {
  breed: (function() {
    return utils.draw(["Affenpinscher", "African", "Airedale", "Akita", "Appenzeller", "Basenji", "Beagle", "Bluetick", "Borzoi", "Bouvier", "Boxer", "Brabancon", "Briard", "Boston Bulldog", "French Bulldog", "Staffordshire Bullterrier", "Cairn", "Chihuahua", "Chow", "Clumber", "Border Collie", "Coonhound", "Cardigan Corgi", "Dachshund", "Great Dane", "Scottish Deerhound", "Dhole", "Dingo", "Doberman", "Norwegian Elkhound", "Entlebucher", "Eskimo", "Germanshepherd", "Italian Greyhound", "Groenendael", "Ibizan Hound", "Afghan Hound", "Basset Hound", "Blood Hound", "English Hound", "Walker Hound", "Husky", "Keeshond", "Kelpie", "Komondor", "Kuvasz", "Labrador", "Leonberg", "Lhasa", "Malamute", "Malinois", "Maltese", "Bull Mastiff", "Tibetan Mastiff", "Mexicanhairless", "Bernese Mountain", "Swiss Mountain", "Newfoundland", "Otterhound", "Papillon", "Pekinese", "Pembroke", "Miniature Pinscher", "German Pointer", "Pomeranian", "Miniature Poodle", "Standard Poodle", "Toy Poodle", "Pug", "Pyrenees", "Redbone", "Chesapeake Retriever", "Curly Retriever", "Flatcoated Retriever", "Golden Retriever", "Rhodesian Ridgeback", "Rottweiler", "Saluki", "Samoyed", "Schipperke", "Giant Schnauzer", "Miniature Schnauzer", "English Setter", "Gordon Setter", "Irish Setter", "English Sheepdog", "Shetland Sheepdog", "Shiba", "Shihtzu", "Blenheim Spaniel", "Brittany Spaniel", "Cocker Spaniel", "Irish Spaniel", "Japanese Spaniel", "Sussex Spaniel", "Welsh Spaniel", "English Springer", "Stbernard", "American Terrier", "Australian Terrier", "Bedlington Terrier", "Border Terrier", "Dandie Terrier", "Fox Terrier", "Irish Terrier", "Kerryblue Terrier", "Lakeland Terrier", "Norfolk Terrier", "Norwich Terrier", "Patterdale Terrier", "Rat Terrier", "Scottish Terrier", "Sealyham Terrier", "Silky Terrier", "Tibetan Terrier", "Toy Terrier", "Westhighland Terrier", "Wheaten Terrier", "Yorkshire Terrier", "Vizsla", "Weimaraner", "Whippet", "Irish Wolfhound"]);
  }),
  sound: (function() {
    return utils.draw(["woof", "woof woof", "bow wow", "ruff", "owooooo", "grrrrrr"]);
  }),
  meme_phrase: (function() {
    return utils.draw (["heck no pal", "11/10", "boop the snoot", "mlem", "blep", "long boi", "thicc doggo", "big ol' pupper", "smol pupperino", "zoom", "they're good dogs Brent"]);
  }),
  age: (function() {
    return utils.draw(["puppy", "young", "adult", "senior"]);
  }),
  coat_length: (function() {
    return utils.draw(["hairless", "short", "medium", "long", "wire", "curly"]);
  }),
  size: (function() {
    return utils.draw(["small", "medium", "large", "extra large"]);
  }),
};

module.exports = dog;
