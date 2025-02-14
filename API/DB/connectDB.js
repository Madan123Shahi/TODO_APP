const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose.connect(URI);
  console.log("Connected to Database Successfully");
};

module.exports = connectDB;
