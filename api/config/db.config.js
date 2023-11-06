require("dotenv").config();

const { Sequelize } = require("sequelize");
const userName = process.env.DB_NAME;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

let sequelize = new Sequelize(userName, user, pass, {
  host: host,
  port: port,
  dialect: "mysql",
  logging: false,
});

sequelize.sync(
  // { force: true },
  (err) => console.log("Database error : ", err)
);
console.log("All models were synchronized successfully.");

module.exports = sequelize;
