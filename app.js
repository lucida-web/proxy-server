
const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')
const PORT = process.env.PORT || 3030;
http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        
        // res.end();
}).listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
// =======
// var express = require('express'); 
// var request = require('request'); 
// var app = express();
// const PORT = process.env.PORT || 3030;
// app.get('/', function(req, res){ 
//     request('https://www.googleapis.com/customsearch/v1?key=AIzaSyCLNZCmP_Wkf6mg_E_QjFLb8V5DlYdTbag&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans' , function (error, response, body) { 
//       if (!error && response.statusCode === 200) { 
//         console.log(body); 
//         res.send(body); 
//       } 
//      }); 
//   });
// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });
// >>>>>>> c60e140c40263da6af05283c8735d8b38d9a14d8
