var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.all('/*/', function(req, res, next) {
  res.send({message: "Oops! This page is not available."});
});

module.exports = router;
