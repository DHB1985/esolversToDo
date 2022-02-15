const mysql = require("mysql2/promise");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const initialDB = async function initialize() {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  const response = await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`
  );
  if (response[0].warningStatus === 0) console.log("DB Created");
  else console.log("DB alredy exist");
};

module.exports = initialDB;
