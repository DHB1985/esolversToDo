// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const pg = require("pg");
// const path = require("path");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const dbInit = () => {
//   const conPrimary = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/postgres`;
//   const conCreateDB = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
//   // connect to postgres db
//   pg.connect(conPrimary, function (err, client, done) {
//     // create the db and ignore any errors, for example if it already exists.
//     client.query("CREATE DATABASE " + DB_NAME, function (err) {
//       //db should exist now, initialize Sequelize
//       client.end(); // close the connection
//     });
//   });
// };
require("dotenv").config();
const pgtools = require("pgtools");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
pgtools
    .createdb(
      {
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
        host: DB_HOST,
      },
      DB_NAME
    )
   

// const dbInit = async () => {

//       await pgtools.createdb(

//           {
//               user: DB_USER,
//               password: DB_PASSWORD,
//               port: DB_PORT,
//               host: DB_HOST,
//             },
//             DB_NAME,
//             function (err, res) {
//                 if (err) {
//                     next()
//                     // console.error(err);
//                     // process.exit(-1);
//                 }
//                 console.log("res", res);
//             }
//             );

// };

