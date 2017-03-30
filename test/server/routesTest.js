import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/app.js';

chai.use(chaiHttp);

describe('Routes', () => {

  describe('GET /', () => {

      it('Returns an html document', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('text/html');
              done();
            });
      });
  });

  describe('GET /search', () => {

      it('Returns an html document', (done) => {
        chai.request(server)
            .get('/search')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('text/html');
              done();
            });
      });
  });

  describe('GET /headlines', () => {

      it('Returns a JSON object containing query object and results array', (done) => {
        chai.request(server)
            .get('/headlines')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
                expect(res.body.query).to.be.a('object');
                expect(res.body.results).to.be.a('array');
              done();
            });
      });
  });

  describe('GET /headlines?q=starcraft', () => {

      it('Returns a JSON object containing query object with "starcraft" as querystring and results array', (done) => {
        chai.request(server)
            .get('/headlines?q=starcraft')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
                expect(res.body.query.queryString).to.equal('starcraft');
                expect(res.body.results).to.be.a('array');
              done();
            });
      });
  });

});
