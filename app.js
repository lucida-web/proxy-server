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

app.get('/', (request, response) => {
  response.json([
    { id: 546, username: 'John' },
    { id: 894, username: 'Mary' },
    { id: 326, username: 'Jane' }
  ]);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
