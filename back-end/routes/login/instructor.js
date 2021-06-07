let express = require('express');
let router = express.Router();
instructorControl = require('../../controllers/login/instructor')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', instructorControl.loginCheck)

module.exports = router;