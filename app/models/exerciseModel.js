const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    required:true,
    enum: ["Bench Press", "DB Bench", "Pec Dec", "Incline Bench", "Military Press", "Arnold Press",
    "Lateral Flys", "Rear-delt Flys", "Yates Row", "DB Row", "Weighed Pull-ups", "Shrugs", "Lat Pull",
    "Low-Bar Squat", "Lunges", "Quad Extensions", "Calve Raises", "Deadlift", "Back Extension", "Hamstring Curls", "Band Extensions", "Bicep Curl","Hammer Curl", "Barbel Curl", "Tricep Extensions", "Weighted Dips", "Skull Crushers" ]
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;
