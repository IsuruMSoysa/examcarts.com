let express = require('express');
let router = express.Router();
getClassesControl = require('../../controllers/getClasses/getClasses');

router.post('/', getClassesControl.updateClass)

module.exports = router;