import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

/* GET home page. */
router.get('/', function(req, res) {
  fetch('http://localhost:3000/headlines')
    .then(response => {
      return response.json();
    })
    .then(json => {
      const headlines = json.results[0].results;
      res.render('index', { headlines: headlines } );
    });
});

module.exports = router;
