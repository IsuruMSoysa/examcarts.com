let express = require('express');
let router = express.Router();
teacherLoginControl = require('../../controllers/login/teacher')

router.post('/', teacherLoginControl.createAccount)

module.exports = router;