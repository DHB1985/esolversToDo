require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false,
//     native: false,
//   }
// );

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: false,
  native: false,
});

const modelDefiners = Object.values(
  require(path.join(__dirname, "../models", "models.js"))
);

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Todo, Folders } = sequelize.models;

// Todo.belongsTo(Folders, { through: "todofolders", timestamps: false });
// Folders.belongsToMany(Todo, { through: "todofolders", timestamps: false });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
