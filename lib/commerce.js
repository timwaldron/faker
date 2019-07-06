const utils = require('../utils');

const commerce = {
  department() {
    return utils.draw(["Books", "Movies", "Music", "Games", "Electronics", "Computers", "Home", "Garden", "Tools", "Grocery", "Health", "Beauty", "Toys", "Kids", "Baby", "Clothing", "Shoes", "Jewelry", "Sports", "Outdoors", "Automotive", "Industrial"])
  },
  product_name(obj) {
    toFind = {
      // adjective: "["Small", "Ergonomic", "Rustic", "Intelligent", "Gorgeous", "Incredible", "Fantastic", "Practical", "Sleek", "Awesome", "Enormous", "Mediocre", "Synergistic", "Heavy Duty", "Lightweight", "Aerodynamic", "Durable"]",
      // material: "["Steel", "Wooden", "Concrete", "Plastic", "Cotton", "Granite", "Rubber", "Leather", "Silk", "Wool", "Linen", "Marble", "Iron", "Bronze", "Copper", "Aluminum", "Paper"]",
      // product: "["Chair", "Car", "Computer", "Gloves", "Pants", "Shirt", "Table", "Shoes", "Hat", "Plate", "Knife", "Bottle", "Coat", "Lamp", "Keyboard", "Bag", "Bench", "Clock", "Watch", "Wallet"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
  promotion_code(obj) {
    toFind = {
      // adjective: "["Amazing", "Awesome", "Cool", "Good", "Great", "Incredible", "Killer", "Premium", "Special", "Stellar", "Sweet"]",
      // noun: "["Code", "Deal", "Discount", "Price", "Promo", "Promotion", "Sale", "Savings"]",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
};

module.exports = commerce

