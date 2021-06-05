let express = require('express');
let router = express.Router();
studentLoginControl = require('../../controllers/login/student')
const loginDataArr = require('../../model/login/Students')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', studentLoginControl.loginCheck)

module.exports = router;