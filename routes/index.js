var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:{chainese:'小鹏的个人网站',english:'Welcome to littlepeng\'s Personal Website'}});
});
router.get('/chart', function(req, res, next){
	res.render('chart', {title: ''});
});
module.exports = router;
