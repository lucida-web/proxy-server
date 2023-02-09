const express = require('express');
const request = require('request');
const app = express();
var cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
     res.header('Access-Control-Allow-Credentials', true)
     res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
     //res.setheader ('Access-Control-Allow-Headers', 'Content-Type', 'application/json')
     res.setHeader('Content-Type', 'application/json');
//      res.setHeader('Content-Type', 'image/png');
//      res.send(JSON.stringify(req.body));
     
  return next();
});
// String key="AIzaSyCpUz4HW_dBfwtOvnCzZsLaK0bncUOu78Y";
// String qry="queries";
// String cx = "018358168972005499115:qievzugb09r";

// app.get('/', function(req, res){ 
//   request('https://www.googleapis.com/customsearch/v1?key=AIzaSyCCBcF4NNB9nQcwXJogsXAudlNvlYO1-8o&cx=018358168972005499115:qievzugb09r&q=" +query +"&callback=hndlr', function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
//       console.log(body); 
//         res.send(body); 
//        //res.send(JSON.stringify(req.body));
//     } 
//    }); 
// });


app.get('/', function(req, res) {
    var url = proxiedURL +"?" + querystring.stringify(req.query);
    logger.info('/', URL); 
    fetch(url).then(actual => {
       actual.headers.forEach((v, n) => res.setHeader(n, v));
       actual.body.pipe(res);
    });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
