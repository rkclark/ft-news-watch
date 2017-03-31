import 'dotenv/config';
import { expect } from 'chai';
import { mockReq, mockRes } from 'sinon-express-mock';
import sinon from 'sinon';
import ResultsRenderer from '../../src/server/helpers/resultsRenderer';
import fetchMock from 'fetch-mock';
const DOMAIN = process.env.DOMAIN; // eslint-disable-line

describe('ResultsRenderer', function() {

  describe('Request for index page with no search', function(){
    let request;
    let req;
    let res;
    let testRenderer;
    let resultsArray;
    let json;

    beforeEach(function(){

      resultsArray = [ 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result',
                             'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result',
                             'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result',
                             'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result', 'Result'];
      json = {
        results: [
          { results: resultsArray }
        ]
      };

      request = {
          query: {
            q: 'starcraft',
            page: '2'
          }
        };

      req = mockReq(request);
      res = mockRes();

      testRenderer = new ResultsRenderer(req, res);
    });

    it('Initializes defaults', function(){
      expect(testRenderer.req).to.equal(req);
      expect(testRenderer.res).to.equal(res);
      expect(testRenderer.pageSize).to.equal(20);
      expect(testRenderer.currentPage).to.equal(1);
      expect(testRenderer.headlineResults).to.be.undefined;
      expect(testRenderer.pagesArray).to.be.empty;
      expect(testRenderer.headlinesForDisplay).to.be.empty;
      expect(testRenderer.pageCount).to.equal(1);
      expect(testRenderer.onFirstPage).to.be.true;
      expect(testRenderer.onLastPage).to.be.true;
      expect(testRenderer.searchTerm).to.be.undefined;
      expect(testRenderer.numberOfResults).to.equal(0);
    });

    describe('#renderToPage', function(){
      it('Calls res.render with index template and variables object', function(){
        testRenderer.renderToPage();
        const varObj = {
          headlines: testRenderer.headlinesForDisplay,
          pageCount: testRenderer.pageCount,
          currentPage: testRenderer.currentPage,
          onFirstPage: testRenderer.onFirstPage,
          onLastPage: testRenderer.onLastPage,
          searchTerm: testRenderer.searchTerm,
          numberOfResults: testRenderer.numberOfResults
        };
        expect(res.render.calledWith('index', varObj)).to.be.true;
      });
    });

    describe('#setSearchTerm', function(){
      it('Sets searchTerm to the value of the request query q', function(){
        testRenderer.setSearchTerm();
        expect(testRenderer.searchTerm).to.equal('starcraft');
      });

      it('Leaves searchTerm undefined if request has no q query', function(){
        testRenderer.req.query.q = void 0;
        testRenderer.setSearchTerm();
        expect(testRenderer.searchTerm).to.be.undefined;
      });
    });

    describe('#setHeadlineResults', function(){
      it('Sets headlineResults to be the results array in the JSON object', function(){
        testRenderer.setHeadlineResults(json);
        expect(testRenderer.headlineResults).to.equal(resultsArray);
      });
    });

    describe('#setNumberOfResults', function(){
      it('Sets numberOfResults to be equal to length of headlineResults array', function(){
        testRenderer.setHeadlineResults(json);
        testRenderer.setNumberOfResults();
        expect(testRenderer.numberOfResults).to.equal(40);
      });
    });

    describe('#setPagesArray', function(){
      it('Pushes spliced arrays of headlineResults into pagesArray', function(){
        testRenderer.setHeadlineResults(json);
        testRenderer.setPagesArray();
        expect(testRenderer.pagesArray[0].length).to.equal(20);
        expect(testRenderer.pagesArray[1].length).to.equal(20);
        expect(testRenderer.pagesArray[0]).to.contain('Result');
        expect(testRenderer.pagesArray[1]).to.contain('Result');
        expect(testRenderer.pagesArray[2]).to.be.undefined;
      });
    });

    describe('#setCurrentPage', function(){
      it('Sets currentPage to the value of the request query page', function(){
        testRenderer.setCurrentPage();
        expect(testRenderer.currentPage).to.equal(2);
      });

      it('Leaves currentPage as 1 if request has no page query', function(){
        testRenderer.req.query.page = void 0;
        testRenderer.setCurrentPage();
        expect(testRenderer.currentPage).to.equal(1);
      });
    });

    describe('#setHeadlinesForDisplay', function(){
      it('Sets the headlinesForDisplay array be the array in pagesArray that matches currentPage', function(){
        testRenderer.setHeadlineResults(json);
        testRenderer.setPagesArray();
        testRenderer.setCurrentPage();
        testRenderer.setHeadlinesForDisplay();
        expect(testRenderer.headlinesForDisplay).to.equal(testRenderer.pagesArray[1]);
      });
    });

    describe('#setPageCount', function(){
      it('Sets the pageCount to the length of the pagesArray', function(){
        testRenderer.setHeadlineResults(json);
        testRenderer.setPagesArray();
        testRenderer.setPageCount();
        expect(testRenderer.pageCount).to.equal(2);
      });
    });

    describe('#setOnFirstPage', function(){
      it('Sets onFirstPage to true if currentPage === 1', function(){
        testRenderer.setOnFirstPage();
        expect(testRenderer.onFirstPage).to.be.true;
      });
      it('Sets onFirstPage to false if currentPage != 1', function(){
        testRenderer.currentPage = 3;
        testRenderer.setOnFirstPage();
        expect(testRenderer.onFirstPage).to.be.false;
      });
    });

    describe('#setOnLastPage', function(){
      it('Sets onLastPage to true if currentPage === pagesArray length', function(){
        testRenderer.pagesArray = ['1', '2'];
        testRenderer.currentPage = 2;
        testRenderer.setOnLastPage();
        expect(testRenderer.onLastPage).to.be.true;
      });
      it('Sets onLastPage to false if currentPage != pagesArray length', function(){
        testRenderer.setOnLastPage();
        expect(testRenderer.onLastPage).to.be.false;
      });
    });

    describe('#getApiUrl', function(){
      it('Returns API url including search term if searchTerm is defined', function(){
        testRenderer.searchTerm = 'starcraft';
        expect(testRenderer.getApiUrl()).to.equal(`http://${DOMAIN}/headlines?q=${testRenderer.searchTerm}`);
      });
      it('Returns API url without search term if searchTerm is undefined', function(){
        testRenderer.searchTerm = void 0;
        expect(testRenderer.getApiUrl()).to.equal(`http://${DOMAIN}/headlines`);
      });
    });

    describe('#render', function(){

      let url;
      let sandbox;

      const jsonNoResults = {
        results: [
          { indexCount: 0 }
        ]
      };

      beforeEach(function(){
        sandbox = sinon.sandbox.create();

        sandbox.spy(ResultsRenderer.prototype, 'setSearchTerm');
        sandbox.spy(ResultsRenderer.prototype, 'getApiUrl');
        sandbox.spy(ResultsRenderer.prototype, 'renderToPage');
        sandbox.spy(ResultsRenderer.prototype, 'setHeadlineResults');
        sandbox.spy(ResultsRenderer.prototype, 'setNumberOfResults');
        sandbox.spy(ResultsRenderer.prototype, 'setPagesArray');
        sandbox.spy(ResultsRenderer.prototype, 'setCurrentPage');
        sandbox.spy(ResultsRenderer.prototype, 'setHeadlinesForDisplay');
        sandbox.spy(ResultsRenderer.prototype, 'setPageCount');
        sandbox.spy(ResultsRenderer.prototype, 'setOnFirstPage');
        sandbox.spy(ResultsRenderer.prototype, 'setOnLastPage');
        testRenderer.searchTerm = 'starcraft';
        url = testRenderer.getApiUrl();
        fetchMock.mock(url, json);
      });

      afterEach(function() {
        fetchMock.restore();
        sandbox.restore();
      });

      it('Calls #setSearchTerm', function(){
        testRenderer.render();
        expect(testRenderer.setSearchTerm.callCount).to.equal(1);
      });

      it('Calls #getApiUrl', function(){
        testRenderer.render();
        expect(testRenderer.getApiUrl.callCount).to.equal(2);
      });

      it('Makes a fetch call to the url from getApiUrl', function(){
        testRenderer.render();
        expect(fetchMock.called(url)).to.be.true;
      });

      it('Calls only #renderToPage when there are no results in returned JSON', function() {
        fetchMock.restore();
        fetchMock.mock(url, jsonNoResults);
        testRenderer.render();
        setTimeout(() => {
          sinon.assert.calledOnce(testRenderer.renderToPage);
          sinon.assert.notCalled(testRenderer.setHeadlineResults);
        }, 1000);
      });

      it('Calls #renderToPage and all setup functions when results in returned JSON', function() {
        testRenderer.render();
        setTimeout(() => {
          sinon.assert.calledOnce(testRenderer.setHeadlineResults);
          sinon.assert.calledOnce(testRenderer.setNumberOfResults);
          sinon.assert.calledOnce(testRenderer.setPagesArray);
          sinon.assert.calledOnce(testRenderer.setCurrentPage);
          sinon.assert.calledOnce(testRenderer.setHeadlinesForDisplay);
          sinon.assert.calledOnce(testRenderer.setPageCount);
          sinon.assert.calledOnce(testRenderer.setOnFirstPage);
          sinon.assert.calledOnce(testRenderer.setOnLastPage);
          sinon.assert.calledOnce(testRenderer.renderToPage);
        }, 1000);
      });
    });
  });
});
