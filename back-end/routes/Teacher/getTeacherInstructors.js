let express = require('express');
let router = express.Router();
getTeacherInstructors = require('../../controllers/Teacher/getTeacherInstructors');

router.post('/',getTeacherInstructors.getTeacherInstructors )

module.exports = router;