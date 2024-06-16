const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    AUTHOR_ID: String,
    TITLE: String,
    TASK: String,
    DATE: String,
    TIME: String,
    REMINDER: Boolean,
    LABEL: String,
    COMPLETED: Boolean
});

module.exports = mongoose.model("Tasks", schema);