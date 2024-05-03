const User = require("../models/user");
const bcrypt = require("bcrypt");

const userSignUp = async (req, res) => {

    const { NAME, SURNAME, MAIL, PASSWORD } = req.body;
    const mail = await User.findOne({MAIL: MAIL});
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    const user = new User({
        NAME: NAME,
        SURNAME: SURNAME,
        MAIL: MAIL,
        PASSWORD: hashedPassword,
        LANGUAGE: "TR"
    });

    if(mail) {
        return res.send({SUCCESSFUL: false, MESSAGE: "This e-mail address is already in use"});
    }

    try {
        const data = await user.save();
        const token = user.createAuthToken();
        res.header("X-Auth-User-Token", token).send({SUCCESSFUL: true, MESSAGE: "User created successfully", DATA: data});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "User could not be created"});
    }

}

const userSignIn = async (req, res) => {

    const { MAIL, PASSWORD } = req.body;
    const user = await User.findOne({MAIL: MAIL});

    if(!user) {
        return res.send({SUCCESSFUL: false, MESSAGE: "There is no user with this e-mail address"});
    }

    const result = await bcrypt.compare(PASSWORD, user.PASSWORD);

    const token = user.createAuthToken();

    result ? res.send({SUCCESSFUL: true, MESSAGE: "Successfully logged in", ACCESS_TOKEN: token}) : res.send({SUCCESSFUL: false, MESSAGE: "Password incorrect"});

}

module.exports = {userSignUp, userSignIn};