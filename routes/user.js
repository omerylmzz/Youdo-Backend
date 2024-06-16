const express = require("express");
const router = express.Router();

const {validateUserSignUp, validateUserSignIn} = require("../middlewares/validation/user");
const {handleSignUp, handleSignIn} = require("../controllers/user");

router.post("/user/signup", validateUserSignUp, handleSignUp);
router.post("/user/signin", validateUserSignIn, handleSignIn);

module.exports = router;