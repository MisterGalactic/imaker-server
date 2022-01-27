const faker = require('faker/locale/en_US')
const bcrypt = require('bcrypt')

const getRandomInt = (min, max) => {
  let minn = Math.ceil(min)
  let maxx = Math.floor(max)
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn
}

const numFeaturedItems = getRandomInt(3,7)
const numCoinItems = getRandomInt(2,4)
const numArtItems = getRandomInt(3,11)
const numBrandItems = getRandomInt(3,11)
const numRealEstateItems = getRandomInt(3,11)
const numWatchItems = getRandomInt(3,11)
const numCarItems = getRandomInt(3,11)

const numItems = numFeaturedItems + numCoinItems + numArtItems + numBrandItems + numRealEstateItems + numWatchItems + numCarItems

const password = bcrypt.hashSync('pass', 10)
const randNumb = (max) => Math.floor(Math.random() * max)

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

const categories = [
  { id: faker.random.uuid(), name: 'FEATURED', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'COINS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'ART', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'BRANDS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'REAL ESTATE', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'WATCH', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'CARS', createdAt: new Date(), updatedAt: new Date() },
  { id: '0ec7e90f-238d-4da1-b6cc-f266fc0df9cc', name: 'UNSORTED', createdAt: new Date(), updatedAt: new Date() }
]

