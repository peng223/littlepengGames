var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:{chainese:'小鹏的个人网站',english:'Welcome to littlepeng\'s Personal Website'}});
});
router.get('/chart', function(req, res, next){
	res.render('chart', {title: ''});
});
router.get('/toMin', function(req, res, next){
	res.render('toMin', {title: '迷之转换'});
});
router.get('/TOU', function(req, res, next){
	res.render('love', {title: '贪吃蛇'});
});
module.exports = router;
