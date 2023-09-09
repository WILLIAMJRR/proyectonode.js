//!6

const { Sequelize } = require('sequelize');

//instanciar de sequelize

const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  //el logging cada vez que se hace una consulta en la terminal em codigo sql
  logging: false,
});

module.exports = db;
