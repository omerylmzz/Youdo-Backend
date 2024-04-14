const express = require("express");
const router = express.Router();

const {validateUserSignUp} = require("../middlewares/validation/user");
const {userSignUp} = require("../controllers/user");

router.post("/user/signup", validateUserSignUp, userSignUp);

module.exports = router;