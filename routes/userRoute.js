const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/newUser", userController.createUser);

module.exports = router;
