var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('explore', {
    "topic": [
    {name: 'ViSat-2', number: '182,687', id: '3'}, 
    {name: 'Haiti', number: '32,768', id: '4'}, 
    {name: 'School Shootings', number: '24,164', id: '5'}]});
});

module.exports = router;