const postcategories = [
  { id: faker.random.uuid(), name: 'FEATURED', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'COINS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'ART', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'BRANDS', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'REAL ESTATE', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'WATCH', createdAt: new Date(), updatedAt: new Date() },
  { id: faker.random.uuid(), name: 'CARS', createdAt: new Date(), updatedAt: new Date() },
  { id: '0ec7e90f-238d-4da1-b6cc-f266fc0df9cc', name: 'UNSORTED', createdAt: new Date(), updatedAt: new Date() }
]

const seasons = [
  { name: 'Spring' },
  { name: 'Summer' },
  { name: 'Fall' },
  { name: 'Winter' }
]

const coinMaterial = [
  { name: 'Silver' },
  { name: 'Gold' },
  { name: 'Bronze' },
  { name: 'Copper' }
]

const coinEra = [
  { name: '450 BC-100 AD' },
  { name: '300 BC-27 BC' },
  { name: '27 BC-476 AD' },
  { name: '100-400 AD' },
  { name: '300-1400 AD' }
]

const coinOrigin = [
  { name: 'Greek' },
  { name: 'Roman: Republic' },
  { name: 'Roman: Imperial' },
  { name: 'Roman: Provincial' },
  { name: 'Byzantine' }
]

const fakerStartTime = [
  { time: new Date(Date.now()*1.0000001) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: new Date(Date.now()) },
  { time: faker.date.recent() }
]

const fakerEndTime = [
  { time: new Date(Date.now()*1.0000001) },
  { time: new Date(Date.now()*1.0000005) },
  { time: new Date(Date.now()*1.0000010) },
  { time: new Date(Date.now()*1.0000015) },
  { time: new Date(Date.now()*1.0000020) },
  { time: new Date(Date.now()*1.0000025) },
  { time: new Date(Date.now()*1.0000030) },
  { time: new Date(Date.now()*1.0000035) },
  { time: new Date(Date.now()*1.0000040) },
  { time: new Date(Date.now()*1.0000045) }
]

const users = [...Array(numItems)].map(() => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const testUser1 = [...Array(1)].map(() => ({
  id: faker.random.uuid(),
  email: '1',
  password,
  firstName: '1',
  lastName: 'Test User',
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const testUser2 = [...Array(1)].map(() => ({
  id: faker.random.uuid(),
  email: '2',
  password,
  firstName: '2',
  lastName: 'Test User',
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const testUser3 = [...Array(1)].map(() => ({
  id: faker.random.uuid(),
  email: '3',
  password,
  firstName: '3',
  lastName: 'Test User',
  phoneNumber: `${faker.phone.phoneNumber()}`,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const featuredPosts = [...Array(numFeaturedItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${getRandomInt(1990,2022)} ${faker.vehicle.model()} ${getRandomInt(29,44)}mm`,
  subname: faker.name.lastName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/watches',
  picUrl2: 'http://loremflickr.com/640/481/watches',
  picUrl3: 'http://loremflickr.com/640/482/watches',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[0].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const coinPosts = [...Array(numCoinItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${coinEra[randNumb(5)].name}, ${coinMaterial[randNumb(4)].name}`,
  subname: coinOrigin[randNumb(5)].name,
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/coins',
  picUrl2: 'http://loremflickr.com/640/481/coins',
  picUrl3: 'http://loremflickr.com/640/482/coins',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[1].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const artPosts = [...Array(numArtItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${faker.name.lastName()} (${getRandomInt(1875,1930)}-${getRandomInt(1950,1975)})`,
  subname: faker.address.country(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/art',
  picUrl2: 'http://loremflickr.com/640/481/art',
  picUrl3: 'http://loremflickr.com/640/482/art',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[2].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const brandPosts = [...Array(numBrandItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  subname: `${seasons[randNumb(4)].name} ${getRandomInt(2010,2022)}`,
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/clothes',
  picUrl2: 'http://loremflickr.com/640/481/clothes',
  picUrl3: 'http://loremflickr.com/640/482/clothes',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[3].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const realEstatePosts = [...Array(numRealEstateItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.address.streetAddress(),
  subname: faker.address.cityName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/482/mansion',
  picUrl2: 'http://placeimg.com/640/480/arch',
  picUrl3: 'http://loremflickr.com/640/482/house',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[4].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const watchPosts = [...Array(numWatchItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${getRandomInt(1990,2022)} ${faker.vehicle.model()} ${getRandomInt(29,44)}mm`,
  subname: faker.name.lastName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/watches',
  picUrl2: 'http://loremflickr.com/640/481/watches',
  picUrl3: 'http://loremflickr.com/640/482/watches',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[5].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const carPosts = [...Array(numCarItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.vehicle.vehicle(),
  subname: faker.vehicle.manufacturer(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: `<div>${faker.lorem.paragraphs()}</div>`,
  picUrl1: 'http://loremflickr.com/640/480/cars',
  picUrl2: 'http://loremflickr.com/640/481/cars',
  picUrl3: 'http://loremflickr.com/640/482/cars',
  UserId: users[randNumb(numItems)].id,
  PostCategoryId: postcategories[6].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))




const featuredItems = [...Array(numFeaturedItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${getRandomInt(1990,2022)} ${faker.vehicle.model()} ${getRandomInt(29,44)}mm`,
  subname: faker.name.lastName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/watches',
  picUrl2: 'http://loremflickr.com/640/481/watches',
  picUrl3: 'http://loremflickr.com/640/482/watches',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[0].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const coinItems = [...Array(numCoinItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${coinEra[randNumb(5)].name}, ${coinMaterial[randNumb(4)].name}`,
  subname: coinOrigin[randNumb(5)].name,
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/coins',
  picUrl2: 'http://loremflickr.com/640/481/coins',
  picUrl3: 'http://loremflickr.com/640/482/coins',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[1].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const artItems = [...Array(numArtItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${faker.name.lastName()} (${getRandomInt(1875,1930)}-${getRandomInt(1950,1975)})`,
  subname: faker.address.country(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/art',
  picUrl2: 'http://loremflickr.com/640/481/art',
  picUrl3: 'http://loremflickr.com/640/482/art',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[2].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const brandItems = [...Array(numBrandItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  subname: `${seasons[randNumb(4)].name} ${getRandomInt(2010,2022)}`,
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/clothes',
  picUrl2: 'http://loremflickr.com/640/481/clothes',
  picUrl3: 'http://loremflickr.com/640/482/clothes',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[3].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const realEstateItems = [...Array(numRealEstateItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.address.streetAddress(),
  subname: faker.address.cityName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/482/mansion',
  picUrl2: 'http://placeimg.com/640/480/arch',
  picUrl3: 'http://loremflickr.com/640/482/house',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[4].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const watchItems = [...Array(numWatchItems)].map(() => ({
  id: faker.random.uuid(),
  name: `${getRandomInt(1990,2022)} ${faker.vehicle.model()} ${getRandomInt(29,44)}mm`,
  subname: faker.name.lastName(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/watches',
  picUrl2: 'http://loremflickr.com/640/481/watches',
  picUrl3: 'http://loremflickr.com/640/482/watches',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[5].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const carItems = [...Array(numCarItems)].map(() => ({
  id: faker.random.uuid(),
  name: faker.vehicle.vehicle(),
  subname: faker.vehicle.manufacturer(),
  color: random_hex_color_code(),
  minPrice: parseInt(faker.commerce.price(), 10),
  description: faker.commerce.productDescription(),
  picUrl1: 'http://loremflickr.com/640/480/cars',
  picUrl2: 'http://loremflickr.com/640/481/cars',
  picUrl3: 'http://loremflickr.com/640/482/cars',
  UserId: users[randNumb(numItems)].id,
  CategoryId: categories[6].id,
  auctionStart: fakerStartTime[randNumb(18)].time,
  auctionEnd: fakerEndTime[randNumb(10)].time,
  minimumBid: parseInt(faker.commerce.price(), 10),
  bidder: null,
  createdAt: new Date(),
  updatedAt: new Date()
}))

const addresses = [...Array(numItems)].map((address, index) => ({
  id: faker.random.uuid(),
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

    await queryInterface.bulkInsert('Users', testUser1, {}),
    await queryInterface.bulkInsert('Users', testUser2, {}),
    await queryInterface.bulkInsert('Users', testUser3, {}),

    await queryInterface.bulkInsert('Categories', categories, {}),
    await queryInterface.bulkInsert('PostCategories', postcategories, {}),

    await queryInterface.bulkInsert('Posts', featuredPosts, {}),
    await queryInterface.bulkInsert('Posts', coinPosts, {}),
    await queryInterface.bulkInsert('Posts', artPosts, {}),
    await queryInterface.bulkInsert('Posts', brandPosts, {}),
    await queryInterface.bulkInsert('Posts', realEstatePosts, {}),
    await queryInterface.bulkInsert('Posts', watchPosts, {}),
    await queryInterface.bulkInsert('Posts', carPosts, {}),

    await queryInterface.bulkInsert('Items', featuredItems, {}),
    await queryInterface.bulkInsert('Items', coinItems, {}),
    await queryInterface.bulkInsert('Items', artItems, {}),
    await queryInterface.bulkInsert('Items', brandItems, {}),
    await queryInterface.bulkInsert('Items', realEstateItems, {}),
    await queryInterface.bulkInsert('Items', watchItems, {}),
    await queryInterface.bulkInsert('Items', carItems, {}),
    await queryInterface.bulkInsert('Addresses', addresses, {})
  ]),
  down: async (queryInterface) => Promise.all([
    await queryInterface.bulkDelete('Users', users, {}),

    await queryInterface.bulkDelete('Users', testUser1, {}),
    await queryInterface.bulkDelete('Users', testUser2, {}),
    await queryInterface.bulkDelete('Users', testUser3, {}),

    await queryInterface.bulkDelete('Categories', categories, {}),
    await queryInterface.bulkDelete('PostCategories', postcategories, {}),

    await queryInterface.bulkDelete('Posts', featuredPosts, {}),
    await queryInterface.bulkDelete('Posts', coinPosts, {}),
    await queryInterface.bulkDelete('Posts', artPosts, {}),
    await queryInterface.bulkDelete('Posts', brandPosts, {}),
    await queryInterface.bulkDelete('Posts', realEstatePosts, {}),
    await queryInterface.bulkDelete('Posts', watchPosts, {}),
    await queryInterface.bulkDelete('Posts', carPosts, {}),

    await queryInterface.bulkDelete('Items', featuredItems, {}),
    await queryInterface.bulkDelete('Items', coinItems, {}),
    await queryInterface.bulkDelete('Items', artItems, {}),
    await queryInterface.bulkDelete('Items', brandItems, {}),
    await queryInterface.bulkDelete('Items', realEstateItems, {}),
    await queryInterface.bulkDelete('Items', watchItems, {}),
    await queryInterface.bulkDelete('Items', carItems, {}),
    await queryInterface.bulkDelete('Addresses', addresses, {})
  ])
}
