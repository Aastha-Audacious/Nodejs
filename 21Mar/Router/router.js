const router = require('express').Router();
const signup = require('../Controller/controller');

router.get('/signup', signup);

module.exports = router;