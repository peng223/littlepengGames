var querystring = require('querystring');
var fs = require('fs');
var bufferhelper = require("bufferhelper");
const https = require("https");

function searchMusic(musicName){
    return new Promise((resolve, reject)=>{
        var post_data = {
          input: musicName,
          filter:'name',
          type:'kugou',
          page:1
        }
        var contents = querystring.stringify(post_data);
        var options = {
            hostname: "music.liuzhijin.cn",
            port: 443, //443
            path: "/?"+contents,
            method: "POST",
            rejectUnauthorized: false,
            headers: {
                Accept: "application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9",
                Connection: "keep-alive",
                Host: "www.test.com",
                "content-length": contents.length,
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                cookie: "Hm_lvt_50027a9c88cdde04a70f5272a88a10fa=1569123594,1569131277; Hm_lpvt_50027a9c88cdde04a70f5272a88a10fa=1569131818",
                "origin":"https://music.liuzhijin.cn",
                "referer":"https://music.liuzhijin.cn/?name=%E5%BF%83%E6%B7%A1&type=kugou",
                "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
                "x-requested-with":"XMLHttpRequest"
            },

        };
        var dataJson = {name:'wwee'};
        var req = https.request(options, function (res) {
            res.setEncoding('utf-8');
            //var databuffer = new bufferhelper();
            var data = "";
            res.on('data', function (chunk) { 
                data += chunk;  
            }); 
            res.on('end', function(){
                var dataJson = JSON.parse(data);
                resolve(dataJson);
                console.log(dataJson.code);
                // databuffer.concat(data);
                // var con = databuffer.toBuffer();
                // fs.writeFileSync('public/userData/music.txt', con, function (err) {
                //     if (err) console.error(err);
                // });
            });
        });
        req.write(contents);
        req.on("error", function (e) {
            console.error("====================================================" + e);
        });
        req.end();
    });
}

result = '';
searchMusic('心淡').then(function(req){
    result = req;
})
console.log('asas');
console.log(result);
