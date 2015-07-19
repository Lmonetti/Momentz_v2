var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('explore', {
    "topic": [
    {name: 'Caitlyn Jenner', number: '182,687'}, 
    {name: 'Viasat', number: '32,768'}, 
    {name: 'Same-Sex Marriage', number: '24,164'}, 
    {name: 'What is going on', number: '6,842'}, 
    {name: 'Running out of topic', number: '183'}]});
});

module.exports = router;