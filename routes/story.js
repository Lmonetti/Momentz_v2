var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('story', {
    "topic": [
    {source: 'BBC News'},
    {source: 'CNN News'},
    {source: 'Washington Post'}]});
});

module.exports = router;