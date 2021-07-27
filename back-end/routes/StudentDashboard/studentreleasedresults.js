let express = require('express');
let router = express.Router();
studentreleasedresults = require('../../controllers/studentDashboard/studentreleasedresults');

router.post('/',studentreleasedresults.studentreleasedresults )

module.exports = router;