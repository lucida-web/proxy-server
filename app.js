var express = require('express'); 
var request = require('request'); 
var app = express();
app.get('', function(req, res){ 
    request('https://www.googleapis.com/customsearch/v1?key=AIzaSyDV1joihnXLW7kB1V_rcYdJKBgvqjhZm4E&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans' , function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });
app.listen(3000); 
console.log('Server running on port %d', 3000);
