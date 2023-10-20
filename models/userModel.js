const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("usuarios", {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();

module.exports = User;
