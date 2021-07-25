let express = require('express');
let router = express.Router();
getexampaperdetails = require('../../controllers/studentDashboard/getexampaperdetails');

router.post('/', getexampaperdetails.getexampaperdetails)

module.exports = router;