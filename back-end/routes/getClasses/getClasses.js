let express = require('express');
let router = express.Router();
getClassesControl = require('../../controllers/getClasses/getClasses');

router.post('/', getClassesControl.getClasses)

module.exports = router;