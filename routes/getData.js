var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.userAgent + '  ' + req.query.cid +'  ' + req.query.cname);
    res.send('success');
});

module.exports = router;
