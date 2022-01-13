const faker = require('faker/locale/en_US')
const bcrypt = require('bcrypt')

const numItems = 15
const password = bcrypt.hashSync('pass', 10)
const randNumb = (max) => Math.floor(Math.random() * max)

const categories = [
  { id: faker.datatype.uuid(), name: 'FURNITURE', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'ANIMALS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'PLANTS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'KITCHEN', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'CARS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'CLOTHES', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'FOOD', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'BEAUTY', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'BABY', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'ELECTRONICS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.datatype.uuid(), name: 'SPORTS', createdAt: new Date(), updatedAt: new Date() }
]

const users = [...Array(numItems)].map(() => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  password,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const items = [...Array(numItems)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: faker.image.image(),
  picUrl2: faker.image.image(),
  picUrl3: faker.image.image(),
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[randNumb(10)].id,
  auctionStart: faker.date.recent(),
  auctionEnd: faker.date.soon(),
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const addresses = [...Array(numItems)].map((address, index) => ({
  id: faker.datatype.uuid(),
  firstLineAddress: faker.address.streetAddress(),
  secondLineAddress: faker.address.secondaryAddress(),
  city: faker.address.city(),
  postcode: `${faker.address.zipCode()}`,
  country: faker.address.country(),
  UserId: users[index].id,
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface) => Promise.all([
    await queryInterface.bulkInsert('Users', users, {}),
    await queryInterface.bulkInsert('Categories', categories, {}),
    await queryInterface.bulkInsert('Items', items, {}),
    await queryInterface.bulkInsert('Addresses', addresses, {})
  ]),
  down: async (queryInterface) => Promise.all([
    await queryInterface.bulkDelete('Users', users, {}),
    await queryInterface.bulkDelete('Categories', categories, {}),
    await queryInterface.bulkDelete('Items', items, {}),
    await queryInterface.bulkDelete('Addresses', addresses, {})
  ])
}
