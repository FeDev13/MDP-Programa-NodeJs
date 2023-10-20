const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion exitosa");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, connectToDb };
