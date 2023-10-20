const User = require("../models/userModel");

const createUser = async (request, response) => {
  let data = {
    username: request.body.username,
    email: request.body.email,
  };
  const user = await User.create(data);
  response.status(200).send(user);
  console.log(user);
};

module.exports = { createUser };
