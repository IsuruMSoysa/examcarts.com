let express = require('express');
let router = express.Router();
getEnrollments = require('../../controllers/Tenrollments/getenrollments');

router.post('/',getEnrollments.getEnrollments )

module.exports = router;