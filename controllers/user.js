const User = require("../models/user");
const bcrypt = require("bcrypt");

const handleSignUp = async (req, res) => {

    const { NAME, SURNAME, MAIL, PASSWORD } = req.body;
    const mail = await User.findOne({MAIL: MAIL});
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);

    const user = new User({
        NAME: NAME,
        SURNAME: SURNAME,
        MAIL: MAIL,
        PASSWORD: hashedPassword
    });

    if(mail) {
        return res.send({SUCCESSFUL: false, MESSAGE: "This e-mail address is already in use"});
    }

    try {
        await user.save();
        const token = user.createAuthToken();
        res.header("X-Auth-User-Token", token).send({SUCCESSFUL: true, MESSAGE: "User created successfully"});
    }
    catch (error){
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "User could not be created"});
    }

}

const handleSignIn = async (req, res) => {

    const { MAIL, PASSWORD } = req.body;
    const user = await User.findOne({MAIL: MAIL});
    

    if(!user) {
        return res.send({SUCCESSFUL: false, MESSAGE: "There is no user with this e-mail address"});
    }
 
    const result = await bcrypt.compare(PASSWORD, user.PASSWORD);
    const token = user.createAuthToken();

    const data = {
        NAME: user.NAME,
        SURNAME: user.SURNAME,
        MAIL: user.MAIL,
        PASSWORD: PASSWORD
    }

    result ? res.send({SUCCESSFUL: true, MESSAGE: "Successfully logged in", ACCESS_TOKEN: token, DATA: data}) : res.send({SUCCESSFUL: false, MESSAGE: "Password incorrect"});

}

const changeMail = async (req, res) => {

    const { MAIL } = req.body;
    const user = await User.findOne({_id: req.user.USER_ID});

    if(user.MAIL === MAIL) {
        return res.send({SUCCESSFUL: false, MESSAGE: "E-mail address must be different from your current"});
    }

    try {
        const result = await User.findOneAndUpdate({_id: req.user.USER_ID}, {MAIL: MAIL});

        result ? res.send({SUCCESSFUL: true, MESSAGE: "E-mail address successfully changed"}) : res.send({SUCCESSFUL: false, MESSAGE: "Failed to change e-mail address"});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "Something went wrong"});
    }
}

const changePassword = async (req, res) => {

    const { CURRENT_PASSWORD, NEW_PASSWORD } = req.body;
    const user = await User.findOne({_id: req.user.USER_ID});
    const match = await bcrypt.compare(CURRENT_PASSWORD, user.PASSWORD);

    if(!match) {
        res.send({SUCCESSFUL: false, MESSAGE: "Your password did not match"});
    }
    else if(CURRENT_PASSWORD === NEW_PASSWORD) {
        res.send({SUCCESSFUL: false, MESSAGE: "Password must be different from your current"});
    }
    else {
        try {
            const hashedPassword = await bcrypt.hash(NEW_PASSWORD, 10);
            const result = await User.findOneAndUpdate({_id: req.user.USER_ID}, {PASSWORD: hashedPassword});
    
            result ? res.send({SUCCESSFUL: true, MESSAGE: "Password successfully changed"}) : res.send({SUCCESSFUL: false, MESSAGE: "Failed to change password"});
        }
        catch(error) {
            console.log(error);
            res.send({SUCCESSFUL: false, MESSAGE: "Something went wrong"});
        }
    }
    
}


module.exports = {handleSignUp, handleSignIn, changeMail, changePassword};