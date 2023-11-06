const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING(25),
      defaultValue: "",
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      defaultValue: "user",
      allowNull: false,
    },
  },
  { paranoid: true }
);

User.sync({ force: true }, (err) => console.log("database error : ", err));
console.log("User models are synchronized");

module.exports = User;
