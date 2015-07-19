var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('explore', {"topic": ['Caitlyn Jenner', 'Viasat', 'Same-Sex Marriage', 'What is going on', 'Running out of topic']});
});

module.exports = router;