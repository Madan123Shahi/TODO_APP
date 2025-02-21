const logger = require("../configuration/logger");
const Task = require("../models/Task");

// HTTP_Requests
const HTTP_STATUS = {
  BAD_REQUEST: 400,
  CREATED: 201,
  NOT_FOUND: 404,
  SUCCESS: 200,
};

class TaskController {
  // Custom Higher Order Function to handle errors
  asyncHandler(fn) {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        logger.error("Error", error.message);
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
      logger.info(`Task with the title ${title} already exists.`);
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

  updateTask = this.asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findById(id);

    if (!task) {
      res.HTTP_STATUS.NOT_FOUND.json({
        Message: `Task with ID ${id} not found`,
      });
    }
    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    // 2 findByIdAndUpdate (id, {title, description, completed}, {new:true, runValidators:true})
    // 3 Object.assign(task, {title, description, completed})
    // Object.assign(target, source) -> it copies the values from the sourc objects to target objects
    // 4 Using $set
    // In Mongoose, the $set operator is used to update specific fields in a document without affecting the other fields. It is part of MongoDB's update operators and is commonly used in update or findByIdAndUpdate operations
    // The $set operator replaces the value of a field with the specified value.If the field does not exist, $set will create the field and set its value.Always use { new: true } if you need the updated document returned. Use { runValidators: true } to enforce schema validation during updates.

    task.save();
    res.HTTP_STATUS.SUCCESS.json({
      Message: `Task with ID ${id} updated successfully`,
      Data: task,
    });
  });
}

// new keyword createsan instance and don't need to instantiate manually while importing
module.exports = new TaskController();
