const express = require("express");
const router = express.Router();

const {validateUserSignUp, validateUserSignIn} = require("../middlewares/validation/user");
const {userSignUp, userSignIn} = require("../controllers/user");

router.post("/user/signup", validateUserSignUp, userSignUp);
router.post("/user/signin", validateUserSignIn, userSignIn);

module.exports = router;