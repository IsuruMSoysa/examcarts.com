let express = require('express');
let router = express.Router();
uploadmarking = require('../../controllers/createpaper/uploadmarking');

router.post('/',uploadmarking.uploadmarking )

module.exports = router;