import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';
import apicache from 'apicache';
const FT_API_KEY = process.env.FT_API_KEY;

apicache.options({
  debug: true
});


const cache = apicache.middleware;


const generateSearchQuery = function(searchParam) {
	return (
		{
			"queryString": searchParam,
		  "queryContext" : {
		   "curations" : [ "ARTICLES"]
		  },
			"resultContext" : {
				 "aspects" :[ "title","lifecycle","location","summary","editorial" ]
			}
		}
	);
};

router.get('/headlines', cache('5 minutes'), (req,res) => {
	let searchParam = "";

	if (typeof req.query.q !== 'undefined') {
		searchParam = req.query.q;
	}

  fetch(`http://api.ft.com/content/search/v1?apiKey=${FT_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(generateSearchQuery(searchParam))
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      res.setHeader('Content-Type', 'application/json');
      res.send(json);
    });
});

module.exports = router;
