let express = require('express');
let router = express.Router();
pushfinalmarks = require('../../controllers/Instructors/pushfinalmarks');

router.post('/', pushfinalmarks.pushfinalmarks)

module.exports = router;