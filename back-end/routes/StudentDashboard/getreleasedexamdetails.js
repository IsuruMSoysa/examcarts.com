let express = require('express');
let router = express.Router();
getreleasedexamdetails = require('../../controllers/studentDashboard/getreleasedexamdetails');

router.post('/',getreleasedexamdetails.getreleasedexamdetails )

module.exports = router;