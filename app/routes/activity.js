const express = require('express')
const router = express.Router()

const ActivityCntrl = require('../controllers/activityCntrl');


router.post('/', ActivityCntrl.addOne);


module.exports = router;