const express = require('express')
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

router.get("/", ExerciseCntrl.getAll);
router.post("/", ExerciseCntrl.addOne);


module.exports = router;