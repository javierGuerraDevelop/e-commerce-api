const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('database synced');
  await seedCategories();
  console.log('catgories done');
  await seedProducts();
  console.log('products done');
  await seedTags();
  console.log('tags done');
  await seedProductTags();
  console.log('product tags done');
  process.exit(0);
};

seedAll();
