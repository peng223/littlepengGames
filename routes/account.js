var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
	res.render('account', {title: '算账系统'});
});
module.exports = router;