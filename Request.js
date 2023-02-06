const request = require('request');
 
_EXTERNAL_URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCLNZCmP_Wkf6mg_E_QjFLb8V5DlYdTbag&cx=018358168972005499115:qievzugb09r&q';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
