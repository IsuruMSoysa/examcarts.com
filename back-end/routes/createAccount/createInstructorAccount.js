let express = require('express');
let router = express.Router();
instructorLoginControl = require('../../controllers/login/instructor')

router.post('/', instructorLoginControl.createAccount)

module.exports = router;