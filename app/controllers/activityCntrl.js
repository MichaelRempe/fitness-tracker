// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/activitiesModel.js");

const ActivityCntrl = {
  getAll(req, res){
    Exercise.find({}).then(data => {
      console.log(data);
      res.json(data)
    });
  }
}

module.exports = ActivityCntrl;