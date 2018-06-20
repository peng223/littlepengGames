var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var co = require('co');
var bufferhelper = require("bufferhelper");
var url = 'http://kdjw.hnust.cn/kdjw/uploadfile/studentphoto/pic/';
var result = false,filename;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/studentPhoto',function(req, res ,next){
	res.render('studentPhoto', {title: '湖南科技大学学生照片'});
})

router.get('/getPhoto',function(req, res ,next){
	filename = req.query.xuehao + '.JPG';
	http.get(url + filename,function(res){
		var databuffer = new bufferhelper();
		res.on('data',function(data){
			databuffer.concat(data);
		})
		res.on('end',function(){
			var con = databuffer.toBuffer();
			if(/您请求的页面不存在/i.test(con)){
				result = false;
			}else{
				fs.writeFileSync('public/userData/studentPhoto/'+filename, con, function (err) {
		  			if (err) console.error(err);
				});
				result = true;
			}
		})
	}).on('error',function(data){
		result = false;
	})
	res.send(result);
})

module.exports = router;
