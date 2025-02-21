const express = require("express");
const connectDB = require("./DB/connectDB");
const app = express();
require("dotenv-safe").config();
const cors = require("cors");
const taskRoute = require("./routes/taskRoutes");
const logger = require("./configuration/logger");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/", taskRoute);

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI Variable is not defined in .env file");
    }
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      logger.info(`Server is running successfully at PORT ${PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start the Server", error.message);
    process.exit(1);
  }
};

process.on("uncaughtException", (err) => {
  logger.error("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  logger.error("unhandledRejection", err);
  process.exit(1);
});
start();
