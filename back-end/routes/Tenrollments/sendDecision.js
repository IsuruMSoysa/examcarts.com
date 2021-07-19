let express = require('express');
let router = express.Router();
sendDecision = require('../../controllers/Tenrollments/sendDecision');

router.post('/',sendDecision.sendDecision )

module.exports = router;