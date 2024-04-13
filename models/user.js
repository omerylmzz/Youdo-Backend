const mongoose = require("mongoose");

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

module.exports = mongoose.model("Users", schema);