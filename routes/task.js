const express = require("express");
const router = express.Router();

const auth = require("./../middlewares/authentication/userAuth");
const { validateTask } = require("./../middlewares/validation/task");
const { createTask, getDailyTasks, getAllTasks, updateTask, deleteTask } = require("./../controllers/task");

// POST Request
router.post("/task/create", auth, validateTask, createTask);

// GET Request
router.get("/task/daily", auth, getDailyTasks);
router.get("/task/all", auth, getAllTasks);

// PATCH Request
router.patch("/task/update/:id", updateTask);

// DELETE Request
router.delete("/task/delete/:id", deleteTask);


module.exports = router;