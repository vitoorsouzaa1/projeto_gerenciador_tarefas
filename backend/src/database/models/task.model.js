const mongoose = require("mongoose");

const TaskSchema = moongose.Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const taskModel = moongose.model("Task", TaskSchema);

module.exports = taskModel;
