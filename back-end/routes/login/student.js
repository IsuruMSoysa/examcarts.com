let express = require('express');
let router = express.Router();
studentLoginControl = require('../../controllers/login/student')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', studentLoginControl.loginCheck)

module.exports = router;