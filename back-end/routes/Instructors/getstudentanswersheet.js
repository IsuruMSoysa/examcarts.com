let express = require('express');
let router = express.Router();
getexamanswerlist = require('../../controllers/Instructor/getexamanswerlist');

router.post('/', getexamanswerlist.getstudentanswersheet)

module.exports = router;