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


const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    axios.get('https://www.google.com/search&"&q=" +query')
    // axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyCLNZCmP_Wkf6mg_E_QjFLb8V5DlYdTbag&cx=018358168972005499115:qievzugb09r&"&q=" +query')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
