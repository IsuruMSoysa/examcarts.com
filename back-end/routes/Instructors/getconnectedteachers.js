let express = require('express');
let router = express.Router();
getconnectedteachers = require('../../controllers/Instructors/getconnectedteachers');

router.post('/', getconnectedteachers.getconnectedteachers)

module.exports = router;