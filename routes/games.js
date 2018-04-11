var express = require('express');
var router = express.Router();
var getTopics = require('./services/jiajianTopics');

router.get('/jiajian', function(req, res, next){
	res.render('jiajian', {title: '加减大师'});
});
router.get('/getJiajianData', function(req, res, next){
	res.send(getTopics());
});

module.exports = router;