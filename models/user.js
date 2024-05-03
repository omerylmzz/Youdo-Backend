const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
    NAME: String,
    SURNAME: String,
    MAIL: String,
    PASSWORD: String,
    DATE:{
        type: Date,
        default: Date.now()
    },
    LANGUAGE: String
});

schema.methods.createAuthToken = function() {
    return jwt.sign({USER_ID: this._id}, process.env.JWT_TOKEN_KEY);
}

module.exports = mongoose.model("Users", schema);