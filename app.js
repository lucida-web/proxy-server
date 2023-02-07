
// const apiCallFromRequest = require('./Request')
// const apiCallFromNode = require('./NodeJsCall')

// const http = require('http')
// // const PORT = process.env.PORT || 3030;
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// http.createServer((req, res) => {
//         if(req.url === "/request"){
//             apiCallFromRequest.callApi(function(response){
//                 //console.log(JSON.stringify(response));
//                 res.write(JSON.stringify(response));
//                 res.end();
//             });
//         }
//         else if(req.url === "/node"){
//             apiCallFromNode.callApi(function(response){
//                 res.write(response);
//                 res.end();
//             });
//         }
        
//         // res.end();
        
// })
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

//{ url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCLNZCmP_Wkf6mg_E_QjFLb8V5DlYdTbag&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans' },

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
//   res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/app', (req, res) => {
  request(
    { url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCwmKW7QYlbXXyWkccVee0-bX62qc1XJyk&cx=018358168972005499115:qievzugb09&start="+start+"&q=" +query +"&callback=hndlr' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
