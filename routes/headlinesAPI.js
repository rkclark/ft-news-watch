const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FT_API_KEY = process.env.FT_API_KEY;

const getAllQuery = {
	"queryString": "",
  "queryContext" : {
   "curations" : [ "ARTICLES"]
  },
	"resultContext" : {
		 "aspects" :[ "title","lifecycle","location","summary","editorial" ]
	}
};

router.get('/headlines', (req,res) => {
  fetch(`http://api.ft.com/content/search/v1?apiKey=${FT_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getAllQuery)
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
