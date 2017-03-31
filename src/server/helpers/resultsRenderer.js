import 'isomorphic-fetch';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line

function ResultsRenderer(req, res) {

  this.req = req;
  this.res = res;
  this.pageSize = 20;
  this.currentPage = 1;
  this.headlineResults;
  this.pagesArray = [];
  this.headlinesForDisplay = [];
  this.pageCount = 1;
  this.onFirstPage = true;
  this.onLastPage = true;
  this.searchTerm;
  this.numberOfResults = 0;
}

const r = ResultsRenderer.prototype;

r.renderToPage = function() {
  this.res.render('index', {
    headlines: this.headlinesForDisplay,
    pageCount: this.pageCount,
    currentPage: this.currentPage,
    onFirstPage: this.onFirstPage,
    onLastPage: this.onLastPage,
    searchTerm: this.searchTerm,
    numberOfResults: this.numberOfResults
  });
};

r.setSearchTerm = function() {
  if (typeof this.req.query.q !== 'undefined') {
    this.searchTerm = this.req.query.q;
  }
};

r.setHeadlineResults = function(json) {
  this.headlineResults = json.results[0].results;
};

r.setNumberOfResults = function() {
  this.numberOfResults = this.headlineResults.length;
};

r.setPagesArray = function() {
  while (this.headlineResults.length > 0) {
    this.pagesArray.push(this.headlineResults.splice(0, this.pageSize));
  }
};

r.setCurrentPage = function() {
  if (typeof this.req.query.page !== 'undefined') {
    this.currentPage = +this.req.query.page;
  }
};

r.setHeadlinesForDisplay = function() {
  this.headlinesForDisplay = this.pagesArray[this.currentPage - 1];
};

r.setPageCount = function() {
  this.pageCount = this.pagesArray.length;
};

r.setOnFirstPage = function() {
  this.onFirstPage = this.currentPage === 1 ? true : false;
};

r.setOnLastPage = function() {
  this.onLastPage = this.currentPage === this.pagesArray.length ? true : false;
};

r.getApiUrl = function() {
  return this.searchTerm ? `http://${DOMAIN}/headlines?q=${this.searchTerm}` : `http://${DOMAIN}/headlines`;
};

r.render = function() {

  this.setSearchTerm();
  fetch(this.getApiUrl())
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.results[0].indexCount === 0) {
        //If no results, render index page with default variables
        this.renderToPage();
      } else {
        // Set up variables for rendering
        this.setHeadlineResults(json);
        this.setNumberOfResults();
        this.setPagesArray();
        this.setCurrentPage();
        this.setHeadlinesForDisplay();
        this.setPageCount();
        this.setOnFirstPage();
        this.setOnLastPage();

        //Render index page
        this.renderToPage();
      }
    });
};


module.exports = ResultsRenderer;
