const Task = require("./../models/task");
const moment = require("moment");

const createTask = async (req, res) => {

    const {TITLE, TASK, DATE, TIME, REMINDER, LABEL} = req.body;

    const task = new Task({
        AUTHOR_ID: req.user.USER_ID,
        TITLE: TITLE,
        TASK: TASK,
        DATE: DATE,
        TIME: TIME,
        REMINDER: REMINDER,
        LABEL: LABEL,
        COMPLETED: false
    });
   
    // Checking that the date and time entered is the future
    if(moment(DATE + TIME).fromNow().slice(0, 2) !== "in") {
        return res.send({SUCCESSFUL: false, MESSAGE: "Please select a valid date and time"});
    }
    
    try {
        await task.save();
        res.send({SUCCESSFUL: true, MESSAGE: "Task successfully created"});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "Could not create task"});
    }
}

const getDailyTasks = async (req, res) => {

    const currentDate = moment().format().slice(0, 11); // output: 2024-05-23T
    const task = await Task.find({AUTHOR_ID: req.user.USER_ID, DATE: currentDate});

    task.length ? res.send({SUCCESSFUL: true, MESSAGE: "Daily tasks listed", DATA: task}) : res.send({SUCCESSFUL: false, MESSAGE: "No task found"});

}

const getAllTasks = async (req, res) => {
    
    const task = await Task.find({AUTHOR_ID: req.user.USER_ID});
    
    task.length ? res.send({SUCCESSFUL: true, MESSAGE: "All tasks listed", DATA: task}) : res.send({SUCCESSFUL: false, MESSAGE: "No task found"});

}

const updateTask = async (req, res) => {
    
    try {
        const result = await Task.findByIdAndUpdate({_id: req.params.id}, {COMPLETED: true});
        
        result ? res.send({SUCCESSFUL: true, MESSAGE: "Task successfully updated"}) : res.send({SUCCESSFUL: false, MESSAGE: "Failed to update task"});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "Something went wrong"});
    }
}

const deleteTask = async (req, res) => {

    try {
        const result = await Task.findByIdAndDelete({_id: req.params.id});

        result ? res.send({SUCCESSFUL: true, MESSAGE: "Task successfully deleted"}) : res.send({SUCCESSFUL: false, MESSAGE: "Failed to delete task"});
    }
    catch(error) {
        console.log(error);
        res.send({SUCCESSFUL: false, MESSAGE: "Something went wrong"});
    }

}

module.exports = {createTask, getDailyTasks, getAllTasks, updateTask, deleteTask};