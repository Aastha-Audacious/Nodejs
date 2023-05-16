const express = require('express');
const router = express.Router();

const empController = require('../controller/emp-controller');

router.get('/', empController.index);
router.post('/show', empController.show);
router.post('/store', empController.store);
router.post('/update', empController.update);
router.post('/delete', empController.remove);

module.exports = router