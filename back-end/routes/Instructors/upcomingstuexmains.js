let express = require('express');
let router = express.Router();
upcomingstuexmains = require('../../controllers/Instructor/upcomingstuexmains');

router.post('/', upcomingstuexmains.upcomingstuexmains)

module.exports = router;