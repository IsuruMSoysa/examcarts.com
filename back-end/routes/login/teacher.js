let express = require('express');
let router = express.Router();
teacherLoginControl = require('../../controllers/login/teacher')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', teacherLoginControl.loginCheck)

module.exports = router;