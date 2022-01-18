'use strict';

const faker = require('faker/locale/en_GB');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function randNumb (max) {
  return Math.floor(Math.random() * max);
}

const numItems = 15;

let pass = bcrypt.hashSync('pass', saltRounds);

const users = [...Array(numItems)].map(() => (
  {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    password: pass,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: `${faker.phone.phoneNumber()}`,
    createdAt: new Date(),
    updatedAt: new Date()
  }
));

const adminUser =
{
  id: faker.random.uuid(),
  email: 'user@user.com',
  password: pass,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
};

users.push(adminUser);

const categories = [
  { id: faker.random.uuid(), name: 'FURNITURE', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'ANIMALS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'PLANTS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'KITCHEN', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'CARS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'CLOTHES', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'FOOD', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'BEAUTY', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'BABY', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'ELECTRONICS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'SPORTS', createdAt: new Date(), updatedAt: new Date() },
];

const items = [...Array(numItems + 1)].map((item, index) => (
  {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    minPrice:parseInt(faker.commerce.price(), 10),
    description: faker.commerce.productDescription(),
    picUrl1: faker.image.image(),
    picUrl2: faker.image.image(),
    picUrl3: faker.image.image(),
    UserId: users[randNumb(numItems + 1)].id,
    CategoryId: categories[randNumb(10)].id,
    auctionEnd: faker.date.soon(),
    minimumBid: parseInt(faker.commerce.price(), 10),
    bidder: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }
));

const addresses = [...Array(numItems + 1)].map((address, index) => (
  {
    id: faker.random.uuid(),
    firstLineAddress: faker.address.streetAddress(),
    secondLineAddress: faker.address.secondaryAddress(),
    city: faker.address.city(),
    postcode: `${faker.address.zipCode()}`,
    country: faker.address.country(),
    UserId: users[index].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }
));

module.exports = {

  up: async (queryInterface) => {
    Promise.all([
      await queryInterface.bulkInsert('Users', users, {}),
      await queryInterface.bulkInsert('Categories', categories, {}),
      await queryInterface.bulkInsert('Items', items, {}),
      await queryInterface.bulkInsert('Addresses', addresses, {})
    ]);
  },
  down: async (queryInterface) => {
    Promise.all([
      await queryInterface.bulkDelete('Users', users, {}),
      await queryInterface.bulkDelete('Categories', categories, {}),
      await queryInterface.bulkDelete('Items', items, {}),
      await queryInterface.bulkDelete('Addresses', addresses, {})
    ]);
  }
};

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
