let express = require('express');
let router = express.Router();
getallstudentclasses = require('../../controllers/studentDashboard/getallstudentclasses');

router.post('/', getallstudentclasses.getallstudentclasses)

module.exports = router;