const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const taskModel = require("./src/models/task.model");

dotenv.config();

const app = express();

connectToDatabase();

app.get("/tasks", async (req, res) => {
    const tasks = await taskModel.find({});
    res.status(200).send("Hello World");
});

app.listen(8000, () => console.log("listening on port 8000!"));
