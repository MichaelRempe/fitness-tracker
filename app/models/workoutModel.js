const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter the name of this workout"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  module.exports = Workout;
  