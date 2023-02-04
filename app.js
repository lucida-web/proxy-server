const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const hostname = '0.0.0.0';
const port = 8000;
const http = require('http')

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
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
