var express = require('express');
var littlepengXiaQi = require('./services/littlepengXiaQi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wuziqi', {title:"wuziqi"});
});
router.get('/lefttop', function(req, res, next) {
  res.render('wuziqiChildEjs/lefttop', {title:"lefttop"});
});
router.get('/leftbottom', function(req, res, next) {
  res.render('wuziqiChildEjs/leftbottom', {title:"leftbottom"});
});
router.get('/centertop', function(req, res, next) {
  res.render('wuziqiChildEjs/centertop', {title:"centertop"});
});
router.get('/centercenter', function(req, res, next) {
  res.render('wuziqiChildEjs/centercenter', {title:"centercenter"});
});
router.get('/centerbottom', function(req, res, next) {
  res.render('wuziqiChildEjs/centerbottom', {title:"centerbottom"});
});
router.get('/righttop', function(req, res, next) {
  res.render('wuziqiChildEjs/righttop', {title:"righttop"});
});
router.get('/rightcenter', function(req, res, next) {
  res.render('wuziqiChildEjs/rightcenter', {title:"rightcenter"});
});
router.get('/rightbottom', function(req, res, next) {
  res.render('wuziqiChildEjs/rightbottom', {title:"rightbottom"});
});
router.get('/xiaqi',function(req, res, next){
	res.json(littlepengXiaQi(req.query.qixingarray));
});
module.exports = router;