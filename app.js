const express = require('express');
const request = require('request');
const app = express();
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
     res.header('Access-Control-Allow-Credentials', true)
     res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
     res.header ('Access-Control-Allow-Headers', 'Content-Type','application/x-www-form-urlencoded')
  return next();
});
// String key="AIzaSyCpUz4HW_dBfwtOvnCzZsLaK0bncUOu78Y";
// String qry="queries";
// String cx = "018358168972005499115:qievzugb09r";

// app.get('/', function(req, res){ 
//   request('https://www.googleapis.com/customsearch/v1?key=AIzaSyCpUz4HW_dBfwtOvnCzZsLaK0bncUOu78Y&cx=018358168972005499115:qievzugb09r&q=sun&alt=json&queriefields=queries(request(totalResults))"', function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
//       console.log(body); 
//       res.send(body); 
//     } 
//    }); 
// });

app.get('/', function(req, res){ 
  request('https://www.googleapis.com/customsearch/v1?key=AIzaSyCpUz4HW_dBfwtOvnCzZsLaK0bncUOu78Y&cx=018358168972005499115:qievzugb09r&q=sun&start=1&searchType=image&imgSize=large&imgColorType=trans', function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      console.log(body); 
      res.send(body); 
    } 
   }); 
});

// app.get('/', function(req, res){ 
//   request('https://www.googleapis.com/customsearch/v1?q={searchTerms}&alt=json', function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
//       console.log(body); 
//       res.send(body); 
//     } 
//    }); 
// });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
