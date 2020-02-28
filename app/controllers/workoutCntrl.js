// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Workout = require("../models/workoutModel.js");

const WorkoutCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all exercises is needed
  getAll(req, res){
    Workout.find({}).then(data => {
      res.json(data)
    });
  },
  //post workout to DB
  addOne({ body }, res){
    Workout.create(body, (err, workout)=>{
      if(err){console.log(err)}
      else(res.json(workout));
    })
  }
}

module.exports = WorkoutCntrl;