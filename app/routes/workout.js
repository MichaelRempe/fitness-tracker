const express = require('express')
const router = express.Router()

const WorkoutCntrl = require('../controllers/workoutCntrl');

router.get("/", WorkoutCntrl.getAll);
router.post("/", WorkoutCntrl.addOne);


module.exports = router;