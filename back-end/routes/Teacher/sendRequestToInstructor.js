let express = require('express');
let router = express.Router();
sendRequestToInstructor = require('../../controllers/Teacher/sendRequestToInstructor');

router.post('/',sendRequestToInstructor.sendRequestToInstructor )

module.exports = router;