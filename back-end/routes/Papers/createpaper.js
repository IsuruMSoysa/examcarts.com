let express = require('express');
let router = express.Router();
createpaper = require('../../controllers/createpaper/createpaper');

router.post('/',createpaper.createpaper )

module.exports = router;