var express = require('express');
var router = express.Router();

JSON.parse(http://172.24.0.36:55555/getLinks?tid=3);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('story', {
    "topic": [
    {source: {name:'Huffington Post', article: [{title:'Happy birthday', updated:'June the First'}, {title:'Happy fifth', updated:'June the Fifth'}]}},
    {source: {name:'NBC News', article: [{title:'Cats', updated:'4/19'}, {title:'World peace acheived', updated:'Everyday'}]}},
    {source: {name:'Washington Post', article: [{title:'Boat', updated:'Today'}, {title:'left and sideways', updated:'yesterday'}]}}]});
});

module.exports = router;