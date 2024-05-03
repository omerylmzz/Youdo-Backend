const mongoose = require("mongoose");

module.exports = async function() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.iqeajrq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("MongoDB bağlantısı kuruldu");
    }
    catch(error) {
        console.log(error);
    }
}