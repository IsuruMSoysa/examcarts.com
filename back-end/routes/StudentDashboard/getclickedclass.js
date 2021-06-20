let express = require('express');
let router = express.Router();
getClickedClasseControl = require('../../controllers/studentDashboard/getClickedClassesControl');

router.post('/', getClickedClasseControl.clickedClass)

module.exports = router;