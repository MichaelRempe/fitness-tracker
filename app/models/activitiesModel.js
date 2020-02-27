const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an exercise type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
  }
});

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;