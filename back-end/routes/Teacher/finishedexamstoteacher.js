let express = require('express');
let router = express.Router();
finishedexams = require('../../controllers/Instructors/finishedexams');

router.post('/',finishedexams.finishedexamstoteacher )

module.exports = router;