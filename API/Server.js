const express = require("express");
const connectDB = require("./DB/connectDB");
const app = express();
require("dotenv-safe").config();
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI Variable is not defined in .env file");
    }
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running successfully at PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the Server", error.message);
    process.exit(1);
  }
};

process.on("uncaughtException", (err) => {
  console.error("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection", err);
  process.exit(1);
});
start();
