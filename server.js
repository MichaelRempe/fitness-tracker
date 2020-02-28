//*******DEPENDENCIES*********************************************************************************//
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dbconfig = require("./app/db/config");

const docs = require("./app/models/index");

//*******APP-CONFIG***********************************************************************************//
const PORT = process.env.PORT ||8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  // locate static directory
app.use(express.static("./app/public"));

//*******ROUTES --> Router ***********************************************************************************//

// app.use('/api/activity', require('./app/routes/exercise'));
app.use("/api/exercise", require('./app/routes/exercise'));
app.use("/api/workout", require('./app/routes/workout'));
app.use("/api/activity?", require('./app/routes/activity'))


// STUDENTS: REGISTER ROUTES TO HANDLE WORKOUT AND EXERCISE API CALLS



//*******TEMPORARY SEEDS***********************************************************************************//
//clears database in development environment
docs.Workout.remove({}, (err, res)=>{
  if(err){console.log(err)}
  else{console.log(res)}
});
docs.Exercise.remove({}, (err, res)=>{
  if(err){console.log(err)}
  else(console.log(res))
});
docs.Activity.remove({}, (err, res)=>{
  if(err){console.log(err)}
  else{console.log(res)}
})

const exerciseSEED = [{name:"Bench Press"}, {name:"DB Bench"}, {name:"Pec Dec"}, {name:"Incline Bench"}, {name:"Military Press"}, {name:"Arnold Press"}, {name:"Lateral Flys"}, {name:"Rear-delt Flys"}, {name:"Yates Row"}, {name:"DB Row"}, {name:"Weighed Pull-ups"}, {name:"Shrugs"}, {name:"Lat Pull"}, {name:"Low-Bar Squat"}, {name:"Lunges"}, {name:"Quad Extensions"}, {name:"Calve Raises"}, {name:"Deadlift"}, {name:"Back Extension"}, {name:"Hamstring Curls"}, {name:"Band Extensions"}, {name:"Bicep Curl"}, {name:"Hammer Curl"}, {name:"Barbel Curl"},{name:"Tricep Extensions"}, {name:"Weighted Dips"}, {name:"Skull Crushers"}];
docs.Exercise.insertMany(exerciseSEED, function(err, res) {
  if(err){console.log(err)}
  else{console.log(res)}
});

//**********SYNC-DB***********************************************************************************//
//Connect DB and open server PORT
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoFitness", dbconfig.settings);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
