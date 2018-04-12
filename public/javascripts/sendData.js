//http://ipinfo.io/json
//http://pv.sohu.com/cityjson?ie=utf-8
$.ajax({
        method: 'GET',
        url: '/getData',
        data: {
            userAgent: navigator.userAgent,
            cip: returnCitySN["cip"],
            cid: returnCitySN["cid"],
            cname: returnCitySN["cname"]
        },
        success: function(data) {
            //alert(data);
        }
});