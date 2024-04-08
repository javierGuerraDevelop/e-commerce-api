const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'cool',
  },
  {
    tag_name: 'awesome',
  },
  {
    tag_name: 'bewildering',
  },
  {
    tag_name: 'amazing',
  },
  {
    tag_name: 'exciting',
  },
  {
    tag_name: 'hilarious',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
