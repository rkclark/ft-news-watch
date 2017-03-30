import express from 'express';
const router = express.Router();
import fetch from 'node-fetch';

/* GET home page. */
router.get('/', function(req, res) {

  const pageSize = 20;
  let currentPage = 1;
  let headlines;
  const headlinesArrays = [];
  let headlinesList = [];
  let pageCount = 1;
  let onFirstPage = true;
  let onLastPage = true;
  let searchTerm;
  let numberOfResults = 0;

  fetch(searchTerm ? `http://localhost:3000/headlines?q=${searchTerm}` : 'http://localhost:3000/headlines')
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.results[0].indexCount === 0) {
        //If no results
        res.render('index', {
          headlines: headlinesList,
          pageCount: pageCount,
          currentPage: currentPage,
          onFirstPage: onFirstPage,
          onLastPage: onLastPage,
          searchTerm: searchTerm,
          numberOfResults: numberOfResults
        });
      } else {
        headlines = json.results[0].results;
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
          searchTerm: searchTerm,
          numberOfResults: numberOfResults
        });
      }
    });
});

module.exports = router;
