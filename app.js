const express = require("express");
const app = express();
require('dotenv').config();
require("./database/db")();

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});