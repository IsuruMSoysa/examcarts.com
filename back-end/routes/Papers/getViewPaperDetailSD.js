let express = require('express');
let router = express.Router();
getViewPaperDetailSD = require('../../controllers/createpaper/getViewPaperDetailSD');

router.post('/',getViewPaperDetailSD.getViewPaperDetailSD )

module.exports = router;