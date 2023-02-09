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
const proxiedURL = 'https://proxy-server-s589.onrender.com'
var url = proxiedURL + "?" + querystring.stringify(req.query);
console.log('images url',url)

logger.info('/api going to url', url);

request.get(url, function(err, response, img) {
    logger.info("response:", response.statusCode, response.headers['content-type']);
    if (!err && response.statusCode === 200) {
        res.writeHead(200, {
            'Content-Type': response.headers['content-type']
        });
        // response.pipe(res);  // not working
        res.writeHead(200, response.headers);
        res.end(img, 'binary');
    } else res.send("Error occurred:", err, "; status code: ", response.statusCode);
})
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
