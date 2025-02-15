const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");
const validateTask = require("../middlewares/validateTask");

router.post("/create", validateTask, TaskController.createTask);

module.exports = router;
