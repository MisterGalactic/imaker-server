const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Categories", deps: []
 * createTable() => "PostCategories", deps: []
 * createTable() => "Users", deps: []
 * createTable() => "Addresses", deps: [Users]
 * createTable() => "Items", deps: [Users, Categories]
 * createTable() => "Posts", deps: [Users, PostCategories]
 *
 */

const info = {
  revision: 1,
  name: "noname",
  created: "2022-01-27T10:29:23.343Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "Categories",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        name: { type: Sequelize.STRING, field: "name", unique: true },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "PostCategories",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        name: { type: Sequelize.STRING, field: "name", unique: true },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Users",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        email: {
          type: Sequelize.STRING,
          field: "email",
          unique: true,
          allowNull: false,
        },
        password: { type: Sequelize.TEXT, field: "password", allowNull: false },
        firstName: { type: Sequelize.STRING, field: "firstName" },
        lastName: { type: Sequelize.STRING, field: "lastName" },
        phoneNumber: { type: Sequelize.STRING(25), field: "phoneNumber" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Addresses",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        firstLineAddress: {
          type: Sequelize.TEXT,
          field: "firstLineAddress",
          notEmpty: true,
        },
        secondLineAddress: { type: Sequelize.TEXT, field: "secondLineAddress" },
        city: { type: Sequelize.STRING, field: "city", notEmpty: true },
        postcode: { type: Sequelize.STRING, field: "postcode", notEmpty: true },
        country: { type: Sequelize.STRING, field: "country", notEmpty: true },
        UserId: {
          type: Sequelize.UUID,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          field: "UserId",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Items",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        subname: { type: Sequelize.STRING, field: "subname" },
        color: { type: Sequelize.STRING, field: "color" },
        description: { type: Sequelize.TEXT, field: "description" },
        picUrl1: { type: Sequelize.TEXT, field: "picUrl1" },
        picUrl2: { type: Sequelize.TEXT, field: "picUrl2" },
        picUrl3: { type: Sequelize.TEXT, field: "picUrl3" },
        auctionStart: { type: Sequelize.DATE, field: "auctionStart" },
        auctionEnd: { type: Sequelize.DATE, field: "auctionEnd" },
        minPrice: { type: Sequelize.INTEGER, field: "minPrice", default: 0 },
        minimumBid: {
          type: Sequelize.INTEGER,
          field: "minimumBid",
          default: 0,
        },
        bidder: { type: Sequelize.UUID, field: "bidder", allowNull: true },
        UserId: {
          type: Sequelize.UUID,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          field: "UserId",
          allowNull: false,
        },
        CategoryId: {
          type: Sequelize.UUID,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Categories", key: "id" },
          allowNull: true,
          field: "CategoryId",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Posts",
      {
        id: { type: Sequelize.UUID, field: "id", primaryKey: true },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        subname: { type: Sequelize.STRING, field: "subname" },
        color: { type: Sequelize.STRING, field: "color" },
        description: { type: Sequelize.TEXT, field: "description" },
        picUrl1: { type: Sequelize.TEXT, field: "picUrl1" },
        picUrl2: { type: Sequelize.TEXT, field: "picUrl2" },
        picUrl3: { type: Sequelize.TEXT, field: "picUrl3" },
        auctionStart: { type: Sequelize.DATE, field: "auctionStart" },
        auctionEnd: { type: Sequelize.DATE, field: "auctionEnd" },
        minPrice: { type: Sequelize.INTEGER, field: "minPrice", default: 0 },
        minimumBid: {
          type: Sequelize.INTEGER,
          field: "minimumBid",
          default: 0,
        },
        bidder: { type: Sequelize.UUID, field: "bidder", allowNull: true },
        UserId: {
          type: Sequelize.UUID,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          field: "UserId",
          allowNull: false,
        },
        PostCategoryId: {
          type: Sequelize.UUID,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "PostCategories", key: "id" },
          allowNull: true,
          field: "PostCategoryId",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Addresses", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Categories", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Items", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["PostCategories", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Posts", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Users", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
