const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  exercise:{
    type:String
  },
  duration: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    trim: true,
  },
  reps:{
    type: String,
    trim: true,
  },
  sets:{
    type: String,
    trim: true,
  },
  distance:{
    type: String,
    trim: true,
  },

});

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;