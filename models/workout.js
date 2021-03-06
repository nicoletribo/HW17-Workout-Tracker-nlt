const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Date,
},
exercises: [
    {
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }
],
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;