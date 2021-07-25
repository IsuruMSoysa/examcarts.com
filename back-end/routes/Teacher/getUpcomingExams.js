let express = require('express');
let router = express.Router();
getUpcomingExams = require('../../controllers/Teacher/getUpcomingExams');

router.post('/',getUpcomingExams.getUpcomingExams )

module.exports = router;