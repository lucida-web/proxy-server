var express = require('express'),
    request = require('request');

var app = express();  

// Forward all requests from /api to http://foo.com/api
app.use('https://www.googleapis.com/customsearch/v1?key=AIzaSyDV1joihnXLW7kB1V_rcYdJKBgvqjhZm4E&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans', function(req, res) {
  req.pipe(request("http://foo.com/api" + req.url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
