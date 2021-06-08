let express = require('express');
let router = express.Router();
studentLoginControl = require('../../controllers/login/student')

router.post('/', studentLoginControl.createAccount)

module.exports = router;