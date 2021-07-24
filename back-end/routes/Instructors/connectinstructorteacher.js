let express = require('express');
let router = express.Router();
connectinstructorteacher = require('../../controllers/Instructor/connectinstructorteacher');

router.post('/', connectinstructorteacher.connectinstructorteacher)

module.exports = router;