// const express = require('express');
// const request = require('request');
// const app = express();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
//   res.header ('Access-Control-Allow-Headers', 'Content-Type')
//   next();
// });
// app.get('/app', (req, res) => {
//   request(
//     { url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCwmKW7QYlbXXyWkccVee0-bX62qc1XJyk&cx=62cecb2eb67704263&"&q=" +query start="+start+"&searchType=image&imgSize=large";' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));


const express = require('express');
const request = require('request');

const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/api', (req, res) => {
//   request(
//     { url: 'www.google.com' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });


app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept');
     res.header('Access-Control-Allow-Credentials', true)
     res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header ('Access-Control-Allow-Headers', 'Content-Type')
  return next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
