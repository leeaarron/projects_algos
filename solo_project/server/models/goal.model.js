const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Goal title is required"],
        minlength: [5, "Goal title must be at least 5 characters"],
    },
    type: {
        type: String,
        required: [true, "Goal type is required"],
        enum: ["Career", "Education", "Financial", "Health/Fitness", "Personal", "Leisure/Fun", "Other"],
    },
    completeDate: {
        type: String,
        //required: [true, "Projected completion date for goal is required"],
        //minlength: [3, "Pet description must be at least 3 characters"],
    },
    taskOne: {
        type: String,
        required: [true, "At least one goal task is required"],
        minlength: [5, "Goal task must be at least 5 characters"],
    },
    taskTwo: {
        type: String,
    },
    taskThree: {
        type: String,
    },
    taskFour: {
        type: String,
    },
    taskFive: {
        type: String,
    },
    
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;