const express = require("express");
const router = express.Router();

const { validateTask } = require("./../middlewares/validation/task");
const { createTask, getDailyTasks, getAllTasks, updateTask, deleteTask } = require("./../controllers/task");
const auth = require("./../middlewares/authentication/userAuth");

router.post("/task/create", auth, validateTask, createTask);
router.post("/task/update", updateTask);
router.delete("/task/delete/:id", deleteTask);
router.get("/task/daily", auth, getDailyTasks);
router.get("/task/all", auth, getAllTasks);

module.exports = router;