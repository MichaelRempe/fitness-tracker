// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/activitiesModel.js");
const Workout = require("../models/workoutModel.js");

const ActivityCntrl = {
  //create new activity, send new activity id to workout activity array using workoutID
  addOne(req, res) {
    Activity.create(req.body)
      .then(({ _id }) => {
        Workout.findOneAndUpdate(
          { id: req.params._id },
          { $push: { activities: _id } },
          { new: true }
        );
      }).then(pushedActivity => {
        res.json(pushedActivity);
      }).catch(err => {
        res.json(err);
      });
  }
};

module.exports = ActivityCntrl;
