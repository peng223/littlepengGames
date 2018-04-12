var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('-------------------');
	var userData = req.query.userAgent + ' \r\n' + req.query.cid + '  ' + req.query.cip + '  ' + req.query.cname + '\r\n';
	console.log(userData);
	console.log('-------------------');
	fs.appendFile('public/userData/input.txt', userData, function (err) {
	    if (err) console.error(err);
	    console.log('数据写入成功');
	    console.log('-------------------');
	});
    res.send('success');
});

module.exports = router;
