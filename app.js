var express = require('express'); 
var request = require('request'); 
var app = express();
const PORT = process.env.PORT || 3030;
app.get('/', function(req, res){ 
    request('https://www.googleapis.com/customsearch/v1?key=AIzaSyCLNZCmP_Wkf6mg_E_QjFLb8V5DlYdTbag&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans' , function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
