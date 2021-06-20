let express = require('express');
let router = express.Router();
setEnrollClass = require('../../controllers/studentDashboard/enrollclass');

router.post('/', setEnrollClass.enrollclass)

module.exports = router;