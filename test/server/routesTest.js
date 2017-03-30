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

  describe('GET /headlines', () => {

      it('iReturns a JSON object containing query object and results array', (done) => {
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

});
