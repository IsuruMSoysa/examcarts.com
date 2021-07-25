let express = require('express');
let router = express.Router();
uploadanswers = require('../../controllers/Exam/uploadanswers')

// router.post('/', ( studentLoginControl.loginCheck));
router.post('/', uploadanswers.uploadanswers)

module.exports = router;