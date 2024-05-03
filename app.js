const express = require("express");
const app = express();
require('dotenv').config();
require("./database/db")();

const userRouter = require("./routes/user");

app.use(express.json());

app.use(userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listeining on port ${PORT}`);
});