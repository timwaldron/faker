const utils = require('../utils');

const commerce = {
  department() {
    return utils.draw(["Books", "Movies", "Music", "Games", "Electronics", "Computers", "Home", "Garden", "Tools", "Grocery", "Health", "Beauty", "Toys", "Kids", "Baby", "Clothing", "Shoes", "Jewelry", "Sports", "Outdoors", "Automotive", "Industrial"])
  },
  adjective() {
    return utils.draw(["Small", "Ergonomic", "Rustic", "Intelligent", "Gorgeous", "Incredible", "Fantastic", "Practical", "Sleek", "Awesome", "Enormous", "Mediocre", "Synergistic", "Heavy Duty", "Lightweight", "Aerodynamic", "Durable"])
  },
  material() {
    return utils.draw(["Steel", "Wooden", "Concrete", "Plastic", "Cotton", "Granite", "Rubber", "Leather", "Silk", "Wool", "Linen", "Marble", "Iron", "Bronze", "Copper", "Aluminum", "Paper"])
  },
  product() {
    return utils.draw(["Chair", "Car", "Computer", "Gloves", "Pants", "Shirt", "Table", "Shoes", "Hat", "Plate", "Knife", "Bottle", "Coat", "Lamp", "Keyboard", "Bag", "Bench", "Clock", "Watch", "Wallet"])
  },
  promotion_adjective() {
    return utils.draw(["Amazing", "Awesome", "Cool", "Good", "Great", "Incredible", "Killer", "Premium", "Special", "Stellar", "Sweet"])
  },
  promotion_noun() {
    return utils.draw(["Code", "Deal", "Discount", "Price", "Promo", "Promotion", "Sale", "Savings"])
  },
  promotion_code(obj) {
    return `${this.promotion_adjective()} ${this.promotion_noun()}`
  },
};

module.exports = commerce

