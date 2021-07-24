let express = require('express');
let router = express.Router();
getTeacherInstructors = require('../../controllers/Teacher/getTeacherInstructors');

router.post('/',getTeacherInstructors.getTeacherInstructors )
router.post('/connected',getTeacherInstructors.getConTeacherInstructors )

module.exports = router;