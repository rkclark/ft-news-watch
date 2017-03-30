import { expect } from 'chai';

describe('Search Summary', function() {

  describe('On / route', function() {

    it('Displays the number of latest articles being shown', function() {
      browser.url('http://localhost:3000');
      expect($('.nw-search-summary').getText()).to.contain('100 latest articles from the FT');
    });
  });

  describe('On /search route', function() {

    it('Displays the number of search results and the search term', function() {
      browser.url('http://localhost:3000/search?q=trump');
      expect($('.nw-search-summary').getText()).to.contain('100 results for "trump"');
    });

    it('Displays a message if search returns no results', function() {
      browser.url('http://localhost:3000/search?q=kjglkhjsklgjhaelkhjgkhjakjhdgjs');
      expect($('.nw-search-summary').getText()).to.contain('0 results for');
    });
  });
});
