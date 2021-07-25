let express = require('express');
let router = express.Router();
scheduleexam = require('../../controllers/Exam/scheduleexam')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', scheduleexam.scheduleexam)

module.exports = router;