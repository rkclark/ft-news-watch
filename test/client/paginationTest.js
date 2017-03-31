import { expect } from 'chai';

describe('Headline pagination', function() {

  it('Displays 20 headlines in o-card components per page', function () {
      browser.url('http://localhost:3000');
      let headlines = browser.elements('.o-card');
      expect(headlines.value.length === 20).to.be.true;
      browser.url('http://localhost:3000/?page=2');
      headlines = browser.elements('.o-card');
      expect(headlines.value.length === 20).to.be.true;
  });

  describe('Pagination summary', function() {
    it('Shows "Page 1 of 5" when on first page', function(){
        browser.url('http://localhost:3000');
        expect($('.nw-page-count span').getText()).to.equal('Page 1 of 5');
    });

    it('Shows "Page 2 of 5" when on second page', function(){
        browser.url('http://localhost:3000/?page=2');
        expect($('.nw-page-count span').getText()).to.equal('Page 2 of 5');
    });

    it('Shows "Page 3 of 5" when on second page', function(){
        browser.url('http://localhost:3000/?page=3');
        expect($('.nw-page-count span').getText()).to.equal('Page 3 of 5');
    });

    it('Shows "Page 4 of 5" when on second page', function(){
        browser.url('http://localhost:3000/?page=4');
        expect($('.nw-page-count span').getText()).to.equal('Page 4 of 5');
    });

    it('Shows "Page 5 of 5" when on second page', function(){
        browser.url('http://localhost:3000/?page=5');
        expect($('.nw-page-count span').getText()).to.equal('Page 5 of 5');
    });
  });

  describe('Pagination arrows for / route', function() {

    it('Disables left arrow and enables right arrow when on page 1', function(){
        browser.url('http://localhost:3000');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.equal('true');
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
    });

    it('Enables both arrows when on page 2', function(){
        browser.url('http://localhost:3000/?page=2');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
    });

    it('Disables right arrow and enables left arrow when on last page', function(){
        browser.url('http://localhost:3000/?page=5');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.equal('true');
    });

    it('Navigates to next page of results on clicking right arrow', function() {
      browser.url('http://localhost:3000');
      browser.click('.o-buttons-icon--arrow-right');
      expect(browser.getUrl()).to.contain('/?page=2');
    });

    it('Navigates to previous page of results on clicking left arrow', function() {
      browser.url('http://localhost:3000/?page=3');
      browser.click('.o-buttons-icon--arrow-left');
      expect(browser.getUrl()).to.contain('/?page=2');
    });

  });

  describe('Pagination arrows for /search route', function() {

    it('Disables left arrow and enables right arrow when on page 1', function(){
        browser.url('http://localhost:3000/search?q=myanmar');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.equal('true');
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
    });

    it('Enables both arrows when on page 2', function(){
        browser.url('http://localhost:3000/search?q=myanmar&page=2');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.be.null;
    });

    it('Disables right arrow and enables left arrow when on last page', function(){
        browser.url('http://localhost:3000/search?q=myanmar&page=5');
        expect(browser.getAttribute('.o-buttons-icon--arrow-left', 'disabled')).to.be.null;
        expect(browser.getAttribute('.o-buttons-icon--arrow-right', 'disabled')).to.equal('true');
    });

    it('Navigates to next page of search results on clicking right arrow', function() {
      browser.url('http://localhost:3000/search?q=myanmar');
      browser.click('.o-buttons-icon--arrow-right');
      expect(browser.getUrl()).to.contain('/search?q=myanmar&page=2');
    });

    it('Navigates to previous page of search results on clicking left arrow', function() {
      browser.url('http://localhost:3000/search?q=myanmar&page=3');
      browser.click('.o-buttons-icon--arrow-left');
      expect(browser.getUrl()).to.contain('/search?q=myanmar&page=2');
    });

  });

  describe('Pagination buttons for / route', function() {

    it('Highlights only the button denoting the current page of results', function() {
      browser.url('http://localhost:3000');
      expect(browser.getAttribute('.o-buttons__pagination a:nth-child(2)', 'aria-selected')).to.equal('true');
      expect(browser.getAttribute('.o-buttons__pagination a:nth-child(3)', 'aria-selected')).to.be.null;
    });

    it('Navigates to correct page of results on click', function() {
      browser.url('http://localhost:3000');
      browser.click('.o-buttons__pagination a:nth-child(3)');
      expect(browser.getUrl()).to.contain('/?page=2');
      browser.click('.o-buttons__pagination a:nth-child(4)');
      expect(browser.getUrl()).to.contain('/?page=3');
    });

  });

  describe('Pagination buttons for /search route', function() {

    it('Highlights only the button denoting the current page of search results', function() {
      browser.url('http://localhost:3000/search?q=myanmar');
      expect(browser.getAttribute('.o-buttons__pagination a:nth-child(2)', 'aria-selected')).to.equal('true');
      expect(browser.getAttribute('.o-buttons__pagination a:nth-child(3)', 'aria-selected')).to.be.null;
    });

    it('Navigates to correct page of search results on click', function() {
      browser.url('http://localhost:3000/search?q=myanmar');
      browser.click('.o-buttons__pagination a:nth-child(3)');
      expect(browser.getUrl()).to.contain('/search?q=myanmar&page=2');
      browser.click('.o-buttons__pagination a:nth-child(4)');
      expect(browser.getUrl()).to.contain('/search?q=myanmar&page=3');
    });

  });
});
