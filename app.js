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
    // API callback
queryParamList({
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [
      {
        "title": "Google Custom Search - \"  query  \"",
        "totalResults": "1160000000",
        "searchTerms": "\"  query  \"",
        "count": 10,
        "startIndex": 1,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "018358168972005499115:qievzugb09r"
      }
    ],
    "nextPage": [
      {
        "title": "Google Custom Search - \"  query  \"",
        "totalResults": "1160000000",
        "searchTerms": "\"  query  \"",
        "count": 10,
        "startIndex": 11,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "018358168972005499115:qievzugb09r"
      }
    ]
  },
  "context": {
    "title": "Google"
  },
  "searchInformation": {
    "searchTime": 0.201025,
    "formattedSearchTime": "0.20",
    "totalResults": "1160000000",
    "formattedTotalResults": "1,160,000,000"
  },
  "items": [
    {
      "kind": "customsearch#result",
      "title": "Query Definition & Meaning - Merriam-Webster",
      "htmlTitle": "\u003cb\u003eQuery\u003c/b\u003e Definition &amp; Meaning - Merriam-Webster",
      "link": "https://www.merriam-webster.com/dictionary/query",
      "displayLink": "www.merriam-webster.com",
      "snippet": "Jan 17, 2023 ... query implies a desire for authoritative information or confirmation. queried a librarian about the book. inquire implies a searching for ...",
      "htmlSnippet": "Jan 17, 2023 \u003cb\u003e...\u003c/b\u003e \u003cb\u003equery\u003c/b\u003e implies a desire for authoritative information or confirmation. \u003cb\u003equeried\u003c/b\u003e a librarian about the book. inquire implies a searching for&nbsp;...",
      "cacheId": "lVyjS7K9lloJ",
      "formattedUrl": "https://www.merriam-webster.com/dictionary/query",
      "htmlFormattedUrl": "https://www.merriam-webster.com/dictionary/\u003cb\u003equery\u003c/b\u003e",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKksTSKYwpW8It403nrjw5t1_a8pLO2PI6ImEG7uvFrNfacgiziPZgG-_O",
            "width": "225",
            "height": "225"
          }
        ],
        "metatags": [
          {
            "msapplication-tilecolor": "#2b5797",
            "og:image": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
            "twitter:title": "Definition of QUERY",
            "twitter:card": "summary",
            "theme-color": "#ffffff",
            "twitter:url": "https://www.merriam-webster.com/dictionary/query",
            "og:title": "Definition of QUERY",
            "twitter:aria-text": "Share the Definition of query on Twitter",
            "og:aria-text": "Post the Definition of query to Facebook",
            "og:description": "question, inquiry; a question in the mind : doubt; question mark… See the full definition",
            "twitter:image": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
            "referrer": "unsafe-url",
            "fb:app_id": "178450008855735",
            "twitter:site": "@MerriamWebster",
            "viewport": "width=device-width, initial-scale=1.0",
            "twitter:description": "question, inquiry; a question in the mind : doubt; question mark… See the full definition",
            "og:url": "https://www.merriam-webster.com/dictionary/query"
          }
        ],
        "cse_image": [
          {
            "src": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "QUERY function - Google Docs Editors Help",
      "htmlTitle": "\u003cb\u003eQUERY\u003c/b\u003e function - Google Docs Editors Help",
      "link": "https://support.google.com/docs/answer/3093343?hl=en",
      "displayLink": "support.google.com",
      "snippet": "Runs a Google Visualization API Query Language query across data. Sample Usage QUERY(A2:E6,\"select avg(A) pivot B\") QUERY(A2:E6,F2,FALSE) Syntax QUERY(data, ...",
      "htmlSnippet": "Runs a Google Visualization API \u003cb\u003eQuery\u003c/b\u003e Language \u003cb\u003equery\u003c/b\u003e across data. Sample Usage \u003cb\u003eQUERY\u003c/b\u003e(A2:E6,&quot;select avg(A) pivot B&quot;) \u003cb\u003eQUERY\u003c/b\u003e(A2:E6,F2,FALSE) Syntax \u003cb\u003eQUERY\u003c/b\u003e(data,&nbsp;...",
      "cacheId": "d8TGVr9XoxQJ",
      "formattedUrl": "https://support.google.com/docs/answer/3093343?hl=en",
      "htmlFormattedUrl": "https://support.google.com/docs/answer/3093343?hl=en",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=3,user-scalable=yes",
            "format-detection": "email=no"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "What is a query? Explore database queries and more",
      "htmlTitle": "What is a \u003cb\u003equery\u003c/b\u003e? Explore database \u003cb\u003equeries\u003c/b\u003e and more",
      "link": "https://www.techtarget.com/searchdatamanagement/definition/query",
      "displayLink": "www.techtarget.com",
      "snippet": "Query languages are used to make queries in a database, and Microsoft Structured Query Language (SQL) is the standard. Note: SQL and MySQL are not the same, as ...",
      "htmlSnippet": "\u003cb\u003eQuery\u003c/b\u003e languages are used to make \u003cb\u003equeries\u003c/b\u003e in a database, and Microsoft Structured \u003cb\u003eQuery\u003c/b\u003e Language (SQL) is the standard. Note: SQL and MySQL are not the same, as&nbsp;...",
      "formattedUrl": "https://www.techtarget.com/searchdatamanagement/definition/query",
      "htmlFormattedUrl": "https://www.techtarget.com/searchdatamanagement/definition/\u003cb\u003equery\u003c/b\u003e",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvMB4nwG9hQHW8ohR69o2GlS7JtQjngijuizY4-i5UOGo4Yt7liaICWKo",
            "width": "308",
            "height": "163"
          }
        ],
        "metatags": [
          {
            "og:image": "https://cdn.ttgtmedia.com/ITKE/images/logos/TTlogo-379x201.png",
            "og:type": "article",
            "twitter:card": "summary_large_image",
            "twitter:title": "What is a query? Explore database queries and more",
            "og:site_name": "Data Management",
            "og:title": "What is a query? Explore database queries and more",
            "og:description": "Learn about database queries -- formal requests for data -- how they work, the difference between SQL and NOSQL, query folding, web queries and more.",
            "article:publisher": "https://www.facebook.com/TechTargetBusinessTechnology",
            "twitter:image": "https://cdn.ttgtmedia.com/ITKE/images/logos/TTlogo-379x201.png",
            "fb:app_id": "870327132989388",
            "twitter:site": "@TTBusinessTech",
            "viewport": "width=device-width,initial-scale=1",
            "twitter:description": "Learn about database queries -- formal requests for data -- how they work, the difference between SQL and NOSQL, query folding, web queries and more.",
            "og:locale": "en_US",
            "og:url": "https://www.techtarget.com/searchdatamanagement/definition/query"
          }
        ],
        "cse_image": [
          {
            "src": "https://cdn.ttgtmedia.com/ITKE/images/logos/TTlogo-379x201.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Query - Amazon DynamoDB",
      "htmlTitle": "\u003cb\u003eQuery\u003c/b\u003e - Amazon DynamoDB",
      "link": "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html",
      "displayLink": "docs.aws.amazon.com",
      "snippet": "For additional information on how to use the Query API, please see Working with Queries .",
      "htmlSnippet": "For additional information on how to use the \u003cb\u003eQuery\u003c/b\u003e API, please see Working with \u003cb\u003eQueries\u003c/b\u003e .",
      "cacheId": "DRBAwCDXekQJ",
      "formattedUrl": "https://docs.aws.amazon.com/amazondynamodb/latest/.../API_Query.html",
      "htmlFormattedUrl": "https://docs.aws.amazon.com/amazondynamodb/latest/.../API_\u003cb\u003eQuery\u003c/b\u003e.html",
      "pagemap": {
        "metatags": [
          {
            "product": "Amazon DynamoDB",
            "assets_root": "/assets",
            "default_state": "API_Query",
            "abstract": "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.",
            "this_doc_guide": "API Reference",
            "feedback-yes": "feedbackyes.html?topic_url=http://docs.aws.amazon.com/en_us/amazondynamodb/latest/APIReference/API_Query.html",
            "feedback": "https://docs.aws.amazon.com/forms/aws-doc-feedback?hidden_service_name=DynamoDB&topic_url=http://docs.aws.amazon.com/en_us/amazondynamodb/latest/APIReference/API_Query.html",
            "deployment_region": "IAD",
            "forums": "http://forums.aws.amazon.com/forum.jspa?forumID=131",
            "feedback-no": "feedbackno.html?topic_url=http://docs.aws.amazon.com/en_us/amazondynamodb/latest/APIReference/API_Query.html",
            "pdf": "/pdfs/amazondynamodb/latest/APIReference/dynamodb-api.pdf#API_Query",
            "guide-locale": "en_us",
            "viewport": "width=device-width,initial-scale=1",
            "target_state": "API_Query",
            "this_doc_product": "Amazon DynamoDB",
            "tocs": "toc-contents.json",
            "guide": "API Reference",
            "feedback-item": "DynamoDB"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "pandas.DataFrame.query — pandas 1.5.3 documentation",
      "htmlTitle": "pandas.DataFrame.\u003cb\u003equery\u003c/b\u003e — pandas 1.5.3 documentation",
      "link": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.query.html",
      "displayLink": "pandas.pydata.org",
      "snippet": "Query the columns of a DataFrame with a boolean expression. Parameters. exprstr. The query string to evaluate. You can refer to variables in the environment by ...",
      "htmlSnippet": "\u003cb\u003eQuery\u003c/b\u003e the columns of a DataFrame with a boolean expression. Parameters. exprstr. The \u003cb\u003equery\u003c/b\u003e string to evaluate. You can refer to variables in the environment by&nbsp;...",
      "cacheId": "e7saXFqZ_vMJ",
      "formattedUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.query.html",
      "htmlFormattedUrl": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.\u003cb\u003equery\u003c/b\u003e.html",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdFY74CrFYH4q8IaaLpPSu1yhvbEPbrQi1ULUohtW7B6Qdesd4gyCScH_F",
            "width": "353",
            "height": "143"
          }
        ],
        "metatags": [
          {
            "viewport": "width=device-width, initial-scale=1.0",
            "docsearch:language": "en"
          }
        ],
        "cse_image": [
          {
            "src": "https://pandas.pydata.org/static/img/pandas_white.svg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Query Language Reference (Version 0.7) | Charts | Google ...",
      "htmlTitle": "\u003cb\u003eQuery\u003c/b\u003e Language Reference (Version 0.7) | Charts | Google ...",
      "link": "https://developers.google.com/chart/interactive/docs/querylanguage",
      "displayLink": "developers.google.com",
      "snippet": "Dec 7, 2022 ... The Google Visualization API Query Language lets you perform various data manipulations with the query to the data source.",
      "htmlSnippet": "Dec 7, 2022 \u003cb\u003e...\u003c/b\u003e The Google Visualization API \u003cb\u003eQuery\u003c/b\u003e Language lets you perform various data manipulations with the \u003cb\u003equery\u003c/b\u003e to the data source.",
      "cacheId": "cawxmuWqHWMJ",
      "formattedUrl": "https://developers.google.com/chart/interactive/docs/querylanguage",
      "htmlFormattedUrl": "https://developers.google.com/chart/interactive/docs/\u003cb\u003equery\u003c/b\u003elanguage",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwkg5UMM_c_yQWW12GyHKEZKV_59RxXyUW7BJz_gOa_4WJ-fFBLuN7q_G5",
            "width": "310",
            "height": "163"
          }
        ],
        "document": [
          {
            "keywords": "E__product__Charts K__product__Charts",
            "keyword": "E__product__Charts"
          }
        ],
        "metatags": [
          {
            "og:image": "https://www.gstatic.com/devrel-devsite/prod/v1cfe30952218fac985c78c6c0da0de11fade09219719e8a9dbc367e6d5d7cee9/developers/images/opengraph/google-blue.png",
            "og:type": "website",
            "theme-color": "#1a73e8",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "google-signin-client-id": "721724668570-nbkv1cfusk7kk4eni4pjvepaus73b13t.apps.googleusercontent.com",
            "og:site_name": "Google Developers",
            "og:title": "Query Language Reference (Version 0.7)  |  Charts  |  Google Developers",
            "og:image:height": "675",
            "viewport": "width=device-width, initial-scale=1",
            "og:locale": "en",
            "google-signin-scope": "profile email https://www.googleapis.com/auth/developerprofiles https://www.googleapis.com/auth/developerprofiles.award",
            "og:url": "https://developers.google.com/chart/interactive/docs/querylanguage"
          }
        ],
        "cse_image": [
          {
            "src": "https://www.gstatic.com/devrel-devsite/prod/v1cfe30952218fac985c78c6c0da0de11fade09219719e8a9dbc367e6d5d7cee9/developers/images/opengraph/google-blue.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Query and Projection Operators — MongoDB Manual",
      "htmlTitle": "\u003cb\u003eQuery\u003c/b\u003e and Projection Operators — MongoDB Manual",
      "link": "https://www.mongodb.com/docs/manual/reference/operator/query/",
      "displayLink": "www.mongodb.com",
      "snippet": "Query Selectors; Projection Operators; Miscellaneous Operators ... Joins query clauses with a logical AND returns all documents that match the conditions of ...",
      "htmlSnippet": "\u003cb\u003eQuery\u003c/b\u003e Selectors; Projection Operators; Miscellaneous Operators ... Joins \u003cb\u003equery\u003c/b\u003e clauses with a logical AND returns all documents that match the conditions of&nbsp;...",
      "cacheId": "AYUf1LG3U5cJ",
      "formattedUrl": "https://www.mongodb.com/docs/manual/reference/operator/query/",
      "htmlFormattedUrl": "https://www.mongodb.com/docs/manual/reference/operator/\u003cb\u003equery\u003c/b\u003e/",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ReOsnIdsn6s0Yl8uSOYYNI3wDGhXq3xpmNBHOvv4oz3_mjZRr02xiPVt",
            "width": "317",
            "height": "159"
          }
        ],
        "metatags": [
          {
            "og:image": "http://www.mongodb.com/docs/assets/meta_generic.png",
            "twitter:card": "summary_large_image",
            "twitter:title": "Query and Projection Operators",
            "twitter:image:alt": "MongoDB logo featuring a green leaf on a dark green background.",
            "twitter:site": "@mongodb",
            "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
            "release": "1.0",
            "version": "master",
            "og:image:secure_url": "https://www.mongodb.com/docs/assets/meta_generic.png",
            "twitter:image": "https://www.mongodb.com/docs/assets/meta_generic.png"
          }
        ],
        "cse_image": [
          {
            "src": "http://www.mongodb.com/docs/assets/meta_generic.png"
          }
        ],
        "sitenavigationelement": [
          {
            "name": "Database→"
          },
          {
            "name": "Enterprise Server→"
          },
          {
            "name": "Community Server→"
          },
          {
            "name": "Compass→"
          },
          {
            "name": "Financial Services→"
          },
          {
            "name": "Analytics→"
          },
          {
            "name": "Atlas→"
          },
          {
            "name": "Develop Applications→"
          },
          {
            "name": "Developer Center→"
          },
          {
            "name": "University→"
          },
          {
            "name": "Who We Are→"
          },
          {
            "name": "Consulting→"
          },
          {
            "name": "Become a Partner→"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Auction Search (Query) — TreasuryDirect",
      "htmlTitle": "Auction Search (\u003cb\u003eQuery\u003c/b\u003e) — TreasuryDirect",
      "link": "https://www.treasurydirect.gov/auctions/auction-query/",
      "displayLink": "www.treasurydirect.gov",
      "snippet": "Auction Search (Query). Announcement and Results press releases for TIPS are available from when they were first offered in 1997.",
      "htmlSnippet": "Auction Search (\u003cb\u003eQuery\u003c/b\u003e). Announcement and Results press releases for TIPS are available from when they were first offered in 1997.",
      "cacheId": "BtHcaUaZfoAJ",
      "formattedUrl": "https://www.treasurydirect.gov/auctions/auction-query/",
      "htmlFormattedUrl": "https://www.treasurydirect.gov/auctions/auction-\u003cb\u003equery\u003c/b\u003e/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "initial-scale=1"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Wikidata Query Service",
      "htmlTitle": "Wikidata \u003cb\u003eQuery\u003c/b\u003e Service",
      "link": "https://query.wikidata.org/",
      "displayLink": "query.wikidata.org",
      "snippet": "Do you need help creating a query? You can build queries without having to write SPARQL in the new Query Builder. ×. Toggle navigation.",
      "htmlSnippet": "Do you need help creating a \u003cb\u003equery\u003c/b\u003e? You can build \u003cb\u003equeries\u003c/b\u003e without having to write SPARQL in the new \u003cb\u003eQuery\u003c/b\u003e Builder. ×. Toggle navigation.",
      "cacheId": "OOM5dJauUu0J",
      "formattedUrl": "https://query.wikidata.org/",
      "htmlFormattedUrl": "https://\u003cb\u003equery\u003c/b\u003e.wikidata.org/",
      "pagemap": {
        "metatags": [
          {
            "viewport": "width=device-width,initial-scale=1,user-scalable=yes"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Query - Wikipedia",
      "htmlTitle": "\u003cb\u003eQuery\u003c/b\u003e - Wikipedia",
      "link": "https://en.wikipedia.org/wiki/Query",
      "displayLink": "en.wikipedia.org",
      "snippet": "Query language, a computer language used to make queries into databases and information systems · Query string, in the World Wide Web, is an optional part of a ...",
      "htmlSnippet": "\u003cb\u003eQuery\u003c/b\u003e language, a computer language used to make \u003cb\u003equeries\u003c/b\u003e into databases and information systems &middot; \u003cb\u003eQuery\u003c/b\u003e string, in the World Wide Web, is an optional part of a&nbsp;...",
      "cacheId": "ffx6VmI-a-4J",
      "formattedUrl": "https://en.wikipedia.org/wiki/Query",
      "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eQuery\u003c/b\u003e",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin",
            "theme-color": "#eaecf0",
            "og:type": "website",
            "viewport": "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": "Query - Wikipedia",
            "format-detection": "telephone=no"
          }
        ]
      }
    }
  ]
}
);
  ]);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
