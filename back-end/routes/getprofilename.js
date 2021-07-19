let express = require('express');
let router = express.Router();
getprofilename = require('../controllers/getprofilename');

router.post('/',getprofilename.getprofilename )

module.exports = router;