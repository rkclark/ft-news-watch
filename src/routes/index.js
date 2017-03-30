import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

/* GET home page. */
router.get('/', function(req, res) {

  const pageSize = 20;
  let currentPage = 1;
  const headlinesArrays = [];
  let headlinesList = [];
  let pageCount;
  let onFirstPage;
  let onLastPage;
  let numberOfResults;

  fetch('http://localhost:3000/headlines')
    .then(response => {
      return response.json();
    })
    .then(json => {
      const headlines = json.results[0].results;
      numberOfResults = headlines.length;

      while (headlines.length > 0) {
        headlinesArrays.push(headlines.splice(0, pageSize));
      }

      if (typeof req.query.page !== 'undefined') {
        currentPage = +req.query.page;
      }

      headlinesList = headlinesArrays[currentPage - 1];
      pageCount = headlinesArrays.length;
      onFirstPage = currentPage === 1 ? true : false;
      onLastPage = currentPage === headlinesArrays.length ? true : false;

      res.render('index', {
        headlines: headlinesList,
        pageCount: pageCount,
        currentPage: currentPage,
        onFirstPage: onFirstPage,
        onLastPage: onLastPage,
        searchTerm: false,
        numberOfResults: numberOfResults
      });
    });
});

module.exports = router;
