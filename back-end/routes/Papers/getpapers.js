let express = require('express');
let router = express.Router();
getpapers = require('../../controllers/createpaper/getpapers');

router.post('/',getpapers.getpapers )

module.exports = router;