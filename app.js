const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
// const hostname = '0.0.0.0';
const PORT = process.env.PORT || 3030;
const http = require('http')

http.createServer((req, res) => {
        if(req.url === "/"){
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
    console.log(`Server running at ${PORT}`);
  });

