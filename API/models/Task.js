const mongoose = require("mongoose");

const taskModel = mongoose.Schema({
  title: {
    type: String,
    required: ["Title is required", true],
    trim: true,
  },
  description: {
    type: String,
    required: ["Add a Description", true],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date(),
  },
});

module.exports = mongoose.model("TODO", taskModel);
