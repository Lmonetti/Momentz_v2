var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    "topic": [
    {name: 'Viasat-2', number: '182,687', url: "story-3"}, 
    {name: 'Haiti', number: '32,768', url: "story-4"}, 
    {name: 'School Shootings', number: '24,164', url: "story-5"}]});
});

module.exports = router;