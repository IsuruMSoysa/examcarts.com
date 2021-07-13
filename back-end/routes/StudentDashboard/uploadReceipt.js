let express = require('express');
let router = express.Router();
uploadReceipt = require('../../controllers/studentDashboard/uploadReceipt');

router.post('/upload',uploadReceipt.uploadReceipt )

module.exports = router;