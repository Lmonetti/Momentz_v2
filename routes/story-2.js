var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('story-2', {
    "topic": [
    {source: {name:'Huffington Post', article: [{title:'It worked?', updated:'June the First'}, {title:'Happy fifth', updated:'June the Fifth'}]}},
    {source: {name:'NBC News', article: [{title:'Cats', updated:'4/19'}, {title:'World peace acheived', updated:'Everyday'}]}},
    {source: {name:'Washington Post', article: [{title:'Boat', updated:'Today'}, {title:'left and sideways', updated:'yesterday'}]}}]});
});

module.exports = router;