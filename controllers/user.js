const User = require("../models/user");
const bcrypt = require("bcrypt");

const userSignUp = async (req, res) => {

    const { NAME, SURNAME, MAIL, PASSWORD } = req.body;
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    const user = new User({
        NAME: NAME,
        SURNAME: SURNAME,
        MAIL: MAIL,
        PASSWORD: hashedPassword,
        LANGUAGE: "TR"
    });

    try {
        const data = await user.save();
        const token = user.createAuthToken();
        res.header("X-Auth-User-Token", token).send({SUCCESSFUL: true, MESSAGE: "User created successfully", DATA: data});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESS: false, MESSAGE: "User could not be created"});
    }

}

module.exports = {userSignUp};