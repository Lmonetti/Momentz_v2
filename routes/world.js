var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('world', {
      "topic": [
    {name: "State GOP worries that Trump's trash talk could hurt its image", source: 'BBC', date: '8:45am, July 19th, 2015'}, 
    {name: 'NY Times report: Cosby admitted pursuing younger women in deposition', source: 'CNN', date: '9:00pm, July 18th, 2015'}, 
    {name: 'Detroit Free PressSee realtime coverage An Explanation of Medicaid and Its Expansion in Some States', source: 'Fox', date: '10:32am, July 17th, 2015'}]});
});

module.exports = router;