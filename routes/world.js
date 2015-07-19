var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('world', {
      "topic": [
    {name: "Dan DeLuca's picks: Dr. John, Jones Family, Lana Del Rey, and more", source: 'BBC', date: '8:45am, July 19th, 2015', image: 'http://media.philly.com/images/600*523/20150719_inq_ddamixpick19z-a.JPG', url: 'http://www.philly.com/philly/columnists/dan_deluca/20150719_Dan_DeLuca_s_picks__Dr__John__Jones_Family__Lana_Del_Rey__and_more.html'}, 
    {name: 'Central Banks Take Back Global Market Spotlight', source: 'Wall Street Journal', date: '9:00pm, July 18th, 2015', image: 'http://si.wsj.net/public/resources/images/BN-JL117_ecbfed_J_20150717065727.jpg', url: 'http://www.wsj.com/articles/central-banks-take-back-global-market-spotlight-1437132967'}, 
    {name: 'Detroit Free Press See realtime coverage An Explanation of Medicaid and Its Expansion in Some States', source: 'ABC', date: '10:32am, July 17th, 2015', image: 'http://www.trbimg.com/img-55ab0993/turbine/la-2433476-me-adv-alzheimers-dispute-05-fo-jpg-20150718/900/900x506', url: 'http://abcnews.go.com/US/wireStory/explanation-medicaid-expansion-states-32548794'}],
    "new": [
    {name: "Silverman: Red Sox offense still on All-Star break", source: 'Boston Herald', date: 'Sunday, July 19, 2015', image: 'http://www.bostonherald.com/sites/default/files/styles/full/public/blog_posts/Red%20Sox%20Angels%20Baseba_Maho.jpg?itok=JLsStbyr&c=ef82434ef9c27e6ec54ea91c5833f1b2', url: 'http://www.bostonherald.com/sports/red_sox_mlb/clubhouse_insider/2015/07/silverman_red_sox_offense_still_on_all_star_break'}, 
    {name: 'US officials: No plan to compensate Israel with new weaponry', source: 'Ynet News', date: '19:10pm, July 19, 2015', image: 'http://images1.ynet.co.il/PicServer4/2015/05/16/6054263/605426209328100640360no.jpg', url: 'http://www.cbsnews.com/news/joseph-c-phillips-on-bill-cosby-and-character/'}]});
});

module.exports = router;