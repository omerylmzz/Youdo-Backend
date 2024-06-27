const express = require("express");
const router = express.Router();

const auth = require("./../middlewares/authentication/userAuth");
const {validateUserSignUp, validateUserSignIn, validateChangeMail, validateChangePassword} = require("../middlewares/validation/user");
const {handleSignUp, handleSignIn, changeMail, changePassword} = require("../controllers/user");

// POST Request
router.post("/user/signup", validateUserSignUp, handleSignUp);
router.post("/user/signin", validateUserSignIn, handleSignIn);
router.post("/user/change/mail", auth, validateChangeMail, changeMail);
router.post("/user/change/password", auth, validateChangePassword, changePassword);

module.exports = router;