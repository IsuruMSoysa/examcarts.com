let express = require('express');
let router = express.Router();
getallinstructors = require('../../controllers/Instructors/getallinstructors');

router.post('/', getallinstructors.getteacherrequests)

module.exports = router;