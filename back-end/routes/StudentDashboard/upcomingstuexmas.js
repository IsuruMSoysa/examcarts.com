let express = require('express');
let router = express.Router();
upcomingstuexmas = require('../../controllers/studentDashboard/upcomingstuexmas');

router.post('/',upcomingstuexmas.upcomingstuexmas )

module.exports = router;