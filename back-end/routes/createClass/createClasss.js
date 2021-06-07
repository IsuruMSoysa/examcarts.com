let express = require('express');
let router = express.Router();
createClassControl = require('../../controllers/createClass/createClass');

router.post('/', createClassControl.createClass)

module.exports = router;