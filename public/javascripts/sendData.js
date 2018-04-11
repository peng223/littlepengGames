//http://ipinfo.io/json
//http://pv.sohu.com/cityjson?ie=utf-8
$.ajax({
        method: 'GET',
        url: '/getData',
        data: {
            userAgent: navigator.userAgent,
            cid: returnCitySN["cip"],
            cname: returnCitySN["cname"]
        },
        success: function(data) {
            //alert(data);
        }
});