var express = require('express');
var router = express.Router();
var getTopics = require('./services/jiajianTopics');
var getYanjianshoukuaiData = require('./services/getYanjianshoukuaiData');

router.get('/jiajian', function(req, res, next){
	res.render('jiajian', {title: '加减大师'});
});
router.get('/getJiajianData', function(req, res, next){
	res.send(getTopics());
});

router.get('/yanjianshoukuai', function(req, res, next){
	res.render('yanjianshoukuai', {title: '加减大师'});
});
router.get('/getYanjianshoukuaiData',function(req, res ,next){
	res.send(getYanjianshoukuaiData());
});

router.get('/plotting', function(req, res, next){
	res.render('plotting', {title: '公式作图'});
});

router.get('/musicPlayer', function(req, res, next){
	res.render('musicPlayer', {title: '小鹏音乐播放器'});
});

router.get('/echart', function(req, res, next){
	res.render('echart', {title: '数据可视化'});
});
module.exports = router;