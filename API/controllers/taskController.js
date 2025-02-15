const Task = require("../models/Task");

// HTTP_Requests
const HTTP_STATUS = {
  BAD_REQUEST: 400,
  CREATED: 201,
};

class TaskController {
  // Custom Higher Order Function to handle errors
  asyncHandler(fn) {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        console.error("Error", error.message);
        res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
      }
    };
  }

  // creating new task
  createTask = this.asyncHandler(async (req, res) => {
    const { title } = req.body;

    // Check if a task with the same title already exists
    const existingTask = await Task.findOne({ title });

    if (existingTask) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: `Task with the title ${title} already exists.`,
      });
    }

    // Create and save the new task
    const task = new Task(req.body);
    await task.save();

    // Return the created task
    res.status(HTTP_STATUS.CREATED).json({
      message: "Task created successfully.",
      data: task,
    });
  });
}

// new keyword createsan instance and don't need to instantiate manually while importing
module.exports = new TaskController();
