let express = require('express');
let router = express.Router();
getEnrollRequest = require('../../controllers/Tenrollments/getEnrollRequest');

router.post('/',getEnrollRequest.getEnrollRequest )

module.exports = router;