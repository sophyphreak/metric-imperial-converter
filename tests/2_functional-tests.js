const expect = require('expect');
const request = require('supertest');
const server = require('../server');

describe('Functional Tests', () => {

  describe('Routing Tests', () => {
    
    describe('GET /api/convert => conversion object', () => {
      
      it('should convert 10L (valid input)', (done) => {
       // Still in chai language
        request(server)
        .get('/api/convert')// need to change this
        .query({input: '10L'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      
      it('should convert 32g (invalid input unit)', (done) => {
        
        //done();
      });
      
      it('should convert 3/7.2/4kg (invalid number)', (done) => {
        
        //done();
      });  
      
      it('should convert 3/7.2/4kilomegagram (invalid number and unit)', (done) => {
        
        //done();
      });
      
      it('should convert kg (no number)', (done) => {
        
        //done();
      });
    });
  });
});
