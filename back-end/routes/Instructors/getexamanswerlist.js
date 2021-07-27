let express = require('express');
let router = express.Router();
getexamanswerlist = require('../../controllers/Instructor/getexamanswerlist');

router.post('/', getexamanswerlist.getexamanswerlist)

module.exports = router;