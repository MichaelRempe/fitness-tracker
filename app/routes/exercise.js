const express = require('express')
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseCntrl.getAll);


module.exports = router