const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config()

//Database configuration

// const sequelize = new Sequelize(process.env.DB_NAME, 'postgres', process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres'
// });
const sequelize = new Sequelize(process.env.URI, {
  dialect: 'postgres', // Explicitly provide the dialect
}) // Example for postgres

const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true })
    console.log('Dtabase synced')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { connectionDB, sequelize }