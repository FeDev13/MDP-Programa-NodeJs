const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, connectToDb } = require("./config/db");
const userRouter = require("./routes/userRoute");

const app = express();

const PORT = 4200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRouter);

app.listen(PORT, async () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
  await connectToDb();
});
