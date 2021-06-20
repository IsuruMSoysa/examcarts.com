let express = require('express');
let router = express.Router();
getAllClassesControl = require('../../controllers/studentDashboard/getAllClasses');

router.post('/', getAllClassesControl.getAllClasses)

module.exports = router;