const { Product } = require('../models');

const productData = [
  {
    product_name: 'Designer Shirt',
    price: 25,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: '7 inch inseam Shorts',
    price: 35,
    stock: 40,
    category_id: 2,
  },
  {
    product_name: '5 inch inseam Shorts',
    price: 40,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: 'Kanye Album',
    price: 25,
    stock: 13,
    category_id: 3,
  },
  {
    product_name: 'Nike Hat',
    price: 30,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Air Jordans',
    price: 250,
    stock: 50,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
