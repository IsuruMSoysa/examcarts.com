let express = require('express');
let router = express.Router();
viewClassDetails = require('../../controllers/studentDashboard/viewClassDetails');

router.post('/', viewClassDetails.getDetails)

module.exports = router;