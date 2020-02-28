const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ActivitySchema = require("./activitiesModel");

const ExerciseSchema = new Schema({
  name: {
    type: String,
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
