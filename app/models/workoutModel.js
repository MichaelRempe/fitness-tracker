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
  
  const Exercise = mongoose.model("Exercise", ExerciseSchema);
  module.exports = Exercise;
  