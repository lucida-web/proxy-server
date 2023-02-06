const request = require('request');
 
_EXTERNAL_URL = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCsECJAADGD61ihtTGrCxynnr2hoQL87Bk&cx=018358168972005499115:qievzugb09r&q=children%20enjoy%20stories%20%20%20%20&start=1&searchType=image&imgSize=large&imgColorType=trans';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
